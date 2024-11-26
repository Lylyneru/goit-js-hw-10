import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  const datetimePicker = document.querySelector('#datetime-picker');
  const startButton = document.querySelector('button[data-start]');
  const timer = document.querySelector('.timer');

  inputContainer.appendChild(datetimePicker);
  inputContainer.appendChild(startButton);

  wrapper.appendChild(inputContainer);
  wrapper.appendChild(timer);

  document.body.appendChild(wrapper);
});

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
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();

    if (selectedDates[0] <= now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      selectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
});

startBtn.addEventListener('click', () => {
  if (!selectedDate) return;

  startBtn.disabled = true;
  datePicker.disabled = true;

  startCountdown();
});

function startCountdown() {
  timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = selectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerFields(0, 0, 0, 0);
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

function updateTimerFields(days, hours, minutes, seconds) {
  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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
