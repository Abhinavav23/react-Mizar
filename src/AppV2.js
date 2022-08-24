import React, { createContext, useState } from 'react'
import { Person } from './Components/DynamicContext/Person'

export const WinnerContext = createContext()
export const AppV2 = () => {
    const [winner, setWinner] = useState('Choose Winner');
  return (
   <>
    <h1>AppV2</h1>
    <WinnerContext.Provider value={{winner, setWinner}}>
        <Person/>
    </WinnerContext.Provider>
   </>
  )
}

// when parent componet re renders all its child component also re renders

/*
let name = 'Abhinav';
let address = 'India';

const obj = {
    name: name,
    address: address
}

const objshorthand = {name, address}

console.log(obj);
console.log(objshorthand);
*/