import{s as Di,n as Zs}from"./scheduler.be0e0057.js";import{S as Fi,i as Wi,g as l,s as i,H as c,h as n,D as p,c as o,j as r,G as u,f as t,k as m,a as s}from"./index.c7c9b348.js";function Ni(ei){let h,el="Contents",ht,f,tl='<li><a href="#introduction">Introduction</a></li> <li><a href="#authentication">Authentication</a></li> <li><a href="#repositories">Repositories</a></li> <li><a href="#commits">Commits</a></li> <li><a href="#branches">Branches</a></li> <li><a href="#submodules">Submodules</a></li>',ft,d,al='<a id="introduction">Introduction</a>',dt,v,sl="This guide assumes that git has been installed on the local machine. For simplicity, it is also assumed that the user has Git Bash—especially for Windows—or a standard bash/zsh console with access to the git command line tools, along with a GitHub account.",vt,b,ll='<a id="authentication">Authentication</a>',bt,g,nl='GitHub, the repository cloud storage owned by Microsoft, now requires developers to authenticate their machines with SSH keys for added security. The official <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" rel="nofollow">online tutorial</a> covers all steps to generate an SSH key and add it to a GitHub account. These steps have been consolidated below for convenience.',gt,_,il="Generating an SSH key",_t,x,ol="<p><strong><em>NOTE:</em></strong> For Windows users, the following commands require a bash-like shell program, such as Git Bash, which is a separate terminal program installed alongside the Git toolchain. You can find this program in the search menu.</p>",xt,k,pl="First, create an SSH key with the email address tied to the GitHub account:",kt,w,wt,ti=`<code class="language-bash"><span class="token comment"># replace email address</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">"account@example.com"</span></code>`,Ct,C,cl="When prompted for a filename, press enter to accept the default. Choose a security passphrase at the next prompt or, alternatively, press enter to proceed without a passphrase.",yt,y,rl="<p><strong><em>NOTE:</em></strong> If you choose a security passphrase, it will be required for every future commit.</p>",Pt,P,ul="Start the background SSH agent:",Et,E,Tt,ai='<code class="language-bash"><span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>"</span></code>',Ht,T,ml="Add the SSH private key to the agent:",Lt,H,Rt,si='<code class="language-bash">ssh-add ~/.ssh/id_ed25519</code>',Mt,L,hl="Copy the SSH public key to the clipboard:",jt,R,St,li='<code class="language-bash">clip <span class="token operator">&lt;</span> ~/.ssh/id_ed25519.pub</code>',qt,M,fl="If you are not using Git Bash, and the <code>clip</code> utility is not installed in your toolchain, then you will probably receive the error <code>command not found: clip</code>. In this case, you may simply print the contents of <code>~/.ssh/id_ed25519.pub</code> to the console and copy the text key manually:",Gt,j,zt,ni='<code class="language-bash"><span class="token function">cat</span> ~/.ssh/id_ed25519.pub</code>',It,S,dl='This key must be added to the authorized SSH key list in the GitHub account settings. More detailed instructions for listing authorized keys can be found at the <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" rel="nofollow">online tutorial</a>.',Ot,q,vl='<a id="repositories">Repositories</a>',At,G,bl="Often, the first step to managing a project is to create or clone a git repository. GitHub is the most common remote repository web application, allowing developers to store large code bases, track changes, and collaborate. Before creating a new repository, you may wish to change the initial branch default name to “main”. This setting only needs to be changed once and, though not strictly necessary, may help to avoid extra steps when initializing future repositories. To update the default branch name:",Bt,z,Ut,ii=`<code class="language-bash"><span class="token comment"># only needs to be executed once</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> init.defaultBranch main</code>`,Dt,I,gl="To create a git repository from a local project directory:",Ft,O,Wt,oi=`<code class="language-bash"><span class="token comment"># navigate to project directory</span>
<span class="token function">git</span> init</code>`,Nt,A,_l="In most cases, the first step may be to identify specific files or directories to ignore from tracking. The relative path names of these files and directories can be added to a special gitignore file, which is located in the project root:",Kt,B,Qt,pi=`<code class="language-bash"><span class="token comment"># many developers choose to ignore directories that host virtual environments</span>
<span class="token builtin class-name">echo</span> venv <span class="token operator">>></span> .gitignore</code>`,Vt,U,xl="At this point, the repository is ready to be committed:",Yt,D,$t,ci=`<code class="language-bash"><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"First commit message"</span></code>`,Jt,F,kl="On GitHub, create a new empty repository. Then return to the console and push the code base to the remote server:",Xt,W,Zt,ri=`<code class="language-bash"><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:username/reponame
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main</code>`,ea,N,wl="Likewise, to clone a repository from GitHub:",ta,K,aa,ui='<code class="language-bash"><span class="token function">git</span> clone git@github.com:username/reponame</code>',sa,Q,Cl='<a id="commits">Commits</a>',la,V,yl="In git, a commit deposits new or modified code to the repository, usually with a subject line or description of the changes.",na,Y,Pl="To check the status of current changes:",ia,$,oa,mi='<code class="language-bash"><span class="token function">git</span> status</code>',pa,J,El="To inspect individual files:",ca,X,ra,hi='<code class="language-bash"><span class="token function">git</span> <span class="token function">diff</span> filename</code>',ua,Z,Tl="To add changes to a commit:",ma,ee,ha,fi=`<code class="language-bash"><span class="token comment"># add all files with changes</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token comment"># add an individual file</span>
<span class="token function">git</span> <span class="token function">add</span> filename
<span class="token comment"># add parts of an individual file (patch level)</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span> filename</code>`,fa,te,Hl="Using <code>commit</code> with the <code>-p</code> flag will start an interactive prompt that steps through each group of changes—a group being adjacent lines of code—with the option to add that group to the index. In this way, the developer can better associate changes to a commit.",da,ae,Ll="In general, it is recommended to separate changes into individual commits based on topic. Once changes are staged for a commit:",va,se,ba,di=`<code class="language-bash"><span class="token comment"># commit changes with full description</span>
<span class="token function">git</span> commit
<span class="token comment"># alternatively, use a brief inline message</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Brief description of changes"</span></code>`,ga,le,Rl="Using <code>commit</code> with no parameters will open a text editor, either a console-based editor like Vim or a standalone application like Notepad, for a description of the changes. The first line is reserved for the <strong>subject</strong>, which briefly summarizes the commit, while all subsequent lines belong to the <strong>body</strong> for more detailed comments. As an example, to add a new Python file that manages a serial connection:",_a,ne,xa,vi=`<code class="language-text">Class to manage external devices connected via serial

Custom class inherits Serial class from pyserial. It includes a modified read method that strips whitespace, e.g., '/r/n', from incoming serial data, as well as a modified write method that adds a newline character to any command string passed as an argument.</code>`,ka,ie,Ml="<p><strong><em>NOTE:</em></strong> Git uses Vim as its default text editor. Though powerful, Vim tends to be less popular among younger developers. Fortunately, git provides the ability to change the default editor in the core configuration file.</p>",wa,oe,jl="To change the default text editor:",Ca,pe,ya,bi=`<code class="language-bash"><span class="token comment"># change to nano</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token string">"nano"</span>
<span class="token comment"># change to vs code</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token string">"code --wait"</span></code>`,Pa,ce,Sl="To update the default username and email used for commits:",Ea,re,Ta,gi=`<code class="language-bash"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name username
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email address</code>`,Ha,ue,ql="Alternatively, to specify the username and email for an individual repository:",La,me,Ra,_i=`<code class="language-bash"><span class="token function">git</span> config user.name username
<span class="token function">git</span> config user.email address</code>`,Ma,he,Gl="Or, to specify the username and email for an individual commit:",ja,fe,Sa,xi='<code class="language-bash"><span class="token function">git</span> commit <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">"username email"</span></code>',qa,de,zl="To view all global configurations:",Ga,ve,za,ki='<code class="language-bash"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--edit</span></code>',Ia,be,Il="If you want to edit the last commit before pushing to remote storage, i.e., GitHub:",Oa,ge,Aa,wi='<code class="language-bash"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span></code>',Ba,_e,Ol="Committed changes can now be sent to remote storage:",Ua,xe,Da,Ci='<code class="language-bash"><span class="token function">git</span> push</code>',Fa,ke,Al="Lastly, to switch between local branches without committing changes:",Wa,we,Na,yi='<code class="language-bash"><span class="token function">git</span> stash</code>',Ka,Ce,Bl='<a id="branches">Branches</a>',Qa,ye,Ul="Creating branches",Va,Pe,Dl="The first branch created when initializing a repository is the <code>main</code> branch. This branch serves as the project root and, though not always recommended for collaborative work, may be renamed. Developers create separate daughter branches, where specific features are developed and tested, to prevent breaking changes from entering the project root.",Ya,Ee,Fl="To see a list of local branches on a repository:",$a,Te,Ja,Pi='<code class="language-bash"><span class="token function">git</span> branch</code>',Xa,He,Wl="To see a list of local and remote branches:",Za,Le,es,Ei=`<code class="language-bash"><span class="token comment"># use fetch to update the repository based on remote changes</span>
<span class="token function">git</span> fetch
<span class="token function">git</span> branch <span class="token parameter variable">-a</span></code>`,ts,Re,Nl="To create a new branch on an existing project:",as,Me,ss,Ti='<code class="language-bash"><span class="token function">git</span> branch branchname</code>',ls,je,Kl="To switch between branches:",ns,Se,is,Hi='<code class="language-bash"><span class="token function">git</span> checkout branchname</code>',os,qe,Ql="To immediately switch to a new branch:",ps,Ge,cs,Li='<code class="language-bash"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branchname</code>',rs,ze,Vl="To push changes to a new remote branch upstream:",us,Ie,ms,Ri='<code class="language-bash"><span class="token function">git</span> push --set-upstream origin branchname</code>',hs,Oe,Yl="Deleting branches",fs,Ae,$l="When “trimming” branches, it is often desired to remove both the local and remote instances.",ds,Be,vs,Mi=`<code class="language-bash"><span class="token comment"># delete remote branch where remote name is origin</span>
<span class="token function">git</span> push <span class="token parameter variable">-d</span> origin branchname
<span class="token comment"># delete local branch instance</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> branchname
<span class="token comment"># force local branch deletion</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span></code>`,bs,Ue,Jl="In the above command set, the first command deletes the remote branch, which shares the same name as the local branch. The <code>-d</code> option is an alias for <code>--delete</code>. Similarly, the <code>-D</code> option is an alias for <code>--delete --force</code>, which will delete the local branch regardless of its merge status—unmerged branches throw an error when the user attempts deletion.",gs,De,Xl="After trimming branches, the local list of remote branches may need to be updated manually to reflect the changes.",_s,Fe,xs,ji=`<code class="language-bash"><span class="token comment"># update local records</span>
<span class="token function">git</span> remote update origin <span class="token parameter variable">--prune</span>
<span class="token comment"># check that the branch list reflects recent changes</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span></code>`,ks,We,Zl="Renaming branches",ws,Ne,en="To rename a branch, first update the name of the local branch, then push the “new” renamed branch and delete the old version.",Cs,Ke,ys,Si=`<code class="language-bash"><span class="token comment"># navigate to branch</span>
<span class="token function">git</span> checkout old-branchname
<span class="token comment"># rename local branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> new-branchname
<span class="token comment"># push branch to remote origin</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-u</span> new-branchname
<span class="token comment"># delete old remote branch</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> old-branchname</code>`,Ps,Qe,tn="Merging branches",Es,Ve,an="Merging is generally reserved for a feature that has matured to the point where it is ready to be added to another branch. As an example, to merge the changes in branch <code>dev</code> to <code>main</code>:",Ts,Ye,Hs,qi=`<code class="language-bash"><span class="token comment"># switch to main branch</span>
<span class="token function">git</span> checkout main
<span class="token comment"># merge changes from dev branch</span>
<span class="token function">git</span> merge dev</code>`,Ls,$e,sn="Sometimes, conflicts arise when merging two branches, i.e., both branches have diverged and contain conflicting code blocks. In this case, one option is to simply undo the merge and reevaluate:",Rs,Je,Ms,Gi='<code class="language-bash"><span class="token function">git</span> merge <span class="token parameter variable">--abort</span></code>',js,Xe,ln="Otherwise, you will have to manually edit the source code to determine which set of changes should persist. Then, you will have to create a new commit to formally complete the merge process.",Ss,Ze,nn='<a id="submodules">Submodules</a>',qs,et,on="[Submodules](https://www.git-scm.com/book/en/v2/Git-Tools-Submodules) are one way to incorporate code from other projects that exist as git repositories. This is especially useful if the other repository contains library source code used across several projects. To add another repository as a submodule:",Gs,tt,zs,zi=`<code class="language-bash"><span class="token comment"># inside project directory</span>
<span class="token function">git</span> submodule <span class="token function">add</span> ssh://github.com/account/reponame</code>`,Is,at,pn="This command will add the submodule repository directory to the current project, as well as some hidden configuration files that help git distinguish the submodule from other subdirectories with source code. When working outside the submodule directory, its contents will not be tracked.",Os,st,cn="To clone a project with existing submodules:",As,lt,Bs,Ii=`<code class="language-bash"><span class="token function">git</span> clone ssh://github.com/account/reponame
<span class="token builtin class-name">cd</span> reponame
<span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update</code>`,Us,nt,rn="As a shorthand to replace the above command set:",Ds,it,Fs,Oi='<code class="language-bash"><span class="token function">git</span> clone --recurse-submodules ssh://github.com/account/reponame</code>',Ws,ot,un="If the project was cloned without the <code>--recurse-submodules</code> parameter, the <code>git submodule init</code> and <code>git submodule update</code> steps can be combined as <code>git submodule update --init</code>. Alternatively, to initialize, fetch, and checkout any nested submodules:",Ns,pt,Ks,Ai='<code class="language-bash"><span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span></code>',Qs,ct,mn="Lastly, to update existing submodules with changes:",Vs,rt,Ys,Bi='<code class="language-bash"><span class="token function">git</span> submodule update <span class="token parameter variable">--remote</span></code>',$s,ut,hn="Occassionally, older repositories may contain git submodules with https authentication. In some cases, it may be necessary to convert existing submodules from https to ssh:",Js,mt,Xs,Ui=`<code class="language-bash">perl <span class="token parameter variable">-i</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-e</span> <span class="token string">'s|https://(.*?)/|git@\\1:|g'</span> .gitmodules</code>`;return{c(){h=l("h2"),h.textContent=el,ht=i(),f=l("ul"),f.innerHTML=tl,ft=i(),d=l("h2"),d.innerHTML=al,dt=i(),v=l("p"),v.textContent=sl,vt=i(),b=l("h2"),b.innerHTML=ll,bt=i(),g=l("p"),g.innerHTML=nl,gt=i(),_=l("h3"),_.textContent=il,_t=i(),x=l("blockquote"),x.innerHTML=ol,xt=i(),k=l("p"),k.textContent=pl,kt=i(),w=l("pre"),wt=new c(!1),Ct=i(),C=l("p"),C.textContent=cl,yt=i(),y=l("blockquote"),y.innerHTML=rl,Pt=i(),P=l("p"),P.textContent=ul,Et=i(),E=l("pre"),Tt=new c(!1),Ht=i(),T=l("p"),T.textContent=ml,Lt=i(),H=l("pre"),Rt=new c(!1),Mt=i(),L=l("p"),L.textContent=hl,jt=i(),R=l("pre"),St=new c(!1),qt=i(),M=l("p"),M.innerHTML=fl,Gt=i(),j=l("pre"),zt=new c(!1),It=i(),S=l("p"),S.innerHTML=dl,Ot=i(),q=l("h2"),q.innerHTML=vl,At=i(),G=l("p"),G.textContent=bl,Bt=i(),z=l("pre"),Ut=new c(!1),Dt=i(),I=l("p"),I.textContent=gl,Ft=i(),O=l("pre"),Wt=new c(!1),Nt=i(),A=l("p"),A.textContent=_l,Kt=i(),B=l("pre"),Qt=new c(!1),Vt=i(),U=l("p"),U.textContent=xl,Yt=i(),D=l("pre"),$t=new c(!1),Jt=i(),F=l("p"),F.textContent=kl,Xt=i(),W=l("pre"),Zt=new c(!1),ea=i(),N=l("p"),N.textContent=wl,ta=i(),K=l("pre"),aa=new c(!1),sa=i(),Q=l("h2"),Q.innerHTML=Cl,la=i(),V=l("p"),V.textContent=yl,na=i(),Y=l("p"),Y.textContent=Pl,ia=i(),$=l("pre"),oa=new c(!1),pa=i(),J=l("p"),J.textContent=El,ca=i(),X=l("pre"),ra=new c(!1),ua=i(),Z=l("p"),Z.textContent=Tl,ma=i(),ee=l("pre"),ha=new c(!1),fa=i(),te=l("p"),te.innerHTML=Hl,da=i(),ae=l("p"),ae.textContent=Ll,va=i(),se=l("pre"),ba=new c(!1),ga=i(),le=l("p"),le.innerHTML=Rl,_a=i(),ne=l("pre"),xa=new c(!1),ka=i(),ie=l("blockquote"),ie.innerHTML=Ml,wa=i(),oe=l("p"),oe.textContent=jl,Ca=i(),pe=l("pre"),ya=new c(!1),Pa=i(),ce=l("p"),ce.textContent=Sl,Ea=i(),re=l("pre"),Ta=new c(!1),Ha=i(),ue=l("p"),ue.textContent=ql,La=i(),me=l("pre"),Ra=new c(!1),Ma=i(),he=l("p"),he.textContent=Gl,ja=i(),fe=l("pre"),Sa=new c(!1),qa=i(),de=l("p"),de.textContent=zl,Ga=i(),ve=l("pre"),za=new c(!1),Ia=i(),be=l("p"),be.textContent=Il,Oa=i(),ge=l("pre"),Aa=new c(!1),Ba=i(),_e=l("p"),_e.textContent=Ol,Ua=i(),xe=l("pre"),Da=new c(!1),Fa=i(),ke=l("p"),ke.textContent=Al,Wa=i(),we=l("pre"),Na=new c(!1),Ka=i(),Ce=l("h2"),Ce.innerHTML=Bl,Qa=i(),ye=l("h3"),ye.textContent=Ul,Va=i(),Pe=l("p"),Pe.innerHTML=Dl,Ya=i(),Ee=l("p"),Ee.textContent=Fl,$a=i(),Te=l("pre"),Ja=new c(!1),Xa=i(),He=l("p"),He.textContent=Wl,Za=i(),Le=l("pre"),es=new c(!1),ts=i(),Re=l("p"),Re.textContent=Nl,as=i(),Me=l("pre"),ss=new c(!1),ls=i(),je=l("p"),je.textContent=Kl,ns=i(),Se=l("pre"),is=new c(!1),os=i(),qe=l("p"),qe.textContent=Ql,ps=i(),Ge=l("pre"),cs=new c(!1),rs=i(),ze=l("p"),ze.textContent=Vl,us=i(),Ie=l("pre"),ms=new c(!1),hs=i(),Oe=l("h3"),Oe.textContent=Yl,fs=i(),Ae=l("p"),Ae.textContent=$l,ds=i(),Be=l("pre"),vs=new c(!1),bs=i(),Ue=l("p"),Ue.innerHTML=Jl,gs=i(),De=l("p"),De.textContent=Xl,_s=i(),Fe=l("pre"),xs=new c(!1),ks=i(),We=l("h3"),We.textContent=Zl,ws=i(),Ne=l("p"),Ne.textContent=en,Cs=i(),Ke=l("pre"),ys=new c(!1),Ps=i(),Qe=l("h3"),Qe.textContent=tn,Es=i(),Ve=l("p"),Ve.innerHTML=an,Ts=i(),Ye=l("pre"),Hs=new c(!1),Ls=i(),$e=l("p"),$e.textContent=sn,Rs=i(),Je=l("pre"),Ms=new c(!1),js=i(),Xe=l("p"),Xe.textContent=ln,Ss=i(),Ze=l("h2"),Ze.innerHTML=nn,qs=i(),et=l("p"),et.textContent=on,Gs=i(),tt=l("pre"),zs=new c(!1),Is=i(),at=l("p"),at.textContent=pn,Os=i(),st=l("p"),st.textContent=cn,As=i(),lt=l("pre"),Bs=new c(!1),Us=i(),nt=l("p"),nt.textContent=rn,Ds=i(),it=l("pre"),Fs=new c(!1),Ws=i(),ot=l("p"),ot.innerHTML=un,Ns=i(),pt=l("pre"),Ks=new c(!1),Qs=i(),ct=l("p"),ct.textContent=mn,Vs=i(),rt=l("pre"),Ys=new c(!1),$s=i(),ut=l("p"),ut.textContent=hn,Js=i(),mt=l("pre"),Xs=new c(!1),this.h()},l(e){h=n(e,"H2",{"data-svelte-h":!0}),p(h)!=="svelte-jpxk5s"&&(h.textContent=el),ht=o(e),f=n(e,"UL",{"data-svelte-h":!0}),p(f)!=="svelte-1r53ric"&&(f.innerHTML=tl),ft=o(e),d=n(e,"H2",{"data-svelte-h":!0}),p(d)!=="svelte-117zo8l"&&(d.innerHTML=al),dt=o(e),v=n(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-1hk4zoe"&&(v.textContent=sl),vt=o(e),b=n(e,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-3c6bxx"&&(b.innerHTML=ll),bt=o(e),g=n(e,"P",{"data-svelte-h":!0}),p(g)!=="svelte-dawof5"&&(g.innerHTML=nl),gt=o(e),_=n(e,"H3",{"data-svelte-h":!0}),p(_)!=="svelte-1u0j2ok"&&(_.textContent=il),_t=o(e),x=n(e,"BLOCKQUOTE",{"data-svelte-h":!0}),p(x)!=="svelte-12p4uq"&&(x.innerHTML=ol),xt=o(e),k=n(e,"P",{"data-svelte-h":!0}),p(k)!=="svelte-1qiv9zh"&&(k.textContent=pl),kt=o(e),w=n(e,"PRE",{class:!0});var a=r(w);wt=u(a,!1),a.forEach(t),Ct=o(e),C=n(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-1cvz4qx"&&(C.textContent=cl),yt=o(e),y=n(e,"BLOCKQUOTE",{"data-svelte-h":!0}),p(y)!=="svelte-5hs05a"&&(y.innerHTML=rl),Pt=o(e),P=n(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1trgzjo"&&(P.textContent=ul),Et=o(e),E=n(e,"PRE",{class:!0});var fn=r(E);Tt=u(fn,!1),fn.forEach(t),Ht=o(e),T=n(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-9wxc0t"&&(T.textContent=ml),Lt=o(e),H=n(e,"PRE",{class:!0});var dn=r(H);Rt=u(dn,!1),dn.forEach(t),Mt=o(e),L=n(e,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1or1kxk"&&(L.textContent=hl),jt=o(e),R=n(e,"PRE",{class:!0});var vn=r(R);St=u(vn,!1),vn.forEach(t),qt=o(e),M=n(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-wqzvas"&&(M.innerHTML=fl),Gt=o(e),j=n(e,"PRE",{class:!0});var bn=r(j);zt=u(bn,!1),bn.forEach(t),It=o(e),S=n(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1lq509n"&&(S.innerHTML=dl),Ot=o(e),q=n(e,"H2",{"data-svelte-h":!0}),p(q)!=="svelte-1v2ixzn"&&(q.innerHTML=vl),At=o(e),G=n(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-ecsbea"&&(G.textContent=bl),Bt=o(e),z=n(e,"PRE",{class:!0});var gn=r(z);Ut=u(gn,!1),gn.forEach(t),Dt=o(e),I=n(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-1d2e0yg"&&(I.textContent=gl),Ft=o(e),O=n(e,"PRE",{class:!0});var _n=r(O);Wt=u(_n,!1),_n.forEach(t),Nt=o(e),A=n(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-19ejoqt"&&(A.textContent=_l),Kt=o(e),B=n(e,"PRE",{class:!0});var xn=r(B);Qt=u(xn,!1),xn.forEach(t),Vt=o(e),U=n(e,"P",{"data-svelte-h":!0}),p(U)!=="svelte-4x47t7"&&(U.textContent=xl),Yt=o(e),D=n(e,"PRE",{class:!0});var kn=r(D);$t=u(kn,!1),kn.forEach(t),Jt=o(e),F=n(e,"P",{"data-svelte-h":!0}),p(F)!=="svelte-109amop"&&(F.textContent=kl),Xt=o(e),W=n(e,"PRE",{class:!0});var wn=r(W);Zt=u(wn,!1),wn.forEach(t),ea=o(e),N=n(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-fxeoi1"&&(N.textContent=wl),ta=o(e),K=n(e,"PRE",{class:!0});var Cn=r(K);aa=u(Cn,!1),Cn.forEach(t),sa=o(e),Q=n(e,"H2",{"data-svelte-h":!0}),p(Q)!=="svelte-ym3wev"&&(Q.innerHTML=Cl),la=o(e),V=n(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-1l8u1ij"&&(V.textContent=yl),na=o(e),Y=n(e,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-1gn1ipp"&&(Y.textContent=Pl),ia=o(e),$=n(e,"PRE",{class:!0});var yn=r($);oa=u(yn,!1),yn.forEach(t),pa=o(e),J=n(e,"P",{"data-svelte-h":!0}),p(J)!=="svelte-1e5t33l"&&(J.textContent=El),ca=o(e),X=n(e,"PRE",{class:!0});var Pn=r(X);ra=u(Pn,!1),Pn.forEach(t),ua=o(e),Z=n(e,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-rle2je"&&(Z.textContent=Tl),ma=o(e),ee=n(e,"PRE",{class:!0});var En=r(ee);ha=u(En,!1),En.forEach(t),fa=o(e),te=n(e,"P",{"data-svelte-h":!0}),p(te)!=="svelte-cpa5ms"&&(te.innerHTML=Hl),da=o(e),ae=n(e,"P",{"data-svelte-h":!0}),p(ae)!=="svelte-1dw8gbf"&&(ae.textContent=Ll),va=o(e),se=n(e,"PRE",{class:!0});var Tn=r(se);ba=u(Tn,!1),Tn.forEach(t),ga=o(e),le=n(e,"P",{"data-svelte-h":!0}),p(le)!=="svelte-wvrapn"&&(le.innerHTML=Rl),_a=o(e),ne=n(e,"PRE",{class:!0});var Hn=r(ne);xa=u(Hn,!1),Hn.forEach(t),ka=o(e),ie=n(e,"BLOCKQUOTE",{"data-svelte-h":!0}),p(ie)!=="svelte-bb9s6k"&&(ie.innerHTML=Ml),wa=o(e),oe=n(e,"P",{"data-svelte-h":!0}),p(oe)!=="svelte-1f2izlj"&&(oe.textContent=jl),Ca=o(e),pe=n(e,"PRE",{class:!0});var Ln=r(pe);ya=u(Ln,!1),Ln.forEach(t),Pa=o(e),ce=n(e,"P",{"data-svelte-h":!0}),p(ce)!=="svelte-on7wwx"&&(ce.textContent=Sl),Ea=o(e),re=n(e,"PRE",{class:!0});var Rn=r(re);Ta=u(Rn,!1),Rn.forEach(t),Ha=o(e),ue=n(e,"P",{"data-svelte-h":!0}),p(ue)!=="svelte-1xwn9sj"&&(ue.textContent=ql),La=o(e),me=n(e,"PRE",{class:!0});var Mn=r(me);Ra=u(Mn,!1),Mn.forEach(t),Ma=o(e),he=n(e,"P",{"data-svelte-h":!0}),p(he)!=="svelte-1v9khxd"&&(he.textContent=Gl),ja=o(e),fe=n(e,"PRE",{class:!0});var jn=r(fe);Sa=u(jn,!1),jn.forEach(t),qa=o(e),de=n(e,"P",{"data-svelte-h":!0}),p(de)!=="svelte-18ssv9d"&&(de.textContent=zl),Ga=o(e),ve=n(e,"PRE",{class:!0});var Sn=r(ve);za=u(Sn,!1),Sn.forEach(t),Ia=o(e),be=n(e,"P",{"data-svelte-h":!0}),p(be)!=="svelte-1qq0w19"&&(be.textContent=Il),Oa=o(e),ge=n(e,"PRE",{class:!0});var qn=r(ge);Aa=u(qn,!1),qn.forEach(t),Ba=o(e),_e=n(e,"P",{"data-svelte-h":!0}),p(_e)!=="svelte-s0dii"&&(_e.textContent=Ol),Ua=o(e),xe=n(e,"PRE",{class:!0});var Gn=r(xe);Da=u(Gn,!1),Gn.forEach(t),Fa=o(e),ke=n(e,"P",{"data-svelte-h":!0}),p(ke)!=="svelte-7rvjp3"&&(ke.textContent=Al),Wa=o(e),we=n(e,"PRE",{class:!0});var zn=r(we);Na=u(zn,!1),zn.forEach(t),Ka=o(e),Ce=n(e,"H2",{"data-svelte-h":!0}),p(Ce)!=="svelte-7yy3df"&&(Ce.innerHTML=Bl),Qa=o(e),ye=n(e,"H3",{"data-svelte-h":!0}),p(ye)!=="svelte-di5x51"&&(ye.textContent=Ul),Va=o(e),Pe=n(e,"P",{"data-svelte-h":!0}),p(Pe)!=="svelte-vnbzez"&&(Pe.innerHTML=Dl),Ya=o(e),Ee=n(e,"P",{"data-svelte-h":!0}),p(Ee)!=="svelte-1ygqbix"&&(Ee.textContent=Fl),$a=o(e),Te=n(e,"PRE",{class:!0});var In=r(Te);Ja=u(In,!1),In.forEach(t),Xa=o(e),He=n(e,"P",{"data-svelte-h":!0}),p(He)!=="svelte-15akxku"&&(He.textContent=Wl),Za=o(e),Le=n(e,"PRE",{class:!0});var On=r(Le);es=u(On,!1),On.forEach(t),ts=o(e),Re=n(e,"P",{"data-svelte-h":!0}),p(Re)!=="svelte-1vq24p8"&&(Re.textContent=Nl),as=o(e),Me=n(e,"PRE",{class:!0});var An=r(Me);ss=u(An,!1),An.forEach(t),ls=o(e),je=n(e,"P",{"data-svelte-h":!0}),p(je)!=="svelte-1nk4lfd"&&(je.textContent=Kl),ns=o(e),Se=n(e,"PRE",{class:!0});var Bn=r(Se);is=u(Bn,!1),Bn.forEach(t),os=o(e),qe=n(e,"P",{"data-svelte-h":!0}),p(qe)!=="svelte-15v4lx3"&&(qe.textContent=Ql),ps=o(e),Ge=n(e,"PRE",{class:!0});var Un=r(Ge);cs=u(Un,!1),Un.forEach(t),rs=o(e),ze=n(e,"P",{"data-svelte-h":!0}),p(ze)!=="svelte-1a9vr6b"&&(ze.textContent=Vl),us=o(e),Ie=n(e,"PRE",{class:!0});var Dn=r(Ie);ms=u(Dn,!1),Dn.forEach(t),hs=o(e),Oe=n(e,"H3",{"data-svelte-h":!0}),p(Oe)!=="svelte-1burudm"&&(Oe.textContent=Yl),fs=o(e),Ae=n(e,"P",{"data-svelte-h":!0}),p(Ae)!=="svelte-1cori0g"&&(Ae.textContent=$l),ds=o(e),Be=n(e,"PRE",{class:!0});var Fn=r(Be);vs=u(Fn,!1),Fn.forEach(t),bs=o(e),Ue=n(e,"P",{"data-svelte-h":!0}),p(Ue)!=="svelte-18ty9k2"&&(Ue.innerHTML=Jl),gs=o(e),De=n(e,"P",{"data-svelte-h":!0}),p(De)!=="svelte-117rhfx"&&(De.textContent=Xl),_s=o(e),Fe=n(e,"PRE",{class:!0});var Wn=r(Fe);xs=u(Wn,!1),Wn.forEach(t),ks=o(e),We=n(e,"H3",{"data-svelte-h":!0}),p(We)!=="svelte-vr8cuj"&&(We.textContent=Zl),ws=o(e),Ne=n(e,"P",{"data-svelte-h":!0}),p(Ne)!=="svelte-1joyyp1"&&(Ne.textContent=en),Cs=o(e),Ke=n(e,"PRE",{class:!0});var Nn=r(Ke);ys=u(Nn,!1),Nn.forEach(t),Ps=o(e),Qe=n(e,"H3",{"data-svelte-h":!0}),p(Qe)!=="svelte-qfbqod"&&(Qe.textContent=tn),Es=o(e),Ve=n(e,"P",{"data-svelte-h":!0}),p(Ve)!=="svelte-19x3jxo"&&(Ve.innerHTML=an),Ts=o(e),Ye=n(e,"PRE",{class:!0});var Kn=r(Ye);Hs=u(Kn,!1),Kn.forEach(t),Ls=o(e),$e=n(e,"P",{"data-svelte-h":!0}),p($e)!=="svelte-7gr392"&&($e.textContent=sn),Rs=o(e),Je=n(e,"PRE",{class:!0});var Qn=r(Je);Ms=u(Qn,!1),Qn.forEach(t),js=o(e),Xe=n(e,"P",{"data-svelte-h":!0}),p(Xe)!=="svelte-rand1x"&&(Xe.textContent=ln),Ss=o(e),Ze=n(e,"H2",{"data-svelte-h":!0}),p(Ze)!=="svelte-1at35ij"&&(Ze.innerHTML=nn),qs=o(e),et=n(e,"P",{"data-svelte-h":!0}),p(et)!=="svelte-1a5depd"&&(et.textContent=on),Gs=o(e),tt=n(e,"PRE",{class:!0});var Vn=r(tt);zs=u(Vn,!1),Vn.forEach(t),Is=o(e),at=n(e,"P",{"data-svelte-h":!0}),p(at)!=="svelte-e0mh0k"&&(at.textContent=pn),Os=o(e),st=n(e,"P",{"data-svelte-h":!0}),p(st)!=="svelte-1munt8k"&&(st.textContent=cn),As=o(e),lt=n(e,"PRE",{class:!0});var Yn=r(lt);Bs=u(Yn,!1),Yn.forEach(t),Us=o(e),nt=n(e,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-1xp3ngk"&&(nt.textContent=rn),Ds=o(e),it=n(e,"PRE",{class:!0});var $n=r(it);Fs=u($n,!1),$n.forEach(t),Ws=o(e),ot=n(e,"P",{"data-svelte-h":!0}),p(ot)!=="svelte-epdm2r"&&(ot.innerHTML=un),Ns=o(e),pt=n(e,"PRE",{class:!0});var Jn=r(pt);Ks=u(Jn,!1),Jn.forEach(t),Qs=o(e),ct=n(e,"P",{"data-svelte-h":!0}),p(ct)!=="svelte-1p4hf56"&&(ct.textContent=mn),Vs=o(e),rt=n(e,"PRE",{class:!0});var Xn=r(rt);Ys=u(Xn,!1),Xn.forEach(t),$s=o(e),ut=n(e,"P",{"data-svelte-h":!0}),p(ut)!=="svelte-cymjnz"&&(ut.textContent=hn),Js=o(e),mt=n(e,"PRE",{class:!0});var Zn=r(mt);Xs=u(Zn,!1),Zn.forEach(t),this.h()},h(){wt.a=null,m(w,"class","language-bash"),Tt.a=null,m(E,"class","language-bash"),Rt.a=null,m(H,"class","language-bash"),St.a=null,m(R,"class","language-bash"),zt.a=null,m(j,"class","language-bash"),Ut.a=null,m(z,"class","language-bash"),Wt.a=null,m(O,"class","language-bash"),Qt.a=null,m(B,"class","language-bash"),$t.a=null,m(D,"class","language-bash"),Zt.a=null,m(W,"class","language-bash"),aa.a=null,m(K,"class","language-bash"),oa.a=null,m($,"class","language-bash"),ra.a=null,m(X,"class","language-bash"),ha.a=null,m(ee,"class","language-bash"),ba.a=null,m(se,"class","language-bash"),xa.a=null,m(ne,"class","language-text"),ya.a=null,m(pe,"class","language-bash"),Ta.a=null,m(re,"class","language-bash"),Ra.a=null,m(me,"class","language-bash"),Sa.a=null,m(fe,"class","language-bash"),za.a=null,m(ve,"class","language-bash"),Aa.a=null,m(ge,"class","language-bash"),Da.a=null,m(xe,"class","language-bash"),Na.a=null,m(we,"class","language-bash"),Ja.a=null,m(Te,"class","language-bash"),es.a=null,m(Le,"class","language-bash"),ss.a=null,m(Me,"class","language-bash"),is.a=null,m(Se,"class","language-bash"),cs.a=null,m(Ge,"class","language-bash"),ms.a=null,m(Ie,"class","language-bash"),vs.a=null,m(Be,"class","language-bash"),xs.a=null,m(Fe,"class","language-bash"),ys.a=null,m(Ke,"class","language-bash"),Hs.a=null,m(Ye,"class","language-bash"),Ms.a=null,m(Je,"class","language-bash"),zs.a=null,m(tt,"class","language-bash"),Bs.a=null,m(lt,"class","language-bash"),Fs.a=null,m(it,"class","language-bash"),Ks.a=null,m(pt,"class","language-bash"),Ys.a=null,m(rt,"class","language-bash"),Xs.a=null,m(mt,"class","language-bash")},m(e,a){s(e,h,a),s(e,ht,a),s(e,f,a),s(e,ft,a),s(e,d,a),s(e,dt,a),s(e,v,a),s(e,vt,a),s(e,b,a),s(e,bt,a),s(e,g,a),s(e,gt,a),s(e,_,a),s(e,_t,a),s(e,x,a),s(e,xt,a),s(e,k,a),s(e,kt,a),s(e,w,a),wt.m(ti,w),s(e,Ct,a),s(e,C,a),s(e,yt,a),s(e,y,a),s(e,Pt,a),s(e,P,a),s(e,Et,a),s(e,E,a),Tt.m(ai,E),s(e,Ht,a),s(e,T,a),s(e,Lt,a),s(e,H,a),Rt.m(si,H),s(e,Mt,a),s(e,L,a),s(e,jt,a),s(e,R,a),St.m(li,R),s(e,qt,a),s(e,M,a),s(e,Gt,a),s(e,j,a),zt.m(ni,j),s(e,It,a),s(e,S,a),s(e,Ot,a),s(e,q,a),s(e,At,a),s(e,G,a),s(e,Bt,a),s(e,z,a),Ut.m(ii,z),s(e,Dt,a),s(e,I,a),s(e,Ft,a),s(e,O,a),Wt.m(oi,O),s(e,Nt,a),s(e,A,a),s(e,Kt,a),s(e,B,a),Qt.m(pi,B),s(e,Vt,a),s(e,U,a),s(e,Yt,a),s(e,D,a),$t.m(ci,D),s(e,Jt,a),s(e,F,a),s(e,Xt,a),s(e,W,a),Zt.m(ri,W),s(e,ea,a),s(e,N,a),s(e,ta,a),s(e,K,a),aa.m(ui,K),s(e,sa,a),s(e,Q,a),s(e,la,a),s(e,V,a),s(e,na,a),s(e,Y,a),s(e,ia,a),s(e,$,a),oa.m(mi,$),s(e,pa,a),s(e,J,a),s(e,ca,a),s(e,X,a),ra.m(hi,X),s(e,ua,a),s(e,Z,a),s(e,ma,a),s(e,ee,a),ha.m(fi,ee),s(e,fa,a),s(e,te,a),s(e,da,a),s(e,ae,a),s(e,va,a),s(e,se,a),ba.m(di,se),s(e,ga,a),s(e,le,a),s(e,_a,a),s(e,ne,a),xa.m(vi,ne),s(e,ka,a),s(e,ie,a),s(e,wa,a),s(e,oe,a),s(e,Ca,a),s(e,pe,a),ya.m(bi,pe),s(e,Pa,a),s(e,ce,a),s(e,Ea,a),s(e,re,a),Ta.m(gi,re),s(e,Ha,a),s(e,ue,a),s(e,La,a),s(e,me,a),Ra.m(_i,me),s(e,Ma,a),s(e,he,a),s(e,ja,a),s(e,fe,a),Sa.m(xi,fe),s(e,qa,a),s(e,de,a),s(e,Ga,a),s(e,ve,a),za.m(ki,ve),s(e,Ia,a),s(e,be,a),s(e,Oa,a),s(e,ge,a),Aa.m(wi,ge),s(e,Ba,a),s(e,_e,a),s(e,Ua,a),s(e,xe,a),Da.m(Ci,xe),s(e,Fa,a),s(e,ke,a),s(e,Wa,a),s(e,we,a),Na.m(yi,we),s(e,Ka,a),s(e,Ce,a),s(e,Qa,a),s(e,ye,a),s(e,Va,a),s(e,Pe,a),s(e,Ya,a),s(e,Ee,a),s(e,$a,a),s(e,Te,a),Ja.m(Pi,Te),s(e,Xa,a),s(e,He,a),s(e,Za,a),s(e,Le,a),es.m(Ei,Le),s(e,ts,a),s(e,Re,a),s(e,as,a),s(e,Me,a),ss.m(Ti,Me),s(e,ls,a),s(e,je,a),s(e,ns,a),s(e,Se,a),is.m(Hi,Se),s(e,os,a),s(e,qe,a),s(e,ps,a),s(e,Ge,a),cs.m(Li,Ge),s(e,rs,a),s(e,ze,a),s(e,us,a),s(e,Ie,a),ms.m(Ri,Ie),s(e,hs,a),s(e,Oe,a),s(e,fs,a),s(e,Ae,a),s(e,ds,a),s(e,Be,a),vs.m(Mi,Be),s(e,bs,a),s(e,Ue,a),s(e,gs,a),s(e,De,a),s(e,_s,a),s(e,Fe,a),xs.m(ji,Fe),s(e,ks,a),s(e,We,a),s(e,ws,a),s(e,Ne,a),s(e,Cs,a),s(e,Ke,a),ys.m(Si,Ke),s(e,Ps,a),s(e,Qe,a),s(e,Es,a),s(e,Ve,a),s(e,Ts,a),s(e,Ye,a),Hs.m(qi,Ye),s(e,Ls,a),s(e,$e,a),s(e,Rs,a),s(e,Je,a),Ms.m(Gi,Je),s(e,js,a),s(e,Xe,a),s(e,Ss,a),s(e,Ze,a),s(e,qs,a),s(e,et,a),s(e,Gs,a),s(e,tt,a),zs.m(zi,tt),s(e,Is,a),s(e,at,a),s(e,Os,a),s(e,st,a),s(e,As,a),s(e,lt,a),Bs.m(Ii,lt),s(e,Us,a),s(e,nt,a),s(e,Ds,a),s(e,it,a),Fs.m(Oi,it),s(e,Ws,a),s(e,ot,a),s(e,Ns,a),s(e,pt,a),Ks.m(Ai,pt),s(e,Qs,a),s(e,ct,a),s(e,Vs,a),s(e,rt,a),Ys.m(Bi,rt),s(e,$s,a),s(e,ut,a),s(e,Js,a),s(e,mt,a),Xs.m(Ui,mt)},p:Zs,i:Zs,o:Zs,d(e){e&&(t(h),t(ht),t(f),t(ft),t(d),t(dt),t(v),t(vt),t(b),t(bt),t(g),t(gt),t(_),t(_t),t(x),t(xt),t(k),t(kt),t(w),t(Ct),t(C),t(yt),t(y),t(Pt),t(P),t(Et),t(E),t(Ht),t(T),t(Lt),t(H),t(Mt),t(L),t(jt),t(R),t(qt),t(M),t(Gt),t(j),t(It),t(S),t(Ot),t(q),t(At),t(G),t(Bt),t(z),t(Dt),t(I),t(Ft),t(O),t(Nt),t(A),t(Kt),t(B),t(Vt),t(U),t(Yt),t(D),t(Jt),t(F),t(Xt),t(W),t(ea),t(N),t(ta),t(K),t(sa),t(Q),t(la),t(V),t(na),t(Y),t(ia),t($),t(pa),t(J),t(ca),t(X),t(ua),t(Z),t(ma),t(ee),t(fa),t(te),t(da),t(ae),t(va),t(se),t(ga),t(le),t(_a),t(ne),t(ka),t(ie),t(wa),t(oe),t(Ca),t(pe),t(Pa),t(ce),t(Ea),t(re),t(Ha),t(ue),t(La),t(me),t(Ma),t(he),t(ja),t(fe),t(qa),t(de),t(Ga),t(ve),t(Ia),t(be),t(Oa),t(ge),t(Ba),t(_e),t(Ua),t(xe),t(Fa),t(ke),t(Wa),t(we),t(Ka),t(Ce),t(Qa),t(ye),t(Va),t(Pe),t(Ya),t(Ee),t($a),t(Te),t(Xa),t(He),t(Za),t(Le),t(ts),t(Re),t(as),t(Me),t(ls),t(je),t(ns),t(Se),t(os),t(qe),t(ps),t(Ge),t(rs),t(ze),t(us),t(Ie),t(hs),t(Oe),t(fs),t(Ae),t(ds),t(Be),t(bs),t(Ue),t(gs),t(De),t(_s),t(Fe),t(ks),t(We),t(ws),t(Ne),t(Cs),t(Ke),t(Ps),t(Qe),t(Es),t(Ve),t(Ts),t(Ye),t(Ls),t($e),t(Rs),t(Je),t(js),t(Xe),t(Ss),t(Ze),t(qs),t(et),t(Gs),t(tt),t(Is),t(at),t(Os),t(st),t(As),t(lt),t(Us),t(nt),t(Ds),t(it),t(Ws),t(ot),t(Ns),t(pt),t(Qs),t(ct),t(Vs),t(rt),t($s),t(ut),t(Js),t(mt))}}}const Vi={title:"Managing code repositories with git",description:"Learn to version codebases for easy collaboration",date:"2022-10-25",image:"/images/git.jpg",categories:["Git","GitHub"],published:!0};class Yi extends Fi{constructor(h){super(),Wi(this,h,null,Ni,Di,{})}}export{Yi as default,Vi as metadata};