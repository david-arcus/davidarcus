<script type="text/javascript">


	var videoTitle;
	var videoWidth;
	var videoHeight;

	function loadAppVideoPlayer(videoTitle, videoWidth, videoHeight) { 

		var flashvars = {};
		var params = {};
		var attributes = {};
		swfobject.embedSWF("preview.swf?video=videos/"+videoTitle+".f4v&totalWidth="+videoWidth+"&totalHeight="+videoHeight+"&disableInterface=on", "app6-video", ""+videoWidth+"", ""+videoHeight+"", "9.0.0", "expressInstall.swf", flashvars, params, attributes);
		
	}
	
	$("a[id^=app6-video]").click(function () {
										   
	 	videoTitle = $(this).attr('id');
		videoWidth = 476;
		videoHeight = 268;
		//$("#app6-video-background").show();
		$("#app6-video-background").fadeTo('500', 0.70, function() {
			
		$("#app6-video-container").show();
		$("#app6-video-container").append('<div id="app6-video"></div>');									   
		
		$.doTimeout( 300, function(){
			//alert('hello');
			loadAppVideoPlayer(videoTitle, videoWidth, videoHeight);
		});

	});
	
	$("#app6-video-background").click(function () {
			
		$("#app6-video-container").hide();
		$("#app6-video").remove();
		$("#app6-video-background").fadeTo('500', 0, function() {
			$("#app6-video-background").hide();
			$("#app6-video-background").unbind('click');
		});

	});
	
});

  
</script>

<div class="app-container">
	<div class="in-app-clock palegreen">19:40</div>
	<div class="app-heading-container blue"><h1>Meet our people</h1></div>
	<div class="app-default-padding app6-add-padding">
		<div class="app-column-left">
			<h2>There&rsquo;s no better way to find out what graduate life at M&amp;S is really like than by hearing what those on the scheme have to say about it. So, we asked four of our people to share their experiences so far.</h2>
 
		</div>
		<div class="app-column-right">
            <p style="margin-top:0px;">Our graduates today</p>
            <div class="app6-video-link pad-right margin-top"><a id="app6-video1" href="#"><img src="images/app6-video1.jpg" width="126" height="84" /></a></div>
            <div class="app6-video-link pad-bottom margin-top"><a id="app6-video2" href="#"><img src="images/app6-video2.jpg" width="126" height="84" /></a></div>
            <div class="app6-video-link pad-right pad-bottom"><a id="app6-video3" href="#"><img src="images/app6-video3.jpg" width="126" height="84" /></a></div>
            <div class="app6-video-link pad-bottom"><a id="app6-video4" href="#"><img src="images/app6-video4.jpg" width="126" height="84" /></a></div>
            
		</div>
	</div>
	

	<div id="app6-video-background"></div>
	<div id="app6-video-container"></div>
	
</div>
