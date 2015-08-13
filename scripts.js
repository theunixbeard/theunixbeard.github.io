if(location.hostname == "hiccup.io"){
	window.location = "https://github.com/weavejester/hiccup"
}

// Google Analytics Outbound link tracking
var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
     function () {
     document.location = url;
     }
   });
}
$('a').click(function(e) {
  var url = $(this).attr('href');
  trackOutboundLink(url);
};
