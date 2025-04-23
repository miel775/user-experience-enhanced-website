const darkmodeButton = document.getElementById('darkmode-button');

    darkmodeButton.addEventListener('click', (event) => {
        document.body.classList.toggle('darkmode');
    });