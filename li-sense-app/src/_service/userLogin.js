import axios from 'axios';

const userLogin = async (params, state) => {
  //console.log(params)
 
  try {
  
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v1/usuarios/login',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: false,
      params: {
        params,
      },
    });

} catch(err) {
    // TODO
    // adicionar tratamento da exceção
    console.error(err);
}
}

export  default userLogin;
