function action() {
	const closeBtn = document.querySelector('#closeBtn')
	const action = document.querySelector('.action')

	closeBtn.onclick = function () {
		action.remove()
	}
}

export default action