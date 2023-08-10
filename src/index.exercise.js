// 🐨 you'll need to import react and createRoot from react-dom up here
import React, {useState} from 'react'
import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {VisuallyHidden} from '@reach/visually-hidden'
import './styles.css'
const {Logo} = require('components/logo')
const {createRoot} = require('react-dom/client')

const LoginForm = ({onSubmit, buttonText}) => {
  const handleSubmitForm = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmitForm} className="login-form">
      <div className="form-item">
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <input id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const DialogComponent = ({openModal, setOpenModal}) => {
  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const login = ({username, password}) => {
    console.log('login')
    console.log(username, password)
  }

  const register = ({username, password}) => {
    console.log('register')
    console.log(username, password)
  }

  return (
    <>
      <Dialog
        aria-label="dialog"
        isOpen={
          openModal === 'login' || openModal === 'register' ? true : false
        }
        onDismiss={handleCloseModal}
      >
        <div className="close-button-wrapper">
          <button className="close-button" onClick={handleCloseModal}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
        </div>
        {openModal === 'login' && (
          <div className="login-modal-content">
            <h1 className="title">Login form</h1>
            <LoginForm onSubmit={login} />
          </div>
        )}
        {openModal === 'register' && (
          <div className="register-modal-content">
            <h1 className="title">Register form</h1>
            <LoginForm onSubmit={register} />
          </div>
        )}
      </Dialog>
    </>
  )
}

const App = () => {
  const [openModal, setOpenModal] = useState(null)

  const handleLogin = () => {
    setOpenModal('login')
  }

  const handleRegister = () => {
    setOpenModal('register')
  }

  return (
    <div className="welcome-page">
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div className="buttons-wrapper">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
      <DialogComponent openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
