import{a as t}from"./chunk-SIFN6L4Y.js";import"./chunk-ECJGCZL7.js";import"./chunk-4LO52Y3E.js";import{a}from"./chunk-36PZPXAV.js";import"./chunk-VGU43L7A.js";import"./chunk-MERZ5UDV.js";import{Ea as n,Sa as l,U as d,ob as o,pb as c}from"./chunk-3MHY34XG.js";import"./chunk-TWZW5B45.js";var r='<p class="ngde"><code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIProxyControl" class="ng-doc-code-anchor ngde">DIProxyControl</a></code> is very suitable. It is typically used as a host and works exclusively with objects. It is necessary to bind child controls to a specific property of the object, thereby ensuring that they update only that specific property and not the entire object as a whole. Please see <a href="examples/date-range" class="ngde">Date Range</a>.</p><h2 id="creating-a-control" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">Creating a control<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="creating-a-control"></ng-doc-heading-anchor></h2><p class="ngde">To create a control you need to extend your <code class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/core/Component" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">@Component</a></code> or <code class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/core/Directive" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">@Directive</a></code> from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIProxyControl" class="ng-doc-code-anchor ngde">DIProxyControl</a></code> class and provide <code class="ngde">getValue</code> and <code class="ngde">setValue</code> functions that will be used to get and set value from the object to the child control.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0" name="custom-control.component.ts"><code class="language-ts"><span class="line"></span></code></pre><section indexable="false" class="ngde"><h2 id="see-also" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">See Also<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="see-also"></ng-doc-heading-anchor></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><code class="ngde">ComboboxInputDirective</code> (extended)</li><li class="ngde"><code class="ngde">RangeDirective</code> (extended)</li></ul></section><h2 id="properties" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="change" data-slugtype="member" id="change"><td indexable="false" class="ngde"><span class="ngde">change <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></td><td class="ngde"><code indexable="false" class="ngde">(value: T | null) => void</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="changeDetectorRef" data-slugtype="member" id="changeDetectorRef"><td indexable="false" class="ngde"><span class="ngde">changeDetectorRef <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected, Readonly" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span> <span class="ng-doc-badge ngde" indexable="false" data-content="readonly">r</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/core/ChangeDetectorRef" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">ChangeDetectorRef</a></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="disabled" data-slugtype="member" id="disabled"><td indexable="false" class="ngde"><span class="ngde">disabled <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Readonly" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="readonly">r</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/core/ModelSignal" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">ModelSignal</a>&#x3C;boolean></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="model" data-slugtype="member" id="model"><td indexable="false" class="ngde"><span class="ngde">model <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected, Readonly" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span> <span class="ng-doc-badge ngde" indexable="false" data-content="readonly">r</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/core/Signal" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">Signal</a>&#x3C;T | null></code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="ngControl" data-slugtype="member" id="ngControl"><td indexable="false" class="ngde"><span class="ngde">ngControl <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected, Readonly" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span> <span class="ng-doc-badge ngde" indexable="false" data-content="readonly">r</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/forms/NgControl" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">NgControl</a> | null</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr><tr class="ngde" data-slug="touch" data-slugtype="member" id="touch"><td indexable="false" class="ngde"><span class="ngde">touch <span class="ng-doc-badge-wrapper ngde" ngdoctooltip="Protected" indexable="false"><span class="ng-doc-badge ngde" indexable="false" data-content="protected">p</span></span></span><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></td><td class="ngde"><code indexable="false" class="ngde">() => void</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Function that should be used to make control touched.</p></td></tr></tbody></table></div><h2 id="accessors" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">Accessors<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="accessors"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slug="get-hasValue" data-slugtype="member" data-slugtitle="hasValue" id="get-hasValue" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde"><span class="ng-doc-modifier ngde" indexable="false" data-content="get">get</span> hasValue<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="get-hasValue"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControlValueAccessor" class="ng-doc-code-anchor ngde">DIControlValueAccessor</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Returns true if the control is not empty.</p></td></tr><tr class="ngde"><td indexable="false" class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">get </span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">hasValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): boolean</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td indexable="false" class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde">Type</h5><p class="ngde"><code indexable="false" class="ngde">boolean</code></p></td></tr></tbody></table></div><h2 id="methods" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">Methods<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="methods"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="ngoninit" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">ngOnInit()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="ngoninit"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ng-doc-no-content ngde" indexable="false">No documentation has been provided.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">ngOnInit</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="registercontrol" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">registerControl()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="registercontrol"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">overrides <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Registers provided control as a child of the current control.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">registerControl</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(control: <a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">TChildModel</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> TChildModel</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">control<div class="ng-doc-node-details ngde">inherited from <code class="ngde">registerControl</code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a>&#x3C;TChildModel, TChildModel></code></td><td class="ngde"><p class="ngde">control that will be registered.</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="registerontouched" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">registerOnTouched()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="registerontouched"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Method is called by the forms API.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">registerOnTouched</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(fn: () </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">fn<div class="ng-doc-node-details ngde">inherited from <code class="ngde">registerOnTouched</code></div></td><td class="ngde"><code indexable="false" class="ngde">() => void</code></td><td class="ngde"><p class="ngde">callback function to register on touch</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><div class="ng-doc-modifiers-wrapper ngde" indexable="false"><span class="ng-doc-modifier ngde" indexable="false" data-content="protected">protected</span></div><h3 data-slugtype="member" id="updatecontrol" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">updateControl()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="updatecontrol"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">overrides <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Updates provided control with the provided value.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">protected </span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">updateControl</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(control: <a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">TChildModel</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> TChildModel</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> value: TModel </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">|</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> null</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">control<div class="ng-doc-node-details ngde">inherited from <code class="ngde">updateControl</code></div></td><td class="ngde"><code indexable="false" class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a>&#x3C;TChildModel, TChildModel></code></td><td class="ngde"><p class="ngde">control that will be updated.</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">value<div class="ng-doc-node-details ngde">inherited from <code class="ngde">updateControl</code></div></td><td class="ngde"><code indexable="false" class="ngde">TModel | null</code></td><td class="ngde"><p class="ngde">new value.</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="updatemodel" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">updateModel()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="updatemodel"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Updates the model of the current control. This is the main method that should be used to update the model.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">updateModel</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(value: TModel </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">|</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> null</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">value<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">TModel | null</code></td><td class="ngde"><p class="ngde">new value.</p></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="writevalue" href="api/classes/di-controls/DIProxyControl" headinglink="true" class="ngde">writeValue()<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="writevalue"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde">inherited from <code class="ngde ng-doc-code-with-link"><a href="api/classes/di-controls/DIControl" class="ng-doc-code-anchor ngde">DIControl</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Method is called by the forms API to write to the view when programmatic changes from model to view are requested.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">writeValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(value: TModel </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">|</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> null</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">): </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">void</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ngde">Name</th><th class="ngde">Type</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">value<div class="ng-doc-node-details ngde">inherited from <code class="ngde">writeValue</code></div></td><td class="ngde"><code indexable="false" class="ngde">TModel | null</code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ng-doc-secondary-heading ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div>',g=(()=>{class e extends a{pageType="api";pageContent=r;constructor(){super()}static \u0275fac=function(s){return new(s||e)};static \u0275cmp=d({type:e,selectors:[["ng-doc-page-ngacb2yk"]],standalone:!0,features:[o([{provide:a,useExisting:e}]),n,c],decls:1,vars:0,template:function(s,p){s&1&&l(0,"ng-doc-page")},dependencies:[t],encapsulation:2,changeDetection:0})}return e})(),h=[{path:"",component:g,title:"DIProxyControl"}],u=h;export{g as PageComponent,u as default};
