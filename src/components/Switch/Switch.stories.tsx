import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is toggled on.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled.',
    },
    label: {
      control: 'text',
      description: 'Optional label displayed next to the switch.',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Toggle feature',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Feature enabled',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    label: 'Disabled setting',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled & active',
  },
};

export const NoLabel: Story = {
  args: {},
};
