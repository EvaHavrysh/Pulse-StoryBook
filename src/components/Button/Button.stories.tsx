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
      description: 'Visual variant of the button.',
    },
    state: {
      control: 'select',
      options: ['normal', 'hover', 'active', 'disabled'],
      description: 'Simulated visual state of the button.',
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
      description: 'Take up full width of container.',
    },
    loading: {
      control: 'boolean',
      description: 'Display loading spinner.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* Default Primary Button */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

/* Secondary Button */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

/* Tertiary Button */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
};

/* States */
export const HoverState: Story = {
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button',
  },
};

export const ActiveState: Story = {
  args: {
    variant: 'primary',
    state: 'active',
    children: 'Button',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'primary',
    state: 'disabled',
    children: 'Button',
  },
};

/* Icons */
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Button',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Button',
  },
};

/* Full Matrix Gallery matching Figma Spec */
export const AllVariantsAndStates: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'tertiary'] as const;
    const variantTitles = {
      primary: '❖ Button Primary',
      secondary: '❖ Button Secondary',
      tertiary: '❖ Button Tertiary',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', fontFamily: 'sans-serif' }}>
        {variants.map((v) => (
          <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ margin: 0, color: '#7c3aed', fontSize: '15px', fontWeight: 600 }}>
              {variantTitles[v]}
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
              {/* Normal */}
              <Button variant={v} state="normal">
                Button
              </Button>
              {/* Hover */}
              <Button variant={v} state="hover">
                Button
              </Button>
              {/* Active */}
              <Button variant={v} state="active">
                Button
              </Button>
              {/* Disabled */}
              <Button variant={v} state="disabled">
                Button
              </Button>
              {/* Left Icon */}
              <Button variant={v} icon="left">
                Button
              </Button>
              {/* Right Icon */}
              <Button variant={v} icon="right">
                Button
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
