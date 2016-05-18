$('#newQuote').on('click', function (e){
		e.preventDefault();
		$.ajax({
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
			success: function(data) {
				var post = data.shift();
				$('#quote').html('"' + post.content);
				$('#author').text(post.title);
				var $quote = $('#quote').text();
				var $author = $('#author').text();
				var tweetQuote = 'https://twitter.com/intent/tweet?text=' + $quote + ' Author : ' + $author;
				var $tweet = $('#tweet').attr('href', tweetQuote);
				},
			cache: false,
			error: function(){
				$('#author').append('<p>Something went wrong, try again later.</p>');
			}
		});
});


