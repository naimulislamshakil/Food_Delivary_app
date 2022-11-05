import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterAction } from '../Redux/Action/Action/RegisterAction';
import { RootStore } from '../Redux/Store';
import { toast } from 'react-toastify';

const Register = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: RootStore) => state.registerUser);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === rePassword) {
			const user = { email, password, firstName, lastName };

			dispatch(RegisterAction(user));
		}
	};
	if (user.message?.status === 'Success') {
		toast.success(`${user.message.message}. Pleace Active Your Account.`);
	}

	return (
		<section className="container-fluid">
			<form onSubmit={onSubmitLogin} className="w-75 mx-auto card p-5">
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
					<label htmlFor="exampleInputEmail1" className="form-label">
						First Name
					</label>
					<input
						onBlur={(e) => setFirstName(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Last Name
					</label>
					<input
						onBlur={(e) => setLastName(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						required
					/>
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
					<p>You Are Alrady A User!</p>
					<Link to="/login" className="nav-link">
						<p className="ms-2 text-decoration-underline text-primary">
							Please LogIn.
						</p>
					</Link>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn w-lg-25 w-25 fw-bold mx-auto"
					style={{ backgroundColor: '#f5424b', color: 'white' }}
				/>
			</form>
		</section>
	);
};

export default Register;
