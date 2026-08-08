const button = document.getElementById("hateButton");
const aboutText = document.getElementById("aboutText");

button.addEventListener("click", function() {
    if (button.textContent === "Okay, I Take It Back") {
        aboutText.textContent = "This website exists because I wanted to learn web development while reviewing music that I sincerely enjoy. Chat Gpt is my best friend in the whole world.";
        button.textContent = "I HATE THIS ABOUT PAGE";
    } else {
        aboutText.textContent = "I fucking hate this about page, and Chat GPT is a mysterious bitch";
        button.textContent = "Okay, I Take It Back";
    }
});
