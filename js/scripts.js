$(document).ready(function() {
  var images = [
    'HERO_1.jpg',
    'HERO_2.jpg',
    'HERO_3.jpg'
  ];
  $('#hero').css({'background-image': 'url(assets/' + images[Math.floor(Math.random() * images.length)] + ')'} );
});
