import{s as M,n as T}from"../chunks/scheduler.ae1baad1.js";import{S as N,i as U,s as y,g as v,B as x,f as p,c as S,h as g,j as E,k as d,a as O,x as _,C as F,m as k,n as P,o as C}from"../chunks/index.171b1fb8.js";import{e as q}from"../chunks/each.e59479a4.js";import{f as A}from"../chunks/utils.2fdf1f5e.js";import{t as G}from"../chunks/config.f4ded0b2.js";async function H({fetch:n}){return{posts:await(await n("api/posts")).json()}}const Y=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function B(n,t,l){const o=n.slice();return o[1]=t[l],o}function D(n){let t,l,o=n[1].title+"",r,a,s,c,e=A(n[1].date)+"",f,u,m,z=n[1].description+"",b,j;return{c(){t=v("li"),l=v("a"),r=k(o),s=y(),c=v("p"),f=k(e),u=y(),m=v("p"),b=k(z),j=y(),this.h()},l(h){t=g(h,"LI",{class:!0});var i=E(t);l=g(i,"A",{href:!0,class:!0});var w=E(l);r=P(w,o),w.forEach(p),s=S(i),c=g(i,"P",{class:!0});var I=E(c);f=P(I,e),I.forEach(p),u=S(i),m=g(i,"P",{class:!0});var L=E(m);b=P(L,z),L.forEach(p),j=S(i),i.forEach(p),this.h()},h(){d(l,"href",a=n[1].slug),d(l,"class","title svelte-1avzfmh"),d(c,"class","date svelte-1avzfmh"),d(m,"class","description svelte-1avzfmh"),d(t,"class","post svelte-1avzfmh")},m(h,i){O(h,t,i),_(t,l),_(l,r),_(t,s),_(t,c),_(c,f),_(t,u),_(t,m),_(m,b),_(t,j)},p(h,i){i&1&&o!==(o=h[1].title+"")&&C(r,o),i&1&&a!==(a=h[1].slug)&&d(l,"href",a),i&1&&e!==(e=A(h[1].date)+"")&&C(f,e),i&1&&z!==(z=h[1].description+"")&&C(b,z)},d(h){h&&p(t)}}}function J(n){let t,l,o;document.title=G;let r=q(n[0].posts),a=[];for(let s=0;s<r.length;s+=1)a[s]=D(B(n,r,s));return{c(){t=y(),l=v("section"),o=v("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){x("svelte-fbczdu",document.head).forEach(p),t=S(s),l=g(s,"SECTION",{});var e=E(l);o=g(e,"UL",{class:!0});var f=E(o);for(let u=0;u<a.length;u+=1)a[u].l(f);f.forEach(p),e.forEach(p),this.h()},h(){d(o,"class","posts svelte-1avzfmh")},m(s,c){O(s,t,c),O(s,l,c),_(l,o);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(o,null)},p(s,[c]){if(c&1){r=q(s[0].posts);let e;for(e=0;e<r.length;e+=1){const f=B(s,r,e);a[e]?a[e].p(f,c):(a[e]=D(f),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=r.length}},i:T,o:T,d(s){s&&(p(t),p(l)),F(a,s)}}}function K(n,t,l){let{data:o}=t;return n.$$set=r=>{"data"in r&&l(0,o=r.data)},[o]}class Z extends N{constructor(t){super(),U(this,t,K,J,M,{data:0})}}export{Z as component,Y as universal};