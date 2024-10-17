const imageStack = document.getElementById('imageStack');
const images = Array.from(imageStack.getElementsByTagName('img'));

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const properties = [
    { width: '100%', height: '100%', top: '0px', left: '0px', zIndex: 4, opacity: 1 },
    { width: '96%', height: '96%', top: '-25px', left: '5px', zIndex: 3, opacity: 0.6 },
    { width: '90%', height: '90%', top: '-45px', left: '10px', zIndex: 2, opacity: 0.6 },
    { width: '85%', height: '85%', top: '-60px', left: '15px', zIndex: 1, opacity: 0.6 },
    { width: '80%', height: '80%', top: '-85px', left: '20px', zIndex: 0, opacity: 0.6 }

];

function initializeImages() {
    images.forEach((img, index) => {
        Object.assign(img.style, properties[index]);
    });
}

async function cycleImages() {
    // Store the source of the first image
    const firstImageSrc = images[0].src;
    
    // Shift image sources
    for (let i = 0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
    }
    
    // Set the last image's source to the stored first image source
    images[images.length - 1].src = firstImageSrc;

    await sleep(2000); // Wait for 2 seconds before next cycle
}

async function animationSequence() {
    initializeImages();
    await sleep(1000); // Initial pause to show the stack

    while (true) {
        await cycleImages();
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const numberElements = document.querySelectorAll('.num .counter');
let animated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            numberElements.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                animateValue(el, 0, target, 2000);
            });
            animated = true;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const numbersSection = document.getElementById('numbers');
observer.observe(numbersSection);

// Start the animation
animationSequence();