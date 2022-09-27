import axios from 'axios'
// import axios from '../../../utils/axios';


// registerUser user
const registerUser = async (userData) => {
  const response = await axios.post('/api/user/register', userData)
  console.log('regresp', response)
  const token = response?.data?.token


  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response?.data
}

// loginUser user
const loginUser = async (userData) => {
  console.log('mjuser', userData)
  const response = await axios.post('/api/user/login', userData)
  console.log('longres#$$', response)
  const token = response?.data?.token

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
// loginUser user
const resetUserPassword = async (userDatas) => {
  const response = await axios.post('/api/user/send-reset-password-email', userDatas)
  return response.data
}

// logoutUser user
const logoutUser = async () => {
  localStorage.removeItem('user')
  const response = await axios.get('/api/user/logout')
  return response.data
}

const authService = {
  registerUser,
  logoutUser,
  loginUser,
  resetUserPassword
}

export default authService
