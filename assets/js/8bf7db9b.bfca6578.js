(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[4668],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return h}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),h=n,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return t?o.createElement(d,s(s({ref:r},p),{},{components:t})):o.createElement(d,s({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return m}});var o=t(2122),n=t(9756),a=(t(7294),t(3905)),s={id:"mocks",title:"Using GraphQL Scalars Mocks",sidebar_label:"Mocks"},l=void 0,c={unversionedId:"usage/mocks",id:"usage/mocks",isDocsHomePage:!1,title:"Using GraphQL Scalars Mocks",description:"GraphQL Scalars provides mock implementations out-of-box that is compatible with GraphQL Tools Mocking. It can be used with ApolloServer like below as well.",source:"@site/docs/usage/mocks.md",sourceDirName:"usage",slug:"/usage/mocks",permalink:"/docs/usage/mocks",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/usage/mocks.md",version:"current",frontMatter:{id:"mocks",title:"Using GraphQL Scalars Mocks",sidebar_label:"Mocks"},sidebar:"sidebar",previous:{title:"Apollo Server",permalink:"/docs/usage/apollo-server"},next:{title:"Generate your own scalars from regular expressions",permalink:"/docs/usage/regex"}},i=[{value:"Using mocks with GraphQL Tools",id:"using-mocks-with-graphql-tools",children:[]},{value:"Using mocks with Apollo Server",id:"using-mocks-with-apollo-server",children:[]}],p={toc:i};function m(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Scalars provides mock implementations out-of-box that is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://www.graphql-tools.com/docs/mocking"},"GraphQL Tools Mocking"),". It can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"ApolloServer")," like below as well."),(0,a.kt)("h3",{id:"using-mocks-with-graphql-tools"},"Using mocks with GraphQL Tools"),(0,a.kt)("h4",{id:"import-all-scalars-with-all-mocks"},"Import all scalars with all mocks"),(0,a.kt)("p",null,"This example imports all scalars to the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { addMocksToSchema } from '@graphql-tools/mock';\nimport { typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers, mocks: scalarsMocks } from 'graphql-scalars';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    ...scalarsTypeDefs,\n    // all other typeDefs\n  ],\n  resolvers: {\n    ...scalarsResolvers,\n    // all other resolvers\n  },\n});\n\nconst mockedSchema = addMocksToSchema({\n  schema,\n  mocks: {\n    ...scalarsMocks,\n    // other mocks\n  }\n});\n")),(0,a.kt)("h4",{id:"import-individual-scalars-with-their-own-mocks"},"Import individual scalars with their own mocks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { addMocksToSchema } from '@graphql-tools/mock';\nimport { DateTimeTypeDefinition, DateTimeResolver, DateTimeMock } from 'graphql-scalars';\n\nconst schema = makeExecutableSchema({\n  typeDefs: [\n    DateTimeTypeDefinition,\n    // all other typeDefs\n  ],\n  resolvers: {\n    DateTime: DateTimeResolver\n  },\n});\n\nconst mockedSchema = addMocksToSchema({\n  schema,\n  mocks: {\n    DateTime: DateTimeMock\n  }\n});\n")),(0,a.kt)("h3",{id:"using-mocks-with-apollo-server"},"Using mocks with Apollo Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ApolloServer } from 'apollo-server';\nimport { makeExecutableSchema } from '@graphql-tools/schema';\n// import all scalars and resolvers\nimport { typeDefs, resolvers, mocks } from 'graphql-scalars';\n// Alternatively, import individual scalars and resolvers\n// import { DateTimeResolver, DateTimeTypeDefinition, DateTimeMock, ... } from \"graphql-scalars\"\n\nconst server = new ApolloServer({\n  typeDefs: [\n    // use spread syntax to add scalar definitions to your schema\n    ...typeDefs,\n    // DateTimeTypeDefinition,\n    // ...\n    // ... other type definitions ...\n  ],\n  resolvers: {\n    // use spread syntax to add scalar resolvers to your resolver map\n    ...resolvers,\n    // DateTimeResolver,\n    // ...\n    // ... remainder of resolver map ...\n  },\n  mocks: {\n    // use spread syntax to add scalar resolvers to your resolver map\n    ...mocks,\n    // DateTimeMock,\n    // ...\n    // ... other mocks ...\n  },\n});\n")))}m.isMDXComponent=!0}}]);