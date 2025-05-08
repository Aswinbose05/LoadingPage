window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const Content = document.getElemenById('Content');
    loader.style.opacity='0';
    loader.style.visibility='hidden';
    setTimeout(() => {
        loader.style.display='none';
        Content.style.display='block';

    },1000);
}
);