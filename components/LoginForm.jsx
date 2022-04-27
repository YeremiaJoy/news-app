import React, { useEffect } from "react";
import { useForm } from "../helpers/useForm";
import { validate } from "../helpers/validate";
import Link from "next/link";
import { useRouter } from "next/router";

function LoginForm() {
  const router = useRouter();
  const { values, errors, handleValueChange, handleSubmit } = useForm(
    login,
    validate,
    "login"
  );
  
  function login() {
    router.push("/news");
  }

  return (
    <div className="form-container">
      {errors.emailCheck && (
        <div className="isAvailable">{errors.emailCheck}</div>
      )}
      <h2>Welcome to News App</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={values.email || ""}
          onChange={handleValueChange}
        />
        {errors.email && <p className="is-danger">{errors.email}</p>}

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleValueChange}
        />
        {errors.password && <p className="is-danger">{errors.password}</p>}

        <input className="submit-btn" type="submit" value="Login" />
        <span>
          not have an account yet?
          <Link href="/">
            <a> Register</a>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default LoginForm;
