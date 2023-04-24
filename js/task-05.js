const inputElem = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value.length > 0) {
    nameSpan.textContent = value;
  } else {
    nameSpan.textContent = "Anonymous";
  }
});
