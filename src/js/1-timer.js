import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let selectedDate = null;
let timerInterval = null;

startBtn.disabled = true;

flatpickr(datePicker, {
  enableTime: true, // Увімкнення часу
  time_24hr: true, // Формат 24 години
  defaultDate: new Date(), // Поточна дата
  minuteIncrement: 1, // Крок хвилин
  onClose(selectedDates) {
    const now = new Date();

    // Перевірка, чи обрана дата в майбутньому
    if (selectedDates[0] <= now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true; // Блокувати кнопку
    } else {
      selectedDate = selectedDates[0];
      startBtn.disabled = false; // Розблокувати кнопку
    }
  },
});

// Обробник кліку для кнопки старт
startBtn.addEventListener('click', () => {
  if (!selectedDate) return;

  startBtn.disabled = true; // Деактивувати кнопку
  datePicker.disabled = true; // Заблокувати вибір нової дати

  // Запуск таймера
  startCountdown();
});

function startCountdown() {
  timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = selectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerFields(0, 0, 0, 0); // Показати 00:00:00:00
      iziToast.success({
        title: 'Finished',
        message: 'Countdown complete!',
        position: 'topRight',
      });
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimerFields(days, hours, minutes, seconds);
  }, 1000);
}

// Функція для оновлення інтерфейсу таймера
function updateTimerFields(days, hours, minutes, seconds) {
  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}

// Форматування часу (додавання нуля)
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Конвертація мілісекунд у дні, години, хвилини, секунди
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
