//module imports
import $ from 'jquery';
import 'bootstrap';
import 'rangeslider.js';
import Slideout from 'slideout';
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
    $.get( "inc/assessment-modules/"+link+".html", function( data ) {
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
    var navItem = $(this);

    //check if link is not disabled
    if( !$(this).hasClass('disabled') ) {

        //get the link attribute name and load the matching .html page
        var link = $(this).attr('data-link');
        getAssessmentSection(link);

        //set the correct nav item to the active state
        $('.assessment-link').removeClass('active');
        navItem.addClass('active');
        
    }
});

//show collapsable element
$(document).on("click", '.show-collapse', function(e) { 
    e.preventDefault();
    var element = $(this).attr('element');
    $(element).collapse('show');
});

//hide collapsable element
$(document).on("click", '.hide-collapse', function(e) { 
    e.preventDefault();
    var element = $(this).attr('element');
    $(element).collapse('hide');
});

//check/uncheck all coaches in coaches list
$('#checkAllCoaches').change(function() {
    var coachCheckbox = $('#coachesList').find('.coach-checkbox');
    if (this.checked) {
        coachCheckbox.prop('checked', true);
    } else {
        coachCheckbox.prop('checked', false);
    }
});

/*! Smart Resize */
(function ($) {

    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function () {
            $(this).on("resize", $special.handler);
        },
        teardown: function () {
            $(this).off("resize", $special.handler);
        },
        handler: function (event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function () {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 150
    };

})($);
/* /Smart Resize */

//init slideout (sidebar)
var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('sidebar-main'),
    'padding': 256,
    'tolerance': 70
});

// Toggle button
document.querySelector('.sidebar-toggler').addEventListener('click', function() {
    slideout.toggle();
});

//set the sidebar position based on browser width. (On smaller devices the sidebar will slideout)
function setSidebarPos() {
    var detach = $('body').find(".main-sidebar").detach();
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(detach).appendTo($('body').find("#sidebarStatic"));
    } else {
        $(detach).appendTo($('body').find("#sidebarSlidout"));
    }
}

//on resize
$(window).on("debouncedresize", function(event) {
    setSidebarPos();
});

setSidebarPos();