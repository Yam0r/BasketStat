document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            const cardBack = card.querySelector('.card-back');
            cardBack.style.transform = 'rotateY(0deg)';
            const cardFront = card.querySelector('.card-front');
            cardFront.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseout', function() {
            const cardBack = card.querySelector('.card-back');
            cardBack.style.transform = 'rotateY(180deg)';
            const cardFront = card.querySelector('.card-front');
            cardFront.style.transform = 'rotateY(0deg)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.text = `Информация о команде ${i}`;
        
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        const img = document.createElement('img');
        img.src = `images/team-logos/${i}.png`;
        img.alt = `Team ${i}`;
        cardFront.appendChild(img);
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        const p = document.createElement('p');
        p.textContent = `Информация о команде ${i}`;
        cardBack.appendChild(p);
        
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        cardContainer.appendChild(card);

        card.addEventListener('mouseover', function() {
            cardFront.style.transform = 'rotateY(180deg)';
            cardBack.style.transform = 'rotateY(0deg)';
        });

        card.addEventListener('mouseout', function() {
            cardFront.style.transform = 'rotateY(0deg)';
            cardBack.style.transform = 'rotateY(180deg)';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        { image: 'images/image for preview/Default_Bassketball_0.jpg', text: 'Цитата 1' },
        { image: 'images/image for preview/Default_Bassketball_1.jpg', text: 'Цитата 2' },
        { image: 'images/image for preview/Default_Bassketball_2.jpg', text: 'Цитата 3' }
    ];

    const cardContainer = document.querySelector('.card-container');


    function createCard(image, text) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Цитата';
        card.appendChild(img);

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        cardText.textContent = text;
        card.appendChild(cardText);

        return card;
    }


    function displayCards() {
        quotes.forEach(quote => {
            const card = createCard(quote.image, quote.text);
            cardContainer.appendChild(card);
        });
    }

    // Показываем карточки при загрузке страницы
    displayCards();
});