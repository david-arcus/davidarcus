// check need for polyfill
/*Modernizr.load([
    //first test need for polyfill
    {
        test: window.matchMedia,
        nope: "/js/media.match.min.js",
        load: "/js/enquire.min.js"
    }

]);
*/
$.Isotope.prototype._getCenteredMasonryColumns = function() {
	this.width = this.element.width();
	
	var parentWidth = this.element.parent().width();
	
	// i.e. options.masonry && options.masonry.columnWidth
	var colW = this.options.masonry && this.options.masonry.columnWidth ||
	// or use the size of the first item
	this.$filteredAtoms.outerWidth(true) ||
	// if there's no items, use size of container
	parentWidth;
	
	var cols = Math.floor( parentWidth / colW );
	cols = Math.max( cols, 1 );
	
	// i.e. this.masonry.cols = ....
	this.masonry.cols = cols;
	// i.e. this.masonry.columnWidth = ...
	this.masonry.columnWidth = colW;

};
	

$.Isotope.prototype._masonryReset = function() {
	// layout-specific props
	this.masonry = {};
	// FIXME shouldn't have to call this again
	this._getCenteredMasonryColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
		this.masonry.colYs.push( 0 );
	}
};
	

$.Isotope.prototype._masonryResizeChanged = function() {
	var prevColCount = this.masonry.cols;
	// get updated colCount
	this._getCenteredMasonryColumns();
	return ( this.masonry.cols !== prevColCount );

};
	

$.Isotope.prototype._masonryGetContainerSize = function() {
	var unusedCols = 0,
	i = this.masonry.cols;
	// count unused columns
	while ( --i ) {
		if ( this.masonry.colYs[i] !== 0 ) {
			break;
		}
	unusedCols++;

	}
	
	return {
		height : Math.max.apply( Math, this.masonry.colYs ),
		// fit container to columns that have been used;
		width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
	};
};


$(window).load(function(){
	
	$('#home-ajax-loader').hide();
	
	$('#container').isotope({
		filter: '.home, .home-hero, .web, .production, .animation, .design, .my-projects',
		masonryHorizontal: {
			columnWidth: 330
		}
	});
	
	if($(window).width() <= 340) {
		
		masonryHorizontal: {
			columnWidth: 300
		}
	
	}
	
	if($(window).width() <= 920) {
		
		$('#container').isotope( 'remove', $('.logo'));	
		
	}
		
	$('.box, .non-clickable-box').animate({opacity:1}, {queue:false});

});

$(document).ready(function() {

	$('#home-ajax-loader').show();

	//enable lazy load
	var $win = $(window),
    $con = $('#container'),
    $imgs = $("img.lazy");

	$con.isotope({
		onLayout: function() {
			$win.trigger("scroll");
		}
	});
	
	$imgs.lazyload({
		effect : "fadeIn",
		failure_limit: Math.max($imgs.length - 1, 0)
	});
	
	// enable fastclick
	FastClick.attach(document.body);
	
	// default scroll position is top of page
	// get original scroll position
	
	var scrollPos = 0;
			 
	// filter items when filter link is clicked
	$('#filters li').click(function(){
		
		closeWorkContainer(0);
		
		var selector = $(this).attr('data-filter');
		//var others = $(this).siblings().attr('data-filter');
		
		//var currentIndex = categories.indexOf(selector);
		
		//arraymove(categories, currentIndex, 0);
		//console.log(categories.toString());
		//console.log(categories.indexOf(selector));
						
		$con.isotope({ filter: selector });
		resetWorkContainer();
		return false;
		
	});
	
	function getRemainingNavWidth() {
		
		// get viewport details
		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();
		
		// get total base width of nav elements
		var baseNavWidth = 0;
		
		$('#nav-container ul li.inactive').each(function() {
			baseNavWidth += $(this).outerWidth( true );
		});
		
		// the space remaining is the width to be added to the active nav element
		var remainingNavWidth = (viewportWidth - baseNavWidth);
		
		var paddingValues = parseInt($('#nav-container ul li.active').css('padding-left')) + parseInt($('#nav-container ul li.active').css('padding-right'));		
		
		// now define
		return remainingNavWidth - paddingValues;
		
	}
	
	function showWork(workId) {
		
		scrollAnimate(0);
		$('#container').animate({marginTop:($(window).height()-78)}); // height of nav links (34) x 2 + 10 px margin
		$('#container').animate({opacity:0.3});
		//console.log($('#container').outerWidth(true));
		
		resizeWorkContainer();
		
		$('#show-work-container').fadeIn();
		
		// variable to hold request
		var request;
		
		// abort any pending request
		if (request) {
			request.abort();
		}
	
		// fire off the request to /form.php
		request = $.ajax({
			dataType: 'json',
			url: "ajax.php",
			type: "post",
			data: {id:workId},
			beforeSend: function() {
				$('#work-loading').show();
			},
			success: function() {
				$('#work-loading').hide();
			}
		});
		
	
		// callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			
			//output contents 
			//console.log(response.text[0].title);
			//var text = response.text;
			//console.log(text.title);
			
			$('#show-work-text').append('<h2>' + response.text[0].title + '</h2>');
			$('#show-work-text').append('<p>' + response.text[0].description + '</p>');
			
			if (typeof response.images !== 'undefined' && response.images.length > 0) {
				
				//content has images
				$('#show-work-video').hide();
				$('#show-work-image').show();
						
				$.each(response.images, function(i, val) {
					
					$('#show-work-image').append('<img src="'+val.image+'" width="100%" />');
					//console.log(i + ' ' + val.image);
					
				});
				
			} else if (typeof response.video !== 'undefined' && response.video.length > 0) {
				
				//content has videos			
				$('#show-work-image').hide();		
				$('#show-work-video').show();
				
				$('#show-work-video').append('<video controls="controls" width="100%" />');
					
				$.each(response.video, function(i, val) {
	
					$('#show-work-video video').append('<source src="'+val.video_path+'" type="'+val.video_type+'" />');
	
				});
				
				var flash_video = response.video[0].video_path;
				
				var flash_block = 	'<object type="application/x-shockwave-flash" data="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" width="100%">' +
									'<param name="movie" value="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" />' +
									'<param name="allowFullScreen" value="true" />' +
									'<param name="wmode" value="transparent" />' +
									'<param name="flashVars" value="config={\'playlist\':[{\'url\':\'http://www.davidarcus.co.nz/'+flash_video+'\',\'autoPlay\':false}]}" />' +
									'<p>It looks like you can&rsquo;t play videos on this device, sorry!"</p>' +
									'</object>';
				
				$('#show-work-video video').append(flash_block);
					
			}
			
			// include link to work if it's there
			if (typeof response.links !== 'undefined' && response.links.length > 0) {
				
				var externalLink = response.links[0].the_link;
				$('#show-work-text').append('<a href="'+externalLink+'" class="external-link">View site</a>');

				
			}

			
		});
	
		// callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// log the error to the console
			console.error(
				"The following error occured: "+
				textStatus, errorThrown
			);
		});
	
		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			
			$('#show-work-text').prepend('<div id="close"></div>');
			$('#close').click(function() {
		
				closeWorkContainer(scrollPos);
				
			});
			
		});
		
	}
	
	function resizeWorkContainer() {
		
		var workContainerWidth = $(window).width() - 60;
		var workContainerHeight = $(window).height() - 127;
		
		$('#show-work-container').css({
			width:workContainerWidth,
			height:workContainerHeight
		})
		
		$('#show-work-image').css('height',workContainerHeight);
		
	}
	
	function closeWorkContainer(scrollPos) {
		
		resetWorkContainer();
		$('#show-work-container').fadeOut();
		$('#container').animate({marginTop:0}); 
		$('#container').animate({opacity:1});
		
		scrollAnimate(scrollPos);
		
	}
	
	function resetWorkContainer() {
		
		  $('#show-work-text').html('');
		  $('#show-work-image').html('');
		  $('#show-work-video').html('');
		
	}
	
	function scrollWorkImagesDown(container) {
			  
		  //container.scrollTop(container[0].scrollHeight);
		  container.animate({scrollTop: container[0].scrollHeight+"px"});
			
	}
	
	function scrollWorkImagesUp(container) {
		
		 //container.scrollTop('300px');
		 container.animate({scrollTop: "0px"});
			
	}
	
	function scrollAnimate(scrollPos) {
		
		$('html, body').animate({
			scrollTop: scrollPos
		}, 500);	
		
	}
	
	enquire.register("screen and (min-width: 920px)", {
		match : function() {
			// start things off by giving home the remaining space
			$('#nav-container ul li.active').animate({'width': getRemainingNavWidth()});
			
			// this is the default width of inactive nav list elements
			var defaultNavWidth = 120;
			
			// make new variable as returned value is dynamic
			var navHoverValue = getRemainingNavWidth();
				
			$(window).resize(function() {
					
				$('#nav-container ul li.active').css('width', getRemainingNavWidth());
				navHoverValue = getRemainingNavWidth();
				resizeWorkContainer();
					
			});
			
			// resize clicked nav to fit space
			$('#nav-container ul li').on ({
				click: function() {
					$(this).animate({'width':getRemainingNavWidth()+20}).removeClass('inactive').addClass('active');
					$(this).siblings().animate({'width':defaultNavWidth}).removeClass('active').addClass('inactive');
					$('#container').animate({marginTop:0});
					$('#container').animate({opacity:1});;		
				}
			});
			
			// handle 'peek' effect when hovering over nav items
			$('#nav-container ul li').on({
				mouseenter: function() {
					if ($(this).hasClass('inactive')) {
						$(this).animate({'width':defaultNavWidth+20}, {queue:false});
						$('#nav-container ul li.active').animate({'width':navHoverValue-20}, {queue:false});
						$(this).css('margin',0);
					}
				},
				mouseleave: function() {
					if ($(this).hasClass('inactive')) {
						$(this).animate({'width':defaultNavWidth}, {queue:false});
						$('#nav-container ul li.active').animate({'width':navHoverValue}, {queue:false});
						$(this).css('margin',0);
					}
				}
			});
		},  
		unmatch : function() {
			
			$('#container').isotope( 'remove', $('.logo'));	
			
		}
	});
	
	
		
	// handle hover events on each box - reveal overlay png and make the p block underneath the image absolute so it can have a negative margin and be on top of the image
	$('.box').hover(function(e) {
		
		$(this).find('p').css('position','absolute');
		$(this).find('p').hoverFlow(e.type, {'padding-top':'20px', 'margin-top':'-30px'}, 400);
		$(this).find('.overlay').animate({'opacity':1}, {queue:false}, 400);	
		
	}, function(e) {
				
		$(this).find('p').css('position','relative');
		$(this).find('p').hoverFlow(e.type, {'padding-top':'10px', 'margin-top':'0px'}, 400);
		$(this).find('.overlay').animate({'opacity':0}, {queue:false}, 3000);
		
	});
			
	$('.box').click(function() {
		
		resetWorkContainer();
		
		scrollPos = $(document).scrollTop();
		//console.log(scrollPos);
	
		var workId = $(this).data('id');
		showWork(workId);
		
	});

	// handle scroll effect when user hovers over work
	$('#show-work-image').on({
		mouseenter: function() {
			scrollWorkImagesDown($('#show-work-image'));
		},
		mouseleave: function() {
			scrollWorkImagesUp($('#show-work-image'));
		}
	});
	
	//mobile nav screen
	$("#mobile-nav-button").click(function(){
    	$("#nav-container").slideToggle();
  	});
	
	//mobile logo click for email
	$("#mobile-logo").click(function(){
    	window.location = "mailto:"+link;
  	});	
	
	$('#nav-container ul li').on ({
		click: function() {
			if($(window).width() < 920){		
				$("#nav-container").slideToggle();
			}
		}
	});			
});


