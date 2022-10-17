import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetStoreByLocation } from '../Redux/Action/Action/GetByLocation';
import { RootStore } from '../Redux/Store';
import '../scss/App/App.css';
import StoreCard from './StoreCard';

const Store = () => {
	const { location } = useParams();
	const [page, setPage] = useState(0);

	const dispatch = useDispatch();
	const { stores } = useSelector((state: RootStore) => state.storeByLocatins);

	useEffect(() => {
		dispatch(GetStoreByLocation(location, page));
	}, [dispatch, location, page]);

	const array = [...Array(stores?.data.paiganation).keys()];

	return (
		<section className="container-fluid">
			<h2 className="store-fw">
				Food delivery from{' '}
				<span className="fw-bold">{location} divition's</span> from best
				restaurants
			</h2>

			<div className="row">
				<h3 className="mt-5">Popular restaurants</h3>
				{stores?.status === 'Success' ? (
					stores?.data.result.map((store) => (
						<StoreCard key={store._id} store={store}></StoreCard>
					))
				) : (
					<h2>No Restaurant Now.</h2>
				)}
			</div>

			<div className="row">
				{stores?.data.paiganation === 1
					? ''
					: array.map((number, index) => (
							<div className="pagination">
								<button
									key={index}
									onClick={() => setPage(number)}
									className={page === number ? 'selected' : ''}
								>
									{number + 1}
								</button>
							</div>
					  ))}
			</div>
		</section>
	);
};

export default Store;
