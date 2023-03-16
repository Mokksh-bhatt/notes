(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,o=Object.assign;function a(e,t,n){return e.replace(t,n)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function c(e,t,n){return e.slice(t,n)}function h(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,m=0,g=0,y=0,v="";function b(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:f,column:p,length:o,return:""}}function w(e,t){return o(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function E(){return y=g<m?u(v,g++):0,p++,10===y&&(p=1,f++),y}function T(){return u(v,g)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return f=p=1,m=h(v=e),g=0,[]}function k(e){var t,n;return(t=g-1,n=function e(t){for(;E();)switch(y){case t:return g;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:E()}return g}(91===e?e+2:40===e?e+1:e),c(v,t,n)).trim()}var S="-ms-",C="-moz-",A="-webkit-",x="comm",O="rule",N="decl",R="@keyframes";function D(e,t){for(var n="",r=e.length,i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function P(e,t,n,r){switch(e.type){case"@import":case N:return e.return=e.return||e.value;case x:return"";case R:return e.return=e.value+"{"+D(e.children,r)+"}";case O:e.value=e.props.join(",")}return h(n=D(e.children,r))?e.return=e.value+"{"+n+"}":""}function M(e,t,n,r,s,o,l,u,h,d,f){for(var p=s-1,m=0===s?o:[""],g=m.length,y=0,v=0,w=0;y<r;++y)for(var E=0,T=c(e,p+1,p=i(v=l[y])),_=e;E<g;++E)(_=(v>0?m[E]+" "+T:a(T,/&\f/g,m[E])).trim())&&(h[w++]=_);return b(e,t,n,0===s?O:u,h,d,f)}function L(e,t,n,r){return b(e,t,n,N,c(e,0,r),c(e,r+1,-1),r)}var V=function(e,t,n){for(var r=0,i=0;r=i,i=T(),38===r&&12===i&&(t[n]=1),!_(i);)E();return c(v,e,g)},U=function(e,t){var n=-1,r=44;do switch(_(r)){case 0:38===r&&12===T()&&(t[n]=1),e[n]+=V(g-1,t,n);break;case 2:e[n]+=k(r);break;case 4:if(44===r){e[++n]=58===T()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=s(r)}while(r=E());return e},F=function(e,t){var n;return n=U(I(e),t),v="",n},j=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||j.get(n))&&!r){j.set(e,!0);for(var i=[],s=F(t,i),o=n.props,a=0,l=0;a<s.length;a++)for(var u=0;u<o.length;u++,l++)e.props[l]=i[a]?s[a].replace(/&\f/g,o[u]):o[u]+" "+s[a]}}},z=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case N:e.return=function e(t,n){switch(45^u(t,0)?(((n<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+C+t+S+t+t;case 6828:case 4268:return A+t+S+t+t;case 6165:return A+t+S+"flex-"+t+t;case 5187:return A+t+a(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+S+"flex-$1$2")+t;case 5443:return A+t+S+"flex-item-"+a(t,/flex-|-self/,"")+t;case 4675:return A+t+S+"flex-line-pack"+a(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+S+a(t,"shrink","negative")+t;case 5292:return A+t+S+a(t,"basis","preferred-size")+t;case 6060:return A+"box-"+a(t,"-grow","")+A+t+S+a(t,"grow","positive")+t;case 4554:return A+a(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return a(a(a(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return a(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return a(a(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return a(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-n>6)switch(u(t,n+1)){case 109:if(45!==u(t,n+4))break;case 102:return a(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+C+(108==u(t,n+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(a(t,"stretch","fill-available"),n)+t:t}break;case 4949:if(115!==u(t,n+1))break;case 6444:switch(u(t,h(t)-3-(~l(t,"!important")&&10))){case 107:return a(t,":",":"+A)+t;case 101:return a(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===u(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+S+"$2box$3")+t}break;case 5936:switch(u(t,n+11)){case 114:return A+t+S+a(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+S+a(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+S+a(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+S+t+t}return t}(e.value,e.length);break;case R:return D([w(e,{value:a(e.value,"@","@"+A)})],r);case O:if(e.length)return e.props.map(function(t){var n;switch(n=t,(n=/(::plac\w+|:read-\w+)/.exec(n))?n[0]:n){case":read-only":case":read-write":return D([w(e,{props:[a(t,/:(read-\w+)/,":"+C+"$1")]})],r);case"::placeholder":return D([w(e,{props:[a(t,/:(plac\w+)/,":"+A+"input-$1")]}),w(e,{props:[a(t,/:(plac\w+)/,":"+C+"$1")]}),w(e,{props:[a(t,/:(plac\w+)/,S+"input-$1")]})],r)}return""}).join("")}}],q=function(e){var t,n,i,o,m,w=e.key;if("css"===w){var S=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(S,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var C=e.stylisPlugins||B,A={},O=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+w+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)A[t[n]]=!0;O.push(e)});var N=(n=(t=[$,z].concat(C,[P,(i=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,r,i,s){for(var o="",a=0;a<n;a++)o+=t[a](e,r,i,s)||"";return o}),R=function(e){var t,n;return D((n=function e(t,n,r,i,o,m,w,I,S){for(var C,A=0,O=0,N=w,R=0,D=0,P=0,V=1,U=1,F=1,j=0,$="",z=o,B=m,q=i,Z=$;U;)switch(P=j,j=E()){case 40:if(108!=P&&58==u(Z,N-1)){-1!=l(Z+=a(k(j),"&","&\f"),"&\f")&&(F=-1);break}case 34:case 39:case 91:Z+=k(j);break;case 9:case 10:case 13:case 32:Z+=function(e){for(;y=T();)if(y<33)E();else break;return _(e)>2||_(y)>3?"":" "}(P);break;case 92:Z+=function(e,t){for(var n;--t&&E()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return n=g+(t<6&&32==T()&&32==E()),c(v,e,n)}(g-1,7);continue;case 47:switch(T()){case 42:case 47:d(b(C=function(e,t){for(;E();)if(e+y===57)break;else if(e+y===84&&47===T())break;return"/*"+c(v,t,g-1)+"*"+s(47===e?e:E())}(E(),g),n,r,x,s(y),c(C,2,-2),0),S);break;default:Z+="/"}break;case 123*V:I[A++]=h(Z)*F;case 125*V:case 59:case 0:switch(j){case 0:case 125:U=0;case 59+O:D>0&&h(Z)-N&&d(D>32?L(Z+";",i,r,N-1):L(a(Z," ","")+";",i,r,N-2),S);break;case 59:Z+=";";default:if(d(q=M(Z,n,r,A,O,o,I,$,z=[],B=[],N),m),123===j){if(0===O)e(Z,n,q,q,z,m,N,I,B);else switch(99===R&&110===u(Z,3)?100:R){case 100:case 109:case 115:e(t,q,q,i&&d(M(t,q,q,0,0,o,I,$,o,z=[],N),B),o,B,N,I,i?z:B);break;default:e(Z,q,q,q,[""],B,0,I,B)}}}A=O=D=0,V=F=1,$=Z="",N=w;break;case 58:N=1+h(Z),D=P;default:if(V<1){if(123==j)--V;else if(125==j&&0==V++&&125==(y=g>0?u(v,--g):0,p--,10===y&&(p=1,f--),y))continue}switch(Z+=s(j),j*V){case 38:F=O>0?1:(Z+="\f",-1);break;case 44:I[A++]=(h(Z)-1)*F,F=1;break;case 64:45===T()&&(Z+=k(E())),R=T(),O=N=h($=Z+=function(e){for(;!_(T());)E();return c(v,e,g)}(g)),j++;break;case 45:45===P&&2==h(Z)&&(V=0)}}return m}("",null,null,null,[""],t=I(t=e),0,[0],t),v="",n),N)},V={key:w,sheet:new r({key:w,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:A,registered:{},insert:function(e,t,n,r){m=n,R(e?e+"{"+t.styles+"}":t.styles),r&&(V.inserted[t.name]=!0)}};return V.sheet.hydrate(O),V}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},2443:function(e,t,n){"use strict";n.d(t,{T:function(){return a},w:function(){return o}});var r=n(7294),i=n(8417);n(2324),n(7278);var s=(0,r.createContext)("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null);s.Provider;var o=function(e){return(0,r.forwardRef)(function(t,n){return e(t,(0,r.useContext)(s),n)})},a=(0,r.createContext)({})},917:function(e,t,n){"use strict";n.d(t,{F4:function(){return c},xB:function(){return l}});var r=n(7294);n(8417);var i=n(2443);n(8679);var s=n(444),o=n(2324),a=n(7278),l=(0,i.w)(function(e,t){var n=e.styles,l=(0,o.O)([n],void 0,(0,r.useContext)(i.T)),u=(0,r.useRef)();return(0,a.j)(function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),u.current=[n,r],function(){n.flush()}},[t]),(0,a.j)(function(){var e=u.current,n=e[0];if(e[1]){e[1]=!1;return}if(void 0!==l.next&&(0,s.My)(t,l.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",l,n,!1)},[t,l.name]),null});function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.O)(t)}var c=function(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2324:function(e,t,n){"use strict";n.d(t,{O:function(){return m}});var r,i=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&n)*1540483477+((n>>>16)*59797<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n^=255&e.charCodeAt(r),n=(65535&n)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,(((n=(65535&n)*1540483477+((n>>>16)*59797<<16))^n>>>15)>>>0).toString(36)},s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=n(5042),a=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},h=(0,o.Z)(function(e){return u(e)?e:e.replace(a,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(l,function(e,t,n){return r={name:t,styles:n,next:r},t})}return 1===s[e]||u(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return r={name:n.name,styles:n.styles,next:r},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)r={name:i.name,styles:i.styles,next:r},i=i.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=f(e,t,n[i])+";";else for(var s in n){var o=n[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?r+=s+"{"+t[o]+"}":c(o)&&(r+=h(s)+":"+d(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var a=0;a<o.length;a++)c(o[a])&&(r+=h(s)+":"+d(s,o[a])+";");else{var l=f(e,t,o);switch(s){case"animation":case"animationName":r+=h(s)+":"+l+";";break;default:r+=s+"{"+l+"}"}}}return r}(e,t,n);case"function":if(void 0!==e){var s=r,o=n(e);return r=s,f(e,t,o)}}if(null==t)return n;var a=t[n];return void 0!==a?a:n}var p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,m=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var s,o=!0,a="";r=void 0;var l=e[0];null==l||void 0===l.raw?(o=!1,a+=f(n,t,l)):a+=l[0];for(var u=1;u<e.length;u++)a+=f(n,t,e[u]),o&&(a+=l[u]);p.lastIndex=0;for(var c="";null!==(s=p.exec(a));)c+="-"+s[1];return{name:i(a)+c,styles:a,next:r}}},7278:function(e,t,n){"use strict";n.d(t,{L:function(){return o},j:function(){return a}});var r,i=n(7294),s=!!(r||(r=n.t(i,2))).useInsertionEffect&&(r||(r=n.t(i,2))).useInsertionEffect,o=s||function(e){return e()},a=s||i.useLayoutEffect},444:function(e,t,n){"use strict";function r(e,t,n){var r="";return n.split(" ").forEach(function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "}),r}n.d(t,{My:function(){return s},fp:function(){return r},hC:function(){return i}});var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},s=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+r:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},1294:function(e,t,n){"use strict";n.d(t,{ET:function(){return lh},hJ:function(){return aT},oe:function(){return lc},JU:function(){return a_},ad:function(){return aC},cf:function(){return ld},Xo:function(){return a7},IO:function(){return a4},Bt:function(){return lp},r7:function(){return lu},ar:function(){return a5}});var r,i,s,o,a,l,u,c,h=n(5816),d=n(740),f=n(3333),p=n(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},g={},y=y||{},v=m||self;function b(){}function w(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function T(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function I(e,t,n){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:_).apply(null,arguments)}function k(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M())},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function x(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(w(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",b,t),v.removeEventListener("test",b,t)}catch(e){}return e}();function D(e){return/^[\s\xa0]*$/.test(e)}var P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function M(e,t){return e<t?-1:e>t?1:0}function L(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return -1!=L().indexOf(e)}function U(e){return U[" "](e),e}U[" "]=b;var F=V("Opera"),j=V("Trident")||V("MSIE"),$=V("Edge"),z=$||j,B=V("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),q=-1!=L().toLowerCase().indexOf("webkit")&&!V("Edge");function Z(){var e=v.document;return e?e.documentMode:void 0}e:{var H,K="",G=(H=L(),B?/rv:([^\);]+)(\)|;)/.exec(H):$?/Edge\/([\d\.]+)/.exec(H):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):q?/WebKit\/(\S+)/.exec(H):F?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(G&&(K=G?G[1]:""),j){var W=Z();if(null!=W&&W>parseFloat(K)){i=String(W);break e}}i=K}var Q={},X=v.document&&j&&(Z()||parseInt(i,10))||void 0;function Y(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{U(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:J[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Y.X.h.call(this)}}S(Y,N);var J={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),et=0;function en(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++et,this.ba=this.ea=!1}function er(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ei(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function es(e){let t={};for(let n in e)t[n]=e[n];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ea(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<eo.length;t++)n=eo[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function el(e){this.src=e,this.g={},this.h=0}function eu(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(er(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}el.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ec(e,t,r,i);return -1<o?(t=e[o],n||(t.ea=!1)):((t=new en(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var eh="closure_lm_"+(1e6*Math.random()|0),ed={};function ef(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=E(i)?!!i.capture:!!i,a=ey(e);if(a||(e[eh]=a=new el(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return eg.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(em(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ep(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ee])eu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(em(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ey(t))?(eu(n,e),0==n.h&&(n.src=null,t[eh]=null)):er(e)}}}function em(e){return e in ed?ed[e]:ed[e]="on"+e}function eg(e,t){if(e.ba)e=!0;else{t=new Y(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ep(e),e=n.call(r,t)}return e}function ey(e){return(e=e[eh])instanceof el?e:null}var ev="__closure_events_fn_"+(1e9*Math.random()>>>0);function eb(e){return"function"==typeof e?e:(e[ev]||(e[ev]=function(t){return e.handleEvent(t)}),e[ev])}function ew(){C.call(this),this.i=new el(this),this.P=this,this.I=null}function eE(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;ea(t=new N(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=eT(o,r,!0,t)&&i}if(i=eT(o=t.g=e,r,!0,t)&&i,i=eT(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=eT(o=t.g=n[s],r,!1,t)&&i}function eT(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&eu(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}S(ew,C),ew.prototype[ee]=!0,ew.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=E(i)?!!i.capture:!!i,r=eb(r),t&&t[ee])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ec(o=t.g[n],r,i,s))&&(er(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ey(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,r,i,s)),(r=-1<t?n[t]:null)&&ep(r))}(this,e,t,n,r)},ew.prototype.M=function(){if(ew.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)er(n[r]);delete t.g[e],t.h--}}this.I=null},ew.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ew.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var e_=v.JSON.stringify,eI=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ek,e=>e.reset());class ek{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function eS(e,t){var n;o||(n=v.Promise.resolve(void 0),o=function(){n.then(ex)}),eC||(o(),eC=!0),eA.add(e,t)}var eC=!1,eA=new class{constructor(){this.h=this.g=null}add(e,t){let n=eI.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function ex(){let e;for(;e=null,(t=eA).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(e){!function(e){v.setTimeout(()=>{throw e},0)}(e)}var t,n,r=eI;r.j(n),100>r.h&&(r.h++,n.next=r.g,r.g=n)}eC=!1}function eO(e,t){ew.call(this),this.h=e||1,this.g=t||v,this.j=I(this.lb,this),this.l=Date.now()}function eN(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function eR(e,t,n){if("function"==typeof e)n&&(e=I(e,n));else if(e&&"function"==typeof e.handleEvent)e=I(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}S(eO,ew),(c=eO.prototype).ca=!1,c.R=null,c.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),eE(this,"tick"),this.ca&&(eN(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eO.X.M.call(this),eN(this),delete this.g};class eD extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eR(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eP(e){C.call(this),this.h=e,this.g={}}S(eP,C);var eM=[];function eL(e,t,n,r){Array.isArray(n)||(n&&(eM[0]=n.toString()),n=eM);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eb(r),t&&t[ee]?t.O(n,r,E(i)?!!i.capture:!!i,s):ef(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=eb(r),t&&t[ee]?t.N(n,r,E(i)?!!i.capture:!!i,s):ef(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eV(e){ei(e.g,function(e,t){this.g.hasOwnProperty(t)&&ep(e)},e),e.g={}}function eU(){this.g=!0}function eF(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return e_(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eP.prototype.M=function(){eP.X.M.call(this),eV(this)},eP.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eU.prototype.Aa=function(){this.g=!1},eU.prototype.info=function(){};var ej={},e$=null;function ez(){return e$=e$||new ew}function eB(e){N.call(this,ej.Pa,e)}function eq(e){let t=ez();eE(t,new eB(t))}function eZ(e,t){N.call(this,ej.STAT_EVENT,e),this.stat=t}function eH(e){let t=ez();eE(t,new eZ(t,e))}function eK(e,t){N.call(this,ej.Qa,e),this.size=t}function eG(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}ej.Pa="serverreachability",S(eB,N),ej.STAT_EVENT="statevent",S(eZ,N),ej.Qa="timingevent",S(eK,N);var eW={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eQ={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function eX(){}function eY(e){return e.h||(e.h=e.i())}function eJ(){}eX.prototype.h=null;var e0={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function e1(){N.call(this,"d")}function e2(){N.call(this,"c")}function e4(){}function e3(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eP(this),this.O=e6,e=z?125:void 0,this.T=new eO(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e5}function e5(){this.i=null,this.g="",this.h=!1}S(e1,N),S(e2,N),S(e4,eX),e4.prototype.g=function(){return new XMLHttpRequest},e4.prototype.i=function(){return{}},a=new e4;var e6=45e3,e8={},e7={};function e9(e,t,n){e.K=1,e.v=ty(td(t)),e.s=n,e.P=!0,te(e,null)}function te(e,t){e.F=Date.now(),tr(e),e.A=td(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tO(n.i,"t",r),e.C=0,n=e.l.H,e.h=new e5,e.g=nb(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eD(I(e.La,e,e.g),e.N)),eL(e.S,e.g,"readystatechange",e.ib),t=e.H?es(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eq(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tt(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function tn(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?e7:isNaN(n=Number(t.substring(n,r)))?e8:(r+=1)+n>t.length?e7:(t=t.substr(r,n),e.C=r+n,t)}(e,n))==e7){4==t&&(e.o=4,eH(14),r=!1),eF(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e8){e.o=4,eH(15),eF(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eF(e.j,e.m,i,null),tl(e,i);tt(e)&&i!=e7&&i!=e8&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eH(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nh(t),t.K=!0,eH(11))):(eF(e.j,e.m,n,"[Invalid Chunked Response]"),ta(e),to(e))}function tr(e){e.V=Date.now()+e.O,ti(e,e.O)}function ti(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eG(I(e.gb,e),t)}function ts(e){e.B&&(v.clearTimeout(e.B),e.B=null)}function to(e){0==e.l.G||e.I||np(e.l,e)}function ta(e){ts(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eN(e.T),eV(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tl(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tV(n.h,e))){if(!e.J&&tV(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)nf(n),nr(n);else break e}nc(n),eH(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=eG(I(n.cb,n),6e3));if(1>=tL(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else ng(n,11)}else if((e.J||n.g==e)&&nf(n),!D(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.I=a[1],n.ka=a[2];let t=a[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let i=a[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tU(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,tg(r.F,r.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=nv(r,r.H?r.ka:null,r.V),e.J){tF(r.h,e);var o=r.J;o&&e.setTimeout(o),e.B&&(ts(e),tr(e)),r.g=e}else nu(r);0<n.i.length&&ns(n)}else"stop"!=a[0]&&"close"!=a[0]||ng(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?ng(n,7):nn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}}eq(4)}catch(e){}}function tu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e3.prototype).setTimeout=function(e){this.O=e},c.ib=function(e){e=e.target;let t=this.L;t&&3==t6(e)?t.l():this.La(e)},c.La=function(e){try{if(e==this.g)e:{let c=t6(this.g);var t=this.g.Ea();let h=this.g.aa();if(!(3>c)&&(3!=c||z||this.g&&(this.h.h||this.g.fa()||t8(this.g)))){this.I||4!=c||7==t||(8==t||0>=h?eq(3):eq(2)),ts(this);var n=this.g.aa();this.Y=n;t:if(tt(this)){var r=t8(this.g);e="";var i=r.length,s=4==t6(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ta(this),to(this);var o="";break t}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var u=a;break t}}u=null}if(n=u)eF(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tl(this,n);else{this.i=!1,this.o=3,eH(12),ta(this),to(this);break e}}this.P?(tn(this,c,o),z&&this.i&&3==c&&(eL(this.S,this.T,"tick",this.hb),this.T.start())):(eF(this.j,this.m,o,null),tl(this,o)),4==c&&ta(this),this.i&&!this.I&&(4==c?np(this.l,this):(this.i=!1,tr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,eH(12)):(this.o=0,eH(13)),ta(this),to(this)}}}catch(e){}finally{}},c.hb=function(){if(this.g){var e=t6(this.g),t=this.g.fa();this.C<t.length&&(ts(this),tn(this,e,t),this.i&&4!=e&&tr(this))}},c.cancel=function(){this.I=!0,ta(this)},c.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(eq(),eH(17)),ta(this),this.o=2,to(this)):ti(this,this.V-e)};var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof th){this.h=void 0!==t?t:e.h,tf(this,e.j),this.s=e.s,this.g=e.g,tp(this,e.m),this.l=e.l,t=e.i;var n=new tS;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tm(this,n),this.o=e.o}else e&&(n=String(e).match(tc))?(this.h=!!t,tf(this,n[1]||"",!0),this.s=tv(n[2]||""),this.g=tv(n[3]||"",!0),tp(this,n[4]),this.l=tv(n[5]||"",!0),tm(this,n[6]||"",!0),this.o=tv(n[7]||"")):(this.h=!!t,this.i=new tS(null,this.h))}function td(e){return new th(e)}function tf(e,t,n){e.j=n?tv(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tp(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tm(e,t,n){var r,i;t instanceof tS?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tC(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tA(this,t),tO(this,n,e))},r)),r.j=i):(n||(t=tb(t,tI)),e.i=new tS(t,e.h))}function tg(e,t,n){e.i.set(t,n)}function ty(e){return tg(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tv(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tb(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tw),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tw(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}th.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tb(t,tE,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tb(t,tE,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tb(n,"/"==n.charAt(0)?t_:tT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tb(n,tk)),e.join("")};var tE=/[#\/\?@]/g,tT=/[#\?:]/g,t_=/[#\?]/g,tI=/[#\?@]/g,tk=/#/g;function tS(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tC(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tA(e,t){tC(e),t=tN(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tx(e,t){return tC(e),t=tN(e,t),e.g.has(t)}function tO(e,t,n){tA(e,t),0<n.length&&(e.i=null,e.g.set(tN(e,t),x(n)),e.h+=n.length)}function tN(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tS.prototype).add=function(e,t){tC(this),this.i=null,e=tN(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tC(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tC(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},c.W=function(e){tC(this);let t=[];if("string"==typeof e)tx(this,e)&&(t=t.concat(this.g.get(tN(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tC(this),this.i=null,tx(this,e=tN(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var tR=class{constructor(e,t){this.h=e,this.g=t}};function tD(e){this.l=e||tP,e=v.PerformanceNavigationTiming?0<(e=v.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tP=10;function tM(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tL(e){return e.h?1:e.g?e.g.size:0}function tV(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tU(e,t){e.g?e.g.add(t):e.h=t}function tF(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tj(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function t$(){}function tz(){this.g=new t$}function tB(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tq(e){this.l=e.ac||null,this.j=e.jb||!1}function tZ(e,t){ew.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tH,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tD.prototype.cancel=function(){if(this.i=tj(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},t$.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)},t$.prototype.parse=function(e){return v.JSON.parse(e,void 0)},S(tq,eX),tq.prototype.g=function(){return new tZ(this.l,this.j)},tq.prototype.i=(r={},function(){return r}),S(tZ,ew);var tH=0;function tK(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function tG(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tW(e)}function tW(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tZ.prototype).open=function(e,t){if(this.readyState!=tH)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tW(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tG(this)),this.readyState=tH},c.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tW(this)),this.g&&(this.readyState=3,tW(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tK(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},c.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tG(this):tW(this),3==this.readyState&&tK(this)}},c.Va=function(e){this.g&&(this.response=this.responseText=e,tG(this))},c.Ua=function(e){this.g&&(this.response=e,tG(this))},c.ga=function(){this.g&&tG(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tZ.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tQ=v.JSON.parse;function tX(e){ew.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tY,this.K=this.L=!1}S(tX,ew);var tY="",tJ=/^https?$/i,t0=["POST","PUT"];function t1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t2(e),t3(e)}function t2(e){e.D||(e.D=!0,eE(e,"complete"),eE(e,"error"))}function t4(e){if(e.h&&void 0!==y&&(!e.C[1]||4!=t6(e)||2!=e.aa())){if(e.v&&4==t6(e))eR(e.Ha,0,e);else if(eE(e,"readystatechange"),4==t6(e)){e.h=!1;try{let a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break e;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.H).match(tc)[1]||null;if(!i&&v.self&&v.self.location){var s=v.self.location.protocol;i=s.substr(0,s.length-1)}n=!tJ.test(i?i.toLowerCase():"")}t=n}if(t)eE(e,"complete"),eE(e,"success");else{e.m=6;try{var o=2<t6(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",t2(e)}}finally{t3(e)}}}}function t3(e,t){if(e.g){t5(e);let n=e.g,r=e.C[0]?b:null;e.g=null,e.C=null,t||eE(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function t5(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function t6(e){return e.g?e.g.readyState:0}function t8(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case tY:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t7(e){let t="";return ei(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function t9(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t7(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tg(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nt(e){this.Ca=0,this.i=[],this.j=new eU,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ne("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ne("baseRetryDelayMs",5e3,e),this.bb=ne("retryDelaySeedMs",1e4,e),this.$a=ne("forwardChannelMaxRetries",2,e),this.ta=ne("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tD(e&&e.concurrentRequestLimit),this.Fa=new tz,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nn(e){if(ni(e),3==e.G){var t=e.U++,n=td(e.F);tg(n,"SID",e.I),tg(n,"RID",t),tg(n,"TYPE","terminate"),na(e,n),(t=new e3(e,e.j,t,void 0)).K=2,t.v=ty(td(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&((new Image).src=t.v,n=!0),n||(t.g=nb(t.l,null),t.g.da(t.v)),t.F=Date.now(),tr(t)}ny(e)}function nr(e){e.g&&(nh(e),e.g.cancel(),e.g=null)}function ni(e){nr(e),e.u&&(v.clearTimeout(e.u),e.u=null),nf(e),e.h.cancel(),e.m&&("number"==typeof e.m&&v.clearTimeout(e.m),e.m=null)}function ns(e){tM(e.h)||e.m||(e.m=!0,eS(e.Ja,e),e.C=0)}function no(e,t){var n;n=t?t.m:e.U++;let r=td(e.F);tg(r,"SID",e.I),tg(r,"RID",n),tg(r,"AID",e.T),na(e,r),e.o&&e.s&&t9(r,e.o,e.s),n=new e3(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=nl(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tU(e.h,n),e9(n,r,t)}function na(e,t){e.ia&&ei(e.ia,function(e,n){tg(t,n,e)}),e.l&&tu({},function(e,n){tg(t,n,e)})}function nl(e,t,n){n=Math.min(e.i.length,n);var r=e.l?I(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h,a=i[o].g;if(0>(n-=t))t=Math.max(0,i[o].h-100),s=!1;else try{!function(e,t,n){let r=n||"";try{tu(e,function(e,n){let i=e;E(e)&&(i=e_(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nu(e){e.g||e.u||(e.Z=1,eS(e.Ia,e),e.A=0)}function nc(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eG(I(e.Ia,e),nm(e,e.A)),e.A++,!0)}function nh(e){null!=e.B&&(v.clearTimeout(e.B),e.B=null)}function nd(e){e.g=new e3(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=td(e.sa);tg(t,"RID","rpc"),tg(t,"SID",e.I),tg(t,"CI",e.L?"0":"1"),tg(t,"AID",e.T),tg(t,"TYPE","xmlhttp"),na(e,t),e.o&&e.s&&t9(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ty(td(t)),n.s=null,n.P=!0,te(n,e)}function nf(e){null!=e.v&&(v.clearTimeout(e.v),e.v=null)}function np(e,t){var n=null;if(e.g==t){nf(e),nh(e),e.g=null;var r=2}else{if(!tV(e.h,t))return;n=t.D,tF(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,o=e.C;eE(r=ez(),new eK(r,n)),ns(e)}else nu(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==r&&(i=e,s=t,!(tL(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=eG(I(i.Ja,i,s),nm(i,i.C)),i.C++,!0)))||2==r&&nc(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),o){case 1:ng(e,5);break;case 4:ng(e,10);break;case 3:ng(e,6);break;default:ng(e,2)}}}function nm(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ng(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=I(e.kb,e);n||(n=new th("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||tf(n,"https"),ty(n)),function(e,t){let n=new eU;if(v.Image){let r=new Image;r.onload=k(tB,n,r,"TestLoadImage: loaded",!0,t),r.onerror=k(tB,n,r,"TestLoadImage: error",!1,t),r.onabort=k(tB,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=k(tB,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eH(2);e.G=0,e.l&&e.l.va(t),ny(e),ni(e)}function ny(e){if(e.G=0,e.la=[],e.l){let t=tj(e.h);(0!=t.length||0!=e.i.length)&&(O(e.la,t),O(e.la,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ua()}}function nv(e,t,n){var r=n instanceof th?td(n):new th(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),tp(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new th(null,void 0);r&&tf(s,r),t&&(s.g=t),i&&tp(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&tg(r,n,t),tg(r,"VER",e.ma),na(e,r),r}function nb(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tX(n&&e.Da&&!e.ra?new tq({jb:!0}):e.ra)).Ka(e.H),t}function nw(){}function nE(){if(j&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function nT(e,t){ew.call(this),this.g=new nt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!D(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!D(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nk(this)}function n_(e){e1.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nI(){e2.call(this),this.status=1}function nk(e){this.g=e}(c=tX.prototype).Ka=function(e){this.L=e},c.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eY(this.u):eY(a),this.g.onreadystatechange=I(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){t1(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[i,o]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=v.FormData&&e instanceof v.FormData,!(0<=A(t0,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var o,l;t5(this),0<this.B&&((this.K=(o=this.g,j&&(l=Q,Object.prototype.hasOwnProperty.call(l,9)?l[9]:l[9]=function(){let e=0,t=P(String(i)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=M(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||M(0==s[2].length,0==o[2].length)||M(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=I(this.qa,this)):this.A=eR(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){t1(this,e)}},c.qa=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eE(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eE(this,"complete"),eE(this,"abort"),t3(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t3(this,!0)),tX.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t4(this):this.fb())},c.fb=function(){t4(this)},c.aa=function(){try{return 2<t6(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tQ(t)}},c.Ea=function(){return this.m},c.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=nt.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new e3(this,this.j,e,void 0),s=this.s;if(this.S&&(s?ea(s=es(s),this.S):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&"string"==typeof(r=r.g.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=nl(this,i,t),tg(n=td(this.F),"RID",e),tg(n,"CVER",22),this.D&&tg(n,"X-HTTP-Session-Id",this.D),na(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(t7(s)))+"&"+t:this.o&&t9(n,this.o,s)),tU(this.h,i),this.Ya&&tg(n,"TYPE","init"),this.O?(tg(n,"$req",t),tg(n,"SID","null"),i.Z=!0,e9(i,n,null)):e9(i,n,t),this.G=2}}else 3==this.G&&(e?no(this,e):0==this.i.length||tM(this.h)||no(this))}},c.Ia=function(){if(this.u=null,nd(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eG(I(this.eb,this),e)}},c.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eH(10),nr(this),nd(this))},c.cb=function(){null!=this.v&&(this.v=null,nr(this),nc(this),eH(19))},c.kb=function(e){e?(this.j.info("Successfully pinged google.com"),eH(2)):(this.j.info("Failed to ping google.com"),eH(1))},(c=nw.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Ra=function(){},nE.prototype.g=function(e,t){return new nT(e,t)},S(nT,ew),nT.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eH(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nv(e,null,e.V),ns(e)},nT.prototype.close=function(){nn(this.g)},nT.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=e_(e),e=n);t.i.push(new tR(t.ab++,e)),3==t.G&&ns(t)},nT.prototype.M=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,nT.X.M.call(this)},S(n_,e1),S(nI,e2),S(nk,nw),nk.prototype.xa=function(){eE(this.g,"a")},nk.prototype.wa=function(e){eE(this.g,new n_(e))},nk.prototype.va=function(e){eE(this.g,new nI)},nk.prototype.ua=function(){eE(this.g,"b")},nE.prototype.createWebChannel=nE.prototype.g,nT.prototype.send=nT.prototype.u,nT.prototype.open=nT.prototype.m,nT.prototype.close=nT.prototype.close,eW.NO_ERROR=0,eW.TIMEOUT=8,eW.HTTP_ERROR=6,eQ.COMPLETE="complete",eJ.EventType=e0,e0.OPEN="a",e0.CLOSE="b",e0.ERROR="c",e0.MESSAGE="d",ew.prototype.listen=ew.prototype.N,tX.prototype.listenOnce=tX.prototype.O,tX.prototype.getLastError=tX.prototype.Oa,tX.prototype.getLastErrorCode=tX.prototype.Ea,tX.prototype.getStatus=tX.prototype.aa,tX.prototype.getResponseJson=tX.prototype.Sa,tX.prototype.getResponseText=tX.prototype.fa,tX.prototype.send=tX.prototype.da,tX.prototype.setWithCredentials=tX.prototype.Ka;var nS=g.createWebChannelTransport=function(){return new nE},nC=g.getStatEventTarget=function(){return ez()},nA=g.ErrorCode=eW,nx=g.EventType=eQ,nO=g.Event=ej,nN=g.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nR=g.FetchXmlHttpFactory=tq,nD=g.WebChannel=eJ,nP=g.XhrIo=tX;n(3454);let nM="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nL.UNAUTHENTICATED=new nL(null),nL.GOOGLE_CREDENTIALS=new nL("google-credentials-uid"),nL.FIRST_PARTY=new nL("first-party-uid"),nL.MOCK_USER=new nL("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nV="9.17.2",nU=new f.Yd("@firebase/firestore");function nF(){return nU.logLevel}function nj(e,...t){if(nU.logLevel<=f.in.DEBUG){let n=t.map(nB);nU.debug(`Firestore (${nV}): ${e}`,...n)}}function n$(e,...t){if(nU.logLevel<=f.in.ERROR){let n=t.map(nB);nU.error(`Firestore (${nV}): ${e}`,...n)}}function nz(e,...t){if(nU.logLevel<=f.in.WARN){let n=t.map(nB);nU.warn(`Firestore (${nV}): ${e}`,...n)}}function nB(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nq(e="Unexpected state"){let t=`FIRESTORE (${nV}) INTERNAL ASSERTION FAILED: `+e;throw n$(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nZ={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nH extends p.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nW{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nL.UNAUTHENTICATED))}shutdown(){}}class nQ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nX{constructor(e){this.t=e,this.currentUser=nL.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nK;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nK,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{nj("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(nj("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nK)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nj("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nq(),new nG(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nq(),new nL(e)}}class nY{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=nL.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||nq(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nJ{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new nY(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nL.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&nj("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,nj("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{nj("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):nj("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nq(),this.A=e.token,new n0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n4(e,t){return e<t?-1:e>t?1:0}function n3(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nH(nZ.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new nH(nZ.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n5.fromMillis(Date.now())}static fromDate(e){return n5.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new n5(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n4(this.nanoseconds,e.nanoseconds):n4(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n6(e)}static min(){return new n6(new n5(0,0))}static max(){return new n6(new n5(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,t,n){void 0===t?t=0:t>e.length&&nq(),void 0===n?n=e.length-t:n>e.length-t&&nq(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===n8.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n8?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class n7 extends n8{construct(e,t,n){return new n7(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nH(nZ.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new n7(t)}static emptyPath(){return new n7([])}}let n9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends n8{construct(e,t,n){return new re(e,t,n)}static isValidIdentifier(e){return n9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new re(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nH(nZ.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new nH(nZ.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new nH(nZ.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new nH(nZ.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.path=e}static fromPath(e){return new rt(n7.fromString(e))}static fromName(e){return new rt(n7.fromString(e).popFirst(5))}static empty(){return new rt(n7.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===n7.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return n7.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rt(new n7(e.slice()))}}class rn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rn(n6.min(),rt.empty(),-1)}static max(){return new rn(n6.max(),rt.empty(),-1)}}class rr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(e){if(e.code!==nZ.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;nj("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nq(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rs((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rs?t:rs.resolve(t)}catch(e){return rs.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rs.reject(t)}static resolve(e){return new rs((t,n)=>{t(e)})}static reject(e){return new rs((t,n)=>{n(e)})}static waitFor(e){return new rs((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rs.resolve(!1);for(let n of e)t=t.next(e=>e?rs.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rs((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rs((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ro(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}ra.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ru{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rh(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rd(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function rf(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new rp("Invalid base64 string: "+e):e}}(e);return new rm(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rm(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n4(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rm.EMPTY_BYTE_STRING=new rm("");let rg=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ry(e){if(e||nq(),"string"==typeof e){let t=0,n=rg.exec(e);if(n||nq(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rv(e.seconds),nanos:rv(e.nanos)}}function rv(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rb(e){return"string"==typeof e?rm.fromBase64String(e):rm.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rE(e){let t=ry(e.mapValue.fields.__local_write_time__.timestampValue);return new n5(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rT={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function r_(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rw(e)?4:rL(e)?9007199254740991:10:nq()}function rI(e,t){if(e===t)return!0;let n=r_(e);if(n!==r_(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rE(e).isEqual(rE(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ry(e.timestampValue),r=ry(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rb(e.bytesValue).isEqual(rb(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rv(e.geoPointValue.latitude)===rv(t.geoPointValue.latitude)&&rv(e.geoPointValue.longitude)===rv(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rv(e.integerValue)===rv(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rv(e.doubleValue),r=rv(t.doubleValue);return n===r?rf(n)===rf(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return n3(e.arrayValue.values||[],t.arrayValue.values||[],rI);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rc(n)!==rc(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!rI(n[e],r[e])))return!1;return!0}(e,t);default:return nq()}}function rk(e,t){return void 0!==(e.values||[]).find(e=>rI(e,t))}function rS(e,t){if(e===t)return 0;let n=r_(e),r=r_(t);if(n!==r)return n4(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return n4(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rv(e.integerValue||e.doubleValue),r=rv(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rC(e.timestampValue,t.timestampValue);case 4:return rC(rE(e),rE(t));case 5:return n4(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rb(e),r=rb(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=n4(n[e],r[e]);if(0!==t)return t}return n4(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n4(rv(e.latitude),rv(t.latitude));return 0!==n?n:n4(rv(e.longitude),rv(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=rS(n[e],r[e]);if(t)return t}return n4(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rT.mapValue&&t===rT.mapValue)return 0;if(e===rT.mapValue)return 1;if(t===rT.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=n4(r[e],s[e]);if(0!==t)return t;let o=rS(n[r[e]],i[s[e]]);if(0!==o)return o}return n4(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nq()}}function rC(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n4(e,t);let n=ry(e),r=ry(t),i=n4(n.seconds,r.seconds);return 0!==i?i:n4(n.nanos,r.nanos)}function rA(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ry(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rb(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rt.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rA(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rA(e.fields[i])}`;return n+"}"}(e.mapValue):nq()}function rx(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rO(e){return!!e&&"integerValue"in e}function rN(e){return!!e&&"arrayValue"in e}function rR(e){return!!e&&"nullValue"in e}function rD(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rP(e){return!!e&&"mapValue"in e}function rM(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rh(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rM(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rM(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rL(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,t){this.position=e,this.inclusive=t}}function rU(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?rt.comparator(rt.fromName(o.referenceValue),n.key):rS(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function rF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rI(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{}class r$ extends rj{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rZ(e,t,n):"array-contains"===t?new rW(e,n):"in"===t?new rQ(e,n):"not-in"===t?new rX(e,n):"array-contains-any"===t?new rY(e,n):new r$(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rH(e,n):new rK(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rS(t,this.value)):null!==t&&r_(this.value)===r_(t)&&this.matchesComparison(rS(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nq()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rz extends rj{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new rz(e,t)}matches(e){return rB(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.dt(e=>e.isInequality());return null!==e?e.field:null}dt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function rB(e){return"and"===e.op}function rq(e){for(let t of e.filters)if(t instanceof rz)return!1;return!0}class rZ extends r${constructor(e,t,n){super(e,t,n),this.key=rt.fromName(n.referenceValue)}matches(e){let t=rt.comparator(e.key,this.key);return this.matchesComparison(t)}}class rH extends r${constructor(e,t){super(e,"in",t),this.keys=rG("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rK extends r${constructor(e,t){super(e,"not-in",t),this.keys=rG("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rG(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rt.fromName(e.referenceValue))}class rW extends r${constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rN(t)&&rk(t.arrayValue,this.value)}}class rQ extends r${constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rk(this.value.arrayValue,t)}}class rX extends r${constructor(e,t){super(e,"not-in",t)}matches(e){if(rk(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rk(this.value.arrayValue,t)}}class rY extends r${constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rN(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rk(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t){this.comparator=e,this.root=t||r2.EMPTY}insert(e,t){return new r0(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,r2.BLACK,null,null))}remove(e){return new r0(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r2.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new r1(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new r1(this.root,e,this.comparator,!1)}getReverseIterator(){return new r1(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new r1(this.root,e,this.comparator,!0)}}class r1{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r2{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:r2.RED,this.left=null!=r?r:r2.EMPTY,this.right=null!=i?i:r2.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new r2(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return r2.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return r2.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nq();let e=this.left.check();if(e!==this.right.check())throw nq();return e+(this.isRed()?0:1)}}r2.EMPTY=null,r2.RED=!0,r2.BLACK=!1,r2.EMPTY=new class{constructor(){this.size=0}get key(){throw nq()}get value(){throw nq()}get color(){throw nq()}get left(){throw nq()}get right(){throw nq()}copy(e,t,n,r,i){return this}insert(e,t,n){return new r2(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.comparator=e,this.data=new r0(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new r3(this.data.getIterator())}getIteratorFrom(e){return new r3(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof r4)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r4(this.comparator);return t.data=e,t}}class r3{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new r5([])}unionWith(e){let t=new r4(re.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new r5(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return n3(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.value=e}static empty(){return new r6({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rP(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rM(t)}setAll(e){let t=re.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rM(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rP(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rI(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rP(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(rh(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new r6(rM(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new r8(e,0,n6.min(),n6.min(),n6.min(),r6.empty(),0)}static newFoundDocument(e,t,n,r){return new r8(e,1,t,n6.min(),n,r,0)}static newNoDocument(e,t){return new r8(e,2,t,n6.min(),n6.min(),r6.empty(),0)}static newUnknownDocument(e,t){return new r8(e,3,t,n6.min(),n6.min(),r6.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(n6.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r6.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r6.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n6.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof r8&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r8(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this._t=null}}function r9(e,t=null,n=[],r=[],i=null,s=null,o=null){return new r7(e,t,n,r,i,s,o)}function ie(e){let t=e;if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof r$)return t.field.canonicalString()+t.op.toString()+rA(t.value);if(rq(t)&&rB(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rA(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rA(e)).join(",")),t._t=e}return t._t}function it(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof r$?n instanceof r$&&t.op===n.op&&t.field.isEqual(n.field)&&rI(t.value,n.value):t instanceof rz?n instanceof rz&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void nq()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rF(e.startAt,t.startAt)&&rF(e.endAt,t.endAt)}function ir(e){return rt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function is(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function io(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ia(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function il(e){return null!==e.collectionGroup}function iu(e){let t=e;if(null===t.wt){t.wt=[];let e=ia(t),n=io(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new rJ(e)),t.wt.push(new rJ(re.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new rJ(re.keyField(),e))}}}return t.wt}function ic(e){let t=e;if(!t.gt){if("F"===t.limitType)t.gt=r9(t.path,t.collectionGroup,iu(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of iu(t)){let t="desc"===n.dir?"asc":"desc";e.push(new rJ(n.field,t))}let n=t.endAt?new rV(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rV(t.startAt.position,t.startAt.inclusive):null;t.gt=r9(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t.gt}function ih(e,t){t.getFirstInequalityField(),ia(e);let n=e.filters.concat([t]);return new ii(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function id(e,t,n){return new ii(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ip(e,t){return it(ic(e),ic(t))&&e.limitType===t.limitType}function im(e){return`${ie(ic(e))}|lt:${e.limitType}`}function ig(e){var t;let n;return`Query(target=${n=(t=ic(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof r$?`${t.field.canonicalString()} ${t.op} ${rA(t.value)}`:t instanceof rz?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rA(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rA(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iy(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of iu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=rU(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iu(e),t))&&(!e.endAt||!!function(e,t,n){let r=rU(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iu(e),t))}function iv(e){return(t,n)=>{let r=!1;for(let i of iu(e)){let e=function(e,t,n){let r=e.field.isKeyField()?rt.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rS(r,i):nq()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nq()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(t)?"-0":t}}function iw(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this._=void 0}}function iT(e,t){return e instanceof iA?rO(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class i_ extends iE{}class iI extends iE{constructor(e){super(),this.elements=e}}function ik(e,t){let n=iO(t);for(let t of e.elements)n.some(e=>rI(e,t))||n.push(t);return{arrayValue:{values:n}}}class iS extends iE{constructor(e){super(),this.elements=e}}function iC(e,t){let n=iO(t);for(let t of e.elements)n=n.filter(e=>!rI(e,t));return{arrayValue:{values:n}}}class iA extends iE{constructor(e,t){super(),this.Tt=e,this.It=t}}function ix(e){return rv(e.integerValue||e.doubleValue)}function iO(e){return rN(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t){this.field=e,this.transform=t}}class iR{constructor(e,t){this.version=e,this.transformResults=t}}class iD{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new iD}static exists(e){return new iD(void 0,e)}static updateTime(e){return new iD(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iP(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iM{}function iL(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iq(e.key,iD.none()):new iF(e.key,e.data,iD.none());{let n=e.data,r=r6.empty(),i=new r4(re.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ij(e.key,r,new r5(i.toArray()),iD.none())}}function iV(e,t,n,r){return e instanceof iF?function(e,t,n,r){if(!iP(e.precondition,t))return n;let i=e.value.clone(),s=iB(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ij?function(e,t,n,r){if(!iP(e.precondition,t))return n;let i=iB(e.fieldTransforms,r,t),s=t.data;return(s.setAll(i$(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):iP(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function iU(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&n3(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof iI&&r instanceof iI||n instanceof iS&&r instanceof iS?n3(n.elements,r.elements,rI):n instanceof iA&&r instanceof iA?rI(n.It,r.It):n instanceof i_&&r instanceof i_)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iF extends iM{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ij extends iM{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function i$(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function iz(e,t,n){var r;let i=new Map;e.length===n.length||nq();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof iI?ik(a,l):a instanceof iS?iC(a,l):r))}return i}function iB(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof i_?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof iI?ik(e,s):e instanceof iS?iC(e,s):function(e,t){let n=iT(e,t),r=ix(n)+ix(e.It);return rO(n)&&rO(e.It)?iw(r):ib(e.Tt,r)}(e,s))}return r}class iq extends iM{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iZ extends iM{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iH{constructor(e){this.count=e}}function iK(e){if(void 0===e)return n$("GRPC error has no .code"),nZ.UNKNOWN;switch(e){case l.OK:return nZ.OK;case l.CANCELLED:return nZ.CANCELLED;case l.UNKNOWN:return nZ.UNKNOWN;case l.DEADLINE_EXCEEDED:return nZ.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return nZ.RESOURCE_EXHAUSTED;case l.INTERNAL:return nZ.INTERNAL;case l.UNAVAILABLE:return nZ.UNAVAILABLE;case l.UNAUTHENTICATED:return nZ.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return nZ.INVALID_ARGUMENT;case l.NOT_FOUND:return nZ.NOT_FOUND;case l.ALREADY_EXISTS:return nZ.ALREADY_EXISTS;case l.PERMISSION_DENIED:return nZ.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return nZ.FAILED_PRECONDITION;case l.ABORTED:return nZ.ABORTED;case l.OUT_OF_RANGE:return nZ.OUT_OF_RANGE;case l.UNIMPLEMENTED:return nZ.UNIMPLEMENTED;case l.DATA_LOSS:return nZ.DATA_LOSS;default:return nq()}}(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rh(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iW=new r0(rt.comparator),iQ=new r0(rt.comparator);function iX(...e){let t=iQ;for(let n of e)t=t.insert(n.key,n);return t}function iY(e){let t=iQ;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function iJ(){return new iG(e=>e.toString(),(e,t)=>e.isEqual(t))}let i0=new r0(rt.comparator),i1=new r4(rt.comparator);function i2(...e){let t=i1;for(let n of e)t=t.add(n);return t}let i4=new r4(n4);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,i5.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new i3(n6.min(),r,i4,iW,i2())}}class i5{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new i5(n,t,i2(),i2(),i2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t,n,r){this.Et=e,this.removedTargetIds=t,this.key=n,this.At=r}}class i8{constructor(e,t){this.targetId=e,this.Rt=t}}class i7{constructor(e,t,n=rm.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class i9{constructor(){this.bt=0,this.vt=sn(),this.Pt=rm.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return 0!==this.bt}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=i2(),t=i2(),n=i2();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nq()}}),new i5(this.Pt,this.Vt,e,t,n)}kt(){this.St=!1,this.vt=sn()}Ot(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class se{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=iW,this.Kt=st(),this.Gt=new r4(n4)}Qt(e){for(let t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(let t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{let n=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&n.xt(e.resumeToken);break;case 1:n.$t(),n.Dt||n.kt(),n.xt(e.resumeToken);break;case 2:n.$t(),n.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(n.Bt(),n.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),n.xt(e.resumeToken));break;default:nq()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((e,n)=>{this.Jt(n)&&t(n)})}Zt(e){let t=e.targetId,n=e.Rt.count,r=this.Xt(t);if(r){let e=r.target;if(ir(e)){if(0===n){let n=new rt(e.path);this.zt(t,n,r8.newNoDocument(n,n6.min()))}else 1===n||nq()}else this.te(t)!==n&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){let t=new Map;this.qt.forEach((n,r)=>{let i=this.Xt(r);if(i){if(n.current&&ir(i.target)){let t=new rt(i.target.path);null!==this.Ut.get(t)||this.ne(r,t)||this.zt(r,t,r8.newNoDocument(t,e))}n.Ct&&(t.set(r,n.Nt()),n.kt())}});let n=i2();this.Kt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new i3(e,t,this.Gt,this.Ut,n);return this.Ut=iW,this.Kt=st(),this.Gt=new r4(n4),r}jt(e,t){if(!this.Jt(e))return;let n=this.ne(e,t.key)?2:0;this.Ht(e).Ot(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,n){if(!this.Jt(e))return;let r=this.Ht(e);this.ne(e,t)?r.Ot(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.qt.delete(e)}te(e){let t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let t=this.qt.get(e);return t||(t=new i9,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new r4(n4),this.Kt=this.Kt.insert(e,t)),t}Jt(e){let t=null!==this.Xt(e);return t||nj("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new i9),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function st(){return new r0(rt.comparator)}function sn(){return new r0(rt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr={asc:"ASCENDING",desc:"DESCENDING"},si={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ss={and:"AND",or:"OR"};class so{constructor(e,t){this.databaseId=e,this.yt=t}}function sa(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sl(e,t){return e.yt?t.toBase64():t.toUint8Array()}function su(e){return e||nq(),n6.fromTimestamp(function(e){let t=ry(e);return new n5(t.seconds,t.nanos)}(e))}function sc(e,t){return new n7(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sh(e){let t=n7.fromString(e);return sw(t)||nq(),t}function sd(e,t){return sc(e.databaseId,t.path)}function sf(e,t){let n=sh(t);if(n.get(1)!==e.databaseId.projectId)throw new nH(nZ.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nH(nZ.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(sg(n))}function sp(e,t){return sc(e.databaseId,t)}function sm(e){return new n7(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sg(e){return e.length>4&&"documents"===e.get(4)||nq(),e.popFirst(5)}function sy(e,t,n){return{name:sd(e,t),fields:n.value.mapValue.fields}}function sv(e){return{fieldPath:e.canonicalString()}}function sb(e){return re.fromServerFormat(e.fieldPath)}function sw(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof iF?function(e,t,n){let r=e.value.clone(),i=iz(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof ij?function(e,t,n){if(!iP(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=iz(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(i$(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=iV(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=iV(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=iJ();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;let a=iL(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(n6.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),i2())}isEqual(e){return this.batchId===e.batchId&&n3(this.mutations,e.mutations,(e,t)=>iU(e,t))&&n3(this.baseMutations,e.baseMutations,(e,t)=>iU(e,t))}}class sT{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||nq();let r=i0,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new sT(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,n,r,i=n6.min(),s=n6.min(),o=rm.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new sI(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sI(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sI(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.oe=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(rv(e.integerValue));else if("doubleValue"in e){let n=rv(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),rf(n)?t.de(0):t.de(n))}else if("timestampValue"in e){let n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(rb(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?rL(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):nq()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){let n=e.fields||{};for(let e of(this.fe(t,55),Object.keys(n)))this.we(e,t),this.he(n[e],t)}Ie(e,t){let n=e.values||[];for(let e of(this.fe(t,50),n))this.he(e,t)}ye(e,t){this.fe(t,37),rt.fromName(e).path.forEach(e=>{this.fe(t,60),this.Te(e,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}sS.Ee=new sS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.Ze=new sA}addToCollectionParentIndex(e,t){return this.Ze.add(t),rs.resolve()}getCollectionParents(e,t){return rs.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return rs.resolve()}deleteFieldIndex(e,t){return rs.resolve()}getDocumentsMatchingTarget(e,t){return rs.resolve(null)}getIndexType(e,t){return rs.resolve(0)}getFieldIndexes(e,t){return rs.resolve([])}getNextCollectionGroupToUpdate(e){return rs.resolve(null)}getMinOffset(e,t){return rs.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return rs.resolve(rn.min())}updateCollectionGroup(e,t,n){return rs.resolve()}updateIndexEntries(e,t){return rs.resolve()}}class sA{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new r4(n7.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new r4(n7.comparator)).toArray()}}new Uint8Array(0);class sx{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sx(e,sx.DEFAULT_COLLECTION_PERCENTILE,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sx.DEFAULT_COLLECTION_PERCENTILE=10,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sx.DEFAULT=new sx(41943040,sx.DEFAULT_COLLECTION_PERCENTILE,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sx.DISABLED=new sx(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new sO(0)}static Sn(){return new sO(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.changes=new iG(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,r8.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rs.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&iV(n.mutation,e,r5.empty(),n5.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,i2()).next(()=>t))}getLocalViewOfDocuments(e,t,n=i2()){let r=iJ();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=iX();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=iJ();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,i2()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=iW,s=iJ(),o=iJ();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ij)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),iV(o.mutation,t,o.mutation.getFieldMask(),n5.now())):s.set(t.key,r5.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new sR(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=iJ(),r=new r0((e,t)=>e-t),i=i2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||r5.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||i2()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,u=iJ();l.forEach(e=>{if(!i.has(e)){let r=iL(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return rs.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return rt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):il(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rs.resolve(iJ()),o=-1,a=i;return s.next(t=>rs.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?rs.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,i2())).next(e=>({batchId:o,changes:iY(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rt(t)).next(e=>{let t=iX();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=iX();return this.indexManager.getCollectionParents(e,r).next(s=>rs.forEach(s,s=>{var o;let a=(o=s.child(r),new ii(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,a,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,r8.newInvalidDocument(r)))});let n=iX();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&iV(s.mutation,i,r5.empty(),n5.now()),iy(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return rs.resolve(this.es.get(t))}saveBundleMetadata(e,t){return this.es.set(t.id,{id:t.id,version:t.version,createTime:su(t.createTime)}),rs.resolve()}getNamedQuery(e,t){return rs.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,o,a,l;let u,c=function(e){let t=sh(e);return 4===t.length?n7.emptyPath():sg(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||nq();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sb(e.unaryFilter.field);return r$.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sb(e.unaryFilter.field);return r$.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sb(e.unaryFilter.field);return r$.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sb(e.unaryFilter.field);return r$.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nq()}}(t):void 0!==t.fieldFilter?r$.create(sb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nq()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rz.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return nq()}}(t.compositeFilter.op)):nq()}(e);return n instanceof rz&&rq(t=n)&&rB(t)?n.getFilters():[n]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new rJ(sb(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new rV(n,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new rV(n,t)}(h.endAt)),n=c,r=f,i=m,s=p,o=g,a=y,l=v,new ii(n,r,i,s,o,"F",a,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?id(t,t.limit,"L"):t}(t.bundledQuery),readTime:su(t.readTime)}),rs.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(){this.overlays=new r0(rt.comparator),this.ss=new Map}getOverlay(e,t){return rs.resolve(this.overlays.get(t))}getOverlays(e,t){let n=iJ();return rs.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ce(e,t,r)}),rs.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ss.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ss.delete(n)),rs.resolve()}getOverlaysForCollection(e,t,n){let r=iJ(),i=t.length+1,s=new rt(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return rs.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new r0((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=iJ(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=iJ(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return rs.resolve(o)}ce(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new s_(t,n));let i=this.ss.get(t);void 0===i&&(i=i2(),this.ss.set(t,i)),this.ss.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(){this.rs=new r4(sV.os),this.us=new r4(sV.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){let n=new sV(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ls(new sV(e,t))}fs(e,t){e.forEach(e=>this.removeReference(e,t))}ds(e){let t=new rt(new n7([])),n=new sV(t,e),r=new sV(t,e+1),i=[];return this.us.forEachInRange([n,r],e=>{this.ls(e),i.push(e.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){let t=new rt(new n7([])),n=new sV(t,e),r=new sV(t,e+1),i=i2();return this.us.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sV(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sV{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return rt.comparator(e.key,t.key)||n4(e.gs,t.gs)}static cs(e,t){return n4(e.gs,t.gs)||rt.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new r4(sV.os)}checkEmpty(e){return rs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sE(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.ps=this.ps.add(new sV(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rs.resolve(s)}lookupMutationBatch(e,t){return rs.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ts(t+1),r=n<0?0:n;return rs.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rs.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return rs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sV(t,0),r=new sV(t,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,r],e=>{let t=this.Is(e.gs);i.push(t)}),rs.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new r4(n4);return t.forEach(e=>{let t=new sV(e,0),r=new sV(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],e=>{n=n.add(e.gs)})}),rs.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;rt.isDocumentKey(i)||(i=i.child(""));let s=new sV(new rt(i),0),o=new r4(n4);return this.ps.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.gs)),!0)},s),rs.resolve(this.Es(o))}Es(e){let t=[];return e.forEach(e=>{let n=this.Is(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.As(t.batchId,"removed")||nq(),this.mutationQueue.shift();let n=this.ps;return rs.forEach(t.mutations,r=>{let i=new sV(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=n})}bn(e){}containsKey(e,t){let n=new sV(t,0),r=this.ps.firstAfterOrEqual(n);return rs.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rs.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){let t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.Rs=e,this.docs=new r0(rt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rs.resolve(n?n.document.mutableCopy():r8.newInvalidDocument(t))}getEntries(e,t){let n=iW;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():r8.newInvalidDocument(e))}),rs.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=iW,s=t.path,o=new rt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rt.comparator(e.documentKey,t.documentKey))?n:n4(e.largestBatchId,t.largestBatchId)}(new rn(o.readTime,o.key,-1),n)||(r.has(o.key)||iy(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rs.resolve(i)}getAllFromCollectionGroup(e,t,n,r){nq()}bs(e,t){return rs.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sj(this)}getSize(e){return rs.resolve(this.size)}}class sj extends sN{constructor(e){super(),this.Xn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(n)}),rs.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e){this.persistence=e,this.vs=new iG(e=>ie(e),it),this.lastRemoteSnapshotVersion=n6.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new sL,this.targetCount=0,this.Ss=sO.Vn()}forEachTarget(e,t){return this.vs.forEach((e,n)=>t(n)),rs.resolve()}getLastRemoteSnapshotVersion(e){return rs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rs.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),rs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ps&&(this.Ps=t),rs.resolve()}xn(e){this.vs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ss=new sO(t),this.highestTargetId=t),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,rs.resolve()}updateTargetData(e,t){return this.xn(t),rs.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,rs.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.vs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.vs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),rs.waitFor(i).next(()=>r)}getTargetCount(e){return rs.resolve(this.targetCount)}getTargetData(e,t){let n=this.vs.get(t)||null;return rs.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),rs.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rs.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),rs.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Vs.ws(t);return rs.resolve(n)}containsKey(e,t){return rs.resolve(this.Vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(e,t){var n;this.Ds={},this.overlays={},this.Cs=new ra(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new s$(this),this.indexManager=new sC,this.remoteDocumentCache=(n=e=>this.referenceDelegate.ks(e),new sF(n)),this.Tt=new sk(t),this.Os=new sP(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new sU(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,t,n){nj("MemoryPersistence","Starting transaction:",e);let r=new sB(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next(e=>this.referenceDelegate.Fs(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}$s(e,t){return rs.or(Object.values(this.Ds).map(n=>()=>n.containsKey(e,t)))}}class sB extends rr{constructor(e){super(),this.currentSequenceNumber=e}}class sq{constructor(e){this.persistence=e,this.Bs=new sL,this.Ls=null}static qs(e){return new sq(e)}get Us(){if(this.Ls)return this.Ls;throw nq()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),rs.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),rs.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),rs.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(e=>this.Us.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Us.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ms(){this.Ls=new Set}Fs(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rs.forEach(this.Us,n=>{let r=rt.fromPath(n);return this.Ks(e,r).next(e=>{e||t.removeEntry(r,n6.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return rs.or([()=>rs.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$s(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=r}static Ni(e,t){let n=i2(),r=i2();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sZ(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(){this.ki=!1}initialize(e,t){this.Oi=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Mi(e,t).next(i=>i||this.Fi(e,t,r,n)).next(n=>n||this.$i(e,t))}Mi(e,t){if(is(t))return rs.resolve(null);let n=ic(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=ic(t=id(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=i2(...r);return this.Oi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Bi(t,r);return this.Li(t,s,i,n.readTime)?this.Mi(e,id(t,null,"F")):this.qi(e,s,t,n)}))})))}Fi(e,t,n,r){return is(t)||r.isEqual(n6.min())?this.$i(e,t):this.Oi.getDocuments(e,n).next(i=>{let s=this.Bi(t,i);return this.Li(t,s,n,r)?this.$i(e,t):(nF()<=f.in.DEBUG&&nj("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ig(t)),this.qi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=n6.fromTimestamp(1e9===r?new n5(n+1,0):new n5(n,r));return new rn(i,rt.empty(),-1)}(r,0)))})}Bi(e,t){let n=new r4(iv(e));return t.forEach((t,r)=>{iy(e,r)&&(n=n.add(r))}),n}Li(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,t){return nF()<=f.in.DEBUG&&nj("QueryEngine","Using full collection scan to execute query:",ig(t)),this.Oi.getDocumentsMatchingQuery(e,t,rn.min())}qi(e,t,n,r){return this.Oi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e,t,n,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new r0(n4),this.Gi=new iG(e=>ie(e),it),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sD(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}async function sG(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.zi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=i2();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({Wi:e,removedBatchIds:i,addedBatchIds:s}))})})}function sW(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}async function sQ(e,t,n){let r=e,i=r.Ki.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ro(e))throw e;nj("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ki=r.Ki.remove(t),r.Gi.delete(i.target)}function sX(e,t,n){let r=n6.min(),i=i2();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Gi.get(n);return void 0!==r?rs.resolve(e.Ki.get(r)):e.Ns.getTargetData(t,n)})(e,s,ic(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ns.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ui.getDocumentsMatchingQuery(s,t,n?r:n6.min(),n?i:i2())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Qi.get(r)||n6.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Qi.set(r,s),{documents:n,Yi:i}}))}class sY{constructor(){this.activeTargetIds=i4}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sJ{constructor(){this.Ur=new sY,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new sY,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){for(let e of(nj("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Hr))e(0)}Wr(){for(let e of(nj("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Hr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,r,i){let s=this.fo(e,t);nj("RestConnection","Sending: ",s,n);let o={};return this._o(o,r,i),this.wo(e,s,o,n).then(e=>(nj("RestConnection","Received: ",e),e),t=>{throw nz("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}mo(e,t,n,r,i,s){return this.lo(e,t,n,r,i)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nV,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}fo(e,t){let n=s2[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,r){return new Promise((i,s)=>{let o=new nP;o.setWithCredentials(!0),o.listenOnce(nx.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case nA.NO_ERROR:let t=o.getResponseJson();nj("Connection","XHR received:",JSON.stringify(t)),i(t);break;case nA.TIMEOUT:nj("Connection",'RPC "'+e+'" timed out'),s(new nH(nZ.DEADLINE_EXCEEDED,"Request time out"));break;case nA.HTTP_ERROR:let n=o.getStatus();if(nj("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nZ).indexOf(t)>=0?t:nZ.UNKNOWN}(t.status);s(new nH(e,t.message))}else s(new nH(nZ.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new nH(nZ.UNAVAILABLE,"Connection failed."));break;default:nq()}}finally{nj("Connection",'RPC "'+e+'" completed.')}});let a=JSON.stringify(r);o.send(t,"POST",a,n,15)})}yo(e,t,n){let r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nS(),s=nC(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new nR({})),this._o(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let a=r.join("");nj("Connection","Creating WebChannel: "+a,o);let u=i.createWebChannel(a,o),c=!1,h=!1,d=new s4({Yr:e=>{h?nj("Connection","Not sending because WebChannel is closed:",e):(c||(nj("Connection","Opening WebChannel transport."),u.open(),c=!0),nj("Connection","WebChannel sending:",e),u.send(e))},Zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(u,nD.EventType.OPEN,()=>{h||nj("Connection","WebChannel transport opened.")}),f(u,nD.EventType.CLOSE,()=>{h||(h=!0,nj("Connection","WebChannel transport closed"),d.oo())}),f(u,nD.EventType.ERROR,e=>{h||(h=!0,nz("Connection","WebChannel transport errored:",e),d.oo(new nH(nZ.UNAVAILABLE,"The operation could not be completed")))}),f(u,nD.EventType.MESSAGE,e=>{var t;if(!h){let n=e.data[0];n||nq();let r=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(r){nj("Connection","WebChannel received error:",r);let e=r.status,t=function(e){let t=l[e];if(void 0!==t)return iK(t)}(e),n=r.message;void 0===t&&(t=nZ.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),h=!0,d.oo(new nH(t,n)),u.close()}else nj("Connection","WebChannel received:",n),d.uo(n)}}),f(s,nO.STAT_EVENT,e=>{e.stat===nN.PROXY?nj("Connection","Detected buffering proxy"):e.stat===nN.NOPROXY&&nj("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function s5(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s6(e){return new so(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();let t=Math.floor(this.Eo+this.Po()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-n);r>0&&nj("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e,t,n,r,i,s,o,a){this.Ys=e,this.So=n,this.Do=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new s8(e,t)}Oo(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===nZ.RESOURCE_EXHAUSTED?(n$(t.toString()),n$("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):t&&t.code===nZ.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;let e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Co===t&&this.jo(e,n)},t=>{e(()=>{let e=new nH(nZ.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)})})}jo(e,t){let n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{n(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(e=>{n(()=>this.zo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return nj("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(nj("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s9 extends s7{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.Tt=i}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nq(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.yt?(void 0===i||"string"==typeof i||nq(),rm.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||nq(),rm.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?nZ.UNKNOWN:iK(e.code);return new nH(t,e.message||"")}(l);n=new i7(s,o,a,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=sf(e,r.document.name),s=su(r.document.updateTime),o=r.document.createTime?su(r.document.createTime):n6.min(),a=new r6({mapValue:{fields:r.document.fields}}),l=r8.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new i6(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=sf(e,r.document),s=r.readTime?su(r.readTime):n6.min(),o=r8.newNoDocument(i,s),a=r.removedTargetIds||[];n=new i6([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=sf(e,r.document),s=r.removedTargetIds||[];n=new i6([],s,i,null)}else{if(!("filter"in t))return nq();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new iH(r),s=e.targetId;n=new i8(s,i)}}return n}(this.Tt,e),n=function(e){if(!("targetChange"in e))return n6.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?n6.min():t.readTime?su(t.readTime):n6.min()}(e);return this.listener.Ho(t,n)}Jo(e){let t={};t.database=sm(this.Tt),t.addTarget=function(e,t){let n;let r=t.target;return(n=ir(r)?{documents:{documents:[sp(e,r.path)]}}:{query:function(e,t){var n,r,i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(s.parent=sp(e,o),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=sp(e,o.popLast()),s.structuredQuery.from=[{collectionId:o.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof r$?function(e){if("=="===e.op){if(rD(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NAN"}};if(rR(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rD(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NOT_NAN"}};if(rR(e.value))return{unaryFilter:{field:sv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sv(e.field),op:si[e.op],value:e.value}}}(t):t instanceof rz?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:ss[t.op],filters:n}}}(t):nq()}(rz.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:sv(e.field),direction:sr[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(r=t.limit,e.yt||null==r?r:{value:r});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=sl(e,t.resumeToken):t.snapshotVersion.compareTo(n6.min())>0&&(n.readTime=sa(e,t.snapshotVersion.toTimestamp())),n}(this.Tt,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nq()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.Tt,e);n&&(t.labels=n),this.qo(t)}Yo(e){let t={};t.database=sm(this.Tt),t.removeTarget=e,this.qo(t)}}class oe extends s7{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||nq(),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||nq(),t.map(e=>{let t;return(t=e.updateTime?su(e.updateTime):su(n)).isEqual(n6.min())&&(t=su(n)),new iR(t,e.transformResults||[])})):[]),i=su(e.commitTime);return this.listener.eu(i,r)}return e.writeResults&&0!==e.writeResults.length&&nq(),this.Zo=!0,this.listener.nu()}su(){let e={};e.database=sm(this.Tt),this.qo(e)}tu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof iF)r={update:sy(e,t.key,t.value)};else if(t instanceof iq)r={delete:sd(e,t.key)};else if(t instanceof ij)r={update:sy(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iZ))return nq();r={verify:sd(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof i_)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iI)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof iS)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iA)return{fieldPath:t.field.canonicalString(),increment:n.It};throw nq()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:sa(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:nq()),r})(this.Tt,e))};this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new nH(nZ.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nZ.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nH(nZ.UNKNOWN,e.toString())})}mo(e,t,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nZ.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nH(nZ.UNKNOWN,e.toString())})}terminate(){this.iu=!0}}class on{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(n$(t),this.cu=!1):nj("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(e=>{n.enqueueAndForget(async()=>{od(this)&&(nj("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.mu.add(4),await os(e),e.pu.set("Unknown"),e.mu.delete(4),await oi(e)}(this))})}),this.pu=new on(n,r)}}async function oi(e){if(od(e))for(let t of e.gu)await t(!0)}async function os(e){for(let t of e.gu)await t(!1)}function oo(e,t){e.wu.has(t.targetId)||(e.wu.set(t.targetId,t),oh(e)?oc(e):oC(e).Mo()&&ol(e,t))}function oa(e,t){let n=oC(e);e.wu.delete(t),n.Mo()&&ou(e,t),0===e.wu.size&&(n.Mo()?n.Bo():od(e)&&e.pu.set("Unknown"))}function ol(e,t){e.Iu.Ft(t.targetId),oC(e).Jo(t)}function ou(e,t){e.Iu.Ft(t),oC(e).Yo(t)}function oc(e){e.Iu=new se({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),oC(e).start(),e.pu.au()}function oh(e){return od(e)&&!oC(e).Oo()&&e.wu.size>0}function od(e){return 0===e.mu.size}async function of(e){e.wu.forEach((t,n)=>{ol(e,t)})}async function op(e,t){e.Iu=void 0,oh(e)?(e.pu.fu(t),oc(e)):e.pu.set("Unknown")}async function om(e,t,n){if(e.pu.set("Online"),t instanceof i7&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.wu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.wu.delete(r),e.Iu.removeTarget(r))}(e,t)}catch(n){nj("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await og(e,n)}else if(t instanceof i6?e.Iu.Qt(t):t instanceof i8?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(n6.min()))try{let t=await sW(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Iu.ee(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.wu.get(r);i&&e.wu.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.wu.get(t);if(!n)return;e.wu.set(t,n.withResumeToken(rm.EMPTY_BYTE_STRING,n.snapshotVersion)),ou(e,t);let r=new sI(n.target,t,1,n.sequenceNumber);ol(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){nj("RemoteStore","Failed to raise snapshot:",t),await og(e,t)}}async function og(e,t,n){if(!ro(t))throw t;e.mu.add(1),await os(e),e.pu.set("Offline"),n||(n=()=>sW(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nj("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await oi(e)})}function oy(e,t){return t().catch(n=>og(e,n,t))}async function ov(e){let t=oA(e),n=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;od(e)&&e._u.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e._u.length&&t.Bo();break}n=r.batchId,function(e,t){e._u.push(t);let n=oA(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}(e,r)}catch(t){await og(e,t)}ob(e)&&ow(e)}function ob(e){return od(e)&&!oA(e).Oo()&&e._u.length>0}function ow(e){oA(e).start()}async function oE(e){oA(e).su()}async function oT(e){let t=oA(e);for(let n of e._u)t.tu(n.mutations)}async function o_(e,t,n){let r=e._u.shift(),i=sT.from(r,t,n);await oy(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ov(e)}async function oI(e,t){t&&oA(e).Xo&&await async function(e,t){var n;if(function(e){switch(e){default:return nq();case nZ.CANCELLED:case nZ.UNKNOWN:case nZ.DEADLINE_EXCEEDED:case nZ.RESOURCE_EXHAUSTED:case nZ.INTERNAL:case nZ.UNAVAILABLE:case nZ.UNAUTHENTICATED:return!1;case nZ.INVALID_ARGUMENT:case nZ.NOT_FOUND:case nZ.ALREADY_EXISTS:case nZ.PERMISSION_DENIED:case nZ.FAILED_PRECONDITION:case nZ.ABORTED:case nZ.OUT_OF_RANGE:case nZ.UNIMPLEMENTED:case nZ.DATA_LOSS:return!0}}(n=t.code)&&n!==nZ.ABORTED){let n=e._u.shift();oA(e).$o(),await oy(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ov(e)}}(e,t),ob(e)&&ow(e)}async function ok(e,t){e.asyncQueue.verifyOperationInProgress(),nj("RemoteStore","RemoteStore received new credentials");let n=od(e);e.mu.add(3),await os(e),n&&e.pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.mu.delete(3),await oi(e)}async function oS(e,t){t?(e.mu.delete(2),await oi(e)):t||(e.mu.add(2),await os(e),e.pu.set("Unknown"))}function oC(e){var t,n,r;return e.Tu||(e.Tu=(t=e.datastore,n=e.asyncQueue,r={Xr:of.bind(null,e),no:op.bind(null,e),Ho:om.bind(null,e)},t.ru(),new s9(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),e.gu.push(async t=>{t?(e.Tu.$o(),oh(e)?oc(e):e.pu.set("Unknown")):(await e.Tu.stop(),e.Iu=void 0)})),e.Tu}function oA(e){var t,n,r;return e.Eu||(e.Eu=(t=e.datastore,n=e.asyncQueue,r={Xr:oE.bind(null,e),no:oI.bind(null,e),nu:oT.bind(null,e),eu:o_.bind(null,e)},t.ru(),new oe(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),e.gu.push(async t=>{t?(e.Eu.$o(),await ov(e)):(await e.Eu.stop(),e._u.length>0&&(nj("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nK,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,o=new ox(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nH(nZ.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oO(e,t){if(n$("AsyncQueue",`${t}: ${e}`),ro(e))return new nH(nZ.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rt.comparator(t.key,n.key):(e,t)=>rt.comparator(e.key,t.key),this.keyedMap=iX(),this.sortedSet=new r0(this.comparator)}static emptySet(e){return new oN(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oN)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new oN;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.Au=new r0(rt.comparator)}track(e){let t=e.doc.key,n=this.Au.get(t);n?0!==e.type&&3===n.type?this.Au=this.Au.insert(t,e):3===e.type&&1!==n.type?this.Au=this.Au.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Au=this.Au.remove(t):1===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):nq():this.Au=this.Au.insert(t,e)}Ru(){let e=[];return this.Au.inorderTraversal((t,n)=>{e.push(n)}),e}}class oD{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new oD(e,t,oN.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ip(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.bu=void 0,this.listeners=[]}}class oM{constructor(){this.queries=new iG(e=>im(e),ip),this.onlineState="Unknown",this.vu=new Set}}async function oL(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new oP),r)try{i.bu=await e.onListen(n)}catch(n){let e=oO(n,`Initialization of query '${ig(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Pu(e.onlineState),i.bu&&t.Vu(i.bu)&&oj(e)}async function oV(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function oU(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Vu(r)&&(n=!0);i.bu=r}}n&&oj(e)}function oF(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function oj(e){e.vu.forEach(e=>{e.next()})}class o${constructor(e,t,n){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new oD(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){return!e.fromCache||(!this.options.Ou||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}xu(e){if(e.docChanges.length>0)return!0;let t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ku(e){e=oD.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e){this.key=e}}class oB{constructor(e){this.key=e}}class oq{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=i2(),this.mutatedKeys=i2(),this.ju=iv(e),this.zu=new oN(this.ju)}get Wu(){return this.Ku}Hu(e,t){let n=t?t.Ju:new oR,r=t?t.zu:this.zu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=iy(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Yu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.ju(c,a)>0||l&&0>this.ju(c,l))&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{zu:s,Ju:n,Li:o,mutatedKeys:i}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;let i=e.Ju.Ru();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nq()}};return n(e)-n(t)})(e.type,t.type)||this.ju(e.doc,t.doc)),this.Zu(n);let s=t?this.Xu():[],o=0===this.Qu.size&&this.current?1:0,a=o!==this.Gu;return(this.Gu=o,0!==i.length||a)?{snapshot:new oD(this.query,e.zu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:s}:{tc:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new oR,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(e=>this.Ku=this.Ku.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ku=this.Ku.delete(e)),this.current=e.current)}Xu(){if(!this.current)return[];let e=this.Qu;this.Qu=i2(),this.zu.forEach(e=>{this.ec(e.key)&&(this.Qu=this.Qu.add(e.key))});let t=[];return e.forEach(e=>{this.Qu.has(e)||t.push(new oB(e))}),this.Qu.forEach(n=>{e.has(n)||t.push(new oz(n))}),t}nc(e){this.Ku=e.Yi,this.Qu=i2();let t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return oD.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class oZ{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oH{constructor(e){this.key=e,this.ic=!1}}class oK{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.rc={},this.oc=new iG(e=>im(e),ip),this.uc=new Map,this.cc=new Set,this.ac=new r0(rt.comparator),this.hc=new Map,this.lc=new sL,this.fc={},this.dc=new Map,this._c=sO.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function oG(e,t){let n,r;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=oY.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=at.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=o0.bind(null,t),t.rc.Ho=oU.bind(null,t.eventManager),t.rc.gc=oF.bind(null,t.eventManager),t}(e),s=i.oc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.sc();else{let e=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Ns.getTargetData(e,t).next(i=>i?(r=i,rs.resolve(r)):n.Ns.allocateTargetId(e).next(i=>(r=new sI(t,i,0,e.currentSequenceNumber),n.Ns.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Ki.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(e.targetId,e),n.Gi.set(t,e.targetId)),e})}(i.localStore,ic(t));i.isPrimaryClient&&oo(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await oW(i,t,n,"current"===s,e.resumeToken)}return r}async function oW(e,t,n,r,i){e.mc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Hu(n);i.Li&&(i=await sX(e.localStore,t.query,!1).then(({documents:e})=>t.view.Hu(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return o8(e,t.targetId,o.tc),o.snapshot})(e,t,n,r);let s=await sX(e.localStore,t,!0),o=new oq(t,s.Yi),a=o.Hu(s.documents),l=i5.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);o8(e,n,u.tc);let c=new oZ(t,n,o);return e.oc.set(t,c),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function oQ(e,t){let n=e.oc.get(t),r=e.uc.get(n.targetId);if(r.length>1)return e.uc.set(n.targetId,r.filter(e=>!ip(e,t))),void e.oc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sQ(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),oa(e.remoteStore,n.targetId),o5(e,n.targetId)}).catch(ri)):(o5(e,n.targetId),await sQ(e.localStore,n.targetId,!0))}async function oX(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=o1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o2.bind(null,t),t}(e);try{var i,s;let e;let o=await function(e,t){let n,r;let i=n5.now(),s=t.reduce((e,t)=>e.add(t.key),i2());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=iW,l=i2();return e.ji.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=iT(r.transform,e||null);null!=i&&(null===n&&(n=r6.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new ij(e.key,t,function e(t){let n=[];return rh(t.fields,(t,r)=>{let i=new re([t]);if(rP(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new r5(n)}(t.value.mapValue),iD.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:iY(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(e=i.fc[i.currentUser.toKey()])||(e=new r0(n4)),e=e.insert(s,n),i.fc[i.currentUser.toKey()]=e,await o9(r,o.changes),await ov(r.remoteStore)}catch(t){let e=oO(t,"Failed to persist write");n.reject(e)}}async function oY(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let o,a;let l=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=i.get(o);if(!l)return;u.push(n.Ns.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Ns.addMatchingKeys(e,s.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?c=c.withResumeToken(rm.EMPTY_BYTE_STRING,n6.min()).withLastLimboFreeSnapshotVersion(n6.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(o,c),a=c,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(n.Ns.updateTargetData(e,c))});let c=iW,h=i2();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((s=t.documentUpdates,o=i2(),a=i2(),s.forEach(e=>o=o.add(e)),l.getEntries(e,o).next(e=>{let t=iW;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(n6.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):nj("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Hi:t,Ji:a}})).next(e=>{c=e.Hi,h=e.Ji})),!r.isEqual(n6.min())){let t=n.Ns.getLastRemoteSnapshotVersion(e).next(t=>n.Ns.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(t)}return rs.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(n.Ki=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.hc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nq(),t.addedDocuments.size>0?r.ic=!0:t.modifiedDocuments.size>0?r.ic||nq():t.removedDocuments.size>0&&(r.ic||nq(),r.ic=!1))}),await o9(e,n,t)}catch(e){await ri(e)}}function oJ(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.oc.forEach((n,r)=>{let i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.Pu(t)&&(r=!0)}),r&&oj(n)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function o0(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.hc.get(t),s=i&&i.key;if(s){let e=new r0(rt.comparator);e=e.insert(s,r8.newNoDocument(s,n6.min()));let n=i2().add(s),i=new i3(n6.min(),new Map,new r4(n4),e,n);await oY(r,i),r.ac=r.ac.remove(s),r.hc.delete(t),o7(r)}else await sQ(r.localStore,t,!1).then(()=>o5(r,t,n)).catch(ri)}async function o1(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=rs.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nq(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=i2();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});o3(e,r,null),o4(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await o9(e,i)}catch(e){await ri(e)}}async function o2(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||nq(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});o3(e,t,n),o4(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await o9(e,i)}catch(e){await ri(e)}}function o4(e,t){(e.dc.get(t)||[]).forEach(e=>{e.resolve()}),e.dc.delete(t)}function o3(e,t,n){let r=e,i=r.fc[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fc[r.currentUser.toKey()]=i}}function o5(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.uc.get(t)))e.oc.delete(r),n&&e.rc.gc(r,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(t=>{e.lc.containsKey(t)||o6(e,t)})}function o6(e,t){e.cc.delete(t.path.canonicalString());let n=e.ac.get(t);null!==n&&(oa(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),o7(e))}function o8(e,t,n){for(let r of n)r instanceof oz?(e.lc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.ac.get(n)||e.cc.has(r)||(nj("SyncEngine","New document in limbo: "+n),e.cc.add(r),o7(e))}(e,r)):r instanceof oB?(nj("SyncEngine","Document no longer in limbo: "+r.key),e.lc.removeReference(r.key,t),e.lc.containsKey(r.key)||o6(e,r.key)):nq()}function o7(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){var t;let n=e.cc.values().next().value;e.cc.delete(n);let r=new rt(n7.fromString(n)),i=e._c.next();e.hc.set(i,new oH(r)),e.ac=e.ac.insert(r,i),oo(e.remoteStore,new sI(ic((t=r.path,new ii(t))),i,2,ra.at))}}async function o9(e,t,n){let r=[],i=[],s=[];e.oc.isEmpty()||(e.oc.forEach((o,a)=>{s.push(e.mc(a,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=sZ.Ni(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.rc.Ho(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rs.forEach(t,t=>rs.forEach(t.Ci,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>rs.forEach(t.xi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ro(e))throw e;nj("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Ki.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(t,i)}}}(e.localStore,i))}async function ae(e,t){let n=e;if(!n.currentUser.isEqual(t)){nj("SyncEngine","User change. New user:",t.toKey());let e=await sG(n.localStore,t);n.currentUser=t,n.dc.forEach(e=>{e.forEach(e=>{e.reject(new nH(nZ.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.dc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await o9(n,e.Wi)}}function at(e,t){let n=e.hc.get(t);if(n&&n.ic)return i2().add(n.key);{let n=i2(),r=e.uc.get(t);if(!r)return n;for(let t of r){let r=e.oc.get(t);n=n.unionWith(r.view.Wu)}return n}}class an{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=s6(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){var t,n,r,i;return t=this.persistence,n=new sH,r=e.initialUser,i=this.Tt,new sK(t,n,r,i)}Tc(e){return new sz(sq.qs,this.Tt)}Ic(e){return new sJ}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ar{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oJ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ae.bind(null,this.syncEngine),await oS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oM}createDatastore(e){var t,n,r;let i=s6(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new s3(t));return n=e.authCredentials,r=e.appCheckCredentials,new ot(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>oJ(this.syncEngine,e,0),s=s1.C()?new s1:new s0,new or(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new oK(e,t,n,r,i,s);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){nj("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await os(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):n$("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nL.UNAUTHENTICATED,this.clientId=n2.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{nj("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(nj("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nH(nZ.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nK;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=oO(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ao(e,t){e.asyncQueue.verifyOperationInProgress(),nj("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sG(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function aa(e,t){e.asyncQueue.verifyOperationInProgress();let n=await al(e);nj("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ok(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ok(t.remoteStore,n)),e.onlineComponents=t}async function al(e){return e.offlineComponents||(nj("FirestoreClient","Using default OfflineComponentProvider"),await ao(e,new an)),e.offlineComponents}async function au(e){return e.onlineComponents||(nj("FirestoreClient","Using default OnlineComponentProvider"),await aa(e,new ar)),e.onlineComponents}async function ac(e){let t=await au(e),n=t.eventManager;return n.onListen=oG.bind(null,t.syncEngine),n.onUnlisten=oQ.bind(null,t.syncEngine),n}let ah=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(e,t,n){if(!n)throw new nH(nZ.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function af(e){if(!rt.isDocumentKey(e))throw new nH(nZ.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ap(e){if(rt.isDocumentKey(e))throw new nH(nZ.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function am(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nq()}function ag(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nH(nZ.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=am(e);throw new nH(nZ.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new nH(nZ.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nH(nZ.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new nH(nZ.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nH(nZ.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nH(nZ.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nW;switch(e.type){case"gapi":let t=e.client;return new nJ(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nH(nZ.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ah.get(e);t&&(nj("ComponentProvider","Removing Datastore"),ah.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ab(this.firestore,e,this._key)}}class aw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new aw(this.firestore,e,this._query)}}class aE extends aw{constructor(e,t,n){super(e,t,new ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ab(this.firestore,null,new rt(e))}withConverter(e){return new aE(this.firestore,e,this._path)}}function aT(e,t,...n){if(e=(0,p.m9)(e),ad("collection","path",t),e instanceof av){let r=n7.fromString(t,...n);return ap(r),new aE(e,null,r)}{if(!(e instanceof ab||e instanceof aE))throw new nH(nZ.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(n7.fromString(t,...n));return ap(r),new aE(e.firestore,null,r)}}function a_(e,t,...n){if(e=(0,p.m9)(e),1==arguments.length&&(t=n2.R()),ad("doc","path",t),e instanceof av){let r=n7.fromString(t,...n);return af(r),new ab(e,null,new rt(r))}{if(!(e instanceof ab||e instanceof aE))throw new nH(nZ.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(n7.fromString(t,...n));return af(r),new ab(e.firestore,e instanceof aE?e.converter:null,new rt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new s8(this,"async_queue_retry"),this.Hc=()=>{let e=s5();e&&nj("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};let e=s5();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;let t=s5();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});let t=new nK;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ro(e))throw e;nj("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){let t=this.qc.then(()=>(this.jc=!0,e().catch(e=>{let t;this.Qc=e,this.jc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw n$("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.jc=!1,e))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);let r=ox.createAndSchedule(this,e,t,n,e=>this.Xc(e));return this.Gc.push(r),r}Jc(){this.Qc&&nq()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(let t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{for(let t of(this.Gc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Gc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){let t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function ak(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class aS extends av{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new aI,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ax(this),this._firestoreClient.terminate()}}function aC(e,t){let n="object"==typeof e?e:(0,h.Mq)(),r=(0,h.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,p.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=ag(e,av))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&nz("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=nL.MOCK_USER;else{t=(0,p.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new nH(nZ.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nL(s)}e._authCredentials=new nQ(new nG(t,n))}}(r,...e)}return r}function aA(e){return e._firestoreClient||ax(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ax(e){var t,n,r,i;let s=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new rl(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new as(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aO(rm.fromBase64String(e))}catch(e){throw new nH(nZ.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new aO(rm.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nH(nZ.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nH(nZ.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nH(nZ.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n4(this._lat,e._lat)||n4(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aP=/^__.*__$/;class aM{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ij(e,this.data,this.fieldMask,t,this.fieldTransforms):new iF(e,this.data,t,this.fieldTransforms)}}class aL{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ij(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aV(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nq()}}class aU{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new aU(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.aa(e),r}ha(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return aQ(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(aV(this.ra)&&aP.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class aF{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||s6(e)}wa(e,t,n,r=!1){return new aU({ra:e,methodName:t,_a:n,path:re.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function aj(e){let t=e._freezeSettings(),n=s6(e._databaseId);return new aF(e._databaseId,!!t.ignoreUndefinedProperties,n)}class a$ extends aR{_toFieldTransform(e){if(2!==e.ra)throw 1===e.ra?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof a$}}class az extends aR{_toFieldTransform(e){return new iN(e.path,new i_)}isEqual(e){return e instanceof az}}function aB(e,t){if(aZ(e=(0,p.m9)(e)))return aH("Unsupported field value:",t,e),aq(e,t);if(e instanceof aR)return function(e,t){if(!aV(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&4!==t.ra)throw t.fa("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=aB(i,t.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,p.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.Tt,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!rf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iw(r):ib(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=n5.fromDate(e);return{timestampValue:sa(t.Tt,n)}}if(e instanceof n5){let n=new n5(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sa(t.Tt,n)}}if(e instanceof aD)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof aO)return{bytesValue:sl(t.Tt,e._byteString)};if(e instanceof ab){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${am(e)}`)}(e,t)}function aq(e,t){let n={};return rd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rh(e,(e,r)=>{let i=aB(r,t.ua(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function aZ(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof n5||e instanceof aD||e instanceof aO||e instanceof ab||e instanceof aR)}function aH(e,t,n){if(!aZ(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=am(n);throw"an object"===r?t.fa(e+" a custom object"):t.fa(e+" "+r)}}function aK(e,t,n){if((t=(0,p.m9)(t))instanceof aN)return t._internalPath;if("string"==typeof t)return aW(e,t);throw aQ("Field path arguments must be of type string or ",e,!1,void 0,n)}let aG=RegExp("[~\\*/\\[\\]]");function aW(e,t,n){if(t.search(aG)>=0)throw aQ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aN(...t.split("."))._internalPath}catch(r){throw aQ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aQ(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new nH(nZ.INVALID_ARGUMENT,a+e+l)}function aX(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aY{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ab(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new aJ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(a0("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aJ extends aY{data(){return super.data()}}function a0(e,t){return"string"==typeof t?aW(e,t):t instanceof aN?t._internalPath:t._delegate._internalPath}class a1{}class a2 extends a1{}function a4(e,t,...n){let r=[];for(let i of(t instanceof a1&&r.push(t),function(e){let t=e.filter(e=>e instanceof a6).length,n=e.filter(e=>e instanceof a3).length;if(t>1||t>0&&n>0)throw new nH(nZ.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class a3 extends a2{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new a3(e,t,n)}_apply(e){let t=this._parse(e);return lt(e._query,t),new aw(e.firestore,e.converter,ih(e._query,t))}_parse(e){let t=aj(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new nH(nZ.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){le(o,s);let t=[];for(let n of o)t.push(a9(r,e,n));a={arrayValue:{values:t}}}else a=a9(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||le(o,s),a=function(e,t,n,r=!1){return aB(n,e.wa(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return r$.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function a5(e,t,n){let r=a0("where",e);return a3._create(r,t,n)}class a6 extends a1{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new a6(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rz.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)lt(n,e),n=ih(n,e)}(e._query,t),new aw(e.firestore,e.converter,ih(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class a8 extends a2{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new a8(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new nH(nZ.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new nH(nZ.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new rJ(t,n);return function(e,t){if(null===io(e)){let n=ia(e);null!==n&&ln(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new aw(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new ii(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function a7(e,t="asc"){let n=a0("orderBy",e);return a8._create(n,t)}function a9(e,t,n){if("string"==typeof(n=(0,p.m9)(n))){if(""===n)throw new nH(nZ.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!il(t)&&-1!==n.indexOf("/"))throw new nH(nZ.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(n7.fromString(n));if(!rt.isDocumentKey(r))throw new nH(nZ.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rx(e,new rt(r))}if(n instanceof ab)return rx(e,n._key);throw new nH(nZ.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${am(n)}.`)}function le(e,t){if(!Array.isArray(e)||0===e.length)throw new nH(nZ.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lt(e,t){if(t.isInequality()){let n=ia(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new nH(nZ.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=io(e);null!==i&&ln(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new nH(nZ.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new nH(nZ.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ln(e,t,n){if(!n.isEqual(t))throw new nH(nZ.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lr{convertValue(e,t="none"){switch(r_(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rv(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rb(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nq()}}convertObject(e,t){let n={};return rh(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new aD(rv(e.latitude),rv(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rw(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rE(e));default:return null}}convertTimestamp(e){let t=ry(e);return new n5(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=n7.fromString(e);sw(n)||nq();let r=new ru(n.get(1),n.get(3)),i=new rt(n.popFirst(5));return r.isEqual(t)||n$(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ls extends aY{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(a0("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lo extends ls{data(e={}){return super.data(e)}}class la{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new li(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lo(this._firestore,this._userDataWriter,n.key,n,new li(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new nH(nZ.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new lo(e._firestore,e._userDataWriter,n.doc.key,n.doc,new li(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new lo(e._firestore,e._userDataWriter,t.doc.key,t.doc,new li(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nq()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class ll extends lr{constructor(e){super(),this.firestore=e}convertBytes(e){return new aO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ab(this.firestore,null,t)}}function lu(e,t,n,...r){let i;e=ag(e,ab);let s=ag(e.firestore,aS),o=aj(s);return i="string"==typeof(t=(0,p.m9)(t))||t instanceof aN?function(e,t,n,r,i,s){let o=e.wa(1,t,n),a=[aK(t,r,n)],l=[i];if(s.length%2!=0)throw new nH(nZ.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(aK(t,s[e])),l.push(s[e+1]);let u=[],c=r6.empty();for(let e=a.length-1;e>=0;--e)if(!aX(u,a[e])){let t=a[e],n=l[e];n=(0,p.m9)(n);let r=o.ha(t);if(n instanceof a$)u.push(t);else{let e=aB(n,r);null!=e&&(u.push(t),c.set(t,e))}}let h=new r5(u);return new aL(c,h,o.fieldTransforms)}(o,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.wa(1,t,n);aH("Data must be an object, but it was:",i,r);let s=[],o=r6.empty();rh(r,(e,r)=>{let a=aW(t,e,n);r=(0,p.m9)(r);let l=i.ha(a);if(r instanceof a$)s.push(a);else{let e=aB(r,l);null!=e&&(s.push(a),o.set(a,e))}});let a=new r5(s);return new aL(o,a,i.fieldTransforms)}(o,"updateDoc",e._key,t),lf(s,[i.toMutation(e._key,iD.exists(!0))])}function lc(e){return lf(ag(e.firestore,aS),[new iq(e._key,iD.none())])}function lh(e,t){var n,r;let i=ag(e.firestore,aS),s=a_(e),o=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return lf(i,[(function(e,t,n,r,i,s={}){let o,a;let l=e.wa(s.merge||s.mergeFields?2:0,t,n,i);aH("Data must be an object, but it was:",l,r);let u=aq(r,l);if(s.merge)o=new r5(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=aK(t,r,n);if(!l.contains(i))throw new nH(nZ.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);aX(e,i)||e.push(i)}o=new r5(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new aM(new r6(u),o,a)})(aj(e.firestore),"addDoc",s._key,o,null!==e.converter,{}).toMutation(s._key,iD.exists(!1))]).then(()=>s)}function ld(e,...t){var n,r,i,s;let o,a,l;e=(0,p.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||ak(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(ak(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ab)a=ag(e.firestore,aS),s=e._key.path,l=new ii(s),o={next:n=>{t[c]&&t[c](function(e,t,n){let r=n.docs.get(t._key),i=new ll(e);return new ls(e,i,t._key,r,new li(n.hasPendingWrites,n.fromCache),t.converter)}(a,e,n))},error:t[c+1],complete:t[c+2]};else{let n=ag(e,aw);a=ag(n.firestore,aS),l=n._query;let r=new ll(a);o={next:e=>{t[c]&&t[c](new la(a,r,n,e))},error:t[c+1],complete:t[c+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new nH(nZ.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){let i=new ai(r),s=new o$(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>oL(await ac(e),s)),()=>{i.Pc(),e.asyncQueue.enqueueAndForget(async()=>oV(await ac(e),s))}}(aA(a),l,h,o)}function lf(e,t){return function(e,t){let n=new nK;return e.asyncQueue.enqueueAndForget(async()=>oX(await au(e).then(e=>e.syncEngine),t,n)),n.promise}(aA(e),t)}function lp(){return new az("serverTimestamp")}!function(e,t=!0){nV=h.Jn,(0,h.Xd)(new d.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new aS(new nX(e.getProvider("auth-internal")),new n1(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nH(nZ.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(nM,"3.8.4",void 0),(0,h.KN)(nM,"3.8.4","esm2017")}()},4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return b},L:function(){return u},LL:function(){return x},P0:function(){return g},Pz:function(){return v},Sg:function(){return w},ZR:function(){return A},aH:function(){return y},b$:function(){return I},eu:function(){return C},hl:function(){return S},m9:function(){return F},ne:function(){return L},pd:function(){return M},q4:function(){return m},ru:function(){return _},tV:function(){return c},uI:function(){return T},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(R(r)&&R(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return k},xO:function(){return D},xb:function(){return N},z$:function(){return E},zd:function(){return P}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length,o=s?n[e.charAt(t)]:0;++t;let l=t<e.length,u=l?n[e.charAt(t)]:64;++t;let c=t<e.length,h=c?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==u||null==h)throw new a;let d=i<<2|o>>4;if(r.push(d),64!==u){let e=o<<4&240|u>>2;if(r.push(e),64!==h){let e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{let t=m(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function _(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){let e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function C(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(O,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new A(r,o,n);return a}}let O=/\{\$([^}]+)}/g;function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function P(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function M(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function L(e,t){let n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=U),void 0===r.error&&(r.error=U),void 0===r.complete&&(r.complete=U);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return e&&e._delegate?e._delegate:e}},9535:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0,function(e,t){if((t||!e||!e.__esModule)&&null!==e&&("object"==typeof e||"function"==typeof e)){var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var a=i?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,n&&n.set(e,r)}}(n(7294));var i=r(n(4938)),s=n(5893);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}var a=(0,i.default)((0,s.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");t.Z=a},4938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(3875)},7739:function(e,t,n){"use strict";let r,i,s,o;n.d(t,{Z:function(){return $}});var a=n(7462),l=n(3366),u=n(7294),c=n(6010),h=n(4780),d=n(948),f=n(1657),p=n(1705),m=n(2068),g=n(8791),y=n(5068),v=n(220);function b(e,t){var n=Object.create(null);return e&&u.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=t&&(0,u.isValidElement)(e)?t(e):e}),n}function w(e,t,n){return null!=n[t]?n[t]:e.props[t]}var E=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},T=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,y.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,s=t.handleExited;return{children:t.firstRender?b(e.children,function(t){return(0,u.cloneElement)(t,{onExited:s.bind(null,t),in:!0,appear:w(t,"appear",e),enter:w(t,"enter",e),exit:w(t,"exit",e)})}):(Object.keys(r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),s=[];for(var o in e)o in t?s.length&&(i[o]=s,s=[]):s.push(o);var a={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];a[i[l][r]]=n(u)}a[l]=n(l)}for(r=0;r<s.length;r++)a[s[r]]=n(s[r]);return a}(i,n=b(e.children))).forEach(function(t){var o=r[t];if((0,u.isValidElement)(o)){var a=t in i,l=t in n,c=i[t],h=(0,u.isValidElement)(c)&&!c.props.in;l&&(!a||h)?r[t]=(0,u.cloneElement)(o,{onExited:s.bind(null,o),in:!0,exit:w(o,"exit",e),enter:w(o,"enter",e)}):l||!a||h?l&&a&&(0,u.isValidElement)(c)&&(r[t]=(0,u.cloneElement)(o,{onExited:s.bind(null,o),in:c.props.in,exit:w(o,"exit",e),enter:w(o,"enter",e)})):r[t]=(0,u.cloneElement)(o,{in:!1})}}),r),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,a.Z)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,l.Z)(e,["component","childFactory"]),i=this.state.contextValue,s=E(this.state.children).map(n);return(delete r.appear,delete r.enter,delete r.exit,null===t)?u.createElement(v.Z.Provider,{value:i},s):u.createElement(v.Z.Provider,{value:i},u.createElement(t,r,s))},t}(u.Component);T.propTypes={},T.defaultProps={component:"div",childFactory:function(e){return e}};var _=n(917),I=n(5893),k=n(1588);let S=(0,k.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),C=["center","classes","className"],A=(0,_.F4)(r||(r=(e=>e)`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),x=(0,_.F4)(i||(i=(e=>e)`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),O=(0,_.F4)(s||(s=(e=>e)`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),N=(0,d.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),R=(0,d.ZP)(function(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:h}=e,[d,f]=u.useState(!1),p=(0,c.Z)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m=(0,c.Z)(n.child,d&&n.childLeaving,r&&n.childPulsate);return a||d||f(!0),u.useEffect(()=>{if(!a&&null!=l){let e=setTimeout(l,h);return()=>{clearTimeout(e)}}},[l,a,h]),(0,I.jsx)("span",{className:p,style:{width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},children:(0,I.jsx)("span",{className:m})})},{name:"MuiTouchRipple",slot:"Ripple"})(o||(o=(e=>e)`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),S.rippleVisible,A,550,({theme:e})=>e.transitions.easing.easeInOut,S.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,S.child,S.childLeaving,x,550,({theme:e})=>e.transitions.easing.easeInOut,S.childPulsate,O,({theme:e})=>e.transitions.easing.easeInOut),D=u.forwardRef(function(e,t){let n=(0,f.Z)({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:s}=n,o=(0,l.Z)(n,C),[h,d]=u.useState([]),p=u.useRef(0),m=u.useRef(null);u.useEffect(()=>{m.current&&(m.current(),m.current=null)},[h]);let g=u.useRef(!1),y=u.useRef(null),v=u.useRef(null),b=u.useRef(null);u.useEffect(()=>()=>{clearTimeout(y.current)},[]);let w=u.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:s,cb:o}=e;d(e=>[...e,(0,I.jsx)(R,{classes:{ripple:(0,c.Z)(i.ripple,S.ripple),rippleVisible:(0,c.Z)(i.rippleVisible,S.rippleVisible),ripplePulsate:(0,c.Z)(i.ripplePulsate,S.ripplePulsate),child:(0,c.Z)(i.child,S.child),childLeaving:(0,c.Z)(i.childLeaving,S.childLeaving),childPulsate:(0,c.Z)(i.childPulsate,S.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:s},p.current)]),p.current+=1,m.current=o},[i]),E=u.useCallback((e={},t={},n=()=>{})=>{let i,s,o;let{pulsate:a=!1,center:l=r||t.pulsate,fakeElement:u=!1}=t;if((null==e?void 0:e.type)==="mousedown"&&g.current){g.current=!1;return}(null==e?void 0:e.type)==="touchstart"&&(g.current=!0);let c=u?null:b.current,h=c?c.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!l&&void 0!==e&&(0!==e.clientX||0!==e.clientY)&&(e.clientX||e.touches)){let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-h.left),s=Math.round(n-h.top)}else i=Math.round(h.width/2),s=Math.round(h.height/2);if(l)(o=Math.sqrt((2*h.width**2+h.height**2)/3))%2==0&&(o+=1);else{let e=2*Math.max(Math.abs((c?c.clientWidth:0)-i),i)+2,t=2*Math.max(Math.abs((c?c.clientHeight:0)-s),s)+2;o=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===v.current&&(v.current=()=>{w({pulsate:a,rippleX:i,rippleY:s,rippleSize:o,cb:n})},y.current=setTimeout(()=>{v.current&&(v.current(),v.current=null)},80)):w({pulsate:a,rippleX:i,rippleY:s,rippleSize:o,cb:n})},[r,w]),_=u.useCallback(()=>{E({},{pulsate:!0})},[E]),k=u.useCallback((e,t)=>{if(clearTimeout(y.current),(null==e?void 0:e.type)==="touchend"&&v.current){v.current(),v.current=null,y.current=setTimeout(()=>{k(e,t)});return}v.current=null,d(e=>e.length>0?e.slice(1):e),m.current=t},[]);return u.useImperativeHandle(t,()=>({pulsate:_,start:E,stop:k}),[_,E,k]),(0,I.jsx)(N,(0,a.Z)({className:(0,c.Z)(S.root,i.root,s),ref:b},o,{children:(0,I.jsx)(T,{component:null,exit:!0,children:h})}))});var P=n(4867);function M(e){return(0,P.Z)("MuiButtonBase",e)}let L=(0,k.Z)("MuiButtonBase",["root","disabled","focusVisible"]),V=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],U=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s=(0,h.Z)({root:["root",t&&"disabled",n&&"focusVisible"]},M,i);return n&&r&&(s.root+=` ${r}`),s},F=(0,d.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${L.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),j=u.forwardRef(function(e,t){let n=(0,f.Z)({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:s,className:o,component:h="button",disabled:d=!1,disableRipple:y=!1,disableTouchRipple:v=!1,focusRipple:b=!1,LinkComponent:w="a",onBlur:E,onClick:T,onContextMenu:_,onDragLeave:k,onFocus:S,onFocusVisible:C,onKeyDown:A,onKeyUp:x,onMouseDown:O,onMouseLeave:N,onMouseUp:R,onTouchEnd:P,onTouchMove:M,onTouchStart:L,tabIndex:j=0,TouchRippleProps:$,touchRippleRef:z,type:B}=n,q=(0,l.Z)(n,V),Z=u.useRef(null),H=u.useRef(null),K=(0,p.Z)(H,z),{isFocusVisibleRef:G,onFocus:W,onBlur:Q,ref:X}=(0,g.Z)(),[Y,J]=u.useState(!1);d&&Y&&J(!1),u.useImperativeHandle(r,()=>({focusVisible:()=>{J(!0),Z.current.focus()}}),[]);let[ee,et]=u.useState(!1);function en(e,t,n=v){return(0,m.Z)(r=>(t&&t(r),!n&&H.current&&H.current[e](r),!0))}u.useEffect(()=>{et(!0)},[]),u.useEffect(()=>{Y&&b&&!y&&ee&&H.current.pulsate()},[y,b,Y,ee]);let er=en("start",O),ei=en("stop",_),es=en("stop",k),eo=en("stop",R),ea=en("stop",e=>{Y&&e.preventDefault(),N&&N(e)}),el=en("start",L),eu=en("stop",P),ec=en("stop",M),eh=en("stop",e=>{Q(e),!1===G.current&&J(!1),E&&E(e)},!1),ed=(0,m.Z)(e=>{Z.current||(Z.current=e.currentTarget),W(e),!0===G.current&&(J(!0),C&&C(e)),S&&S(e)}),ef=()=>{let e=Z.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},ep=u.useRef(!1),em=(0,m.Z)(e=>{b&&!ep.current&&Y&&H.current&&" "===e.key&&(ep.current=!0,H.current.stop(e,()=>{H.current.start(e)})),e.target===e.currentTarget&&ef()&&" "===e.key&&e.preventDefault(),A&&A(e),e.target===e.currentTarget&&ef()&&"Enter"===e.key&&!d&&(e.preventDefault(),T&&T(e))}),eg=(0,m.Z)(e=>{b&&" "===e.key&&H.current&&Y&&!e.defaultPrevented&&(ep.current=!1,H.current.stop(e,()=>{H.current.pulsate(e)})),x&&x(e),T&&e.target===e.currentTarget&&ef()&&" "===e.key&&!e.defaultPrevented&&T(e)}),ey=h;"button"===ey&&(q.href||q.to)&&(ey=w);let ev={};"button"===ey?(ev.type=void 0===B?"button":B,ev.disabled=d):(q.href||q.to||(ev.role="button"),d&&(ev["aria-disabled"]=d));let eb=(0,p.Z)(t,X,Z),ew=(0,a.Z)({},n,{centerRipple:i,component:h,disabled:d,disableRipple:y,disableTouchRipple:v,focusRipple:b,tabIndex:j,focusVisible:Y}),eE=U(ew);return(0,I.jsxs)(F,(0,a.Z)({as:ey,className:(0,c.Z)(eE.root,o),ownerState:ew,onBlur:eh,onClick:T,onContextMenu:ei,onFocus:ed,onKeyDown:em,onKeyUp:eg,onMouseDown:er,onMouseLeave:ea,onMouseUp:eo,onDragLeave:es,onTouchEnd:eu,onTouchMove:ec,onTouchStart:el,ref:eb,tabIndex:d?-1:j,type:B},ev,q,{children:[s,!ee||y||d?null:(0,I.jsx)(D,(0,a.Z)({ref:K,center:i},$))]}))});var $=j},3321:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(3366),i=n(7462),s=n(7294),o=n(6010),a=n(7925),l=n(4780),u=n(1796),c=n(948),h=n(1657),d=n(7739),f=n(8216),p=n(1588),m=n(4867);function g(e){return(0,m.Z)("MuiButton",e)}let y=(0,p.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=s.createContext({});var b=n(5893);let w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],E=e=>{let{color:t,disableElevation:n,fullWidth:r,size:s,variant:o,classes:a}=e,u={root:["root",o,`${o}${(0,f.Z)(t)}`,`size${(0,f.Z)(s)}`,`${o}Size${(0,f.Z)(s)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,f.Z)(s)}`],endIcon:["endIcon",`iconSize${(0,f.Z)(s)}`]},c=(0,l.Z)(u,g,a);return(0,i.Z)({},a,c)},T=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),_=(0,c.ZP)(d.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,f.Z)(n.color)}`],t[`size${(0,f.Z)(n.size)}`],t[`${n.variant}Size${(0,f.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,r;return(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${y.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${y.disabled}`]:(0,i.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,u.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}}),I=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,f.Z)(n.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},T(e))),k=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,f.Z)(n.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},T(e))),S=s.forwardRef(function(e,t){let n=s.useContext(v),l=(0,a.Z)(n,e),u=(0,h.Z)({props:l,name:"MuiButton"}),{children:c,color:d="primary",component:f="button",className:p,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:y=!1,endIcon:T,focusVisibleClassName:S,fullWidth:C=!1,size:A="medium",startIcon:x,type:O,variant:N="text"}=u,R=(0,r.Z)(u,w),D=(0,i.Z)({},u,{color:d,component:f,disabled:m,disableElevation:g,disableFocusRipple:y,fullWidth:C,size:A,type:O,variant:N}),P=E(D),M=x&&(0,b.jsx)(I,{className:P.startIcon,ownerState:D,children:x}),L=T&&(0,b.jsx)(k,{className:P.endIcon,ownerState:D,children:T});return(0,b.jsxs)(_,(0,i.Z)({ownerState:D,className:(0,o.Z)(n.className,P.root,p),component:f,disabled:m,focusRipple:!y,focusVisibleClassName:(0,o.Z)(P.focusVisible,S),ref:t,type:O},R,{classes:P,children:[M,c,L]}))});var C=S},6886:function(e,t,n){"use strict";n.d(t,{ZP:function(){return C}});var r=n(3366),i=n(7462),s=n(7294),o=n(6010),a=n(5408),l=n(9707),u=n(4780),c=n(948),h=n(1657),d=n(2734);let f=s.createContext();var p=n(1588),m=n(4867);function g(e){return(0,m.Z)("MuiGrid",e)}let y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=(0,p.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...y.map(e=>`grid-xs-${e}`),...y.map(e=>`grid-sm-${e}`),...y.map(e=>`grid-md-${e}`),...y.map(e=>`grid-lg-${e}`),...y.map(e=>`grid-xl-${e}`)]);var b=v,w=n(5893);let E=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function T(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function _({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(e=>{""===n&&0!==t[e]&&(n=e)});let r=Object.keys(e).sort((t,n)=>e[t]-e[n]);return r.slice(0,r.indexOf(n))}let I=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{container:r,direction:i,item:s,spacing:o,wrap:a,zeroMinWidth:l,breakpoints:u}=n,c=[];r&&(c=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];let r=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])}),r}(o,u,t));let h=[];return u.forEach(e=>{let r=n[e];r&&h.push(t[`grid-${e}-${String(r)}`])}),[t.root,r&&t.container,s&&t.item,l&&t.zeroMinWidth,...c,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==a&&t[`wrap-xs-${String(a)}`],...h]}})(({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let n=(0,a.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,a.k9)({theme:e},n,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${b.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:n,rowSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,a.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=_({breakpoints:e.breakpoints.values,values:n})),i=(0,a.k9)({theme:e},n,(n,r)=>{var i;let s=e.spacing(n);return"0px"!==s?{marginTop:`-${T(s)}`,[`& > .${b.item}`]:{paddingTop:T(s)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:t}){let{container:n,columnSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,a.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=_({breakpoints:e.breakpoints.values,values:n})),i=(0,a.k9)({theme:e},n,(n,r)=>{var i;let s=e.spacing(n);return"0px"!==s?{width:`calc(100% + ${T(s)})`,marginLeft:`-${T(s)}`,[`& > .${b.item}`]:{paddingLeft:T(s)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,s)=>{let o={};if(t[s]&&(n=t[s]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let l=(0,a.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"==typeof l?l[s]:l;if(null==u)return r;let c=`${Math.round(n/u*1e8)/1e6}%`,h={};if(t.container&&t.item&&0!==t.columnSpacing){let n=e.spacing(t.columnSpacing);if("0px"!==n){let e=`calc(${c} + ${T(n)})`;h={flexBasis:e,maxWidth:e}}}o=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},h)}return 0===e.breakpoints.values[s]?Object.assign(r,o):r[e.breakpoints.up(s)]=o,r},{})}),k=e=>{let{classes:t,container:n,direction:r,item:i,spacing:s,wrap:o,zeroMinWidth:a,breakpoints:l}=e,c=[];n&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let n=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e=`spacing-${t}-${String(r)}`;n.push(e)}}),n}(s,l));let h=[];l.forEach(t=>{let n=e[t];n&&h.push(`grid-${t}-${String(n)}`)});let d={root:["root",n&&"container",i&&"item",a&&"zeroMinWidth",...c,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...h]};return(0,u.Z)(d,g,t)},S=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiGrid"}),{breakpoints:a}=(0,d.Z)(),u=(0,l.Z)(n),{className:c,columns:p,columnSpacing:m,component:g="div",container:y=!1,direction:v="row",item:b=!1,rowSpacing:T,spacing:_=0,wrap:S="wrap",zeroMinWidth:C=!1}=u,A=(0,r.Z)(u,E),x=s.useContext(f),O=y?p||12:x,N={},R=(0,i.Z)({},A);a.keys.forEach(e=>{null!=A[e]&&(N[e]=A[e],delete R[e])});let D=(0,i.Z)({},u,{columns:O,container:y,direction:v,item:b,rowSpacing:T||_,columnSpacing:m||_,wrap:S,zeroMinWidth:C,spacing:_},N,{breakpoints:a.keys}),P=k(D);return(0,w.jsx)(f.Provider,{value:O,children:(0,w.jsx)(I,(0,i.Z)({ownerState:D,className:(0,o.Z)(P.root,c),as:g,ref:t},R))})});var C=S},3230:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(7462),i=n(3366),s=n(1387),o=n(9766),a=n(6500),l=n(4920),u=n(6523),c=n(1796),h={black:"#000",white:"#fff"},d={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let b=["mode","contrastThreshold","tonalOffset"],w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:h.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},E={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T(e,t,n,r){let i=r.light||r,s=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,c.$n)(e.main,i):"dark"===t&&(e.dark=(0,c._j)(e.main,s)))}let _=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],I={textTransform:"uppercase"},k='"Roboto", "Helvetica", "Arial", sans-serif';function S(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let C=["none",S(0,2,1,-1,0,1,1,0,0,1,3,0),S(0,3,1,-2,0,2,2,0,0,1,5,0),S(0,3,3,-2,0,3,4,0,0,1,8,0),S(0,2,4,-1,0,4,5,0,0,1,10,0),S(0,3,5,-1,0,5,8,0,0,1,14,0),S(0,3,5,-1,0,6,10,0,0,1,18,0),S(0,4,5,-2,0,7,10,1,0,2,16,1),S(0,5,5,-3,0,8,10,1,0,3,14,2),S(0,5,6,-3,0,9,12,1,0,3,16,2),S(0,6,6,-3,0,10,14,1,0,4,18,3),S(0,6,7,-4,0,11,15,1,0,4,20,3),S(0,7,8,-4,0,12,17,2,0,5,22,4),S(0,7,8,-4,0,13,19,2,0,5,24,4),S(0,7,9,-4,0,14,21,2,0,5,26,4),S(0,8,9,-5,0,15,22,2,0,6,28,5),S(0,8,10,-5,0,16,24,2,0,6,30,5),S(0,8,11,-5,0,17,26,2,0,6,32,5),S(0,9,11,-5,0,18,28,2,0,7,34,6),S(0,9,12,-6,0,19,29,2,0,7,36,6),S(0,10,13,-6,0,20,31,3,0,8,38,7),S(0,10,13,-6,0,21,33,3,0,8,40,7),S(0,10,14,-6,0,22,35,3,0,8,42,7),S(0,11,14,-7,0,23,36,3,0,9,44,8),S(0,11,15,-7,0,24,38,3,0,9,46,8)],A=["duration","easing","delay"],x={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},O={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function N(e){return`${Math.round(e)}ms`}function R(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}var D={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let P=["breakpoints","mixins","spacing","palette","transitions","typography","shape"],M=function(e={}){var t;let{mixins:n={},palette:S={},transitions:M={},typography:L={}}=e,V=(0,i.Z)(e,P);if(e.vars)throw Error((0,s.Z)(18));let U=function(e){let{mode:t="light",contrastThreshold:n=3,tonalOffset:a=.2}=e,l=(0,i.Z)(e,b),u=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),_=e.secondary||function(e="light"){return"dark"===e?{main:f[200],light:f[50],dark:f[400]}:{main:f[500],light:f[300],dark:f[700]}}(t),I=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),k=e.info||function(e="light"){return"dark"===e?{main:y[400],light:y[300],dark:y[700]}:{main:y[700],light:y[500],dark:y[900]}}(t),S=e.success||function(e="light"){return"dark"===e?{main:v[400],light:v[300],dark:v[700]}:{main:v[800],light:v[500],dark:v[900]}}(t),C=e.warning||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:"#ed6c02",light:m[500],dark:m[900]}}(t);function A(e){let t=(0,c.mi)(e,E.text.primary)>=n?E.text.primary:w.text.primary;return t}let x=({color:e,name:t,mainShade:n=500,lightShade:i=300,darkShade:o=700})=>{if(!(e=(0,r.Z)({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw Error((0,s.Z)(11,t?` (${t})`:"",n));if("string"!=typeof e.main)throw Error((0,s.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return T(e,"light",i,a),T(e,"dark",o,a),e.contrastText||(e.contrastText=A(e.main)),e},O=(0,o.Z)((0,r.Z)({common:(0,r.Z)({},h),mode:t,primary:x({color:u,name:"primary"}),secondary:x({color:_,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:x({color:I,name:"error"}),warning:x({color:C,name:"warning"}),info:x({color:k,name:"info"}),success:x({color:S,name:"success"}),grey:d,contrastThreshold:n,getContrastText:A,augmentColor:x,tonalOffset:a},{dark:E,light:w}[t]),l);return O}(S),F=(0,a.Z)(e),j=(0,o.Z)(F,{mixins:(t=F.breakpoints,(0,r.Z)({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},n)),palette:U,shadows:C.slice(),typography:function(e,t){let n="function"==typeof t?t(e):t,{fontFamily:s=k,fontSize:a=14,fontWeightLight:l=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:h=700,htmlFontSize:d=16,allVariants:f,pxToRem:p}=n,m=(0,i.Z)(n,_),g=a/14,y=p||(e=>`${e/d*g}rem`),v=(e,t,n,i,o)=>(0,r.Z)({fontFamily:s,fontWeight:e,fontSize:y(t),lineHeight:n},s===k?{letterSpacing:`${Math.round(1e5*(i/t))/1e5}em`}:{},o,f),b={h1:v(l,96,1.167,-1.5),h2:v(l,60,1.2,-.5),h3:v(u,48,1.167,0),h4:v(u,34,1.235,.25),h5:v(u,24,1.334,0),h6:v(c,20,1.6,.15),subtitle1:v(u,16,1.75,.15),subtitle2:v(c,14,1.57,.1),body1:v(u,16,1.5,.15),body2:v(u,14,1.43,.15),button:v(c,14,1.75,.4,I),caption:v(u,12,1.66,.4),overline:v(u,12,2.66,1,I)};return(0,o.Z)((0,r.Z)({htmlFontSize:d,pxToRem:y,fontFamily:s,fontSize:a,fontWeightLight:l,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:h},b),m,{clone:!1})}(U,L),transitions:function(e){let t=(0,r.Z)({},x,e.easing),n=(0,r.Z)({},O,e.duration),s=(e=["all"],r={})=>{let{duration:s=n.standard,easing:o=t.easeInOut,delay:a=0}=r;return(0,i.Z)(r,A),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof s?s:N(s)} ${o} ${"string"==typeof a?a:N(a)}`).join(",")};return(0,r.Z)({getAutoHeightDuration:R,create:s},e,{easing:t,duration:n})}(M),zIndex:(0,r.Z)({},D)});return(j=[].reduce((e,t)=>(0,o.Z)(e,t),j=(0,o.Z)(j,V))).unstable_sxConfig=(0,r.Z)({},l.Z,null==V?void 0:V.unstable_sxConfig),j.unstable_sx=function(e){return(0,u.Z)({sx:e,theme:this})},j}();var L=M},948:function(e,t,n){"use strict";n.d(t,{Dz:function(){return o},FO:function(){return s}});var r=n(182),i=n(3230);let s=e=>(0,r.x9)(e)&&"classes"!==e,o=r.x9,a=(0,r.ZP)({defaultTheme:i.Z,rootShouldForwardProp:s});t.ZP=a},2734:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}}),n(7294);var r=n(1938),i=n(3230);function s(){let e=(0,r.Z)(i.Z);return e}},1657:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5149),i=n(3230);function s({props:e,name:t}){return(0,r.Z)({props:e,name:t,defaultTheme:i.Z})}},8216:function(e,t,n){"use strict";var r=n(8320);t.Z=r.Z},8169:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7462),i=n(7294),s=n(3366),o=n(6010),a=n(4780),l=n(8216),u=n(1657),c=n(948),h=n(1588),d=n(4867);function f(e){return(0,d.Z)("MuiSvgIcon",e)}(0,h.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(5893);let m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=e=>{let{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&`color${(0,l.Z)(t)}`,`fontSize${(0,l.Z)(n)}`]};return(0,a.Z)(i,f,r)},y=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,l.Z)(n.color)}`],t[`fontSize${(0,l.Z)(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,s,o,a,l,u,c,h,d,f,p,m,g,y,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)?void 0:null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(i=e.transitions)?void 0:null==(s=i.duration)?void 0:s.shorter}),fontSize:({inherit:"inherit",small:(null==(o=e.typography)?void 0:null==(a=o.pxToRem)?void 0:a.call(o,20))||"1.25rem",medium:(null==(l=e.typography)?void 0:null==(u=l.pxToRem)?void 0:u.call(l,24))||"1.5rem",large:(null==(c=e.typography)?void 0:null==(h=c.pxToRem)?void 0:h.call(c,35))||"2.1875rem"})[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)?void 0:null==(p=f[t.color])?void 0:p.main)?d:({action:null==(m=(e.vars||e).palette)?void 0:null==(g=m.action)?void 0:g.active,disabled:null==(y=(e.vars||e).palette)?void 0:null==(v=y.action)?void 0:v.disabled,inherit:void 0})[t.color]}}),v=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:a,color:l="inherit",component:c="svg",fontSize:h="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:v,viewBox:b="0 0 24 24"}=n,w=(0,s.Z)(n,m),E=(0,r.Z)({},n,{color:l,component:c,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:b}),T={};f||(T.viewBox=b);let _=g(E);return(0,p.jsxs)(y,(0,r.Z)({as:c,className:(0,o.Z)(_.root,a),focusable:"false",color:d,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},T,w,{ownerState:E,children:[i,v?(0,p.jsx)("title",{children:v}):null]}))});function b(e,t){function n(n,i){return(0,p.jsx)(v,(0,r.Z)({"data-testid":`${t}Icon`,ref:i},n,{children:e}))}return n.muiName=v.muiName,i.memo(i.forwardRef(n))}v.muiName="SvgIcon"},7144:function(e,t,n){"use strict";var r=n(7596);t.Z=r.Z},3875:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return i.Z},createChainedFunction:function(){return s},createSvgIcon:function(){return o.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return u.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return h.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return E},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m},unsupportedProp:function(){return g},useControlled:function(){return y.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return w.Z}});var r=n(7078),i=n(8216),s=n(6508).Z,o=n(8169),a=n(7144),l=function(e,t){return()=>null},u=n(1579),c=n(8038),h=n(5340);n(7462);var d=function(e,t){return()=>null},f=n(7960).Z,p=n(8974),m=n(7579).Z,g=function(e,t,n,r,i){return null},y=n(2627),v=n(2068),b=n(1705),w=n(8791);let E={configure:e=>{r.Z.configure(e)}}},1579:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),i=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8038:function(e,t,n){"use strict";var r=n(7094);t.Z=r.Z},5340:function(e,t,n){"use strict";var r=n(8290);t.Z=r.Z},2627:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),i=function({controlled:e,default:t,name:n,state:i="value"}){let{current:s}=r.useRef(void 0!==e),[o,a]=r.useState(t),l=r.useCallback(e=>{s||a(e)},[]);return[s?e:o,l]}},8974:function(e,t,n){"use strict";var r=n(6600);t.Z=r.Z},2068:function(e,t,n){"use strict";var r=n(3633);t.Z=r.Z},1705:function(e,t,n){"use strict";var r=n(67);t.Z=r.Z},8791:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return h}});var i=n(7294);let s=!0,o=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(s=!0)}function u(){s=!1}function c(){"hidden"===this.visibilityState&&o&&(s=!0)}var h=function(){let e=i.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",c,!0)}},[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return s||function(e){let{type:t,tagName:n}=e;return"INPUT"===n&&!!a[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(o=!0,window.clearTimeout(r),r=window.setTimeout(()=>{o=!1},100),t.current=!1,!0)},ref:e}}},9731:function(e,t,n){"use strict";n.d(t,{ZP:function(){return y},Co:function(){return v}});var r=n(7294),i=n(7462),s=n(5042),o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=(0,s.Z)(function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),l=n(2443),u=n(444),c=n(2324),h=n(7278),d=function(e){return"theme"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?a:d},p=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},m=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return(0,u.hC)(t,n,r),(0,h.L)(function(){return(0,u.My)(t,n,r)}),null},g=(function e(t,n){var s,o,a=t.__emotion_real===t,h=a&&t.__emotion_base||t;void 0!==n&&(s=n.label,o=n.target);var d=p(t,n,a),g=d||f(h),y=!g("as");return function(){var v=arguments,b=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==s&&b.push("label:"+s+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{b.push(v[0][0]);for(var w=v.length,E=1;E<w;E++)b.push(v[E],v[0][E])}var T=(0,l.w)(function(e,t,n){var i=y&&e.as||h,s="",a=[],p=e;if(null==e.theme){for(var v in p={},e)p[v]=e[v];p.theme=(0,r.useContext)(l.T)}"string"==typeof e.className?s=(0,u.fp)(t.registered,a,e.className):null!=e.className&&(s=e.className+" ");var w=(0,c.O)(b.concat(a),t.registered,p);s+=t.key+"-"+w.name,void 0!==o&&(s+=" "+o);var E=y&&void 0===d?f(i):g,T={};for(var _ in e)(!y||"as"!==_)&&E(_)&&(T[_]=e[_]);return T.className=s,T.ref=n,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(m,{cache:t,serialized:w,isStringTag:"string"==typeof i}),(0,r.createElement)(i,T))});return T.displayName=void 0!==s?s:"Styled("+("string"==typeof h?h:h.displayName||h.name||"Component")+")",T.defaultProps=t.defaultProps,T.__emotion_real=T,T.__emotion_base=h,T.__emotion_styles=b,T.__emotion_forwardProp=d,Object.defineProperty(T,"toString",{value:function(){return"."+o}}),T.withComponent=function(t,r){return e(t,(0,i.Z)({},n,r,{shouldForwardProp:p(T,r,!0)})).apply(void 0,b)},T}}).bind();/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function y(e,t){let n=g(e,t);return n}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){g[e]=g(e)});let v=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},5408:function(e,t,n){"use strict";n.d(t,{L7:function(){return a},P$:function(){return l},VO:function(){return r},W8:function(){return o},k9:function(){return s}});let r={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function s(e,t,n){let s=e.theme||{};if(Array.isArray(t)){let e=s.breakpoints||i;return t.reduce((r,i,s)=>(r[e.up(e.keys[s])]=n(t[s]),r),{})}if("object"==typeof t){let e=s.breakpoints||i;return Object.keys(t).reduce((i,s)=>{if(-1!==Object.keys(e.values||r).indexOf(s)){let r=e.up(s);i[r]=n(t[s],s)}else i[s]=t[s];return i},{})}let o=n(t);return o}function o(e={}){var t;let n=null==(t=e.keys)?void 0:t.reduce((t,n)=>{let r=e.up(n);return t[r]={},t},{});return n||{}}function a(e,t){return e.reduce((e,t)=>{let n=e[t],r=!n||0===Object.keys(n).length;return r&&delete e[t],e},t)}function l({values:e,breakpoints:t,base:n}){let r;let i=n||function(e,t){if("object"!=typeof e)return{};let n={},r=Object.keys(t);return Array.isArray(e)?r.forEach((t,r)=>{r<e.length&&(n[t]=!0)}):r.forEach(t=>{null!=e[t]&&(n[t]=!0)}),n}(e,t),s=Object.keys(i);return 0===s.length?e:s.reduce((t,n,i)=>(Array.isArray(e)?(t[n]=null!=e[i]?e[i]:e[r],r=i):"object"==typeof e?(t[n]=null!=e[n]?e[n]:e[r],r=n):t[n]=e,t),{})}},1796:function(e,t,n){"use strict";n.d(t,{$n:function(){return h},Fq:function(){return u},_4:function(){return d},_j:function(){return c},mi:function(){return l}});var r=n(1387);function i(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function s(e){let t;if(e.type)return e;if("#"===e.charAt(0))return s(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map(e=>e+e)),n?`rgb${4===n.length?"a":""}(${n.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let n=e.indexOf("("),i=e.substring(0,n);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,r.Z)(9,e));let o=e.substring(n+1,e.length-1);if("color"===i){if(t=(o=o.split(" ")).shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,r.Z)(10,t))}else o=o.split(",");return{type:i,values:o=o.map(e=>parseFloat(e)),colorSpace:t}}function o(e){let{type:t,colorSpace:n}=e,{values:r}=e;return -1!==t.indexOf("rgb")?r=r.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),`${t}(${r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`})`}function a(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(function(e){e=s(e);let{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,a=r*Math.min(i,1-i),l=(e,t=(e+n/30)%12)=>i-a*Math.max(Math.min(t-3,9-t,1),-1),u="rgb",c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),o({type:u,values:c})}(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){let n=a(e),r=a(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function u(e,t){return e=s(e),t=i(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,o(e)}function c(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return o(e)}function h(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return o(e)}function d(e,t=.15){return a(e)>.5?c(e,t):h(e,t)}},182:function(e,t,n){"use strict";n.d(t,{ZP:function(){return E},x9:function(){return b}});var r=n(3366),i=n(7462),s=n(9731),o=n(6500),a=n(8320);let l=["variant"];function u(e){return 0===e.length}function c(e){let{variant:t}=e,n=(0,r.Z)(e,l),i=t||"";return Object.keys(n).sort().forEach(t=>{"color"===t?i+=u(i)?e[t]:(0,a.Z)(e[t]):i+=`${u(i)?t:(0,a.Z)(t)}${(0,a.Z)(e[t].toString())}`}),i}var h=n(6523);let d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],f=["theme"],p=["theme"];function m(e){return 0===Object.keys(e).length}let g=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,y=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);let r={};return n.forEach(e=>{let t=c(e.props);r[t]=e.style}),r},v=(e,t,n,r)=>{var i,s;let{ownerState:o={}}=e,a=[],l=null==n?void 0:null==(i=n.components)?void 0:null==(s=i[r])?void 0:s.variants;return l&&l.forEach(n=>{let r=!0;Object.keys(n.props).forEach(t=>{o[t]!==n.props[t]&&e[t]!==n.props[t]&&(r=!1)}),r&&a.push(t[c(n.props)])}),a};function b(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let w=(0,o.Z)();function E(e={}){let{defaultTheme:t=w,rootShouldForwardProp:n=b,slotShouldForwardProp:o=b}=e,a=e=>{let n=m(e.theme)?t:e.theme;return(0,h.Z)((0,i.Z)({},e,{theme:n}))};return a.__mui_systemSx=!0,(e,l={})=>{let u;(0,s.Co)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:c,slot:h,skipVariantsResolver:w,skipSx:E,overridesResolver:T}=l,_=(0,r.Z)(l,d),I=void 0!==w?w:h&&"Root"!==h||!1,k=E||!1,S=b;"Root"===h?S=n:h?S=o:"string"==typeof e&&e.charCodeAt(0)>96&&(S=void 0);let C=(0,s.ZP)(e,(0,i.Z)({shouldForwardProp:S,label:u},_)),A=(e,...n)=>{let s=n?n.map(e=>"function"==typeof e&&e.__emotion_real!==e?n=>{let{theme:s}=n,o=(0,r.Z)(n,f);return e((0,i.Z)({theme:m(s)?t:s},o))}:e):[],o=e;c&&T&&s.push(e=>{let n=m(e.theme)?t:e.theme,r=g(c,n);if(r){let t={};return Object.entries(r).forEach(([r,s])=>{t[r]="function"==typeof s?s((0,i.Z)({},e,{theme:n})):s}),T(e,t)}return null}),c&&!I&&s.push(e=>{let n=m(e.theme)?t:e.theme;return v(e,y(c,n),n,c)}),k||s.push(a);let l=s.length-n.length;if(Array.isArray(e)&&l>0){let t=Array(l).fill("");(o=[...e,...t]).raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(o=n=>{let{theme:s}=n,o=(0,r.Z)(n,p);return e((0,i.Z)({theme:m(s)?t:s},o))});let u=C(o,...s);return u};return C.withConfig&&(A.withConfig=C.withConfig),A}}},6500:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7462),i=n(3366),s=n(9766);let o=["values","unit","step"],a=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,r.Z)({},e,{[t.key]:t.val}),{})};var l={borderRadius:4},u=n(8700),c=n(6523),h=n(4920);let d=["breakpoints","palette","spacing","shape"];var f=function(e={},...t){let{breakpoints:n={},palette:f={},spacing:p,shape:m={}}=e,g=(0,i.Z)(e,d),y=function(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:s=5}=e,l=(0,i.Z)(e,o),u=a(t),c=Object.keys(u);function h(e){let r="number"==typeof t[e]?t[e]:e;return`@media (min-width:${r}${n})`}function d(e){let r="number"==typeof t[e]?t[e]:e;return`@media (max-width:${r-s/100}${n})`}function f(e,r){let i=c.indexOf(r);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==i&&"number"==typeof t[c[i]]?t[c[i]]:r)-s/100}${n})`}return(0,r.Z)({keys:c,values:u,up:h,down:d,between:f,only:function(e){return c.indexOf(e)+1<c.length?f(e,c[c.indexOf(e)+1]):h(e)},not:function(e){let t=c.indexOf(e);return 0===t?h(c[1]):t===c.length-1?d(c[t]):f(e,c[c.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},l)}(n),v=function(e=8){if(e.mui)return e;let t=(0,u.hB)({spacing:e}),n=(...e)=>{let n=0===e.length?[1]:e;return n.map(e=>{let n=t(e);return"number"==typeof n?`${n}px`:n}).join(" ")};return n.mui=!0,n}(p),b=(0,s.Z)({breakpoints:y,direction:"ltr",components:{},palette:(0,r.Z)({mode:"light"},f),spacing:v,shape:(0,r.Z)({},l,m)},g);return(b=t.reduce((e,t)=>(0,s.Z)(e,t),b)).unstable_sxConfig=(0,r.Z)({},h.Z,null==g?void 0:g.unstable_sxConfig),b.unstable_sx=function(e){return(0,c.Z)({sx:e,theme:this})},b}},7730:function(e,t,n){"use strict";var r=n(9766);t.Z=function(e,t){return t?(0,r.Z)(e,t,{clone:!1}):e}},8700:function(e,t,n){"use strict";n.d(t,{hB:function(){return p},eI:function(){return f},NA:function(){return m},e6:function(){return y},o3:function(){return v}});var r=n(5408),i=n(4844),s=n(7730);let o={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){let t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}let[t,n]=e.split(""),r=o[t],i=a[n]||"";return Array.isArray(i)?i.map(e=>r+e):[r+i]}),c=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],h=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...c,...h];function f(e,t,n,r){var s;let o=null!=(s=(0,i.DW)(e,t,!1))?s:n;return"number"==typeof o?e=>"string"==typeof e?e:o*e:Array.isArray(o)?e=>"string"==typeof e?e:o[e]:"function"==typeof o?o:()=>void 0}function p(e){return f(e,"spacing",8,"spacing")}function m(e,t){if("string"==typeof t||null==t)return t;let n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:`-${n}`}function g(e,t){let n=p(e.theme);return Object.keys(e).map(i=>(function(e,t,n,i){if(-1===t.indexOf(n))return null;let s=u(n),o=e=>s.reduce((t,n)=>(t[n]=m(i,e),t),{}),a=e[n];return(0,r.k9)(e,a,o)})(e,t,i,n)).reduce(s.Z,{})}function y(e){return g(e,c)}function v(e){return g(e,h)}function b(e){return g(e,d)}y.propTypes={},y.filterProps=c,v.propTypes={},v.filterProps=h,b.propTypes={},b.filterProps=d},4844:function(e,t,n){"use strict";n.d(t,{DW:function(){return s},Jq:function(){return o}});var r=n(8320),i=n(5408);function s(e,t,n=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&n){let n=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function o(e,t,n,r=n){let i;return i="function"==typeof e?e(n):Array.isArray(e)?e[n]||r:s(e,n)||r,t&&(i=t(i,r,e)),i}t.ZP=function(e){let{prop:t,cssProperty:n=e.prop,themeKey:a,transform:l}=e,u=e=>{if(null==e[t])return null;let u=e[t],c=e.theme,h=s(c,a)||{},d=e=>{let i=o(h,l,e);return(e===i&&"string"==typeof e&&(i=o(h,l,`${t}${"default"===e?"":(0,r.Z)(e)}`,e)),!1===n)?i:{[n]:i}};return(0,i.k9)(e,u,d)};return u.propTypes={},u.filterProps=[t],u}},4920:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(8700),i=n(4844),s=n(7730),o=function(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>Object.keys(e).reduce((n,r)=>t[r]?(0,s.Z)(n,t[r](e)):n,{});return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n},a=n(5408);function l(e){return"number"!=typeof e?e:`${e}px solid`}let u=(0,i.ZP)({prop:"border",themeKey:"borders",transform:l}),c=(0,i.ZP)({prop:"borderTop",themeKey:"borders",transform:l}),h=(0,i.ZP)({prop:"borderRight",themeKey:"borders",transform:l}),d=(0,i.ZP)({prop:"borderBottom",themeKey:"borders",transform:l}),f=(0,i.ZP)({prop:"borderLeft",themeKey:"borders",transform:l}),p=(0,i.ZP)({prop:"borderColor",themeKey:"palette"}),m=(0,i.ZP)({prop:"borderTopColor",themeKey:"palette"}),g=(0,i.ZP)({prop:"borderRightColor",themeKey:"palette"}),y=(0,i.ZP)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,i.ZP)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){let t=(0,r.eI)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r.NA)(t,e)});return(0,a.k9)(e,e.borderRadius,n)}return null};b.propTypes={},b.filterProps=["borderRadius"],o(u,c,h,d,f,p,m,g,y,v,b);let w=e=>{if(void 0!==e.gap&&null!==e.gap){let t=(0,r.eI)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.gap,n)}return null};w.propTypes={},w.filterProps=["gap"];let E=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){let t=(0,r.eI)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.columnGap,n)}return null};E.propTypes={},E.filterProps=["columnGap"];let T=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){let t=(0,r.eI)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r.NA)(t,e)});return(0,a.k9)(e,e.rowGap,n)}return null};T.propTypes={},T.filterProps=["rowGap"];let _=(0,i.ZP)({prop:"gridColumn"}),I=(0,i.ZP)({prop:"gridRow"}),k=(0,i.ZP)({prop:"gridAutoFlow"}),S=(0,i.ZP)({prop:"gridAutoColumns"}),C=(0,i.ZP)({prop:"gridAutoRows"}),A=(0,i.ZP)({prop:"gridTemplateColumns"}),x=(0,i.ZP)({prop:"gridTemplateRows"}),O=(0,i.ZP)({prop:"gridTemplateAreas"}),N=(0,i.ZP)({prop:"gridArea"});function R(e,t){return"grey"===t?t:e}o(w,E,T,_,I,k,S,C,A,x,O,N);let D=(0,i.ZP)({prop:"color",themeKey:"palette",transform:R}),P=(0,i.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:R}),M=(0,i.ZP)({prop:"backgroundColor",themeKey:"palette",transform:R});function L(e){return e<=1&&0!==e?`${100*e}%`:e}o(D,P,M);let V=(0,i.ZP)({prop:"width",transform:L}),U=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){let t=t=>{var n,r,i;let s=(null==(n=e.theme)?void 0:null==(r=n.breakpoints)?void 0:null==(i=r.values)?void 0:i[t])||a.VO[t];return{maxWidth:s||L(t)}};return(0,a.k9)(e,e.maxWidth,t)}return null};U.filterProps=["maxWidth"];let F=(0,i.ZP)({prop:"minWidth",transform:L}),j=(0,i.ZP)({prop:"height",transform:L}),$=(0,i.ZP)({prop:"maxHeight",transform:L}),z=(0,i.ZP)({prop:"minHeight",transform:L});(0,i.ZP)({prop:"size",cssProperty:"width",transform:L}),(0,i.ZP)({prop:"size",cssProperty:"height",transform:L});let B=(0,i.ZP)({prop:"boxSizing"});o(V,U,F,j,$,z,B);let q={border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:b},color:{themeKey:"palette",transform:R},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:R},backgroundColor:{themeKey:"palette",transform:R},p:{style:r.o3},pt:{style:r.o3},pr:{style:r.o3},pb:{style:r.o3},pl:{style:r.o3},px:{style:r.o3},py:{style:r.o3},padding:{style:r.o3},paddingTop:{style:r.o3},paddingRight:{style:r.o3},paddingBottom:{style:r.o3},paddingLeft:{style:r.o3},paddingX:{style:r.o3},paddingY:{style:r.o3},paddingInline:{style:r.o3},paddingInlineStart:{style:r.o3},paddingInlineEnd:{style:r.o3},paddingBlock:{style:r.o3},paddingBlockStart:{style:r.o3},paddingBlockEnd:{style:r.o3},m:{style:r.e6},mt:{style:r.e6},mr:{style:r.e6},mb:{style:r.e6},ml:{style:r.e6},mx:{style:r.e6},my:{style:r.e6},margin:{style:r.e6},marginTop:{style:r.e6},marginRight:{style:r.e6},marginBottom:{style:r.e6},marginLeft:{style:r.e6},marginX:{style:r.e6},marginY:{style:r.e6},marginInline:{style:r.e6},marginInlineStart:{style:r.e6},marginInlineEnd:{style:r.e6},marginBlock:{style:r.e6},marginBlockStart:{style:r.e6},marginBlockEnd:{style:r.e6},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:w},rowGap:{style:T},columnGap:{style:E},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:L},maxWidth:{style:U},minWidth:{transform:L},height:{transform:L},maxHeight:{transform:L},minHeight:{transform:L},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var Z=q},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),i=n(3366),s=n(9766),o=n(4920);let a=["sx"],l=e=>{var t,n;let r={systemProps:{},otherProps:{}},i=null!=(t=null==e?void 0:null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.Z;return Object.keys(e).forEach(t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function u(e){let t;let{sx:n}=e,o=(0,i.Z)(e,a),{systemProps:u,otherProps:c}=l(o);return t=Array.isArray(n)?[u,...n]:"function"==typeof n?(...e)=>{let t=n(...e);return(0,s.P)(t)?(0,r.Z)({},u,t):u}:(0,r.Z)({},u,n),(0,r.Z)({},c,{sx:t})}},6523:function(e,t,n){"use strict";var r=n(8320),i=n(7730),s=n(4844),o=n(5408),a=n(4920);let l=function(){function e(e,t,n,i){let a={[e]:t,theme:n},l=i[e];if(!l)return{[e]:t};let{cssProperty:u=e,themeKey:c,transform:h,style:d}=l;if(null==t)return null;let f=(0,s.DW)(n,c)||{};if(d)return d(a);let p=t=>{let n=(0,s.Jq)(f,h,t);return(t===n&&"string"==typeof t&&(n=(0,s.Jq)(f,h,`${e}${"default"===t?"":(0,r.Z)(t)}`,t)),!1===u)?n:{[u]:n}};return(0,o.k9)(a,t,p)}return function t(n){var r;let{sx:s,theme:l={}}=n||{};if(!s)return null;let u=null!=(r=l.unstable_sxConfig)?r:a.Z;function c(n){let r=n;if("function"==typeof n)r=n(l);else if("object"!=typeof n)return n;if(!r)return null;let s=(0,o.W8)(l.breakpoints),a=Object.keys(s),c=s;return Object.keys(r).forEach(n=>{var s;let a="function"==typeof(s=r[n])?s(l):s;if(null!=a){if("object"==typeof a){if(u[n])c=(0,i.Z)(c,e(n,a,l,u));else{let e=(0,o.k9)({theme:l},a,e=>({[n]:e}));(function(...e){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),n=new Set(t);return e.every(e=>n.size===Object.keys(e).length)})(e,a)?c[n]=t({sx:a,theme:l}):c=(0,i.Z)(c,e)}}else c=(0,i.Z)(c,e(n,a,l,u))}}),(0,o.L7)(a,c)}return Array.isArray(s)?s.map(c):c(s)}}();l.filterProps=["sx"],t.Z=l},1938:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(6500),i=n(7294);let s=i.createContext(null);var o=function(e=null){let t=function(){let e=i.useContext(s);return e}();return t&&0!==Object.keys(t).length?t:e};let a=(0,r.Z)();var l=function(e=a){return o(e)}},5149:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7925),i=n(1938);function s({props:e,name:t,defaultTheme:n}){let s=(0,i.Z)(n),o=function(e){let{theme:t,name:n,props:i}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,i):i}({theme:s,name:t,props:e});return o}},7078:function(e,t){"use strict";let n;let r=e=>e,i=(n=r,{configure(e){n=e},generate:e=>n(e),reset(){n=r}});t.Z=i},8320:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1387);function i(e){if("string"!=typeof e)throw Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},4780:function(e,t,n){"use strict";function r(e,t,n){let r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((e,r)=>(r&&(e.push(t(r)),n&&n[r]&&e.push(n[r])),e),[]).join(" ")}),r}n.d(t,{Z:function(){return r}})},6508:function(e,t,n){"use strict";function r(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}n.d(t,{Z:function(){return r}})},7596:function(e,t,n){"use strict";function r(e,t=166){let n;function r(...i){let s=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}n.d(t,{Z:function(){return r}})},9766:function(e,t,n){"use strict";n.d(t,{P:function(){return i},Z:function(){return function e(t,n,s={clone:!0}){let o=s.clone?(0,r.Z)({},t):t;return i(t)&&i(n)&&Object.keys(n).forEach(r=>{"__proto__"!==r&&(i(n[r])&&r in t&&i(t[r])?o[r]=e(t[r],n[r],s):s.clone?o[r]=i(n[r])?function e(t){if(!i(t))return t;let n={};return Object.keys(t).forEach(r=>{n[r]=e(t[r])}),n}(n[r]):n[r]:o[r]=n[r])}),o}}});var r=n(7462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}},1387:function(e,t,n){"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{Z:function(){return r}})},4867:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7078);let i={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function s(e,t,n="Mui"){let s=i[t];return s?`${n}-${s}`:`${r.Z.generate(e)}-${t}`}},1588:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4867);function i(e,t,n="Mui"){let i={};return t.forEach(t=>{i[t]=(0,r.Z)(e,t,n)}),i}},7094:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},8290:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7094);function i(e){let t=(0,r.Z)(e);return t.defaultView||window}},7925:function(e,t,n){"use strict";n.d(t,{Z:function(){return function e(t,n){let i=(0,r.Z)({},n);return Object.keys(t).forEach(s=>{if(s.toString().match(/^(components|slots)$/))i[s]=(0,r.Z)({},t[s],i[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){let o=t[s]||{},a=n[s];i[s]={},a&&Object.keys(a)?o&&Object.keys(o)?(i[s]=(0,r.Z)({},a),Object.keys(o).forEach(t=>{i[s][t]=e(o[t],a[t])})):i[s]=a:i[s]=o}else void 0===i[s]&&(i[s]=t[s])}),i}}});var r=n(7462)},7960:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},6600:function(e,t,n){"use strict";var r=n(7294);let i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=i},3633:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(6600);function s(e){let t=r.useRef(e);return(0,i.Z)(()=>{t.current=e}),r.useCallback((...e)=>(0,t.current)(...e),[])}},67:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(7960);function s(...e){return r.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,i.Z)(e,t)})},e)}},7579:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r,i=n(7294);let s=0,o=(r||(r=n.t(i,2))).useId;function a(e){if(void 0!==o){let t=o();return null!=e?e:t}return function(e){let[t,n]=i.useState(e);return i.useEffect(()=>{null==t&&n(`mui-${s+=1}`)},[t]),e||t}(e)}},6010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r}},6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=e.split(";"),s=(t||{}).decode||n,o=0;o<i.length;o++){var a=i[o],l=a.indexOf("=");if(!(l<0)){var u=a.substring(0,l).trim();if(void 0==r[u]){var c=a.substring(l+1,a.length).trim();'"'===c[0]&&(c=c.slice(1,-1)),r[u]=function(e,t){try{return t(e)}catch(t){return e}}(c,s)}}}return r},t.serialize=function(e,t,n){var s=n||{},o=s.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var a=o(t);if(a&&!i.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=s.maxAge){var u=s.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(s.domain){if(!i.test(s.domain))throw TypeError("option domain is invalid");l+="; Domain="+s.domain}if(s.path){if(!i.test(s.path))throw TypeError("option path is invalid");l+="; Path="+s.path}if(s.expires){if("function"!=typeof s.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(l+="; HttpOnly"),s.secure&&(l+="; Secure"),s.sameSite)switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var n=decodeURIComponent,r=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},8679:function(e,t,n){"use strict";var r=n(1296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?o:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var o=c(n);h&&(o=o.concat(h(n)));for(var a=l(t),m=l(n),g=0;g<o.length;++g){var y=o[g];if(!s[y]&&!(r&&r[y])&&!(m&&m[y])&&!(a&&a[y])){var v=d(n,y);try{u(t,y,v)}catch(e){}}}}return t}},6103:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case h:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case l:return e;default:return t}}case i:return t}}}function T(e){return E(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return T(e)||E(e)===c},t.isConcurrentMode=T,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===s},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===a},t.isStrictMode=function(e){return E(e)===o},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=E},1296:function(e,t,n){"use strict";e.exports=n(6103)},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6004)}])},1436:function(e,t,n){"use strict";n.d(t,{H:function(){return p},a:function(){return m}});var r=n(5893),i=n(7294),s=n(6502);n(4444);var o=n(6886),a=n(733),l=n.n(a);let u=e=>{let{type:t,color:n}=e;return(0,r.jsx)(o.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:(0,r.jsx)(l(),{type:t,color:n,height:"20%",width:"20%"})})};var c=n(9271),h=n(2286),d=n.n(h);let f=(0,i.createContext)({}),p=function(){let{children:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,i.useState)(null),[o,a]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=(0,s.v0)();return e.onIdTokenChanged(async e=>{if(e){let t=await e.getIdToken();n(e),a(null),d().set(void 0,"token",t,{}),console.log("User: ",e)}else{console.log("no user"),n(null),a(null),d().set(void 0,"",token,{});return}})},[]),o)?(0,r.jsx)(u,{type:"bubbles",color:"yellowgreen"}):t?(0,r.jsx)(f.Provider,{value:{currentUser:t},children:e}):(0,r.jsx)(c.Z,{})},m=()=>(0,i.useContext)(f)},9271:function(e,t,n){"use strict";var r=n(5893),i=n(6886),s=n(3321),o=n(9535),a=n(6502),l=n(1142);let u=e=>{let{type:t,color:n}=e,u=()=>{(0,a.F6)(l.I,l.A)};return(0,r.jsx)(i.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:(0,r.jsx)(s.Z,{variant:"contained",startIcon:(0,r.jsx)(o.Z,{}),onClick:u,children:"Sign in with Google"})})};t.Z=u},1142:function(e,t,n){"use strict";n.d(t,{I:function(){return o},db:function(){return a},A:function(){return l}});var r=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","9.17.2","app");var i=n(9828),s=n(6502);(0,r.ZF)({apiKey:"AIzaSyCoNPeN6ZE9hxglUpvYcPWdmBPvivNoce4",authDomain:"milkk-c3f45.firebaseapp.com",projectId:"milkk-c3f45",storageBucket:"milkk-c3f45.appspot.com",messagingSenderId:"76040819735",appId:"1:76040819735:web:2cbb9240ff8416b8aeb852"});let o=(0,s.v0)(),a=(0,i.ad)(),l=new s.hJ},6004:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(3814);var i=n(1436);t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(i.H,{children:(0,r.jsx)(t,{...n})})}},3814:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},2286:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var i=n(6489),s=n(9328),o=n(1022);function a(e,t){var n,r;return(null===(r=null===(n=null==e?void 0:e.req)||void 0===n?void 0:n.headers)||void 0===r?void 0:r.cookie)?i.parse(e.req.headers.cookie,t):o.isBrowser()?i.parse(document.cookie,t):{}}function l(e,t,n,a){var l,u;if(void 0===a&&(a={}),(null===(l=null==e?void 0:e.res)||void 0===l?void 0:l.getHeader)&&e.res.setHeader){if(null===(u=null==e?void 0:e.res)||void 0===u?void 0:u.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var c=e.res.getHeader("Set-Cookie")||[];"string"==typeof c&&(c=[c]),"number"==typeof c&&(c=[]);var h=s.parse(c,{decodeValues:!1}),d=o.createCookie(t,n,a),f=[];h.forEach(function(e){if(!o.areCookiesEqual(e,d)){var t=i.serialize(e.name,e.value,r({encode:function(e){return e}},e));f.push(t)}}),f.push(i.serialize(t,n,a)),e.res.setHeader("Set-Cookie",f)}if(o.isBrowser()){if(a&&a.httpOnly)throw Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(t,n,a)}return{}}function u(e,t,n){return l(e,t,"",r(r({},n||{}),{maxAge:-1}))}t.parseCookies=a,t.setCookie=l,t.destroyCookie=u,t.default={set:l,get:a,destroy:u}},1022:function(e,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function r(e,t){var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++){var s=n[i];if(e[s]!==t[s])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!=typeof window},t.createCookie=function(e,t,r){var i=r.sameSite;!0===i&&(i="strict"),(void 0===i||!1===i)&&(i="lax");var s=n(n({},r),{sameSite:i});return delete s.encode,n({name:e,value:t},s)},t.hasSameProperties=r,t.areCookiesEqual=function(e,t){var i=e.sameSite===t.sameSite;return"string"==typeof e.sameSite&&"string"==typeof t.sameSite&&(i=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),r(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&i}},733:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,i,s,o,a,l){if(r(t),!e){var u;if(void 0===t)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,i,s,o,a,l],h=0;(u=Error(t.replace(/%s/g,function(){return c[h++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var i={};if("abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},i)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,t){for(var n,o,a=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))i.call(n,u)&&(a[u]=n[u]);if(r){o=r(n);for(var c=0;c<o.length;c++)s.call(n,o[c])&&(a[o[c]]=n[o[c]])}}return a}:Object.assign},function(e,t,n){"use strict";var r=n(1);e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(8),o=u(s),a=u(n(11)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var e,n,r,i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={delayed:r.props.delay>0},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.delay;this.state.delayed&&(this.timeout=setTimeout(function(){e.setState({delayed:!1})},t))}},{key:"componentWillUnmount",value:function(){var e=this.timeout;e&&clearTimeout(e)}},{key:"render",value:function(){var e=this.props,t=e.color,n=(e.delay,e.type),i=e.height,s=e.width,a=function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","delay","type","height","width"]),u=l[this.state.delayed?"blank":n];return o.default.createElement("div",r({style:{fill:t,height:i,width:s},dangerouslySetInnerHTML:{__html:u}},a))}}]),t}(s.Component);h.propTypes={color:a.default.string,delay:a.default.number,type:a.default.string,height:a.default.oneOfType([a.default.string,a.default.number]),width:a.default.oneOfType([a.default.string,a.default.number])},h.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},t.default=h},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),i=n(0),s=n(5),o=n(1),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,h=a?Symbol.for("react.strict_mode"):60108,d=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.async_mode"):60111,m=a?Symbol.for("react.forward_ref"):60112,g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t=arguments.length-1,n="http://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);i(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function b(e,t,n){this.props=e,this.context=t,this.refs=s,this.updater=n||v}function w(){}function E(e,t,n){this.props=e,this.context=t,this.refs=s,this.updater=n||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&y("85"),this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var T=E.prototype=new w;T.constructor=E,r(T,b.prototype),T.isPureReactComponent=!0;var _={current:null},I=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r=void 0,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)I.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var A=/\/+/g,x=[];function O(e,t,n,r){if(x.length){var i=x.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function R(e,t,n,r){var i=typeof e;("undefined"===i||"boolean"===i)&&(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case l:case u:s=!0}}if(s)return n(r,e,""===t?"."+D(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var o=0;o<e.length;o++){var a=t+D(i=e[o],o);s+=R(i,a,n,r)}else if("function"==typeof(a=null==e?null:"function"==typeof(a=g&&e[g]||e["@@iterator"])?a:null))for(e=a.call(e),o=0;!(i=e.next()).done;)a=t+D(i=i.value,o++),s+=R(i,a,n,r);else"object"===i&&y("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return s}function D(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function P(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,i=e.keyPrefix;Array.isArray(e=e.func.call(e.context,t,e.count++))?L(e,r,n,o.thatReturnsArgument):null!=e&&(C(e)&&(t=i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function L(e,t,n,r,i){var s="";null!=n&&(s=(""+n).replace(A,"$&/")+"/"),t=O(t,s,r,i),null==e||R(e,"",M,t),N(t)}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=O(null,null,t,n),null==e||R(e,"",P,t),N(t)},count:function(e){return null==e?0:R(e,"",o.thatReturnsNull,null)},toArray:function(e){var t=[];return L(e,t,null,o.thatReturnsArgument),t},only:function(e){return C(e)||y("143"),e}},createRef:function(){return{current:null}},Component:b,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:c,StrictMode:h,unstable_AsyncMode:p,createElement:S,cloneElement:function(e,t,n){null==e&&y("267",e);var i=void 0,s=r({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,u=_.current),void 0!==t.key&&(o=""+t.key);var c=void 0;for(i in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)I.call(t,i)&&!k.hasOwnProperty(i)&&(s[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}if(i=arguments.length-2,1===i)s.children=n;else if(1<i){c=Array(i);for(var h=0;h<i;h++)c[h]=arguments[h+2];s.children=c}return{$$typeof:l,type:e.type,key:o,ref:a,props:s,_owner:u}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},U=Object.freeze({default:V}),F=U&&V||U;e.exports=F.default?F.default:F},function(e,t,n){},function(e,t,n){e.exports=n(13)()},function(e,t,n){"use strict";var r=n(1),i=n(0),s=n(3),o=n(2),a=n(4),l=n(6);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",c={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d(function(t,n,r,i,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var o=t[n];if(!Array.isArray(o)){var l=p(o);return new h("Invalid "+i+" `"+s+"` of type "+("`"+l)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<o.length;u++){var c=e(o,u,r,i,s+"["+u+"]",a);if(c instanceof Error)return c}return null})},element:d(function(t,n,r,i,s){var o=t[n];if(!e(o)){var a=p(o);return new h("Invalid "+i+" `"+s+"` of type "+("`"+a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}),instanceOf:function(e){return d(function(t,n,r,i,s){if(!(t[n]instanceof e)){var o,a=e.name||u,l=(o=t[n]).constructor&&o.constructor.name?o.constructor.name:u;return new h("Invalid "+i+" `"+s+"` of type "+("`"+l)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:d(function(t,r,i,s,o){return!function t(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(t);if(null===r||e(r))return!0;var i=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(r);if(!i)return!1;var s,o=i.call(r);if(i!==r.entries){for(;!(s=o.next()).done;)if(!t(s.value))return!1}else for(;!(s=o.next()).done;){var a=s.value;if(a&&!t(a[1]))return!1}return!0;default:return!1}}(t[r])?new h("Invalid "+s+" `"+o+"` supplied to `"+i+"`, expected a ReactNode."):null}),objectOf:function(e){return d(function(t,n,r,i,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var o=t[n],l=p(o);if("object"!==l)return new h("Invalid "+i+" `"+s+"` of type "+("`"+l)+"` supplied to `"+r+"`, expected an object.");for(var u in o)if(o.hasOwnProperty(u)){var c=e(o,u,r,i,s+"."+u,a);if(c instanceof Error)return c}return null})},oneOf:function(e){return Array.isArray(e)?d(function(t,n,r,i,s){for(var o,a=t[n],l=0;l<e.length;l++)if(a===(o=e[l])?0!==a||1/a==1/o:a!=a&&o!=o)return null;var u=JSON.stringify(e);return new h("Invalid "+i+" `"+s+"` of value `"+a+"` "+("supplied to `"+r)+"`, expected one of "+u+".")}):r.thatReturnsNull},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return s(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",function(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(n),t),r.thatReturnsNull}return d(function(t,n,r,i,s){for(var o=0;o<e.length;o++)if(null==(0,e[o])(t,n,r,i,s,a))return null;return new h("Invalid "+i+" `"+s+"` supplied to `"+r+"`.")})},shape:function(e){return d(function(t,n,r,i,s){var o=t[n],l=p(o);if("object"!==l)return new h("Invalid "+i+" `"+s+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var c=e[u];if(c){var d=c(o,u,r,i,s+"."+u,a);if(d)return d}}return null})},exact:function(e){return d(function(t,n,r,i,s){var l=t[n],u=p(l);if("object"!==u)return new h("Invalid "+i+" `"+s+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var c=o({},t[n],e);for(var d in c){var f=e[d];if(!f)return new h("Invalid "+i+" `"+s+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(l,d,r,i,s+"."+d,a);if(m)return m}return null})}};function h(e){this.message=e,this.stack=""}function d(e){function n(n,r,s,o,l,c,d){return(o=o||u,c=c||s,d!==a&&t&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),null!=r[s])?e(r,s,o,l,c):n?new h(null===r[s]?"The "+l+" `"+c+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+l+" `"+c+"` is marked as required in `"+o+"`, but its value is `undefined`."):null}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function f(e){return d(function(t,n,r,i,s,o){var a=t[n];if(p(a)!==e){var l=m(a);return new h("Invalid "+i+" `"+s+"` of type "+("`"+l)+"` supplied to `"+r+"`, expected `"+e+"`.")}return null})}function p(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||"Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol?"symbol":t}function m(e){if(null==e)return""+e;var t=p(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}return h.prototype=Error.prototype,c.checkPropTypes=l,c.PropTypes=c,c}},function(e,t,n){"use strict";var r=n(1),i=n(0),s=n(4);e.exports=function(){function e(e,t,n,r,o,a){a!==s&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);Object.defineProperty(t,"blank",{enumerable:!0,get:function(){return d(r).default}});var i=n(16);Object.defineProperty(t,"balls",{enumerable:!0,get:function(){return d(i).default}});var s=n(17);Object.defineProperty(t,"bars",{enumerable:!0,get:function(){return d(s).default}});var o=n(18);Object.defineProperty(t,"bubbles",{enumerable:!0,get:function(){return d(o).default}});var a=n(19);Object.defineProperty(t,"cubes",{enumerable:!0,get:function(){return d(a).default}});var l=n(20);Object.defineProperty(t,"cylon",{enumerable:!0,get:function(){return d(l).default}});var u=n(21);Object.defineProperty(t,"spin",{enumerable:!0,get:function(){return d(u).default}});var c=n(22);Object.defineProperty(t,"spinningBubbles",{enumerable:!0,get:function(){return d(c).default}});var h=n(23);function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"spokes",{enumerable:!0,get:function(){return d(h).default}})},function(e,t){e.exports='<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>\n'},function(e,t){e.exports='<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> \n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(8)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(14)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(20)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(26)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>\n  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">\n    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />\n  </path>\n</svg>\n'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n'},function(e,t){e.exports='<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>\n  </path>\n</svg>\n'}])},220:function(e,t,n){"use strict";var r=n(7294);t.Z=r.createContext(null)},9328:function(e){"use strict";var t={decodeValues:!0,map:!1,silent:!1};function n(e){return"string"==typeof e&&!!e.trim()}function r(e,r){var i,s,o,a,l=e.split(";").filter(n),u=(i=l.shift(),s="",o="",(a=i.split("=")).length>1?(s=a.shift(),o=a.join("=")):o=i,{name:s,value:o}),c=u.name,h=u.value;r=r?Object.assign({},t,r):t;try{h=r.decodeValues?decodeURIComponent(h):h}catch(e){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+h+"'. Set options.decodeValues to false to disable this feature.",e)}var d={name:c,value:h};return l.forEach(function(e){var t=e.split("="),n=t.shift().trimLeft().toLowerCase(),r=t.join("=");"expires"===n?d.expires=new Date(r):"max-age"===n?d.maxAge=parseInt(r,10):"secure"===n?d.secure=!0:"httponly"===n?d.httpOnly=!0:"samesite"===n?d.sameSite=r:d[n]=r}),d}function i(e,i){if(i=i?Object.assign({},t,i):t,!e)return i.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var s=e.headers[Object.keys(e.headers).find(function(e){return"set-cookie"===e.toLowerCase()})];s||!e.headers.cookie||i.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=s}return(Array.isArray(e)||(e=[e]),(i=i?Object.assign({},t,i):t).map)?e.filter(n).reduce(function(e,t){var n=r(t,i);return e[n.name]=n,e},{}):e.filter(n).map(function(e){return r(e,i)})}e.exports=i,e.exports.parse=i,e.exports.parseString=r,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!=typeof e)return[];var t,n,r,i,s,o=[],a=0;function l(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,s=!1;l();)if(","===(n=e.charAt(a))){for(r=a,a+=1,l(),i=a;a<e.length&&"="!==(n=e.charAt(a))&&";"!==n&&","!==n;)a+=1;a<e.length&&"="===e.charAt(a)?(s=!0,a=i,o.push(e.substring(t,r)),t=a):a=r+1}else a+=1;(!s||a>=e.length)&&o.push(e.substring(t,e.length))}return o}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},5068:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:function(){return i}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})},5816:function(e,t,n){"use strict";let r,i;n.d(t,{Jn:function(){return P},qX:function(){return N},Xd:function(){return O},Mq:function(){return L},ZF:function(){return M},KN:function(){return V}});var s,o=n(740),a=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(c.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),g(r)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return w.set(t,s),s}m={...s=m,get:(e,t,n)=>E(e,t)||s.get(e,t,n),has:(e,t)=>!!E(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let _="@firebase/app",I="0.9.4",k=new a.Yd("@firebase/app"),S="[DEFAULT]",C={[_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,x=new Map;function O(e){let t=e.name;if(x.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(x.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function N(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let R=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P="9.17.2";function M(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw R.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw R.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw R.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of x.values())a.addComponent(e);let u=new D(n,r,a);return A.set(i,u),u}function L(e=S){let t=A.get(e);if(!t&&e===S)return M();if(!t)throw R.create("no-app",{appName:e});return t}function V(e,t,n){var r;let i=null!==(r=C[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),k.warn(e.join(" "));return}O(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let U="firebase-heartbeat-store",F=null;function j(){return F||(F=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=g(o);return r&&o.addEventListener("upgradeneeded",e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(U)}}).catch(e=>{throw R.create("idb-open",{originalErrorMessage:e.message})})),F}async function $(e){try{let t=await j();return t.transaction(U).objectStore(U).get(B(e))}catch(e){if(e instanceof l.ZR)k.warn(e.message);else{let t=R.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}async function z(e,t){try{let n=await j(),r=n.transaction(U,"readwrite"),i=r.objectStore(U);return await i.put(t,B(e)),r.done}catch(e){if(e instanceof l.ZR)k.warn(e.message);else{let t=R.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}function B(e){return`${e.name}!${e.options.appId}`}class q{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Z();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Z(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),K(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),K(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Z(){let e=new Date;return e.toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await $(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function K(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}O(new o.wA("platform-logger",e=>new T(e),"PRIVATE")),O(new o.wA("heartbeat",e=>new q(e),"PRIVATE")),V(_,I,""),V(_,I,"esm2017"),V("fire-js","")},740:function(e,t,n){"use strict";n.d(t,{H0:function(){return a},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},6502:function(e,t,n){"use strict";n.d(t,{hJ:function(){return eM},v0:function(){return tW},F6:function(){return tb}});var r,i=n(4444),s=n(5816),o=n(3333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var l=n(740);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=new Map;function w(e){e instanceof Function||v("Expected a class definition");let t=b.get(e);return t?(t instanceof e||v("Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===T()||"https:"===T()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){e.emulator||v("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},C=new _(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,r,s={}){return O(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),k.fetch()(R(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function O(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},S),t);try{let t=new D(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw P(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw P(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw P(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw P(e,"user-disabled",s);let a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"internal-error",{message:String(t)})}}async function N(e,t,n,r,i={}){let s=await x(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?I(e.config,i):`${e.config.apiScheme}://${i}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function L(e,t){return x(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function U(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=j(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:V(F(s.auth_time)),issuedAtTime:V(F(s.iat)),expirationTime:V(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function F(e){return 1e3*Number(e)}function j(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(n);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;let n=e.auth,r=await e.getIdToken(),i=await $(e,L(n,{idToken:r}));y(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],l=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new B(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function Z(e){let t=(0,i.m9)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){let n=await O(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=R(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await H(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new K;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class W{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new B(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await $(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await $(this,M(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:E,providerData:T,stsTokenManager:_}=t;y(b&&_,e,"internal-error");let I=K.fromJSON(this.name,_);y("string"==typeof b,e,"internal-error"),G(c,e.name),G(h,e.name),y("boolean"==typeof w,e,"internal-error"),y("boolean"==typeof E,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(m,e.name),G(g,e.name),G(v,e.name);let k=new W({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return T&&Array.isArray(T)&&(k.providerData=T.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){let r=new K;r.updateFromServerResponse(t);let i=new W({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await q(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t,n){return`firebase:${e}:${t}:${n}`}Q.type="NONE";class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=X(this.userKey,r.apiKey,i),this.fullPersistenceKey=X("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(w(Q),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||w(Q),s=X(n,e.config.apiKey,e.name),o=null;for(let n of t)try{let t=await n._get(s);if(t){let r=W._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}let a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Y(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(er(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(eo(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=(0,i.z$)()){return/crios\//i.test(e)}function er(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function eo(e=(0,i.z$)()){return/webos/i.test(e)}function ea(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return ea(e)||ei(e)||eo(e)||es(e)||/windows phone/i.test(e)||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t=[]){let n;switch(e){case"Browser":n=J((0,i.z$)());break;case"Worker":n=`${J((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&w(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ed(e){return(0,i.m9)(e)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ep(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function em(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ey(e,t){return x(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function ew(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends eg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new eE(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new eE(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ev(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eb(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ey(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ew(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class e_ extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new e_(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new e_(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eT(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eT(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eT(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function ek(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eS(e,t){let n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw P(e,"account-exists-with-different-credential",n);return n}let eC={USER_NOT_FOUND:"user-not-found"};async function eA(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),eC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends eg{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ex({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ex({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ek(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eA(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ex({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eO{constructor(e){var t,n,r,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(n=l.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);y(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=r?(0,i.zd)((0,i.pd)(r)).link:null;return s||r||n||t||e}(e);try{return new eO(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.providerId=eN.PROVIDER_ID}static credential(e,t){return eE._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eO.parseLink(t);return y(n,"argument-error"),eE._fromEmailAndCode(e,n.code,n.tenantId)}}eN.PROVIDER_ID="password",eN.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eN.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends eR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends eD{constructor(){super("facebook.com")}static credential(e){return e_._fromParams({providerId:eP.PROVIDER_ID,signInMethod:eP.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eP.credentialFromTaggedObject(e)}static credentialFromError(e){return eP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eP.credential(e.oauthAccessToken)}catch(e){return null}}}eP.FACEBOOK_SIGN_IN_METHOD="facebook.com",eP.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM extends eD{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return e_._fromParams({providerId:eM.PROVIDER_ID,signInMethod:eM.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eM.credentialFromTaggedObject(e)}static credentialFromError(e){return eM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eM.credential(t,n)}catch(e){return null}}}eM.GOOGLE_SIGN_IN_METHOD="google.com",eM.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL extends eD{constructor(){super("github.com")}static credential(e){return e_._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eL.credential(e.oauthAccessToken)}catch(e){return null}}}eL.GITHUB_SIGN_IN_METHOD="github.com",eL.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV extends eD{constructor(){super("twitter.com")}static credential(e,t){return e_._fromParams({providerId:eV.PROVIDER_ID,signInMethod:eV.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eV.credentialFromTaggedObject(e)}static credentialFromError(e){return eV.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eV.credential(t,n)}catch(e){return null}}}eV.TWITTER_SIGN_IN_METHOD="twitter.com",eV.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await W._fromIdTokenResponse(e,n,r),s=eF(n),o=new eU({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=eF(n);return new eU({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function eF(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ej.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ej(e,t,n,r)}}function e$(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ej._fromErrorAndOperation(e,n,t,r);throw n})}async function ez(e,t,n=!1){let r=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eU._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eB(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await $(e,e$(r,i,t,e),n);y(s.idToken,r,"internal-error");let o=j(s.idToken);y(o,r,"internal-error");let{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),eU._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(r,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eq(e,t,n=!1){let r="signIn",i=await e$(e,r,t),s=await eU._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;let eZ="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eZ,"1"),this.storage.removeItem(eZ),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class eK extends eH{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return et(e)||ea(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eK.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends eH{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eG.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new eW(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eQ(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}eW.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=eQ("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eY(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eJ(){return void 0!==eY().WorkerGlobalScope&&"function"==typeof eY().importScripts}async function e0(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e1="firebaseLocalStorageDb",e2="firebaseLocalStorage",e4="fbase_key";class e3{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function e5(e,t){return e.transaction([e2],t?"readwrite":"readonly").objectStore(e2)}function e6(){let e=indexedDB.open(e1,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(e2,{keyPath:e4})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(e2)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(e1);return new e3(e).toPromise()}(),t(await e6()))})})}async function e8(e,t,n){let r=e5(e,!0).put({[e4]:t,value:n});return new e3(r).toPromise()}async function e7(e,t){let n=e5(e,!1).get(t),r=await new e3(n).toPromise();return void 0===r?null:r.value}function e9(e,t){let n=e5(e,!0).delete(t);return new e3(n).toPromise()}class te{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await e6()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eJ()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eW._getInstance(eJ()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await e0(),!this.activeServiceWorker)return;this.sender=new eX(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await e6();return await e8(e,eZ,"1"),await e9(e,eZ),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>e8(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>e7(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>e9(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=e5(e,!1).getAll();return new e3(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function tt(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function tn(e,t,n){var r,i,s;let o=await n.verify();try{let a;if(y("string"==typeof o,e,"argument-error"),y("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){y("enroll"===t.type,e,"internal-error");let n=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},x(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)));return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");let n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;y(n,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},x(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eI(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}te.type="LOCAL",tt("rcb"),new _(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.providerId=tr.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ex._fromVerification(e,t)}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ex._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t){return t?w(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tr.PROVIDER_ID="phone",tr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eT(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eT(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eT(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function to(e){return eq(e.auth,new ts(e),e.bypassAuthState)}function ta(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),eB(n,new ts(e),e.bypassAuthState)}async function tl(e){let{auth:t,user:n}=e;return y(n,t,"internal-error"),ez(n,new ts(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return to;case"linkViaPopup":case"linkViaRedirect":return tl;case"reauthViaPopup":case"reauthViaRedirect":return ta;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc=new _(2e3,1e4);class th extends tu{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,th.currentPopupAction&&th.currentPopupAction.cancel(),th.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=eQ();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,th.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tc.get())};e()}}th.currentPopupAction=null;let td=new Map;class tf extends tu{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=td.get(this.auth._key());if(!e){try{let t=await tp(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}td.set(this.auth._key(),e)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tp(e,t){let n=tv(t),r=ty(e);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function tm(e,t){return ty(e)._set(tv(t),"true")}function tg(e,t){td.set(e._key(),t)}function ty(e){return w(e._redirectPersistence)}function tv(e){return X("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e,t,n){return tw(e,t,n)}async function tw(e,t,n){let r=ed(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eR),await r._initializationPromise;let i=ti(r,n);return await tm(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function tE(e,t,n=!1){let r=ed(e),i=ti(r,t),s=new tf(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tI(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tI(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tI({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(e,t={}){return x(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tC=/^https?/;async function tA(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tk(e);for(let e of t)try{if(function(e){let t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tC.test(n))return!1;if(tS.test(e))return r===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tx=new _(3e4,6e4);function tO(){let e=eY().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tN=null,tR=new _(5e3,15e3),tD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tM(e){let t=await (tN=tN||new Promise((t,n)=>{var r,i,s,o;function a(){tO(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tO(),n(p(e,"network-request-failed"))},timeout:tx.get()})}if(null===(i=null===(r=eY().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=eY().gapi)||void 0===s?void 0:s.load)a();else{let t=tt("iframefcb");return eY()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${t}`,new Promise((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",o),i.onload=e,i.onerror=e=>{let n=p("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)})).catch(e=>n(e))}}).catch(e=>{throw tN=null,e})),n=eY().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;y(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=tP.get(e.config.apiHost);o&&(r.eid=o);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tD,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=eY().setTimeout(()=>{r(i)},tR.get());function o(){eY().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tV{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tU(e,t,n,r,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:o};if(t instanceof eR)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[n]=r;if(t instanceof eD){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);let u=l;for(let e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(u).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tF="webStorageSupport",tj=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eG,this._completeRedirectFn=tE,this._overrideRedirectResult=tg}async _openPopup(e,t,n,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||v("_initialize() not called before _openPopup()");let o=tU(e,t,n,E(),r);return function(e,t,n,r=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tL),{width:r.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();n&&(l=en(c)?"_blank":n),ee(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tV(null);let d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tV(d)}(e,o,eQ())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=tU(e,t,n,E(),r),eY().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||v("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await tM(e),n=new tT(e);return t.register("authEvent",t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tF,{type:tF},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tF];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||ea()}};class t${constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class tz extends t${constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tz(e)}_finalizeEnroll(e,t,n){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var tB="@firebase/auth",tq="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let tH=(0,i.Pz)("authIdTokenMaxAge")||300,tK=null,tG=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tH)return;let i=null==n?void 0:n.token;tK!==i&&(tK=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tW(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}let r=n.initialize({options:t});return r}(e,{popupRedirectResolver:tj,persistence:[te,eK,eG]}),r=(0,i.Pz)("authTokenSyncURL");if(r){var o,a;let e=tG(r);o=()=>e(n.currentUser),(0,i.m9)(n).beforeAuthStateChanged(e,o),a=t=>e(t),(0,i.m9)(n).onIdTokenChanged(a,void 0,void 0)}let l=(0,i.q4)("auth");return l&&function(e,t,n){let r=ed(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=!!(null==n?void 0:n.disableWarnings),s=ep(t),{host:o,port:a}=function(e){let t=ep(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:em(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:em(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${l}`),n}r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((e,n)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(r)},a=new eh(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=ed(e.getProvider("auth").getImmediate());return new tZ(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tB,tq,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(tB,tq,"esm2017")},9828:function(e,t,n){"use strict";n.d(t,{Bt:function(){return r.Bt},ET:function(){return r.ET},JU:function(){return r.JU},ad:function(){return r.ad},hJ:function(){return r.hJ},oe:function(){return r.oe},r7:function(){return r.r7}});var r=n(1294)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);