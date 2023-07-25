import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector('.form');

let {
  elements: {
    amount,
    delay,
    step
  }
} = form;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const prom = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    }
    else {
      reject({ position, delay });
    }
  });

  prom.then(({ position, delay }) => {
    Notiflix.Notify.success(
      `✅ Fulfilled promise ${position} in ${delay}ms`,
      {
        timeout: 3000,
        useIcon: false
      },
    );
  }).catch(({ position, delay }) => {
    Notiflix.Notify.failure(
      `❌ Rejected promise ${position} in ${delay}ms`,
      {
        timeout: 3000,
        useIcon: false
      },
    );
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let position = 1;
  let delayInt = Number(delay.value);
  let stepInt = Number(step.value);
  let amountInt = Number(amount.value);

  setTimeout(function run() {

    if (position <= amountInt) {
      createPromise(position, delayInt);
      delayInt += stepInt;
      position++;
      setTimeout(run, stepInt)
    }
    else {
      delayInt = Number(delay.value);
      stepInt = Number(step.value);
      amountInt = Number(amount.value);
      position = 1;
    }

  }, delayInt);
})

