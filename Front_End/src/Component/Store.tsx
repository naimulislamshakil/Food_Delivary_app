import React from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
	const { location } = useParams();
	return (
		<section className="container-fluid">
			<h2>{location}</h2>
		</section>
	);
};

export default Store;
