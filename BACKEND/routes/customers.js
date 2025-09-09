import express from "express";
import Customer from "../models/customer.js";

const Router = express.Router();

//Create
Router.route("/add").post(async(req,res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const telephoneno = req.body.telephoneno;

    const newCustomer = new Customer({
        fullname,
        email,
        password,
        telephoneno
    });

    await newCustomer.save()
    .then(() => {
        res.json("Customer Added");
    })
    .catch((err) => {
        console.log(err);
    });
});


//Read all
Router.route("/").get(async(req,res) => {
    await Customer.find()
    .then((customers) => {
        res.json(customers);
    })
    .catch((err) => {
        console.log(err);
    });
});

//Read one
Router.route("/get/:id").get(async(req,res) => {
    let userID = req.params.id;

    const user = await Student.findById(userID)
    .then((customer) => {
        res.json(customer);
    })
    .catch((err) => {
        res.status(500).send({status: "Error with finding data", error: err.message});
    });
});


//Update
Router.route("/update/:id").put(async(req,res) => {
    let userID = req.params.id;
    
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const telephoneno = req.body.telephoneno;
    
    const updateCustomer = {
        fullname,
        email,
        password,
        telephoneno
    }

    await Customer.findByIdAndUpdate(userID,updateCustomer)
    .then(() => {
        res.status(200).send({status: "User updated"});
    })
    .catch((err) => {
        res.status(500).send({status: "Error with updating data", error: err.message});
    });
});


//Delete
Router.route("/delete/:id").delete(async(req,res) => {
    let userID = req.params.id;
    
    await Customer.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    })
    .catch((err) => {
        res.status(500).send({status: "Error with delete user", error: err.message});
    });
});

export default Router;