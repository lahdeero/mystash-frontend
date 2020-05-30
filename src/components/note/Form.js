import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Textarea from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import { createNote } from '../../reducers/noteReducer'
import { notify, errormessage } from '../../reducers/notificationReducer'

const Form = (props) => {
  const { createNote, notify, errormessage } = props
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])
  const [tagText, setTagText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      const noteObject = {
        title: title,
        content: content,
        tags: tagText.length > 2 ? tags.concat(tagText.split(';')) : tags
      }
      if (noteObject.tags >= 0) {
        props.notify('Add atleast one tag', 10)
        return
      }
      createNote(noteObject).then(() => {
        props.history.push('/')
      }, props.notify(`you created '${noteObject.title}'`, 10))
    } catch (exception) {
      console.log(exception)
      props.errormessage('ERROR WHILE ADDING NOTE', 10)
    }
  }

  const handleChange = (event) => {
    // setState({ [event.target.name]: event.target.value })
    event.target.name === 'title' ? setTitle(event.target.value) : setTagText(event.target.value)
  }
  const handleContent = (event) => {
    // setState({ content: event.target.value })
    setContent(event.target.value)
  }

  const addTag = (event) => {
    event.preventDefault()
    const maxTags = 10
    if (tags.length >= maxTags) {
      notify(`Maxium number of tags is '${maxTags}'`, 10)
      return
    }
    if (tagText.length === 0 || tags.includes(tagText)) return
    try {
      console.log('tagText:', tagText)
      const newTags = tags.concat(tagText.split(';'))
      // newTags = newTags.concat(tagText.split(';'))
      setTags(newTags)
      setTagText('')
    } catch (exception) {
      errormessage('ERROR WHILE ADDING TAG', 10)
    }
  }

  const removeTag = (name) => {
    setTags(tags.filter(tag => tag !== name))
  }

  return (
    <div className="container">
      <h2>Create new note</h2>

      <form id="noteform" onSubmit={handleSubmit}>
        <div>
          Title<br />
          <input name='title' value={title} onChange={handleChange} />
        </div>
        <div>
          <label>
            Content<br />
            <Textarea className="note-edit" value={content} onChange={handleContent} minRows={10} />
          </label>
        </div>
        <br />
      </form>

      <div>
        {tags.map(tag =>
          <Button key={tag} onClick={() => { removeTag(tag) }}> {tag} </Button>
        )}
      </div>

      <form id="tagform" onSubmit={addTag}>
        <Button className="deep orange" type="submit" form="tagform">Add tag</Button>
        <div>
          <br />
          <input name='tagText' value={tagText} onChange={handleChange} />
        </div>
      </form>

      <div>
        <br />
        <Button form="noteform" className="red accent-2" type="submit">Create</Button>
      </div>
    </div>

  )
}

const mapDispatchToProps = {
  createNote,
  notify,
  errormessage
}

export default withRouter(connect(null, mapDispatchToProps)(Form))
