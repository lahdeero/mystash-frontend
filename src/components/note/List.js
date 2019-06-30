import React, { useState } from 'react'
import { Pagination } from 'react-materialize'
import { ClipLoader } from 'react-spinners'
import ListNote from './ListNote'
import SortDropdown from './SortDropdown'

const List = (props) => {
  const [page, setPage] = useState(1)
  const [notesPerPage] = useState(10)

  const handleSelect = async (selectedKey) => {
    if (selectedKey !== undefined || selectedKey !== null) {
      return setPage(selectedKey)
    }
  }

  const filterNotes = (allNotes, filter) => {
    if (filter && (filter !== undefined || null || '')) {
      try {
        const filterByTitle = allNotes.filter(note => note.title.toLowerCase().includes(filter.toLowerCase()))
        const filterByTag = allNotes.filter(note => note.tags.join(' ').toLowerCase().includes(filter.toLowerCase()))
        // return removeDuplicates(filterByTitle.concat(filterByTag))
        return Array.from(new Set(filterByTitle.concat(filterByTag)))
      } catch (e) {
        console.log(e)
      }
    }
    return allNotes
  }

  const filteredNotes = filterNotes(props.notes, props.filter.value)
  const notesToShow = filteredNotes.slice((page - 1) * notesPerPage, (page - 1) * notesPerPage + notesPerPage)

  return (
    <div className="container">
      <div className="center">
        <ClipLoader loading={props.loading} color='blue' />
        <Pagination items={Math.ceil(props.notes.length / notesPerPage)} activePage={page} maxButtons={10} onSelect={handleSelect} />
        <SortDropdown />
      </div>
      <ul>
        {notesToShow.map(note => <li key={note.id}>
          <div>
            <ListNote note={note} Key={note.id} filter={props.filter} />
          </div>
        </li>
        )}
      </ul>
      <div className="center">
        <Pagination items={Math.ceil(props.notes.length / notesPerPage)} activePage={page} maxButtons={10} onSelect={handleSelect} />
      </div>
    </div>
  )
}

export default List
