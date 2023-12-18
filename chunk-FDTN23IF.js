import{a as $}from"./chunk-E6DX3CF3.js";import{a as b}from"./chunk-4VNBP3JS.js";import{a as Y,b as y}from"./chunk-WTVINDDQ.js";import{a as U,b as L,e as V,i as z,j as u}from"./chunk-WM3FRPDB.js";import"./chunk-YVTLOPOH.js";import{a as N}from"./chunk-MHKQFQEX.js";import"./chunk-IRPIYWWJ.js";import{a as T}from"./chunk-APGG5VNM.js";import{Ca as H,Cb as j,Ea as O,Fa as P,Ha as g,I as A,Ia as x,J as o,Ka as G,La as i,Ma as R,Wb as as,_ as p,fb as k,ia as v,ka as l,ma as M,nb as d,pa as f,sb as r,ua as t,ub as h,va as c,wa as S,yb as m}from"./chunk-FWY5D3MO.js";import{a as F,b as E,g as ns}from"./chunk-P2VZOJAX.js";var ss=ns(as());var es=["*"],C=(()=>{class s extends V{value=!0;constructor(){super({uncheckValue:!1,host:z({optional:!0}),compare:A(L,{optional:!0})})}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch"]],inputs:{value:"value"},standalone:!0,features:[v,i],ngContentSelectors:es,decls:3,vars:2,consts:[["type","button",3,"click"]],template:function(n,e){n&1&&(O(),t(0,"button",0),H("click",function(){return e.toggle(),e.touch()}),S(1,"span"),c(),P(2)),n&2&&(p(1),M("checked",e.checked()))},dependencies:[d],styles:["[_nghost-%COMP%]{position:relative;display:flex;align-items:center;gap:8px}[_nghost-%COMP%] > button[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;height:20px;width:40px;padding:2px;border:none;border-radius:100px;cursor:pointer}[_nghost-%COMP%] > button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;width:16px;height:16px;background-color:gray;border-radius:100px;transition:.25s}[_nghost-%COMP%] > button[_ngcontent-%COMP%] > span.checked[_ngcontent-%COMP%]{margin-left:20px;background-color:#14c814}"],changeDetection:0})}return s})();function ls(s,w){if(s&1&&(t(0,"di-switch",3),g(1),c()),s&2){let a=w.$implicit;l("value",a),p(1),x(a)}}var B=(()=>{class s{control=new h([y[2]]);items=y;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch-group-demo"]],standalone:!0,features:[i],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox-group",1),f(2,ls,2,2,"di-switch",2),c()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control),p(1),l("ngForOf",e.items))},dependencies:[d,k,C,j,r,m,u,b],encapsulation:2,changeDetection:0})}return s})();var J=(()=>{class s{control=new h(!1);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch-demo"]],standalone:!0,features:[i],decls:3,vars:2,consts:[[3,"control"],[3,"formControl"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-switch",1),g(2,"Switch"),c()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control))},dependencies:[d,C,j,r,m,u],encapsulation:2,changeDetection:0})}return s})();var ps=()=>({id:1,name:"Apple"}),K=(()=>{class s{control=new h(null);static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch-object-demo"]],standalone:!0,features:[i],decls:3,vars:4,consts:[[3,"control"],[3,"formControl","value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-switch",1),g(2,"Apple"),c()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control)("value",R(3,ps)))},dependencies:[d,u,j,r,m,C],encapsulation:2,changeDetection:0})}return s})();function ts(s,w){if(s&1&&(t(0,"di-switch",3),g(1),c()),s&2){let a=w.$implicit;l("value",a),p(1),x(a.name)}}var Q=(()=>{class s{control=new h([{id:1,name:"Apple"}]);items=Y;compareFruits(a,n){return a?.id===n?.id}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch-group-object-demo"]],standalone:!0,features:[i],decls:3,vars:4,consts:[[3,"control"],[3,"formControl","compareFn"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-checkbox-group",1),f(2,ts,2,2,"di-switch",2),c()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control)("compareFn",e.compareFruits),p(1),l("ngForOf",e.items))},dependencies:[d,k,u,C,j,r,m,b],encapsulation:2,changeDetection:0})}return s})();function cs(s,w){if(s&1&&(t(0,"di-switch",3),g(1),c()),s&2){let a=w.$implicit;l("value",a),p(1),x(a)}}var W=(()=>{class s{control=new h([y[2]]);items=y;static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["di-switch-radio-group-demo"]],standalone:!0,features:[i],decls:3,vars:3,consts:[[3,"control"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){n&1&&(t(0,"di-model-info",0)(1,"di-radio-group",1),f(2,cs,2,2,"di-switch",2),c()()),n&2&&(l("control",e.control),p(1),l("formControl",e.control),p(1),l("ngForOf",e.items))},dependencies:[d,k,$,u,C,j,r,m],encapsulation:2,changeDetection:0})}return s})();var os={title:"Switch",mdFile:"./index.md",category:U,demos:{SwitchDemoComponent:J,SwitchGroupDemoComponent:B,SwitchObjectDemoComponent:K,SwitchGroupObjectDemoComponent:Q,SwitchRadioGroupDemoComponent:W},keyword:"SwitchPage"},_=os;var X=[];var is={SwitchDemoComponent:[{title:"switch.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-switch'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;button type="button" (click)="toggle(); touch()"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;span [class.checked]="checked()">&#x3C;/span></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/button></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;ng-content /></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26; > button {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-flow: row nowrap;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          height: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 40px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          padding: 2px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: none;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">          &#x26; > span {</span>
</span><span class="line ngde"><span class="hljs-string ngde">            position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            vertical-align: middle;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            width: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            height: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            background-color: #808080;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            transition: 0.25s;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">            &#x26;.checked {</span>
</span><span class="line ngde"><span class="hljs-string ngde">              margin-left: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">              background-color: #14c814;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            }</span>
</span><span class="line ngde"><span class="hljs-string ngde">          }</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SwitchComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-switch</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>Switch<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-switch</span>></span>
</span></code></pre>`,opened:!0}],SwitchGroupDemoComponent:[{title:"switch.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-switch'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;button type="button" (click)="toggle(); touch()"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;span [class.checked]="checked()">&#x3C;/span></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/button></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;ng-content /></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26; > button {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-flow: row nowrap;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          height: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 40px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          padding: 2px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: none;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">          &#x26; > span {</span>
</span><span class="line ngde"><span class="hljs-string ngde">            position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            vertical-align: middle;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            width: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            height: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            background-color: #808080;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            transition: 0.25s;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">            &#x26;.checked {</span>
</span><span class="line ngde"><span class="hljs-string ngde">              margin-left: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">              background-color: #14c814;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            }</span>
</span><span class="line ngde"><span class="hljs-string ngde">          }</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SwitchComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
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
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>
</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-switch</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span>></span>{{ item }}<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-switch</span>></span>
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox-group</span>></span>
</span></code></pre>`,opened:!0}],SwitchObjectDemoComponent:[{title:"switch.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-switch'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;button type="button" (click)="toggle(); touch()"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;span [class.checked]="checked()">&#x3C;/span></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/button></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;ng-content /></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26; > button {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-flow: row nowrap;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          height: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 40px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          padding: 2px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: none;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">          &#x26; > span {</span>
</span><span class="line ngde"><span class="hljs-string ngde">            position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            vertical-align: middle;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            width: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            height: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            background-color: #808080;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            transition: 0.25s;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">            &#x26;.checked {</span>
</span><span class="line ngde"><span class="hljs-string ngde">              margin-left: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">              background-color: #14c814;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            }</span>
</span><span class="line ngde"><span class="hljs-string ngde">          }</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SwitchComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde">&#x3C;<span class="hljs-name ngde">di-switch</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"{ id: 1, name: 'Apple' }"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">  ></span>Apple&#x3C;/di-switch
</span><span class="line ngde">>
</span></code></pre>`,opened:!0}],SwitchGroupObjectDemoComponent:[{title:"switch.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-switch'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;button type="button" (click)="toggle(); touch()"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;span [class.checked]="checked()">&#x3C;/span></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/button></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;ng-content /></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26; > button {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-flow: row nowrap;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          height: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 40px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          padding: 2px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: none;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">          &#x26; > span {</span>
</span><span class="line ngde"><span class="hljs-string ngde">            position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            vertical-align: middle;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            width: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            height: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            background-color: #808080;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            transition: 0.25s;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">            &#x26;.checked {</span>
</span><span class="line ngde"><span class="hljs-string ngde">              margin-left: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">              background-color: #14c814;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            }</span>
</span><span class="line ngde"><span class="hljs-string ngde">          }</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SwitchComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"checkbox-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
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
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-checkbox-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span> [<span class="hljs-attr ngde">compareFn</span>]=<span class="hljs-string ngde">"compareFruits"</span>></span>
</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">di-switch</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span><span class="hljs-tag ngde"></span>
</span><span class="line ngde"><span class="hljs-tag ngde">    ></span>{{ item.name }}&#x3C;/di-switch
</span><span class="line ngde">  >
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-checkbox-group</span>></span>
</span></code></pre>`,opened:!0}],SwitchRadioGroupDemoComponent:[{title:"switch.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>,
</span><span class="line ngde">  inject,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>, <a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">standalone</span>: <span class="hljs-literal ngde">true</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-switch'</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">template</span>: <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;button type="button" (click)="toggle(); touch()"></span>
</span><span class="line ngde"><span class="hljs-string ngde">      &#x3C;span [class.checked]="checked()">&#x3C;/span></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;/button></span>
</span><span class="line ngde"><span class="hljs-string ngde">    &#x3C;ng-content /></span>
</span><span class="line ngde"><span class="hljs-string ngde">  \`</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">styles</span>: [
</span><span class="line ngde">    <span class="hljs-string ngde">\`</span>
</span><span class="line ngde"><span class="hljs-string ngde">      :host {</span>
</span><span class="line ngde"><span class="hljs-string ngde">        position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">        gap: 8px;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">        &#x26; > button {</span>
</span><span class="line ngde"><span class="hljs-string ngde">          display: flex;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          flex-flow: row nowrap;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          align-items: center;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          height: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          width: 40px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          padding: 2px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border: none;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">          cursor: pointer;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">          &#x26; > span {</span>
</span><span class="line ngde"><span class="hljs-string ngde">            position: relative;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            display: inline-block;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            vertical-align: middle;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            width: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            height: 16px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            background-color: #808080;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            border-radius: 100px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            transition: 0.25s;</span>
</span><span class="line ngde"><span class="hljs-string ngde"></span>
</span><span class="line ngde"><span class="hljs-string ngde">            &#x26;.checked {</span>
</span><span class="line ngde"><span class="hljs-string ngde">              margin-left: 20px;</span>
</span><span class="line ngde"><span class="hljs-string ngde">              background-color: #14c814;</span>
</span><span class="line ngde"><span class="hljs-string ngde">            }</span>
</span><span class="line ngde"><span class="hljs-string ngde">          }</span>
</span><span class="line ngde"><span class="hljs-string ngde">        }</span>
</span><span class="line ngde"><span class="hljs-string ngde">      }</span>
</span><span class="line ngde"><span class="hljs-string ngde">    \`</span>,
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [<span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span>],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SwitchComponent</span>&#x3C;T> <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIStateControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIStateControl</a></span>&#x3C;T | <span class="hljs-built_in ngde">boolean</span>> {
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-keyword ngde">override</span> <span class="hljs-attr ngde">value</span>: T | <span class="hljs-built_in ngde">boolean</span> = <span class="hljs-literal ngde">true</span>;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>({
</span><span class="line ngde">      <span class="hljs-attr ngde">uncheckValue</span>: <span class="hljs-literal ngde">false</span>,
</span><span class="line ngde">      <span class="hljs-attr ngde">host</span>: <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/injectHostControl3" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">injectHostControl</a></span>({ <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">      <span class="hljs-attr ngde">compare</span>: <span class="hljs-title function_ ngde">inject</span>(<span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>, { <span class="hljs-attr ngde">optional</span>: <span class="hljs-literal ngde">true</span> }),
</span><span class="line ngde">    });
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"radio-group.component.ts",code:`<pre class="ngde hljs"><code lang="ts" class="hljs language-ts code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Component</a></span>, <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">Input</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/core'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="https://angular.io/api/common/CommonModule" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">CommonModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'@angular/common'</span>;
</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a>,
</span><span class="line ngde">  <a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a>,
</span><span class="line ngde">} <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">'di-controls'</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Component</a></span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">'di-radio-group'</span>,
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
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideHostControl" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideHostControl</a></span>(<span class="hljs-title class_ ngde">RadioGroupComponent</span>),
</span><span class="line ngde">    <span class="hljs-comment ngde">// Provide this component as a compare host for all children to get access to its compare function</span>
</span><span class="line ngde">    <span class="hljs-title function_ ngde"><a href="/api/di-controls/functions/provideCompareHost" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideCompareHost</a></span>(<span class="hljs-title class_ ngde">RadioGroupComponent</span>),
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">changeDetection</span>: <span class="hljs-title class_ ngde"><a href="https://angular.io/api/core/ChangeDetectionStrategy" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">ChangeDetectionStrategy</a></span>.<span class="hljs-property ngde">OnPush</span>,
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">RadioGroupComponent</span>&#x3C;T = <span class="hljs-built_in ngde">unknown</span>>
</span><span class="line ngde">  <span class="hljs-keyword ngde">extends</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DIControl" class="ng-doc-code-anchor ngde" data-link-type="Directive" class="ngde">DIControl</a></span>&#x3C;T>
</span><span class="line ngde">  <span class="hljs-keyword ngde">implements</span> <span class="hljs-title class_ ngde"><a href="/api/di-controls/classes/DICompareHost" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">DICompareHost</a></span>&#x3C;T>
</span><span class="line ngde">{
</span><span class="line ngde">  <span class="hljs-comment ngde">// For comparing immutable objects</span>
</span><span class="line ngde">  <span class="hljs-meta ngde"><a href="https://angular.io/api/core/Input" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation." class="ngde">@Input</a></span>()
</span><span class="line ngde">  <span class="hljs-attr ngde">compareFn</span>: <span class="hljs-title class_ ngde"><a href="/api/di-controls/type-aliases/DICompareFunction" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">DICompareFunction</a></span>&#x3C;T> = <span class="hljs-function ngde">(<span class="hljs-params ngde">a, b</span>) =></span> a === b;
</span><span class="line ngde">
</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>) {
</span><span class="line ngde">    <span class="hljs-variable language_ ngde">super</span>();
</span><span class="line ngde">  }
</span><span class="line ngde">}
</span></code></pre>`},{title:"Usage",code:`<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-radio-group</span> [<span class="hljs-attr ngde">formControl</span>]=<span class="hljs-string ngde">"control"</span>></span>
</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">di-switch</span> *<span class="hljs-attr ngde">ngFor</span>=<span class="hljs-string ngde">"let item of items"</span> [<span class="hljs-attr ngde">value</span>]=<span class="hljs-string ngde">"item"</span>></span>{{ item }}<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-switch</span>></span>
</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">di-radio-group</span>></span>
</span></code></pre>`,opened:!0}]},Z=is;var ds='<h1 id="switch" class="ngde">Switch<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#switch"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><h2 id="switch-1" class="ngde">Switch<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#switch-1"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="SwitchDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="switch-with-object" class="ngde">Switch with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#switch-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="SwitchObjectDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="switch-group" class="ngde">Switch Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#switch-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="SwitchGroupDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="switch-group-with-object" class="ngde">Switch Group with Object<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#switch-group-with-object"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="SwitchGroupObjectDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo><h2 id="radio-group" class="ngde">Radio Group<a title="Link to heading" class="ng-doc-header-link ngde" href="/examples/switch#radio-group"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ng-doc-demo componentname="SwitchRadioGroupDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":true}</div></ng-doc-demo>',gs=(()=>{class s extends T{routePrefix="";pageType="guide";pageContent=ds;page=_;demoAssets=Z;constructor(){super()}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=o({type:s,selectors:[["ng-doc-page-examples-switch"]],standalone:!0,features:[G([{provide:T,useExisting:s},X,_.providers??[]]),v,i],decls:1,vars:0,template:function(n,e){n&1&&S(0,"ng-doc-page")},dependencies:[N],encapsulation:2,changeDetection:0})}return s})(),rs=[E(F({},(0,ss.isRoute)(_.route)?_.route:{}),{path:"",component:gs,title:"Switch"})],hn=rs;export{gs as DynamicComponent,hn as default};
