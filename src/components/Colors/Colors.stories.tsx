import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './Colors';

const meta: Meta<typeof Colors> = {
  title: 'Colors',
  component: Colors,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'all'],
      description: 'Filter palette group by category',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary (Green)',
  args: {
    category: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Secondary (Neutral)',
  args: {
    category: 'secondary',
  },
};

export const Danger: Story = {
  name: 'Danger (Red)',
  args: {
    category: 'danger',
  },
};

export const Warning: Story = {
  name: 'Warning (Amber)',
  args: {
    category: 'warning',
  },
};

export const AllPalettes: Story = {
  name: 'All Palettes',
  args: {
    category: 'all',
  },
};
