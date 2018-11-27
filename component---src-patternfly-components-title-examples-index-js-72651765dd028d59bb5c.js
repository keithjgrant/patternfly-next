webpackJsonp([0x76019ccddc60],{933:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>The title component applies top and bottom margins, font-weight, font-size, and line-height to titles.</p> <p>The content component defines margin on headers. To regain the same spacing use spacer utility classes:</p> <table> <thead> <tr> <th>Title</th> <th>Margin Top</th> <th>Margin Bottom</th> </tr> </thead> <tbody> <tr> <td>4xl</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> <tr> <td>3xl</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> <tr> <td>2xl</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> <tr> <td>xl</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> <tr> <td>lg</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> <tr> <td>md</td> <td><code>.pf-u-mt-lg</code></td> <td><code>.pf-u-mb-md</code></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-title</code></td> <td><code>&lt;h1&gt;</code>,<code>&lt;h2&gt;</code>,<code>&lt;h3&gt;</code>,<code>&lt;h4&gt;</code>,<code>&lt;h5&gt;</code>,<code>&lt;h6&gt;</code></td> <td>Initiates a title. Always use it with a modifier class.</td> </tr> <tr> <td><code>.pf-m-4xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 4xl size</td> </tr> <tr> <td><code>.pf-m-3xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 3xl size</td> </tr> <tr> <td><code>.pf-m-2xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for 2xl size</td> </tr> <tr> <td><code>.pf-m-xl</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for xl size</td> </tr> <tr> <td><code>.pf-m-lg</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for lg size</td> </tr> <tr> <td><code>.pf-m-md</code></td> <td><code>.pf-c-title</code></td> <td>Modifies for md size</td> </tr> </tbody> </table> "},327:function(t,e,d){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var i=d(3),l=o(i),r=d(11),n=o(r),a=d(12),c=o(a),f=d(1249),p=o(f),s=d(784),m=o(s),h=d(933),u=o(h);d(1126);var g=e.Docs=u.default;e.default=function(){var t=(0,m.default)(),e="Title";return l.default.createElement(n.default,{docs:g,heading:e},l.default.createElement(c.default,{heading:"Title Types",handlebars:p.default},t))}},784:function(t,e,d){var o=d(1);t.exports=(o.default||o).template({1:function(t,e,d,o,i){return"    4xl title\n"},3:function(t,e,d,o,i){return"    3xl title\n"},5:function(t,e,d,o,i){return"    2xl title\n"},7:function(t,e,d,o,i){return"    xl title\n"},9:function(t,e,d,o,i){return"    lg title\n"},11:function(t,e,d,o,i){return"    md title\n"},compiler:[7,">= 4.0.0"],main:function(t,e,o,i,l){var r;return(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-4xl",titleType:"h1"},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-3xl",titleType:"h1"},fn:t.program(3,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-2xl",titleType:"h1"},fn:t.program(5,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-xl",titleType:"h1"},fn:t.program(7,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-lg",titleType:"h1"},fn:t.program(9,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")+(null!=(r=t.invokePartial(d(14),e,{name:"title",hash:{"title--modifier":"pf-m-md",titleType:"h1"},fn:t.program(11,l,0),inverse:t.noop,data:l,helpers:o,partials:i,decorators:t.decorators}))?r:"")},usePartial:!0,useData:!0})},1249:function(t,e){t.exports='{{#> title titleType="h1" title--modifier="pf-m-4xl"}}\n    4xl title\n{{/title}}\n{{#> title titleType="h1" title--modifier="pf-m-3xl"}}\n    3xl title\n{{/title}}\n{{#> title titleType="h1" title--modifier="pf-m-2xl"}}\n    2xl title\n{{/title}}\n{{#> title titleType="h1" title--modifier="pf-m-xl"}}\n    xl title\n{{/title}}\n{{#> title titleType="h1" title--modifier="pf-m-lg"}}\n    lg title\n{{/title}}\n{{#> title titleType="h1" title--modifier="pf-m-md"}}\n    md title\n{{/title}}\n'},1126:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-components-title-examples-index-js-72651765dd028d59bb5c.js.map