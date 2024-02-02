import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex, escapeSvelte } from 'mdsvex'
import shiki from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.svelte.md', '.md', '.svx'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({
        theme: 'one-dark-pro',
        lang: ['ps1', 'zsh', 'bash', 'cmake', 'c', 'cpp', 'python', 'julia', 'js']
      })
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
      return `{@html \`${html}\` }`
    }
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter()
  }
}

export default config
