// import { useState } from "react";

// function Checkboxes() {
//     const [skills, setSkills] = useState([]);
//     const handleSkills = (event) => {
//         console.log(event.target.value, event.target.checked);
//         if(event.target.checked) {
//             setSkills([...skills,event.target.value]);
//         } else {
//             setSkills([skills.filter((item) => item!=event.target.value)])
//         }
//     }
//     return (
//         <div>
//             <h3>Select Your Skills</h3>
//             <input type="checkbox" id="php" value="php" onChange={handleSkills}/>
//             <label htmlFor="">PHP</label>
//             <br />
//             <br />

//              <input type="checkbox" id="js" value="js" onChange={handleSkills} />
//             <label htmlFor="">JS</label>
//             <br />
//             <br />

//              <input type="checkbox" id="node" value="node" onChange={handleSkills}/>
//             <label htmlFor="">Node</label>
//             <br />
//             <br />

//              <input type="checkbox" id="java" value="java" onChange={handleSkills}/>
//             <label htmlFor="">Java</label>
//             <br />
//             <br />
//             <h1>{skills.toString()}</h1>
//         </div>
//     )
// }
// export default Checkboxes;





import React, { useState } from 'react'

const CheckBoxes = () => {
    const [gender, setGender] = useState('');
    const [city, setCity ] = useState('');
    function handleGender(event) {
        setGender(event.target.value)
    }
    function handleCity(event) {
        setCity(event.target.value);
    }

  return (
    <div>
         <h1>Selected Gender : {gender}</h1>
         <input type="radio" id="male" value="male" onChange={handleGender}/>
         <label htmlFor="">Male</label>
         <input type="radio" id="female" value="female" onChange={handleGender}/>
         <label htmlFor="">Female</label>
         <br />
         <br />
          <h1>Selected City : {city}</h1>
          <select onChange={handleCity} defaultValue={"delhi"}>
             <option value="gurgaon">Gurgaon</option>
             <option value="noida">Noida</option>
             <option value="delhi">Delhi</option>
          </select>
        
        
    </div>
  )
}

export default CheckBoxes