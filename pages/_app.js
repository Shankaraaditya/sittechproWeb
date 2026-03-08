
import React from "react";
import App from "next/app";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(``);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D95NPS57PD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D95NPS57PD');
          `}
        </Script>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>
            Shankar Institute of Technology | DCA & Computer Training, Hata
            Kushinagar
          </title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
