import './App.css';
import React from "react";
import AddCustomer from './components/AddCustomer';
import {
  BrowserRouter , Router,
  Route,
  Routes,
} from "react-router-dom";
import AllCustomer from './components/AllCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import Sidebar from './components/sidebar';
import Header from './components/header';

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Sidebar/>
    <header/>
    <Routes>
        <Route path="/allcustomer" exact element={<AllCustomer/>} />
        {/* </Routes> */}

        {/* <Routes> */}
          <Route path="/addcustomer" exact element={<AddCustomer/>} />
        {/* </Routes> */}

        {/* <Routes> */}
          <Route path="/get/:id" exact element={<UpdateCustomer/>} />
        </Routes>
        
    </BrowserRouter>
    </div>
    //<main>
      /* <div className="App"> */
    //</div>
    //</main>
    //</>
  );
}


export default App;
