import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accueil from './pages/pages1';
import Page2 from './pages/pages2';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/pag1';
import Bes from './pages/pad2';
import Leo from './pages/pag3';
import Principe from './pages/Principal';
import './style/style.css'
import Info from './pages/InfP';
import Erreur from './pages/Not';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
       <Routes>
        {/* <Route path='/' element={<Accueil />}>  </Route>
        <Route path='/Page1' element={<Page2 />}>  </Route> */}
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/Pag2' element={<Bes/>}></Route>
        <Route path='/Pag3' element={<Leo/>}></Route> */}
        <Route path='/' element={<Principe/>}></Route>
        <Route path='/informations/:id' element={<Info/>} ></Route>
        <Route path='*' element={<Erreur />}></Route>
       </Routes>
    </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
