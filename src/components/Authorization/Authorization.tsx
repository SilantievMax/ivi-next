import React, { FC, useEffect, useRef, useState } from 'react'

import { Button } from '../Button/Button'

import styles from './Authorization.module.scss'
import LoginForm from './LoginForm/LoginForm'
import Message from './Message/Message'
import RegisterForm from './RegisterForm/RegisterForm'

const messagesArr = [{ messages: 'Войдите или зарегистрируйтесь', description: 'чтобы пользоваться сервисом на любом устройстве' }]

const Authorization: FC = () => {
  const [messages, setMessages] = useState(messagesArr)
  const [isForm, setisForm] = useState('')

  const onClickAutn = () => {
    setisForm('auth')
    setMessages([...messages, { messages: 'Вход:', description: 'Введите логин и пароль для входа' }])
  }

  const onClickLogin = () => {
    setisForm('login')
    setMessages([...messages, { messages: 'Регистрация:', description: 'Введите свою почту и придумайте сложный пароль' }])
  }

  const onCliclForm = errors => {
    let text
    if (errors.login && errors.password) {
      text = `${errors.login.message} и ${errors.password.message}`
    } else if (errors?.login) {
      text = errors.login.message
    } else if (errors?.password) {
      text = errors.password.message
    }
    setMessages([...messages, { messages: 'Ошибка:', description: text }])
    console.log(errors)
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isForm])

  return (
    <div className={styles.continder}>
      <div className={styles.header}>
        Вход или регистрация
        <span>&times;</span>
      </div>
      <div className={styles.chat}>
        {messages.map(item => (
          <Message messages={item.messages} description={item.description} />
        ))}

        {isForm === 'auth' && <LoginForm />}
        {isForm === 'login' && <RegisterForm onCliclForm={onCliclForm} />}

        {isForm === '' ? (
          <div className={styles.btn}>
            <Button onClick={onClickLogin} children='Войти' color='darkRed' />
            <Button onClick={onClickAutn} children='Зарегистрироваться' color='darkRed' />
          </div>
        ) : (
          <div className={styles.btn}>
            <Button onClick={() => setisForm('')} children='Назад' color='darkRed' />
          </div>
        )}
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default Authorization
