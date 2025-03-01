import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Close, Github, Product } from '../Icons';

interface ISideBarModal {
  show: boolean;
  closeShow: () => void;
  size?: 'sm' | 'lg' | 'md';
  overlayColor?: string;
  data?: {
    title: string;
    description?: string;
    technologies?: string[];
    github?: string;
    imageUrl?: string;
    about?: string;
    link?: string;
  };
}

const defaultProps: ISideBarModal = {
  show: false,
  closeShow: () => {},
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
};

const SideBarModal: React.FC<ISideBarModal> = ({
  show,
  closeShow,
  size,
  overlayColor,
  data,
}) => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeShow();
      }
    },
    [closeShow]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  if (!show || !data) return null;

  return (
    <>
      <Body />
      <Wrapper size={size} data-testid="sidebarmodal">
        <Overlay overlayColor={overlayColor} onClick={closeShow} />
        <aside className="fadeInLeft">
          <div className="pos__relative">
            <div className="d-flex justify-content-between header">
              <button onClick={closeShow} className="none-button" type="button">
                <Close />
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeShow();
                }}
              >
                Back To Projects.
              </a>
            </div>

            <div className="main__post">
              <h3 className="mt-4">{data.title}</h3>
              <p className="te mb-4">{data.description}</p>
              <img src={data.imageUrl} alt={data.title} />
              <h4>About</h4>
              {data.about && <p>{data.about}</p>}
              <h4>Technologies</h4>
              {data.technologies && (
                <p className="d-flex flex-wrap">
                  {data.technologies.map((tech, index) => (
                    <span key={index} className="d-block mb-1">
                      {tech}
                    </span>
                  ))}
                </p>
              )}
              <h4>
                <Product /> Website
              </h4>
              <p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  {data.link}
                </a>
              </p>
              {data.github && (
                <>
                  <h4>
                    <Github /> Github
                  </h4>
                  <p>
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.github}
                    </a>
                  </p>
                </>
              )}
            </div>
            <a
              href={data.link}
              className="open__project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Project
            </a>
          </div>
        </aside>
      </Wrapper>
    </>
  );
};

const generateSize = (size: ISideBarModal['size']) => {
  if (size === 'sm')
    return css`
      width: 21.8em;
      padding: 1.5rem;
    `;
  if (size === 'lg')
    return css`
      width: 34em;
    `;
  return css`
    width: 29em;
    padding: 2rem;
  `;
};

const Body = createGlobalStyle`body { overflow: hidden; }`;

const Wrapper = styled.div<{ size: ISideBarModal['size'] }>`
  aside {
    background: var(--bg);
    ${(props) => generateSize(props.size)}
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
  }
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${(props) => props.overlayColor || 'rgba(0, 0, 0, 0.8)'};
`;

SideBarModal.defaultProps = defaultProps;
export default SideBarModal;
