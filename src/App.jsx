
import './App.css';
import React from 'react';
import Home from './Page/Home';
import About from './Page/about';
import Shop from './Page/shop';
import Contact from './Page/contact'
import Favorite from './Page/favorite'

import Detail from './Page/Detail';

import {BrowserRouter,Routes,Route,RouterProvider, createBrowserRouter} from 'react-router-dom';
import './style.scss'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
  },
  {
    path: '/about', 
    element: <About/>,
  },
  {
    path: '/Shop', 
    element: <Shop/>,
  },
  {
    path: '/Contact', 
    element: <Contact/>,
  },
  {
    path: '/favorite', 
    element: <Favorite/>,
  },

  {
    path: '/Detail/:product_id', 
    element: <Detail/>,
  },
  

]);
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
