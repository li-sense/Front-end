import React from 'react'
import ReactDOM from 'react-dom/client'
import { LisenseProvider } from './_context/LisenseProvider'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '../src/_assets/GlobalStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LisenseProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LisenseProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
