/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","promise"],function(a,g){a.zf=function(){this.Init()};a.b.ta(a.zf,a.pj,"oj.FilmStripPagingModel");a.zf.prototype.Init=function(){a.zf.u.Init.call(this);this.ge=-1;this.Gf=0;this.Fb=-1};a.b.g("FilmStripPagingModel.prototype.Init",{Init:a.zf.prototype.Init});a.zf.prototype.yJa=function(a){this.Gf=a};a.zf.prototype.getPage=function(){return this.ge};a.b.g("FilmStripPagingModel.prototype.getPage",{getPage:a.zf.prototype.getPage});a.zf.prototype.setPage=
function(a,b){a=parseInt(a,10);try{var d=this.getPageCount(),e=this.ge,f=this.Fb,g=f;b&&b.pageSize&&(g=b.pageSize);if(0===this.Gf&&-1===g)return Promise.resolve();var k=Math.ceil(this.Gf/g);if(0>a||a>k-1)throw Error("JET FilmStrip: Invalid 'page' set: "+a);var l=!1;if(a!=e||g!=f){if(!1===this.handleEvent("beforePage",{page:a,previousPage:e}))return Promise.reject();l=!0}this.ge=a;this.Fb=g;var m=this.getPageCount(),r=this;return new Promise(function(b){d!=m&&r.handleEvent("pageCount",{pageCount:m,
previousPageCount:d});l&&r.handleEvent("page",{page:a,previousPage:e});b(null)})}catch(t){return Promise.reject(t)}};a.b.g("FilmStripPagingModel.prototype.setPage",{setPage:a.zf.prototype.setPage});a.zf.prototype.getStartItemIndex=function(){return-1===this.ge&&-1===this.Fb?-1:this.ge*this.Fb};a.b.g("FilmStripPagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.zf.prototype.getStartItemIndex});a.zf.prototype.getEndItemIndex=function(){return Math.min(this.getStartItemIndex()+this.Fb,this.Gf)-
1};a.b.g("FilmStripPagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.zf.prototype.getEndItemIndex});a.zf.prototype.getPageCount=function(){return Math.ceil(this.Gf/this.Fb)};a.b.g("FilmStripPagingModel.prototype.getPageCount",{getPageCount:a.zf.prototype.getPageCount});a.zf.prototype.totalSize=function(){return this.Gf};a.b.g("FilmStripPagingModel.prototype.totalSize",{totalSize:a.zf.prototype.totalSize});a.zf.prototype.totalSizeConfidence=function(){return"actual"};a.b.g("FilmStripPagingModel.prototype.totalSizeConfidence",
{totalSizeConfidence:a.zf.prototype.totalSizeConfidence});(function(){function c(a){var b=g("\x3cdiv\x3e\x3c/div\x3e");b.text(a);return b[0].innerHTML}function b(a){a.css("-webkit-transform",t).css("-ms-transform",t).css("transform",t)}function d(a,b){a.css("-webkit-transform",b).css("-ms-transform",b).css("transform",b)}a.Na("oj.ojFilmStrip",g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{maxItemsPerPage:0,orientation:"horizontal",currentItem:0,arrowPlacement:"adjacent",
arrowVisibility:"auto"},_ComponentCreate:function(){this._super();var b=this.element;b.addClass("oj-filmstrip oj-component").attr("tabindex",0).attr("role","region");b.uniqueId();b=this.options;b.disabled&&a.r.warn(ea);if(b.orientation!==y&&b.orientation!==ia)throw Error(n+b.orientation);if(b.arrowPlacement!==e&&b.arrowPlacement!==U)throw Error(p+b.arrowPlacement);if(b.arrowVisibility!==da&&b.arrowVisibility!==w&&b.arrowVisibility!==x&&b.arrowVisibility!==h)throw Error(q+b.arrowVisibility);this.dG=
this.eventNamespace+"Touch";this.nN=this.eventNamespace+"Mouse";this.Jga=this.eventNamespace+"Key";this.kZ=this.eventNamespace+"NavArrowHoverable";this.$a(!0)},refresh:function(){this._super();this.$a(!1)},getItemsPerPage:function(){return this.Ev},getPagingModel:function(){return this.Ef},Rp:function(){this._super();this.Fe&&this.$a(this.Fe[0])},Mr:function(){this._super();this.Fe&&this.$a(this.Fe[0])},$a:function(b){b&&!this.Ef&&(this.Ef=new a.zf);if(this.fC()){this.Fe=null;this.Th="rtl"===this.jd();
this.Zr=a.A.Ke();var c=this.element,d=this;b?(this.Ev=0,this.ST=function(a){d.RT(a)},this.gs=0,this.sD=-1,this.Eo=function(){d.uv()},this.Jj=function(){d.Gg()},this.Zr&&(this.M8=function(a){d.cU(a)},this.L8=function(a){d.bU(a)},this.aU=function(a){d.$T(a)},this.goa()),this.A8=function(a){d.Zva(a)},this.B8=function(a){d.$va(a)},this.D8=function(a){d.bwa(a)},this.aoa(),this.z8=function(a){d.qv(a)},this.Zna()):this.w5();for(var e=c.children(),f=0;f<e.length;f++)a.Components.wi(e[f]);f=this.Ef;if(b)f.on("page",
this.ST);f.yJa(e.length);this.bEa();if(0<e.length){this.s3();for(f=0;f<e.length;f++)a.Components.Ug(e[f]);a.A.Pk(c[0],this.Jj)}}else c=!1,this.Fe&&(c=this.Fe[0]),this.Fe=[b||c]},_destroy:function(){this.Zr&&(this.WAa(),this.aU=this.L8=this.M8=null);this.MAa();this.D8=this.B8=this.A8=null;this.KAa();this.z8=null;this.w5();this.Ef.off("page",this.ST);this.Eo=this.Jj=this.Ef=this.ST=null;var a=this.element;a.removeClass("oj-filmstrip oj-component "+H).removeAttr("tabindex role");a.removeUniqueId();this._super()},
w5:function(){a.A.om(this.element[0],this.Jj);this.sD=-1;this.TD&&(clearTimeout(this.TD),this.TD=null);for(var b=this.aJ(),c=0;c<b.length;c++)a.Components.wi(b[c]);this.t4();this.PS().unwrap();this.EDa();for(c=0;c<b.length;c++)a.Components.Ug(b[c])},_setOption:function(b,c,d){var f=this.options,g=!1,k=-1,l=this.Ef,m=l.getPage();switch(b){case "disabled":a.r.warn(ea);break;case "orientation":if(c!==y&&c!==ia)throw Error(n+c);g=f.orientation!=c;break;case "maxItemsPerPage":g=f.maxItemsPerPage!=c;break;
case "arrowPlacement":if(c!==e&&c!==U)throw Error(p+c);g=f.arrowPlacement!=c;break;case "arrowVisibility":if(c!==da&&c!==w&&c!==x&&c!==h)throw Error(q+c);g=f.arrowVisibility!=c;break;case z:if(f.currentItem!=c&&(k=this.lS(c),0>k||k>=l.getPageCount()))throw Error(s+c);}this._super(b,c,d);switch(b){case z:-1<k&&k!=m&&l.setPage(k)}g&&this.$a(!1)},Gg:function(){if(!this.G3)this.G3=!0,this.s3(!0),this.G3=!1;else if(!this.TD){var a=this;this.TD=setTimeout(function(){a.TD=null;a.Gg()},0)}},vd:function(){return this.options.orientation!==
ia},MC:function(){return this.vd()?this.Th?"right":"left":"top"},hv:function(){return this.vd()?"width":"height"},fC:function(){var a=document.createElement("div"),b=a.style;b.position="absolute";b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},bEa:function(){var a=this.element,b=this.vd(),c=a.children();c.addClass(F).wrap("\x3cdiv class\x3d'"+A+" "+K+"'\x3e\x3c/div\x3e");var d=this.MC();this.kn=
d=a.children().wrapAll("\x3cdiv class\x3d'"+A+" "+L+"' style\x3d'"+d+": 0px;'\x3e\x3c/div\x3e").parent();var f=this.options;f.arrowVisibility!==w&&f.arrowPlacement===e&&(this.sR=d.wrap("\x3cdiv class\x3d'"+A+" oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());a.addClass(A);b||a.addClass(R);f.arrowVisibility!==w&&0<c.length&&(this.Kk=this.Mqa(),this.Pj=this.yqa(),this.XU()&&this.ECa())},EDa:function(){var a=this.element,b=this.aJ();this.gDa();this.Kk&&(this.Nu(this.Kk),this.Kk=null);this.Pj&&
(this.Nu(this.Pj),this.Pj=null);var c=a.children(P+E);c&&c.remove();b.removeClass(F).unwrap().unwrap();this.kn=null;this.sR&&(b.unwrap(),this.sR=null);a.removeClass(A+" "+R)},ECa:function(){this.element.on("mouseenter"+this.kZ,function(a){g(a.currentTarget).hasClass("oj-disabled")||g(a.currentTarget).addClass(H)}).on("mouseleave"+this.kZ,function(a){g(a.currentTarget).removeClass(H)})},gDa:function(){this.element.off(this.kZ)},XU:function(){var a=this.options,b=a.arrowVisibility;return b===x||b===
h&&a.arrowPlacement===U},Gwa:function(){return 0<this.Ef.getPage()},Fwa:function(){var a=this.Ef;return a.getPage()<a.getPageCount()-1},Iza:function(){if(this.Gwa()){var a=this.Ef;a.setPage(a.getPage()-1)}},aza:function(){if(this.Fwa()){var a=this.Ef;a.setPage(a.getPage()+1)}},E5:function(a,b){this.options.arrowPlacement===e?b.css("visibility",a?"":w):b.parent().css("display",a?"":D)},TDa:function(){if(this.options.arrowVisibility!==w){var a=this.Ef,b=a.getPage(),a=a.getPageCount();this.E5(0!==b,
this.Kk);this.E5(b!==a-1,this.Pj)}},Mqa:function(){var a=this.element,b=this.vd()?fa:ga,d=this.W4(b);this.options.arrowPlacement===U?a.append(d):a.prepend(d);var a=c(this.F("labelAccArrowPreviousPage")),e=c(this.F("tipArrowPreviousPage")),b=this.V4(d,b,a,e),f=this;b.on("click",function(){f.Iza()});return b},yqa:function(){var a=this.element,b=this.vd()?B:I,d=this.W4(b);a.append(d);var a=c(this.F("labelAccArrowNextPage")),e=c(this.F("tipArrowNextPage")),b=this.V4(d,b,a,e),f=this;b.on("click",function(){f.aza()});
return b},W4:function(a){var b=g(document.createElement("div"));b.addClass(E+" "+a);this.options.arrowPlacement===U&&(b.addClass("oj-filmstrip-arrow-container-overlay"),this.XU()&&b.addClass(G));return b},V4:function(a,b,c,d){var f="\x3cdiv class\x3d'"+J+" oj-default oj-enabled "+b+"' role\x3d'button' tabindex\x3d'-1'";a.append(f+("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon "+b+" oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));b=this.element.attr("id");a=a.children(P+J).eq(0);a.uniqueId();
f=a.attr("id");c&&a.attr("aria-label",c);d&&a.attr("title",d);a.attr("aria-labelledby",f+" "+b);this.Qe(a);this.rk(a);this.options.arrowPlacement===e&&this.XU()&&a.addClass(G);return a},PS:function(){return this.kn.find(P+K)},aJ:function(){return this.kn.find(P+F)},ts:function(){return this.kn.children(P+C)},t4:function(){var a=this.kn;this.ts().css(u,t).css(Z,t);this.PS().css(u,t).css(Z,t);a.css(this.hv(),t)},s3:function(b){this.t4();var c=this.options,d=this.vd(),h=c.maxItemsPerPage,l=1>h,m=this.element,
p=this.PS();if(0>this.sD){var q=this.h7(c.currentItem),q=g(p[q]),n=q.children(P+F);n.css(k,t);a.Components.wr(n[0]);this.sD=d?q.width():q.height()}q=d?m.width():m.height();c.arrowVisibility!==w&&c.arrowPlacement===e&&(m=m.children(P+E).eq(0),d=d?m.width():m.height(),q-=2*d);this.gs=q;l||(d=Math.max(Math.floor(q/this.sD),1),d<h&&(h=d));h=l?Math.max(Math.floor(q/this.sD),1):h;l=q/h;p.css(u,l+T).css(Z,l+T);l=Math.ceil(p.length/h);n=this.ts();d=!1;m=this.Ef;if(m.getPageCount()!=l||this.Ev!=h||!n||1>n.length){d=
!0;if(b)for(var r=0;r<p.length;r++)a.Components.wi(p[r]);n&&0<n.length&&p.unwrap();for(r=0;r<p.length;r+=h)p.slice(r,r+h).wrapAll("\x3cdiv class\x3d'"+A+" "+C+"' style\x3d'"+k+": "+D+";' "+f+"\x3d'true'\x3e\x3c/div\x3e");if(b)for(r=0;r<p.length;r++)a.Components.Ug(p[r])}n=this.ts();n.css(u,q+T).css(Z,q+T);b=this.sR;this.kn.css(this.hv(),q);b&&b.css(this.hv(),q);b=0;if(c.currentItem||0===c.currentItem)b=this.lS(c.currentItem,h);m.getPageCount()!=l||this.Ev!=h||m.getPage()!=b?m.setPage(b,{pageSize:h}):
d&&(c=m.getPage(),this.RT({previousPage:c,page:c}))},RT:function(a){var b=a.page,c=a.previousPage;a=this.kn;var d=this.ts(),e=this.Ef.Fb,f=0>c||c==b||this.Ev!=e;this.Ev=e;e=null;f||(e=g(d[c]));var h=this.MC(),k=g(d[b]),l=k.is(v);l&&this.KW(k);var m=this.$x;-1<c&&!f&&(m=!0,a.css(this.hv(),2*this.gs),b<c&&l&&a.css(h,-this.gs+T),b>c?(e.addClass(Q),k.addClass(M)):(e.addClass(S),k.addClass(O)));if(m){var p=this,q=this.$x;q&&0>c&&d.filter(aa).addClass(N);setTimeout(function(){p.h6(b,c,f,q)},25)}else this.h6(b,
c,f)},h6:function(a,c,e,f){var h=this.kn;e||(this.H3=!0,h.on("transitionend"+this.eventNamespace+" webkitTransitionEnd"+this.eventNamespace,this.Eo));e?this.uv():(e=this.ts(),f&&b(e),-1<c?(f=a>c,c=g(e[c]),a=g(e[a]),c.addClass(N),a.addClass(N),f?(c.removeClass(Q),a.removeClass(M),c.addClass(V),a.addClass(W)):(c.removeClass(S),a.removeClass(O),c.addClass(Y),a.addClass(X))):f&&(a=e.filter(aa),d(a,"translate3d(0, 0, 0)")))},uv:function(){this.H3=!1;var c=this.kn,d=this.MC();c.off(this.eventNamespace).css(this.hv(),
this.gs).css(d,"0px");d=null;if(a.le.GL(c[0])||this.Pj&&a.le.GL(this.Pj[0])||this.Kk&&a.le.GL(this.Kk[0]))d=document.activeElement;for(var c=this.Ef.getPage(),e=this.ts(),f=0;f<e.length;f++)f!=c&&this.T8(g(e[f]));e.removeClass(N+" "+V+" "+W+" "+Y+" "+X);b(e);this.TDa();d&&g(d).is(v)&&(d=this.element,(e=a.le.efa(e[c]))?a.le.UE(e):a.le.UE(d[0]));this.lS(this.options.currentItem)!=c&&(c=this.U6(c),-1!==c&&this.option(z,c,{_context:{Ed:!0}}))},h7:function(b){var c=-1,d=this.aJ();if("number"===typeof b)0<=
b&&b<d.length&&(c=b);else if("string"===typeof b&&a.A.HM(b))for(var e=0;e<d.length;e++){var f=d[e].id;if(f&&0<f.length&&f===b){c=e;break}}return c},lS:function(a,b){var c=this.h7(a),d=-1;-1<c&&(void 0===b&&(b=this.Ev),d=Math.floor(c/b));return d},U6:function(a,b,c){var d=this.Ef;void 0===b&&(b=d.getPageCount());return 0<=a&&a<b&&(b=this.aJ(),void 0===c&&(c=this.Ev),a*=c,a<b.length)?(c=b[a].id)&&0<c.length?c:a:-1},T8:function(b){a.Components.Xt(b[0]);b.css(k,D).attr(f,"true");b.find(P+F).css(k,D)},
KW:function(b){b.css(k,t).removeAttr(f);b.find(P+F).css(k,t);a.Components.wr(b[0])},Zna:function(){this.element.on("keydown"+this.Jga,this.z8)},KAa:function(){this.element.off(this.Jga)},aoa:function(){this.element.on("mousedown"+this.nN,this.A8).on("mousemove"+this.nN,this.B8).on("mouseup"+this.nN,this.D8)},MAa:function(){this.element.off(this.nN)},goa:function(){this.element.on("touchstart"+this.dG,this.M8).on("touchmove"+this.dG,this.L8).on("touchend"+this.dG,this.aU).on("touchcancel"+this.dG,
this.aU)},WAa:function(){this.element.off(this.dG)},qv:function(a){var b=this.Ef,c=b.getPage(),d=-1;switch(a.keyCode){case g.ui.keyCode.RIGHT:d=this.Th?c-1:c+1;break;case g.ui.keyCode.LEFT:d=this.Th?c+1:c-1;break;case g.ui.keyCode.DOWN:d=c+1;break;case g.ui.keyCode.UP:d=c-1;break;case g.ui.keyCode.HOME:d=0;break;case g.ui.keyCode.END:d=b.getPageCount()-1;break;default:return}-1<d&&d<b.getPageCount()&&b.setPage(d);a.preventDefault()},Zva:function(a){this.P5(a.originalEvent)},$va:function(a){this.O5(a,
a.originalEvent)},bwa:function(){this.N5()},cU:function(a){a=a.originalEvent.touches;1===a.length&&this.P5(a[0])},bU:function(a){this.O5(a,a.originalEvent.touches[0]);(this.Al||this.Xv)&&a.preventDefault()},$T:function(){this.N5()},P5:function(a){if(1<this.Ef.getPageCount()&&!this.H3){this.Al=!0;this.$x=!1;var b=this.vd();this.dL=b?a.pageX:a.pageY;this.ada=b?a.pageY:a.pageX}},axa:function(a){var b=this.vd();this.dL=b?a.pageX:a.pageY;this.ada=b?a.pageY:a.pageX;a=this.MC();var b=this.kn,c=this.Ef,d=
this.ts(),e=1;0<c.getPage()&&(this.KW(g(d[c.getPage()-1])),b.css(a,-this.gs+T),e++);c.getPage()<c.getPageCount()-1&&(this.KW(g(d[c.getPage()+1])),e++);1<e&&b.css(this.hv(),e*this.gs);this.vW=parseInt(b.css(a),10)},O5:function(a,b){if(this.Al){var c=this.vd(),e=(c?b.pageX:b.pageY)-this.dL;Math.abs((c?b.pageY:b.pageX)-this.ada)>Math.abs(e)&&(this.Xv=this.Al=!1);if(this.$x){var f=c&&this.Th?0<e:0>e,h=this.Ef,k=h.getPage();if(f&&k<h.getPageCount()-1||!f&&0<k){var p=this.element[0],q=Math.min(m*(c?p.offsetWidth:
p.offsetHeight),r),n=this.MC(),s=this.kn,p=this.ts();Math.abs(e)>=q?(c=f?k+1:k-1,this.U6(c),k=f?k-1:k+1,-1<k&&k<h.getPageCount()&&this.T8(g(p[k])),f&&-1<k&&(p=parseInt(s.css(n),10),s.css(n,p+this.gs+T)),s.css(this.hv(),2*this.gs),this.Al=!1,h.setPage(c)):(h=c&&this.Th?-e:e,h=c?"translate3d("+h+"px, 0, 0)":"translate3d(0, "+h+"px, 0)",d(p.filter(aa),h));this.Xv=!0}this.Xv&&(a.preventDefault(),a.stopPropagation())}else Math.abs(e)>l&&(this.axa(b),this.$x=!0)}},N5:function(){if(this.Al&&this.$x){var a=
this.Ef.getPage();this.RT({previousPage:a,page:a})}this.Xv=this.$x=this.Al=!1},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-filmstrip-start-arrow"===a?this.widget().find(P+J+P+fa)[0]:"oj-filmstrip-end-arrow"===a?this.widget().find(P+J+P+B)[0]:"oj-filmstrip-top-arrow"===a?this.widget().find(P+J+P+ga)[0]:"oj-filmstrip-bottom-arrow"===a?this.widget().find(P+J+P+I)[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}),
c=this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}),d=this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}),e=this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}),f=this.element[0];a&&a!=f;){if(a===b)return{subId:"oj-filmstrip-start-arrow"};if(a===c)return{subId:"oj-filmstrip-end-arrow"};if(a===d)return{subId:"oj-filmstrip-top-arrow"};if(a===e)return{subId:"oj-filmstrip-bottom-arrow"};a=a.parentElement}return null}});var e="adjacent",f="aria-hidden",h="auto",k="display",l=3,m=.33,r=100,t=
"",s="JET FilmStrip: Value of 'currentItem' option not found: ",n="JET FilmStrip: Unsupported value set as 'orientation' option: ",p="Unsupported value set as 'arrowPlacement' option: ",q="Unsupported value set as 'arrowVisibility' option: ",u="flex-basis",w="hidden",v=":hidden",y="horizontal",x="hover",z="currentItem",D="none",I="oj-bottom",B="oj-end",J="oj-filmstrip-arrow",E="oj-filmstrip-arrow-container",G="oj-filmstrip-arrow-transition",A="oj-filmstrip-container",H="oj-filmstrip-hover",F="oj-filmstrip-item",
K="oj-filmstrip-item-container",C="oj-filmstrip-page",L="oj-filmstrip-pages-container",N="oj-filmstrip-transition",M="oj-filmstrip-transition-next-newpage-from",Q="oj-filmstrip-transition-next-oldpage-from",O="oj-filmstrip-transition-prev-newpage-from",S="oj-filmstrip-transition-prev-oldpage-from",W="oj-filmstrip-transition-next-newpage-to",V="oj-filmstrip-transition-next-oldpage-to",X="oj-filmstrip-transition-prev-newpage-to",Y="oj-filmstrip-transition-prev-oldpage-to",R="oj-filmstrip-vertical",
fa="oj-start",ga="oj-top",U="overlay",P=".",T="px",ia="vertical",da="visible",aa=":visible",Z="-webkit-flex-basis",ea="JET FilmStrip: 'disabled' option not supported"})();a.Components.Ua("ojFilmStrip","baseComponent",{properties:{arrowPlacement:{type:"string"},arrowVisibility:{type:"string"},currentItem:{type:"string|number"},disabled:{type:"boolean"},maxItemsPerPage:{type:"number"},orientation:{type:"string"}},methods:{getItemsPerPage:{},getPagingModel:{},refresh:{}},extension:{_widgetName:"ojFilmStrip"}});
a.Components.register("oj-film-strip",a.Components.getMetadata("ojFilmStrip"))});