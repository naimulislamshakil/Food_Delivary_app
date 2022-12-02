import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const [phone, setPhone] = useState('');
	const [store, setStore] = useState('');
	const [address, setAddress] = useState('');

	const updateProfile = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			contactNumber: phone,
			lastName: last,
			firstName: first,
			store,
			location: address,
		};

		fetch('http://localhost:5000/api/v1/user/update', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => toast.success(data.message))
			.catch((err) => toast.error(err.message));
	};
	return (
		<section>
			<h2 className="text-success">UPDAE PROFILE....</h2>
			<div className="container-xl px-4 mt-4">
				<div className="row">
					<div className="col-xl-4">
						{/* <!-- Profile picture card--> */}
						<div className="card mb-4 mb-xl-0">
							<div className="card-header">Profile Picture</div>
							<div className="card-body text-center">
								{/* <!-- Profile picture image--> */}
								<img
									className="img-account-profile rounded-circle mb-2"
									src="http://bootdey.com/img/Content/avatar/avatar1.png"
									alt=""
								/>
								{/* <!-- Profile picture help block--> */}
								<div className="small font-italic text-muted mb-4">
									JPG or PNG no larger than 5 MB
								</div>
								{/* <!-- Profile picture upload button--> */}
								<button className="btn btn-primary" type="button">
									Upload new image
								</button>
							</div>
						</div>
					</div>
					<div className="col-xl-8">
						{/* <!-- Account details card--> */}
						<div className="card mb-4">
							<div className="card-header">Account Details</div>
							<div className="card-body">
								<form onSubmit={updateProfile}>
									{/* <!-- Form Row--> */}
									<div className="row gx-3 mb-3">
										{/* <!-- Form Group (first name)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputFirstName">
												First name
											</label>
											<input
												onBlur={(e) => setFirst(e.target.value)}
												className="form-control"
												id="inputFirstName"
												type="text"
												placeholder="Enter your first name"
											/>
										</div>
										{/* <!-- Form Group (last name)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputLastName">
												Last name
											</label>
											<input
												onBlur={(e) => setLast(e.target.value)}
												className="form-control"
												id="inputLastName"
												type="text"
												placeholder="Enter your last name"
											/>
										</div>
									</div>

									{/* <!-- Form Row--> */}
									<div className="row gx-3 mb-3">
										{/* <!-- Form Group (phone number)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputPhone">
												Phone number
											</label>
											<input
												onBlur={(e) => setPhone(e.target.value)}
												className="form-control"
												id="inputPhone"
												type="tel"
												placeholder="Enter your phone number"
											/>
										</div>
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputLastName">
												Store Name
											</label>
											<input
												onBlur={(e) => setStore(e.target.value)}
												className="form-control"
												id="inputLastName"
												type="text"
												placeholder="Enter your Store Name"
											/>
										</div>
									</div>

									<div className="row gx-3 mb-3">
										<div className="col-12">
											<label className="small mb-1" htmlFor="inputLastName">
												Store Location
											</label>
											<input
												onBlur={(e) => setAddress(e.target.value)}
												className="form-control"
												id="inputLastName"
												type="text"
												placeholder="Enter your Store Location"
											/>
										</div>
									</div>

									{/* <!-- Save changes button--> */}
									<input
										type="submit"
										value="Save changes"
										className="btn btn-primary"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UpdateProfile;
