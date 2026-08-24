import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['unchecked', 'checked', 'minus', 'plus'],
      description: 'The 4 visual states of the checkbox',
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    cycleAllStates: { control: 'boolean' },
    onChange: { action: 'stateChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    defaultState: 'unchecked',
    label: 'Unchecked State',
  },
};

export const Checked: Story = {
  args: {
    defaultState: 'checked',
    label: 'Checked State (Tick)',
  },
};

export const MinusState: Story = {
  args: {
    defaultState: 'minus',
    label: 'Minus State (Indeterminate)',
  },
};

export const PlusState: Story = {
  args: {
    defaultState: 'plus',
    label: 'Plus State (+)',
  },
};

export const CycleAllFourStates: Story = {
  args: {
    defaultState: 'unchecked',
    cycleAllStates: true,
    label: 'Click to cycle all 4 states (Unchecked -> Checked -> Minus -> Plus)',
  },
};

export const AllFourStatesPreview: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Checkbox state="unchecked" label="Unchecked" />
      <Checkbox state="checked" label="Checked" />
      <Checkbox state="minus" label="Minus (-)" />
      <Checkbox state="plus" label="Plus (+)" />
    </div>
  ),
};
