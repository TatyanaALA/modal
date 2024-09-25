import React, {useState} from "react";
import Select from "./Select";

const Form = () => {
	return (
		<div>
			<p>Редактирование расписания</p>
			<Select options = {['Академические (45 минут)', 'Астрономический (60 минут)']}></Select>
			<Select options = {['Без перерыва', 'С перерывом']}></Select>
		</div>
	);
};

export default Form;