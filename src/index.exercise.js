import '@reach/dialog/styles.css'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'
import 'styles/global.css'

const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  )
}
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
