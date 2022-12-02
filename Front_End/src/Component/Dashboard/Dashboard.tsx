import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

interface Role {
	role: string;
}

const Dashboard = () => {
	const [user, setUser] = useState<Role>();
	useEffect(() => {
		if (localStorage.getItem('user')) {
			const user = JSON.parse(window.localStorage.getItem('user')!);
			setUser(user);
		}
	}, []);

	console.log(user?.role);
	return (
		<div>
			<div className="sidebar">
				{/* for user */}
				{user?.role === 'user' && (
					<>
						<Link to="/dashboard" className="active fw-bold">
							All Order
						</Link>
						<Link className="fw-bold" to="/dashboard/update_profile">
							Update Profile
						</Link>
						<Link to="/dashboard/change_password" className="fw-bold">
							Change Password
						</Link>
					</>
				)}

				{user?.role === 'store-manager' && (
					<>
						<Link to="/dashboard" className="active fw-bold">
							All Order
						</Link>
						<Link className="fw-bold" to="/dashboard/update_profile">
							Update Profile
						</Link>
						<Link to="/dashboard/change_password" className="fw-bold">
							Change Password
						</Link>
						<Link to="/dashboard/add_product" className="fw-bold">
							Add Product
						</Link>
						<Link to="/dashboard/change_password" className="fw-bold">
							Delete Product
						</Link>
					</>
				)}
			</div>

			{/* <!-- Page content --> */}
			<div className="content">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
