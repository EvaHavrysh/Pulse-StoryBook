import type { Meta, StoryObj } from '@storybook/react';
import { OtpInput } from './OtpInput';

const meta: Meta<typeof OtpInput> = {
  title: 'Components/OtpInput',
  component: OtpInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'disabled', 'active', 'success', 'error'],
      description: 'The 5 visual state variants from design',
    },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    length: { control: 'number' },
    onChange: { action: 'valueChanged' },
    onComplete: { action: 'otpCompleted' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: input OTP/Default
export const Default: Story = {
  args: {
    variant: 'default',
    value: '',
  },
};

// Story 2: input OTP/Disabled
export const Disabled: Story = {
  args: {
    variant: 'disabled',
    value: '',
  },
};

// Story 3: input OTP/Active
export const Active: Story = {
  args: {
    variant: 'active',
    value: '35',
  },
};

// Story 4: input OTP/Success
export const Success: Story = {
  args: {
    variant: 'success',
    value: '3509',
  },
};

// Story 5: input OTP/Error
export const Error: Story = {
  args: {
    variant: 'error',
    value: '3509',
  },
};

// Story 6: Interactive
export const Interactive: Story = {
  args: {
    defaultValue: '',
    length: 4,
  },
};
