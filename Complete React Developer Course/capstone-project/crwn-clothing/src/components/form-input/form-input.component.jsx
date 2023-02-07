import "./form-input.style.scss";

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className="group">
			<input
				className="form-input"
				{...inputOptions}
			/>
			{/* If Label Exists */}
			{label && (
				<label
					className={`${
						inputOptions.value.length > 0 ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
