<?php
/* Last updated with phpFlickr 1.3.2
 *
 * This example file shows you how to call the 100 most recent public
 * photos.  It parses through them and prints out a link to each of them
 * along with the owner's name.
 *
 * Most of the processing time in this file comes from the 100 calls to
 * flickr.people.getInfo.  Enabling caching will help a whole lot with
 * this as there are many people who post multiple photos at once.
 *
 * Obviously, you'll want to replace the "<api key>" with one provided 
 * by Flickr: http://www.flickr.com/services/api/key.gne
 */

require_once("phpFlickr.php");
require_once("config.php");

// set id is my set entitled 'favourites'
$set_id = '72157626952343542';

// Find the NSID of the username inputted via the form
$person = $f->people_findByUsername('david.arcus');

// Get the friendly URL of the user's photos
$photos_url = $f->urls_getUserPhotos($person['id']);

// Get the user's first 36 public photos

// $photos = $f->people_getPublicPhotos($person['id'], NULL, 'original_format', 200);

// get specified set (flickr.photosets.getPhotos)
$photos = $f->photosets_getPhotos($set_id, 'original_format', NULL, 200, NULL, NULL);


// Loop through the photos and output the html
foreach ((array)$photos['photoset']['photo'] as $photo) {
	// this is cheating
	$output .= "<a href='https://www.flickr.com/photos/davidarcus/".$photo['id']."/in/set-".$set_id."'>";
	$output .= "<img border='0' alt='$photo[title]' ".
		"src=" . $f->buildPhotoURL($photo, 'thumbnail') . ">";
	$output .= "</a>";
}
	
?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>David Arcus photos</title>
<meta name="viewport" content="minimal-ui, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
<meta name="author" content="David Arcus">
<meta name="description" content="These are some photos I took">

<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:600' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<link rel="stylesheet" href="css/justifiedGallery.min.css" />

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/jquery.justifiedGallery.min.js"></script>

</head>

<body>

<div id="title-container">
	<a class="home" href="http://www.davidarcus.co.nz"><i class="fa fa-home"></i> <h1 class="left">David Arcus</h1></a>
	<h1 class="right">Pics I took</h1>
</div>

<div id="gallery">

<?php echo $output; ?>

</div>

<script>
	$("#gallery").justifiedGallery({
		'rowHeight':250	,
		'lastRow':'justify'
	});
</script>

</body>
</html>

