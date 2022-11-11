import React, { useState } from 'react';
import { SingleAddToCartProduct } from '../../Redux/Action/ActionType/getAddToCartActionType';

interface Props {
	cart: SingleAddToCartProduct;
}

const Item = ({ cart }: Props) => {
	const [value, setValue] = useState('1');

	const plus = () => {
		const numValue = parseInt(value) + 1;
		const string = numValue.toString();
		setValue(string);
	};
	const muines = () => {
		if (value > '1') {
			const numValue = parseInt(value) - 1;
			const string = numValue.toString();
			setValue(string);
		}
	};
	return (
		<div className="item-info p-2 d-flex align-items-center justify-content-center">
			<div className="product-img">
				<img
					src={cart.img}
					alt=""
					style={{
						width: '120px',
						height: '80px',
						borderRadius: '10px',
					}}
				/>
			</div>

			<div className="title ms-5">
				<h6>{cart.name}</h6>
				<p>{cart.category}</p>
			</div>

			<div className="input-field ms-5">
				<button className="btn btn-outline-success" onClick={(e) => plus()}>
					<i className="bi bi-plus"></i>
				</button>
				<input
					className="ms-2 text-center w-25"
					disabled
					type="text"
					placeholder={value}
				/>
				<button
					className="btn btn-outline-danger ms-2"
					onClick={(e) => muines()}
				>
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
	);
};

export default Item;
