// // // // import User from './User'
// // // function App() {
// // //   return (
// // //     <>
// // //       <h1>First Component</h1>
// // //       <Fruit />
// // //       <Color />
// // //     </>
// // //   )
// // // }
// // // function Fruit() {
// // //   return (
// // //     <h1>Apple is a healthy fruit</h1>
// // //   )
// // // }
// // // function Color() {
// // //   return (
// // //     <h1>Pink is a wonderful color!</h1>
// // //   )
// // // }
// // // export default App;

import { useRef, useState, useTransition } from "react";

// // import { useEffect, useState } from "react";
// // import Counter from "./Counter";
// // // import Collegee from "./Collegee";

// // // import { useState } from "react";
// // // import Clock from "./Clock";

// // // import { useState } from "react";
// // // import Checkboxes from "./CheckBoxes";
// // // import Userr from "./Userr";
// // // import College from "./College";
// // // import Props from "./Props";
// // // import Student from "./Student";
// // // import Wrapper from "./Wrapper";

// // // import Login,{Profile, Setting} from "./UserComponent";
// // // function App() {
// // //   return (
// // //     <>
// // //       <h1>Importing and Exporting Components</h1>
// // //       <Login />
// // //       <Profile />
// // //       <Setting />
// // //     </>
// // //   )
// // // }
// // // export default App;


// // // function App() {
// // //   const name = "Anshika Aggarwal";
// // //   const userObj = {
// // //     name : "anshu",
// // //     email : "anshi@gmail.com",
// // //     age : 20
// // //   }
// // //   const userArray = ['anshu', 'akshu'];
// // //   let x = 10;
// // //   let y = 20;
// // //   function fruit() {
// // //     return "Apple";
// // //   }
// // //   let path = "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2dzfGVufDB8fDB8fHww";
// // //   function sum(a, b) {
// // //       return a - b;
// // //   }
// // //   function operation(a, b, op) {
// // //     let result = 0;
// // //     if(op == '+') {
// // //         return a + b;
// // //     } else if(op == '-') {
// // //       return a - b;
// // //     } else {
// // //       return a * b;
// // //     }
// // //   }
// // //   return (
// // //     <>
// // //       <h1>JSX with curly braces.</h1>
// // //       <h1>My Name is : {name}</h1>
// // //       <h1>Addition of two number is:{x + y}</h1>
// // //       <h1>{fruit()}</h1>
// // //       <h1>{sum(300,100)}</h1>
// // //       <h1>{operation(20, 30, "")}</h1>
// // //       <h1>{userObj.email}, {userObj.name}, {userObj.age}</h1>
// // //       <h1>{userArray[1]}</h1>
// // //       <input type="text" value={name}/>
// // //       <img src={path}/>
// // //     </>
// // //   )
// // // }
// // // export default App;


// // // function App() {
// // //   function callFun() {
// // //     alert("function is called");
// // //   }
// // //   const fruit = (name) => {
// // //     alert(name);
// // //   }
// // //   return (
// // //     <>
// // //       <h1>Event and Function call</h1>
// // //       <button onClick={callFun}>Click Me</button><br></br>
// // //       <button onClick={() => fruit("banana")}>banana</button>
// // //       <Props/>
// // //     </>
// // //   )
// // // }
// // // export default App;

// // // import Props from "./Props";
// // // function App() {
// //   // let name = "Anshika Aggarwal";
// // //   return (
// // //     <>
// // //       <h1>learning props in React js </h1>
// // //       <Props name={"Anshu"} age={20}/>
// // //     </>
// // //   )
// // // }
// // // export default App

// // // OR METHOD OF DECLARING PROPS

// // // function App() {
// //   // let userName = "Anshika Aggarwal";
// //   // let age = 20;
// //   // let userObject = {
// //   //   name : "Anshu",
// //   //   age : "20"
// //   // }

// //   // let userObject1 = {
// //   //   name : "Vanshu",
// //   //   age : "90"
// //   // }

// //   // let userObject2 = {
// //   //   name : "Akshu",
// //   //   age : "70"
// //   // }

// //   // let collegeNames = ['Rkgit', 'Ims', 'Kiet', 'Rd', 'IIt'];
// //   // const [student, setStudent] = useState("Anshi");
// //   // return (
// //   //   <>
// //   //     <h1>props in react js</h1>
// //       {/* <Props name={userName} age={age}/> */}
// //       //  <Student name={student}/>
// //       // <College name={collegeNames[0]} />
// //       // <Props prop={userObject}/><hr></hr>
// //       // <Props prop={userObject1}/><hr></hr>
// //       // <Props prop={userObject2}/><hr></hr>
      
// // //     </>
// // //   )
// // // }
// // // export default App;


// // // function App() {
// // //   return (
// // //     <>
// // //       <h1>props in react js</h1>
// // //       <Wrapper color="orange">
// // //         <h1>Hello Everyone</h1>
// // //       </Wrapper>
// // //       <Wrapper>
// // //         <h1>Hello Anshika</h1>
// // //         <h2 style={{color : "blue"}}>Please login</h2>
// // //       </Wrapper>
// // //     </>
// // //   )
// // // }
// // // export default App;


// // // function App() {
// // //   const [value,setValue] = useState("Anshika Aggarwal");
// // //   return (
// // //     <>
// // //       <h1>Get Input field value</h1>
// // //       <input type="text" onChange={(event) => setValue(event.target.value)} placeholder="Enter user name"/>
// // //       <h1>{value}</h1>
// // //       <button onClick={() => setValue("")}>Clear Value</button>
// // //     </>
// // //   )
// // // }
// // // export default App;

// // // HANDLE CHECKBOX IN REACT

// // // function App() {
// // //   const [name, setName] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   return (
// // //     <>
// // //       <h1>Controller Component</h1>
// // //       <form action="" method="get">
// // //         <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your Name"/>
// // //         <br /> <br /> 
// // //       <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password"/>
// // //         <br /> <br />
// // //       <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email"/>
// // //         <br /> <br />
// // //         <button>Submit</button>

// // //         <button onClick={() => {setEmail('');setName('');setPassword('');}}>Clear</button>
// // //         <h3>{name}</h3>
// // //         <h3>{password}</h3>
// // //         <h3>{email}</h3>
// // //       </form>
// // //     </>
// // //   )
// // // }
// // // export default App;

// // // function App() {
// // //   const userNames = ['anshu','vanshu','anshi','vanshi'];
// // //   const userData = [
// // //     {
// // //       name : 'anshu',
// // //       age : '20',
// // //       email : 'anshu@gmail.com',
// // //       id : 1
// // //     },
// // //     {
// // //       name : 'vanshu',
// // //       age : '22',
// // //       email : 'vanshu@gmail.com',
// // //       id : 1
// // //     },
// // //     {
// // //       name : 'anshi',
// // //       age : '21',
// // //       email : 'anshi@gmail.com',
// // //       id : 1
// // //     },
// // //     {
// // //       name : 'vanshi',
// // //       age : '23',
// // //       email : 'vanshi@gmail.com',
// // //       id : 1
// // //     }
// // //   ]
// // //   return (
// // //     <div>
// // //       {/* <h1>Handle CheckBox in React Js</h1> */}
// // //       {/* <Checkboxes /> */}
// // //       {/* <h1>Loop in JSX with Map Function</h1> */}
// // //       <h1>Reuse Component in Loop</h1>
// // //       {userData.map((user) => (
// // //         <Userr key={user.id} {...user} />
// // //       ))}
// // //       {/* <table border="1">
// // //         <thead>
// // //           <tr>
// // //             <td>Id</td>
// // //             <td>Name</td>
// // //             <td>Age</td>
// // //             <td>Email</td>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {
// // //             userData.map((user) => (
// // //               <tr>
// // //               <td>{user.id}</td>
// // //               <td>{user.name}</td>
// // //               <td>{user.age}</td>
// // //               <td>{user.email}</td>
// // //               </tr>
// // //             ))
// // //           }
// // //         </tbody>

// // //       </table> */}
// // //       {/* <h1>Dummy Data</h1>
// // //       <table border="1">
// // //         <thead>
// // //           <tr>
// // //             <td>Id</td>
// // //             <td>Name</td>
// // //             <td>Age</td>
// // //             <td>Email</td>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           <tr>
// // //             <td>1</td>
// // //             <td>Anshu</td>
// // //             <td>20</td>
// // //             <td>anshu@gmail.com</td>
// // //           </tr>
// // //           <tr>
// // //             <td>1</td>
// // //             <td>Anshu</td>
// // //             <td>20</td>
// // //             <td>anshu@gmail.com</td>
// // //           </tr>
// // //           <tr>
// // //             <td>1</td>
// // //             <td>Anshu</td>
// // //             <td>20</td>
// // //             <td>anshu@gmail.com</td>
// // //           </tr>
// // //           <tr>
// // //             <td>1</td>
// // //             <td>Anshu</td>
// // //             <td>20</td>
// // //             <td>anshu@gmail.com</td>
// // //           </tr>
// // //         </tbody>
// // //       </table> */}
// // //       <Clock />
// // //     </div>
// // //   )
// // // }
// // // export default App;


// // // CLOCK CODE

// // // import { useState } from "react";
// // // import Clock from "./Clock";

// // // function App() {
// // //   const [color, setColor] = useState("green");

// // //   return (
// // //     <div>
// // //       <h1>Digital Clock in React Js</h1>
// // //       <select onChange={(event) => setColor(event.target.value)}>
// // //         <option value="red">Red</option>
// // //         <option value="blue">Blue</option>
// // //         <option value="orange">Orange</option>
// // //         <option value="green">Green</option>
// // //       </select>
// // //       {/* Pass color to Clock */}
// // //       <Clock color={color} />
// // //     </div>
// // //   );
// // // }

// // // export default App;







// // // ARRAY NESTED LOOPING WITH COMPONENT

// // // function App() {
// // //   const collegeData = [
// // //     {
// // //       name: "IET Alwar",
// // //       city: "Alwar",
// // //       website: "www.iet.com",
// // //       student: [
// // //         { name: "Anshika", age: "20", email: "anshika@gmail.com" },
// // //         { name: "Vanshika", age: "22", email: "vanshika@gmail.com" },
// // //         { name: "Asha", age: "23", email: "asha@gmail.com" }
// // //       ]
// // //     },
// // //     {
// // //       name: "IIT Delhi",
// // //       city: "Delhi",
// // //       website: "www.iit.com",
// // //       student: [
// // //         { name: "Anshika", age: "20", email: "anshika@gmail.com" },
// // //         { name: "Vanshika", age: "22", email: "vanshika@gmail.com" },
// // //         { name: "Asha", age: "23", email: "asha@gmail.com" }
// // //       ]
// // //     },
// // //     {
// // //       name: "KCIET Nisar",
// // //       city: "Nisar",
// // //       website: "www.kciet.com",
// // //       student: [
// // //         { name: "Anshika", age: "20", email: "anshika@gmail.com" },
// // //         { name: "Vanshika", age: "22", email: "vanshika@gmail.com" },
// // //         { name: "Asha", age: "23", email: "asha@gmail.com" }
// // //       ]
// // //     }
// // //   ];

// // //   return (
// // //     <div>
// // //       {collegeData.map((college, index) => (
// // //         <div key={index}>
// // //           <Collegee college={college} />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default App;




// // //  HANDLE PROPS SIDE EFFECTS WITH USEEFFECT IN COMPONENT

// // // function App() {
// // //   const [counter, setCounter] = useState(0);
// // //   const [data, setData] = useState(0);
// // //   useEffect(() => {
// // //     // callOnce();
// // //     counterFunction();
// // //   },[counter])

  
// // //   function counterFunction() {
// // //     console.log("counterFunction",counter);
// // //   }
// // //   function callOnce() {
// // //     console.log("callOnce function called");
// // //   }
  
// // //   return (
// // //     <div>
// // //       <h1>useEffect Hook</h1>
// // //       <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
// // //       <button onClick={() => setData(data+1)}>Data {data}</button>
// // //     </div>
// // //   ) 
// // // }
// // // export default App;









// // // USE EFFECT HOOK FOR LIFE CYCLE METHODS IN REACT JS

// // // // function App() {
// // // //   const [count,setCount] = useState(0);
// // // //   const [data, setData] = useState(0);
// // // //   const [display, setDisplay] = useState(true);
// // // //   return(
// // // //     <div>
// // // //       {
// // // //         display?  <Counter count={count} data={data}/> : null
// // // //       }
// // // //       {/* <h1>Handle Props Side Effects with useEffect in component</h1> */}
     
// // // //       <button onClick={() => setCount(count+1) }>Counter</button>
// // // //       <button onClick={() => setData(data+1) }>Data</button>
// // // //       <button onClick={() => setDisplay(!display)}>Toggle</button>
// // // //     </div>
// // // //   )
// // // // }
// // // // export default App;

// // // // INLINE STYLE IN REACT

// // // function App() {
// // //   const cardStyle = {
// // //     width : "400px",
// // //     boxShadow : '1px 2px 3px 4px #48444456',
// // //     border : '1px solid #1310103b',
// // //     margin : '10px'
// // //   }
// // //   return (
// // //     <>
// // //       <h1 style={{color : 'red', backgroundColor : 'black', width : "500px"}}>Hello World in inline style elements</h1>
// // //       <div style={{display : 'flex'}}>
// // //       <div style={cardStyle}>
// // //         <img style={{width : '400px'}} src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt=""></img>
// // //         <div style={{padding : '15px'}}>
// // //           <h4>Anshika Aggarwal</h4>
// // //           <p>Software Developer</p>
// // //         </div>
// // //         <div style={cardStyle}>
// // //         <img style={{width : '400px'}} src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt=""></img>
// // //         <div style={{padding : '15px'}}>
// // //           <h4>Anshika Aggarwal</h4>
// // //           <p>Software Developer</p>
// // //         </div>
// // //         <div style={cardStyle}>
// // //         <img style={{width : '400px'}} src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt=""></img>
// // //         <div style={{padding : '15px'}}>
// // //           <h4>Anshika Aggarwal</h4>
// // //           <p>Software Developer</p>
// // //         </div>
// // //         <div style={cardStyle}>
// // //         <img style={{width : '400px'}} src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt=""></img>
// // //         <div style={{padding : '15px'}}>
// // //           <h4>Anshika Aggarwal</h4>
// // //           <p>Software Developer</p>
// // //         </div>
// // //       </div>
// // //       </div>
// // //     </div>
// // //   )

// // // export default App;



// // function App() {
// //   const [cardStyle, setCardStyle] = useState(
// //       {
// //     width: "400px",
// //     boxShadow: "1px 2px 3px 4px #484445",
// //     border: "1px solid #131013",
// //     margin: "10px"
// //       }
// //   )
// //   const [textColor, setTextColor] = useState('red');
// //   const [grid, setGrid] = useState(true)
// //   const updateTheme = (bgColor, textColor) => {
// //     setCardStyle({...cardStyle, backgroundColor : bgColor})
// //     setTextColor(text)
// //   }
// //   return (
// //     <>
// //       <h1
// //         style={{
// //           color: "red",
// //           backgroundColor: "black",
// //           width: "530px"
// //         }}
// //       >
// //         Dynamic and Conditional Inline style
// //       </h1>
// //       <button onClick={() => updateTheme('gray', 'green')}>Grey Theme</button>
// //       <button onClick={() => updateTheme('white', 'black')}>Default Theme</button>
// //         <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>
// //       <div style={{ display: grid? 'flex' : 'block' , flexWrap : 'wrap'}}>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" ,color : textColor}}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //         <div style={cardStyle}>
// //           <img
// //             style={{ width: "400px" }}
// //             src="https://images.unsplash.com/photo-1782226829785-0a7f9568c5ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
// //             alt="Profile"
// //           />

// //           <div style={{ padding: "15px" }}>
// //             <h4>Anshika Aggarwal</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>

// //       </div>
// //     </>
// //   );
// // }

// // export default App;




// // EXTERNAL STYLE IN CSS
// import './css/style.css';
// function App() {
//   return (
//     <>
//     <h1 className="heading">External Style</h1>
//     <div>
//       <div>
//         <img className='img-style' src="https://images.unsplash.com/photo-1789237796268-935a21ad315c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"></img>
//       </div>
//       <div>
//         <h4>Anshika Aggarwal</h4>
//         <p>Software Developer</p>
//       </div>
//     </div>
//     </>
//   )
// }
// export default App;


// STYLED COMPONENTS 
// import UserProfile from "./UserProfile";
// function App() {
//   return (
//     <>
//       <h1>Style Component in CSS</h1>
//       <UserProfile />
//     </>
//   )
// }
// export default App;

// import styled from "styled-components";
// import {Button} from 'react-bootstrap';
// function App() {
// //   const Heading = styled.h2`
// //   color : red;
// //   border : 1px solid black;
// //   border-radius : 10px;
// //   width : 200px;
// //   margin : 20px;
// //   padding : 20px;
// //   display : flex;
// //  `
//  const Heading = styled.h2({
//   color : 'red',
//   border : '1px solid black',
//   borderRadius : '10px',
//   width : '200px',
//   margin : '20px',
//   padding : '20px'
//  })
//  const Button = styled.button`
//  color : black;
//  border : 2px solid red;
//  border-radius : 20px;
//  width : 150px;
//  margin : 20px;
//  padding : 15px;
//  background-color : #e88d42
//  `
//   return (
//       <>
//         <h1>Styled Component with React js</h1>
//         <Heading>Hello Heading</Heading>
//         <Heading>Hello Heading 2</Heading>
//         <Heading>Hello Heading 3</Heading>
//         <Heading>Hello Heading 4</Heading>
//         <Button>Add To Cart🛒</Button>
//         <Button>Add To Cart🛒</Button>
//         <Button>Add To Cart🛒</Button>
//         <Button>Add To Cart🛒</Button>
//       </>
//   )
// }
// export default App;


// ADD BOOTSTRAP WITH REACT JS
// import {Button} from 'react-bootstrap';
// import { Alert } from "react-bootstrap";
// function App() {

//   return (
//     <>
//       <h1>Add Bootstrap in React JS</h1>
//       <Button onClick={() => alert("bootstrap applied")} variant="danger">Okay</Button><br />
//       <Button variant="primary">Okay</Button><br />
//       <Button variant="warning">Okay</Button><br />
//       <Button variant="success">Okay</Button><br />
//       <Alert variant="success">hello, BT installed</Alert>
//     </>
//   )
// }
// export default App;


// USEREF HOOK

// import { useRef } from "react";
// function App() {
//   const inputRef = useRef(null);
//   const h1Ref = useRef(null);
//   const inputHandler = () => {
//     console.log(inputRef);
//     inputRef.current.focus()
//     inputRef.current.style.color = 'red'
//     inputRef.current.password = "enter password"
//     inputRef.current.value = "123"
//   }
//   const toggleHandler = () => {
//     if (inputRef.current.style.display != 'none') {
//       inputRef.current.style.display = 'none'
//     } else {
//       inputRef.current.style.display = 'inline'
//     }
//   }
//   const h1handler = () => {
//     h1Ref.current.style.color = "pink"
//   }
//   return (
//     <>
//       <h1>useRef</h1>
//       <button onClick={toggleHandler}>Toggle</button>
//       <input ref={inputRef} type="text" placeholder="Enter user name"/>
//       <button onClick={inputHandler}>Focus on Input Field</button>

//       <h1 ref={h1Ref}>Anshika Aggarwal</h1>
//       <button onClick={h1handler}>HaNdler</button>
//     </>

//   )
// }
// export default App;

// UNCONTROLLED COMPONENT

// function App() {

//   const userRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleForm = (event) => {
//     event.preventDefault();
//     const user = document.querySelector("#user").value;
//     console.log(user);
//     const password = document.querySelector("#password").value;
//     console.log(password);
//   }

//   const handleFormRef = (event) => {
//     event.preventDefault();
//     const user = userRef.current.value
//     const password = passwordRef.current.value
//     console.log("handleFormRef", user, password);

//   }
//   return (
//     <>
//       <h1>Uncontrolled Component</h1>
//       <form action="" method="post" onSubmit={handleForm}>
//         <input type="text" id="user" placeholder="enter user name"/>
//         <br /><br />
//         <input type="password" id="password" placeholder="enter user password"/>
//         <br /><br />
//         <button>
//           Submit
//         </button>
//       </form>

//       <hr />

//       <h1>Uncontrolled Component with useRef</h1>
//       <form action="" method="post" onSubmit={handleFormRef}>
//         <input type="text" ref={userRef} id="userRef" placeholder="enter user name"/>
//         <br /><br />
//         <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter user password"/>
//         <br /><br />
//         <button>
//           Submit with Ref
//         </button>
//       </form>
//     </>
//   )
// }
// export default App;




// PASS FUNCTION IN COMPONENT AS PROPS
// import PassFunctionUser from './PassFunctionUser'
// function App() {
//   const displayName = (name) => {
//     alert(name)
//   }
//   const getUser = ()=> {
//     alert("get user function called")
//   }
//   return (
//     <>
//       <h1>Call Parent component function from child component</h1>
//       <PassFunctionUser displayName={displayName} name="anshu" getUser={getUser}/>
//       <PassFunctionUser displayName={displayName} name="aggarwal" getUser={getUser}/>
//       <PassFunctionUser displayName={displayName} name="vanshka" getUser={getUser}/>
//     </>
//   )
// }
// export default App;




// FORWARD REF IN REACT
// import { useRef } from"react";
// import UserInput from "./UserInput";
// function App() {
//   const inputref = useRef(null)

//   const updateInput = () => {
//     inputref.current.value = 1000;
//     inputref.current.focus();
//     inputref.current.style.color = "red";

//   }
//   return (
//     <>
//       <h1>Forward Ref</h1>
//       <button onClick={updateInput}>Update Input Field</button>
//       <UserInput ref={inputref} />
//     </>
//   )
// }
// export default App;


// USEFORMSTATUS HOOK IN REACT
// import {useFormStatus} from 'react-dom';
// function App() {
//   const handleSubmit = async () => {
//     await new Promise(res => setTimeout(res, 5000));
//     console.log("submit")
//   }
//   function CustomerForm() {
//     const {pending} = useFormStatus();
//     console.log(pending);
//     return (
//       <div>
//         <input type="text" placeholder="Enter Your Name"/>
//           <br /><br />
//           <input type="password" placeholder="Enter Your Password"/>
//           <br /><br />
//           <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <h1>useFormStatus Hook in React js 19</h1>
//       <form action={handleSubmit}>
//          <CustomerForm />
//       </form>
//     </div>
//   )
// }
// export default App; 




// USETRANSITION HOOK 
// import { useState } from "react";
function App() {
  const [pending, startTransition] = useTransition();
  const handleButton = async() => {
    startTransition(async() => {
      await new Promise(res => setTimeout(res,2000));
    })
  } 
  return (
    <>
      <h1>useTransition Hook in React JS 19</h1>
      {
        pending?
        <img style={{width:"100px"}} src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Loading_icon.gif/330px-Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
        :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </>
    // yha pr disabled function m pending state by default false rhti hai
  )
}
export default App;