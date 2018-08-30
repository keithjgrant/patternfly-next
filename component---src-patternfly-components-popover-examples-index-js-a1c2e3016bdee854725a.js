webpackJsonp([0xe5283f341cc3],{667:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>A popover is used to provide contextual information for another component on click. The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body. One of the directional modifiers (<code>.pf-m-left</code>, <code>.pf-m-top</code>, etc.) is required on the popover component</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applies to</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;dialog&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Identifies the element that serves as the popover container. <strong>Required</strong></td> </tr> <tr> <td><code>aria-labelledby=&quot;[id value of .pf-c-popover__header-title]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible name by referring to the element that provides the dialog title. <strong>Required when .pf-c-popover__header-title is present</strong></td> </tr> <tr> <td><code>aria-label=&quot;[title of popover]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible name. <strong>Required when .pf-c-popover__header-title is <em>not</em> present</strong></td> </tr> <tr> <td><code>aria-describedby=&quot;[id value of applicable content]&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.</td> </tr> <tr> <td><code>aria-popover=&quot;true&quot;</code></td> <td><code>.pf-c-popover</code></td> <td>Tells assistive technologies that the windows underneath the current popover are not available for interaction. <strong>Required</strong></td> </tr> <tr> <td><code>aria-label=&quot;Close&quot;</code></td> <td><code>.pf-c-popover__close .pf-c-button</code></td> <td>Provides an accessible name for the close button as it uses an icon instead of text. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-popover</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a popover.</td> </tr> <tr> <td><code>.pf-c-popover__arrow</code></td> <td><code>.pf-c-popover</code></td> <td>Creates an arrow pointing towards the element the popover describes. <strong> Required.</strong></td> </tr> <tr> <td><code>.pf-c-popover__content</code></td> <td><code>.pf-c-popover</code></td> <td>Creates the body of the popover. <strong> Required.</strong></td> </tr> <tr> <td><code>.pf-c-popover__close</code></td> <td><code>.pf-c-popover__content</code></td> <td>Contains and positions the close icon in the top-right corner of the popover. <strong> Required.</strong></td> </tr> <tr> <td><code>.pf-c-popover__header</code></td> <td><code>.pf-c-popover__content</code></td> <td>The header text area of the popover.</td> </tr> <tr> <td><code>.pf-c-popover__title</code></td> <td><code>.pf-c-popover__header</code></td> <td>The actual popover title.</td> </tr> <tr> <td><code>.pf-c-popover__body</code></td> <td><code>.pf-c-popover__content</code></td> <td>The popover&#39;s body text. <strong> Required.</strong></td> </tr> <tr> <td><code>.pf-m-left</code></td> <td><code>.pf-c-popover</code></td> <td>Puts arrow to the left of the popover&#39;s content.</td> </tr> <tr> <td><code>.pf-m-right</code></td> <td><code>.pf-c-popover</code></td> <td>Puts arrow to the right of the popover&#39;s content.</td> </tr> <tr> <td><code>.pf-m-top</code></td> <td><code>.pf-c-popover</code></td> <td>Puts arrow on top of the popover&#39;s content.</td> </tr> <tr> <td><code>.pf-m-bottom</code></td> <td><code>.pf-c-popover</code></td> <td>Puts arrow on the bottom of the popover&#39;s content.</td> </tr> </tbody> </table> "},248:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var n=o(5),d=r(n),a=o(11),p=r(a),i=o(12),c=r(i),s=o(885),l=r(s),v=o(572),h=r(v),f=o(667),u=r(f);o(807);var m=t.Docs=u.default;t.default=function(){var e=(0,h.default)(),t="Popover";return d.default.createElement(p.default,{docs:m,heading:t},d.default.createElement(c.default,{className:"is-popover",heading:"Popover",handlebars:l.default},e))}},572:function(e,t,o){var r=o(1);e.exports=(r.default||r).template({1:function(e,t,o,r,n,d,a){return"    World!  I am a popover\n"},2:function(e,t,r,n,d){var a;return null!=(a=e.invokePartial(o(7),t,{name:"button",hash:{btnClass:"pf-m-primary"},fn:e.program(3,d,0),inverse:e.noop,data:d,helpers:r,partials:n,decorators:e.decorators}))?a:""},3:function(e,t,o,r,n){return"            parent\n"},5:function(e,t,o,r,n,d,a){return"    And also very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long body text.\n"},7:function(e,t,o,r,n,d,a){return"    Or no body text, and be short\n"},9:function(e,t,o,r,n,d,a){return"    !\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,n,d,a,p){var i;return(null!=(i=e.invokePartial(o(106),t,{name:"popover",hash:{header:"hello",direction:"pf-m-right"},fn:e.program(1,d,0,a,p),inverse:e.noop,data:d,helpers:r,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(o(106),t,{name:"popover",hash:{header:"I can have a long title",direction:"pf-m-top"},fn:e.program(5,d,0,a,p),inverse:e.noop,data:d,helpers:r,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(o(106),t,{name:"popover",hash:{direction:"pf-m-bottom"},fn:e.program(7,d,0,a,p),inverse:e.noop,data:d,helpers:r,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(o(106),t,{name:"popover",hash:{direction:"pf-m-left"},fn:e.program(9,d,0,a,p),inverse:e.noop,data:d,helpers:r,partials:n,decorators:e.decorators}))?i:"")},"1_d":function(e,t,o,r,n,d,a){var p=o.decorators;return e=p.inline(e,t,o,{name:"inline",hash:{},fn:o.program(2,n,0,d,a),inverse:o.noop,args:["popover-parent"],data:n})||e},useDecorators:!0,"5_d":function(e,t,o,r,n,d,a){var p=o.decorators;return e=p.inline(e,t,o,{name:"inline",hash:{},fn:o.program(2,n,0,d,a),inverse:o.noop,args:["popover-parent"],data:n})||e},"7_d":function(e,t,o,r,n,d,a){var p=o.decorators;return e=p.inline(e,t,o,{name:"inline",hash:{},fn:o.program(2,n,0,d,a),inverse:o.noop,args:["popover-parent"],data:n})||e},"9_d":function(e,t,o,r,n,d,a){var p=o.decorators;return e=p.inline(e,t,o,{name:"inline",hash:{},fn:o.program(2,n,0,d,a),inverse:o.noop,args:["popover-parent"],data:n})||e},usePartial:!0,useData:!0,useDepths:!0})},885:function(e,t){e.exports='{{#> popover direction="pf-m-right" header="hello"}}\n    World!  I am a popover\n    {{#*inline "popover-parent"}}\n        {{#> button btnClass=\'pf-m-primary\'}}\n            parent\n        {{/button}}\n    {{/inline}}\n{{/popover}}\n{{#> popover direction="pf-m-top" header="I can have a long title"}}\n    And also very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long body text.\n    {{#*inline "popover-parent"}}\n        {{#> button btnClass=\'pf-m-primary\'}}\n            parent\n        {{/button}}\n    {{/inline}}\n{{/popover}}\n{{#> popover direction="pf-m-bottom"}}\n    Or no body text, and be short\n    {{#*inline "popover-parent"}}\n        {{#> button btnClass=\'pf-m-primary\'}}\n            parent\n        {{/button}}\n    {{/inline}}\n{{/popover}}\n{{#> popover direction="pf-m-left"}}\n    !\n    {{#*inline "popover-parent"}}\n        {{#> button btnClass=\'pf-m-primary\'}}\n            parent\n        {{/button}}\n    {{/inline}}\n{{/popover}}'},106:function(e,t,o){var r=o(1);e.exports=(r.default||r).template({1:function(e,t,o,r,n){return" "},compiler:[7,">= 4.0.0"],main:function(e,t,o,r,n){var d,a,p=null!=t?t:e.nullContext||{},i=o.helperMissing,c="function",s=e.escapeExpression;return'<div class="Preview__overlay">\n  <div class="Preview__overlay-container '+s((a=null!=(a=o.direction||(null!=t?t.direction:t))?a:i,typeof a===c?a.call(p,{name:"direction",hash:{},data:n}):a))+'">\n    <div class="pf-c-popover '+s((a=null!=(a=o.direction||(null!=t?t.direction:t))?a:i,typeof a===c?a.call(p,{name:"direction",hash:{},data:n}):a))+'">\n      <div class="pf-c-popover__arrow"></div>\n      <div class="pf-c-popover__content" role="dialog" aria-modal="true" aria-labelledby="popover-title" aria-describedby="popover-description">\n        <div class="pf-c-popover__close">\n          <button class="pf-c-button pf-m-plain" aria-label="Close">\n            <i class="fas fa-times"></i>\n          </button>\n        </div>\n        <header class="pf-c-popover__header">\n          <h1 class="pf-c-popover__header-title" id="popover-title">\n            '+s((a=null!=(a=o.header||(null!=t?t.header:t))?a:i,typeof a===c?a.call(p,{name:"header",hash:{},data:n}):a))+'\n          </h1>\n        </header>\n        <div class="pf-c-popover__body" id="popover-description">\n'+(null!=(d=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:n,indent:"          ",helpers:o,partials:r,decorators:e.decorators}))?d:"")+"        </div>\n      </div>\n    </div>\n  </div>\n  "+(null!=(d=e.invokePartial(r["popover-parent"],t,{name:"popover-parent",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:r,decorators:e.decorators}))?d:"")+"\n</div>"},usePartial:!0,useData:!0})},807:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-components-popover-examples-index-js-a1c2e3016bdee854725a.js.map