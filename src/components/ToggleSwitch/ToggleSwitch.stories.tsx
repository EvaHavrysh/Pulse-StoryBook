import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['active', 'inactive', 'disabled'],
      description: 'The 3 visual state variants from design',
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveState: Story = {
  args: {
    variant: 'active',
  },
};

export const InactiveState: Story = {
  args: {
    variant: 'inactive',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'disabled',
  },
};

export const AllThreeStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
          State 1: Active (On / Vibrant Green)
        </span>
        <ToggleSwitch variant="active" />
      </div>
      <div>
        <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
          State 2: Inactive (Off / Dark Thumb)
        </span>
        <ToggleSwitch variant="inactive" />
      </div>
      <div>
        <span style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
          State 3: Disabled (Muted)
        </span>
        <ToggleSwitch variant="disabled" />
      </div>
    </div>
  ),
};
