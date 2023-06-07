import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';



import { Button } from '../../Button/Button';
import NameInput from '../ElementsForm/NameInput';
import ReviewInput from '../ElementsForm/ReviewInput';



import styles from './FormReview.module.scss';
import { usePersistForm } from './usePersistForm';
import { IAxiosRequestConfigComent, addedComent } from '@/src/services/comments-service/comments.service';
import { IInputs, IReviews } from '@/src/types/CommentsType';


export interface FormReviewProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  formName: 'Review' | 'Comment'
  idReview: number | null
  movieId: string | number | string[] | undefined
  comment?: IReviews
  changing: boolean
  setSent: React.Dispatch<React.SetStateAction<boolean>>
}

const FormReview = ({ changing, comment, setShow, formName, idReview, setSent, movieId }: FormReviewProps) => {
  const [nameInput, setNameInput] = useState(false)
  const [nameReview, setReviewInput] = useState(false)
  const [placeholder, setPlaceholder] = useState('')
  const FORM_DATA_KEY = `FORM_DATA_KEY_${idReview}`
  const { t } = useTranslation()
  const COMMENT_URL = process.env.COMMENT_URL

  const getSavedData = (): IInputs => {
    let data = localStorage.getItem(FORM_DATA_KEY)
    if (data) {
      try {
        data = JSON.parse(data)
      } catch (err) {
        console.log(err)
      }
      return data as IInputs
    }

    if (changing) {
      return { title: '', description: `${comment?.description}` }
    }
    return { title: '', description: '' }
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    resetField,
    watch
  } = useForm<IInputs>({ defaultValues: getSavedData() })

  const onSubmit = async (data: IInputs) => {
    
    let requestOptions = {} as IAxiosRequestConfigComent
    switch (changing) {
      case true:
        requestOptions = {
          method: 'PUT',
          url: `${COMMENT_URL}/comments/comment/${idReview}`,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ type: 'POSITIVE', title: `${data.title ? data.title : ''}`, description: `${data.description}` })
        }
        break
        case false:
        requestOptions = {
          method: 'POST',
          url: `${COMMENT_URL}/comments/${movieId}`,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            type: 'POSITIVE',
            title: `${data.title === '' ? '' : data.title}`,
            description: `${data.description}`,
            repliedOnComment: Number(`${data.title === '' ? idReview : null}`)
          })
        }
        break
      }
      console.log(changing, data, requestOptions)
      await addedComent(requestOptions)
      setShow(false)
    resetField('description')
    resetField('title')
    setSent(true)
    localStorage.removeItem(FORM_DATA_KEY)
  }
  const cancelComments = () => {
    setShow(false)
    localStorage.removeItem(FORM_DATA_KEY)
  }
  usePersistForm({ value: watch(), localStorageKey: FORM_DATA_KEY })

  useEffect(() => {
    switch (formName) {
      case 'Review':
        setNameInput(true)
        setReviewInput(true)
        setPlaceholder(`${t('your review')}`)
        break
      case 'Comment':
        setReviewInput(true)
        setPlaceholder(`${t('your comment')}`)
        break
      default:
        setNameInput(true)
        setReviewInput(true)
        break
    }
  }, [formName, onSubmit])

  return (
    <form className={styles.form} action='' onSubmit={handleSubmit(onSubmit)}>
      {nameInput && <NameInput register={register} errors={errors} watch={watch} />}
      {nameReview && <ReviewInput register={register} errors={errors} placeholder={placeholder} watch={watch} />}
      <div className={styles.form__buttons}>
        <div>
          <Button size='border' children={t('cancel')} onClick={() => cancelComments()} />
        </div>
        <div>
          <Button disables={!isValid} type='submit' color='red' children={t('send')} />
        </div>
      </div>
    </form>
  )
}

export default FormReview