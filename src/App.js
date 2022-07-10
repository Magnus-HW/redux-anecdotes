import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotelist'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  //hook for fetching anecedotes from json server
  useEffect(()=> {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      
      <Anecdotes />

      <NewAnecdote />
      
      <Notification />
    </div>
  )
}

export default App