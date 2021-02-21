(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{748:function(t,e,l){"use strict";l.r(e);l(742),l(22),l(49);var o={components:{SvgIcon:l(740).a},props:{title:{type:String,default:""},value:{type:Number,default:0},color:{type:String,default:"gray"},path:{type:String,default:""}},computed:{inputName:function(){return this.title.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}}},r=l(35),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:"bg-"+t.color+"-100 dark:bg-"+t.color+"-400 rounded-2xl my-5 p-5 flex flex-col"},[l("div",{staticClass:"flex"},[l("svg-icon",{class:"w-7 h-7 mr-3 p-1 bg-"+t.color+"-500 dark:bg-"+t.color+"-600 rounded-full text-white",attrs:{type:"mdi",path:t.path}}),t._v(" "),l("label",{staticClass:"font-extrabold text-xl mb-5 text-gray-800",attrs:{for:"trophies"}},[t._v(t._s(t.title)+"\n    ")])],1),t._v(" "),l("input",{class:"py-2 px-1 text-4xl font-bold border-b-4 border-"+t.color+"-300 dark:border-"+t.color+"-500 focus:outline-none bg-transparent rounded-none dark:placeholder-white dark:placeholder-opacity-70 text-gray-800",attrs:{id:t.inputName,type:"number",name:t.inputName,placeholder:"0"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",Number(e.target.value))}}})])}),[],!1,null,null,null);e.default=component.exports},749:function(t,e,l){"use strict";l.r(e);var o=l(740),r=l(741),n={components:{SvgIcon:o.a},props:{value:{type:Object,default:function(){return{id:0,name:"",trophies:0,diamonds:0,rubies:0}}}},data:function(){return{icons:{diamond:r.d,ruby:r.b,trophy:r.i}}},computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},c=l(35),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto gap-x-5 my-2 sm:my-5"},[l("div",{staticClass:"bg-gray-100 dark:bg-gray-400 rounded-full font-extrabold flex flex-row my-1 h-8"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue.name,expression:"localValue.name"}],staticClass:"font-extrabold text-gray-800 dark:placeholder-opacity-70 dark:placeholder-white focus:outline-none flex-none bg-transparent mx-2 flex-grow",attrs:{id:"p"+t.localValue.id+"-name",type:"text",name:"p"+t.localValue.id+"-name",placeholder:t.$t("Name")},domProps:{value:t.localValue.name},on:{input:function(e){e.target.composing||t.$set(t.localValue,"name",e.target.value)}}})]),t._v(" "),l("div",{staticClass:"bg-yellow-100 dark:bg-yellow-400 rounded-full font-extrabold text-gray-800 flex flex-row my-1"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-yellow-500 dark:bg-yellow-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.trophy}}),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue.trophies,expression:"localValue.trophies"}],staticClass:"font-extrabold text-gray-800 dark:placeholder-opacity-70 dark:placeholder-white focus:outline-none flex-none bg-transparent mx-2 flex-grow",attrs:{id:"p"+t.localValue.id+"-trophies",type:"number",name:"p"+t.localValue.id+"-trophies",placeholder:t.$t("Trophies")},domProps:{value:t.localValue.trophies},on:{input:function(e){e.target.composing||t.$set(t.localValue,"trophies",e.target.value)}}})],1),t._v(" "),l("div",{staticClass:"grid grid-cols-2 gap-x-2 my-1"},[l("div",{staticClass:"bg-blue-100 dark:bg-blue-400 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-blue-500 dark:bg-blue-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.diamond}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v("\n        "+t._s(t.localValue.diamonds)+"\n      ")])],1),t._v(" "),l("div",{staticClass:"bg-red-100 dark:bg-red-400 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-red-500 dark:bg-red-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.ruby}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v("\n        "+t._s(t.localValue.rubies)+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports},750:function(t,e,l){"use strict";l.r(e);var o={components:{SvgIcon:l(740).a},props:{text:{type:String,default:""},color:{type:String,default:"gray"},path:{type:String,default:""}}},r=l(35),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-1 my-2"},[l("div",{class:"bg-"+t.color+"-100 dark:bg-"+t.color+"-400 rounded-full font-extrabold text-gray-800 flex flex-row my-1"},[l("svg-icon",{class:"w-8 h-8 p-1.5 bg-"+t.color+"-500 dark:bg-"+t.color+"-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.path}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v(t._s(t.text))])],1)])}),[],!1,null,null,null);e.default=component.exports},751:function(t,e,l){"use strict";l.r(e);var o=l(740),r=l(741),n={components:{SvgIcon:o.a},props:{value:{type:Object,default:function(){return{diamonds:0,rubies:0}}}},data:function(){return{icons:{diamond:r.d,ruby:r.b,trove:r.h}}}},c=l(35),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto gap-x-5 my-2"},[l("div",{staticClass:"bg-green-100 dark:bg-green-400 rounded-full font-extrabold text-gray-800 flex flex-row my-1"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-green-500 dark:bg-green-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.trove}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v("\n      "+t._s(t.$t("Treasure_Trove"))+"\n    ")])],1),t._v(" "),l("div",{staticClass:"invisible"}),t._v(" "),l("div",{staticClass:"grid grid-cols-2 gap-x-2 my-1"},[l("div",{staticClass:"bg-blue-100 dark:bg-blue-400 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-blue-500 dark:bg-blue-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.diamond}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v("\n        "+t._s(t.value.diamonds)+"\n      ")])],1),t._v(" "),l("div",{staticClass:"bg-red-100 dark:bg-red-400 rounded-full font-extrabold text-gray-800 flex flex-row flex-initial w-100"},[l("svg-icon",{staticClass:"w-8 h-8 p-1.5 bg-red-500 dark:bg-red-600 rounded-full flex-none text-white",attrs:{type:"mdi",path:t.icons.ruby}}),t._v(" "),l("div",{staticClass:"mx-2 leading-8 whitespace-nowrap flex-1"},[t._v("\n        "+t._s(t.value.rubies)+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports},752:function(t,e,l){"use strict";l.r(e);var o=l(740),r=l(741),n={name:"ThemeToggle",components:{SvgIcon:o.a},data:function(){return{icons:{sun:r.k,moon:r.j,auto:r.g}}},computed:{themeIcon:function(){switch(this.$colorMode.preference){case"light":return this.icons.sun;case"dark":return this.icons.moon;default:return this.icons.auto}}},methods:{toggleTheme:function(){switch(this.$colorMode.preference){case"light":this.$colorMode.preference="dark";break;case"dark":this.$colorMode.preference="system";break;case"system":this.$colorMode.preference="light";break;default:this.$colorMode.preference="system"}}}},c=l(35),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"focus:outline-none",on:{click:this.toggleTheme}},[e("svg-icon",{class:"w-10 h-10 p-2 bg-gray-100 dark:bg-gray-600 rounded-full dark:text-yellow-500",attrs:{type:"mdi",path:this.themeIcon}})],1)}),[],!1,null,null,null);e.default=component.exports},753:function(t,e,l){"use strict";l.r(e);var o=l(740),r=l(741),n={components:{SvgIcon:o.a},data:function(){return{showLangSelect:!1,icons:{github:r.e}}},methods:{changeLanguage:function(t){this.$i18n.setLocale(t)}}},c=l(35),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"lg:w-3/4 xl:w-2/3 mx-auto"},[l("hr",{staticClass:"border-t-4 rounded-full my-5 mx-5 dark:border-gray-500"}),t._v(" "),l("div",{staticClass:"grid grid-cols-3 pb-5 mx-5"},[l("div",{staticClass:"flex flex-row"},[l("a",{attrs:{href:"https://github.com/hendrikbl/mycafe-rewards-calculator"}},[l("svg-icon",{staticClass:"h-6",attrs:{type:"mdi",path:t.icons.github}})],1),t._v(" "),l("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),l("nuxt-link",{staticClass:"text-link underline",attrs:{to:t.localePath("/privacy-policy")}},[t._v(t._s(t.$t("Privacy")))])],1),t._v(" "),l("div",{staticClass:"flex flex-col"},[t._m(0),t._v(" "),l("div",{staticClass:"flex flex-row justify-center pt-2"},t._l(t.$i18n.locales,(function(e){return l("div",{key:e.code,staticClass:"w-5 h-5 rounded-full overflow-hidden cursor-pointer mx-1",on:{click:function(l){return l.preventDefault(),l.stopPropagation(),t.changeLanguage(e.code)}}},[l("flag",{class:"-ml-1 -mt-1 h-7 w-7 bg-no-repeat bg-contain bg-center "+(e.code===t.$i18n.locale?"opacity-100":"opacity-70"),attrs:{country:e.country}})],1)})),0)]),t._v(" "),l("a",{staticClass:"font-semibold underline text-right",attrs:{href:"http://melsoft-games.com/"}},[t._v("Melsoft Games")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-bold text-center"},[this._v("\n        Made with "),e("span",{staticClass:"text-red-500"},[this._v("❤")]),this._v(" by\n        "),e("a",{staticClass:"underline",attrs:{href:"https://github.com/hendrikbl"}},[this._v("hendrikbl")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Flag:l(755).default})},754:function(t,e,l){"use strict";l.r(e);var o=l(740),r=l(741),n={components:{SvgIcon:o.a},data:function(){return{icons:{cookie:r.c}}}},c=l(35),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"fixed bottom-0 left-0 flex items-center p-4 bg-gray-300 dark:bg-gray-500 shadow-sm justify-center w-full"},[l("svg-icon",{staticClass:"w-7 h-7 mr-3 p-1 bg-gray-500 dark:bg-gray-600 rounded-full text-white flex-none",attrs:{type:"mdi",path:t.icons.cookie}}),t._v(" "),l("div",{staticClass:"lg:mx-8 flex-wrap"},[l("p",[t._v("\n      "+t._s(t.$t("we_use_cookies"))+" "+t._s(t.$t("cookies_read"))+"\n      "),l("nuxt-link",{staticClass:"text-link underline",attrs:{to:t.localePath("/privacy-policy")}},[t._v(t._s(t.$t("privacy_policy")))]),t._v("\n      "+t._s(t.$t("cookies_more_information"))+"\n    ")],1)]),t._v(" "),l("div",{staticClass:"flex justify-center ml-4 flex-none"},[l("button",{staticClass:"rounded ml-2 md:ml-0 bg-green-500 text-white py-1.5 px-2",on:{click:function(e){return t.$emit("accepted",!0)}}},[t._v("\n      "+t._s(t.$t("Okay"))+"\n    ")]),t._v(" "),l("button",{staticClass:"md:ml-2 font-bold w-6",on:{click:function(e){return t.$emit("accepted",!1)}}},[t._v("\n      ×\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},755:function(t,e,l){"use strict";l.r(e);l(36);var o=l(10),r={props:{country:{type:String,required:!0},square:{type:Boolean,default:!1},background:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["small","normal","big"].includes(t)},default:"normal"}},computed:{flagClass:function(){var t;return t={},Object(o.a)(t,"flag-icon-background",this.background),Object(o.a)(t,"flag-icon-".concat(this.country),!0),Object(o.a)(t,"flag-icon-squared",this.square),t}}},n=l(35),component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.flagClass})}),[],!1,null,null,null);e.default=component.exports},756:function(t,e,l){"use strict";l.r(e);l(47),l(165),l(742),l(48);var o=l(156),r=l(741),n={name:"Index",data:function(){return{totals:{trophies:null,rubies:null,diamonds:null},playercount:null,players:[],icons:{diamond:r.d,ruby:r.b,trophy:r.i,alert:r.a,github:r.e},allowCookies:!1,showCookieConsent:!1}},computed:{trove:function(){var t=this.players.reduce((function(a,b){return a+b.diamonds}),0),e=this.players.reduce((function(a,b){return a+b.rubies}),0);return{diamonds:this.totals.diamonds-t,rubies:this.totals.rubies-e}},playerTrophies:function(){return this.players.reduce((function(a,b){return Number(a)+Number(b.trophies)}),0)}},watch:{playercount:{handler:function(t){this.calculateAll()}},players:{deep:!0,handler:function(t){this.calculateAll()}},totals:{deep:!0,handler:function(t){this.calculateAll()}}},created:function(){this.createPlayers(20),"true"!==this.getCookieConsent()&&(this.showCookieConsent=!0)},methods:{createPlayers:function(){for(var i=0;i<20;i++)this.players.push({id:i,name:"",trophies:null,diamonds:0,rubies:0})},calculate:function(t,e){return t/this.totals.trophies*e.trophies},calculateAll:function(){var t=this;this.players.forEach((function(e){0!==t.totals.trophies&&null!==t.totals.trophies&&(e.diamonds=0===t.totals.diamonds||e.id>t.playercount?0:Math.floor(t.calculate(t.totals.diamonds,e)),e.rubies=0===t.totals.rubies||e.id>t.playercount?0:Math.floor(t.calculate(t.totals.rubies,e)))}))},consentCookies:function(t){var e=this;t?Object(o.a)().then((function(t){e.showCookieConsent=!1,localStorage.setItem("cookies:accepted",!0),location.reload()})):(this.showCookieConsent=!1,localStorage.setItem("cookies:accepted",!1))},getCookieConsent:function(){return localStorage.getItem("cookies:accepted",!0)}}},c=l(35),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container mx-auto h-screen flex flex-col"},[l("div",{staticClass:"mb-auto"},[l("h1",{staticClass:"text-center text-4xl font-extrabold py-10"},[t._v("\n      MyCafé Rewards Calculator\n    ")]),t._v(" "),l("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:w-3/4 xl:w-2/3 mx-auto"},[l("input-card",{staticClass:"mx-5",attrs:{color:"yellow",title:t.$t("Trophies"),path:t.icons.trophy},model:{value:t.totals.trophies,callback:function(e){t.$set(t.totals,"trophies",e)},expression:"totals.trophies"}}),t._v(" "),l("input-card",{staticClass:"mx-5",attrs:{color:"blue",title:t.$t("Diamonds"),path:t.icons.diamond},model:{value:t.totals.diamonds,callback:function(e){t.$set(t.totals,"diamonds",e)},expression:"totals.diamonds"}}),t._v(" "),l("input-card",{staticClass:"mx-5",attrs:{color:"red",title:t.$t("Rubies"),path:t.icons.ruby},model:{value:t.totals.rubies,callback:function(e){t.$set(t.totals,"rubies",e)},expression:"totals.rubies"}})],1),t._v(" "),l("div",{staticClass:"flex flex-row justify-center"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.playercount,expression:"playercount"}],class:"font-extrabold text-gray-800 dark:text-white focus:outline-none flex-none border-b-2 bg-transparent border-"+(t.playercount<=20?"gray":"red")+"-500 p-2 mx-2 rounded-none",attrs:{id:"playercount",type:"number",name:"playercount",placeholder:t.$t("Participants"),min:"0"},domProps:{value:t.playercount},on:{input:function(e){e.target.composing||(t.playercount=e.target.value)}}})]),t._v(" "),t._l(t.players,(function(e){return l("div",{key:e.id,staticClass:"mx-5"},[e.id<t.playercount?l("div",[l("player-card",{model:{value:t.players[e.id],callback:function(l){t.$set(t.players,e.id,l)},expression:"players[player.id]"}})],1):t._e()])})),t._v(" "),l("div",{staticClass:"mx-5 flex-grow"},[t.playerTrophies>t.totals.trophies?l("div",{staticClass:"lg:w-3/4 xl:w-2/3 mx-auto my-2"},[l("alert-card",{attrs:{text:t.$t("too_many_trophies"),color:"red",path:t.icons.alert}})],1):t._e(),t._v(" "),t.playerTrophies<t.totals.trophies?l("div",{staticClass:"lg:w-3/4 xl:w-2/3 mx-auto my-2"},[l("alert-card",{attrs:{text:t.$t("not_all_trophies"),color:"yellow",path:t.icons.alert}})],1):t._e(),t._v(" "),l("trove-card",{staticClass:"my-8",model:{value:t.trove,callback:function(e){t.trove=e},expression:"trove"}})],1)],2),t._v(" "),l("div",{staticClass:"flex justify-center mx-auto mt-5"},[l("theme-toggle")],1),t._v(" "),l("app-footer",{staticClass:"mt-1"}),t._v(" "),t.showCookieConsent?l("cookie-consent",{on:{accepted:t.consentCookies}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputCard:l(748).default,PlayerCard:l(749).default,AlertCard:l(750).default,TroveCard:l(751).default,ThemeToggle:l(752).default,AppFooter:l(753).default,CookieConsent:l(754).default})}}]);