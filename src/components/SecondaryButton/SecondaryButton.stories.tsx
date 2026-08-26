import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
  title: 'Components/SecondaryButtons',
  component: SecondaryButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Visual state variant',
    },
    iconPosition: {
      control: 'radio',
      options: ['none', 'left', 'right'],
      description: 'Toggle icon position between None, Left, and Right',
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'buttonClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Default State
export const Default: Story = {
  args: {
    label: 'Button',
    state: 'default',
    iconPosition: 'none',
  },
};

// Story 2: Hover State
export const Hover: Story = {
  args: {
    label: 'Button',
    state: 'hover',
    iconPosition: 'none',
  },
};

// Story 3: Active / Pressed State
export const Active: Story = {
  args: {
    label: 'Button',
    state: 'active',
    iconPosition: 'none',
  },
};

// Story 4: Disabled State
export const Disabled: Story = {
  args: {
    label: 'Button',
    state: 'disabled',
    iconPosition: 'none',
    disabled: true,
  },
};

// Story 5: Icon Button (With Left/Right toggle control)
export const WithIconButton: Story = {
  args: {
    label: 'Button',
    state: 'default',
    iconPosition: 'left',
  },
};

// Story 6: All States Overview (Row 2 Grid)
export const AllStatesOverview = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', padding: '30px' }}>
    <SecondaryButton label="Button" state="default" />
    <SecondaryButton label="Button" state="hover" />
    <SecondaryButton label="Button" state="active" />
    <SecondaryButton label="Button" state="disabled" />
    <SecondaryButton label="Button" iconPosition="left" />
    <SecondaryButton label="Button" iconPosition="right" />
  </div>
);
