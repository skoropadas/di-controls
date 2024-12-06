import{a as Y}from"./chunk-MYLRPYFM.js";import{c as z}from"./chunk-VGU43L7A.js";import{$a as T,Aa as b,Ba as V,Cb as N,Da as E,Ea as m,Eb as H,Gb as j,Q as _,Qa as i,Ra as n,S as s,Tb as q,U as I,Vb as L,W as l,Za as S,_ as O,ab as U,ea as v,ia as P,ib as c,jb as x,pa as C,pb as A,ra as a,tb as R,ub as k,va as w}from"./chunk-3MHY34XG.js";var G={title:"Examples",expanded:!0,order:3},X=G;var K=["*"],rt=(()=>{class e{control;typeOf(t){return typeof t+(typeof t=="object"&&t!==null?` (${t.constructor.name})`:"")}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=I({type:e,selectors:[["di-model-info"]],inputs:{control:"control"},standalone:!0,features:[A],ngContentSelectors:K,decls:27,vars:6,consts:[[1,"control"],[1,"buttons"],["ng-doc-button","",3,"click"],[1,"control-info"]],template:function(o,p){o&1&&(T(),i(0,"div",0),U(1),n(),i(2,"div",1)(3,"button",2),S("click",function(){return p.control.reset()}),c(4,"Reset"),n()(),i(5,"ul",3)(6,"li")(7,"label"),c(8,"Model:"),n(),i(9,"b"),c(10),R(11,"json"),n()(),i(12,"li")(13,"label"),c(14,"Model type:"),n(),i(15,"b"),c(16),n()(),i(17,"li")(18,"label"),c(19,"Touched:"),n(),i(20,"b"),c(21),n()(),i(22,"li")(23,"label"),c(24,"Dirty:"),n(),i(25,"b"),c(26),n()()()),o&2&&(C(10),x(k(11,4,p.control.value)),C(6),x(p.typeOf(p.control.value)),C(5),x(p.control.touched),C(5),x(p.control.dirty))},dependencies:[L,q,Y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{margin-bottom:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .control-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:8px}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:8px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;font-size:14px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--ng-doc-text-muted);margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--ng-doc-border-color)}"]})}return e})();var F=class{};function nt(e){return{provide:F,useExisting:e}}var u=()=>{};var g=(e,r)=>e===r;function B(e){return e!=null&&(typeof e!="string"||e!=="")}function J(e){return B(e)&&(Array.isArray(e)&&!!e.length||typeof e=="string"&&!!e.length||!["string"].includes(typeof e)&&!Array.isArray(e))}function d(e){return b(e)?e():e}var $=(()=>{class e{config;model=V(null);ngControl;changeDetectorRef;disabled=E(!1);touch=u;change=u;constructor(t){if(this.config=t,this.ngControl=s(z,{optional:!0,self:!0}),this.changeDetectorRef=s(N),this.ngControl&&(this.ngControl.valueAccessor=this),this.config?.withNativeElementSupport){let o=s(P).nativeElement,p=s(w);j(()=>{this.disabled()?p.setAttribute(o,"disabled","true"):p.removeAttribute(o,"disabled")})}}get hasValue(){return J(this.model())}registerOnChange(t){this.change=t}registerOnTouched(t){this.touch=t}writeValue(t){this.model()!==t&&this.update(t)}internalUpdateModel(t){this.model.set(t),this.change(this.model()),this.changeDetectorRef.markForCheck()}setDisabledState(t){this.disabled.set(t),this.changeDetectorRef.detectChanges()}update(t){this.model.set(t),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(t),this.changeDetectorRef.markForCheck()}static \u0275fac=function(o){a()};static \u0275dir=l({type:e,inputs:{disabled:[1,"disabled"]},outputs:{disabled:"disabledChange"}})}return e})();var f=(()=>{class e extends ${config;children=new Set;updateFrom=null;requestForUpdate=u;touch=()=>this.config?.host?.touch();onControlChangeFn=u;destroyRef=s(v);constructor(t){super(t),this.config=t,this.destroyRef.onDestroy(()=>this.config?.host?.unregisterControl(this))}ngOnInit(){Promise.resolve().then(()=>this.config?.host?.registerControl(this))}registerControl(t){this.children.add(t),Promise.resolve().then(()=>{this.updateControl(t,this.model())}),t.registerOnControlChange(o=>{this.childControlChange(t,o),this.config?.onChildControlChange?.(t,o)}),t.registerRequestForUpdate(()=>{this.updateControl(t,this.model())})}unregisterControl(t){this.children.delete(t)}registerOnTouched(t){this.touch=()=>{t(),this.config?.host?.touch()}}registerOnControlChange(t){this.onControlChangeFn=t}registerRequestForUpdate(t){this.requestForUpdate=t}updateModel(t){this.updateFrom=null,this.internalUpdateModel(t)}internalUpdateModel(t){super.internalUpdateModel(t),this.onControlChangeFn(t),this.updateControls(this.model())}writeValue(t){this.model()!==t&&(super.writeValue(t),this.updateControls(t),this.onControlChangeFn(t))}writeValueFromHost(t){this.model()!==t&&(super.writeValue(t),this.change(t),this.updateControls(t))}updateControls(t){this.children.forEach(o=>{o!==this.updateFrom&&this.updateControl(o,t)}),this.updateFrom=null}updateControl(t,o){t.writeValueFromHost(o)}childControlChange(t,o){this.model()!==o&&(this.updateFrom=t,this.internalUpdateModel(o),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(o))}static \u0275fac=function(o){a()};static \u0275dir=l({type:e,features:[m]})}return e})();var D=(()=>{class e extends f{config;checked=H(()=>(typeof this.config?.compare=="function"?this.config.compare:d(this.config?.compare?.compareFn??g))(this.model(),d(this.value))?!0:this.isIntermediate?null:!1);constructor(t){super(t),this.config=t}ngOnChanges({value:t}){t&&this.requestForUpdate()}check(){this.updateModel(d(this.value))}uncheck(){if(!("uncheckValue"in(this.config??{})))throw new Error("To use uncheck method you need to provide uncheckValue in DIStateControl config");this.updateModel(this.config.uncheckValue)}intermediate(){this.updateModel(null)}toggle(){this.checked()?this.uncheck():this.check()}get isIntermediate(){return this.model()===null&&!!this.config?.hasIntermediate}static \u0275fac=function(o){a()};static \u0275dir=l({type:e,features:[m,O]})}return e})();var h=class{values=new Set;compareFn;constructor(r,t){this.compareFn=r||g,this.values=new Set(t||[])}get size(){return this.values.size}*[Symbol.iterator](){for(let r of this.values)yield r}add(r){this.find(r)===null&&this.values.add(r)}delete(r){let t=this.find(r);t!==null&&this.values.delete(t)}has(r){return this.values.has(r)||!!this.find(r)}clear(){this.values=new Set}toArray(){return Array.from(this.values)}find(r){if(this.values.has(r))return r;for(let t of this.values)if(this.compareFn(r,t))return t;return null}};var Gt=(()=>{class e extends f{config;proxyModel=new h;constructor(t){super(t),this.config=t}getCompareFn(){return typeof this.config?.compare=="function"?this.config.compare:d(this.config?.compare?.compareFn??g)}internalUpdateModel(t){this.proxyModel=new h(this.getCompareFn(),t),super.internalUpdateModel(t)}writeValue(t){this.proxyModel=new h(this.getCompareFn(),t),super.writeValue(t)}writeValueFromHost(t){this.proxyModel=new h(this.getCompareFn(),t),super.writeValueFromHost(t)}childControlChange(t,o){this.updateFrom=t,this.updateModel(this.getNewModel(t,o)),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(this.model())}getNewModel(t,o){if(t instanceof D)t.checked()?this.proxyModel.add(d(t.value)):this.proxyModel.delete(d(t.value));else if(Array.isArray(o))this.proxyModel=new h(this.getCompareFn(),o);else return this.proxyModel=new h(this.getCompareFn()),null;return this.proxyModel.toArray()}updateControl(t){t instanceof D?t.writeValueFromHost(this.proxyModel.has(d(t.value))?d(t.value):t.config.uncheckValue):t.writeValueFromHost(this.model())}static \u0275fac=function(o){a()};static \u0275dir=l({type:e,features:[m]})}return e})();var Wt=(()=>{class e extends f{config;constructor(t){super(t),this.config=t}registerControl(t){this.children.add(t),Promise.resolve().then(()=>t.writeValueFromHost(this.config.getValue(this.model()))),t.registerOnControlChange(o=>{o=this.config.setValue(this.model(),o),this.childControlChange(t,o),this.config?.onChildControlChange?.(t,o)}),t.registerRequestForUpdate(()=>{this.updateControl(t,this.config.getValue(this.model()))})}updateControl(t,o){t.writeValueFromHost(this.config.getValue(o))}static \u0275fac=function(o){a()};static \u0275dir=l({type:e,features:[m]})}return e})();var M=new _("DI_HOST_CONTROL");function Q(e){return{provide:M,useExisting:e}}function te(e){return e?s(M,e):s(M)}export{X as a,rt as b,F as c,nt as d,f as e,D as f,Gt as g,Wt as h,Q as i,te as j};
