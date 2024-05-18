// opening links
document.addEventListener('DOMContentLoaded', function() {
    const socials = document.querySelectorAll('.social');

    socials.forEach(function(social) {
        social.addEventListener('click', function() {
            const socialId = social.getAttribute('id');
            const socialLinks = {
                'info': ' ', // Sends the suer to the same link
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

