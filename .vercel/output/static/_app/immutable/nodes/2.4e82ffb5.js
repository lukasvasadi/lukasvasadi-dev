import { s as B, n as I } from '../chunks/scheduler.ae1baad1.js'
import {
	S as D,
	i as N,
	g as v,
	s as z,
	B as U,
	h as g,
	f as p,
	c as j,
	j as E,
	k as d,
	x as h,
	a as O,
	C as F,
	m as S,
	n as P,
	o as C
} from '../chunks/index.0e1198e2.js'
import { e as L } from '../chunks/each.e59479a4.js'
import { f as M } from '../chunks/utils.2fdf1f5e.js'
import { t as G } from '../chunks/config.f4ded0b2.js'
async function H({ fetch: r }) {
	return { posts: await (await r('api/posts')).json() }
}
const Y = Object.freeze(
	Object.defineProperty({ __proto__: null, load: H }, Symbol.toStringTag, { value: 'Module' })
)
function q(r, t, l) {
	const o = r.slice()
	return (o[1] = t[l]), o
}
function x(r) {
	let t,
		l,
		o = r[1].title + '',
		n,
		f,
		s,
		e,
		i = M(r[1].date) + '',
		a,
		m,
		_,
		y = r[1].description + '',
		b,
		k
	return {
		c() {
			;(t = v('li')),
				(l = v('a')),
				(n = S(o)),
				(s = z()),
				(e = v('p')),
				(a = S(i)),
				(m = z()),
				(_ = v('p')),
				(b = S(y)),
				(k = z()),
				this.h()
		},
		l(u) {
			t = g(u, 'LI', { class: !0 })
			var c = E(t)
			l = g(c, 'A', { href: !0, class: !0 })
			var T = E(l)
			;(n = P(T, o)), T.forEach(p), (s = j(c)), (e = g(c, 'P', { class: !0 }))
			var w = E(e)
			;(a = P(w, i)), w.forEach(p), (m = j(c)), (_ = g(c, 'P', { class: !0 }))
			var A = E(_)
			;(b = P(A, y)), A.forEach(p), (k = j(c)), c.forEach(p), this.h()
		},
		h() {
			d(l, 'href', (f = r[1].slug)),
				d(l, 'class', 'title svelte-1avzfmh'),
				d(e, 'class', 'date svelte-1avzfmh'),
				d(_, 'class', 'description svelte-1avzfmh'),
				d(t, 'class', 'post svelte-1avzfmh')
		},
		m(u, c) {
			O(u, t, c),
				h(t, l),
				h(l, n),
				h(t, s),
				h(t, e),
				h(e, a),
				h(t, m),
				h(t, _),
				h(_, b),
				h(t, k)
		},
		p(u, c) {
			c & 1 && o !== (o = u[1].title + '') && C(n, o),
				c & 1 && f !== (f = u[1].slug) && d(l, 'href', f),
				c & 1 && i !== (i = M(u[1].date) + '') && C(a, i),
				c & 1 && y !== (y = u[1].description + '') && C(b, y)
		},
		d(u) {
			u && p(t)
		}
	}
}
function J(r) {
	let t, l, o, n
	document.title = G
	let f = L(r[0].posts),
		s = []
	for (let e = 0; e < f.length; e += 1) s[e] = x(q(r, f, e))
	return {
		c() {
			;(t = v('meta')), (l = z()), (o = v('section')), (n = v('ul'))
			for (let e = 0; e < s.length; e += 1) s[e].c()
			this.h()
		},
		l(e) {
			const i = U('svelte-nnrxmp', document.head)
			;(t = g(i, 'META', { property: !0, content: !0 })),
				i.forEach(p),
				(l = j(e)),
				(o = g(e, 'SECTION', {}))
			var a = E(o)
			n = g(a, 'UL', { class: !0 })
			var m = E(n)
			for (let _ = 0; _ < s.length; _ += 1) s[_].l(m)
			m.forEach(p), a.forEach(p), this.h()
		},
		h() {
			d(t, 'property', 'og:image'),
				d(t, 'content', '/images/macbook-lifestyle.jpg'),
				d(n, 'class', 'posts svelte-1avzfmh')
		},
		m(e, i) {
			h(document.head, t), O(e, l, i), O(e, o, i), h(o, n)
			for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(n, null)
		},
		p(e, [i]) {
			if (i & 1) {
				f = L(e[0].posts)
				let a
				for (a = 0; a < f.length; a += 1) {
					const m = q(e, f, a)
					s[a] ? s[a].p(m, i) : ((s[a] = x(m)), s[a].c(), s[a].m(n, null))
				}
				for (; a < s.length; a += 1) s[a].d(1)
				s.length = f.length
			}
		},
		i: I,
		o: I,
		d(e) {
			e && (p(l), p(o)), p(t), F(s, e)
		}
	}
}
function K(r, t, l) {
	let { data: o } = t
	return (
		(r.$$set = (n) => {
			'data' in n && l(0, (o = n.data))
		}),
		[o]
	)
}
class Z extends D {
	constructor(t) {
		super(), N(this, t, K, J, B, { data: 0 })
	}
}
export { Z as component, Y as universal }
