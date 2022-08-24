import React from 'react'
import { NestedChildOne } from './NestedChildOne'

export const ParentComp = (props) => {
  return (
   <>
    <div>ParentComp</div>
    <br/>
    <NestedChildOne name={props.name}/>
    <br/>
   </>
  )
}
