var counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	var updateCount = () => {
		var target = +counter.getAttribute('data-target');
		var count = +counter.innerText;

			if (count < target) {
				counter.innerText = count + 1;
				setInterval(updateCount,300);
			} else {
				counter.innerText = target;
				}
	};
updateCount();
});