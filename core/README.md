React Back To Top
===

[![Build & Deploy](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-back-to-top/badges.svg)](https://uiwjs.github.io/react-back-to-top/coverage/lcov-report/)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-back-to-top.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-back-to-top)
[![NPM Version](https://img.shields.io/npm/v/@uiw/react-back-to-top.svg)](https://www.npmjs.com/package/@uiw/react-back-to-top)

A minimal lightweight react component for adding a nice scroll up (back to top) button with onScroll progress.

[![React Back To Top](https://user-images.githubusercontent.com/1680273/187046411-677c24c4-043a-4505-b2ef-6bd1eb7ad311.png)](https://uiwjs.github.io/react-back-to-top/)

## Install

Not dependent on uiw.

```bash
npm install @uiw/react-back-to-top --save
```

## Usage

```jsx mdx:preview
import React from "react";
import BackToUp from '@uiw/react-back-to-top';

export default function App() {
  return (
    <div className="container">
      <span style={{ color: 'red' }}>
        Please check the button in the lower right corner of your web page.
      </span>
      <BackToUp>Top</BackToUp>
    </div>
  );
}
```

Support adding `<BackToUp />` buttons to the partial scrollable area.

```jsx mdx:preview
import React, { useRef, useEffect, useState } from "react";
import BackToUp from '@uiw/react-back-to-top';
import styled from 'styled-components';

const Warpper = styled.div`
  overflow: auto;
  white-space: normal;
  width: 300px;
  height: 300px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background: #00000038;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #595959;
  }
  p {
    display: inline;
    background: rgba(0, 0, 0, 0.12);
    color: transparent;
  }
`;

export default function App() {
  const $dom = useRef(null);
  const [element, setElement]= useState();
  useEffect(() => setElement($dom.current), [])
  return (
    <Warpper ref={$dom}>
      <h1>React simple scroll up with onScroll progress</h1>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <h2>Scroll down ↓</h2>
      <p>Declarative views make your code more predictable and easier to debug.</p>
      <h2 style={{ height: 1200 }}>Scroll down ↓</h2>
      <p>Build encapsulated components that manage their own state, then compose them to make complex UIs. </p>
      <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
      <BackToUp top={0} element={$dom.current} style={{ float: 'right' }}>Top</BackToUp>
    </Warpper>
  );
}
```

Custom button style.

```jsx mdx:preview
import React, { useRef, useEffect, useState } from "react";
import BackToUp from '@uiw/react-back-to-top';
import styled from 'styled-components';

const Warpper = styled.div`
  overflow: auto;
  white-space: normal;
  width: 300px;
  height: 300px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background: #00000038;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #595959;
  }
  p {
    display: inline;
    background: rgba(0, 0, 0, 0.12);
    color: transparent;
  }
`;

export default function App() {
  const $dom = useRef(null);
  const [element, setElement]= useState();
  useEffect(() => setElement($dom.current), [])
  return (
    <Warpper ref={$dom}>
      <h1>React simple scroll up with onScroll progress</h1>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <h2>Scroll down ↓</h2>
      <p>Declarative views make your code more predictable and easier to debug.</p>
      <h2>Scroll down ↓</h2>
      <p>Build encapsulated components that manage their own state, then compose them to make complex UIs. </p>
      <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
      <BackToUp top={0} hideProgress element={$dom.current} style={{ float: 'right' }}>
        <div style={{ border: '1px solid red', color: 'red', background: '#ffeb3b' }}>
          Top
        </div>
      </BackToUp>
    </Warpper>
  );
}
```

## Props

```ts
import React from 'react';
export interface BackToUpProps extends React.AllHTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  /** Scroll bar area @default document.documentElement **/
  element?: HTMLElement;
  /** Whether to use smooth scrolling* @default true */
  smooth?: boolean;
  /** Classname to add/override styling (note, !important for overrides might be needed) */
  className?: string;
  /** Object to add/override styling */
  style?: React.CSSProperties;
  /** Height after page scroll to be visible @default 120 **/
  top?: number;
  /** The Button width & height @default 35 */
  size?: number;
  /** the width of the progress bar */
  strokeWidth?: number;
  /** hide progress icon */
  hideProgress?: boolean;
}
export default function BackToUp(props?: BackToUpProps): JSX.Element;
```

## Development

1. Install

```bash
npm install
```

2. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-back-to-top
npm run watch  # Real-time compilation 📦 @uiw/react-back-to-top
```

3. Run Document Website Environment:

```bash
npm run start
```

4. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```
npm run test
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-back-to-top/graphs/contributors">
  <img src="https://uiwjs.github.io/react-back-to-top/CONTRIBUTORS.svg" />
</a>

Made with [github-action](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.