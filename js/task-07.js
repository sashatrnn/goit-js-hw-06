const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');

inputElem.addEventListener('input', e => {
    let value = e.target.value;
    spanElem.style.fontSize = value + "px";
}
)