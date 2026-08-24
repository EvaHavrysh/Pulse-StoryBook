import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['unchecked', 'checked', 'minus', 'plus'],
      description: 'The 4 visual states of the checkbox',
    },
    disabled: { control: 'boolean' },
    onChange: { action: 'stateChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultState: 'unchecked',
  },
};

export const Checked: Story = {
  args: {
    defaultState: 'checked',
  },
};

export const Minus: Story = {
  args: {
    defaultState: 'minus',
  },
};

export const Plus: Story = {
  args: {
    defaultState: 'plus',
  },
};
