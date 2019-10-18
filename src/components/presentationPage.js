import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PresentationPage = () => (
  <Layout>
    <SEO title="Page again" />
    <h1>Hi from the again page</h1>
    <p>Welcome to the page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PresentationPage
