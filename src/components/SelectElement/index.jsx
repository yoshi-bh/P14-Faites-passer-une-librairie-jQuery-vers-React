import "../../styles/SelectElement.scss";

function SelectElement({ id, label, options }) {
	return (
		<div className="select-element">
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id}>
				{options.map((option) => (
					<option key={id + option.name} value={option.value}>{option.name}</option>
					// const option = document.createElement("option");
					// option.value = state.abbreviation;
					// option.text = state.name;
					// stateSelect.appendChild(option);
				))}
				{/* {data.map((elem) => (
					<Card
						key={elem.id}
						id={elem.id}
						img={elem.cover}
						title={elem.title}
					></Card>
				))} */}
			</select>
		</div>
	);
}

export default SelectElement;
