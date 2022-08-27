import React, { useEffect, useMemo, useRef, useState } from 'react';

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

const warpperStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 15,
  right: 15,
  visibility: 'visible',
  opacity: 0,
  transition: 'visibility 0.3s linear 0s, opacity 0.3s linear 0s',
  cursor: 'pointer',
  userSelect: 'none',
};

const svgStyle: React.CSSProperties = {
  display: 'block',
  transform: 'rotate(-90deg)',
};
const circleStyle: React.CSSProperties = {
  transition: 'stroke-dashoffset 0.3s linear 0s',
};
const childStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 12,
};

export default function BackToUp(props: BackToUpProps = {}) {
  const {
    className,
    prefixCls = 'w-back-to-up',
    element = document.documentElement,
    top = 120,
    size = 35,
    strokeWidth = 3,
    smooth = true,
    children,
    ...others
  } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  const style: React.CSSProperties = Object.assign({}, warpperStyle, others.style, { width: size, height: size });
  const $dom = useRef<HTMLDivElement>(null);
  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth]);
  const dasharray = useMemo(() => Math.PI * radius * 2, [radius]);
  const [progress, setProgress] = useState(dasharray);

  const handleScroll = (ev: MouseEventInit) => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    const percentage = scrollTop / (scrollHeight - clientHeight);
    setProgress(dasharray - dasharray * percentage);
    if ($dom.current) {
      $dom.current.style.opacity = scrollTop > top ? '1' : '0';
    }
  };

  useEffect(() => {
    if (element) {
      document.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (document) {
        document.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const goToUp = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    element.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  };

  return (
    <div className={cls} ref={$dom} {...others} onClick={goToUp} style={style}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} focusable="false" style={svgStyle}>
        <circle
          fill="rgb(0 0 0 / 75%)"
          stroke="rgb(200 200 200 / 85%)"
          strokeWidth={strokeWidth}
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          fill="none"
          stroke="rgb(0 0 0 / 50%)"
          strokeWidth={strokeWidth}
          r={radius}
          cx={center}
          cy={center}
          strokeDasharray={dasharray}
          strokeDashoffset={progress}
          style={circleStyle}
        />
      </svg>
      {children && <div style={childStyle}>{children}</div>}
    </div>
  );
}
