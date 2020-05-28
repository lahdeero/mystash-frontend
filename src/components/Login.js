import React, { useState } from 'react'
import { Navbar, Input, Icon, Button } from 'react-materialize'
import Register from './Register'
import { ClipLoader } from 'react-spinners'
import '../App.css'
import { resolveUrl } from '../utils/environmentResolvers'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [register, setRegister] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      await props.actionForLogin({
        username: username,
        password: password
      })
    } catch (exception) {
      setLoading(false)
      setError('Bad credentials')
      console.log(exception)
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }
  const handleRegisterRedirect = async (event) => {
    event.preventDefault()
    setRegister(!register)
  }

  if (register) {
    return (
      <div>
        <Register init={props.init} />
      </div>
    )
  }

  const backendUrl = resolveUrl()
  console.log('backend url:', backendUrl)
  const githubLoginUrl = `${backendUrl}/api/login/github`

  return (
    <div>
      <Navbar className="indigo" brand='mystash' href={process.env.PUBLIC_URL} right>
      </Navbar>
      <div className="container centered">
        <div>
          <a href={githubLoginUrl}>
            Login with GitHub
          </a>
        </div>
        <ClipLoader loading={loading} color='blue' />
        {error !== '' ? <div className="error">{error}</div> : <div></div>}
        <form onSubmit={handleLogin}>
          <div>
            username:
            <Input
              type="text"
              name="username"
              autoComplete="off"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ><Icon>account_circle</Icon></Input>
          </div>
          <div>
            password:
            <Input
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ><Icon>https</Icon></Input>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <div>
          <br />
          Dont have account? <a onClick={handleRegisterRedirect} href="/register">Register here</a>
        </div>
      </div>
    </div >
  )
}

export default Login
