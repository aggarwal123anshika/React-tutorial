import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import MultipleConditions from './MultipleConditions'
// import State from './State'
// import Counter from './Counter'
// import Task from './Task';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Toogle from './ToggleOrHide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Task /> */}
    {/* <State /> */}
    {/* <Counter /> */}
    {/* <ToggleOrHide /> */}
    {/* <MultipleConditions /> */}

  </StrictMode>,
)
