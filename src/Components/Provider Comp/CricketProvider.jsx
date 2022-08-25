import React from 'react'
import { createContext } from 'react'

export const  CricketContext = createContext();
export const CricketProvider = (props) => {
    let player = ['Kohli', 'Rohit', 'Bumrah'];
  return (
    <CricketContext.Provider value={player}>
      {props.children}
    </CricketContext.Provider>
  )
}
