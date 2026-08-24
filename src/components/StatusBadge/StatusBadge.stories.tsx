import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['safe', 'danger'],
      description: 'Switch between Safe (green) and Danger (red) variants',
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Safe: Story = {
  args: {
    variant: 'safe',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
