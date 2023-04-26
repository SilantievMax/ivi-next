import React, { FC, useEffect, useRef, useState } from 'react'

import { Button } from '../Button/Button'

import styles from './Authorization.module.scss'
import LoginForm from './LoginForm/LoginForm'
import Message from './Message/Message'
import RegisterForm from './RegisterForm/RegisterForm'

const messagesDisctop: { messages: string; description?: string; position: string }[] = [
  { messages: 'Войдите или зарегистрируйтесь', description: 'чтобы пользоваться сервисом на любом устройстве', position: 'left' }
]

const Authorization: FC = () => {
  const [messages, setMessages] = useState(messagesDisctop)
  const [isForm, setisForm] = useState('')
  const messagesEndRef = useRef(null)

  const onClickLogin = () => {
    setisForm('auth')
    setMessages([...messages, { messages: 'войти', position: 'right' }, { messages: 'Вход:', description: 'Введите логин и пароль для входа', position: 'left' }])
  }

  const onClickAutn = () => {
    setisForm('login')
    setMessages([
      ...messages,
      { messages: 'регистрация', position: 'right' },
      { messages: 'Регистрация:', description: 'Введите свою почту и придумайте сложный пароль', position: 'left' }
    ])
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
    setMessages([...messages, { messages: 'Ошибка:', description: text, position: 'left' }])
    console.log(errors)
  }

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
          <Message position={item.position} messages={item.messages} description={item.description} />
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
            <Button
              onClick={() => {
                setisForm('')
                setMessages([...messages, { messages: 'назад', position: 'right' }])
              }}
              children='Назад'
              color='darkRed'
            />
          </div>
        )}
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default Authorization
