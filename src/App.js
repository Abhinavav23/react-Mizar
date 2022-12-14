
import { createContext, useReducer, useState } from 'react';
import './App.css';
import { ParentComp } from './Components/Context APi/ParentComp';
import { Parent } from './Components/Parent';
import { ParentPlayer } from './Components/Provider Comp/ParentProvider';
import { ReducerExample } from './Components/ReducerExample';

export const UserContext = createContext(); // 1. creating a conext
export const AdminContext  = createContext();
function App() {
  // let name = "abhinav"
  let [name, setName] = useState('abhinav');
  let [name1, setName1] = useState('abhi');
  // const [value, dispatch] = useReducer(reducer, initailState);
  // const [a1, a2] = [1, 2]
  // console.log(name);
  // console.log(setName);

  const updateName = () => {
    console.log(name); // abhinav
    console.log('updating name');
    setName('Instructor'); //asyncrounous code --> gets saved in ther browser
    setName1('test');

    // batching of react state update calls --> to improve the performance


    // setTimeout(() => {
    //   console.log('qwefer');
    // })
    // name = 'Instructor'
    console.log(name); // abhinav
  }

  console.log('rendering');
  let user = "User"

  return (
    <div className="App">
      <main className="App-header">
        <h2>App compoennt</h2>
        {/* <div>{name}</div> 
        <div>{2+2}</div>
        <div>classs</div>
        <button onClick={updateName}>update Name</button> */}
        {/* <ReducerExample/> */}

      
        <UserContext.Provider value={{name: 'Abhinav', address: 'India'}}>
          <AdminContext.Provider value={"Administrator"}>
            <ParentComp name={user}/>
          </AdminContext.Provider>
        </UserContext.Provider>

        


        {/* <AdminContext.Provider value={"Administrator"}>
          <Seller/>
        </AdminContext.Provider> */}
        <Parent/>
      </main>
    </div>
  );
}

export default App;


/*
// JSX ---> javascript and XML
function printName(){
  return 'Instructor'
}

const value = printName();

console.log(value); // 100

// const a = '123'


// let a1;
// let a2;
// let a3;
let arr = [100, 200, 300]

// a1 = arr[0]
// a2 = arr[1]
// a3 = arr[2]
// console.log(a1, a2, a3);

let [a1, a2, a3] = arr
console.log(a1, a2, a3);

// const [a,b] = [100, 200]
// console.log(a);
// console.log(b);


function printName(){
  return 'Instructor'
}

const value = printName();
console.log(value);


console.log('start'); //1
setTimeout(() => {
  console.log('from timer'); //3
}, 0)
console.log('end'); //2

// sync code ---> 
*/