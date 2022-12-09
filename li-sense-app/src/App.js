import RouterComponent from "./_router/RouterComponent";
import axios from "axios";
import { LisenseProvider } from "./_context/LisenseProvider";
import "../src/_assets/GlobalStyle.css";
import "./tailwind.css";
import React from "react";
import LisenseContext from "./_context/LisenseContext";

function Main() {
  const { setUser, setSeller, setCompany } = React.useContext(LisenseContext);
  React.useEffect(() => {
    userLogin();
  }, []);

  const userLogin = async () => {
    var verifyUser = localStorage.getItem("userId");
    if (verifyUser) {
      axios
        .get("https://dev.li-sense.xyz/api/v1/usuarios/3", verifyUser)
        .then((res) => {
          console.log("res", res);
          setUser(res.data);
        });

      var id = localStorage.getItem("userId");
      axios
        .get(`https://dev.li-sense.xyz/api/v1/vendedor/${id}`)
        .then((res) => {
          if (res.data.nome) {
            setSeller(true);
            setCompany(res.data)
          } else {
            setSeller(false);
          }
        })
        .catch((err) => {
          setSeller(false);
        });
    }
  };
  return (
    <>
      <RouterComponent />
    </>
  );
}

function App() {
  return (
    <>
      <LisenseProvider>
        <Main />
      </LisenseProvider>
    </>
  );
}

export default App;
