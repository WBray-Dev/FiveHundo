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

/*
Dummy Reviews
    "all-the-young-dudes.html",
    "post-pop-depression.html",
    "songs-for-the-deaf.html",
    "the-car.html",
    "the-english-riviera.html"
];
*/


const reviews = [
    "hotel-california.html",
    "sweetheart-of-the-rodeo.html",
    "red-headed-stranger.html"
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

/*
Tough guy button
*/


const toughGuyButton = document.getElementById("toughGuyButton");
const toughGuyReview = document.getElementById("toughGuyReview");
const toughGuyRating = document.getElementById("toughGuyRating");

if (toughGuyButton && toughGuyReview && toughGuyRating) {
    let toughGuyLevel = 0;

    const toughGuyStages = [
        {
            text: `
                <p>Okay, it wasn’t too bad. I’ll give it 2 stars.</p>
            `,
            rating: "★★☆☆☆",
            button: "YOU SURE?"
        },
        {
            text: `
                <p>Okay, it was pretty good. I’ll give it 3 stars.</p>
            `,
            rating: "★★★☆☆",
            button: "TRY AGAIN"
        },
        {
            text: `
                <p>Alright, it was great. I’ll give it 4 stars.</p>
            `,
            rating: "★★★★☆",
            button: "ONE MORE TIME"
        },
        {
            text: `
                <p>Madonna should live at the Rock and Roll Hall of Fame. This is the only CD that I have in my car. <em>Express Yourself</em> was my favourite track.</p>

            `,
            rating: "★★★★★",
            button: "THAT'S WHAT I THOUGHT"
        }
    ];

    toughGuyButton.addEventListener("click", () => {
        if (toughGuyLevel >= toughGuyStages.length) {
            return;
        }

        const stage = toughGuyStages[toughGuyLevel];

        toughGuyReview.innerHTML = stage.text;
        toughGuyRating.textContent = stage.rating;
        toughGuyButton.textContent = stage.button;

        toughGuyLevel++;

        if (toughGuyLevel === toughGuyStages.length) {
            toughGuyButton.disabled = true;
        }
    });
}