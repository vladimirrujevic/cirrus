//Initialize ui elements, load settings and display current/saved weather data(offline mode)
var mode = 1;
//electron-only functions
$("#btnX").click(function(){
  window.close();
});

$("#btnMin").click(function(){
  const { remote } = require('electron');
  remote.BrowserWindow.getFocusedWindow().minimize();
});

$(document).ready(function(){
  //Initialize ui elements
  displayCurrent();
  $("#btnC").addClass("selected");
  mode = 1;
  //render the demo weather (init)
  render(demoWeather);
  var e = require("electron")
  if(typeof(e) === 'object'){
    showTitle();
  }
});

//Resize window elements when window size changes - responsive
$(window).resize(function(){
  if(mode === 1){
    displayCurrent();
  }
});

var displayCurrent = function(){
  /*using attributes instead of css because of the way skycons
  *determines size of the canvas*/
  var h = Math.round($(".wrap").height()/2);
  $(".wIcon").attr("height", h);
  $("#skycon").attr("height",h);
  $("#skycon").attr("width",h);
  $(".wConditions, .wConditions div").height(h/2);
  $(".wConditions div").css({
    "font-size": h/2 + "px",
    "line-height": h/2 + "px"
  });
  $(".wConditions div.right").css({
    "font-size": h/4 + "px",
    "line-height": h/4 + "px"
  });
}

//Hide or show title bar
var hidden = true;
var hideTitle = function(){
  if(!hidden){
    $("header").animate(
      {
        top: -25,
        display: "none"
      },
      500
    );
    $(".wrap").animate({
      top: 0
      },
      500
    );
    hidden = true;
  }

}

var showTitle = function(){
  if(hidden){
    $("header").animate(
      {
        top: 0,
        height: 25,
        display: "block"
      },
      500
    );
    $(".wrap").animate({
      top: 25
      },
      500
    );

    hidden = false;
  }
}
