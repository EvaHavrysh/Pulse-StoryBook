import{i as e}from"./preload-helper-CT_b8DTk.js";import{k as t}from"./iframe-DUw1UlHh.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({width:e,height:t,circle:n=!1,className:r=``})=>{let a={};return e!==void 0&&(a.width=typeof e==`number`?`${e}px`:e),t!==void 0&&(a.height=typeof t==`number`?`${t}px`:t),n&&(a.borderRadius=`50%`,e!==void 0&&t===void 0?a.height=typeof e==`number`?`${e}px`:e:t!==void 0&&e===void 0&&(a.width=typeof t==`number`?`${t}px`:t)),(0,i.jsx)(`div`,{className:`pulse-skeleton ${n?`pulse-skeleton--circle`:``} ${r}`,style:a,"aria-hidden":`true`})},a.displayName=`Skeleton`,a.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The custom width of the skeleton (e.g. '100%', '200px', or a number like 40).`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`The custom height of the skeleton (e.g. '1rem', '20px', or a number like 40).`},circle:{required:!1,tsType:{name:`boolean`},description:`Whether the skeleton should be shaped as a circle (useful for avatars).`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional custom classes to apply to the skeleton.`,defaultValue:{value:`''`,computed:!1}}}}})),s,c,l,u,d,f,p;e((()=>{o(),s=n(),c={title:`Components/Skeleton`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`text`,description:`The width of the skeleton element (e.g. 100, "150px", "50%").`},height:{control:`text`,description:`The height of the skeleton element (e.g. 20, "20px", "1.5rem").`},circle:{control:`boolean`,description:`Whether the skeleton should be shaped as a circle.`}}},l={args:{width:`300px`}},u={args:{width:`200px`,height:`100px`}},d={args:{circle:!0,width:`64px`,height:`64px`}},f={render:()=>(0,s.jsxs)(`div`,{style:{width:`320px`,padding:`20px`,border:`1px solid #e4e4e7`,borderRadius:`12px`,display:`flex`,flexDirection:`column`,gap:`16px`,backgroundColor:`#ffffff`,boxShadow:`0 4px 6px -1px rgba(0, 0, 0, 0.05)`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,s.jsx)(a,{circle:!0,width:48,height:48}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`,flex:1},children:[(0,s.jsx)(a,{width:`70%`,height:16}),(0,s.jsx)(a,{width:`40%`,height:12})]})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,s.jsx)(a,{width:`100%`,height:12}),(0,s.jsx)(a,{width:`100%`,height:12}),(0,s.jsx)(a,{width:`80%`,height:12})]}),(0,s.jsx)(a,{width:`100%`,height:36})]}),args:{}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    width: '300px'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '100px'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    circle: true,
    width: '64px',
    height: '64px'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px',
    padding: '20px',
    border: '1px solid #e4e4e7',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        {/* Avatar skeleton */}
        <Skeleton circle width={48} height={48} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1
      }}>
          {/* Title skeleton */}
          <Skeleton width="70%" height={16} />
          {/* Subtitle skeleton */}
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      {/* Body skeleton lines */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Skeleton width="100%" height={12} />
        <Skeleton width="100%" height={12} />
        <Skeleton width="80%" height={12} />
      </div>
      {/* Button skeleton */}
      <Skeleton width="100%" height={36} />
    </div>,
  args: {}
}`,...f.parameters?.docs?.source}}},p=[`DefaultLine`,`CustomSizeRect`,`Avatar`,`ComposedCardPlaceholder`]}))();export{d as Avatar,f as ComposedCardPlaceholder,u as CustomSizeRect,l as DefaultLine,p as __namedExportsOrder,c as default};