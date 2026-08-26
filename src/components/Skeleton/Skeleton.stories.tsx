import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title', 'description', 'iconSquare', 'iconTriangle', 'iconCircle', 'button'],
      description: 'Atomic skeleton element variant',
    },
    animated: {
      control: 'boolean',
      description: 'Toggle pulse shimmer animation',
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Title Skeleton (Thin top rectangle)
export const Title: Story = {
  args: {
    variant: 'title',
    animated: true,
  },
};

// Story 2: Description Skeleton (Large wide block)
export const Description: Story = {
  args: {
    variant: 'description',
    animated: true,
  },
};

// Story 3: Square Icon Skeleton
export const IconSquare: Story = {
  args: {
    variant: 'iconSquare',
    animated: true,
  },
};

// Story 4: Triangle Icon Skeleton
export const IconTriangle: Story = {
  args: {
    variant: 'iconTriangle',
    animated: true,
  },
};

// Story 5: Circle Icon Skeleton
export const IconCircle: Story = {
  args: {
    variant: 'iconCircle',
    animated: true,
  },
};

// Story 6: Button Skeleton (Rounded button placeholder)
export const Button: Story = {
  args: {
    variant: 'button',
    animated: true,
  },
};
