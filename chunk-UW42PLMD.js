import{a as _}from"./chunk-LWRF7LN3.js";import{a as W,b as I}from"./chunk-WTVINDDQ.js";import{a as U,b as V,e as q,i as Y,j}from"./chunk-P5FZWDKC.js";import"./chunk-YVTLOPOH.js";import{a as z}from"./chunk-MHKQFQEX.js";import"./chunk-IRPIYWWJ.js";import{a as T}from"./chunk-APGG5VNM.js";import{Bb as L,Ca as A,Cb as u,Ea as H,Fa as O,Ha as r,I as S,Ia as D,J as t,Ka as P,La as d,Ma as G,Wb as ns,_ as o,fb as b,ia as x,ka as l,nb as i,pa as y,pb as N,sb as g,ua as p,ub as h,va as c,vb as R,wa as E,yb as m}from"./chunk-FWY5D3MO.js";import{a as M,b as F,g as ss}from"./chunk-P2VZOJAX.js";var Z=ss(ns());var as=["*"],C=(()=>{class s extends q{value=!0;constructor(){super({uncheckValue:!1,host:Y({optional:!0}),compare:S(V,{optional:!0}),hasIntermediate:!0})}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-checkbox"]],inputs:{value:"value"},standalone:!0,features:[x,d],ngContentSelectors:as,decls:3,vars:2,consts:[["type","checkbox",3,"ngModel","indeterminate","ngModelChange"]],template:function(n,a){n&1&&(H(),p(0,"label")(1,"input",0),A("ngModelChange",function(){return a.toggle(),a.touch()}),c(),O(2),c()),n&2&&(o(1),l("ngModel",a.checked())("indeterminate",a.isIntermediate))},dependencies:[i,L,N,g,R],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;gap:8px}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{display:flex;gap:4px}"],changeDetection:0})}return s})();var $=(()=>{class s{control=new h(null);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-checkbox-demo"]],standalone:!0,features:[d],decls:3,vars:2,consts:[[3,"control"],[3,"formControl"]],template:function(n,a){n&1&&(p(0,"di-model-info",0)(1,"di-checkbox",1),r(2,"Checkbox"),c()()),n&2&&(l("control",a.control),o(1),l("formControl",a.control))},dependencies:[i,C,u,g,m,j],encapsulation:2})}return s})();function ls(s,w){if(s&1&&(p(0,"di-checkbox",3),r(1),c()),s&2){let e=w.$implicit;l("value",e),o(1),D(e)}}var B=(()=>{class s{control=new h([I[2]]);items=I;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-checkbox-group-demo"]],standalone:!0,features:[d],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,a){n&1&&(p(0,"di-model-info",0)(1,"di-checkbox-group",1),y(2,ls,2,2,"di-checkbox",2),c()()),n&2&&(l("control",a.control),o(1),l("formControl",a.control),o(1),l("ngForOf",a.items))},dependencies:[i,b,C,j,u,g,m,_],encapsulation:2,changeDetection:0})}return s})();function os(s,w){if(s&1&&(p(0,"di-checkbox",3),r(1),c()),s&2){let e=w.$implicit;l("value",e),o(1),D(e.name)}}var J=(()=>{class s{control=new h([{id:1,name:"Apple"}]);items=W;compareFruits(e,n){return e?.id===n?.id}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-checkbox-group-object"]],standalone:!0,features:[d],decls:3,vars:4,consts:[[3,"control"],[3,"formControl","compareFn"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,a){n&1&&(p(0,"di-model-info",0)(1,"di-checkbox-group",1),y(2,os,2,2,"di-checkbox",2),c()()),n&2&&(l("control",a.control),o(1),l("formControl",a.control)("compareFn",a.compareFruits),o(1),l("ngForOf",a.items))},dependencies:[i,b,C,j,u,g,m,_],encapsulation:2,changeDetection:0})}return s})();var cs=()=>({id:1,name:"Apple"}),K=(()=>{class s{control=new h(null);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["di-checkbox-object"]],standalone:!0,features:[d],decls:3,vars:4,consts:[[3,"control"],[3,"formControl","value"]],template:function(n,a){n&1&&(p(0,"di-model-info",0)(1,"di-checkbox",1),r(2,"Apple"),c()()),n&2&&(l("control",a.control),o(1),l("formControl",a.control)("value",G(3,cs)))},dependencies:[i,C,u,g,m,j],encapsulation:2})}return s})();var ts={title:"Checkbox",mdFile:"./index.md",category:U,demos:{CheckboxDemoComponent:$,CheckboxObjectComponent:K,CheckboxGroupDemoComponent:B,CheckboxGroupObjectComponent:J},keyword:"CheckboxPage"},f=ts;var Q=[];var ps={CheckboxDemoComponent:[{title:"checkbox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
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
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">        type="checkbox"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [ngModel]="checked()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        (ngModelChange)="toggle(); touch()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [indeterminate]="isIntermediate" /></span>
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
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>&#x3C;T>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">hasIntermediate</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>Checkbox<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox</span>></span>
</span></code></pre>`,opened:!0}],CheckboxObjectComponent:[{title:"checkbox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
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
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">        type="checkbox"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [ngModel]="checked()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        (ngModelChange)="toggle(); touch()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [indeterminate]="isIntermediate" /></span>
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
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>&#x3C;T>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">hasIntermediate</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde">&#x3C;<span class="hljs-name ngde">di-checkbox</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"{ id: 1, name: 'Apple' }"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">  ></span>Apple&#x3C;/di-checkbox
</span><span class="line ngde">>
</span></code></pre>`,opened:!0}],CheckboxGroupDemoComponent:[{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox-group'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;
</span><span class="line ngde">  T = <span class="hljs-built_in ngde">unknown</span>,
</span><span class="line ngde">> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"checkbox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
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
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">        type="checkbox"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [ngModel]="checked()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        (ngModelChange)="toggle(); touch()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [indeterminate]="isIntermediate" /></span>
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
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>&#x3C;T>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">hasIntermediate</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>
</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">di-checkbox</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">    ></span>{{ item }}&#x3C;/di-checkbox
</span><span class="line ngde">  >
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox-group</span>></span>
</span></code></pre>`,opened:!0}],CheckboxGroupObjectComponent:[{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox-group'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;
</span><span class="line ngde">  T = <span class="hljs-built_in ngde">unknown</span>,
</span><span class="line ngde">> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"checkbox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
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
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">        type="checkbox"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [ngModel]="checked()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        (ngModelChange)="toggle(); touch()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [indeterminate]="isIntermediate" /></span>
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
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>&#x3C;T>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">hasIntermediate</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span> [<span class="hljs-attr ngde">compareFn</span>]=<span class="hljs-string ngde">"compareFruits"</span>></span>
</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">di-checkbox</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">    ></span>{{ item.name }}&#x3C;/di-checkbox
</span><span class="line ngde">  >
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox-group</span>></span>
</span></code></pre>`,opened:!0}]},X=ps;var ds=`<h1 id="checkbox" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">In this section, we will discuss creating a checkbox and checkbox group using this library. To start, let's outline the list of requirements and necessary components.</p><h3 id="the-checkbox-should-consist-of-the-following-components" class="ngde">The checkbox should consist of the following components<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#the-checkbox-should-consist-of-the-following-components"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u2699\uFE0F Checkbox group</li><li class="ngde">\u2699\uFE0F Checkbox provided from external sources using <code class="ngde">ng-content</code></li></ul><h3 id="list-of-requirements" class="ngde">List of requirements<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#list-of-requirements"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u{1F6A9} Checkbox should be provided via <code class="ngde">ng-content</code>.</li><li class="ngde">\u{1F6A9} When an item from the list is selected, its value should be added to the checkbox group's model.</li><li class="ngde">\u{1F6A9} When an item from the list is deselected, its value should be removed from the checkbox group's model.</li><li class="ngde">\u{1F6A9} If checkbox group's model is changed, the checkbox should be selected or deselected.</li><li class="ngde">\u{1F6A9} The checkbox should support working with immutable objects.</li></ul><h2 id="creating-a-checkbox-and-checkbox-group" class="ngde">Creating a checkbox and checkbox group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#creating-a-checkbox-and-checkbox-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="checkbox-1" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">The checkbox is a state control, and the user should have the ability to freely change its state from checked to unchecked and vice versa. To implement the state control, we need to inherit it from <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code>, which will provide us with all the necessary functionality.</p><p class="ngde">Internally, we will also use a native <code class="ngde">input type="checkbox"</code> to maintain the native behavior. For example, when a checkbox is used inside a <code class="ngde">label</code> tag, it should change its state when the label is clicked.</p><p class="ngde">We also need to inject <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code> to access the <code class="ngde">compareFn</code> from the checkbox group in the future. This function will help us compare immutable objects.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="checkbox.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, inject, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/forms'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/forms/FormsModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">FormsModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;label></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;input</span>
</span><span class="line ngde"><span class="hljs-string ngde">        type="checkbox"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [ngModel]="checked()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        (ngModelChange)="toggle(); touch()"</span>
</span><span class="line ngde"><span class="hljs-string ngde">        [indeterminate]="isIntermediate" /></span>
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
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a>&#x3C;T>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">hasIntermediate</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h3 id="checkbox-group" class="ngde">Checkbox Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">The checkbox group should contain a list of all selected values and update the state of child controls. To implement the group, we need to inherit our component class from the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code> class. <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code> has additional integration with <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> and by default implements the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code> interface. Therefore, all we need to do is provide it as a host control and as a <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code>.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="checkbox-group.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>, <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>, <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-checkbox-group'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`&#x3C;ng-content>&#x3C;/ng-content>\`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        flex-direction: column;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a host for all children</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">CheckboxGroupComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h2 id="checkbox-2" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-2"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-with-object" class="ngde">Checkbox with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxObjectComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-group-1" class="ngde">Checkbox Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxGroupDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-group-with-object" class="ngde">Checkbox Group with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxGroupObjectComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo>`,is=(()=>{class s extends T{routePrefix="";pageType="guide";pageContent=ds;page=f;demoAssets=X;constructor(){super()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=t({type:s,selectors:[["ng-doc-page-examples-checkbox"]],standalone:!0,features:[P([{provide:T,useExisting:s},Q,f.providers??[]]),x,d],decls:1,vars:0,template:function(n,a){n&1&&E(0,"ng-doc-page")},dependencies:[z],encapsulation:2,changeDetection:0})}return s})(),gs=[F(M({},(0,Z.isRoute)(f.route)?f.route:{}),{path:"",component:is,title:"Checkbox"})],ln=gs;export{is as DynamicComponent,ln as default};
