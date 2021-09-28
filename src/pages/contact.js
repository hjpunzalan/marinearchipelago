import React, { useState } from "react";

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Container from '../components/container/container'
import Nav from '../components/navigation/nav'

import "../styles/_main.scss";
import * as classes from "../styles/pages/contact/contact.module.scss"


import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  // Formspree
  const [state, handleSubmit] = useForm("xbjkvkgb");
  const [inputs, setInputs] = useState({
    fullName:"",
    email:"",
    message:""
  })

  const handleChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };





  return (
    <Layout mainClassName={classes.main} nav={nav}>
      <Seo title="Contact us" description="Send Archipelago marine a message. Contact us using our form." />
      
     <header className={classes.header}>
      <Container>
          <Nav nav={nav} toggleNav={toggleNav} />
       <h1 className={classes.title}>
        Contact us
        </h1>
      </Container>
      </header>

      
      <Container>
        <section className={classes.contact} style={{flexDirection: state.succeeded? "column": "flex"}}>
          <div>
          {
            state.succeeded ? <p className={classes.thankMessage}>Thanks for your interest in Archipelago Marine. We will reach out to you shortly. Cheers!</p> :
            <form onSubmit={handleSubmit}>
                  <h2>Send us a message</h2>
                  <div className={classes.container}>
                  <div className={classes.customerInfo}>
                <label htmlFor="firstName">
                  Full Name:
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="Full Name:"
                  onChange={handleChange}
                    value={inputs.firstName}
                    required
                  />
                  <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={state.errors}
                  />
                  <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={state.errors}
                  />
                <label htmlFor="email">
                  Email Address:
                </label>
                <input
                  id="email"
                  type="email"
                    name="Email address:"
                    onChange={handleChange}
                    value={inputs.email}
                    required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  />
                    </div>
                    



            <div className={classes.messageAndSubmit}>
                  <label htmlFor="message">
                  Write your message:
                </label>
                <textarea
                  id="message"
                  name="Message:"
                  onChange={handleChange}
                    value={inputs.message}
                    required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  />
                  <div>
                <button type="submit" disabled={state.submitting}>
                  {state.submitting ? "Please wait" : "Submit"}
                    </button>
                    </div>
                 </div>
               </div>
            </form>
            }
          </div>

          <div className={classes.companyInfo}>
            <div>
            <h3>Email</h3>
            <p>admin@archipelagomarine.com.au</p>
            <h3>Address</h3>
            <p>
                Lot 2, Dampier Shopping Arcade <br />
                15 High Street <br />
                Dampier WA 6713
            </p>
            </div>
          <iframe
            title="company location"
            className={classes.map}
            width="300"
            height="450"
            placeholder= "BLURRED"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu38c2ws89isRYYpAmbVBo3c&key=AIzaSyA494M6sS0tEAq8JvvEH8d3R685xEhij48"></iframe>
            </div>
    </section>
    </Container>
  </Layout>
     
  );
}

export default ContactPage
