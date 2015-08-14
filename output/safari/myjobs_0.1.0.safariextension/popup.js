KangoAPI.onReady(function() {
	$('.link').click(function(event) {
		kango.browser.tabs.create({
			url: $(this).attr('href')
		});
	});
});