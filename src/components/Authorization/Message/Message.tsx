import React, { FC } from 'react'

import styles from './Message.module.scss'

interface MessageProps {
  messages?: string
  description?: string
}

const Message: FC<MessageProps> = ({ messages, description }) => {
  return (
    <div className={styles.messages}>
      <h6>{messages}</h6>
      <p>{description}</p>
    </div>
  )
}

export default Message
