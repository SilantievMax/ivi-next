import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from './RegisterForm.module.scss'

const RegisterForm: FC = () => {
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
              required: 'Заполните это поле',
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
              required: 'Заполните это поле',
              minLength: {
                value: 5,
                message: 'Пароль должен быть больше 5 символов'
              }
            })}
          />
        </label>
        <input type='submit' disabled={!isValid} />
      </form>
    </div>
  )
}

export default RegisterForm
