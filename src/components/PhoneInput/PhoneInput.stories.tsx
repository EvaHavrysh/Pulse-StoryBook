import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    defaultValue: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'active', 'success', 'error'],
      description: 'Input state variant',
    },
    disabled: { control: 'boolean' },
    defaultCountryCode: { control: 'text' },
    defaultOpen: { control: 'boolean' },
    width: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Phone number',
    defaultValue: '+1',
    variant: 'default',
    disabled: false,
    width: 320,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Phone number',
    defaultValue: '+1',
    variant: 'default',
    disabled: true,
    width: 320,
  },
};

export const Active: Story = {
  args: {
    label: 'Phone number',
    defaultValue: '+1 234',
    variant: 'active',
    disabled: false,
    width: 320,
  },
};

export const Success: Story = {
  args: {
    label: 'Phone number',
    defaultValue: '+1 234 567 89 00',
    variant: 'success',
    disabled: false,
    width: 320,
  },
};

export const Error: Story = {
  args: {
    label: 'Phone number',
    defaultValue: '+1 234 567 89 00',
    variant: 'error',
    disabled: false,
    width: 320,
  },
};

export const DropdownOpen: Story = {
  name: 'Dropdown Open',
  args: {
    label: 'Phone number',
    defaultValue: '+1',
    variant: 'default',
    disabled: false,
    defaultOpen: true,
    width: 320,
  },
};
