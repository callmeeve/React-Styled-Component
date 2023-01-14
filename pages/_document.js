import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return(
      <Html lang = "en" >
        <Head />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}
