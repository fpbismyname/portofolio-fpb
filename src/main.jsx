import React from 'react'
import ReactDOM from 'react-dom/client'
//Import Pages
import MainPage from './pages/MainPage';
//Import Styling Pages
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage/>
  </React.StrictMode>,
)
