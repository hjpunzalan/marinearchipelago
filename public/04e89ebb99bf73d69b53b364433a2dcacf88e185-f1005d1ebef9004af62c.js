(self.webpackChunkmarine_archipelago=self.webpackChunkmarine_archipelago||[]).push([[425],{1049:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB7ElEQVQ4y6XU24uOURQG8G8Go5iUKcZpFBoZyRQuyFnOU8phSoMmIcnF4IKkRC5EDhcORbmQ5HTjxqULt24k5X/wD7hcP+1pfXzmO4zMrtXe797v+6xnPc9+V6XSYkREBb+j+vzfYyxQdT1hoIjoQFst25ZMGzHJaM/9FZife3XAdQnGHjQAXo+tzYDGBUzQtojojIh52BURJyOiC9ObEWgGOBvTImIONqIA7sX1chYRmyKiuyRD178wnIrT6McC7MaOiHgVEYPoxhIcb1lyjW6LMBNXcA2HsRzfcRR9uIrFNUb9AUygqnMzsCEZlA/u407RED9R3H6ZFfRExFp0VN0fvaNjHJ2FhTiGS9iDr3iaQN9wI5kOoDci5v4FmOyKEdsi4hRu4y0+4wdu1SS8m5L0RURPrnvSuFH3K0n5YN6zc1neEezMKPsnMJh69qe7B7AM+1GcH8aUUvIafImIUtbH1Gxflvgcz/AOj/ACF3AGn/Ag33uY89JKUl6XZqzEFhwqWbE5IgbyfHXRNiKKfoMRMZTsSxWrsL3I1+gvKcAfMvsTPMabXN/Ee9zDa3TW3cU0pTSBybnZm06exXmMRMRI6jiccRkX08wi26RqI2nYGGraVstm0Oi8rjvn3N4g2mqqaa/euwl38fHGL54PCCT2C7iWAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/88447bd7b84ff5f9212a88034d0fd19b/82c11/logo-white-transparentbg.png","srcSet":"/static/88447bd7b84ff5f9212a88034d0fd19b/2fd20/logo-white-transparentbg.png 125w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/de391/logo-white-transparentbg.png 250w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/82c11/logo-white-transparentbg.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/88447bd7b84ff5f9212a88034d0fd19b/3ebc4/logo-white-transparentbg.avif 125w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/a9ff4/logo-white-transparentbg.avif 250w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/a61b1/logo-white-transparentbg.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/88447bd7b84ff5f9212a88034d0fd19b/d66e1/logo-white-transparentbg.webp 125w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/e7160/logo-white-transparentbg.webp 250w,\\n/static/88447bd7b84ff5f9212a88034d0fd19b/5f169/logo-white-transparentbg.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}')},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return be}});var r,o,a,i,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),p=n.n(f),d=n(7294),m=n(6494),b=n.n(m),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",A="href",E="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",j="rel",N="src",I="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",P="defer",R="encodeSpecialCharacters",L="onChangeClientState",U="titleTemplate",B=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,v.TITLE),n=J(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,x);return t||r||void 0},Z=function(e){return J(e,L)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},W=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,n),linkTags:le(v.LINK,a),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,m,b)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[d.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(y,o,r),link:pe(v.LINK,a,r),meta:pe(v.META,i,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,u,r),style:pe(v.STYLE,l,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:V([A,I],e),bodyAttributes:Q(h,e),defer:J(e,P),encode:J(e,R),htmlAttributes:Q(y,e),linkTags:W(v.LINK,[j,A],e),metaTags:W(v.META,[S,w,E,k,O],e),noscriptTags:W(v.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:W(v.SCRIPT,[N,C],e),styleTags:W(v.STYLE,[T],e),title:G(e),titleAttributes:Q(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),be=(o=me,i=a=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=i,t.titleAttributes=Y({},a),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},a)});case v.HTML:return Y({},o,{htmlAttributes:Y({},a)})}return Y({},o,((n={})[r.type]=Y({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(_(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=_(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);be.renderStatic=be.rewind},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},2756:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),o=function(e){var t=e.children;return r.createElement("div",{className:"container-module--container--1pAi7"},t)}},3352:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.desc,n=e.handleClick;return r.createElement("div",null,r.createElement("button",{onClick:n,className:"cta-module--cta--1vBv3"},t))}},5964:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=n(5444),a=n(3352);var i=function(){return r.createElement("footer",null,r.createElement(a.Z,{handleClick:function(){return(0,o.navigate)("/contact")},desc:"Contact Us"}),r.createElement("div",{className:"footer-module--contact--LY054"},r.createElement("div",null,r.createElement("h3",null,"Reginald Soriano"),r.createElement("p",null,"Managing Director Electrical",r.createElement("br",null),"0430 454 466",r.createElement("br",null))),r.createElement("div",null,r.createElement("h3",null,"Paul Hill"),r.createElement("p",null,"Managing Director Electronics",r.createElement("br",null),"0400 028 582",r.createElement("br",null)))),r.createElement("span",{className:"footer-module--copyright--30fCu"},"© ",(new Date).getFullYear()," Marine Archipelago. All rights reserved."))},c=n(5414),u=function(e){var t=e.children,n=e.mainClassName,o=e.nav;return r.createElement(r.Fragment,null,r.createElement(c.q,null,r.createElement("body",{className:o?"layout-module--bodyClassNavOpen--ez2KO":"layout-module--bodyClassNavClosed--2tCag"})),r.createElement("main",{className:n},t),r.createElement(i,null))}},7299:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),o=n(5444),a=n(3217),i="nav-module--link--1FACx",c=function(e){var t=e.nav,c=e.toggleNav;return r.createElement("nav",{className:"nav-module--nav--NbZ_u"},r.createElement(a.S,{className:"nav-module--logo--1qzmT",src:"../../images/logo-white-transparentbg.png",placeholder:"BLURRED",formats:["AUTO","WEBP","AVIF"],alt:"Marine Archipelago",onClick:function(){return(0,o.navigate)("/")},__imageData:n(1049)}),r.createElement("input",{type:"checkbox",name:"checkbox",id:"hamburger",checked:t,onChange:c}),r.createElement("label",{htmlFor:"hamburger",className:"nav-module--navButton--3d0XN"},r.createElement("div",null,r.createElement("span",null))),r.createElement("ul",{className:t?"nav-module--navOpen--vMzjM":"nav-module--navClosed--3TfXY"},r.createElement("li",null,r.createElement(o.Link,{className:i,to:"/"},"Home")),r.createElement("li",null,r.createElement(o.Link,{className:i,to:"/about"},"About us")),r.createElement("li",null,r.createElement(o.Link,{className:i,to:"/contact"},"Contact us"))))}},6179:function(e,t,n){"use strict";var r=n(7294),o=n(5414),a=n(5444);function i(e){var t,n,i=e.description,c=e.lang,u=e.meta,l=e.title,s=(0,a.useStaticQuery)("63159454").site,f=i||s.siteMetadata.description,p=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(o.q,{htmlAttributes:{lang:c},title:l,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:l},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:f}].concat(u)})}i.defaultProps={lang:"en",meta:[],description:""},t.Z=i}}]);
//# sourceMappingURL=04e89ebb99bf73d69b53b364433a2dcacf88e185-f1005d1ebef9004af62c.js.map