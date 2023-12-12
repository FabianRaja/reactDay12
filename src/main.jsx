import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './reducer.jsx'

const store=configureStore({
  reducer:{
    valuesContainer:reducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  //app context is been imported and changes instead of react.strictNode
  //now all the states and values passed to the children property will now be used for all app and its nested components
   <Provider store={store}>
          <App />
   </Provider>
   
 

  
)
