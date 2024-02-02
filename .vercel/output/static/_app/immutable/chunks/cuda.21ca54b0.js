import { s as V, n as z } from './scheduler.ae1baad1.js'
import {
	S,
	i as R,
	g as p,
	s as a,
	H as J,
	r as K,
	h as i,
	z as r,
	c as l,
	D as O,
	u as Q,
	a as e,
	v as W,
	d as X,
	t as Y,
	f as n,
	w as Z
} from './index.0e1198e2.js'
import { T as tt } from './tag.71a37a0c.js'
function st(E) {
	let o,
		U = '<img src="/images/nvidia-gpu.jpg" alt="NVIDIA graphics cards"/>',
		g,
		c,
		I = 'Contents',
		v,
		B,
		L =
			'<li><a href="#introduction">Introduction</a></li> <li><a href="#compiling-for-the-cpu">Compiling for the CPU</a></li>',
		x,
		y,
		M = '<a id="introduction">Introduction</a>',
		_,
		m,
		N =
			'CUDA is a C/C++ API that allows developers to access the GPU for accelerated computing. For Python, the most performant option to target the GPU is the <code>pyCUDA</code> library, which exposes the entire CUDA API, but requires writing C code in docstrings. An attractive alternative is using the <code>Numba</code> library, which provides a <strong><em>just-in-time</em></strong> compiling function decorator. This allows the optimization of certain functions that handle data processing without changing the entire program, and without mixing C source code.',
		D,
		u,
		$ = 'Requirements',
		H,
		f,
		j = '<li>NVIDIA GPU with CUDA support</li> <li>Python ≥3.4</li> <li>NumPy ≥1.10</li>',
		b,
		h,
		q = '<a id="compiling-for-the-cpu">Compiling for the CPU</a>',
		w,
		d,
		k =
			'In addition to compiling Python functions for the GPU, by default, Numba targets the CPU.',
		P,
		A,
		G = `<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> numba </span><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> jit</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> math</span></span>
<span class="line"></span>
<span class="line"><span style="color: #61AFEF">@jit</span></span>
<span class="line"><span style="color: #C678DD">def</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">hypot</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66; font-style: italic">x</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66; font-style: italic">y</span><span style="color: #ABB2BF">):</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic"># Implementation from https://en.wikipedia.org/wiki/Hypot</span></span>
<span class="line"><span style="color: #ABB2BF">    x </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">abs</span><span style="color: #ABB2BF">(x)</span></span>
<span class="line"><span style="color: #ABB2BF">    y </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">abs</span><span style="color: #ABB2BF">(y)</span></span>
<span class="line"><span style="color: #ABB2BF">    t </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">min</span><span style="color: #ABB2BF">(x, y)</span></span>
<span class="line"><span style="color: #ABB2BF">    x </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">max</span><span style="color: #ABB2BF">(x, y)</span></span>
<span class="line"><span style="color: #ABB2BF">    t </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> t </span><span style="color: #56B6C2">/</span><span style="color: #ABB2BF"> x</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> x </span><span style="color: #56B6C2">*</span><span style="color: #ABB2BF"> math.</span><span style="color: #61AFEF">sqrt</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF">t</span><span style="color: #56B6C2">*</span><span style="color: #ABB2BF">t)</span></span></code></pre>`,
		F,
		C,
		T
	return (
		(C = new tt({
			props: {
				msg: 'Depending on the GPU, the performance of calculations with <code>float32</code> and <code>float64</code> data types can be significantly different. If the calculation does not require 64-bit precision, NVIDIA recommends using <code>float32</code>. (Most modern operating systems default the value of floating point numbers to 64-bit!)'
			}
		})),
		{
			c() {
				;(o = p('p')),
					(o.innerHTML = U),
					(g = a()),
					(c = p('h2')),
					(c.textContent = I),
					(v = a()),
					(B = p('ul')),
					(B.innerHTML = L),
					(x = a()),
					(y = p('h2')),
					(y.innerHTML = M),
					(_ = a()),
					(m = p('p')),
					(m.innerHTML = N),
					(D = a()),
					(u = p('h3')),
					(u.textContent = $),
					(H = a()),
					(f = p('ul')),
					(f.innerHTML = j),
					(b = a()),
					(h = p('h2')),
					(h.innerHTML = q),
					(w = a()),
					(d = p('p')),
					(d.textContent = k),
					(P = a()),
					(A = new J(!1)),
					(F = a()),
					K(C.$$.fragment),
					this.h()
			},
			l(t) {
				;(o = i(t, 'P', { 'data-svelte-h': !0 })),
					r(o) !== 'svelte-hte7b2' && (o.innerHTML = U),
					(g = l(t)),
					(c = i(t, 'H2', { 'data-svelte-h': !0 })),
					r(c) !== 'svelte-jpxk5s' && (c.textContent = I),
					(v = l(t)),
					(B = i(t, 'UL', { 'data-svelte-h': !0 })),
					r(B) !== 'svelte-n2dl39' && (B.innerHTML = L),
					(x = l(t)),
					(y = i(t, 'H2', { 'data-svelte-h': !0 })),
					r(y) !== 'svelte-117zo8l' && (y.innerHTML = M),
					(_ = l(t)),
					(m = i(t, 'P', { 'data-svelte-h': !0 })),
					r(m) !== 'svelte-1pga5c9' && (m.innerHTML = N),
					(D = l(t)),
					(u = i(t, 'H3', { 'data-svelte-h': !0 })),
					r(u) !== 'svelte-uvqqyo' && (u.textContent = $),
					(H = l(t)),
					(f = i(t, 'UL', { 'data-svelte-h': !0 })),
					r(f) !== 'svelte-1bwh0wc' && (f.innerHTML = j),
					(b = l(t)),
					(h = i(t, 'H2', { 'data-svelte-h': !0 })),
					r(h) !== 'svelte-1ji3g9s' && (h.innerHTML = q),
					(w = l(t)),
					(d = i(t, 'P', { 'data-svelte-h': !0 })),
					r(d) !== 'svelte-vpt7ip' && (d.textContent = k),
					(P = l(t)),
					(A = O(t, !1)),
					(F = l(t)),
					Q(C.$$.fragment, t),
					this.h()
			},
			h() {
				A.a = F
			},
			m(t, s) {
				e(t, o, s),
					e(t, g, s),
					e(t, c, s),
					e(t, v, s),
					e(t, B, s),
					e(t, x, s),
					e(t, y, s),
					e(t, _, s),
					e(t, m, s),
					e(t, D, s),
					e(t, u, s),
					e(t, H, s),
					e(t, f, s),
					e(t, b, s),
					e(t, h, s),
					e(t, w, s),
					e(t, d, s),
					e(t, P, s),
					A.m(G, t, s),
					e(t, F, s),
					W(C, t, s),
					(T = !0)
			},
			p: z,
			i(t) {
				T || (X(C.$$.fragment, t), (T = !0))
			},
			o(t) {
				Y(C.$$.fragment, t), (T = !1)
			},
			d(t) {
				t &&
					(n(o),
					n(g),
					n(c),
					n(v),
					n(B),
					n(x),
					n(y),
					n(_),
					n(m),
					n(D),
					n(u),
					n(H),
					n(f),
					n(b),
					n(h),
					n(w),
					n(d),
					n(P),
					A.d(),
					n(F)),
					Z(C, t)
			}
		}
	)
}
const lt = {
	title: 'Accelerated computing with CUDA and Python',
	description: 'Enhance data science with rapid parallel processing.',
	date: '2023-8-31',
	image: '/images/nvidia-gpu.jpg',
	categories: ['NVIDIA', 'CUDA', 'Numba'],
	published: !1
}
class ot extends S {
	constructor(o) {
		super(), R(this, o, null, st, V, {})
	}
}
export { ot as default, lt as metadata }
