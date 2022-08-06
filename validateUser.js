// storing inputs into an object
let storedDetails = {};

// requesting for user details and display the details upon request
function fillDetails() {
  // asking for a valid username
  let userName = prompt("Enter your username: ");

  if (userName == null) {
    return true;
  }

  validateUserName(userName);
  while (validateUserName(userName) == false) {
    userName = prompt(
      "Username must be less than 10 and greater than 0,please enter a valid username: "
    );
  }
  storedDetails["username"] = userName;

  // asking for a valid phone number
  let phoneNumber = prompt("Enter your phone number: ");
  if (phoneNumber == null) {
    return true;
  }
  validatePhoneNumber(phoneNumber);
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt(
      "Phone number must be 11 digits, please enter a valid phone numbeer: "
    );
  }

  storedDetails["Phonenumber"] = phoneNumber;

  // asking for a correct email address
  let email = prompt("Enter your email: ");
  if (email == null) {
    return true;
  }

  ValidateEmail(email);
  while (ValidateEmail(email) == false) {
    email = prompt("Please enter a valid email: ");
  }

  storedDetails["Email"] = email;

  // asking for password
  let password = prompt("Enter your password: ");
  if (password == null) {
    return true;
  }

  validatePassword(password);
  while (validatePassword(password) == false) {
    password = prompt(
      "Password must be greater than 6,please enter a valid password: "
    );
  }
  storedDetails["Password"] = password;

  // comfirming password
  let comfirmPassword = prompt("Comfirm your password: ");
  if (comfirmPassword == null) {
    return true;
  }

  comfirmEnteredPassword(password);
  while (comfirmEnteredPassword(password) == false) {
    alert("Your password do not match");
    comfirmPassword = prompt("Please comfirm your password: ");
  }

  storedDetails["Comfirmpassword"] = comfirmPassword;
  // ************************************************************************************************
  // validating username
  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // validating phone number
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }

  // validate email address
  function ValidateEmail(email) {
    let filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) {
      return true;
    } else {
      alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
      return false;
    }
  }

  // validate password
  function validatePassword(password) {
    if (password.length > 6) {
      return true;
    } else return false;
  }

  // comfirming password
  function comfirmEnteredPassword(password) {
    if (password !== comfirmPassword) {
      return false;
    }
    return true;
  }
}

// see details stored in the object
function seeDeails() {
    alert(` Your details are:\n
  Username: ${storedDetails["username"]}\n
  Phone number: ${storedDetails["Phonenumber"]}\n
  Email: ${storedDetails["Email"]}\n
  Password: ${storedDetails["Password"]}
    `);
}

