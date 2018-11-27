webpackJsonp([85902360018623],{919:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>Input, Textarea, and select are provided in the form controls component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: <code>aria-label</code>)</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-form-control</code></td> <td><code>&lt;input&gt;</code>,<code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code></td> <td>Initiates an input, textarea or select. For styling of checkboxes or Radios see the <a href=/components/Check/examples/ >check component</a>. <strong>required</strong></td> </tr> </tbody> </table> "},731:function(t,e,o){var r=o(1);t.exports=(r.default||r).template({1:function(t,e,o,r,a){return""},compiler:[7,">= 4.0.0"],main:function(t,e,r,a,n){var l;return(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'disabled type="text" value="disabled" id="textInput1" aria-label="disabled input example"',input:"true",controlType:"input"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'type="text" value="standard" id="textInput2" aria-label="standard input example"',input:"true",controlType:"input"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'readonly type="text" value="readonly" id="textInput3" aria-label="readonly input example"',input:"true",controlType:"input"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'required type="text" value="error" id="textInput4" aria-invalid="true" aria-label="Error state input example"',input:"true",controlType:"input"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")},usePartial:!0,useData:!0})},1213:function(t,e){t.exports='{{#> form-control controlType="input" input="true" form-control--attribute=\'disabled type="text" value="disabled" id="textInput1" aria-label="disabled input example"\'}}\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="input" input="true" form-control--attribute=\'type="text" value="standard" id="textInput2" aria-label="standard input example"\'}}\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="input" input="true" form-control--attribute=\'readonly type="text" value="readonly" id="textInput3" aria-label="readonly input example"\'}}\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="input" input="true" form-control--attribute=\'required type="text" value="error" id="textInput4" aria-invalid="true" aria-label="Error state input example"\'}}\n{{/form-control}}\n'},732:function(t,e,o){var r=o(1);t.exports=(r.default||r).template({1:function(t,e,o,r,a){return'  <option value="" selected>Please choose</option>\n  <option value="Mr">Mr</option>\n  <option value="Miss">Miss</option>\n  <option value="Mrs">Mrs</option>\n  <option value="Ms">Ms</option>\n  <option value="Dr">Dr</option>\n  <option value="Other">Other</option>\n'},3:function(t,e,o,r,a){return'  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n'},5:function(t,e,o,r,a){return'  <option value="">make selection</option>\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2">The second option</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n'},compiler:[7,">= 4.0.0"],main:function(t,e,r,a,n){var l;return(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'id="selectExample1" name="selectExample1" aria-label="select example"',controlType:"select"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'id="selectExample2" name="selectExample2" aria-label="select group example"',controlType:"select"},fn:t.program(3,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'required aria-invalid="true" id="selectExample3" name="selectExample3" aria-label="error state select group example"',controlType:"select"},fn:t.program(5,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")},usePartial:!0,useData:!0})},1214:function(t,e){t.exports='{{#> form-control controlType="select" form-control--attribute=\'id="selectExample1" name="selectExample1" aria-label="select example"\'}}\n  <option value="" selected>Please choose</option>\n  <option value="Mr">Mr</option>\n  <option value="Miss">Miss</option>\n  <option value="Mrs">Mrs</option>\n  <option value="Ms">Ms</option>\n  <option value="Dr">Dr</option>\n  <option value="Other">Other</option>\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="select" form-control--attribute=\'id="selectExample2" name="selectExample2" aria-label="select group example"\'}}\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="select" form-control--attribute=\'required aria-invalid="true" id="selectExample3" name="selectExample3" aria-label="error state select group example"\'}}\n  <option value="">make selection</option>\n  <optgroup label="Group 1">\n    <option value="Option 1">The first option</option>\n    <option value="Option 2">The second option</option>\n  </optgroup>\n  <optgroup label="Group 2">\n    <option value="Option 3">The third option</option>\n    <option value="Option 4">The fourth option</option>\n  </optgroup>\n{{/form-control}}'},733:function(t,e,o){var r=o(1);t.exports=(r.default||r).template({1:function(t,e,o,r,a){return""},compiler:[7,">= 4.0.0"],main:function(t,e,r,a,n){var l;return(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'name="textarea" id="textarea1" aria-label="textarea example"',controlType:"textarea"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")+"<br><br>\n"+(null!=(l=t.invokePartial(o(17),e,{name:"form-control",hash:{"form-control--attribute":'required name="textarea" id="textarea2" aria-label="Error state textarea example" aria-invalid="true"',controlType:"textarea"},fn:t.program(1,n,0),inverse:t.noop,data:n,helpers:r,partials:a,decorators:t.decorators}))?l:"")},usePartial:!0,useData:!0})},1215:function(t,e){t.exports='{{#> form-control controlType="textarea" form-control--attribute=\'name="textarea" id="textarea1" aria-label="textarea example"\'}}\n{{/form-control}}\n<br><br>\n{{#> form-control controlType="textarea" form-control--attribute=\'required name="textarea" id="textarea2" aria-label="Error state textarea example" aria-invalid="true"\'}}\n{{/form-control}}'},316:function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var a=o(3),n=r(a),l=o(11),i=r(l),p=o(12),u=r(p),s=o(1213),c=r(s),d=o(1214),m=r(d),f=o(1215),b=r(f),h=o(731),v=r(h),x=o(732),g=r(x),y=o(733),T=r(y),E=o(919),O=r(E);o(1127);var M=e.Docs=O.default;e.default=function(){var t=(0,v.default)(),e=(0,g.default)(),o=(0,T.default)(),r="Form Controls";return n.default.createElement(i.default,{docs:M,heading:r},n.default.createElement(u.default,{heading:"Input Example",handlebars:c.default},t),n.default.createElement(u.default,{heading:"Select Example",handlebars:m.default},e),n.default.createElement(u.default,{heading:"Textarea Example",handlebars:b.default},o))}},1127:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-components-form-control-examples-index-js-1ede781a717df19ae9e1.js.map