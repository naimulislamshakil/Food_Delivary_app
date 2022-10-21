import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SingleProduct } from '../Redux/Action/ActionType/GetByIdActionType';
import '../scss/App/App.css';

interface Props {
	product: SingleProduct;
}

const ProductCard = ({ product }: Props) => {
	const navigation = useNavigate();
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
				<button className="btn btn-outline-success">Buy Now</button>
				<button className="btn btn-outline-danger">Add To Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
