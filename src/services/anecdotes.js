import axios from 'axios'

const baseUrl = 'http://localhost:3030/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log(response);
    return response.data
}

const createNew = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseUrl, object)
    console.log('created',response);
    return response.data
}

const doLike = async (id, anec) => {
    const request = await axios.put(`${baseUrl}/${id}`, anec)
    return request.data
}
const anecdotesServices = { getAll, createNew, doLike }

export default anecdotesServices