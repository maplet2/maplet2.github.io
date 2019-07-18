
/*

Will toggle between the code and text pages

*/
(function() {
	"use strict";

	window.onload = function() {
		document.getElementById("texttoggle").onclick = togglecode;
		document.getElementById("codetoggle").onclick = toggletext;
	};

	function togglecode() {
		var x = document.getElementById("code");
		var y = document.getElementById("text")
		x.style.display = "block";
		y.style.display = "none";
	}

	function toggletext() {
		var x = document.getElementById("code");
		var y = document.getElementById("text")
		x.style.display = "none";
		y.style.display = "block";
	}


})();
