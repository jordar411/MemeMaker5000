let memeForm = document.querySelector('#meme-form');
let memes = document.querySelector('.memes');

let memeCount = 0;

memeForm.addEventListener('submit', function(e) {
	e.preventDefault();
	let newMeme = document.createElement('div');
	newMeme.classList = 'meme';

	//delete the new meme
	let deleteButton = document.createElement('div');
	deleteButton.classList = 'delete';
	deleteButton.innerText = 'DELETE';

	//set the new image URL
	let imgURL = document.querySelector('#meme-image').value;

	newMeme.style.backgroundImage = `url(${imgURL})`;

	//.classList.add("top")
	//top and bottom text on the image
	let ttext = document.createElement('div');
	ttext.classList = 'top';
	let topText = document.querySelector('#top-text').value;
	ttext.innerText = topText;

	let btext = document.createElement('div');
	btext.classList = 'bottom';
	let bottomText = document.getElementById('bottom-text').value;
	btext.innerText = bottomText;

	document.getElementById('temp').style.display = 'none';
	newMeme.appendChild(deleteButton);
	newMeme.appendChild(ttext);
	newMeme.appendChild(btext);
	memes.prepend(newMeme);
	memeCount += 1;
	memeForm.reset();
});

memes.addEventListener('click', function(e) {
	if (e.target.classList.contains('delete')) {
		//remove todo from page
		e.target.parentNode.remove();
		memeCount--;
	}
	if (memeCount === 0) {
		document.getElementById('temp').style.display = 'block';
	}
});

memeForm.addEventListener('click', function(e) {
	if (e.target.id === 'clear') {
		document.querySelectorAll('.meme').forEach((e) => e.remove());
		document.getElementById('temp').style.display = 'block';
	}
});
