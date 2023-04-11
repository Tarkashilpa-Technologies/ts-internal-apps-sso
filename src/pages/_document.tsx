import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"className='h-100 d-flex flex-column'>
      <Head />
      <body className='h-100 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
