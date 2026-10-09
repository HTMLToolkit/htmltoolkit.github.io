const stroke = `stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`

const svg = (inner: string) =>
  `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`

export const genericIcon = svg(`
  <path d="M3 5h18v14H3z" ${stroke} />
  <path d="M3 9h18" ${stroke} />
`)

export const projectIcons: Record<string, string> = {
  music: svg(`
    <path d="M9 18V5l12-2v13" ${stroke} />
    <circle cx="6" cy="18" r="3" ${stroke} />
    <circle cx="18" cy="16" r="3" ${stroke} />
  `),
  code: svg(`
    <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" ${stroke} />
  `),
  book: svg(`
    <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 2.5 0 4.5.5 6 2 1.5-1.5 3.5-2 6-2 1 0 2 .1 3 .4v-13c-1-.3-2-.4-3-.4-2.5 0-4.5.5-6 2z" ${stroke} />
    <path d="M12 6.5v13" ${stroke} />
  `),
  notes: svg(`
    <path d="M7 3h7l5 5v13H7z" ${stroke} />
    <path d="M14 3v5h5" ${stroke} />
    <path d="M10 13h6M10 17h6" ${stroke} />
  `),
  package: svg(`
    <path d="M12 2 3 7v10l9 5 9-5V7z" ${stroke} />
    <path d="M3 7l9 5 9-5M12 12v10" ${stroke} />
  `),
  graph: svg(`
    <circle cx="5" cy="6" r="2" ${stroke} />
    <circle cx="19" cy="6" r="2" ${stroke} />
    <circle cx="12" cy="18" r="2" ${stroke} />
    <path d="M7 6h10M6 8l5 8M18 8l-5 8" ${stroke} />
  `),
  editor: svg(`
    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z" ${stroke} />
    <path d="M14 6l3 3" ${stroke} />
  `),
  preview: svg(`
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" ${stroke} />
    <circle cx="12" cy="12" r="3" ${stroke} />
  `),
  chat: svg(`
    <path d="M12 3c5 0 9 3.6 9 8s-4 8-9 8c-1 0-2-.1-3-.4L4 21l1.4-3.7C4 16 3 14.1 3 11c0-4.4 4-8 9-8z" ${stroke} />
  `),
  comic: svg(`
    <path d="M4 5h9v14H4z" ${stroke} />
    <path d="M15 7h5v12h-5z" ${stroke} />
    <path d="M7 9h3M7 12h3" ${stroke} />
  `),
  prism: svg(`
    <path d="M12 4 4 19h16z" ${stroke} />
    <path d="M12 4v15M7.8 11.5h8.4" ${stroke} />
  `),
  lyrics: svg(`
    <path d="M4 5h16v11H9l-5 4z" ${stroke} />
    <path d="M8 9h8M8 12h5" ${stroke} />
  `),
}
