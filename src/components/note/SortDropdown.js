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

  return (
    <div>
      <Button onClick={toggleShow}>
        Sort
      </Button>
      {show ? (
        <div className="menu">
          <Button onClick={() => updateSort('ALPHABETIC')}>Alphabetic</Button>
          <Button onClick={() => updateSort('CREATED')}>Created</Button>
          <Button onClick={() => updateSort('MODIFIED')}>Modified</Button>
        </div>)
        : (<div></div>)}
    </div>
  )
}

export default SortDropdown
