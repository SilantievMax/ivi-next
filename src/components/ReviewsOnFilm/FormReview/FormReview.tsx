import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../Button/Button'
import NameInput from '../ElementsForm/NameInput'
import ReviewInput from '../ElementsForm/ReviewInput'

import styles from './FormReview.module.scss'
import { usePersistForm } from './usePersistForm'
import { IInputs } from '@/src/types/CommentsType'

interface FormReviewProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  formName: 'Review' | 'Comment'
  idReview: number | null
  movieId: string | number | string[] | undefined
}

const FormReview = ({ setShow, formName, idReview, movieId }: FormReviewProps) => {
  const [nameInput, setNameInput] = useState(false)
  const [nameReview, setReviewInput] = useState(false)
  const [placeholder, setPlaceholder] = useState('')
  const FORM_DATA_KEY = `FORM_DATA_KEY_${idReview}`

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
    return { title: '', description: '' }
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    resetField,
    watch
  } = useForm<IInputs>({ defaultValues: getSavedData() })

  const onSubmit = (data: IInputs) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'POSITIVE', title: `${data.title ? data.title : ''}`, description: `${data.description}`, repliedOnComment: Number(`${idReview}`) })
    }
    console.log(requestOptions)
    fetch(`http://localhost:3004/comments/${movieId}`, requestOptions)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    setShow(false)
    resetField('description')
    resetField('title')
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
        setPlaceholder('Ваша рецензия')
        break
      case 'Comment':
        setReviewInput(true)
        setPlaceholder('Ваш коментарий')
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
          <Button size='border' children='Отменить' onClick={() => cancelComments()} />
        </div>
        <div>
          <Button disables={!isValid} type='submit' color='red' children='Отправить' />
        </div>
      </div>
    </form>
  )
}

export default FormReview
