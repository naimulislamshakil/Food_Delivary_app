import React from 'react';
import '../../scss/App/App.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Cart = () => {
	return (
		<section className="container-fluid">
			<h2>Shopping Cart</h2>
			<p>
				You have <span className="fw-bold">4</span> item in shopping cart.
			</p>

			<div className="row">
				<div className="col-12 rounded-3">
					{/* product information */}
					<div
						className="cart_main_container"
						style={{ background: '#f5e2df' }}
					>
						<Scrollbars>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
							<div className="item-info p-2 d-flex align-items-center justify-content-center">
								<div className="product-img">
									<img
										src="https://i.ibb.co/CbmfpLt/image.jpg"
										alt=""
										style={{
											width: '120px',
											height: '80px',
											borderRadius: '10px',
										}}
									/>
								</div>

								<div className="title ms-5">
									<h6>Perfect Long-Grain White Rice</h6>
									<p>Rich</p>
								</div>

								<div className="input-field ms-5">
									<button className="btn btn-outline-success">
										<i className="bi bi-plus"></i>
									</button>
									<input
										className="ms-2 text-center w-25"
										disabled
										type="text"
										placeholder="2"
									/>
									<button className="btn btn-outline-danger ms-2">
										<i className="bi bi-dash"></i>
									</button>
								</div>

								<div className="price ms-5">
									<h6>40৳</h6>
								</div>

								<div className="remove ms-5">
									<button className="btn btn-outline-danger">X</button>
								</div>
							</div>
						</Scrollbars>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
