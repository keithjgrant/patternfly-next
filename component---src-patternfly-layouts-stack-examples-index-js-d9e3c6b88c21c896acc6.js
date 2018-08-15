webpackJsonp([0x8f4a36ddae4c],{632:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>A stack layout is a layout that positions its items vertically. In a Stack layout there is one primary item that will expand vertically to fill the container if needed.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-stack</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the stack layout.</td> </tr> <tr> <td><code>.pf-l-stack__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a stack item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-main</code></td> <td><code>.pf-l-stack__item</code></td> <td>Specifies the main item of the layout, which expands vertically when needed.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-stack</code></td> <td>Adds space between items.</td> </tr> </tbody> </table> "},237:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var r=a(3),o=n(r),i=a(11),l=n(i),s=a(12),c=n(s),d=a(848),u=n(d),m=a(849),p=n(m),f=a(562),h=n(f),k=a(563),v=n(k),g=a(632),x=n(g);a(766);var y=e.Docs=x.default;e.default=function(){var t=(0,h.default)(),e=(0,v.default)();return o.default.createElement(l.default,{docs:y,className:"is-layout-page"},o.default.createElement(c.default,{heading:"Stack Example",handlebars:u.default},t),o.default.createElement(c.default,{heading:"Stack Example with Gutter",handlebars:p.default},e))}},562:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,n,r,o){var i;return(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",hash:{modifierClass:"pf-m-main"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},2:function(t,e,a,n,r){return"    secondary content\n"},4:function(t,e,a,n,r){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var i;return null!=(i=t.invokePartial(a(186),e,{name:"stack",hash:{classModifier:"Documentation-container-xtall"},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},848:function(t,e){t.exports='{{#> stack classModifier="Documentation-container-xtall"}}\n  {{#> stack-item}}\n    secondary content\n  {{/ stack-item}}\n  {{#> stack-item modifierClass="pf-m-main"}}\n    main content\n  {{/ stack-item}}\n  {{#> stack-item }}\n    secondary content\n  {{/ stack-item}}\n{{/ stack}}\n'},563:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,n,r,o){var i;return(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",hash:{modifierClass:"pf-m-main"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(a(57),e,{name:"stack-item",fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:"")},2:function(t,e,a,n,r){return"    secondary content\n"},4:function(t,e,a,n,r){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var i;return null!=(i=t.invokePartial(a(186),e,{name:"stack",hash:{classModifier:"pf-m-gutter Documentation-container-xtall"},fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:n,partials:r,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},849:function(t,e){t.exports='{{#> stack classModifier="pf-m-gutter Documentation-container-xtall"}}\n  {{#> stack-item}}\n    secondary content\n  {{/ stack-item}}\n  {{#> stack-item modifierClass="pf-m-main"}}\n    main content\n  {{/ stack-item}}\n  {{#> stack-item}}\n    secondary content\n  {{/ stack-item}}\n{{/ stack}}\n'},57:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,a,n,r){var o;return" "+t.escapeExpression((o=null!=(o=a.modifierClass||(null!=e?e.modifierClass:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:t.nullContext||{},{name:"modifierClass",hash:{},data:r}):o))},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,r){var o;return'<div class="pf-l-stack__item'+(null!=(o=a.if.call(null!=e?e:t.nullContext||{},null!=e?e.modifierClass:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'">\n'+(null!=(o=t.invokePartial(n["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:a,partials:n,decorators:t.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},186:function(t,e,a){var n=a(1);t.exports=(n.default||n).template({1:function(t,e,a,n,r){var o;return" "+t.escapeExpression((o=null!=(o=a.classModifier||(null!=e?e.classModifier:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:t.nullContext||{},{name:"classModifier",hash:{},data:r}):o))},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,r){var o;return'<div class="pf-l-stack'+(null!=(o=a.if.call(null!=e?e:t.nullContext||{},null!=e?e.classModifier:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+'">\n'+(null!=(o=t.invokePartial(n["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:a,partials:n,decorators:t.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},766:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-layouts-stack-examples-index-js-d9e3c6b88c21c896acc6.js.map