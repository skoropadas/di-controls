import{a as Le,b as Ye,c as et}from"./chunk-FGBN6VWB.js";import{a as He,b as Je,d as at,e as lt,g as ie,i as ct,k as P}from"./chunk-NTIPUVJP.js";import{A as Te,Aa as Q,B as Se,Ca as m,D as Ie,Da as c,Db as U,Ea as Pe,F as Me,Fa as Re,Ga as v,Gc as $e,Ha as G,I as g,Ia as ke,J as f,Ja as Ve,Jc as j,K as $,Ka as M,L as we,La as C,Lc as L,Ma as Ae,Mc as me,N as b,Na as Be,Nb as Z,O as x,Ob as ee,Pa as X,Pb as te,Qa as J,T as Fe,Tc as Ke,U as pe,Uc as Xe,V as Oe,Va as N,Wa as w,Wb as Dt,X as Ee,Xa as Qe,Ya as T,Yb as qe,Za as h,Zc as O,_ as u,_b as Ge,_c as E,ad as ne,b as ve,bb as ht,bd as Ze,cc as We,e as A,ed as tt,f as ye,fd as ot,g as ce,gb as ze,gd as nt,hb as F,hd as it,ia as _,id as rt,j as se,jd as q,ka as r,kb as Ue,m as be,n as xe,oa as K,pa as p,rb as Y,tb as H,ua as s,va as l,vc as y,wa as d,wb as z,xa as ue,xc as oe,ya as ge,yb as je,z as Ne,za as B,zc as de}from"./chunk-CDD3BC5B.js";import{a as he,b as De,g as W}from"./chunk-P2VZOJAX.js";ce();var re=(()=>{class t extends y{constructor(){super()}registerControl(){}unregisterControl(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=$({type:t,selectors:[["","diControlSilencer",""]],standalone:!0,features:[M([oe(t)]),_]})}return t})();ce();var st=W(qe(),1);var pt=(()=>{let e=class e{constructor(){this.overlayService=g(Xe)}open(n,i){return this.overlayService.open(n,De(he({overlayContainer:Ke,positionStrategy:this.overlayService.globalPositionStrategy().centerHorizontally().centerVertically(),scrollStrategy:this.overlayService.scrollStrategy().block()},i),{panelClass:["ng-doc-dialog",...(0,st.asArray)(i?.panelClass)]}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var vt=["outletContent"];function yt(t,e){t&1&&Re(0)}var bt=["*"],R,ae=(R=class{constructor(){this.router=g(te),this.route=g(Z),this.dialogService=g(pt)}ngAfterContentInit(){if(this.routerOutlet){let e=new ve;e.pipe(Te(o=>o.beforeClose().pipe(Se(this.routerOutlet?.deactivateEvents??xe))),me(this)).subscribe(()=>{let o=this.route.pathFromRoot.map(n=>n.snapshot.url).filter(n=>!!n[0]).map(([n])=>n.path).join("/");this.router.navigateByUrl(o)}),be(this.routerOutlet.activateEvents.pipe(se(()=>!0)),this.routerOutlet.deactivateEvents.pipe(se(()=>!1))).pipe(Ne(this.routerOutlet.isActivated),me(this)).subscribe(o=>{o?(this.dialogRef=this.dialogService.open(this.outletContent,this.config),e.next(this.dialogRef)):this.dialogRef?.close()})}}},R.\u0275fac=function(o){return new(o||R)},R.\u0275cmp=f({type:R,selectors:[["ng-doc-dialog-outlet"]],contentQueries:function(o,n,i){if(o&1&&Qe(i,ee,5),o&2){let a;N(a=T())&&(n.routerOutlet=a.first)}},viewQuery:function(o,n){if(o&1&&w(vt,7),o&2){let i;N(i=T())&&(n.outletContent=i.first)}},inputs:{config:"config"},standalone:!0,features:[C],ngContentSelectors:bt,decls:2,vars:0,consts:[["outletContent",""]],template:function(o,n){o&1&&(Pe(),p(0,yt,1,0,"ng-template",null,0,h))},encapsulation:2,changeDetection:0}),R);ae=A([L()],ae);ce();var ut=W(ht(),1);var I,le=(I=class extends de{constructor(){super({onIncomingUpdate:e=>{$e(this.elementRef).value=(0,ut.isPresent)(e)?String(Number(e)):""}})}blurEvent(){this.touch()}inputEvent(){this.updateModel(Number(this.elementRef.nativeElement.value))}},I.\u0275fac=function(o){return new(o||I)},I.\u0275dir=$({type:I,selectors:[["input","ngDocInputNumber",""]],hostBindings:function(o,n){o&1&&m("blur",function(){return n.blurEvent()})("input",function(){return n.inputEvent()})},standalone:!0,features:[M([{provide:de,useExisting:Ie(()=>I)}]),_]}),I);le=A([L(),ye("design:paramtypes",[])],le);var gt=W(Dt(),1),dt=(()=>{let e=class e{transform(n){return(0,gt.extractValue)(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=we({name:"ngDocExtractValue",type:e,pure:!0,standalone:!0});let t=e;return t})();function xt(t,e){if(t&1&&(d(0,"div",2),X(1,"ngDocSanitizeHtml")),t&2){let o=c();r("innerHTML",J(1,1,o.description),Fe)}}var fe=(()=>{let e=class e extends y{constructor(){super(),this.name="",this.description=""}get defaultValue(){return Object.prototype.hasOwnProperty.call(this,"default")?this.default:!1}updateModel(n){super.updateModel(n||(this.defaultValue?!1:this.defaultValue))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["ng-doc-boolean-control"]],standalone:!0,features:[M([oe(e)]),_,C],decls:4,vars:3,consts:[[3,"ngDocTooltip","canOpen"],["tooltipTemplate",""],[3,"innerHTML"]],template:function(i,a){if(i&1&&(s(0,"ng-doc-checkbox",0),G(1),p(2,xt,2,3,"ng-template",null,1,h),l()),i&2){let D=v(3);r("ngDocTooltip",D)("canOpen",!!a.description),u(1),Ve(" ",a.name," ")}},dependencies:[Je,q,lt],styles:["[_nghost-%COMP%]{display:inline-flex;width:100%}"],changeDetection:0});let t=e;return t})();function Nt(t,e){if(t&1){let o=Q();s(0,"button",4),m("click",function(){b(o);let i=c(2),a;return x(i.updateModel((a=i.default)!==null&&a!==void 0?a:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),d(1,"ng-doc-icon",5),l()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function Tt(t,e){if(t&1&&p(0,Nt,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var _e=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["ng-doc-number-control"]],inputs:{default:"default"},standalone:!0,features:[_,C],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputNumber","","type","number",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,a){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),m("ngModelChange",function(V){return a.changeModel(V)}),l(),p(2,Tt,1,1,"ng-template",null,2,h),l()),i&2){let D=v(3);r("rightContent",D),u(1),r("ngModel",a.model())}},dependencies:[ne,re,le,U,Y,je,H,z,F,E,j,O],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function St(t,e){if(t&1){let o=Q();s(0,"button",4),m("click",function(){b(o);let i=c(2),a;return x(i.updateModel((a=i.default)!==null&&a!==void 0?a:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),d(1,"ng-doc-icon",5),l()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function It(t,e){if(t&1&&p(0,St,2,3,"button",3),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var Ce=(()=>{let e=class e extends y{constructor(){super()}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}writeValue(n){super.writeValue(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["ng-doc-string-control"]],inputs:{default:"default"},standalone:!0,features:[_,C],decls:4,vars:2,consts:[["diControlSilencer","",3,"rightContent"],["ngDocInputString","",3,"ngModel","ngModelChange"],["rightContent",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,a){if(i&1&&(s(0,"ng-doc-input-wrapper",0)(1,"input",1),m("ngModelChange",function(V){return a.changeModel(V)}),l(),p(2,It,1,1,"ng-template",null,2,h),l()),i&2){let D=v(3);r("rightContent",D),u(1),r("ngModel",a.model())}},dependencies:[U,Y,H,z,ne,Ze,F,E,j,O,re],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();function Mt(t,e){t&1&&B(0)}var wt=t=>({$implicit:t});function Ft(t,e){if(t&1&&(ue(0),s(1,"ng-doc-option",6),p(2,Mt,1,0,"ng-container",7),l(),ge()),t&2){let o=e.ngIf;c(3);let n=v(3);u(1),r("value",o),u(1),r("ngTemplateOutlet",n)("ngTemplateOutletContext",Be(3,wt,o))}}function Ot(t,e){if(t&1&&(ue(0),p(1,Ft,3,5,"ng-container",5),X(2,"ngDocExtractValue"),ge()),t&2){let o=e.$implicit,n=c(2);u(1),r("ngIf",n.isManual?o:J(2,1,o))}}function Et(t,e){if(t&1&&(s(0,"ng-doc-list"),p(1,Ot,3,3,"ng-container",4),l()),t&2){let o=c();u(1),r("ngForOf",o.options)}}function Pt(t,e){t&1&&(s(0,"span",11),G(1,"[default]"),l())}function Rt(t,e){if(t&1&&(s(0,"div",8),d(1,"ng-doc-kind-icon",9),s(2,"div"),G(3),l(),p(4,Pt,2,0,"span",10),l()),t&2){let o=e.$implicit,n=c();u(1),r("kind",n.typeOf(o))("type","type")("ngDocTooltip",n.typeOf(o)),u(2),ke(o),u(1),r("ngIf",o===n.default)}}function kt(t,e){if(t&1){let o=Q();s(0,"button",13),m("click",function(){b(o);let i=c(2),a;return x(i.updateModel((a=i.default)!==null&&a!==void 0?a:null))})("focusout",function(){b(o);let i=c(2);return x(i.touch())}),d(1,"ng-doc-icon",14),l()}if(t&2){let o=c(2);r("ngDocFocusable",!1)("disabled",o.disabled)("rounded",!1)}}function Vt(t,e){if(t&1&&p(0,kt,2,3,"button",12),t&2){let o=c();r("ngIf",o.model()&&o.model()!==o.default)}}var ft=(()=>{let e=class e extends y{constructor(){super()}typeOf(n){return typeof n}changeModel(n){this.updateModel(n===null&&this.default?this.default:n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["ng-doc-type-alias-control"]],inputs:{default:"default"},standalone:!0,features:[_,C],decls:6,vars:5,consts:[[3,"ngModel","readonly","valueContent","clearButton","rightContent","ngModelChange"],[4,"ngDocData"],["valueTemplate",""],["rightContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ng-doc-text",""],["positions","left-center","ngDocTextLeft","",3,"kind","type","ngDocTooltip"],["ng-doc-text","","color","muted","size","small","ngDocTextRight","",4,"ngIf"],["ng-doc-text","","color","muted","size","small","ngDocTextRight",""],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout",4,"ngIf"],["ng-doc-button-icon","","size","large",3,"ngDocFocusable","disabled","rounded","click","focusout"],["icon","x"]],template:function(i,a){if(i&1&&(s(0,"ng-doc-combobox",0),m("ngModelChange",function(V){return a.changeModel(V)}),p(1,Et,2,1,"ng-doc-list",1)(2,Rt,5,5,"ng-template",null,2,h)(4,Vt,1,1,"ng-template",null,3,h),l()),i&2){let D=v(3),V=v(5);r("ngModel",a.model())("readonly",!0)("valueContent",D)("clearButton",!1)("rightContent",V)}},dependencies:[et,U,H,z,Ye,tt,ze,F,ot,Ue,rt,Le,nt,q,it,E,j,O,dt],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});let t=e;return t})();var Ct=W(qe(),1);var At=["pageContainer"],Bt=["pageBreadcrumbs"],Qt=["pageNavigation"],Ht=["pageToc"],zt=["childOutlet"];function Ut(t,e){if(t&1&&(s(0,"a",9),d(1,"ng-doc-icon",10),l()),t&2){let o=c();r("href",o.rootPage.editSourceFileUrl,pe)}}function jt(t,e){if(t&1&&(s(0,"a",11),d(1,"ng-doc-icon",12),l()),t&2){let o=c();r("href",o.rootPage.viewSourceFileUrl,pe)}}var Lt=()=>({width:"100vw",height:"100vh"});function qt(t,e){t&1&&(s(0,"ng-doc-dialog-outlet",13)(1,"div",14),d(2,"router-outlet"),l()()),t&2&&r("config",Ae(1,Lt))}var k,_t=(k=class{constructor(){this.rootPage=g(He),this.skeleton=g(We),this.context=g(Ge),this.renderer=g(Ee),this.router=g(te),this.breadcrumbs=g(Z).pathFromRoot.filter(e=>!e.snapshot.url.length).map(e=>e.snapshot.title).filter(Ct.isPresent)}ngOnInit(){this.rootPage.pageType==="guide"&&(this.skeleton.breadcrumbs&&ie(this.pageBreadcrumbs,this.skeleton.breadcrumbs,{breadcrumbs:this.breadcrumbs}),this.skeleton.navigation&&ie(this.pageNavigation,this.skeleton.navigation,this.navigationInputs()))}createToc(){this.pageToc&&this.skeleton.toc&&ie(this.pageToc,this.skeleton.toc,{tableOfContent:ct(this.pageContainer.nativeElement)??[]})}navigationInputs(){let e=n=>n.map(i=>[i.children?.length?e(i.children):i]).flat(2),o=e(this.context.navigation);return{prevPage:o[o.findIndex(n=>this.url===n.route)-1],nextPage:o[o.findIndex(n=>this.url===n.route)+1]}}get url(){let e=this.router.parseUrl(this.router.url);return e.queryParams={},e.fragment=null,e.toString()}},k.\u0275fac=function(o){return new(o||k)},k.\u0275cmp=f({type:k,selectors:[["ng-doc-page"]],viewQuery:function(o,n){if(o&1&&(w(At,7,Oe),w(Bt,7,K),w(Qt,7,K),w(Ht,7,K),w(zt,5)),o&2){let i;N(i=T())&&(n.pageContainer=i.first),N(i=T())&&(n.pageBreadcrumbs=i.first),N(i=T())&&(n.pageNavigation=i.first),N(i=T())&&(n.pageToc=i.first),N(i=T())&&(n.childOutlet=i.first)}},hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[M([P("NgDocTypeAlias",ft,{order:10}),P("string",Ce,{order:20}),P("string | undefined",Ce,{order:20}),P("number",_e,{order:30}),P("number | undefined",_e,{order:30}),P("boolean",fe,{hideLabel:!0,order:40}),P("boolean | undefined",fe,{hideLabel:!0,order:40})]),C],decls:13,vars:4,consts:[["pageBreadcrumbs",""],[1,"ng-doc-page-controls"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href",4,"ngIf"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href",4,"ngIf"],[1,"ng-doc-page-wrapper",3,"ngDocPageProcessor","afterRender"],["pageContainer",""],["pageNavigation",""],[3,"config",4,"ngIf"],["pageToc",""],["ng-doc-button-icon","","target","_blank","ngDocTooltip","Suggest Edits",3,"href"],["icon","edit-2"],["ng-doc-button-icon","","target","_blank","ngDocTooltip","View Source",3,"href"],["icon","code"],[3,"config"],[1,"ng-doc-fullscreen-wrapper"]],template:function(o,n){o&1&&(s(0,"article"),B(1,null,0),s(3,"div",1),p(4,Ut,2,1,"a",2)(5,jt,2,1,"a",3),l(),s(6,"div",4,5),m("afterRender",function(){return n.createToc()}),l(),B(8,null,6),l(),p(10,qt,3,2,"ng-doc-dialog-outlet",7),B(11,null,8)),o&2&&(u(4),r("ngIf",n.rootPage.editSourceFileUrl),u(1),r("ngIf",n.rootPage.viewSourceFileUrl),u(1),r("ngDocPageProcessor",n.rootPage.pageContent),u(4),r("ngIf",!(n.rootPage.page!=null&&n.rootPage.page.disableFullscreenRoutes)))},dependencies:[F,E,q,O,at,ee,ae],styles:["[_nghost-%COMP%]{display:flex;--ng-doc-toc-margin: calc(var(--ng-doc-base-gutter) * 5)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-article-width, 100%);margin-left:auto;margin-right:auto;overflow:hidden}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   .ng-doc-page-controls[_ngcontent-%COMP%]{position:absolute;display:flex;grid-gap:var(--ng-doc-base-gutter);top:0;right:0}.ng-doc-fullscreen-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}"],changeDetection:0}),k);_t=A([L()],_t);export{_t as a};
