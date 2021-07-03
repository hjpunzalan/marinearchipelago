import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Header from '../components/header/header'
import Seo from "../components/seo"
import "../styles/_main.scss";
import { classes } from "istanbul-lib-coverage"

const IndexPage = () => (
  <Layout>
    <Seo title="Archipelago Marine" description="Discover world-class marine and subsea expertise" />
    <Header />
    <section className={classes.about}>
      <h1>Who we are</h1>
   </section>
  </Layout>
)

export default IndexPage
