import { useEffect, useState } from "react";

export const ButterflyIcon = ({
  cursor,
  svgContainerRef,
  mouseOnContainer,
}) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (svgContainerRef.current && cursor.x !== null && cursor.y !== null) {
      const containerRect = svgContainerRef.current.getBoundingClientRect();

      const cxPercentage = (cursor.x / containerRect.width) * 100;
      const cyPercentage = (cursor.y / containerRect.height) * 100;
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, svgContainerRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="h-40 w-40"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="a"></g> <g id="b"></g> <g id="c"></g> <g id="d"></g>
        <g id="e"></g> <g id="f"></g> <g id="g"></g> <g id="h"></g>
        <g id="i">
          <defs>
            <radialGradient
              id="emeraldGradient"
              gradientUnits="userSpaceOnUse"
              r="25%"
              cx={gradientCenter.cx}
              cy={gradientCenter.cy}
            >
              {mouseOnContainer && <stop stopColor="#009689" />}
              <stop offset={1} stopColor="#404040" />
            </radialGradient>
          </defs>
          <path
            stroke="url(#emeraldGradient)"
            className="fill-neutral-950/50"
            d="M57.96,11.65h-7.36c-.87,0-1.71,.24-2.45,.68l-9.64,5.83-6.08-2.83c-.27-.12-.58-.12-.84,0l-6.08,2.83-9.64-5.83c-.74-.45-1.59-.68-2.45-.68H6.04c-1.13,0-2.04,.92-2.04,2.04v9.58c0,.93,.38,1.84,1.05,2.49,.03,.03,.07,.07,.11,.09l8.68,6.28-1.67,11.83c-.13,1.05,.43,2.06,1.39,2.5l12.27,5.72c.51,.24,1.09,.23,1.59-.04,.5-.26,.84-.73,.94-1.29l.74-4.41,1.48,.96c.86,.56,1.98,.56,2.84,0l1.48-.96,.74,4.41c.09,.56,.44,1.03,.94,1.29,.26,.14,.55,.21,.83,.21,.26,0,.52-.06,.76-.17l12.27-5.72c.96-.45,1.52-1.45,1.39-2.52l-1.67-11.81,8.68-6.28s.08-.06,.11-.09c.67-.65,1.05-1.56,1.05-2.49V13.69c0-1.13-.92-2.04-2.04-2.04Zm-20.85,35.9l-4.01-23.78,14.67-8.87-10.65,32.65Zm-10.22,0L16.24,14.9l14.66,8.87-4.01,23.78Zm5.11-30.21l4.44,2.07-4.44,2.69-4.44-2.69,4.44-2.07ZM6.4,24.28c-.26-.27-.4-.64-.4-1.01l.04-9.62h7.36c.12,0,.23,.08,.35,.1l6.83,20.93L6.4,24.28Zm7.75,19.95l1.52-10.74,6,4.5,3.87,11.85-11.13-5.19c-.17-.08-.27-.26-.25-.43Zm18.17,1.51c-.2,.13-.46,.13-.65,0l-2.21-1.44,2.53-15.02,2.53,15.02-2.21,1.44Zm17.27-1.08l-11.13,5.19,3.87-11.85,6-4.5,1.51,10.72c.02,.19-.08,.37-.25,.45Zm8.41-21.39c0,.37-.15,.74-.4,1.01l-14.19,10.4,6.83-20.93c.12-.02,.23-.1,.35-.1l7.41,.04v9.58Z"
          ></path>
        </g>
        <g id="j"></g> <g id="k"></g> <g id="l"></g> <g id="m"></g>
        <g id="n"></g> <g id="o"></g> <g id="p"></g> <g id="q"></g>
        <g id="r"></g> <g id="s"></g> <g id="t"></g> <g id="u"></g>
        <g id="v"></g> <g id="w"></g> <g id="x"></g> <g id="y"></g>
        <g id="a`"></g> <g id="aa"></g> <g id="ab"></g> <g id="ac"></g>
        <g id="ad"></g> <g id="ae"></g> <g id="af"></g> <g id="ag"></g>
        <g id="ah"></g> <g id="ai"></g> <g id="aj"></g> <g id="ak"></g>
        <g id="al"></g> <g id="am"></g> <g id="an"></g> <g id="ao"></g>
        <g id="ap"></g> <g id="aq"></g> <g id="ar"></g> <g id="as"></g>
        <g id="at"></g> <g id="au"></g> <g id="av"></g> <g id="aw"></g>
        <g id="ax"></g>
      </g>
    </svg>
  );
};
