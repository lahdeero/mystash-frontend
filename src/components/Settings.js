import React, { useEffect, useState } from 'react'
import { Row, Col, CardPanel } from 'react-materialize'
import loginService from '../services/LoginService'

const Settings = () => {
  const [username, setUsername] = useState('Loading...')
  const [realname, setRealname] = useState('')
  const [tier, setTier] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    loginService.getUser().then(user => {
      setUsername(user.username)
      setRealname(user.realname)
      setTier(user.tier)
      setEmail(user.email)
    })
  })

  return (
    <div>
      <div className='container'>
        <Row>
          {'version 0.23'}
        </Row>
        <Row>
          <Col s={12} m={5}>
            <CardPanel className='red accent-2 black-text'>
              <span>Currently can't change your information</span>
            </CardPanel>
          </Col>
          <Col s={12} m={7}>
            <CardPanel className='blue lighten-3 black-text'>
              <Row>
                <Col>Username: </Col>
                <Col>{username}</Col>
              </Row>
              <Row>
                <Col>Name: </Col>
                <Col>{realname}</Col>
              </Row>
              <Row>
                <Col>Level: </Col>
                <Col>{tier}</Col>
              </Row>
              <Row>
                <Col>Email: </Col>
                <Col>{email}</Col>
              </Row>
            </CardPanel>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Settings
