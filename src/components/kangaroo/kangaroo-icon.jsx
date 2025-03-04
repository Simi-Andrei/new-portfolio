import { useEffect, useState } from "react";

export const KangarooIcon = ({ cursor, svgContainerRef, mouseOnContainer }) => {
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
      className="h-[5.5rem] w-[5.5rem] hidden md:block"
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
        <g id="m"></g> <g id="n"></g> <g id="o"></g> <g id="p"></g>
        <g id="q"></g> <g id="r"></g> <g id="s"></g> <g id="t"></g>
        <g id="u"></g> <g id="v"></g> <g id="w"></g> <g id="x"></g>
        <g id="y"></g> <g id="a`"></g>
        <g id="aa">
          <defs>
            <radialGradient
              id="amberGradient"
              gradientUnits="userSpaceOnUse"
              r="35%"
              cx={gradientCenter.cx}
              cy={gradientCenter.cy}
            >
              {mouseOnContainer && <stop stopColor="#e17100" />}
              <stop offset={1} stopColor="#404040" />
            </radialGradient>
          </defs>
          <path
            stroke="url(#amberGradient)"
            className="fill-neutral-200 dark:fill-neutral-950/50"
            strokeWidth={0.8}
            d="M58.83,12.69l-9.61-7.77c-.23-.15-.46-.23-.66-.25-.42-.05-.83,.09-1.15,.37-.31,.28-.48,.68-.48,1.1l.02,2.14c-.88,.08-1.64,.7-1.89,1.56l-3.76,12.95-14.45,.51c-1.02,.04-1.91,.67-2.28,1.62l-10.42,26.92-9.5,5.16c-.5,.28-.76,.86-.62,1.42s.64,.95,1.22,.95h13.76c.26,0,.51-.1,.7-.28l4.02-3.91,3.36,3.22c.65,.63,1.51,.97,2.41,.97h14.94c.58,0,1.08-.37,1.25-.93,.17-.55-.04-1.15-.52-1.47l-8.35-5.69-1.19-6.8,8.6-8.81,7.16,2.96c.52,.24,1.12,.17,1.58-.18,.45-.35,.68-.91,.58-1.47l-1.59-9.69,.93-8.2h5.09c1.11,0,2.01-.9,2.01-2.01v-1.95c0-.92-.78-1.96-1.02-2.26-.04-.05-.09-.1-.15-.15Zm-8.65-4.43h-1.23v-1.01l1.23,1.01Zm-3.2,2.12c.02-.07,.09-.12,.16-.12h4.74l-1.77,15.61-6.83-2.72,3.71-12.77Zm-3.62,14.96l5.83,2.32-4.57,4.71-1.26-7.03Zm-20.61,27.96l-3.6,3.5-3.08-4.41,8.31-21.47-1.64,22.39Zm-8.11,.52l2.45,3.51H8.18l6.47-3.51Zm10.11-.47l1.14-15.63,6.63,1.46,2.3,12.27-6.4,5.43-3.67-3.52Zm6.22,3.98l5-4.24,6.23,4.24h-11.23Zm4.13-15.21l-.74-3.96c-.07-.39-.38-.71-.77-.79l-7.56-1.66,.76-10.35c.05-.02,.07-.09,.12-.09l14.31-.5,1.68,9.36-7.8,7.99Zm10.62-8.02l4.55-4.7,1.16,7.06-5.71-2.36Zm12.25-17.05h-4.86l.67-5.87,3.69,2.98c.26,.34,.5,.78,.52,.93v1.96Z"
          ></path>
        </g>
        <g id="ab"></g> <g id="ac"></g> <g id="ad"></g> <g id="ae"></g>
        <g id="af"></g> <g id="ag"></g> <g id="ah"></g> <g id="ai"></g>
        <g id="aj"></g> <g id="ak"></g> <g id="al"></g> <g id="am"></g>
        <g id="an"></g> <g id="ao"></g> <g id="ap"></g> <g id="aq"></g>
        <g id="ar"></g> <g id="as"></g> <g id="at"></g> <g id="au"></g>
        <g id="av"></g> <g id="aw"></g> <g id="ax"></g>
      </g>
    </svg>
  );
};
