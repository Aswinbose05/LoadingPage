window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content'); // fixed typo and ID

    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1000); // match with CSS transition
});
