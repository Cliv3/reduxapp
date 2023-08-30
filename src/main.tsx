import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/Main.scss'
import {store} from "./Store.ts";
// import {Provider} from "react-redux";
import {SnackbarProvider} from "notistack";
import {Provider} from "react-redux";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
              <App />
          </SnackbarProvider>
      </Provider>
  </React.StrictMode>,
)
