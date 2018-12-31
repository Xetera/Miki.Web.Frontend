const copyables = $(".copyable");
const deleteButtons = $(".delete-btn");
const editButtons = $(".edit-btn");
const inputs = $(".app-input");

const toggleClass = (cls: string) => (elem: HTMLElement) => elem.classList.toggle(cls);

const deleteApplication = (id: string) => fetch(`/applications/${id}`, {
	method: "DELETE",
}).then(() => location.reload());

const createApplication = () => fetch("/application", {
	method: "POST",
});

$$("#new-app").addEventListener("click", createApplication);

editButtons.forEach((edit) => {
	edit.addEventListener("click", () => {
		inputs.forEach(toggleClass("input"));
	});
});

deleteButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (!(button instanceof HTMLElement)) {
			return;
		}
		const { name, id } = button.dataset;
		const modal = createModal(`
			<div class="card-content ">
				<p class="has-text-centered">Are you sure you want to delete <b>${name}</b>?</p>
				<div class="card-content">
				<div class="level is-mobile">
				<div class="icon level-item tag is-info level-left hover-pointer" onclick="deleteApplication('${id}')">
					<i class="fas fa-check"></i>
				</div>
				<div class="icon level-item tag is-danger level-right hover-pointer" onclick="removeModal()">
					<i class="fas fa-ban"></i>
				</div>
       </div>
			</div>`);
	});
});

copyables.forEach((copyable) => {
	copyable.addEventListener("click", (e) => {
		e.stopPropagation();
		if (!(copyable instanceof HTMLDivElement)) {
			return;
		}
		const { dataset: { key } } = copyable;

		copyable.classList.add("copied");
		copyToClipboard(key);

		const temp = copyable.innerText;
		copyable.innerText = "";
		setTimeout(() => {
			copyable.classList.remove("copied");
			copyable.innerText = temp;
		}, 800);
	});
});

inputs.forEach((input) => {
	// input.addEventListener("focus", (e) => {
	// 	// input.classList.add("input");
	// });
	input.addEventListener("blur", (e) => {
		if (!(input instanceof HTMLInputElement)) {
			return;
		}
		// input.classList.remove("input");
		const { value } = input.dataset;
		if (input.innerText === "") {
			input.innerText = value;
		}
	});
});
