async function generateBirthdayWish(name, age, gender) {
  const prompt = `Write a warm, cheerful birthday message for a ${age}-year-old ${gender} named ${name}. Make it heartfelt and joyful.`;

  const response = await fetch("https://api.shecodes.ai/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 3dea2t99ce0052e3130d4f28b3eb9cof", // Your SheCodes API key
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  // Adjust according to SheCodes API response format
  return data.generated_text || data.text || "No wish generated.";
}

document.getElementById("wish-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;

  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Generating your wish...";

  try {
    const wish = await generateBirthdayWish(name, age, gender);
    outputDiv.textContent = wish;
  } catch (error) {
    outputDiv.textContent = "Sorry, something went wrong.";
    console.error(error);
  }
});
