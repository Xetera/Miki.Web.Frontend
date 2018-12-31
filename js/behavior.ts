const parseHTML = (elem: string) => {
	const parent = document.createElement("div");
	parent.innerHTML = elem;
	const out = parent.firstChild;
	parent.remove();
	return out;
};

const removeModal = () => document.querySelector("#modal").remove();

const notification = (text: string) => parseHTML(`<div class="modal is-active" id="modal">
		<div class="modal-background" onclick="removeModal()"></div>
		<div class="modal-content">
			${text}
		</div>
		<button class="modal-close is-large" aria-label="close" onclick="removeModal()"></button>
	</div>`);

const closeNotificationWithId = (id: string) => document.querySelector(`#${id}`).remove();
const createModal = (text: string) => {
	const card = `<div class="card">
		<div class="card-content">
			${text}
		</div>
	</div>`;
	const n = notification(card);
	document.body.appendChild(n);
};

function hideElement(id) {
	console.log(id);
	this.parentElement.classList.remove("is-active");
}
