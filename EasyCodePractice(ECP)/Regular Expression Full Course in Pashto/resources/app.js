const phoneInput = document.querySelector("#phone-input");
const phoneButton = document.querySelector("#phone-button");
phoneButton.addEventListener("click", () => checkPhoneNumber());

// Custom regex maded
const phonevalidator =
	/^\+?(?:92)?[ -]?0?(?<code>\d{3})[ -]?(?<number>\d{7})$/g;
const emailValid = /(\w.+)@(\w{3,})\.\w{2,4}$/g;

// Generated through snippets
const anotherEmailValidation = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
const passValidator =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,20}$/;

const checkPhoneNumber = () => {
	const isThisValid = phonevalidator.test(phoneInput.value);
	alert(isThisValid);
};

const email_regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

const password_regex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{1,5}$/;

const phone_regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const Image_regex = /^.+\.(jpg|jpeg|png|gif|bmp|svg)$/gi;

const cityabbr_regex = /[a-zA-Z\s]*, [A-Z][A-Z]/;

const twitter_regex = /^@?(\w){1,15}$/;

const username_regex = /^[a-z0-9]{5,10}$/i;
