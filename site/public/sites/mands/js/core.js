function showTime() {

	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	var time = hours+':'+minutes;
	
	return time;
	
}

$(document).ready( function () {
	
	$('#lock-screen-time').text(showTime());
	
	// preload home page images {
		
	var images = [
		'images/app1.png',
		'images/app2.png',
		'images/app3.png',
		'images/app4.png',
		'images/app5.png',
		'images/app6.png',
		'images/app7.png',
		'images/app8.png',
		'images/app9.png',
		'images/app10.png',
		'images/app11.png',
		'images/app12.png'
	];
	
	$(images).each(function() {
		var image = $('<img />').attr('src', this);
	});
	
	// chech if we're using a touchscreen device and remove the slider effect if so
	if (Modernizr.touch){
		
		$("#slider-container").remove();  // bind to touchstart, touchmove, etc and watch `event.streamId`
		$("#get-started-mobile").show();
		
	} 	
							 
	// instantiate slider object ( landing page)
	var start_slider = new Slider("start_slider",{
		message: "slide to unlock potential",
		handler: function() {
						
			$("#start_slider").fadeOut(200)
			$("#lock-screen").fadeOut(200, function() {
				loadHomePage()
			});
		}
	})
	
	start_slider.init();
	
	// display normal link for mobile devices (TODO: make slider work on these devices)
	
	$("#get-started-mobile").click(function () {
		
		$("#lock-screen").fadeOut(200);
		// after link fades out, run loadHomePage function
		$("#get-started-mobile").fadeOut(200, function() {
												
			loadHomePage();
			$('.in-app-clock').text(showTime());
			
		});
		
	})
	
	// specify the number of apps on screen
	var numberOfApps = 12;
	
	// display preloader animantion 
	function showPreloader() {
		$("#preloader").show();
	}
	
	// hide preloader animation after load
	function hidePreloader() {
		$("#preloader").fadeOut(500);
	}
	
	
	// this loads the home page for the first time
	
	function loadHomePage() {
				
		showPreloader();
		
		$("#get-started-mobile").remove();
		
		
		//$("#outer-container").append("<div id='loading'><h1>Loading...</h1></div>");
		
		// hide the target div, then append the contents of home.php, then run loadApplication 
		$("#target").hide().load('apps/home.php',function() {
			
			
			$('.in-app-clock').text(showTime());
			//$("#loading").remove();
			
			//$("#target").show();
			
			hidePreloader();
			
			$(this).fadeIn(200, function() { 
										 
				loadApplication();
			});
			
			$("#app-elements").find("[id^=app]").hide().show("scale", {}, 300);
				
		});
		
	}
	
	// this loads the home page when user clicks close from an open app
	
	function loadHomePageFromLoadedApp() {
		
		showPreloader();	
		
		$("#target").fadeOut(200, function() {
			
			
			$(".app-container").remove();
			$("#close-app").remove();
			
			$("#target").load('apps/home.php',function() { 
			
				$('.in-app-clock').text(showTime());

				$("#target").fadeIn(200, function() {
					
					loadApplication();
					hidePreloader();

				});
				
				$("#app-elements").find("[id^=app]").hide().show("scale", {}, 300);
				
			})
													
		});
		
	}
									 
	function closeApp() {	
								 
	   $(".close").click(function () {
								   
				//alert('you clicked me');
			$(".close").fadeOut(200, function() {
				
				loadHomePageFromLoadedApp();


			});
				
		})
			   
	}
	
	function loadApplication() {
		
		
		$(".app-label").hide();
		
		$('#target').children().each(function(){
					
			$(this).css('cursor', 'pointer');
		
			$(this).click(function (e) {
				
				// allow for various browser quirks on getting event values
				var targ;
				if (!e) var e = window.event;
				if (e.target) targ = e.target;
				else if (e.srcElement) targ = e.srcElement;
				if (targ.nodeType == 3) // defeat Safari bug
					targ = targ.parentNode;
					
				
				// this is the money
				var clickedApp = targ.id;
				
				//var showEvent = getAppId(this);
				//alert(showEvent.id);			
				
				var i = 1;
				$("#app-elements").find("[id^=app]").hide("scale", {}, 300, function() {
					
					showPreloader();
						
					i++;
					if ( i == numberOfApps ) {
						
																								
						$("#app-elements").show().fadeOut(100, function() {
																			
							$("#target").hide().load('apps/'+clickedApp+'.php',{noncache: new Date().getTime()}).show("scale",{}, 300, function() {
																											   
								hidePreloader();								
								
								$("#container").append("<div id='close-app'><a href='#' class='close'><img src='images/back-btn.png' width='27' height'27' /></a></div>");

								closeApp();
								
								$('.in-app-clock').text(showTime());

								
							});
																	
						})													
					}
								
				})				
			})					
				
		});
		
		$.doTimeout( 300, function() {
			$(".app-label").fadeIn(400); 
		});
		
		
	}
	
});