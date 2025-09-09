// login
import express from "express";
import Customer from "../models/customer.js";
import asyncHandler from "express-async-handler";

const customerRoutes= express.Router();

customerRoutes.route("/login").post(function (req, response) {
	let db_connect = dbo.getDb("synthetic");
	let email = req.body.email;
	let password = req.body.password;

	db_connect.collection("customer").findOne({ email: email, password: password }, function (err, result) {
		if (err) throw err;
		if (result) {
			const token = jwt.sign(
				{
					id: result._id,
					fname: result.fname,
					lname: result.lname,
					address: result.address,
					contactno: result.contactno,
					email: result.email,
					password: result.password,
					totalpurchases: result.totalpurchases,
					totalpayments: result.totalpayments,
					imgurl: result.imgurl,
				},
				"secretkey"
			);

			return response.json({ user: true, msg: "Login Success", status: "ok", token: token });
		} else {
			return response.json({ user: false, msg: "Login Failed", status: "error" });
		}
	});
});