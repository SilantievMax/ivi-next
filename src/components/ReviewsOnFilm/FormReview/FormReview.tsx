import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';



import { Button } from '../../Button/Button';
import NameInput from '../ElementsForm/NameInput';
import ReviewInput from '../ElementsForm/ReviewInput';



import styles from './FormReview.module.scss';
import { IInputs } from '@/src/types/CommentsType';


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

  const [disable, setDisable] = useState(false)
  console.log(movieId)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IInputs>()

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
  }

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
    // if (value.length > 10) {
    //   setDisable(false)
    // } else {
    //   setDisable(true)
    // }
  }, [formName])

  return (
    <form className={styles.form} action='' onSubmit={handleSubmit(onSubmit)}>
      {/* <h3 className={styles.form__title}>Вша оценка</h3> */}
      {nameInput && <NameInput register={register} errors={errors} />}
      {nameReview && <ReviewInput register={register} errors={errors} placeholder={placeholder} />}
      <div className={styles.form__buttons}>
        <div>
          <Button size='border' children='Отменить' onClick={() => setShow(false)} />
        </div>
        <div>
          <Button color='red' children='Отправить' disable={disable} />
        </div>
      </div>
    </form>
  )
}

export default FormReview