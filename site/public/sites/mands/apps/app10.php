<div id="app10-cant-make-it">
  <p>Can&lsquo;t make a campus event? No worries. You can still get the lowdown from our recruitment team.</p>
  <p>Just come along to our online Q&amp;A session and ask about anything from the qualifications you need and the application process to what you can expect when you start and your ongoing development.</p>
  <p>To get involved, you&lsquo;ll first need to <a href="http://marksandspencer.totaljobslive.com/">register here</a>.Then  <a href="http://marksandspencer.totaljobslive.com/">head here</a> on 14 November 2012 between 11:00-12:00 or 14:00-15:00 when we&lsquo;ll answer your and other graduates&lsquo; questions.</p>
  <p>See you there.</p>
  <div id="app10-close-cant-make-it"></div>
</div>
<script type="text/javascript">
	
	var dates = new Array();
	var selectedUniversity;
	
	$('tr.november').hide();
		
	dates['aston'] = [10, 24];
	dates['bath'] = [31];
	dates['birmingham'] = [17];
	dates['bournemouth'] = [22, 23];
	dates['christchurch'] = [24];
	dates['cardiff'] = [16];
	dates['kingston'] = [17];
	dates['lancaster'] = [7];
	dates['leeds'] = [15];
	dates['london'] = [16];
	dates['fashion'] = [20];
	dates['loughborough'] = [23];
	dates['manchester'] = [18, 24];
	dates['manchester_met'] = [31];
	dates['newcastle'] = [22, 29];
	dates['oxford'] = [3];
	dates['oxford_brookes'] = [29];
	dates['reading'] = [1];
	dates['strathclyde'] = [17];
	dates['surrey'] = [11];
	dates['east_anglia'] = [24];
	dates['westminster'] = [17];
	
	function switchMonth(month) {		
		
		$("td#app10-calendar-heading").text(month);
		
	}
	
	$("#app10-next-month").click(function(){
		
		$(this).hide();
		$('tr.october').hide();
		$('tr.november').show();
		$("#app10-prev-month").show();
		switchMonth('November 2012');
		$('#app10-calendar').find('td').removeClass('active');
		$('#app10-calendar').find('td:eq(44)').addClass('active');
		
	})
	
	$("#app10-prev-month").click(function(){
		
		$(this).hide();
		$('tr.october').show();
		$('tr.november').hide();
		$("#app10-next-month").show();
		switchMonth('October 2012');
		$('#app10-calendar').find('td').removeClass('active');
		$('#app10-calendar').find('td:eq(11)').addClass('active');
		$('#app10-calendar').find('td:eq(25)').addClass('active');
		
	})
		
	$("select#app10-select").change(function(){
		
		$("#app10-next-month").hide();
		$("#app10-prev-month").hide();
		
		switchMonth('October 2012');

		selectedUniversity = $(this).val();
		
		//change the calendar to november for universities that have a date in november		
		if (selectedUniversity == 'lancaster' ||
			selectedUniversity == 'fashion' ||
			selectedUniversity == 'oxford' ||
			selectedUniversity == 'reading') {
				
			switchMonth('November 2012');
			
		}
		
		//aston university is a special case as it's the only university with dates in both months
		if (selectedUniversity == 'aston') {
			$("#app10-next-month").show();
			
		}
	 	
		$('#app10-default-heading').fadeOut(500, function() {
			$('#app10-text-description').fadeIn(500);
		});
						
		$('#app10-calendar').find('td').removeClass('active');
		
		$('#app10-text-description').children().hide();
		
		$('#'+selectedUniversity).show();
		
		//dates['aston'] = bob;
		
		var universityDateArray = dates[selectedUniversity];
		
		for(i=0; i < universityDateArray.length; i++) {
			
			var universityDate = universityDateArray[i];
			universityDate--;

			$('#app10-calendar').find('td:eq('+universityDate+')').addClass('active');
			
		}
			
		//process($(this).children(":selected").html());
	});
	//Can't make it link
	$('#cant-make-it').click(function() {
			
		$('#app10-cant-make-it').fadeIn(100);

	});
	
	$('#app10-close-cant-make-it').css('cursor', 'pointer');
	
	$('#app10-close-cant-make-it').click(function() {
		
		$('#app10-cant-make-it').fadeOut(300);

	});
	
</script>

<div class="app-container">
	<div class="in-app-clock palegreen">19:41</div>
	<div class="app-heading-container blue"><h1>Calendar</h1></div>
	<div class="app-default-padding">
		<div class="app-column-left">
			
			<div id="app10-default-heading">
			
				<h2>We&rsquo;ll soon be coming to a campus near you. So if you want to find out more about what M&amp;S has to offer &ndash; and you fancy having a go on our cool augmented reality stand &ndash; pop by and say hello.</h2>
		 
				<h2 class="second">Choose a location to see when and where we&rsquo;ll be around.</h2>
        
        <h2 class="second"><a href="#" id="cant-make-it">I can&lsquo;t make a campus event. Tell me about the online Q&amp;A.</a></h2>
				
			</div>
			
			<div id="app10-text-description">
				
				<div id="aston">
					
					<h2>Aston University</h2>
 
					<p>Business &amp; Management Fair, Lakeside Conference Centre<br />
					10 October 2012, 11.00 -15.00</p>
					 
					<p>National Retail Graduate Careers Fair, Lakeside Conference Centre<br />
					24 October 2012, 10.30 -15.30</p>
					 
					<p>Placement Event, Lakeside Conference Centre<br />
					7 November 2012, 11.00 -15.00</p>
					
				</div>
				
				<div id="bath">
					
					<h2>Bath Spa University</h2>
					
					<p>Food and Nutrition talk, Newton Park Campus<br />
31 October 2012, 11.30-12.30</p>

					
				</div>
				
				<div id="birmingham">
					<h2>University of Birmingham</h2>

					<p>Autumn Fair, The Great Hall<br />
17 October 2012, 11.00-15.30</p>

					
				</div>
				
				<div id="bournemouth">
					
					<h2>Bournemouth University</h2>

					<p>Bournemouth Placements and Careers Fair, Sports Hall, Talbot Campus<br />
					22 and 23 October, 11.00-15.00</p>

				</div>
				
				<div id="christchurch">
					
					<h2>Canterbury Christ Church University</h2>

					<p>Canterbury Christ Church University Job Fair, Augustine House, Canterbury<br />
					24 October 2012, 12.00-15.00</p>

				</div>
				
				<div id="cardiff">
					<h2>Cardiff University</h2>

					<p>Cardiff University Autumn Careers Fair, <br />City Hall, Cardiff<br />
					16 October 2012, 11.00-15.00</p>

					
				</div>
				
				<div id="kingston">
					
					<h2>Kingston University</h2>

					<p>Retail Careers Uncovered, Kingston Hill<br />
					17 October 2012, 16.30-19.00</p>


				</div>
				
				<div id="lancaster">
					<h2>Lancaster University</h2>
 
					<p>Career Opportunities Fair, <br />Lancaster University Campus<br />
					7 November 2012, 11.00-15.30</p>

					
				</div>
				
				<div id="leeds">
					<h2>University of Leeds</h2>

					<p>Autumn Graduate Jobs and Internships Fair, The Edge<br />
					15 October 2012, 11.00-15.00</p>

					
				</div>
				
				<div id="london">
					
					<h2>University of London</h2>
 
					<p>The London Graduate Fair (Retail Zone), Business Centre N1 0QH<br />
					16 October 2012, 12.00-18.00</p>

				</div>
				
				<div id="fashion">
					<h2>London College of Fashion</h2>
 
					<p>London College of Fashion Fair, RHS Space at LCF, W1G 0BJ<br />
					20 November 2012, 11.00-16.00</p>

				</div>
				
				<div id="loughborough">
					<h2>Loughborough University</h2>
 
					<p>Placement Careers Fair, <br />Loughborough University<br />
					23 October 2012, 11.00-16.00</p>

					
				</div>
				
				<div id="manchester">
					<h2>University of Manchester </h2>
 
					<p>The Finance, Business &amp; Management Fair, Manchester Central<br />
					18 October 2012, 10.30-16.00</p>

					<p>Made in Manchester Careers Event, <br />Sackville Street Building<br />
					24 October 2012, 11.30-16.00</p>

					
				</div>
				
				<div id="manchester_met">
					<h2>Manchester Metropolitan University</h2>

					<p>Placement Fair and Career Development Day, Hollings Faculty, MMU<br />
					31 October 2012, 11.00-14.00</p>

					
				</div>
				
				<div id="newcastle">
					
					<h2>Newcastle University</h2>

					<p>Newcastle JobFest, Newcastle United Football Club<br />
					22 October 2012, 10.30-15.00</p>
 
					<p>Business Placement Fair, 8th Floor, Newcastle University Business School<br />
					29 October, 12.00-15.00</p>

				</div>
				
				<div id="oxford">
					
					<h2>University of Oxford</h2>
 
					<p>General Careers Fair, Examination Schools, Oxford<br />
					3 November 2012, 11.00-15.00</p>

				</div>
				
				<div id="oxford_brookes">
					<h2>Oxford Brookes University</h2>
 
					<p>Mini Retail Fair, Wheatley Campus<br />
					29 October 2012, 10.30-15.30</p>

					
				</div>
				
				<div id="reading">
					<h2>University of Reading</h2>

					<p>Careers &amp; Placement Fair: Careers, Placement and Exhibitors Centre<br />
					1 November 2012, 11.00-16.00</p>

					
				</div>
				
				<div id="strathclyde">
					<h2>University of Strathclyde</h2>
 
					<p>Scottish Graduate Fair, Scottish Exhibition and Conference Centre, Glasgow<br />
					17 October 2012, 11.00-16.00</p>

					
				</div>
				
				<div id="surrey">
					
					<h2>University of Surrey</h2>

					<p>Autumn Careers Fair, University Campus<br />
					11 October 2012, 15.00-18.30</p>

				</div>
				
				<div id="east_anglia">
					
					<h2>University of East Anglia</h2>

					<p>Autumn Careers Fair, UEA Congregation Hall<br />
					24 October 2012, 12.30-15.00</p>

				</div>
				
				<div id="westminster">
					
					<h2>University of Westminster</h2>

					<p>Annual Careers Fair, Marylebone Campus<br />
					17 October 2012, 12.00-16.00</p>

				</div>
				
				<div id="select">
					<h2>We&rsquo;ll soon be coming to a campus near you. So if you want to find out more about what M&amp;S has to offer &ndash; and you fancy having a go on our cool augmented reality stand &ndash; pop by and say hello.</h2>
		 
					<h2 class="second">Choose a location to see when and where we&rsquo;ll be around.</h2>
				</div>
				
			</div>
			
		</div>
		
		<div class="app-column-right">
			
			<div id="app10-prev-month"><a href="#">&laquo;</a></div>
			<div id="app10-next-month"><a href="#">&raquo;</a></div>
		
			<table border="0" cellpadding="0" cellspacing="0" id="app10-calendar-heading-container">				
				<tr>
					<td id="app10-calendar-heading" colspan="7">October 2012</td>
				</tr>
				<tr>
					<td class="app10-calendar-days">Mon</td>
					<td class="app10-calendar-days">Tue</td>
					<td class="app10-calendar-days">Wed</td>
					<td class="app10-calendar-days">Thu</td>
					<td class="app10-calendar-days">Fri</td>
					<td class="app10-calendar-days">Sat</td>
					<td class="app10-calendar-days">Sun</td>
				</tr>
			</table>
			<table id="app10-calendar" border="0" cellpadding="0" cellspacing="0">	
				<tr class='october'>
					<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
				</tr>
				<tr class='october'>
					<td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
				</tr>
				<tr class='october'>
					<td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
				</tr>
				<tr class='october'>
					<td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
				</tr>
				<tr class='october'>
					<td>29</td><td>30</td><td>31</td><td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td>
				</tr>
				<tr class='november'>
					<td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td><td>1</td><td>2</td><td>3</td><td>4</td>
				</tr>
				<tr class='november'>	
					<td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
				</tr>
				<tr class='november'>
					<td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
				</tr>
				<tr class='november'>
					<td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>
				</tr>
				<tr class='november'>
					<td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td class="next-month">&nbsp;</td><td class="next-month">&nbsp;</td>
				</tr>
			</table>
			
			<div id="app10-select-container">
			
				<select id="app10-select">
					<option value="select">Select a university&hellip;</option>
					<option value="aston">Aston University</option>
					<option value="bath">Bath Spa University</option>
					<option value="birmingham">University of Birmingham</option>
					<option value="bournemouth">Bournemouth University</option>
					<option value="christchurch">Canterbury Christ Church University</option>
					<option value="cardiff">Cardiff University</option>
					<option value="east_anglia">University of East Anglia</option>
					<option value="kingston">Kingston University</option>
					<option value="lancaster">Lancaster University</option>
					<option value="leeds">University of Leeds </option>
					<option value="london">University of London</option>
					<option value="fashion">London College of Fashion</option>
					<option value="loughborough">Loughborough University</option>
					<option value="manchester">University of Manchester </option>
					<option value="manchester_met">Manchester Metropolitan University</option>
					<option value="newcastle">Newcastle University</option>
					<option value="oxford">University of Oxford</option>
					<option value="oxford_brookes">Oxford Brookes University</option>
					<option value="reading">University of Reading</option>
					<option value="strathclyde">University of Strathclyde</option>
					<option value="surrey">University of Surrey</option>
					<option value="westminster">University of Westminster</option>
				</select>
			
			</div>
						
		</div>
	</div>
</div>