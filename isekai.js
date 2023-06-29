

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');


const submitMadLibs = (event) => {
	alert("Are you ready to embrace your fate, mortal?");
	event.preventDefault();
	madLibsForm.classList.add('hide');

	const form = new FormData(event.target);
	const userSubmission = Object.fromEntries(form);

	const story = `
	<header id="intro" class="center">
	<h3>Surprise! You're not dead ... anymore!</h3> </header>
	

	<p>You were an ordinary <span class="inserted-text">${userSubmission.job}</span> living in a small town and minding your business. One day, a <span class="inserted-text">${userSubmission.criminal}</span> pops out of nowhere to <span class="inserted-text">${userSubmission.verb1}</span> you! While succumbing to your injuries, a mysterious voice echoes in your mind and recites a series of commands. After regaining consciousness, you realize that you have been reincarnated as a <span class="inserted-text">${userSubmission.creature1}</span> in an unfamiliar world. You have also acquired new-found skills, including <span class="inserted-text">${userSubmission.power}</span> and <span class="inserted-text">${userSubmission.power2}</span>. You happen upon <span class="inserted-text">${userSubmission.name}</span>, a powerful <span class="inserted-text">${userSubmission.creature2}</span>, who has been sealed for the last 5000 years for <span class="inserted-text">${userSubmission.activity}</span>. Feeling sorry for them, you befriend the <span class="inserted-text">${userSubmission.creature2}</span>, promising to help destroy the seal. You two decide to exchange <span class="inserted-text">${userSubmission.items}</span>. Light pierces out of your chest and you use your newfound <span class="inserted-text">${userSubmission.power3}</span> ability to free your new magical friend. This burst of magic attracts the attention of a nearby <span class="inserted-text">${userSubmission.creature3}</span> army who storm the area. You and the <span class="inserted-text">${userSubmission.creature2}</span> battle the army with all your might but are the end of the ropes. Just when the <span class="inserted-text">${userSubmission.creature2}</span> enemy raises their weapon to strike, the god of <span class="inserted-text">${userSubmission.noun}</span> named <span class="inserted-text">${userSubmission.name2}</span> saves you when they <span class="inserted-text">${userSubmission.verb2}</span> the enemy's forces off the face of the planet. At first you think you are saved, but then they demand you befriend them and play <span class="inserted-text">${userSubmission.game}</span> for the rest of your eternity ... oh <em>no</em>. </p>
`;

storySection.innerHTML += story;
storySection.classList.remove('hide');

let resetButton = `
<button id="madlibs-reset" onclick="resetMadLibs()">Reset</button>
`;
storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
	storySection.classList.add('hide');
	storySection.innerHTML = '';
	madLibsForm.reset();
	madLibsForm.classList.remove('hide');
}
