const alert = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');

alert.innerHTML = 
	`
	<div class="alert-banner">
		<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
		<p class="alert-banner-close">x</p>
	</div>
	`
;

alert.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains('alert-banner-close')) {
		alert.style.display = 'none';
	}
});

let trafficCanvas = {
	labels: [],
	datasets: [],
	backgroundColor: ,
	borderWidth: 
};