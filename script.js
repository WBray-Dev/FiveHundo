const button = document.getElementById("hateButton");
const aboutText = document.querySelectorAll(".aboutText");

if (button) {

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

}


const albums = [
    "Songs for the Deaf",
    "Who Let the Dogs Out",
    "Little Miss Twain"
];

const randomButton = document.getElementById("randomButton");
const randomAlbum = document.getElementById("randomAlbum");

if (randomButton) {

    randomButton.addEventListener("click", function() {

        const randomIndex = Math.floor(Math.random() * albums.length);

        randomAlbum.textContent = albums[randomIndex];

    });

}