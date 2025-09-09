import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateCustomer() {
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephoneno, setTele] = useState("");

    const {id} = useParams();
    
    const getCustomers = () => {
        axios.get("http://localhost:8070/Customer/get/"+id)
        .then((res) => {
            const UpdateCustomer = {
                fullname: res.data.fullname,
                email: res.data.email,
                password: res.data.password,
                telephoneno: res.data.telephoneno,
            }

            // console.log(res.data);
            setName(UpdateCustomer.fullname);
            setEmail(UpdateCustomer.email);
            setPassword(UpdateCustomer.password);
            setTele(UpdateCustomer.telephoneno);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getCustomers(), []);

    return (
        <div className="App">
            <h1>Update Customer</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                const newCustomer = {
                    fullname,
                    email,
                    password,
                    telephoneno,
                }
                
                axios.put("http://localhost:8070/Customer/update/"+id, newCustomer)
                .then(() => {
                    alert("Customer Updated");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>
            <div className="form-group">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" value={fullname} 
                onChange={(e) => {
                    setName(e.target.value);
                }} />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="mail" value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="pw" value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }} />
            </div><br/>
            <div className="form-group">
                <label htmlFor="telephoneno" className="form-label">Telehone No</label>
                <input type="text" className="form-control" id="tele" value={telephoneno}
                onChange={(e) => {
                    setTele(e.target.value);
                }} />
            </div><br/>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    );
};

export default UpdateCustomer;