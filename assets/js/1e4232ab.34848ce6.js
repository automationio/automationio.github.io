(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(110)),i={sidebar_position:2},c={unversionedId:"tutorial-basics/create-a-document",id:"tutorial-basics/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/docs/tutorial-basics/create-a-document",editUrl:"https://github.com/automationio/automationio.github.io/docs/tutorial-basics/create-a-document.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/docs/tutorial-basics/create-a-blog-post"}},l=[{value:"Create your first Doc",id:"create-your-first-doc",children:[]},{value:"Configure the Sidebar",id:"configure-the-sidebar",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Documents are ",Object(o.b)("strong",{parentName:"p"},"groups of pages")," connected through:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("strong",{parentName:"li"},"sidebar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"previous/next navigation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"versioning"))),Object(o.b)("h2",{id:"create-your-first-doc"},"Create your first Doc"),Object(o.b)("p",null,"Create a markdown file at ",Object(o.b)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),Object(o.b)("p",null,"A new document is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),Object(o.b)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),Object(o.b)("p",null,"Docusaurus automatically ",Object(o.b)("strong",{parentName:"p"},"creates a sidebar")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," folder."),Object(o.b)("p",null,"Add metadatas to customize the sidebar label and position:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},'+ ---\n+ sidebar_label: "Hi!"\n+ sidebar_position: 3\n+ ---\n\n\n# Hello\n\nThis is my **first Docusaurus document**!\n')),Object(o.b)("p",null,"It is also possible to create your sidebar explicitly in ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n")))}u.isMDXComponent=!0}}]);