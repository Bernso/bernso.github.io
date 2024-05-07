// JavaScript to add click events to each interest section
document.addEventListener('DOMContentLoaded', function () {
    const interests = document.querySelectorAll('.interest');

    interests.forEach(interest => {
        interest.addEventListener('click', function () {
            interest.classList.toggle('active');
        });
    });
});
