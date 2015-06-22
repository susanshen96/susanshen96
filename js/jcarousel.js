(function($) {
    $(function() {

        // Main jcarousel framework and implementation

        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();
                console.log(width);
                width = width / 4 - 14;

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=4'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=4'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 4,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

        // When the user clicks on a carousel card, open a new window to the appropriate page

        var carouselCardRedirect = function(card, link) {
            $(card).click(function() {
                window.open(link, '_blank');
            });
        }

        carouselCardRedirect('.carousel-card-vee', 'http://snap.berkeley.edu/snapsource/snap.html#present:Username=bh&ProjectName=vee');
        carouselCardRedirect('.carousel-card-jurassic-park', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/Double%20Jurassic%20Park.xml');
        carouselCardRedirect('.carousel-card-math-trainer', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/math%20trainer.xml');
        carouselCardRedirect('.carousel-card-tree', 'http://snap.berkeley.edu/snapsource/snap.html#present:Username=bh&ProjectName=Tree');
        carouselCardRedirect('.carousel-card-fractal-fruit-tree', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/fractal_fruit_tree.xml');
        carouselCardRedirect('.carousel-card-star-wars', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/star%20wars.xml');
        carouselCardRedirect('.carousel-card-funny-face', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/funny%20face.xml');
        carouselCardRedirect('.carousel-card-splotch-paint', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/splotch%20paint.xml');
        carouselCardRedirect('.carousel-card-kanon', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/kanon.xml');
        carouselCardRedirect('.carousel-card-flashlight', 'http://snap.berkeley.edu/snapsource/snap.html#open:http://snap.berkeley.edu/snapsource/demo/flashlight.xml');      
    });
})(jQuery);
