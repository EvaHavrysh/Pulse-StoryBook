import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading', 'subheading', 'impact', 'body', 'subtext'],
      description: 'The typography size and style variant.',
    },
    as: {
      control: 'text',
      description: 'The tag name to render (e.g. "h1", "p", "div").',
    },
    fontWeight: {
      control: 'text',
      description: 'Custom override for the CSS font-weight property.',
    },
    color: {
      control: 'color',
      description: 'Custom text color override.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const HierarchyOverview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
      <div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>heading (32px)</span>
        <Typography variant="heading">The quick brown fox jumps</Typography>
      </div>
      <div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>subheading (18px)</span>
        <Typography variant="subheading">The quick brown fox jumps over the lazy dog</Typography>
      </div>
      <div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>impact (16px)</span>
        <Typography variant="impact">Impactful statement</Typography>
      </div>
      <div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>body (14px)</span>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
        </Typography>
      </div>
      <div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '4px' }}>subtext (12px)</span>
        <Typography variant="subtext">Published on July 2, 2026 by Antigravity Design</Typography>
      </div>
    </div>
  ),
  args: {},
};

export const Heading: Story = {
  args: {
    variant: 'heading',
    children: 'This is a heading',
  },
};

export const Subheading: Story = {
  args: {
    variant: 'subheading',
    children: 'This is a subheading text',
  },
};

export const Impact: Story = {
  args: {
    variant: 'impact',
    children: 'Launch Protocol',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Standard paragraph body text. It is designed to be highly readable at small scale.',
  },
};

export const Subtext: Story = {
  args: {
    variant: 'subtext',
    children: 'Footnote or legal subtext information.',
  },
};

export const CustomizedGreenAccent: Story = {
  args: {
    variant: 'heading',
    color: '#549410',
    fontWeight: '300',
    children: 'Light Green Heading',
  },
};

export const CustomizedBoldSubtext: Story = {
  args: {
    variant: 'subtext',
    color: '#ef4444',
    fontWeight: 'bold',
    children: 'Urgent notice message.',
  },
};
