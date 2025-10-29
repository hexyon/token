const media = [  'https://iili.io/dHJ6Ho7.jpg',
 'https://iili.io/dHJSs7p.jpg',
 'https://iili.io/dHJ4pN2.jpg',
 'https://iili.io/dHJSQpI.jpg',
 'https://iili.io/KPb3RLu.jpg',
 'https://iili.io/dHJ6JV9.jpg',
 'https://iili.io/KPbooDQ.jpg',
 'https://iili.io/KPDQWcg.jpg',
 'https://iili.io/dHJ4ytS.jpg',
 'https://iili.io/KPb7UBf.jpg'
];

function showSection(id) {
    document.querySelectorAll('.container').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');

    const thumbnailContainer = document.querySelector('.thumbnail-container');
    media.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'thumbnail';
        img.dataset.index = index;
        thumbnailContainer.appendChild(img);
    });

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const fullScreenDiv = document.querySelector('.full-screen');
            const fullScreenImage = fullScreenDiv.querySelector('img');
            fullScreenImage.src = this.src;
            fullScreenDiv.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelector('.exit-button').addEventListener('click', function () {
        const fullScreenDiv = document.querySelector('.full-screen');
        fullScreenDiv.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});
