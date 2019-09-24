import axios from "axios"

// used for catching some error messages when the server or db throws internal server error
// axios.interceptors.response.use(null, error => {
//   const expectedError = error.response

//   if (!expectedError) {
//     console.log("someting bad happen.")
//   }

//   return Promise.reject(error)
// })

export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Accept: "application/json",
    ContentType: "application/json"
  }
})
