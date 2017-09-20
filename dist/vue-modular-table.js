(function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueModularTable=n():t.VueModularTable=n()})(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p=".",n(n.s=15)}([function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"b",function(){return a});var i=e(3),o=e.n(i),u=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),s=function(t){return t},a=(function(){function t(n){r(this,t),this.type=n,this.options=[]}u(t,[{key:"addOption",value:function(t,n){if("enum"!==this.type)throw new Error("Options are usable only on enum filters!");return n||(n=t),this.options.push({value:t,title:n}),this}}])}(),function(){function t(n,e){r(this,t),this.title=e,this.sortPath=null,this.formatTitle=s,this.nullValue=void 0,this.classList=[],this.path=n,this.format=s}return u(t,[{key:"class",value:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.classList=n,this}},{key:"titleFormatter",value:function(t){return this.formatTitle=t,this}},{key:"nullOrUndefinedDisplayValue",value:function(t){return this.nullValue=t,this}},{key:"formatter",value:function(t){return this.format=t,this}},{key:"sortable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.path;return this.sortPath=t,this}},{key:"_getValue",value:function(t){var n=o.a.get(t,this.path);return void 0===this.nullValue?n:null===n||void 0===n?this.nullValue:n}}]),t}()),l=function(){function t(n){r(this,t),this.name=n,this.fields=[]}return u(t,[{key:"addField",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return null===e&&"string"!=typeof n&&(e=n,n=null),this.fields.push(e?e(new a(t,n)):new a(t,n)),this}}]),t}(),c=function(){function t(){r(this,t),this.columns=[]}return u(t,[{key:"addColumn",value:function(t,n){return"string"==typeof t&&"string"==typeof n?(t=this.columns.length,this.columns.push(n(new l(t).addField(t,n))),this):(n||(n=t,t=this.columns.length),this.columns.push(n(new l(t))),this)}}]),t}();n.a=c},function(t,n){t.exports=function(t,n,e,r){var i,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),e&&(s._scopeId=e),r){var a=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var n=r[t];a[t]=function(){return n}})}return{esModule:i,exports:o,options:s}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(10),i=e.n(r),o=e(0),u=e(5);e.d(n,"spacedBracketFormatter",function(){return u.a}),e.d(n,"nonSpacedBracketFormatter",function(){return u.b}),e.d(n,"boldFormatter",function(){return u.c}),e.d(n,"italicFormatter",function(){return u.d}),e.d(n,"suffixFormatter",function(){return u.e}),e.d(n,"prefixFormatter",function(){return u.f}),e.d(n,"spanFormatter",function(){return u.g}),e.d(n,"iconFormatter",function(){return u.h}),e.d(n,"spanIconFormatter",function(){return u.i}),e.d(n,"divFormatter",function(){return u.j}),e.d(n,"linkFormatter",function(){return u.k}),e.d(n,"bracketFormatter",function(){return u.l}),e.d(n,"combinedFormatter",function(){return u.m}),e.d(n,"uppercaseFirstLetterFormatter",function(){return u.n}),e.d(n,"TableDefinition",function(){return o.a}),n.default=i.a,i.a.install=function(t){return t.component(i.a.name,i.a)},i.a.version="0.0.1","undefined"!=typeof window&&window.Vue&&window.Vue.use(i.a)},function(t,n,e){"use strict";function r(t){for(var n=t.split("."),e=[],r=0;r<n.length;r++){for(var i=n[r];"\\"===i[i.length-1]&&void 0!==n[r+1];)i=i.slice(0,-1)+".",i+=n[++r];e.push(i)}return e}var i=e(4);t.exports={get:function(t,n,e){if(!i(t)||"string"!=typeof n)return void 0===e?t:e;for(var o=r(n),u=0;u<o.length;u++){if(!Object.prototype.propertyIsEnumerable.call(t,o[u]))return e;if(void 0===(t=t[o[u]])||null===t){if(u!==o.length-1)return e;break}}return t},set:function(t,n,e){if(i(t)&&"string"==typeof n)for(var o=r(n),u=0;u<o.length;u++){var s=o[u];i(t[s])||(t[s]={}),u===o.length-1&&(t[s]=e),t=t[s]}},delete:function(t,n){if(i(t)&&"string"==typeof n)for(var e=r(n),o=0;o<e.length;o++){var u=e[o];if(o===e.length-1)return void delete t[u];if(t=t[u],!i(t))return}},has:function(t,n){if(!i(t)||"string"!=typeof n)return!1;for(var e=r(n),o=0;o<e.length;o++){if(!i(t))return!1;if(!(e[o]in t))return!1;t=t[e[o]]}return!0}}},function(t,n,e){"use strict";t.exports=function(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)}},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return s}),e.d(n,"f",function(){return a}),e.d(n,"g",function(){return l}),e.d(n,"h",function(){return c}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return d}),e.d(n,"k",function(){return p}),e.d(n,"l",function(){return h}),e.d(n,"m",function(){return m}),e.d(n,"n",function(){return v});var r=function(t){return"( "+t+" )"},i=function(t){return"("+t+")"},o=function(t){return"<b>"+t+"</b>"},u=function(t){return"<i>"+t+"</i>"},s=function(t){return function(n){return""+n+t}},a=function(t){return function(n){return""+t+n}},l=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n.join(" ");return function(t){return'<span class="'+r+'">'+t+"</span>"}},c=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n.join(" ");return function(t){return'<i class="'+r+'"></i>'+t}},f=function(t,n){return function(e){return'<span class="'+t+'"><i class="'+n+'"></i></span>'+e}},d=function(t){return function(n){return"<div class='"+t+"'>"+n+"</div>"}},p=function(t,n){return"string"==typeof t&&(n=t,t=!1),n=n||"",t?function(t){return'<a href="'+n+t+'" target="_blank">'+t+"</a>"}:function(t){return'<a href="'+n+t+'">'+t+"</a>"}},h=function(t){return t?r:i},m=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n.reverse();return function(t){return r.reduce(function(t,n){return n(t)},t)}},v=function(t){return t?t.charAt(0).toUpperCase()+t.slice(1):t}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(11),i=e.n(r),o=e(0);n.default={name:"FieldHeader",props:{field:{type:o.b,required:!0},sorting:{type:Object,default:function(){return null}}},computed:{direction:function(){return this.sorting&&this.sorting.field===this.field.sortPath?this.sorting.direction:0}},methods:{sortClick:function(){var t=this.sorting&&this.sorting.field===this.field.sortPath&&1===this.sorting.direction?-1:1,n={field:this.field.sortPath,direction:t};this.$emit("modular-table-sort",n)}},components:{SortIcon:i.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),i=e(9),o=e.n(i);n.default={data:function(){return{showLoader:!1,loaderTimer:null}},watch:{isLoading:function(t){var n=this;t&&!this.loaderTimer?this.loaderTimer=setTimeout(function(){n.showLoader=!0},this.loaderWaitTime):t||(this.showLoader=!1,clearTimeout(this.loaderTimer),this.loaderTimer=null)}},name:"ModularTable",props:{device:{type:Number,default:null},mobileViewThreshold:{type:Number,default:0},data:{type:Array,default:[]},sorting:{type:Object,default:function(){return null}},definition:{type:r.a,required:!0},wrapperClass:{type:String,default:"modular-table-wrapper"},tableClass:{type:String,default:"modular-table"},tableMobileClass:{type:String,default:"modular-table-mobile"},loaderClass:{type:String,default:"loader"},config:{type:Object,default:function(){return{}}},isLoading:{type:Boolean,default:!1},loaderWaitTime:{type:Number,default:250}},methods:{sortClick:function(t){this.$emit("modular-table-sort",t)},rowClick:function(t,n){this.$emit("modular-table-row",t,n)}},components:{FieldHeader:o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0);n.default={name:"SortIcon",props:{field:{type:r.b,required:!0},sorting:{type:Object,default:function(){return null}}},computed:{direction:function(){return this.sorting&&this.sorting.field===this.field.sortPath?this.sorting.direction:0}}}},function(t,n,e){var r=e(1)(e(6),e(14),null,null);t.exports=r.exports},function(t,n,e){var r=e(1)(e(7),e(12),null,null);t.exports=r.exports},function(t,n,e){var r=e(1)(e(8),e(13),null,null);t.exports=r.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.wrapperClass},[t.device>t.mobileViewThreshold||null===t.device?e("table",{class:t.tableClass},[e("thead",[e("tr",t._l(t.definition.columns,function(n){return e("th",t._l(n.fields,function(n){return n.title?e("field-header",{key:n.path,attrs:{sorting:t.sorting,field:n},on:{"modular-table-sort":t.sortClick}}):t._e()}))}))]),t._v(" "),e("tbody",t._l(t.data,function(n){return e("tr",{on:{click:function(e){t.rowClick(e,n)}}},t._l(t.definition.columns,function(r){return e("td",[t._t("col-"+r.name,t._l(r.fields,function(r){return e("span",{class:r.classList,domProps:{innerHTML:t._s(r.format(r._getValue(n),n))}})}),{row:n,col:r})],2)}))}))]):e("table",{class:t.tableMobileClass},[e("tbody",t._l(t.data,function(n){return e("tr",{on:{click:function(e){t.rowClick(e,n)}}},t._l(t.definition.columns,function(r){return e("td",[t._t("col-"+r.name,[t._l(r.fields,function(n){return n.title?e("field-header",{key:n.path,attrs:{sorting:t.sorting,field:n},on:{"modular-table-sort":t.sortClick}}):t._e()}),t._v(" "),t._l(r.fields,function(r){return e("span",{class:r.classList,domProps:{innerHTML:t._s(r.format(r._getValue(n),n))}})})],{row:n,col:r})],2)}))}))]),t._v(" "),t.showLoader?t._t("loader",[e("div",{class:t.loaderClass},[e("span",[t._v("Loading....")])])]):t._e()],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"arrow-icons"},[t.direction>0?e("span",{staticClass:"modular-table-sort-asc"},[t._v("↑")]):t.direction<0?e("span",{staticClass:"modular-table-sort-desc"},[t._v("↓")]):e("span",{staticClass:"modular-table-sort-desc"},[t._v("↕")])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.field.sortPath?e("div",{staticClass:"modular-table-sortable",on:{click:function(n){t.sortClick()}},scopedSlots:t._u([{key:"default",fn:function(t){}}])},[e("span",{domProps:{innerHTML:t._s(t.field.formatTitle(t.field.title))}}),t._v(" "),e("sort-icon",{attrs:{field:t.field,sorting:t.sorting}})],1):e("div",[e("span",{domProps:{innerHTML:t._s(t.field.formatTitle(t.field.title))}})])},staticRenderFns:[]}},function(t,n,e){t.exports=e(2)}])});