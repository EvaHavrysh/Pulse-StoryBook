import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Toggle between Normal Card state and Skeleton Loading state',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    animatedLoading: { control: 'boolean' },
    onButtonClick: { action: 'buttonClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Normal State (Interactive Card with button, warning icons, and text)
export const NormalState: Story = {
  args: {
    isLoading: false,
    title: 'Emergency Alert',
    description: 'High wind advisory in effect. Secure loose objects and stay indoors until conditions improve.',
    buttonLabel: 'View Details',
  },
};

// Story 2: Loading State (Renders Skeleton Shimmer Placeholder)
export const LoadingState: Story = {
  args: {
    isLoading: true,
    animatedLoading: true,
  },
};
