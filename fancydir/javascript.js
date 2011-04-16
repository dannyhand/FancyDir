$(document).ready(function() {

//Striped Rows
$('table tr:gt(0):odd').addClass('alt');

//append search box to the dom
$('<input type="text" id="filter" title="Search"/>').blur(function (){
	if (this.value == '') { $(this).val(this.title).addClass('hint'); }
}).focus(function (){ 
	if (this.value == this.title) { $(this).val('').removeClass('hint'); } 
}).blur().insertBefore('h1');

//Get the filename elements now rather than on every keyup
filenameeles = $('table tr:gt(1) td:nth-child(2) a');

//Search filter
$('#filter').keyup(function(e) {
	var filterval = $('#filter').val();
	
	//short circuit empty search box	
	if (filterval == '') {
		//force everything to show and reset striped rows
		$('table tr:gt(0)').each(function(i){
			this.style['display'] = 'table-row';
			this.className = ((i % 2) ? 'alt' : '');
		});
	}
	else {
		var filterregex = new RegExp(filterval, "i"), i=0;
		filenameeles.each(function() {
			//parentNode.parentNode shall be the tr
			if (filterregex.test(this.innerHTML)){
				this.parentNode.parentNode.style['display'] = 'table-row';
				//Work out the striped rows as we go
				this.parentNode.parentNode.className = ((++i % 2)? 'alt' : '');
			}
			else {
				this.parentNode.parentNode.style['display'] = 'none';
			};
		});
	};
});

//Turn directory name into breadcrumb links
breadcrumbs = $('h1').text().match(/[^:]*: (.*)\//)[1].split('/');
pathsofar = document.location.protocol + '//';
$.each(breadcrumbs, function(i) {
	pathsofar = pathsofar + this + '/';
	breadcrumbs[i] = ('<a href="' + pathsofar + '">' + decodeURI(this) + '</a>');
});
$('h1').html($('h1').text().replace(/: (.*)\//, ': ' + breadcrumbs.join('/') + '/'));

//Applying thickbox to relevant links
filenameeles.each(function() {
	var imageextensions = /\.(jpe?g|png|gif|bmp)$/i;
	var iframeextensions = /\.(txt|htm|html|shtm|shtml|css|js|php|asp|aspx|vb|vbx|c|cs|cpp|rb|java|h|py|cfm|cfc)$/i;
	
	if (imageextensions.test($(this).attr('href'))) {
		$(this).addClass('thickbox').attr('title', $(this).text());
	}
	else if (iframeextensions.test($(this).attr('href'))) {
		$(this).addClass('thickbox').attr('title', $(this).text());
		$(this).attr('href', $(this).attr('href') + '?KeepThis=true&TB_iframe=true&height=400&width=760');
	};
});

//fix for IE 6not knowing of some CSS selectors  - Yes I know browser sniffing is bad and this shouldn't make a difference to other browsers, but you can't be too careful
if (jQuery.browser.msie && jQuery.browser.version == '6.0') {
	$('table tr td:first-child').addClass('IE_fixleftborder');
	$('table td+td+td+td').addClass('IE_fixrightborder');
	$('table tr:first-child th').addClass('IE_fixtopborder');
	$('table').addClass('IE_fixbottomborder');

	$('td:first-child').addClass('IE_fixcol1');
	$('td+td').addClass('IE_fixcol2');
	$('td+td+td').addClass('IE_fixcol3');
	$('td+td+td+td').addClass('IE_fixcol4');
	$('td+td+td+td+td').addClass('IE_fixcol5');
};

});
