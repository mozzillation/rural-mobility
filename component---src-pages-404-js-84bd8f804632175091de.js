(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),i=a("q1tI"),r=a.n(i),l=(a("tUrg"),a("HtOF")),o=a("Wbzz"),s=function(e){var t=e.open,a=e.setOpen;return r.a.createElement("div",{open:t,onClick:function(){return a(!t)},role:"link",tabIndex:"0",className:t?"header__sidebarButton is-open":"header__sidebarButton"},r.a.createElement("i",{className:"header__sidebarButton_bar"}),r.a.createElement("i",{className:"header__sidebarButton_bar"}))},c=function(e){var t=e.open,a=e.links,n=e.docs;return r.a.createElement("nav",{open:t,className:t?"header__mobileNav is-open":"header__mobileNav"},a.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title),0===t?r.a.createElement("ul",{className:"header__mobileNav_item_sub"},n.map((function(e,t){return r.a.createElement("div",{className:"header__mobileNav_item_sub_group",key:e.id},r.a.createElement("span",{className:"header__mobileNav_item_sub_group_title"},e.title),r.a.createElement("ul",{className:"header__mobileNav_item_sub_group_sub"},e.items.map((function(e,t){return r.a.createElement("li",{className:"header__mobileNav_item_sub_group_sub_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active"},e.title))}))))}))):null)})))},m=a("jq+2"),d=a.n(m),u=function(e){var t=e.siteTitle,a=Object(i.useState)(!1),n=a[0],m=a[1],u=l.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(o.Link,{to:"/"},r.a.createElement("img",{src:d.a,alt:t}))),r.a.createElement("div",{className:"header__hamburger"},r.a.createElement(s,{open:n,setOpen:m})),r.a.createElement("nav",{className:"header__nav"},u.allHeaderNavYaml.nodes[0].items.map((function(e,t){return r.a.createElement("li",{className:"header__nav_item",key:t},r.a.createElement(o.Link,{to:e.link,activeClassName:"is-active",partiallyActive:!0},e.title))}))),r.a.createElement("div",{className:"header__contribute"},r.a.createElement(o.Link,{to:"/contribute",activeClassName:"is-active",className:"btn-small btn-secondary_purple"},"Contribuisci")))),r.a.createElement(c,{open:n,setOpen:m,links:u.allHeaderNavYaml.nodes[0].items,docs:u.allSidebarNavYaml.nodes}))};u.defaultProps={siteTitle:""};var p=u;t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("main",{className:"content"},t))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework","description":"RMF è un framework open-source che aiuta le aziende di trasporto pubblico a migliorare l\'esperienza di mobilità nelle zone emarginate.","author":"@mozzillation"}}}}')},HtOF:function(e){e.exports=JSON.parse('{"data":{"allHeaderNavYaml":{"nodes":[{"id":"af222891-9372-5e0f-ade4-bdfca8c9f59d","items":[{"link":"/doc/","title":"Documentazione"},{"link":"/about","title":"Il Progetto"},{"link":"/resources","title":"Risorse"}]}]},"allSidebarNavYaml":{"nodes":[{"id":"8248f216-94dd-55dd-b1af-efa652ce0d3a","title":"Introduzione","items":[{"title":"Una nuova ruralità in movimento","link":"/doc/"}]},{"id":"6e832fa3-4040-559e-9c47-9cccc6e56d52","title":"Soluzioni Smart","items":[{"title":"Segnaletica digitale","link":"/doc/real-time-data"}]},{"id":"9cc6e58b-5477-5b12-9420-4bc8d4935a04","title":"Contribuire","items":[{"title":"Codice di Condotta","link":"/doc/code-of-conduct"}]}]}}}')},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rural Mobility Framework"}}}}')},"jq+2":function(e,t,a){e.exports=a.p+"static/rmf_logo-dff938a541f4915ee2654e1809833883.svg"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrFN:function(e,t,a){"use strict";var n=a("EH9Q"),i=a("q1tI"),r=a.n(i),l=a("rid2");function o(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return r.a.createElement(l.HelmetProvider,null,r.a.createElement(l.Helmet,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s — "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)}))}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Bl7J"),l=a("vrFN");t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-84bd8f804632175091de.js.map