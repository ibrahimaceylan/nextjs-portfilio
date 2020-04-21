import Document, {Head, Main, NextScript } from 'next/document'

export default class MyDocument extends  Document {
  render(){
    return(
      <html>
        <Head>
          <meta name="description" content="A site for my programming portfilio" />
          <meta charSet="utf-8"/>
          <meta name="robots" content="noindex,nofollow"/>
          <meta name="viewport" content="width=device-with"/>
          
          <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>

        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
    <style jsx>{`
      body{
        font-family: 'Roboto', sans-serif;

      }
    
    `}</style>
      </html>
    )
  }
}