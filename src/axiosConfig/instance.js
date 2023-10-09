import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    // headers:{
//  "content":"application/json"
//   
    // },
    params:{
        "api_key":"963a5b46ff853754b2856a4e8d6e3bb8"
    }
})

export default axiosInstance