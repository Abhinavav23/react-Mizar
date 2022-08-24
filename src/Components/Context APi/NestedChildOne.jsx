import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { NestedChildTwo } from './NestedChildTwo'

export const NestedChildOne = (props) => {
  const myUser = useContext(UserContext); // 
  return (
    <>
    <div>NestedChildOne</div>
    <div>Value from Context: {myUser.name}</div>
    <br/>
    <NestedChildTwo name={props.name}/>
    
    </>
  )
}
