function changeIcon() {
    const isMenuOpened = document.getElementById('nav-links');
    const barIcon = document.getElementById('bar');
    barIcon.classList.toggle('fa-xmark');
    barIcon.classList.toggle('fa-bars');
    isMenuOpened.classList.toggle('show');
    document.body.classList.toggle('lock-scroll');
}

