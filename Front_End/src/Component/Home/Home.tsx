import React from 'react';
import Banner from './Banner';
import Category from './Category';
import HowToDo from './HowToDo';
import Location from './Location';
import Service from './Service';

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<Service />
			<Location />
			<HowToDo />
		</div>
	);
};

export default Home;
