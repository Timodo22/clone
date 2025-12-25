/*==============navigation menu==============*/
$(function() {
	$('nav#menu').mmenu();
	 });
	 $(document).ready(function(){
	$('nav#menu').data('mmenu').bind('opened', function () {
		$('.hamburger').addClass('is-active');
	});
	$('nav#menu').data('mmenu').bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});
});

var swiper = new Swiper('.car_slider2', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
	nextEl: '.car_slider2 .swiper-button-next',
	prevEl: '.car_slider2 .swiper-button-prev',
  },
  breakpoints: {
	1024: {
	  slidesPerView: 3,
	  spaceBetween: 10,
	},
	991: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	767: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	480: {
	  slidesPerView: 1,
	  spaceBetween: 10,
	}
  }
});

var swiper = new Swiper('.colluge-slider', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop:false,
  // init: false,
 	navigation: {
	nextEl: '.colluge-slide .swiper-button-next',
	prevEl: '.colluge-slide .swiper-button-prev',
  },
  breakpoints: {
	1024: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	991: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	767: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	480: {
	  slidesPerView: 1,
	  spaceBetween: 10,
	}
  }
});

/*==============Home slider==============
var galleryTop = new Swiper('.home-banner', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 4, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.home-banner-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 4, //looped slides should be the same
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;*/	
/*==============map_height===========*/
$(window).on('load resize', function() {
    var total_heights = $(".banner-text").outerHeight();
	$(".blank_div").css("height", total_heights);
    /*if ($(window).width() <= 991) {
        $(".map_area iframe").css("height", '300');
    }*/
});

/*=====================================*/
var swiper = new Swiper('.car_slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  // init: false,
  navigation: {
	nextEl: '.product-slider-wrapper .swiper-button-next',
	prevEl: '.product-slider-wrapper .swiper-button-prev',
  },
  breakpoints: {
	1024: {
	  slidesPerView: 2,
	  spaceBetween: 20,
	},
	991: {
	  slidesPerView: 2,
	  spaceBetween: 20,
	},
	767: {
	  slidesPerView: 1,
	  spaceBetween: 20,
	},
	320: {
	  slidesPerView: 1,
	  spaceBetween: 10,
	}
  }
});



$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});



/*******detaipage slider******/
var swiper = new Swiper('.detailview_slider', {
  slidesPerView: 3,
  spaceBetween:10,
  // init: false,
  navigation: {
	nextEl: '.detailview_slider .swiper-button-next',
	prevEl: '.detailview_slider .swiper-button-prev',
  },
  breakpoints: {
	1024: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	991: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	767: {
	  slidesPerView: 2,
	  spaceBetween: 10,
	},
	575: {
	  slidesPerView: 1,
	  spaceBetween: 10,
	}
  }
});
/*==========aanbod-dtl============*/
var swiper = new Swiper('.aanbod_details_slider .swiper-container', {
  slidesPerView: 1.7,
  centeredSlides: true,
  loop: true,
  speed:800,
  navigation: {
		nextEl: '.aanbod_details_slider .swiper-button-next',
		prevEl: '.aanbod_details_slider .swiper-button-prev',
  },
  breakpoints: {
		767: {
		  slidesPerView: 1,
		}
  }
});
/*----------photo_upload------------------
	$(function(){
		$("input[type=file]").change(function(){
			if($(this).val() != ''){
				ValidateFileUpload(this);
			}	
		});
	});
function ValidateFileUpload(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
			if ($.inArray(input.files[0]['name'].split('.').pop().toLowerCase(), fileExtension) == -1) {
				showError('<div class="message error">Met de foto kunnen alleen bestandstypen GIF, PNG, JPG, JPEG en BMP worden gebruikt.</div>');
				$(input).val("")
			} else {
				$(input).parents("label").css("background", "url("+e.target.result+") no-repeat center center/cover");
			}
		}
		reader.readAsDataURL(input.files[0]);
	}
}*/