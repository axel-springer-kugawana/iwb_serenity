(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{135:function(t,e,i){"use strict";i.r(e);var s={props:{small:{default:!1},icons:{default:!0},disabled:{default:!1},ariaDisabled:{default:!1},indeterminate:{default:!1},waiting:{default:!1},togglePosition:{required:!1,default:"left"}},data:function(){return{id:"toggle-"+(1e6*Math.random()).toFixed(0)}},watch:{indeterminate:function(t){this.setIndeterminate(t)}},mounted:function(){this.setIndeterminate()},methods:{setIndeterminate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.indeterminate;this.$refs.toggle.indeterminate=t}}},a=i(2),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("label",{staticClass:"toggle-label",class:{"toggle--margin-left":"right"==t.togglePosition,"toggle--margin-right":"right"!=t.togglePosition},attrs:{for:t.id}},["right"==t.togglePosition?t._t("default",[t._v("\n            I’m a label\n        ")]):t._e(),t._v(" "),i("div",{staticClass:"toggle",class:{"toggle--small":t.small,"toggle--waiting":t.waiting,"toggle--no-icons":!t.icons}},[i("input",{ref:"toggle",staticClass:"toggle__input",attrs:{type:"checkbox",id:t.id,disabled:t.disabled,"aria-disabled":t.ariaDisabled}}),t._v(" "),i("span",{staticClass:"toggle__checkbox"},[i("svg",{staticClass:"toggle__svg toggle__svg--check",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 9",width:"20",height:"15",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"}},[i("path",{attrs:{d:"M1 5.5L3.43934 7.93934L10.3787 1"}})]),t._v(" "),i("svg",{staticClass:"toggle__svg toggle__svg--cross",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 10",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","aria-hidden":"true"}},[i("path",{attrs:{d:"M1.06 1 9 8.94"}}),i("path",{attrs:{d:"M1 8.94 8.94 1"}})]),t._v(" "),t._m(0)])]),t._v(" "),"right"!=t.togglePosition?t._t("default",[t._v("\n            I’m a label\n        ")]):t._e()],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"toggle__bouncing-dots"},[e("span",{staticClass:"toggle__bouncing-dot"})])}],!1,null,null,null);e.default=l.exports}}]);