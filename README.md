full-window-width-content-slider
================================

jQuery Tools Full Width Scrollable Plugin


###barebone settings:

$('#slider').scrollable().fullwidth();


###Full on seetings:

 $('#slider').scrollable({ 
    circular: false, 
    touch: false, 
    easing: 'easeInExpo', 
    speed: 400
  }).navigator({ 
    navi: '#navigation' 
  }).autoscroll({ 
    autoplay: true,
    autopause:true, 
    interval: 5000 
  }).fullwidth();
  
  Include the easing js file if you want some none default easing.
