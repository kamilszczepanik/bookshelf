// 🐨 you'll need to import react and createRoot from react-dom up here
import React from 'react'
const {Logo} = require('components/logo')
const {createRoot} = require('react-dom/client')

const App = () => {
  const handleLogin = () => {
    console.log('clicked handle login')
  }
  const handleRegister = () => {
    console.log('clicked handle register')
  }
  return (
    <div>
      <Logo />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
