React Back To Top
===

[![Build & Deploy](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-back-to-top/badges.svg)](https://uiwjs.github.io/react-back-to-top/coverage/lcov-report/)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-back-to-top.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-back-to-top)
[![NPM Version](https://img.shields.io/npm/v/@uiw/react-back-to-top.svg)](https://www.npmjs.com/package/@uiw/react-back-to-top)

A minimal lightweight react component for adding a nice scroll up (back to top) button with onScroll progress.

## Install

Not dependent on uiw.

```bash
npm install @uiw/react-back-to-top --save
```

## Usage

```jsx mdx:preview
import React from "react";
import BackToTop from '@uiw/react-back-to-top';

export default function App() {
  return (
    <div className="container">
      <span style={{ color: 'red' }}>
        Please check the button in the lower right corner of your web page.
      </span>
      <BackToTop>Top</BackToTop>
    </div>
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