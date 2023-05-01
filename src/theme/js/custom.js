import $ from 'jquery';

export var W3Crm = () => {
	//"use strict"
	/* Search Bar ============== */
	var screenWidth = $(window).width();
	//var screenHeight = $( window ).height();


	var handleSelectPicker = function () {
		if ($('.default-select,.table-responsive select').length > 0) {
			$('.default-select,.table-responsive select').selectpicker();
		}
	}
	var handlePreloader = function () {
		setTimeout(function () {
			$('#preloader').remove();
			$('#main-wrapper').addClass('show');
		}, 800);

	}

	var handleMetisMenu = function () {
		if ($('#menu').length > 0) {
			$("#menu").metisMenu();
		}
		$('.metismenu > .mm-active ').each(function () {
			if (!$(this).children('ul').length > 0) {
				$(this).addClass('active-no-child');
			}
		});
	}

	var handleAllChecked = function () {
		$("#checkAll").on('change', function () {
			$("td input, .email-list .custom-checkbox input").prop('checked', $(this).prop("checked"));
		});
	}

	var handleNavigation = function () {
		$(".nav-control").on('click', function () {

			$('#main-wrapper').toggleClass("menu-toggle");

			$(".hamburger").toggleClass("is-active");
		});
	}

	var handleCurrentActive = function () {
		for (var nk = window.location,
			o = $("ul#menu a").filter(function () {

				return this.href === nk;

			})
				.addClass("mm-active")
				.parent()
				.addClass("mm-active"); ;) {

			if (!o.is("li")) break;

			o = o.parent()
				.addClass("mm-show")
				.parent()
				.addClass("mm-active");
		}
	}

	var handleMiniSidebar = function () {
		$("ul#menu>li").on('click', function () {
			const sidebarStyle = $('body').attr('data-sidebar-style');
			if (sidebarStyle === 'mini') {
				console.log($(this).find('ul'))
				$(this).find('ul').stop()
			}
		})
	}

	var handleMinHeight = function () {
		var win_h = window.outerHeight;
		win_h = window.outerHeight;
		if (win_h > 0 ? win_h : window.screen.height) {
			$(".content-body").css("min-height", (win_h + 0) + "px");
		};
	}

	// var handleDataAction = function() {
	// 	$('a[data-action="collapse"]').on("click", function(i) {
	// 		i.preventDefault(),
	// 			$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
	// 			$(this).closest(".card").children(".card-body").collapse("toggle");
	// 	});

	// 	$('a[data-action="expand"]').on("click", function(i) {
	// 		i.preventDefault(),
	// 			$(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
	// 			$(this).closest(".card").toggleClass("card-fullscreen");
	// 	});



	// 	$('[data-action="close"]').on("click", function() {
	// 		$(this).closest(".card").removeClass().slideUp("fast");
	// 	});

	// 	$('[data-action="reload"]').on("click", function() {
	// 		var e = $(this);
	// 		e.parents(".card").addClass("card-load"),
	// 			e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
	// 			setTimeout(function() {
	// 				e.parents(".card").children(".card-loader").remove(),
	// 					e.parents(".card").removeClass("card-load")
	// 			}, 2000)
	// 	});
	// }

	var handleHeaderHight = function () {
		const headerHight = $('.header').innerHeight();
		$(window).scroll(function () {
			if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
				$(this.window).scrollTop() >= headerHight ? $('.deznav').addClass('fixed') : $('.deznav').removeClass('fixed')
		});
	}

	var handleMenuTabs = function () {
		if (screenWidth <= 991) {
			$('.menu-tabs .nav-link').on('click', function () {
				if ($(this).hasClass('open')) {
					$(this).removeClass('open');
					$('.fixed-content-box').removeClass('active');
					$('.hamburger').show();
				} else {
					$('.menu-tabs .nav-link').removeClass('open');
					$(this).addClass('open');
					$('.fixed-content-box').addClass('active');
					$('.hamburger').hide();
				}
				//$('.fixed-content-box').toggleClass('active');
			});
			$('.close-fixed-content').on('click', function () {
				$('.fixed-content-box').removeClass('active');
				$('.hamburger').removeClass('is-active');
				$('#main-wrapper').removeClass('menu-toggle');
				$('.hamburger').show();
			});
		}
	}
	/* Header Fixed ============== */
	var headerFix = function () {
		//'use strict';
		/* Main navigation fixed on top  when scroll down function custom */
		$(window).on('scroll', function () {

			if ($('.header').length > 0) {
				//var menu = $('.header');
				$(window).scroll(function () {
					var sticky = $('.header'),
						scroll = $(window).scrollTop();

					if (scroll >= 100) {
						sticky.addClass('is-fixed');
					} else { sticky.removeClass('is-fixed'); }
				});
			}

		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}

	var handleChatbox = function () {
		$('.bell-link').on('click', function () {
			$('.chatbox').addClass('active');
		});
		$('.chatbox-close').on('click', function () {
			$('.chatbox').removeClass('active');
		});
	}

	// var handlePerfectScrollbar = function() {
	// 	if($('.deznav-scroll').length > 0)
	// 	{
	// 		//const qs = new PerfectScrollbar('.deznav-scroll');
	// 		const qs = new PerfectScrollbar('.deznav-scroll');

	// 		qs.isRtl = false;
	// 	}


	var handleBtnNumber = function () {
		$('.btn-number').on('click', function (e) {
			e.preventDefault();

			var fieldName = $(this).attr('data-field');
			var type = $(this).attr('data-type');
			var input = $("input[name='" + fieldName + "']");
			var currentVal = parseInt(input.val());
			if (!isNaN(currentVal)) {
				if (type === 'minus')
					input.val(currentVal - 1);
				else if (type === 'plus')
					input.val(currentVal + 1);
			} else {
				input.val(0);
			}
		});
	}

	var handleDzChatUser = function () {
		$('.dz-chat-user-box .dz-chat-user').on('click', function () {
			$('.dz-chat-user-box').addClass('d-none');
			$('.dz-chat-history-box').removeClass('d-none');
			//$(".chatbox .msg_card_body").height(vHeightArea());
			//$(".chatbox .msg_card_body").css('height',vHeightArea());
		});

		$('.dz-chat-history-back').on('click', function () {
			$('.dz-chat-user-box').removeClass('d-none');
			$('.dz-chat-history-box').addClass('d-none');
		});

		$('.dz-fullscreen').on('click', function () {
			$('.dz-fullscreen').toggleClass('active');
		});

		/* var vHeight = function(){ */

		/* } */


	}


	var handleDzFullScreen = function () {
		$('.dz-fullscreen').on('click', function (e) {
			if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
				/* Enter fullscreen */
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen(); /* IE/Edge */
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen(); /* Firefox */
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen(); /* Chrome, Safari & Opera */
				}
			}
			else { /* exit fullscreen */
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				}
			}
		});
	}

	var handleshowPass = function () {
		$('.show-pass').on('click', function () {
			$(this).toggleClass('active');
			if ($('#dz-password').attr('type') === 'password') {
				$('#dz-password').attr('type', 'text');
			} else if ($('#dz-password').attr('type') === 'text') {
				$('#dz-password').attr('type', 'password');
			}
		});
	}


	var heartBlast = function () {
		$(".heart").on("click", function () {
			$(this).toggleClass("heart-blast");
		});
	}

	var handleDzLoadMore = function () {
		$(".dz-load-more").on('click', function (e) {
			e.preventDefault();	//STOP default action
			$(this).append(' <i class="fas fa-sync"></i>');

			var dzLoadMoreUrl = $(this).attr('rel');
			var dzLoadMoreId = $(this).attr('id');

			$.ajax({
				method: "POST",
				url: dzLoadMoreUrl,
				dataType: 'html',
				success: function (data) {
					$("#" + dzLoadMoreId + "Content").append(data);
					$('.dz-load-more i').remove();
				}
			})
		});
	}

	var handleLightgallery = function () {
		if ($('#lightgallery').length > 0) {
			$('#lightgallery').lightGallery({
				loop: true,
				thumbnail: true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}
	var handleCustomFileInput = function () {
		$(".custom-file-input").on("change", function () {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}

	var vHeight = function () {
		var ch = $(window).height() - 206;
		$(".chatbox .msg_card_body").css('height', ch);
	}

	var handleDatetimepicker = function () {
		if ($("#datetimepicker1").length > 0) {
			$('#datetimepicker1').datetimepicker({
				inline: true,
			});
		}
	}

	// var handleCkEditor = function(){
	// 	if($("#ckeditor").length>0) {
	// 		ClassicEditor.create( document.querySelector( '#ckeditor' ), {
	// 			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
	// 		} )
	// 		.then( editor => {
	// 			window.editor = editor;
	// 		} )
	// 		.catch( err => {
	// 			console.error( err.stack );
	// 		} );
	// 	}
	// }

	var handleMenuPosition = function () {

		if (screenWidth > 1024) {
			$(".metismenu  li").unbind().each(function (e) {
				if ($('ul', this).length > 0) {
					var elm = $('ul:first', this).css('display', 'block');
					var off = elm.offset();
					var l = off.left;
					var w = elm.width();
					elm = $('ul:first', this).removeAttr('style');
					//var docH = $("body").height();
					var docW = $("body").width();

					if ($('html').hasClass('rtl')) {
						var isEntirelyVisible = (l + w <= docW);
					} else {
						isEntirelyVisible = (l > 0) ? true : false;
					}

					if (!isEntirelyVisible) {
						$(this).find('ul:first').addClass('left');
					} else {
						$(this).find('ul:first').removeClass('left');
					}
				}
			});
		}
	}

	var handleChartSidebar = function () {
		$('.chat-rightarea-btn').on('click', function () {
			$(this).toggleClass('active');
			$('.chat-right-area').toggleClass('active');
		})
		$('.chat-hamburger').on('click', function () {
			$('.chat-left-area').toggleClass('active');
		})
	}

	var MagnificPopup = function () {
		//'use strict';	
		if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0) {
			/* magnificPopup for paly video function end*/
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		}
	}

	// var handleDraggableCard = function() {

	// 	var dzCardDraggable = function () {
	// 	 return {
	// 	  //main function to initiate the module
	// 	  init: function () {
	// 	   var containers = document.querySelectorAll('.draggable-zone');

	// 	   if (containers.length === 0) {
	// 		return false;
	// 	   }

	// 	//    var swappable = new Sortable.default(containers, {
	// 	// 	draggable: '.draggable',
	// 	// 	handle: '.draggable.draggable-handle',
	// 	// 	mirror: {
	// 	// 	 appendTo: 'body',
	// 	// 	 constrainDimensions: true
	// 	// 	}

	// 	//    });
	// 	// 
	// 	  }
	// 	 };
	// 	}();

	// 	$(document).ready(function () {
	// 	 dzCardDraggable.init();
	// 	});


	// 	function setBoxCount(){
	// 		var cardCount = 0;
	// 		$('.dropzoneContainer').each(function(){
	// 			cardCount = $(this).find('.draggable-handle').length;
	// 			$(this).find('.totalCount').html(cardCount);
	// 		});
	// 	}
	// }

	// loader 

	/* var loader;

	function loadNow(opacity) {
		if (opacity <= 0) {
			displayContent();
		} else {
			loader.style.opacity = opacity;
			window.setTimeout(function() {
				loadNow(opacity - 0.05);
			}, 50);
		}
	} */

	/* function displayContent() {
		loader.style.display = 'none';
	}

	document.addEventListener("DOMContentLoaded", function() {
		loader = document.getElementById('loader');
		loadNow(1);
	}); */

	/* Masonry Box ============== */
	var masonryBox = function () {
		// 'use strict';
		/* masonry by  = bootstrap-select.min.js */
		if ($('#masonry, .masonry').length > 0) {

			setTimeout(function () {
				$('.filters li').removeClass('active');
				$('.filters li:first').addClass('active');
				var self = $("#masonry, .masonry");
				var filterValue = $('.filters li:first').attr("data-filter");

				function handleIsotope(filterValue) {
					self.isotope({
						filter: filterValue
					});
				}

				if ($('.filters').length) {
					$(".filters li:first").addClass('active');

					filterValue = $('.filters li:first').attr("data-filter");

					handleIsotope(filterValue);

					$(".filters").on("click", "li", function () {
						$('.filters li').removeClass('active');
						$(this).addClass('active');

						filterValue = $(this).attr("data-filter");
						handleIsotope(filterValue);
					});
				}

			}, 500);

		}
		/* masonry by = bootstrap-select.min.js end */
	}

	var handleConverterTheme = function () {
		if ($('.btc-converts').length > 0) {
			setTimeout(() => {
				if ($('body').attr('data-theme-version') === "dark") {
					$('.btc-converts').attr('dark-mode', true);
				}
			}, 1000);
			$('#theme_version').on('change', function () {
				if ($('body').attr('data-theme-version') === "dark") {
					$('.btc-converts').attr('dark-mode', true);
				} else {
					$('.btc-converts').attr('dark-mode', false);
				}
			});
		}
	}
	/* Handle Page On Scroll ============== */
	/* Handle Page On Scroll ============== */
	var handlePageOnScroll = function (event) {

		// 'use strict';
		//var headerHeight = parseInt($('.header').css('height'), 10);

		$('.navbar-nav .scroll').on('click', function (event) {
			event.preventDefault();

			$('.navbar-nav .scroll').parent().removeClass('active');
			$(this).parent().addClass('active');

			if (this.hash !== "") {
				var hash = this.hash;
				var seactionPosition = parseInt($(hash).offset().top, 10);
				var headerHeight = parseInt($('.header').css('height'), 10);

				var scrollTopPosition = seactionPosition - headerHeight;
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function () {

				});
			}
		});

		pageOnScroll();
	}

	/* Page On Scroll ============== */
	var pageOnScroll = function (event) {

		if ($('.navbar-nav').length > 0) {

			var headerHeight = parseInt($('.header').height(), 10);

			$(document).on("scroll", function () {

				var scrollPos = $(this).scrollTop();
				$('.navbar-nav .scroll').each(function () {
					var elementLink = $(this);

					//console.log(this.hash);
					//console.log($(this.hash).offset());

					//var refElement = $(elementLink.attr("href"));

					if ($(this.hash).offset() !== undefined) {
						var seactionPosition = parseInt($(this.hash).offset().top, 10);
					} else {
						seactionPosition = 0;
					}
					var scrollTopPosition = (seactionPosition - headerHeight);

					if (scrollTopPosition <= scrollPos) {
						elementLink.parent().addClass("active");
						elementLink.parent().siblings().removeClass("active");
					}
				});

			});
		}
	}

	// var handleImageSelect = function(){

	// 	const $_SELECT_PICKER = $('.image-select');
	// 	$_SELECT_PICKER.find('option').each((idx, elem) => {
	// 		const $OPTION = $(elem);
	// 		const IMAGE_URL = $OPTION.attr('data-thumbnail');
	// 		if (IMAGE_URL) {
	// 			$OPTION.attr('data-content', "<img src='%i'/> %s".replace(/%i/, IMAGE_URL).replace(/%s/, $OPTION.text()))
	// 		}
	// 	});
	// 	$_SELECT_PICKER.selectpicker();
	// }
	// var tagify = function(){
	// 	if($('input[name=tagify]').length > 0){

	// 	// The DOM element you wish to replace with Tagify
	// 		var input = document.querySelector('input[name=tagify]');

	// 		// initialize Tagify on the above input node reference
	// 		new Tagify(input);

	// 	}
	// }


	/* Function ============== */
	return {
		init: function () {
			handleMetisMenu();
			handleAllChecked();
			handleNavigation();
			handleCurrentActive();
			handleMiniSidebar();
			handleMinHeight();
			//handleDataAction();
			handleHeaderHight();
			handleMenuTabs();
			handleChatbox();
			//handlePerfectScrollbar();
			handleBtnNumber();
			handleDzChatUser();
			handleDzFullScreen();
			handleshowPass();
			heartBlast();
			handleDzLoadMore();
			handleLightgallery();
			handleCustomFileInput();
			vHeight();
			handleDatetimepicker();
			//handleCkEditor();
			headerFix();
			handleChartSidebar();
			MagnificPopup();
			//handleDraggableCard();
			handleConverterTheme();
			//handleImageSelect();
			handleSelectPicker();
			handlePageOnScroll();
			//tagify();
			// masonryBox();
		},


		load: function () {
			handlePreloader();
			//handleNiceSelect();
			masonryBox();
		},

		resize: function () {
			vHeight();

		},

		handleMenuPosition: function () {

			handleMenuPosition();
		}
	}




	/*  Window Resize END */

}

