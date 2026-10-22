// import { forwardRef } from "react";

// const UserInput = (props,ref) => {
//     return (
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// }
// export default forwardRef(UserInput);


// 2ND WAY MOSTYLE USED IN REACT 19 AND SIMPLE ALSO TO USE FORWARDREF
const UserInput = (props) => {
    return (
        <div>
            <input type="text" ref={props.ref}/>
        </div>
    )
}
export default UserInput;