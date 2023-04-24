const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const formResult = {
    email,
    password,
  };

  console.log(formResult);
  form.reset();
});
