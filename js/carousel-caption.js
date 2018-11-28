// external js: flickity.pkgd.js

$('.carousel-container').each( function( i, container ) {
  var $container = $( container );

  var $carousel = $container.find('.carousel').flickity({
    cellSelector: 'img',
    imagesLoaded: true,
    percentPosition: false
  });
  var $caption = $container.find('.caption');
  var $title = $container.find('.carousel-title');
  var flkty = $carousel.data('flickity');

  $carousel.on( 'select.flickity', function() {
    // set image caption using img's alt
    $caption.text( flkty.selectedElement.alt )
    $title.text( flkty.selectedElement.title )


  });

});
