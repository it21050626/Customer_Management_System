import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    axios.get("http://localhost:8070/Customer/")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteCustomers = (id) => {
    axios.delete("http://localhost:8070/Customer/delete/"+id)
    .then((res) => {qaw
      alert("Customer deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => getCustomers(), []);

  return (
    <div className="App">
      <h1>All Customers</h1>

      {customers.map((data) => {
        return (
          <div className="list-group">
            <div className="list-group-item" key={data.id}>
              ID: {data._id}<br />
              Full Name: {data.fullname}<br />
              Email: {data.email}<br />
              Password: {data.password}<br />
              Phone No: {data.telephoneno}<br />
              <Link to={"/update/"+data._id} className="btn btn-warning">Update</Link>
              <Link to={"/"} className="btn btn-danger" onClick={() => deleteCustomers(data._id)}>Delete</Link>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default AllCustomers;
