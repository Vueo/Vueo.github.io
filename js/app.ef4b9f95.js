(function(){"use strict";var t={1634:function(t,e,o){var s=o(6369),n=o(8499),i=o.n(n),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar")],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("header",{staticClass:"nav"},[e("router-link",{attrs:{"exact-active-class":"active",to:"/"}},[t._v("首页")]),e("router-link",{attrs:{"active-class":"active",to:{name:"QuickHit"}}},[t._v("速打")]),e("router-link",{attrs:{"active-class":"active",to:{name:"ComNum"}}},[t._v("合数")]),e("router-link",{attrs:{"active-class":"active",to:{name:"Static"}}},[t._v("统计")]),e("router-link",{attrs:{"active-class":"active",to:{name:"Filter"}}},[t._v("筛选")]),e("router-link",{attrs:{"active-class":"active",to:"/tip"}},[t._v("提示")]),e("router-link",{attrs:{"active-class":"active",to:"/system"}},[t._v("系统")]),e("router-link",{attrs:{"exact-active-class":"active",to:"/test"}},[t._v("测试")])],1),e("keep-alive",[e("router-view")],1)],1)},c=[],u={name:"NavBar",data(){return{ymd:"",infos:{datas:[],details:[]}}},created(){console.log("NavBar组件被创建了");let t=localStorage.getItem("time"),{ymd:e}=this.getTime(new Date);this.ymd=e,e!==t?(this.reset(),localStorage.setItem("time",e)):this.infos=JSON.parse(localStorage.getItem(e))},mounted(){this.$bus.$on("update",((t,e)=>{e>=0?this.infos.details.splice(e,1):this.infos.details.push(t),this.$bus.$emit("updateDetails",this.infos.details),t.item.forEach((e=>{this.infos.datas[t.type][e.first][e.last]+=t.money})),localStorage.setItem(this.ymd,JSON.stringify(this.infos))}))},methods:{reset(){this.infos.datas=[[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]],this.infos.details=[],localStorage.setItem(this.ymd,JSON.stringify(this.infos))},getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,ymdhms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},f=u,m=o(1001),h=(0,m.Z)(f,l,c,!1,null,null,null),p=h.exports,d={name:"App",components:{NavBar:p}},_=d,y=(0,m.Z)(_,a,r,!1,null,null,null),g=y.exports,v=o(2631),X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("Detail"),e("el-form",{staticClass:"form",attrs:{inline:!0}},[e("el-form-item",[e("el-tooltip",{attrs:{content:"选择2个位置",placement:"left"}},[e("el-checkbox-group",{attrs:{max:2},on:{change:t.focus},model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}},[e("el-checkbox-button",{attrs:{label:"千"}},[t._v("千")]),e("el-checkbox-button",{attrs:{label:"百"}},[t._v("百")]),e("el-checkbox-button",{attrs:{label:"十"}},[t._v("十")]),e("el-checkbox-button",{attrs:{label:"个"}},[t._v("个")])],1)],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("输入 "+t._s(t.tip)+" 合数，数字可重复。"),e("br"),t._v("回车进入下一个输入框，下同")]),e("el-input",{ref:"ipt1",attrs:{placeholder:"合数",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.ipt2.focus()}},model:{value:t.heNum,callback:function(e){t.heNum="string"===typeof e?e.trim():e},expression:"heNum"}})],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{content:"输入金额，回车下注，下同",placement:"top"}},[e("el-input-number",{ref:"ipt2",attrs:{"controls-position":"right",placeholder:"金额",min:0},on:{focus:function(e){return t.$refs.ipt2.select()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.process.apply(null,arguments)}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1)],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-sold-out",type:"primary"},on:{click:t.process}},[t._v("合数下注")])],1)],1),e("el-form",{staticClass:"form",attrs:{inline:!0}},[e("el-form-item",[e("el-tooltip",{attrs:{content:"选择1个位置",placement:"left"}},[e("el-radio-group",{on:{input:t.focus_2},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[e("el-radio-button",{attrs:{label:"千"}},[t._v("千")]),e("el-radio-button",{attrs:{label:"百"}},[t._v("百")]),e("el-radio-button",{attrs:{label:"十"}},[t._v("十")]),e("el-radio-button",{attrs:{label:"个"}},[t._v("个")])],1)],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("输入 "+t._s(t.radio)+"位 号码，数字可重复，"),e("br"),t._v("生成号码："+t._s(t.tip2))]),e("el-input",{ref:"ipt3",attrs:{placeholder:"全数",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.ipt4.focus()}},model:{value:t.quanNum,callback:function(e){t.quanNum="string"===typeof e?e.trim():e},expression:"quanNum"}})],1)],1),e("el-form-item",[e("el-input-number",{ref:"ipt4",attrs:{"controls-position":"right",placeholder:"金额",min:0},on:{focus:function(e){return t.$refs.ipt4.select()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.process_2.apply(null,arguments)}},model:{value:t.money_2,callback:function(e){t.money_2=e},expression:"money_2"}})],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-sell",type:"primary"},on:{click:t.process_2}},[t._v("全数下注")])],1)],1)],1)},b=[],k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box-detail"},[e("div",{ref:"list",staticClass:"list"},[e("el-alert",{directives:[{name:"show",rawName:"v-show",value:0===t.detailData.length,expression:"detailData.length === 0"}],attrs:{title:"空空如也，什么都没有！",type:"warning",center:!0}}),t._l(t.detailData,(function(o,s){return e("el-row",{key:o.time},[e("el-col",{attrs:{span:2}},[t._v(t._s(s+1>9?s+1:"0"+(s+1)))]),e("el-col",{attrs:{span:8}},[t._v(t._s(o.time))]),e("el-col",{staticClass:"hao",attrs:{span:6}},[t._v(t._s(o.haoMa))]),e("el-col",{staticClass:"hao",attrs:{span:5}},[t._v(t._s(o.money)+" || "+t._s(o.item.length*o.money))]),e("el-col",{attrs:{span:3}},[e("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.deleteHao(s)}}})],1)],1)}))],2)])},$=[],x={name:"Detail",data(){return{detailData:[]}},created(){let{ymd:t}=this.getTime(new Date);this.detailData=JSON.parse(localStorage.getItem(t)).details},activated(){this.$nextTick((()=>{this.$refs.list.scrollTo({top:this.$refs.list.scrollHeight,behavior:"smooth"})}))},mounted(){this.$bus.$on("updateDetails",(t=>{this.detailData=t}))},watch:{detailData:{immediate:!0,handler(){this.$nextTick((()=>{this.$refs.list.scrollTo({top:this.$refs.list.scrollHeight,behavior:"smooth"})}))}}},methods:{deleteHao(t){this.$confirm(`确定删除 ${this.detailData[t].haoMa} = ${this.detailData[t].money} 吗?`,"",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{const e=this.detailData[t];e.money=-e.money,console.log(e),this.$bus.$emit("update",e,t),console.log(t,this.detailData),this.$notify({message:"删除成功！",type:"success",position:"top-right",offset:50,duration:3e3})})).catch((()=>{this.$notify({message:"已取消删除！",type:"info",position:"top-right",offset:50,duration:3e3})}))},getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,ymdhms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},M=x,w=(0,m.Z)(M,k,$,!1,null,"3cff44d5",null),C=w.exports,O={name:"ComNum",components:{Detail:C},data(){return{ymd:"",checkedList:[],heNum:"",money:0,type:new Map([["千个",0],["千十",1],["千百",2],["百十",3],["十个",4],["百个",5]]),radio:"",quanNum:"",money_2:0,reg:/^[0-9]{1,}$/,details:[]}},created(){console.log("QuikHit组件被创建了");let{ymd:t}=this.getTime(new Date);this.ymd=t},computed:{tip(){if(2!==this.checkedList.length)return"";let t=this.checkedList[0],e=this.checkedList[1];const o=["千","百","十","个"];let s=t+e;return o.indexOf(t)>o.indexOf(e)&&(s=e+t),"千个"===s&&(s="头尾"),"百十"==s&&(s="中肚"),s},tip2(){let t=`${this.quanNum} X X 0~9`;return"百"===this.radio&&(t=`X ${this.quanNum} X 0~9`),"十"===this.radio&&(t=`X X ${this.quanNum} : 0~9`),"个"===this.radio&&(t=` 0~9 X X ${this.quanNum} `),t}},methods:{focus(){console.log(this.checkedList),2===this.checkedList.length&&this.$refs.ipt1.focus()},process(){let t=this.heNum,e=this.money;if(!this.reg.test(t))return console.log(t.length),this.$notify({message:"合数输入错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3}),void this.$refs.ipt1.focus();if(!e)return this.$notify({message:"金额输入错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3}),void(this.money=0);if(2!==this.checkedList.length)return void this.$notify({message:"位置选择错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3});const o={type:0,time:"",haoMa:"",money:0,item:[]};let s=this.checkedList[0],n=this.checkedList[1];const i=["千","百","十","个"];let a=s+n;i.indexOf(s)>i.indexOf(n)&&(a=n+s),o.type=this.type.get(a),console.log(o.type);let{hms:r}=this.getTime(new Date);o.time=this.ymd+" "+r,o.haoMa=a+"合"+t,0===o.type&&(o.haoMa="头尾合"+t),3===o.type&&(o.haoMa="中肚合"+t),o.money=e,console.log(o);const l=Array.from(new Set(t.split("")));l.forEach(((t,e,o)=>{o[e]=parseInt(t)})),l.forEach((t=>{for(let e=0;e<10;e++)for(let s=0;s<10;s++)(e+s)%10===t&&o.item.push({first:e,last:s})})),console.log(o),this.$bus.$emit("update",o),this.$notify({message:`成功下注 ${o.haoMa} = ${o.money}`,type:"success",position:"bottom-right",offset:60,duration:3e3}),this.heNum="",this.checkedList=[]},focus_2(){this.$refs.ipt3.focus()},process_2(){let t=this.quanNum,e=this.money_2;if(!this.reg.test(t))return this.$notify({message:"号码输入错误了哦！",type:"error",position:"bottom-right",duration:3e3}),void this.$refs.ipt3.focus();if(!e)return this.$notify({message:"金额输入错误了哦！",type:"error",position:"bottom-right",duration:3e3}),void(this.money_2=0);if(!this.radio)return void this.$notify({message:"位置选择错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3});const o={type:0,time:"",haoMa:"",money:0,item:[]};let s=this.radio,n=s+"个";"个"===s&&(n="千"+s),o.type=this.type.get(n),console.log(o.type);let{hms:i}=this.getTime(new Date);o.time=this.ymd+" "+i,"千"===s&&(o.haoMa=`${t}XX全`),"百"===s&&(o.haoMa=`X${t}X全`),"十"===s&&(o.haoMa=`XX${t}全`),"个"===s&&(o.haoMa=`全XX${t}`),o.money=e,console.log(o);const a=Array.from(new Set(t.split("")));a.forEach(((t,e,o)=>{o[e]=parseInt(t)})),"个"!==s?a.forEach((t=>{for(let e=0;e<10;e++)o.item.push({first:t,last:e})})):a.forEach((t=>{for(let e=0;e<10;e++)o.item.push({first:e,last:t})})),console.log(o),this.$bus.$emit("update",o),this.$notify({message:`成功下注 ${o.haoMa} = ${o.money}`,type:"success",position:"bottom-right",duration:3e3}),this.quanNum="",this.radio=""},getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,hms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},S=O,D=(0,m.Z)(S,X,b,!1,null,"5d2287c2",null),N=D.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("Detail"),e("el-form",{staticClass:"form",attrs:{inline:!0}},[e("el-form-item",[e("el-tooltip",{attrs:{content:"输入单组号码，如X8X8。回车进入下一个输入框，下同",placement:"left"}},[e("el-input",{ref:"ipt1",attrs:{placeholder:"快打",clearable:""},on:{input:t.setValue},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.ipt2.focus()}},model:{value:t.haoMa,callback:function(e){t.haoMa="string"===typeof e?e.trim():e},expression:"haoMa"}})],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{content:"输入金额，回车下注，下同",placement:"top"}},[e("el-input-number",{ref:"ipt2",attrs:{"controls-position":"right",placeholder:"金额",min:0},on:{focus:function(e){return t.$refs.ipt2.select()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.process.apply(null,arguments)}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{content:"点击下注，下同",placement:"right"}},[e("el-button",{attrs:{icon:"el-icon-shopping-cart-1",type:"primary"},on:{click:t.process}},[t._v("快打下注")])],1)],1)],1),e("el-form",{staticClass:"form",attrs:{inline:!0}},[e("el-form-item",[e("el-tooltip",{attrs:{content:"输入多组号码，如 XX7898:5668，数字可重复",placement:"left"}},[e("el-input",{ref:"ipt3",attrs:{type:"text",clearable:"",placeholder:"快选"},on:{input:t.setValue_2},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.ipt4.focus()}},model:{value:t.haoMa_2,callback:function(e){t.haoMa_2=e},expression:"haoMa_2"}})],1)],1),e("el-form-item",[e("el-input-number",{ref:"ipt4",attrs:{"controls-position":"right",placeholder:"金额",min:0},on:{focus:function(e){return t.$refs.ipt4.select()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.process_2.apply(null,arguments)}},model:{value:t.money_2,callback:function(e){t.money_2=e},expression:"money_2"}})],1),e("el-form-item",[e("el-button",{attrs:{icon:"el-icon-shopping-cart-2",type:"primary"},on:{click:t.process}},[t._v("快选下注")])],1)],1)],1)},E=[],I={name:"QuickHit",components:{Detail:C},data(){return{ymd:"",haoMa:"",money:0,type:new Map([["12",0],["13",1],["23",2],["03",3],["01",4],["02",5]]),reg:/^[0-9]{1}XX[0-9]{1}$|^X[0-9]{1}X[0-9]{1}$|^[0-9]{1}X[0-9]{1}X$|^XX[0-9]{1}[0-9]{1}$|^[0-9]{1}[0-9]{1}XX$|^X[0-9]{1}[0-9]{1}X$/i,haoMa_2:"",money_2:0,reg_2:/^[0-9]{1,}XX[0-9]{1,}$|^X[0-9]{1,}X[0-9]{1,}$|^[0-9]{1,}X[0-9]{1,}X$|^XX[0-9]{1,}:[0-9]{1,}$|^[0-9]{1,}:[0-9]{1,}XX$|^X[0-9]{1,}:[0-9]{1,}X$/i,details:[]}},created(){console.log("Quikhit组件被创建了");let{ymd:t}=this.getTime(new Date);this.ymd=t},activated(){this.$refs.ipt1.focus()},methods:{setValue(){let t=this.haoMa;/\-|[A-z]/.test(t)&&(this.haoMa=t.replace(/\-|[A-z]/g,"X")),/\+/.test(t)&&(this.haoMa=t.replace(/\+/g,"XX")),this.reg.test(t)&&this.$refs.ipt2.focus()},process(){let t=this.haoMa,e=this.money;if(!this.reg.test(t))return console.log(t.length),this.$notify({message:"号码输入错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3}),void this.$refs.ipt1.focus();if(!e)return this.$notify({message:"金额输入错误了哦！",type:"error",position:"bottom-right",offset:60,duration:3e3}),void(this.money=0);const o={type:0,time:"",haoMa:"",money:0,item:[]};let s=t.indexOf("X"),n=t.lastIndexOf("X");o.type=this.type.get(s+""+n),console.log(s,"fff",n);let{hms:i}=this.getTime(new Date);o.time=this.ymd+" "+i,o.haoMa=t,o.money=e;const a=t.split("X").filter((t=>""!=t)),r={first:parseInt(a[0]),last:parseInt(a[1])};console.log("号码拆解: ",t," => ",a),o.item.push(r),console.log(o),this.$bus.$emit("update",o),this.$notify({message:`成功下注 ${o.haoMa} = ${o.money}`,type:"success",position:"bottom-right",offset:60,duration:3e3}),this.haoMa="",this.$refs.ipt1.focus()},setValue_2(){let t=this.haoMa_2;/\-|[A-z]/.test(t)&&(this.haoMa_2=t.replace(/\-|[A-z]/g,"X")),/\+/.test(t)&&(this.haoMa_2=t.replace(/\+/g,"XX")),/\s|\.|\。|\;|\：|\；/.test(t)&&(this.haoMa_2=t.replace(/\s|\.|\。|\;|\：|\；/g,":"))},process_2(){let t=this.haoMa_2,e=this.money_2;if(!this.reg_2.test(t))return this.$notify({message:"号码输入错误了哦！",type:"error",position:"bottom-right",duration:3e3}),void this.$refs.ipt3.focus();if(!e)return this.$notify({message:"金额输入错误了哦！",type:"error",position:"bottom-right",duration:3e3}),void(this.money=0);const o={type:0,time:"",haoMa:"",money:0,item:[]},s=t.split(/X|:/gi);let n=0;if(3===s.length){let t=s.indexOf("");1===t&&(n=0),2===t&&(n=1),0===t&&(n=5)}else if(4===s.length){let t=s.indexOf(""),e=s.lastIndexOf("");0===t?(1===e&&(n=4),3===e&&(n=3)):n=2}o.type=n;let{hms:i}=this.getTime(new Date);o.time=this.ymd+" "+i,o.haoMa=t.replace(/:/g," : "),o.money=this.money_2;const a=s.filter((t=>""!=t)),r=Array.from(new Set(a[0].split("")));r.forEach(((t,e,o)=>{o[e]=parseInt(t)}));const l=Array.from(new Set(a[1].split("")));l.forEach(((t,e,o)=>{o[e]=parseInt(t)})),console.log(r,l);for(let c=0;c<r.length;c++)for(let t=0;t<l.length;t++){const e={first:r[c],last:l[t]};o.item.push(e)}console.log(o),this.$bus.$emit("update",o),this.$notify({message:`成功下注 ${o.haoMa} = ${o.money}`,type:"success",position:"bottom-right",duration:3e3}),this.haoMa_2="",this.$refs.ipt3.focus()},getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,hms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},A=I,z=(0,m.Z)(A,T,E,!1,null,"720413fe",null),H=z.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sta"},[e("div",{staticClass:"head"},[e("el-row",[e("el-col",{class:t.myClass[0],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=0}}},[t._v("8 X X 8 "),e("strong",[t._v("(头尾)")])])]),e("el-col",{class:t.myClass[1],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=1}}},[t._v("8 X 8 X")])]),e("el-col",{class:t.myClass[2],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=2}}},[t._v("8 8 X X")])]),e("el-col",{class:t.myClass[3],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=3}}},[t._v("X 8 8 X "),e("strong",[t._v("(中肚)")])])]),e("el-col",{class:t.myClass[4],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=4}}},[t._v("X X 8 8")])]),e("el-col",{class:t.myClass[5],attrs:{span:4}},[e("div",{on:{click:function(e){t.flag=5}}},[t._v("X 8 X 8")])])],1)],1),e("div",{staticClass:"show"},[t._l(10,(function(o){return 0===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v(t._s(o-1)+"XX"+t._s(n))]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),t._l(10,(function(o){return 1===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v(t._s(o-1)+"X"+t._s(n)+"X")]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),t._l(10,(function(o){return 2===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v(t._s(o-1)+t._s(n)+"XX")]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),t._l(10,(function(o){return 3===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v("X"+t._s(o-1)+t._s(n)+"X")]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),t._l(10,(function(o){return 4===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v("XX"+t._s(o-1)+t._s(n))]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),t._l(10,(function(o){return 5===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=0?0:1}},[e("p",[t._v("X"+t._s(o-1)+"X"+t._s(n))]),e("span",[t._v(t._s(s))])])])})),1):t._e()})),e("div",{staticClass:"total"},[t._v(" 此页数目："+t._s(t.total[t.flag])+"   全部数目："+t._s(t.total[0]+t.total[1]+t.total[2]+t.total[3]+t.total[4]+t.total[5])+" ")])],2)])},F=[],L={name:"Static",components:{},data(){return{ymd:"",datas:[],flag:0}},created(){let{ymd:t}=this.getTime(new Date);this.ymd=t,this.datas=JSON.parse(localStorage.getItem(this.ymd)).datas},activated(){this.$notify({message:"空白处的号码数目为 0。",type:"info",position:"bottom-right",duration:3e3}),this.datas=JSON.parse(localStorage.getItem(this.ymd)).datas},mounted(){this.$bus.$on("updateDatas",(t=>{this.datas=t,console.log("Static收到数据了",this.datas)}))},computed:{myClass(){let t=["","","","","",""];return t[this.flag]="activated",t},total(){const t=this.datas,e=[0,0,0,0,0,0];return t.forEach(((t,o)=>{t.forEach((t=>{t.forEach((t=>{e[o]+=t}))}))})),e}},methods:{getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,ymdhms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},Z=L,q=(0,m.Z)(Z,j,F,!1,null,null,null),J=q.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sta"},[e("div",{staticClass:"head"},[e("el-form",{staticClass:"form",attrs:{size:"small",inline:!0}},[e("el-form-item",[e("el-radio-group",{model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}},[e("el-radio-button",{attrs:{label:0}},[t._v("8 X X 8 (头尾)")]),e("el-radio-button",{attrs:{label:1}},[t._v("8 X 8 X")]),e("el-radio-button",{attrs:{label:2}},[t._v("8 8 X X")]),e("el-radio-button",{attrs:{label:3}},[t._v("X 8 8 X (中肚)")]),e("el-radio-button",{attrs:{label:4}},[t._v("X X 8 8")]),e("el-radio-button",{attrs:{label:5}},[t._v("X 8 X 8")])],1)],1),e("el-form-item",[e("el-tooltip",{attrs:{content:"输入筛选金额，点击输入框外进行筛选",placement:"right"}},[e("el-input-number",{ref:"ipt1",attrs:{"controls-position":"right",placeholder:"输入要筛选的金额",min:0},on:{blur:t.tip,focus:function(e){return t.$refs.ipt1.select()}},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1)],1)],1)],1),e("div",{staticClass:"show"},[t._l(10,(function(o){return 0===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v(t._s(o-1)+"XX"+t._s(n))]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),t._l(10,(function(o){return 1===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v(t._s(o-1)+"X"+t._s(n)+"X")]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),t._l(10,(function(o){return 2===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v(t._s(o-1)+t._s(n)+"XX")]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),t._l(10,(function(o){return 3===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v("X"+t._s(o-1)+t._s(n)+"X")]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),t._l(10,(function(o){return 4===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v("XX"+t._s(o-1)+t._s(n))]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),t._l(10,(function(o){return 5===t.flag?e("el-row",{key:o},t._l(t.datas[t.flag][o-1],(function(s,n){return e("el-col",{key:n},[e("div",{style:{opacity:s<=t.money?0:1}},[e("p",[t._v("X"+t._s(o-1)+"X"+t._s(n))]),e("span",[t._v(t._s(s-t.money))])])])})),1):t._e()})),e("div",{staticClass:"total"},[t._v(" 此页数目："+t._s(t.total[t.flag])+"   全部数目："+t._s(t.total[0]+t.total[1]+t.total[2]+t.total[3]+t.total[4]+t.total[5])+" ")])],2)])},V=[],Y={name:"Filtery",components:{},data(){return{later:!0,ymd:"",datas:[],flag:0,money:10}},created(){let{ymd:t}=this.getTime(new Date);this.ymd=t,this.datas=JSON.parse(localStorage.getItem(this.ymd)).datas,console.log("Filter获取数据了",this.datas)},activated(){this.datas=JSON.parse(localStorage.getItem(this.ymd)).datas},mounted(){this.$bus.$on("updateDatas_2",(t=>{this.datas=t,console.log("Filter收到数据了",this.datas)}))},computed:{total(){const t=this.datas,e=[0,0,0,0,0,0];return t.forEach(((t,o)=>{t.forEach((t=>{t.forEach((t=>{t>this.money&&(e[o]+=t-this.money)}))}))})),e}},methods:{tip(){this.$notify({message:`以上是金额比 ${this.money} 多(不包括 ${this.money} )的号码，显示的数目是比\n          ${this.money}多出来的。`,type:"info",position:"top-right",duration:3e3})},getTime(t){let e=l(t.getMonth()+1),o=l(t.getDate()),s=l(t.getHours()),n=l(t.getMinutes()),i=l(t.getSeconds()),a=s+":"+n+":"+i,r=t.getFullYear()+"-"+e+"-"+o;return{ymd:r,ymdhms:a};function l(t){return t>=0&&t<=9?"0"+t:t}}}},Q=Y,P=(0,m.Z)(Q,B,V,!1,null,"c3ea542a",null),W=P.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"index"},[t._v(" "+t._s(t.zi[t.flag])+" ")])},K=[],R={name:"Index",data(){return{flag:0,zi:["恭喜发财","心想事成","财源广进","身体健康"],interval:0}},mounted(){this.interval=setInterval((()=>{this.flag=(this.flag+1)%this.zi.length}),2500),this.$message({type:"warning",message:"仅支持二字定",center:!0,duration:2e3,offset:70})},beforeDestroy(){clearInterval(this.interval)}},U=R,tt=(0,m.Z)(U,G,K,!1,null,"4a93c659",null),et=tt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{style:{textAlign:"center",fontWeight:900}},[t._v(" 使用提示(鼠标往下滑)")]),t._m(0),t._m(1),e("el-divider"),t._m(2),t._m(3),e("el-divider"),t._m(4),t._m(5),e("el-divider"),t._m(6),t._m(7),e("el-divider"),t._m(8),t._m(9),e("el-divider"),t._m(10),e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 选择两个位置，然后输入选中位置的合数和金额，下注。 ")]),e("el-divider"),t._m(11),e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 选择一个位置，然后输入选中位置号码和金额，下注。全数号码有几种（全=0123456789）：18XX全(18头全尾)，X18X全，XX18:全，全XX18(全头18尾)，对应在千百十个位选择号码。 ")]),e("el-divider"),t._m(12)],1)},st=[function(){var t=this,e=t._self._c;return e("p",[t._v("1. "),e("strong",[t._v("回车键(Enter)")]),t._v("的使用")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 输完金额，按回车可以"),e("strong",[t._v("下注")]),t._v("；输完号码，按回车可以"),e("strong",[t._v("进入下一个输入框")]),t._v("。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("2. "),e("strong",[t._v("X 字母")]),t._v("快捷输入（在"),e("strong",[t._v("速打")]),t._v("中适用）")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 输入"),e("strong",[t._v("加号(+)")]),t._v("，自动转为"),e("strong",[t._v("两个X")]),t._v("，即"),e("strong",[t._v("XX")]),t._v("；输入"),e("strong",[t._v("减号(-)")]),t._v("或者"),e("strong",[t._v("任意字母(A-z)")]),t._v("自动转成"),e("strong",[t._v("一个X。")]),t._v("即 + => XX，- => X。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v(" 3. "),e("strong",[t._v("英文冒号(:)")]),t._v("快捷输入（在"),e("strong",[t._v("快选")]),t._v("中适用） ")])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 输入"),e("strong",[t._v("空格、中英文句号(. 。)、中英文分号(; ；)、中文冒号(：)")]),t._v("，自动转为"),e("strong",[t._v("英文冒号(:)")]),t._v("。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("4. "),e("strong",[t._v("快打")])])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 规范输入："),e("strong",[t._v("8XX8, 8X8X, 88XX, X88X, X8X8, XX88")])])},function(){var t=this,e=t._self._c;return e("p",[t._v(" 5. "),e("strong",[t._v("快选")])])},function(){var t=this,e=t._self._c;return e("p",{staticStyle:{"text-indent":"2em"}},[t._v(" 规范输入"),e("strong",[t._v("（相邻两个位置有数字，则用英文冒号(:)隔开他们）：18XX18, 18X18X, 18:18XX, X18:18X, X18X18, XX18:18")]),t._v("。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("6. "),e("strong",[t._v("合数")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("7. "),e("strong",[t._v("全数")])])},function(){var t=this,e=t._self._c;return e("p",[t._v(" 8. "),e("strong",[t._v(" 输入号码、全数或合数等，可以重复输入一个数字。如4455:0015XX。")])])}],nt={name:"Tip",data(){return{}}},it=nt,at=(0,m.Z)(it,ot,st,!1,null,"787fbc36",null),rt=at.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("el-card",{staticClass:"card",attrs:{"body-style":{padding:"0px"}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:-1===t.flag,expression:"flag===-1"}],attrs:{src:o(677)}}),e("img",{directives:[{name:"show",rawName:"v-show",value:1===t.flag,expression:"flag===1"}],staticClass:"right",attrs:{src:o(4658)}})]),e("el-button-group",{staticClass:"btn",attrs:{size:"small"}},[e("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:function(e){t.flag=-t.flag}}}),e("el-button",{attrs:{icon:"el-icon-arrow-right"},on:{click:function(e){t.flag=-t.flag}}})],1)],1)},ct=[],ut={name:"System",data(){return{flag:-1}}},ft=ut,mt=(0,m.Z)(ft,lt,ct,!1,null,"01f55bdc",null),ht=mt.exports,pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"test"},[t._v(" "+t._s(t.obj)+" "+t._s(t.num[0])+"---"+t._s(t.num[1])+" "),e("br"),t._v(" "+t._s(t.sum[0])+"---"+t._s(t.sum[1])+" "),e("br"),e("br"),t._v(" "+t._s(t.list[0].name)+"---"+t._s(t.list[1].name)+" "),e("br"),e("button",{on:{click:function(e){return t.change()}}},[t._v("change")]),e("button",{on:{click:function(e){return t.change2()}}},[t._v("change2")]),e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[e("el-form-item",{attrs:{label:"审批人"}},[e("el-input",{attrs:{placeholder:"审批人"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"}},[t._v("查询")])],1)],1),t._v(" 输入号码："),e("el-input",{attrs:{type:"text",clearable:"",placeholder:"输入单组号码，如X8X8"},on:{input:t.setValue},model:{value:t.haoMa,callback:function(e){t.haoMa=e},expression:"haoMa"}}),t._v(" 号码按' : '拆解："+t._s(t.haoMa.split(/:/g))),e("br"),t._v(" 号码按'X'拆解："+t._s(t.haoMa.split(/X/gi))),e("br"),t._v(" 号码按':或X'拆解："+t._s(t.haoMa.split(/X|:/gi))+" "),e("br"),e("br"),e("br"),e("el-button",{on:{click:t.d}},[t._v("重置数据")]),t._l(10,(function(o,s){return e("div",[t._v("o:"+t._s(o)+"--i:"+t._s(s))])}))],2)},dt=[],_t={name:"Test",data(){return{obj:[],num:[0,4],sum:[0,4],list:[{name:"小猪"},{name:"xxx"}],haoMa:"XX67:80"}},methods:{setValue(){let t=this.haoMa;/\-|[A-z]/g.test(t)&&(this.haoMa=t.replace(/\-|[A-z]/g,"X")),/\+/g.test(t)&&(this.haoMa=t.replace(/\+/g,"XX")),/\s|\/|\./g.test(t)&&(this.haoMa=t.replace(/\s|\/|\./g,":"))},change(){this.obj.push(0),this.num[0]=9,this.sum[0]=8,this.list[0].name="ooo",console.log(this.obj,this.num,this.sum)},change2(){this.obj.push(0);let t=this.num;t[0]=1e3},d(){console.log("组件被创建了")}},mounted(){let t="1XX6",e=t.split(/[A-z]/);console.log(e,parseInt(t),!1);let o=[2,3,5,6,78,8],s=o.filter((t=>t>5));console.log(s);let n=/^[0-9]{1}XX[0-9]{1}$|^X[0-9]{1}X[0-9]{1}$|^[0-9]{1}X[0-9]{1}X$|^XX[0-9]{1}[0-9]{1}$|^[0-9]{1}[0-9]{1}XX$|^X[0-9]{1}[0-9]{1}X$/i;console.log("reg1匹配：",n.test("xx16 "));let i=/^[0-9]+$|^(\s){0}$/g;console.log(i.test("786"))}},yt=_t,gt=(0,m.Z)(yt,pt,dt,!1,null,"4e0b6e0c",null),vt=gt.exports;const Xt=new v.Z({mode:"history",routes:[{name:"ComNum",path:"/com-num",component:N},{name:"QuickHit",path:"/quick-hit",component:H},{name:"Static",path:"/static",component:J},{name:"Filter",path:"/filter",component:W},{path:"/",component:et},{path:"/tip",component:rt},{path:"/system",component:ht},{path:"/test",component:vt}]});var bt=Xt;s["default"].config.productionTip=!1,s["default"].use(v.Z),s["default"].use(i()),new s["default"]({el:"#app",render:t=>t(g),router:bt,beforeCreate(){s["default"].prototype.$bus=this}}).$mount("#app")},677:function(t,e,o){t.exports=o.p+"img/SystemArchitectureDiagram.97f3b19e.png"},4658:function(t,e,o){t.exports=o.p+"img/SystemDataFlowDiagram6.e6edb0a2.png"}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={id:s,loaded:!1,exports:{}};return t[s](i,i.exports,o),i.loaded=!0,i.exports}o.m=t,function(){o.amdO={}}(),function(){var t=[];o.O=function(e,s,n,i){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){o.p=""}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var u=l(o)}for(e&&e(s);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},s=self["webpackChunkMA"]=self["webpackChunkMA"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(1634)}));s=o.O(s)})();
//# sourceMappingURL=app.ef4b9f95.js.map