"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5345],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},y="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),y=p(n),c=r,k=y["".concat(o,".").concat(c)]||y[c]||u[c]||i;return n?l.createElement(k,a(a({ref:e},d),{},{components:n})):l.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[y]="string"==typeof t?t:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37482:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const i={},a="Get Children By Frontend Id",s={type:"api",id:"get-children-by-frontend-id",unversionedId:"get-children-by-frontend-id",title:"Get Children By Frontend Id",description:"",slug:"/get-children-by-frontend-id",frontMatter:{},api:{tags:["frontend_messages"],description:"Get all messages belonging to the same message tree.",operationId:"get_children_by_frontend_id_api_v1_frontend_messages__message_id__children_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Get Children By Frontend Id Api V1 Frontend Messages  Message Id  Children Get",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"},review_result:{title:"Review Result",type:"boolean"},review_count:{title:"Review Count",type:"integer"}},description:"Represents a message in a conversation between the user and the assistant."}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/frontend_messages/{message_id}/children",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Children By Frontend Id",description:{content:"Get all messages belonging to the same message tree.",type:"text/plain"},url:{path:["api","v1","frontend_messages",":message_id","children"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-children-by-frontend-id",previous:{title:"Get Tree By Frontend Id",permalink:"/Open-Assistant/api/get-tree-by-frontend-id"},next:{title:"Get Descendants By Frontend Id",permalink:"/Open-Assistant/api/get-descendants-by-frontend-id"}},o=[],p={toc:o},d="wrapper";function y(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-children-by-frontend-id"},"Get Children By Frontend Id"),(0,r.kt)("p",null,"Get all messages belonging to the same message tree."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message Id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"frontend_message_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lang"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lang"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"parent_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Result"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Count")))))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}y.isMDXComponent=!0}}]);