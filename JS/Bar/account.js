document.addEventListener("DOMContentLoaded", function () {
	function toggleEdit() {
		var displayElements = document.querySelectorAll(".display");
		var inputElements = document.querySelectorAll(".input");

		displayElements.forEach(function (element) {
			element.style.display =
				element.style.display === "none" ? "block" : "none";
		});

		inputElements.forEach(function (element) {
			element.style.display =
				element.style.display === "none" ? "block" : "none";
		});
	}
	document.getElementById("EditFinancialButton").onclick = function () {
		window.location.href = "barfinance.html"; // Change 'target-page.html' to your actual file path
	};
});
