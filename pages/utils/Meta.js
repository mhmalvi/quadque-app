import Head from "next/head";

const Meta = ({ title, keywords, description, prevImage, type, url }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={prevImage} />
      <meta name="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      {/* For twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={prevImage} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Quadque Technology Limited - Best Online IT Services in Australia",
  description:
    "Check out our case studies to see how we help businesses with our digital services. These case studies can help you to understand our approach.",
  keywords:
    "web development services, Software Development services , web and mobile app development services , digital marketing services, ui ux design and development services, online it support services, it services online, it services online",
  prevImage:
    "https://www.quadque.tech/static/media/header_img.d15fa89422bf1c11ad38.jpg",
  type: "website",
  url: "https://quadque.tech",
};

export default Meta;
