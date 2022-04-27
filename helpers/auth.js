export const checkToken = (req) => {
  const token = req.cookies;
  if (!token) {
    return null;
  }

  return token;
};

export const middlewareLogin = (req) => {
  const account = checkToken(req);

  if (account.user === undefined) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return null;
};
export const middlewareLoggedIn = (req) => {
  const account = checkToken(req);

  if (account.user) {
    return {
      redirect: {
        destination: "/news",
        permanent: false,
      },
    };
  }

  return null;
};
