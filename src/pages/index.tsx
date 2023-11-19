import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { graphql, HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { onHoverScaleAndFollowImage } from '../gsap/animation';

type MetaTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      lang: string
      charset: string
      siteUrl: string
      themeColor: string
      ogpType: string
    }
  }
}

export default function Home() {

  useEffect(() => {
    onHoverScaleAndFollowImage('.texts', '.text', '.image');
  }, []);

  return (
    <>
      <Layout>
        <div className='h-screen w-full bg-gradient-to-r from-rose-500/80 to-fuchsia-500/80 overflow-hidden'>
          <ul className='texts w-[450px] h-3/5 text-gray-50 text-9xl grid justify-items-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default italic'>
            <li className='text sushi'>sushi</li>
            <li className='text alcohol'>alcohol</li>
            <li className='text pizza'>pizza</li>
          </ul>
          <StaticImage
            className='sushi image opacity-0 aspect-square max-w-sm h-auto absolute top-0 left-0 animate-material-shadow-md'
            style={{ scale: '0 0' }}
            src='../images/spencer-chow-PF_zcUW_NYU-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='sushi' />
          <StaticImage
            className='drink image opacity-0 aspect-square max-w-sm h-auto absolute top-0 left-0 animate-material-shadow-md'
            style={{ scale: '0 0' }}
            src='../images/omid-armin-QVvq5VvMlU4-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='drink' />
          <StaticImage
            className='pizza image opacity-0 aspect-square max-w-sm h-auto absolute top-0 left-0 animate-material-shadow-md'
            style={{ scale: '0 0' }}
            src='../images/foad-roshan-Y6OgisiGBjM-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt={'pizza'} />
        </div>
      </Layout>
    </>
  );
};
export const Head = (props: HeadProps<MetaTypes>) => (
  <>
    <html lang={props.data.site.siteMetadata.lang} />
    <title>{props.data.site.siteMetadata.title}</title>
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <meta charSet={props.data.site.siteMetadata.charset} />
    <meta name='description' content={props.data.site.siteMetadata.description} />
    <meta property='og:title' content={props.data.site.siteMetadata.title} />
    <meta property='og:description' content={props.data.site.siteMetadata.description} />
    <meta property='og:url' content={props.data.site.siteMetadata.siteUrl} />
    <meta property='og:image' content={`${props.data}`} />
    <meta property='og:type' content={props.data.site.siteMetadata.ogpType} />
    <meta property='og:site_name' content={props.data.site.siteMetadata.title} />
    <meta property='og:locale' content='ja_JP' />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content='@IKEDA__JS' />
    <meta name='robots' content='noindex,nofollow' />
    <link rel='canonical' href={props.data.site.siteMetadata.siteUrl} />
    <link rel='apple-touch-icon-precomposed' href={`${props.data}`} />
    <meta name='msapplication-TileImage' content={`${props.data}`} />
    <meta name='msapplication-TileColor' content={props.data.site.siteMetadata.themeColor} />
  </>
);
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        charset
        lang
        siteUrl
        themeColor
        ogpType
      }
    }
  }
`