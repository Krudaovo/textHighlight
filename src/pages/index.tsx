import React from 'react';
import Layout from '../components/layout';
import { graphql, HeadProps } from 'gatsby';

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
  return (
    <>
      <Layout>
        <div>
          hello world
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