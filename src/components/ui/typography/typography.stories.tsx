import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['p', 'a', 'span', 'h1', 'h2', 'h3', 'h4'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'H1 title',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    as: 'h2',
    children: 'H2 title',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children: 'H3 title',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    as: 'h4',
    children: 'H4 title',
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    as: 'p',
    children: 'Body1 text',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    as: 'p',
    children: 'Body2 text',
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'p',
    children: 'Subtitle1 text',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    as: 'p',
    children: 'Subtitle2 text',
    variant: 'subtitle2',
  },
}

export const Overline: Story = {
  args: {
    as: 'p',
    children: 'Overline text',
    variant: 'overline',
  },
}
export const Caption: Story = {
  args: {
    as: 'span',
    children: 'Caption text',
    variant: 'caption',
  },
}
export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Link1 text',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Link2 text',
    variant: 'link2',
  },
}
