import React from 'react'
import { useContext } from 'react'
import {AdminContext, UserContext} from '../../App'
import { NestedChildThree } from './NestedChildThree';

export const NestedChildTwo = (props) => {
  const user = useContext(UserContext);
  console.log(user);
  const admin = useContext(AdminContext)
  return (
    <>
    <div>NestedChildTwo - </div>
    <div>Value using props: {props.name}</div>
    <div>user Name using context : {user.name}</div>
    <div>user Address using context : {user.address}</div>
    <div>admin value using context : {admin}</div>
    <br/>
    <NestedChildThree/>
    </>
  )
}
