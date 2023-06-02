import type { Meta, StoryObj } from '@storybook/react'
import { BsApple, BsTelephone, FaTelegramPlane } from 'react-icons/all'

import { Button } from './Button'

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
export const Gray: Story = {
  args: {
    children: 'Write in the chat',
    color: 'gray'
  }
}
export const DarkRed: Story = {
  args: {
    children: 'Pay for a subscription',
    color: 'darkRed'
  }
}
export const Gradient: Story = {
  args: {
    children: 'Pay for a subscription',
    color: 'gradient'
  }
}
export const MainGray: Story = {
  args: {
    children: 'Write in the chat',
    color: 'mainGray'
  }
}
export const lightGray: Story = {
  args: {
    children: 'Pay for a subscription',
    color: 'lightGray'
  }
}
export const RedOpacity: Story = {
  args: {
    children: 'Click my',
    color: 'redOpacity'
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
export const IconMessenger: Story = {
  args: {
    icon: <FaTelegramPlane fill='white' />,
    size: 'circle'
  }
}
export const Border: Story = {
  args: {
    children: 'Leave feedback',
    size: 'border'
  }
}
export const ReviewBtn: Story = {
  args: {
    children: 'Отзывы',
    quantity: 17,
    size: 'reviews'
  }
}
export const Comment: Story = {
  args: {
    children: 'Комментарии',
    size: 'comment'
  }
}
export const MoviesBtn: Story = {
  args: {
    children: 'Click my',
    size: 'moviesBtn'
  }
}
export const IconGoBack: Story = {
  args: {
    children: 'Go Back',
    size: 'iconGoBack'
  }
}
