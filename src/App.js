import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import Menu from './components/Menu'
import Login from './components/Login'
import List from './components/note/List'
import Show from './components/note/Show'
import Edit from './components/note/Edit'
import Form from './components/note/Form'
import Settings from './components/Settings'
import Notification from './components/Notification'
import { noteInitialization, clearNotes } from './reducers/noteReducer'
import { notify } from './reducers/notificationReducer'
import { actionForLogin, setLogin, actionForLogout } from './reducers/userReducer'
import useFilter from './hooks/useFilter'

const App = (props) => {
  const filter = useFilter()
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('MS_token')
    if (!logged || loggedUserJSON) {
      setLogged(true)
      init()
    }
  }, [props.user])

  const init = async () => {
    try {
      setLoading(true)
      await props.noteInitialization()
    } catch (e) {
      props.notify(e)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('MS_token')
    filter.setFilter('')
    props.clearNotes()
    props.actionForLogout()
    setLogged(false)
  }

  if (logged) {
    return (
      <div>
        <Notification />
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Menu filter={filter} handleLogout={handleLogout} />
            <Route exact path='/' render={() => <List notes={props.notes} filter={filter} loading={loading} />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/create' render={() => <Form />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route exact path='/notes/:id' component={Show} />
            <Route exact path='/notes/edit/:id' component={Edit} />
          </div>
        </Router>
      </div >
    )
  } else {
    return (
      <div>
        <Login actionForLogin={props.actionForLogin} init={init} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    notes: store.notes,
    user: store.user
  }
}
const mapDispatchToProps = {
  noteInitialization,
  setLogin,
  actionForLogin,
  actionForLogout,
  clearNotes,
  notify
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
