!function(e){function n(e){function n(e,n){var l;for(l=0;l<n.length;++l)if(n[l].id==e.fillBetween)return n[l];return"number"==typeof e.fillBetween?(l=e.fillBetween,0>l||l>=n.length?null:n[l]):null}function l(e,l,i){if(null!=l.fillBetween){var t=n(l,e.getData());if(t){for(var s,f,o,u,p,r,h,a=i.pointsize,g=i.points,w=t.datapoints.pointsize,c=t.datapoints.points,v=[],B=l.lines.show,b=a>2&&i.format[2].y,d=B&&l.lines.steps,y=!0,k=0,z=0;;){if(k>=g.length)break;if(h=v.length,null==g[k]){for(m=0;m<a;++m)v.push(g[k+m]);k+=a}else if(z>=c.length){if(!B)for(m=0;m<a;++m)v.push(g[k+m]);k+=a}else if(null==c[z]){for(m=0;m<a;++m)v.push(null);y=!0,z+=w}else{if(s=g[k],f=g[k+1],u=c[z],p=c[z+1],r=0,s==u){for(m=0;m<a;++m)v.push(g[k+m]);r=p,k+=a,z+=w}else if(s>u){if(B&&k>0&&null!=g[k-a]){for(o=f+(g[k-a+1]-f)*(u-s)/(g[k-a]-s),v.push(u),v.push(o),m=2;m<a;++m)v.push(g[k+m]);r=p}z+=w}else{if(y&&B){k+=a;continue}for(m=0;m<a;++m)v.push(g[k+m]);B&&z>0&&null!=c[z-w]&&(r=p+(c[z-w+1]-p)*(s-u)/(c[z-w]-u)),k+=a}y=!1,h!=v.length&&b&&(v[h+2]=r)}if(d&&h!=v.length&&h>0&&null!=v[h]&&v[h]!=v[h-a]&&v[h+1]!=v[h-a+1]){for(m=0;m<a;++m)v[h+a+m]=v[h+m];v[h+1]=v[h-a+1]}}i.points=v}}}e.hooks.processDatapoints.push(l)}var l={series:{fillBetween:null}};e.plot.plugins.push({init:n,options:l,name:"fillbetween",version:"1.0"})}(jQuery);