(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-settlement-site"],{"9ec3":function(e,a,t){},b15f:function(e,a,t){},db91:function(e,a,t){"use strict";t.r(a);var l,n,o,i,r=t("2638"),s=t.n(r),c=(t("7db0"),t("4de4"),t("d3b7"),t("d81d"),t("b0c0"),t("ade3")),d={name:"save-failed",props:{value:{type:Boolean,default:!0}},computed:{showDialog:{get:function(e){var a=e.value;return a},set:function(e){this.$emit("input",e)}}},render:function(){var e=arguments[0],a=this;return e("el-dialog",s()([{attrs:{visible:a.showDialog,width:"437px",top:"30vh"}},{on:Object(c["a"])({},"update:visible",(function(e){a.showDialog=e}))}]),[e("div",{class:"flex flex-direction align-center"},[e("div",{class:"flex align-center"},[e("span",{class:"le-icon le-icon-zhushi1"}),e("span",{class:"title"},["操作失败"])]),e("span",{class:"prompt-text"},["存在分销商品未设置成本价，无法根据利润计算佣金"])]),e("div",{slot:"footer"},[e("el-button",{on:{click:function(){return a.showDialog=!1}}},["取消"]),e("el-button",{attrs:{type:"primary"},on:{click:a.modifyProduct}},["修改商品"])])])},methods:{modifyProduct:function(){var e=this.$router.resolve({path:"/promoter/goods"}),a=e.href;window.open(a,"_blank")}}},u=d,m=(t("fcad"),t("2877")),f=Object(m["a"])(u,l,n,!1,null,"56e32c68",null),p=f.exports,w=t("0e28"),b={name:"settlement-site",components:{saveFailed:p},data:function(){var e=this,a=/(^[\d]|^[1-9][\d]*)($|[\\.][\d]{0,2}$)/,t=function(t,l,n){a.test(l)?(e.$_.toSafeInteger(l)>9999999&&n("请输入0~9999999的整数或小数"),n()):n("请输入小数点后最多两位")};return{form:{count_rules:1,withdrawal_way:["wechat","alipay","bankCard"],min_money:"",max_money:"",poundage:""},rules:{withdrawal_way:[{required:!0,message:"请选择提现方式"}],min_money:[{required:!0,validator:t}],max_money:[{required:!0,validator:t}],poundage:[{required:!0,validator:function(t,l,n){a.test(l)?(e.$_.toSafeInteger(l)>100&&n("请输入0~100的整数或小数"),n()):n("请输入小数点后最多两位")}}]},loading:!0,showSaveFailed:!1}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(a){if(!a)return!1;e.loading=!0;var t=e.$_.cloneDeep(e.form),l=new Array(4);l[0]=t.withdrawal_way.find((function(e){return"wechatDib"===e})),l[1]=t.withdrawal_way.find((function(e){return"wechat"===e})),l[2]=t.withdrawal_way.find((function(e){return"alipay"===e})),l[3]=t.withdrawal_way.find((function(e){return"bankCard"===e})),l=l.filter((function(e){return e})),t.withdrawal_way=l,Object(w["F"])(t).then((function(a){1===a.status?e.showSaveFailed=!0:e.$message({type:"success",message:"保存成功"})})).finally((function(){e.loading=!1}))}))}},mounted:function(){var e=this;Object(w["l"])().then((function(a){e.form=a.content,e.loading=!1})).catch((function(){e.loading=!1}))},render:function(){var e=this,a=arguments[0],t=this,l=[{name:"自动到账微信零钱",label:"wechatDib"},{name:"提现到微信",label:"wechat"},{name:"提现到支付宝",label:"alipay"},{name:"提现到银行卡",label:"bankCard"}];return a("div",{class:"le-main"},[a("el-form",s()([{attrs:{"label-width":"190px"},ref:"form"},{props:{model:t.form,rules:t.rules}},{directives:[{name:"loading",value:t.loading}]}]),[a("div",{class:"le-card"},[a("div",{class:"le-card-head flex align-center"},[a("span",{class:"le-card-line"}),a("span",["佣金计算"])]),a("div",{class:"le-card-body"},[a("el-form-item",{attrs:{label:"佣金计算规则"}},[a("el-radio-group",{model:{value:t.form.count_rules,callback:function(a){e.$set(t.form,"count_rules",a)}}},[a("div",{class:"le-radio-item"},[a("el-radio",{attrs:{label:1}},["以商品实付金额计算佣金"]),a("div",{class:"le-prompt-text"},["选择后，佣金=商品实付金额*佣金比例"])]),a("div",{class:"le-radio-item"},[a("el-radio",{attrs:{label:2}},["以商品利润计算佣金"]),a("div",{class:"le-prompt-text"},["选择后，佣金=商品利润*佣金比例，此种方式能保障商家不亏本"])])])])])]),a("div",{class:"le-card le-card-margin"},[a("div",{class:"le-card-head flex align-center"},[a("span",{class:"le-card-line"}),a("span",["佣金提现"])]),a("div",{class:"le-card-body"},[a("el-form-item",{attrs:{label:"提现方式",prop:"withdrawal_way"}},[a("el-checkbox-group",{model:{value:t.form.withdrawal_way,callback:function(a){e.$set(t.form,"withdrawal_way",a)}}},[l.map((function(e,t){return a("el-checkbox",{attrs:{label:e.label},key:t},[e.name,function(){if("wechatDib"===e.label)return a("el-popover",{attrs:{content:"过售后订单收入",placement:"top",trigger:"hover"}},[a("div",[a("span",["登录【商户平台】，根据"]),a("a",{class:"le-popover--btn",attrs:{target:"_blank",href:"https://developers.weixin.qq.com/community/develop/article/doc/000ee8684ecb9873061cd257651813"}},["指引"]),a("span",["开通【企业付款到零钱】"])]),a("span",{slot:"reference",class:"le-icon le-icon-zhushi"})])}()])}))])]),a("el-form-item",{attrs:{label:"最低提现金额",prop:"min_money"}},[a("el-input",{class:"le-small--input",model:{value:t.form.min_money,callback:function(a){e.$set(t.form,"min_money",a)}}},[a("template",{slot:"append"},["元"])])]),a("el-form-item",{attrs:{label:"每日最高提现金额",prop:"max_money"}},[a("el-input",{class:"le-small--input",model:{value:t.form.max_money,callback:function(a){e.$set(t.form,"max_money",a)}}},[a("template",{slot:"append"},["元"])])]),a("el-form-item",{attrs:{label:"提现手续费",prop:"poundage"}},[a("el-input",{class:"le-small--input",model:{value:t.form.poundage,callback:function(a){e.$set(t.form,"poundage",a)}}},[a("template",{slot:"append"},["%"])])])])])]),a("div",{class:"le-cardpin"},[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},["保存"])]),function(){if(t.showSaveFailed)return a(p,{model:{value:t.showSaveFailed,callback:function(a){e.$set(t,"showSaveFailed",a)}}})}()])}},h=b,v=(t("fff4"),Object(m["a"])(h,o,i,!1,null,"1d128b17",null));a["default"]=v.exports},fcad:function(e,a,t){"use strict";t("b15f")},fff4:function(e,a,t){"use strict";t("9ec3")}}]);