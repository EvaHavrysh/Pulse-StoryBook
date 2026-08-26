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
    activeTab: {
      control: 'select',
      options: ['home', 'notifications', 'community', 'profile'],
      description: 'Active navigation tab',
    },
    sosContentMode: {
      control: 'radio',
      options: ['text', 'siren'],
      description: 'Toggle center SOS button content variant ("SOS" text vs Siren icon)',
    },
    sosState: {
      control: 'select',
      options: ['default', 'countdown', 'sent', 'blocked'],
      description: 'State variant of the integrated SOS button',
    },
    sosCountdownSeconds: {
      control: 'number',
      description: 'Countdown seconds remaining',
    },
    sosPlayAudio: {
      control: 'boolean',
      description: 'Play subtle alarm audio during countdown',
    },
    onTabChange: { action: 'tabChanged' },
    onSosClick: { action: 'sosClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story 1: Default Interactive Control Story
export const Interactive: Story = {
  args: {
    defaultActiveTab: 'home',
    sosContentMode: 'text',
    sosState: 'default',
    sosCountdownSeconds: 15,
    sosPlayAudio: true,
  },
};

// Story 2: Text Content Variant ("SOS")
export const TextVariant: Story = {
  args: {
    defaultActiveTab: 'home',
    sosContentMode: 'text',
    sosState: 'default',
  },
};

// Story 3: Icon Content Variant (Siren Icon)
export const SirenVariant: Story = {
  args: {
    defaultActiveTab: 'home',
    sosContentMode: 'siren',
    sosState: 'default',
  },
};

// Story 4: Interactive Demonstration with State Countdown Simulation
export const InteractiveSimulation = () => {
  const [activeTab, setActiveTab] = useState<BottomNavTab>('home');
  const [sosState, setSosState] = useState<SosButtonState>('default');
  const [contentMode, setContentMode] = useState<'text' | 'siren'>('text');
  const [seconds, setSeconds] = useState<number>(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sosState === 'countdown') {
      if (seconds > 0) {
        timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
      } else {
        setSosState('sent');
      }
    }
    return () => clearTimeout(timer);
  }, [sosState, seconds]);

  const handleSosClick = () => {
    if (sosState === 'default') {
      setSeconds(15);
      setSosState('countdown');
    } else if (sosState === 'sent') {
      setSosState('default');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
        <button
          type="button"
          onClick={() => setContentMode('text')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #c0c0c0',
            background: contentMode === 'text' ? '#2c4613' : '#fff',
            color: contentMode === 'text' ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          Text ("SOS")
        </button>
        <button
          type="button"
          onClick={() => setContentMode('siren')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #c0c0c0',
            background: contentMode === 'siren' ? '#2c4613' : '#fff',
            color: contentMode === 'siren' ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          Icon (Siren)
        </button>
      </div>

      <BottomNavigationBarWithSos
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sosContentMode={contentMode}
        sosState={sosState}
        sosCountdownSeconds={seconds}
        sosPlayAudio={true}
        onSosClick={handleSosClick}
      />
    </div>
  );
};

// Story 5: All 4 Active Tab States Stacked (Matching Screenshots)
export const AllTabStatesOverview = () => {
  const tabs: BottomNavTab[] = ['home', 'community', 'notifications', 'profile'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', padding: '30px 0' }}>
      <h3 style={{ margin: '0 0 10px 0', fontFamily: 'sans-serif', color: '#2c4613' }}>Text Variant ("SOS")</h3>
      {tabs.map((tab) => (
        <BottomNavigationBarWithSos
          key={`text-${tab}`}
          activeTab={tab}
          sosContentMode="text"
          sosState="default"
        />
      ))}

      <h3 style={{ margin: '20px 0 10px 0', fontFamily: 'sans-serif', color: '#2c4613' }}>Icon Variant (Siren Icon)</h3>
      {tabs.map((tab) => (
        <BottomNavigationBarWithSos
          key={`siren-${tab}`}
          activeTab={tab}
          sosContentMode="siren"
          sosState="default"
        />
      ))}
    </div>
  );
};
