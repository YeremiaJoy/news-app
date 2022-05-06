import Head from "next/head";

const MainHead = ({ title, description, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <link rel="icon" href="/news-logo.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      {children}
    </Head>
  );
};

export default MainHead;
