import type { Meta, StoryObj } from '@storybook/react';
import { EmergencyGuideCard } from './EmergencyGuideCard';

const meta: Meta<typeof EmergencyGuideCard> = {
  title: 'Components/EmergencyGuideCard',
  component: EmergencyGuideCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    bodyText: { control: 'text' },
    imageSrc: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Fire Emergency Guide',
    bodyText: 'Drop to the floor, cover your nose with a damp cloth, and follow the nearest exit signs immediately.',
  },
};
