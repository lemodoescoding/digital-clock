const hourEl = document.querySelector('span.hour');
const minEl = document.querySelector('span.minute');
const secEl = document.querySelector('span.second');

const dateTitle = document.getElementById('date');

const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(function() {
	const now = new Date(),
		h = now.getHours(),
		m = now.getMinutes(),
		s = now.getSeconds();

	const mon = now.getMonth(),
		date = now.getDate(),
		year = now.getFullYear();

	dateTitle.textContent = `${monthName[mon]} ${date}, ${year}`;

	hourEl.textContent = (h < 10) ? `0${h}` : h;
	minEl.textContent = (m < 10) ? `0${m}` : m;
	secEl.textContent = (s < 10) ? `0${s}` : s;

}, 500);

