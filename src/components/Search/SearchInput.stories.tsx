import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Search',
  component: SearchInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'active', 'disabled'],
      description: 'Search input visual state.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed in default state.',
    },
    value: {
      control: 'text',
      description: 'Input value.',
    },
    showCursor: {
      control: 'boolean',
      description: 'Whether to show simulated blinking typing cursor line.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the search input is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

/* ==================================================== */
/* EXACT 3 STORIES FOR DEDICATED SEARCH CATEGORY       */
/* ==================================================== */

/**
 * 1. Default: Shows just the static default search input ("Search").
 */
export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput state="default" placeholder="Search" />
    </div>
  ),
};

/**
 * 2. Active: Shows just the static active search input with text ("News").
 */
export const Active: Story = {
  name: 'Active',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput state="active" value="News" showCursor={true} />
    </div>
  ),
};

/**
 * 3. Interactive: A fully interactive search component where clicking/typing changes its state dynamically.
 */
export const Interactive: Story = {
  name: 'Interactive',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput placeholder="Search" />
    </div>
  ),
};
