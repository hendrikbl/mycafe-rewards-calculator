(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{885:function(e,t,r){var content=r(892);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("d2a26496",content,!0,{sourceMap:!1})},886:function(e,t,r){"use strict";r(887),r(52);var n={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},o={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:function(e){return["horizontal","vertical","both","none"].includes(e)}},rotate:{type:Number,default:0}},computed:{styles:function(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults:function(){return n[this.type]||n.default},sizeValue:function(){return this.size||this.defaults.size},viewboxValue:function(){return this.viewbox||this.defaults.viewbox}}},c=(r(891),r(66)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{style:e.styles,attrs:{width:e.sizeValue,height:e.sizeValue,viewBox:e.viewboxValue}},[r("path",{attrs:{d:e.path}})])}),[],!1,null,"8dea8908",null);t.a=component.exports},887:function(e,t,r){"use strict";var n=r(23),o=r(8),c=r(91),l=r(30),f=r(20),h=r(67),d=r(153),v=r(90),m=r(223),N=r(9),w=r(58),y=r(76).f,I=r(46).f,x=r(25).f,E=r(889).trim,_="Number",k=o.Number,S=k.prototype,z=h(w(S))==_,A=function(e){if(v(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,n,o,c,l,f,code,h=m(e,"number");if("string"==typeof h&&h.length>2)if(43===(t=(h=E(h)).charCodeAt(0))||45===t){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+h}for(l=(c=h.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+h};if(c(_,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var T,O=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof O&&(z?N((function(){S.valueOf.call(r)})):h(r)!=_)?d(new k(A(t)),r,O):A(t)},V=n?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;V.length>C;C++)f(k,T=V[C])&&!f(O,T)&&x(O,T,I(k,T));O.prototype=S,S.constructor=O,l(o,_,O)}},889:function(e,t,r){var n=r(32),o=r(21),c="["+r(890)+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),h=function(e){return function(t){var r=o(n(t));return 1&e&&(r=r.replace(l,"")),2&e&&(r=r.replace(f,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},890:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},891:function(e,t,r){"use strict";r(885)},892:function(e,t,r){var n=r(56)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\nsvg[data-v-8dea8908]{\n  transform:rotate(0deg) scale(1,1);\n  transform:rotate(var(--r,0deg)) scale(var(--sx,1),var(--sy,1))\n}\npath[data-v-8dea8908]{\n  fill:currentColor\n}\n\n/*purgecss end ignore*/",""]),e.exports=n},901:function(e,t,r){"use strict";r.r(t);var n=r(886),o=r(888),c=r(89),l=Object(c.b)({name:"ThemeToggle",components:{SvgIcon:n.a},setup:function(){var e=Object(c.h)().$colorMode,t=Object(c.e)({sun:o.n,moon:o.m,auto:o.j}),r=Object(c.a)((function(){switch(e.preference){case"light":return t.value.sun;case"dark":return t.value.moon;default:return t.value.auto}}));return{icons:t,themeIcon:r,toggleTheme:function(){switch(e.preference){case"light":e.preference="dark";break;case"dark":e.preference="system";break;case"system":e.preference="light";break;default:e.preference="system"}}}}}),f=r(66),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"focus:outline-none",attrs:{"aria-label":"Dark mode"},on:{click:e.toggleTheme}},[r("svg-icon",{staticClass:"w-10 h-10 p-2 dark:text-yellow-500",attrs:{type:"mdi",path:e.themeIcon}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);