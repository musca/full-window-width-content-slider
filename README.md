full window width content slider
================================

jQuery tools scrollable full window width plugin


###barebone settings:

    $('#slider').scrollable().fullwidth();


###Full on settings:

    $('#slider').scrollable({ 
      circular: true, 
      touch: false, 
      easing: 'linear', 
      speed: 400
    }).navigator({ 
      navi: '#navigation',
      history: true,
      idPrefix: 'slide_'
    }).autoscroll({ 
      autoplay: true,
      autopause:true, 
      interval: 5000 
    }).fullwidth();
  
  Include the easing js file if you want a none default easing.
