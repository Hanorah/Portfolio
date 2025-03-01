/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Dribble,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<
  IFooterLink & React.AnchorHTMLAttributes<HTMLParagraphElement>
> = ({ children, goto, ...rest }) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/hanorah"
          aria-label="Go To Okosodo Hanorah Twitter Page"
          title="Twitter Page"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/"
          aria-label="Go To Okosodo Hanorah Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/hanorah"
          aria-label="Go To Okosodo Hanorah Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hanorah"
          aria-label="Go To Okosodo Hanorah Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/hanorah"
          aria-label="Go To Okosodo Hanorah Dribble Page"
          title="Dribbble Page"
        >
          <Dribble />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/hanorah"
          aria-label="Go To Okosodo Hanorah Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
