/** Document Ready */
jQuery(document).ready(function ($) {
'use strict';

//wow js
if ($('.wow').length) {
    var wow = new WOW({
        offset: 100,
        mobile: false,
        duration: 200
    });
    
    wow.init();
}

if (!$('body').hasClass('nasa-loaded')) {
    $('body').addClass('nasa-loaded');
}

/**
 * Counter
 */
$('body').on('nasa_grow_counter', function(e, _wrap) {
    var _interval = [];
    $(_wrap).find('.nasa-grow').each(function(_k) {
        var _this = $(this);
        
        if (!$(_this).hasClass('loaded')) {
            $(_this).addClass('loaded');
            
            var _num = parseInt($(_this).attr('data-num'));
            var _time = parseInt($(_this).attr('data-time'));

            var _delay = _time / _num;

            var _current = parseInt($(_this).text());

            _interval[_k] = setInterval(function() {
                if (_current < _num) {
                    _current = _current + 1;

                    $(_this).html(_current);
                } else {
                    clearInterval(_interval[_k]);
                }
            }, _delay);
        }
    });
});

if ($('.isotope-filter .items-total').length) {
    $('.isotope-filter .items-total').each(function() {
        var _this = $(this);
        var _count = $(_this).parents('.isotope-filter').attr('data-filter');
        
        if ($(_count).length) {
            $(_this).html($(_count).length);
        }
    });
}

$(window).on('scroll', function() {
    var _screen_h = $(this).height();
    var scrollTop = $(this).scrollTop();
    
    if ($('.nasa-grow-wrap').length) {
        $('.nasa-grow-wrap').each(function() {
            var _wrap = $(this);
            var _pos = $(_wrap).offset();
            var _height = $(_wrap).height();
            var _top = _pos.top;
            var _bot = _pos.top + _height;

            if (scrollTop < _bot && _top < scrollTop + _height + _screen_h) {
                $('body').trigger('nasa_grow_counter', [_wrap]);
            }
        });
    }
    
    /**
     * Fixed Menu
     * @type Number
     */
    if (scrollTop > 100) {
        $('.header-page').addClass('menu-fixed');
    } else {
        $('.header-page').removeClass('menu-fixed');
    }
    
    /**
     * Back to Top
     */
    if ($('#nasa-back-to-top').length) {
        if (typeof intervalBTT !== 'undefined' && intervalBTT) {
            clearInterval(intervalBTT);
        }
        
        var intervalBTT = setInterval(function() {
            var _height_win = $(window).height() / 2;
            if (scrollTop > _height_win) {
                if (!$('#nasa-back-to-top').hasClass('nasa-show')) {
                    $('#nasa-back-to-top').addClass('nasa-show');
                }
            } else {
                $('#nasa-back-to-top').removeClass('nasa-show');
            }
            
            clearInterval(intervalBTT);
        }, 100);
    }
}).trigger('scroll');

//mouse move parallax
if ($('.nasa-parallax').length) {
    $('.nasa-parallax').parallax({
        scalarX: 10.0,
        scalarY: 8.0
    });
}

$('.menu-anchor').on('click', function (e) {
    var anchor = $(this).attr('data-anchor');
    
    if ($(anchor).length) {
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top + "px"
        }, 1000);
    }
    
    e.preventDefault();
});

// Homes isotope
if ($('.home-items').length) {
    $('.home-items').imagesLoaded(function () {
        $('.home-items').isotope({
            itemSelector: '.home-item',
            percentPosition: true,
            filter: '.wpb-item'
        });
    });
}

$('.home-items-wrap .filter-homes').on('click', function (e) {
    $('.filter-homes').removeClass('is-checked');
    $(this).addClass('is-checked');
    var item_selector = $(this).attr("data-filter");
    
    if ($(".home-items").length) {
        $(".home-items").imagesLoaded(function () {
            $(".home-items").isotope({
                filter: item_selector
            });
        });
    }
    
    e.preventDefault();
});

// Woo isotope
if ($('.woo-items').length) {
    $('.woo-items').imagesLoaded(function () {
        $('.woo-items').isotope({
            itemSelector: '.woo-item',
            percentPosition: true,
            filter: '.shop-item'
        });
    });
}

$('.woo-items-wrap .filter-woo').on('click', function (e) {
    $('.filter-woo').removeClass('is-checked');
    $(this).addClass('is-checked');
    
    var item_selector = $(this).attr("data-filter");
    if ($(".woo-items").length) {
        $(".woo-items").imagesLoaded(function () {
            $(".woo-items").isotope({
                filter: item_selector
            });
        });
    }
    
    e.preventDefault();
});

$('.lazy').lazy({
    afterLoad: function(element) {
        if ($(element).parents('.woo-items').length) {
			$(element).parents('.woo-items').isotope('layout');
		}
    }
});

if ($('.woo-checkout-slider').length) {
    $('.woo-checkout-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        dots: true,
        swipe: true,
        draggable: true,
        pauseOnHover: true,
        arrows: true,
        touchThreshold: 10,
        fade: true,
        cssEase: 'ease-out',
        prevArrow: '<a class="nasa-nav-arrow slick-prev" href="javascript:void(0);"></a>',
        nextArrow: '<a class="nasa-nav-arrow slick-next" href="javascript:void(0);"></a>'
    });
}

$('body').on('click', '#nasa-back-to-top', function() {
    $('html, body').animate({scrollTop: 0}, 800);
});

});

