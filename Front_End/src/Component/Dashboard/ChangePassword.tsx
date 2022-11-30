import React, { useState } from 'react';

const ChangePassword = () => {
	const [old, setOld] = useState('');
	const [newPass, setNew] = useState('');
	const [confirm, setConfirm] = useState('');
	const changePassword = () => {
		if (newPass === confirm) {
			fetch('http://localhost:5000/api/v1/user/changePassword', {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
				},
				body: JSON.stringify(data),
			});
		}
	};
	return (
		<div>
			<h2 className="text-success">Change Password....</h2>
			<div className="row gx-3 mb-3">
				<div className="col-md-6 mx-auto mt-2">
					<label className="small mb-1" htmlFor="inputPhone">
						Old Password
					</label>
					<input
						onBlur={(e) => setOld(e.target.value)}
						className="form-control"
						id="inputPhone"
						type="tel"
						placeholder="Enter your Old Password"
					/>
				</div>
			</div>
			<div className="row gx-3 mb-3">
				<div className="col-md-6 mx-auto mt-2">
					<label className="small mb-1" htmlFor="inputPhone">
						New Password
					</label>
					<input
						onBlur={(e) => setNew(e.target.value)}
						className="form-control"
						id="inputPhone"
						type="tel"
						placeholder="Enter your New Password"
					/>
				</div>
			</div>
			<div className="row gx-3 mb-3">
				<div className="col-md-6 mx-auto mt-2">
					<label className="small mb-1" htmlFor="inputPhone">
						Confirm Password (New)
					</label>
					<input
						onBlur={(e) => setConfirm(e.target.value)}
						className="form-control"
						id="inputPhone"
						type="tel"
						placeholder="Confirm Password (New)"
					/>
				</div>
			</div>
			<div className="text-center">
				<button onClick={changePassword} className="btn btn-danger">
					Change Password
				</button>
			</div>
		</div>
	);
};

export default ChangePassword;
