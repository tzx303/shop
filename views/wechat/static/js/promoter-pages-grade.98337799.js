(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-pages-grade"],{"02b3":function(t,e,a){var i=a("a1a8");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-float[data-v-5adc870e]{position:fixed;z-index:998;right:%?24?%}.he-float .open-close[data-v-5adc870e]{width:%?88?%;height:%?88?%}.he-float uni-image[data-v-5adc870e]{width:%?88?%;height:%?88?%;display:block}.he-float .row-link[data-v-5adc870e]{margin-bottom:%?16?%}.he-float .box[data-v-5adc870e]{width:%?424?%;height:%?362?%;background:rgba(0,0,0,.6);border-radius:%?40?%;margin-bottom:%?17?%;padding:%?32?% %?37?%}.he-float .box .item[data-v-5adc870e]{width:%?96?%;position:relative}.he-float .box .item .name[data-v-5adc870e]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;margin-top:%?15?%}.he-float .box .item[data-v-5adc870e]:not(:nth-child(3n)){margin-right:%?32?%}.button[data-v-5adc870e]{background:transparent;padding:0;margin-left:0;border:none;outline:none;line-height:0;position:absolute;width:100%;height:100%}',""]),t.exports=e},1122:function(t,e,a){"use strict";a.r(e);var i=a("6302"),n=a("6d8b");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c425");var s,o=a("522a"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"9e3efe20",null,!1,i["a"],s);e["default"]=c.exports},"25e4":function(t,e,a){var i=a("783a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("b41b").default;n("52c3bf9e",i,!0,{sourceMap:!1,shadowMode:!1})},"2d13":function(t,e,a){var i=a("02b3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("b41b").default;n("68f9ca24",i,!0,{sourceMap:!1,shadowMode:!1})},"3e2d":function(t,e,a){"use strict";var i=a("2d13"),n=a.n(i);n.a},"4ce2":function(t,e,a){"use strict";a.r(e);var i=a("e9b7"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"55a2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e1d4");var i={name:"he-open-launch-weapp",props:{digital:{type:[Array,Object,Number],default:function(){return{}}},username:{type:String,default:""},path:{type:String,default:""}},computed:{appid:function(t){var e=t.username;return e},url:function(t){var e=t.path;return e}},data:function(){return{subscribeId:this.$h.guid()+"_subscribe"}},mounted:function(){var t=this,e=document.getElementById(t.subscribeId);e.addEventListener("ready",(function(){t.$emit("open-subscribe-success",t.digital)})),e.addEventListener("launch",(function(){t.$emit("open-subscribe-success",t.digital)})),e.addEventListener("error",(function(){t.$emit("open-subscribe-success",t.digital)}))}};e.default=i},"58d4":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"commission-rate flex justify-around"},[a("v-uni-view",{staticClass:"item flex flex-direction align-center justify-between"},[t.firstImage?a("v-uni-image",{attrs:{src:t.firstImage}}):a("v-uni-canvas",{attrs:{"canvas-id":"firstCanvas-"+t.index,id:"firstCanvas-"+t.index}}),t.show?a("v-uni-view",{staticClass:"percentage"},[a("v-uni-view",{staticClass:"content"},[t._v(t._s(Number(t.info.first)))]),a("v-uni-view",{staticClass:"per"},[t._v("%")])],1):t._e(),a("v-uni-text",[t._v(t._s(t.promoterPage.grade_center.first))])],1),a("v-uni-view",{staticClass:"item flex flex-direction align-center justify-between"},[t.secondImage?a("v-uni-image",{attrs:{src:t.secondImage}}):a("v-uni-canvas",{attrs:{"canvas-id":"secondCanvas-"+t.index,id:"secondCanvas-"+t.index}}),t.show?a("v-uni-view",{staticClass:"percentage"},[a("v-uni-view",{staticClass:"content"},[t._v(t._s(Number(t.info.second)))]),a("v-uni-view",{staticClass:"per"},[t._v("%")])],1):t._e(),a("v-uni-text",[t._v(t._s(t.promoterPage.grade_center.second))])],1),a("v-uni-view",{staticClass:"item flex flex-direction align-center justify-between"},[t.thirdImage?a("v-uni-image",{attrs:{src:t.thirdImage}}):a("v-uni-canvas",{attrs:{"canvas-id":"thirdCanvas-"+t.index,id:"thirdCanvas-"+t.index}}),t.show?a("v-uni-view",{staticClass:"percentage"},[a("v-uni-view",{staticClass:"content"},[t._v(t._s(Number(t.info.third)))]),a("v-uni-view",{staticClass:"per"},[t._v("%")])],1):t._e(),a("v-uni-text",[t._v(t._s(t.promoterPage.grade_center.third))])],1)],1)},r=[]},"5f5f":function(t,e,a){"use strict";a.r(e);var i=a("fc83"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},6302:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"he-open-launch-weapp"},[t._t("default"),a("wx-open-launch-weapp",{staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0"},attrs:{username:t.appid,path:t.url,id:t.subscribeId}},[a("script",{attrs:{type:"text/wxtag-template"}},[t._v('<style scoped>\n        .btn {\n          width: 100%;\n          height: 500px;\n        }\n      </style>\n      <div class="btn"></div>')])])],2)},r=[]},"6d8b":function(t,e,a){"use strict";a.r(e);var i=a("55a2"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"783a":function(t,e,a){var i=a("a1a8");e=i(!1),e.push([t.i,".he-open-launch-weapp[data-v-9e3efe20]{position:relative;overflow:hidden}",""]),t.exports=e},8165:function(t,e,a){var i=a("a1a8");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.font-family-sc[data-v-7cef071c], .grade-name[data-v-7cef071c], .grade-banner .he-list-wrap .head-title[data-v-7cef071c], .he-card .card-head[data-v-7cef071c], .he-card .card-item .item-title[data-v-7cef071c], .he-card .card-item .item-footer[data-v-7cef071c]{font-family:PingFang SC}.font-family-din[data-v-7cef071c]{font-family:DIN}.he-card[data-v-7cef071c]{background-color:#fff;padding:%?32?%;border-radius:%?16?%;margin-bottom:%?16?%}.iconbtn_arrow[data-v-7cef071c]{font-size:%?18?%;color:#bebebe}[data-v-7cef071c] .input-placeholder{font-family:PingFang SC;font-size:%?26?%;font-weight:500;color:#999}.scroll-view[data-v-7cef071c]{min-height:100vh}.grade-background[data-v-7cef071c]{width:%?750?%;height:%?480?%;position:absolute;top:0;z-index:0}.avatar-box[data-v-7cef071c]{width:%?160?%;height:%?160?%;position:absolute;top:%?28?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.avatar-box .avatar-wheat[data-v-7cef071c]{width:100%;height:100%}.avatar-box .avatar-image[data-v-7cef071c]{width:%?120?%;height:%?120?%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.grade-name[data-v-7cef071c]{font-size:%?32?%;font-weight:500;color:#fff;position:relative;z-index:10;text-align:center;line-height:%?40?%;margin-top:%?208?%}.grade-banner[data-v-7cef071c]{height:%?350?%;margin-top:%?40?%;position:relative;z-index:10}.grade-banner .he-list-wrap[data-v-7cef071c]{-webkit-transition:all .2s;transition:all .2s;background:#f9efe6;border-radius:%?16?%;padding:%?40?% %?56?% 0 %?56?%}.grade-banner .he-list-wrap .wrap--head[data-v-7cef071c]{color:#a06640;text-align:center}.grade-banner .he-list-wrap .wrap--head .iconfenxiaozhuangshi[data-v-7cef071c]:last-child{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);display:inline-block}.grade-banner .he-list-wrap .head-title[data-v-7cef071c]{font-size:%?28?%;font-weight:500;margin:0 %?15?%}.grade-banner .iconfenxiaozhuangshi[data-v-7cef071c]{font-size:%?28?%}.he-card[data-v-7cef071c]{margin:%?47?% %?20?% 0 %?20?%;padding:%?40?% %?40?% %?8?% %?40?%}.he-card .card-head[data-v-7cef071c]{height:%?48?%;line-height:%?48?%;font-weight:500;margin-bottom:%?32?%}.he-card .card-head .head-title[data-v-7cef071c]{color:#222;font-size:%?32?%}.he-card .card-head .head-condition[data-v-7cef071c]{font-size:%?24?%;color:#999;margin-left:%?15?%}.he-card .card-item[data-v-7cef071c]{margin-bottom:%?40?%}.he-card .card-item .item-title[data-v-7cef071c]{font-size:%?28?%;font-weight:500;color:#666;line-height:%?48?%}.he-card .card-item .item-footer[data-v-7cef071c]{font-size:%?24?%;font-weight:500;color:#666;line-height:%?40?%}.he-card .progress-bar[data-v-7cef071c]{width:%?630?%;height:%?16?%;background:#f3e0d2;border-radius:%?8?%;margin:%?16?% 0}.he-card .progress-bar .progress-ratio[data-v-7cef071c]{width:0;height:%?16?%;background:#c9875e;border-radius:%?8?%;-webkit-transition-duration:.5s;transition-duration:.5s}.item-img-side[data-v-7cef071c]{height:%?260?%;width:100%;-webkit-animation:to-mini-data-v-7cef071c .3s;animation:to-mini-data-v-7cef071c .3s}.item-img[data-v-7cef071c]{height:%?350?%;width:100%;-webkit-animation:to-big-data-v-7cef071c .3s;animation:to-big-data-v-7cef071c .3s}@-webkit-keyframes to-big-data-v-7cef071c{from{height:%?260?%}to{height:%?350?%}}@keyframes to-big-data-v-7cef071c{from{height:%?260?%}to{height:%?350?%}}@-webkit-keyframes to-mini-data-v-7cef071c{from{height:%?350?%}to{height:%?260?%}}@keyframes to-mini-data-v-7cef071c{from{height:%?350?%}to{height:%?260?%}}.canvas[data-v-7cef071c]{opacity:1}.canvas-side[data-v-7cef071c]{opacity:0}.swiper-item[data-v-7cef071c]{height:%?350?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.swiper-item-side[data-v-7cef071c]{height:%?260?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"8fa0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showModal?a("v-uni-view",{staticClass:"he-float flex flex-direction align-end",style:[t.bottomStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[t.isOpen&&t.list.length>=4?a("v-uni-view",{staticClass:"box flex flex-wrap"},[t._l(t.list,(function(e,i){return[11===e.index?a("he-open-launch-weapp",{key:i,attrs:{username:e.link.param.wechat.appId,path:e.link.param.wechat.path}},[a("v-uni-view",{key:i,staticClass:"item flex flex-direction align-center"},[a("v-uni-image",{attrs:{src:e.img}}),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1)],1):(e.link.value,a("v-uni-view",{key:i,staticClass:"item flex flex-direction align-center",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.handleCheck(e.link)}}},[a("v-uni-image",{attrs:{src:e.img}}),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1))]}))],2):t._e(),t.isOpen&&t.list.length<4?t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"row-link",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.handleCheck(e.link)}}},[a("v-uni-image",{attrs:{src:e.img}})],1)})):t._e(),t.list.length>=3?a("v-uni-view",{staticClass:"open-close"},[a("v-uni-image",{attrs:{src:t.isOpen?t.floatWindow.stowedState:t.floatWindow.expandedState},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setOpen()}}})],1):t._e()],2):t._e()},r=[]},9148:function(t,e,a){var i=a("a1a8");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.font-family-sc[data-v-fb90f6b6], .commission-rate .item[data-v-fb90f6b6], .commission-rate .item .percentage .content[data-v-fb90f6b6], .commission-rate .item .percentage .per[data-v-fb90f6b6]{font-family:PingFang SC}.font-family-din[data-v-fb90f6b6]{font-family:DIN}.he-card[data-v-fb90f6b6]{background-color:#fff;padding:%?32?%;border-radius:%?16?%;margin-bottom:%?16?%}.iconbtn_arrow[data-v-fb90f6b6]{font-size:%?18?%;color:#bebebe}[data-v-fb90f6b6] .input-placeholder{font-family:PingFang SC;font-size:%?26?%;font-weight:500;color:#999}.commission-rate[data-v-fb90f6b6]{height:%?164?%;margin-top:%?40?%}.commission-rate .item[data-v-fb90f6b6]{width:%?140?%;font-size:%?20?%;font-weight:400;color:#a06640;position:relative}.commission-rate .item .percentage[data-v-fb90f6b6]{position:absolute;top:%?40?%;left:0;width:%?140?%;text-align:center}.commission-rate .item .percentage .content[data-v-fb90f6b6]{font-size:%?28?%;font-weight:700;color:#a06640;display:inline-block}.commission-rate .item .percentage .per[data-v-fb90f6b6]{display:inline-block;font-size:%?20?%;font-weight:500;line-height:%?28?%}.commission-rate .item uni-canvas[data-v-fb90f6b6]{width:%?116?%;height:%?116?%}.commission-rate .item uni-image[data-v-fb90f6b6]{width:%?116?%;height:%?116?%}',""]),t.exports=e},"943e":function(t,e,a){"use strict";a.r(e);var i=a("dc06"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},a123:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"he-page-content",class:t.loading?"flex justify-center align-center":""},[t.loading?a("he-loading",{attrs:{size:"50",mode:"flower"}}):a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[a("v-uni-image",{staticClass:"grade-background",attrs:{src:t.ipAddress+"/promoter/grade-background.png"}}),a("v-uni-view",{staticClass:"avatar-box"},[a("v-uni-image",{staticClass:"avatar-wheat",attrs:{src:t.ipAddress+"/promoter/grade-avatar-wheat.png"}}),a("he-image",{staticClass:"avatar-image",attrs:{"image-style":{borderRadius:"50%"},height:120,width:120,src:t.userInfo.avatar}})],1),a("v-uni-view",{staticClass:"grade-name"},[t._v(t._s(t.promoter.level_name))]),a("v-uni-view",{staticClass:"grade-banner"},[a("v-uni-swiper",{style:{height:"100%"},attrs:{"previous-margin":"56rpx","next-margin":"56rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.level,(function(e,i){return a("v-uni-swiper-item",{key:e.id,staticClass:"he-swiper-item",class:t.hCurrent==i?"swiper-item":"swiper-item-side"},[a("v-uni-view",{staticClass:"he-list-wrap",class:t.hCurrent==i?"item-img":"item-img-side",style:[{margin:t.hCurrent!==i?"0 24rpx":0},t.dontFirstAnimation?"animation: none;":""]},[a("v-uni-view",{staticClass:"wrap--head"},[a("v-uni-text",{staticClass:"iconfont iconfenxiaozhuangshi"}),a("v-uni-text",{staticClass:"head-title"},[t._v(t._s(e.name))]),a("v-uni-text",{staticClass:"iconfont iconfenxiaozhuangshi"})],1),a("v-uni-view",{class:t.hCurrent===i?"canvas":"canvas-side"},[a("levelCanvas",{attrs:{index:i,info:e}})],1)],1)],1)})),1)],1),1===t.detail.is_auto?a("v-uni-view",{staticClass:"he-card"},[a("v-uni-view",{staticClass:"card-head"},[a("v-uni-text",{staticClass:"head-title"},[t._v(t._s(t.detail.name))]),a("v-uni-text",{staticClass:"head-condition"},[t._v(t._s(1===t.detail.update_type?"满足任意条件升级":2===t.detail.update_type?"满足全部条件升级":""))])],1),t.detail.condition.all_children.checked?a("v-uni-view",{staticClass:"card-item"},[a("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.promoterPage.grade_center.all_children))]),a("v-uni-view",{staticClass:"progress-bar"},[a("v-uni-view",{staticClass:"progress-ratio",style:[t.ratioStyle(t.detail,"all_children_percent")]})],1),a("v-uni-view",{staticClass:"flex justify-between item-footer"},[a("v-uni-text",[t._v("已达"+t._s(t.detail.all_children)+"人")]),a("v-uni-text",[t._v(t._s(t.detail.condition.all_children.num)+"人")])],1)],1):t._e(),t.detail.condition.total_money.checked?a("v-uni-view",{staticClass:"card-item"},[a("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.promoterPage.grade_center.sales_amount))]),a("v-uni-view",{staticClass:"progress-bar"},[a("v-uni-view",{staticClass:"progress-ratio",style:[t.ratioStyle(t.detail,"total_money_percent")]})],1),a("v-uni-view",{staticClass:"flex justify-between item-footer"},[a("v-uni-text",[t._v("已达￥"+t._s(t.detail.total_money))]),a("v-uni-text",[t._v("￥"+t._s(t.detail.condition.total_money.num))])],1)],1):t._e(),t.detail.condition.total_bonus.checked?a("v-uni-view",{staticClass:"card-item"},[a("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.promoterPage.grade_center.all_commission_amount))]),a("v-uni-view",{staticClass:"progress-bar"},[a("v-uni-view",{staticClass:"progress-ratio",style:[t.ratioStyle(t.detail,"total_bonus_percent")]})],1),a("v-uni-view",{staticClass:"flex justify-between item-footer"},[a("v-uni-text",[t._v("已达￥"+t._s(t.detail.total_bonus))]),a("v-uni-text",[t._v("￥"+t._s(t.detail.condition.total_bonus.num))])],1)],1):t._e()],1):t._e(),a("he-float-window",{attrs:{"pages-url":"promoter"}})],1)],1)},r=[]},b12c:function(t,e,a){"use strict";var i=a("e450"),n=a("a3e7").findIndex,r=a("3286"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},b603:function(t,e,a){var i=a("9148");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("b41b").default;n("797ef608",i,!0,{sourceMap:!1,shadowMode:!1})},c425:function(t,e,a){"use strict";var i=a("25e4"),n=a.n(i);n.a},c50c:function(t,e,a){"use strict";a.r(e);var i=a("a123"),n=a("5f5f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e0cd");var s,o=a("522a"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"7cef071c",null,!1,i["a"],s);e["default"]=c.exports},c932:function(t,e,a){"use strict";var i=a("b603"),n=a.n(i);n.a},cd6f:function(t,e,a){"use strict";a.r(e);var i=a("58d4"),n=a("4ce2");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c932");var s,o=a("522a"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"fb90f6b6",null,!1,i["a"],s);e["default"]=c.exports},da5c:function(t,e,a){var i=a("8165");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("b41b").default;n("a6d2db96",i,!0,{sourceMap:!1,shadowMode:!1})},dc06:function(t,e,a){"use strict";var i=a("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("1c03"));a("e1d4"),a("b12c"),a("0d84"),a("6afd");var r=i(a("1122")),s=a("7736"),o={props:{pagesUrl:{type:String,default:""},bottom:{type:Number,default:0}},components:{heOpenLaunchWeapp:r.default},data:function(){return{showModal:!1,list:[],isOpen:!1}},computed:(0,n.default)((0,n.default)({},(0,s.mapGetters)("setting",{floatWindow:"getFloatWindow"})),{},{bottomStyle:function(){var t={bottom:this.bottom+148+"rpx"};return t}}),mounted:function(){var t=this,e=this.floatWindow.pages.findIndex((function(e){return e===t.pagesUrl})),a="";a="wechat";var i=this.floatWindow.channel.findIndex((function(t){return t===a}));this.showModal=e>-1&&0!==this.floatWindow.status&&i>-1,1===this.floatWindow.status?this.floatWindow.button.forEach((function(e){"index"===e&&"index"!==t.pagesUrl?t.list.push({img:t.floatWindow.buttonIcon.index,link:{extend:!1,index:0,path:"/pages/index/index"},name:"首页"}):"cart"===e?t.list.push({img:t.floatWindow.buttonIcon.cart,link:{extend:!1,index:4,path:"/pages/cart/index"},name:"购物车"}):"tell"===e?t.list.push({img:t.floatWindow.buttonIcon.tell,link:{value:"tell"},name:"联系客服"}):"personalCenter"===e?t.list.push({img:t.floatWindow.buttonIcon.personalCenter,link:{extend:!1,index:5,path:"/pages/user/index"},name:"个人中心"}):"toTop"===e?t.list.push({img:t.floatWindow.buttonIcon.toTop,link:{value:"toTop"},name:"返回顶部"}):"backPage"===e&&"index"!==t.pagesUrl&&t.list.push({img:t.floatWindow.buttonIcon.backPage,link:{value:"backPage"},name:"返回上页"})})):2===this.floatWindow.status&&(this.list=this.floatWindow.customize),this.list.length<3&&(this.isOpen=!0)},methods:{handleCheck:function(t){"backPage"===t.value?getCurrentPages().length>1&&(wx.pageScrollTo({scrollTop:0,duration:500}),uni.navigateBack({delta:1})):"toTop"===t.value?wx.pageScrollTo({scrollTop:0}):"tell"===t.value?uni.makePhoneCall({phoneNumber:this.storeSetting.contact.phone.value}):this.$h.MPageNavigate(t)},setOpen:function(){this.isOpen=!this.isOpen}}};e.default=o},e0cd:function(t,e,a){"use strict";var i=a("da5c"),n=a.n(i);n.a},e9b7:function(t,e,a){"use strict";var i=a("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("1c03"));a("e1d4"),a("e0d2");var r=a("7736"),s={name:"level-canvas",data:function(){return{show:!1,firstImage:null,secondImage:null,thirdImage:null}},props:{index:{type:Number},info:{type:Object}},computed:(0,n.default)({},(0,r.mapGetters)({promoterPage:"setting/getPromoterPage"})),methods:{initCanvasFirst:function(){this.initCanvas("firstCanvas-".concat(this.index),this.info.first,"firstImage");var t=this;uni.canvasToTempFilePath({canvasId:"firstCanvas-".concat(t.index),x:0,y:0,width:uni.upx2px(116),height:uni.upx2px(116),success:function(e){t["firstImage"]=e.tempFilePath},fail:function(t){},complete:function(){return!0}},this)},initCanvasSecond:function(){this.initCanvas("secondCanvas-".concat(this.index),this.info.second,"secondImage");var t=this;uni.canvasToTempFilePath({canvasId:"secondCanvas-".concat(t.index),x:0,y:0,width:uni.upx2px(116),height:uni.upx2px(116),success:function(e){t["secondImage"]=e.tempFilePath},fail:function(t){},complete:function(){return!0}},this)},initCanvasThird:function(){this.initCanvas("thirdCanvas-".concat(this.index),this.info.third,"thirdImage");var t=this;uni.canvasToTempFilePath({canvasId:"thirdCanvas-".concat(t.index),x:0,y:0,width:uni.upx2px(116),height:uni.upx2px(116),success:function(e){t["thirdImage"]=e.tempFilePath},fail:function(t){},complete:function(){return!0}},this)},initCanvas:function(t,e,a){e=Number(e);var i=uni.createCanvasContext(t,this);i.beginPath(),i.arc(uni.upx2px(58),uni.upx2px(58),uni.upx2px(58),0,2*Math.PI),i.setFillStyle("#F9EFE6"),i.fill(),i.closePath(),i.beginPath(),i.arc(uni.upx2px(58),uni.upx2px(58),uni.upx2px(53),0,2*Math.PI,!1),i.lineWidth=5,i.lineCap="round",i.strokeStyle="#F3E0D2",i.stroke(),i.closePath(),i.beginPath(),i.arc(uni.upx2px(58),uni.upx2px(58),uni.upx2px(53),-Math.PI/2,(3.6*e-90)*Math.PI/180,!1),i.lineWidth=5,i.lineCap="round",i.strokeStyle="#C9875E",i.stroke(),i.closePath(),i.draw()}},mounted:function(){var t=this;setTimeout((function(){t.initCanvasFirst(),t.initCanvasSecond(),t.initCanvasThird(),t.show=!0}),500)}};e.default=s},fc83:function(t,e,a){"use strict";var i=a("fe5c").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("b5aa");var n=i(a("99a5")),r=i(a("1c03")),s=a("45b6"),o=i(a("7fe5")),c=i(a("cd6f")),d=i(a("fe9c")),l=a("7736"),u={name:"grade",components:{heLoading:o.default,levelCanvas:c.default,heFloatWindow:d.default},data:function(){return{hCurrent:0,loading:!0,level:[],promoter:{},dontFirstAnimation:!1}},computed:(0,r.default)({ratioStyle:function(){return function(t,e){return{width:t[e]+"%"}}},detail:function(t){var e=t.level,a=t.hCurrent;return e[a]},userInfo:function(t){var e=t.$store;return e.state.apply.userInfo}},(0,l.mapGetters)({promoterPage:"setting/getPromoterPage"})),methods:{change:function(t){this.hCurrent=t.detail.current,this.dontFirstAnimation=!1}},onLoad:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.promoterlevel)();case 2:a=e.sent,i=a.level,n=a.promoter,t.level=i,t.promoter=n,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}};e.default=u},fe9c:function(t,e,a){"use strict";a.r(e);var i=a("8fa0"),n=a("943e");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3e2d");var s,o=a("522a"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5adc870e",null,!1,i["a"],s);e["default"]=c.exports}}]);