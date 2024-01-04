import "../../styles/InputElement.scss";

function InputElement({ id, type, label }) {
	return (
		<div className="input-element">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</div>
	);
}

export default InputElement;
