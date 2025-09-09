import React, {useState} from "react";
import axios from "axios";

function AddCustomer() {
    var [fullname, setName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [telephoneno, setTele] = useState("");

  return (
    <div className="App">
        <h1>Add Customer</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const newCustomer = {
            fullname,
            email,
            password,
            telephoneno
        }
        
        axios.post("http://localhost:8070/Customer/create", newCustomer)
        .then(() => {
            alert("Customer added");
        })
        .catch((err) => {
            alert(err);
        })
    }}>
        
        <div className="form-group">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Full Name" 
            onChange={(e) => {
                setName(e.target.value);
            }} required/>
        </div>
        <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="mail" placeholder="Enter your Email Address"
            onChange={(e) => {
                setEmail(e.target.value);
            }} required/>
        </div>
        <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" id="pw" placeholder="Enter a Password"
            onChange={(e) => {
                setPassword(e.target.value);
            }} required/>
        </div><br/>
        <div className="form-group">
            <label htmlFor="telephoneno" className="form-label">Telephone No</label>
            <input type="text" className="form-control" id="tele" placeholder="Enter your Phone Number"
            onChange={(e) => {
                setTele(e.target.value);
            }} required/>
        </div><br/>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;