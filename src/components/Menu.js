import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { IndexLinkContainer } from 'react-router-bootstrap'

import Filter from './Filter'

const Menu = (props) => {
  return (
    <div>
      <Navbar className='indigo' brand='my-stash' right>
        <IndexLinkContainer to={process.env.PUBLIC_URL + '/'}>
          <NavItem eventkey={1}><Icon>view_list</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to={process.env.PUBLIC_URL + '/create'}>
          <NavItem eventkey={2}><Icon>note_add</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to={process.env.PUBLIC_URL + '/settings'}>
          <NavItem eventkey={3}><Icon>settings</Icon></NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to={process.env.PUBLIC_URL + '/logout'}>
          <NavItem onClick={props.handleLogout}><Icon>logout</Icon></NavItem>
        </IndexLinkContainer>
      </Navbar>
      <Filter filter={props.filter} />
    </div>
  )
}

export default Menu
