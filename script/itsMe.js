function toggleNavContainer() {
    const navContainer = document.getElementById('nav-container');
    const fasihIMG = document.querySelector('.fasihIMG');
    const fasihRotate = document.querySelector('.fasihRotate');
    const imGrid = document.querySelector('.image-grid');
    const desc = document.querySelector('.description');
    const desc2 = document.querySelector('.description2');
    const iconImg = document.getElementById('icon-img');
    const headerBoad = document.querySelector('.headerBoad');

    // Toggle the 'show' class on the navigation container
    navContainer.classList.toggle('show');

    // Toggle the 'hidden' class on the icon
    iconImg.classList.toggle('hidden');

    // Adjust the margins based on the presence of the 'show' class
    if (navContainer.classList.contains('show')) {
        headerBoad.style.marginLeft = '200px'; /* Transition to 200px when shown */
        fasihIMG.style.marginLeft = '-200px'; /* Transition to 200px when shown */
        fasihRotate.style.marginLeft = '200px'; /* Transition to 420px when shown */
        imGrid.style.gridGap = '590px';
        desc.style.marginLeft = '200px';
        desc2.style.marginLeft = '200px';
    } else {
        headerBoad.style.marginLeft = '20px'; /* Transition to 200px when shown */
        fasihIMG.style.marginLeft = '0px'; /* Transition back to 20px when hidden */
        fasihRotate.style.marginLeft = '0px'; /* Transition back to 300px when hidden */
        imGrid.style.gridGap = '390px';
        desc.style.marginLeft = '0px';
        desc2.style.marginLeft = '0px';
    }
}

