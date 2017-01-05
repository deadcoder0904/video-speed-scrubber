document.addEventListener('DOMContentLoaded',function() {
	const scrubber = document.getElementById('scrubber');
	const text = scrubber.children[0];
	const video = document.querySelector('video');

	function scrubIt(e) {
		const y = e.pageY - this.offsetTop;
		const percent = e.offsetY / this.offsetHeight;
		const min = 0.5;
		const max = 4;
		height = `${Math.round(percent * 100)}%`;
		const playbackRate = percent * (max - min) + min;
		text.style.height = height;
		text.innerHTML = `${playbackRate.toFixed(2)}&times;`;
		video.playbackRate = playbackRate;
	}

	scrubber.addEventListener('mousemove', scrubIt);
});
