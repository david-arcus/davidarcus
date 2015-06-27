<script type="text/javascript">
	
	$("#app5-training-link").click(function () {
		
		$("#app5-induction").fadeOut(400);
															
		//$("#app5-training").css('z-index','12');
		$("#app5-links-container-induction").removeClass('orange');
		$("#app5-links-container-training").removeClass('pale-orange');

		$("#app5-links-container-induction").addClass('pale-orange');
		$("#app5-links-container-training").addClass('orange');
		
		$("#app5-training").fadeIn(400);
				
		
	});

	$("#app5-induction-link").click(function () {
											  
		$("#app5-training").fadeOut(400);
												  
		//$("#app5-induction").css('z-index','12');
		$("#app5-links-container-induction").removeClass('pale-orange');
		$("#app5-links-container-training").removeClass('pale-orange');

		$("#app5-links-container-training").addClass('pale-orange');
		$("#app5-links-container-induction").addClass('orange');
		
		$("#app5-induction").fadeIn(400);
		
	});
	

	$.doTimeout( 400, function(){
	
		$("#app5-quote").show("scale", {}, 300);
		
	});
	
	/*
	$("div[id^=app5-]").css('cursor','pointer');
	$("div[id^=app5-]").click(function() {
									
		$(this).removeClass('orange').addClass('pale-orange');							 
		$(this).siblings('.orange').removeClass('orange').addClass('pale-orange');
		$(this).removeClass('pale-orange');
		$(this).addClass('orange');
		
		$('#app5-induction').fadeOut(400);
		$('#app5-training').fadeOut(400);
		var foo = $(this).children('a').attr('id');
		var bar = foo.split('-');
		
		$('#app5-'+bar[1]).delay(400).fadeIn(400);
		
	});
	*/

</script>

<div class="app-container">
	<div class="in-app-clock palegreen">19:39</div>
	<div class="app-heading-container orange"><h1>Development</h1></div>
	<div class="app-default-padding">
		<div class="app-column-left">		
			<h2>We think the best way to learn is by doing. So as an M&amp;S graduate, you&rsquo;ll be given real responsibility from day one. You&rsquo;ll be working on real projects. And you&rsquo;ll be coming up with new ways of doing things that will make a real difference to our business. </h2>		
			
			<div id="app5-links-container-induction" class="app5-links-container orange">
				<a href="#" id="app5-induction-link">Induction</a>
			</div>
			<div id="app5-links-container-training" class="app5-links-container pale-orange">
				<a href="#" id="app5-training-link">Training</a>
			</div>
			
		</div>
		
		<div id="app5-quote"><img src="images/app5-quote.png" width="290" height="105" /></div>
		
		<div class="app-column-right app-add-vertical-overflow">
		
			<div id="app5-induction">
		
				<div class="pad-right">
					<p style="margin-top:0px;">All our graduates start life at M&amp;S with an induction programme. Depending on your background and experience, this will last between one and two weeks. The induction gives you a basic overview of our business, along with all the information you need about your new role and life at M&amp;S. It includes:</p>
					
					<p><strong class="orange-text">A one-day corporate induction workshop.</strong><br /> This is for M&amp;S graduates from all over the country, so it&rsquo;s a good chance to meet other people in your shoes. Senior people from the business will be there to welcome you and tell you about the direction of M&amp;S.</p>
	 
					<p><strong class="orange-text">An introduction to M&amp;S stores. </strong><br />This involves meeting people in lots of different retail roles, and finding out all about how our shops work. After all, we are a retail business so no matter what role you&rsquo;re in, it&rsquo;s important you understand your part to play in providing a great experience for our customers.</p>
	
				</div>
				
			</div>
			
			<div id="app5-training" style="display:none;">
		
				<div class="pad-right">
					<p style="margin-top:0px;">To make sure you&rsquo;re always developing new skills, you&rsquo;ll also have structured training all the way through the scheme. This will be a real mix, including: </p>
					
					<p><strong class="orange-text">Attachments</strong><br />Where you work closely with one of our established managers to build your operational awareness and experience what it takes to lead a team.</p>
	 
					<p><strong class="orange-text">Workshops</strong><br />Mixtures of classroom learning and hands-on tasks. Some only last for 90 minutes; others could be a couple of days.</p>
					
					<p><strong class="orange-text">Self-directed learning</strong><br />We&rsquo;ll give you a set of workbooks covering the technical parts of your role, which you&rsquo;ll need to fill out in your spare time.</p>
						
					<p><strong class="orange-text">Practical learning</strong><br />This could be leading a project within your team. Or researching new ways of doing things and putting your recommendations into practice.</p>
	
				</div>
				
			</div>
			
		</div>

		
	
	</div>
</div>