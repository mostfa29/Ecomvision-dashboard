import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css';
import * as toolkitRaw from '@reduxjs/toolkit';
import {globalReducer} from "./store/index"
import {Provider} from "react-redux"
import {api} from "./data/api"
import {setupListeners} from "@reduxjs/toolkit/query"



const { configureStore } = toolkitRaw.default ?? toolkitRaw;


const store = configureStore({
  reducer:{
    global:globalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefault)=> getDefault().concat(api.middleware),
})

setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
