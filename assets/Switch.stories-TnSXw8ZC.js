import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n}from"./iframe-DUw1UlHh.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./Typography-Dnsa7ewa.js";var o=e((()=>{})),s,c,l,u=e((()=>{s=t(n(),1),i(),o(),c=r(),l=(0,s.forwardRef)(({className:e=``,label:t,disabled:n=!1,id:r,...i},o)=>{let l=s.useId(),u=r||l;return(0,c.jsxs)(`label`,{className:`pulse-switch ${n?`pulse-switch--disabled`:``} ${e}`,htmlFor:u,children:[(0,c.jsxs)(`span`,{className:`pulse-switch__wrapper`,children:[(0,c.jsx)(`input`,{type:`checkbox`,id:u,ref:o,disabled:n,className:`pulse-switch__input`,...i}),(0,c.jsx)(`span`,{className:`pulse-switch__track`,children:(0,c.jsx)(`span`,{className:`pulse-switch__thumb`})})]}),t&&(0,c.jsx)(a,{variant:`body`,as:`span`,className:`pulse-switch__label`,children:t})]})}),l.displayName=`Switch`,l.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`string`},description:`The text label displayed next to the switch.`},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),d,f,p,m,h,g,_;e((()=>{u(),d={title:`Components/Switch`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{checked:{control:`boolean`,description:`Whether the switch is toggled on.`},disabled:{control:`boolean`,description:`Whether the switch is disabled.`},label:{control:`text`,description:`Optional label displayed next to the switch.`},onChange:{action:`changed`}}},f={args:{label:`Toggle feature`}},p={args:{checked:!0,label:`Feature enabled`}},m={args:{disabled:!0,label:`Disabled setting`}},h={args:{disabled:!0,checked:!0,label:`Disabled & active`}},g={args:{}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle feature'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Feature enabled'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled setting'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled & active'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Checked`,`DisabledUnchecked`,`DisabledChecked`,`NoLabel`]}))();export{p as Checked,f as Default,h as DisabledChecked,m as DisabledUnchecked,g as NoLabel,_ as __namedExportsOrder,d as default};