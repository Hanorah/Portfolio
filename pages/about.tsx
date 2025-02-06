/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="#"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/hanorah"
                >
                  ENGINEERING{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/hanorah"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  As a seasoned software engineer, I'm passionate about continuous learning and growth. Every day, I embrace new challenges and opportunities to expand my expertise in full-stack development and agile methodologies. With a strong foundation in JavaScript, Python, and React, I stay curious and adapt to emerging trends and technologies, ensuring my solutions are always innovative, scalable, and high-performing. Through data-driven insights and a commitment to excellence, I drive business outcomes and deliver exceptional results."

                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Project Page">
                  PROJECTS{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Projects
                </Link>
                <p>
                  I may not fit the traditional project manager mold, but my mix of research, design, and coordination skills lets me drive projects from concept to launch. I'm all about keeping the project vision intact throughout its journey, and I'm comfortable navigating both technical and project aspects. I've got a knack for turning ideas into successful projects, and I'm excited to bring my skills to the table.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/hanorah"
                >
                  DESIGN{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/hanorah"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                  I'm a designer who loves making things look and feel great. Whether it's UI/UX or visual design, I'm all about creating experiences that are both beautiful and functional. I believe good design should be intuitive, easy to use, and stunning to look at. I'm always pushing myself to find that perfect balance between aesthetics, usability, and technical know-how.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="#"
        >
          <article>
            <h4>EDUCATION</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Holberton University"
                  href="https://drive.google.com/file/d/1b7sSKV7YypuH8FzYoV-CLnUuAqd9vGbj/view?usp=drive_link"
                >
                  SOFTWARE ENGINEERING. <small>holberton university</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2023-2024</b>
                </a>
                <p>
                  Spent 12 months at ALX Holberton, where I dived into software engineering and full-stack development. Learned by doing, and gained hands-on experience with cloud computing, agile methodologies, and collaborative project work
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Zero to Mastery School"
                  href="#"
                >
                  FULL STACK DEVELOPMENT. <small>zero to mastery school</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Mastered full-stack development through Zero to Mastery, gaining expertise in building robust and efficient web applications from front-end to back-end, with a strong foundation in coding languages and development frameworks
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="#"
                >
                  BSC AGRICULTURE. <small>university of benin</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019 - 2024</b>
                </a>
                <p>
                  Earned a Bachelor of Science degree in Agriculture from the University of Benin, laying a solid groundwork in agricultural sciences, research methods, and sustainable practices, with a keen interest in leveraging technology to drive agricultural innovation, including agritech solutions, precision farming, and data-driven decision making.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Design at california institute of the arts "
                  href="#"
                >
                  DESIGN <small>california institute of the arts

                  </small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2024</b>
                </a>
                <p>
                  Currently pursuing a degree in Design at California Institute of the Arts, exploring the intersection of creativity and technology.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="PYTHON "
                  href="#"
                >
                  PYTHON <small>replit school

                  </small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2024</b>
                </a>
                <p>
                  Currently getting a Certified Python Programmer certification from Replit, demonstrating expertise in Python programming languages, data structures, and software development best practices.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p> Learning and improving everyday. </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="#"
        >
          <article>
            <h4>WORK EXPERIENCE</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Selm Tech"
                  href="#"
                >
                  FRONT-END DEVELOPER.<small>selm tech</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  Selm Tech, a tech company specializing in creating power banks and developing tech solutions such as apps and websites.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="TSL Nigeria"
                  href="#"
                >
                  DESIGNER. <small>tsl nigeria</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2018-2019</b>
                </a>
                <p>
                  Worked as an intern graphic designer at TSL Nigeria, honing skills in visual communication and creative design processes.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Fred Idemudia Accounting Firm"
                  href="#"
                >
                  TECH INTERN. <small>fred idemudia accounting firm</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019-2020</b>
                </a>
                <p>
                  Worked as a tech intern at Fred Idemudia Accounting Firm, gaining practical experience in IT support and software applications.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="FirstClass Studio"
                  href="#"
                >
                  UI/UX DESIGNER. <small>firstClass studio</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Worked as a UI/UX designer at FirstClass Studio for 3 months, enhancing user experience and interface designs.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="TOF Nation NGO"
                  href="#"
                >
                  COMMUNITY MANAGER & WEB DEVELOPER. <small>tof nation NGO</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020 - Present</b>
                </a>
                <p>
                  Currently working as the community manager and web developer for TOF Nation NGO, leading web projects and managing online community engagement.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="DotBob"
                  href="#"
                >
                  SOFTWARE ENGINEER. <small>dotbob</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021-2023</b>
                </a>
                <p>
                  Worked as a software engineer at DotBob, focusing on developing and maintaining software solutions and applications.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="CheeSpace"
                  href="#"
                >
                  FOUNDER. <small>cheespace</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021</b>
                </a>
                <p>
                  Founded CheeSpace, a company that launched Chee Farmers Market, providing web publicity solutions for farmers.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Techopedia"
                  href="#"
                >
                  CONTRACT WEB DEVELOPER. <small>techopedia</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022</b>
                </a>
                <p>
                  Worked as a contract web developer at Techopedia, contributing to web development projects and coding initiatives.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>



      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
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
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
