const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', e => {
    const value = e.target.value;
    if (value.length === parseInt(inputElem.dataset.length)) {
      inputElem.classList.add('valid');
      inputElem.classList.remove('invalid');
    } 
    else {
      inputElem.classList.add('invalid');
      inputElem.classList.remove('valid');
    }
  });
  