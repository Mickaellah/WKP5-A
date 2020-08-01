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
		id: 1596168522408,
	},
];


const container = document.querySelector('.container');
const renderCard = () => {
	// check the recipes collection
	// generate the HTML
		for (let i = 0; i < recipes.length; i++) {
			const myHTML = `
			<div class="parent-element" data-id="${recipes[i].id}">
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
	innerModal.innerHTML = `
	<div>
		<h1>${recipe.title} by ${recipe.author}</h1>
		<img src="${recipe.picture}">
		<ul>
			<li><b>Difficulty:</b> ${recipe.difficulty}</li>
			<li><b>Timing:</b> ${recipe.timing}</li>
		</ul>
		<div class="navigation-container">
			<div>
				<span><b>Ingredients:</b> </span>
				<ul>
					<li>${recipe.ingredients}</li>
				</ul>
			</div>
			<div>
				<small><b>Steps:</b> </small>
				<ul>
					<li>${recipe.steps}</li>
				</ul>
			</div>
			
		</div>
	</div>
	`;
	outerModal.classList.add('open');

};

const handleClick = (e) => {
	if (e.target.matches('button.more-button')) {
		const parent = e.target.closest('div.parent-element');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
	}
};

const closeModal = (e) => {
	outerModal.classList.remove('open');
};



const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleClick);

outerModal.addEventListener('click', (e) => {
	const isOutside = !e.target.closest('.inner-modal');
    if (isOutside) {
		closeModal();

	}
});

window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
})


