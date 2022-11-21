import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DecressAddToCartAction } from '../../Redux/Action/Action/desressAddToCartAction';
import { IncressAddToCartAction } from '../../Redux/Action/Action/incressAddToCartAction';
import { RemoveAddToCartAction } from '../../Redux/Action/Action/removeAddToCartAction.';
import { SingleAddToCartProduct } from '../../Redux/Action/ActionType/getAddToCartActionType';
// import { RootStore } from '../../Redux/Store';

interface Props {
	cart: SingleAddToCartProduct;
}

const Item = ({ cart }: Props) => {
	const dispatch = useDispatch();
	// const removeAddTo = useSelector((state: RootStore) => state.removeAddToCart);
	// const incressRemoveAddTo = useSelector((state: RootStore) => state.incress);
	const [value, setValue] = useState(cart.orderQuantity);
	const [productPrice, setProductPrice] = useState(cart.totalPrice);

	//

	const plus = (id: string) => {
		// console.log(id);

		const numValue = value + 1;
		const price = cart.price * numValue;
		dispatch(IncressAddToCartAction(id, price));
		// console.log(price);
		setValue(numValue);
		setProductPrice(price);
		window.location.reload();
	};
	const muines = (id: string) => {
		if (value > 1) {
			const numValue = value - 1;
			const price = cart.price * numValue;
			dispatch(DecressAddToCartAction(id, price));
			setValue(numValue);
			setProductPrice(price);
			window.location.reload();
		}
	};
	// console.log(incressRemoveAddTo);

	const removeAddToCart = (id: string) => {
		dispatch(RemoveAddToCartAction(id));
		window.location.reload();
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
				<button
					className="btn btn-outline-success"
					onClick={(e) => plus(cart._id)}
				>
					<i className="bi bi-plus"></i>
				</button>
				<input
					className="ms-2 text-center w-25"
					disabled
					type="text"
					value={value}
				/>
				<button
					className="btn btn-outline-danger ms-2"
					onClick={(e) => muines(cart._id)}
				>
					<i className="bi bi-dash"></i>
				</button>
			</div>

			<div className="price ms-5">
				<h6>{productPrice}৳</h6>
			</div>

			<div className="remove ms-5">
				<button
					onClick={(e) => removeAddToCart(cart._id)}
					className="btn btn-outline-danger"
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Item;
