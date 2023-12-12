import { Helmet } from 'react-helmet-async';

function SEO ({props}) {
    const title = props.tit;
    const description = props.desc;
    console.log(description);
  return (
    <Helmet>
      <title>{`title`}</title>
      <meta name="description" content={description} />
      {/* Open Graph tags for Facebook and other platforms */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/path/to/your/image.jpg" />
      {/* Twitter Card tags for Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/path/to/your/image.jpg" />
    </Helmet>
  );
}

export default SEO;

