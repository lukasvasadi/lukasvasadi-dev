import { s as p, n as h } from './scheduler.ae1baad1.js'
import {
	S as u,
	i as g,
	g as d,
	m as v,
	h as c,
	j as f,
	n as C,
	f as o,
	k as m,
	a as H,
	x as _,
	o as w
} from './index.0e1198e2.js'
function x(i) {
	let e, a, s, r
	return {
		c() {
			;(e = d('h2')), (a = d('a')), (s = v(i[0])), this.h()
		},
		l(t) {
			e = c(t, 'H2', {})
			var n = f(e)
			a = c(n, 'A', { id: !0 })
			var l = f(a)
			;(s = C(l, i[0])), l.forEach(o), n.forEach(o), this.h()
		},
		h() {
			m(a, 'id', (r = i[0].replace(/\s+/g, '-').toLowerCase()))
		},
		m(t, n) {
			H(t, e, n), _(e, a), _(a, s)
		},
		p(t, [n]) {
			n & 1 && w(s, t[0]),
				n & 1 && r !== (r = t[0].replace(/\s+/g, '-').toLowerCase()) && m(a, 'id', r)
		},
		i: h,
		o: h,
		d(t) {
			t && o(e)
		}
	}
}
function E(i, e, a) {
	let { str: s = '' } = e
	return (
		(i.$$set = (r) => {
			'str' in r && a(0, (s = r.str))
		}),
		[s]
	)
}
class j extends u {
	constructor(e) {
		super(), g(this, e, E, x, p, { str: 0 })
	}
}
export { j as H }
