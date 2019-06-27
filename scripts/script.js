const alert = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');

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


/*LINE CHART*/
let trafficData = {
	labels: [
		'',
		'16-22', 
		'23-29', 
		'30-5', 
		'6-12', 
		'13-19', 
		'20-26', 
		'27-3', 
		'4-10', 
		'11-17', 
		'18-24', 
		'25-31'
	],
	datasets: [
		{
			data: [
				0,
				750, 
				1250, 
				1000, 
				1500, 
				2000, 
				1500, 
				1750, 
				1250, 
				1750, 
				2250, 
				1750, 
				2250
			],
			backgroundColor: 'rgba(68, 65, 64, .3)',
			borderWidth: 1
		}
	]
};

let trafficOptions = {
	aspectRatio: 2.5,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	legend: {
		display: false
	}
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});


/*BAR CHART*/
let dailyData = {
	labels: [
		'S', 
		'M', 
		'T', 
		'W', 
		'T', 
		'F', 
		'S'
	],
	datasets: [
		{
			label: '# of Hits',
			data: [
				75, 
				100, 
				175, 
				125, 
				225, 
				200, 
				100
			],
			backgroundColor: 'rgba(68, 65, 64, 1)',
			borderWidth: 1
		}
	]
};

let dailyOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	legend: {
		display: false
	}
};

let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});


/*DOUGHNUT CHART*/
let mobileData = {
	labels: [
		'Phones', 
		'Tablets', 
		'Desktop'
	],
	datasets: [
		{
			label: '# of Users',
			data: [
				500, 
				520, 
				2300
			],
			backgroundColor: [
				'#FFA987',
				'#E54B4B',
				'#444140'
			],
			borderWidth: 0,
			borderColor: '#f7ebe8'
		}
	]
};

let mobileOptions = {
	rotation: (-0.5*Math.PI) - (10/180 * Math.PI),
	legend: {
		position: 'right',
		labels: {
			boxWidth: 20,
			fontStyle: 'bold'
		}
	}
};

let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});

