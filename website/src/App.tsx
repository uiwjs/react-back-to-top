import GitHubCorners from '@uiw/react-github-corners';
import styled from 'styled-components';
import logo from './logo.svg';
import MarkdownPreview from './Markdown';

const Warpper = styled.div`
  padding-bottom: 12rem;
  padding: 0 1rem;
`;

const Header = styled.header`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  padding-top: 3rem;
  text-align: center;
  h1 sup {
    position: absolute;
    font-size: 0.5rem;
  }
`;

const Logo = styled.img`
  max-width: 12rem;
`;

const Info = styled.p`
  font-size: 1.5rem;
  max-width: 24rem;
`;

export default function App() {
  const version = VERSION;
  return (
    <Warpper className="wmde-markdown-color">
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-back-to-top" />
      <Header>
        <Logo src={logo} alt="react logo" />
        <h1>
          React Back To Top <sup>{version}</sup>
        </h1>
        <Info>
          A minimal lightweight react component for adding a nice scroll up (back to top) button with onScroll progress.
        </Info>
      </Header>
      <MarkdownPreview />
    </Warpper>
  );
}
