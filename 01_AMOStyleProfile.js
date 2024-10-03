/*
	AMO Consultancy - Custom Stype Profile - 02/2024
	To add it to your style profile, please put this file under "[K2 Installation Folder]\K2 smartforms Runtime\Styles\AMOStyleProfile"
	and add the following path to your style profile:
	/Runtime/Styles/AMOStyleProfile/01_AMOStyleProfile.js
*/

// Define constants for element names used in the layout. 
// Basically we do that to arrange the elements after rendering it and position it either above the tab or below it.
const ELEMENT_NAME_ABOVETABS = '_aboveTabs';
const ELEMENT_NAME_BELOWTABS = '_belowTabs';
 
// Initialize the page once the DOM is fully loaded
$(document).ready(function() {
    enableTheme();                  // Apply the selected theme to the page
    renderAMOBanner();              // Render the AMO banner at the top of the page
    renderAMOMenu();                // Render the AMO menu
    registerEventTitleChanged();    // Register an event to change the document title based on the AMO banner content
    renderElementsAboveAndBelowTabs(); // Render custom elements above and below the tabs
    renderGoogleIcons();            // Add Google icons to the page
});
 
// Function to enable and apply the theme to various elements
const enableTheme = () => {
    // Add the 'amo' class to several elements to apply the base theme
    $('body, form, .runtime-content, .runtime-form').addClass('amo');
    // Uncomment the following lines to apply different color themes
    /*$('body, form, .runtime-content, .runtime-form').addClass('amo-purple');*/
    /*$('body, form, .runtime-content, .runtime-form').addClass('amo-orange');*/
    /*$('body, form, .runtime-content, .runtime-form').addClass('amo-yellow');*/
};
 
// Function to render the AMO banner
const renderAMOBanner = () => {    
    // Find the AMO banner and add a custom class, then reposition it
    $('[name="dl_AMOBanner"]').closest('.row').addClass('custom-banner');
    $('.custom-banner').insertBefore($('.runtime-content'));   
};
 
// Function to render the AMO menu
const renderAMOMenu = () => {    
    // Find the AMO menu and add a custom class, then reposition it
    $('[name="dl_AMOMenu"]').closest('.row').addClass('custom-menu');
    $('.custom-menu').insertBefore($('.runtime-form'));
};
 
// Function to update the document title based on the AMO banner content
const registerEventTitleChanged = () => {
    // Listen for modifications in the AMO banner and update the title accordingly. 
	// The value of "dl_AMOBanner" will be passed as a parameter in the view.
    $('[name="dl_AMOBanner"]').on('DOMSubtreeModified', function(e){
        document.title = "AMO " + $('[name="dl_AMOBanner"]').html();
    });
};
 
// Function to render custom elements above and below the tabs
const renderElementsAboveAndBelowTabs = () => {    
    // Find elements above tabs, add a custom class, and reposition them
    $('div[name*="' + ELEMENT_NAME_ABOVETABS + '"]').closest('.row').addClass('custom-abovetabs');
    $('.custom-abovetabs').insertBefore($('.tabs-top'));
 
    // Find elements below tabs, add a custom class, and reposition them
    $('div[name*="' + ELEMENT_NAME_BELOWTABS + '"]').closest('.row').addClass('custom-belowtabs');
    $('.custom-belowtabs').insertAfter($('.tabs-top'));
};
 
// Function to add Google icons to the page
renderGoogleIcons = () => {
    // Create a link element for the Google icons stylesheet and append it to the head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    document.head.appendChild(link);
}
