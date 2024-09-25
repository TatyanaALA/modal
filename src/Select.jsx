import React, { useState } from "react";
import './select.css';

const Select = ({options}) => {
	const [value, setValue] = useState();

	return (	
		<select className="select_style" value={value} onChange={(e) => setValue(e.target.value)}>
			{options.map((item) => (
				<option>{item}</option>
			))
			}
		</select>
	);
};

export default Select;