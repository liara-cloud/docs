import Head from 'next/head'
import { Fragment } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

export default ({ children }) => (
  <Fragment>
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
