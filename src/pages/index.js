import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Container from '../components/container/container'
import Nav from '../components/navigation/nav'
import Cta from '../components/cta/cta'

import "../styles/_main.scss";
import * as classes from "../styles/pages/index/index.module.scss"
import { navigate } from "gatsby";


const IndexPage = () => {
   const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  return(
  <Layout mainClassName={classes.main} nav={nav}>
    <Seo title="Home" description="Discover world-class marine and subsea expertise" />

{/*  ================== HEADER ================== */}
     <header className={classes.header}>
      <Container>
          <Nav nav={nav} toggleNav={toggleNav} />
      <div className={classes.desc}>
       <h1>
        Discover world-class marine and subsea expertise
        </h1>
       <Cta handleClick={()=> navigate("/about")} desc="Learn more"/>
      </div>
      </Container>
    </header>
    
      {/*  ================== ABOUT =================== */}
       <Container>
    <section className={classes.about}>
          <h1>Archipelago Marine is the new industry gold standard</h1>
          <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nihil doloribus quia perspiciatis dolores commodi cum corporis distinctio molestiae consectetur.
        Rerum quod asperiores ratione quas, molestias ut deleniti blanditiis necessitatibus alias.
        </p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam dolore provident mollitia, ipsam rem asperiores consequuntur! Dolores, blanditiis?
          Corrupti, praesentium possimus molestiae quae facere adipisci eligendi temporibus assumenda cumque!
      </p>
          </div>

      <div className={classes.partners}>
         <StaticImage
      className={classes.logo}
      src="..\images\logos\furuno.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Furuno"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/jlaudio.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="jlaudio"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/simrad.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Simrad"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/lowrance.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Lowrance"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/icom.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Icom"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/victronenergy.png"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Victronenergy"
    />
      </div>
    </section>
    </Container>
  </Layout>
)}

export default IndexPage
