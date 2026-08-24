import type { Meta, StoryObj } from '@storybook/react';
import { StatusContactCard } from './StatusContactCard';

const meta: Meta<typeof StatusContactCard> = {
  title: 'Components/StatusContactCard',
  component: StatusContactCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['safe', 'danger'],
      description: 'Toggle between Safe and Danger status badges',
    },
    name: { control: 'text' },
    updatedText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Safe: Story = {
  args: {
    name: 'Mom',
    status: 'safe',
    updatedText: 'Updated 5m ago',
  },
};

export const Danger: Story = {
  args: {
    name: 'Mom',
    status: 'danger',
    updatedText: 'Updated 1m ago',
  },
};
