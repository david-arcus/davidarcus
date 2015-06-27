<div class="app-container">
	<div class="in-app-clock palegreen">19:39</div>
	<div class="app-heading-container green"><h1>Introduction</h1></div>
	<div class="app-default-padding">
		<div id="app1-column-left">
			<h1>Make our future your home</h1>
			<p>Why start your career with M&amp;S right now? Because right now is when it all begins, that&rsquo;s why.</p>
			<p>Retail&rsquo;s moving faster than ever. What&rsquo;s cutting-edge right now will be old hat in five, three, even a year&rsquo;s time. And it&rsquo;s the graduates who arrive at M&amp;S right now who&rsquo;ll be turning today&rsquo;s trends into tomorrow&rsquo;s reality.</p>
			<p>Whether that&rsquo;s in the way customers shop with us, the products and services we offer, or how we operate as an ethical brand in a changing world. That&rsquo;s the opportunity for people setting out on their career with us. It&rsquo;s exciting stuff.</p>
			<p>So, show us your ambition on one of our graduate programmes today and tomorrow&hellip; well, tomorrow will be whatever you make it.</p>
			<p>Let&rsquo;s go.</p>
		</div>
			
		<script type="text/javascript">
			
			// wait half a second so zoom animation can complete (also stops browser overloading)
			
			$.doTimeout( 300, function(){
									   
					// init swfobject first so the videos can be added to bxslider
									   
					var flashvars = {};
					var params = {};
					var attributes = {};
					swfobject.embedSWF("preview.swf?video=videos/app1-video1.flv&totalWidth=238&totalHeight=354&disableInterface=on", "app1-video1", "238", "354", "9.0.0", "expressInstall.swf", flashvars, params, attributes);
					swfobject.embedSWF("preview.swf?video=videos/app1-video2.flv&totalWidth=238&totalHeight=354&disableInterface=on", "app1-video2", "238", "354", "9.0.0", "expressInstall.swf", flashvars, params, attributes);					   
													   
					// init bxslider 
					
					var slider = $('#app1-slider1').bxSlider({
														
						controls: false,
						onBeforeSlide: function(currentSlide, totalSlides){
							
						  $('.field-name-field-custom .field-item').append('<p class="check">Slide index ' + currentSlide + ' of ' + totalSlides + ' total slides has completed.');
						  
						}
						
					});
				
					$('#app1-meet-sam-and-archie').click(function(){
						$(this).hide();
						$('#app1-meet-amy').show();						 
						slider.goToNextSlide();
						return false;
						
					});
				
					$('#app1-meet-amy').click(function(){
						$(this).hide();
						$('#app1-meet-sam-and-archie').show();				 
						slider.goToPreviousSlide();
						return false;
						
					});
				});	
						
		</script>
			
		<div id="app1-column-right">

			<div id="app1-slider1">
				<div style="margin-top:-1px;">
					<div id="app1-video1">
						<img src="images/app1-video1.jpg" width="238" height="354" />
					</div>
				</div>
				<div style="margin-top:-1px;">
					<div id="app1-video2" style="display:none;">
						<img src="images/app1-video2.jpg" width="238" height="354" />
					</div>
				</div>
			</div>
			
			<div id="app1-nav-container">
				<div id="app1-meet-sam-and-archie"><a href="#">Meet Sam and Archie &raquo;</a></div>
				<div id="app1-meet-amy"><a href="#">&laquo; Meet Amy</a></div>
			</div>
			

		</div>
	</div>
</div>