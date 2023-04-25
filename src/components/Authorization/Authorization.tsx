import React, { FC } from 'react'

import styles from './Authorization.module.scss'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'

const Authorization: FC = () => {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
    </div>
  )
}

export default Authorization
