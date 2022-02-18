import "./App.css";
import Home from "./Component/Home/Home";
import Add_Details from "./Component/Add_Details/Add_Details";
import Read_Details from "./Component/Read_Details/Read_Details";
import NavBar from "./Component/NavBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add_Details />}>
            {/* <Route path="/NavBar" element={<NavBar />} /> */}
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route exact path="/Add_Details" element={<Add_Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </div>
  );
}
export default App;
