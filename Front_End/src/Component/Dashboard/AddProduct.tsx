import React, { FormEvent, useState } from 'react';

const AddProduct = () => {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState('');
	const [unit, setUnit] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [img, setImg] = useState('');
	const [category, setCatagory] = useState('');
	const [storeName, setStoreName] = useState('');
	const [location, setLocation] = useState('');
	const [place, setPlace] = useState('');

	const addProduct = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = {
			name,
			quantity,
			unit,
			description,
			price,
			store: storeName,
			location,
			place,
			img,
			category,
		};

		console.log(data);
	};

	return (
		<section>
			<div className="col-12">
				{/* <!-- Account details card--> */}
				<div className="card mb-4">
					<div className="card-header">Add Product...</div>
					<div className="card-body">
						<form onSubmit={addProduct}>
							{/* <!-- Form Row--> */}
							<div className="row gx-3 mb-3">
								{/* <!-- Form Group (first name)--> */}
								<div className="col-md-6">
									<label className="small mb-1" htmlFor="inputFirstName">
										Product Name
									</label>
									<input
										onBlur={(e) => setName(e.target.value)}
										className="form-control"
										id="inputFirstName"
										type="text"
										placeholder="Enter your product name."
									/>
								</div>
								{/* <!-- Form Group (last name)--> */}
								<div className="col-md-6">
									<label className="small mb-1" htmlFor="inputLastName">
										Quantity
									</label>
									<input
										onBlur={(e) => setQuantity(e.target.value)}
										className="form-control"
										id="inputLastName"
										type="text"
										placeholder="Enter your quantity."
									/>
								</div>
							</div>

							{/* <!-- Form Row--> */}
							<div className="row gx-3 mb-3">
								{/* <!-- Form Group (phone number)--> */}
								<div className="col-md-6">
									<label className="small mb-1" htmlFor="inputPhone">
										Price
									</label>
									<input
										onBlur={(e) => setPrice(e.target.value)}
										className="form-control"
										id="inputPhone"
										type="text"
										placeholder="Enter your price."
									/>
								</div>
								<div className="col-md-6">
									<label className="small mb-1" htmlFor="inputLastName">
										Store Name
									</label>
									<input
										onBlur={(e) => setStoreName(e.target.value)}
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
										onBlur={(e) => setLocation(e.target.value)}
										className="form-control"
										id="inputLastName"
										type="text"
										placeholder="Enter your Store Location"
									/>
								</div>
							</div>
							<div className="row gx-3 mb-3">
								<div className="col-12">
									<label className="small mb-1" htmlFor="inputLastName">
										Store Place
									</label>
									<input
										onBlur={(e) => setPlace(e.target.value)}
										className="form-control"
										id="inputLastName"
										type="text"
										placeholder="Enter your Store Place"
									/>
								</div>
							</div>

							<div className="row gx-3 mb-3">
								<div className="col-12">
									<label className="small mb-1" htmlFor="inputLastName">
										Product Image
									</label>
									<input
										onBlur={(e) => setImg(e.target.value)}
										className="form-control"
										id="inputLastName"
										type="text"
										placeholder="Enter your product image link."
									/>
								</div>
							</div>

							<div className="row gx-3 mb-3">
								<div className="col-12">
									<label className="small mb-1" htmlFor="inputLastName">
										Product Unit
									</label>
									<select
										onBlur={(e) => setUnit(e.target.value)}
										className="form-select"
										aria-label="Default select example"
									>
										<option selected>Open this select menu</option>
										<option value="pcs">pcs</option>
										<option value="plate">plate</option>
									</select>
								</div>
							</div>

							<div className="row gx-3 mb-3">
								<div className="col-12">
									<label className="small mb-1" htmlFor="inputLastName">
										Product Catagory
									</label>
									<select
										onBlur={(e) => setCatagory(e.target.value)}
										className="form-select"
										aria-label="Default select example"
									>
										<option selected>Open this select menu</option>
										<option value="Rich">Rich</option>
										<option value="Fish">Fish</option>
										<option value="Vagetable">Vagetable</option>
										<option value="Biryani">Biryani</option>
										<option value="Chichen">Chichen</option>
										<option value="Soup">Soup</option>
									</select>
								</div>
							</div>

							<div className="row gx-3 mb-3">
								<div className="col-12">
									<label className="small mb-1" htmlFor="inputLastName">
										Product Description
									</label>
									<textarea
										onBlur={(e) => setDescription(e.target.value)}
										className="form-control"
										placeholder="Leave a comment here"
										id="floatingTextarea2"
										style={{ height: '100px' }}
									></textarea>
								</div>
							</div>

							{/* <!-- Save changes button--> */}
							<div className="text-center">
								<input
									type="submit"
									value="Add Product"
									className="btn btn-danger"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddProduct;
