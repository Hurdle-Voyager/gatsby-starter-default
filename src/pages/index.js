import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello</h1>
    <p>Welcome to Sean's new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/Clifford3.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">This link pretends to link to server side rendering, but 404s lol"</Link> <br />
      <Link to="/using-dsg">This link also 404s, lol x2"</Link>
    </p>
  </Layout>
)

export default IndexPage
