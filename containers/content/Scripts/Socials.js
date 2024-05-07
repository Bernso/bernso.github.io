// opening links
document.addEventListener('DOMContentLoaded', function() {
    const socials = document.querySelectorAll('.social');

    socials.forEach(function(social) {
        social.addEventListener('click', function() {
            const socialId = social.getAttribute('id');
            const socialLinks = {
                'youtube': 'https://www.youtube.com/@bernso2547',
                'tiktok': 'https://www.tiktok.com/@.sher.11.1',
                'linktree': 'https://linktr.ee/Bernso',
                'spotify': 'https://open.spotify.com/user/wt83mzofvqvecxjekg0jc16fe?si=5e4a887612474493',
                'github': 'https://github.com/Bernso'
            };
            window.open(socialLinks[socialId], '_blank');
        });
    });
});

// JavaScript for enhancing social buttons
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-button');

    // Add hover effect and transition to social buttons
    socialButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.style.backgroundColor = darkenColor(button.style.backgroundColor, 0.1);
        });

        button.addEventListener('mouseleave', function() {
            button.style.backgroundColor = lightenColor(button.style.backgroundColor, 0.1);
        });
    });

    // Function to darken a color
    function darkenColor(color, amount) {
        return "#" + color.replace(/^#/, '').replace(/../g, color => ("0" + Math.floor(parseInt(color, 16) * (1 - amount)).toString(16)).substr(-2));
    }

    // Function to lighten a color
    function lightenColor(color, amount) {
        return "#" + color.replace(/^#/, '').replace(/../g, color => ("0" + Math.floor(parseInt(color, 16) * (1 + amount)).toString(16)).substr(-2));
    }
});
