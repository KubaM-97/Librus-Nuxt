(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{492:function(t,o,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("515bfa37",content,!0,{sourceMap:!1})},506:function(t,o,n){"use strict";n(492)},507:function(t,o,n){var e=n(129)(!1);e.push([t.i,".confirm{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:15px;width:500px;max-width:80%;height:200px;background-color:#0e0d0d;box-shadow:3px 3px 30px 5px #00c3ff}.confirm button{color:#faf5f5;border-radius:10px}.confirm button:first-of-type{background-color:#ff3131}.confirm button:last-of-type{background-color:#05a105}@media (max-width:768px){.confirm button{margin:0 20px}}",""]),t.exports=e},522:function(t,o,n){"use strict";n.r(o);var e=n(94),r=Object(e.b)({name:"ClosePrompt",setup:function(){var t=Object(e.l)(),path=Object(e.f)(""),o=Object(e.f)(!1);return{showPrompt:o,quit:function(){t.push({path:path.value.path})},stay:function(){o.value=!1},preventLeaving:function(t){o.value=!0,path.value=t}}}}),c=(n(506),n(95)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPrompt,expression:"showPrompt"}],staticClass:"confirm py-4 text-center"},[n("p",{staticClass:"mb-4"},[t._v(t._s(t.$t("close_warning")))]),t._v(" "),n("div",{staticClass:"d-flex justify-content-around"},[n("button",{staticClass:"px-3 py-1",attrs:{name:"showConfirmStay"},on:{click:t.stay}},[t._v("\n      "+t._s(t.$t("close_stay"))+"!\n    ")]),t._v(" "),n("button",{staticClass:"px-3 py-1",attrs:{name:"showConfirmQuit"},on:{click:t.quit}},[t._v("\n      "+t._s(t.$t("close_quit"))+"!\n    ")])])])}),[],!1,null,null,null);o.default=component.exports}}]);