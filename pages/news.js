import { middlewareLogin } from "../helpers/auth";
import MainLayout from "../components/layouts/main";
import NewsList from "../components/NewsList";
import MainHead from "../components/layouts/head";

export const getServerSideProps = (ctx) => {
  const m = middlewareLogin(ctx.req);
  if (m !== null) {
    return m;
  }
  return {
    props: {},
  };
};

function news() {
  return (
    <>
      <MainHead
        title={`News App | Login`}
        description={`News App | News by Yeremia Joy`}
      />
      <MainLayout>
        <NewsList />
      </MainLayout>
    </>
  );
}

export default news;
