(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[9204],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(b,i(i({ref:r},l),{},{components:t})):n.createElement(b,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8060:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"phone-number",title:"PhoneNumber",sidebar_label:"PhoneNumber"},c=void 0,s={unversionedId:"scalars/phone-number",id:"scalars/phone-number",isDocsHomePage:!1,title:"PhoneNumber",description:"A field whose value conforms to the standard E.164 format as specified in",source:"@site/docs/scalars/phone-number.md",sourceDirName:"scalars",slug:"/scalars/phone-number",permalink:"/docs/scalars/phone-number",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/phone-number.md",version:"current",frontMatter:{id:"phone-number",title:"PhoneNumber",sidebar_label:"PhoneNumber"},sidebar:"sidebar",previous:{title:"ObjectID",permalink:"/docs/scalars/object-id"},next:{title:"Port",permalink:"/docs/scalars/port"}},p=[],l={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A field whose value conforms to the standard E.164 format as specified in\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/E.164"},"E.164 specification"),". Basically this is ",(0,o.kt)("inlineCode",{parentName:"p"},"+17895551234"),".\nThe very powerful\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/googlei18n/libphonenumber"},(0,o.kt)("inlineCode",{parentName:"a"},"libphonenumber")," library")," is available to take\n",(0,o.kt)("em",{parentName:"p"},"that")," format, parse and display it in whatever display format you want. It can also be used to\nparse user input and ",(0,o.kt)("em",{parentName:"p"},"get")," the E.164 format to pass ",(0,o.kt)("em",{parentName:"p"},"into")," a schema."))}u.isMDXComponent=!0}}]);