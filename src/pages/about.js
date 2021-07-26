import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '../components/container/container'
import Nav from '../components/navigation/nav'

import "../styles/_main.scss";
import * as classes from "../styles/pages/about/about.module.scss"


const AboutPage = () => {
   const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  return(
  <Layout mainClassName={classes.main} nav={nav}>
    <Seo title="Archipelago Marine" description="About us" />

     <header className={classes.header}>
      <Container>
          <Nav nav={nav} toggleNav={toggleNav} />
       <h1 className={classes.title}>
        About us
        </h1>
      </Container>
      </header>
      
      <Container>
    <section className={classes.about}>
       <div className={classes.paragraph}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nihil doloribus quia perspiciatis dolores commodi cum corporis distinctio molestiae consectetur.
        Rerum quod asperiores ratione quas, molestias ut deleniti blanditiis necessitatibus alias.
        </p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam dolore provident mollitia, ipsam rem asperiores consequuntur! Dolores, blanditiis?
          Corrupti, praesentium possimus molestiae quae facere adipisci eligendi temporibus assumenda cumque!
            </p>
       </div>
            
            <StaticImage
      className={classes.aboutImage}
      src="../images/test.jpg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="test image"
    />
    </section>
    </Container>
  </Layout>
)}

export default AboutPage
