(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(122),s=t(126),l=(t(124),t(120)),o=t(123),i=t(92),m=t.n(i),d=(t(93),t(152)),u=t(153),f=t(130),p=t(2),b=t(6),v=t(119),y=t.n(v),g=t(121),x=t(133),E=t(131),h=n.a.createContext(null);h.displayName="CardContext";var j=h,O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.variant,s=e.as,l=void 0===s?"img":s,o=Object(b.a)(e,["bsPrefix","className","variant","as"]),i=Object(g.a)(t,"card-img");return n.a.createElement(l,Object(p.a)({ref:a,className:y()(c?i+"-"+c:i,r)},o))}));O.displayName="CardImg",O.defaultProps={variant:null};var N=O,w=Object(E.a)("h5"),P=Object(E.a)("h6"),C=Object(x.a)("card-body"),k=Object(x.a)("card-title",{Component:w}),T=Object(x.a)("card-subtitle",{Component:P}),B=Object(x.a)("card-link",{Component:"a"}),R=Object(x.a)("card-text",{Component:"p"}),S=Object(x.a)("card-header"),A=Object(x.a)("card-footer"),I=Object(x.a)("card-img-overlay"),_=n.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.bg,l=e.text,o=e.border,i=e.body,m=e.children,d=e.as,u=void 0===d?"div":d,f=Object(b.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(g.a)(t,"card"),x=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return n.a.createElement(j.Provider,{value:x},n.a.createElement(u,Object(p.a)({ref:a},f,{className:y()(c,v,s&&"bg-"+s,l&&"text-"+l,o&&"border-"+o)}),i?n.a.createElement(C,null,m):m))}));_.displayName="Card",_.defaultProps={body:!1},_.Img=N,_.Title=k,_.Subtitle=T,_.Body=C,_.Link=B,_.Text=R,_.Header=S,_.Footer=A,_.ImgOverlay=I;var G=_;const J=[{src:"https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockAllBucketsScreen_mpskvp.png",title:"Get Organized",description:"Jointly manage funds with friends"},{src:"https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockBucketScreen_xqytpn.png",title:"Collect & Spend",description:"Track money in & out"},{src:"https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockBucketInfoScreen_ee5d3z.png",title:"Share Securely",description:"Control what people can see & do"}];a.default=function(){const e=Object(l.a)(),{siteConfig:a={}}=e;return n.a.createElement(s.a,{title:""+a.title,description:a.tagline},n.a.createElement("header",{className:Object(c.a)("hero hero--primary",m.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("img",{src:Object(o.a)("img/logo_horizontal.svg"),style:{maxHeight:120}}),n.a.createElement("p",{className:"hero__subtitle"},a.tagline),n.a.createElement("div",{className:[m.a.buttons]},n.a.createElement(d.a,null,n.a.createElement(u.a,{style:{marginTop:20}},n.a.createElement("a",{href:"mailto:support@banqdrop.com",className:Object(c.a)("button button--secondary")},"Join the Beta")))))),n.a.createElement("main",null,n.a.createElement(f.a,{fluid:!0,style:{maxWidth:1200}},n.a.createElement(d.a,null,J.map((e,a)=>n.a.createElement(u.a,{style:{marginTop:20},lg:"4"},n.a.createElement(G,null,n.a.createElement(G.Body,null,n.a.createElement(G.Title,{as:"h2",style:{textAlign:"center"}},e.title),n.a.createElement(G.Text,{style:{textAlign:"center"}},e.description),n.a.createElement(G.Img,{variant:"top",src:e.src})))))),n.a.createElement(d.a,{className:"justify-content-xl-center",style:{marginTop:100}},n.a.createElement(u.a,{xl:"6"},n.a.createElement("h1",{style:{textAlign:"center"}},"Banqdrop Explained"),n.a.createElement("div",{class:"embed-responsive embed-responsive-1by1"},n.a.createElement("iframe",{class:"embed-responsive-item",src:"https://www.youtube.com/embed/z5TGYySKY10?rel=0",allowfullscreen:!0})))),n.a.createElement(d.a,{className:"justify-content-xl-center",style:{marginTop:100}},n.a.createElement(u.a,{xl:"6"},n.a.createElement("h1",{style:{textAlign:"center"}},"Product Demo"),n.a.createElement("div",{class:"embed-responsive embed-responsive-1by1"},n.a.createElement("iframe",{class:"embed-responsive-item",src:"https://www.youtube.com/embed/Ykilo4DcQfI/embed/AKJyRWLq8N0?rel=0",allowfullscreen:!0})))))))}},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t(2);var r=t(0),n=t.n(r),c=n.a.createContext({});c.Consumer,c.Provider;function s(e,a){var t=Object(r.useContext)(c);return e||t[a]||a}},130:function(e,a,t){"use strict";var r=t(2),n=t(6),c=t(119),s=t.n(c),l=t(0),o=t.n(l),i=t(121),m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,l=e.as,m=void 0===l?"div":l,d=e.className,u=Object(n.a)(e,["bsPrefix","fluid","as","className"]),f=Object(i.a)(t,"container"),p="string"==typeof c?"-"+c:"-fluid";return o.a.createElement(m,Object(r.a)({ref:a},u,{className:s()(d,c?""+f+p:f)}))}));m.displayName="Container",m.defaultProps={fluid:!1},a.a=m},131:function(e,a,t){"use strict";var r=t(2),n=t(0),c=t.n(n),s=t(119),l=t.n(s);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))}},133:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(2),n=t(6),c=t(119),s=t.n(c),l=/-(.)/g;var o=t(0),i=t.n(o),m=t(121),d=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,c=t.displayName,l=void 0===c?d(e):c,o=t.Component,u=t.defaultProps,f=i.a.forwardRef((function(a,t){var c=a.className,l=a.bsPrefix,d=a.as,u=void 0===d?o||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),p=Object(m.a)(l,e);return i.a.createElement(u,Object(r.a)({ref:t,className:s()(c,p)},f))}));return f.defaultProps=u,f.displayName=l,f}},152:function(e,a,t){"use strict";var r=t(2),n=t(6),c=t(119),s=t.n(c),l=t(0),o=t.n(l),i=t(121),m=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.noGutters,d=e.as,u=void 0===d?"div":d,f=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(i.a)(t,"row"),b=p+"-cols",v=[];return m.forEach((function(e){var a,t=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&v.push(""+b+r+"-"+a)})),o.a.createElement(u,Object(r.a)({ref:a},f,{className:s.a.apply(void 0,[c,p,l&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},153:function(e,a,t){"use strict";var r=t(2),n=t(6),c=t(119),s=t.n(c),l=t(0),o=t.n(l),i=t(121),m=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,u=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(i.a)(t,"col"),p=[],b=[];return m.forEach((function(e){var a,t,r,n=u[e];if(delete u[e],"object"==typeof n&&null!=n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var s="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+f+s:""+f+s+"-"+a),null!=r&&b.push("order"+s+"-"+r),null!=t&&b.push("offset"+s+"-"+t)})),p.length||p.push(f),o.a.createElement(d,Object(r.a)({},u,{ref:a,className:s.a.apply(void 0,[c].concat(p,b))}))}));d.displayName="Col",a.a=d}}]);