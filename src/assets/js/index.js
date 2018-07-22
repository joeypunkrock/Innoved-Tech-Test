//module imports
import $ from 'jquery';
import 'bootstrap';
import 'rangeslider.js';
import '../scss/style.scss';

//load bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//range slider initilisation to be called on demand
function initRangeslider() {
    $('.range-slider').rangeslider({
        polyfill: false
    });
}

initRangeslider();

//function to switch between the assessment navigation items
function getAssessmentSection(link) {
    //use the passed link variable to load the matching .html page
    $.get( "inc/"+link+".html", function( data ) {
        $( "#assessmentSection" ).html( data );
    })
    .done(function() {
        //reinitialise rangeslider
        initRangeslider();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        //throw an error on failure
        $( "#assessmentSection" ).html( '<hr><h3 class="text-danger h4">Error Loading Content</h3><p>There was an error getting the content. Please check the logs.</p>' );
        if(errorThrown != '') {
            console.log("Error: " + errorThrown);
        }
    });
}

//get the scores section on first load
getAssessmentSection('scores');

//assessment navigation
$('.assessment-link').on('click', function(e) {
    e.preventDefault();
    const navItem = $(this);

    //check if link is not disabled
    if( !$(this).hasClass('disabled') ) {

        //get the link attribute name and load the matching .html page
        const link = $(this).attr('link');
        getAssessmentSection(link);

        //set the correct nav item to the active state
        $('.assessment-link').removeClass('active');
        navItem.addClass('active');
        
    }
});

//show collapsable element
$(document).on("click", '.show-collapse', function(e) { 
    e.preventDefault();
    const element = $(this).attr('element');
    $(element).collapse('show');
});

//hide collapsable element
$(document).on("click", '.hide-collapse', function(e) { 
    e.preventDefault();
    const element = $(this).attr('element');
    $(element).collapse('hide');
});