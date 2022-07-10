import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { filterChange, filterReset } from '../reducers/filterReducer'

const Filter = (props) => {
  //const dispatch = useDispatch()
  //const anecdotes = useSelector(state => state.anecdotes)
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const filter = event.target.value
    if ( filter === '') {
        //dispatch(filterChange(''))
        props.filterChange('')
    } else {
        //dispatch(filterChange(filter))
        props.filterChange(filter)
    }  
  }
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
//when using connect, dispatch is not necessery
export default connect(
  null, 
  {filterChange }
)(Filter)