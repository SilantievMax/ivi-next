import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Input.module.scss'
import { IReviewsInput } from '@/src/types/CommentsType'

const NameInput = ({ register, errors, watch }: IReviewsInput) => {
  const { t } = useTranslation()
  return (
    <div className={styles.form__input}>
      <input
        {...register('title', { required: `${t('enter a name')}`, minLength: 3, maxLength: 50, pattern: { value: /^[а-яА-ЯёЁa-zA-Z0-9 !?:;"']+$/, message: `${t('invalid characters')}` } })}
        className={`${styles.form__input} ${styles.test}`}
        type='text'
      />
      {watch().title ? (
        <label className={`${styles.form__input_lable} ${styles.focus}`}>{t('title of the review')}</label>
      ) : (
        <label className={`${styles.form__input_lable}`}>{t('title of the review')}</label>
      )}
      {errors.title && <span className={styles.errorAlert}>{errors.title.message}</span>}
      {errors.title && errors.title.type === 'minLength' && <span className={styles.errorAlert}>{t('minimum of 2 characters')}</span>}
      {errors.title && errors.title.type === 'maxLength' && <span className={styles.errorAlert}>{t('maximum of 50 characters')}</span>}
    </div>
  )
}

export default NameInput
