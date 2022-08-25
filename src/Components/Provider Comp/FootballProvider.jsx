import React from 'react'
import { createContext } from 'react'

export const  FootballContext = createContext();
export const FootballProvider = (props) => {
    let player = ['Ronaldo', 'Messi', 'Pepe'];
  return (
    <FootballContext.Provider value={player}>
      {props.children}
    </FootballContext.Provider>
  )
}
