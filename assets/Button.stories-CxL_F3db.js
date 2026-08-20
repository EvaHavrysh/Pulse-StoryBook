import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./Button-CPXcM2cj.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),i=t(),a={title:`Components/Button`,component:r,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`],description:`Visual variant: primary, secondary, or tertiary.`},state:{control:`select`,options:[`normal`,`hover`,`active`,`disabled`],description:`Simulated visual state.`},icon:{control:`select`,options:[`none`,`left`,`right`],description:`Icon position.`},size:{control:`select`,options:[`small`,`medium`,`large`],description:`Button size.`},disabled:{control:`boolean`,description:`Disabled button state.`},onClick:{action:`clicked`}}},o={name:`Showcase Grid (Exact Figma Spec)`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`48px`,padding:`32px`,background:`#fafafa`,fontFamily:`sans-serif`},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`14px`,marginBottom:`16px`},children:[(0,i.jsx)(`span`,{children:`❖`}),(0,i.jsx)(`span`,{children:`Button Primary`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,padding:`24px 32px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`,flexWrap:`wrap`},children:[(0,i.jsx)(r,{variant:`primary`,state:`normal`,children:`Button`}),(0,i.jsx)(r,{variant:`primary`,state:`hover`,children:`Button`}),(0,i.jsx)(r,{variant:`primary`,state:`active`,children:`Button`}),(0,i.jsx)(r,{variant:`primary`,state:`disabled`,children:`Button`}),(0,i.jsx)(r,{variant:`primary`,icon:`left`,children:`Button`}),(0,i.jsx)(r,{variant:`primary`,icon:`right`,children:`Button`})]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`14px`,marginBottom:`16px`},children:[(0,i.jsx)(`span`,{children:`❖`}),(0,i.jsx)(`span`,{children:`Button Secondary`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,padding:`24px 32px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`,flexWrap:`wrap`},children:[(0,i.jsx)(r,{variant:`secondary`,state:`normal`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,state:`hover`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,state:`active`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,state:`disabled`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,icon:`left`,children:`Button`}),(0,i.jsx)(r,{variant:`secondary`,icon:`right`,children:`Button`})]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`14px`,marginBottom:`16px`},children:[(0,i.jsx)(`span`,{children:`❖`}),(0,i.jsx)(`span`,{children:`Button Tertiary`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`32px`,padding:`24px 32px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`,flexWrap:`wrap`},children:[(0,i.jsx)(r,{variant:`tertiary`,state:`normal`,children:`Button`}),(0,i.jsx)(r,{variant:`tertiary`,state:`hover`,children:`Button`}),(0,i.jsx)(r,{variant:`tertiary`,state:`active`,children:`Button`}),(0,i.jsx)(r,{variant:`tertiary`,state:`disabled`,children:`Button`}),(0,i.jsx)(r,{variant:`tertiary`,icon:`left`,children:`Button`}),(0,i.jsx)(r,{variant:`tertiary`,icon:`right`,children:`Button`})]})]})]})},s={name:`Primary / Default`,args:{variant:`primary`,state:`normal`,children:`Button`}},c={name:`Primary / Hover`,args:{variant:`primary`,state:`hover`,children:`Button`}},l={name:`Primary / Active (Pressed)`,args:{variant:`primary`,state:`active`,children:`Button`}},u={name:`Primary / Disabled`,args:{variant:`primary`,state:`disabled`,children:`Button`}},d={name:`Primary / Left Icon (<)`,args:{variant:`primary`,icon:`left`,children:`Button`}},f={name:`Primary / Right Icon (>)`,args:{variant:`primary`,icon:`right`,children:`Button`}},p={name:`Secondary / Default (Outlined)`,args:{variant:`secondary`,state:`normal`,children:`Button`}},m={name:`Secondary / Hover`,args:{variant:`secondary`,state:`hover`,children:`Button`}},h={name:`Secondary / Active (Pressed)`,args:{variant:`secondary`,state:`active`,children:`Button`}},g={name:`Secondary / Disabled`,args:{variant:`secondary`,state:`disabled`,children:`Button`}},_={name:`Secondary / Left Icon (<)`,args:{variant:`secondary`,icon:`left`,children:`Button`}},v={name:`Secondary / Right Icon (>)`,args:{variant:`secondary`,icon:`right`,children:`Button`}},y={name:`Tertiary / Default (Text)`,args:{variant:`tertiary`,state:`normal`,children:`Button`}},b={name:`Tertiary / Hover`,args:{variant:`tertiary`,state:`hover`,children:`Button`}},x={name:`Tertiary / Active`,args:{variant:`tertiary`,state:`active`,children:`Button`}},S={name:`Tertiary / Disabled`,args:{variant:`tertiary`,state:`disabled`,children:`Button`}},C={name:`Tertiary / Left Icon (<)`,args:{variant:`tertiary`,icon:`left`,children:`Button`}},w={name:`Tertiary / Right Icon (>)`,args:{variant:`tertiary`,icon:`right`,children:`Button`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '32px',
    background: '#fafafa',
    fontFamily: 'sans-serif'
  }}>
      {/* 1. BUTTON PRIMARY ROW */}
      <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7732bb',
        fontWeight: 600,
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          <span>❖</span>
          <span>Button Primary</span>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        padding: '24px 32px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary" state="normal">Button</Button>
          <Button variant="primary" state="hover">Button</Button>
          <Button variant="primary" state="active">Button</Button>
          <Button variant="primary" state="disabled">Button</Button>
          <Button variant="primary" icon="left">Button</Button>
          <Button variant="primary" icon="right">Button</Button>
        </div>
      </div>

      {/* 2. BUTTON SECONDARY ROW */}
      <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7732bb',
        fontWeight: 600,
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          <span>❖</span>
          <span>Button Secondary</span>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        padding: '24px 32px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff',
        flexWrap: 'wrap'
      }}>
          <Button variant="secondary" state="normal">Button</Button>
          <Button variant="secondary" state="hover">Button</Button>
          <Button variant="secondary" state="active">Button</Button>
          <Button variant="secondary" state="disabled">Button</Button>
          <Button variant="secondary" icon="left">Button</Button>
          <Button variant="secondary" icon="right">Button</Button>
        </div>
      </div>

      {/* 3. BUTTON TERTIARY ROW */}
      <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7732bb',
        fontWeight: 600,
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          <span>❖</span>
          <span>Button Tertiary</span>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        padding: '24px 32px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff',
        flexWrap: 'wrap'
      }}>
          <Button variant="tertiary" state="normal">Button</Button>
          <Button variant="tertiary" state="hover">Button</Button>
          <Button variant="tertiary" state="active">Button</Button>
          <Button variant="tertiary" state="disabled">Button</Button>
          <Button variant="tertiary" icon="left">Button</Button>
          <Button variant="tertiary" icon="right">Button</Button>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Default',
  args: {
    variant: 'primary',
    state: 'normal',
    children: 'Button'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Hover',
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Active (Pressed)',
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Button'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Disabled',
  args: {
    variant: 'primary',
    state: 'disabled',
    children: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Left Icon (<)',
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Right Icon (>)',
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Button'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Default (Outlined)',
  args: {
    variant: 'secondary',
    state: 'normal',
    children: 'Button'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Hover',
  args: {
    variant: 'secondary',
    state: 'hover',
    children: 'Button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Active (Pressed)',
  args: {
    variant: 'secondary',
    state: 'active',
    children: 'Button'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Disabled',
  args: {
    variant: 'secondary',
    state: 'disabled',
    children: 'Button'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Left Icon (<)',
  args: {
    variant: 'secondary',
    icon: 'left',
    children: 'Button'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Right Icon (>)',
  args: {
    variant: 'secondary',
    icon: 'right',
    children: 'Button'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Default (Text)',
  args: {
    variant: 'tertiary',
    state: 'normal',
    children: 'Button'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Hover',
  args: {
    variant: 'tertiary',
    state: 'hover',
    children: 'Button'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Active',
  args: {
    variant: 'tertiary',
    state: 'active',
    children: 'Button'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Disabled',
  args: {
    variant: 'tertiary',
    state: 'disabled',
    children: 'Button'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Left Icon (<)',
  args: {
    variant: 'tertiary',
    icon: 'left',
    children: 'Button'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Right Icon (>)',
  args: {
    variant: 'tertiary',
    icon: 'right',
    children: 'Button'
  }
}`,...w.parameters?.docs?.source}}},T=[`AllVariantsShowcase`,`PrimaryDefault`,`PrimaryHover`,`PrimaryActive`,`PrimaryDisabled`,`PrimaryWithLeftIcon`,`PrimaryWithRightIcon`,`SecondaryDefault`,`SecondaryHover`,`SecondaryActive`,`SecondaryDisabled`,`SecondaryWithLeftIcon`,`SecondaryWithRightIcon`,`TertiaryDefault`,`TertiaryHover`,`TertiaryActive`,`TertiaryDisabled`,`TertiaryWithLeftIcon`,`TertiaryWithRightIcon`]}))();export{o as AllVariantsShowcase,l as PrimaryActive,s as PrimaryDefault,u as PrimaryDisabled,c as PrimaryHover,d as PrimaryWithLeftIcon,f as PrimaryWithRightIcon,h as SecondaryActive,p as SecondaryDefault,g as SecondaryDisabled,m as SecondaryHover,_ as SecondaryWithLeftIcon,v as SecondaryWithRightIcon,x as TertiaryActive,y as TertiaryDefault,S as TertiaryDisabled,b as TertiaryHover,C as TertiaryWithLeftIcon,w as TertiaryWithRightIcon,T as __namedExportsOrder,a as default};