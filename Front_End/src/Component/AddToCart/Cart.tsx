import React from 'react';
import '../../scss/App/App.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';

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
							<Item />
						</Scrollbars>
					</div>
				</div>
			</div>

			<div className="card-total">
				<h3>
					Cart Total: <span>20000000৳</span>
				</h3>
				<button>CheckOut</button>
			</div>
		</section>
	);
};

export default Cart;
