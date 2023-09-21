import{s as gl,n as ll}from"./scheduler.ae1baad1.js";import{S as se,i as le,g as p,s as n,H as i,e as Ll,h as o,z as c,c as t,D as r,a as e,f as a}from"./index.0e1198e2.js";function ee(Tl){let B,el="Contents",Ms,y,al='<li><a href="#introduction">Introduction</a></li> <li><a href="#installation">Installation</a></li> <li><a href="#basics">Basics</a></li> <li><a href="#libraries">Libraries</a></li>',Ls,d,nl='<a id="introduction">Introduction</a>',Ts,u,tl="CMake is an open-source, cross-platform automation tool for generating C/C++ Makefiles, which can then be used to build the source. It has become the <em>de facto</em> build system for the developer community as well as major companies, such as Qt and ST Microelectronics.",Hs,b,pl='<a id="installation">Installation</a>',Es,C,ol="See below for platform-specific commands to install the CMake toolchain. The rest of the tutorial will use Unix-style commands, but these should be directly transferable to Windows systems. Note that each platform also requires a dedicated compiler for C/C++ applications.",Ps,f,cl="<strong>Windows (Chocolatey):</strong>",js,S,Hl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">choco install cmake visualstudio2022buildtools</span></span></code></pre>',O,m,il="<strong>macOS (Homebrew):</strong>",qs,R,El='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">brew</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">cmake</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">llvm</span></span></code></pre>',X,A,rl="<strong>Linux:</strong>",Is,z,Pl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">sudo</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">apt</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">make</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">cmake</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">gcc</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">g++</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">gdb</span></span></code></pre>',U,F,Bl='<a id="basics">Basics</a>',Ns,h,yl="CMake relies on a top-level file called <code>CMakeLists.txt</code>, which should be created in the same directory as the source. (It is good practice to separate source code and build files.) To demonstrate a CMake project, we can create a <code>HelloCMake</code> directory with a <code>build</code> subdirectory:",Ss,G,jl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">mkdir</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-p</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">~/HelloCMake/build</span></span></code></pre>',V,k,dl="Create a <code>~/HelloCMake/main.cpp</code> file:",Os,J,ql=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75">#import</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">&lt;</span><span style="color: #ABB2BF">iostream</span><span style="color: #C678DD">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">using</span><span style="color: #ABB2BF"> std::cout, std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">    cout </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Hey, CMake!&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> endl;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`,W,_,ul="Add a <code>CMakeLists.txt</code> file (use the CMake version output from <code>cmake --version</code>):",Rs,$,Il=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">cmake_minimum_required</span><span style="color: #ABB2BF">(VERSION 3.27.4)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">project</span><span style="color: #ABB2BF">(hello)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">add_executable</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">$&#123;PROJECT_NAME&#125;</span><span style="color: #ABB2BF"> main.cpp)</span></span></code></pre>`,K,D,bl="To generate the Makefile, which contains the recipe to build the source, run the <code>cmake</code> command and specify the locations of the <code>src</code> and <code>build</code> directories:",Xs,Q,Nl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">cmake</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-S</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">~/HelloCMake</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-B</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">~/HelloCMake/build</span></span></code></pre>',Y,x,Cl="After running that command, the project folder should appear as follows:",zs,Z,Sl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #abb2bf">├── build</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── CMakeCache.txt</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── CMakeFiles</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── Makefile</span></span>
<span class="line"><span style="color: #abb2bf">│   └── cmake_install.cmake</span></span>
<span class="line"><span style="color: #abb2bf">├── CMakeLists.txt</span></span>
<span class="line"><span style="color: #abb2bf">└── main.cpp</span></span></code></pre>`,g,v,fl="Now run the <code>make</code> command inside the build folder:",Us,ss,Ol=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">~/HelloCMake/build</span></span>
<span class="line"><span style="color: #61AFEF">make</span></span></code></pre>`,ls,w,ml="At this point, if the build was successful, there will be an executable called <code>hello</code>, which can be run with <code>./hello</code>.",Gs,M,Al="In addition to setting the CMake version requirements, project name, and source target, we can specify the project version and languages, as well as the C/C++ ISO standard. CMake also provides an install keyword to specify the executable target directory. This feature is especially helpful for Linux users who may want their program to be accessible from the command line. For example, the below CMake file will place our <code>hello</code> executable into the system <code>bin</code> folder:",Vs,es,Rl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">cmake_minimum_required</span><span style="color: #ABB2BF">(VERSION 3.27.4)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">project</span><span style="color: #ABB2BF">(hello VERSION 1.0.0 LANGUAGES C CXX)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">set</span><span style="color: #ABB2BF">(CMAKE_CXX_STANDARD 17)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">add_executable</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">$&#123;PROJECT_NAME&#125;</span><span style="color: #ABB2BF"> main.cpp)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">install</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">TARGET</span><span style="color: #ABB2BF"> hello DESTINATION bin)</span></span></code></pre>`,as,L,Fl="With this configuration, we can run the <code>make install</code> command with root privileges to install the executable into <code>/usr/local/bin</code>:",Js,ns,Xl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">sudo</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">make</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">install</span></span></code></pre>',ts,T,hl="Now we can run the application from anywhere in the file system:",Ws,ps,zl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">hello</span></span></code></pre>',os,H,kl='<a id="libraries">Libraries</a>',$s,E,_l="Most projects use libraries for reusable source code. Often, these libraries should be placed in a dedicated subdirectory, such as is shown below with the library named <code>basicmath</code>:",Ks,cs,Ul=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #abb2bf">├── build</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── CMakeCache.txt</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── CMakeFiles</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── Makefile</span></span>
<span class="line"><span style="color: #abb2bf">│   └── cmake_install.cmake</span></span>
<span class="line"><span style="color: #abb2bf">├── lib</span></span>
<span class="line"><span style="color: #abb2bf">│   ├── basicmath</span></span>
<span class="line"><span style="color: #abb2bf">│   │   ├── include</span></span>
<span class="line"><span style="color: #abb2bf">│   │   │   └── basicmath.h</span></span>
<span class="line"><span style="color: #abb2bf">│   │   ├── src</span></span>
<span class="line"><span style="color: #abb2bf">│   │   │   ├── basicmath.cpp</span></span>
<span class="line"><span style="color: #abb2bf">│   │   │   └── CMakeLists.txt</span></span>
<span class="line"><span style="color: #abb2bf">│   │   └── CMakeLists.txt</span></span>
<span class="line"><span style="color: #abb2bf">│   └── CMakeLists.txt</span></span>
<span class="line"><span style="color: #abb2bf">├── CMakeLists.txt</span></span>
<span class="line"><span style="color: #abb2bf">└── main.cpp</span></span></code></pre>`,is,P,Dl="Notice how each subdirectory of the library contains a <code>CMakeLists.txt</code> file. This is needed for nested source code directories, but most of these files will only contain one line to point to the next directory in the chain.",Qs,j,xl="Below are the four <code>CMakeLists.txt</code> files listed from top to bottom in the directory nest. The high-level file contains most of the project information, including the target library details. The intermediary files contain one command to point to the relevant subdirectory, and the last contains the library definition as well as a pointer to the <code>include</code> directory will the header files.",Ys,rs,Gl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># adder/CMakeLists.txt</span></span>
<span class="line"><span style="color: #C678DD">cmake_minimum_required</span><span style="color: #ABB2BF">(VERSION 3.27.4)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">project</span><span style="color: #ABB2BF">(adder VERSION 1.0.0 LANGUAGES C CXX)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">set</span><span style="color: #ABB2BF">(CMAKE_CXX_STANDARD 17)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">add_subdirectory</span><span style="color: #ABB2BF">(lib)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">add_executable</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">$&#123;PROJECT_NAME&#125;</span><span style="color: #ABB2BF"> main.cpp)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">target_link_libraries</span><span style="color: #ABB2BF">(adder PUBLIC BasicMath)</span></span></code></pre>`,Bs,ys,Vl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># adder/lib/CMakeLists.txt</span></span>
<span class="line"><span style="color: #C678DD">add_subdirectory</span><span style="color: #ABB2BF">(basicmath)</span></span></code></pre>`,ds,us,Jl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># adder/lib/basicmath/CMakeLists.txt</span></span>
<span class="line"><span style="color: #C678DD">add_subdirectory</span><span style="color: #ABB2BF">(src)</span></span></code></pre>`,bs,Cs,Wl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># adder/lib/basicmath/src/CMakeLists.txt</span></span>
<span class="line"><span style="color: #C678DD">add_library</span><span style="color: #ABB2BF">(BasicMath STATIC adder.cpp)</span></span>
<span class="line"><span style="color: #C678DD">target_include_directories</span><span style="color: #ABB2BF">(BasicMath PUBLIC </span><span style="color: #98C379">&quot;../include&quot;</span><span style="color: #ABB2BF">)</span></span></code></pre>`,fs,q,vl="Below is the source code for reference:",Zs,ms,$l=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/* basicmath.h */</span></span>
<span class="line"><span style="color: #C678DD">#pragma</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">once</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">namespace</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">basicmath</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`,As,Fs,Kl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/* basicmath.cpp */</span></span>
<span class="line"><span style="color: #C678DD">#include</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;basicmath.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">basicmath</span><span style="color: #ABB2BF">::</span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">) &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> (a </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> b);</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">basicmath</span><span style="color: #ABB2BF">::</span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">float</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">) &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> (a </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> b);</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`,hs,ks,Ql=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/* main.cpp */</span></span>
<span class="line"><span style="color: #C678DD">#include</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;basicmath.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">using</span><span style="color: #ABB2BF"> std::cout, std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">    cout </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;2.5 + 2.5 = &quot;</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> basicmath::</span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">2.5</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2.5</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">&lt;&lt;</span><span style="color: #ABB2BF"> endl;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`,_s,I,wl="To test this project configuration, execute the following commands, assuming that the build process has been completed at least once:",gs,Ds,Yl=`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">build</span></span>
<span class="line"><span style="color: #61AFEF">cmake</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--build</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">.</span></span>
<span class="line"><span style="color: #61AFEF">make</span></span>
<span class="line"><span style="color: #61AFEF">./adder</span></span></code></pre>`,xs,N,Ml="Optionally, you can choose to only target the library during the build routine, which may help you pinpoint build errors:",sl,vs,Zl='<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">cmake</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--build</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">.</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--target</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">basicmath</span></span></code></pre>',ws;return{c(){B=p("h2"),B.textContent=el,Ms=n(),y=p("ul"),y.innerHTML=al,Ls=n(),d=p("h2"),d.innerHTML=nl,Ts=n(),u=p("p"),u.innerHTML=tl,Hs=n(),b=p("h2"),b.innerHTML=pl,Es=n(),C=p("p"),C.textContent=ol,Ps=n(),f=p("p"),f.innerHTML=cl,js=n(),S=new i(!1),O=n(),m=p("p"),m.innerHTML=il,qs=n(),R=new i(!1),X=n(),A=p("p"),A.innerHTML=rl,Is=n(),z=new i(!1),U=n(),F=p("h2"),F.innerHTML=Bl,Ns=n(),h=p("p"),h.innerHTML=yl,Ss=n(),G=new i(!1),V=n(),k=p("p"),k.innerHTML=dl,Os=n(),J=new i(!1),W=n(),_=p("p"),_.innerHTML=ul,Rs=n(),$=new i(!1),K=n(),D=p("p"),D.innerHTML=bl,Xs=n(),Q=new i(!1),Y=n(),x=p("p"),x.textContent=Cl,zs=n(),Z=new i(!1),g=n(),v=p("p"),v.innerHTML=fl,Us=n(),ss=new i(!1),ls=n(),w=p("p"),w.innerHTML=ml,Gs=n(),M=p("p"),M.innerHTML=Al,Vs=n(),es=new i(!1),as=n(),L=p("p"),L.innerHTML=Fl,Js=n(),ns=new i(!1),ts=n(),T=p("p"),T.textContent=hl,Ws=n(),ps=new i(!1),os=n(),H=p("h2"),H.innerHTML=kl,$s=n(),E=p("p"),E.innerHTML=_l,Ks=n(),cs=new i(!1),is=n(),P=p("p"),P.innerHTML=Dl,Qs=n(),j=p("p"),j.innerHTML=xl,Ys=n(),rs=new i(!1),Bs=n(),ys=new i(!1),ds=n(),us=new i(!1),bs=n(),Cs=new i(!1),fs=n(),q=p("p"),q.textContent=vl,Zs=n(),ms=new i(!1),As=n(),Fs=new i(!1),hs=n(),ks=new i(!1),_s=n(),I=p("p"),I.textContent=wl,gs=n(),Ds=new i(!1),xs=n(),N=p("p"),N.textContent=Ml,sl=n(),vs=new i(!1),ws=Ll(),this.h()},l(s){B=o(s,"H2",{"data-svelte-h":!0}),c(B)!=="svelte-jpxk5s"&&(B.textContent=el),Ms=t(s),y=o(s,"UL",{"data-svelte-h":!0}),c(y)!=="svelte-hwfpbi"&&(y.innerHTML=al),Ls=t(s),d=o(s,"H2",{"data-svelte-h":!0}),c(d)!=="svelte-117zo8l"&&(d.innerHTML=nl),Ts=t(s),u=o(s,"P",{"data-svelte-h":!0}),c(u)!=="svelte-1pr33fw"&&(u.innerHTML=tl),Hs=t(s),b=o(s,"H2",{"data-svelte-h":!0}),c(b)!=="svelte-1dz9mr"&&(b.innerHTML=pl),Es=t(s),C=o(s,"P",{"data-svelte-h":!0}),c(C)!=="svelte-1r00eh7"&&(C.textContent=ol),Ps=t(s),f=o(s,"P",{"data-svelte-h":!0}),c(f)!=="svelte-1nermpu"&&(f.innerHTML=cl),js=t(s),S=r(s,!1),O=t(s),m=o(s,"P",{"data-svelte-h":!0}),c(m)!=="svelte-1m1hzlg"&&(m.innerHTML=il),qs=t(s),R=r(s,!1),X=t(s),A=o(s,"P",{"data-svelte-h":!0}),c(A)!=="svelte-rurumh"&&(A.innerHTML=rl),Is=t(s),z=r(s,!1),U=t(s),F=o(s,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-rxkq8j"&&(F.innerHTML=Bl),Ns=t(s),h=o(s,"P",{"data-svelte-h":!0}),c(h)!=="svelte-1r498ka"&&(h.innerHTML=yl),Ss=t(s),G=r(s,!1),V=t(s),k=o(s,"P",{"data-svelte-h":!0}),c(k)!=="svelte-16rjz4n"&&(k.innerHTML=dl),Os=t(s),J=r(s,!1),W=t(s),_=o(s,"P",{"data-svelte-h":!0}),c(_)!=="svelte-bess08"&&(_.innerHTML=ul),Rs=t(s),$=r(s,!1),K=t(s),D=o(s,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1ianm7x"&&(D.innerHTML=bl),Xs=t(s),Q=r(s,!1),Y=t(s),x=o(s,"P",{"data-svelte-h":!0}),c(x)!=="svelte-ss2ft7"&&(x.textContent=Cl),zs=t(s),Z=r(s,!1),g=t(s),v=o(s,"P",{"data-svelte-h":!0}),c(v)!=="svelte-gzlsh7"&&(v.innerHTML=fl),Us=t(s),ss=r(s,!1),ls=t(s),w=o(s,"P",{"data-svelte-h":!0}),c(w)!=="svelte-1stwohn"&&(w.innerHTML=ml),Gs=t(s),M=o(s,"P",{"data-svelte-h":!0}),c(M)!=="svelte-obf359"&&(M.innerHTML=Al),Vs=t(s),es=r(s,!1),as=t(s),L=o(s,"P",{"data-svelte-h":!0}),c(L)!=="svelte-3ujk"&&(L.innerHTML=Fl),Js=t(s),ns=r(s,!1),ts=t(s),T=o(s,"P",{"data-svelte-h":!0}),c(T)!=="svelte-h63w2k"&&(T.textContent=hl),Ws=t(s),ps=r(s,!1),os=t(s),H=o(s,"H2",{"data-svelte-h":!0}),c(H)!=="svelte-153n8al"&&(H.innerHTML=kl),$s=t(s),E=o(s,"P",{"data-svelte-h":!0}),c(E)!=="svelte-13q6h5h"&&(E.innerHTML=_l),Ks=t(s),cs=r(s,!1),is=t(s),P=o(s,"P",{"data-svelte-h":!0}),c(P)!=="svelte-383yfb"&&(P.innerHTML=Dl),Qs=t(s),j=o(s,"P",{"data-svelte-h":!0}),c(j)!=="svelte-nso5p0"&&(j.innerHTML=xl),Ys=t(s),rs=r(s,!1),Bs=t(s),ys=r(s,!1),ds=t(s),us=r(s,!1),bs=t(s),Cs=r(s,!1),fs=t(s),q=o(s,"P",{"data-svelte-h":!0}),c(q)!=="svelte-13nuwsm"&&(q.textContent=vl),Zs=t(s),ms=r(s,!1),As=t(s),Fs=r(s,!1),hs=t(s),ks=r(s,!1),_s=t(s),I=o(s,"P",{"data-svelte-h":!0}),c(I)!=="svelte-1u06f0n"&&(I.textContent=wl),gs=t(s),Ds=r(s,!1),xs=t(s),N=o(s,"P",{"data-svelte-h":!0}),c(N)!=="svelte-1v8gj8f"&&(N.textContent=Ml),sl=t(s),vs=r(s,!1),ws=Ll(),this.h()},h(){S.a=O,R.a=X,z.a=U,G.a=V,J.a=W,$.a=K,Q.a=Y,Z.a=g,ss.a=ls,es.a=as,ns.a=ts,ps.a=os,cs.a=is,rs.a=Bs,ys.a=ds,us.a=bs,Cs.a=fs,ms.a=As,Fs.a=hs,ks.a=_s,Ds.a=xs,vs.a=ws},m(s,l){e(s,B,l),e(s,Ms,l),e(s,y,l),e(s,Ls,l),e(s,d,l),e(s,Ts,l),e(s,u,l),e(s,Hs,l),e(s,b,l),e(s,Es,l),e(s,C,l),e(s,Ps,l),e(s,f,l),e(s,js,l),S.m(Hl,s,l),e(s,O,l),e(s,m,l),e(s,qs,l),R.m(El,s,l),e(s,X,l),e(s,A,l),e(s,Is,l),z.m(Pl,s,l),e(s,U,l),e(s,F,l),e(s,Ns,l),e(s,h,l),e(s,Ss,l),G.m(jl,s,l),e(s,V,l),e(s,k,l),e(s,Os,l),J.m(ql,s,l),e(s,W,l),e(s,_,l),e(s,Rs,l),$.m(Il,s,l),e(s,K,l),e(s,D,l),e(s,Xs,l),Q.m(Nl,s,l),e(s,Y,l),e(s,x,l),e(s,zs,l),Z.m(Sl,s,l),e(s,g,l),e(s,v,l),e(s,Us,l),ss.m(Ol,s,l),e(s,ls,l),e(s,w,l),e(s,Gs,l),e(s,M,l),e(s,Vs,l),es.m(Rl,s,l),e(s,as,l),e(s,L,l),e(s,Js,l),ns.m(Xl,s,l),e(s,ts,l),e(s,T,l),e(s,Ws,l),ps.m(zl,s,l),e(s,os,l),e(s,H,l),e(s,$s,l),e(s,E,l),e(s,Ks,l),cs.m(Ul,s,l),e(s,is,l),e(s,P,l),e(s,Qs,l),e(s,j,l),e(s,Ys,l),rs.m(Gl,s,l),e(s,Bs,l),ys.m(Vl,s,l),e(s,ds,l),us.m(Jl,s,l),e(s,bs,l),Cs.m(Wl,s,l),e(s,fs,l),e(s,q,l),e(s,Zs,l),ms.m($l,s,l),e(s,As,l),Fs.m(Kl,s,l),e(s,hs,l),ks.m(Ql,s,l),e(s,_s,l),e(s,I,l),e(s,gs,l),Ds.m(Yl,s,l),e(s,xs,l),e(s,N,l),e(s,sl,l),vs.m(Zl,s,l),e(s,ws,l)},p:ll,i:ll,o:ll,d(s){s&&(a(B),a(Ms),a(y),a(Ls),a(d),a(Ts),a(u),a(Hs),a(b),a(Es),a(C),a(Ps),a(f),a(js),S.d(),a(O),a(m),a(qs),R.d(),a(X),a(A),a(Is),z.d(),a(U),a(F),a(Ns),a(h),a(Ss),G.d(),a(V),a(k),a(Os),J.d(),a(W),a(_),a(Rs),$.d(),a(K),a(D),a(Xs),Q.d(),a(Y),a(x),a(zs),Z.d(),a(g),a(v),a(Us),ss.d(),a(ls),a(w),a(Gs),a(M),a(Vs),es.d(),a(as),a(L),a(Js),ns.d(),a(ts),a(T),a(Ws),ps.d(),a(os),a(H),a($s),a(E),a(Ks),cs.d(),a(is),a(P),a(Qs),a(j),a(Ys),rs.d(),a(Bs),ys.d(),a(ds),us.d(),a(bs),Cs.d(),a(fs),a(q),a(Zs),ms.d(),a(As),Fs.d(),a(hs),ks.d(),a(_s),a(I),a(gs),Ds.d(),a(xs),a(N),a(sl),a(ws),vs.d())}}}const te={title:"Building C/C++ projects with CMake",description:"Leverage CMake to automate the source code build process",date:"2023-09-30",image:"/images/macbook-code.jpg",categories:["CMake"],published:!0};class pe extends se{constructor(B){super(),le(this,B,null,ee,gl,{})}}export{pe as default,te as metadata};
