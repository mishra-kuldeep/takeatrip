//main navigation

jQuery(document).ready(function($){


// Navbar
$( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
    }
});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 1025) {
        $('html').click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $(document).click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click(function(e){
        e.stopPropagation();
        });
     }
});
// Navbar end

$('.banner-slide').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear',
  speed: 900,
  slidesToShow: 1,
  adaptiveHeight: true
});

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $("header").addClass("sticky");
    }
    else{ 
        $("header").removeClass("sticky");
    }
});

})


