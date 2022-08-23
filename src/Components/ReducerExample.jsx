import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

export const ReducerExample = () => {
    const reducer = (initialVal, action) => {
        console.log('action', action);
        console.log('initail val', initialVal);
        if(action === 'addition'){
            return initialVal+1
        }
        if(action === 'substract'){
            return initialVal-1
        }
    }

    const [countReducer, dispatch] = useReducer(reducer, 100);

    const [count, setCount] = useState(0);

    const addFive = () => {
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)


        // updating your value based pon prev value
        setCount((prev) => prev+1) // prev ---> 0 returned val -->1
        setCount((prev) => prev+1) // prev ---> 1 returned val ---> 2
        setCount((prev) => prev+1) // prev ---> 2 returned val ---> 3
        setCount((prev) => prev+1) // 3 ---> 4
        setCount((prev) => prev+1) //prev --> 4 returned --> 5

        // batching feature of react
    }

    const addFiveUsingDispatch = () => {
        dispatch('addition');
        dispatch('addition')
        dispatch('addition')
        dispatch('addition')
        dispatch('addition')
    }

    console.log('redering ReducerExample');
  return (
    <>
        
        <div>Usestate Exmaple</div>
        <div>use State Count: {count}</div>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={addFive}>+5</button>


        <h2>ReducerExample</h2>
        <div> use Reducer Count: {countReducer}</div>
        <button onClick={() => dispatch('addition')}>+1</button>
        <button onClick={() => dispatch('substract')}>-1</button>
        <button onClick={addFiveUsingDispatch}>+5</button>
    </>
  )
}
// step 1 ---> diaptch called with parameter 'addition'
// step 2 ---> diaptch internally calls reducer 
// step 3 ---> reducer recieved=s two values 1. initila value 2. while calling dispatch whatever is passed
// step 4 ---> reducer returns something ---> updated value
// step 5 ----> updated value gets saved and re rendering of component








// ReducerExample()
/*
function multiply(a){
    return 10*a
}

multiply(10); //100



const arr = [1,2,3,4,5] 
// output ---> 15

let sum  = arr.reduce((acc, curr) => {
    console.log('acc ----', acc);
    console.log('curr ----', curr);
    console.log('');

    //10 + 1 ---> 11+2 ---> 13+3 ----> 16+4 ----> 20+5
    return acc+curr // 1--> 11, 2---> 13
}, 10)

console.log(sum);
*/


// usage of useReducer
// 1. when ever you have a complex state
