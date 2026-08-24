import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SosButton } from './SosButton';
import type { SosButtonState } from './SosButton';

const meta: Meta<typeof SosButton> = {
  title: 'Components/SosButton',
  component: SosButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'countdown', 'sent', 'blocked'],
      description: 'The visual state variant',
    },
    contentMode: {
      control: 'radio',
      options: ['text', 'siren'],
      description: 'Toggle default state view between text ("SOS") and Siren Icon',
    },
    countdownSeconds: { control: 'number' },
    playAudio: { control: 'boolean' },
    onClick: { action: 'buttonClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Default (SOS)
export const Default: Story = {
  args: {
    state: 'default',
    contentMode: 'text',
  },
};

// Story 2: Countdown (15s with radar waves & audio)
export const Countdown: Story = {
  args: {
    state: 'countdown',
    countdownSeconds: 15,
    playAudio: true,
  },
};

// Story 3: Sent
export const Sent: Story = {
  args: {
    state: 'sent',
  },
};

// Story 4: Blocked
export const Blocked: Story = {
  args: {
    state: 'blocked',
  },
};

// Story 5: Interactive Demonstration (Clean centered view without extra labels)
export const Interactive = () => {
  const [currentState, setCurrentState] = useState<SosButtonState>('default');
  const [seconds, setSeconds] = useState<number>(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentState === 'countdown') {
      if (seconds > 0) {
        timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
      } else {
        setCurrentState('sent');
      }
    }
    return () => clearTimeout(timer);
  }, [currentState, seconds]);

  const handleClick = () => {
    if (currentState === 'default') {
      setSeconds(15);
      setCurrentState('countdown');
    } else if (currentState === 'sent') {
      setCurrentState('default');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
      <SosButton
        state={currentState}
        countdownSeconds={seconds}
        playAudio={true}
        onClick={handleClick}
      />
    </div>
  );
};
