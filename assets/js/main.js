// Founder Popup
// Founder Popup 1 Show
$('.btn-tooltip-1').on('click', function() {
    $('.founder-popup-container-1').css("display", "inline-block");
    $('.founder-popup-container-1').css("transition", "display .3s");
    $('.founder-tooltip-1').css("visibility", "hidden");
    $('.founder-txt-1').css("position", "unset");
});
// Founder Popup 2 Show
$('.btn-tooltip-2').on('click', function() {
    $('.founder-popup-container-2').css("display", "inline-block");
    $('.founder-tooltip-2').css("visibility", "hidden");
});
// Founder Popup 3 Show
$('.btn-tooltip-3').on('click', function() {
    $('.founder-popup-container-3').css("display", "inline-block");
    $('.founder-tooltip-3').css("visibility", "hidden");
});
// Founder Popup Hide
// Founder Popup 1 Hide
$('.close').on('click', function() {
    $('.founder-popup-container-1').css("display", "none");
    $('.founder-tooltip-1').css("visibility", "visible");
    $('.founder-txt-1').css("position", "absolute");
});
// Founder Popup 2 Hide
$('.close').on('click', function() {
    $('.founder-popup-container-2').css("display", "none");
    $('.founder-tooltip-2').css("visibility", "visible");
});
// Founder Popup 3 Hide
$('.close').on('click', function() {
    $('.founder-popup-container-3').css("display", "none");
    $('.founder-tooltip-3').css("visibility", "visible");
});
// $(document).ready(function() {
//     $('.btn-tooltiop').on('click', function() {
//         $('.founder-popup-container').fadeIn();
//         $('.founder-tooltip-1').hide();
//     });

// });