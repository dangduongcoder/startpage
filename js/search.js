// Implements a simple search bar with custom bangs

function search(i) {
	var q = i.value;
	q = q.replace(/^[ ]/g,'') // Remove leading spaces
	if (i.checkValidity()) { // If query is an URL, go to it.
		window.location=q;
	} else if (q.substr(1, 1) == ' ') { // check if it's a bang (i.e. `y youtubequery` and `a query` are parsed here, but `query` is not)
		switch(q.substr(0, 1)){
			case 'y':
				q = q.substr(2);
				window.location=(
					'https://www.youtube.com/results?search_query=' +
					q.replace(' ', '%20')); // %20 is Space
			break;
			case 'w':
				q = q.substr(2);
				window.location=(
					'https://wikipedia.org/w/index.php?search=' +
					q.replace(' ', '%20'));
			break;
			case 'g':
				q = q.substr(2);
				window.location=(
					'https://www.google.com/search?q=' +
					q.replace(' ', '%20'));
			break;
			case 'l':
				q = q.substr(2);
				window.location=(
					'http://libgen.rs/search.php?req=' +
					q.replace(' ', '%20'));
			break;
			case 'r':
				q = q.substr(2);
				window.location=(
					'https://www.reddit.com/r/' +
					q.replace(' ', ''));
			break;
			default:
				window.location=('http://192.168.1.107:8888/search?q=' +
					q.replace(' ', '%20'));
		}
	} else { // this is were `normal q` will be parsed
		window.location=('https://www.google.com/search?q=' +
			q.replace(' ', '%20'));
	}
}

i = document.getElementById('q');
// Pressing space (in Insert mode) focuses search bar
document.addEventListener('keydown', event => {
	if (event.code == 'Space') {
		i.focus();
	}
});
// Enter accepts the search
if (!!i) {
	i.addEventListener('keydown', event => {
		if (event.code == 'Enter') {
			i.type = 'url';
			search(i);
		}
	});
}
