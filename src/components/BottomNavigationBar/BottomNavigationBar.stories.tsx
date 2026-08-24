import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigationBar } from './BottomNavigationBar';

const meta: Meta<typeof BottomNavigationBar> = {
  title: 'Components/BottomNavigationBar',
  component: BottomNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['home', 'notifications', 'community', 'profile'],
      description: 'Select active tab item',
    },
    onTabChange: { action: 'tabChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Single clean interactive story
export const Interactive: Story = {
  args: {
    defaultActiveTab: 'home',
  },
};
