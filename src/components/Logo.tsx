/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

export function Logo(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="10%"
      height="10%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="0" cy="0" r="0" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="15" ry="4.5" />
        <ellipse rx="15" ry="4.5" transform="rotate(60)" />
        <ellipse rx="15" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}
