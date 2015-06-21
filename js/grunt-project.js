/**
A simple Grunt project - 0.1.0
http://markgoodyear.com
Copyright (c) 2015 Mark Goodyear
License: MIT
*/


jQuery(document).ready(function () {

    // Initialize collapse button
    jQuery('.button-collapse').sideNav();
    jQuery('.slider').slider({height: 240});
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //jQuery('.collapsible').collapsible();
    //

    jQuery('.parallax').parallax();
    jQuery('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    jQuery('#form-submit').on('click', function (e) {

        var first_name = jQuery('#first_name').val();
        var last_name = jQuery('#last_name').val();
        var email = jQuery('#email').val();
        var message = jQuery('#message').val();

        var submission = [first_name, last_name, email, message];

        jQuery.post('ajax/test.html', submission).done(function () {
            alert('yo');
        });

        console.log(JSON.stringify(submission));

        e.preventDefault();
    });
});