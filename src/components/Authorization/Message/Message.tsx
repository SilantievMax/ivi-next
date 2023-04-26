import React, { FC } from 'react'

import styles from './Message.module.scss'

interface MessageProps {
  messages?: string
  description?: string
  position: 'left' | 'right'
}

const Message: FC<MessageProps> = ({ messages, description, position }) => {
  return (
    <div className={`${styles.messages} ${position === 'right' ? styles.message2 : ''}`}>
      <h6>{messages}</h6>
      <p>{description}</p>
    </div>
  )
}

export default Message
