F=require('fs'),{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env
L=(s,A,B,v=[],p=' ',k=4)=>{for(v[s]=p,/[$*]/.test(g[s])&&J.push(s);k--;)A[y=s+E[k]]&&A[y]!='#'&&!v[y]&&B.indexOf(y)<0&&L(y,A,B,v,p+M[k]);return v}
for(n=6;--n;){j='/i00'+n;g=''+F.readFileSync(I+j+'/level.txt');W=g.search('\n')+1;E=[-W,W,-1,1];M='udlr';P=g.search('@');h=P-P%W;o=''
for(p=h;++p<h+W-1;)if(g[p-W]+g[p+W]!='##'){J=[],R=L(p,g,[p-1,p+1]),B=[...J];Q=[[B,p,L(P,g,B)[p]]];V={}
for([b,c,s]of Q){f=L(c,R,b);if(!b.some(x=>g[x]<'*')&&f[p]){o+=s+f[p],P=p;break}for(k=4;k--;)for(x of b)if(f[w=x-E[k]]&&R[t=2*x-w]&&b.indexOf(t)<0&&!V[K=[N=b.map(z=>z-x?z:t).sort(),x]])V[K]=Q.push([N,x,s+f[w]+M[k]])}}
F.mkdirSync(O+j,{recursive:!0});F.writeFileSync(O+j+'/solution.txt',o)}
