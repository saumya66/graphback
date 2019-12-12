import { gql } from 'apollo-server-core';
import {
  GraphQLBackendCreator,
  PgKnexDBDataProvider,
  applyGeneratorDirectives,
} from 'graphback';
import { migrate } from 'graphql-migrations';
import { PubSub } from 'graphql-subscriptions';
import { makeExecutableSchema } from 'graphql-tools';
import * as Knex from 'knex';
import * as jsonConfig from '../graphback.json'
import { loadSchema } from './loadSchema';

/**
 * Method used to create runtime schema
 * It will be part of of the integration tests
 */
export const createRuntime = async (client: Knex) => {
  const schemaText = loadSchema(jsonConfig.folders.model);
  const schemaWithDirectives = applyGeneratorDirectives(schemaText);

  const backend = new GraphQLBackendCreator(schemaText, jsonConfig.graphqlCRUD);
  const dbClientProvider = new PgKnexDBDataProvider(client);

  const dbConfig = {
    client: jsonConfig.db.database,
    connection: jsonConfig.db.dbConfig
  };

  migrate(dbConfig, schemaWithDirectives).then((ops) => {
    console.log(ops);
  });

  const pubSub = new PubSub();
  const runtime = await backend.createRuntime(dbClientProvider, pubSub);
  const generatedSchema = runtime.schema;

  const executableSchema = makeExecutableSchema({
    typeDefs: gql`${generatedSchema}`,
    resolvers: runtime.resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });
  return executableSchema;
}