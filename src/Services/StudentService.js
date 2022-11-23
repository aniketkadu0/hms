import axios from "axios";

const BASE_URL = "http://localhost:8080";
const STUDENTS = "/student";

// const headers = {
//     auth: {
//     username: 'student',
//     password: 'cdacactsm2022'
//     }
// }

const getStudent = (userId) => {
    return axios.get(BASE_URL + STUDENTS + "/getstudent" , {
        params : {
            userId : userId
        }
    })
}

const AddPersonalDetails = (newdetails) => {
  return axios.post(BASE_URL + STUDENTS + "/adddetails", newdetails);
};

const makepayment = (room, mess, user, amount) => {
  let paymentDto = {
    room,mess,user
  }
  console.log(paymentDto)
  return axios.post(
    BASE_URL + STUDENTS + "/makepayment", paymentDto , {
      params : {
          amount : parseInt(amount)
      }
    } 
  );
};

const getnotices = () => {
  return axios.get(BASE_URL + STUDENTS + "/getnotices");
};

const reportconcern = (concern) => {
  return axios.post(BASE_URL + STUDENTS + "/addconcern", concern);
};

const getPrices = () => {
  return axios.get(BASE_URL + STUDENTS + "/getprices")
}

const getMess = () => {
  return axios.get(BASE_URL + STUDENTS + "/getmess")
}

const getRoom = (roomName,gender) => {
  return axios.get(BASE_URL + STUDENTS + "/getroom" , {
    params : {
      roomName : roomName,
      gender : gender
    }
  })
}

const StudentService = {
  getStudent,
  getnotices,
  AddPersonalDetails,
  makepayment,
  reportconcern,
  getPrices,
  getMess,
  getRoom
};

export default StudentService;
