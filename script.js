const text = "Hello, I'm Daaniyah Khan!";
const typingElement = document.getElementById('typing-text');
let index = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting) {
        typingElement.textContent += text.charAt(index);
        index++;

        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1000); // Pause before deleting
            return;
        }
    } else {
        typingElement.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeLoop, speed);
}

window.addEventListener('load', () => {
    typeLoop(); // start loop on page load
});
