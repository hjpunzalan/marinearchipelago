import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '../components/container/container'
import Nav from '../components/navigation/nav'

import "../styles/_main.scss";
import * as classes from "../styles/pages/index/index.module.scss"

const IndexPage = () => (
  <Layout mainClassName={classes.main}>
    <Seo title="Archipelago Marine" description="Discover world-class marine and subsea expertise" />

{/*  ================== HEADER ================== */}
     <header className={classes.header}>
      <Container>
      <Nav/>
      <div className={classes.desc}>
       <h1>
        Discover world-class marine and subsea expertise
        </h1>
       <button className={classes.cta}>
        Learn more
        </button>
      </div>
      </Container>
    </header>
    
{/*  ================== ABOUT =================== */}
    <section className={classes.about}>
      <h1>Archipelago Marine is the new industry gold standard</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nihil doloribus quia perspiciatis dolores commodi cum corporis distinctio molestiae consectetur.
        Rerum quod asperiores ratione quas, molestias ut deleniti blanditiis necessitatibus alias.
      </p>
    </section>


{/*  ================== CONTACT =================== */}
    <section className={classes.contact}>
   <h1>contact us</h1>
    </section>
  </Layout>
)

export default IndexPage
