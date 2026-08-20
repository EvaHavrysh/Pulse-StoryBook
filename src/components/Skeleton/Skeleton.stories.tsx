import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'The width of the skeleton element (e.g. 100, "150px", "50%").',
    },
    height: {
      control: 'text',
      description: 'The height of the skeleton element (e.g. 20, "20px", "1.5rem").',
    },
    circle: {
      control: 'boolean',
      description: 'Whether the skeleton should be shaped as a circle.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const DefaultLine: Story = {
  args: {
    width: '300px',
  },
};

export const CustomSizeRect: Story = {
  args: {
    width: '200px',
    height: '100px',
  },
};

export const Avatar: Story = {
  args: {
    circle: true,
    width: '64px',
    height: '64px',
  },
};

// Composed profile card story to show premium usage
export const ComposedCardPlaceholder: Story = {
  render: () => (
    <div style={{
      width: '320px',
      padding: '20px',
      border: '1px solid #e4e4e7',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Avatar skeleton */}
        <Skeleton circle width={48} height={48} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          {/* Title skeleton */}
          <Skeleton width="70%" height={16} />
          {/* Subtitle skeleton */}
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      {/* Body skeleton lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Skeleton width="100%" height={12} />
        <Skeleton width="100%" height={12} />
        <Skeleton width="80%" height={12} />
      </div>
      {/* Button skeleton */}
      <Skeleton width="100%" height={36} />
    </div>
  ),
  args: {},
};
