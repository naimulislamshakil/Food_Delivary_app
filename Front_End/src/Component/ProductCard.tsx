/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddToCartAction } from '../Redux/Action/Action/addToCartAction';
import { SingleProduct } from '../Redux/Action/ActionType/GetByIdActionType';
import { RootStore } from '../Redux/Store';
import '../scss/App/App.css';

interface Props {
	product: SingleProduct;
}

const ProductCard = ({ product }: Props) => {
	const dispatch = useDispatch();
	const addToCartDispatch = useSelector((state: RootStore) => state.addToCart);

	const navigation = useNavigate();

	const buyNow = (id: string) => {
		navigation(`/shopping/${id}`);
	};

	const addToCart = (item: SingleProduct) => {
		const {
			_id: id,
			category,
			description,
			img,
			name,
			price,
			quantity,
			status,
			store,
			unit,
		} = item;
		const user = JSON.parse(localStorage.getItem('user')!);
		const { email } = user;
		const product = {
			email,
			id,
			category,
			description,
			img,
			name,
			price,
			quantity,
			status,
			store,
			unit,
		};
		dispatch(AddToCartAction(product));
		if (addToCartDispatch?.message?.status === 'Success') {
			// console.log(addToCartDispatch?.message?.status);
			toast.success(addToCartDispatch.message.message);
		} else {
			toast.error(addToCartDispatch.message?.message);
		}
	};
	console.log(addToCartDispatch);

	return (
		<div
			className="col-12 col-lg-3 col-md-6 mx-auto card shadow mt-3"
			style={{ width: '18rem' }}
		>
			<div className="inner">
				<img className="card-img-top store-img" src={product.img} alt="" />
			</div>
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				{product.status === 'In-Stock' ? (
					<span className="card-text bg-success text-white p-1 rounded-pill px-2">
						{product.status}
					</span>
				) : (
					<span className="card-text bg-warning text-white p-1 rounded-pill px-2">
						{product.status}
					</span>
				)}
				<div className="d-flex align-items-center justify-content-between mt-2">
					<h6>Price: {product.price}৳</h6>
					<div className="d-flex align-items-center">
						<h6>{product.quantity}</h6>
						<h6 className="ms-1"> {product.unit}</h6>
					</div>
				</div>
				<p className="card-text">{product.description}</p>
			</div>
			<div className="card-footer justify-content-between d-flex">
				<button
					className="btn btn-outline-success"
					onClick={() => buyNow(product._id)}
				>
					Buy Now
				</button>
				<button
					className="btn btn-outline-danger"
					onClick={(e) => addToCart(product)}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
