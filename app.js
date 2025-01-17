function toogleNav() {
	var nav = document.getElementById("mySidenav");

	if (nav.style.width === "100%") {
		closeNav();
	} else {
		openNav();
	}
}

function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("mySidenav").style.transition = "width 0.1s ease";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}