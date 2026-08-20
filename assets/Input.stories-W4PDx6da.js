import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n}from"./iframe-DUw1UlHh.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";var i=e((()=>{})),a,o,s,c,l,u,d,f=e((()=>{a=t(n(),1),i(),o=r(),s=[{code:`US`,name:`United States`,flag:`🇺🇸`,dialCode:`+1`},{code:`CA`,name:`Canada`,flag:`🇨🇦`,dialCode:`+1`},{code:`FR`,name:`France`,flag:`🇫🇷`,dialCode:`+33`},{code:`DE`,name:`Germany`,flag:`🇩🇪`,dialCode:`+49`},{code:`IT`,name:`Italy`,flag:`🇮🇹`,dialCode:`+39`},{code:`JP`,name:`Japan`,flag:`🇯🇵`,dialCode:`+81`},{code:`PL`,name:`Poland`,flag:`🇵🇱`,dialCode:`+48`},{code:`ES`,name:`Spain`,flag:`🇪🇸`,dialCode:`+34`},{code:`UA`,name:`Ukraine`,flag:`🇺🇦`,dialCode:`+380`},{code:`GB`,name:`United Kingdom`,flag:`🇬🇧`,dialCode:`+44`}],c=e=>{let t=e.find(e=>e.code===`US`),n=e.filter(e=>e.code!==`US`).sort((e,t)=>e.name.localeCompare(t.name));return t?[t,...n]:n},l=()=>(0,o.jsx)(`svg`,{width:`10`,height:`6`,viewBox:`0 0 10 6`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M1 1l4 4 4-4`})}),u=()=>(0,o.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`pulse-phone-search-icon`,children:[(0,o.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`}),(0,o.jsx)(`path`,{d:`M11 11l3.5 3.5`})]}),d=(0,a.forwardRef)(({className:e=``,label:t=`Phone number`,state:n=`default`,value:r,selectedCountry:i,countries:d=s,showCursor:f=!1,disabled:p=!1,onCountrySelect:m,onChange:h,...g},_)=>{let v=c(d),[y,b]=(0,a.useState)(i||v[0]),[x,S]=(0,a.useState)(n===`dropdownOpen`),[C,w]=(0,a.useState)(``),[T,E]=(0,a.useState)(null),D=i||y,O=p||n===`disabled`,k=n===`dropdownOpen`||x,A=T===null?r===void 0?D.dialCode:r:T,j=()=>{O||S(e=>!e)},M=e=>{b(e),S(!1);let t=e.dialCode;E(t),m&&m(e),h&&h(t)},N=v.filter(e=>e.name.toLowerCase().includes(C.toLowerCase())||e.dialCode.includes(C)||e.code.toLowerCase().includes(C.toLowerCase()));return(0,o.jsxs)(`div`,{className:`pulse-input-container ${n!=="default"&&n!==`dropdownOpen`?`pulse-input-container--state-${n}`:``} ${k?`pulse-input-container--dropdown-open`:``} ${O?`pulse-input-container--disabled`:``} ${e}`.trim(),children:[t&&(0,o.jsx)(`label`,{className:`pulse-input-label`,children:t}),(0,o.jsxs)(`div`,{className:`pulse-input-frame`,children:[(0,o.jsxs)(`button`,{type:`button`,disabled:O,className:`pulse-phone-country-btn`,onClick:j,children:[(0,o.jsx)(`span`,{className:`pulse-phone-flag`,children:D.flag}),(0,o.jsx)(`span`,{className:`pulse-phone-chevron ${k?`pulse-phone-chevron--open`:``}`,children:(0,o.jsx)(l,{})})]}),(0,o.jsx)(`div`,{className:`pulse-phone-divider`}),(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flex:1,height:`100%`},children:[(0,o.jsx)(`input`,{ref:_,disabled:O,value:A,className:`pulse-input-control`,onChange:e=>{let t=e.target.value;E(t),h&&h(t)},...g}),f&&(n===`active`||n==="default")&&(0,o.jsx)(`span`,{className:`pulse-input-cursor`,"aria-hidden":`true`})]})]}),k&&(0,o.jsxs)(`div`,{className:`pulse-phone-dropdown`,children:[(0,o.jsxs)(`div`,{className:`pulse-phone-search-row`,children:[(0,o.jsx)(u,{}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Search for countries`,value:C,className:`pulse-phone-search-input`,onChange:e=>w(e.target.value)})]}),(0,o.jsx)(`ul`,{className:`pulse-phone-list`,children:N.map(e=>(0,o.jsxs)(`li`,{className:`pulse-phone-option ${e.code===D.code?`pulse-phone-option--selected`:``}`,onClick:()=>M(e),children:[(0,o.jsx)(`span`,{className:`pulse-phone-flag`,children:e.flag}),(0,o.jsx)(`span`,{children:e.name})]},e.code))})]})]})}),d.displayName=`PhoneInput`,d.__docgenInfo={description:``,methods:[],displayName:`PhoneInput`,props:{label:{required:!1,tsType:{name:`string`},description:`Floating label text cutting into top border. Defaults to "Phone number".`,defaultValue:{value:`'Phone number'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'disabled' | 'active' | 'success' | 'error' | 'dropdownOpen'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'dropdownOpen'`}]},description:`Phone input visual state.`,defaultValue:{value:`'default'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Input text value.`},selectedCountry:{required:!1,tsType:{name:`CountryOption`},description:`Currently selected country object.`},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`CountryOption`}],raw:`CountryOption[]`},description:`List of available countries. Pinned US + A-Z sorted by default.`,defaultValue:{value:`[
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', dialCode: '+48' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦', dialCode: '+380' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
]`,computed:!1}},showCursor:{required:!1,tsType:{name:`boolean`},description:`Show typing cursor line.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state.`,defaultValue:{value:`false`,computed:!1}},onCountrySelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(country: CountryOption) => void`,signature:{arguments:[{type:{name:`CountryOption`},name:`country`}],return:{name:`void`}}},description:`Country selection callback.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Value change callback.`},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]}})),p,m,h,g=e((()=>{p=t(n(),1),i(),m=r(),h=(0,p.forwardRef)(({className:e=``,label:t=`Other`,state:n=`default`,placeholder:r=`Type here...`,value:i,multiline:a=!1,rows:o=4,showCursor:s=!1,disabled:c=!1,onChange:l,...u},d)=>{let f=c||n===`disabled`,p=n==="default"?``:`pulse-input-container--state-${n}`,h=a?`pulse-input-frame--multiline`:``,g=e=>{l&&l(e)};return(0,m.jsxs)(`div`,{className:`pulse-input-container ${p} ${f?`pulse-input-container--disabled`:``} ${e}`.trim(),children:[t&&(0,m.jsx)(`label`,{className:`pulse-input-label`,children:t}),(0,m.jsx)(`div`,{className:`pulse-input-frame ${h}`,children:a?(0,m.jsx)(`textarea`,{ref:d,disabled:f,placeholder:r,value:i,rows:o,className:`pulse-input-control`,onChange:g,...u}):(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,width:`100%`,height:`100%`},children:[(0,m.jsx)(`input`,{ref:d,disabled:f,placeholder:r,value:i,className:`pulse-input-control`,onChange:g,...u}),s&&n===`active`&&(0,m.jsx)(`span`,{className:`pulse-input-cursor`,"aria-hidden":`true`})]})})]})}),h.displayName=`TextInput`,h.__docgenInfo={description:``,methods:[],displayName:`TextInput`,props:{label:{required:!1,tsType:{name:`string`},description:`Floating label text cutting into top border. Defaults to "Other".`,defaultValue:{value:`'Other'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'disabled' | 'active' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`Input visual state: 'default' | 'disabled' | 'active' | 'success' | 'error'.`,defaultValue:{value:`'default'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text. Defaults to "Type here...".`,defaultValue:{value:`'Type here...'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Input value.`},multiline:{required:!1,tsType:{name:`boolean`},description:`Multiline / expanded textarea box.`,defaultValue:{value:`false`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:`Textarea rows if multiline is true.`,defaultValue:{value:`4`,computed:!1}},showCursor:{required:!1,tsType:{name:`boolean`},description:`Simulate active typing cursor line.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state.`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`,elements:[{name:`union`,raw:`HTMLInputElement | HTMLTextAreaElement`,elements:[{name:`HTMLInputElement`},{name:`HTMLTextAreaElement`}]}]},name:`e`}],return:{name:`void`}}},description:`Change event handler.`},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{f(),g(),_=r(),v={title:`Components/Input`,component:d,parameters:{layout:`padded`},tags:[`autodocs`]},y={name:`Showcase Grid (Exact Figma Spec)`,render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`48px`,padding:`32px`,background:`#fafafa`,fontFamily:`sans-serif`,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`380px`},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`15px`},children:[(0,_.jsx)(`span`,{children:`❖`}),(0,_.jsx)(`span`,{children:`Input (Phone number)`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`,padding:`32px 28px 48px 28px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`},children:[(0,_.jsx)(d,{state:`default`}),(0,_.jsx)(d,{state:`disabled`}),(0,_.jsx)(d,{state:`active`,value:`+1 234`,showCursor:!0}),(0,_.jsx)(d,{state:`success`,value:`+1 234 567 89 00`}),(0,_.jsx)(d,{state:`error`,value:`+1 234 567 89 00`}),(0,_.jsx)(`div`,{style:{position:`relative`,marginBottom:`220px`},children:(0,_.jsx)(d,{state:`dropdownOpen`})})]})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`380px`},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#7732bb`,fontWeight:600,fontSize:`15px`},children:[(0,_.jsx)(`span`,{children:`❖`}),(0,_.jsx)(`span`,{children:`Input (Other)`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`36px`,padding:`32px 28px`,border:`1.5px dashed #9382e2`,borderRadius:`16px`,background:`#ffffff`},children:[(0,_.jsx)(h,{label:`Other`,state:`default`,placeholder:`Type here...`}),(0,_.jsx)(h,{label:`Other`,state:`disabled`,placeholder:`Type here...`}),(0,_.jsx)(h,{label:`Other`,state:`active`,value:`Allergies`,showCursor:!0}),(0,_.jsx)(h,{label:`Other`,state:`success`,value:`Allergies`}),(0,_.jsx)(h,{label:`Other`,state:`error`,placeholder:`Type here...`}),(0,_.jsx)(h,{label:`Other`,state:`default`,placeholder:`Type here...`,multiline:!0,rows:4})]})]})]})},b={name:`Phone / Default`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(d,{state:`default`})})},x={name:`Phone / Active (Typing)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(d,{state:`active`,value:`+1 234`,showCursor:!0})})},S={name:`Phone / Success (Green)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(d,{state:`success`,value:`+1 234 567 89 00`})})},C={name:`Phone / Error (Red)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(d,{state:`error`,value:`+1 234 567 89 00`})})},w={name:`Phone / Country Dropdown Open (Seamless)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`,height:`300px`},children:(0,_.jsx)(d,{state:`dropdownOpen`})})},T={name:`Text / Default`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(h,{label:`Other`,placeholder:`Type here...`})})},E={name:`Text / Active (Typing)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(h,{label:`Other`,state:`active`,value:`Allergies`,showCursor:!0})})},D={name:`Text / Success (Green)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(h,{label:`Other`,state:`success`,value:`Allergies`})})},O={name:`Text / Error (Red)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(h,{label:`Other`,state:`error`,placeholder:`Type here...`})})},k={name:`Text / Multiline (Large Box)`,render:()=>(0,_.jsx)(`div`,{style:{width:`360px`},children:(0,_.jsx)(h,{label:`Other`,multiline:!0,rows:4,placeholder:`Type here...`})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => <div style={{
    display: 'flex',
    gap: '48px',
    padding: '32px',
    background: '#fafafa',
    fontFamily: 'sans-serif',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {/* LEFT COLUMN: PHONE NUMBER INPUT (6 STATES) */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '380px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7732bb',
        fontWeight: 600,
        fontSize: '15px'
      }}>
          <span>❖</span>
          <span>Input (Phone number)</span>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        padding: '32px 28px 48px 28px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff'
      }}>
          {/* 1. Default State */}
          <PhoneInput state="default" />

          {/* 2. Disabled State */}
          <PhoneInput state="disabled" />

          {/* 3. Active / Typing State */}
          <PhoneInput state="active" value="+1 234" showCursor />

          {/* 4. Success State */}
          <PhoneInput state="success" value="+1 234 567 89 00" />

          {/* 5. Error State */}
          <PhoneInput state="error" value="+1 234 567 89 00" />

          {/* 6. Country Dropdown Open State (Seamless Interactive Attached Card) */}
          <div style={{
          position: 'relative',
          marginBottom: '220px'
        }}>
            <PhoneInput state="dropdownOpen" />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: STANDARD TEXT INPUT / OTHER (6 STATES) */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '380px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7732bb',
        fontWeight: 600,
        fontSize: '15px'
      }}>
          <span>❖</span>
          <span>Input (Other)</span>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        padding: '32px 28px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff'
      }}>
          {/* 1. Default State */}
          <TextInput label="Other" state="default" placeholder="Type here..." />

          {/* 2. Disabled State */}
          <TextInput label="Other" state="disabled" placeholder="Type here..." />

          {/* 3. Active / Typing State */}
          <TextInput label="Other" state="active" value="Allergies" showCursor />

          {/* 4. Success State */}
          <TextInput label="Other" state="success" value="Allergies" />

          {/* 5. Error State */}
          <TextInput label="Other" state="error" placeholder="Type here..." />

          {/* 6. Multiline / Large State */}
          <TextInput label="Other" state="default" placeholder="Type here..." multiline rows={4} />
        </div>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Phone / Default',
  render: () => <div style={{
    width: '360px'
  }}><PhoneInput state="default" /></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Phone / Active (Typing)',
  render: () => <div style={{
    width: '360px'
  }}><PhoneInput state="active" value="+1 234" showCursor /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Phone / Success (Green)',
  render: () => <div style={{
    width: '360px'
  }}><PhoneInput state="success" value="+1 234 567 89 00" /></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Phone / Error (Red)',
  render: () => <div style={{
    width: '360px'
  }}><PhoneInput state="error" value="+1 234 567 89 00" /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Phone / Country Dropdown Open (Seamless)',
  render: () => <div style={{
    width: '360px',
    height: '300px'
  }}>
      <PhoneInput state="dropdownOpen" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Text / Default',
  render: () => <div style={{
    width: '360px'
  }}><TextInput label="Other" placeholder="Type here..." /></div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Text / Active (Typing)',
  render: () => <div style={{
    width: '360px'
  }}><TextInput label="Other" state="active" value="Allergies" showCursor /></div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Text / Success (Green)',
  render: () => <div style={{
    width: '360px'
  }}><TextInput label="Other" state="success" value="Allergies" /></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Text / Error (Red)',
  render: () => <div style={{
    width: '360px'
  }}><TextInput label="Other" state="error" placeholder="Type here..." /></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Text / Multiline (Large Box)',
  render: () => <div style={{
    width: '360px'
  }}><TextInput label="Other" multiline rows={4} placeholder="Type here..." /></div>
}`,...k.parameters?.docs?.source}}},A=[`AllVariantsShowcase`,`PhoneInputDefault`,`PhoneInputActive`,`PhoneInputSuccess`,`PhoneInputError`,`PhoneInputDropdownOpen`,`TextInputDefault`,`TextInputActive`,`TextInputSuccess`,`TextInputError`,`TextInputMultiline`]}))();export{y as AllVariantsShowcase,x as PhoneInputActive,b as PhoneInputDefault,w as PhoneInputDropdownOpen,C as PhoneInputError,S as PhoneInputSuccess,E as TextInputActive,T as TextInputDefault,O as TextInputError,k as TextInputMultiline,D as TextInputSuccess,A as __namedExportsOrder,v as default};