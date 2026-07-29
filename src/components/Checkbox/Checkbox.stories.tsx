import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is selected.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in a partially checked (indeterminate) state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed next to the checkbox.',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Subscribe to newsletter',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Accept terms and conditions',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Select all features',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    label: 'Unavailable option',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Locked checked option',
  },
};

export const NoLabel: Story = {
  args: {},
};
