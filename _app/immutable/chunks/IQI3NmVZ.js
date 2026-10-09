import{_}from"./BHK2V2_w.js";import{_ as d}from"./CZqtKd_s.js";import{_ as n}from"./B7Wbjv4M.js";import{_ as l}from"./CxEj02Ch.js";import{_ as h}from"./DOiK29E3.js";import{_ as m}from"./B94HS_ar.js";import{_ as g}from"./Pyfj3wG_.js";import{_ as M}from"./D6lM313F.js";import{_ as u}from"./Cmr_Ajoo.js";import{_ as v}from"./ICMPSWz_.js";import{_ as $}from"./COz-jKiy.js";import{_ as f}from"./0pd7g2oQ.js";const e='stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"',o=r=>`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${r}</svg>`,j=o(`
  <path d="M3 5h18v14H3z" ${e} />
  <path d="M3 9h18" ${e} />
`),p={music:o(`
    <path d="M9 18V5l12-2v13" ${e} />
    <circle cx="6" cy="18" r="3" ${e} />
    <circle cx="18" cy="16" r="3" ${e} />
  `),code:o(`
    <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" ${e} />
  `),book:o(`
    <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 2.5 0 4.5.5 6 2 1.5-1.5 3.5-2 6-2 1 0 2 .1 3 .4v-13c-1-.3-2-.4-3-.4-2.5 0-4.5.5-6 2z" ${e} />
    <path d="M12 6.5v13" ${e} />
  `),notes:o(`
    <path d="M7 3h7l5 5v13H7z" ${e} />
    <path d="M14 3v5h5" ${e} />
    <path d="M10 13h6M10 17h6" ${e} />
  `),package:o(`
    <path d="M12 2 3 7v10l9 5 9-5V7z" ${e} />
    <path d="M3 7l9 5 9-5M12 12v10" ${e} />
  `),graph:o(`
    <circle cx="5" cy="6" r="2" ${e} />
    <circle cx="19" cy="6" r="2" ${e} />
    <circle cx="12" cy="18" r="2" ${e} />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" ${e} />
  `),editor:o(`
    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z" ${e} />
    <path d="M14 6l3 3" ${e} />
  `),preview:o(`
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" ${e} />
    <circle cx="12" cy="12" r="3" ${e} />
  `),chat:o(`
    <path d="M12 3c5 0 9 3.6 9 8s-4 8-9 8c-1 0-2-.1-3-.4L4 21l1.4-3.7C4 16 3 14.1 3 11c0-4.4 4-8 9-8z" ${e} />
  `),comic:o(`
    <path d="M4 5h9v14H4z" ${e} />
    <path d="M15 7h5v12h-5z" ${e} />
    <path d="M7 9h3M7 12h3" ${e} />
  `),prism:o(`
    <path d="M12 4 4 19h16z" ${e} />
    <path d="M12 4v15M7.8 11.5h8.4" ${e} />
  `),lyrics:o(`
    <path d="M4 5h16v11H9l-5 4z" ${e} />
    <path d="M8 9h8M8 12h5" ${e} />
  `)},b=Object.assign({"./(projects)/CBZReader/+page.md":_,"./(projects)/HTMLChat/+page.md":d,"./(projects)/HTMLEditor/+page.md":n,"./(projects)/HTMLNotes/+page.md":l,"./(projects)/HTMLPlayer/+page.md":h,"./(projects)/HTMLPreview/+page.md":m,"./(projects)/HTMLReader/+page.md":g,"./(projects)/HTMLRunner/+page.md":M,"./(projects)/HTMLTrack/+page.md":u,"./(projects)/HTMLVisualizer/+page.md":v,"./(projects)/LRCGetter/+page.md":$,"./(projects)/Prism/+page.md":f}),L=(r,s)=>{if(s.slug)return s.slug;const a=r.match(/\(projects\)\/([^/]+)\/\+page\.md$/);return(a==null?void 0:a[1])??""},c=Object.entries(b).reduce((r,[s,a])=>{const t=a.metadata;if(!t||t.hidden)return r;const i=L(s,t);return!i||!t.title||r.push({slug:i,name:t.title,tagline:t.tagline??"",summary:t.summary??t.excerpt??t.description??"",repo:t.repo??"",live:t.live??null,beta:t.beta??null,tech:t.tech??[],license:t.license??"MIT",featured:t.featured??!1,kind:t.kind??"tool",icon:t.icon&&p[t.icon]?p[t.icon]:j,screenshots:t.screenshots??[]}),r},[]).sort((r,s)=>!!r.featured!=!!s.featured?r.featured?-1:1:r.name.localeCompare(s.name)),B=c.find(r=>r.featured)??c[0],O=c;function E(r){const s=r.toLowerCase();return c.find(a=>a.slug.toLowerCase()===s)}export{B as f,E as g,O as s};
