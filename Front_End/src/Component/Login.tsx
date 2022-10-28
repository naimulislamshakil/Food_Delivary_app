import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginAction } from '../Redux/Action/Action/LoginAction';
import { RootStore } from '../Redux/Store';

const Login = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: RootStore) => state.user);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const users = {
			email,
			password,
		};
		dispatch(LoginAction(users));
		if (user?.status === 'Success') {
			navigate(from, { replace: true });
		}

		window.localStorage.setItem('token', JSON.stringify(user?.data.token));

		window.localStorage.setItem('user', JSON.stringify(user?.data.user));
	};

	return (
		<section className="container-fluid mt-4">
			<form onSubmit={onSubmit} className="w-75 mx-auto card p-5">
				<h2 className="text-center">Log In</h2>
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
				<div className="mb-3 d-lg-flex justify-content-lg-center d-block">
					<p>You Are Not A User!</p>
					<Link to="/register" className="nav-link">
						<p className="ms-2 text-decoration-underline text-primary">
							Please Register.
						</p>
					</Link>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn w-lg-25 w-100 fw-bold mx-auto"
					style={{ backgroundColor: '#f5424b', color: 'white' }}
				/>
			</form>
		</section>
	);
};

export default Login;
