// // Pre-Load Page
// document.addEventListener("DOMContentLoaded", function () {
//     var progressBar = document.getElementById('progress');
//     var navigateButton = document.getElementById('navigate-button');

//     // Fungsi untuk menampilkan progress bar
//     function showProgressBar() {
//         progressBar.style.width = '0%'; // Set ulang lebar progress bar menjadi 0%
//         progressBar.style.opacity = '1'; // Tampilkan progress bar dengan opacity 1
//     }

//     // Fungsi untuk menyembunyikan progress bar
//     function hideProgressBar() {
//         progressBar.style.opacity = '0'; // Sembunyikan progress bar dengan opacity 0
//     }

//     // Event listener untuk klik pada tombol
//     navigateButton.addEventListener('click', function () {
//         // Tampilkan progress bar saat tombol ditekan
//         showProgressBar();

//         // Simulasi pengalihan halaman dengan timeout
//         setTimeout(function () {
//             // Redirect to actual page (Project page dalam contoh ini)
//             window.location.href = "project.html"; // Ganti dengan halaman yang sesuai
//         }, 1000); // Contoh timeout 1000 milidetik (1 detik). Sesuaikan dengan kebutuhan.
//     });
// });

// DarkMode
const mode = document.querySelector('#mode');
const html = document.querySelector('html');


html.classList.add('dark');

mode.addEventListener('click', function () {
    if (mode.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});

// CopyRight
const copyrightElement = document.getElementById('copyright');
const currentYear = new Date().getFullYear();

copyrightElement.textContent = `Copyright © ${currentYear} Shafwan Ilham Dzaky`;

// Animate-Typing
const words = ["Student", "Web Dev", "White"];
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

