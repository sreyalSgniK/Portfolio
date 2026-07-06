const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
