import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Location from './Location';
import Service from './Service';

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<Service />
			<Location />
		</div>
	);
};

export default Home;
