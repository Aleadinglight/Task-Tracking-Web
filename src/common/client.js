import axios from 'axios'
require('dotenv').config()

let loginUser = async (credentials) => {
  try {
    return await axios.post(URL, credentials);
  }
  catch (err) {
    console.log(`Error when trying to log in. ${err}`)
    return null;
  }
}

module.exports = {
  loginUser
}