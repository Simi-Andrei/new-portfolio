import { useEffect, useState } from "react";

export const CatIcon = ({ cursor, svgContainerRef, mouseOnContainer }) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (svgContainerRef.current && cursor.x !== null && cursor.y !== null) {
      const containerRect = svgContainerRef.current.getBoundingClientRect();

      if (containerRect.width > 0 && containerRect.height > 0) {
        const cxPercentage = (cursor.x / containerRect.width) * 100;
        const cyPercentage = (cursor.y / containerRect.height) * 100;
        setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
      }
    }
  }, [cursor, svgContainerRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="h-[5.5rem] w-[5.5rem] hidden lg:block"
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
        <g id="i"></g> <g id="j"></g> <g id="k"></g> <g id="l"></g>
        <g id="m">
          <defs>
            <radialGradient
              id="redGradient"
              gradientUnits="userSpaceOnUse"
              r="35%"
              cx={gradientCenter.cx}
              cy={gradientCenter.cy}
            >
              {mouseOnContainer && <stop stopColor="#ec003f" />}
              <stop offset={1} stopColor="#404040" />
            </radialGradient>
          </defs>
          <path
            stroke="url(#redGradient)"
            strokeWidth={0.8}
            className="fill-neutral-200 dark:fill-neutral-950/50"
            d="M58.95,21.79l-5.68-3.78c-.49-.33-1.12-.32-1.6,.02-.48,.34-.69,.93-.54,1.5l1.61,6.25-3.87,2.19-1.35-2.38c-.5-.88-1.44-1.43-2.45-1.43h-7.29l1.28-7.77c.09-.55-.07-1.11-.43-1.54-.36-.43-.89-.67-1.45-.67H6.79c-.56,0-1.09,.24-1.45,.67s-.52,.99-.43,1.54l1.4,8.51-1.88,2.52c-.66,.89-.56,2.14,.24,2.91l6.58,6.35c.68,.66,1.57,1.02,2.52,1.02h.57l6.64,8.04v2.01c0,1.14,.92,2.06,2.06,2.06h26.87c1.01,0,2.02-.72,2.36-1.67,1.27-3.59,2.57-7.79,3.82-11.85,1.24-4.04,2.53-8.21,3.78-11.75,.35-.99-.04-2.17-.92-2.75Zm-1.58,1.35l-2.85,1.61-1.09-4.23,3.93,2.61Zm-20.32-6.96l-1.07,6.5-4.84-6.5h5.91Zm-24.23,0l-4.85,6.51-1.1-6.51h5.95Zm-.19,19.04l-6.56-6.33c-.07-.07-.08-.19-.02-.27l2.13-2.86,7.14-9.58h13.33l9.38,12.58-6.69,6.46-5.22-6.34c-.19-.23-.47-.36-.77-.36h-6.72c-.3,0-.58,.13-.77,.36l-5.22,6.34Zm10.14-4.71l-.79,.73-.79-.73h1.58Zm-1.79,12.08l-4.04-4.9h4.04v4.9Zm-6.15-6.9l3.89-4.73,2.58,2.37c.38,.35,.97,.35,1.35,0l2.58-2.37,3.89,4.73H14.83Zm8.15,10.23v-8.23h6.25l-6.25,8.23Zm27.41,1.55c-.05,.15-.31,.33-.47,.33l-25.81-.06,7.9-10.39,8.05-7.77c.36-.35,.41-.91,.11-1.32l-1.58-2.11h6.47c.29,0,.57,.16,.71,.42l1.84,3.25h0l5.42,9.57c-.88,2.83-1.77,5.62-2.64,8.09Zm3.79-11.77c-.11,.35-.22,.71-.33,1.06l-4-7.06,4.53-2.57,3.11-1.76c-1.11,3.24-2.22,6.8-3.31,10.33Z"
          ></path>
        </g>
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
