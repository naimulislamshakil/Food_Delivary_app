import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetStoreByLocation } from '../Redux/Action/Action/GetByLocation';
import { RootStore } from '../Redux/Store';

const Store = () => {
	const { location } = useParams();

	const dispatch = useDispatch();
	const store = useSelector((state: RootStore) => state.storeByLocatins);

	useEffect(() => {
		dispatch(GetStoreByLocation(location));
	}, [dispatch, location]);

	console.log(store);
	return (
		<section className="container-fluid">
			<h2>{location}</h2>
		</section>
	);
};

export default Store;
