const wrapper = document.getElementById('gallery-wrapper');
const img = wrapper.querySelectorAll('img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

function showImages(index) {
    const maxIndex = img.length - 3;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    wrapper.style.transform = `translateX(-${index * 33.333}%)`;
    currentIndex = index;

    prevButton.classList.toggle('hidden', index === 0);
    nextButton.classList.toggle('hidden', index === maxIndex);
}

prevButton.addEventListener('click', () => showImages(currentIndex - 1));
nextButton.addEventListener('click', () => showImages(currentIndex + 1));

// Initialize
showImages(0);

// Responsive behavior
function adjustGallery() {
    const isMobile = window.innerWidth < 640; // sm breakpoint in Tailwind
    img.forEach(img => {
        img.style.width = isMobile ? '100%' : '33.333%';
    });
    showImages(currentIndex);
}

window.addEventListener('resize', adjustGallery);
adjustGallery(); // Initial call
