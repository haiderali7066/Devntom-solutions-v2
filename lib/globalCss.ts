/* ─────────────────────────────────────────────
   DEVNTOM — Global CSS
   Injected once via <style dangerouslySetInnerHTML>
   in the root layout.tsx.
   ───────────────────────────────────────────── */
import { SKY } from "@/lib/tokens";

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { cursor: auto; overflow-x: hidden; }
  ::selection { background: rgba(14,165,233,.28); color: #fff; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: ${SKY}; border-radius: 3px; }

  @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.78)} }
  @keyframes scanln { 0%{top:-3px} 100%{top:101%} }
  @keyframes grain  {
    0%,100%{transform:translate(0,0)}  10%{transform:translate(-2%,-3%)}
    30%{transform:translate(3%,-1%)}   50%{transform:translate(-1%,3%)}
    70%{transform:translate(-3%,1%)}   90%{transform:translate(2%,-2%)}
  }

  /* Film-grain overlay — triggered by .grain-layer on a fixed div */
  .grain-layer::after {
    content:''; position:fixed; inset:-50%; width:200%; height:200%;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E");
    animation: grain .8s steps(2) infinite;
    pointer-events:none; z-index:9990; opacity:.4;
  }
`;
