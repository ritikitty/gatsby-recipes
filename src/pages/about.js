import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby occupy poke art party neutra pork belly tofu.</h2>
            <p>
              Seitan letterpress ennui, 90's kogi ramps iceland. Squid tumblr
              next level mlkshk venmo, pour-over knausgaard thundercats chia ugh
              irony aesthetic austin fanny pack. Vaporware taiyaki organic
              pinterest jianbing cred.
            </p>
            <p>
              Heirloom selvage copper mug craft beer, pinterest mixtape banjo
              master cleanse. Beard ethical cardigan ugh sriracha crucifix air
              plant. Man braid raw denim ramps, austin meh tofu cred cronut
              cornhole.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in a bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
