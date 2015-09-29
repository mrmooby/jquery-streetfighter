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
      $('.ryu-active').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) { 
    if(e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();  
    }  
  });
}


