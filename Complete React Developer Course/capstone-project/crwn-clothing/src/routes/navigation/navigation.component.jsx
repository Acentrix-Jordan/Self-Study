import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

// Styles and Assets
import "./navigation.style.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

// Components
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// Context
import { UserContext } from "../../contexts/user.context";

// Auth Helper Functions
import { signOutAuthUser } from "../../utils/firebase/firebase.utils.js";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

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
					{currentUser ? (
						<span
							className="nav-link"
							onClick={signOutAuthUser}
						>
							Sign Out
						</span>
					) : (
						<Link
							className="nav-link"
							to="/auth"
						>
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
