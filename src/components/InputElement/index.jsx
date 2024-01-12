import "../../styles/InputElement.scss";

/* React Element to have formated input and label
 * @params:
 *    - id: the input id you want to use
 *    - label: the text you want displayed in the label
 * 		- type: the type of input you want to display (text, email, date...)
 * returns:
 *    the JSX element to be displayed containing label and input
 */

function InputElement({ id, label, type }) {
	return (
		<div className="input-element">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</div>
	);
}

export default InputElement;
