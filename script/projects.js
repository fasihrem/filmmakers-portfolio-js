function toggleNavContainer() {
    const navContainer = document.getElementById('nav-container');
    const headerBoad = document.querySelector('.headerBoad');
    const video = document.getElementById('video');
    const iconImg = document.getElementById('icon-img');

    // Toggle the 'show' class on the navigation container
    navContainer.classList.toggle('show');

    // Toggle the 'hidden' class on the icon
    iconImg.classList.toggle('hidden');

    // Adjust the margins based on the presence of the 'show' class
    if (navContainer.classList.contains('show')) {
        headerBoad.style.marginLeft = '200px'; /* Transition to 200px when shown */
        video.style.marginLeft = '420px'; /* Transition to 420px when shown */
    } else {
        headerBoad.style.marginLeft = '20px'; /* Transition back to 20px when hidden */
        video.style.marginLeft = '300px'; /* Transition back to 300px when hidden */
    }
}

