document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    function flipToFront(card) {
        const cardBack = card.querySelector('.card-back');
        cardBack.style.transform = 'rotateY(0deg)';
        const cardFront = card.querySelector('.card-front');
        cardFront.style.transform = 'rotateY(180deg)';
    }

    function flipToBack(card) {
        const cardBack = card.querySelector('.card-back');
        cardBack.style.transform = 'rotateY(180deg)';
        const cardFront = card.querySelector('.card-front');
        cardFront.style.transform = 'rotateY(0deg)';
    }

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            flipToFront(card);
        });

        card.addEventListener('mouseout', function() {
            flipToBack(card);
        });

        card.addEventListener('touchstart', function() {
            flipToFront(card);
        });

        card.addEventListener('touchend', function() {
            flipToBack(card);
        });
    });
});


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
        

        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';
        

        const links = createSocialLinks(i);
        

        links.forEach(link => {
            socialIcons.appendChild(link);
        });
        
        cardBack.appendChild(socialIcons);
        
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



function createSocialLink(href, iconClass) {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    const icon = document.createElement('i');
    icon.className = `fa ${iconClass}`;
    link.appendChild(icon);
    return link;
}

function createSocialLinks(teamNumber) {
    const links = [];

    
    switch (teamNumber) {
        case 1:
            links.push(createSocialLink('https://x.com/ATLHawks', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/atlhawks/ ', 'fa-brands fa-instagram'));
            break;
        case 2:
            links.push(createSocialLink('https://x.com/celtics', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/celtics/', 'fa-brands fa-instagram'));
            break;
        case 3:
            links.push(createSocialLink('https://x.com/BrooklynNets', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/brooklynnets/ ', 'fa-brands fa-instagram'));
            break;
        case 4:
            links.push(createSocialLink('https://x.com/hornets', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/hornets/', 'fa-brands fa-instagram'));
            break;
        case 5:
            links.push(createSocialLink('https://x.com/chicagobulls', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/chicagobulls/', 'fa-brands fa-instagram'));
            break;
        case 6:
            links.push(createSocialLink('https://x.com/cavs', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/cavs/', 'fa-brands fa-instagram'));
            break;
        case 7:
            links.push(createSocialLink('https://x.com/dallasmavs', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/dallasmavs/ ', 'fa-brands fa-instagram'));
            break;
        case 8:
            links.push(createSocialLink('https://x.com/nuggets', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/nuggets/ ', 'fa-brands fa-instagram'));
            break;
        case 9:
            links.push(createSocialLink('https://x.com/DetroitPistons', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/detroitpistons/ ', 'fa-brands fa-instagram'));
            break;
        case 10:
            links.push(createSocialLink('https://x.com/warriors', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/warriors/', 'fa-brands fa-instagram'));
            break;
        case 11:
            links.push(createSocialLink('https://x.com/HoustonRockets', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/houstonrockets/', 'fa-brands fa-instagram'));
            break;
        case 12:
            links.push(createSocialLink('https://x.com/Pacers', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/pacers/', 'fa-brands fa-instagram'));
            break;
        case 13:
            links.push(createSocialLink('https://x.com/LAClippers', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/laclippers/', 'fa-brands fa-instagram'));
            break;
        case 14:
            links.push(createSocialLink('https://x.com/Lakers', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/lakers/', 'fa-brands fa-instagram'));
            break;
        case 15:
            links.push(createSocialLink('https://x.com/memgrizz', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/memgrizz/ ', 'fa-brands fa-instagram'));
            break;
        case 16:
            links.push(createSocialLink('https://x.com/MiamiHEAT', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/miamiheat/', 'fa-brands fa-instagram'));
            break;
        case 17:
            links.push(createSocialLink('https://x.com/Bucks', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/bucks/', 'fa-brands fa-instagram'));
            break;
        case 18:
            links.push(createSocialLink('https://x.com/Timberwolves', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/timberwolves/', 'fa-brands fa-instagram'));
            break;
        case 19:
            links.push(createSocialLink('https://x.com/PelicansNBA', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/pelicansnba/', 'fa-brands fa-instagram'));
            break;
        case 20:
            links.push(createSocialLink('https://x.com/nyknicks', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/nyknicks/', 'fa-brands fa-instagram'));
            break;
        case 21:
            links.push(createSocialLink('https://x.com/okcthunder', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/okcthunder/?hl=uk ', 'fa-brands fa-instagram'));
            break;
        case 22:
            links.push(createSocialLink('https://x.com/OrlandoMagic', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/orlandomagic/', 'fa-brands fa-instagram'));
            break;
        case 23:
            links.push(createSocialLink('https://x.com/sixers', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/sixers/', 'fa-brands fa-instagram'));
            break;
        case 24:
            links.push(createSocialLink('https://x.com/Suns', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/suns/', 'fa-brands fa-instagram'));
            break;
        case 25:
            links.push(createSocialLink('https://x.com/trailblazers', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/trailblazers/', 'fa-brands fa-instagram'));
            break;
        case 26:
            links.push(createSocialLink('https://x.com/SacramentoKings', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/sacramentokings/', 'fa-brands fa-instagram'));
            break;
        case 27:
            links.push(createSocialLink('https://x.com/spurs', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/spurs/', 'fa-brands fa-instagram'));
            break;
        case 28:
            links.push(createSocialLink('https://x.com/Raptors', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/raptors/', 'fa-brands fa-instagram'));
            break;
        case 29:
            links.push(createSocialLink('https://x.com/utahjazz', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/utahjazz/', 'fa-brands fa-instagram'));
            break;
        case 30:
            links.push(createSocialLink('https://x.com/WashWizards', 'fa-brands fa-x-twitter'));
            links.push(createSocialLink('https://www.instagram.com/washwizards/', 'fa-brands fa-instagram'));
            break;        
        default:
            links.push(createSocialLink('https://example.com', 'fa-brands fa-globe'));
            break;
    }
    return links;
}
