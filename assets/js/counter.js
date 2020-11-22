var counters = document.querySelectorAll('.counter');

const counterFunction = (counter, maxCount) => {
	let count = parseFloat(counter.innerText)
	
	if (count <= maxCount) {
		counter.innerText = count + 1;
		setTimeout(() => {
			counterFunction(counter, maxCount)
		}, 1);
	}
}

counters.forEach(counter => {
	let target = +counter.getAttribute('data-target');
	counterFunction(counter, target);
});