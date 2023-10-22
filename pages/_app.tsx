import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import LayoutWrapper from '../components/layout/LayoutWrapper'
import { appWithTranslation } from 'next-i18next'

const metaTitle = 'Wikicious: Buy & Sell Crypto | DeX Exchange'
const metaDescription =
  'Buy & Trade - BTC, ETH, XRP and more on Wikicious, a global leading decentralized crypto exchange. Dive into the world of Web3, invest in DeFi, and embrace NFTs. Register today to shape the future of finance!'
const keywords =
  'Wikicious, DEFI, BTC, ETH, XRP, Decentralized Exchange, Trading, Decentralized Finance, Crypto, ERC20, Ethereum, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SPL Tokens'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wikicious: Buy & Sell Crypto | DeX Exchange</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://wikicious.com/twitter-card.png?123456789"
        />
      </Head>
      <ThemeProvider defaultTheme="Mango">
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
