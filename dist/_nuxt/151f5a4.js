(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{464:function(t,e,r){var content=r(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(130).default)("53be868d",content,!0,{sourceMap:!1})},468:function(t,e,r){"use strict";r(464)},469:function(t,e,r){var n=r(129)(!1);n.push([t.i,".errorDataLabel{text-shadow:5px 0 20px #f0351d,-5px 0 20px #f0351d,0 5px 20px #f0351d,0 -5px 20px #f0351d}.errorDataInput{box-shadow:1px 1px 5px #f0351d,-1px -1px 5px #f0351d,-1px 1px 5px #f0351d,1px -1px 5px #f0351d;border:1px solid #f0351d}input:focus{border:2px solid #a5cda5;box-shadow:0 0 3px 2px hsla(0,0%,80%,.9)}",""]),t.exports=n},502:function(t,e,r){"use strict";r.r(e);r(71);var n=r(94),o=Object(n.b)({props:{v:{type:Object,required:!1,default:function(){}},student:{type:Object,required:!1,default:function(){}}},setup:function(t){var e=t.v,r=Object(n.m)();return{orderedStudentProperties:Object(n.f)(["pesel","phone","email","address","mother","father"]),setStudentState:function(t,n,o){e.student.$touch(),r.commit("updateStudentProperty",{property:n,value:t.trim(),subProperty:o})}}}}),d=(r(468),r(95)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},t._l(t.orderedStudentProperties,(function(e){return r("div",{key:"new_student_property_"+e,staticClass:"row mt-2 mb-3"},[r("label",{class:["col-12 d-block small",{errorDataLabel:t.v.student[e].$invalid&&t.v.student[e].$dirty}]},[t._v(t._s(t.$t(e)))]),t._v(" "),"object"!=typeof t.student[e]&&null!==t.student[e]?[r("input",{staticClass:"col-10",class:{errorDataInput:t.v.student[e].$invalid&&t.v.student[e].$dirty},attrs:{type:"text",placeholder:t.$t(e),name:e,id:e,autocomplete:"off"},domProps:{value:t.student[e]},on:{change:function(r){return t.setStudentState(r.target.value,e)}}}),t._v(" "),t.v.student[e].$invalid&&t.v.student[e].$dirty?r("span",{staticClass:"col-12 d-block small errorDataLabel mt-1"},[t._v("\n        "+t._s(t.$t(e+"_error"))+"\n      ")]):t._e()]:t._l(t.student[e],(function(n,o){return[r("input",{key:"new_student_property_input_"+o,staticClass:"col-10",class:{errorDataInput:t.v.student[e][o].$invalid&&t.v.student[e][o].$dirty},attrs:{type:"text",placeholder:t.$t(""+o),name:e[o],id:e[o],autocomplete:"off"},domProps:{value:t.student[e][o]},on:{change:function(r){return t.setStudentState(r.target.value,e,o)}}}),t._v(" "),t.v.student[e][o].$invalid&&t.v.student[e][o].$dirty?r("span",{key:"new_student_property_error_"+o,staticClass:"col-12 d-block small errorDataLabel mt-1"},[t._v("\n        "+t._s(t.$t(e+"_"+o+"_error"))+"\n      ")]):t._e()]}))],2)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);