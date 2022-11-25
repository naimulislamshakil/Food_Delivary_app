import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './AddToCart/CheckoutForm';

interface USER {
	contactNumber: string;
	email: string;
	firstName: string;
	img: string;
	lastName: string;
	role: string;
	status: string;
	_id: string;
}

const stripePromise = loadStripe(
	'pk_test_51M768UKh8Puyw6N9H5rr8w6MwXvRpXIwxl4cbYOxjAjBiXaGzZKAilBytOtH4TrC9fbQEgl8H6HMkDC3S903mRi500axrXflcJ'
);
const BuyNow = () => {
	const [tax, setTax] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);
	const [user, setUser] = useState<USER>();
	const [address, setAddress] = useState('');
	const [address2, setAddress2] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');
	const { totalPrice } = useParams();

	// count tax
	useEffect(() => {
		if (totalPrice !== undefined) {
			setTax((5 * parseInt(totalPrice)) / 100);
			const total = parseInt(totalPrice) + tax;
			setGrandTotal(total);
		}
		if (localStorage.getItem('user')) {
			const user = JSON.parse(window.localStorage.getItem('user')!);
			setUser(user);
		}
	}, [tax, totalPrice]);

	const name = user?.firstName + ' ' + user?.lastName;
	const email = user?.email;

	const placeOrder = (id: string) => {
		if (id) {
			const orderDetils = {
				name: user?.firstName + ' ' + user?.lastName,
				email: user?.email,
				phone: user?.contactNumber,
				address,
				id,
				totalPrice,
				address2,
				country,
				state,
				zip,
			};
			console.log(orderDetils);
		}
	};

	return (
		<section className="container-fluid mt-3 p-5">
			<div className="row">
				<div className="col-md-4 order-md-2 mb-4">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-muted">Your cart</span>
						<span className="badge badge-secondary badge-pill">3</span>
					</h4>
					<ul className="list-group mb-3">
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Total Price</h6>
							</div>
							<b>
								<span className="text-muted">৳{totalPrice}</span>
							</b>
						</li>
						<li className="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<h6 className="my-0">Tax</h6>
							</div>
							<b>
								<span className="text-muted">৳{tax}</span>
							</b>
						</li>

						<li className="list-group-item d-flex justify-content-between bg-light">
							<div className="text-success">
								<h6 className="my-0">Promo code</h6>
								<small>EXAMPLECODE</small>
							</div>
							<span className="text-success">-৳0</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span>Total (BDT)</span>
							<strong>৳{grandTotal}</strong>
						</li>
					</ul>

					<form className="card p-2">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Promo code"
							/>
							<div className="input-group-append">
								<button type="submit" className="btn btn-secondary">
									Redeem
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-md-8 order-md-1">
					<h4 className="mb-3">Billing address</h4>
					<div className="needs-validation">
						<div className="row">
							<div className="col-md-12 mb-3">
								<label htmlFor="lastName">Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									value={user?.firstName + ' ' + user?.lastName}
									required
									readOnly
									disabled
								/>
								<div className="invalid-feedback">
									Valid last name is required.
								</div>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="username">Email</label>
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									id="username"
									value={user?.email}
									required
									readOnly
									disabled
								/>
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="username">Phone Number</label>
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									id="username"
									value={user?.contactNumber}
									required
									readOnly
									disabled
								/>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="address">Address</label>
							<input
								type="text"
								className="form-control"
								id="address"
								placeholder="1234 Main St"
								onBlur={(e) => setAddress(e.target.value)}
								required
							/>
							<div className="invalid-feedback">
								Please enter your shipping address.
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="address2">
								Address 2 <span className="text-muted">(Optional)</span>
							</label>
							<input
								type="text"
								className="form-control"
								id="address2"
								placeholder="Apartment or suite"
								onBlur={(e) => setAddress2(e.target.value)}
							/>
						</div>

						<div className="row">
							<div className="col-md-5 mb-3">
								<label htmlFor="country">Country</label>
								<select
									className="custom-select d-block w-100"
									id="country"
									onBlur={(e) => setCountry(e.target.value)}
									required
								>
									<option value="">Choose...</option>
									<option>Bangladesh</option>
								</select>
								<div className="invalid-feedback">
									Please select a valid country.
								</div>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="state">State</label>
								<select
									className="custom-select d-block w-100"
									id="state"
									onBlur={(e) => setState(e.target.value)}
									required
								>
									<option value="">Choose...</option>
									<option>Dhaka</option>
									<option>Chittagong</option>
									<option>Sylhet</option>
									<option>Cox's Bazar</option>
									<option>Rajshahi</option>
									<option>Khulna</option>
									<option>Comilla</option>
									<option>Barisal</option>
									<option>Rangpur</option>
									<option>Pirojpur</option>
									<option>Chandpur</option>
									<option>Bhola</option>
								</select>
								<div className="invalid-feedback">
									Please provide a valid state.
								</div>
							</div>
							<div className="col-md-3 mb-3">
								<label htmlFor="zip">Zip</label>
								<input
									type="text"
									className="form-control"
									id="zip"
									onBlur={(e) => setZip(e.target.value)}
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Zip code required.</div>
							</div>
						</div>
						<hr className="mb-4" />
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="same-address"
							/>
							<label
								className="custom-control-label ms-2"
								htmlFor="same-address"
							>
								Shipping address is the same as my billing address
							</label>
						</div>
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="save-info"
							/>
							<label className="custom-control-label ms-2" htmlFor="save-info">
								Save this information for next time
							</label>
						</div>
						<hr className="mb-4" />

						<div className="mb-4">
							<Elements stripe={stripePromise}>
								<CheckoutForm
									totalPrice={totalPrice}
									name={name}
									email={email}
									placeOrder={placeOrder}
								/>
							</Elements>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyNow;
