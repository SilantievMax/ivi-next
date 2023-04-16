import type { Meta, StoryObj } from '@storybook/react';
import { BsApple, BsTelephone, FaTelegramPlane } from 'react-icons/all';

import { Button } from './Button';


const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Red: Story = {
  args: {
    children: 'Click my',
    color: 'red'
  }
}
export const RedOpacity: Story = {
  args: {
    children: 'Click my',
    color: 'redOpacity'
  }
}
export const Gray: Story = {
  args: {
    children: 'Write in the chat',
    color: 'gray'
  }
}
export const Gradient: Story = {
  args: {
    children: 'Pay for a subscription',
    color: 'gradient'
  }
}
export const Border: Story = {
  args: {
    children: 'Leave feedback',
    size: 'border'
  }
}
export const Image: Story = {
  args: {
    size: 'img',
    img: 'https://thumbs.dfs.ivi.ru/storage30/contents/3/7/4f749f1a9a540258a921cb75c1e92f.jpg/44x44/?q=85'
  }
}
export const Icon: Story = {
  args: {
    icon: <BsTelephone />,
    size: 'icon'
  }
}
export const IconMessenger: Story = {
  args: {
    icon: <FaTelegramPlane fill='white' />,
    size: 'circle'
  }
}
export const IconSmart: Story = {
  args: {
    icon: <BsApple fill='white' />,
    size: 'smart',
    children: (
      <>
        <p>Upload to</p>
        <h3>App Store</h3>
      </>
    )
  }
}
export const ReviewBtn: Story = {
  args: {
    children: 'Отзывы',
    quantity: 17,
    size: 'reviews'
  }
}