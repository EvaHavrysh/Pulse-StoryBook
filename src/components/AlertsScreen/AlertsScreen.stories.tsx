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

export const AllScreensOverview: Story = {
  name: 'All 3 Screen Variants Overview',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#fafafa',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#666' }}>Loading State (Tab 1)</span>
        <AlertsScreen view="loading" width={340} height={640} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#666' }}>Active Alerts (Tab 2)</span>
        <AlertsScreen view="active" width={340} height={640} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#666' }}>Empty State (Tab 3)</span>
        <AlertsScreen view="empty" width={340} height={640} />
      </div>
    </div>
  ),
};
