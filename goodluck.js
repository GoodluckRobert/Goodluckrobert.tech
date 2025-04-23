window.addEventListener('scroll', () => {
    const header = document.getElementById('header_container');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0077cc';
        header.style.color = '#fff';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.color = '#333';
    }
});