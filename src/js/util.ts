const $ = (query) => document.querySelectorAll(query);
const $$ = (query) => document.querySelector(query);
const copyToClipboard = (text: string) => {
	const copy = document.createElement("textarea");
	copy.style.position = "fixed";
	copy.style.left = "0";
	copy.style.bottom = "0";
	copy.value = text;
	document.body.append(copy);
	copy.focus();
	copy.select();
	const success = document.execCommand("copy");
	copy.remove();
	return success;
};
