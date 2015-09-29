$(document).ready(function() {
  playtheme();
  ryugo();
});

function playhadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playtheme() {
    $('#ryu-theme')[0].volume = 0.1;
    $('#ryu-theme')[0].load();
    $('#ryu-theme')[0].play();
}

function ryugo() {
  $('.ryu').mouseenter(function() {
    $('.ryu-active').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-active').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playhadouken();
    $('.ryu-active').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '575px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-active').hide();
    $('.ryu-still').show();
  });

  $(document).keydown(function(e) {
    if(e.keyCode == 88) {
      $('.ryu-active').hide(); // I peeked at the HTML for the example project - when I saw that each div had multiple classes...  Ugh.
      $('.ryu-cool').show();
    }
  }).keyup(function(e) { // messed around with 2nd method code for 45 minutes before realizing that I missed the "e" in brackets...
    if(e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();  
    }  
  });
}


/*  MY ORIGINAL IF ATTEMPT - NOTE ELEMENTSTHAT I GOT RIGHT KEYCODE, ETC.

  if ($('.ryu-still').is(':visible')) {
// listen for x key
    $('body').on('keydown', function(e){
  	  if(e.keyCode == 88) {
  	    $('.ryu-still').hide();
  	    $('.ryu-cool').show();
    }
  })
    $('body').on('keyup', function(){
 	  $('.ryu-still').show();
  	  $('.ryu-cool').hide();    
    })
  } else if ($('.ryu-still').is(':hidden')) {
// listen for x key
    $('body').on('keydown', function(e){
  	  if(e.keyCode == 88) {
  	    $('.ryu-ready').hide();
  	    $('.ryu-cool').show();
    }
  })
    $('body').on('keyup', function(){
 	  $('.ryu-ready').show();
  	  $('.ryu-cool').hide();    
    })

  }
// end listen for x key
*/