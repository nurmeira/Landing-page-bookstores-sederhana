document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider'); // Ganti dengan selector yang sesuai
    const scrollStep = 320; // Lebar satu elemen konten yang ingin Anda geser

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.addEventListener('click', function() {
        slider.scrollLeft -= scrollStep;
    });

    nextButton.addEventListener('click', function() {
        slider.scrollLeft += scrollStep;
    });
});
