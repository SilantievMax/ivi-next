import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';



import styles from '../RegisterForm/RegisterForm.module.scss';



import { signIn } from '@/src/services/auth.service';
import { setOpenAuth } from '@/src/store/reducers/authReducer';
import { AppDispatch } from '@/src/store/store';
import { IUser } from '@/src/types/Auth';


interface LoginFormFormProps {
  onClickForm?: any
}

const LoginForm: FC<LoginFormFormProps> = ({ onClickForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<IUser>({
    mode: 'onBlur'
  })
  const dispatch = useDispatch<AppDispatch>()
  const onSubmit = (data: IUser) => {
    dispatch(signIn(data))
    dispatch(setOpenAuth(false))
    reset()
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.inputs}>
          <input
            required
            type='text'
            {...register('email', {
              required: 'введите свою почту',
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'неверный формат почты'
              }
            })}
          />
          <span>Email:</span>
        </label>
        <label className={styles.inputs}>
          <input
            required
            type='text'
            {...register('login', {
              required: 'введите свой логин',
              minLength: {
                value: 3,
                message: 'логин должен быть больше 3 символов'
              }
            })}
          />
          <span>Login:</span>
        </label>
        <label className={styles.inputs}>
          <input
            required
            type='password'
            {...register('password', {
              required: 'введите свой пароль',
              minLength: {
                value: 4,
                message: 'пароль должен быть больше 4 символов'
              }
            })}
          />
          <span>Password:</span>
        </label>
        <input
          className={styles.btn}
          onClick={() => {
            onClickForm(errors)
          }}
          type='submit'
          value='Войти'
        />
      </form>
    </div>
  )
}

export default LoginForm