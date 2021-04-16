
$(document).ready(function(){

  // STICKY MENU //

  $('.js--service').waypoint(function(direction){

    if (direction == "down"){

        $('nav').addClass('sticky');

    } else {

        $('nav').removeClass('sticky');

    }
  });



  // MIX IT UP SECTION (PORTFOLIO)
  var mixer = mixitup(".item_manager");





































});
