/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Import EmailJS

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); // Specify the type of the ref

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { // Type the event parameter
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm(
      'service_hc42hyp',  // Replace with your EmailJS Service ID
      'template_1ao4v29',  // Replace with your EmailJS Template ID
      form.current!, // Use the non-null assertion operator since we know it's not null
      'k-BWdsQZrHfEQhKHh'       // Replace with your EmailJS User ID (Public Key)
    )
      .then((result) => {
        console.log(result.text); // Handle success
        alert("Email sent successfully!"); // You can customize this
      }, (error) => {
        console.log(error.text); // Handle error
        alert("Failed to send email, please try again later.");
      });
  };

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Contact.</h1>
          <article>
            <p>
              Get in touch or shoot me an email directly on{' '}
              <b><a href="mailto:ksdnorah@gmail.com">ksdnorah@gmail.com</a></b>
            </p>
          </article>
          <br />
          <form ref={form} onSubmit={sendEmail}> {/* Use the ref and onSubmit handler */}
            <div className="fields">
              <div className="field half">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field half">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  aria-required="true"
                  required
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="form-control"
                  placeholder="Message"
                  aria-required="true"
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-default"
              type="submit"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  input,
  textarea {
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    &:focus {
      background-color: var(--bg);
    }
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;

export default Contact;
