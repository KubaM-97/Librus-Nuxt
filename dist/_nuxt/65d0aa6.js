(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,8,16,17],{457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(473))&&n.__esModule?n:{default:n};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!f(e)||t.test(e)}))}},458:function(e,t,r){"use strict";r.r(t);r(223);var n=r(94),o=Object(n.b)({name:"StudentRow",props:{student:{type:Object,required:!1,default:function(){}},orderNo:{type:Number,required:!1,default:0}},computed:{avg:function(){return this.calculateAvgGrade(this.student.grades)}}}),l=r(95),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[e.orderNo?r("td",[e._v(e._s(e.orderNo)+".")]):e._e(),e._v(" "),r("td",[e._v(e._s(e.student.lastName.toUpperCase())+" "+e._s(e.student.firstName))]),e._v(" "),r("td",e._l(e.student.grades,(function(t,n){return r("div",{key:"new_student_grade-"+n,class:[{gradeWeightColor:t.score||t.weight},e.gradeColor(t.weight)],on:{mouseenter:function(r){return e.showGradeDetails(r,t)},mouseleave:function(t){return e.hideGradeDetails(t)}}},[e._v("\n      "+e._s(t.score)+"\n    ")])})),0),e._v(" "),r("td",[e._v(e._s(e.avg))]),e._v(" "),r("td",[e.avg&&e.avg<2?r("span",{staticClass:"fire"},[e._v("\n      "+e._s(e.$t("at_risk").toUpperCase())+"\n    ")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},461:function(e,t,r){"use strict";r.r(t);var n=r(94),o=r(458),l=Object(n.b)({name:"StudentTable",props:{student:{type:Object,required:!1,default:function(){}}},components:{StudentRow:o.default}}),f=r(95),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"mb-3"},[r("tbody",[r("StudentRow",{attrs:{student:e.student}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{StudentRow:r(458).default})},465:function(e,t,r){"use strict";var n=r(94),o=r(471),l=o.helpers.regex("fullName",/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)(-[A-ZĄĆĘŁŃÓŚŹŻ]?[a-ząćęłńóśźż]+)?$/),f=o.helpers.regex("firstName",/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/),c=o.helpers.regex("lastName",/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/),d=o.helpers.regex("pesel",/^[0-9]{11}$/),m=o.helpers.regex("phone",/^([0-9]{7}|[0-9]{9})$/),v=o.helpers.regex("email",/^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-z]+$/),h=o.helpers.regex("streetName",/^[0-9A-ZĄĆĘŁŃÓŚŹŻ][0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]*$/),y=o.helpers.regex("streetNr",/^[0-9]+[a-zA-Z]?(\/?[0-9]*[a-zA-Z]?)?$/),_=o.helpers.regex("flat",/^[0-9]+[a-zA-Z]?$/),x=o.helpers.regex("postCode",/^[0-9]{2}-[0-9]{3}$/),P=o.helpers.regex("city",/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*( (- )?[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/);t.a=Object(n.b)({validations:{fullName:{required:o.required,fullName:l},student:{firstName:{firstName:f},lastName:{lastName:c},pesel:{pesel:d},phone:{phone:m},email:{email:v},address:{streetName:{streetName:h},streetNr:{streetNr:y},flatNr:{flatNr:_},postCode:{postCode:x},city:{city:P}},mother:{firstName:{firstName:f},lastName:{lastName:c},phone:{phone:m},email:{email:v}},father:{firstName:{firstName:f},lastName:{lastName:c},phone:{phone:m},email:{email:v}}}}})},466:function(e,t,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(130).default)("c130ca9e",content,!0,{sourceMap:!1})},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return z.default}}),t.helpers=void 0;var n=M(r(472)),o=M(r(475)),l=M(r(476)),f=M(r(477)),c=M(r(478)),d=M(r(479)),m=M(r(480)),v=M(r(481)),h=M(r(482)),y=M(r(483)),_=M(r(484)),x=M(r(485)),P=M(r(486)),O=M(r(487)),j=M(r(488)),w=M(r(489)),$=M(r(490)),S=M(r(491)),A=M(r(492)),N=M(r(493)),z=M(r(494)),C=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(457));function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=C},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},473:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(474).withParams:r(311).withParams;t.default=n}).call(this,r(184))},474:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(87))},475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("numeric",/^[0-9]*$/);t.default=n},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},479:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},482:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},483:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},485:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(457);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},494:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(457).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},495:function(e,t,r){var content=r(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(130).default)("515bfa37",content,!0,{sourceMap:!1})},503:function(e,t,r){"use strict";r(466)},504:function(e,t,r){var n=r(129)(!1);n.push([e.i,".newStudentPanelButtons{width:90%}.newStudentPanelButtons button{font-size:14px;color:#f5f5f5}.newStudentPanelButtons button.submit{background-color:#067bdb}.newStudentPanelButtons button.submit:hover{box-shadow:.3px .3px 1px 5px #02457c}.newStudentPanelButtons button.cancel{background-color:#db1526}.newStudentPanelButtons button.cancel:hover{box-shadow:.3px .3px 1px 5px #77131c}",""]),e.exports=n},509:function(e,t,r){"use strict";r(495)},510:function(e,t,r){var n=r(129)(!1);n.push([e.i,".confirm{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:15px;width:500px;max-width:80%;height:200px;background-color:#0e0d0d;box-shadow:3px 3px 30px 5px #00c3ff}.confirm button{color:#faf5f5;border-radius:10px}.confirm button:first-of-type{background-color:#ff3131}.confirm button:last-of-type{background-color:#05a105}@media (max-width:768px){.confirm button{margin:0 20px}}",""]),e.exports=n},522:function(e,t,r){"use strict";r.r(t);var n=r(94),o=Object(n.b)({name:"FormActions"}),l=(r(503),r(95)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newStudentPanelButtons mt-4 text-right"},[r("button",{staticClass:"btn btn-lg ml-2 px-2 py-1 cancel",attrs:{type:"button",name:"addStudentCancel"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n    "+e._s(e.$t("cancel"))+"\n  ")]),e._v(" "),r("button",{staticClass:"btn btn-lg ml-2 px-2 py-1 font-weight-bold submit",attrs:{name:"addStudent"},on:{click:function(t){return e.$emit("submit")}}},[e._v("\n    "+e._s(e.$t("add_student"))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},525:function(e,t,r){"use strict";r.r(t);var n=r(94),o=Object(n.b)({name:"ClosePrompt",setup:function(){var e=Object(n.l)(),path=Object(n.f)(""),t=Object(n.f)(!1);return{showPrompt:t,quit:function(){e.push({path:path.value.path})},stay:function(){t.value=!1},preventLeaving:function(e){t.value=!0,path.value=e}}}}),l=(r(509),r(95)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.showPrompt,expression:"showPrompt"}],staticClass:"confirm py-4 text-center"},[r("p",{staticClass:"mb-4"},[e._v(e._s(e.$t("close_warning")))]),e._v(" "),r("div",{staticClass:"d-flex justify-content-around"},[r("button",{staticClass:"px-3 py-1",attrs:{name:"showConfirmStay"},on:{click:e.stay}},[e._v("\n      "+e._s(e.$t("close_stay"))+"!\n    ")]),e._v(" "),r("button",{staticClass:"px-3 py-1",attrs:{name:"showConfirmQuit"},on:{click:e.quit}},[e._v("\n      "+e._s(e.$t("close_quit"))+"!\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},541:function(e,t,r){"use strict";r.r(t);r(12),r(70);var n=r(94),o=(r(13),r(14),r(10),r(15),r(3)),l=r(30),f=(r(83),r(37),r(27),r(50),r(38),r(9),r(522)),c=r(461),d=r(537),m=r(465);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=Object(n.b)({name:"AddStudentView",components:{FormActions:f.default,StudentTable:c.default,PersonalStudentData:d.default},mixins:[m.a],setup:function(e,t){var r=t.root,o=Object(n.m)(),f=Object(n.l)(),c=Object(n.f)(1),d=Object(n.a)((function(){return o.state.student})),m=Object(n.f)(""),v=Object(n.f)(null),y=Object(n.a)((function(){return o.getters.loggedInUser.group})).value;var _=Object(n.i)().$http;function x(){return(x=Object(l.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$invalid){e.next=4;break}return t.$touch(),this.$toast.error(r.$t("failed_form_message")),e.abrupt("return");case 4:return(n=h({},d.value)).grades=n.grades.filter((function(e){return e.score&&e.weight})),this.$toast.show(r.$t("adding_student_in_progress")),e.prev=7,e.next=10,_.$post("/api/students/new",{student:n,group:y},{headers:{Authorization:r.$auth.strategy.token.get()}});case 10:this.$toast.success(r.$t("successfully_added_new_student")),o.commit("resetStudent"),f.push({path:"/group/".concat(y)}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),console.error(e.t0),this.$toast.error(r.$t("failed_to_add_new_student"));case 19:case"end":return e.stop()}}),e,this,[[7,15]])})))).apply(this,arguments)}return{handleCancel:function(e){m.value="",o.commit("resetStudent"),e.$reset(),this.$refs.PersonalStudentData.$refs.PersonalStudentDataForm.showAdditionalDataForm=!1},handleSubmit:function(e){return x.apply(this,arguments)},getNewStudentNameHandler:function(e){var t=e.split(" ").reverse().join();d.value.name=t},student:d,fullName:m,gradesLength:c,PersonalStudentData:v}}}),_=y,x=r(95),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("PersonalStudentData",{ref:"PersonalStudentData",attrs:{v:e.$v,student:e.student,gradesLength:e.gradesLength},on:{getNewStudentName:e.getNewStudentNameHandler}}),e._v(" "),r("StudentTable",{staticClass:"mt-4",attrs:{student:e.student}}),e._v(" "),r("FormActions",{on:{cancel:function(t){return e.handleCancel(e.$v)},submit:function(t){return e.handleSubmit(e.$v)}}})],1)}),[],!1,null,null,null),P=component.exports;installComponents(component,{StudentTable:r(461).default});var O=r(525),j=Object(n.b)({name:"AddStudent",components:{AddStudentView:P,ClosePrompt:O.default},head:function(){return{title:this.$t("student_add_page_title")}},beforeRouteLeave:function(e,t,r){var n=this.$store.state.student.grades,o=n.some((function(e){return e.score^e.weight})),l=n.some((function(e){return!e.score&&!e.weight&&e.description})),f=o||l,c=this.$refs.ClosePrompt;!c.showPrompt&&f?c.preventLeaving(e):(this.$store.commit("resetStudent"),r())}}),w=j,$=Object(x.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AddStudentView"),e._v(" "),r("ClosePrompt",{ref:"ClosePrompt"})],1)}),[],!1,null,null,null);t.default=$.exports}}]);