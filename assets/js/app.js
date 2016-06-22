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
    //    $("header a.nav-title").click(function (e) {
    //
    //        console.log($(this.hash).offset().top);
    //        console.log(this.hash);
    //        console.log($(this));
    //
    //        console.log($(this.hash))
    //
    //console.log("-----------");
    //        e.preventDefault();
    //        $('html,body').animate({
    //            //            scrollTop: $(this.hash).offset().top}, 1000)
    //            scrollTop: $(this.hash).offset().top
    //        }, 1000);
    //    });
    //


    count = $("nav.navigation-main ul").children().length;


    $('.fullBrowserSections').fullpage({
        normalScrollElements: '.sCupcakery, .cupcakery-gallery-contents',
        scrollBar: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true
        }
    });

}




function removeNonIndexedSections() {
    //    $('.about-b').removeClass('fp-section');
    //    $('.cupcakery').removeClass('fp-section');
}

function initMainMenu() {
    // If a link has a dropdown, add sub menu toggle.xxz
    //        $('nav ul li a:not(:only-child)').click(function (e) {
    //            $(this).siblings('.nav-dr>e/opdown').toggle();


    //            // Close one dropdown when selecting another
    //            $('.nav-dropdown').not($(this).siblings()).hide();
    //            e.stopPropagation();
    //        });
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
