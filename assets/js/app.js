var count = 0;

function initCupcallery() {
    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }

        });

    });

}


function onSiteImagesLoadComplete() {
    $('img').error(function () {
        $(this).attr('src', 'assets/slices/img-placeholder.png');
    });
}

function setupFullBrowserSections() {

    count = $("nav.navigation-main ul").children().length;

    $('.fullBrowserSections').fullpage({
        csss3: true,
        fitToSection:false,
        autoScrolling: false

    });

}



function removeNonIndexedSections() {}

function initMainMenu() {
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.nav-dropdown').hide();
    });
    
    // Toggle open and close nav styles on click
    $('#btn-hamurberX').click(function () {
        $('nav ul').slideToggle();
    });
    
    
    // Hamburger to X toggle
    $('#btn-hamurberX').on('click', function () {
        this.classList.toggle('active');
    });

}

$(document).ready(function () {
    setupFullBrowserSections();
    initMainMenu();
    initCupcallery();
    onSiteImagesLoadComplete();
});
