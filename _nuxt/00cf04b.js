(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{885:function(t,e,r){var content=r(892);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("d2a26496",content,!0,{sourceMap:!1})},886:function(t,e,r){"use strict";r(887),r(52);var n={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},o={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:function(t){return["horizontal","vertical","both","none"].includes(t)}},rotate:{type:Number,default:0}},computed:{styles:function(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults:function(){return n[this.type]||n.default},sizeValue:function(){return this.size||this.defaults.size},viewboxValue:function(){return this.viewbox||this.defaults.viewbox}}},l=(r(891),r(66)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{style:t.styles,attrs:{width:t.sizeValue,height:t.sizeValue,viewBox:t.viewboxValue}},[r("path",{attrs:{d:t.path}})])}),[],!1,null,"8dea8908",null);e.a=component.exports},887:function(t,e,r){"use strict";var n=r(23),o=r(8),l=r(91),c=r(30),f=r(20),d=r(67),v=r(153),h=r(90),m=r(223),x=r(9),N=r(58),y=r(76).f,w=r(46).f,I=r(25).f,_=r(889).trim,E="Number",S=o.Number,z=S.prototype,A=d(N(z))==E,k=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,l,c,f,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=_(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l(E,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var C,V=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof V&&(A?x((function(){z.valueOf.call(r)})):d(r)!=E)?v(new S(k(e)),r,V):k(e)},O=n?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;O.length>T;T++)f(S,C=O[T])&&!f(V,C)&&I(V,C,w(S,C));V.prototype=z,z.constructor=V,c(o,E,V)}},889:function(t,e,r){var n=r(32),o=r(21),l="["+r(890)+"]",c=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),d=function(t){return function(e){var r=o(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},890:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},891:function(t,e,r){"use strict";r(885)},892:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\nsvg[data-v-8dea8908]{\n  transform:rotate(0deg) scale(1,1);\n  transform:rotate(var(--r,0deg)) scale(var(--sx,1),var(--sy,1))\n}\npath[data-v-8dea8908]{\n  fill:currentColor\n}\n\n/*purgecss end ignore*/",""]),t.exports=n},903:function(t,e,r){"use strict";r.r(e);r(887),r(33),r(59);var n=r(886),o=r(89),l=Object(o.b)({components:{SvgIcon:n.a},props:{title:{type:String,default:""},value:{type:Number,default:0},color:{type:String,default:"gray"},path:{type:String,default:""}},setup:function(t){var title=Object(o.g)(t).title;return{inputName:Object(o.a)((function(){return title.value.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}))}}}),c=r(66),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"bg-"+t.color+"-100 dark:bg-"+t.color+"-400 rounded-2xl my-5 p-5 flex flex-col shadow"},[r("div",{staticClass:"flex"},[r("svg-icon",{class:"w-7 h-7 mr-3 p-1 bg-"+t.color+"-500 dark:bg-"+t.color+"-600 rounded-full text-white",attrs:{type:"mdi",path:t.path}}),t._v(" "),r("label",{staticClass:"font-extrabold text-xl mb-5 text-gray-800",attrs:{for:t.inputName}},[t._v(t._s(t.title)+"\n    ")])],1),t._v(" "),r("input",{class:"py-2 px-1 text-4xl font-bold border-b-4 border-"+t.color+"-300 dark:border-"+t.color+"-500 focus:outline-none bg-transparent rounded-none dark:placeholder-white dark:placeholder-opacity-70 text-gray-800",attrs:{id:t.inputName,type:"number",name:t.inputName,placeholder:"0"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",Number(e.target.value))}}})])}),[],!1,null,null,null);e.default=component.exports}}]);