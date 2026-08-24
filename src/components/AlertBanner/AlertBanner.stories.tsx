import type { Meta, StoryObj } from '@storybook/react';
import { AlertBanner } from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    timestamp: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tornado Warning 🌪️',
    description: 'Severe tornado detected nearby. Take shelter immediately!',
    timestamp: '9:41 AM',
  },
};
