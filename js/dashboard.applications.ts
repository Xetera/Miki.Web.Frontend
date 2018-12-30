const copyables = Array.from(document.querySelectorAll(".copyable"));

copyables.forEach((copyable) => {
	copyable.addEventListener("click", () => {
		// @ts-ignore
		const { dataset: { key } } = copyable;
		console.log(key);
		const copy = document.createElement("textarea");
		copy.value = key;
		document.body.appendChild(copy);
		copy.focus();
		copy.select();
		document.execCommand("copy");
		copy.remove();
		copyable.classList.add("copied");
		// @ts-ignore
		// const temp = copyable.innerText;
		// // @ts-ignore
		// copyable.innerText = "";
		setTimeout(() => {
			copyable.classList.remove("copied");
			// @ts-ignore
			// copyable.innerText = temp;
		}, 2000);
	});
});
