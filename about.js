console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

// form.addEventListener('mouseover', )