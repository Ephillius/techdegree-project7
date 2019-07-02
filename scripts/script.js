const alert = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

/*ALERT NOTIFICATION*/
alert.innerHTML = 
	`
	<div class="alert-banner">
		<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
		<p class="alert-banner-mobile">(click to close)</p>
		<p class="alert-banner-desktop"><strong>x</strong></p>
	</div>
	`
;

alert.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains('alert-banner-desktop')) {
		alert.style.display = 'none';
	} else {
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
			gridLines: {
				drawTicks: false
			}
		}],
		xAxes: [{
			gridLines: {
				drawTicks: false
			}
		}]
	},
	legend: {
		display: false
	},
	elements: {
		line: {
			tension: 0
		}
	}
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

/*LINE CHART BUTTONS*/



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
			boxWidth: 15,
			fontStyle: 'bold'
		}
	}
};

let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});


/*MESSAGE*/
send.addEventListener('click', () => {
	if (use.value === '' && message.value === '') {
		alert('Please fill out the user and message fields before submiting');
	} else if (user.value === '') {
		alert('Please fill out the user');
	} else if (message.value === '') {
		alert('Please fill out the message');
	} else {
		alert('Message successfuly sent');
	}
});