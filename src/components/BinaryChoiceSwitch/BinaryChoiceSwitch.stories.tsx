import type { Meta, StoryObj } from '@storybook/react';
import { BinaryChoiceSwitch } from './BinaryChoiceSwitch';

const meta: Meta<typeof BinaryChoiceSwitch> = {
  title: 'Components/BinaryChoiceSwitch',
  component: BinaryChoiceSwitch,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['no', 'yes'],
    },
    noLabel: { control: 'text' },
    yesLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNoSelected: Story = {
  args: {
    defaultValue: 'no',
    noLabel: 'No',
    yesLabel: 'Yes',
  },
};

export const YesSelected: Story = {
  args: {
    defaultValue: 'yes',
    noLabel: 'No',
    yesLabel: 'Yes',
  },
};

export const InteractiveDemo: Story = {
  args: {
    noLabel: 'No',
    yesLabel: 'Yes',
  },
};
