import React, { useEffect, useState } from "react";
import Link from "next/link";
import { validate } from "../helpers/validate";
import { useForm } from "../helpers/useForm";

const provinceData = [
  {
    id: 1,
    name: "Jawa Barat",
  },
  {
    id: 2,
    name: "Jakarta",
  },
];

const cityData = [
  {
    id: 1,
    name: "Bandung",
  },
  {
    id: 1,
    name: "Bekasi",
  },
  {
    id: 1,
    name: "Cirebon",
  },
  {
    id: 1,
    name: "Cimahi",
  },
  {
    id: 1,
    name: "Sukabumi",
  },
  {
    id: 2,
    name: "Kota Administrasi Jakarta Barat",
  },
  {
    id: 2,
    name: "Kota Administrasi Jakarta Pusat",
  },
  {
    id: 2,
    name: "Kota Administrasi Jakarta Timur",
  },
  {
    id: 2,
    name: "Kota Administrasi Jakarta Selatan",
  },
  {
    id: 2,
    name: "Kota Administrasi Jakarta Utara",
  },
];

function RegistrationForm() {
  const { values, errors, handleValueChange, handleSubmit } = useForm(
    registration,
    validate,
    "register"
  );
  const [done, setDone] = useState(false);
  function registration() {
    setDone(true);
  }

  return (
    <div className="form-container">
      {done && !errors.emailCheck && (
        <div className="submitted">
          Your Account is Submitted, Please Login!
        </div>
      )}
      {errors.emailCheck && (
        <div className="isAvailable">{errors.emailCheck}</div>
      )}
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={values.firstName || ""}
          onChange={handleValueChange}
        />
        {errors.firstName && <p className="is-danger">{errors.firstName}</p>}

        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={values.lastName || ""}
          onChange={handleValueChange}
        />
        {errors.lastName && <p className="is-danger">{errors.lastName}</p>}

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

        <select
          name="province"
          onChange={handleValueChange}
          value={values.province ? values.province : "default"}
        >
          <option value={"default"} disabled>
            Select Province
          </option>
          {provinceData.map((value, k) => {
            return (
              <option key={k} value={value.name}>
                {value.name}
              </option>
            );
          })}
        </select>
        {errors.province && <p className="is-danger">{errors.province}</p>}

        <select
          name="city"
          onChange={handleValueChange}
          value={values.city ? values.city : "default"}
        >
          <option value={"default"} disabled>
            Select City
          </option>

          {values.province &&
            cityData
              .filter(
                (city) =>
                  city.id ==
                  provinceData.filter(
                    (province) => province.name == values.province
                  )[0].id
              )
              .map((value, k) => {
                return <option key={k}>{value.name}</option>;
              })}
        </select>
        {errors.city && <p className="is-danger">{errors.city}</p>}

        <input className="submit-btn" type="submit" value="Submit" />
        <span>
          already have an account?
          <Link href="/login">
            <a> Login</a>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default RegistrationForm;
