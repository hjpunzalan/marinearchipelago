import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
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
      <Seo title="About us" description="Archipelago Marine was established in Karratha with the main goal of providing quality, electrical and electronics services to the marine industry in the Pilbara." />

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
            <p>With over 44 years of experience in the marine industry between the Co-Founders Paul Hill and Reginald Soriano.
              Archipelago Marine was established in Karratha with the main goal of providing quality, electrical and electronics services to the marine industry in the Pilbara.
              Archipelago Marine prides itself in delivering work to the highest standard, safely and efficiently to meet and go beyond our clients’ expectations.
            </p><br/>
            <p>
              Archipelago Marine is committed to ensure that all survey requirements pertaining to the vessel are always met to guarantee safe vessel operations.
              From personal leisure crafts to deep sea vessels Archipelago Marine can provide but not limited to the following services:
        </p>
            <br />
            <ul>
              <li>AC 240/415V Electrical System: Installation, Modification & Troubleshooting</li>
              <li>DC 12/24V Electrical System: Installation, Modification & Troubleshooting</li>
              <li>Marine Communication Equipment: Installation, Modification & Troubleshooting</li>
              <li>Marine Navigational Equipment: Installation, Modification & Troubleshooting</li>
              <li>Generator & Power Distribution System: Modification & Troubleshooting</li>
              <li>RCD & Insulation Resistance Testing</li>
              <li>Switchboard Inspections & Thermal Imaging</li>
              <li>Electrical Equipment Testing + Tagging</li>
            </ul>
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
