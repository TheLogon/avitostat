// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

if (window.innerWidth <= 768) {
	document.getElementById("about-img-1").src = "../img/about-mobile-1.png"
	document.getElementById("about-img-2").src = "../img/about-mobile-2.png"
	document.getElementById("about-img-3").src = "../img/about-mobile-3.png"
}

// select
if (document.querySelector(".select")) {
	let select = function () {
		let selectHeader = document.querySelectorAll(".select__header")
		let selectItem = document.querySelectorAll(".select__item")

		selectHeader.forEach(item => {
			item.addEventListener("click", selectToggle)
		})

		selectItem.forEach(item => {
			item.addEventListener("click", selectChoose)
		})

		function selectToggle() {
			this.parentElement.classList.toggle("is-active")
		}

		function selectChoose() {
			let text = this.innerText,
				select = this.closest(".select"),
				currentText = select.querySelector(".select__current")
			currentText.innerText = text
			select.classList.remove("is-active")
		}
	}

	select()
}

// Modal
document.addEventListener("DOMContentLoaded", function () {
	var modalButtons = document.querySelectorAll(".js-open-modal"),
		overlay = document.querySelector("#overlay-modal"),
		closeButtons = document.querySelectorAll(".js-modal-close")

	/* открытие окон. */
	modalButtons.forEach(function (item) {
		item.addEventListener("click", function (e) {
			e.preventDefault()

			var modalId = this.getAttribute("data-modal"),
				modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]')

			modalElem.classList.add("active")
			overlay.classList.add("active")
		}) // end click
	}) // end foreach

	if (closeButtons) {
		/* закрытие окон */
		closeButtons.forEach(function (item) {
			item.addEventListener("click", function (e) {
				var parentModal = this.closest(".modal")

				parentModal.classList.remove("active")
				overlay.classList.remove("active")
			})
		}) // end foreach
	}

	/* закрытие по ESC */
	document.body.addEventListener(
		"keyup",
		function (e) {
			var key = e.keyCode

			if (key == 27) {
				document.querySelector(".modal.active").classList.remove("active")
				document.querySelector(".overlay.active").classList.remove("active")
			}
		},
		false
	)

	/* скрытие окна при клике на подложку */
	overlay.addEventListener("click", function () {
		document.querySelector(".modal.active").classList.remove("active")
		this.classList.remove("active")
	})
}) // end ready
