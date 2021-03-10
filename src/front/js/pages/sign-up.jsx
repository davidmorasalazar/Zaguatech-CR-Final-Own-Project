import React, { useState } from "react";
import { Link } from "react-router-dom";

export function SignUp() {
	const [user_name, setUser] = useState("");
	const [fundation_name, setFundation] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone_number, setPhone] = useState("");
	const [province, setProvince] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		//Validating empty fields
		if (
			user_name === "" ||
			fundation_name === "" ||
			email === "" ||
			password === "" ||
			phone_number === "" ||
			province === "Province"
		) {
			alert("Please fill all the entries");
		}

		// Creating body
		const data = {
			user_name: user_name,
			fundation_name: fundation_name,
			email: email,
			password: password,
			phone_number: phone_number,
			province: province
		};

		//FETCH POST method
		fetch("URL", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					response.text().then(text => alert(text));
					throw Error(response.statusText);
				} else {
					setRedirect(true);
				}
				return response.json();
			})
			.then(data => {
				console.log("New user was registered");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="container my-3">
			<div className="row">
				<div className="col-md">
					<h1 className="font text-center mb-0 mt-3">Sign Up</h1>
				</div>
			</div>
			<hr />
			<div className="text-center d-flex justify-content-center align-items-center ">
				<form className="rounded shadow px-2" style={{ width: "400px" }} /*onSubmit={}*/>
					<div className="form-row my-2">
						<div className="col-md ">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Fundation Name"
								required
								//onChange={}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="User"
								required
								//onChange={}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="email"
								className="form-control form-control-lg"
								placeholder="Email"
								required
								//onChange={}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Phone Number"
								required
								//onChange={}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<input
								type="password"
								className="form-control form-control-lg"
								placeholder="Password"
								required
								//onChange={}
							/>
						</div>
					</div>
					<div className="form-row my-2">
						<div className="col-md">
							<select className="form-control form-control-lg">
								<option selected>Province</option>
								<option>Limon</option>
								<option>Cartago</option>
								<option>Heredia</option>
								<option>San Jose</option>
								<option>Alajuela</option>
								<option>Puntarenas</option>
								<option>Guanacaste</option>
							</select>
						</div>
					</div>
					<div className="submit-row my-2 d-flex justify-content-end">
						<button type="submit" className="btn btn-primary mr-1">
							Sign Up
						</button>
						<button type="reset" className="btn btn-danger ml-1">
							Cancel
						</button>
					</div>
				</form>
			</div>
			<div className="row mt-3">
				<div className="col-md">
					<p className="text-center">
						Already have an account? <Link to="/log-in">Log in</Link>
					</p>
				</div>
			</div>
		</div>
	);
}