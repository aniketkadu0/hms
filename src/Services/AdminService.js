import axios from "axios";

const BASE_URL = "http://localhost:8080";
const ADMIN = "/admin";

// const headers = {auth:
//     {
//     username: 'admin',
//     password: 'cdacacts'
//     }
// }

const checkadminlogin = (loginobject) => {
  return axios.post(BASE_URL + ADMIN + "/checkadminlogin", loginobject);
};

const updateroom = (roomprice) => {
  return axios.put(BASE_URL + ADMIN + "/updateroom", roomprice);
};


const getstudentdata = () => {
  return axios.get(BASE_URL + ADMIN + "/getstudentdata");
};

const gethosteldata = () => {
  return axios.get(BASE_URL + ADMIN + "/gethosteldata");
};

const addnotice = (notice) => {
  return axios.post(BASE_URL + ADMIN + "/addnotice", notice);
};

const getroomdetails = () => {
  return axios.get(BASE_URL + ADMIN + "/getroomdetails");
};

const getfacilitypriceList = () => {
  return axios.get(BASE_URL + ADMIN + "/facilityprices");
};

const getconcerns = () => {
  return axios.get(BASE_URL + ADMIN + "/getconcerns");
};

const concernReply = (concern) => {
  return axios.put(BASE_URL + ADMIN + "/addresponse", concern);
};

const AdminService = {
  checkadminlogin,
  updateroom,
  getstudentdata,
  addnotice,
  getroomdetails,
  getfacilitypriceList,
  concernReply,
  gethosteldata,
  getconcerns,
};

export default AdminService;
