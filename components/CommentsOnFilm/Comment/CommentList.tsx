import React, { useEffect, useState } from 'react';



import Comment from './Comment';


interface CommentListProps {
  comment: any
}
const CommentList = ({ comment }: CommentListProps) => {
  const [response, setResponse] = useState(false)
  useEffect(() => {
    if (comment.response.length > 0) {
        setResponse(true)
    }else{
        setResponse(false)
    }
  }, [comment])
  return (
    <>
      <Comment comment={comment} />
      {response && comment.response.map((comment: any)=> <div style={{marginLeft:'30px'}}><Comment comment={comment}/></div>  ) }
    </>
  )
}

export default CommentList