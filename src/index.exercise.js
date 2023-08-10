import '@reach/dialog/styles.css'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'
import 'styles/global.css'

const CustomButton = ({variant, children, ...props}) => {
  let styles = 'rounded w-20 py-1 text-md font-standard '

  switch (variant) {
    case 'primary':
      styles += 'text-white bg-blue-800'
      break
    case 'secondary':
      styles += 'bg-gray-100 text-black'
      break
    default:
      styles += ''
      break
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

function LoginForm({onSubmit, submitButton}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} class="flex flex-col gap-4 mt-2">
      <div class="flex flex-col px-12">
        <label htmlFor="username">Username</label>
        <input class="bg-gray-100 h-10" id="username" />
      </div>
      <div class="flex flex-col px-12">
        <label htmlFor="password">Password</label>
        <input class="bg-gray-100 h-10" id="password" type="password" />
      </div>
      <div class="ml-12 ">
        {React.cloneElement(submitButton, {type: 'submit'})}
      </div>
    </form>
  )
}

function App() {
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div class="flex justify-center items-center min-h-screen flex-col">
      <Logo width="80" height="80" />
      <h1 class="font-medium text-4xl mb-2">Bookshelf</h1>
      <div class="flex gap-2">
        <Modal>
          <ModalOpenButton>
            <CustomButton variant="primary">Login</CustomButton>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={
                <CustomButton variant="primary">Login</CustomButton>
              }
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton class="flex">
            <CustomButton variant="secondary">Register</CustomButton>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={
                <CustomButton variant="secondary">Register</CustomButton>
              }
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
