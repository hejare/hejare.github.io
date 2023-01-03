(function() {
    // Wait for the lo-fi hero to load
    const image = new Image()
    image.src = './images/hero-hejare-2-lo.webp'
    image.onload = () => {
        $('.callout').addClass('full');
    }
})();