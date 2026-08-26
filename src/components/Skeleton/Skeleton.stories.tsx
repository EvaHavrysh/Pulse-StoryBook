import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    animated: {
      control: 'boolean',
      description: 'Toggle pulse/shimmer animation effect across loading blocks',
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Default Animated Skeleton
export const Default: Story = {
  args: {
    animated: true,
    width: '312px',
    height: '176px',
  },
};

// Story 2: Static Non-Animated Skeleton
export const Static: Story = {
  args: {
    animated: false,
    width: '312px',
    height: '176px',
  },
};
