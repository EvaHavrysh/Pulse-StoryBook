import type { Meta, StoryObj } from '@storybook/react';
import { ChangeProfilePhoto } from './ChangeProfilePhoto';

const meta: Meta<typeof ChangeProfilePhoto> = {
  title: 'Components/ChangeProfilePhoto',
  component: ChangeProfilePhoto,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    takePhotoLabel: { control: 'text' },
    selectedPhotoIndex: { control: 'number' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Change profile photo',
    subtitle: 'Your gallery',
    takePhotoLabel: 'Take a photo',
    width: 375,
    height: 680,
  },
};

export const PhotoSelected: Story = {
  args: {
    title: 'Change profile photo',
    subtitle: 'Your gallery',
    takePhotoLabel: 'Take a photo',
    selectedPhotoIndex: 0,
    width: 375,
    height: 680,
  },
};

export const CustomLabels: Story = {
  args: {
    title: 'Update Avatar',
    subtitle: 'Device camera roll',
    takePhotoLabel: 'Open Camera',
    width: 375,
    height: 680,
  },
};
