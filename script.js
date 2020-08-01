console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv7lZqNuZsM7rnmvPKin_EX06Ee-P-7rzivA&usqp=CAU',
		author: 'Noellah',
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
		title: 'Besisika',
		picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3HKoG_6HDe3QeY2q3w6Z7pizvaxD6m2vZdA&usqp=CAU',
		author: 'Clopedia',
		difficulty: 'Medium',
		timing: '45',
		ingredients: ['fish', 'salt', 'water', 'tomato', 'onion', 'oil'],
		steps: [
			'Prepare the fish',
			'Wash and put in a pot with some salt',
			'Put the pot on fire',
			'Add sauce, oil, tomato, onion and other things like pepper.',
		],
		id: 1596168522409,
	},
	{
		title: 'Chicken',
		picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5w4K7M0vjhyLBG9V6Iktnd3GB1IhR627ueQ&usqp=CAU',
		author: 'Miary',
		difficulty: 'Difficult',
		timing: '60',
		ingredients: ['chicken', 'salt', 'water', 'oil', 'onion'],
		steps: [
			'Kill the chicken and prepare it',
			'Wash it and put it in a pot and add salt',
			'Lit fire and put the pot on it',
			'Wait until it almost cook and add the onion and oil',
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
					<li>Timing: ${recipes[i].timing}min</li>
					<li>Difficulty: ${recipes[i].difficulty}</li>
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


const openModal = (recipe) => {
		for (let i = 0; i < recipes.length; i++) {
			innerModal.innerHTML = `
			<div>
				<h1>${recipes[i].title}<p>by ${recipes[i].author}</p></h1>
				<im src="${recipes[i].picture}">
				<ul>
					<li>Difficulty: ${recipes[i].difficulty}</li>
					<li>Timing: ${recipes[i].timing}</li>
				</ul>
				<ul class="navigation">
					<li>Ingredients:
						<ul>
							<li>${recipes[i].ingredients[0]}</li>
							<li>${recipes[i].ingredients[1]}</li>
							<li>${recipes[i].ingredients[2]}</li>
						</ul>
					</li>
					<li>Steps:
						<ul>
							<li>${recipes[i].steps[0]}</li>
							<li>${recipes[i].steps[1]}</li>
							<li>${recipes[i].steps[2]}</li>
							<li>${recipes[i].steps[3]}</li>
						</ul>
					</li>
				</ul>
			</div>
			`;
		}
		outerModal.classList.add('open');

};

const handleClick = (e) => {
	if (e.target.matches('button.more-button')) {
		const parent = e.target.closest('div');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
	}
};





const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleClick);
