import type { Meta, StoryObj } from '@storybook/react';
import { AlertsScreen } from './AlertsScreen';

const meta: Meta<typeof AlertsScreen> = {
  title: 'Screens/AlertsScreen',
  component: AlertsScreen,
  tags: ['autodocs'],
  argTypes: {
    view: {
      control: 'select',
      options: ['loading', 'active', 'empty'],
      description: 'Switch screen tab view variant',
    },
    title: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingState: Story = {
  name: 'Tab 1: Loading State',
  args: {
    view: 'loading',
    title: 'Alerts',
    width: 375,
    height: 680,
  },
};

export const ActiveAlerts: Story = {
  name: 'Tab 2: Active Alerts (Default)',
  args: {
    view: 'active',
    title: 'Alerts',
    width: 375,
    height: 680,
  },
};

export const EmptyStateView: Story = {
  name: 'Tab 3: Empty State',
  args: {
    view: 'empty',
    title: 'Alerts',
    width: 375,
    height: 680,
  },
};
