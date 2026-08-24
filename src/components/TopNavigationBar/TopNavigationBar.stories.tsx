import type { Meta, StoryObj } from '@storybook/react';
import { TopNavigationBar } from './TopNavigationBar';

const meta: Meta<typeof TopNavigationBar> = {
  title: 'Components/TopNavigationBar',
  component: TopNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    location: { control: 'text' },
    onBackClick: { action: 'backClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    location: 'Ottawa, Canada',
  },
};
