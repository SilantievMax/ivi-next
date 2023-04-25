import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from './RegisterForm.module.scss'

interface RegisterFormProps {
  setErrors?: any
  onCliclForm?: any
}

const RegisterForm: FC<RegisterFormProps> = ({ setErrors, onCliclForm }) => {
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
        <label>
          Login:
          <input
            {...register('login', {
              required: 'введите свою почту',
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'неверный формат почты'
              }
            })}
          />
        </label>
        <label>
          password:
          <input
            type='password'
            {...register('password', {
              required: 'введите свой пароль',
              minLength: {
                value: 5,
                message: 'пароль должен быть больше 5 символов'
              }
            })}
          />
        </label>
        <input
          onClick={() => {
            onCliclForm(errors)
          }}
          type='submit'
        />
      </form>
    </div>
  )
}

export default RegisterForm
