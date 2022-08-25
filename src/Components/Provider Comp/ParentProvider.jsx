import React from 'react'
import { PlayerList } from './PlayerList'
import { PlayerList2 } from './PlayerList2'

export const ParentPlayer= (props) => {
  return (
   <>
    <div>ParentPlayer</div>
    <PlayerList/>
    <PlayerList2/>
    <div>{props.children}</div>
   </>
  )
}
