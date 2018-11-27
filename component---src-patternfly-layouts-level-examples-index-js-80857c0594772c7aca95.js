webpackJsonp([0xe99af70b8bc8],{944:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>A level is a layout that distributes the space between children evenly and it centers children on the x-axis. By default it positions the children horizontally, but on smaller devices it will position the children vertically.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-level</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initializes the level layout</td> </tr> <tr> <td><code>.pf-l-level__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Explicitly sets a child of the level. This class isn&#39;t necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-level</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},339:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var a=l(3),r=n(a),i=l(11),o=n(i),d=l(12),s=n(d),u=l(1280),c=n(u),v=l(1279),p=n(v),m=l(1278),f=n(m),h=l(820),g=n(h),b=l(819),x=n(b),k=l(818),P=n(k),y=l(944),w=n(y);l(1131);var E=t.Docs=w.default;t.default=function(){var e=(0,g.default)(),t=(0,x.default)(),l=(0,P.default)(),n="Level";return r.default.createElement(o.default,{docs:E,heading:n,className:"is-layout-page"},r.default.createElement(s.default,{heading:"Level Example",description:"(with 2 children)",handlebars:c.default},e),r.default.createElement(s.default,{heading:"Level Example",description:"(with 3 children)",handlebars:p.default},t),r.default.createElement(s.default,{heading:"Level Example with Gutters",description:"(with 3 children)",handlebars:f.default},l))}},818:function(e,t,l){var n=l(1);e.exports=(n.default||n).template({1:function(e,t,n,a,r){var i;return(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")},2:function(e,t,l,n,a){return"    content with gutter\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var i;return null!=(i=e.invokePartial(l(224),t,{name:"level",hash:{"level--modifier":"pf-m-gutter"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},1278:function(e,t){e.exports='{{#> level level--modifier="pf-m-gutter"}}\n  {{#> level-item}}\n    content with gutter\n  {{/level-item}}\n  {{#> level-item}}\n    content with gutter\n  {{/level-item}}\n  {{#> level-item}}\n    content with gutter\n  {{/level-item}}\n{{/level}}'},819:function(e,t,l){var n=l(1);e.exports=(n.default||n).template({1:function(e,t,n,a,r){var i;return(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")},2:function(e,t,l,n,a){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var i;return null!=(i=e.invokePartial(l(224),t,{name:"level",fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},1279:function(e,t){e.exports="{{#> level}}\n  {{#> level-item}}\n    content\n  {{/level-item}}\n  {{#> level-item}}\n    content\n  {{/level-item}}\n  {{#> level-item}}\n    content\n  {{/level-item}}\n{{/level}}"},820:function(e,t,l){var n=l(1);e.exports=(n.default||n).template({1:function(e,t,n,a,r){var i;return(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(71),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:"")},2:function(e,t,l,n,a){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,r){var i;return null!=(i=e.invokePartial(l(224),t,{name:"level",fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:n,partials:a,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},1280:function(e,t){e.exports="{{#> level}}\n  {{#> level-item}}\n    content\n  {{/level-item}}\n  {{#> level-item}}\n    content\n  {{/level-item}}\n{{/level}}"},71:function(e,t,l){var n=l(1);e.exports=(n.default||n).template({1:function(e,t,l,n,a){var r;return" "+e.escapeExpression((r=null!=(r=l["level-item--modifier"]||(null!=t?t["level-item--modifier"]:t))?r:l.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"level-item--modifier",hash:{},data:a}):r))},3:function(e,t,l,n,a){var r,i;return"    "+(null!=(i=null!=(i=l["level-item--attribute"]||(null!=t?t["level-item--attribute"]:t))?i:l.helperMissing,r="function"==typeof i?i.call(null!=t?t:e.nullContext||{},{name:"level-item--attribute",hash:{},data:a}):i)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,t,l,n,a){var r,i=null!=t?t:e.nullContext||{};return'<div class="pf-l-level__item'+(null!=(r=l.if.call(i,null!=t?t["level-item--modifier"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?r:"")+'"\n'+(null!=(r=l.if.call(i,null!=t?t["level-item--attribute"]:t,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?r:"")+">\n"+(null!=(r=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:a,indent:"  ",helpers:l,partials:n,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},224:function(e,t,l){var n=l(1);e.exports=(n.default||n).template({1:function(e,t,l,n,a){var r;return" "+e.escapeExpression((r=null!=(r=l["level--modifier"]||(null!=t?t["level--modifier"]:t))?r:l.helperMissing,"function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"level--modifier",hash:{},data:a}):r))},3:function(e,t,l,n,a){var r,i;return"    "+(null!=(i=null!=(i=l["level--attribute"]||(null!=t?t["level--attribute"]:t))?i:l.helperMissing,r="function"==typeof i?i.call(null!=t?t:e.nullContext||{},{name:"level--attribute",hash:{},data:a}):i)?r:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,t,l,n,a){var r,i=null!=t?t:e.nullContext||{};return'<div class="pf-l-level'+(null!=(r=l.if.call(i,null!=t?t["level--modifier"]:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?r:"")+' Documentation-container-tall"\n'+(null!=(r=l.if.call(i,null!=t?t["level--attribute"]:t,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?r:"")+">\n"+(null!=(r=e.invokePartial(n["@partial-block"],t,{name:"@partial-block",data:a,indent:"  ",helpers:l,partials:n,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},1131:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-level-examples-index-js-80857c0594772c7aca95.js.map