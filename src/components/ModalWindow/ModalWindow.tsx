import React, { FC } from 'react'

import styles from './ModalWindow.module.scss'
import { ModalWindowProps } from './ModalWindow.props'

const ModalWindow: FC<ModalWindowProps> = ({ onMouseLeave, children }) => {
  return (
    <div onMouseLeave={onMouseLeave} className={styles.sectin}>
      <div className={styles.line}></div>
      <div className={styles.continer}>{children}</div>
    </div>
  )
}

export default ModalWindow
