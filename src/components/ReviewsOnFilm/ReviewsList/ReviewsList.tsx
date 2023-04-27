import React, { useEffect, useState } from 'react';



import ReviewsItem from './ReviewsItem';
import { IReviews } from '@/src/types/CommentsType';


interface CommentListProps {
  comment: IReviews
  setSent: React.Dispatch<React.SetStateAction<boolean>>
}
const ReviewsList = ({ comment, setSent }: CommentListProps) => {
  const [replies, setReplies] = useState(false)
  useEffect(() => {
    if (comment.replies && comment.replies.length > 0) {
      setReplies(true)
    } else {
      setReplies(false)
    }
  }, [comment])
  return (
    <>
      <ReviewsItem comment={comment}  setSent={setSent}/>
      {replies &&
        comment.replies.map((replies, i) => (
          <div key={i} style={{ marginLeft: '30px' }}>
            <ReviewsList comment={replies} setSent={setSent}/>
          </div>
        ))}
    </>
  )
}

export default ReviewsList