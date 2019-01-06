document.getElementById("global-nav-bar").classList.add("is-merged");
document.getElementById("global-nav-bar").classList.add("is-dark");
document.getElementById("global-nav-bar").classList.add("navbar-large");
document.getElementById("global-nav-bar").classList.add("is-fixed-top");

document.getElementById("global-nav-bar").classList.add("is-smoother");

window.onscroll = function() {
	if(document.body.scrollTop == 0)
	{
		document.getElementById("global-nav-bar").classList.add("is-merged");
		document.getElementById("global-nav-bar").classList.add("navbar-large");
		document.getElementById("global-nav-bar").classList.add("is-dark");
	}
	else
	{	
		document.getElementById("global-nav-bar").classList.remove("is-merged");
		document.getElementById("global-nav-bar").classList.remove("navbar-large");
		document.getElementById("global-nav-bar").classList.remove("is-dark");

	}
};