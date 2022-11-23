import axios from "axios"

const BASE_URL = "http://localhost:8080"
const USER = "/user"

// const headers = {
//     auth: {
//     username: 'student',
//     password: 'cdacactsm2022'
//     }
// }

const login = (userDto) => {
    return axios.post(BASE_URL + USER + "/login",userDto)
}

const adduser = (userDto) => {
    return axios.post(BASE_URL + USER + "/adduser" , userDto)
}

const checkemailid = (emailId) => {
    return axios.get(BASE_URL + USER + "/check", {
        params : {emailId : emailId}
    } )
}

const updatepassword = (user) => {
    return axios.put(BASE_URL + USER + "/updatepassword", user)
}

const UserService = {
    login,
    adduser,
    checkemailid,
    updatepassword
}

export default UserService