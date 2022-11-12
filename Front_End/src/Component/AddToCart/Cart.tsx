import React, { useEffect, useState } from 'react';
import '../../scss/App/App.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Redux/Store';
import { GetAddToCartAction } from '../../Redux/Action/Action/getAddToCartAction';

const Cart = () => {
	// const [totalPrice, setTotalPrice] = useState(0);

	const dispatch = useDispatch();
	const getAddToCarts = useSelector((state: RootStore) => state.getAddToCarts);

	const user = JSON.parse(localStorage.getItem('user')!);
	const { email } = user;

	useEffect(() => {
		dispatch(GetAddToCartAction(email));
	}, [dispatch, email]);

	// console.log(totalPrice);
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
							{getAddToCarts.message?.result?.result.map((cart) => (
								<Item key={cart._id} cart={cart}></Item>
							))}
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
