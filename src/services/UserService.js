import axios from "axios";

const USER_MANAGEMENT_API_BASE_URL = "http://localhost:8080/api/user/";
const ADD_NEW_USER = "/createNewUser";

class UserService {
  createNewUser(newUser) {
    return axios.post(USER_MANAGEMENT_API_BASE_URL + ADD_NEW_USER, newUser);
  }
}
