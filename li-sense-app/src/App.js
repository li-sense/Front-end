import RouterComponent from "./_router/RouterComponent";
import { LisenseProvider } from "./_context/LisenseProvider";
import "../src/_assets/GlobalStyle.css";

import "./tailwind.css";
function App() {
  return (
    <>
      <LisenseProvider>
        <RouterComponent />
      </LisenseProvider>
    </>
  );
}

export default App;
