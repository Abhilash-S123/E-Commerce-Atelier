const createBtn = document.querySelector("#list-settings-list");
const signinCreate = document.querySelector("#signin-create");
const signinBtn = document.querySelector("#signin-btn");
const createAccount = document.querySelector("#create-account");
const firstName = document.querySelector("#firstname-check");
const lastName = document.querySelector("#lastname-check");
const email = document.querySelector("#email-check");
const password = document.querySelector("#password-check");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regular expression for email

// Helper function
function showError(fieldId, message) {
  document.querySelector(`#${fieldId}-error`).textContent = message;
  document.querySelector(`#${fieldId}-check`).classList.add("is-invalid");
}

function clearError(fieldId) {
  document.querySelector(`#${fieldId}-error`).textContent = "";
  document.querySelector(`#${fieldId}-check`).classList.remove("is-invalid");
}

const userInfo = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

createBtn.addEventListener("click", (e) => {
  signinCreate.textContent = "Create Your Account";
  signinCreate.classList.add("create");
});

signinBtn.addEventListener("click", (e) => {
  console.log("hello");

  signinCreate.textContent = "Sign in to your account";
  signinCreate.classList.remove("create");
});

createAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  let userFirstname = firstName.value.trim();
  let userLastname = lastName.value.trim();
  let userEmail = email.value.trim();
  let userPassword = password.value.trim();

  if (userFirstname.length === 0) {
    showError("firstname", "Please enter a firstname");
  }

  if (userLastname.length === 0) {
    showError("lastname", "Please enter a lastname");
  }

  if (userEmail.length === 0) {
    showError("email", "Please enter a email");
  }

  if (userPassword.length === 0) {
    showError("password", "Please enter a password");
  }

  if (
    userFirstname.length !== 0 &&
    userLastname.length !== 0 &&
    userEmail.length !== 0 &&
    userPassword.length !== 0
  ) {
    if (
      userFirstname.length >= 3 &&
      emailRegex.test(userEmail) &&
      userPassword.length >= 8
    ) {
      userInfo.name = userFirstname;
      userInfo.lastname = userLastname;
      userInfo.email = userEmail;
      userInfo.password = userPassword;
      console.log(userInfo);

      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
       alert('Account Created')
    }
  }
});

firstName.addEventListener("input", (e) => {
  const name = firstName.value.trim();
  if (name.length === 0) {
    showError("firstname", "Please enter a name");
  } else if (name.length < 3) {
    showError("firstname", "Name should be atleast 3 characters");
  } else {
    clearError("firstname");
  }
});

lastName.addEventListener("input", (e) => {
  const name = lastName.value.trim();
  if (name.length === 0) {
    showError("lastname", "Please enter a lastname");
  } else {
    clearError("lastname");
  }
});

email.addEventListener("input", (e) => {
  const emailId = email.value.trim();
  if (emailId.length === 0) {
    showError("email", "Please enter a email");
  } else if (!emailRegex.test(emailId)) {
    showError("email", "Enter a valid email id");
  } else {
    clearError("email");
  }
});

password.addEventListener("input", (e) => {
  const userPassword = password.value.trim();
  if (userPassword.length === 0) {
    showError("password", "Please enter a password");
  } else if (userPassword.length < 8) {
    showError("password", "Minimum 8 characters required");
  } else {
    clearError("password");
  }
});
