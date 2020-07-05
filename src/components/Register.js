import { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Navbar, Input, Icon, Button } from 'react-materialize'
import { actionForRegister, setLogin } from '../reducers/userReducer'
import { ClipLoader } from 'react-spinners'

const Register = (props) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await props.actionForRegister({
        realname: `${firstname} ${lastname}`,
        username: username,
        password: password,
        email: email
      })
      props.init()
    } catch (exception) {
      setLoading(false)
      console.log(exception)
      setError('Could not register..')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  return (
    <div>
      <Navbar className="indigo" brand='mystash' href={process.env.PUBLIC_URL} right>
      </Navbar>
      <div className="container">
        <ClipLoader loading={loading} color='blue' />
        <div>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleRegister}>
            <Row>
              <Input onChange={(event) => setFirstname(event.target.value)} name="firstname" label="First Name" ><Icon>accessibility</Icon></Input>
              <Input onChange={(event) => setLastname(event.target.value)} name="lastname" s={6} label="Last name" ><Icon>accessibility_new</Icon></Input>
              <Input onChange={(event) => setUsername(event.target.value)} name="username" s={12} label="Username(*)" ><Icon>account_circle</Icon></Input>
              <Input onChange={(event) => setPassword(event.target.value)} name="password" type="password" label="Password(*)" s={12} ><Icon>https</Icon></Input>
              <Input onChange={(event) => setEmail(event.target.value)} name="email" type="email" label="Email" s={12} ><Icon>email</Icon></Input>
            </Row>
            <Button type="submit">Register</Button>
          </form>
        </div>
        <br />
        <br />
        Back to <a onClick={props.handleRegisterRedirect} href={process.env.PUBLIC_URL}>login</a>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    notes: store.notes,
    user: store.user
  }
}
const mapDispatchToProps = {
  actionForRegister,
  setLogin
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
