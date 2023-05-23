import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './containers/Header/Header'
import Header2 from './containers/Header2/Header2'
import Car from './components/Class/Car'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Header2 />
    <Car />
  </React.StrictMode>,
)
