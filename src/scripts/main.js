'use strict';

const labelSignUpName = document.createElement('label');

labelSignUpName.textContent = 'Enter your name:';
labelSignUpName.setAttribute('for', 'sign-up-name');

const inputSignUpName = document.getElementById('sign-up-name');

inputSignUpName.parentNode.insertBefore(labelSignUpName, inputSignUpName);

inputSignUpName.placeholder = 'Enter your name';

const labelSignUpLastName = document.createElement('label');

labelSignUpLastName.textContent = 'Enter your last name:';
labelSignUpLastName.setAttribute('for', 'sign-up-last-name');

const inputSignUpLastName = document.getElementById('sign-up-last-name');

inputSignUpLastName.parentNode.insertBefore(
  labelSignUpLastName,
  inputSignUpLastName,
);

inputSignUpLastName.placeholder = 'Enter your last name';

const labelSignUpEmail = document.createElement('label');

labelSignUpEmail.textContent = 'Enter your email:';
labelSignUpEmail.setAttribute('for', 'sign-up-email');

const inputSignUpEmail = document.getElementById('sign-up-email');

inputSignUpEmail.parentNode.insertBefore(labelSignUpEmail, inputSignUpEmail);

inputSignUpEmail.placeholder = 'Enter your password';

const labelSignUpPassword = document.createElement('label');

labelSignUpPassword.textContent = 'Enter your email:';
labelSignUpPassword.setAttribute('for', 'sign-up-password');

const inputSignUpPassword = document.getElementById('sign-up-password');

inputSignUpPassword.parentNode.insertBefore(
  labelSignUpPassword,
  inputSignUpPassword,
);

inputSignUpPassword.placeholder = 'Enter your password';

const labelSignInEmail = document.createElement('label');

labelSignInEmail.textContent = 'Enter your email:';
labelSignInEmail.setAttribute('for', 'sign-in-email');

const inputSignInEmail = document.getElementById('sign-in-email');

inputSignInEmail.parentNode.insertBefore(labelSignInEmail, inputSignInEmail);

inputSignInEmail.placeholder = 'Enter your email';

const labelSignInPassword = document.createElement('label');

labelSignInPassword.textContent = 'Enter your password:';
labelSignInPassword.setAttribute('for', 'sign-in-password');

const inputSignInPassword = document.getElementById('sign-in-password');

inputSignInPassword.parentNode.insertBefore(
  labelSignInPassword,
  inputSignInPassword,
);

inputSignInPassword.placeholder = 'Enter your password';
