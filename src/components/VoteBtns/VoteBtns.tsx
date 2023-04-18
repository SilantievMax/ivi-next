import React, { FC } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';

import style from './VoteBtns.module.scss';

interface IVoteBtns {
  votes: any
}

const VoteBtns = ({ votes }: IVoteBtns) => {
  return (
    <div className={style.voteBtns}>
      <div className={style.like}>
        <BiLike className={style.likei} />
      </div>
      <div className={style.vote}>{votes}</div>
      <div className={style.like}>
        <BiDislike className={style.likei} />
      </div>
    </div>
  )
}

export default VoteBtns