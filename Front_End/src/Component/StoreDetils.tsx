import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSingleStoreAction } from '../Redux/Action/Action/GetByIdAction';
import { RootStore } from '../Redux/Store';
import '../scss/App/App.css';

const StoreDetils = () => {
	const current = new Date();

	const { id } = useParams();

	const dispatch = useDispatch();
	const { store } = useSelector((state: RootStore) => state.storeById);

	useEffect(() => {
		dispatch(GetSingleStoreAction(id));
	}, [dispatch, id]);

	return (
		<section className="container-fluid">
			<div className="row">
				<div className="col-12 p-3">
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
						{current.toLocaleTimeString() > '8:00:00' ||
						current.toLocaleTimeString() < '16:00:00' ? (
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
								{/* 'Rich', 'Fish', 'Vagetable', 'Biryani', 'Chicken', 'Soup' */}
								<li>
									<a href="">Rich</a>
								</li>
								<li>
									<a href="">Fish</a>
								</li>
								<li>
									<a href="">Vagetable</a>
								</li>
								<li>
									<a href="">Biryani</a>
								</li>
								<li>
									<a href="">Chicken</a>
								</li>
								<li>
									<a href="">Soup</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StoreDetils;
