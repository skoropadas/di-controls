import{a as l}from"./chunk-SIFN6L4Y.js";import"./chunk-ECJGCZL7.js";import"./chunk-4LO52Y3E.js";import{a as n}from"./chunk-36PZPXAV.js";import"./chunk-VGU43L7A.js";import"./chunk-MERZ5UDV.js";import{Ea as s,Sa as t,U as a,ob as o,pb as c}from"./chunk-3MHY34XG.js";import"./chunk-TWZW5B45.js";var g='<p class="ngde">Configuration for the <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIStateControl" class="ng-doc-code-anchor ngde">DIStateControl</a></code>.</p><h2 id="properties" href="api/interfaces/di-controls/DIStateControlConfig" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="compare" data-slugtype="member" id="compare"><td indexable="false" class="ngde"><span class="ngde">compare</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DICompareHost" class="ng-doc-code-anchor ngde">DICompareHost</a>&#x3C;TModel | null, TValue> | <a href="api/type-aliases/di-controls/DICompareFunction" class="ng-doc-code-anchor ngde">DICompareFunction</a>&#x3C;TModel | null, TValue> | null | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Function that will be used to compare model value with the <code class="ngde">value</code> property.</p></td></tr><tr class="ngde" data-slug="hasIntermediate" data-slugtype="member" id="hasIntermediate"><td indexable="false" class="ngde"><span class="ngde">hasIntermediate</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Indicates whether the current control can have intermediate state.</p></td></tr><tr class="ngde" data-slug="host" data-slugtype="member" id="host"><td indexable="false" class="ngde"><span class="ngde">host</span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/di-controls/DIControlConfig" class="ng-doc-code-anchor ngde">DIControlConfig</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a>&#x3C;any, TModel> | null | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Host control for the current control. It can be injected using <code class="ngde ng-doc-code-with-link"><a href="api/variables/di-controls/DI_HOST_CONTROL" class="ng-doc-code-anchor ngde">DI_HOST_CONTROL</a></code> token.</p></td></tr><tr class="ngde" data-slug="onChildControlChange" data-slugtype="member" id="onChildControlChange"><td indexable="false" class="ngde"><span class="ngde">onChildControlChange</span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/di-controls/DIControlConfig" class="ng-doc-code-anchor ngde">DIControlConfig</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link">((control: <a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a>&#x3C;TChildModel, TChildModel>, value: TModel | null) => void) | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Function that will be called when the current control receives an update from the child control.</p></td></tr><tr class="ngde" data-slug="onIncomingUpdate" data-slugtype="member" id="onIncomingUpdate"><td indexable="false" class="ngde"><span class="ngde">onIncomingUpdate</span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/di-controls/DIControlValueAccessorConfig" class="ng-doc-code-anchor ngde">DIControlValueAccessorConfig</a></code></div></td><td class="ngde"><code indexable="false" class="ngde">((value: T | null) => void) | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Function that will be called when the current control receives an update from the host control or from the Forms API.</p></td></tr><tr class="ngde" data-slug="uncheckValue" data-slugtype="member" id="uncheckValue"><td indexable="false" class="ngde"><span class="ngde">uncheckValue</span><div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">TModel | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Value that will be used for the unchecked state.</p></td></tr><tr class="ngde" data-slug="withNativeElementSupport" data-slugtype="member" id="withNativeElementSupport"><td indexable="false" class="ngde"><span class="ngde">withNativeElementSupport</span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/interfaces/di-controls/DIControlValueAccessorConfig" class="ng-doc-code-anchor ngde">DIControlValueAccessorConfig</a></code></div></td><td class="ngde"><code indexable="false" class="ngde">boolean | undefined</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Add support for native element. Which means that the control will update the native element attributes like <code class="ngde">disabled</code>.</p></td></tr></tbody></table></div>',r=(()=>{class e extends n{pageType="api";pageContent=g;constructor(){super()}static \u0275fac=function(d){return new(d||e)};static \u0275cmp=a({type:e,selectors:[["ng-doc-page-i0o0sr3v"]],standalone:!0,features:[o([{provide:n,useExisting:e}]),s,c],decls:1,vars:0,template:function(d,h){d&1&&t(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0})}return e})(),p=[{path:"",component:r,title:"DIStateControlConfig"}],m=p;export{r as PageComponent,m as default};
