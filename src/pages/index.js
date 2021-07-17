import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '../components/container/container'
import Nav from '../components/navigation/nav'

import "../styles/_main.scss";
import * as classes from "../styles/pages/index/index.module.scss"


const IndexPage = () => {
   const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  return(
  <Layout mainClassName={classes.main} nav={nav}>
    <Seo title="Archipelago Marine" description="Discover world-class marine and subsea expertise" />

{/*  ================== HEADER ================== */}
     <header className={classes.header}>
      <Container>
          <Nav nav={nav} toggleNav={toggleNav} />
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

      <div className={classes.partners}>
         <StaticImage
      className={classes.logo}
      src="../images/logos/furuno.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Furuno"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/simrad.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Simrad"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/lowrance.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Lowrance"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/icom.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Icom"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/jlaudio.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="jlaudio"
    />
         <StaticImage
      className={classes.logo}
      src="../images/logos/victronenergy.svg"
      placeholder= "BLURRED"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Victronenergy"
    />
      </div>
    </section>


{/*  ================== CONTACT =================== */}
    <section className={classes.contact}>
      <button className={classes.contactButton}>Contact Us</button>
      <div className={classes.contactCompany}>
          <div>
            <h3>Reginald Soriano</h3>
            <p>
            Managing Director Electrical<br/>
            0430 454 466<br />
            </p>
          </div>
          <div>
            <h3>Paul Hill</h3>
            <p>
              Managing Director Electronics<br />
              0400 028 582<br />
              </p>
          </div>
      </div>

    </section>
  </Layout>
)}

export default IndexPage
