import React, { useEffect, useState } from 'react'

import ReviewsItem from './ReviewsItem'
import { IReviews } from '@/src/types/CommentsType'

interface CommentListProps {
  comment: IReviews
}
const ReviewsList = ({ comment }: CommentListProps) => {
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
      <ReviewsItem comment={comment} />
      {replies &&
        comment.replies.map((replies, i) => (
          <div key={i} style={{ marginLeft: '30px' }}>
            <ReviewsList comment={replies} />
          </div>
        ))}
    </>
  )
}

export default ReviewsList
