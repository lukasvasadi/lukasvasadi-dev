import {
	c as create_ssr_component,
	v as validate_component,
	e as escape,
	a as subscribe
} from '../../chunks/ssr.js'
import { t as title } from '../../chunks/config.js'
import { I as Icon } from '../../chunks/Icon.js'
import { B as BROWSER, w as writable } from '../../chunks/index.js'
const browser = BROWSER
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'
			}
		]
	]
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'moon' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`
			}
		}
	)}`
})
const Moon$1 = Moon
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '4' }],
		['path', { d: 'M12 2v2' }],
		['path', { d: 'M12 20v2' }],
		['path', { d: 'm4.93 4.93 1.41 1.41' }],
		['path', { d: 'm17.66 17.66 1.41 1.41' }],
		['path', { d: 'M2 12h2' }],
		['path', { d: 'M20 12h2' }],
		['path', { d: 'm6.34 17.66-1.41 1.41' }],
		['path', { d: 'm19.07 4.93-1.41 1.41' }]
	]
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'sun' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`
			}
		}
	)}`
})
const Sun$1 = Sun
const footer_svelte_svelte_type_style_lang = ''
const css$4 = {
	code: 'footer.svelte-k2ae0s{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-k2ae0s{color:var(--text-2)}',
	map: null
}
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4)
	return ` <footer class="svelte-k2ae0s"><p class="svelte-k2ae0s">${escape(title)} © ${escape(
		/* @__PURE__ */ new Date().getFullYear()
	)}</p> </footer>`
})
const userTheme = browser
const theme = writable(userTheme)
const toggle_svelte_svelte_type_style_lang = ''
const css$3 = {
	code: 'button.svelte-114mtci.svelte-114mtci{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-114mtci>.svelte-114mtci{display:flex;gap:var(--size-2)}',
	map: null
}
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $theme, $$unsubscribe_theme
	$$unsubscribe_theme = subscribe(theme, (value) => ($theme = value))
	$$result.css.add(css$3)
	$$unsubscribe_theme()
	return `<button aria-label="Toggle theme" class="svelte-114mtci">${
		$theme === 'dark'
			? `<div class="svelte-114mtci">${validate_component(Sun$1, 'Sun').$$render(
					$$result,
					{},
					{},
					{}
			  )} <span data-svelte-h="svelte-30gjga">Light</span></div>`
			: `<div class="svelte-114mtci">${validate_component(Moon$1, 'Moon').$$render(
					$$result,
					{},
					{},
					{}
			  )} <span data-svelte-h="svelte-397x2m">Dark</span></div>`
	} </button>`
})
const header_svelte_svelte_type_style_lang = ''
const css$2 = {
	code: "nav.svelte-bs11bt{padding-block:var(--size-7);display:flex;flex-direction:row;align-items:center;justify-content:space-between}.title.svelte-bs11bt{font-family:'Fira Code';font-size:22px}a.svelte-bs11bt{color:inherit;text-decoration:none}@media(min-width: 768px){nav.svelte-bs11bt{justify-content:space-between}}",
	map: null
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2)
	return `<nav class="svelte-bs11bt"> <a href="/" class="title svelte-bs11bt"><b>${escape(
		title
	)}</b></a>     ${validate_component(Toggle, 'Toggle').$$render($$result, {}, {}, {})} </nav>`
})
const transition_svelte_svelte_type_style_lang = ''
const css$1 = {
	code: '.transition.svelte-vcdv4c{height:100%}',
	map: null
}
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { url } = $$props
	if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url)
	$$result.css.add(css$1)
	return `<div class="transition svelte-vcdv4c">${slots.default ? slots.default({}) : ``}</div>`
})
const openProps_min = ''
const normalize_min = ''
const buttons_min = ''
const app = ''
const _layout_svelte_svelte_type_style_lang = ''
const css = {
	code: '.layout.svelte-sdkn5t{height:100%;display:grid;grid-template-rows:auto 1fr auto}main.svelte-sdkn5t{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-sdkn5t{padding-inline:0}}',
	map: null
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data)
	$$result.css.add(css)
	return `<div class="layout svelte-sdkn5t"> ${validate_component(Header, 'Header').$$render(
		$$result,
		{},
		{},
		{}
	)} <main class="svelte-sdkn5t"> ${validate_component(Transition, 'PageTransition').$$render(
		$$result,
		{ url: data.url },
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`
			}
		}
	)}</main>  ${validate_component(Footer, 'Footer').$$render($$result, {}, {}, {})} </div>`
})
export { Layout as default }
