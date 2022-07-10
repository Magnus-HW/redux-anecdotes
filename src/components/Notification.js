import React from 'react'
import { useSelector, connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector((state) => {return state.notification})

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: props.notification === '' ? 'none' : ''
  }
  
  return (
    <div style={style}>
        {props.notification}
    </div>
  )
}

const notificationToShow = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  notificationToShow
)(Notification)
