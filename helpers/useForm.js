import { useEffect, useState } from "react";

import { setCookie } from "../helpers/cookies";

export function useForm(callback, validate, type) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let existingAccount =
      localStorage.getItem("_Account") !== null
        ? JSON.parse(localStorage.getItem("_Account"))
        : [];
    if (Object.keys(errors).length === 0 && isSubmitting) {
      switch (type) {
        case "login":
          setCookie("user", JSON.stringify(existingAccount[0]), 1);
          break;
        case "register":
          localStorage.setItem(
            "_Account",
            JSON.stringify([...existingAccount, ...[values]])
          );
          break;
      }
      callback();
      setValues({});
    }
  }, [errors]);

  async function handleSubmit(event) {
    if (event) event.preventDefault();
    setErrors(validate(values, type));
    setIsSubmitting(true);
  }

  function handleValueChange(e) {
    e.preventDefault();
    //if province changed, remove city value
    if (e.target.name === "province" && values.province !== e.target.value)
      setValues((values) => ({ ...values, city: "" }));

    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  return {
    values,
    errors,
    handleSubmit,
    handleValueChange,
  };
}
