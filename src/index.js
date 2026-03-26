function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a75f8bb18344f8at30c2o163eff475bb";
  let context =
    "You are an affirmation expert. Your mission is to write a 2 line affirmation and separate each line with a <br />. Make sure to follow the user instructions below. Sign the affirmation with 'SheCodes AI' in a <strong> element";
  let prompt = `User instructions: Generate a short affirmation about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form",
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
