import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-CsrpdqOX.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(n(),1),i(),o=r(),s=(0,a.forwardRef)(({className:e=``,length:t=4,variant:n,value:r,defaultValue:i=``,disabled:s=!1,onChange:c,onComplete:l,...u},d)=>{let f=(0,a.useRef)([]),[p,m]=(0,a.useState)(i),h=r===void 0?p:r,g=s||n===`disabled`,_=n===void 0?s?`disabled`:`default`:n,v=(()=>{let e=h.split(``);for(;e.length<t;)e.push(``);return e.slice(0,t)})(),y=e=>{let n=e.join(``).slice(0,t);r===void 0&&m(n),c?.(n),n.length===t&&e.every(e=>e!==``)&&l?.(n)},b=(e,n)=>{if(g)return;let r=e.target.value.slice(-1);if(!/^\d*$/.test(r))return;let i=[...v];i[n]=r,y(i),r&&n<t-1&&f.current[n+1]?.focus()},x=(e,n)=>{if(!g)if(e.key===`Backspace`){if(!v[n]&&n>0){f.current[n-1]?.focus();let e=[...v];e[n-1]=``,y(e)}else if(v[n]){let e=[...v];e[n]=``,y(e)}}else e.key===`ArrowLeft`&&n>0?f.current[n-1]?.focus():e.key===`ArrowRight`&&n<t-1&&f.current[n+1]?.focus()};return(0,o.jsx)(`div`,{ref:d,onPaste:e=>{if(g)return;e.preventDefault();let n=e.clipboardData.getData(`text`).trim().replace(/\D/g,``).slice(0,t);if(n){let e=n.split(``);for(;e.length<t;)e.push(``);y(e);let r=Math.min(n.length,t-1);f.current[r]?.focus()}},className:`pulse-otp-container pulse-otp-container--${_} ${e}`.trim(),...u,children:v.map((e,n)=>(0,o.jsx)(`input`,{ref:e=>f.current[n]=e,type:`text`,inputMode:`numeric`,maxLength:1,disabled:g,value:e,onChange:e=>b(e,n),onKeyDown:e=>x(e,n),className:`pulse-otp-box`,"aria-label":`Digit ${n+1} of ${t}`},n))})}),s.displayName=`OtpInput`,s.__docgenInfo={description:``,methods:[],displayName:`OtpInput`,props:{length:{required:!1,tsType:{name:`number`},description:`Number of OTP input boxes. Defaults to 4.`,defaultValue:{value:`4`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'disabled' | 'active' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`Explicit visual state variant: 'default' | 'disabled' | 'active' | 'success' | 'error'.`},value:{required:!1,tsType:{name:`string`},description:`Controlled string value (e.g. "3509").`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default initial value when uncontrolled.`,defaultValue:{value:`''`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled interactive state.`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when value changes.`},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback fired when all boxes are filled.`},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]}})),l,u,d,f,p,m,h,g;e((()=>{c(),l={title:`Components/OtpInput`,component:s,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`disabled`,`active`,`success`,`error`],description:`The 5 visual state variants from design`},value:{control:`text`},disabled:{control:`boolean`},length:{control:`number`},onChange:{action:`valueChanged`},onComplete:{action:`otpCompleted`}}},u={args:{variant:`default`,value:``}},d={args:{variant:`disabled`,value:``}},f={args:{variant:`active`,value:`35`}},p={args:{variant:`success`,value:`3509`}},m={args:{variant:`error`,value:`3509`}},h={args:{defaultValue:``,length:4}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    value: ''
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    value: ''
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'active',
    value: '35'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    value: '3509'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: '3509'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    length: 4
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Disabled`,`Active`,`Success`,`Error`,`Interactive`]}))();export{f as Active,u as Default,d as Disabled,m as Error,h as Interactive,p as Success,g as __namedExportsOrder,l as default};