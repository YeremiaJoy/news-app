export function validate(values, type) {
  let errors = {};
  let existingAccount =
    localStorage.getItem("_Account") !== null
      ? JSON.parse(localStorage.getItem("_Account"))
      : [];
  //check email is it available or not
  let checkEmail = existingAccount.filter(
    (account) => account.email === values.email
  )[0];

  switch (type) {
    case "login":     
      if (values.email && values.password &&
        checkEmail?.email !== values.email ||
        checkEmail?.password !== values.password
      )
        errors.emailCheck = "Wrong Email or Password!";
      if (!values.email) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
      }
      break;
    case "register":
      if (checkEmail) errors.emailCheck = "Your Email Has Been Taken";
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }
      if (!values.email) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 or more characters";
      }
      if (!values.city) {
        errors.city = "City is required";
      }
      if (!values.province) {
        errors.province = "Province is required";
      }
      break;
    default:
      break;
  }
  return errors;
}
