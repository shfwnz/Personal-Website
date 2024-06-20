// DarkMode
document.addEventListener('DOMContentLoaded', function () {
    const desktopModeToggle = document.querySelector('#desktop-mode');
    const mobileModeToggle = document.querySelector('#mobile-mode');
    const html = document.querySelector('html');

    if (!desktopModeToggle || !mobileModeToggle) {
        console.error('Element not found: desktopModeToggle or mobileModeToggle');
        return;
    }

    // Fungsi untuk menyimpan preferensi mode ke localStorage
    function saveModePreference(isDarkMode) {
        try {
            localStorage.setItem('darkMode', isDarkMode);
            console.log('Mode preference saved:', isDarkMode);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    // Fungsi untuk memuat preferensi mode dari localStorage
    function loadModePreference() {
        try {
            const isDarkMode = localStorage.getItem('darkMode');
            console.log('Loaded mode preference:', isDarkMode);
            if (isDarkMode !== null) {
                const darkModeEnabled = isDarkMode === 'true';
                html.classList.toggle('dark', darkModeEnabled);
                desktopModeToggle.checked = darkModeEnabled;
                mobileModeToggle.checked = darkModeEnabled;
                console.log('Dark mode enabled:', darkModeEnabled);
            } else {
                // Jika tidak ada preferensi tersimpan, gunakan preferensi perangkat
                const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                html.classList.toggle('dark', prefersDarkScheme);
                desktopModeToggle.checked = prefersDarkScheme;
                mobileModeToggle.checked = prefersDarkScheme;
                console.log('Using device preference for dark mode:', prefersDarkScheme);
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }

    // Muat preferensi mode saat halaman dimuat
    loadModePreference();

    // Fungsi untuk mengubah mode dan menyimpan preferensi
    function toggleMode(isDarkMode) {
        html.classList.toggle('dark', isDarkMode);
        saveModePreference(isDarkMode);
    }

    // Tambahkan event listener untuk toggle di desktop
    desktopModeToggle.addEventListener('change', function () {
        toggleMode(desktopModeToggle.checked);
    });

    // Tambahkan event listener untuk toggle di mobile
    mobileModeToggle.addEventListener('change', function () {
        toggleMode(mobileModeToggle.checked);
    });
});


// Hamburger
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('translate-x-full'); // Toggle menu slide-in
    mobileMenuOverlay.classList.toggle('hidden'); // Toggle overlay visibility
});

mobileMenuOverlay.addEventListener('click', function () {
    mobileMenu.classList.add('translate-x-full'); // Menyembunyikan menu ketika overlay diklik
    mobileMenuOverlay.classList.add('hidden'); // Menyembunyikan overlay
});


// CopyRight
const copyrightElement = document.getElementById('copyright');
const currentYear = new Date().getFullYear();

copyrightElement.textContent = `Copyright © ${currentYear} Shafwan Ilham Dzaky`;

// back to top

document.addEventListener('DOMContentLoaded', function () {
    const toTopButton = document.getElementById('to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            toTopButton.classList.remove('hidden');
        } else {
            toTopButton.classList.add('hidden');
        }
    });
});


// Animate-Typing
const words = ["FrontEnd Dev", "Web Dev"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    let typingSpeed = 200;

    if (isDeleting) {
        document.getElementById("job").textContent = currentWord.substring(0, j - 1);
        j--;
        typingSpeed = 100; // kecepatan penghapusan lebih cepat
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
            setTimeout(type, 500); // waktu tunggu sebelum mulai mengetik kata baru
            return;
        }
    } else {
        document.getElementById("job").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // waktu tunggu sebelum mulai menghapus kata
            return;
        }
    }

    setTimeout(type, typingSpeed);
}

type();
// CountDown
document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById('countdown');
    let count = 999;
    const target = 3;
    const duration = 2000; // total duration in milliseconds
    const steps = 40; // number of steps to reach the target
    const intervalTime = duration / steps; // time per step in milliseconds
    const decrementValue = (count - target) / steps; // value to decrement per step

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const interval = setInterval(() => {
                count -= decrementValue;
                countdownElement.textContent = Math.round(count);

                if (count <= target) {
                    clearInterval(interval);
                    countdownElement.textContent = target; // Ensure it ends exactly at the target
                }
            }, intervalTime);

            observer.disconnect();  // Stop observing once countdown starts
        }
    });

    observer.observe(countdownElement);
});

