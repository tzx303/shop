(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b44cf872"],{"38dd":function(t,e,a){},"899a":function(t,e,a){},cff2:function(t,e,a){"use strict";a("38dd")},e0f1:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"le-main"},[a("el-button",{attrs:{type:"primary"},on:{click:t.routerCreateRoom}},[t._v("创建直播间")]),a("div",{staticClass:"le-card"},[a("el-table",{staticClass:"le-table",attrs:{data:t.list,"row-class-name":"le-table--row","default-sort":{prop:"roomid",order:"descending"}}},[a("el-table-column",{attrs:{label:"直播时间","min-width":"320px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("getTime")(e.row.start_time))+" ~ "+t._s(t._f("getTime")(e.row.end_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"直播间信息","min-width":"400px",sortable:"",prop:"roomid"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"flex"},[a("el-image",{staticClass:"le-image",attrs:{src:e.row.feeds_img_base64}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),a("div",{staticClass:"flex-sub le-info"},[a("div",{staticClass:"le-name"},[t._v(t._s(e.row.name))]),a("div",{staticClass:"le-assist"},[t._v(" 房间号："+t._s(e.row.roomid)),a("br"),t._v(" 主播："+t._s(e.row.anchor_name)+" ")])])],1)}}])}),a("el-table-column",{attrs:{label:"直播状态",width:"156px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{effect:"plain",size:"medium",type:101===e.row.live_status?"success":102===e.row.live_status?"warning":103===e.row.live_status||107===e.row.live_status?"info":104===e.row.live_status||106===e.row.live_status?"danger":""}},[t._v(" "+t._s(101===e.row.live_status?"直播中":102===e.row.live_status?"未开始":103===e.row.live_status?"已结束":104===e.row.live_status?"禁播":105===e.row.live_status?"暂停":106===e.row.live_status?"异常":107===e.row.live_status?"已过期":"")+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":"350px"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"le-operating flex align-center"},[101===e.row.live_status||102===e.row.live_status||105===e.row.live_status?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.routerAddGood(e.row)}}},[t._v("添加商品")]),a("span",{staticClass:"le-line"})]:t._e(),107!==e.row.live_status?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.shareLiveRoom(e.row)}}},[t._v("分享")]),101!==e.row.live_status?a("span",{staticClass:"le-line"}):t._e()]:t._e(),102===e.row.live_status?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.editCreateRoom(e.row)}}},[t._v("编辑")]),a("span",{staticClass:"le-line"})]:t._e(),106!==e.row.live_status&&101!==e.row.live_status?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.deleteRoom(e.row.roomid,e.$index)}}},[t._v("删除 ")]):t._e()],2)}}])})],1),a("div",{staticClass:"flex le-pagination justify-end"},[a("el-pagination",{attrs:{background:"","current-page":t.page.current,"page-count":t.page.count,layout:"prev, pager, next, jumper"},on:{"current-change":t.currentChange,"update:currentPage":function(e){return t.$set(t.page,"current",e)},"update:current-page":function(e){return t.$set(t.page,"current",e)}}})],1)],1)],1)},n=[],i=a("99a5"),s=(a("6afd"),a("f5bd"),a("a5c9"),a("6a61"),a("19e9")),r={components:{},data:function(){return{list:[],page:{count:1,current:1},loading:!1}},computed:{},created:function(){},watch:{},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getLiveList();case 1:case"end":return e.stop()}}),e)})))()},methods:{getLiveList:function(){var t=this;this.$heshop.live("get",{page:this.page.current,limit:10}).then((function(e){e.list.forEach((function(t){t.start_time=new Date(t.start_time),t.end_time=new Date(t.end_time)})),t.list=e.list,t.page.count=e.pageCount})).catch((function(e){t.$message.error(e.data.message)}))},routerCreateRoom:function(){this.$router.push("/practical/live/createRoom")},editCreateRoom:function(t){localStorage.setItem("editRoom",JSON.stringify(t)),this.$router.push({path:"/practical/live/createRoom",query:{roomid:t.roomid}})},routerAddGood:function(t){var e={goods:t.goods,anchor_name:t.anchor_name,room_id:t.roomid,feeds_img_base64:t.feeds_img_base64,name:t.name};localStorage.setItem("addGoods",JSON.stringify(e)),this.$router.push({path:"/practical/live/addGood",query:{room_id:t.roomid}})},currentChange:function(){this.getLiveList()},DownloadImgZP:function(t,e){var a=new Image;a.setAttribute("crossOrigin","anonymous"),a.onload=function(){var t=document.createElement("canvas");t.width=a.width,t.height=a.height;var o=t.getContext("2d");o.drawImage(a,0,0,a.width,a.height);var n=t.toDataURL("image/png"),i=document.createElement("a"),s=new MouseEvent("click");i.download=e,i.href=n,i.dispatchEvent(s)},a.src=t},shareLiveRoom:function(t){var e=this,a=this.$createElement;this.loading=!0,this.$heshop.live("get",{behavior:"qrcode",room_id:t.roomid}).then((function(t){e.loading=!1,e.$confirm("",{customClass:"le-share-live-room",message:a("div",[a("div",{style:"text-align: center;margin-bottom: 32px"},["分享"]),a("div",{class:"flex"},[a("img",{attrs:{src:t.poster_url_img,width:"240px",height:"316px",alt:""}}),a("div",{class:"le-right"},[a("div",{class:"le-text"},["直播间页面路径"]),a("el-input",{class:"le-copy",attrs:{id:"copy-input",disabled:!0,value:t.pagePath}},[a("el-button",{slot:"append",on:{click:e.copy.bind(e,t.pagePath)}},["复制"])]),a("div",{class:"le-btn"},[a("el-button",{on:{click:e.DownloadImgZP.bind(e,t.poster_url_img,"海报")}},["下载海报"]),a("el-button",{on:{click:e.DownloadImgZP.bind(e,t.cdn_url_img,"小程序码")}},["仅下载小程序码"])])])])]),showCancelButton:!1,showConfirmButton:!1}).then((function(){})).catch((function(){}))})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))},deleteRoom:function(t,e){var a=this;this.$confirm("直播间删除请谨慎操作，确定删除？",{}).then((function(){a.$heshop.live("post",{behavior:"delete"},{room_id:t}).then((function(){a.$delete(a.list,e)})).catch((function(t){a.$message.error(t.data.message)}))})).catch((function(){}))},copy:function(t){var e=this;Object(s["a"])({content:t,success:function(){e.$message.success("复制成功")}})}},filters:{getTime:function(t){if(!(t instanceof Date))return"";var e=t.getMonth()+1,a=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),o=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),n=t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes();return"".concat(e,"月").concat(a,"日 ").concat(o,":").concat(n)}}},c=r,l=(a("cff2"),a("fd42"),a("4ac2")),u=Object(l["a"])(c,o,n,!1,null,"59ebe996",null);e["default"]=u.exports},fd42:function(t,e,a){"use strict";a("899a")}}]);
//# sourceMappingURL=chunk-b44cf872.cdae9787.js.map