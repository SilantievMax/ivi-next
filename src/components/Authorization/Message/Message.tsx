import React, { FC, ReactNode } from 'react'

import styles from './Message.module.scss'

interface MessageProps {
  messages?: string
  description?: string
  position: 'left' | 'right'
  children?: ReactNode
}

const Message: FC<MessageProps> = ({ messages, description, position, children }) => {
  return (
    <div className={`${styles.messages} ${position === 'right' ? styles.message2 : ''}`}>
      <h6>{messages}</h6>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default Message
