// import './App.css';
// import Homepage from "./components/homepage/homepage"
// import Login from "./components/login/login"
// import Register from "./components/register/register"

// function App() {
//   return (
//     <div className="App">
//      {/* <Homepage/> */}
//      <Register/>
//      {/* <Login/> */}
     
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import { Navbar }  from "./components/nav/navbar"
import Register from "./components/register/register"
import Login from "./components/login/login"
import Homepage from "./components/homepage/homepage"
import Footer from "./components/footer/footer"

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="App">
      <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/homepage' element={< Homepage />}></Route>
      </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;