(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b54069"],{"0a49":function(t,e,n){"use strict";var r=n("7e3e"),i=n.n(r);i.a},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),o=n("6a99"),u=n("69a8"),s=n("c69a"),c=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?c:function(t,e){if(t=a(t),e=o(e,!0),s)try{return c(t,e)}catch(n){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},2139:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container",attrs:{align:"right"}},[n("el-input",{staticClass:"margin",staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"请输入用户手机号"},model:{value:t.listQuery.userPhone,callback:function(e){t.$set(t.listQuery,"userPhone",e)},expression:"listQuery.userPhone"}}),t._v(" "),n("el-date-picker",{staticClass:"margin",attrs:{type:"datetime",placeholder:"开始时间","value-format":"yyyy-MM-dd HH:mm:ss",size:"small"},model:{value:t.listQuery.start,callback:function(e){t.$set(t.listQuery,"start",e)},expression:"listQuery.start"}}),t._v(" "),n("el-date-picker",{staticClass:"margin",attrs:{type:"datetime",placeholder:"结束时间","value-format":"yyyy-MM-dd HH:mm:ss",size:"small"},model:{value:t.listQuery.end,callback:function(e){t.$set(t.listQuery,"end",e)},expression:"listQuery.end"}}),t._v(" "),n("el-button",{staticClass:"button",attrs:{size:"small",round:"",plain:"",icon:"el-icon-search"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1),t._v(" "),n("Magnify",{attrs:{vSrc:t.imgSrc,vShow:t.imgShow},on:{close:t.closeBigImg}}),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",stripe:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",prop:"id",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"会员账号",prop:"userPhone"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"会员昵称",prop:"user_nick_name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"出发位置"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.type?n("span",[t._v(t._s(e.row.depart))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"终点位置"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.type?n("span",[t._v(t._s(e.row.destination))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"订单金额",prop:"money"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"下单时间",prop:"create_time"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"退单时间",prop:"retreat_time"}})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.count>0,expression:"count > 0"}],attrs:{total:t.count,page:t.listQuery.page,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.getList}})],1)},i=[],a=n("28e1"),o=n("333d"),u=n("f158"),s={components:{Pagination:o["a"],Magnify:u["a"]},data:function(){return{imgSrc:"",imgShow:!1,currencyList:[],dialogFormVisible:!1,listQuery:{page:1,size:10,userPhone:"",start:"",end:""},ownerList:[],count:0,temp:{},title:"",listLoading:!1,list:[],id:null,activateId:null,orderdetail:[],detailDialog:!1,detailData:{},shipmentsDialog:!1,shipForm:{id:"",vid:""},rules:{vid:[{required:!0,message:"请选择车主",trigger:"blur"}]}}},created:function(){this.getList()},methods:{enlargeImg:function(t){this.imgSrc=t,this.imgShow=!0},closeBigImg:function(){this.imgShow=!1},getList:function(){var t=this;this.listLoading=!0,null==this.listQuery.end?this.listQuery.end="":null==this.listQuery.start&&(this.listQuery.start=""),Object(a["j"])(this.listQuery).then(function(e){t.list=e.data,t.count=e.count,t.listLoading=!1})}}},c=s,l=(n("a592"),n("2877")),d=Object(l["a"])(c,r,i,!1,null,"451d3b41",null);e["default"]=d.exports},"28e1":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return o}),n.d(e,"m",function(){return u}),n.d(e,"o",function(){return s}),n.d(e,"k",function(){return c}),n.d(e,"p",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"n",function(){return p}),n.d(e,"h",function(){return f}),n.d(e,"g",function(){return m}),n.d(e,"f",function(){return g}),n.d(e,"l",function(){return h}),n.d(e,"j",function(){return b}),n.d(e,"b",function(){return v}),n.d(e,"c",function(){return y});var r=n("b775");function i(){return Object(r["a"])({url:"admin/Vip/classifyList",method:"get"})}function a(t){return Object(r["a"])({url:"admin/Vip/classifyDel",method:"get",params:{id:t}})}function o(){return Object(r["a"])({url:"admin/Vip/getDistribution",method:"get"})}function u(t){return Object(r["a"])({url:"admin/Vip/setDistribution",method:"get",params:t})}function s(t){return Object(r["a"])({url:"admin/Vip/classifyEdit",method:"get",params:t})}function c(t){return Object(r["a"])({url:"admin/user/bill",method:"get",params:t})}function l(t){return Object(r["a"])({url:"admin/Classify/uploadClassify",method:"post",data:t})}function d(t){return Object(r["a"])({url:"admin/Vip/orderList",method:"get",params:t})}function p(t){return Object(r["a"])({url:"admin/Vip/allocationOrder",method:"get",params:t})}function f(t){return Object(r["a"])({url:"admin/Vip/consultList",method:"get",params:t})}function m(t){return Object(r["a"])({url:"admin/Vip/consultDel",method:"get",params:{id:t}})}function g(t){return Object(r["a"])({url:"admin/Vip/consultAdd",method:"post",data:t})}function h(t){return Object(r["a"])({url:"admin/Car/orderList",method:"get",params:t})}function b(t){return Object(r["a"])({url:"admin/Car/orderRetreat",method:"get",params:t})}function v(){return Object(r["a"])({url:"admin/Car/costGet",method:"get"})}function y(t){return Object(r["a"])({url:"admin/Car/costSet",method:"post",data:t})}},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var r=u(),i=t-r,s=20,c=0;e="undefined"===typeof e?500:e;var l=function t(){c+=s;var u=Math.easeInOutQuad(c,r,i,e);o(u),c<e?a(t):n&&"function"===typeof n&&n()};l()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},l=c,d=(n("396c"),n("2877")),p=Object(d["a"])(l,r,i,!1,null,"078961d9",null);e["a"]=p.exports},"396c":function(t,e,n){"use strict";var r=n("9ee7"),i=n.n(r);i.a},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var a,o=e.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},"7e3e":function(t,e,n){},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"9ee7":function(t,e,n){},a592:function(t,e,n){"use strict";var r=n("af87"),i=n.n(r);i.a},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),a=n("79e5"),o=n("fdef"),u="["+o+"]",s="​",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),d=function(t,e,n){var i={},u=a(function(){return!!o[t]()||s[t]()!=s}),c=i[t]=u?e(p):o[t];n&&(i[n]=c),r(r.P+r.F*u,"String",i)},p=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},af87:function(t,e,n){},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("2d95"),o=n("5dbc"),u=n("6a99"),s=n("79e5"),c=n("9093").f,l=n("11e9").f,d=n("86cc").f,p=n("aa77").trim,f="Number",m=r[f],g=m,h=m.prototype,b=a(n("2aeb")(h))==f,v="trim"in String.prototype,y=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var n,r,i,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var o,s=e.slice(2),c=0,l=s.length;c<l;c++)if(o=s.charCodeAt(c),o<48||o>i)return NaN;return parseInt(s,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(b?s(function(){h.valueOf.call(n)}):a(n)!=f)?o(new g(y(e)),n,m):y(e)};for(var _,w=n("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(g,_=w[S])&&!i(m,_)&&d(m,_,l(g,_));m.prototype=h,h.constructor=m,n("2aba")(r,f,m)}},f158:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.vShow,expression:"vShow"}],staticClass:"originImgBg",on:{click:function(e){return t.close()}}},[n("div",{staticClass:"box"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.vSrc,alt:"",title:"点击缩小"}})])])])},i=[],a={name:"OriginImg",props:["vSrc","vShow"],methods:{close:function(){this.$emit("close")}}},o=a,u=(n("0a49"),n("2877")),s=Object(u["a"])(o,r,i,!1,null,"92616786",null);e["a"]=s.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);