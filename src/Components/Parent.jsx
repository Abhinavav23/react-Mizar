import React from 'react'
import { Child } from './Child'

export const Parent = () => {
    const PrintName = (name) => {
        console.log(`my name is ${name}`);
    }
  return (
    <>
        <div>Parent</div>
        <Child name="Abhi" print={PrintName}/>
    </>
  )
}
