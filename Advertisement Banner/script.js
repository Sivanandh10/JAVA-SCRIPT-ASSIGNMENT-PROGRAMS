const banner = document.getElementById('banner');
const ads = [
    'Ad 1: Buy our product today!',
    'Ad 2: Get a discount on your first purchase!',
    'Ad 3: Limited time offer! Don\'t miss out!'
];
let currentAd = 0;

function rotateAd() {
    banner.textContent = ads[currentAd];
    currentAd = (currentAd + 1) % ads.length;
}

setInterval(rotateAd, 2000); // Rotate every 2 seconds