import { useState } from 'react'

import './App.css'

import Post from './Post.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <Post/>
      <Post/>
      <Post/>
    </main>
  )
}

export default App
