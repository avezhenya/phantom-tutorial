/**
* Скрипт откроет файл test.html, найдет элемен с id = container
* выведет его в консоль и сделает скриншот в папку screen
*/
var page = require('webpage').create();
page.open('test.html', function(status) {
	var container = page.evaluate(function() {
		return document.getElementById('container');
	});
	console.log('div#container is ' + container);
	page.render('screen/phantom.png');
	phantom.exit();
});
