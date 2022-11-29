import React from 'react';

const UpdateProfile = () => {
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
								<form>
									{/* <!-- Form Row--> */}
									<div className="row gx-3 mb-3">
										{/* <!-- Form Group (first name)--> */}
										<div className="col-md-6">
											<label className="small mb-1" htmlFor="inputFirstName">
												First name
											</label>
											<input
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
												className="form-control"
												id="inputPhone"
												type="tel"
												placeholder="Enter your phone number"
											/>
										</div>
									</div>
									{/* <!-- Save changes button--> */}
									<button className="btn btn-primary" type="button">
										Save changes
									</button>
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
