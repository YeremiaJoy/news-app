import { middlewareLogin } from "../../helpers/auth";
import MainLayout from "../../components/layouts/main";
import NewsList from "../../components/NewsList";
import MainHead from "../../components/layouts/head";
import axios from "axios";

export const getServerSideProps = async (ctx) => {
  const m = middlewareLogin(ctx.req);
  if (m !== null) {
    return m;
  }
  const { news } = ctx.query;
  const res = await axios.get(`https://berita-indo-api.vercel.app/v1/${news}/`);
  return {
    props: {
      news: res.data,
    },
  };
};

function news({news}) {
  return (
    <>
      <MainHead
        title={`News App | News`}
        description={`News App | News by Yeremia Joy`}
      />
      <MainLayout>
        <NewsList news={news} />
      </MainLayout>
    </>
  );
}

export default news;
