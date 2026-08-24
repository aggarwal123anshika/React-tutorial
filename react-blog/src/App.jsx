// // import User from './User'
// function App() {
//   return (
//     <>
//       <h1>First Component</h1>
//       <Fruit />
//       <Color />
//     </>
//   )
// }
// function Fruit() {
//   return (
//     <h1>Apple is a healthy fruit</h1>
//   )
// }
// function Color() {
//   return (
//     <h1>Pink is a wonderful color!</h1>
//   )
// }
// export default App;

import { useState } from "react";
import College from "./College";
import Props from "./Props";
import Student from "./Student";

// import Login,{Profile, Setting} from "./UserComponent";
// function App() {
//   return (
//     <>
//       <h1>Importing and Exporting Components</h1>
//       <Login />
//       <Profile />
//       <Setting />
//     </>
//   )
// }
// export default App;


// function App() {
//   const name = "Anshika Aggarwal";
//   const userObj = {
//     name : "anshu",
//     email : "anshi@gmail.com",
//     age : 20
//   }
//   const userArray = ['anshu', 'akshu'];
//   let x = 10;
//   let y = 20;
//   function fruit() {
//     return "Apple";
//   }
//   let path = "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2dzfGVufDB8fDB8fHww";
//   function sum(a, b) {
//       return a - b;
//   }
//   function operation(a, b, op) {
//     let result = 0;
//     if(op == '+') {
//         return a + b;
//     } else if(op == '-') {
//       return a - b;
//     } else {
//       return a * b;
//     }
//   }
//   return (
//     <>
//       <h1>JSX with curly braces.</h1>
//       <h1>My Name is : {name}</h1>
//       <h1>Addition of two number is:{x + y}</h1>
//       <h1>{fruit()}</h1>
//       <h1>{sum(300,100)}</h1>
//       <h1>{operation(20, 30, "")}</h1>
//       <h1>{userObj.email}, {userObj.name}, {userObj.age}</h1>
//       <h1>{userArray[1]}</h1>
//       <input type="text" value={name}/>
//       <img src={path}/>
//     </>
//   )
// }
// export default App;


// function App() {
//   function callFun() {
//     alert("function is called");
//   }
//   const fruit = (name) => {
//     alert(name);
//   }
//   return (
//     <>
//       <h1>Event and Function call</h1>
//       <button onClick={callFun}>Click Me</button><br></br>
//       <button onClick={() => fruit("banana")}>banana</button>
//       <Props/>
//     </>
//   )
// }
// export default App;

// import Props from "./Props";
// function App() {
  // let name = "Anshika Aggarwal";
//   return (
//     <>
//       <h1>learning props in React js </h1>
//       <Props name={"Anshu"} age={20}/>
//     </>
//   )
// }
// export default App

// OR METHOD OF DECLARING PROPS

function App() {
  // let userName = "Anshika Aggarwal";
  // let age = 20;
  let userObject = {
    name : "Anshu",
    age : "20"
  }

  let userObject1 = {
    name : "Vanshu",
    age : "90"
  }

  let userObject2 = {
    name : "Akshu",
    age : "70"
  }

  let collegeNames = ['Rkgit', 'Ims', 'Kiet', 'Rd', 'IIt'];
  const [student, setStudent] = useState("Anshi");
  return (
    <>
      <h1>props in react js</h1>
      {/* <Props name={userName} age={age}/> */}
       <Student name={student}/>
      <College name={collegeNames[0]} />
      <Props prop={userObject}/><hr></hr>
      <Props prop={userObject1}/><hr></hr>
      <Props prop={userObject2}/><hr></hr>
      
    </>
  )
}
export default App;