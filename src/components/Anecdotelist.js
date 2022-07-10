import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { doVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Blog = (props) => {
    const dispatch = useDispatch()
    const {content, votes, id, prop} = props
    const handleLike = async () => {
        const newLikes = votes+1
        const likedAnecdote = {
            content: content,
            votes: newLikes,
            id: id
        }

        //dispatch(doVote(id, likedAnecdote))
        //dispatch(setNotification(`you voted for: ${content}`))
        
        prop.doVote(id, likedAnecdote)
        prop.setNotification(`you voted for: ${content}`)

    }
    
    return (
        <div key={id}>
            <div>
                {content}
            </div>
            <div>
                has {votes}
            <button onClick={handleLike}>
                vote
            </button>
            </div>
        </div>
    )
}



const Anecdotes = (props) => {
 
    // const filter = useSelector(state => state.filter)
    // let anecdotes = useSelector(state => state.anecdotes)
    
    // if (filter !=='') {
    //     anecdotes = anecdotes.filter(anec => anec.content.toLowerCase().includes(filter.toLowerCase()))
    // }

    return (
    <div>
    {props.anecdotes.sort(function(a,b) {
        return b.votes - a.votes
    }).map(anecdote => 
        <Blog
              content={anecdote.content}
              votes={anecdote.votes}
              id={anecdote.id}
              prop={props}
        />
    )}
    </div>
)}

const mapStateToProps = (state) => {
    if (state.filter === '') {
        return {
            anecdotes: state.anecdotes
        }
    }
    return {
        anecdotes: state.anecdotes.filter(anec => anec.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
}

const mapDispatchToProps = {
    doVote,
    setNotification
}

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Anecdotes)

export default ConnectedAnecdotes