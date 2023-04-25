import React, { FC } from 'react'
import styles from './Input.module.scss'
import { IReviewsInput } from '@/src/types/CommentsType'

const ReviewInput = ({ register, errors,watch, placeholder }: IReviewsInput) => {
  return (
    <div className={styles.form__textarea}>
      <textarea
        {...register('description', { required: 'Напишите рецензию', minLength: 20, maxLength: 1000 })}
        className={styles.form__textarea}
      />
      {watch().description ? <label className={`${styles.form__input_lable} ${styles.focus}`}>{placeholder || 'Ваша рецензия'}</label> : <label className={`${styles.form__input_lable} `}>{placeholder || 'Ваша рецензия'}</label>}
      {errors.description && <span className={styles.errorAlertText}>{errors.description.message}</span>}
      {errors.description && errors.description.type === 'minLength' && <span className={styles.errorAlertText}>Минимум 20 символа</span>}
      {errors.description && errors.description.type === 'maxLength' && <span className={styles.errorAlertText}>Максимум 1000 символов</span>}
    </div>
  )
}

export default ReviewInput
