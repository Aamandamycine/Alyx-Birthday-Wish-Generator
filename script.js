document
  .getElementById("wish-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const outputDiv = document.getElementById("output");

    const prompt = `Write a warm and cheerful birthday message for a ${age}-year-old ${gender} named ${name}.`;

    const apiKey = "3dea2t99ce0052e3130d4f28b3eb9cof";
    const url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=Make it heartfelt and friendly&key=${apiKey}`;

    outputDiv.textContent = "Generating wish...";

    try {
      const response = await fetch(url);
      const data = await response.json();
      outputDiv.textContent = data.answer || "No wish returned.";
    } catch (error) {
      console.error(error);
      outputDiv.textContent = "Sorry, something went wrong.";
    }
  });
