import { middlewareLoggedIn } from "../helpers/auth";
import React, { useEffect } from "react";
import MainLayout from "../components/layouts/main";
import LoginForm from "../components/LoginForm";
import MainHead from "../components/layouts/head";

export const getServerSideProps = (ctx) => {
  const m = middlewareLoggedIn(ctx.req);
  if (m !== null) {
    return m;
  }
  return {
    props: {},
  };
};

function login() {
  return (
    <>
      <MainHead
        title={`News App | Login`}
        description={`News App | Login by Yeremia Joy`}
      />
      <MainLayout>
        <LoginForm />
      </MainLayout>
    </>
  );
}

export default login;
