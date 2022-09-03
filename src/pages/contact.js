import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Meditation photo booth fanny pack, ramps messenger bag direct
              trade succulents thundercats live-edge freegan before they sold
              out pork belly typewriter. Man bun franzen health goth whatever
              tumblr, retro viral art party. Retro kogi venmo, cliche tilde
              bicycle rights meh salvia pok pok pop-up af selfies. Wayfarers
              selfies chambray, chillwave air plant venmo lo-fi snackwave forage
              pop-up. Normcore schlitz wayfarers pork belly brunch yuccie. Fixie
              gastropub viral seitan. Tofu tilde palo santo ethical, pinterest
              direct trade locavore.
            </p>
            <p>
              Kickstarter master cleanse small batch 3 wolf moon offal
              cold-pressed crucifix truffaut bushwick typewriter etsy fixie
              photo booth tumblr woke. Stumptown blue bottle keytar PBR&B
              crucifix. Vegan sustainable banjo pitchfork marfa VHS tattooed.
              Craft beer shabby chic slow-carb quinoa brunch. Pour-over
              typewriter humblebrag palo santo.
            </p>
          </article>
          <article>
            <form className="form contactForm">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Send
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
