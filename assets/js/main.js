// Chrmoia Slider
$('.chromia-slider.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    startPosition: 'URLHash'
});


// Founder Popup
$(document).ready(function() {
    // Show Founder Popup 1
    $('#btn-tooltip1').click(function() {
            $('#founder-popup1').show("slow");
            $('.founder-tooltip-1').hide("slow");
        })
        // Hide Founder Popup 1
    $('#close-btn1').click(function() {
            $('.founder-tooltip-1').show("slow");
            $('#founder-popup1').hide("slow");
        })
        // Show Founder Popup 2
    $('#btn-tooltip2').click(function() {
            $('#founder-popup2').show("slow");
            $('.founder-tooltip-2').hide("slow");
        })
        // Hide Founder Popup 2
    $('#close-btn2').click(function() {
            $('.founder-tooltip-2').show("slow");
            $('#founder-popup2').hide("slow");
        })
        // Show Founder Popup 3
    $('#btn-tooltip3').click(function() {
            $('#founder-popup3').show("slow");
            $('.founder-tooltip-3').hide("slow");
        })
        // Hide Founder Popup 3
    $('#close-btn3').click(function() {
        $('.founder-tooltip-3').show("slow");
        $('#founder-popup3').hide("slow");
    })
});
// Blog Event
document.getElementById('blog_event').style.visibility = "visible";
document.getElementById('border_red').style.borderColor = "#FF405E";
// Show Founder Popup 3
// $('#btn-tooltip3').click(function() {
//         $('#founder-popup3').show("slow", function() {
//             $('.founder-txt-3').css("position", "unset");
//         });
//         $('.founder-tooltip-3').hide("slow");
//     })
// Hide Founder Popup 3
//     $('#close-btn3').click(function() {
//         $('.founder-tooltip-3').show("slow");
//         $('#founder-popup3').hide("slow", function() {
//             $('.founder-txt-3').css("position", "absolute");
//         });
//     })