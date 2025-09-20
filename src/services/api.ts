// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:5070',
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlcjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0a2xkQGdtYWxzLmNvbSIsImV4cCI6MTc2NzAwODk5OSwiaXNzIjoiQ29pbktlZXBBcGkiLCJhdWQiOiJDb2luS2VlcFVzZXJzIn0.vNsSMaWca8Etbne9kZf_58xK9S6j-KxSo8889gF66ko',
//   },
// })

// export default api

// api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5070',
})

// Add interceptor to attach token dynamically
api.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token')
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlcjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0a2xkQGdtYWxzLmNvbSIsImV4cCI6MTc2NzAwODk5OSwiaXNzIjoiQ29pbktlZXBBcGkiLCJhdWQiOiJDb2luS2VlcFVzZXJzIn0.vNsSMaWca8Etbne9kZf_58xK9S6j-KxSo8889gF66ko'
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
