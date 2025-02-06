import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { arrayRandomItem } from 'codewonders-helpers';
import { motion } from 'framer-motion';
import Head from 'next/head';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { getTransitions } from '../components/Utils';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759'])); // Removed #5856d6

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>
      <Layout>
        <PageSection color={color}>
          <PageWrapper>
            <div className="content">
              <article>
                <motion.h1
                  data-text="Looking for a Developer ?"
                  className="intro__text"
                  {...getTransitions(0.1)}
                >
                  <mark className="mark">Looking for a Developer ?</mark>
                </motion.h1>

                <motion.p {...getTransitions(0.5)}>
                  Hi, I'm Norah, a certified software engineer with a passion for crafting responsive and dynamic interfaces.I'm skilled at Python, JavaScript, React, and Tailwind CSS all of which I use to help create high-quality solutions that solve your problems.
                  {' '}
                  <motion.p {...getTransitions(0.5)}>
                    If you'd like to learn more check out my portfolio
                    {' '}
                    <Link href="/projects" aria-label="Go to Projects Page">
                      &rarr;
                    </Link>
                  </motion.p>

                </motion.p>

                <motion.p {...getTransitions(0.5)} style={{ textTransform: 'none' }}>
                  Ready to collaborate or discuss a project? Let's connect!
                  <a href="mailto:ksdnorah@gmail.com" style={{ textTransform: 'none', marginLeft: '5px' }} >@ksdnorah@gmail.com</a>
                </motion.p>


              </article>
              <aside>
                <video controls width="600">
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </aside>


            </div>

            <br />

            {/* Card Section */}
            <section className="card">
              <div className="card__circle card__circle1"></div>
              <div className="card__circle card__circle2"></div>

              <div className="card__container bd-container">
                <div className="card__glass">
                  <video src="/Ask Question Landing page.mp4" className="card__iframe" muted loop autoPlay></video>
                  <div className="card__data">
                    <h3 className="card__title">PROJECT</h3>
                    <span className="card__profession">WEBSITE</span>
                  </div>


                </div>

                <div className="card__glass">
                  <video src="/1.mp4" className="card__iframe" muted loop autoPlay></video>
                  <div className="card__data">
                    <h3 className="card__title">PROJECT</h3>
                    <span className="card__profession">THE TAILORS SHOP</span>
                  </div>


                </div>

                <div className="card__glass">
                  <video src="/MO.mp4" className="card__iframe" muted loop autoPlay></video>
                  <div className="card__data">
                    <h3 className="card__title">PROJECT</h3>
                    <span className="card__profession">E -COMMERCE WEBSITE</span>
                  </div>

                </div>
              </div>
            </section>

            <motion.div {...getTransitions(0.7)}>
              <FooterLink goto="/projects">See More Projects</FooterLink>
            </motion.div>

            <br /> <br /> <br />
          </PageWrapper>
        </PageSection>

        {/* Include styles */}
        <style jsx>{`
          :root {
            /*========== Colors ==========*/
            --first-color: #4D49BF;
            --second-color: #05DBF2;
            --body-color: #DFE9F2;
            --title-color: #1C1C22;
            --text-color: #58576B;

            /*========== Font and typography ==========*/
            --body-font: 'Montserrat', sans-serif;
            --normal-font-size: .938rem;
            --h3-font-size: 1.125rem;
            --small-font-size: .75rem;
          }

          @media screen and (min-width: 968px) {
            :root {
              --normal-font-size: 1rem;
              --h3-font-size: 1.25rem;
              --small-font-size: .813rem;
            }
          }

          /*========== BASE ==========*/
          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: var(--body-font);
            font-size: var(--normal-font-size);
          }

          h3 {
            margin: 0;
          }

          a {
            text-decoration: none;
          }

          .bd-container {
            max-width: 968px;
            width: calc(100% - 3rem);
            margin-left: 1.5rem;
            margin-right: 1.5rem;
          }

          /*========== CARD GLASS ==========*/
          .card {
            position: relative;
            overflow: hidden;
            padding: 3rem 0;
            background-color: var(--body-color);
            border: none
          }

          .card__container {
            display: grid;
            gap: 1rem;
            width: 100%;
            
          }

          .card__glass {
            position: relative;
            overflow: hidden;
            text-align: center;
            padding: 2.5rem;
            background: linear-gradient(130deg, rgba(251, 251, 254, .6), rgba(251, 251, 254, .2));
            box-shadow: inset 2px 2px 1px rgba(251, 251, 254, .3), inset -2px -2px 1px rgba(251, 251, 254, .2);
            border-radius: 1.5rem;
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 300px;
            margin: 0 auto;
          }

          .card__iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 1rem;
            object-fit: cover;
          }

          @media screen and (min-width: 768px) {
            .card__glass {
              max-width: 600px;
              height: 400px;
            }
          }

          .card__data {
            margin-bottom: 1.5rem;
            margin-top: 1.5rem;
          }

          .card__title {
            font-size: var(--h3-font-size);
            color: var(--title-color);
            font-weight: 600;
            margin-bottom: .25rem;
          }

          .card__profession {
            font-size: var(--small-font-size);
            color: var(--text-color);
            font-weight: 500;
          }

        

          .card__circle {
            position: absolute;
            width: 250px;
            height: 250px;
            background: linear-gradient(130deg, rgba(77, 73, 191, .8), rgba(255, 255, 255, .2));
            border-radius: 50%;
          }

          .card__circle1 {
            top: 20%;
            left: -20%;
          }

          .card__circle2 {
            bottom: -5%;
            right: -25%;
            background: linear-gradient(130deg, rgba(5, 219, 242, .8), rgba(255, 255, 255, .2));
          }

          @media screen and (min-width: 768px) {
            .bd-container {
              margin-left: auto;
              margin-right: auto;
            }

            .card {
              padding: 0;
            }

            .card__container {
              height: 100vh;
              grid-template-columns: repeat(3, 1fr);
              align-content: center;
            }

            .card__circle1 {
              left: 5%;
              top: 12%;
            }

            .card__circle2 {
              right: 8%;
              bottom: 15%;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }

  article {
    flex: 1;
    padding-right: 2rem; /* Space between article and image */
  }

  aside {
    flex: 1;
    max-width: 100%;
  }

  aside video {
    width: 100%;
    height: auto;
    border-radius: 1rem; /* Optional: rounded corners for the image */
  }

  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #ff69b4;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }

  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a, button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }

  @media (max-width: 585px) {
    .content {
      flex-direction: column;
      align-items: flex-start;
    }

    article {
      padding-right: 0;
      margin-bottom: 2rem;
    }

    aside {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;

export default Home;
