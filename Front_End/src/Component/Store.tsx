import React from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
	const { store } = useParams();
	return (
		<section className="container-fluid">
			<h2>{store}</h2>
		</section>
	);
};

export default Store;
