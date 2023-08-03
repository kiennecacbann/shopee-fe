import ReactDom  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Help from "./components/help/Help";
import Product from "./components/product/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = ''/>
        <Route index element={<Home/>}/>
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element ={<SignUp/>} />
        <Route path="/help" element ={<Help/>} />
        <Route path="/product" element ={<Product/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
