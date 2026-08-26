import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigationBarWithSos } from './BottomNavigationBarWithSos';
import type { BottomNavTab } from './BottomNavigationBarWithSos';
import type { SosButtonState } from '../SosButton/SosButton';

const meta: Meta<typeof BottomNavigationBarWithSos> = {
  title: 'Components/BottomNavigationBarWithSos',
  component: BottomNavigationBarWithSos,
  tags: ['autodocs'],
  argTypes: {
    sosContentMode: {
      control: 'radio',
      options: ['text', 'siren'],
      description: 'Toggle center SOS button type between Text ("SOS") and Icon (Siren)',
    },
    defaultActiveTab: {
      control: 'select',
      options: ['home', 'notifications', 'community', 'profile'],
      description: 'Default active navigation tab',
    },
    sosPlayAudio: {
      control: 'boolean',
      description: 'Enable subtle alarm audio during countdown',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Single working clean story tab for BottomNavigationBarWithSos
export const Interactive: Story = {
  args: {
    sosContentMode: 'text',
    defaultActiveTab: 'home',
    sosPlayAudio: true,
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState<BottomNavTab>(args.defaultActiveTab || 'home');
    const [sosState, setSosState] = useState<SosButtonState>('default');
    const [countdownSeconds, setCountdownSeconds] = useState<number>(15);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (sosState === 'countdown') {
        if (countdownSeconds > 0) {
          timer = setTimeout(() => setCountdownSeconds((prev) => prev - 1), 1000);
        } else {
          setSosState('sent');
        }
      }
      return () => clearTimeout(timer);
    }, [sosState, countdownSeconds]);

    useEffect(() => {
      if (args.defaultActiveTab) {
        setActiveTab(args.defaultActiveTab);
      }
    }, [args.defaultActiveTab]);

    const handleSosClick = () => {
      if (sosState === 'default') {
        setCountdownSeconds(15);
        setSosState('countdown');
      } else if (sosState === 'sent' || sosState === 'blocked') {
        setSosState('default');
      }
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '180px', width: '100%' }}>
        <BottomNavigationBarWithSos
          {...args}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sosState={sosState}
          sosCountdownSeconds={countdownSeconds}
          sosPlayAudio={args.sosPlayAudio}
          onSosClick={handleSosClick}
        />
      </div>
    );
  },
};
