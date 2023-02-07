import "./button.style.scss";

const BUTTON_TYPES_CLASSES = {
	google: "google-sign-in",
	inverted: "inverted",
};

const Button = ({ content, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{content}
		</button>
	);
};

export default Button;
