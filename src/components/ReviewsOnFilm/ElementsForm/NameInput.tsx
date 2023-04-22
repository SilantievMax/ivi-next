import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';



import styles from './Input.module.scss';
import { IReviewsInput } from '@/src/types/CommentsType';


const NameInput = ({ register, errors }: IReviewsInput) => (
  <div className={styles.form__input}>
    <input
      {...register('title', { required: 'Введите имя', minLength: 3, maxLength: 50, pattern: { value: /^[а-яА-ЯёЁa-zA-Z0-9 !?:;"']+$/, message: 'Недопустимые символы' } })}
      className={styles.form__input}
      type='text'
    />
    <label className={styles.form__input_lable}>Название рецензии</label>
    {errors.title && <span className={styles.errorAlert}>{errors.title.message}</span>}
    {errors.title && errors.title.type === 'minLength' && <span className={styles.errorAlert}>Минимум 2 символа</span>}
    {errors.title && errors.title.type === 'maxLength' && <span className={styles.errorAlert}>Максимум 50 символов</span>}
  </div>
)

export default NameInput