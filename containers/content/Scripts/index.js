// JavaScript to style and position subjects
document.addEventListener('DOMContentLoaded', function () {
    const subjects = document.querySelectorAll('.subject');

    // Function to style and position subjects
    function styleSubjects() {
        const windowHeight = window.innerHeight;

        subjects.forEach((subject, index) => {
            const delay = index * 200; // Delay for staggered animation

            subject.style.opacity = '0';
            subject.style.transform = `translateY(0)`;
            subject.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        subject.style.opacity = '1';
                        subject.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.5 }); 

            observer.observe(subject);
        });
    }

    styleSubjects();
});

// JavaScript to add hover effects to subjects
document.addEventListener('DOMContentLoaded', function () {
    const subjects = document.querySelectorAll('.subject');

    subjects.forEach(subject => {
        subject.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)'; // Increase scale on hover
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Add larger shadow
        });

        subject.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; // Revert scale on mouse leave
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Revert to original shadow
        });
    });
});


// opening links
document.addEventListener('DOMContentLoaded', function() {
    const socials = document.querySelectorAll('.subject');

    socials.forEach(function(social) {
        social.addEventListener('click', function() {
            const socialId = social.getAttribute('id');
            const socialLinks = {
                'subject1': '/Socials.html',
                'subject2': '/AboutMe.html',
                'subject3': '#',
                'subject4': 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQnPCJsjsdbgpkqvTfgDQwhWXPpplMSTqrkXCTxlfZWJqtdZHcCmvZRjsssVzCwSgNnB',
                
            };
            window.location.href = socialLinks[socialId];
        });
    });
});
