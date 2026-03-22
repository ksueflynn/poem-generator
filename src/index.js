function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "81tde055a8c27366fe5bd61b6ao44868";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You have lived in London your whole life and know all about the landmarks and history of London. You are love to write short poems. Your mission is to generate a 4 line poemm. Each line of the poem should be separated by a </br>. Make sure to follow the user instructions. Sign the poem with '-SheCodes AI' inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛Generating a London poem about ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
