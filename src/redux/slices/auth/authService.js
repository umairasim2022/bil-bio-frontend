import axios from 'axios'
// import axios from '../../../utils/axios';


const baseUrl = window.config.API_URL;
// registerUser user
const registerUser = async (userData) => {
  const path = '/api/user/register';
  const url = baseUrl + path;
  const response = await axios.post(url, userData)
  console.log('regresp', response)
  const token = response?.data?.token


  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response?.data
}

// loginUser user
const loginUser = async (userData) => {
  const path = '/api/user/login'
  const url = baseUrl + path;

  const response = await axios.post(url, userData)
  console.log('longres#$$', response)
  const token = response?.data?.token

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
// loginUser user
const resetUserPassword = async (userDatas) => {
  const path = '/api/user/send-reset-password-email'
  const url = baseUrl + path;

  const response = await axios.post(url, userDatas)
  return response.data
}

// logoutUser user
const logoutUser = async () => {
  const path = '/api/user/logout'
  const url = baseUrl + path;

  localStorage.removeItem('user')
  const response = await axios.get(url)
  return response.data
}

const authService = {
  registerUser,
  logoutUser,
  loginUser,
  resetUserPassword
}

export default authService
