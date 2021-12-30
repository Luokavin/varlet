import{_ as l}from"./elevation.8fda2ce0.js";import{e as n,o,c,a as t,i as d,j as a,m as e,S as r}from"./vendor.8243c41e.js";const h={components:{}},i={class:"varlet-site-doc"},u=t("h1",null,"Counter",-1),p={class:"card"},m=t("h3",null,"Install",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Counter } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Counter)
`)])],-1),v={class:"card"},j=t("h3",null,"Basic Usage",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" value = ref("),t("span",{class:"hljs-number"},"0"),e(`)

    `),t("span",{class:"hljs-keyword"},"return"),e(` { value }
  }
}
`)])],-1),b=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e("/>")]),e(`
`)])],-1),f={class:"card"},y=t("h3",null,"Set the value range",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},":min"),e("="),t("span",{class:"hljs-string"},'"0"'),e(),t("span",{class:"hljs-attr"},":max"),e("="),t("span",{class:"hljs-string"},'"5"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e("/>")]),e(`
`)])],-1),x={class:"card"},w=t("h3",null,"Set step",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},":step"),e("="),t("span",{class:"hljs-string"},'"10"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e("/>")]),e(`
`)])],-1),T={class:"card"},C=t("h3",null,"Decimal length",-1),S=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},":decimal-length"),e("="),t("span",{class:"hljs-string"},'"1"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),B={class:"card"},D=t("h3",null,"Set size",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(`
  `),t("span",{class:"hljs-attr"},"input-text-size"),e("="),t("span",{class:"hljs-string"},'"18px"'),e(`
  `),t("span",{class:"hljs-attr"},"input-width"),e("="),t("span",{class:"hljs-string"},'"50px"'),e(`
  `),t("span",{class:"hljs-attr"},"button-size"),e("="),t("span",{class:"hljs-string"},'"36px"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(`
/>`)]),e(`
`)])],-1),I={class:"card"},W=t("h3",null,"Disabled",-1),A=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},"disabled"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e("/>")]),e(`
`)])],-1),P={class:"card"},M=t("h3",null,"Readonly",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(),t("span",{class:"hljs-attr"},"readonly"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e("/>")]),e(`
`)])],-1),R={class:"card"},$=t("h3",null,"Asynchronous change",-1),E=t("p",null,[e("In some scenarios, you may need to wait for the server to return successfully before making changes. "),t("code",null,"lazy-change"),e(" prevents binding value updates on the component itself. Register "),t("code",null,"before-change"),e(" events for manual updates.")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(`
  `),t("span",{class:"hljs-attr"},"lazy-change"),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(`
  @`),t("span",{class:"hljs-attr"},"before-change"),e("="),t("span",{class:"hljs-string"},'"handleBeforeChange"'),e(`
/>`)]),e(`
`)])],-1),U=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" value = ref("),t("span",{class:"hljs-number"},"0"),e(`)

    `),t("span",{class:"hljs-keyword"},"const"),e(" handleBeforeChange = "),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"value, change"),e(") =>")]),e(` {
      `),t("span",{class:"hljs-built_in"},"setTimeout"),e("("),t("span",{class:"hljs-function"},"() =>"),e(" change(value), "),t("span",{class:"hljs-number"},"500"),e(`)
    }

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      value,
      handleBeforeChange
    }
  }
}
`)])],-1),O={class:"card"},H=t("h3",null,"Validate",-1),q=t("p",null,[e("The values are validated by passing in an array of validators\uFF0CIf the validator returns "),t("code",null,"true"),e(", the validation passes. Other values are converted to text as a user prompt.")],-1),F=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-counter"),e(`
  `),t("span",{class:"hljs-attr"},":rules"),e("="),t("span",{class:"hljs-string"},`"[v => v > 5 || 'Please select a value greater than 5']"`),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(`
/>`)]),e(`
`)])],-1),G=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>Minimum value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>step</code></td><td>Step size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>decimal-length</code></td><td>Preserve decimal places</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>input-width</code></td><td>The width of the input box</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>input-text-size</code></td><td>The text size of the input box</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>button-size</code></td><td>Button size</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-increment</code></td><td>Whether to disable increments</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-decrement</code></td><td>Whether to disable decrements</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-input</code></td><td>Whether to disable input</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>increment-button</code></td><td>Whether to display the increment button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>decrement-button</code></td><td>Whether to display the decrement button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>press</code></td><td>Long press the open button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0COptional value is <code>onInputChange</code> <code>onLazyChange</code> <code>onIncrement</code> <code>onDecrement</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onIncrement&#39;, &#39;onDecrement&#39;, &#39;onInputChange&#39;, &#39;onLazyChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>min || 0</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>Triggered before the change (lazy-change mode only)</td><td><code>value: number</code> <br> <code>change: (value: string | number) =&gt; void</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: number</code></td></tr><tr><td><code>increment</code></td><td>Triggered on increment</td><td><code>value: number</code></td></tr><tr><td><code>decrement</code></td><td>Triggered on decrement</td><td><code>value: number</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--counter-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-font-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--counter-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--counter-input-width</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-input-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-input-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--counter-button-size</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-button-icon-size</code></td><td><code>100%</code></td></tr><tr><td><code>--counter-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger</code>)</td></tr></tbody></table></div>',5);function J(K,Q,X,Y,Z,tt){const s=n("var-site-code-example");return o(),c("div",i,[u,t("div",p,[m,d(s,null,{default:a(()=>[g]),_:1})]),t("div",v,[j,d(s,null,{default:a(()=>[_]),_:1}),d(s,null,{default:a(()=>[b]),_:1})]),t("div",f,[y,d(s,null,{default:a(()=>[k]),_:1})]),t("div",x,[w,d(s,null,{default:a(()=>[z]),_:1})]),t("div",T,[C,d(s,null,{default:a(()=>[S]),_:1})]),t("div",B,[D,d(s,null,{default:a(()=>[V]),_:1})]),t("div",I,[W,d(s,null,{default:a(()=>[A]),_:1})]),t("div",P,[M,d(s,null,{default:a(()=>[N]),_:1})]),t("div",R,[$,E,d(s,null,{default:a(()=>[L]),_:1}),d(s,null,{default:a(()=>[U]),_:1})]),t("div",O,[H,q,d(s,null,{default:a(()=>[F]),_:1})]),G])}var dt=l(h,[["render",J]]);export{dt as default};
