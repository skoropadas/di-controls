import{a as z}from"./chunk-52NT7HLW.js";import{b as q}from"./chunk-2AS7TMJP.js";import{c as L}from"./chunk-2AMVQEOW.js";import{$ as O,Aa as V,Ca as E,Db as k,Ea as a,Fb as N,Ga as h,Q as _,S as s,V as I,Va as i,Vb as H,Wa as n,Xb as j,cb as A,da as b,eb as S,fb as T,nb as c,ob as x,pa as C,ra as l,va as v,xa as w,xb as U,ya as P,yb as R}from"./chunk-MQXCTTB7.js";var $={title:"Examples",expanded:!0,order:3},W=$;var G=["*"],ot=(()=>{class e{control;typeOf(t){return typeof t+(typeof t=="object"&&t!==null?` (${t.constructor.name})`:"")}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=E({type:e,selectors:[["di-model-info"]],inputs:{control:"control"},ngContentSelectors:G,decls:27,vars:6,consts:[[1,"control"],[1,"buttons"],["ng-doc-button","",3,"click"],[1,"control-info"]],template:function(o,f){o&1&&(S(),i(0,"div",0),T(1),n(),i(2,"div",1)(3,"button",2),A("click",function(){return f.control.reset()}),c(4,"Reset"),n()(),i(5,"ul",3)(6,"li")(7,"label"),c(8,"Model:"),n(),i(9,"b"),c(10),U(11,"json"),n()(),i(12,"li")(13,"label"),c(14,"Model type:"),n(),i(15,"b"),c(16),n()(),i(17,"li")(18,"label"),c(19,"Touched:"),n(),i(20,"b"),c(21),n()(),i(22,"li")(23,"label"),c(24,"Dirty:"),n(),i(25,"b"),c(26),n()()()),o&2&&(C(10),x(R(11,4,f.control.value)),C(6),x(f.typeOf(f.control.value)),C(5),x(f.control.touched),C(5),x(f.control.dirty))},dependencies:[j,H,z],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{margin-bottom:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .control-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:8px}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:8px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;font-size:14px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--ng-doc-text-muted);margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--ng-doc-border-color)}"]})}return e})();var F=class{};function it(e){return{provide:F,useExisting:e}}var u=()=>{};var g=(e,r)=>e===r;function Y(e){return e!=null&&(typeof e!="string"||e!=="")}function B(e){return Y(e)&&(Array.isArray(e)&&!!e.length||typeof e=="string"&&!!e.length||!["string"].includes(typeof e)&&!Array.isArray(e))}function d(e){return w(e)?e():e}var J=(()=>{class e{config;model=P(null);ngControl;changeDetectorRef;disabled=V(!1);touch=u;change=u;#t=s(b).nativeElement;#e=s(v);constructor(t){this.config=t,this.ngControl=s(L,{optional:!0,self:!0}),this.changeDetectorRef=s(k),this.ngControl&&!this.ngControl.valueAccessor&&(this.ngControl.valueAccessor=this),this.config?.withNativeElementSupport&&q(this.disabled).subscribe(o=>this.addDisabledAttribute(o))}get hasValue(){return B(this.model())}registerOnChange(t){this.change=t}registerOnTouched(t){this.touch=t}writeValue(t){this.model()!==t&&this.update(t)}internalUpdateModel(t){this.model.set(t),this.change(this.model()),this.changeDetectorRef.markForCheck()}setDisabledState(t){this.disabled.set(t),this.addDisabledAttribute(t)}update(t){this.model.set(t),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(t),this.changeDetectorRef.markForCheck()}addDisabledAttribute(t){this.config?.withNativeElementSupport&&(t?this.#e.setAttribute(this.#t,"disabled","true"):this.#e.removeAttribute(this.#t,"disabled"))}static \u0275fac=function(o){l()};static \u0275dir=a({type:e,inputs:{disabled:[1,"disabled"]},outputs:{disabled:"disabledChange"}})}return e})();var m=(()=>{class e extends J{config;children=new Set;updateFrom=null;requestForUpdate=u;touch=()=>this.config?.host?.touch();onControlChangeFn=u;destroyRef=s(O);constructor(t){super(t),this.config=t,this.destroyRef.onDestroy(()=>this.config?.host?.unregisterControl(this))}ngOnInit(){Promise.resolve().then(()=>this.config?.host?.registerControl(this))}registerControl(t){this.children.add(t),Promise.resolve().then(()=>{this.updateControl(t,this.model())}),t.registerOnControlChange(o=>{this.childControlChange(t,o),this.config?.onChildControlChange?.(t,o)}),t.registerRequestForUpdate(()=>{this.updateControl(t,this.model())})}unregisterControl(t){this.children.delete(t)}registerOnTouched(t){this.touch=()=>{t(),this.config?.host?.touch()}}registerOnControlChange(t){this.onControlChangeFn=t}registerRequestForUpdate(t){this.requestForUpdate=t}updateModel(t){this.updateFrom=null,this.internalUpdateModel(t)}internalUpdateModel(t){super.internalUpdateModel(t),this.onControlChangeFn(t),this.updateControls(this.model())}writeValue(t){this.model()!==t&&(super.writeValue(t),this.updateControls(t),this.onControlChangeFn(t))}writeValueFromHost(t){this.model()!==t&&(super.writeValue(t),this.change(t),this.updateControls(t))}updateControls(t){this.children.forEach(o=>{o!==this.updateFrom&&this.updateControl(o,t)}),this.updateFrom=null}updateControl(t,o){t.writeValueFromHost(o)}childControlChange(t,o){this.model()!==o&&(this.updateFrom=t,this.internalUpdateModel(o),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(o))}static \u0275fac=function(o){l()};static \u0275dir=a({type:e,features:[h]})}return e})();var D=(()=>{class e extends m{config;checked=N(()=>(typeof this.config?.compare=="function"?this.config.compare:d(this.config?.compare?.compareFn??g))(this.model(),d(this.value))?!0:this.isIntermediate?null:!1);constructor(t){super(t),this.config=t}ngOnChanges({value:t}){t&&this.requestForUpdate()}check(){this.updateModel(d(this.value))}uncheck(){if(!("uncheckValue"in(this.config??{})))throw new Error("To use uncheck method you need to provide uncheckValue in DIStateControl config");this.updateModel(this.config.uncheckValue)}intermediate(){this.updateModel(null)}toggle(){this.checked()?this.uncheck():this.check()}get isIntermediate(){return this.model()===null&&!!this.config?.hasIntermediate}static \u0275fac=function(o){l()};static \u0275dir=a({type:e,standalone:!1,features:[h,I]})}return e})();var p=class{values=new Set;compareFn;constructor(r,t){this.compareFn=r||g,this.values=new Set(t||[])}get size(){return this.values.size}*[Symbol.iterator](){for(let r of this.values)yield r}add(r){this.find(r)===null&&this.values.add(r)}delete(r){let t=this.find(r);t!==null&&this.values.delete(t)}has(r){return this.values.has(r)||!!this.find(r)}clear(){this.values=new Set}toArray(){return Array.from(this.values)}find(r){if(this.values.has(r))return r;for(let t of this.values)if(this.compareFn(r,t))return t;return null}};var Gt=(()=>{class e extends m{config;proxyModel=new p;constructor(t){super(t),this.config=t}getCompareFn(){return typeof this.config?.compare=="function"?this.config.compare:d(this.config?.compare?.compareFn??g)}internalUpdateModel(t){this.proxyModel=new p(this.getCompareFn(),t),super.internalUpdateModel(t)}writeValue(t){this.proxyModel=new p(this.getCompareFn(),t),super.writeValue(t)}writeValueFromHost(t){this.proxyModel=new p(this.getCompareFn(),t),super.writeValueFromHost(t)}childControlChange(t,o){this.updateFrom=t,this.updateModel(this.getNewModel(t,o)),this.config?.onIncomingUpdate&&this.config.onIncomingUpdate(this.model())}getNewModel(t,o){if(t instanceof D)t.checked()?this.proxyModel.add(d(t.value)):this.proxyModel.delete(d(t.value));else if(Array.isArray(o))this.proxyModel=new p(this.getCompareFn(),o);else return this.proxyModel=new p(this.getCompareFn()),null;return this.proxyModel.toArray()}updateControl(t){t instanceof D?t.writeValueFromHost(this.proxyModel.has(d(t.value))?d(t.value):t.config.uncheckValue):t.writeValueFromHost(this.model())}static \u0275fac=function(o){l()};static \u0275dir=a({type:e,features:[h]})}return e})();var Wt=(()=>{class e extends m{config;constructor(t){super(t),this.config=t}registerControl(t){this.children.add(t),Promise.resolve().then(()=>t.writeValueFromHost(this.config.getValue(this.model()))),t.registerOnControlChange(o=>{o=this.config.setValue(this.model(),o),this.childControlChange(t,o),this.config?.onChildControlChange?.(t,o)}),t.registerRequestForUpdate(()=>{this.updateControl(t,this.config.getValue(this.model()))})}updateControl(t,o){t.writeValueFromHost(this.config.getValue(o))}static \u0275fac=function(o){l()};static \u0275dir=a({type:e,features:[h]})}return e})();var M=new _("DI_HOST_CONTROL");function K(e){return{provide:M,useExisting:e}}function te(e){return e?s(M,e):s(M)}export{W as a,F as b,it as c,m as d,D as e,Gt as f,Wt as g,K as h,te as i,ot as j};
