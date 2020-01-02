import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// require('bootstrap-loader');

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Meta */}
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />

          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/img/favicon.ico" />

          {/* CSS imports */}
          <link
            href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* JS scripts imports */}
          <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
        </body>
      </html>
    );
  }
}
