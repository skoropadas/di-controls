import{a as p}from"./chunk-TGQ5YZO2.js";import{a as g}from"./chunk-SIFN6L4Y.js";import"./chunk-ECJGCZL7.js";import"./chunk-4LO52Y3E.js";import{a as n}from"./chunk-36PZPXAV.js";import{aa as b}from"./chunk-VGU43L7A.js";import"./chunk-MERZ5UDV.js";import{Ea as r,Sa as c,U as i,ob as d,pb as l}from"./chunk-3MHY34XG.js";import{a,b as s,h as y}from"./chunk-TWZW5B45.js";var m=y(b());var k={title:"Installation",mdFile:"./index.md",category:p,order:1},o=k;var h=[];var x={},u=x;var C=`<h2 id="what-is-dicontrols-library" href="getting-started/installation" headinglink="true" class="ngde">What is DIControls library?<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="what-is-dicontrols-library"></ng-doc-heading-anchor></h2><p class="ngde">DIControls is a library for creating reusable, flexible UI controls using a declarative approach.</p><p class="ngde">Each component you create depends only on its own model, allowing for its reuse in many other places. It also enables users of your controls to modify them, replace existing components in your library, or extend your components by adding their own.</p><p class="ngde">Additionally, this library minimizes the implementation of <code class="ngde ng-doc-code-with-link"><a href="https://angular.io/api/forms/ControlValueAccessor" class="ng-doc-code-anchor ngde" ngDocTooltip="External link the Angular documentation.">ControlValueAccessor</a></code>, so all you need to do is inherit from a specific class and trigger updates using the <code class="ngde">this.updateModel(newModel)</code> method, update the <code class="ngde">touched</code> state using <code class="ngde">this.touched()</code>, or process updates in the <code class="ngde">onIncomingUpdate</code> hook if necessary.</p><h2 id="installation" href="getting-started/installation" headinglink="true" class="ngde">Installation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="installation"></ng-doc-heading-anchor></h2><ng-doc-blockquote type="warning" class="ngde"><p class="ngde">This library works only with Angular 16+.</p></ng-doc-blockquote><p class="ngde">You don't need to import or add any module to your application in order to create the controls. You just need to install the package via the following command:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-bash"><span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">npm</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> i</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> di-controls</span></span></code></pre><h2 id="next-steps" href="getting-started/installation" headinglink="true" class="ngde">Next Steps<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="next-steps"></ng-doc-heading-anchor></h2><p class="ngde">To learn more about the concept and how to use the library, please visit the <a href="getting-started/how-to-use-it" class="ngde">How to use it?</a> page;</p>`,D=(()=>{class e extends n{pageType="guide";pageContent=C;page=o;demoAssets=u;constructor(){super()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["ng-doc-page-tm7fsrgp"]],standalone:!0,features:[d([{provide:n,useExisting:e},h,o.providers??[]]),r,l],decls:1,vars:0,template:function(t,w){t&1&&c(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0})}return e})(),A=[s(a({},(0,m.isRoute)(o.route)?o.route:{}),{path:"",component:D,title:"Installation"})],M=A;export{D as PageComponent,M as default};
