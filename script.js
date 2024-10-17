// Задание 1
// Находим элементы кнопки и счетчика
const buttonMy = document.getElementById('click-button');
const counterClickButton = document.getElementById('counterClick');
let counterValue = 0;
function updateCounter() {
    counterClickButton.textContent = counterValue;
}
// Добавляем обработчик события click на кнопку
buttonMy.addEventListener('click', function() {
    counterValue++; // Увеличиваем значение счетчика
    counterClickButton.innerText = counterValue; // Обновляем текст счетчика
});


// Задание 2
// Находим элементы формы
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit-btn');

// Добавляем обработчик события input на поле email
emailInput.addEventListener('input', function() {
    const emailValue = emailInput.value;
    // Шаблон для проверки email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        // Выводим сообщение об ошибке и блокируем кнопку
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;
    } else {
        // Скрываем сообщение об ошибке и разблокируем кнопку
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// Дополнительное задание
// Функция для обновления таймера
const timerMy = document.getElementById('timer');
let seconds = 0;
function updateTimer() {
    seconds++; // Увеличиваем количество секунд
    timerMy.innerText = seconds; // Обновляем текст элемента таймера
}

// Запускаем таймер, который будет обновляться каждую секунду
setInterval(updateTimer, 1000);