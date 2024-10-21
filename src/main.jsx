import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { AppReduxSaga } from './AppReduxSaga'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppReduxSaga />
  </StrictMode>,
)
