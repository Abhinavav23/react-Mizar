import React from 'react'
import { useContext } from 'react'
import { WinnerContext } from '../../AppV2'
import { UpcomingPlayer } from './UpcomingPlayer';

export const Player = () => {
    const winnerobj = useContext(WinnerContext);
    console.log('rendering Player');
  return (
    <>
        <h2>Player</h2>
        <div>Winner - {winnerobj.winner}</div>
        <button onClick={() => winnerobj.setWinner("Player")}>Update Winner</button>
        <UpcomingPlayer/>
    </>
  )
}
