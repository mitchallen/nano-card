
let cards = [
    {
        "title": "Blade Runner",
        "description": [
            "I've seen things you people wouldn't believe...",
            "Attack ships on fire off the shoulder of Orion...",
            "I watched C-beams glitter in the dark near the Tannhäuser Gate.",
            "All those moments will be lost in time, like tears in rain...",
            "Time to die."
        ]
    },
    {
        "title": "Philip K. Dick",
        "description": [
            "Today we live in a society in which spurious realities are manufactured",
            "by the media, by governments, by big corporations, by religious groups,",
            "political groups... So I ask, in my writing, What is real? Because",
            "unceasingly we are bombarded with pseudo-realities manufactured by very",
            "sophisticated people using very sophisticated electronic mechanisms.",
            "I do not distrust their motives; I distrust their power.",
            "They have a lot of it. And it is an astonishing power: that of creating",
            "whole universes, universes of the mind. I ought to know.",
            "I do the same thing.",
            "<br /><br />",
            "<b>― Philip K. Dick</b>"
        ]
    }
];

var currentIndex = 0; // Track the current index

function displayCard(index) {
    var cardInfo = cards[index];
    var cardHTML = `<div class="cardTitle">${cardInfo.title}</div>
                     <div class="cardParagraph">${cardInfo.description.join(" ")}</div>`;
    document.getElementById('cardContainer').innerHTML = cardHTML;
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard(currentIndex);
    }
}

function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        displayCard(currentIndex);
    }
}

// Initial display
displayCard(currentIndex);

// Event listeners for buttons
document.getElementById('btnPrev').addEventListener('click', prevCard);
document.getElementById('btnNext').addEventListener('click', nextCard);
