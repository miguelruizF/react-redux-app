import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { AppReduxSaga } from './AppReduxSaga'
import { Provider } from 'react-redux'
import { createAppAsyncStore } from './store/config/storeConfig'

// We create the App Store
let appAsyncStore = createAppAsyncStore();

createRoot(document.getElementById('root')).render(
  //Provide a store in our application
  <Provider store={ appAsyncStore }>
    <StrictMode>
      <App />
      {/* <AppReduxSaga /> */}
    </StrictMode>
  </Provider>,
)
