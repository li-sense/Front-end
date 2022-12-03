import api from "./BaseApp";
import axios from "axios";
const register = async (params, state) => {
  var test  = {
    email:"sfgfffs@gmail.com",
    senha:'asa123456',
    nome:'antonio',
    sobrenome:"test",
    celular:'190'
  }
  var url = 'http://localhost:8000/api/v1/usuarios/registra-usuarios'
 

  axios(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
    params: test
  }).then(response => {
  
  })
}

export  default register;
