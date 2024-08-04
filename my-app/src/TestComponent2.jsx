import { useState } from "react";
import styles from './TestComponent.module.css';

export const TestComponent2 = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClickButton = () => {
		setShowRedText(!showRedText);
	}

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

	return (
		<>
		{text}
		<button onClick={onClickButton}>Изменить цвет текста</button>
		</>
	)
}
