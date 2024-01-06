import "../../styles/InputElement.scss";

function InputElement({ id, label, type }) {
	return (
		<div className="input-element">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</div>
	);
}

export default InputElement;
