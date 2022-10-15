import { Link } from 'react-router-dom';
import logo from '../../assets/images/res-logo.png';
import '../../scss/Navbar/Navbar.css';

const NavBar = () => {
	const navbar = (
		<>
			<li className="nav-item">
				<Link className="nav-link active" aria-current="page" to="/">
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" aria-current="page" to="/all_foods">
					All Food
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" aria-current="page" to="/contact_us">
					Contact Us
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" aria-current="page" to="/about_us">
					About Us
				</Link>
			</li>
		</>
	);
	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link
					className="navbar-brand d-flex flex-column justify-content-center align-items-center"
					to="/"
				>
					<img
						src={logo}
						alt="Logo"
						width="50"
						height="40"
						className="d-inline-block align-text-top"
					/>
					<div>
						<span className="text-warning fw-bold me-2">Tasty</span>
						<span className="text-danger fw-bold">Treat</span>
					</div>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">{navbar}</ul>
					<div className="d-flex">
						<div className="cart-icon me-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="20"
								fill="currentColor"
								className="bi bi-bag"
								viewBox="0 0 16 16"
							>
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
							</svg>
							<span className="bg-danger cart-text">2</span>
						</div>
						<div className="user-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="20"
								fill="currentColor"
								className="bi bi-person-circle"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fill-rule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
