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
    formState: { errors, isValid },
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
          Login: {errors?.login && errors?.login?.message}
          <input
            {...register('login', {
              required: 'Напишите свою почту',
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'Неверный формат почты'
              }
            })}
          />
        </label>
        <label>
          password: {errors?.password && errors?.password?.message}
          <input
            type='password'
            {...register('password', {
              required: 'Напишите пароль',
              minLength: {
                value: 5,
                message: 'Пароль должен быть больше 5 символов'
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
