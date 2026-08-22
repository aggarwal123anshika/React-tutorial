import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Task from './Task';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Task /> */}
  </StrictMode>,
)
