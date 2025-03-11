import "./App.css";

import { BmiProvider } from "./context/BmiContext";
import Footer from "./landmarks/Footer";
import Main from "./landmarks/Main";

function App() {
  return (
    <BmiProvider>
      <Main />
      <Footer />
    </BmiProvider>
  );
}

export default App;
