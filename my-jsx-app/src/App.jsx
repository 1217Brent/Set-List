import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileCard from './components/UserProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfileCard />
    </>
  )
}

export default App
