import { middlewareLogin } from "../../helpers/auth";
import MainLayout from "../../components/layouts/main";
import News from "../../components/News";
import MainHead from "../../components/layouts/head";
import axios from "axios";

export const getServerSideProps = async (ctx) => {
  const m = middlewareLogin(ctx.req);
  if (m !== null) {
    return m;
  }
  const res = await axios.get("https://berita-indo-api.vercel.app");
  return {
    props: {
      news: res.data,
    },
  };
};

function news({ news }) {
  return (
    <>
      <MainHead
        title={`News App | Media News`}
        description={`News App | Media News by Yeremia Joy`}
      />
      <MainLayout>
        <News news={news.listApi} />
      </MainLayout>
    </>
  );
}

export default news;
