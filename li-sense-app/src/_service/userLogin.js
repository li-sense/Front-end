import axios from 'axios';
import { URL } from './BaseApp';
const userLogin = async (params, state) => {
  //console.log(params)
  axios.post(URL.login, {
    params
  })
  .then(function (response) {
    console.log(params)
    console.log(response, 'dado do usuario logado + token');
    state(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export  default userLogin;
