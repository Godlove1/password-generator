let password = document.getElementById("generated__pass");
let button = document.getElementById("get__pass");
let year = document.getElementById("year");
//credit year display
let date = new Date();
let yr = date.getFullYear();
year.innerHTML = yr;

//button to execute generation of password
button.onclick = function () {
	let rndmpass = Math.random().toString(36).slice(3) + Math.random().toString(36).toUpperCase().slice(2);
	let rndmpass1 = rndmpass.slice(0, 6);
	let rndmpass2 = rndmpass.slice(6, 9).toUpperCase();
	rndmpass=rndmpass1 + rndmpass2;
	password.innerHTML = rndmpass;
}
//this line calls the click function when the page loads as suggested password
button.click();