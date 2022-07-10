import anecdotesServices from "../services/anecdotes"

// change the redux state here

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const toVote = state.find(n=> n.id === id)
      const changedAnec = {
        ...toVote,
        votes: toVote.votes+1
      }
      return state.map(anec =>
        anec.id !== id? anec : changedAnec)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const doVote = (id, likedAnecdote) => {
  return async dispatch => {
    anecdotesServices
      .doLike(id, likedAnecdote)
    dispatch({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const createAnectode = (content) => {
  return async dispatch => {
    const anecdote = await anecdotesServices.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content: content,
        votes: 0,
        id: anecdote.id,
      }
    })
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesServices.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes
    })
  }
}
export default anecdoteReducer