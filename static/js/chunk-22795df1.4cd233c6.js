(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22795df1"],{"28e1":function(t,r,e){"use strict";e.d(r,"a",function(){return u}),e.d(r,"d",function(){return i}),e.d(r,"e",function(){return a}),e.d(r,"m",function(){return o}),e.d(r,"o",function(){return c}),e.d(r,"k",function(){return d}),e.d(r,"p",function(){return s}),e.d(r,"i",function(){return l}),e.d(r,"n",function(){return m}),e.d(r,"h",function(){return f}),e.d(r,"g",function(){return p}),e.d(r,"f",function(){return b}),e.d(r,"l",function(){return h}),e.d(r,"j",function(){return j}),e.d(r,"b",function(){return O}),e.d(r,"c",function(){return g});var n=e("b775");function u(){return Object(n["a"])({url:"admin/Vip/classifyList",method:"get"})}function i(t){return Object(n["a"])({url:"admin/Vip/classifyDel",method:"get",params:{id:t}})}function a(){return Object(n["a"])({url:"admin/Vip/getDistribution",method:"get"})}function o(t){return Object(n["a"])({url:"admin/Vip/setDistribution",method:"get",params:t})}function c(t){return Object(n["a"])({url:"admin/Vip/classifyEdit",method:"get",params:t})}function d(t){return Object(n["a"])({url:"admin/user/bill",method:"get",params:t})}function s(t){return Object(n["a"])({url:"admin/Classify/uploadClassify",method:"post",data:t})}function l(t){return Object(n["a"])({url:"admin/Vip/orderList",method:"get",params:t})}function m(t){return Object(n["a"])({url:"admin/Vip/allocationOrder",method:"get",params:t})}function f(t){return Object(n["a"])({url:"admin/Vip/consultList",method:"get",params:t})}function p(t){return Object(n["a"])({url:"admin/Vip/consultDel",method:"get",params:{id:t}})}function b(t){return Object(n["a"])({url:"admin/Vip/consultAdd",method:"post",data:t})}function h(t){return Object(n["a"])({url:"admin/Car/orderList",method:"get",params:t})}function j(t){return Object(n["a"])({url:"admin/Car/orderRetreat",method:"get",params:t})}function O(){return Object(n["a"])({url:"admin/Car/costGet",method:"get"})}function g(t){return Object(n["a"])({url:"admin/Car/costSet",method:"post",data:t})}},7250:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"filter-container"},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"200px"}},[e("el-form-item",{attrs:{label:"首次充值发奖比例%",prop:"rate"}},[e("el-input",{model:{value:t.ruleForm.rate,callback:function(r){t.$set(t.ruleForm,"rate",r)},expression:"ruleForm.rate"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1)])},u=[],i=e("28e1"),a={data:function(){return{ruleForm:{rate:""},rules:{rate:[{required:!0,message:"请输入比例!",trigger:"blur"}]}}},created:function(){var t=this;Object(i["e"])().then(function(r){t.ruleForm.rate=r.data.rate})},methods:{submitForm:function(t){var r=this;this.$refs[t].validate(function(t){if(!t)return!1;Object(i["m"])(r.ruleForm).then(function(t){})})},resetForm:function(t){this.$refs[t].resetFields()}}},o=a,c=(e("82d6"),e("2877")),d=Object(c["a"])(o,n,u,!1,null,null,null);r["default"]=d.exports},"82d6":function(t,r,e){"use strict";var n=e("9815"),u=e.n(n);u.a},9815:function(t,r,e){}}]);