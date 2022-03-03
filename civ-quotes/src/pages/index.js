import * as React from "react"
import Navbar from "../components/navbar"
import { Helmet } from "react-helmet"

// styles

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Civ Quotes</title>
        <link rel="canonical" href="http://civquotes.com" />
      </Helmet>
      <Navbar />

    </main>
  )
}

export default IndexPage
