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

/*
PUBLISHED REVIEWS

Add the filename of every new review to this list.
Do not add review-template.html.
*/

const reviews = [
    "all-the-young-dudes.html",
    "post-pop-depression.html",
    "songs-for-the-deaf.html",
    "the-car.html",
    "the-english-riviera.html"
];

function goToRandomReview() {

    const randomIndex = Math.floor(Math.random() * reviews.length);
    const randomReview = reviews[randomIndex];

    const inReviewsFolder = window.location.pathname.includes("/reviews/");

    if (inReviewsFolder) {
        window.location.href = randomReview;
    } else {
        window.location.href = "reviews/" + randomReview;
    }
}

const randomNav = document.getElementById("randomNav");

if (randomNav) {

    randomNav.addEventListener("click", function(event) {
        event.preventDefault();
        goToRandomReview();
    });

}

/*
RIP random.html, 10 August–15 August 2026.
It died doing fuck all. 🪦
*/