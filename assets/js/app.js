// ==================================== Timer js  ==============================================================
let totalSeconds = (10 * 24 * 3600) + (20 * 3600) + (15 * 60) + 10;

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
function updateTimer() {
    const timerElement = document.getElementById('timer');
    if (totalSeconds > 0) {
        timerElement.textContent = formatTime(totalSeconds);
        totalSeconds--;
    } else {
        timerElement.textContent = "Time's Up!";
        clearInterval(timerInterval);
    }
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// ===================================== Accordion js ================================================

document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.accordion-item');
    toggleAccordion(firstItem, true);
});

function toggleAccordion(element, forceOpen = false) {
    const container = document.getElementById('accordion-container');
    const allItems = container.querySelectorAll('.accordion-item');
    const content = element.querySelector('.accordion-content');
    const icon = element.querySelector('.accordion-icon');

    allItems.forEach((item) => {
        const itemContent = item.querySelector('.accordion-content');
        const itemIcon = item.querySelector('.accordion-icon');
        if (item !== element) {
            itemContent.classList.add('hidden');
            item.classList.remove('bg-gray-700');
            itemIcon.style.transform = 'rotate(0deg)';
        }
    });

    if (forceOpen || content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        element.classList.add('bg-gray-700');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        element.classList.remove('bg-gray-700');
        icon.style.transform = 'rotate(0deg)';
    }
}
 //========================= JavaScript to set the current year =========================
 const yearElement = document.getElementById('currentYear');
 const currentYear = new Date().getFullYear();
 yearElement.textContent = currentYear;