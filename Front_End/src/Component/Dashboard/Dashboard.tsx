import React from 'react';

const Dashboard = () => {
	return (
		<div>
			<div className="sidebar">
				<a className="active" href="#home">
					Home
				</a>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
			</div>

			{/* <!-- Page content --> */}
			<div className="content">
				<h2>hi</h2>
			</div>
		</div>
	);
};

export default Dashboard;
