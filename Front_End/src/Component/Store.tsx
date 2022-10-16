import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetStoreByLocation } from '../Redux/Action/Action/GetByLocation';
import { RootStore } from '../Redux/Store';
import '../scss/App/App.css';

const Store = () => {
	const { location } = useParams();

	const dispatch = useDispatch();
	const { storeByLocation } = useSelector(
		(state: RootStore) => state.storeByLocatins
	);

	useEffect(() => {
		dispatch(GetStoreByLocation(location));
	}, [dispatch, location]);

	return (
		<section className="container-fluid">
			<h2 className="store-fw">
				Food delivery from{' '}
				<span className="fw-bold">{location} divition's</span> from best
				restaurants
			</h2>

			<div className="row">
				<h3>Popular restaurants</h3>
				{storeByLocation?.status === 'success' ? (
				storeByLocation.result.result.map(store=>)
				):""}
			</div>
		</section>
	);
};

export default Store;
