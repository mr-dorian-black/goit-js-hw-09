import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    return Promise.reject({ position, delay });
  }
}

const form = document.querySelector('.form');

let {
  elements: {
    amount,
    delay,
    step
  }
} = form;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  let delayInt = Number(delay.value);
  let stepInt = Number(step.value);
  let amountInt = Number(amount.value);
  let position = 1;

  setTimeout(function run() {

    createPromise(position, delayInt).then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`,
        {
          timeout: 3000,
          useIcon: false
        },
      );
    })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 3000,
            useIcon: false
          },
        );
      });

    position++;
    delayInt += stepInt;

    if (position <= amountInt) {
      setTimeout(run, stepInt);
    }
    else {
      delayInt = Number(delay.value);
      stepInt = Number(step.value);
      amountInt = Number(amount.value);
      position = 1;
    }

  }, delayInt);

})
