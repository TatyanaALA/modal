import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(<App />);


// form.addEventListener('submit', (event) => {
//   // Отменяем поведение по умолчанию
//   event.preventDefault();

//   // Получаем значения полей формы
//   const title = form.elements['title'].value;
//   const description = form.elements['description'].value;

//   // Сбрасываем форму
//   form.reset();

//   // Выводим термин в консоль
//   console.log(title, description);
// });
