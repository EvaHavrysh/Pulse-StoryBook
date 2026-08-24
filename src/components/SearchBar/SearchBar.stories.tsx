import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    variantState: {
      control: 'select',
      options: ['default', 'active'],
      description: 'Force visual state variant: default (darker border) vs active (lighter border)',
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'textChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Default search bar (static view in default state)
export const DefaultState: Story = {
  args: {
    variantState: 'default',
    placeholder: 'Search',
    value: '',
  },
};

// Story 2: Active search bar (static view in active state with typed text)
export const ActiveState: Story = {
  args: {
    variantState: 'active',
    placeholder: 'Search',
    value: 'News',
  },
};

// Story 3: Interactive search bar (fully working: clicking or focusing dynamically transitions into active state)
export const Interactive: Story = {
  args: {
    placeholder: 'Search',
    defaultValue: '',
  },
};
