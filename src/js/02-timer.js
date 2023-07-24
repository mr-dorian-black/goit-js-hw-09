import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const buttonStart = document.querySelector('[data-start]');

const timer = {
     days: document.querySelector('[data-days]'),
     hours: document.querySelector('[data-hours]'),
     minutes: document.querySelector('[data-minutes]'),
     seconds: document.querySelector('[data-seconds]'),
};

let timerInterval;
let selectedDate;

const options = {
     enableTime: true,
     time_24hr: true,
     defaultDate: new Date(),
     minuteIncrement: 1,
     onClose(selectedDates) {
          checkDate(selectedDates[0]);
     },
};

buttonStart.disabled = true;
flatpickr("#datetime-picker", options);

function checkDate(date) {
     date = new Date(date);
     let currentDate = new Date();
     if (date.getTime() <= currentDate.getTime()) {
          buttonStart.disabled = true;
          Notiflix.Notify.failure(
               "Please choose a date in the future",
               {
                    timeout: 5000,
               },
          );
     }
     else {
          buttonStart.disabled = false;
          selectedDate = date.getTime();
     };
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
};

function addLeadingZero(value) {
     return value.toString().padStart(2, '0');
}

buttonStart.addEventListener('click', () => {
     buttonStart.disabled = true;
     timerInterval = setInterval(() => {
          let currentDate = new Date();
          if (selectedDate <= currentDate.getTime()) {
               clearInterval(timerInterval);
          }
          else {
               let left = convertMs(selectedDate - currentDate.getTime());
               timer.days.textContent = addLeadingZero(left.days);
               timer.hours.textContent = addLeadingZero(left.hours);
               timer.minutes.textContent = addLeadingZero(left.minutes);
               timer.seconds.textContent = addLeadingZero(left.seconds);
          }
     }, 1000);
})