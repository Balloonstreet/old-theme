jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{ variant.id }}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });

});

  $(document).ready(function () {
            var $slider = $('#flickitySlidercustom');
            var $scrollbarTrack = $('#scrollbarTrack');
            var $scrollbarThumb = $('#scrollbarThumb');
            var slideCount = $slider.find('.slide-item').length;
            var maxScrollbarThumbPosition = $scrollbarTrack.width() - $scrollbarThumb.width();
    
            // Initialize Flickity slider
            var flickityOptions = {
                cellAlign: 'left',
                contain: true,
                wrapAround: true,
                loop: false,
                selectedAttraction: 0.009,
                friction: 0.8,
            };
    
            $slider.flickity(flickityOptions);
    
            // Initialize jQuery UI scrollbar
            $scrollbarThumb.draggable({
                axis: 'x',
                containment: 'parent',
                drag: function (event, ui) {
                    var newPosition = ui.position.left;
                    moveToSlide(newPosition);
                }
            });
    
            // Update scrollbar thumb position based on current slide
            function updateScrollbarPosition() {
                var currentSlide = $slider.data('flickity').selectedIndex;
                var newPosition = (currentSlide / (slideCount - 1)) * maxScrollbarThumbPosition;
                $scrollbarThumb.css('left', newPosition);
            }
    
            // Move slider to a specific slide based on scrollbar thumb position
            function moveToSlide(position) {
                var slideIndex = Math.round(position / maxScrollbarThumbPosition * (slideCount - 1));
                $slider.flickity('select', slideIndex);
            }
    
            // Update scrollbar position on slider change
            $slider.on('change.flickity', function (event, index) {
                updateScrollbarPosition();
            });
    
            // Update maxScrollbarThumbPosition on window resize
            $(window).on('resize', function () {
                maxScrollbarThumbPosition = $scrollbarTrack.width() - $scrollbarThumb.width();
                updateScrollbarPosition();
            });
    
            // Initialize slider and scrollbar
            updateScrollbarPosition();
        });