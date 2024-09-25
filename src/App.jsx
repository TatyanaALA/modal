import React, {useState} from "react";
import './app.css';
import Modal from "./Modal";
import Form from "./Form";

const App = () => {
	const [modalActive, setModalActive] = useState(true);
	return (
		<div className="app">
			<main>
				<button className="open-btn" onClick={() => setModalActive(true)}>
					Заполнить форму
				</button>
			</main>
			<Modal active={modalActive} setActive={setModalActive}>
				<Form />
			</Modal>
		</div>
	)
}

export default App;