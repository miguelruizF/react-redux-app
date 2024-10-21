import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { AppReduxSaga } from './AppReduxSaga'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider>
    <StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </StrictMode>
  </Provider>,
)
