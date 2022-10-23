import axios from axios;
import { URL } from "./BaseApp";

const register = async (params, state) => {
  axios.post(URL.register, {
    params
  })
  .then(function (response) {
    console.log(response, 'novo usuario');
    state(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export  default register;
