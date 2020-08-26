/*! For license information please see 5eb2665f.c6815b3c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),b=(a(781),a(780)),c={id:"_knexdbdataprovider_.knexdbdataprovider",title:"KnexDBDataProvider",sidebar_label:"KnexDBDataProvider"},p={unversionedId:"api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",id:"api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",isDocsHomePage:!1,title:"KnexDBDataProvider",description:"Knex.js database data provider exposing basic CRUD operations that works with all databases that knex supports.",source:"@site/../docs/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider.md",permalink:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider.md",version:"next",sidebar_label:"KnexDBDataProvider",sidebar:"docs",previous:{title:"createKnexDbProvider",permalink:"/docs/next/api/graphback-runtime-knex/modules/_createknexdbprovider_"},next:{title:"SQLiteKnexDBDataProvider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]},{value:"<code>Protected</code> tableName",id:"protected-tablename",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Protected</code> getSelectedFields",id:"protected-getselectedfields",children:[]},{value:"update",id:"update",children:[]},{value:"<code>Private</code> usePage",id:"private-usepage",children:[]}]}],i={rightToc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Knex.js database data provider exposing basic CRUD operations that works with all databases that knex supports.\nLayer is tested with following databases:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"SQLite (by ",Object(b.b)("inlineCode",{parentName:"li"},"SQLiteKnexDBDataProvider"),")"),Object(b.b)("li",{parentName:"ul"},"MySQL (MariaDB)"),Object(b.b)("li",{parentName:"ul"},"Postgres")),Object(b.b)("p",null,"NOTE: For SQLite use dedicated ",Object(b.b)("inlineCode",{parentName:"p"},"SQLiteKnexDBDataProvider")," that implements more speficic creation method to avoid the not supported ",Object(b.b)("inlineCode",{parentName:"p"},"returning()"),"\nstatement."),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"KnexDBDataProvider")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-db"}),"db")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablemap"}),"tableMap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablename"}),"tableName"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#batchread"}),"batchRead")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#count"}),"count")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-getselectedfields"}),"getSelectedFields")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#update"}),"update")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#private-usepage"}),"usePage"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new KnexDBDataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"db"),": Knex): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"}),"KnexDBDataProvider.ts:20"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"db")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Knex")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-db"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"db"),": ",Object(b.b)("em",{parentName:"p"},"Knex")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L18"}),"KnexDBDataProvider.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablemap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableMap"),": ",Object(b.b)("em",{parentName:"p"},"ModelTableMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"}),"KnexDBDataProvider.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablename"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L19"}),"KnexDBDataProvider.ts:19"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchread"},"batchRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L101"}),"KnexDBDataProvider.ts:101"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ids")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": any): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L94"}),"KnexDBDataProvider.ts:94"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L28"}),"KnexDBDataProvider.ts:28"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L54"}),"KnexDBDataProvider.ts:54"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": QueryFilter\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage, ",Object(b.b)("inlineCode",{parentName:"p"},"orderBy?"),": GraphbackOrderBy): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L78"}),"KnexDBDataProvider.ts:78"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"page?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"orderBy?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackOrderBy")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L67"}),"KnexDBDataProvider.ts:67"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-getselectedfields"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," getSelectedFields"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSelectedFields"),"(",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L118"}),"KnexDBDataProvider.ts:118"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L38"}),"KnexDBDataProvider.ts:38"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-usepage"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," usePage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"usePage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": QueryBuilder, ",Object(b.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage): ",Object(b.b)("em",{parentName:"p"},"QueryBuilder\u2039any, any\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/886526b/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L124"}),"KnexDBDataProvider.ts:124"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryBuilder")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"page?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"QueryBuilder\u2039any, any\u203a")))}o.isMDXComponent=!0},780:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,O=d["".concat(c,".").concat(m)]||d[m]||u[m]||b;return a?n.a.createElement(O,p(p({ref:t},i),{},{components:a})):n.a.createElement(O,p({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},781:function(e,t,a){"use strict";e.exports=a(782)},782:function(e,t,a){"use strict";var r=a(783),n="function"==typeof Symbol&&Symbol.for,b=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,p=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,O=n?Symbol.for("react.memo"):60115,j=n?Symbol.for("react.lazy"):60116,s="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N={};function g(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}function y(){}function x(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var k=x.prototype=new y;k.constructor=x,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},P=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,a){var r,n={},c=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,r)&&!D.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var i=Array(l),o=0;o<l;o++)i[o]=arguments[o+2];n.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:b,type:e,key:c,ref:p,props:n,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}var w=/\/+/g,B=[];function T(e,t,a,r){if(B.length){var n=B.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function S(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>B.length&&B.push(e)}function K(e,t,a){return null==e?0:function e(t,a,r,n){var p=typeof t;"undefined"!==p&&"boolean"!==p||(t=null);var l=!1;if(null===t)l=!0;else switch(p){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case b:case c:l=!0}}if(l)return r(n,t,""===a?"."+R(t,0):a),1;if(l=0,a=""===a?".":a+":",Array.isArray(t))for(var i=0;i<t.length;i++){var o=a+R(p=t[i],i);l+=e(p,o,r,n)}else if(null===t||"object"!=typeof t?o=null:o="function"==typeof(o=s&&t[s]||t["@@iterator"])?o:null,"function"==typeof o)for(t=o.call(t),i=0;!(p=t.next()).done;)l+=e(p=p.value,o=a+R(p,i++),r,n);else if("object"===p)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,a)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function E(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,a,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(w,"$&/")+"/")+a)),r.push(e))}function M(e,t,a,r,n){var b="";null!=a&&(b=(""+a).replace(w,"$&/")+"/"),K(e,L,t=T(t,b,r,n)),S(t)}var $={current:null};function G(){var e=$.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return M(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;K(e,E,t=T(null,null,t,a)),S(t)},count:function(e){return K(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=p,t.Profiler=i,t.PureComponent=x,t.StrictMode=l,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),c=e.key,p=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,l=v.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(o in t)P.call(t,o)&&!D.hasOwnProperty(o)&&(n[o]=void 0===t[o]&&void 0!==i?i[o]:t[o])}var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){i=Array(o);for(var d=0;d<o;d++)i[d]=arguments[d+2];n.children=i}return{$$typeof:b,type:e.type,key:c,ref:p,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:O,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return G().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,a){return G().useReducer(e,t,a)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="16.13.1"},783:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,p,l=c(e),i=1;i<arguments.length;i++){for(var o in a=Object(arguments[i]))n.call(a,o)&&(l[o]=a[o]);if(r){p=r(a);for(var d=0;d<p.length;d++)b.call(a,p[d])&&(l[p[d]]=a[p[d]])}}return l}}}]);