import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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
      description: 'Simulated visual state for testing.',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right'],
      description: 'Icon positioning: left, right, or none.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width mode.',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ==================================================== */
/* 1. BUTTON PRIMARY STORIES                            */
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
  name: 'Primary / Left Icon',
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Button',
  },
};

export const PrimaryWithRightIcon: Story = {
  name: 'Primary / Right Icon',
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Button',
  },
};

/* ==================================================== */
/* 2. BUTTON SECONDARY STORIES                          */
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
  name: 'Secondary / Active (Pressed 4px Shrink)',
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
  name: 'Secondary / Left Icon',
  args: {
    variant: 'secondary',
    icon: 'left',
    children: 'Button',
  },
};

export const SecondaryWithRightIcon: Story = {
  name: 'Secondary / Right Icon',
  args: {
    variant: 'secondary',
    icon: 'right',
    children: 'Button',
  },
};

/* ==================================================== */
/* 3. BUTTON TERTIARY STORIES                           */
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
  name: 'Tertiary / Active (Darker Text & Background)',
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
  name: 'Tertiary / Left Icon',
  args: {
    variant: 'tertiary',
    icon: 'left',
    children: 'Button',
  },
};

export const TertiaryWithRightIcon: Story = {
  name: 'Tertiary / Right Icon',
  args: {
    variant: 'tertiary',
    icon: 'right',
    children: 'Button',
  },
};

/* ==================================================== */
/* FULL MATRIX GALLERY (Figma Spec View)                */
/* ==================================================== */
export const AllVariantsAndStates: Story = {
  name: 'All Variants & States (Figma Spec)',
  render: () => {
    const rows = [
      {
        title: '❖ Button Primary',
        variant: 'primary' as const,
      },
      {
        title: '❖ Button Secondary',
        variant: 'secondary' as const,
      },
      {
        title: '❖ Button Tertiary',
        variant: 'tertiary' as const,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', fontFamily: 'sans-serif' }}>
        {rows.map(({ title, variant }) => (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ margin: 0, color: '#7c3aed', fontSize: '14px', fontWeight: 600 }}>
              {title}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 32px',
                border: '1.5px dashed #a78bfa',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                flexWrap: 'wrap',
              }}
            >
              {/* Default */}
              <Button variant={variant} state="normal">
                Button
              </Button>
              {/* Hover */}
              <Button variant={variant} state="hover">
                Button
              </Button>
              {/* Active */}
              <Button variant={variant} state="active">
                Button
              </Button>
              {/* Disabled */}
              <Button variant={variant} state="disabled">
                Button
              </Button>
              {/* Left Icon */}
              <Button variant={variant} icon="left">
                Button
              </Button>
              {/* Right Icon */}
              <Button variant={variant} icon="right">
                Button
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
