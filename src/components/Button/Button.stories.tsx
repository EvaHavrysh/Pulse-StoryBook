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

/* Button Primary Stories */

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
