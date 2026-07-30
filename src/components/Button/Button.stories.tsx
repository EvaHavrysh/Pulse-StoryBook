import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button Primary (Brutalist)',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary'],
      description: 'Visual variant: primary.',
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'active', 'disabled'],
      description: 'Simulated visual state.',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Icon position.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled button state.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* Step 1: Button Primary Specifications */

export const PrimaryDefault: Story = {
  name: '1. Primary / Default',
  args: {
    variant: 'primary',
    state: 'normal',
    children: 'Button',
  },
};

export const PrimaryHover: Story = {
  name: '2. Primary / Hover',
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button',
  },
};

export const PrimaryActive: Story = {
  name: '3. Primary / Active (Pressed)',
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  name: '4. Primary / Disabled',
  args: {
    variant: 'primary',
    state: 'disabled',
    children: 'Button',
  },
};

export const PrimaryWithLeftIcon: Story = {
  name: '5. Primary / Left Icon (<)',
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Button',
  },
};

export const PrimaryWithRightIcon: Story = {
  name: '6. Primary / Right Icon (>)',
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Button',
  },
};

/* Brutalist Gallery Preview */
export const ButtonPrimaryGallery: Story = {
  name: '❖ Button Primary (Full Row Specification)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', fontFamily: 'sans-serif' }}>
      <h3 style={{ margin: 0, color: '#4f8c09', fontSize: '16px', fontWeight: 700 }}>
        ❖ Button Primary (Sharp Corners: border-radius 0px)
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '32px',
          border: '2px solid #000000',
          backgroundColor: '#f9f9f9',
          flexWrap: 'wrap',
        }}
      >
        {/* Default */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>1. Default</span>
          <Button variant="primary" state="normal">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>2. Hover</span>
          <Button variant="primary" state="hover">
            Button
          </Button>
        </div>

        {/* Active */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>3. Active (Pressed)</span>
          <Button variant="primary" state="active">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>4. Disabled</span>
          <Button variant="primary" state="disabled">
            Button
          </Button>
        </div>

        {/* Left Icon */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>5. Left Icon</span>
          <Button variant="primary" icon="left">
            Button
          </Button>
        </div>

        {/* Right Icon */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#666', fontWeight: 600 }}>6. Right Icon</span>
          <Button variant="primary" icon="right">
            Button
          </Button>
        </div>
      </div>
    </div>
  ),
};
