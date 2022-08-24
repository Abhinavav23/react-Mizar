import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../App'

export const NestedChildThree = () => {
    const ad = useContext(AdminContext)
  return (
    <div>NestedChildThree - {ad}</div>
  )
}
