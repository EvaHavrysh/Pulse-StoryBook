import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n}from"./iframe-DUw1UlHh.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./Typography-Dnsa7ewa.js";var o=e((()=>{})),s,c,l,u=e((()=>{s=t(n(),1),i(),o(),c=r(),l=(0,s.forwardRef)(({className:e=``,label:t,disabled:n=!1,indeterminate:r=!1,checked:i,id:o,...l},u)=>{let d=s.useId(),f=o||d,p=(0,s.useRef)(null),m=u||p;return(0,s.useEffect)(()=>{m.current&&(m.current.indeterminate=r)},[r,m]),(0,c.jsxs)(`label`,{className:`pulse-checkbox ${n?`pulse-checkbox--disabled`:``} ${e}`,htmlFor:f,children:[(0,c.jsxs)(`span`,{className:`pulse-checkbox__wrapper`,children:[(0,c.jsx)(`input`,{type:`checkbox`,id:f,ref:u||m,checked:i,disabled:n,className:`pulse-checkbox__input`,...l}),(0,c.jsx)(`span`,{className:`pulse-checkbox__box`,children:r?(0,c.jsx)(`svg`,{className:`pulse-checkbox__icon pulse-checkbox__icon--indeterminate`,viewBox:`0 0 24 24`,children:(0,c.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`,stroke:`currentColor`,strokeWidth:`4`,strokeLinecap:`round`})}):(0,c.jsx)(`svg`,{className:`pulse-checkbox__icon pulse-checkbox__icon--checkmark`,viewBox:`0 0 24 24`,fill:`none`,children:(0,c.jsx)(`path`,{d:`M20 6L9 17L4 12`,stroke:`currentColor`,strokeWidth:`3.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),t&&(0,c.jsx)(a,{variant:`body`,as:`span`,className:`pulse-checkbox__label`,children:t})]})}),l.displayName=`Checkbox`,l.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:`The text label displayed next to the checkbox.`},indeterminate:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is in an indeterminate state (neither checked nor unchecked, e.g. parent checkbox in nested lists).`,defaultValue:{value:`false`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),d,f,p,m,h,g,_,v;e((()=>{u(),d={title:`Components/Checkbox`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`,description:`Whether the checkbox is selected.`},indeterminate:{control:`boolean`,description:`Whether the checkbox is in a partially checked (indeterminate) state.`},disabled:{control:`boolean`,description:`Whether the checkbox is disabled.`},label:{control:`text`,description:`Optional label text displayed next to the checkbox.`},onChange:{action:`changed`}}},f={args:{label:`Subscribe to newsletter`}},p={args:{checked:!0,label:`Accept terms and conditions`}},m={args:{indeterminate:!0,label:`Select all features`}},h={args:{disabled:!0,label:`Unavailable option`}},g={args:{disabled:!0,checked:!0,label:`Locked checked option`}},_={args:{}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Accept terms and conditions'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Select all features'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Unavailable option'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Locked checked option'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Checked`,`Indeterminate`,`DisabledUnchecked`,`DisabledChecked`,`NoLabel`]}))();export{p as Checked,f as Default,g as DisabledChecked,h as DisabledUnchecked,m as Indeterminate,_ as NoLabel,v as __namedExportsOrder,d as default};