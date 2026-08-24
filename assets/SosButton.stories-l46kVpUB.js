import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-CsrpdqOX.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i=e((()=>{})),a,o,s,c,l=e((()=>{a=t(n(),1),i(),o=r(),s=()=>(0,o.jsxs)(`svg`,{width:`34`,height:`34`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,o.jsx)(`path`,{d:`M4 19h16`}),(0,o.jsx)(`path`,{d:`M5 19V15a7 7 0 0 1 14 0v4`,fill:`currentColor`,fillOpacity:`0.25`}),(0,o.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`5`}),(0,o.jsx)(`line`,{x1:`5`,y1:`7`,x2:`6.8`,y2:`8.8`}),(0,o.jsx)(`line`,{x1:`19`,y1:`7`,x2:`17.2`,y2:`8.8`})]}),c=(0,a.forwardRef)(({className:e=``,state:t=`default`,contentMode:n=`text`,countdownSeconds:r=15,maxSeconds:i=15,playAudio:c=!0,onClick:l,disabled:u=!1,...d},f)=>{let p=(0,a.useRef)(null),m=2*Math.PI*48,h=m-Math.max(Math.min(r/i,1),0)*m;return(0,a.useEffect)(()=>{if(t===`countdown`&&c){let e=null;try{let t=window.AudioContext||window.webkitAudioContext;t&&(e=new t,e.state===`suspended`&&e.resume().catch(()=>{}))}catch{e=null}let t=()=>{if(!(!e||e.state===`closed`))try{e.state===`suspended`&&e.resume().catch(()=>{});let t=e.createOscillator(),n=e.createGain();t.type=`sine`,t.frequency.setValueAtTime(440,e.currentTime),t.frequency.exponentialRampToValueAtTime(523.25,e.currentTime+.08),n.gain.setValueAtTime(.001,e.currentTime),n.gain.linearRampToValueAtTime(.035,e.currentTime+.02),n.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.35),t.connect(n),n.connect(e.destination),t.start(e.currentTime),t.stop(e.currentTime+.35)}catch{}};return t(),p.current=setInterval(t,750),()=>{p.current&&=(clearInterval(p.current),null),e&&e.state!==`closed`&&e.close().catch(()=>{})}}},[t,c]),(0,o.jsxs)(`div`,{className:`pulse-sos-wrapper`,children:[t===`countdown`&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`div`,{className:`pulse-sos-radar-wave pulse-sos-radar-wave--1`}),(0,o.jsx)(`div`,{className:`pulse-sos-radar-wave pulse-sos-radar-wave--2`}),(0,o.jsx)(`div`,{className:`pulse-sos-radar-wave pulse-sos-radar-wave--3`}),(0,o.jsx)(`div`,{className:`pulse-sos-ring-wrapper`,children:(0,o.jsxs)(`svg`,{className:`pulse-sos-ring-svg`,viewBox:`0 0 108 108`,children:[(0,o.jsx)(`circle`,{className:`pulse-sos-ring-bg`,cx:`54`,cy:`54`,r:48,fill:`none`}),(0,o.jsx)(`circle`,{className:`pulse-sos-ring-progress`,cx:`54`,cy:`54`,r:48,fill:`none`,strokeDasharray:m,strokeDashoffset:h})]})})]}),(0,o.jsxs)(`button`,{ref:f,type:`button`,disabled:u||t===`blocked`,onClick:l,className:`pulse-sos-button pulse-sos-button--${t} ${e}`.trim(),...d,children:[t==="default"&&(n===`siren`?(0,o.jsx)(s,{}):`SOS`),t===`countdown`&&r,t===`sent`&&`Sent`,t===`blocked`&&`SOS`]})]})}),c.displayName=`SosButton`,c.__docgenInfo={description:``,methods:[],displayName:`SosButton`,props:{state:{required:!1,tsType:{name:`union`,raw:`'default' | 'countdown' | 'sent' | 'blocked'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'countdown'`},{name:`literal`,value:`'sent'`},{name:`literal`,value:`'blocked'`}]},description:`Current state variant: 'default' | 'countdown' | 'sent' | 'blocked'. Defaults to 'default'.`,defaultValue:{value:`'default'`,computed:!1}},contentMode:{required:!1,tsType:{name:`union`,raw:`'text' | 'siren'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'siren'`}]},description:`Content mode for default state: 'text' ("SOS") | 'siren' (Siren Beacon Icon). Defaults to 'text'.`,defaultValue:{value:`'text'`,computed:!1}},countdownSeconds:{required:!1,tsType:{name:`number`},description:`Countdown seconds remaining (for countdown state). Defaults to 15.`,defaultValue:{value:`15`,computed:!1}},maxSeconds:{required:!1,tsType:{name:`number`},description:`Total maximum seconds for progress ring. Defaults to 15.`,defaultValue:{value:`15`,computed:!1}},playAudio:{required:!1,tsType:{name:`boolean`},description:`Whether to play subtle alarm audio during countdown. Defaults to true.`,defaultValue:{value:`true`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Click event handler.`},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),u,d,f,p,m,h,g,_,v;e((()=>{u=t(n(),1),l(),d=r(),f={title:`Components/SosButton`,component:c,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`default`,`countdown`,`sent`,`blocked`],description:`The visual state variant`},contentMode:{control:`radio`,options:[`text`,`siren`],description:`Toggle default state view between text ("SOS") and Siren Icon`},countdownSeconds:{control:`number`},playAudio:{control:`boolean`},onClick:{action:`buttonClicked`}}},p={args:{state:`default`,contentMode:`text`}},m={args:{state:`countdown`,countdownSeconds:15,playAudio:!0}},h={args:{state:`sent`}},g={args:{state:`blocked`}},_=()=>{let[e,t]=(0,u.useState)(`default`),[n,r]=(0,u.useState)(15);return(0,u.useEffect)(()=>{let i;return e===`countdown`&&(n>0?i=setTimeout(()=>r(e=>e-1),1e3):t(`sent`)),()=>clearTimeout(i)},[e,n]),(0,d.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`300px`},children:(0,d.jsx)(c,{state:e,countdownSeconds:n,playAudio:!0,onClick:()=>{e==="default"?(r(15),t(`countdown`)):e===`sent`&&t(`default`)}})})},_.__docgenInfo={description:``,methods:[],displayName:`Interactive`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    contentMode: 'text'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'countdown',
    countdownSeconds: 15,
    playAudio: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'sent'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'blocked'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [currentState, setCurrentState] = useState<SosButtonState>('default');
  const [seconds, setSeconds] = useState<number>(15);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentState === 'countdown') {
      if (seconds > 0) {
        timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
      } else {
        setCurrentState('sent');
      }
    }
    return () => clearTimeout(timer);
  }, [currentState, seconds]);
  const handleClick = () => {
    if (currentState === 'default') {
      setSeconds(15);
      setCurrentState('countdown');
    } else if (currentState === 'sent') {
      setCurrentState('default');
    }
  };
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px'
  }}>
      <SosButton state={currentState} countdownSeconds={seconds} playAudio={true} onClick={handleClick} />
    </div>;
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Countdown`,`Sent`,`Blocked`,`Interactive`]}))();export{g as Blocked,m as Countdown,p as Default,_ as Interactive,h as Sent,v as __namedExportsOrder,f as default};