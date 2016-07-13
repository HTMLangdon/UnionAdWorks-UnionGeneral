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
        fitToSection: false,
        autoScrolling: false
    });
}

function checkDisplayDimensions() {
    console.log("checkDisplayDimensions");
}

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

    $("nav ul li a.nav-title, nav ul li a:visited.nav-title").click(function (e) {
        $('#btn-hamburgerX').click(null);
    });

}

function setupSignUpEmailForm() {

    // Get the form.
    var form = $('#email-subscription-signup');

    // Get the messages div.
    var allFormElements = $(".newsletter-input-fName, .newsletter-input-lName, .newsletter-input-eMail");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();


        console.log(formData);

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                console.log("FAIL");
                console.log("RESPONSE:");

                console.log(response);
                // Make sure that the allFormElements div has the 'success' class.
                $(allFormElements).removeClass('error');
                $(allFormElements).addClass('success');

                // Set the message text.
                $(allFormElements).text(response);

                // Clear the form.
                $('.newsletter-input-fName').val('');
                $('.newsletter-input-lName').val('');
                $('.newsletter-input-eMail').val('');
                $('#message').val('');

            })
            .fail(function (data) {
                // Make sure that the allFormElements div has the 'error' class.
                $(allFormElements).removeClass('success');
                $(allFormElements).addClass('error');
                console.log("FAIL");
                console.log("DATA:");
                console.log(data);

                // Set the message text.
                if (data.responseText !== '') {
                    console.log(data);
                    //				$(allFormElements).text(data.responseText);
                } else {
                    $(allFormElements).text('Oops! An error occured and your message could not be sent.');
                }
            });

    });
}

$(window).resize(function (e) {
    checkDisplayDimensions();
});

$(document).ready(function () {
    checkDisplayDimensions();
    setupFullBrowserSections();
    initMainMenu();
    initCupcallery();
    onSiteImagesLoadComplete();
    setupSignUpEmailForm();
});
