import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './containers/Header/Header'
import Header2 from './containers/Header2/Header2'
import Events from './components/Events/Events';
import Usekey from './components/Usekey/Usekey';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';
import Controlled from './components/Controlled/Controlled';
import Userdetails from './components/Userdetails/Userdetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <Header2 /> */}
    {/* <Events /> */}
    {/* <Usekey /> */}
    {/* <Uncontrolled /> */}
    {/* <Controlled /> */}
    <Userdetails />
  </React.StrictMode>,
)
