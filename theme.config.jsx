/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Script from 'next/script';
import logo from './src/components/HeaderLogoTextAnimation.jsx';
import { Footer } from './src/components/Footer.jsx';

export default {
  logo: logo,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Hyperion Foundation CDN'
      }
    }
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    return (
      <>
        <meta name='og:url' content={`https://cdn.hyperfoundation.my.id${asPath}`} />
        <meta name='og:title' content={frontMatter.title || 'Hyperion Foundation CDN'} />
        <meta name='og:description' content={frontMatter.description || 'A Hyperion Foundation CDN website. Storing our old contents that can be used for public.' } />
        <meta name='description' content='A Hyperion Foundation CDN website. Storing our old contents that can be used for public.' />
        <meta name='google-adsense-account' content='ca-pub-6163526907517542' />
      
        <title>Hyperion Foundation CDN</title>
      
        <link href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css' rel='stylesheet' />
        <link rel='icon' href='/hyperion-favicon.png' type='image/png' />
        <Script 
          id='adsbygoogle-init'
          strategy='afterInteractive'
          crossOrigin='anonymous'
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6163526907517542' />
      </>
    )
  },
  i18n: [
    { locale: 'en', text: '🇺🇸 English' },
    { locale: 'id', text: '🇮🇩 Bahasa Indonesia' }
  ],
  // banner: {
  //   dismissible: false,
  //   key: 'HappyNewYear2024',
  //   text: 'Happy New Year 2024! 🥳 🎉'
  // },
  search: {
    placeholder: 'Search something...'
  },
  project: {
    link: 'https://github.com/hyperion-foundation/cdn'
  },
  docsRepositoryBase: 'https://github.com/hyperion-foundation/cdn',
  chat: {
    link: 'https://discord.gg/4U4k6bW'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator' ) {
        return (
          <div>{title}</div>
        )
      }
      return <> {title}</>
    },
    defaultMenuCollapseLevel: 1
  },
  toc: {
    backToTop: true
  },
  navigation: {
    prev: true,
    next: true
  },
  editLink: {
    text: null
  },
  feedback: {
    content: null
  },
  footer: {
    component: Footer
  }
}