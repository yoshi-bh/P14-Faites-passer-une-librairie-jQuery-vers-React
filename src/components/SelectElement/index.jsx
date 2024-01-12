import "../../styles/SelectElement.scss";

/* React Element to have formated select and label
 * @params:
 *    - id: the select id you want to use
 *    - label: the text you want displayed in the label
 * 		- options: a array of name/value pair as strings containing all your options
 * returns:
 *    the JSX element to be displayed containing label and select
 */

function SelectElement({ id, label, options }) {
	return (
		<div className="select-element">
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id}>
				{options.map((option) => (
					<option key={id + option.name} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectElement;
