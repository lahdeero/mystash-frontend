import React, { useState } from 'react'
import { Button } from 'react-materialize'

const SortDropdown = (props) => {
  const [show, setShow] = useState(false)
  const { sort, setSort } = props

  const toggleShow = (event) => {
    event.preventDefault()
    setShow(!show)
  }

  const updateSort = (style) => {
    setSort(style)
    setShow(false)
  }

  const buttonClass = 'light-blue accent-1'
  return (
    <div>
      <Button className={buttonClass} onClick={toggleShow}>
        Sort
      </Button>
      {show ? (
        <div className="menu">
          <Button className={buttonClass} onClick={() => {
            sort === 'ALPHABETIC' ? updateSort('!ALPHABETIC') : updateSort('ALPHABETIC')
          }}>Alphabetic</Button>
          <Button className={buttonClass} onClick={() => {
            sort === 'CREATED' ? updateSort('!CREATED') : updateSort('CREATED')
          }}>Created</Button>
          <Button className={buttonClass} onClick={() => {
            sort === 'MODIFIED' ? updateSort('!MODIFIED') : updateSort('MODIFIED')
          }}>Modified</Button>
        </div>)
        : (<div></div>)}
    </div>
  )
}

export default SortDropdown
