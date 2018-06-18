webpackJsonp([56443374993712],{547:function(t,e){t.exports={data:{markdownRemark:{html:'<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>Always add a modifier class. Do not use <code>.pf-c-alert</code> on its own.</p>\n<h2 id="accessibility"><a href="#accessibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility</h2>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>role="alert"</code></td>\n<td><code>.pf-c-alert__body</code></td>\n<td>Communicates contents of the alert message to the user. This should only be used on dynamically created alerts, such as toast notifications or inline notifications that aren\'t present during page load (for example, an alert at the top of a form when there are errors in the form).</td>\n</tr>\n<tr>\n<td><code>aria-label="Success Notification"</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Indicates the Success Notification.</td>\n</tr>\n<tr>\n<td><code>aria-label="Danger Notification"</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Indicates the Danger Notification.</td>\n</tr>\n<tr>\n<td><code>aria-label="Warning Notification"</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Indicates the Warning Notification.</td>\n</tr>\n<tr>\n<td><code>aria-label="Information Notification"</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Indicates the Information Notification.</td>\n</tr>\n<tr>\n<td><code>aria-hidden="true"</code></td>\n<td><code>.pf-c-alert__icon</code></td>\n<td>Hides icon for assistive technologies. ** Required **</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.sr-only</code></td>\n<td><code>.pf-c-alert__title &#x3C;span></code></td>\n<td>Content that is visually hidden but accessible to assistive technologies. This should state the type of alert/notification.  ** Required**</td>\n</tr>\n</tbody>\n</table>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-c-alert</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Applies default alert styling. Always use with a modifier class. ** Required**</td>\n</tr>\n<tr>\n<td><code>.pf-c-alert__icon</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Defines the alert icon. ** Required **</td>\n</tr>\n<tr>\n<td><code>.pf-c-alert__body</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Defines the alert body.  ** Required **</td>\n</tr>\n<tr>\n<td><code>.pf-c-alert__action</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Define the alert action.</td>\n</tr>\n<tr>\n<td><code>.pf-m-success</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Applies success styling.</td>\n</tr>\n<tr>\n<td><code>.pf-m-danger</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Applies danger styling.</td>\n</tr>\n<tr>\n<td><code>.pf-m-warning</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Applies warning styling.</td>\n</tr>\n<tr>\n<td><code>.pf-m-info</code></td>\n<td><code>.pf-c-alert</code></td>\n<td>Applies info styling.</td>\n</tr>\n</tbody>\n</table>',fields:{path:"/components/docs/docs",type:"documentation",contentType:"component"}}},pathContext:{pagePath:"/components/docs/docs",type:"documentation",contentType:"component"}}}});
//# sourceMappingURL=path---components-docs-docs-bc40dbf42804b2956f13.js.map