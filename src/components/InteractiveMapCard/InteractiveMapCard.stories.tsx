import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveMapCard } from './InteractiveMapCard';

const meta: Meta<typeof InteractiveMapCard> = {
  title: 'Components/InteractiveMapCard',
  component: InteractiveMapCard,
  tags: ['autodocs'],
  argTypes: {
    latitude: { control: { type: 'number', step: 0.001 } },
    longitude: { control: { type: 'number', step: 0.001 } },
    zoom: { control: { type: 'range', min: 1, max: 18, step: 1 } },
    label: { control: 'text' },
    mapType: {
      control: 'select',
      options: ['hybrid', 'satellite', 'street'],
      description: 'Switch map tile layer style',
    },
    interactive: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    latitude: 58.1072,
    longitude: -103.1718,
    zoom: 15,
    label: 'You are here',
    mapType: 'hybrid',
    interactive: true,
    width: 298,
    height: 329,
  },
};

export const SatelliteOnly: Story = {
  args: {
    latitude: 58.1072,
    longitude: -103.1718,
    zoom: 15,
    label: 'You are here',
    mapType: 'satellite',
    interactive: true,
    width: 298,
    height: 329,
  },
};

export const StreetView: Story = {
  args: {
    latitude: 58.1072,
    longitude: -103.1718,
    zoom: 15,
    label: 'You are here',
    mapType: 'street',
    interactive: true,
    width: 298,
    height: 329,
  },
};

export const NonInteractive: Story = {
  args: {
    latitude: 58.1072,
    longitude: -103.1718,
    zoom: 15,
    label: 'You are here',
    mapType: 'hybrid',
    interactive: false,
    width: 298,
    height: 329,
  },
};

export const CustomLabel: Story = {
  args: {
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 14,
    label: 'Toronto Office',
    mapType: 'hybrid',
    interactive: true,
    width: 298,
    height: 329,
  },
};
