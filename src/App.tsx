import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from './services/AuthService'

function App() {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const login = async () =>{
      await authService.login(state.email, state.password)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nestjs + Firebase</h1>
      <div className="card">
        <div>
          <input placeholder='Correo' name="email" type="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Contraseña' name="password" value={state.password} type='password' onChange={handleChange} />
        </div>
        <div>
          <button onClick={() => login()}>
            Iniciar sesion
          </button>
        </div>
      </div>
    </>
  )
}

export default App
