import{s as N,d as p,e as d,f as C,u as E,g as M,h as P}from"./scheduler.ae1baad1.js";import{S as z,i as I,r as $,u as h,v as b,d as f,t as u,w as v,g as S,s as F,H as G,h as T,j,c as J,f as k,D as K,k as y,a as L,x as w,p as O,b as Q}from"./index.171b1fb8.js";import{I as q,g as D,a as B}from"./Icon.5398c919.js";function R(a){let e;const l=a[2].default,t=C(l,a,a[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&E(t,l,n,n[3],e?P(l,n[3],s,null):M(n[3]),null)},i(n){e||(f(t,n),e=!0)},o(n){u(t,n),e=!1},d(n){t&&t.d(n)}}}function U(a){let e,l;const t=[{name:"alert-circle"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[R]},$$scope:{ctx:a}};for(let s=0;s<t.length;s+=1)n=p(n,t[s]);return e=new q({props:n}),{c(){$(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,o){b(e,s,o),l=!0},p(s,[o]){const c=o&3?D(t,[t[0],o&2&&B(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(c.$$scope={dirty:o,ctx:s}),e.$set(c)},i(s){l||(f(e.$$.fragment,s),l=!0)},o(s){u(e.$$.fragment,s),l=!1},d(s){v(e,s)}}}function V(a,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];return a.$$set=o=>{l(1,e=p(p({},e),d(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=d(e),[s,e,t,n]}class W extends z{constructor(e){super(),I(this,e,V,U,N,{})}}const X=W;function Y(a){let e;const l=a[2].default,t=C(l,a,a[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&E(t,l,n,n[3],e?P(l,n[3],s,null):M(n[3]),null)},i(n){e||(f(t,n),e=!0)},o(n){u(t,n),e=!1},d(n){t&&t.d(n)}}}function Z(a){let e,l;const t=[{name:"info"},a[1],{iconNode:a[0]}];let n={$$slots:{default:[Y]},$$scope:{ctx:a}};for(let s=0;s<t.length;s+=1)n=p(n,t[s]);return e=new q({props:n}),{c(){$(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,o){b(e,s,o),l=!0},p(s,[o]){const c=o&3?D(t,[t[0],o&2&&B(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(c.$$scope={dirty:o,ctx:s}),e.$set(c)},i(s){l||(f(e.$$.fragment,s),l=!0)},o(s){u(e.$$.fragment,s),l=!1},d(s){v(e,s)}}}function x(a,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];return a.$$set=o=>{l(1,e=p(p({},e),d(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=d(e),[s,e,t,n]}class ee extends z{constructor(e){super(),I(this,e,x,Z,N,{})}}const te=ee;function ne(a){let e,l;return e=new X({props:{fill:"#d6c13a",size:"34px"}}),{c(){$(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),l=!0},i(t){l||(f(e.$$.fragment,t),l=!0)},o(t){u(e.$$.fragment,t),l=!1},d(t){v(e,t)}}}function se(a){let e,l;return e=new te({props:{fill:"#5d3af7",size:"34px"}}),{c(){$(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),l=!0},i(t){l||(f(e.$$.fragment,t),l=!0)},o(t){u(e.$$.fragment,t),l=!1},d(t){v(e,t)}}}function le(a){let e,l,t,n,s,o,c,g;const A=[se,ne],_=[];function H(r,i){return r[0]=="info"?0:1}return t=H(a),n=_[t]=A[t](a),{c(){e=S("p"),l=S("span"),n.c(),s=F(),o=new G(!1),this.h()},l(r){e=T(r,"P",{class:!0});var i=j(e);l=T(i,"SPAN",{class:!0});var m=j(l);n.l(m),s=J(m),m.forEach(k),o=K(i,!1),i.forEach(k),this.h()},h(){y(l,"class","svelte-o2boz3"),o.a=null,y(e,"class",c="tag "+a[0]+" svelte-o2boz3")},m(r,i){L(r,e,i),w(e,l),_[t].m(l,null),w(l,s),o.m(a[1],e),g=!0},p(r,[i]){let m=t;t=H(r),t!==m&&(O(),u(_[m],1,1,()=>{_[m]=null}),Q(),n=_[t],n||(n=_[t]=A[t](r),n.c()),f(n,1),n.m(l,s)),(!g||i&2)&&o.p(r[1]),(!g||i&1&&c!==(c="tag "+r[0]+" svelte-o2boz3"))&&y(e,"class",c)},i(r){g||(f(n),g=!0)},o(r){u(n),g=!1},d(r){r&&k(e),_[t].d()}}}function ae(a,e,l){let{tagtype:t="info"}=e,{msg:n=""}=e;return a.$$set=s=>{"tagtype"in s&&l(0,t=s.tagtype),"msg"in s&&l(1,n=s.msg)},[t,n]}class ie extends z{constructor(e){super(),I(this,e,ae,le,N,{tagtype:0,msg:1})}}export{ie as T};