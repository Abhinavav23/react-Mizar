import React from 'react'
import { useContext } from 'react'
import { CricketContext } from './CricketProvider';
import { FootballContext} from './FootballProvider';


export const PlayerList = () => {
  console.log('rendering');
  const cricket = useContext(CricketContext);
  const football = useContext(FootballContext)
  console.log(cricket);
  console.log(football);
  return (
    <div>PlayerList</div>
  )
}
