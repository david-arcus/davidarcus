<script type="text/javascript">
	
	var application_slider = $('#app11-application-slider').bxSlider({controls: true});	
	//application_slider.goToSlide(2);
	
	$("#app11-buttons li").css('cursor','pointer');
		
	$('#app11-buttons li').click(function(){
		
		var theIndex = $('#app11-buttons li').index(this);
		
		//alert(theIndex);
		
		application_slider.goToSlide(theIndex);
		
		$("#app11-buttons li div").removeClass("sky-blue").addClass("pale-sky-blue");
		$(this).children('div').toggleClass("sky-blue pale-sky-blue");
		return false;										   
	});

	
</script>

<div class="app-container">
	<div class="in-app-clock palegreen">19:41</div>
	<div class="app-heading-container sky-blue"><h1>Application process</h1></div>
	<div class="app-default-padding">
		
		<div id="app11-container">
		
			<h1>If you think you&rsquo;ve got what it takes<br /> to start your future today with M&amp;S,<br />follow these steps to apply.</h1>
			
			<div id="app11-box-container">
				
				<div id="app11-buttons">
					
					<ul>
						<li><div class="app11-box sky-blue app11-box-margin">1</div></li>
						<li><div class="app11-box pale-sky-blue app11-box-margin">2</div></li>
						<li><div class="app11-box pale-sky-blue">3</div></li>
					</ul>

				</div>
				
				<div id="app11-application-slider">
				
					<div>
						<p><strong>Step one: apply online</strong></p>
						<p>Get the ball rolling by completing your <a href="https://static.wcn.co.uk/company/marksandspencer/graduates/GraduateSearchEngine.html">online application</a>.</strong></p>
						<p>The deadline&rsquo;s in December. But we may close some programmes early if we get a big response. First come, first served.</p>
						<p>We&rsquo;ll then be in touch if you&rsquo;re through to the next round.</p>
					</div>
					
					<div>
						<p><strong>Step two: come to an assessment centre</strong></p>
						<p>We&rsquo;ll get to know you better with group exercises, presentations, and an interview.</p> 
						<p>This will be in January, February or March.</p> 
					</div>
					
					<div>
						<p><strong>Step three: get an offer</strong></p> 
						<p>We&rsquo;ll let you know by the end of March if there&rsquo;s a place for you on our graduate scheme.</p>
					</div>
				
				</div>

			
			</div>
		
		</div>

		<div id="app11-quote"></div>
				
	</div>
</div>