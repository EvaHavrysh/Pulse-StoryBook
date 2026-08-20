import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual variant: primary, secondary, or tertiary.',
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

/* ==================================================== */
/* 1. FULL SHOWCASE MATRIX (Matches Screenshot Grid)   */
/* ==================================================== */
export const AllVariantsShowcase: Story = {
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '32px', background: '#fafafa', fontFamily: 'sans-serif' }}>
      {/* 1. BUTTON PRIMARY ROW */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '14px', marginBottom: '16px' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '14px', marginBottom: '16px' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '14px', marginBottom: '16px' }}>
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
  ),
};

/* ==================================================== */
/* 2. BUTTON PRIMARY INDIVIDUAL STORIES                 */
/* ==================================================== */
export const PrimaryDefault: Story = {
  name: 'Primary / Default',
  args: {
    variant: 'primary',
    state: 'normal',
    children: 'Button',
  },
};

export const PrimaryHover: Story = {
  name: 'Primary / Hover',
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button',
  },
};

export const PrimaryActive: Story = {
  name: 'Primary / Active (Pressed)',
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  name: 'Primary / Disabled',
  args: {
    variant: 'primary',
    state: 'disabled',
    children: 'Button',
  },
};

export const PrimaryWithLeftIcon: Story = {
  name: 'Primary / Left Icon (<)',
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Button',
  },
};

export const PrimaryWithRightIcon: Story = {
  name: 'Primary / Right Icon (>)',
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Button',
  },
};

/* ==================================================== */
/* 3. BUTTON SECONDARY INDIVIDUAL STORIES               */
/* ==================================================== */
export const SecondaryDefault: Story = {
  name: 'Secondary / Default (Outlined)',
  args: {
    variant: 'secondary',
    state: 'normal',
    children: 'Button',
  },
};

export const SecondaryHover: Story = {
  name: 'Secondary / Hover',
  args: {
    variant: 'secondary',
    state: 'hover',
    children: 'Button',
  },
};

export const SecondaryActive: Story = {
  name: 'Secondary / Active (Pressed)',
  args: {
    variant: 'secondary',
    state: 'active',
    children: 'Button',
  },
};

export const SecondaryDisabled: Story = {
  name: 'Secondary / Disabled',
  args: {
    variant: 'secondary',
    state: 'disabled',
    children: 'Button',
  },
};

export const SecondaryWithLeftIcon: Story = {
  name: 'Secondary / Left Icon (<)',
  args: {
    variant: 'secondary',
    icon: 'left',
    children: 'Button',
  },
};

export const SecondaryWithRightIcon: Story = {
  name: 'Secondary / Right Icon (>)',
  args: {
    variant: 'secondary',
    icon: 'right',
    children: 'Button',
  },
};

/* ==================================================== */
/* 4. BUTTON TERTIARY INDIVIDUAL STORIES                */
/* ==================================================== */
export const TertiaryDefault: Story = {
  name: 'Tertiary / Default (Text)',
  args: {
    variant: 'tertiary',
    state: 'normal',
    children: 'Button',
  },
};

export const TertiaryHover: Story = {
  name: 'Tertiary / Hover',
  args: {
    variant: 'tertiary',
    state: 'hover',
    children: 'Button',
  },
};

export const TertiaryActive: Story = {
  name: 'Tertiary / Active',
  args: {
    variant: 'tertiary',
    state: 'active',
    children: 'Button',
  },
};

export const TertiaryDisabled: Story = {
  name: 'Tertiary / Disabled',
  args: {
    variant: 'tertiary',
    state: 'disabled',
    children: 'Button',
  },
};

export const TertiaryWithLeftIcon: Story = {
  name: 'Tertiary / Left Icon (<)',
  args: {
    variant: 'tertiary',
    icon: 'left',
    children: 'Button',
  },
};

export const TertiaryWithRightIcon: Story = {
  name: 'Tertiary / Right Icon (>)',
  args: {
    variant: 'tertiary',
    icon: 'right',
    children: 'Button',
  },
};
