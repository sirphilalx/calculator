import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/calculator" Component={Calculator} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
