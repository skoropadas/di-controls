import{a as Q}from"./chunk-YYGI6UQY.js";import{a as J,b as S}from"./chunk-WTVINDDQ.js";import{a as K}from"./chunk-JZ3XICWC.js";import{a as q,b as B,c as G,d as Y,e as F,g as $,h as H,i as E,j as x}from"./chunk-P5FZWDKC.js";import"./chunk-YVTLOPOH.js";import{a as V}from"./chunk-MHKQFQEX.js";import"./chunk-IRPIYWWJ.js";import{a as M}from"./chunk-APGG5VNM.js";import{Ca as I,Cb as b,Ea as w,Fa as T,Ha as u,I as N,Ia as j,J as t,K as W,Ka as m,La as i,Wb as cs,_ as p,fb as f,gb as U,ia as d,ka as l,nb as r,pa as g,sb as C,ua as c,ub as y,va as o,wa as z,yb as k}from"./chunk-FWY5D3MO.js";import{a as O,b as R,g as ts}from"./chunk-P2VZOJAX.js";var ps=ts(cs());var X=(()=>{class s extends ${stringifyFn=String;constructor(){super({host:E({skipSelf:!0}),getValue:a=>a?this.stringifyFn(a):"",setValue:()=>null})}static \u0275fac=function(n){return new(n||s)};static \u0275dir=W({type:s,selectors:[["","diComboboxInput",""]],inputs:{stringifyFn:["diComboboxInput","stringifyFn"]},standalone:!0,features:[m([H(s)]),d]})}return s})();function os(s,h){s&1&&(c(0,"div",2),T(1),o())}var is=["*"],v=(()=>{class s extends Y{compareFn=(a,n)=>a===n;stringifyFn=String;opened=!1;constructor(){super({onChildControlChange:a=>{a instanceof F&&this.close()}})}open(){this.opened=!0}close(){this.opened=!1}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-combobox"]],inputs:{compareFn:"compareFn",stringifyFn:"stringifyFn"},standalone:!0,features:[m([H(s),G(s)]),d,i],ngContentSelectors:is,decls:2,vars:2,consts:[["diInputString","",3,"diComboboxInput","focus","blur"],["class","dropdown",4,"ngIf"],[1,"dropdown"]],template:function(n,e){n&1&&(w(),c(0,"input",0),I("focus",function(){return e.open()})("blur",function(){return e.touch()}),o(),g(1,os,2,0,"div",1)),n&2&&(l("diComboboxInput",e.stringifyFn),p(1),l("ngIf",e.opened))},dependencies:[r,U,K,X],styles:["[_nghost-%COMP%]{position:relative;display:inline-block;width:150px}[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;width:100%;color:#000;border:1px solid #ccc;background:#fff;z-index:1}"],changeDetection:0})}return s})();var ds=["*"],A=(()=>{class s extends F{value;constructor(){super({host:E({optional:!0}),compare:N(B,{optional:!0})})}onClick(){this.check()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-option"]],hostBindings:function(n,e){n&1&&I("click",function(){return e.onClick()})},inputs:{value:"value"},standalone:!0,features:[d,i],ngContentSelectors:ds,decls:1,vars:0,template:function(n,e){n&1&&(w(),T(0))},styles:["[_nghost-%COMP%]{display:block;cursor:pointer}[_nghost-%COMP%]:hover{background-color:#e6f7ff}[aria-checked=true][_nghost-%COMP%]{background-color:#71e2ff}"],changeDetection:0})}return s})();function gs(s,h){if(s&1&&(c(0,"di-option",3),u(1),o()),s&2){let a=h.$implicit;l("value",a),p(1),j(a)}}var ss=(()=>{class s{control=new y(null);items=S;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-combobox-demo"]],standalone:!0,features:[i],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(c(0,"di-model-info",0)(1,"di-combobox",1),g(2,gs,2,2,"di-option",2),o()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control),p(1),l("ngForOf",e.items))},dependencies:[r,f,x,v,A,b,C,k],encapsulation:2,changeDetection:0})}return s})();function rs(s,h){if(s&1&&(c(0,"di-radio",3),u(1),o()),s&2){let a=h.$implicit;l("value",a),p(1),j(a)}}var ns=(()=>{class s{control=new y(null);items=S;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-combobox-radio-demo"]],standalone:!0,features:[i],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(c(0,"di-model-info",0)(1,"di-combobox",1),g(2,rs,2,2,"di-radio",2),o()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control),p(1),l("ngForOf",e.items))},dependencies:[r,f,x,v,b,C,k,Q],encapsulation:2,changeDetection:0})}return s})();function hs(s,h){if(s&1&&(c(0,"di-option",3),u(1),o()),s&2){let a=h.$implicit;l("value",a),p(1),j(a.name)}}var as=(()=>{class s{control=new y(null);items=J;compareFruits(a,n){return!!a&&!!n&&a.id===n.id}displayFruit(a){return a?.name??""}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-combobox-object-demo"]],standalone:!0,features:[i],decls:3,vars:5,consts:[[3,"control"],[3,"formControl","compareFn","stringifyFn"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(c(0,"di-model-info",0)(1,"di-combobox",1),g(2,hs,2,2,"di-option",2),o()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control)("compareFn",e.compareFruits)("stringifyFn",e.displayFruit),p(1),l("ngForOf",e.items))},dependencies:[r,f,v,x,A,b,C,k],encapsulation:2,changeDetection:0})}return s})();var us={title:"Combobox",mdFile:"./index.md",category:q,demos:{ComboboxDemoComponent:ss,ComboboxRadioDemoComponent:ns,ComboboxObjectDemoComponent:as},keyword:"ComboboxPage"},_=us;var es=[];var js={ComboboxDemoComponent:[{title:"combobox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">InputStringDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'../../inputs/components/input-string.directive'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">ComboboxInputDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'./combobox-input.directive'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-combobox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde">InputStringDirective</span>, <span class="hljs-title class_ ngde">ComboboxInputDirective</span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">      diInputString</span>
</span><span class="line ngde"><span class="hljs-string ngde">      [diComboboxInput]="stringifyFn"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (focus)="open()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (blur)="touch()" /></span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;div class="dropdown" *ngIf="opened"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;ng-content>&#x3C;/ng-content></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/div></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        width: 150px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        .dropdown {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          position: absolute;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 100%;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          color: #000;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: 1px solid #ccc;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background: #fff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          z-index: 1;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxComponent</span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T>
</span><span class="line ngde">{
</span><span class="line ngde">  <span class="hljs-comment ngde">// For comparing immutable objects</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">compareFn</span>: <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>&#x3C;T> = <span class="hljs-function ngde">(<span class="hljs-params ngde">a, b</span>) =></span> a === b;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-comment ngde">// To convert value to string for input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-attr ngde">opened</span>: <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">onChildControlChange</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">control: <a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a>&#x3C;T></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-comment ngde">// Close dropdown if value was selected</span>
</span><span class="line ngde">        <span class="hljs-keyword ngde">if</span> (control <span class="hljs-keyword ngde">instanceof</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>) {
</span><span class="line ngde">          <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">close</span>();
</span><span class="line ngde">        }
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">open</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">close</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"combobox-input.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'[diComboboxInput]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this directive as a host to make it a host for the input</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxInputDirective</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxInputDirective</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>&#x3C;T, <span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-comment ngde">// Function to convert value to string</span>
</span><span class="line ngde">  <span class="hljs-comment ngde">// We can use it to get value that will be displayed in input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span>, <span class="hljs-attr ngde">alias</span>: <span class="hljs-string ngde">'diComboboxInput'</span> })
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control (combobox) to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-comment ngde">// We use \`skipSelf\` to skip this directive because it's a host</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">skipSelf</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Convert selected value in combobox to string for input</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">getValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value</span>) =></span> (value ? <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">stringifyFn</span>(value) : <span class="hljs-string ngde">''</span>),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Clear combobox model when input's changed</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">setValue</span>: <span class="hljs-function ngde">() =></span> <span class="hljs-literal ngde">null</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"input-string.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>, inject } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'input[diInputString]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">InputStringDirective</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-keyword ngde">readonly</span> <span class="hljs-attr ngde">inputElement</span>: <span class="hljs-title class_ ngde">HTMLInputElement</span> =
</span><span class="line ngde">    <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>).<span class="hljs-property ngde">nativeElement</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">onIncomingUpdate</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T | <span class="hljs-literal ngde">null</span></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> = <span class="hljs-title class_ ngde">String</span>(value ?? <span class="hljs-string ngde">''</span>);
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'input'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onInput</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">updateModel</span>(<span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> <span class="hljs-keyword ngde">as</span> <span class="hljs-built_in ngde">unknown</span> <span class="hljs-keyword ngde">as</span> T);
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'blur'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onBlur</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">touch</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"option.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-option'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;:hover {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #e6f7ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;[aria-checked='true'] {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #71e2ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">OptionComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span> })
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> value!: T;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> compare host to get access to its compare function</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'click'</span>)
</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClick</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">check</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-combobox</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>
</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-option</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span>></span>{{ item }}<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-option</span>></span>
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-combobox</span>></span>
</span></code></pre>`,opened:!0}],ComboboxRadioDemoComponent:[{title:"combobox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">InputStringDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'../../inputs/components/input-string.directive'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">ComboboxInputDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'./combobox-input.directive'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-combobox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde">InputStringDirective</span>, <span class="hljs-title class_ ngde">ComboboxInputDirective</span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">      diInputString</span>
</span><span class="line ngde"><span class="hljs-string ngde">      [diComboboxInput]="stringifyFn"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (focus)="open()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (blur)="touch()" /></span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;div class="dropdown" *ngIf="opened"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;ng-content>&#x3C;/ng-content></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/div></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        width: 150px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        .dropdown {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          position: absolute;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 100%;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          color: #000;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: 1px solid #ccc;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background: #fff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          z-index: 1;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxComponent</span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T>
</span><span class="line ngde">{
</span><span class="line ngde">  <span class="hljs-comment ngde">// For comparing immutable objects</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">compareFn</span>: <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>&#x3C;T> = <span class="hljs-function ngde">(<span class="hljs-params ngde">a, b</span>) =></span> a === b;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-comment ngde">// To convert value to string for input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-attr ngde">opened</span>: <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">onChildControlChange</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">control: <a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a>&#x3C;T></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-comment ngde">// Close dropdown if value was selected</span>
</span><span class="line ngde">        <span class="hljs-keyword ngde">if</span> (control <span class="hljs-keyword ngde">instanceof</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>) {
</span><span class="line ngde">          <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">close</span>();
</span><span class="line ngde">        }
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">open</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">close</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"combobox-input.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'[diComboboxInput]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this directive as a host to make it a host for the input</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxInputDirective</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxInputDirective</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>&#x3C;T, <span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-comment ngde">// Function to convert value to string</span>
</span><span class="line ngde">  <span class="hljs-comment ngde">// We can use it to get value that will be displayed in input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span>, <span class="hljs-attr ngde">alias</span>: <span class="hljs-string ngde">'diComboboxInput'</span> })
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control (combobox) to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-comment ngde">// We use \`skipSelf\` to skip this directive because it's a host</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">skipSelf</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Convert selected value in combobox to string for input</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">getValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value</span>) =></span> (value ? <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">stringifyFn</span>(value) : <span class="hljs-string ngde">''</span>),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Clear combobox model when input's changed</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">setValue</span>: <span class="hljs-function ngde">() =></span> <span class="hljs-literal ngde">null</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"input-string.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>, inject } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'input[diInputString]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">InputStringDirective</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-keyword ngde">readonly</span> <span class="hljs-attr ngde">inputElement</span>: <span class="hljs-title class_ ngde">HTMLInputElement</span> =
</span><span class="line ngde">    <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>).<span class="hljs-property ngde">nativeElement</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">onIncomingUpdate</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T | <span class="hljs-literal ngde">null</span></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> = <span class="hljs-title class_ ngde">String</span>(value ?? <span class="hljs-string ngde">''</span>);
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'input'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onInput</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">updateModel</span>(<span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> <span class="hljs-keyword ngde">as</span> <span class="hljs-built_in ngde">unknown</span> <span class="hljs-keyword ngde">as</span> T);
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'blur'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onBlur</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">touch</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"radio.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/forms'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-radio'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input type="radio" [checked]="checked()" (change)="check(); touch()" /></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;ng-content>&#x3C;/ng-content></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/label></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: inline-flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        label {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          gap: 4px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">RadioComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-combobox</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>
</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-radio</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span>></span>{{ item }}<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-radio</span>></span>
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-combobox</span>></span>
</span></code></pre>`,opened:!0}],ComboboxObjectDemoComponent:[{title:"combobox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">InputStringDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'../../inputs/components/input-string.directive'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">ComboboxInputDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'./combobox-input.directive'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-combobox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde">InputStringDirective</span>, <span class="hljs-title class_ ngde">ComboboxInputDirective</span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">      diInputString</span>
</span><span class="line ngde"><span class="hljs-string ngde">      [diComboboxInput]="stringifyFn"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (focus)="open()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">      (blur)="touch()" /></span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;div class="dropdown" *ngIf="opened"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;ng-content>&#x3C;/ng-content></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/div></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        width: 150px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        .dropdown {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          position: absolute;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 100%;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          color: #000;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: 1px solid #ccc;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background: #fff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          z-index: 1;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxComponent</span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T>
</span><span class="line ngde">{
</span><span class="line ngde">  <span class="hljs-comment ngde">// For comparing immutable objects</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">compareFn</span>: <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>&#x3C;T> = <span class="hljs-function ngde">(<span class="hljs-params ngde">a, b</span>) =></span> a === b;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-comment ngde">// To convert value to string for input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-attr ngde">opened</span>: <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">onChildControlChange</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">control: <a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a>&#x3C;T></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-comment ngde">// Close dropdown if value was selected</span>
</span><span class="line ngde">        <span class="hljs-keyword ngde">if</span> (control <span class="hljs-keyword ngde">instanceof</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>) {
</span><span class="line ngde">          <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">close</span>();
</span><span class="line ngde">        }
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">open</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">close</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"combobox-input.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'[diComboboxInput]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this directive as a host to make it a host for the input</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxInputDirective</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxInputDirective</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>&#x3C;T, <span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-comment ngde">// Function to convert value to string</span>
</span><span class="line ngde">  <span class="hljs-comment ngde">// We can use it to get value that will be displayed in input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span>, <span class="hljs-attr ngde">alias</span>: <span class="hljs-string ngde">'diComboboxInput'</span> })
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control (combobox) to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-comment ngde">// We use \`skipSelf\` to skip this directive because it's a host</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">skipSelf</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Convert selected value in combobox to string for input</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">getValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value</span>) =></span> (value ? <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">stringifyFn</span>(value) : <span class="hljs-string ngde">''</span>),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Clear combobox model when input's changed</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">setValue</span>: <span class="hljs-function ngde">() =></span> <span class="hljs-literal ngde">null</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"input-string.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>, inject } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'input[diInputString]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">InputStringDirective</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-keyword ngde">readonly</span> <span class="hljs-attr ngde">inputElement</span>: <span class="hljs-title class_ ngde">HTMLInputElement</span> =
</span><span class="line ngde">    <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ElementRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ElementRef</a></span>).<span class="hljs-property ngde">nativeElement</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">onIncomingUpdate</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T | <span class="hljs-literal ngde">null</span></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> = <span class="hljs-title class_ ngde">String</span>(value ?? <span class="hljs-string ngde">''</span>);
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'input'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onInput</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">updateModel</span>(<span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">inputElement</span>.<span class="hljs-property ngde">value</span> <span class="hljs-keyword ngde">as</span> <span class="hljs-built_in ngde">unknown</span> <span class="hljs-keyword ngde">as</span> T);
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'blur'</span>)
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-title function_ ngde">onBlur</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">touch</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"option.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-option'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;:hover {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #e6f7ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;[aria-checked='true'] {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #71e2ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">OptionComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span> })
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> value!: T;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> compare host to get access to its compare function</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'click'</span>)
</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClick</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">check</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde">&#x3C;<span class="hljs-name ngde">di-combobox</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">  [</span><span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">  [</span><span class="hljs-attr ngde">compareFn</span>]=<span class="hljs-string ngde">"compareFruits"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">  [</span><span class="hljs-attr ngde">stringifyFn</span>]=<span class="hljs-string ngde">"displayFruit"</span>>
</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">di-option</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">    ></span>{{ item.name }}&#x3C;/di-option
</span><span class="line ngde">  >
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-combobox</span>></span>
</span></code></pre>`,opened:!0}]},ls=js;var ms=`<h1 id="combobox" class="ngde">Combobox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#combobox"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">In this section, we will discuss creating a combobox using this library. To start, let's outline the list of requirements and necessary components.</p><h3 id="the-combobox-should-consist-of-the-following-components" class="ngde">The combobox should consist of the following components<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#the-combobox-should-consist-of-the-following-components"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u2699\uFE0F Input field</li><li class="ngde">\u2699\uFE0F Dropdown</li><li class="ngde">\u2699\uFE0F List of items provided from external sources using <code class="ngde">ng-content</code> that will be displayed in the dropdown</li></ul><h3 id="list-of-requirements" class="ngde">List of requirements<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#list-of-requirements"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u{1F6A9} List items should be provided via <code class="ngde">ng-content</code>.</li><li class="ngde">\u{1F6A9} When an item from the list is selected, its value should be set in the input field.</li><li class="ngde">\u{1F6A9} When the input field gains focus, the dropdown should automatically open.</li><li class="ngde">\u{1F6A9} When an item from the list is selected, the dropdown should close.</li><li class="ngde">\u{1F6A9} If the user changes the text in the input field while an item is selected, the model's value should be reset.</li><li class="ngde">\u{1F6A9} The combobox should support working with immutable objects.</li></ul><h2 id="creating-a-combobox" class="ngde">Creating a combobox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#creating-a-combobox"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="option" class="ngde">Option<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#option"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">Let's start by creating a component that will represent the list item. We will call it <code class="ngde">Option</code>. Option should be a state control, which mean that it can be selected and deselected. To do this, we will inherit from the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> class. <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> is a base class for all state controls, it provides all the necessary methods for working with the state of the control.</p><p class="ngde">We will highlight the item upon clicking on it, so we need to subscribe to click events and call the <code class="ngde">check</code> method provided by <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code>.</p><p class="ngde">We will also use <code class="ngde">aria-checked='true'</code> property in our styles to highlight the selected item.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="option.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">HostListener</a></span>, inject, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-option'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;:hover {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #e6f7ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26;[aria-checked='true'] {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background-color: #71e2ff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">OptionComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({<span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span>})
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> value!: T;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> compare host to get access to its compare function</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/HostListener" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@HostListener</a></span>(<span class="hljs-string ngde">'click'</span>)
</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClick</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">check</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h3 id="input-field" class="ngde">Input field<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#input-field"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">For the input field, we will reuse the <code class="ngde">diInputString</code> that we created in the <a href="/examples/inputs" class="ngde">Inputs</a> page. We will also create a directive that will be responsible for resetting the value of the combobox if the user changes the input value. We will call it <code class="ngde">ComboboxInputDirective</code>.</p><p class="ngde">This directive will inherit from the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></code> class, because it allows you to modify the behavior of the child control, we also need to implement this directive as a host to turn it into a kind of middleware between the <code class="ngde">diInputString</code> directive and our future combobox.</p><p class="ngde">Since our combobox needs to support working with objects, we will need an additional <code class="ngde">stringifyFn</code> function that we will be used to convert an object to a string.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="combobox-input.directive.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>, <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'[diComboboxInput]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this directive as a host to make it a host for the input</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxInputDirective</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxInputDirective</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIProxyControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIProxyControl</a></span>&#x3C;T, <span class="hljs-built_in ngde">string</span>> {
</span><span class="line ngde">  <span class="hljs-comment ngde">// Function to convert value to string</span>
</span><span class="line ngde">  <span class="hljs-comment ngde">// We can use it to get value that will be displayed in input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>({ <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">true</span>, <span class="hljs-attr ngde">alias</span>: <span class="hljs-string ngde">'diComboboxInput'</span> })
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-comment ngde">// <a href="https://angular.io/api/core/Inject" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Inject</a> host control (combobox) to get access to its model</span>
</span><span class="line ngde">      <span class="hljs-comment ngde">// We use \`skipSelf\` to skip this directive because it's a host</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({<span class="hljs-attr ngde">skipSelf</span>: <span class="hljs-literal ngde">true</span>}),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Convert selected value in combobox to string for input</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">getValue</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value</span>) =></span> (value ? <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">stringifyFn</span>(value) : <span class="hljs-string ngde">''</span>),
</span><span class="line ngde">      <span class="hljs-comment ngde">// Clear combobox model when input's changed</span>
</span><span class="line ngde">      <span class="hljs-attr ngde">setValue</span>: <span class="hljs-function ngde">() =></span> <span class="hljs-literal ngde">null</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h3 id="combobox-component" class="ngde">Combobox component<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#combobox-component"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">Now let's create the main component, which will be responsible for the combobox. We will call it <code class="ngde">ComboboxComponent</code>. To keep it simple for creating the dropdown we use <code class="ngde">position: absolute</code>.</p><p class="ngde">This component will consolidate all child components found in the template or passed through <code class="ngde">ng-content</code>, meaning they will share one model.</p><p class="ngde">The first thing to do is to provide the component as a host so that all child components can register within it. Additionally, we need to implement the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code> interface and provide the component as a compare host. This is necessary for our option component to access the <code class="ngde">compareFn</code> of our combobox and use it to determine its state (checked or not). Without this function, you may encounter issues with determining the state for immutable objects.</p><p class="ngde">To close the dropdown when an item in the list is selected, we can utilize the <code class="ngde">onChildControlChange</code> hook. It is called every time the model of the current control is changed by a child control.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="combobox.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">InputStringDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'../../inputs/components/input-string.directive'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">ComboboxInputDirective</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'./combobox-input.directive'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-combobox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde">InputStringDirective</span>, <span class="hljs-title class_ ngde">ComboboxInputDirective</span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;input diInputString [diComboboxInput]="stringifyFn" (focus)="open()" (blur)="touch()" /></span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;div class="dropdown" *ngIf="opened"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;ng-content>&#x3C;/ng-content></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/div></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        width: 150px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        .dropdown {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          position: absolute;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 100%;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          color: #000;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: 1px solid #ccc;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          background: #fff;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          z-index: 1;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">ComboboxComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">ComboboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T> <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-comment ngde">// For comparing immutable objects</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">compareFn</span>: <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>&#x3C;T> = <span class="hljs-function ngde">(<span class="hljs-params ngde">a, b</span>) =></span> a === b;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-comment ngde">// To convert value to string for input</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">stringifyFn</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">value: T</span>) =></span> <span class="hljs-built_in ngde">string</span> = <span class="hljs-title class_ ngde">String</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-keyword ngde">protected</span> <span class="hljs-attr ngde">opened</span>: <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">onChildControlChange</span>: <span class="hljs-function ngde">(<span class="hljs-params ngde">control: <a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a>&#x3C;T></span>) =></span> {
</span><span class="line ngde">        <span class="hljs-comment ngde">// Close dropdown if value was selected</span>
</span><span class="line ngde">        <span class="hljs-keyword ngde">if</span> (control <span class="hljs-keyword ngde">instanceof</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>) {
</span><span class="line ngde">          <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-title function_ ngde">close</span>();
</span><span class="line ngde">        }
</span><span class="line ngde">      },
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">open</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">close</span>(): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">opened</span> = <span class="hljs-literal ngde">false</span>;
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h2 id="combobox-1" class="ngde">Combobox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#combobox-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="ComboboxDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="combobox-with-objects" class="ngde">Combobox with objects<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#combobox-with-objects"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="ComboboxObjectDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="combobox-with-radio-buttons" class="ngde">Combobox with radio buttons<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/combobox#combobox-with-radio-buttons"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Since the list items are provided externally, you can replace them with any other state controls. For example, instead of using <code class="ngde">di-option</code>, you can pass <code class="ngde">di-radio</code>, and the combobox will continue to work correctly.</p><ng-doc-demo componentname="ComboboxRadioDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo>`,fs=(()=>{class s extends M{routePrefix="";pageType="guide";pageContent=ms;page=_;demoAssets=ls;constructor(){super()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["ng-doc-page-examples-combobox"]],standalone:!0,features:[m([{provide:M,useExisting:s},es,_.providers??[]]),d,i],decls:1,vars:0,template:function(n,e){n&1&&z(0,"ng-doc-page")},dependencies:[V],encapsulation:2,changeDetection:0})}return s})(),Cs=[R(O({},(0,ps.isRoute)(_.route)?_.route:{}),{path:"",component:fs,title:"Combobox"})],fn=Cs;export{fs as DynamicComponent,fn as default};
