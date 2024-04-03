import { useState } from 'react'

import './App.css'

import Post from './Post.jsx'
import Header from './Header.jsx'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout.jsx';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
    
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App;
