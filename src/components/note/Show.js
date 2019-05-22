import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import noteService from '../../services/NoteService.js'
import { removeNote } from '../../reducers/noteReducer'
import { notify, errormessage } from '../../reducers/notificationReducer'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      content: '',
      tags: []
    }
  }

  async componentDidMount() {
    try {
      const oneNoteArr = await noteService.getOne(this.props.match.params.id)
      await this.setState({
        id: oneNoteArr[0].id,
        title: oneNoteArr[0].title,
        content: oneNoteArr[0].content,
        tags: oneNoteArr[0].tags
      })
    } catch (eception) {
      this.props.errormessage(`Couldn't find note '${this.props.match.params.id}'`, 5)
      this.props.history.push('/')
    }
  }

  deleteNote = async (event) => {
    event.preventDefault()
    if (window.confirm(`Are you sure you want to delete '${this.state.title}' ?`)) {
      const delId = await this.props.removeNote(this.state.id)
      if (typeof (delId) === 'number') {
        this.props.notify(`you deleted '${this.state.title}'`, 10)
        this.props.history.push('/')
      }
    }
  }

  render() {
    const tags = this.state.tags.join()
    const text = this.state.content

    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <p>[{tags}]</p>
        <div>
          {text.split('\n').map(function (row, key) {
            return (
              <span key={key}>
                {row}
                <br />
              </span>
            )
          })}
        </div>
        <div>
          <Link to={`/notes/edit/${this.state.id}'`}>
            <Button className="deep orange">EDIT</Button>&nbsp;
          </Link>
          <Button className="red accent-2" onClick={this.deleteNote} >DELETE</Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  removeNote,
  notify,
  errormessage
}

const ConnectedShowNote = connect(
  null,
  mapDispatchToProps
)(Show)

export default ConnectedShowNote
