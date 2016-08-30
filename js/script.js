 $('.center').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


/*
$('.center').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
*/



$( function() {
    $( "#slider-range_1" ).slider({
      range: true,
      min: 0,
      max: 200,
      values: [ 50, 150 ],
      slide: function( event, ui ) {
        $( "#minSquare" ).val( ui.values[ 0 ] + "м2" );
        $( "#maxSquare" ).val( ui.values[ 1 ] + "м2" );
      }
    });
    $( "#minSquare" ).val( $( "#slider-range_1" ).slider( "values", 0 ) + " м2" );
    $( "#maxSquare" ).val( $( "#slider-range_1" ).slider( "values", 1 ) + " м2" );
  } );

$( function() {
    $( "#slider-range_2" ).slider({
      range: true,
      min: 5000,
      max: 100000,
      values: [ 10000, 50000 ],
      slide: function( event, ui ) {
        $( "#minCost" ).val( ui.values[ 0 ] );
        $( "#maxCost" ).val( ui.values[ 1 ] );
      }
    });
    $( "#minCost" ).val( $( "#slider-range_2" ).slider( "values", 0 ) );
    $( "#maxCost" ).val( $( "#slider-range_2" ).slider( "values", 1 ) );
  } );