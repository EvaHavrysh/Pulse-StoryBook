import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No active alerts.',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'No active alerts.',
    description: 'You are completely safe. We will notify you if any emergency hazards occur in your area.',
  },
};
