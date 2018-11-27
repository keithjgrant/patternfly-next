webpackJsonp([18846628589838],{19:function(e,t,i){var r=i(1);e.exports=(r.default||r).template({1:function(e,t,i,r,a){var n;return e.escapeExpression((n=null!=(n=i["flex-item--element"]||(null!=t?t["flex-item--element"]:t))?n:i.helperMissing,"function"==typeof n?n.call(null!=t?t:e.nullContext||{},{name:"flex-item--element",hash:{},data:a}):n))},3:function(e,t,i,r,a){return"div"},5:function(e,t,i,r,a){var n;return' class="'+e.escapeExpression((n=null!=(n=i["flex-item--modifier"]||(null!=t?t["flex-item--modifier"]:t))?n:i.helperMissing,"function"==typeof n?n.call(null!=t?t:e.nullContext||{},{name:"flex-item--modifier",hash:{},data:a}):n))+'"'},7:function(e,t,i,r,a){var n,l;return"    "+(null!=(l=null!=(l=i["flex-item--attribute"]||(null!=t?t["flex-item--attribute"]:t))?l:i.helperMissing,n="function"==typeof l?l.call(null!=t?t:e.nullContext||{},{name:"flex-item--attribute",hash:{},data:a}):l)?n:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,t,i,r,a){var n,l=null!=t?t:e.nullContext||{};return"<"+(null!=(n=i.if.call(l,null!=t?t["flex-item--element"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?n:"")+" "+(null!=(n=i.if.call(l,null!=t?t["flex-item--modifier"]:t,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?n:"")+"\n"+(null!=(n=i.if.call(l,null!=t?t["flex-item--attribute"]:t,{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:a,indent:"  ",helpers:i,partials:r,decorators:e.decorators}))?n:"")+"</"+(null!=(n=i.if.call(l,null!=t?t["flex--element"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?n:"")+">\n"},usePartial:!0,useData:!0})},965:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. <strong>Example .pf-u-m-sm-on-lg</strong></p> <h2 id=margin-properties->Margin properties:</h2> <table> <thead> <tr> <th>Abbreviation</th> <th>Property</th> </tr> </thead> <tbody> <tr> <td><code>m</code></td> <td>margin</td> </tr> <tr> <td><code>mt</code></td> <td>margin-top</td> </tr> <tr> <td><code>mr</code></td> <td>margin-right</td> </tr> <tr> <td><code>mb</code></td> <td>margin-bottom</td> </tr> <tr> <td><code>ml</code></td> <td>margin-left</td> </tr> <tr> <td><code>mx</code></td> <td>margin-left &amp; margin-right</td> </tr> <tr> <td><code>my</code></td> <td>margin-top &amp; margin-bottom</td> </tr> </tbody> </table> <h2 id=padding-properties->Padding properties:</h2> <table> <thead> <tr> <th>Abbreviation</th> <th>Property</th> </tr> </thead> <tbody> <tr> <td><code>p</code></td> <td>padding</td> </tr> <tr> <td><code>pt</code></td> <td>padding-top</td> </tr> <tr> <td><code>pr</code></td> <td>padding-right</td> </tr> <tr> <td><code>pb</code></td> <td>padding-bottom</td> </tr> <tr> <td><code>pl</code></td> <td>padding-left</td> </tr> <tr> <td><code>px</code></td> <td>padding-left &amp; padding-right</td> </tr> <tr> <td><code>py</code></td> <td>padding-top &amp; padding-bottom</td> </tr> </tbody> </table> <h2 id=size-values->Size values:</h2> <table> <thead> <tr> <th>Abbreviation</th> <th>Property</th> </tr> </thead> <tbody> <tr> <td><code>auto</code></td> <td>auto</td> </tr> <tr> <td><code>0</code></td> <td>0</td> </tr> <tr> <td><code>xs</code></td> <td>var(--pf-global--spacer--xs)</td> </tr> <tr> <td><code>sm</code></td> <td>var(--pf-global--spacer--sm)</td> </tr> <tr> <td><code>md</code></td> <td>var(--pf-global--spacer--md)</td> </tr> <tr> <td><code>lg</code></td> <td>var(--pf-global--spacer--lg)</td> </tr> <tr> <td><code>xl</code></td> <td>var(--pf-global--spacer--xl)</td> </tr> <tr> <td><code>2xl</code></td> <td>var(--pf-global--spacer--2xl)</td> </tr> <tr> <td><code>3xl</code></td> <td>var(--pf-global--spacer--3xl)</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-u-{m, mt, mr, mb, ml, mx, my}-{size}{-on-[breakpoint]}</code></td> <td><code>*</code></td> <td>Sets margin top, right, bottom, left, margin-left &amp; right, margin-top &amp; bottom to spacer value</td> </tr> <tr> <td><code>.pf-u-{p, pt, pr, pb, pl, px, py}-{size}{-on-[breakpoint]}</code></td> <td><code>*</code></td> <td>Sets padding top, right, bottom, left, padding-left &amp; right, padding-top &amp; bottom to spacer value</td> </tr> </tbody> </table> "},355:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var a=i(3),n=r(a),l=i(11),o=r(l),d=i(12),p=r(d),f=i(1324),m=r(f),s=i(1325),u=r(s),x=i(1323),g=r(x),c=i(868),h=r(c),v=i(869),y=r(v),P=i(867),b=r(P),k=i(965),M=r(k);i(1143);var w=t.Docs=M.default;t.default=function(){var e=(0,h.default)(),t=(0,y.default)(),i=(0,b.default)(),r="Spacing";return n.default.createElement(o.default,{docs:w,heading:r,className:"is-utility-page"},n.default.createElement(p.default,{heading:"Spacer margin",handlebars:m.default},e),n.default.createElement(p.default,{heading:"Spacer padding",handlebars:u.default},t),n.default.createElement(p.default,{heading:"Spacers combined",handlebars:g.default},i))}},867:function(e,t,i){var r=i(1);e.exports=(r.default||r).template({1:function(e,t,i,r,a){return"  Combined spacers\n"},3:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-lg pf-u-m-lg"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-lg-on-lg pf-u-m-lg"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},4:function(e,t,i,r,a){return"    Padding lg, margin lg\n"},6:function(e,t,i,r,a){return"    Padding lg on-lg, margin lg\n"},8:function(e,t,i,r,a){return"  Combined spacers (responsive)\n"},10:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg"},fn:e.program(11,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg"},fn:e.program(13,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-sm pf-u-p-lg-on-md pf-u-ml-auto-on-xl"},fn:e.program(15,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},11:function(e,t,i,r,a){return"    Item 1\n"},13:function(e,t,i,r,a){return"    Item 2\n"},15:function(e,t,i,r,a){return"    Item 3\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+"<br>\n"+(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(8,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},1323:function(e,t){e.exports='{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Combined spacers\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-p-lg pf-u-m-lg"}}\n    Padding lg, margin lg\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-p-lg-on-lg pf-u-m-lg"}}\n    Padding lg on-lg, margin lg\n  {{/flex-item}}\n{{/display}}\n<br>\n{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Combined spacers (responsive)\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg"}}\n    Item 1\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg"}}\n    Item 2\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-p-sm pf-u-p-lg-on-md pf-u-ml-auto-on-xl"}}\n    Item 3\n  {{/flex-item}}\n{{/display}}\n'},868:function(e,t,i){var r=i(1);e.exports=(r.default||r).template({1:function(e,t,i,r,a){return"  Margin, marginX, marginY\n"},3:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-m-xl"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mx-xl"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-my-xl"},fn:e.program(8,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},4:function(e,t,i,r,a){return"    Margin - xl\n"},6:function(e,t,i,r,a){return"    Margin x axis - pf-u-mx-xl\n"},8:function(e,t,i,r,a){return"    Margin y axis - pf-u-my-xl\n"},10:function(e,t,i,r,a){return"  Margin top, margin right, margin bottom, margin left\n"},12:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl"},fn:e.program(13,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mr-xl"},fn:e.program(15,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mb-xl"},fn:e.program(17,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-ml-xl"},fn:e.program(19,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},13:function(e,t,i,r,a){return"    Margin-top - xl\n"},15:function(e,t,i,r,a){return"    Margin-right - xl\n"},17:function(e,t,i,r,a){return"    Margin-bottom - xl\n"},19:function(e,t,i,r,a){return"    Margin-left - xl\n"},21:function(e,t,i,r,a){return"  Responsive margin\n"},23:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl"},fn:e.program(13,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl-on-sm"},fn:e.program(24,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl-on-md"},fn:e.program(26,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl-on-lg"},fn:e.program(28,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-mt-xl-on-xl"},fn:e.program(30,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},24:function(e,t,i,r,a){return"    Margin-top - xl on-sm\n"},26:function(e,t,i,r,a){return"    Margin-top - xl on-md\n"},28:function(e,t,i,r,a){return"    Margin-top - xl on-lg\n"},30:function(e,t,i,r,a){return"    Margin-top - xl on-xl\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+"<br>\n"+(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(12,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+"<br>\n"+(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(21,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap","display--type":"flex"},fn:e.program(23,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},1324:function(e,t){e.exports='{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Margin, marginX, marginY\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-m-xl"}}\n    Margin - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mx-xl"}}\n    Margin x axis - pf-u-mx-xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-my-xl"}}\n    Margin y axis - pf-u-my-xl\n  {{/flex-item}}\n{{/display}}\n<br>\n{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Margin top, margin right, margin bottom, margin left\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl"}}\n    Margin-top - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mr-xl"}}\n    Margin-right - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mb-xl"}}\n    Margin-bottom - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-ml-xl"}}\n    Margin-left - xl\n  {{/flex-item}}\n{{/display}}\n<br>\n{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Responsive margin\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl"}}\n    Margin-top - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl-on-sm"}}\n    Margin-top - xl on-sm\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl-on-md"}}\n    Margin-top - xl on-md\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl-on-lg"}}\n    Margin-top - xl on-lg\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-mt-xl-on-xl"}}\n    Margin-top - xl on-xl\n  {{/flex-item}}\n{{/display}}\n'},869:function(e,t,i){var r=i(1);e.exports=(r.default||r).template({1:function(e,t,i,r,a){return"  Padding, paddingX, paddingY\n"},3:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-p-xl"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-px-xl"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-py-xl"},fn:e.program(8,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},4:function(e,t,i,r,a){return"    Padding - xl\n"},6:function(e,t,i,r,a){return"    Padding x axis - pf-u-px-xl\n"},8:function(e,t,i,r,a){return"    Padding y axis - pf-u-py-xl\n"},10:function(e,t,i,r,a){return"  Padding top, padding right, padding bottom, padding left\n"},12:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl"},fn:e.program(13,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pr-xl"},fn:e.program(15,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pb-xl"},fn:e.program(17,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pl-xl"},fn:e.program(19,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},13:function(e,t,i,r,a){return"    Padding-top - xl\n"},15:function(e,t,i,r,a){return"    Padding-right - xl\n"},17:function(e,t,i,r,a){return"    Padding-bottom - xl\n"},19:function(e,t,i,r,a){return"    Padding-left - xl\n"},21:function(e,t,i,r,a){return"  Responsive padding\n"},23:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl"},fn:e.program(24,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl-on-sm"},fn:e.program(26,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl-on-md"},fn:e.program(28,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl-on-lg"},fn:e.program(30,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(19),t,{name:"flex-item",hash:{"flex-item--modifier":"pf-u-pt-xl-on-xl"},fn:e.program(32,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},24:function(e,t,i,r,a){return"    Padding-top\n"},26:function(e,t,i,r,a){return"    Padding-top - xl on-sm\n"},28:function(e,t,i,r,a){return"    Padding-top - xl on-md\n"},30:function(e,t,i,r,a){return"    Padding-top - xl on-lg\n"},32:function(e,t,i,r,a){return"    Padding-top - xl on-xl\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){var l;return(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+"<br>\n"+(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-wrap","display--type":"flex"},fn:e.program(12,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+"<br>\n"+(null!=(l=e.invokePartial(i(14),t,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h2"},fn:e.program(21,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(i(10),t,{name:"display",hash:{"display--modifier":"pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap","display--type":"flex"},fn:e.program(23,n,0),inverse:e.noop,data:n,helpers:r,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},1325:function(e,t){e.exports='{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Padding, paddingX, paddingY\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-p-xl"}}\n    Padding - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-px-xl"}}\n    Padding x axis - pf-u-px-xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-py-xl"}}\n    Padding y axis - pf-u-py-xl\n  {{/flex-item}}\n{{/display}}\n<br>\n{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Padding top, padding right, padding bottom, padding left\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl"}}\n    Padding-top - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pr-xl"}}\n    Padding-right - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pb-xl"}}\n    Padding-bottom - xl\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pl-xl"}}\n    Padding-left - xl\n  {{/flex-item}}\n{{/display}}\n<br>\n{{#> title titleType="h2" title--modifier="pf-m-lg"}}\n  Responsive padding\n{{/title}}\n{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap"}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl"}}\n    Padding-top\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl-on-sm"}}\n    Padding-top - xl on-sm\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl-on-md"}}\n    Padding-top - xl on-md\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl-on-lg"}}\n    Padding-top - xl on-lg\n  {{/flex-item}}\n  {{#> flex-item flex-item--modifier="pf-u-pt-xl-on-xl"}}\n    Padding-top - xl on-xl\n  {{/flex-item}}\n{{/display}}\n'},1143:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-utilities-spacing-examples-index-js-01952f90cd9511650ab4.js.map