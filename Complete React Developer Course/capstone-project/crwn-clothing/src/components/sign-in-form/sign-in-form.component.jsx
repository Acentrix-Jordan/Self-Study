import { useState, useContext } from "react";

// Authentication Helper Functions
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

// Components
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

// Styles
import "./sign-in-form.style.scss";

// Context
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	// Form Handler
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	// Reset Forms Helper Function
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	// Google Sign in
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);

		setCurrentUser(user);
	};

	// Email and Password Submit
	const handleSubmit = async (event) => {
		// Prevent url from reloading
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect Password");
					break;
				case "auth/user-not-found":
					alert("User not found");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password or Google account</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					inputOptions={{
						type: "email",
						required: true,
						onChange: handleChange,
						name: "email",
						value: email,
					}}
				/>
				<FormInput
					label="Password"
					inputOptions={{
						type: "password",
						required: true,
						onChange: handleChange,
						name: "password",
						value: password,
					}}
				/>
				<div className="buttons-container">
					<Button
						content="Sign In"
						type="submit"
					/>
					<Button
						type="button"
						content="Sign In with Google"
						buttonType={"google"}
						onClick={signInWithGoogle}
					/>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
