// ==================================== Nav bar js ===============================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (window.innerWidth < 1024) {
        menuList.classList.toggle("-right-full");
        menuList.classList.toggle("right-0");
        menubarFirst.classList.toggle("rotate-[45deg]");
        menubarFirst.classList.toggle("-translate-y-[1.5px]");
        menubarSecond.classList.toggle("hidden");
        menubarThird.classList.toggle("rotate-[-45deg]");
        menubarThird.classList.toggle("translate-y-[1.5px]");
        body.classList.toggle("overflow-hidden");
    }
}
const menuItems = document.querySelectorAll(".menulist button, .menulist a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            toggleMenu();
        }
    });
});

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

//  ================================= Slider js =========================================
$(".card-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});