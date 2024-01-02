function generateRandomNumber() {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min));

  document.getElementById(
    "result"
  ).innerHTML = `Random Number is: ${randomNumber}`;
}
document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomNumber);
