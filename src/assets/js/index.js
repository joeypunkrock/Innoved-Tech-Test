import $ from 'jquery';
import 'bootstrap';
import 'rangeslider.js';
import '../scss/style.scss';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.range-slider').rangeslider({
        polyfill: false
    });
})