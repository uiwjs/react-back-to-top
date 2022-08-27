React Back To Top
===

[![Build & Deploy](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-back-to-top/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-back-to-top/badges.svg)](https://uiwjs.github.io/react-back-to-top/coverage/lcov-report/)

A minimal lightweight react component for adding a nice scroll up (back to top) button with onScroll progress.

## Install

Not dependent on uiw.

```bash
npm install @uiw/react-codemirror --save
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
  element?: Element;
  /** Classname to add/override styling (note, !important for overrides might be needed) */
  className?: string;
  /** Object to add/override styling */
  style?: React.CSSProperties;
  /** Height after page scroll to be visible @default 20 **/
  top?: number;
  /** The Button width @default 35 */
  width?: number;
  /** The Button height @default 35 */
  height?: number;
}
export default function BackToUp(props?: BackToUpProps): JSX.Element;

```

## Development

1. Install

```bash
npm install
```

2. Dependencies in the installation package and example

```bash
npm run hoist
```

3. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-back-to-top
npm run watch  # Real-time compilation 📦 @uiw/react-back-to-top
```

4. Run Document Website Environment:

```bash
npm run start
```

5. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

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