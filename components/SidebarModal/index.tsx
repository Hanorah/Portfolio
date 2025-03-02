import React, { useCallback, useEffect } from 'react';
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
  closeShow: () => { },
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
};

const SideBarModal: React.FC<ISideBarModal> = ({ show, closeShow, size, overlayColor, data }) => {
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
            <Header>
              <button onClick={closeShow} className="none-button" type="button">
                <Close />
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); closeShow(); }}>
                Back To Projects
              </a>
            </Header>

            <Content>
              <h3>{data.title}</h3>
              <p className="description">{data.description}</p>
              {data.imageUrl && <StyledImage src={data.imageUrl} alt={data.title} />}

              <SectionTitle>About</SectionTitle>
              {data.about && <p>{data.about}</p>}

              <SectionTitle>Technologies</SectionTitle>
              {data.technologies && (
                <TechList>
                  {data.technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechList>
              )}

              <SectionTitle><Product /> Website</SectionTitle>
              <StyledLink href={data.link} target="_blank" rel="noopener noreferrer">
                {data.link}
              </StyledLink>

              {data.github && (
                <>
                  <SectionTitle><Github /> Github</SectionTitle>
                  <StyledLink href={data.github} target="_blank" rel="noopener noreferrer">
                    {data.github}
                  </StyledLink>
                </>
              )}
            </Content>

            <ProjectButton href={data.link} target="_blank" rel="noopener noreferrer">
              Open Project
            </ProjectButton>
          </div>
        </aside>
      </Wrapper>
    </>
  );
};

const generateSize = (size: ISideBarModal['size']) => {
  if (size === 'sm') return css`width: 21.8em; padding: 1.5rem;`;
  if (size === 'lg') return css`width: 34em;`;
  return css`width: 29em; padding: 2rem;`;
};

const Body = createGlobalStyle`body { overflow: auto; }`;

const Wrapper = styled.div<{ size: ISideBarModal['size'] }>`
  aside {
    background: var(--bg);
    ${(props) => generateSize(props.size)}
    height: 100%;
    max-height: 100vh;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
    padding-bottom: 20px;
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: var(--bg-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.47);
  font-size: 1rem;

  a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
  }

  a:hover {
    color: var(--primary-color);
  }
`;

const Content = styled.div`
  padding: 20px 30px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .description {
    font-size: 1rem;
    color: #fff;
  }
`;

const SectionTitle = styled.h4`
  margin-top: 20px;
  font-size: 1.2rem;
  color:rgb(113, 113, 113) ;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
`;

const TechItem = styled.span`
  background: rgba(255, 255, 255, 0.58);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #333333;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 30vh;
  margin: 10px 0;
  border-radius: 10px;
  object-fit: cover;
`;

const StyledLink = styled.a`
  display: inline-block;
  margin-top: 5px;
  color:rgb(153, 255, 0)
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color:rgb(4, 60, 21);
  }
`;

const ProjectButton = styled.a`
  display: block;
  margin: 20px auto;
  text-align: center;
  background: var(--primary-color);
  color: #fff;
  padding: 12px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
  max-width: 200px;

  &:hover {
    background: var(--primary-dark);
  }
`;

SideBarModal.defaultProps = defaultProps;
export default SideBarModal;
