const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.message
        case 'CLEAR':
            return ''
        default:
            return state
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR'
    }
}

export const setNotification = (message) => {
    return async dispatch =>{
        dispatch({
            type : 'SET_NOTIFICATION',
            message: message
        })
        setTimeout(() => {
            dispatch(clearNotification())
          }, 2500)
    }
}



export default notificationReducer