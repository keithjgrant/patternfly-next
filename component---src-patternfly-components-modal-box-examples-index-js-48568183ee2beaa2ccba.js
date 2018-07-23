webpackJsonp([0x9ff945bc8c37],{583:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no <code>pf-c-modal-box__header-title</code> is used, <code>aria-label=&quot;[title of modal]&quot;</code> must be provided for <code>.pf-c-modal-box</code>.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applies to</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;dialog&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Identifies the element that serves as the modal container. <strong>Required</strong></td> </tr> <tr> <td><code>aria-labeledby=&quot;[id value of .pf-c-modal-box__header-title]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible name by referring to the element that provides the dialog title. <strong>Required when .pf-c-modal-box__header-title is present</strong></td> </tr> <tr> <td><code>aria-label=&quot;[title of modal]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible name. <strong>Required when .pf-c-modal-box__header-title is <em>not</em> present</strong></td> </tr> <tr> <td><code>aria-describedby=&quot;[id value of applicable content]&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.</td> </tr> <tr> <td><code>aria-modal=&quot;true&quot;</code></td> <td><code>.pf-c-modal-box</code></td> <td>Tells assistive technologies that the windows underneath the current modal are not available for interaction. <strong>Required</strong></td> </tr> <tr> <td><code>aria-label=&quot;Close Dialog&quot;</code></td> <td><code>.pf-c-modal-box__close .pf-c-button</code></td> <td>Provides an accessible name for the close button as it uses an icon instead of text. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-modal-box</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a modal box. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-modal-box__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Initiates a modal box header. A modal box header is <strong>required</strong> if there is no modal box body.</td> </tr> <tr> <td><code>.pf-c-modal-box__header-title</code></td> <td><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code></td> <td>Initiates a modal box header title.</td> </tr> <tr> <td><code>.pf-c-modal-box__body</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a modal box body. A modal box body is <strong>required</strong> if there is no modal box header.</td> </tr> <tr> <td><code>.pf-c-modal-box__footer</code></td> <td><code>&lt;footer&gt;</code></td> <td>Initiates a modal box footer.</td> </tr> <tr> <td><code>.pf-c-modal-box__close</code></td> <td><code>&lt;button&gt;</code></td> <td>Initiates a modal box close button container. The close container can be nested as the first item in the header or body. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-lg</code></td> <td><code>.pf-c-modal-box</code></td> <td>Modifies for a modal box width.</td> </tr> </tbody> </table> "},216:function(e,a,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var l=o(4),r=t(l),n=o(8),i=t(n),d=o(9),s=t(d),u=o(771),c=t(u),m=o(772),b=t(m),p=o(773),f=t(p),h=o(507),x=t(h),v=o(508),g=t(v),y=o(509),q=t(y),k=o(583),P=t(k);o(706);var _=a.Docs=P.default;a.default=function(){var e=(0,x.default)(),a=(0,g.default)(),o=(0,q.default)();return r.default.createElement(i.default,{docs:_},r.default.createElement(s.default,{heading:"ModalBox Basic Example",handlebars:c.default},e),r.default.createElement(s.default,{heading:"ModalBox Large Example",handlebars:b.default},a),r.default.createElement(s.default,{heading:"ModalBox No Header Example",handlebars:f.default},o))}},507:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(36),a,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(51),a,{name:"modal-box-header",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(35),a,{name:"modal-box-body",hash:{"modal-box-body--attributes":'id="modal-description"'},fn:e.program(8,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(37),a,{name:"modal-box-footer",fn:e.program(10,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,a,t,l,r){var n;return null!=(n=e.invokePartial(o(5),a,{name:"button",hash:{btnAttributes:'aria-label="Close Dialog"',btnClass:"pf-m-action"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,a,o,t,l){return'      <i class="fas fa-times"></i>\n'},5:function(e,a,t,l,r){var n;return null!=(n=e.invokePartial(o(50),a,{name:"modal-box-header-title",hash:{"modal-box-header-title--attributes":'id="modal-title"'},fn:e.program(6,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},6:function(e,a,o,t,l){return"      Modal Header\n"},8:function(e,a,o,t,l){return"    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n"},10:function(e,a,o,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(38),a,{name:"modal-box",hash:{"modal-box--attributes":'aria-labelledby="modal-title" aria-describedby="modal-description"'},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+"\n"},usePartial:!0,useData:!0})},771:function(e,a){e.exports='{{#> modal-box modal-box--attributes=\'aria-labelledby="modal-title" aria-describedby="modal-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button btnClass="pf-m-action" btnAttributes=\'aria-label="Close Dialog"\'}}\n      <i class="fas fa-times"></i>\n    {{/button}}\n  {{/modal-box-close}}\n  {{#> modal-box-header}}\n    {{#> modal-box-header-title modal-box-header-title--attributes=\'id="modal-title"\'}}\n      Modal Header\n    {{/modal-box-header-title}}\n  {{/modal-box-header}}\n  {{#> modal-box-body modal-box-body--attributes=\'id="modal-description"\'}}\n    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n\n'},772:function(e,a){e.exports='{{#> modal-box modal-box--modifiers="pf-m-lg" modal-box--attributes=\'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button btnClass="pf-m-action" btnAttributes=\'aria-label="Close Dialog"\'}}\n      <i class="fas fa-times"></i>\n    {{/button}}\n  {{/modal-box-close}}\n  {{#> modal-box-header}}\n    {{#> modal-box-header-title  modal-box-header-title--type="h2" modal-box-header-title--attributes=\'id="modal-lg-title"\'}}\n      Modal Header\n    {{/modal-box-header-title}}\n  {{/modal-box-header}}\n  {{#> modal-box-body modal-box-body--attributes=\'id="modal-lg-description"\'}}\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n\n'},508:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(36),a,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(51),a,{name:"modal-box-header",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(35),a,{name:"modal-box-body",hash:{"modal-box-body--attributes":'id="modal-lg-description"'},fn:e.program(8,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(37),a,{name:"modal-box-footer",fn:e.program(10,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,a,t,l,r){var n;return null!=(n=e.invokePartial(o(5),a,{name:"button",hash:{btnAttributes:'aria-label="Close Dialog"',btnClass:"pf-m-action"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,a,o,t,l){return'      <i class="fas fa-times"></i>\n'},5:function(e,a,t,l,r){var n;return null!=(n=e.invokePartial(o(50),a,{name:"modal-box-header-title",hash:{"modal-box-header-title--attributes":'id="modal-lg-title"',"modal-box-header-title--type":"h2"},fn:e.program(6,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},6:function(e,a,o,t,l){return"      Modal Header\n"},8:function(e,a,o,t,l){return"    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n"},10:function(e,a,o,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(38),a,{name:"modal-box",hash:{"modal-box--attributes":'aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"',"modal-box--modifiers":"pf-m-lg"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+"\n"},usePartial:!0,useData:!0})},773:function(e,a){e.exports='{{#> modal-box modal-box--attributes=\'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"\'}}\n  {{#> modal-box-close}}\n    {{#> button btnClass="pf-m-action" btnAttributes=\'aria-label="Close Dialog"\'}}\n      <i class="fas fa-times"></i>\n    {{/button}}\n  {{/modal-box-close}}  \n  {{#> modal-box-body}}\n    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  {{/modal-box-body}}\n  {{#> modal-box-footer}}\n    Modal Footer\n  {{/modal-box-footer}}\n{{/modal-box}}\n\n'},509:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(36),a,{name:"modal-box-close",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(35),a,{name:"modal-box-body",fn:e.program(5,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+(null!=(n=e.invokePartial(o(37),a,{name:"modal-box-footer",fn:e.program(7,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")},2:function(e,a,t,l,r){var n;return null!=(n=e.invokePartial(o(5),a,{name:"button",hash:{btnAttributes:'aria-label="Close Dialog"',btnClass:"pf-m-action"},fn:e.program(3,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:""},3:function(e,a,o,t,l){return'      <i class="fas fa-times"></i>\n'},5:function(e,a,o,t,l){return'    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal\'s aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'},7:function(e,a,o,t,l){return"    Modal Footer\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,l,r){var n;return(null!=(n=e.invokePartial(o(38),a,{name:"modal-box",hash:{"modal-box--attributes":'aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"'},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:t,partials:l,decorators:e.decorators}))?n:"")+"\n"},usePartial:!0,useData:!0})},35:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box-body--modifiers"]||(null!=a?a["modal-box-body--modifiers"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-body--modifiers",hash:{},data:l}):r))},3:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box-body--attributes"]||(null!=a?a["modal-box-body--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box-body--attributes",hash:{},data:l}):n)?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return'<div class="pf-c-modal-box__body'+(null!=(r=o.if.call(n,null!=a?a["modal-box-body--modifiers"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=o.if.call(n,null!=a?a["modal-box-body--attributes"]:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},36:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box-close--modifiers"]||(null!=a?a["modal-box-close--modifiers"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-close--modifiers",hash:{},data:l}):r))},3:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box-close--attributes"]||(null!=a?a["modal-box-close--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box-close--attributes",hash:{},data:l}):n)?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return'<div class="pf-c-modal-box__close'+(null!=(r=o.if.call(n,null!=a?a["modal-box-close--modifiers"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=o.if.call(n,null!=a?a["modal-box-close--attributes"]:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},37:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box-footer--modifier"]||(null!=a?a["modal-box-footer--modifier"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-footer--modifier",hash:{},data:l}):r))},3:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box-footer--attributes"]||(null!=a?a["modal-box-footer--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box-footer--attributes",hash:{},data:l}):n)?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return'<footer class="pf-c-modal-box__footer'+(null!=(r=o.if.call(n,null!=a?a["modal-box-footer--modifier"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n'+(null!=(r=o.if.call(n,null!=a?a["modal-box-footer--attributes"]:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</footer>\n"},usePartial:!0,useData:!0})},50:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return e.escapeExpression((r=null!=(r=o["modal-box-header-title--type"]||(null!=a?a["modal-box-header-title--type"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-header-title--type",hash:{},data:l}):r))},3:function(e,a,o,t,l){return"h1"},5:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box-header-title--modifiers"]||(null!=a?a["modal-box-header-title--modifiers"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-header-title--modifiers",hash:{},data:l}):r))},7:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box-header-title--attributes"]||(null!=a?a["modal-box-header-title--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box-header-title--attributes",hash:{},data:l}):n)?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return"<"+(null!=(r=o.if.call(n,null!=a?a["modal-box-header-title--type"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l}))?r:"")+' class="pf-c-modal-box__header-title'+(null!=(r=o.if.call(n,null!=a?a["modal-box-header-title--modifiers"]:a,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l}))?r:"")+'" \n'+(null!=(r=o.if.call(n,null!=a?a["modal-box-header-title--attributes"]:a,{name:"if",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</"+(null!=(r=o.if.call(n,null!=a?a["modal-box-header-title--type"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l}))?r:"")+">\n"},usePartial:!0,useData:!0})},51:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box-header--modifiers"]||(null!=a?a["modal-box-header--modifiers"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box-header--modifiers",hash:{},data:l}):r))},3:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box-header--attributes"]||(null!=a?a["modal-box-header--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box-header--attributes",hash:{},data:l}):n)?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return'<header class="pf-c-modal-box__header'+(null!=(r=o.if.call(n,null!=a?a["modal-box-header--modifiers"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'" \n'+(null!=(r=o.if.call(n,null!=a?a["modal-box-header--attributes"]:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">  \n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</header>\n"},usePartial:!0,useData:!0})},38:function(e,a,o){var t=o(1);e.exports=(t.default||t).template({1:function(e,a,o,t,l){var r;return" "+e.escapeExpression((r=null!=(r=o["modal-box--modifiers"]||(null!=a?a["modal-box--modifiers"]:a))?r:o.helperMissing,"function"==typeof r?r.call(null!=a?a:e.nullContext||{},{name:"modal-box--modifiers",hash:{},data:l}):r))},3:function(e,a,o,t,l){var r,n;return"    "+(null!=(n=null!=(n=o["modal-box--attributes"]||(null!=a?a["modal-box--attributes"]:a))?n:o.helperMissing,r="function"==typeof n?n.call(null!=a?a:e.nullContext||{},{name:"modal-box--attributes",hash:{},data:l}):n)?r:"")+" \n"},compiler:[7,">= 4.0.0"],main:function(e,a,o,t,l){var r,n=null!=a?a:e.nullContext||{};return'<div class="pf-c-modal-box'+(null!=(r=o.if.call(n,null!=a?a["modal-box--modifiers"]:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?r:"")+'"\n  role="dialog" \n  aria-modal="true"\n'+(null!=(r=o.if.call(n,null!=a?a["modal-box--attributes"]:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?r:"")+">\n"+(null!=(r=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:l,indent:"  ",helpers:o,partials:t,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},706:function(e,a){}});
//# sourceMappingURL=component---src-patternfly-components-modal-box-examples-index-js-48568183ee2beaa2ccba.js.map