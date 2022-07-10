import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { useField } from '../hooks'

const NewAnecdote = (props) => {
    //const dispatch = useDispatch ()
    const input = useField()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value=''

        //dispatch(createAnectode(content))
        props.createAnectode(content)

        //dispatch(setNotification('New anecdote created'))
        props.setNotification('New anecdote created')
        setTimeout(() => {
          props.clearNotification()
        }, 2500)
    }

    return (
      <div>
        <form onSubmit={addAnec}>
          <h2>create new</h2>
          <div>
              <input name="anecdote" {...input}
              />
          </div>
          <button type="submit">create</button>
        </form>
        <button onClick={input.clear}>clear</button>
      </div>
    )
}

export default connect(
  null, 
  { createAnectode, setNotification, clearNotification }
)(NewAnecdote)
