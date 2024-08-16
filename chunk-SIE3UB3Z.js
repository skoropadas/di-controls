import{a as v}from"./chunk-2UONVC7Q.js";import{a as $,b as M}from"./chunk-WTVINDDQ.js";import{a as V,b as B,c as W,e as q,i as Y,j}from"./chunk-CYVFRLOS.js";import"./chunk-FASSJ2TZ.js";import{a as U}from"./chunk-54ESS3WH.js";import"./chunk-7OD5W2O4.js";import{a as T}from"./chunk-RJEVQYMU.js";import{Ab as h,Bb as L,Ea as O,Fb as m,Ga as P,Ha as G,I as F,Ib as z,Jb as u,K as p,L as S,Na as r,Oa as D,Ta as b,Ua as d,Va as N,Z as o,bc as ls,la as x,lb as _,ma as y,oa as l,tb as i,vb as R,wa as t,xa as c,ya as H,yb as g}from"./chunk-C3SKPK56.js";import{a as E,b as A,g as es}from"./chunk-JPKLQMV2.js";var as=es(ls());var os=["*"],C=(()=>{class s extends q{value=!0;constructor(){super({uncheckValue:!1,host:Y({optional:!0}),compare:F(B,{optional:!0}),hasIntermediate:!0})}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["di-checkbox"]],inputs:{value:"value"},standalone:!0,features:[x,d],ngContentSelectors:os,decls:3,vars:2,consts:[["type","checkbox",3,"ngModelChange","ngModel","indeterminate"]],template:function(n,e){n&1&&(P(),t(0,"label")(1,"input",0),O("ngModelChange",function(){return e.toggle(),e.touch()}),c(),G(2),c()),n&2&&(o(),l("ngModel",e.checked())("indeterminate",e.isIntermediate))},dependencies:[i,z,R,g,L],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;gap:8px}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{display:flex;gap:4px}"],changeDetection:0})}return s})();var J=(()=>{class s{control=new h(null);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["di-checkbox-demo"]],standalone:!0,features:[d],decls:3,vars:2,consts:[[3,"control"],[3,"formControl"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox",1),r(2,"Checkbox"),c()()),n&2&&(l("control",e.control),o(),l("formControl",e.control))},dependencies:[i,C,u,g,m,j],encapsulation:2})}return s})();function ps(s,I){if(s&1&&(t(0,"di-checkbox",3),r(1),c()),s&2){let a=I.$implicit;l("value",a),o(),D(a)}}var K=(()=>{class s{control=new h([M[2]]);items=M;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["di-checkbox-group-demo"]],standalone:!0,features:[d],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox-group",1),y(2,ps,2,2,"di-checkbox",2),c()()),n&2&&(l("control",e.control),o(),l("formControl",e.control),o(),l("ngForOf",e.items))},dependencies:[i,_,C,j,u,g,m,v],encapsulation:2,changeDetection:0})}return s})();var Q=(()=>{class s{compareFn=(a,n)=>a?.id===n?.id;static \u0275fac=function(n){return new(n||s)};static \u0275dir=S({type:s,selectors:[["","diCompareById",""]],standalone:!0,features:[b([W(s)])]})}return s})();function ts(s,I){if(s&1&&(t(0,"di-checkbox",3),r(1),c()),s&2){let a=I.$implicit;l("value",a),o(),D(a.name)}}var X=(()=>{class s{control=new h([{id:1,name:"Apple"}]);items=$;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["di-checkbox-group-object"]],standalone:!0,features:[d],decls:3,vars:3,consts:[[3,"control"],["diCompareById","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox-group",1),y(2,ts,2,2,"di-checkbox",2),c()()),n&2&&(l("control",e.control),o(),l("formControl",e.control),o(),l("ngForOf",e.items))},dependencies:[i,_,C,j,u,g,m,v,Q],encapsulation:2,changeDetection:0})}return s})();var ds=()=>({id:1,name:"Apple"}),Z=(()=>{class s{control=new h(null);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["di-checkbox-object"]],standalone:!0,features:[d],decls:3,vars:4,consts:[[3,"control"],[3,"formControl","value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox",1),r(2,"Apple"),c()()),n&2&&(l("control",e.control),o(),l("formControl",e.control)("value",N(3,ds)))},dependencies:[i,C,u,g,m,j],encapsulation:2})}return s})();var is={title:"Checkbox",mdFile:"./index.md",category:V,demos:{CheckboxDemoComponent:J,CheckboxObjectComponent:Z,CheckboxGroupDemoComponent:K,CheckboxGroupObjectComponent:X},keyword:"CheckboxPage"},f=is;var ss=[];var gs={CheckboxDemoComponent:[{title:"checkbox.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
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
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;<a href="https://angular.io/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">input</a></span>
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
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;<a href="https://angular.io/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">input</a></span>
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
</span></code></pre>`,opened:!0}],CheckboxGroupDemoComponent:[{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, inject } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
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
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;
</span><span class="line ngde">  T = <span class="hljs-built_in ngde">unknown</span>,
</span><span class="line ngde">> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
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
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;<a href="https://angular.io/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">input</a></span>
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
</span></code></pre>`,opened:!0}],CheckboxGroupObjectComponent:[{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, inject } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
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
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;
</span><span class="line ngde">  T = <span class="hljs-built_in ngde">unknown</span>,
</span><span class="line ngde">> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
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
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;<a href="https://angular.io/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">input</a></span>
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
</span></code></pre>`},{title:"compare-by-id.directive.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Directive</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">WithId</span> {
</span><span class="line ngde">  <span class="hljs-attr ngde">id</span>: <span class="hljs-built_in ngde">number</span> | <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">}
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Directive</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'[diCompareById]'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">CompareByIdDirective</span>)],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CompareByIdDirective</span>&#x3C;T <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde">WithId</span>>
</span><span class="line ngde">  <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T>
</span><span class="line ngde">{
</span><span class="line ngde">  compareFn = <span class="hljs-function ngde">(<span class="hljs-params ngde">a: T | <span class="hljs-literal ngde">null</span>, b: T | <span class="hljs-literal ngde">null</span></span>) =></span> a?.<span class="hljs-property ngde">id</span> === b?.<span class="hljs-property ngde">id</span>;
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span> <span class="hljs-attr ngde">diCompareById</span>></span>
</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">di-checkbox</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">    ></span>{{ item.name }}&#x3C;/di-checkbox
</span><span class="line ngde">  >
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox-group</span>></span>
</span></code></pre>`,opened:!0}]},ns=gs;var rs=`<h1 id="checkbox" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">In this section, we will discuss creating a checkbox and checkbox group using this library. To start, let's outline the list of requirements and necessary components.</p><h3 id="the-checkbox-should-consist-of-the-following-components" class="ngde">The checkbox should consist of the following components<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#the-checkbox-should-consist-of-the-following-components"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u2699\uFE0F Checkbox group</li><li class="ngde">\u2699\uFE0F Checkbox provided from external sources using <code class="ngde">ng-content</code></li></ul><h3 id="list-of-requirements" class="ngde">List of requirements<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#list-of-requirements"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">\u{1F6A9} Checkbox should be provided via <code class="ngde">ng-content</code>.</li><li class="ngde">\u{1F6A9} When an item from the list is selected, its value should be added to the checkbox group's model.</li><li class="ngde">\u{1F6A9} When an item from the list is deselected, its value should be removed from the checkbox group's model.</li><li class="ngde">\u{1F6A9} If checkbox group's model is changed, the checkbox should be selected or deselected.</li><li class="ngde">\u{1F6A9} The checkbox should support working with immutable objects.</li></ul><h2 id="creating-a-checkbox-and-checkbox-group" class="ngde">Creating a checkbox and checkbox group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#creating-a-checkbox-and-checkbox-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="checkbox-1" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">The checkbox is a state control, and the user should have the ability to freely change its state from checked to unchecked and vice versa. To implement the state control, we need to inherit it from <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code>, which will provide us with all the necessary functionality.</p><p class="ngde">Internally, we will also use a native <code class="ngde">input type="checkbox"</code> to maintain the native behavior. For example, when a checkbox is used inside a <code class="ngde">label</code> tag, it should change its state when the label is clicked.</p><p class="ngde">We also need to inject <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code> to access the <code class="ngde">compareFn</code> from the checkbox group in the future. This function will help us compare immutable objects.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="checkbox.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, inject, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
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
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;<a href="https://angular.io/api/core/input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">input</a></span>
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
</span></code></pre><h3 id="checkbox-group" class="ngde">Checkbox Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">The checkbox group should contain a list of all selected values and update the state of child controls. To implement the group, we need to inherit our component class from the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code> class. <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></code> has additional integration with <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></code> and by default implements the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code> interface. Therefore, all we need to do is provide it as a host control and as a <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></code>.</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="checkbox-group.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, inject} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
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
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CheckboxGroupComponent</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICollectionControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DICollectionControl</a></span>&#x3C;T> {
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre><h2 id="checkbox-2" class="ngde">Checkbox<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-2"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-with-object" class="ngde">Checkbox with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxObjectComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-group-1" class="ngde">Checkbox Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxGroupDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="checkbox-group-with-object" class="ngde">Checkbox Group with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/checkbox#checkbox-group-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="CheckboxGroupObjectComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo>`,hs=(()=>{class s extends T{routePrefix="";pageType="guide";pageContent=rs;page=f;demoAssets=ns;constructor(){super()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=p({type:s,selectors:[["ng-doc-page-examples-checkbox"]],standalone:!0,features:[b([{provide:T,useExisting:s},ss,f.providers??[]]),x,d],decls:1,vars:0,template:function(n,e){n&1&&H(0,"ng-doc-page")},dependencies:[U],encapsulation:2,changeDetection:0})}return s})(),ms=[A(E({},(0,as.isRoute)(f.route)?f.route:{}),{path:"",component:hs,title:"Checkbox"})],gn=ms;export{hs as DynamicComponent,gn as default};
