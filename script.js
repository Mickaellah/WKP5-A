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


// Grab all the elements that might be useful for this project.
const container = document.querySelector('.container');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const moreButton = document.querySelectorAll('.more-button');
const generateButton = document.querySelector('button.generate');


// A function which contains the HTML for each card and includes a for loop to loop through the objects.

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


// A function for opening a modal to show each one of the card's information and contains all the HTML for that modal.

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


// A function for handling the click in the more info button to show the modal.

const handleClick = (e) => {
	if (e.target.matches('button.more-button')) {
		const parentElement = e.target.closest('div.parent-element');
		const id = Number(parentElement.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
	}
};


// A function that contains the code for closing the modal which remove the open class in the outer modal.
const closeModal = (e) => {
	outerModal.classList.remove('open');
};


// Event listeners to handle all clicks in the window and also in Escape key.
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



// Code for taking back the form from the onja-cookbook projects.

const addButton = document.querySelector('.add_button');

const handleAddBttn = (event) => {
	innerModal.innerHTML = `
	<form>
		<fieldset>
			<label for="recipe-name">What's the recipe name?</label>
			<input type="text" id="recipe-name" name="title">
		</fieldset>

		<fieldset>
			<label for="picture">Picture of the result (URL)</label>
			<input type="url" id="picture" name="picture">
		</fieldset>

		<fieldset>
			<label for="cook-name">Who is the cook?</label>
			<input type="text" id="cook-name" name="author">
		</fieldset>

		<fieldset>
			<label for="difficulty">What's the difficulty?</label>
			<select id="difficulty" name="difficulty">
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="difficult">Difficult</option>
			</select>
		</fieldset>

		<fieldset>
			<label for="time">How much time does it take?</label>
			<select id="time" name="timing">
				<option value="15">Around 15min</option>
				<option value="20">More than 15min</option>
				<option value="30">About 30min</option>
				<option value="45">Maybe 45min</option>
				<option value="60">An hour or more</option>
			</select>
		</fieldset>

		<fieldset>
			<label for="ingredients">The ingredients list.</label>
			<ul id="ingredientsList">
				<li>
					<input type="text" id="ingredients" name="ingredients" value="ingredient1">
				</li>
			</ul>
			<div class="ingredients-button-container">
				<button type="button" class="add-ingredients-button">Add a new ingredient to the list</button>
			</div>
		</fieldset>

		<fieldset>
			<label for="steps">The steps to make it.</label>
			<ul id="stepsList">
				<li>
					<input type="text" id="steps" name="steps" value="step1">
				</li>
			</ul>
			<div class="step-button-container">
				<button type="button" class="add-step-button">Add a new step to the list</button>
			</div>
		</fieldset>

		<div>
			<button type="submit" class="submitbttn">Submit</button>
		</div>

	</form>
	`;
	outerModal.classList.add('open');
};

// An event listen to add the form in a modal.
addButton.addEventListener('click', handleAddBttn);


// A function for handling the submit button of the form.
const handleSubmit = (event) => {
	event.preventDefault();
	if (event.target.matches('form')) {
		const form = event.target;
		const title = form.title.value;
		const image = form.picture.value;
		const cook = form.author.value;
		const struggle = form.difficulty.value;
		const period = form.timing.value;
		const ingredients = form.ingredients.value;
		const steps = form.steps.value;

		const newCard = `
		<div class="parent-element" data-id="${recipes.id}">
			<h1>${title}</h1>
			<div><img src="${image}"></div>
			<ul>
				<li>Timing: ${period}min</li>
				<li>Difficulty: ${struggle}</li>
			</ul>
			<button type="button" class="more-button">More info</button>
		</div>
		`;

		container.innerHTML += newCard;
		outerModal.classList.remove('open');
		form.reset();
	}
}
window.addEventListener('submit', handleSubmit);

// An event listener for handling the add more ingredients button.

const handleAddIngrBttn = (event) => {
	if (event.target.matches('button.add-ingredients-button')) {
		const newIngredient = event.target;
		const newIngr = `
		<li>
			<input id="ingredient" type="text" id="ingredients" name="ingredients">
		</li>
		`;

		newIngredient.insertAdjacentHTML('beforebegin', newIngr);
	}
};

window.addEventListener('click', handleAddIngrBttn);


// An event listener for handling the add more steps button.
const handleAddStpBttn = (event) => {
	if (event.target.matches('button.add-step-button')) {
		const newSteps = event.target;
		const newStp = `
		<li>
			<input type="text" id="steps" name="steps"><br>
		</li>
		`;

		newSteps.insertAdjacentHTML('beforebegin', newStp);
	}
};

window.addEventListener('click', handleAddStpBttn);