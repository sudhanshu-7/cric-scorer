import axios from "axios"

const api = axios.create({
    baseURL:"https://crickscorer.herokuapp.com/"
})

export const insertScore = payload => api.post("/score",payload)
export const getAll = ()=> api.get("/score")
export const deleteScore = (id) => api.delete(`/score/${id}`)

const apis ={
    insertScore,
    getAll,
    deleteScore
}

export default apis
