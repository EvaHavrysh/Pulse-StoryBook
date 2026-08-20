import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n}from"./iframe-DUw1UlHh.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i=e((()=>{})),a,o,s,c,l,u=e((()=>{a=t(n(),1),i(),o=r(),s=()=>(0,o.jsxs)(`svg`,{width:`44`,height:`44`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{display:`block`,margin:`auto`},"aria-hidden":`true`,children:[(0,o.jsx)(`line`,{x1:`12`,y1:`2`,x2:`12`,y2:`4.2`}),(0,o.jsx)(`line`,{x1:`4.8`,y1:`4.8`,x2:`6.8`,y2:`6.8`}),(0,o.jsx)(`line`,{x1:`19.2`,y1:`4.8`,x2:`17.2`,y2:`6.8`}),(0,o.jsx)(`path`,{d:`M7 16.5v-4a5 5 0 0 1 10 0v4`}),(0,o.jsx)(`rect`,{x:`5`,y:`16.5`,width:`14`,height:`3`,rx:`1.5`,fill:`currentColor`,stroke:`none`})]}),c=({progress:e=75})=>{let t=2*Math.PI*48,n=t-e/100*t;return(0,o.jsxs)(`svg`,{className:`pulse-sos-button__progress-svg`,viewBox:`0 0 100 100`,"aria-hidden":`true`,children:[(0,o.jsx)(`circle`,{cx:50,cy:50,r:48,fill:`none`,stroke:`#f8d7da`,strokeWidth:4}),(0,o.jsx)(`circle`,{cx:50,cy:50,r:48,fill:`none`,stroke:`#b80000`,strokeWidth:4,strokeDasharray:t,strokeDashoffset:n,strokeLinecap:`round`,transform:`rotate(-90 50 50)`})]})},l=(0,a.forwardRef)(({className:e=``,state:t=`default`,countdownValue:n=5,progress:r=75,size:i=3,disabled:a=!1,children:l,type:u=`button`,...d},f)=>{let p=i===1||i===`small`?`pulse-sos-button--size-1`:i===2||i===`medium`?`pulse-sos-button--size-2`:`pulse-sos-button--size-3`,m=()=>{if(l!==void 0)return l;switch(t){case`countdown`:return n;case`sent`:return`Sent`;case`offline`:return`SOS`;case`icon`:return(0,o.jsx)(s,{});default:return`SOS`}};return(0,o.jsxs)(`button`,{ref:f,type:u,disabled:a,className:`pulse-sos-button pulse-sos-button--state-${t} ${p} ${e}`.trim(),...d,children:[t===`countdown`&&(0,o.jsx)(c,{progress:r}),(0,o.jsx)(`span`,{className:`pulse-sos-button__content`,children:m()})]})}),l.displayName=`SOSButton`,l.__docgenInfo={description:``,methods:[],displayName:`SOSButton`,props:{state:{required:!1,tsType:{name:`union`,raw:`'default' | 'countdown' | 'sent' | 'offline' | 'icon'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'countdown'`},{name:`literal`,value:`'sent'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'icon'`}]},description:`Visual state variation: 'default' | 'countdown' | 'sent' | 'offline' | 'icon'.`,defaultValue:{value:`'default'`,computed:!1}},countdownValue:{required:!1,tsType:{name:`number`},description:`Countdown number to display when state is 'countdown'. Defaults to 5.`,defaultValue:{value:`5`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:`Progress percentage (0 - 100) for the countdown ring. Defaults to 75.`,defaultValue:{value:`75`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large' | 1 | 2 | 3`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:`Button size option: 'small' | 'medium' | 'large' or 1 | 2 | 3.`,defaultValue:{value:`3`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom label or icon children override.`},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}}})),d,f,p,m,h,g,_,v,y;e((()=>{u(),d=r(),f={title:`Components/SOSButton`,component:l,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`default`,`countdown`,`sent`,`offline`,`icon`],description:`State variation of the SOS Button.`},size:{control:`select`,options:[1,2,3,`small`,`medium`,`large`],description:`Size variation (size 3 matches the design spec).`},countdownValue:{control:`number`,description:`Countdown value displayed when state is "countdown".`},progress:{control:`number`,description:`Progress ring percentage (0-100) for countdown state.`},disabled:{control:`boolean`,description:`Whether the SOS button is disabled.`},onClick:{action:`clicked`}}},p={name:`Showcase Grid (Exact Figma Spec)`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,padding:`32px`,background:`#fafafa`,fontFamily:`sans-serif`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`15px`},children:[(0,d.jsx)(`span`,{children:`❖`}),(0,d.jsx)(`span`,{children:`SOS Button (size 3)`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-around`,gap:`40px`,padding:`48px 56px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`,flexWrap:`wrap`},children:[(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:(0,d.jsx)(l,{state:`default`,size:3})}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:(0,d.jsx)(l,{state:`countdown`,countdownValue:5,progress:75,size:3})}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:(0,d.jsx)(l,{state:`sent`,size:3})}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:(0,d.jsx)(l,{state:`offline`,size:3})}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`12px`},children:(0,d.jsx)(l,{state:`icon`,size:3})})]})]})},m={name:`1. Red "SOS" (Default)`,args:{state:`default`,size:3}},h={name:`2. Countdown Ring ("5")`,args:{state:`countdown`,countdownValue:5,progress:75,size:3}},g={name:`3. Green "Sent"`,args:{state:`sent`,size:3}},_={name:`4. Yellow/Amber "SOS"`,args:{state:`offline`,size:3}},v={name:`5. Red Siren Icon`,args:{state:`icon`,size:3}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
    background: '#fafafa',
    fontFamily: 'sans-serif'
  }}>
      {/* Header Label */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#7732bb',
      fontWeight: 600,
      fontSize: '15px'
    }}>
        <span>❖</span>
        <span>SOS Button (size 3)</span>
      </div>

      {/* Dashed Spec Container */}
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: '40px',
      padding: '48px 56px',
      border: '1.5px dashed #9382e2',
      borderRadius: '16px',
      background: '#ffffff',
      flexWrap: 'wrap'
    }}>
        {/* 1. Default / Ready (Red "SOS") */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
          <SOSButton state="default" size={3} />
        </div>

        {/* 2. Countdown Ring (White with "5") */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
          <SOSButton state="countdown" countdownValue={5} progress={75} size={3} />
        </div>

        {/* 3. Sent / Success (Green "Sent") */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
          <SOSButton state="sent" size={3} />
        </div>

        {/* 4. Offline / Warning (Amber "SOS") */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
          <SOSButton state="offline" size={3} />
        </div>

        {/* 5. Icon (Red Siren Alarm) */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
          <SOSButton state="icon" size={3} />
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '1. Red "SOS" (Default)',
  args: {
    state: 'default',
    size: 3
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '2. Countdown Ring ("5")',
  args: {
    state: 'countdown',
    countdownValue: 5,
    progress: 75,
    size: 3
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '3. Green "Sent"',
  args: {
    state: 'sent',
    size: 3
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '4. Yellow/Amber "SOS"',
  args: {
    state: 'offline',
    size: 3
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '5. Red Siren Icon',
  args: {
    state: 'icon',
    size: 3
  }
}`,...v.parameters?.docs?.source}}},y=[`AllStatesShowcase`,`DefaultState`,`CountdownState`,`SentState`,`OfflineState`,`IconState`]}))();export{p as AllStatesShowcase,h as CountdownState,m as DefaultState,v as IconState,_ as OfflineState,g as SentState,y as __namedExportsOrder,f as default};