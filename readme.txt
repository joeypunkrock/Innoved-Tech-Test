Innoved Tech Test

I have replicated the given design using a mixture of methods to showcase various skills able to achieve the task.

Libraries and assets have been installed as node modules using npm. These include jQuery, Bootstrap 4, rangeslider.js (used for custom range polyfills) and slideout.js (used for the sidebar on smaller devices).

They are then bundled together along with custom jQuery and SCSS and compressed down to achieve a much smaller file size.

In order to reduce the amount of extra css and classes written, I have overwritten various Bootstrap SCSS variables and reassigned them in /src/assets/scss/config/_variables.scss

I have split certain sections into their own files using PHP found in /dist/inc/, including each module into /dist/index.php.

The lower sections of the application (Scores, Goals, Questions etc...) are loaded in using jQuery $.get requests on click of the appropriate navigation link.

The final build fits into the specific design of the document, however, elements all stack when the browser width is reduced. The sidebar will not automatically appear on smaller devices, but will instead slide out when pressing the top left menu icon, or if on a touch devices, (or chrome device inspector) may slide out from the left on a swipe input.

Due to the project using PHP, it should be ran on a PHP capable server, setting /dist as the root.
