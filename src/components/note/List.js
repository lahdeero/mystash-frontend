import React, { useState } from 'react'
import { Pagination } from 'react-materialize'
import { ClipLoader } from 'react-spinners'
import ListNote from './ListNote'
import SortDropdown from './SortDropdown'

const List = (props) => {
  const [page, setPage] = useState(1)
  const [notesPerPage] = useState(10)
  const [sort, setSort] = useState('MODIFIED')

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

  const compareStrings = (a, b) => {
    if (a < b) { return -1 }
    if (a > b) { return 1 }
    return 0
  }

  const compareDates = (date1, date2) => {
    if (!date1 && !date2) {
      return 0
    } else if (!date2 || date1 > date2) {
      return -1
    } else if (!date1 || date1 < date2) { return 1 }
    return 0
  }

  const sortFunction = (a, b) => {
    switch (sort) {
      case 'ALPHABETIC':
        return compareStrings(a.title.toLowerCase(), b.title.toLowerCase())
      case 'MODIFIED':
        return compareDates(a.modified_date, b.modified_date)
      default:
        return b.id - a.id
    }
  }

  const sortedNotes = props.notes.sort(sortFunction)
  const filteredNotes = filterNotes(sortedNotes, props.filter.value)
  const notesToShow = filteredNotes.slice((page - 1) * notesPerPage, (page - 1) * notesPerPage + notesPerPage)

  return (
    <div className="container">
      <div className="center">
        <ClipLoader loading={props.loading} color='blue' />
        <div className="row">
          <div className="col s10"><Pagination items={Math.ceil(filteredNotes.length / notesPerPage)} activePage={page} maxButtons={10} onSelect={handleSelect} /></div>
          <div className="col s2"><SortDropdown sort={sort} setSort={setSort} /></div>
        </div>
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
