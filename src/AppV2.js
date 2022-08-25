import React, { createContext, useState } from 'react'
import { Person } from './Components/DynamicContext/Person'
import { FootballProvider } from './Components/Provider Comp/FootballProvider';
import { ParentPlayer } from './Components/Provider Comp/ParentProvider';
import { CricketProvider } from './Components/Provider Comp/CricketProvider';

export const WinnerContext = createContext();
export const AppV2 = () => {
    const [winner, setWinner] = useState('Choose Winner');
    console.log('rendering AppV2');
  return (
   <>
    <h1>AppV2</h1>
    <WinnerContext.Provider value={{winner, setWinner}}>
        <Person/>
    </WinnerContext.Provider>

    {/* <CricketProvider>
        <ParentPlayer/>
    </CricketProvider> */}


    {/* <FootballProvider>
        <ParentPlayer/> 
    </FootballProvider> */}


    {/* <PlayerProvider.Provider value={player}>
        <ParentPlayer/>
    </PlayerProvider.Provider> */}

    {/* <ParentPlayer/>  */}

    {/* <ParentPlayer name="name">
        <div>My name is this1</div>
        <div>My name is this2</div>
    </ParentPlayer> */}

   </>
  )
}


// used like self closing components
// use like opening and closing tags









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