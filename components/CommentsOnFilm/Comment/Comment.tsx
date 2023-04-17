import React, { useEffect, useState } from 'react';



import stiles from './Comment.module.scss';
import { Button } from '@/components/Button/Button';
import VoteBtns from '@/components/VoteBtns/VoteBtns';


interface CommentProps {
  comment: any
}

const Comment = ({ comment }: CommentProps) => {
  const [show, setShow] = useState(false)

  return (
    <li className={stiles.container}>
      <header className={stiles.header}>
        <div className={stiles.header}>
          <h3 className={stiles.name}>{comment.name}</h3>
          <div className={stiles.date}>{comment.date}</div>
        </div>
        <VoteBtns votes={12} />
      </header>
      <div className={stiles.comment}>
        {!show ? (
          <>
            <p> {comment.comment && comment.comment.length >= 130 ? comment.comment.slice(0, 130) + ' ...' : comment.comment}</p>{' '}
            <div className={stiles.buttonText}>
              <Button size='comment' onClick={() => setShow(true)} children='Развернуть' />
            </div>{' '}
          </>
        ) : (
          <>
            <p>{comment.comment}</p>{' '}
            <div className={stiles.buttonText}>
              <Button size='comment' onClick={() => setShow(false)} children='Свернуть' />
            </div>{' '}
          </>
        )}
      </div>
      <div className={stiles.button}>
        <Button size='border' children='Ответить' />
      </div>
    </li>
  )
}

export default Comment