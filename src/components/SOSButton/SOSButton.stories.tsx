import type { Meta, StoryObj } from '@storybook/react-vite';
import { SOSButton } from './SOSButton';

const meta: Meta<typeof SOSButton> = {
  title: 'Components/SOSButton',
  component: SOSButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'countdown', 'sent', 'offline', 'icon'],
      description: 'State variation of the SOS Button.',
    },
    size: {
      control: 'select',
      options: [1, 2, 3, 'small', 'medium', 'large'],
      description: 'Size variation (size 3 matches the design spec).',
    },
    countdownValue: {
      control: 'number',
      description: 'Countdown starting value displayed when state is "countdown".',
    },
    progress: {
      control: 'number',
      description: 'Progress ring percentage (0-100) for countdown state.',
    },
    autoCountdown: {
      control: 'boolean',
      description: 'Whether the countdown automatically ticks down using setTimeout.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the SOS button is disabled.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof SOSButton>;

/* ==================================================== */
/* 1. FULL SHOWCASE MATRIX (Matches Attached Screenshot)*/
/* ==================================================== */
export const AllStatesShowcase: Story = {
  name: 'Showcase Grid (Exact Figma Spec)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px', background: '#fafafa', fontFamily: 'sans-serif' }}>
      {/* Header Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7732bb', fontWeight: 600, fontSize: '15px' }}>
        <span>❖</span>
        <span>SOS Button (size 3)</span>
      </div>

      {/* Dashed Spec Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '40px',
        padding: '48px 56px',
        border: '1.5px dashed #9382e2',
        borderRadius: '16px',
        background: '#ffffff',
        flexWrap: 'wrap'
      }}>
        {/* 1. Default / Ready (Red "SOS") */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SOSButton state="default" size={3} />
        </div>

        {/* 2. Countdown Ring (White with 15s to 0s countdown) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SOSButton state="countdown" countdownValue={15} autoCountdown={true} size={3} />
        </div>

        {/* 3. Sent / Success (Green "Sent") */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SOSButton state="sent" size={3} />
        </div>

        {/* 4. Offline / Warning (Amber "SOS") */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SOSButton state="offline" size={3} />
        </div>

        {/* 5. Icon (Red Siren Alarm) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SOSButton state="icon" size={3} />
        </div>
      </div>
    </div>
  ),
};

/* ==================================================== */
/* 2. INDIVIDUAL STATE STORIES                         */
/* ==================================================== */
export const DefaultState: Story = {
  name: '1. Red "SOS" (Default)',
  args: {
    state: 'default',
    size: 3,
  },
};

export const CountdownState: Story = {
  name: '2. Countdown Ring (15 to 0s)',
  args: {
    state: 'countdown',
    countdownValue: 15,
    autoCountdown: true,
    size: 3,
  },
};

export const SentState: Story = {
  name: '3. Green "Sent"',
  args: {
    state: 'sent',
    sentLabel: 'Sent',
    size: 3,
  },
};

export const OfflineState: Story = {
  name: '4. Yellow/Amber "SOS"',
  args: {
    state: 'offline',
    size: 3,
  },
};

export const IconState: Story = {
  name: '5. Red Siren Icon',
  args: {
    state: 'icon',
    size: 3,
  },
};

export const InteractiveCountdown: Story = {
  name: '6. Interactive Countdown (Active Activation Sequence)',
  render: () => <SOSButton size={3} countdownValue={15} sentLabel="Sent" />,
};
