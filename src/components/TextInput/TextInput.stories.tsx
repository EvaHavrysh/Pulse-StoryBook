import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    defaultValue: { control: 'text' },
    placeholder: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'active', 'success', 'error'],
      description: 'Input state variant',
    },
    disabled: { control: 'boolean' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
    width: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Other',
    placeholder: 'Type here...',
    variant: 'default',
    disabled: false,
    multiline: false,
    width: 320,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Other',
    placeholder: 'Type here...',
    variant: 'default',
    disabled: true,
    multiline: false,
    width: 320,
  },
};

export const Active: Story = {
  name: 'Active / Filled',
  args: {
    label: 'Other',
    defaultValue: 'Allergies',
    variant: 'active',
    disabled: false,
    multiline: false,
    width: 320,
  },
};

export const Success: Story = {
  args: {
    label: 'Other',
    defaultValue: 'Allergies',
    variant: 'success',
    disabled: false,
    multiline: false,
    width: 320,
  },
};

export const Error: Story = {
  args: {
    label: 'Other',
    placeholder: 'Type here...',
    variant: 'error',
    disabled: false,
    multiline: false,
    width: 320,
  },
};

export const Multiline: Story = {
  name: 'Multiline (Textarea)',
  args: {
    label: 'Other',
    placeholder: 'Type here...',
    variant: 'default',
    disabled: false,
    multiline: true,
    rows: 4,
    width: 320,
  },
};
