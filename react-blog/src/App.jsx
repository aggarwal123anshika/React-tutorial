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

import Login,{Profile, Setting} from "./UserComponent";
function App() {
  return (
    <>
      <h1>Importing and Exporting Components</h1>
      <Login />
      <Profile />
      <Setting />
    </>
  )
}
export default App;
