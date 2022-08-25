import React from 'react'
import { Actors } from './Actors'
import { Player } from './Player'

export const Person = () => {
  console.log('rendering Person');
  return (
   <>
    <div>Person</div>
    <Player/>
    <Actors/>
   </>
  )
}
