full window width content slider
================================

jQuery tools scrollable full window width plugin

###Setup


    <style>
      #slider{
        width: 100%;
        overflow: hidden;
        position: relative;
        height:400px;
      }
      #items{  
        width: 2000em;
        position: absolute;
      }
      #items > div{
        float: left;
      }
      #items > div > div{
        width: 960px;
        margin: 0 auto;
      }
    </style>
    
    <script src="jquery.js"></script>
    <script src="scrollable.all.min.js"></script>
    
    <script>$('#slider').scrollable().fullwidth();</script>  

    <div id="slider">
      <div id="items">
        <div>
          <div>
            <h1>Slide 1</h1>
          </div>
        </div>
        <div>
          <div>
            <h2>Slide 2</h2>
          </div>
        </div>
        <div>
          <div>
            <h3>Slide 3</h3>
          </div>
        </div>
      </div>
    </div>

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
    }).fullwidth({
      width: 960 // If you need a static width
    });
  
  Include the easing js file if you want a none default easing.
