import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link
					className="logo-container"
					to="/"
				>
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
					<Link
						className="nav-link"
						to="/shop"
					>
						Shop
					</Link>
					<Link
						className="nav-link"
						to="/auth"
					>
						Sign In / Sign up
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
