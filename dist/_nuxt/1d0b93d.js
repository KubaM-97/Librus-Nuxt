(window.webpackJsonp=window.webpackJsonp||[]).push([[22,11],{473:function(t,e,n){t.exports=n.p+"img/loader.25fad3b.gif"},475:function(t,e,n){"use strict";n.r(e);var r=n(94),c=Object(r.b)({props:{fetchState:{type:Object,required:!0,default:function(){}}}}),l=n(95),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.fetchState.error?r("div",{staticClass:"mt-4"},[t._v("\n  "+t._s(t.$t("failed_to_fetch_students_list"))+"\n  "),r("button",{staticClass:"ml-3 px-1 py-1 btn btn-small refreshBtn",on:{click:function(e){return t.$emit("fetch")}}},[t._v("\n    "+t._s(t.$t("try_again"))+"\n  ")])]):t.fetchState.pending?r("div",{staticClass:"image"},[r("img",{attrs:{src:n(473),alt:"loading..."}})]):t._e()}),[],!1,null,null,null);e.default=component.exports},546:function(t,e,n){"use strict";n.r(e);var r=n(30),c=(n(83),n(26),n(38),n(27),n(39),n(528)),l=n(94),o=Object(l.b)({name:"StudentView",components:{StudentPanel:c.default},head:function(){return{title:this.$t("student_page_title",{student:"".concat(this.student.firstName," ").concat(this.student.lastName)})}},setup:function(t,e){var n=e.root,c=Object(l.m)(),o=Object(l.k)(),f=Object(l.l)(),d=o.value.params.name,h=Object(l.f)({}),_=Object(l.i)().$http,m=Object(l.j)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.$post("/api/students/".concat(d),{group:c.getters.loggedInUser.group},{headers:{Authorization:n.$auth.strategy.token.get()}});case 3:h.value=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n.$toast.error(n.$t("failed_to_fetch_student_data"));case 9:return t.prev=9,o.value.query.edit&&f.replace({query:null}),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))).fetch;return{student:h,fetch:m}}}),f=n(95),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("FetchingLoader",{attrs:{fetchState:t.$fetchState},on:{fetch:t.fetch}}),t._v(" "),t.$fetchState.pending||t.$fetchState.error?t._e():n("StudentPanel",{attrs:{student:t.student},on:{fetch:t.fetch}})],1)}),[],!1,null,null,null),d=component.exports;installComponents(component,{FetchingLoader:n(475).default,StudentPanel:n(528).default});var h=Object(l.b)({name:"Student",components:{StudentView:d}}),_=Object(f.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("StudentView")}),[],!1,null,null,null);e.default=_.exports}}]);