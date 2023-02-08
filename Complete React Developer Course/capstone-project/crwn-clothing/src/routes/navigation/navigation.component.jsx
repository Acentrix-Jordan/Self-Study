import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

// Styles and Assets
import "./navigation.style.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

// Context
import { UserContext } from "../../contexts/user.context";

// Auth Helper Functions
import { signOutAuthUser } from "../../utils/firebase/firebase.utils.js";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log("Current User ", currentUser);

	const signOutUserHandler = async () => {
		await signOutAuthUser();
		setCurrentUser(null);
	};

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
							onClick={signOutUserHandler}
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
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
