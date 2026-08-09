const button = document.getElementById("hateButton");
const aboutText = document.querySelectorAll(".aboutText");

button.addEventListener("click", function() {

    if (button.textContent === "Okay, I Take It Back") {

        aboutText.forEach(function(paragraph) {
            paragraph.textContent = "This website exists because I wanted to learn web development while reviewing music that I sincerely enjoy. Chat GPT is my best friend in the whole world.";
        });

        button.textContent = "I HATE THIS ABOUT PAGE";

    } else {

        aboutText.forEach(function(paragraph) {
            paragraph.textContent = "I fucking hate this about page";
        });

        button.textContent = "Okay, I Take It Back";
    }

});