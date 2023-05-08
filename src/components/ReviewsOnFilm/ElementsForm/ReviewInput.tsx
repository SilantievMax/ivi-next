import React, { FC } from 'react';



import styles from './Input.module.scss';
import { IReviewsInput } from '@/src/types/CommentsType';
import { useTranslation } from 'react-i18next';


const ReviewInput = ({ register, errors, watch, placeholder }: IReviewsInput) => {
  const { t } = useTranslation()
  return (
    <div className={styles.form__textarea}>
      <textarea {...register('description', { required: `${t('write a review')}`, minLength: 20, maxLength: 1000 })} className={styles.form__textarea} />
      {watch().description ? (
        <label className={`${styles.form__input_lable} ${styles.focus}`}>{placeholder || t('your review')}</label>
      ) : (
        <label className={`${styles.form__input_lable} `}>{placeholder || t('your review')}</label>
      )}
      {errors.description && <span className={styles.errorAlertText}>{errors.description.message}</span>}
      {errors.description && errors.description.type === 'minLength' && <span className={styles.errorAlertText}>{t('minimum of 20 characters')}</span>}
      {errors.description && errors.description.type === 'maxLength' && <span className={styles.errorAlertText}>{t('maximum of 1000 characters')}</span>}
    </div>
  )
}

export default ReviewInput