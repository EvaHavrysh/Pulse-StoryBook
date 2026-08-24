import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
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
      description: 'Whether to show the simulated blinking typing cursor line.',
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
/* 1. SHOWCASE GRID (Exact Figma Spec Matching Screenshot)*/
/* ==================================================== */
export const AllStatesShowcase: Story = {
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '380px' }}>
      {/* 1. Default State (Top): Dark grey border, placeholder "Search" */}
      <SearchInput state="default" placeholder="Search" />

      {/* 2. Active State (Bottom): Lighter grey border, typed "News" with blinking cursor */}
      <SearchInput state="active" value="News" showCursor={true} />
    </div>
  ),
};

/* ==================================================== */
/* 2. INDIVIDUAL STATE STORIES                         */
/* ==================================================== */
export const DefaultState: Story = {
  name: '1. Default State (Placeholder "Search")',
  args: {
    state: 'default',
    placeholder: 'Search',
  },
};

export const ActiveState: Story = {
  name: '2. Active State (Typed "News")',
  args: {
    state: 'active',
    value: 'News',
    showCursor: true,
  },
};

export const InteractiveSearch: Story = {
  name: '3. Interactive Live Search',
  render: () => <SearchInput placeholder="Search" />,
};
