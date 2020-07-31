console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Fish',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
];


const container = document.querySelector('.container');
const renderCard = () => {
	// check the recipes collection
	// generate the HTML
		for (let i = 0; i < recipes.length; i++) {
			const myHTML = `
			<div>
				<h1>${recipes[i].title}</h1>
				<div><img src="${recipes[i].picture}"></div>
				<ul>
					<li>${recipes[i].timing}</li>
					<li>${recipes[i].difficulty}</li>
				</ul>
				<button type="button" class="more-button">More info</button>
			</div>
			`;
			console.log(myHTML);
			// put it in the DOM
			container.insertAdjacentHTML('beforeend', myHTML);
		
		}
	};

const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const moreButton = document.querySelectorAll('.more-button');
const handleClick = (event) => {
	if (event.target.matches("button.more-info")) {
		for (let i = 0; i < recipes.length; i++) {
			outerModal.classList.add('open');
			innerModal.innerHTML = `
			<div>
				<h1><p>by</p></h1>
				<im src="">
				<ul>
					<li></li>
					<li></li>
				</ul>
				<ul>
					<li>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
					<li>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
				</ul>
			</div>
			`;
		}
	}

	
};



const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
moreButton.addEventListener('click', handleClick);
