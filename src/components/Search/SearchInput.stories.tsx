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
    disabled: {
      control: 'boolean',
      description: 'Whether the search input is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

/* ==================================================== */
/* EXACT 3 STORIES IN REQUIRED SPEC ORDER               */
/* ==================================================== */

/**
 * Story 1 (Interactive): A live interactive search input.
 * Default state initially ("Search"); clicking/focusing switches dynamically to Active state (lighter grey border).
 */
export const Interactive: Story = {
  name: 'Interactive',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput placeholder="Search" />
    </div>
  ),
};

/**
 * Story 2 (Default State): Static display of default search input ("Search" placeholder, dark grey border).
 */
export const DefaultState: Story = {
  name: 'Default State',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput state="default" placeholder="Search" />
    </div>
  ),
};

/**
 * Story 3 (Active State): Static display of active search input ("News" text, lighter grey border).
 */
export const ActiveState: Story = {
  name: 'Active State',
  render: () => (
    <div style={{ width: '380px' }}>
      <SearchInput state="active" value="News" />
    </div>
  ),
};
