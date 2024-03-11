
function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
	let date = new Date();
	date.setTime(date.getTime() + daysToExpire*24 * 60 * 60 * 1000);
	document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toLocaleTimeString() + 'path=' + path + 'domain=' + domain;
	console.log('setCookie: ' + cookieValue);
}

function getCookieValue(cookieName) {
	let cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
	return cookieValue ? cookieValue.pop() : '';
}

document.querySelector('.button').onclick = function () {
	console.log("getCookieValue: " + getCookieValue('Foo'));
	console.log("getCookieValue: " + getCookieValue('Goo'));
}

function deleteCookie() {
	document.cookie = "Foo=''; max-age=0; expires=0";
	document.cookie = "Goo=''; max-age=0; expires=0";
	console.log("Cookies deleted");
}