import {$ } from 'jquery';
import * as typeahead from 'typeahead'

var W3Crm = function(){
	//"use strict"
	/* Search Bar ============== */
	var screenWidth = $( window ).width();
	//var screenHeight = $( window ).height();


    var handlePreloader = function(){
		setTimeout(function() {
			$('#preloader').remove();
			$('#main-wrapper').addClass('show');
		},800);	
		
	}

    var handleMenuPosition = function(){
		
		if(screenWidth > 1024){
			$(".metismenu  li").unbind().each(function (e) {
				if ($('ul', this).length > 0) {
					var elm = $('ul:first', this).css('display','block');
					var off = elm.offset();
					var l = off.left;
					var w = elm.width();
					elm = $('ul:first', this).removeAttr('style');
					//var docH = $("body").height();
					var docW = $("body").width();
					
					if($('html').hasClass('rtl')){
						var isEntirelyVisible = (l + w <= docW);	
					}else{
						isEntirelyVisible = (l > 0)?true:false;	
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

    var handlePageOnScroll = function(event){
		
		// 'use strict';
		//var headerHeight = parseInt($('.header').css('height'), 10);
		
		$('.navbar-nav .scroll').on('click', function(event) 
		{
			event.preventDefault();

			$('.navbar-nav .scroll').parent().removeClass('active');
			$(this).parent().addClass('active');
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = parseInt($(hash).offset().top, 10);
				var headerHeight =   parseInt($('.header').css('height'), 10);
				
				var scrollTopPosition = seactionPosition - headerHeight;
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		
		pageOnScroll();
	}

    /* Page On Scroll ============== */
	var pageOnScroll = function(event){
		
		if($('.navbar-nav').length > 0){
			
			var headerHeight = parseInt($('.header').height(), 10);
			
			$(document).on("scroll", function(){
				
				var scrollPos = $(this).scrollTop();
				$('.navbar-nav .scroll').each(function () {
					var elementLink = $(this);
					
					//console.log(this.hash);
					//console.log($(this.hash).offset());
					
					//var refElement = $(elementLink.attr("href"));
					
					if($(this.hash).offset() !== undefined){
						var seactionPosition = parseInt($(this.hash).offset().top, 10);
					}else{
						seactionPosition = 0;
					}
					var scrollTopPosition = (seactionPosition - headerHeight);

					if (scrollTopPosition <= scrollPos){
						elementLink.parent().addClass("active");
						elementLink.parent().siblings().removeClass("active");
					}
				});
				
			});
		}
	}

    return {
		init:function(){
            handlePreloader();
            handleMenuPosition();
            handlePageOnScroll();
        },

        load:function(){
            handlePreloader();
            //handleNiceSelect();
            //masonryBox();
        },
        
        resize:function(){
            //vHeight();
            
        },
        
        handleMenuPosition:function(){
            
            handleMenuPosition();
        }
    }



}();


/* Document.ready Start */	
$(document).ready(function() {
	$('[data-bs-toggle="popover"]').popover();
    // 'use strict';
	W3Crm.init();
	
});
/* Document.ready END */

/* Window Load START */
$(window).on('load',function () {
	//'use strict'; 
	W3Crm.load();
	setTimeout(function(){
			W3Crm.handleMenuPosition();
	}, 1000);
	
});
/*  Window Load END */
/* Window Resize START */
$(window).on('resize',function () {
	//'use strict'; 
	W3Crm.resize();
	setTimeout(function(){
			W3Crm.handleMenuPosition();
	}, 1000);
});
/*  Window Resize END */