import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Message, { MessageProps } from '@/src/components/Authorization/Message/Message'

describe('Message', () => {
  it('Message class', async () => {
    const baseProps: MessageProps = {
      position: 'left'
    }
    const { container } = render(<Message {...baseProps} />)
    expect(container.firstChild).toHaveClass('messages')
  })
  it('Message class', async () => {
    const baseProps: MessageProps = {
      position: 'right'
    }
    const { container } = render(<Message {...baseProps} />)
    expect(container.firstChild).toHaveClass('messages message2')
  })
})
