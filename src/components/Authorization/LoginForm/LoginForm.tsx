import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '../RegisterForm/RegisterForm.module.scss'

interface LoginFormFormProps {
  onCliclForm?: any
}

const LoginForm: FC<LoginFormFormProps> = ({ onCliclForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
    reset()
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.inputs}>
          <input
            required='required'
            type='text'
            {...register('login', {
              required: 'введите свою почту',
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'неверный формат почты'
              }
            })}
          />
          <span>Login:</span>
        </label>
        <label className={styles.inputs}>
          <input
            required='required'
            type='password'
            {...register('password', {
              required: 'введите свой пароль',
              minLength: {
                value: 5,
                message: 'пароль должен быть больше 5 символов'
              }
            })}
          />
          <span>Password:</span>
        </label>
        <input
          className={styles.btn}
          onClick={() => {
            onCliclForm(errors)
          }}
          type='submit'
          value='Войти'
        />
      </form>
    </div>
  )
}

export default LoginForm
