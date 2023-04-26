import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

import { Button } from '../Button/Button'

import styles from './Authorization.module.scss'
import LoginForm from './LoginForm/LoginForm'
import Message from './Message/Message'
import RegisterForm from './RegisterForm/RegisterForm'

const messagesDisctop: { messages?: string; description?: string; position: string; children?: ReactNode }[] = [
  { messages: 'Войдите или зарегистрируйтесь', description: 'чтобы пользоваться сервисом на любом устройстве', position: 'left' }
]

const Authorization: FC = () => {
  const [messages, setMessages] = useState(messagesDisctop)
  const [isForm, setisForm] = useState('')
  const [status, seStatus] = useState('Вход или регистрация')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
    if (messages.length > 20) {
      setMessages(messages.slice(-20))
    }
  }, [messages, isForm])

  const onClickLogin = () => {
    seStatus('Вход')
    setisForm('auth')
    setMessages([...messages, { messages: 'Войти', position: 'right' }, { messages: 'Вход:', description: 'Введите логин и пароль для входа', position: 'left' }])
  }

  const onClickAutn = () => {
    seStatus('Регистрация')
    setisForm('login')
    setMessages([
      ...messages,
      { messages: 'Регистрация', position: 'right' },
      { messages: 'Регистрация:', description: 'Введите свою почту и придумайте сложный пароль', position: 'left' }
    ])
  }

  const onClickBack = () => {
    seStatus('Вход или регистрация')
    setisForm('')
    setMessages([...messages, { messages: 'Вход или регистрация', position: 'right' }])
  }

  const openAgreement = () => {
    setisForm('')
    setMessages([
      ...messages,
      { messages: 'Прочитать соглашение', position: 'right' },
      {
        messages: 'Соглашение',
        children: (
          <span>
            <a href='https://www.ivi.ru/info/confidential' target='_blank'>
              Политика конфиденциальности
            </a>{' '}
            и{' '}
            <a href='https://www.ivi.ru/info/agreement  ' target='_blank'>
              Пользовательским соглашением
            </a>
          </span>
        ),
        position: 'left'
      }
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

  return (
    <div className={styles.continder}>
      <div className={styles.header}>
        {status}
        <span>&times;</span>
      </div>
      <div className={styles.chat}>
        {messages.map(item => (
          <Message children={item.children} position={item.position} messages={item.messages} description={item.description} />
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
            <Button onClick={onClickBack} children='Назад' color='darkRed' />
          </div>
        )}
        <div className={styles.btn}>
          <span onClick={openAgreement}>Соглашение! Нажми перед тем как входить</span>
        </div>
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default Authorization
