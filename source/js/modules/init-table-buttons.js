const buttonUp = document.querySelector('.ergonomics__button--up');
const buttonDown = document.querySelector('.ergonomics__button--down');
const tableImg = document.querySelector('.ergonomics__img--high');

const initTableButtons = () => {
  buttonUp.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
      tableImg.style.transform = "translate(0, -120px)";
    } else {
      tableImg.style.transform = "translate(0, -70px)";
    }
    buttonUp.classList.add('disabled');
    buttonDown.classList.remove('disabled');
  });

  buttonDown.addEventListener('click', () => {
    tableImg.style.transform = "translate(0, 0)";
    buttonDown.classList.add('disabled');
    buttonUp.classList.remove('disabled');
  });
}

export {initTableButtons};
