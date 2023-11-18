import React, { useEffect, useRef } from 'react';
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
    onHoverScaleAndFollowImage('.japan', '.sushi');
    onHoverScaleAndFollowImage('.korea', '.drink');
    onHoverScaleAndFollowImage('.taiwan', '.taiwan-food');
    onHoverScaleAndFollowImage('.china', '.korean-food');
    onHoverScaleAndFollowImage('.italia', '.pizza');
  }, []);

  return (
    <>
      <Layout>
        <div className='h-screen w-full bg-gradient-to-r from-rose-500/80 to-fuchsia-500/80'>
          <ul className='text-gray-50 text-9xl italic grid justify-items-center gap-y-6 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default'>
            <li className='japan'>Japan</li>
            <li className='korea'>Korea</li>
            <li className='taiwan'>Taiwan</li>
            <li className='china'>Chaina</li>
            <li className='italia'>Italia</li>
          </ul>
          <StaticImage
            className='pizza image max-w-sm h-auto absolute top-0 left-0' style={{ scale: '0 0' }}
            src='../images/foad-roshan-Y6OgisiGBjM-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt={'pizza'} />
          <StaticImage
            className='taiwan-food image max-w-sm h-auto absolute top-0 left-0' style={{ scale: '0 0' }}
            src='../images/jenny-liu-X68a4jPM4c4-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt={'taiwan'} />
          <StaticImage
            className='drink image max-w-sm h-auto absolute top-0 left-0' style={{ scale: '0 0' }}
            src='../images/omid-armin-QVvq5VvMlU4-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='drink' />
          <StaticImage
            className='sushi image max-w-sm h-auto absolute top-0 left-0' style={{ scale: '0 0' }}
            src='../images/spencer-chow-PF_zcUW_NYU-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='sushi' />
          <StaticImage
            className='korean-food image max-w-sm h-auto absolute top-0 left-0' style={{ scale: '0 0' }}
            src='../images/vicky-ng-8hCcjf2BxTk-unsplash.jpg'
            placeholder='blurred' imgStyle={{ objectFit: 'cover' }} quality={100} alt='korean-food' />
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