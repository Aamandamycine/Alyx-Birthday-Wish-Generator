document.getElementById("wish-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;

  const message = `🎂 Happy ${age}th Birthday to ${name}, a wonderful ${gender}! Wishing you a year full of joy and success. 🎉`;

  document.getElementById("output").textContent = message;
});
