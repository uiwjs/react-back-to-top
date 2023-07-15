import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-back-to-top/README.md';
import '@wcj/dark-mode';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

const Github = MarkdownPreviewExample.Github;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="React Back To Top"
    description="A minimal lightweight react component for adding a nice scroll up (back to top) button with onScroll progress."
    version={`v${VERSION}`}
    disableBackToUp={true}
  >
    <Github href="https://github.com/uiwjs/react-back-to-top" />
  </MarkdownPreviewExample>,
);
