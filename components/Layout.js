import Head from 'next/head'
import { Fragment } from 'react'
import { YMInitializer } from 'react-yandex-metrika'

import Header from './Header'
import Sidebar from './Sidebar'

export default ({ children }) => (
  <Fragment>
    <YMInitializer accounts={[51360556]} options={{clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true}} version="2" />

    <Head>
      <meta name="theme-color" content="#2C333F" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <main>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <article className="article">{children}</article>
      </div>
    </main>
  </Fragment>
)
