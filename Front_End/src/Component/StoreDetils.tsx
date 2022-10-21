import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSingleStoreAction } from '../Redux/Action/Action/GetByIdAction';
import { RootStore } from '../Redux/Store';
import '../scss/App/App.css';
import ProductCard from './ProductCard';

const StoreDetils = () => {
	const current = new Date();

	const { id } = useParams();

	const dispatch = useDispatch();
	const { store } = useSelector((state: RootStore) => state.storeById);

	useEffect(() => {
		dispatch(GetSingleStoreAction(id));
	}, [dispatch, id]);

	const rices = store?.data.product.filter(
		(product) => product.category === 'Rich'
	);
	const fishs = store?.data.product.filter(
		(product) => product.category === 'Fish'
	);
	const vagetables = store?.data.product.filter(
		(product) => product.category === 'Vagetable'
	);
	const biryanis = store?.data.product.filter(
		(product) => product.category === 'Biryani'
	);
	const chickens = store?.data.product.filter(
		(product) => product.category === 'Chicken'
	);
	const soups = store?.data.product.filter(
		(product) => product.category === 'Soup'
	);

	console.log(rices);

	return (
		<section className="container-fluid">
			<div className="p-3">
				<div>
					<img
						className="w-100 img-fluid h-25"
						src={store?.data.imgUrl}
						alt=""
					/>
					<div className="p-3">
						<h2>{store?.data.name}</h2>
						<span className="bg-danger text-white p-2 rounded-pill">
							{store?.data.place}
						</span>
						{current.toLocaleTimeString() <= '8:00:00' &&
						current.toLocaleTimeString() >= '16:00:00' ? (
							<span className="bg-success text-white p-2 rounded-pill ms-2">
								Open
							</span>
						) : (
							<span className="bg-warning text-white p-2 rounded-pill ms-2">
								Close
							</span>
						)}
						<div className="mt-2">
							<span className="text-danger">$$$</span>
							{store?.data.tag.map((tag, index) => (
								<span key={index} className="ms-2 text-danger">
									- {tag}
								</span>
							))}
						</div>
					</div>
					<div className="p-3 border-2 bg-color">
						<h4>VOUCHER: HOMEFOOD65</h4>
						<p>
							Use VOUCHER: HOMEFOOD65 to get 26% off up to BDT 65 on orders over
							BDT 249
						</p>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3">
						<nav>
							<ul className="nav-navbar">
								<li>
									<a href="#rich">Rice</a>
								</li>
								<li>
									<a href="#fish">Fish</a>
								</li>
								<li>
									<a href="#vagetable">Vagetable</a>
								</li>
								<li>
									<a href="#biryani">Biryani</a>
								</li>
								<li>
									<a href="#chicken">Chicken</a>
								</li>
								<li>
									<a href="#soup">Soup</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="rich">
						<h2>Rice</h2>
						<div className="row">
							{rices?.map((rice) => (
								<ProductCard key={rice._id} product={rice}></ProductCard>
							))}
						</div>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="fish">
						<h2>Fish</h2>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="vagetable">
						<h2>Vagetable</h2>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="biryani">
						<h2>Biryani</h2>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="chicken">
						<h2>Chicken</h2>
					</div>
					<div className="bg-white p-3 shadow-lg mt-3" id="soup">
						<h2>Soup</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StoreDetils;
