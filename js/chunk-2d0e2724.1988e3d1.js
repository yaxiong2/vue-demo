(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2724"],{"7f76":function(e,n,l){"use strict";l.r(n);var a=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[l("el-tree",{ref:"personTree",attrs:{data:e.navs,"show-checkbox":"","highlight-current":"",draggable:"","node-key":"label","default-expand-all":e.expandAll}}),l("el-button",{on:{click:function(n){return e.expandOpen(1)}}},[e._v("展开所有菜单")]),l("svg-icon",{attrs:{"icon-class":"icl-app"}}),l("el-button",{on:{click:function(n){return e.expandOpen(0)}}},[e._v("收起所有菜单")])],1)},t=[],r=(l("d81d"),l("d4ec")),s=l("bee2"),i=l("262e"),c=l("2caf"),d=l("9ab4"),o=l("60a3"),h=function(e){Object(i["a"])(l,e);var n=Object(c["a"])(l);function l(){var e;return Object(r["a"])(this,l),e=n.apply(this,arguments),e.navs=[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],e.expandAll=!1,e}return Object(s["a"])(l,[{key:"expandOpen",value:function(e){var n=this;if(1===e){this.expandAll=!0;for(var l=0;l<this.navs.length;l++)this.$refs.personTree.store.nodesMap[this.navs[l].label].expanded=!0,this.navs[l].children&&this.navs[l].children.map((function(e){n.$refs.personTree.store.nodesMap[e.label].expanded=!0}))}else if(0===e){this.expandAll=!1;for(var a=0;a<this.navs.length;a++)this.$refs.personTree.store.nodesMap[this.navs[a].label].expanded=!1}}}]),l}(o["d"]);h=Object(d["a"])([o["a"]],h);var p=h,b=p,u=l("2877"),f=Object(u["a"])(b,a,t,!1,null,null,null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e2724.1988e3d1.js.map