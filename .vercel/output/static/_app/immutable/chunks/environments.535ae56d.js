import{s as he,n as U}from"./scheduler.be0e0057.js";import{S as de,i as me,g as a,s,H as G,e as ae,h as o,D as r,c as i,G as V,a as l,f as n}from"./index.c7c9b348.js";function ue(oe){let p,F="Contents",D,c,J='<li><a href="#introduction">Introduction</a></li> <li><a href="#windows">Windows</a></li>',L,h,K='<a id="introduction"></a>Introduction',M,d,Q="This tutorial shows how to install popular developer tools, with an emphasis on Python, using system package managers. It also explains how to create and manage virtual environments for Python.",g,m,X="What is a virtual environment?",j,u,Y="If not specified, the <em>package installer for Python</em> (<code>pip</code>) will place all external modules inside the <code>site-packages/</code> directory of the base Python installation. This can become problematic for the following reasons:",I,v,Z="<li><p><strong>System pollution:</strong> Linux and macOS have preinstalled Python versions that each OS uses for internal tasks. Changing the versions of any system-relevant packages may have unintended effects on OS behavior. Updating the OS could also overwrite some of the package installations.</p></li> <li><p><strong>Dependency conflicts:</strong> Different projects may require different versions of the same package. If all packages are centralized, then certain projects may break unexpectedly.</p></li>",z,f,$="Virtual environments sidestep these issues by creating sandboxed directories that store all packages for individual projects. These directories also contain symlinks to the relevant Python binaries so that the project can be run with a specific Python version. By activating a virtual environment, you tell the system to point to this directory whenever running the Python executable.",B,y,ee='<a id="windows"></a>Windows',E,C,te='<a id="chocolatey"></a>Chocolatey',O,x,le="Chocolatey is a community-driven general package manager for Windows. With one command, this tool eliminates the need for installation wizards.",W,w,ne="The developers of Chocolatey created a script to automate the installation process. As stated above, to run a script downloaded from the internet, we need to change the security permissions in PowerShell. (This will also be needed later to install the full developer toolchain. See the PowerShell tutorial for more information on security policies.) In an administrative shell, execute the following commands:",q,P,re='<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #A6ACCD">Set-ExecutionPolicy RemoteSigned</span></span></code></pre>',k,_,se="Also…",N,H,pe=`<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #A6ACCD">[</span><span style="color: #91B4D5">System.Net.ServicePointManager</span><span style="color: #A6ACCD">]::SecurityProtocol </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> </span></span>
<span class="line"><span style="color: #A6ACCD">[</span><span style="color: #91B4D5">System.Net.ServicePointManager</span><span style="color: #A6ACCD">]::SecurityProtocol </span><span style="color: #91B4D5">-bor</span><span style="color: #A6ACCD"> </span><span style="color: #5DE4C7">3072</span></span></code></pre>`,S,b,ie="More code…",R,A,ce='<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #A6ACCD">Set-ExecutionPolicy RemoteSigned</span></span></code></pre>',T;return{c(){p=a("h2"),p.textContent=F,D=s(),c=a("ul"),c.innerHTML=J,L=s(),h=a("h2"),h.innerHTML=K,M=s(),d=a("p"),d.textContent=Q,g=s(),m=a("h3"),m.textContent=X,j=s(),u=a("p"),u.innerHTML=Y,I=s(),v=a("ol"),v.innerHTML=Z,z=s(),f=a("p"),f.textContent=$,B=s(),y=a("h2"),y.innerHTML=ee,E=s(),C=a("h3"),C.innerHTML=te,O=s(),x=a("p"),x.textContent=le,W=s(),w=a("p"),w.textContent=ne,q=s(),P=new G(!1),k=s(),_=a("p"),_.textContent=se,N=s(),H=new G(!1),S=s(),b=a("p"),b.textContent=ie,R=s(),A=new G(!1),T=ae(),this.h()},l(e){p=o(e,"H2",{"data-svelte-h":!0}),r(p)!=="svelte-jpxk5s"&&(p.textContent=F),D=i(e),c=o(e,"UL",{"data-svelte-h":!0}),r(c)!=="svelte-105g2k2"&&(c.innerHTML=J),L=i(e),h=o(e,"H2",{"data-svelte-h":!0}),r(h)!=="svelte-6bdwz1"&&(h.innerHTML=K),M=i(e),d=o(e,"P",{"data-svelte-h":!0}),r(d)!=="svelte-1cx8afu"&&(d.textContent=Q),g=i(e),m=o(e,"H3",{"data-svelte-h":!0}),r(m)!=="svelte-11a821c"&&(m.textContent=X),j=i(e),u=o(e,"P",{"data-svelte-h":!0}),r(u)!=="svelte-11er92v"&&(u.innerHTML=Y),I=i(e),v=o(e,"OL",{"data-svelte-h":!0}),r(v)!=="svelte-1ik304e"&&(v.innerHTML=Z),z=i(e),f=o(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-6ci28s"&&(f.textContent=$),B=i(e),y=o(e,"H2",{"data-svelte-h":!0}),r(y)!=="svelte-nkw3o7"&&(y.innerHTML=ee),E=i(e),C=o(e,"H3",{"data-svelte-h":!0}),r(C)!=="svelte-ijlokx"&&(C.innerHTML=te),O=i(e),x=o(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-8zlq61"&&(x.textContent=le),W=i(e),w=o(e,"P",{"data-svelte-h":!0}),r(w)!=="svelte-26wpos"&&(w.textContent=ne),q=i(e),P=V(e,!1),k=i(e),_=o(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1u2v2zn"&&(_.textContent=se),N=i(e),H=V(e,!1),S=i(e),b=o(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-1p2xci8"&&(b.textContent=ie),R=i(e),A=V(e,!1),T=ae(),this.h()},h(){P.a=k,H.a=S,A.a=T},m(e,t){l(e,p,t),l(e,D,t),l(e,c,t),l(e,L,t),l(e,h,t),l(e,M,t),l(e,d,t),l(e,g,t),l(e,m,t),l(e,j,t),l(e,u,t),l(e,I,t),l(e,v,t),l(e,z,t),l(e,f,t),l(e,B,t),l(e,y,t),l(e,E,t),l(e,C,t),l(e,O,t),l(e,x,t),l(e,W,t),l(e,w,t),l(e,q,t),P.m(re,e,t),l(e,k,t),l(e,_,t),l(e,N,t),H.m(pe,e,t),l(e,S,t),l(e,b,t),l(e,R,t),A.m(ce,e,t),l(e,T,t)},p:U,i:U,o:U,d(e){e&&(n(p),n(D),n(c),n(L),n(h),n(M),n(d),n(g),n(m),n(j),n(u),n(I),n(v),n(z),n(f),n(B),n(y),n(E),n(C),n(O),n(x),n(W),n(w),n(q),P.d(),n(k),n(_),n(N),H.d(),n(S),n(b),n(R),n(T),A.d())}}}const ye={title:"Environments",description:"Configure a development environment for high productivity.",date:"2023-8-31",categories:["Python","Node","Chocolatey","Homebrew"],published:!0};class Ce extends de{constructor(p){super(),me(this,p,null,ue,he,{})}}export{Ce as default,ye as metadata};