import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, NavItem, Icon, Button } from 'react-materialize'
import { IndexLinkContainer } from 'react-router-bootstrap'
import Filter from './Filter'
import versionResolver from '../utils/versionResolver'

const Menu = (props) => {
  return (
    <div>
      <Navbar className='indigo' brand={Logo(props)} href='#' right>
        <IndexLinkContainer to='/'>
          <NavItem eventkey={1}><Icon>view_list</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to='/create'>
          <NavItem eventkey={2}><Icon>note_add</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to='/settings'>
          <NavItem eventkey={3}><Icon>settings</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to='/logout'>
          <NavItem onClick={props.handleLogout}><Icon>logout</Icon></NavItem>
        </IndexLinkContainer>
      </Navbar>
      <Filter filter={props.filter} />
    </div >
  )
}

const Logo = (props) => {
  return (
    <div onClick={() => clickHome(props)}>
      mystash v. {versionResolver}
    </div>
  )
}

const clickHome = (props) => {
  props.filter.setFilter('')
  props.history.push('/')
}

export default withRouter(connect(null)(Menu))
