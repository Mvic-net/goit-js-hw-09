const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.body,
};
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', () => {
  timer.start();
});
refs.btnStop.addEventListener('click', () => {
  timer.stop();
});

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
