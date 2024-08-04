// import { TestComponent1 } from './TestComponent1';
// import { TestComponent2 } from './TestComponent2';
import styles from './app.module.css';
import { useState } from "react";

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);



	const onInputButtonClick = () => {
		const promptValue = prompt('Ведите значение');

		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
			setIsValueValid(true);
		} else {
			setValue('');
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
		}

	}

	const onAddButtonClick = () => {
		if (isValueValid) {
		  const currentTime = new Date().toLocaleString();
		  const updatedList = [
			...list,
			{ id: Date.now(), value, createdAt: currentTime },
		  ];
		  setList(updatedList);
		  setValue('');
		  setError('');
		  setIsValueValid(false);
		}
	  };



  return (
	<div className={styles.app}>
    <h1 className={styles["page-heading"]}>Ввод значения</h1>
    <p className={styles["no-margin-text"]}>
      Текущее значение <code>value</code>: "<output className={styles["current-value"]}>{value}</output>"
    </p>
    {error && <div className={styles.error}>{error}</div>}
    <div className={styles["buttons-container"]}>
      <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
      <button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
    </div>
    <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        {list.length === 0 ? (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        ) : (
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} className={styles["list-item"]}>
                <b>{item.createdAt}:</b> {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
  </div>
  );
};


