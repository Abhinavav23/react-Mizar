import React from 'react'
import { useContext } from 'react'
import { WinnerContext } from '../../AppV2'

export const Actors = () => {
   const winnerObj =  useContext(WinnerContext);
   console.log('rendering Actors');
  return (
   <>
    <h2>Actors</h2>
    <div>Winner: {winnerObj.winner}</div>
    <button onClick={() => winnerObj.setWinner('Actors')}>update winer</button>
   </>
  )
}
