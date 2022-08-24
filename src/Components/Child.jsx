import React from 'react'

export const Child = (props) => {
  return (
    <>
    <div>Child - {props.name}</div>
    <button onClick={() => props.print("Joe")}>send data to parent</button>
    </>
  )
}
