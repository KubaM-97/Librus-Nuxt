(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{498:function(e,t,l){"use strict";l.r(t);l(35),l(27),l(50),l(26);var r=l(94),n=Object(r.b)({props:{v:{type:Object,required:!1,default:function(){}},student:{type:Object,required:!1,default:function(){}}},setup:function(e){var t=Object(r.m)(),l=Object(r.f)(""),n=Object(r.f)("");function o(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}return Object(r.n)((function(){return e.v.fullName.$model}),(function(e){var r,m;m=e.toLowerCase().split(" "),l.value=o(m[0]),m.length>1&&(r=m[1].split("-")),n.value=m.length>1?r.length>1?"".concat(o(r[0]),"-").concat(o(r[1])):o(m[1]):"",t.commit("updateStudentProperty",{property:"firstName",value:l.value}),t.commit("updateStudentProperty",{property:"lastName",value:n.value})})),{showError:function(){e.v.fullName.$touch()}}}}),o=l(95),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-group"},[l("label",{class:["mb-2",{errorDataLabel:e.v.fullName.$invalid&&e.v.fullName.$dirty}],attrs:{for:"name"}},[e._v("\n    *"+e._s(e.$t("firstName_and_lastName"))+":\n    "),l("span",{class:["fullNameTooltip d-block",{errorDataLabel:e.v.fullName.$invalid&&e.v.fullName.$dirty}]},[e._v("\n      "+e._s(e.$t("double_lastNames_hint"))+"\n    ")])]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.v.fullName.$model,expression:"v.fullName.$model",modifiers:{trim:!0}}],class:["text-center",{errorDataInput:e.v.fullName.$invalid&&e.v.fullName.$dirty}],attrs:{type:"text",id:"name",name:"name",maxlength:"30",autocomplete:"off"},domProps:{value:e.v.fullName.$model},on:{change:e.showError,input:function(t){t.target.composing||e.$set(e.v.fullName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])}),[],!1,null,null,null);t.default=component.exports}}]);