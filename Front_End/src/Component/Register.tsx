import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === rePassword) {
			console.log(email, password);
		}
	};
	return (
		<section className="container-fluid">
			<form onSubmit={onSubmit} className="w-75 mx-auto card p-5">
				<h2 className="text-center">Create A User</h2>

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onBlur={(e) => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						required
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onBlur={(e) => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Retype Password
					</label>
					<input
						onBlur={(e) => setRePassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						required
					/>
				</div>
				<div className="mb-3 d-lg-flex justify-content-lg-center d-block">
					<h6>You Are Alrady A User!</h6>
					<Link to="/login" className="nav-link">
						<h6 className="ms-2 text-decoration-underline text-primary">
							Please LogIn.
						</h6>
					</Link>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn w-lg-25 w-100 fw-bold mx-auto"
					style={{ backgroundColor: '#f5424b', color: 'white' }}
				/>
			</form>
		</section>
	);
};

export default Register;
