import type { Meta, StoryObj } from '@storybook/react-vite';
import { PhoneInput } from './PhoneInput';
import { TextInput } from './TextInput';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/Input',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/* ==================================================== */
/* 1. FULL SHOWCASE MATRIX (Matches Attached Screenshot)*/
/* ==================================================== */
export const AllVariantsShowcase: Story = {
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => (
    <div style={{ display: 'flex', gap: '48px', padding: '32px', background: '#fafafa', fontFamily: 'sans-serif', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {/* LEFT COLUMN: PHONE NUMBER INPUT (6 STATES) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '380px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '15px' }}>
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
          background: '#ffffff',
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
          <div style={{ position: 'relative', marginBottom: '220px' }}>
            <PhoneInput state="dropdownOpen" />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: STANDARD TEXT INPUT / OTHER (6 STATES) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '380px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '15px' }}>
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
          background: '#ffffff',
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

      {/* THIRD COLUMN: SEARCH INPUT (SEARCH SPEC) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '380px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '15px' }}>
          <span>❖</span>
          <span>Input (Search)</span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '32px 28px',
          border: '1.5px dashed #9382e2',
          borderRadius: '16px',
          background: '#ffffff',
        }}>
          {/* 1. Default State (Top): Dark grey border, placeholder "Search" */}
          <SearchInput state="default" placeholder="Search" />

          {/* 2. Active State (Bottom): Lighter grey border, typed "News" with blinking cursor */}
          <SearchInput state="active" value="News" showCursor={true} />
        </div>
      </div>
    </div>
  ),
};

/* ==================================================== */
/* 2. INDIVIDUAL PHONE INPUT STORIES                   */
/* ==================================================== */
export const PhoneInputDefault: Story = {
  name: 'Phone / Default',
  render: () => <div style={{ width: '360px' }}><PhoneInput state="default" /></div>,
};

export const PhoneInputActive: Story = {
  name: 'Phone / Active (Typing)',
  render: () => <div style={{ width: '360px' }}><PhoneInput state="active" value="+1 234" showCursor /></div>,
};

export const PhoneInputSuccess: Story = {
  name: 'Phone / Success (Green)',
  render: () => <div style={{ width: '360px' }}><PhoneInput state="success" value="+1 234 567 89 00" /></div>,
};

export const PhoneInputError: Story = {
  name: 'Phone / Error (Red)',
  render: () => <div style={{ width: '360px' }}><PhoneInput state="error" value="+1 234 567 89 00" /></div>,
};

export const PhoneInputDropdownOpen: Story = {
  name: 'Phone / Country Dropdown Open (Seamless)',
  render: () => (
    <div style={{ width: '360px', height: '300px' }}>
      <PhoneInput state="dropdownOpen" />
    </div>
  ),
};

/* ==================================================== */
/* 3. INDIVIDUAL TEXT INPUT STORIES                    */
/* ==================================================== */
export const TextInputDefault: Story = {
  name: 'Text / Default',
  render: () => <div style={{ width: '360px' }}><TextInput label="Other" placeholder="Type here..." /></div>,
};

export const TextInputActive: Story = {
  name: 'Text / Active (Typing)',
  render: () => <div style={{ width: '360px' }}><TextInput label="Other" state="active" value="Allergies" showCursor /></div>,
};

export const TextInputSuccess: Story = {
  name: 'Text / Success (Green)',
  render: () => <div style={{ width: '360px' }}><TextInput label="Other" state="success" value="Allergies" /></div>,
};

export const TextInputError: Story = {
  name: 'Text / Error (Red)',
  render: () => <div style={{ width: '360px' }}><TextInput label="Other" state="error" placeholder="Type here..." /></div>,
};

export const TextInputMultiline: Story = {
  name: 'Text / Multiline (Large Box)',
  render: () => <div style={{ width: '360px' }}><TextInput label="Other" multiline rows={4} placeholder="Type here..." /></div>,
};

/* ==================================================== */
/* 4. INDIVIDUAL SEARCH INPUT STORIES                  */
/* ==================================================== */
export const SearchInputDefault: Story = {
  name: 'Search / Default',
  render: () => <div style={{ width: '360px' }}><SearchInput state="default" placeholder="Search" /></div>,
};

export const SearchInputActive: Story = {
  name: 'Search / Active (Typed "News")',
  render: () => <div style={{ width: '360px' }}><SearchInput state="active" value="News" showCursor /></div>,
};
