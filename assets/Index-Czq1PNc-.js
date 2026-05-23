let e, t, n;
import { r, t as l } from "./init-B9F6lpah.js";
var a, s, i, o, c, d, u, f, h, p, v, g = Object.create, b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, m = Object.getOwnPropertyNames, w = Object.getPrototypeOf, k = Object.prototype.hasOwnProperty, y = Array.isArray, _ = Array.prototype.indexOf, $ = Array.prototype.includes, q = Array.from, S = Object.keys, E = Object.defineProperty, A = Object.getOwnPropertyDescriptor, z = Object.getOwnPropertyDescriptors, j = Object.prototype, F = Array.prototype, C = Object.getPrototypeOf, P = Object.isExtensible, L = () => {};
function O(e) {
	return e();
}
function T(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function M() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function D(e, t) {
	if (Array.isArray(e)) return e;
	if (void 0 === t || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
var R = Symbol("$state"), N = Symbol("legacy props"), B = Symbol(""), U = Symbol("attributes"), W = Symbol("class"), H = Symbol("style"), G = Symbol("text"), Y = Symbol("form reset"), V = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), X = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml"), J = {}, K = Symbol("uninitialized");
function Z(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
var Q = !1;
function ee(e) {
	if (null === e) throw Z(), J;
	return c = e;
}
function et() {
	return ee(e9(c));
}
function en(e) {
	if (Q) {
		if (null !== e9(c)) throw Z(), J;
		c = e;
	}
}
function er(e = 1) {
	if (Q) {
		for (var t = e, n = c; t--;) n = e9(n);
		c = n;
	}
}
function el(e = !0) {
	for (var t = 0, n = c;;) {
		if (8 === n.nodeType) {
			var r = n.data;
			if ("]" === r) {
				if (0 === t) return n;
				t -= 1;
			} else "[" !== r && "[!" !== r && ("[" !== r[0] || isNaN(Number(r.slice(1)))) || (t += 1);
		}
		var l = e9(n);
		e && n.remove(), n = l;
	}
}
function ea(e) {
	if (!e || 8 !== e.nodeType) throw Z(), J;
	return e.data;
}
function es(e) {
	return e === this.v;
}
function ei(e) {
	var t;
	return t = this.v, e != e ? t != t : e === t && (null === e || "object" != typeof e) && "function" != typeof e;
}
var eo = !1, ec = null;
function ed(e, t = !1, n) {
	ec = {
		p: ec,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: tj,
		l: eo && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function eu(e) {
	var t = ec, n = t.e;
	if (null !== n) for (var r of (t.e = null, n)) tp(r);
	return void 0 !== e && (t.x = e), t.i = !0, ec = t.p, e ?? {};
}
function ef() {
	return !eo || null !== ec && null === ec.l;
}
var eh = [];
function ep() {
	var e = eh;
	eh = [], T(e);
}
function ev(e) {
	if (0 === eh.length && !eA) {
		var t = eh;
		queueMicrotask(() => {
			t === eh && ep();
		});
	}
	eh.push(e);
}
function eg(e) {
	var t = tj;
	if (null === t) return tA.f |= 8388608, e;
	if ((32768 & t.f) == 0 && (4 & t.f) == 0) throw e;
	eb(e, t);
}
function eb(e, t) {
	for (; null !== t;) {
		if ((128 & t.f) != 0) {
			if ((32768 & t.f) == 0) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
function ex(e, t) {
	e.f = -7169 & e.f | t;
}
function em(e) {
	(512 & e.f) != 0 || null === e.deps ? ex(e, 1024) : ex(e, 4096);
}
function ew(e, t, n) {
	(2048 & e.f) != 0 ? t.add(e) : 4096 & e.f && n.add(e), function e(t) {
		if (null !== t) for (let n of t) 2 & n.f && 65536 & n.f && (n.f ^= 65536, e(n.deps));
	}(e.deps), ex(e, 1024);
}
var ek = !1, ey = null, e_ = null, e$ = null, eq = null, eS = null, eE = null, eA = !1, ez = !1, ej = null, eF = null, eC = 0, eP = 1, eL = class e {
	id = eP++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	unblocked = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#a = /* @__PURE__ */ new Set();
	#s = 0;
	#i = /* @__PURE__ */ new Map();
	#o = null;
	#c = [];
	#d = [];
	#u = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#h = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#v = !1;
	#g() {
		if (this.is_fork) return !0;
		for (let n of this.#i.keys()) {
			for (var e = n, t = !1; null !== e.parent;) {
				if (this.#h.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#h.has(e) || this.#h.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#h.get(e);
		if (n) {
			for (var r of (this.#h.delete(e), n.d)) ex(r, 2048), t(r);
			for (r of n.m) ex(r, 4096), t(r);
		}
		this.#p.add(e);
	}
	#b() {
		if (this.#e = !0, eC++ > 1e3 && (this.#x(), function() {
			try {
				throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
			} catch (e) {
				eb(e, eE);
			}
		}()), !this.#g()) {
			for (let e of this.#u) this.#f.delete(e), ex(e, 2048), this.schedule(e);
			for (let e of this.#f) ex(e, 4096), this.schedule(e);
		}
		let t = this.#c;
		this.#c = [], this.apply();
		var n = ej = [], r = [], l = eF = [];
		for (let e of t) try {
			this.#m(e, n, r);
		} catch (t) {
			throw function e(t) {
				ex(t, 1024);
				for (var n = t.first; null !== n;) e(n), n = n.next;
			}(e), t;
		}
		if (e$ = null, l.length > 0) {
			var a = e.ensure();
			for (let e of l) a.schedule(e);
		}
		if (ej = null, eF = null, this.#g()) {
			for (let [e, t] of (this.#w(r), this.#w(n), this.#h)) (function e(t, n) {
				if ((32 & t.f) == 0 || (1024 & t.f) == 0) {
					(2048 & t.f) != 0 ? n.d.push(t) : 4096 & t.f && n.m.push(t), ex(t, 1024);
					for (var r = t.first; null !== r;) e(r, n), r = r.next;
				}
			})(e, t);
			l.length > 0 && e$.#b();
			return;
		}
		let s = this.#k();
		if (s) return void s.#y(this);
		for (let e of (this.#u.clear(), this.#f.clear(), this.#r)) e(this);
		this.#r.clear(), eq = this, eM(r), eM(n), eq = null, this.#o?.resolve();
		var i = e$;
		if (this.linked && 0 === this.#s && this.#x(), this.#c.length > 0) {
			null === i && (i = this, this.#_());
			let e = i;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		}
		null !== i && i.#b();
	}
	#m(e, t, n) {
		e.f ^= 1024;
		for (var r = e.first; null !== r;) {
			var l = r.f, a = (96 & l) != 0;
			if (!(a && (1024 & l) != 0 || (8192 & l) != 0 || this.#h.has(r)) && null !== r.fn) {
				a ? r.f ^= 1024 : (4 & l) != 0 ? t.push(r) : tR(r) && (16 & l && this.#f.add(r), tI(r));
				var s = r.first;
				if (null !== s) {
					r = s;
					continue;
				}
			}
			for (; null !== r;) {
				var i = r.next;
				if (null !== i) {
					r = i;
					break;
				}
				r = r.parent;
			}
		}
	}
	#k() {
		for (var e = this.#t; null !== e;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve);
		}
		let t = (e) => {
			var n = e.reactions;
			if (null !== n) for (let e of n) {
				var r = e.f;
				(2 & r) != 0 ? t(e) : 4194320 & r && !this.async_deriveds.has(e) && (this.#f.delete(e), ex(e, 2048), this.schedule(e));
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), e$ = this, this.#b();
	}
	#w(e) {
		for (var t = 0; t < e.length; t += 1) ew(e[t], this.#u, this.#f);
	}
	capture(e, t, n = !1) {
		e.v === K || this.previous.has(e) || this.previous.set(e, e.v), !(8388608 & e.f) && (this.current.set(e, [t, n]), eS?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		e$ = this;
	}
	deactivate() {
		e$ = null, eS = null;
	}
	flush() {
		try {
			ez = !0, e$ = this, this.#b();
		} finally {
			eC = 0, eE = null, ej = null, eF = null, ez = !1, e$ = null, eS = null, eK.clear();
		}
	}
	discard() {
		for (let e of this.#l) e(this);
		this.#l.clear(), this.#a.clear(), this.#x();
	}
	register_created_effect(e) {
		this.#d.push(e);
	}
	#$() {
		this.#x();
		for (let c = ey; null !== c; c = c.#n) {
			var e = c.id < this.id, t = [];
			for (let [r, [l, a]] of this.current) {
				if (c.current.has(r)) {
					var n = c.current.get(r)[0];
					if (!e || l === n) continue;
					c.current.set(r, [l, a]);
				}
				t.push(r);
			}
			if (e) for (let [e, t] of this.async_deriveds) {
				let n = c.async_deriveds.get(e);
				n && t.promise.then(n.resolve);
			}
			if (c.#e) {
				var r = [...c.current.keys()].filter((e) => !this.current.has(e));
				if (0 === r.length) e && c.discard();
				else if (t.length > 0) {
					if (e) for (let e of this.#p) c.unskip_effect(e, (e) => {
						(4194320 & e.f) != 0 ? c.schedule(e) : c.#w([e]);
					});
					c.activate();
					var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
					for (var s of t) (function e(t, n, r, l) {
						if (!r.has(t) && (r.add(t), null !== t.reactions)) for (let a of t.reactions) {
							let t = a.f;
							(2 & t) != 0 ? e(a, n, r, l) : 4194320 & t && !(2048 & t) && eD(a, n, l) && (ex(a, 2048), eR(a));
						}
					})(s, r, l, a);
					a = /* @__PURE__ */ new Map();
					var i = [...c.current.keys()].filter((e) => !this.current.has(e) || this.current.get(e)[0] !== e.v);
					if (i.length > 0) for (let e of this.#d) !(155648 & e.f) && eD(e, i, a) && ((4194320 & e.f) != 0 ? (ex(e, 2048), c.schedule(e)) : c.#u.add(e));
					if (c.#c.length > 0 && !c.#v) {
						for (var o of (c.apply(), c.#c)) c.#m(o, [], []);
						c.#c = [];
					}
					c.deactivate();
				}
			}
		}
	}
	increment(e, t) {
		if (this.#s += 1, e) {
			let e = this.#i.get(t) ?? 0;
			this.#i.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (this.#s -= 1, e) {
			let e = this.#i.get(t) ?? 0;
			1 === e ? this.#i.delete(t) : this.#i.set(t, e - 1);
		}
		this.#v || (this.#v = !0, ev(() => {
			this.#v = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#f.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#l.add(e);
	}
	on_fork_commit(e) {
		this.#a.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#a) e(this);
		this.#a.clear();
	}
	settled() {
		return (this.#o ??= M()).promise;
	}
	static ensure() {
		if (null === e$) {
			let t = e$ = new e();
			t.#_(), ez || eA || ev(() => {
				t.#e || t.flush();
			});
		}
		return e$;
	}
	apply() {
		eS = null;
	}
	schedule(e) {
		if (eE = e, e.b?.is_pending && (16777228 & e.f) != 0 && (32768 & e.f) == 0) return void e.b.defer_effect(e);
		for (var t = e; null !== t.parent;) {
			var n = (t = t.parent).f;
			if (null !== ej && t === tj && (null === tA || (2 & tA.f) == 0)) return;
			if ((96 & n) != 0) {
				if ((1024 & n) == 0) return;
				t.f ^= 1024;
			}
		}
		this.#c.push(t);
	}
	#_() {
		null === e_ ? ey = e_ = this : (e_.#n = this, this.#t = e_), e_ = this;
	}
	#x() {
		var e = this.#t, t = this.#n;
		null === e ? ey = t : e.#n = t, null === t ? e_ = e : t.#t = e, this.linked = !1;
	}
};
function eO(e) {
	var t, n = eA;
	eA = !0;
	try {
		for (e && (null === e$ || e$.is_fork || e$.flush(), t = e());;) {
			for (; eh.length > 0;) ep();
			if (null === e$) return t;
			e$.flush();
		}
	} finally {
		eA = n;
	}
}
var eT = null;
function eM(e) {
	var t = e.length;
	if (0 !== t) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if ((24576 & r.f) == 0 && tR(r) && (eT = /* @__PURE__ */ new Set(), tI(r), null === r.deps && null === r.first && null === r.nodes && null === r.teardown && null === r.ac && ty(r), eT?.size > 0)) {
				for (let e of (eK.clear(), eT)) {
					if ((24576 & e.f) != 0) continue;
					let t = [e], n = e.parent;
					for (; null !== n;) eT.has(n) && (eT.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						!(24576 & n.f) && tI(n);
					}
				}
				eT.clear();
			}
		}
		eT = null;
	}
}
function eD(e, t, n) {
	let r = n.get(e);
	if (void 0 !== r) return r;
	if (null !== e.deps) for (let r of e.deps) {
		if ($.call(t, r)) return !0;
		if ((2 & r.f) != 0 && eD(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function eR(e) {
	e$.schedule(e);
}
var eN = class {
	parent;
	is_pending = !1;
	transform_error;
	#q;
	#S = Q ? c : null;
	#E;
	#A;
	#z;
	#j = null;
	#F = null;
	#C = null;
	#P = null;
	#L = 0;
	#O = 0;
	#T = !1;
	#u = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#M = null;
	#D = (function(e) {
		let t, n = 0, r = eQ(0);
		return () => {
			tu() && (tW(r), tv(() => (0 === n && (t = tH(() => e(() => e3(r)))), n += 1, () => {
				ev(() => {
					0 == (n -= 1) && (t?.(), t = void 0, e3(r));
				});
			})));
		};
	})(() => (this.#M = eQ(this.#L), () => {
		this.#M = null;
	}));
	constructor(e, t, n, r) {
		this.#q = e, this.#E = t, this.#A = (e) => {
			var t = tj;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = tj.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#z = tb(() => {
			if (Q) {
				let e = this.#S;
				et();
				let t = "[!" === e.data;
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#R(t);
				} else t ? this.#N() : this.#B();
			} else this.#I();
		}, 589824), Q && (this.#q = c);
	}
	#B() {
		try {
			this.#j = tx(() => this.#A(this.#q));
		} catch (e) {
			this.error(e);
		}
	}
	#R(e) {
		let t = this.#E.failed;
		t && (this.#C = tx(() => {
			t(this.#q, () => e, () => () => {});
		}));
	}
	#N() {
		let e = this.#E.pending;
		e && (this.is_pending = !0, this.#F = tx(() => e(this.#q)), ev(() => {
			var e = this.#P = document.createDocumentFragment(), t = e6();
			e.append(t), this.#j = this.#U(() => tx(() => this.#A(t))), 0 === this.#O && (this.#q.before(e), this.#P = null, t_(this.#F, () => {
				this.#F = null;
			}), this.#W(e$));
		}));
	}
	#I() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#O = 0, this.#L = 0, this.#j = tx(() => {
				this.#A(this.#q);
			}), this.#O > 0) {
				var e = this.#P = document.createDocumentFragment();
				tq(this.#j, e);
				let t = this.#E.pending;
				this.#F = tx(() => t(this.#q));
			} else this.#W(e$);
		} catch (e) {
			this.error(e);
		}
	}
	#W(e) {
		this.is_pending = !1, e.transfer_effects(this.#u, this.#f);
	}
	defer_effect(e) {
		ew(e, this.#u, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#E.pending;
	}
	#U(e) {
		var t = tj, n = tA, r = ec;
		tj = this.#z, tA = this.#z, ec = this.#z.ctx;
		try {
			return eL.ensure(), e();
		} catch (e) {
			return eg(e), null;
		} finally {
			tj = t, tA = n, ec = r;
		}
	}
	#H(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#H(e, t);
			return;
		}
		this.#O += e, 0 === this.#O && (this.#W(t), this.#F && t_(this.#F, () => {
			this.#F = null;
		}), this.#P && (this.#q.before(this.#P), this.#P = null));
	}
	update_pending_count(e, t) {
		this.#H(e, t), this.#L += e, this.#M && !this.#T && (this.#T = !0, ev(() => {
			this.#T = !1, this.#M && e5(this.#M, this.#L);
		}));
	}
	get_effect_pending() {
		return this.#D(), tW(this.#M);
	}
	error(e) {
		if (!this.#E.onerror && !this.#E.failed) throw e;
		e$?.is_fork ? (this.#j && e$.skip_effect(this.#j), this.#F && e$.skip_effect(this.#F), this.#C && e$.skip_effect(this.#C), e$.on_fork_commit(() => {
			this.#G(e);
		})) : this.#G(e);
	}
	#G(e) {
		this.#j && (tk(this.#j), this.#j = null), this.#F && (tk(this.#F), this.#F = null), this.#C && (tk(this.#C), this.#C = null), Q && (ee(this.#S), er(), ee(el()));
		var t = this.#E.onerror;
		let n = this.#E.failed;
		var r = !1, l = !1;
		let a = () => {
			r ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (r = !0, l && function() {
				throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
			}(), null !== this.#C && t_(this.#C, () => {
				this.#C = null;
			}), this.#U(() => {
				this.#I();
			}));
		}, s = (e) => {
			try {
				l = !0, t?.(e, a), l = !1;
			} catch (e) {
				eb(e, this.#z && this.#z.parent);
			}
			n && (this.#C = this.#U(() => {
				try {
					return tx(() => {
						var t = tj;
						t.b = this, t.f |= 128, n(this.#q, () => e, () => a);
					});
				} catch (e) {
					return eb(e, this.#z.parent), null;
				}
			}));
		};
		ev(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				eb(e, this.#z && this.#z.parent);
				return;
			}
			null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(s, (e) => eb(e, this.#z && this.#z.parent)) : s(t);
		});
	}
};
function eB(e = !0) {
	tj = null, tA = null, ec = null, e && e$?.deactivate();
}
function eI() {
	var e = tj, t = e.b, n = e$, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), () => {
		t.update_pending_count(-1, n), n.decrement(r, e);
	};
}
function eU(e) {
	return null !== tj && (tj.f |= 524288), {
		ctx: ec,
		deps: null,
		effects: null,
		equals: es,
		f: 2050,
		fn: e,
		reactions: null,
		rv: 0,
		v: K,
		wv: 0,
		parent: tj,
		ac: null
	};
}
var eW = Symbol("obsolete");
function eH(e) {
	let t = eU(e);
	return tC(t), t;
}
function eG(e) {
	let t = eU(e);
	return t.equals = ei, t;
}
function eY(e) {
	var t, n = tj, r = e.parent;
	if (!tE && null !== r && e.v !== K && (24576 & r.f) != 0) return console.warn("https://svelte.dev/e/derived_inert"), e.v;
	tj = r;
	try {
		e.f &= -65537;
		var l = e.effects;
		if (null !== l) {
			e.effects = null;
			for (var a = 0; a < l.length; a += 1) tk(l[a]);
		}
		t = tN(e);
	} finally {
		tj = n;
	}
	return t;
}
function eV(e) {
	var t = eY(e);
	e.equals(t) || (e.wv = ++tT, e$?.is_fork && null !== e.deps) || (null !== e$ ? (e$.capture(e, t, !0), eq?.capture(e, t, !0)) : e.v = t, null !== e.deps) ? !tE && (null !== eS ? (tu() || e$?.is_fork) && eS.set(e, t) : em(e)) : ex(e, 1024);
}
function eX(e) {
	if (null !== e.effects) for (let t of e.effects) t.teardown && null !== t.fn && tI(t);
}
var eJ = /* @__PURE__ */ new Set(), eK = /* @__PURE__ */ new Map(), eZ = !1;
function eQ(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: es,
		rv: 0,
		wv: 0
	};
}
function e0(e, t) {
	let n = eQ(e, t);
	return tC(n), n;
}
function e1(e, t = !1, n = !0) {
	let r = eQ(e);
	return t || (r.equals = ei), eo && n && null !== ec && null !== ec.l && (ec.l.s ??= []).push(r), r;
}
function e2(e, t, n = !1) {
	return null !== tA && (!tz || 131072 & tA.f) && ef() && 4325394 & tA.f && (null === tF || !$.call(tF, e)) && function() {
		throw Error("https://svelte.dev/e/state_unsafe_mutation");
	}(), e5(e, n ? e4(t) : t, eF);
}
function e5(e, t, n = null) {
	if (!e.equals(t)) {
		eK.set(e, tE ? t : e.v);
		var r = eL.ensure();
		r.capture(e, t), 2 & e.f && (2048 & e.f && eY(e), null === eS && em(e)), e.wv = ++tT, function e(t, n, r) {
			var l = t.reactions;
			if (null !== l) for (var a = ef(), s = l.length, i = 0; i < s; i++) {
				var o = l[i], c = o.f;
				if (a || o !== tj) {
					var d = (2048 & c) == 0;
					d && ex(o, n), (131072 & c) != 0 ? eJ.add(o) : (2 & c) != 0 ? (eS?.delete(o), !(65536 & c) && (512 & c && (null === tj || !(2097152 & tj.f)) && (o.f |= 65536), e(o, 4096, r))) : d && (16 & c && null !== eT && eT.add(o), null !== r ? r.push(o) : eR(o));
				}
			}
		}(e, 2048, n), ef() && null !== tj && 1024 & tj.f && !(96 & tj.f) && (null === tO ? tO = [e] : tO.push(e)), r.is_fork || !(eJ.size > 0) || eZ || function() {
			for (let e of (eZ = !1, eJ)) {
				let t;
				1024 & e.f && ex(e, 4096);
				try {
					t = tR(e);
				} catch {
					t = !0;
				}
				t && tI(e);
			}
			eJ.clear();
		}();
	}
	return t;
}
function e3(e) {
	e2(e, e.v + 1);
}
function e4(e) {
	if ("object" != typeof e || null === e || R in e) return e;
	let t = C(e);
	if (t !== j && t !== F) return e;
	var n = /* @__PURE__ */ new Map(), r = y(e), l = e0(0), a = tD, s = (e) => {
		if (tD === a) return e();
		var t = tA, n = tD;
		tA = null, tD = a;
		var r = e();
		return tA = t, tD = n, r;
	};
	return r && n.set("length", e0(e.length, null)), new Proxy(e, {
		defineProperty(e, t, r) {
			"value" in r && !1 !== r.configurable && !1 !== r.enumerable && !1 !== r.writable || function() {
				throw Error("https://svelte.dev/e/state_descriptors_fixed");
			}();
			var l = n.get(t);
			return void 0 === l ? s(() => {
				var e = e0(r.value, null);
				return n.set(t, e), e;
			}) : e2(l, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (void 0 === r) {
				if (t in e) {
					let e = s(() => e0(K, null));
					n.set(t, e), e3(l);
				}
			} else e2(r, K), e3(l);
			return !0;
		},
		get(t, r, l) {
			if (r === R) return e;
			var a = n.get(r), i = r in t;
			if (void 0 === a && (!i || A(t, r)?.writable) && (a = s(() => e0(e4(i ? t[r] : K), null)), n.set(r, a)), void 0 !== a) {
				var o = tW(a);
				return o === K ? void 0 : o;
			}
			return Reflect.get(t, r, l);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var l = n.get(t);
				l && (r.value = tW(l));
			} else if (void 0 === r) {
				var a = n.get(t), s = a?.v;
				if (void 0 !== a && s !== K) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === R) return !0;
			var r = n.get(t), l = void 0 !== r && r.v !== K || Reflect.has(e, t);
			return (!(void 0 !== r || null !== tj && (!l || A(e, t)?.writable)) || (void 0 === r && (r = s(() => e0(l ? e4(e[t]) : K, null)), n.set(t, r)), tW(r) !== K)) && l;
		},
		set(e, t, a, i) {
			var o = n.get(t), c = t in e;
			if (r && "length" === t) for (var d = a; d < o.v; d += 1) {
				var u = n.get(d + "");
				void 0 !== u ? e2(u, K) : d in e && (u = s(() => e0(K, null)), n.set(d + "", u));
			}
			void 0 === o ? (!c || A(e, t)?.writable) && (e2(o = s(() => e0(void 0, null)), e4(a)), n.set(t, o)) : (c = o.v !== K, e2(o, s(() => e4(a))));
			var f = Reflect.getOwnPropertyDescriptor(e, t);
			if (f?.set && f.set.call(i, a), !c) {
				if (r && "string" == typeof t) {
					var h = n.get("length"), p = Number(t);
					Number.isInteger(p) && p >= h.v && e2(h, p + 1);
				}
				e3(l);
			}
			return !0;
		},
		ownKeys(e) {
			tW(l);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return void 0 === t || t.v !== K;
			});
			for (var [r, a] of n) a.v === K || r in e || t.push(r);
			return t;
		},
		setPrototypeOf() {
			throw Error("https://svelte.dev/e/state_prototype_fixed");
		}
	});
}
function e8() {
	if (void 0 === d) {
		d = window, u = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		f = A(t, "firstChild").get, h = A(t, "nextSibling").get, P(e) && (e[W] = void 0, e[U] = null, e[H] = void 0, e.__e = void 0), P(n) && (n[G] = void 0);
	}
}
function e6(e = "") {
	return document.createTextNode(e);
}
function e7(e) {
	return f.call(e);
}
function e9(e) {
	return h.call(e);
}
function te(e, t) {
	if (!Q) return e7(e);
	var n = e7(c);
	if (null === n) n = c.appendChild(e6());
	else if (t && 3 !== n.nodeType) {
		var r = e6();
		return n?.before(r), ee(r), r;
	}
	return t && ta(n), ee(n), n;
}
function tt(e, t = !1) {
	if (!Q) {
		var n = e7(e);
		return n instanceof Comment && "" === n.data ? e9(n) : n;
	}
	if (t) {
		if (c?.nodeType !== 3) {
			var r = e6();
			return c?.before(r), ee(r), r;
		}
		ta(c);
	}
	return c;
}
function tn(e, t = 1, n = !1) {
	let r = Q ? c : e;
	for (; t--;) l = r, r = e9(r);
	if (!Q) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var l, a = e6();
			return null === r ? l?.after(a) : r.before(a), ee(a), a;
		}
		ta(r);
	}
	return ee(r), r;
}
function tr(e) {
	e.textContent = "";
}
function tl(e, t, n) {
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, n ? { is: n } : void 0);
}
function ta(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; null !== t && 3 === t.nodeType;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var ts = !1;
function ti() {
	ts || (ts = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Y]?.();
		});
	}, { capture: !0 }));
}
function to(e) {
	var t = tA, n = tj;
	tA = null, tj = null;
	try {
		return e();
	} finally {
		tA = t, tj = n;
	}
}
function tc(e) {
	if (null === tj) throw null === tA && function() {
		throw Error("https://svelte.dev/e/effect_orphan");
	}(), Error("https://svelte.dev/e/effect_in_unowned_derived");
	tE && function() {
		throw Error("https://svelte.dev/e/effect_in_teardown");
	}();
}
function td(e, t) {
	var n = tj;
	null !== n && 8192 & n.f && (e |= 8192);
	var r = {
		ctx: ec,
		deps: null,
		nodes: null,
		f: e | 2560,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	e$?.register_created_effect(r);
	var l = r;
	if ((4 & e) != 0) null !== ej ? ej.push(r) : eL.ensure().schedule(r);
	else if (null !== t) {
		try {
			tI(r);
		} catch (e) {
			throw tk(r), e;
		}
		null === l.deps && null === l.teardown && null === l.nodes && l.first === l.last && !(524288 & l.f) && (l = l.first, 16 & e && 65536 & e && null !== l && (l.f |= 65536));
	}
	if (null !== l && (l.parent = n, null !== n && (a = l, null === (s = n.last) ? n.last = n.first = a : (s.next = a, a.prev = s, n.last = a)), null !== tA && (2 & tA.f) != 0 && (64 & e) == 0)) {
		var a, s, i = tA;
		(i.effects ??= []).push(l);
	}
	return r;
}
function tu() {
	return null !== tA && !tz;
}
function tf(e) {
	let t = td(8, null);
	return ex(t, 1024), t.teardown = e, t;
}
function th(e) {
	tc("$effect");
	var t = tj.f;
	if (tA || (32 & t) == 0 || (32768 & t) != 0) return tp(e);
	var n = ec;
	(n.e ??= []).push(e);
}
function tp(e) {
	return td(1048580, e);
}
function tv(e, t = 0) {
	return td(8 | t, e);
}
function tg(e, t = [], n = [], r = []) {
	(function(e, t, n, r) {
		let l = ef() ? eU : eG;
		var a, s, i, o, c = e.filter((e) => !e.settled);
		if (0 === n.length && 0 === c.length) return r(t.map(l));
		var d = tj, u = (a = tj, s = tA, i = ec, o = e$, function(e = !0) {
			tj = a, tA = s, ec = i, e && !(16384 & a.f) && (o?.activate(), o?.apply());
		}), f = 1 === c.length ? c[0].promise : c.length > 1 ? Promise.all(c.map((e) => e.promise)) : null;
		function h(e) {
			if ((16384 & d.f) == 0) {
				u();
				try {
					r(e);
				} catch (e) {
					eb(e, d);
				}
				eB();
			}
		}
		var p = eI();
		if (0 === n.length) return f.then(() => h(t.map(l))).finally(p);
		function v() {
			Promise.all(n.map((e) => {
				var t, n, r, l, a;
				let s;
				return t = e, null === (s = tj) && function() {
					throw Error("https://svelte.dev/e/async_derived_orphan");
				}(), n = void 0, r = eQ(K), l = !tA, a = /* @__PURE__ */ new Set(), td(4718592, () => {
					var e = tj, i = M();
					n = i.promise;
					try {
						Promise.resolve(t()).then(i.resolve, (e) => {
							e !== V && i.reject(e);
						}).finally(eB);
					} catch (e) {
						i.reject(e), eB();
					}
					var o = e$;
					if (l) {
						if ((32768 & e.f) != 0) var c = eI();
						if (s.b.is_rendered()) o.async_deriveds.get(e)?.reject(eW);
						else for (let e of a.values()) e.reject(eW);
						a.add(i), o.async_deriveds.set(e, i);
					}
					let d = (e, t) => {
						c?.(), a.delete(i), t !== eW && (o.activate(), t ? (r.f |= 8388608, e5(r, t)) : (8388608 & r.f && (r.f ^= 8388608), e5(r, e)), o.deactivate());
					};
					i.promise.then(d, (e) => d(null, e || "unknown"));
				}), tf(() => {
					for (let e of a) e.reject(eW);
				}), new Promise((e) => {
					(function t(l) {
						function a() {
							l === n ? e(r) : t(n);
						}
						l.then(a, a);
					})(n);
				});
			})).then((e) => h([...t.map(l), ...e])).catch((e) => eb(e, d)).finally(p);
		}
		f ? f.then(() => {
			u(), v(), eB();
		}) : v();
	})(r, t, n, (t) => {
		td(8, () => e(...t.map(tW)));
	});
}
function tb(e, t = 0) {
	return td(16 | t, e);
}
function tx(e) {
	return td(524320, e);
}
function tm(e) {
	var t = e.teardown;
	if (null !== t) {
		let e = tE, n = tA;
		tE = !0, tA = null;
		try {
			t.call(null);
		} finally {
			tE = e, tA = n;
		}
	}
}
function tw(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; null !== n;) {
		let e = n.ac;
		null !== e && to(() => {
			e.abort(V);
		});
		var r = n.next;
		(64 & n.f) != 0 ? n.parent = null : tk(n, t), n = r;
	}
}
function tk(e, t = !0) {
	var n = !1;
	(t || 262144 & e.f) && null !== e.nodes && null !== e.nodes.end && (function(e, t) {
		for (; null !== e;) {
			var n = e === t ? null : e9(e);
			e.remove(), e = n;
		}
	}(e.nodes.start, e.nodes.end), n = !0), ex(e, 33554432), tw(e, t && !n), tB(e, 0);
	var r = e.nodes && e.nodes.t;
	if (null !== r) for (let e of r) e.stop();
	tm(e), e.f ^= 33554432, e.f |= 16384;
	var l = e.parent;
	null !== l && null !== l.first && ty(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ty(e) {
	var t = e.parent, n = e.prev, r = e.next;
	null !== n && (n.next = r), null !== r && (r.prev = n), null !== t && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function t_(e, t, n = !0) {
	var r = [];
	(function e(t, n, r) {
		if ((8192 & t.f) == 0) {
			t.f ^= 8192;
			var l = t.nodes && t.nodes.t;
			if (null !== l) for (let e of l) (e.is_global || r) && n.push(e);
			for (var a = t.first; null !== a;) {
				var s = a.next;
				if ((64 & a.f) == 0) {
					var i = (65536 & a.f) != 0 || (32 & a.f) != 0 && (16 & t.f) != 0;
					e(a, n, !!i && r);
				}
				a = s;
			}
		}
	})(e, r, !0);
	var l = () => {
		n && tk(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var s = () => --a || l();
		for (var i of r) i.out(s);
	} else l();
}
function t$(e, t) {
	if ((8192 & e.f) != 0) {
		e.f ^= 8192, !(1024 & e.f) && (ex(e, 2048), eL.ensure().schedule(e));
		for (var n = e.first; null !== n;) {
			var r = n.next, l = (65536 & n.f) != 0 || (32 & n.f) != 0;
			t$(n, !!l && t), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (null !== a) for (let e of a) (e.is_global || t) && e.in();
	}
}
function tq(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; null !== n;) {
		var l = n === r ? null : e9(n);
		t.append(n), n = l;
	}
}
var tS = !1, tE = !1, tA = null, tz = !1, tj = null, tF = null;
function tC(e) {
	null !== tA && (null === tF ? tF = [e] : tF.push(e));
}
var tP = null, tL = 0, tO = null, tT = 1, tM = 0, tD = 0;
function tR(e) {
	var t = e.f;
	if ((2048 & t) != 0) return !0;
	if (2 & t && (e.f &= -65537), (4096 & t) != 0) {
		for (var n = e.deps, r = n.length, l = 0; l < r; l++) {
			var a = n[l];
			if (tR(a) && eV(a), a.wv > e.wv) return !0;
		}
		512 & t && null === eS && ex(e, 1024);
	}
	return !1;
}
function tN(e) {
	var t = tP, n = tL, r = tO, l = tA, a = tF, s = ec, i = tz, o = tD, c = e.f;
	tP = null, tL = 0, tO = null, tA = (96 & c) == 0 ? e : null, tF = null, ec = e.ctx, tz = !1, tD = ++tM, null !== e.ac && (to(() => {
		e.ac.abort(V);
	}), e.ac = null);
	try {
		e.f |= 2097152;
		var d, u = (0, e.fn)();
		e.f |= 32768;
		var f = e.deps, h = e$?.is_fork;
		if (null !== tP) {
			if (h || tB(e, tL), null !== f && tL > 0) for (f.length = tL + tP.length, d = 0; d < tP.length; d++) f[tL + d] = tP[d];
			else e.deps = f = tP;
			if (tu() && (512 & e.f) != 0) for (d = tL; d < f.length; d++) (f[d].reactions ??= []).push(e);
		} else !h && null !== f && tL < f.length && (tB(e, tL), f.length = tL);
		if (ef() && null !== tO && !tz && null !== f && (6146 & e.f) == 0) for (d = 0; d < tO.length; d++) (function e(t, n, r = !0) {
			var l = t.reactions;
			if (null !== l && !(null !== tF && $.call(tF, t))) for (var a = 0; a < l.length; a++) {
				var s = l[a];
				(2 & s.f) != 0 ? e(s, n, !1) : n === s && (r ? ex(s, 2048) : 1024 & s.f && ex(s, 4096), eR(s));
			}
		})(tO[d], e);
		if (null !== l && l !== e) {
			if (tM++, null !== l.deps) for (let e = 0; e < n; e += 1) l.deps[e].rv = tM;
			if (null !== t) for (let e of t) e.rv = tM;
			null !== tO && (null === r ? r = tO : r.push(...tO));
		}
		return 8388608 & e.f && (e.f ^= 8388608), u;
	} catch (e) {
		return eg(e);
	} finally {
		e.f ^= 2097152, tP = t, tL = n, tO = r, tA = l, tF = a, ec = s, tz = i, tD = o;
	}
}
function tB(e, t) {
	var n = e.deps;
	if (null !== n) for (var r = t; r < n.length; r++) (function(e, t) {
		let n = t.reactions;
		if (null !== n) {
			var r = _.call(n, e);
			if (-1 !== r) {
				var l = n.length - 1;
				0 === l ? n = t.reactions = null : (n[r] = n[l], n.pop());
			}
		}
		if (null === n && (2 & t.f) != 0 && (null === tP || !$.call(tP, t))) {
			512 & t.f && (t.f ^= 512, t.f &= -65537), t.v !== K && em(t);
			if (null !== t.effects) for (let e of t.effects) (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(V), null !== e.fn && (e.teardown = L), e.ac = null, tB(e, 0), tw(e));
			tB(t, 0);
		}
	})(e, n[r]);
}
function tI(e) {
	var t = e.f;
	if ((16384 & t) == 0) {
		ex(e, 1024);
		var n = tj, r = tS;
		tj = e, tS = !0;
		try {
			if ((16777232 & t) != 0) for (var l = e.first; null !== l;) {
				var a = l.next;
				!(32 & l.f) && tk(l), l = a;
			}
			else tw(e);
			tm(e);
			var s = tN(e);
			e.teardown = "function" == typeof s ? s : null, e.wv = tT;
		} finally {
			tS = r, tj = n;
		}
	}
}
async function tU() {
	await Promise.resolve(), eO();
}
function tW(e) {
	var t = (2 & e.f) != 0;
	if (null !== tA && !tz && (null === tj || (16384 & tj.f) == 0) && (null === tF || !$.call(tF, e))) {
		var n = tA.deps;
		if ((2097152 & tA.f) != 0) e.rv < tM && (e.rv = tM, null === tP && null !== n && n[tL] === e ? tL++ : null === tP ? tP = [e] : tP.push(e));
		else {
			tA.deps ??= [], $.call(tA.deps, e) || tA.deps.push(e);
			var r = e.reactions;
			null === r ? e.reactions = [tA] : $.call(r, tA) || r.push(tA);
		}
	}
	if (tE && eK.has(e)) return eK.get(e);
	if (t) {
		if (tE) {
			var l = e.v;
			return (!(1024 & e.f) && null !== e.reactions || function e(t) {
				if (t.v === K) return !0;
				if (null === t.deps) return !1;
				for (let n of t.deps) if (eK.has(n) || (2 & n.f) != 0 && e(n)) return !0;
				return !1;
			}(e)) && (l = eY(e)), eK.set(e, l), l;
		}
		var a = (512 & e.f) == 0 && !tz && null !== tA && (tS || (512 & tA.f) != 0), s = (32768 & e.f) == 0;
		tR(e) && (a && (e.f |= 512), eV(e)), a && !s && (eX(e), function e(t) {
			if (t.f |= 512, null !== t.deps) for (let n of t.deps) (n.reactions ??= []).push(t), 2 & n.f && !(512 & n.f) && (eX(n), e(n));
		}(e));
	}
	if (eS?.has(e)) return eS.get(e);
	if ((8388608 & e.f) != 0) throw e.v;
	return e.v;
}
function tH(e) {
	var t = tz;
	try {
		return tz = !0, e();
	} finally {
		tz = t;
	}
}
function tG(e, t = /* @__PURE__ */ new Set()) {
	if ("object" == typeof e && null !== e && !(e instanceof EventTarget) && !t.has(e)) {
		for (let n in t.add(e), e instanceof Date && e.getTime(), e) try {
			tG(e[n], t);
		} catch (e) {}
		let n = C(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = z(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch (e) {}
			}
		}
	}
}
var tY = ["touchstart", "touchmove"];
var tV = Symbol("events"), tX = /* @__PURE__ */ new Set(), tJ = /* @__PURE__ */ new Set();
function tK(e, t, n, r, l) {
	var a = {
		capture: r,
		passive: l
	}, s = function(e, t, n, r = {}) {
		function l(e) {
			if (r.capture || t0.call(t, e), !e.cancelBubble) return to(() => n?.call(this, e));
		}
		return e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e ? ev(() => {
			t.addEventListener(e, l, r);
		}) : t.addEventListener(e, l, r), l;
	}(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && tf(() => {
		t.removeEventListener(e, s, a);
	});
}
function tZ(e, t, n) {
	(t[tV] ??= {})[e] = n;
}
function tQ(e) {
	for (var t = 0; t < e.length; t++) tX.add(e[t]);
	for (var n of tJ) n(e);
}
function t0(e) {
	var t = this.ownerDocument, n = e.type, r = e.composedPath?.() || [], l = r[0] || e.target, a = 0, s = e == e && e[tV];
	if (s) {
		var i = r.indexOf(s);
		if (-1 !== i && (this === document || this === window)) {
			e[tV] = this;
			return;
		}
		var o = r.indexOf(this);
		if (-1 === o) return;
		i <= o && (a = i);
	}
	if ((l = r[a] || e.target) !== this) {
		E(e, "currentTarget", {
			configurable: !0,
			get: () => l || t
		});
		var c = tA, d = tj;
		tA = null, tj = null;
		try {
			for (var u, f = []; null !== l;) {
				var h = l.assignedSlot || l.parentNode || l.host || null;
				try {
					var p = l[tV]?.[n];
					null == p || l.disabled && e.target !== l || p.call(l, e);
				} catch (e) {
					u ? f.push(e) : u = e;
				}
				if (e.cancelBubble || h === this || null === h) break;
				l = h;
			}
			if (u) {
				for (let e of f) queueMicrotask(() => {
					throw e;
				});
				throw u;
			}
		} finally {
			e[tV] = this, delete e.currentTarget, tA = c, tj = d;
		}
	}
}
var t1 = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function t2(e, t) {
	var n = tj;
	null === n.nodes && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
function t5(e, t) {
	var n, r = (1 & t) != 0, l = (2 & t) != 0, a = !e.startsWith("<!>");
	return () => {
		if (Q) return t2(c, null), c;
		if (void 0 === n) {
			var t = a ? e : "<!>" + e, s = tl("template"), i = t.replaceAll("<!>", "<!---->");
			s.innerHTML = t1?.createHTML(i) ?? i, n = s.content, r || (n = e7(n));
		}
		var o = l || u ? document.importNode(n, !0) : n.cloneNode(!0);
		return r ? t2(e7(o), o.lastChild) : t2(o, o), o;
	};
}
function t3() {
	if (Q) return t2(c, null), c;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = e6();
	return e.append(t, n), t2(t, n), e;
}
function t4(e, t) {
	if (Q) {
		var n = tj;
		(!(32768 & n.f) || null === n.nodes.end) && (n.nodes.end = c), et();
		return;
	}
	null !== e && e.before(t);
}
function t8(e, t) {
	var n = null == t ? "" : "object" == typeof t ? `${t}` : t;
	n !== (e[G] ??= e.nodeValue) && (e[G] = n, e.nodeValue = `${n}`);
}
var t6 = /* @__PURE__ */ new Map();
function t7(e, { target: t, anchor: n, props: r = {}, events: l, context: a, intro: s = !0, transformError: i }) {
	let o;
	e8();
	var d, u = void 0, f = (d = () => {
		var s = n ?? t.appendChild(e6());
		new eN(s, { pending: () => {} }, (t) => {
			ed({});
			var n = ec;
			if (a && (n.c = a), l && (r.$$events = l), Q && t2(t, null), u = e(t, r) || {}, Q && (tj.nodes.end = c, null === c || 8 !== c.nodeType || "]" !== c.data)) throw Z(), J;
			eu();
		}, i);
		var o = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!o.has(r)) {
					o.add(r);
					var l = tY.includes(r);
					for (let e of [t, document]) {
						var a = t6.get(e);
						void 0 === a && (a = /* @__PURE__ */ new Map(), t6.set(e, a));
						var s = a.get(r);
						void 0 === s ? (e.addEventListener(r, t0, { passive: l }), a.set(r, 1)) : a.set(r, s + 1);
					}
				}
			}
		};
		return d(q(tX)), tJ.add(d), () => {
			for (var e of o) for (let n of [t, document]) {
				var r = t6.get(n), l = r.get(e);
				0 == --l ? (n.removeEventListener(e, t0), r.delete(e), 0 === r.size && t6.delete(n)) : r.set(e, l);
			}
			tJ.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	}, eL.ensure(), o = td(524352, d), (e = {}) => new Promise((t) => {
		e.outro ? t_(o, () => {
			tk(o), t(void 0);
		}) : (tk(o), t(void 0));
	}));
	return t9.set(u, f), u;
}
var t9 = /* @__PURE__ */ new WeakMap(), ne = class {
	anchor;
	#Y = /* @__PURE__ */ new Map();
	#V = /* @__PURE__ */ new Map();
	#X = /* @__PURE__ */ new Map();
	#J = /* @__PURE__ */ new Set();
	#K = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#K = t;
	}
	#$ = (e) => {
		if (this.#Y.has(e)) {
			var t = this.#Y.get(e), n = this.#V.get(t);
			if (n) t$(n, !0), this.#J.delete(t);
			else {
				var r = this.#X.get(t);
				r && (this.#V.set(t, r.effect), this.#X.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#Y) {
				if (this.#Y.delete(t), t === e) break;
				let r = this.#X.get(n);
				r && (tk(r.effect), this.#X.delete(n));
			}
			for (let [e, r] of this.#V) {
				if (e === t || this.#J.has(e)) continue;
				let l = () => {
					if (Array.from(this.#Y.values()).includes(e)) {
						var t = document.createDocumentFragment();
						tq(r, t), t.append(e6()), this.#X.set(e, {
							effect: r,
							fragment: t
						});
					} else tk(r);
					this.#J.delete(e), this.#V.delete(e);
				};
				this.#K || !n ? (this.#J.add(e), t_(r, l, !1)) : l();
			}
		}
	};
	#Z = (e) => {
		this.#Y.delete(e);
		let t = Array.from(this.#Y.values());
		for (let [e, n] of this.#X) t.includes(e) || (tk(n.effect), this.#X.delete(e));
	};
	ensure(e, t) {
		var n = e$;
		if (t && !this.#V.has(e) && !this.#X.has(e)) this.#V.set(e, tx(() => t(this.anchor)));
		this.#Y.set(n, e);
		Q && (this.anchor = c), this.#$(n);
	}
};
function nt(e, t, n = !1) {
	Q && (r = c, et());
	var r, l = new ne(e);
	function a(e, t) {
		if (Q && e !== parseInt(ea(r).substring(1))) {
			var n = el();
			ee(n), l.anchor = n, Q = !1, l.ensure(e, t), Q = !0;
			return;
		}
		l.ensure(e, t);
	}
	tb(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, a(n, t);
		}), e || a(-1, null);
	}, 65536 * !!n);
}
function nn(e, t) {
	return t;
}
function nr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) for (let t of (r = /* @__PURE__ */ new Set(), e.pending.values())) for (let n of t) r.add(e.items.get(n).e);
	for (var l = 0; l < t.length; l++) {
		var a = t[l];
		r?.has(a) ? (a.f |= 33554432, tq(a, document.createDocumentFragment())) : tk(t[l], n);
	}
}
function nl(e, t, n, r, l, a = null) {
	var s, i = e, o = /* @__PURE__ */ new Map();
	4 & t && (i = Q ? ee(e7(e)) : e.appendChild(e6())), Q && et();
	var d = null, u = eG(() => {
		var e = n();
		return y(e) ? e : null == e ? [] : q(e);
	}), f = /* @__PURE__ */ new Map(), h = !0;
	function v(e) {
		!(16384 & b.effect.f) && (b.pending.delete(e), b.fallback = d, function(e, t, n, r, l) {
			var a = (8 & r) != 0, s = t.length, i = e.items, o = na(e.effect.first), c = null, d = [], u = [];
			if (a) for (b = 0; b < s; b += 1) v = l(t[b], b), !(33554432 & (g = i.get(v).e).f) && (g.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(g));
			for (b = 0; b < s; b += 1) {
				if (v = l(t[b], b), g = i.get(v).e, null !== e.outrogroups) for (let t of e.outrogroups) t.pending.delete(g), t.done.delete(g);
				if (8192 & g.f && (t$(g, !0), a && (g.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(g))), (33554432 & g.f) != 0) if (g.f ^= 33554432, g === o) ns(g, null, n);
				else {
					var f = c ? c.next : o;
					g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ni(e, c, g), ni(e, g, f), ns(g, f, n), d = [], u = [], o = na((c = g).next);
					continue;
				}
				if (g !== o) {
					if (void 0 !== h && h.has(g)) {
						if (d.length < u.length) {
							var h, p, v, g, b, x, m = u[0];
							c = m.prev;
							var w = d[0], k = d[d.length - 1];
							for (x = 0; x < d.length; x += 1) ns(d[x], m, n);
							for (x = 0; x < u.length; x += 1) h.delete(u[x]);
							ni(e, w.prev, k.next), ni(e, c, w), ni(e, k, m), o = m, c = k, b -= 1, d = [], u = [];
						} else h.delete(g), ns(g, o, n), ni(e, g.prev, g.next), ni(e, g, null === c ? e.effect.first : c.next), ni(e, c, g), c = g;
						continue;
					}
					for (d = [], u = []; null !== o && o !== g;) (h ??= /* @__PURE__ */ new Set()).add(o), u.push(o), o = na(o.next);
					if (null === o) continue;
				}
				!(33554432 & g.f) && d.push(g), c = g, o = na(g.next);
			}
			if (null !== e.outrogroups) {
				for (let t of e.outrogroups) 0 === t.pending.size && (nr(e, q(t.done)), e.outrogroups?.delete(t));
				0 === e.outrogroups.size && (e.outrogroups = null);
			}
			if (null !== o || void 0 !== h) {
				var y = [];
				if (void 0 !== h) for (g of h) !(8192 & g.f) && y.push(g);
				for (; null !== o;) !(8192 & o.f) && o !== e.fallback && y.push(o), o = na(o.next);
				var _ = y.length;
				if (_ > 0) {
					if (a) {
						for (b = 0; b < _; b += 1) y[b].nodes?.a?.measure();
						for (b = 0; b < _; b += 1) y[b].nodes?.a?.fix();
					}
					(function(e, t, n) {
						for (var r, l = t.length, a = t.length, s = 0; s < l; s++) {
							let n = t[s];
							t_(n, () => {
								if (r) {
									if (r.pending.delete(n), r.done.add(n), 0 === r.pending.size) {
										var t = e.outrogroups;
										nr(e, q(r.done)), t.delete(r), 0 === t.size && (e.outrogroups = null);
									}
								} else a -= 1;
							}, !1);
						}
						if (0 === a) {
							var i = null !== n;
							if (i) {
								var o = n.parentNode;
								tr(o), o.append(n), e.items.clear();
							}
							nr(e, t, !i);
						} else r = {
							pending: new Set(t),
							done: /* @__PURE__ */ new Set()
						}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
					})(e, y, (4 & r) != 0 && 0 === s ? n : null);
				}
			}
			a && ev(() => {
				if (void 0 !== p) for (g of p) g.nodes?.a?.apply();
			});
		}(b, s, i, t, r), null !== d) && (0 === s.length ? (33554432 & d.f) == 0 ? t$(d, !0) : (d.f ^= 33554432, ns(d, null, i)) : t_(d, () => {
			d = null;
		}));
	}
	var b = {
		effect: tb(() => {
			var e = (s = tW(u)).length;
			let b = !1;
			Q && "[!" === ea(i) != (0 === e) && (ee(i = el()), Q = !1, b = !0);
			for (var x = /* @__PURE__ */ new Set(), m = e$, w = 0; w < e; w += 1) {
				Q && 8 === c.nodeType && "]" === c.data && (i = c, b = !0, Q = !1);
				var k = s[w], y = r(k, w), _ = h ? null : o.get(y);
				_ ? (_.v && e5(_.v, k), _.i && e5(_.i, w)) : (_ = function(e, t, n, r, l, a, s, i) {
					var o = (1 & s) != 0 ? (16 & s) == 0 ? e1(n, !1, !1) : eQ(n) : null, c = (2 & s) != 0 ? eQ(l) : null;
					return {
						v: o,
						i: c,
						e: tx(() => (a(t, o ?? n, c ?? l, i), () => {
							e.delete(r);
						}))
					};
				}(o, h ? i : p ??= e6(), k, y, w, l, t, n), h || (_.e.f |= 33554432), o.set(y, _)), x.add(y);
			}
			if (0 === e && a && !d && (h ? d = tx(() => a(i)) : (d = tx(() => a(p ??= e6())), d.f |= 33554432)), e > x.size && function() {
				throw Error("https://svelte.dev/e/each_key_duplicate");
			}(), Q && e > 0 && ee(el()), !h) {
				if (f.set(m, x), 1) v(m);
			}
			b && (Q = !0), tW(u);
		}),
		flags: t,
		items: o,
		pending: f,
		outrogroups: null,
		fallback: d
	};
	h = !1, Q && (i = c);
}
function na(e) {
	for (; null !== e && (32 & e.f) == 0;) e = e.next;
	return e;
}
function ns(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, l = e.nodes.end, a = t && (33554432 & t.f) == 0 ? t.nodes.start : n; null !== r;) {
		var s = e9(r);
		if (a.before(r), r === l) return;
		r = s;
	}
}
function ni(e, t, n) {
	null === t ? e.effect.first = n : t.next = n, null === n ? e.effect.last = t : n.prev = t;
}
function no(e, t) {
	td(4, () => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = tl("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
function nc(e) {
	return "object" == typeof e ? function() {
		for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++) (e = arguments[n]) && (t = function e(t) {
			var n, r, l = "";
			if ("string" == typeof t || "number" == typeof t) l += t;
			else if ("object" == typeof t) if (Array.isArray(t)) {
				var a = t.length;
				for (n = 0; n < a; n++) t[n] && (r = e(t[n])) && (l && (l += " "), l += r);
			} else for (r in t) t[r] && (l && (l += " "), l += r);
			return l;
		}(e)) && (r && (r += " "), r += t);
		return r;
	}(e) : e ?? "";
}
var nd = [..." 	\n\r\f\xA0\v﻿"];
function nu(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var l of Object.keys(e)) {
		var a = e[l];
		null != a && "" !== a && (r += " " + l + ": " + a + n);
	}
	return r;
}
function nf(e) {
	return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e;
}
function nh(e, t, n, r, l, a) {
	var s = e[W];
	if (Q || s !== n || void 0 === s) {
		var i = function(e, t, n) {
			var r = null == e ? "" : "" + e;
			if (t && (r = r ? r + " " + t : t), n) {
				for (var l of Object.keys(n)) if (n[l]) r = r ? r + " " + l : l;
				else if (r.length) for (var a = l.length, s = 0; (s = r.indexOf(l, s)) >= 0;) {
					var i = s + a;
					(0 === s || nd.includes(r[s - 1])) && (i === r.length || nd.includes(r[i])) ? r = (0 === s ? "" : r.substring(0, s)) + r.substring(i + 1) : s = i;
				}
			}
			return "" === r ? null : r;
		}(n, r, a);
		Q && i === e.getAttribute("class") || (null == i ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e[W] = n;
	} else if (a && l !== a) for (var o in a) {
		var c = !!a[o];
		(null == l || !!l[o] !== c) && e.classList.toggle(o, c);
	}
	return a;
}
function np(e, t = {}, n, r) {
	for (var l in n) {
		var a = n[l];
		t[l] !== a && (null == n[l] ? e.style.removeProperty(l) : e.style.setProperty(l, a, r));
	}
}
function nv(e, t, n, r) {
	var l = e[H];
	if (Q || l !== t) {
		var a = function(e, t) {
			if (t) {
				var n, r, l = "";
				if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
					e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
					var a = !1, s = 0, i = !1, o = [];
					n && o.push(...Object.keys(n).map(nf)), r && o.push(...Object.keys(r).map(nf));
					var c = 0, d = -1;
					let t = e.length;
					for (var u = 0; u < t; u++) {
						var f = e[u];
						if (i ? "/" === f && "*" === e[u - 1] && (i = !1) : a ? a === f && (a = !1) : "/" === f && "*" === e[u + 1] ? i = !0 : "\"" === f || "'" === f ? a = f : "(" === f ? s++ : ")" === f && s--, !i && !1 === a && 0 === s) {
							if (":" === f && -1 === d) d = u;
							else if (";" === f || u === t - 1) {
								if (-1 !== d) {
									var h = nf(e.substring(c, d).trim());
									o.includes(h) || (";" !== f && u++, l += " " + e.substring(c, u).trim() + ";");
								}
								c = u + 1, d = -1;
							}
						}
					}
				}
				return n && (l += nu(n)), r && (l += nu(r, !0)), "" === (l = l.trim()) ? null : l;
			}
			return null == e ? null : String(e);
		}(t, r);
		Q && a === e.getAttribute("style") || (null == a ? e.removeAttribute("style") : e.style.cssText = a), e[H] = t;
	} else r && (Array.isArray(r) ? (np(e, n?.[0], r[0]), np(e, n?.[1], r[1], "important")) : np(e, n, r));
	return r;
}
var ng = Symbol("is custom element"), nb = Symbol("is html"), nx = X ? "link" : "LINK";
function nm(e, t, n, r) {
	var l, a = (l = e, l[U] ??= {
		[ng]: l.nodeName.includes("-"),
		[nb]: "http://www.w3.org/1999/xhtml" === l.namespaceURI
	});
	Q && (a[t] = e.getAttribute(t), "src" === t || "srcset" === t || "href" === t && e.nodeName === nx) || a[t] !== (a[t] = n) && ("loading" === t && (e[B] = n), null == n ? e.removeAttribute(t) : "string" != typeof n && (function(e) {
		var t, n = e.getAttribute("is") || e.nodeName, r = nw.get(n);
		if (r) return r;
		nw.set(n, r = []);
		for (var l = e, a = Element.prototype; a !== l;) {
			for (var s in t = z(l)) t[s].set && "innerHTML" !== s && "textContent" !== s && "innerText" !== s && r.push(s);
			l = C(l);
		}
		return r;
	})(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var nw = /* @__PURE__ */ new Map();
function nk(e) {
	var t = e.type;
	return "number" === t || "range" === t;
}
function ny(e) {
	return "" === e ? null : +e;
}
function n_(e, t) {
	return e === t || e?.[R] === t;
}
function n$(e = {}, t, n, r) {
	var l = ec.r, a = tj;
	return td(4, () => {
		var s, i;
		return tv(() => {
			s = i, i = r?.() || [], tH(() => {
				!n_(n(...i), e) && (t(e, ...i), s && n_(n(...s), e) && t(null, ...s));
			});
		}), () => {
			let r = a;
			for (; r !== l && null !== r.parent && 33554432 & r.parent.f;) r = r.parent;
			let s = r.teardown;
			r.teardown = () => {
				i && n_(n(...i), e) && t(null, ...i), s?.();
			};
		};
	}), e;
}
function nq(e, t) {
	if (e.l.s) for (let t of e.l.s) tW(t);
	t();
}
function nS(e, t, n, r) {
	let l;
	var a, s, i = !eo || (2 & n) != 0, o = (8 & n) != 0, c = (16 & n) != 0, d = r, u = !0, f = void 0, h = () => c && i ? tW(f ??= eU(r)) : (u && (u = !1, d = c ? tH(r) : r), d);
	if (o) {
		var p = R in e || N in e;
		l = A(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var v = !1;
	if (o ? [a, v] = function(e) {
		var t = ek;
		try {
			return ek = !1, [e(), ek];
		} finally {
			ek = t;
		}
	}(() => e[t]) : a = e[t], void 0 === a && void 0 !== r && (a = h(), l && (i && function() {
		throw Error("https://svelte.dev/e/props_invalid_value");
	}(), l(a))), s = i ? () => {
		var n = e[t];
		return void 0 === n ? h() : (u = !0, n);
	} : () => {
		var n = e[t];
		return void 0 !== n && (d = void 0), void 0 === n ? d : n;
	}, i && (4 & n) == 0) return s;
	if (l) {
		var g = e.$$legacy;
		return function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || v) && l(t ? s() : e), e) : s();
		};
	}
	var b = !1, x = ((1 & n) != 0 ? eU : eG)(() => (b = !1, s()));
	o && tW(x);
	var m = tj;
	return function(e, t) {
		if (arguments.length > 0) {
			let n = t ? tW(x) : i && o ? e4(e) : e;
			return e2(x, n), b = !0, void 0 !== d && (d = n), e;
		}
		return tE && b || (16384 & m.f) != 0 ? x.v : tW(x);
	};
}
var nE = class {
	#Q;
	#ee;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = e1(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get: (e, r) => tW(t.get(r) ?? n(r, Reflect.get(e, r))),
			has: (e, r) => r === N || (tW(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
			set: (e, r, l) => (e2(t.get(r) ?? n(r, l), l), Reflect.set(e, r, l))
		});
		for (let t of (this.#ee = (e.hydrate ? function(e, t) {
			e8(), t.intro = t.intro ?? !1;
			let n = t.target, r = Q, l = c;
			try {
				for (var a = e7(n); a && (8 !== a.nodeType || "[" !== a.data);) a = e9(a);
				if (!a) throw J;
				Q = !0, ee(a);
				let r = t7(e, {
					...t,
					anchor: a
				});
				return Q = !1, r;
			} catch (r) {
				if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
				return r !== J && console.warn("Failed to hydrate: ", r), !1 === t.recover && function() {
					throw Error("https://svelte.dev/e/hydration_failed");
				}(), e8(), tr(n), Q = !1, t7(e, t);
			} finally {
				Q = r, ee(l);
			}
		} : function(e, t) {
			return t7(e, t);
		})(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), e?.props?.$$host && !1 !== e.sync || eO(), this.#Q = r.$$events, Object.keys(this.#ee))) "$set" !== t && "$destroy" !== t && "$on" !== t && E(this, t, {
			get() {
				return this.#ee[t];
			},
			set(e) {
				this.#ee[t] = e;
			},
			enumerable: !0
		});
		this.#ee.$set = (e) => {
			Object.assign(r, e);
		}, this.#ee.$destroy = () => {
			var e;
			let t;
			e = this.#ee, (t = t9.get(e)) ? (t9.delete(e), t(void 0)) : Promise.resolve();
		};
	}
	$set(e) {
		this.#ee.$set(e);
	}
	$on(e, t) {
		this.#Q[e] = this.#Q[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#Q[e].push(n), () => {
			this.#Q[e] = this.#Q[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#ee.$destroy();
	}
};
function nA(e, t, n, r) {
	let l = n[e]?.type;
	if (t = "Boolean" === l && "boolean" != typeof t ? null != t : t, !r || !n[e]) return t;
	if ("toAttribute" === r) switch (l) {
		case "Object":
		case "Array": return null == t ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return null == t ? null : t;
		default: return t;
	}
	switch (l) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean":
		default: return t;
		case "Number": return null != t ? +t : t;
	}
}
function nz(e, t, n, r, l, a) {
	let s = class extends v {
		constructor() {
			super(e, n, l), this.$$p_d = t;
		}
		static get observedAttributes() {
			return S(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return S(t).forEach((e) => {
		E(s.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = nA(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (A(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		E(s.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (s = a(s)), e.element = s, s;
}
function nj(e) {
	var t;
	null === ec && function() {
		throw Error("https://svelte.dev/e/lifecycle_outside_component");
	}(), eo && null !== ec.l ? (t = ec.l, t.u ??= {
		a: [],
		b: [],
		m: []
	}).m.push(e) : th(() => {
		let t = tH(e);
		if ("function" == typeof t) return t;
	});
}
"function" == typeof HTMLElement && (v = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			var e, t;
			let r, l;
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function n(e) {
				return (t) => {
					let n = tl("slot");
					"default" !== e && (n.name = e), t4(t, n);
				};
			}
			let a = {}, s = (t = this, l = {}, t.childNodes.forEach((e) => {
				l[e.slot || "default"] = !0;
			}), l);
			for (let e of this.$$s) e in s && ("default" !== e || this.$$d.children ? a[e] = n(e) : (this.$$d.children = n(e), a.default = !0));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = nA(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) e in this.$$d || void 0 === this[e] || (this.$$d[e] = this[e], delete this[e]);
			for (let t in this.$$c = new nE({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: a,
					$$host: this
				}
			}), this.$$me = (e = () => {
				tv(() => {
					for (let e of (this.$$r = !0, S(this.$$c))) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = nA(e, this.$$d[e], this.$$p_d, "toAttribute");
						null == t ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			}, eL.ensure(), r = td(524352, e), () => {
				tk(r);
			}), this.$$l) for (let e of this.$$l[t]) {
				let n = this.$$c.$on(t, e);
				this.$$l_u.set(e, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = nA(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return S(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
}), "u" > typeof window && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
var nF = {}, nC = function(e, t, n) {
	let r = Promise.resolve();
	if (t && t.length > 0) {
		let e = document.getElementsByTagName("link"), l = document.querySelector("meta[property=csp-nonce]"), a = l?.nonce || l?.getAttribute("nonce");
		r = Promise.all(t.map((t) => {
			if ((t = new URL(t, n).href) in nF) return;
			nF[t] = !0;
			let r = t.endsWith(".css");
			if (n) for (let n = e.length - 1; n >= 0; n--) {
				let l = e[n];
				if (l.href === t && (!r || "stylesheet" === l.rel)) return;
			}
			else if (document.querySelector(`link[href="${t}"]${r ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let l = document.createElement("link");
			if (l.rel = r ? "stylesheet" : "modulepreload", r || (l.as = "script"), l.crossOrigin = "", l.href = t, a && l.setAttribute("nonce", a), document.head.appendChild(l), r) return new Promise((e, n) => {
				l.addEventListener("load", e), l.addEventListener("error", () => n(Error(`Unable to preload CSS for ${t}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function l(e) {
		let t = new Event("vite:preloadError", { cancelable: !0 });
		if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
	}
	return r.then((t) => {
		for (let e of t || []) "rejected" === e.status && l(e.reason);
		return e().catch(l);
	});
}, nP = [[
	"Scroll",
	"自定义虚拟滚动条",
	() => nC(() => import("./Scroll-BkYw2Usz.js"), [], import.meta.url)
], [
	"Wait",
	"加载动画与表单提交遮罩",
	() => nC(() => import("./Wait-aK6XbIi8.js"), [], import.meta.url)
]], nL = t5("<b class=\"aside-header svelte-paud8n\"><a href=\"/\"><i class=\"icon-home svelte-paud8n\"></i><b>主页</b></a><a href=\"https://groups.google.com/g/webc-site\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"svelte-paud8n\"><i class=\"icon-forum svelte-paud8n\"></i><b>论坛</b></a></b>"), nO = {
	hash: "svelte-paud8n",
	code: ".aside-header.svelte-paud8n {display:flex;gap:8px;margin-bottom:12px;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) {flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;font-size:13px;font-weight:500;border-radius:10px;border:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.4);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);}.aside-header.svelte-paud8n a:where(.svelte-paud8n):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-0.5px);}.aside-header.svelte-paud8n a.active:where(.svelte-paud8n) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;font-weight:600;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i:where(.svelte-paud8n) {width:16px;height:16px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;display:inline-block;background:currentColor;}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-home:where(.svelte-paud8n) {mask-image:var(--homeSvg);}.aside-header.svelte-paud8n a:where(.svelte-paud8n) i.icon-forum:where(.svelte-paud8n) {mask-image:var(--groupSvg);}"
};
function nT(e, t) {
	ed(t, !0), no(e, nO);
	let n = nS(t, "active_index", 7);
	var r = nL(), l = te(r);
	return er(), en(r), tg(() => nh(l, 1, nc(-2 == n() ? "active" : ""), "svelte-paud8n")), t4(e, r), eu({
		get active_index() {
			return n();
		},
		set active_index($$value) {
			n($$value), eO();
		}
	});
}
nz(nT, { active_index: {} }, [], [], { mode: "open" });
var nM = t5("<b class=\"svelte-jjbop4\"><input type=\"text\" placeholder=\"搜索组件...\" class=\"svelte-jjbop4\"/></b>"), nD = {
	hash: "svelte-jjbop4",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-jjbop4 {position:relative;display:flex;}b.svelte-jjbop4 input:where(.svelte-jjbop4) {box-sizing:border-box;flex:1;min-width:0;padding:10px 36px 10px 16px;font-size:14px;border-radius:10px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:var(--searchSvg) no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0));border:1px solid rgba(0,0,0,0.122);color:#1d1d1f;outline:none;}b.svelte-jjbop4 input:where(.svelte-jjbop4)::placeholder {color:#86868b;font-weight:normal;}b.svelte-jjbop4 input:where(.svelte-jjbop4):focus {border-color:#0071e3;background:var(--searchSvg) no-repeat right 12px center, linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.302));}\n@media (max-width: 800px) {b.svelte-jjbop4 input:where(.svelte-jjbop4) {font-size:16px;}\n}"
};
function nR(e, t) {
	ed(t, !0), no(e, nD);
	let n = nS(t, "search_query", 15);
	var r = nM(), l = te(r);
	if (Q) {
		var a = !1, s = () => {
			if (!a) {
				if (a = !0, l.hasAttribute("value")) {
					var e = l.value;
					nm(l, "value", null), l.value = e;
				}
				if (l.hasAttribute("checked")) {
					var t = l.checked;
					nm(l, "checked", null), l.checked = t;
				}
			}
		};
		l[Y] = s, ev(s), ti();
	}
	return en(r), function(e, t, n = t) {
		var r = /* @__PURE__ */ new WeakSet();
		(function(e, t, n, r = n) {
			e.addEventListener(t, () => to(n));
			let l = e[Y];
			l ? e[Y] = () => {
				l(), r(!0);
			} : e[Y] = () => r(!0), ti();
		})(e, "input", async (l) => {
			var a = l ? e.defaultValue : e.value;
			if (n(a = nk(e) ? ny(a) : a), null !== e$ && r.add(e$), await tU(), a !== (a = t())) {
				var s = e.selectionStart, i = e.selectionEnd, o = e.value.length;
				if (e.value = a ?? "", null !== i) {
					var c = e.value.length;
					s === i && i === o && c > o ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = s, e.selectionEnd = Math.min(i, c));
				}
			}
		}), (Q && e.defaultValue !== e.value || null == tH(t) && e.value) && (n(nk(e) ? ny(e.value) : e.value), null !== e$ && r.add(e$)), tv(() => {
			var n = t();
			if (e === document.activeElement) {
				var l = e$;
				if (r.has(l)) return;
			}
			nk(e) && n === ny(e.value) || ("date" !== e.type || n || e.value) && n !== e.value && (e.value = n ?? "");
		});
	}(l, n), t4(e, r), eu({
		get search_query() {
			return n();
		},
		set search_query($$value) {
			n($$value), eO();
		}
	});
}
nz(nR, { search_query: {} }, [], [], { mode: "open" });
var nN = t5("<a><b class=\"svelte-1xkx02v\">→</b><b class=\"svelte-1xkx02v\"> </b><b class=\"svelte-1xkx02v\"> </b></a>"), nB = t5("<aside><v-scroll><nav class=\"svelte-1xkx02v\"><!><!><b class=\"x-nav svelte-1xkx02v\"><a href=\"/x\"><b class=\"svelte-1xkx02v\">→</b><b class=\"svelte-1xkx02v\">x</b><b class=\"svelte-1xkx02v\"> </b></a></b><b class=\"nav-list svelte-1xkx02v\"></b></nav></v-scroll></aside>", 2), nI = {
	hash: "svelte-1xkx02v",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}aside.svelte-1xkx02v {width:248px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v) {flex:1;min-height:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {box-sizing:border-box;padding-left:var(--gap);}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {width:100%;padding:var(--gap) 0;display:flex;flex-direction:column;box-sizing:border-box;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) {display:flex;flex-direction:column;gap:6px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) {box-sizing:border-box;padding:12px 16px;font-size:14px;border-radius:10px;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);display:flex;flex-direction:column;align-items:stretch;gap:4px;background:rgba(255,255,255,0.4);border:1px solid rgba(0,0,0,0.031);color:#1d1d1f;text-align:left;cursor:pointer;position:relative;text-decoration:none;box-shadow:0 1px 2px rgba(0,0,0,0.02);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {padding-right:38px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover,\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover {background:rgba(255,255,255,0.702);border-color:rgba(0,0,0,0.059);box-shadow:0 4px 12px rgba(0,0,0,0.039);transform:translateY(-1px);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v):hover > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) {background:rgba(0,113,227,0.078);border-color:rgba(0,113,227,0.2);color:#0071e3;box-shadow:inset 0 1px 1px rgba(255,255,255,0.502);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {color:#0071e3;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {color:rgba(0,113,227,0.8);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a.active:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {opacity:1;color:#0071e3;transform:translateX(0);}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(1) {position:absolute;right:12px;left:auto;top:50%;margin-top:-8px;opacity:0;transform:translateX(6px);transition:all 0.25s ease;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(2) {font-size:15px;font-weight:600;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3),\naside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) a:where(.svelte-1xkx02v) > b:where(.svelte-1xkx02v):nth-child(3) {font-size:12px;color:#86868b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;transition:color 0.25s ease;}aside.svelte-1xkx02v .x-nav:where(.svelte-1xkx02v) {margin-top:12px;}aside.svelte-1xkx02v .nav-list:where(.svelte-1xkx02v) {margin-top:6px;}\n@media (max-width: 800px) {aside.svelte-1xkx02v {position:fixed;top:0;right:0;bottom:0;left:auto;width:280px;max-width:85%;z-index:100;background:rgba(245,245,247,0.933);backdrop-filter:blur(40px);transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);padding:0;}aside.svelte-1xkx02v v-scroll:where(.svelte-1xkx02v)::part(scroll) {padding-left:0;}aside.svelte-1xkx02v nav:where(.svelte-1xkx02v) {padding:16px 16px 32px;}aside.show.svelte-1xkx02v {transform:translateX(0);}\n}::highlight(search-match) {background:#ffe066;color:#000;}"
};
function nU(e, t) {
	ed(t, !0), no(e, nI);
	let n = "search-match", r = nS(t, "active_index", 15), l = nS(t, "aside_open", 15), a = nS(t, "class", 7, ""), s = e0(""), i = e0(null), o = 0, c = 0, d = eH(() => {
		let e, t;
		return t = (e = tW(s).trim().toLowerCase()) ? e.split(/\s+/) : [], nP.map((e, t) => [e, t]).filter(([[e, n]]) => {
			if (!t.length) return !0;
			let r = e.toLowerCase(), l = n.toLowerCase();
			return t.some((e) => r.includes(e) || l.includes(e));
		});
	});
	th(() => {
		let e;
		if (tW(d), !tW(i) || "u" < typeof CSS || !CSS.highlights) return;
		CSS.highlights.delete(n);
		let t = tW(s).trim().toLowerCase(), r = t ? t.split(/\s+/).filter(Boolean) : [];
		if (!r.length) return;
		let l = [], a = document.createTreeWalker(tW(i), NodeFilter.SHOW_TEXT);
		for (; e = a.nextNode();) {
			if (e.parentElement?.matches("a > b:nth-child(3)")) continue;
			let t = e.textContent.toLowerCase();
			for (let n of r) {
				let r = 0;
				for (; -1 != (r = t.indexOf(n, r));) {
					let t = new Range();
					t.setStart(e, r), t.setEnd(e, r + n.length), l.push(t), r += n.length;
				}
			}
		}
		if (l.length) {
			let e = new Highlight(...l);
			CSS.highlights.set(n, e);
		}
	});
	var u = nB(), f = te(u);
	nh(f, 1, "svelte-1xkx02v");
	var h = te(f), p = te(h);
	nT(p, { get active_index() {
		return r();
	} });
	var v = tn(p);
	nR(v, {
		get search_query() {
			return tW(s);
		},
		set search_query($$value) {
			e2(s, $$value, !0);
		}
	});
	var g = tn(v), b = te(g), x = tn(te(b), 2), m = te(x, !0);
	en(x), en(b), en(g);
	var w = tn(g);
	return nl(w, 21, () => tW(d), nn, (e, t) => {
		var n = eH(() => D(tW(t), 2)), l = eH(() => D(tW(n)[0], 2));
		let a = () => tW(l)[0];
		var s = nN(), i = tn(te(s)), o = te(i, !0);
		en(i);
		var c = tn(i), d = te(c, !0);
		en(c), en(s), tg(() => {
			nh(s, 1, nc(tW(n)[1] == r() ? "active" : ""), "svelte-1xkx02v"), nm(s, "href", "/" + a()), t8(o, a()), t8(d, tW(l)[1]);
		}), t4(e, s);
	}), en(w), en(h), n$(h, (e) => e2(i, e), () => tW(i)), en(f), en(u), tg(() => {
		nh(u, 1, nc(a()), "svelte-1xkx02v"), nh(b, 1, nc(-3 == r() ? "active" : ""), "svelte-1xkx02v"), t8(m, "webc.site 的基础依赖库");
	}), tZ("touchstart", u, (e) => {
		e.touches && e.touches[0] && (o = e.touches[0].clientX, c = e.touches[0].clientY);
	}), tZ("touchend", u, (e) => {
		if (e.changedTouches && e.changedTouches[0]) {
			let t = e.changedTouches[0], n = t.clientX - o;
			Math.abs(n) > 1.5 * Math.abs(t.clientY - c) && Math.abs(n) > 50 && l(!1);
		}
	}), t4(e, u), eu({
		get active_index() {
			return r();
		},
		set active_index($$value) {
			r($$value), eO();
		},
		get aside_open() {
			return l();
		},
		set aside_open($$value) {
			l($$value), eO();
		},
		get class() {
			return a();
		},
		set class($$value = "") {
			a($$value), eO();
		}
	});
}
tQ(["touchstart", "touchend"]), nz(nU, {
	active_index: {},
	aside_open: {},
	class: {}
}, [], [], { mode: "open" });
var nW = (e) => {
	switch (e) {
		case 1: return 3;
		case 2: return 4;
		case 3: return 5;
		case 4: return 6;
		case 5: return 7;
		default: return 8;
	}
};
function nH(e) {
	0 !== e.text.length && (console.assert(e.len > 0, "Never adding text to root"), e.renderer.add_text(e.renderer.data, e.text), e.text = "");
}
function nG(e) {
	console.assert(e.len > 0, "No nodes to end"), e.len -= 1, e.token = e.tokens[e.len], e.renderer.end_token(e.renderer.data);
}
function nY(e, t) {
	(24 === e.tokens[e.len] || 23 === e.tokens[e.len]) && 25 !== t && nG(e), e.len += 1, e.tokens[e.len] = t, e.token = t, e.renderer.add_token(e.renderer.data, t);
}
function nV(e, t) {
	for (e.fence_start = 0; e.len > t;) nG(e);
}
function nX(e, t) {
	let n = 0;
	for (let r = 0; r <= e.len && !((t -= e.spaces[r]) < 0); r += 1) switch (e.tokens[r]) {
		case 9:
		case 10:
		case 20:
		case 25: n = r;
	}
	for (; e.len > n;) nG(e);
	return t;
}
function nJ(e, t) {
	let n = -1, r = -1;
	for (let l = e.blockquote_idx + 1; l <= e.len; l += 1) if (25 === e.tokens[l]) {
		if (e.indent_len < e.spaces[l]) {
			r = -1;
			break;
		}
		r = l;
	} else e.tokens[l] === t && (n = l);
	return -1 === r ? -1 === n ? (nV(e, e.blockquote_idx), nY(e, t), !0) : (nV(e, n), !1) : (nV(e, r), nY(e, t), !0);
}
function nK(e, t) {
	nY(e, 25), e.spaces[e.len] = e.indent_len + t, nZ(e), e.token = 103;
}
function nZ(e) {
	e.indent = "", e.indent_len = 0, e.pending = "";
}
function nQ(e) {
	switch (e) {
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57: return !0;
		default: return !1;
	}
}
function n0(e, t) {
	for (let r of t) {
		if (101 === e.token) {
			switch (r) {
				case " ":
					e.indent_len += 1;
					continue;
				case "	":
					e.indent_len += 4;
					continue;
			}
			let t = nX(e, e.indent_len);
			e.indent_len = 0, e.token = e.tokens[e.len], t > 0 && n0(e, " ".repeat(t));
		}
		let t = e.pending + r;
		switch (e.token) {
			case 21:
			case 1:
			case 20:
			case 24:
			case 23:
				switch (console.assert(0 === e.text.length, "Root should not have any text"), e.pending[0]) {
					case void 0:
						e.pending = r;
						continue;
					case " ":
						console.assert(1 === e.pending.length), e.pending = r, e.indent += " ", e.indent_len += 1;
						continue;
					case "	":
						console.assert(1 === e.pending.length), e.pending = r, e.indent += "	", e.indent_len += 4;
						continue;
					case "\n":
						if (console.assert(1 === e.pending.length), 25 === e.tokens[e.len] && 21 === e.token) {
							nG(e), nZ(e), e.pending = r;
							continue;
						}
						nV(e, e.blockquote_idx), nZ(e), e.blockquote_idx = 0, e.fence_start = 0, e.pending = r;
						continue;
					case "#":
						switch (r) {
							case "#":
								if (e.pending.length < 6) {
									e.pending = t;
									continue;
								}
								break;
							case " ":
								nX(e, e.indent_len), nY(e, nW(e.pending.length)), nZ(e);
								continue;
						}
						break;
					case ">": {
						let t = function(e, t) {
							for (; t <= e.len;) {
								if (20 === e.tokens[t]) return t;
								t += 1;
							}
							return -1;
						}(e, e.blockquote_idx + 1);
						-1 === t ? (nV(e, e.blockquote_idx), e.blockquote_idx += 1, e.fence_start = 0, nY(e, 20)) : e.blockquote_idx = t, nZ(e), e.pending = r;
						continue;
					}
					case "-":
					case "*":
					case "_":
						if (0 === e.hr_chars && (console.assert(1 === e.pending.length, "Pending should be one character"), e.hr_chars = 1, e.hr_char = e.pending), e.hr_chars > 0) {
							switch (r) {
								case e.hr_char:
									e.hr_chars += 1, e.pending = t;
									continue;
								case " ":
									e.pending = t;
									continue;
								case "\n":
									if (e.hr_chars < 3) break;
									nX(e, e.indent_len), e.renderer.add_token(e.renderer.data, 22), e.renderer.end_token(e.renderer.data), nZ(e), e.hr_chars = 0;
									continue;
							}
							e.hr_chars = 0;
						}
						if ("_" !== e.pending[0] && " " === e.pending[1]) {
							nJ(e, 23), nK(e, 2), n0(e, t.slice(2));
							continue;
						}
						break;
					case "`":
						if (e.pending.length < 3) {
							if ("`" === r) {
								e.pending = t, e.fence_start = t.length;
								continue;
							}
							e.fence_start = 0;
							break;
						}
						switch (r) {
							case "`":
								e.pending.length === e.fence_start ? (e.pending = t, e.fence_start = t.length) : (nY(e, 2), nZ(e), e.fence_start = 0, n0(e, t));
								continue;
							case "\n":
								nX(e, e.indent_len), nY(e, 10), e.pending.length > e.fence_start && e.renderer.set_attr(e.renderer.data, 4, e.pending.slice(e.fence_start)), nZ(e), e.token = 101;
								continue;
							default:
								e.pending = t;
								continue;
						}
					case "+":
						if (" " !== r) break;
						nJ(e, 23), nK(e, 2);
						continue;
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						if ("." === e.pending[e.pending.length - 1]) {
							if (" " !== r) break;
							nJ(e, 24) && "1." !== e.pending && e.renderer.set_attr(e.renderer.data, 16, e.pending.slice(0, -1)), nK(e, e.pending.length + 1);
							continue;
						}
						{
							let n = r.charCodeAt(0);
							if (46 === n || nQ(n)) {
								e.pending = t;
								continue;
							}
						}
						break;
					case "|":
						nV(e, e.blockquote_idx), nY(e, 27), nY(e, 28), e.pending = "", n0(e, r);
						continue;
				}
				let l = t;
				if (21 === e.token) e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data);
				else if (e.indent_len >= 4) {
					let n = 0;
					for (; n < 4; n += 1) if ("	" === e.indent[n]) {
						n += 1;
						break;
					}
					l = e.indent.slice(n) + t, nY(e, 9);
				} else nY(e, 2);
				nZ(e), n0(e, l);
				continue;
			case 27:
				if (1 === e.table_state) switch (r) {
					case "-":
					case " ":
					case "|":
					case ":":
						e.pending = t;
						continue;
					case "\n":
						e.table_state = 2, e.pending = "";
						continue;
					default: nG(e), e.table_state = 0;
				}
				else switch (e.pending) {
					case "|":
						nY(e, 28), e.pending = "", n0(e, r);
						continue;
					case "\n":
						nG(e), e.pending = "", e.table_state = 0, n0(e, r);
						continue;
				}
				break;
			case 28:
				switch (e.pending) {
					case "": break;
					case "|":
						nY(e, 29), nG(e), e.pending = "", n0(e, r);
						continue;
					case "\n":
						nG(e), e.table_state = Math.min(e.table_state + 1, 2), e.pending = "", n0(e, r);
						continue;
					default:
						nY(e, 29), n0(e, r);
						continue;
				}
				break;
			case 29:
				if ("|" === e.pending) {
					nH(e), nG(e), e.pending = "", n0(e, r);
					continue;
				}
				break;
			case 9: switch (t) {
				case "\n    ":
				case "\n   	":
				case "\n  	":
				case "\n 	":
				case "\n	":
					e.text += "\n", e.pending = "";
					continue;
				case "\n":
				case "\n ":
				case "\n  ":
				case "\n   ":
					e.pending = t;
					continue;
				default:
					0 !== e.pending.length ? (nH(e), nG(e), e.pending = r) : e.text += r;
					continue;
			}
			case 10:
				switch (r) {
					case "`":
						e.pending = t;
						continue;
					case "\n":
						if (t.length === e.fence_start + e.fence_end + 1) {
							nH(e), nG(e), e.pending = "", e.fence_start = 0, e.fence_end = 0, e.token = 101;
							continue;
						}
						e.token = 101;
						break;
					case " ": if ("\n" === e.pending[0]) {
						e.pending = t, e.fence_end += 1;
						continue;
					}
				}
				e.text += e.pending, e.pending = r, e.fence_end = 1;
				continue;
			case 11: switch (r) {
				case "`":
					t.length === e.fence_start + Number(" " === e.pending[0]) ? (nH(e), nG(e), e.pending = "", e.fence_start = 0) : e.pending = t;
					continue;
				case "\n":
					e.text += e.pending, e.pending = "", e.token = 21, e.blockquote_idx = 0, nH(e);
					continue;
				case " ":
					e.text += e.pending, e.pending = r;
					continue;
				default:
					e.text += t, e.pending = "";
					continue;
			}
			case 103:
				switch (e.pending.length) {
					case 0:
						if ("[" !== r) break;
						e.pending = t;
						continue;
					case 1:
						if (" " !== r && "x" !== r) break;
						e.pending = t;
						continue;
					case 2:
						if ("]" !== r) break;
						e.pending = t;
						continue;
					case 3:
						if (" " !== r) break;
						e.renderer.add_token(e.renderer.data, 26), "x" === e.pending[1] && e.renderer.set_attr(e.renderer.data, 8, ""), e.renderer.end_token(e.renderer.data), e.pending = " ";
						continue;
				}
				e.token = e.tokens[e.len], e.pending = "", n0(e, t);
				continue;
			case 14:
			case 15: {
				let t = "*", n = 12;
				if (15 === e.token && (t = "_", n = 13), t === e.pending) {
					if (nH(e), t === r) {
						nG(e), e.pending = "";
						continue;
					}
					nY(e, n), e.pending = r;
					continue;
				}
				break;
			}
			case 12:
			case 13: {
				let n = "*", l = 14;
				switch (13 === e.token && (n = "_", l = 15), e.pending) {
					case n:
						n === r ? e.tokens[e.len - 1] === l ? e.pending = t : (nH(e), nY(e, l), e.pending = "") : (nH(e), nG(e), e.pending = r);
						continue;
					case n + n:
						let a = e.token;
						nH(e), nG(e), nG(e), n !== r ? (nY(e, a), e.pending = r) : e.pending = "";
						continue;
				}
				break;
			}
			case 16:
				if ("~~" === t) {
					nH(e), nG(e), e.pending = "";
					continue;
				}
				break;
			case 105:
				"\n" === r ? (nH(e), nY(e, 30), e.pending = "") : (e.token = e.tokens[e.len], "\\" === e.pending[0] ? e.text += "[" : e.text += "$$", e.pending = "", n0(e, r));
				continue;
			case 30:
				if ("\\]" === t || "$$" === t) {
					nH(e), nG(e), e.pending = "";
					continue;
				}
				break;
			case 31:
				if ("\\)" === t || "$" === e.pending[0]) {
					nH(e), nG(e), ")" === r ? e.pending = "" : e.pending = r;
					continue;
				}
				break;
			case 102:
				"http://" === t || "https://" === t ? (nH(e), nY(e, 18), e.pending = t, e.text = t) : "http:/"[e.pending.length] === r || "https:/"[e.pending.length] === r ? e.pending = t : (e.token = e.tokens[e.len], n0(e, r));
				continue;
			case 17:
			case 19:
				if ("]" === e.pending) {
					nH(e), "(" === r ? e.pending = t : (nG(e), e.pending = r);
					continue;
				}
				if ("]" === e.pending[0] && "(" === e.pending[1]) {
					if (")" === r) {
						let t = 17 === e.token ? 1 : 2, n = e.pending.slice(2);
						e.renderer.set_attr(e.renderer.data, t, n), nG(e), e.pending = "";
					} else e.pending += r;
					continue;
				}
				break;
			case 18:
				" " === r || "\n" === r || "\\" === r ? (e.renderer.set_attr(e.renderer.data, 1, e.pending), nH(e), nG(e), e.pending = r) : (e.text += r, e.pending = t);
				continue;
			case 104:
				if (t.startsWith("<br")) {
					if (3 === t.length || " " === r || "/" === r && (4 === t.length || " " === e.pending[e.pending.length - 1])) {
						e.pending = t;
						continue;
					}
					if (">" === r) {
						nH(e), e.token = e.tokens[e.len], e.renderer.add_token(e.renderer.data, 21), e.renderer.end_token(e.renderer.data), e.pending = "";
						continue;
					}
				}
				e.token = e.tokens[e.len], e.text += "<", e.pending = e.pending.slice(1), n0(e, r);
				continue;
		}
		switch (e.pending[0]) {
			case "\\":
				if (19 === e.token || 30 === e.token || 31 === e.token) break;
				switch (r) {
					case "(":
						nH(e), nY(e, 31), e.pending = "";
						continue;
					case "[":
						e.token = 105, e.pending = t;
						continue;
					case "\n":
						e.pending = r;
						continue;
					default:
						let a = r.charCodeAt(0);
						e.pending = "", e.text += nQ(a) || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? t : r;
						continue;
				}
			case "\n":
				switch (e.token) {
					case 19:
					case 30:
					case 31: break;
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						nH(e), nV(e, e.blockquote_idx), e.blockquote_idx = 0, e.pending = r;
						continue;
					default:
						nH(e), e.pending = r, e.token = 21, e.blockquote_idx = 0;
						continue;
				}
				break;
			case "<":
				if (19 !== e.token && 30 !== e.token && 31 !== e.token) {
					nH(e), e.pending = t, e.token = 104;
					continue;
				}
				break;
			case "`":
				if (19 === e.token) break;
				"`" === r ? (e.fence_start += 1, e.pending = t) : (e.fence_start += 1, nH(e), nY(e, 11), e.text = " " === r || "\n" === r ? "" : r, e.pending = "");
				continue;
			case "_":
			case "*": {
				if (19 === e.token || 30 === e.token || 31 === e.token || 14 === e.token) break;
				let n = 12, l = 14, a = e.pending[0];
				if ("_" === a && (n = 13, l = 15), 1 === e.pending.length) {
					if (a === r) {
						e.pending = t;
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nH(e), nY(e, n), e.pending = r;
						continue;
					}
				} else {
					if (a === r) {
						nH(e), nY(e, l), nY(e, n), e.pending = "";
						continue;
					}
					if (" " !== r && "\n" !== r) {
						nH(e), nY(e, l), e.pending = r;
						continue;
					}
				}
				break;
			}
			case "~":
				if (19 !== e.token && 16 !== e.token) {
					if ("~" === e.pending) {
						if ("~" === r) {
							e.pending = t;
							continue;
						}
					} else if (" " !== r && "\n" !== r) {
						nH(e), nY(e, 16), e.pending = r;
						continue;
					}
				}
				break;
			case "$":
				if (19 !== e.token && 16 !== e.token && "$" === e.pending) if ("$" === r) {
					e.token = 105, e.pending = t;
					continue;
				} else {
					var n;
					if (nQ(n = r.charCodeAt(0)) || function(e) {
						switch (e) {
							case 32:
							case 58:
							case 59:
							case 41:
							case 44:
							case 33:
							case 46:
							case 63:
							case 93:
							case 10: return !0;
							default: return !1;
						}
					}(n));
					else {
						nH(e), nY(e, 31), e.pending = r;
						continue;
					}
				}
				break;
			case "[":
				if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "]" !== r) {
					nH(e), nY(e, 17), e.pending = r;
					continue;
				}
				break;
			case "!":
				if (19 !== e.token && "[" === r) {
					nH(e), nY(e, 19), e.pending = "";
					continue;
				}
				break;
			case " ": if (1 === e.pending.length && " " === r) continue;
		}
		if (19 !== e.token && 17 !== e.token && 30 !== e.token && 31 !== e.token && "h" === r && (" " === e.pending || "" === e.pending)) {
			e.text += e.pending, e.pending = r, e.token = 102;
			continue;
		}
		e.text += e.pending, e.pending = r;
	}
	nH(e);
}
function n1(e, t) {
	let n, r = e.nodes[e.index];
	switch (t) {
		case 1: return;
		case 20:
			n = document.createElement("blockquote");
			break;
		case 2:
			n = document.createElement("p");
			break;
		case 21:
			n = document.createElement("br");
			break;
		case 22:
			n = document.createElement("hr");
			break;
		case 3:
			n = document.createElement("h1");
			break;
		case 4:
			n = document.createElement("h2");
			break;
		case 5:
			n = document.createElement("h3");
			break;
		case 6:
			n = document.createElement("h4");
			break;
		case 7:
			n = document.createElement("h5");
			break;
		case 8:
			n = document.createElement("h6");
			break;
		case 12:
		case 13:
			n = document.createElement("em");
			break;
		case 14:
		case 15:
			n = document.createElement("strong");
			break;
		case 16:
			n = document.createElement("s");
			break;
		case 11:
			n = document.createElement("code");
			break;
		case 18:
		case 17:
			n = document.createElement("a");
			break;
		case 19:
			n = document.createElement("img");
			break;
		case 23:
			n = document.createElement("ul");
			break;
		case 24:
			n = document.createElement("ol");
			break;
		case 25:
			n = document.createElement("li");
			break;
		case 26:
			let l = n = document.createElement("input");
			l.type = "checkbox", l.disabled = !0;
			break;
		case 9:
		case 10:
			r = r.appendChild(document.createElement("pre")), n = document.createElement("code");
			break;
		case 27:
			n = document.createElement("table");
			break;
		case 28:
			switch (r.children.length) {
				case 0:
					r = r.appendChild(document.createElement("thead"));
					break;
				case 1:
					r = r.appendChild(document.createElement("tbody"));
					break;
				default: r = r.children[1];
			}
			n = document.createElement("tr");
			break;
		case 29:
			n = document.createElement(r.parentElement?.tagName === "THEAD" ? "th" : "td");
			break;
		case 30:
			n = document.createElement("equation-block");
			break;
		case 31: n = document.createElement("equation-inline");
	}
	e.nodes[++e.index] = r.appendChild(n);
}
function n2(e) {
	e.index -= 1;
}
function n5(e, t) {
	e.nodes[e.index].appendChild(document.createTextNode(t));
}
function n3(e, t, n) {
	e.nodes[e.index].setAttribute(function(e) {
		switch (e) {
			case 1: return "href";
			case 2: return "src";
			case 4: return "class";
			case 8: return "checked";
			case 16: return "start";
		}
	}(t), n);
}
var n4 = ((e, t, n, r) => {
	if (t && "object" == typeof t || "function" == typeof t) for (var l, a = m(t), s = 0, i = a.length; s < i; s++) l = a[s], k.call(e, l) || l === n || b(e, l, {
		get: ((e) => t[e]).bind(null, l),
		enumerable: !(r = x(t, l)) || r.enumerable
	});
	return e;
})(b(null != (n = (e = (e, t) => {
	var n, r, l = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, l = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					var r, a;
					switch (n = n || {}, l.util.type(t)) {
						case "Object":
							if (n[a = l.util.objId(t)]) return n[a];
							for (var s in r = {}, n[a] = r, t) t.hasOwnProperty(s) && (r[s] = e(t[s], n));
							return r;
						case "Array":
							if (n[a = l.util.objId(t)]) return n[a];
							return r = [], n[a] = r, t.forEach(function(t, l) {
								r[l] = e(t, n);
							}), r;
						default: return t;
					}
				},
				getLanguage: function(e) {
					for (; e;) {
						var n = t.exec(e.className);
						if (n) return n[1].toLowerCase();
						e = e.parentElement;
					}
					return "none";
				},
				setLanguage: function(e, n) {
					e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
				},
				currentScript: function() {
					if ("u" < typeof document) return null;
					if (document.currentScript && "SCRIPT" === document.currentScript.tagName && 1) return document.currentScript;
					try {
						throw Error();
					} catch (r) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var l = e.classList;
						if (l.contains(t)) return !0;
						if (l.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: r,
				plaintext: r,
				text: r,
				txt: r,
				extend: function(e, t) {
					var n = l.util.clone(l.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					var a = (r = r || l.languages)[e], s = {};
					for (var i in a) if (a.hasOwnProperty(i)) {
						if (i == t) for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
						n.hasOwnProperty(i) || (s[i] = a[i]);
					}
					var c = r[e];
					return r[e] = s, l.languages.DFS(l.languages, function(t, n) {
						n === c && t != e && (this[t] = s);
					}), s;
				},
				DFS: function e(t, n, r, a) {
					a = a || {};
					var s = l.util.objId;
					for (var i in t) if (t.hasOwnProperty(i)) {
						n.call(t, i, t[i], r || i);
						var o = t[i], c = l.util.type(o);
						"Object" !== c || a[s(o)] ? "Array" !== c || a[s(o)] || (a[s(o)] = !0, e(o, n, i, a)) : (a[s(o)] = !0, e(o, n, null, a));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				l.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				l.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), l.hooks.run("before-all-elements-highlight", r);
				for (var a, s = 0; a = r.elements[s++];) l.highlightElement(a, !0 === t, r.callback);
			},
			highlightElement: function(t, n, r) {
				var a = l.util.getLanguage(t), s = l.languages[a];
				l.util.setLanguage(t, a);
				var i = t.parentElement;
				i && "pre" === i.nodeName.toLowerCase() && l.util.setLanguage(i, a);
				var o = {
					element: t,
					language: a,
					grammar: s,
					code: t.textContent
				};
				function c(e) {
					o.highlightedCode = e, l.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, l.hooks.run("after-highlight", o), l.hooks.run("complete", o), r && r.call(o.element);
				}
				if (l.hooks.run("before-sanity-check", o), (i = o.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !o.code) {
					l.hooks.run("complete", o), r && r.call(o.element);
					return;
				}
				if (l.hooks.run("before-highlight", o), !o.grammar) return void c(l.util.encode(o.code));
				if (n && e.Worker) {
					var d = new Worker(l.filename);
					d.onmessage = function(e) {
						c(e.data);
					}, d.postMessage(JSON.stringify({
						language: o.language,
						code: o.code,
						immediateClose: !0
					}));
				} else c(l.highlight(o.code, o.grammar, o.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (l.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = l.tokenize(r.code, r.grammar), l.hooks.run("after-tokenize", r), a.stringify(l.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var c = new i();
				return o(c, c.head, e), function e(t, n, r, i, c, d) {
					for (var u in r) if (r.hasOwnProperty(u) && r[u]) {
						var f = r[u];
						f = Array.isArray(f) ? f : [f];
						for (var h = 0; h < f.length; ++h) {
							if (d && d.cause == u + "," + h) return;
							var p = f[h], v = p.inside, g = !!p.lookbehind, b = !!p.greedy, x = p.alias;
							if (b && !p.pattern.global) {
								var m = p.pattern.toString().match(/[imsuy]*$/)[0];
								p.pattern = RegExp(p.pattern.source, m + "g");
							}
							for (var w = p.pattern || p, k = i.next, y = c; k !== n.tail && (!d || !(y >= d.reach)); y += k.value.length, k = k.next) {
								var _, $ = k.value;
								if (n.length > t.length) return;
								if (!($ instanceof a)) {
									var q = 1;
									if (b) {
										if (!(_ = s(w, y, t, g)) || _.index >= t.length) break;
										var S = _.index, E = _.index + _[0].length, A = y;
										for (A += k.value.length; S >= A;) A += (k = k.next).value.length;
										if (A -= k.value.length, y = A, k.value instanceof a) continue;
										for (var z = k; z !== n.tail && (A < E || "string" == typeof z.value); z = z.next) q++, A += z.value.length;
										q--, $ = t.slice(y, A), _.index -= y;
									} else if (!(_ = s(w, 0, $, g))) continue;
									var S = _.index, j = _[0], F = $.slice(0, S), C = $.slice(S + j.length), P = y + $.length;
									d && P > d.reach && (d.reach = P);
									var L = k.prev;
									if (F && (L = o(n, L, F), y += F.length), function(e, t, n) {
										for (var r = t.next, l = 0; l < n && r !== e.tail; l++) r = r.next;
										t.next = r, r.prev = t, e.length -= l;
									}(n, L, q), k = o(n, L, new a(u, v ? l.tokenize(j, v) : j, x, j)), C && o(n, k, C), q > 1) {
										var O = {
											cause: u + "," + h,
											reach: P
										};
										e(t, n, r, k.prev, y, O), d && O.reach > d.reach && (d.reach = O.reach);
									}
								}
							}
						}
					}
				}(e, c, t, c.head, 0), function(e) {
					for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
					return t;
				}(c);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = l.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = l.hooks.all[e];
					if (n && n.length) for (var r, a = 0; r = n[a++];) r(t);
				}
			},
			Token: a
		};
		function a(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length;
		}
		function s(e, t, n, r) {
			e.lastIndex = t;
			var l = e.exec(n);
			if (l && r && l[1]) {
				var a = l[1].length;
				l.index += a, l[0] = l[0].slice(a);
			}
			return l;
		}
		function i() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function o(e, t, n) {
			var r = t.next, l = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = l, r.prev = l, e.length++, l;
		}
		if (e.Prism = l, a.stringify = function e(t, n) {
			if ("string" == typeof t) return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, s = t.alias;
			s && (Array.isArray(s) ? Array.prototype.push.apply(a.classes, s) : a.classes.push(s)), l.hooks.run("wrap", a);
			var i = "";
			for (var o in a.attributes) i += " " + o + "=\"" + (a.attributes[o] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + i + ">" + a.content + "</" + a.tag + ">";
		}, !e.document) return !e.addEventListener || l.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, a = n.code, s = n.immediateClose;
			e.postMessage(l.highlight(a, l.languages[r], r)), s && e.close();
		}, !1), l;
		var c = l.util.currentScript();
		function d() {
			l.manual || l.highlightAll();
		}
		if (c && (l.filename = c.src, c.hasAttribute("data-manual") && (l.manual = !0)), !l.manual) {
			var u = document.readyState;
			"loading" === u || "interactive" === u && c && c.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16);
		}
		return l;
	}("u" > typeof window ? window : "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
	void 0 !== t && t.exports && (t.exports = l), "u" > typeof global && (global.Prism = l), l.languages.markup = {
		comment: {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: !0
		},
		prolog: {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: !0
		},
		doctype: {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: !0,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: !0,
					greedy: !0,
					inside: null
				},
				string: {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: !0
				},
				punctuation: /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				name: /[^\s<>'"]+/
			}
		},
		cdata: {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: !0
		},
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}] }
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { namespace: /^[^\s>\/:]+:/ }
				}
			}
		},
		entity: [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	}, l.languages.markup.tag.inside["attr-value"].inside.entity = l.languages.markup.entity, l.languages.markup.doctype.inside["internal-subset"].inside = l.languages.markup, l.hooks.add("wrap", function(e) {
		"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(l.languages.markup.tag, "addInlined", { value: function(e, t) {
		var n = {};
		n["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: l.languages[t]
		}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var r = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: n
		} };
		r["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: l.languages[t]
		};
		var a = {};
		a[e] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: r
		}, l.languages.insertBefore("markup", "cdata", a);
	} }), Object.defineProperty(l.languages.markup.tag, "addAttribute", { value: function(e, t) {
		l.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
			lookbehind: !0,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						value: {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: !0,
							alias: [t, "language-" + t],
							inside: l.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), l.languages.html = l.languages.markup, l.languages.mathml = l.languages.markup, l.languages.svg = l.languages.markup, l.languages.xml = l.languages.extend("markup", {}), l.languages.ssml = l.languages.xml, l.languages.atom = l.languages.xml, l.languages.rss = l.languages.xml, n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, l.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0
				}
			}
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: {
					pattern: RegExp("^" + n.source + "$"),
					alias: "url"
				}
			}
		},
		selector: {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + n.source + ")*(?=\\s*\\{)"),
			lookbehind: !0
		},
		string: {
			pattern: n,
			greedy: !0
		},
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0
		},
		punctuation: /[(){};:,]/
	}, l.languages.css.atrule.inside.rest = l.languages.css, (r = l.languages.markup) && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css")), l.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		boolean: /\b(?:false|true)\b/,
		function: /\b\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		punctuation: /[{}[\];(),.:]/
	}, l.languages.javascript = l.languages.extend("clike", {
		"class-name": [l.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		number: {
			pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|") + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
			lookbehind: !0
		},
		operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	}), l.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, l.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: l.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: l.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: l.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: l.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: l.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), l.languages.insertBefore("javascript", "string", {
		hashbang: {
			pattern: /^#!.*/,
			greedy: !0,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: l.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		}
	}), l.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), l.languages.markup && (l.languages.markup.tag.addInlined("script", "javascript"), l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), l.languages.js = l.languages.javascript, function() {
		if (void 0 !== l && "u" > typeof document) {
			Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
			var e = {
				js: "javascript",
				py: "python",
				rb: "ruby",
				ps1: "powershell",
				psm1: "powershell",
				sh: "bash",
				bat: "batch",
				h: "c",
				tex: "latex"
			}, t = "data-src-status", n = "loading", r = "loaded", a = "pre[data-src]:not([" + t + "=\"" + r + "\"]):not([" + t + "=\"" + n + "\"])";
			l.hooks.add("before-highlightall", function(e) {
				e.selector += ", " + a;
			}), l.hooks.add("before-sanity-check", function(s) {
				var i = s.element;
				if (i.matches(a)) {
					s.code = "", i.setAttribute(t, n);
					var o, c, d, u = i.appendChild(document.createElement("CODE"));
					u.textContent = "Loading…";
					var f = i.getAttribute("data-src"), h = s.language;
					if ("none" === h) {
						var p = (/\.(\w+)$/.exec(f) || [, "none"])[1];
						h = e[p] || p;
					}
					l.util.setLanguage(u, h), l.util.setLanguage(i, h);
					var v = l.plugins.autoloader;
					v && v.loadLanguages(h), o = function(e) {
						i.setAttribute(t, r);
						var n = function(e) {
							var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
							if (t) {
								var n = Number(t[1]), r = t[2], l = t[3];
								return r ? l ? [n, Number(l)] : [n, void 0] : [n, n];
							}
						}(i.getAttribute("data-range"));
						if (n) {
							var a = e.split(/\r\n?|\n/g), s = n[0], o = null == n[1] ? a.length : n[1];
							s < 0 && (s += a.length), s = Math.max(0, Math.min(s - 1, a.length)), o < 0 && (o += a.length), o = Math.max(0, Math.min(o, a.length)), e = a.slice(s, o).join("\n"), i.hasAttribute("data-start") || i.setAttribute("data-start", String(s + 1));
						}
						u.textContent = e, l.highlightElement(u);
					}, c = function(e) {
						i.setAttribute(t, "failed"), u.textContent = e;
					}, (d = new XMLHttpRequest()).open("GET", f, !0), d.onreadystatechange = function() {
						var e;
						4 == d.readyState && (d.status < 400 && d.responseText ? o(d.responseText) : d.status >= 400 ? c((e = d.status, "✖ Error " + e + " while fetching file: " + d.statusText)) : c("✖ Error: File does not exist or is empty"));
					}, d.send(null);
				}
			}), l.plugins.fileHighlight = { highlight: function(e) {
				for (var t, n = (e || document).querySelectorAll(a), r = 0; t = n[r++];) l.highlightElement(t);
			} };
			var s = !1;
			l.fileHighlight = function() {
				s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), l.plugins.fileHighlight.highlight.apply(this, arguments);
			};
		}
	}();
}, () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports))()) ? g(w(n)) : {}, "default", {
	value: n,
	enumerable: !0
}), n);
(function(e) {
	e.languages.pug = {
		comment: {
			pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
			lookbehind: !0
		},
		"multiline-script": {
			pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		filter: {
			pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				text: /\S[\s\S]*/
			}
		},
		"multiline-plain-text": {
			pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0
		},
		markup: {
			pattern: /(^[\t ]*)<.+/m,
			lookbehind: !0,
			inside: e.languages.markup
		},
		doctype: {
			pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
			lookbehind: !0
		},
		"flow-control": {
			pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
			lookbehind: !0,
			inside: {
				each: {
					pattern: /^each .+? in\b/,
					inside: {
						keyword: /\b(?:each|in)\b/,
						punctuation: /,/
					}
				},
				branch: {
					pattern: /^(?:case|default|else|if|unless|when|while)\b/,
					alias: "keyword"
				},
				rest: e.languages.javascript
			}
		},
		keyword: {
			pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
			lookbehind: !0
		},
		mixin: [{
			pattern: /(^[\t ]*)mixin .+/m,
			lookbehind: !0,
			inside: {
				keyword: /^mixin/,
				function: /\w+(?=\s*\(|\s*$)/,
				punctuation: /[(),.]/
			}
		}, {
			pattern: /(^[\t ]*)\+.+/m,
			lookbehind: !0,
			inside: {
				name: {
					pattern: /^\+\w+/,
					alias: "function"
				},
				rest: e.languages.javascript
			}
		}],
		script: {
			pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		"plain-text": {
			pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
			lookbehind: !0
		},
		tag: {
			pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
			lookbehind: !0,
			inside: {
				attributes: [{
					pattern: /&[^(]+\([^)]+\)/,
					inside: e.languages.javascript
				}, {
					pattern: /\([^)]+\)/,
					inside: {
						"attr-value": {
							pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
							lookbehind: !0,
							inside: e.languages.javascript
						},
						"attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
						punctuation: /[!=(),]+/
					}
				}],
				punctuation: /:/,
				"attr-id": /#[\w\-]+/,
				"attr-class": /\.[\w\-]+/
			}
		},
		code: [{
			pattern: /(^[\t ]*(?:-|!?=)).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		}],
		punctuation: /[.\-!=|]+/
	};
	for (var t = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source, n = [
		{
			filter: "atpl",
			language: "twig"
		},
		{
			filter: "coffee",
			language: "coffeescript"
		},
		"ejs",
		"handlebars",
		"less",
		"livescript",
		"markdown",
		{
			filter: "sass",
			language: "scss"
		},
		"stylus"
	], r = {}, l = 0, a = n.length; l < a; l++) {
		var s = n[l];
		s = "string" == typeof s ? {
			filter: s,
			language: s
		} : s, e.languages[s.language] && (r["filter-" + s.filter] = {
			pattern: RegExp(t.replace("<filter_name>", function() {
				return s.filter;
			}), "m"),
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				text: {
					pattern: /\S[\s\S]*/,
					alias: [s.language, "language-" + s.language],
					inside: e.languages[s.language]
				}
			}
		});
	}
	e.languages.insertBefore("pug", "filter", r);
})(Prism), a = Prism, (o = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0
	},
	url: {
		pattern: /\burl\((["']?).*?\1\)/i,
		greedy: !0
	},
	string: {
		pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
		greedy: !0
	},
	interpolation: null,
	func: null,
	important: /\B!(?:important|optional)\b/i,
	keyword: {
		pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
		lookbehind: !0
	},
	hexcode: /#[\da-f]{3,6}/i,
	color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
		pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
		inside: {
			unit: s = {
				pattern: /(\b\d+)(?:%|[a-z]+)/,
				lookbehind: !0
			},
			number: i = {
				pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
				lookbehind: !0
			},
			function: /[\w-]+(?=\()/,
			punctuation: /[(),]/
		}
	}],
	entity: /\\[\da-f]{1,8}/i,
	unit: s,
	boolean: /\b(?:false|true)\b/,
	operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
	number: i,
	punctuation: /[{}()\[\];:,]/
}).interpolation = {
	pattern: /\{[^\r\n}:]+\}/,
	alias: "variable",
	inside: {
		delimiter: {
			pattern: /^\{|\}$/,
			alias: "punctuation"
		},
		rest: o
	}
}, o.func = {
	pattern: /[\w-]+\([^)]*\).*/,
	inside: {
		function: /^[^(]+/,
		rest: o
	}
}, a.languages.stylus = {
	"atrule-declaration": {
		pattern: /(^[ \t]*)@.+/m,
		lookbehind: !0,
		inside: {
			atrule: /^@[\w-]+/,
			rest: o
		}
	},
	"variable-declaration": {
		pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
		lookbehind: !0,
		inside: {
			variable: /^\S+/,
			rest: o
		}
	},
	statement: {
		pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
		lookbehind: !0,
		inside: {
			keyword: /^\S+/,
			rest: o
		}
	},
	"property-declaration": {
		pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
		lookbehind: !0,
		inside: {
			property: {
				pattern: /^[^\s:]+/,
				inside: { interpolation: o.interpolation }
			},
			rest: o
		}
	},
	selector: {
		pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
		lookbehind: !0,
		inside: {
			interpolation: o.interpolation,
			comment: o.comment,
			punctuation: /[{},]/
		}
	},
	func: o.func,
	string: o.string,
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0,
		greedy: !0
	},
	interpolation: o.interpolation,
	punctuation: /[{}()\[\];:.]/
}, n4.default.languages.svelte = n4.default.languages.markup;
var n8 = t5("<b class=\"svelte-dy2xt3\"></b>"), n6 = {
	hash: "svelte-dy2xt3",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-dy2xt3 {display:block;}b.svelte-dy2xt3 h1,\nb.svelte-dy2xt3 h2,\nb.svelte-dy2xt3 h3,\nb.svelte-dy2xt3 h4 {color:#1d1d1f;font-weight:600;margin-top:24px;margin-bottom:16px;}b.svelte-dy2xt3 h1 {font-size:26px;}b.svelte-dy2xt3 h2 {font-size:20px;}b.svelte-dy2xt3 h3 {font-size:16px;}b.svelte-dy2xt3 p {margin-bottom:16px;}b.svelte-dy2xt3 ul {margin-bottom:16px;padding-left:20px;list-style-type:disc;}b.svelte-dy2xt3 ul li {margin-bottom:6px;}b.svelte-dy2xt3 code {font-size:13px;padding:2px 6px;border-radius:4px;color:#0071e3;border:1px solid rgba(0,113,227,0.102);background:rgba(0,113,227,0.051);}b.svelte-dy2xt3 pre {border:1px solid rgba(0,0,0,0.071);border-radius:12px;padding:14px 16px;overflow-x:auto;margin-bottom:20px;margin-top:12px;background:rgba(255,255,255,0.502);backdrop-filter:blur(25px) saturate(180%);box-shadow:inset 0 1px 0 0 rgba(255,255,255,0.651), 0 4px 12px rgba(0,0,0,0.02);}b.svelte-dy2xt3 pre code {background:transparent;border:0;padding:0;border-radius:0;color:#1d1d1f;line-height:1.6;}b.svelte-dy2xt3 pre .token.comment,\nb.svelte-dy2xt3 pre .token.prolog,\nb.svelte-dy2xt3 pre .token.doctype,\nb.svelte-dy2xt3 pre .token.cdata {color:#86868b;font-style:italic;}b.svelte-dy2xt3 pre .token.punctuation {color:#6e7681;}b.svelte-dy2xt3 pre .token.keyword {color:#ad208e;font-weight:600;}b.svelte-dy2xt3 pre .token.string,\nb.svelte-dy2xt3 pre .token.char,\nb.svelte-dy2xt3 pre .token.attr-value {color:#248a3d;}b.svelte-dy2xt3 pre .token.number,\nb.svelte-dy2xt3 pre .token.boolean {color:#1c00cf;}b.svelte-dy2xt3 pre .token.function {color:#0071e3;}b.svelte-dy2xt3 pre .token.class-name,\nb.svelte-dy2xt3 pre .token.maybe-class-name {color:#5c2699;}b.svelte-dy2xt3 pre .token.tag,\nb.svelte-dy2xt3 pre .token.operator {color:#ad208e;}b.svelte-dy2xt3 pre .token.attr-name {color:#8a3ffc;}b.svelte-dy2xt3 pre .token.selector {color:#5c2699;}b.svelte-dy2xt3 pre .token.property {color:#1d1d1f;}b.svelte-dy2xt3 pre .token.regex {color:#c41a16;}b.svelte-dy2xt3 pre[class*='language-'],\nb.svelte-dy2xt3 code[class*='language-'],\nb.svelte-dy2xt3 :not(pre) > code[class*='language-'] {background:transparent;}b.svelte-dy2xt3 a {color:#0071e3;text-decoration:none;border-bottom:1px solid rgba(0,113,227,0.2);transition:all 0.25s ease;}b.svelte-dy2xt3 a:hover {color:#0077ed;border-bottom-color:#0077ed;}b.svelte-dy2xt3 blockquote.alert {margin:20px 0;padding:16px 20px 16px 52px;border-left:4px solid;border-radius:12px;box-sizing:border-box;position:relative;background:rgba(255,255,255,0.451);backdrop-filter:blur(25px) saturate(180%);box-shadow:inset 0 1px 0 0 rgba(255,255,255,0.651), 0 4px 12px rgba(0,0,0,0.02);border:1px solid rgba(255,255,255,0.2);}b.svelte-dy2xt3 blockquote.alert .alert-title {position:absolute;left:16px;top:16px;font-size:0;margin:0;padding:0;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {display:block;width:22px;height:22px;mask-size:contain;mask-repeat:no-repeat;mask-position:center;flex-shrink:0;}b.svelte-dy2xt3 blockquote.alert p {margin:0;color:#1d1d1f;}b.svelte-dy2xt3 blockquote.alert p:not(:last-child) {margin-bottom:8px;}b.svelte-dy2xt3 blockquote.alert-note {border-left-color:#0071e3;}b.svelte-dy2xt3 blockquote.alert-note .alert-icon {mask-image:var(--noteSvg);background:#0071e3;}b.svelte-dy2xt3 blockquote.alert-tip {border-left-color:#34c759;}b.svelte-dy2xt3 blockquote.alert-tip .alert-icon {mask-image:var(--tipSvg);background:#24b24b;}b.svelte-dy2xt3 blockquote.alert-important {border-left-color:#af52de;}b.svelte-dy2xt3 blockquote.alert-important .alert-icon {mask-image:var(--importantSvg);background:#af52de;}b.svelte-dy2xt3 blockquote.alert-warning {border-left-color:#ff9500;}b.svelte-dy2xt3 blockquote.alert-warning .alert-icon {mask-image:var(--warningSvg);background:#e08200;}b.svelte-dy2xt3 blockquote.alert-caution {border-left-color:#ff3b30;}b.svelte-dy2xt3 blockquote.alert-caution .alert-icon {mask-image:var(--cautionSvg);background:#ff3b30;}\n@media (max-width: 800px) {b.svelte-dy2xt3 h1 {font-size:20px;}b.svelte-dy2xt3 h2 {font-size:17px;}b.svelte-dy2xt3 pre {padding:12px;border-radius:8px;font-size:12px;}b.svelte-dy2xt3 blockquote.alert {padding:12px 14px 12px 42px;border-radius:8px;}b.svelte-dy2xt3 blockquote.alert .alert-title {left:12px;top:12px;}b.svelte-dy2xt3 blockquote.alert .alert-title .alert-icon {width:18px;height:18px;}\n}"
};
function n7(e, t) {
	ed(t, !0), no(e, n6);
	let n = nS(t, "readme", 7), r = e0(null);
	th(() => {
		((e, t) => {
			var n;
			let r;
			if (!e || !t) return;
			e.innerHTML = "";
			let l = (n = {
				add_token: n1,
				end_token: n2,
				add_text: n5,
				set_attr: n3,
				data: {
					nodes: [
						e,
						,
						,
						,
						,
					],
					index: 0
				}
			}, (r = new Uint32Array(24))[0] = 1, {
				renderer: n,
				text: "",
				pending: "",
				tokens: r,
				len: 0,
				token: 1,
				fence_end: 0,
				blockquote_idx: 0,
				hr_char: "",
				hr_chars: 0,
				fence_start: 0,
				spaces: new Uint8Array(24),
				indent: "",
				indent_len: 0,
				table_state: 0
			});
			n0(l, t), l.pending.length > 0 && n0(l, "\n"), e.querySelectorAll("pre code").forEach((e) => {
				let t = [];
				e.classList.forEach((e) => {
					e.startsWith("language-") || e.startsWith("lang-") || t.push("language-" + e);
				}), t.forEach((t) => {
					e.classList.add(t), e.parentElement && "PRE" == e.parentElement.tagName && e.parentElement.classList.add(t);
				}), n4.default.highlightElement(e);
			}), e.querySelectorAll("blockquote").forEach((e) => {
				let t = e.firstElementChild || e, n = t.innerHTML;
				if (n) {
					let r = n.match(/^(?:\[!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)\]|<a>!(TIP|NOTE|WARNING|IMPORTANT|CAUTION)<\/a>)\s*(?:<br\s*\/?>)?/i);
					if (r) {
						let l = (r[1] || r[2]).toUpperCase(), a = n.slice(r[0].length).trim(), s = document.createElement("b"), i = document.createElement("i");
						"" == a ? t.remove() : t.innerHTML = a, e.classList.add("alert", "alert-" + l.toLowerCase()), i.className = "alert-icon", s.className = "alert-title", s.appendChild(i), s.appendChild(document.createTextNode(" " + l)), e.insertBefore(s, e.firstChild);
					}
				}
			});
		})(tW(r), n());
	});
	var l = n8();
	return n$(l, (e) => e2(r, e), () => tW(r)), t4(e, l), eu({
		get readme() {
			return n();
		},
		set readme($$value) {
			n($$value), eO();
		}
	});
}
nz(n7, { readme: {} }, [], [], { mode: "open" });
var n9 = t5("<a target=\"_blank\" title=\"查看源码\" aria-label=\"GitHub\" class=\"svelte-1w7oxzi\"></a>"), re = {
	hash: "svelte-1w7oxzi",
	code: "a.svelte-1w7oxzi {display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);text-decoration:none;box-sizing:border-box;}a.svelte-1w7oxzi::before {content:'';width:20px;height:20px;background-color:currentColor;mask-image:var(--githubSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;}a.svelte-1w7oxzi:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}a.svelte-1w7oxzi:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}"
};
function rt(e, t) {
	ed(t, !0), no(e, re);
	let n = nS(t, "url", 7, "");
	var r = t3(), l = tt(r), a = (e) => {
		var t = n9();
		tg(() => nm(t, "href", n())), tZ("click", t, (e) => e.stopPropagation()), t4(e, t);
	};
	return nt(l, (e) => {
		n() && e(a);
	}), t4(e, r), eu({
		get url() {
			return n();
		},
		set url($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click"]), nz(rt, { url: {} }, [], [], { mode: "open" });
var rn = t5("<b class=\"svelte-f13ene\"><h1 class=\"svelte-f13ene\"> </h1><!></b>"), rr = t5("<h2 class=\"svelte-f13ene\"> </h2>"), rl = t5("<h3 class=\"svelte-f13ene\"> </h3>"), ra = t5("<h4 class=\"svelte-f13ene\"> </h4>"), rs = t5("<h5 class=\"svelte-f13ene\"> </h5>"), ri = t5("<h6 class=\"svelte-f13ene\"> </h6>"), ro = t5("<section class=\"svelte-f13ene\"><!><!><!><!><!><!><!></section>"), rc = t5("<v-scroll><b class=\"svelte-f13ene\"><article class=\"svelte-f13ene\"></article></b></v-scroll>", 2), rd = {
	hash: "svelte-f13ene",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-f13ene {flex:1;min-width:0;min-height:0;}v-scroll.svelte-f13ene::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) {display:block;line-height:1.7;color:#333336;padding:var(--gap) var(--gap) var(--gap) 0;box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-f13ene > b:where(.svelte-f13ene) {padding:var(--gap) 0;}\n}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) {padding:0 0 var(--gap);box-sizing:border-box;max-width:800px;margin:0 auto;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) {display:block;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h2:where(.svelte-f13ene),\nv-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h3:where(.svelte-f13ene),\nv-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h4:where(.svelte-f13ene),\nv-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h5:where(.svelte-f13ene),\nv-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h6:where(.svelte-f13ene) {color:#1d1d1f;font-weight:600;margin-top:24px;margin-bottom:16px;line-height:1.3;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h2:where(.svelte-f13ene) {font-size:20px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h3:where(.svelte-f13ene) {font-size:16px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h4:where(.svelte-f13ene) {font-size:14px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h5:where(.svelte-f13ene) {font-size:13px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) h6:where(.svelte-f13ene) {font-size:12px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) > b:where(.svelte-f13ene) {display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:var(--gap);}\n@media (max-width: 800px) {v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) > b:where(.svelte-f13ene) {align-items:flex-start;}\n}\n@media (max-width: 800px) {v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) > b:where(.svelte-f13ene) a {margin-right:44px;}\n}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) > b:where(.svelte-f13ene) h1:where(.svelte-f13ene) {font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}\n@media (max-width: 800px) {v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) section:where(.svelte-f13ene) > b:where(.svelte-f13ene) h1:where(.svelte-f13ene) {font-size:22px;}\n}\n@media (max-width: 800px) {v-scroll.svelte-f13ene > b:where(.svelte-f13ene) {font-size:14px;}v-scroll.svelte-f13ene > b:where(.svelte-f13ene) article:where(.svelte-f13ene) {padding:0 20px var(--gap);}\n}"
};
function ru(e, t) {
	ed(t, !0), no(e, rd);
	let n = nS(t, "name", 7), r = nS(t, "readme", 7), l = nS(t, "scrollTo", 15), a = e0(null), s = eH(() => "WebC" == n() ? "//github.com/webc-site/webc-zh" : "//github.com/webc-site/webc-zh/tree/main/com/" + n()), i = eH(() => Array.isArray(r()) ? r() : []);
	l((e) => {
		if (!tW(a)) return;
		let t = tW(a).querySelector("#section-" + e);
		t && t.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
	var o = rc();
	nh(o, 1, "svelte-f13ene");
	var c = te(o), d = te(c);
	return nl(d, 21, () => tW(i), nn, (e, t, r) => {
		var l = eH(() => D(tW(t), 3));
		let a = () => tW(l)[0], i = () => tW(l)[1], o = () => tW(l)[2];
		var c = ro();
		nm(c, "id", `section-${r}`);
		var d = te(c), u = (e) => {
			var t = rn(), r = te(t), l = te(r, !0);
			en(r), rt(tn(r), { get url() {
				return tW(s);
			} }), en(t), tg(() => t8(l, n())), t4(e, t);
		};
		nt(d, (e) => {
			1 == a() && e(u);
		});
		var f = tn(d), h = (e) => {
			var t = rr(), n = te(t, !0);
			en(t), tg(() => t8(n, i())), t4(e, t);
		};
		nt(f, (e) => {
			2 == a() && e(h);
		});
		var p = tn(f), v = (e) => {
			var t = rl(), n = te(t, !0);
			en(t), tg(() => t8(n, i())), t4(e, t);
		};
		nt(p, (e) => {
			3 == a() && e(v);
		});
		var g = tn(p), b = (e) => {
			var t = ra(), n = te(t, !0);
			en(t), tg(() => t8(n, i())), t4(e, t);
		};
		nt(g, (e) => {
			4 == a() && e(b);
		});
		var x = tn(g), m = (e) => {
			var t = rs(), n = te(t, !0);
			en(t), tg(() => t8(n, i())), t4(e, t);
		};
		nt(x, (e) => {
			5 == a() && e(m);
		});
		var w = tn(x), k = (e) => {
			var t = ri(), n = te(t, !0);
			en(t), tg(() => t8(n, i())), t4(e, t);
		};
		nt(w, (e) => {
			6 == a() && e(k);
		});
		var y = tn(w), _ = (e) => {
			n7(e, { get readme() {
				return o();
			} });
		};
		nt(y, (e) => {
			o() && e(_);
		}), en(c), t4(e, c);
	}), en(d), n$(d, (e) => e2(a, e), () => tW(a)), en(c), en(o), t4(e, o), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get readme() {
			return r();
		},
		set readme($$value) {
			r($$value), eO();
		},
		get scrollTo() {
			return l();
		},
		set scrollTo($$value) {
			l($$value), eO();
		}
	});
}
nz(ru, {
	name: {},
	readme: {},
	scrollTo: {}
}, [], [], { mode: "open" });
var rf = t5("<button> </button>"), rh = t5("<v-scroll><b class=\"svelte-1u69se2\"><b class=\"svelte-1u69se2\">章节导航</b><b class=\"svelte-1u69se2\"></b></b></v-scroll>", 2), rp = {
	hash: "svelte-1u69se2",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-1u69se2 {width:240px;height:100%;border-left:1px solid rgba(255,255,255,0.102);background:linear-gradient(135deg, rgba(255,255,255,0.122) 0, rgba(255,255,255,0.02) 100%);backdrop-filter:blur(30px) saturate(190%);box-shadow:-4px 0 24px rgba(0,0,0,0.02), inset 1px 0 0 rgba(255,255,255,0.149);}v-scroll.svelte-1u69se2::part(scroll) {box-sizing:border-box;}\n@media (max-width: 1100px) {v-scroll.svelte-1u69se2 {display:none;}\n}v-scroll.svelte-1u69se2 > b:where(.svelte-1u69se2) {display:block;padding:var(--gap);box-sizing:border-box;}v-scroll.svelte-1u69se2 > b:where(.svelte-1u69se2) > b:where(.svelte-1u69se2):first-child {display:inline-block;font-size:11px;font-weight:600;letter-spacing:1px;color:rgba(0,0,0,0.302);text-transform:uppercase;margin-bottom:8px;}v-scroll.svelte-1u69se2 > b:where(.svelte-1u69se2) > b:where(.svelte-1u69se2):last-child {display:flex;flex-direction:column;gap:4px;}v-scroll.svelte-1u69se2 button:where(.svelte-1u69se2) {display:block;width:100%;text-align:left;background:none;border:1px solid transparent;padding:3px 0;font-size:13px;color:#6e6e73;cursor:pointer;border-radius:8px;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);line-height:1.4;box-sizing:border-box;}v-scroll.svelte-1u69se2 button:where(.svelte-1u69se2):hover {color:#0071e3;background:rgba(255,255,255,0.4);border-color:rgba(0,113,227,0.102);box-shadow:0 2px 8px rgba(0,0,0,0.039), inset 0 1px 0 rgba(255,255,255,0.502);transform:translateX(4px);}v-scroll.svelte-1u69se2 button.level-2:where(.svelte-1u69se2) {font-weight:600;color:#333336;font-size:14px;}v-scroll.svelte-1u69se2 button.level-2:where(.svelte-1u69se2):hover {color:#0071e3;}v-scroll.svelte-1u69se2 button.level-3:where(.svelte-1u69se2) {padding-left:24px;}v-scroll.svelte-1u69se2 button.level-4:where(.svelte-1u69se2) {padding-left:36px;}v-scroll.svelte-1u69se2 button.level-5:where(.svelte-1u69se2) {padding-left:48px;}v-scroll.svelte-1u69se2 button.level-6:where(.svelte-1u69se2) {padding-left:60px;}"
};
function rv(e, t) {
	ed(t, !0), no(e, rp);
	let n = nS(t, "toc", 23, () => []), r = nS(t, "onclick", 7);
	var l = rh();
	nh(l, 1, "svelte-1u69se2");
	var a = te(l), s = tn(te(a));
	return nl(s, 21, n, nn, (e, t) => {
		var n = eH(() => D(tW(t), 4)), l = rf(), a = te(l, !0);
		en(l), tg(() => {
			nh(l, 1, `level-${tW(n)[0] ?? ""}`, "svelte-1u69se2"), t8(a, tW(n)[1]);
		}), tZ("click", l, () => r()?.(tW(n)[3])), t4(e, l);
	}), en(s), en(a), en(l), t4(e, l), eu({
		get toc() {
			return n();
		},
		set toc($$value = []) {
			n($$value), eO();
		},
		get onclick() {
			return r();
		},
		set onclick($$value) {
			r($$value), eO();
		}
	});
}
tQ(["click"]), nz(rv, {
	toc: {},
	onclick: {}
}, [], [], { mode: "open" });
var rg = t5("<b class=\"wait svelte-1ww8mwq\"></b>"), rb = t5("<!><!>", 1), rx = {
	hash: "svelte-1ww8mwq",
	code: ".wait.svelte-1ww8mwq {margin:auto;}"
};
function rm(e, t) {
	ed(t, !0), no(e, rx);
	let n = e0(""), r = e0([]), l = e0(!0), a = e0(null), s = eH(() => tW(r).map((e, t) => [...e, t]).filter(([e]) => e >= 2));
	nj(async () => {
		e2(r, (await nC(() => import("./readme-Dt53iZ9B.js"), [], import.meta.url)).default), e2(n, tW(r)[0]?.[1] || "WebC.site", !0), e2(l, !1);
	});
	var i = t3(), o = tt(i), c = (e) => {
		t4(e, rg());
	}, d = (e) => {
		var t = rb(), l = tt(t);
		ru(l, {
			get name() {
				return tW(n);
			},
			get readme() {
				return tW(r);
			},
			get scrollTo() {
				return tW(a);
			},
			set scrollTo($$value) {
				e2(a, $$value, !0);
			}
		});
		var i = tn(l), o = (e) => {
			rv(e, {
				get toc() {
					return tW(s);
				},
				get onclick() {
					return tW(a);
				}
			});
		};
		nt(i, (e) => {
			tW(s).length && e(o);
		}), t4(e, t);
	};
	nt(o, (e) => {
		tW(l) ? e(c) : e(d, -1);
	}), t4(e, i), eu();
}
nz(rm, {}, [], [], { mode: "open" });
var rw = t5("<button> </button>"), rk = {
	hash: "svelte-qgmc0f",
	code: "button.svelte-qgmc0f {display:inline-flex;align-items:center;justify-content:center;gap:4px;padding:0 10px;height:28px;box-sizing:border-box;border-radius:6px;font-size:12px;font-weight:500;border:none;background:rgba(0,113,227,0.078);color:#0071e3;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;}button.svelte-qgmc0f::before {content:'';width:12px;height:12px;background:var(--copySvg) no-repeat center/contain;filter:invert(30%) sepia(87%) saturate(1915%) hue-rotate(192deg) brightness(97%) contrast(102%);transition:filter 0.2s ease;}button.svelte-qgmc0f:hover {background:rgba(0,113,227,0.149);}button.svelte-qgmc0f:active {transform:scale(0.97);background:rgba(0,113,227,0.22);}button.copied.svelte-qgmc0f {background:#34c759;color:#fff;}button.copied.svelte-qgmc0f::before {background-image:var(--okSvg);filter:invert(100%);}"
};
function ry(e, t) {
	ed(t, !0), no(e, rk);
	let n = nS(t, "text", 7, ""), r = e0(!1);
	var l = rw(), a = te(l, !0);
	return en(l), tg(() => {
		nh(l, 1, nc(tW(r) ? "copied" : ""), "svelte-qgmc0f"), t8(a, tW(r) ? "已复制" : "复制");
	}), tZ("click", l, () => {
		navigator.clipboard.writeText(n()), e2(r, !0), setTimeout(() => {
			e2(r, !1);
		}, 1500);
	}), t4(e, l), eu({
		get text() {
			return n();
		},
		set text($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click"]), nz(ry, { text: {} }, [], [], { mode: "open" });
var r_ = t5("<tr class=\"svelte-quf4hl\"><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code><!></b></td><td class=\"svelte-quf4hl\"><b class=\"svelte-quf4hl\"><img class=\"svelte-quf4hl\"/></b></td><td class=\"svelte-quf4hl\"><code class=\"svelte-quf4hl\"> </code></td></tr>"), r$ = t5("<article class=\"LG svelte-quf4hl\"><h2 class=\"svelte-quf4hl\">样式变量</h2><table class=\"svelte-quf4hl\"><thead><tr class=\"svelte-quf4hl\"><th class=\"svelte-quf4hl\">变量名</th><th class=\"svelte-quf4hl\">预览</th><th class=\"svelte-quf4hl\">资源文件</th></tr></thead><tbody></tbody></table></article>"), rq = {
	hash: "svelte-quf4hl",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-quf4hl {margin-top:var(--gap);border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;}article.svelte-quf4hl h2:where(.svelte-quf4hl) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;}article.svelte-quf4hl table:where(.svelte-quf4hl) {width:100%;border-collapse:collapse;text-align:left;font-size:13px;}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl) {border-bottom:1px solid rgba(0,0,0,0.039);}article.svelte-quf4hl table:where(.svelte-quf4hl) tr:where(.svelte-quf4hl):last-child {border-bottom:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:12px 16px;vertical-align:middle;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\narticle.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl) {font-weight:600;color:#86868b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):nth-child(2) {text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) {font-weight:500;color:#0071e3;width:45%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) {display:flex;align-items:center;gap:8px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(1) b:where(.svelte-quf4hl) code:where(.svelte-quf4hl) {font-size:12px;color:#0071e3;padding:3px 8px;border-radius:6px;white-space:nowrap;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) {width:20%;text-align:center;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) {display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:8px;border:1px solid rgba(0,0,0,0.031);background-image:linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0), linear-gradient(45deg, #f0f0f0 25%, #fff 25%, #fff 75%, #f0f0f0 75%, #f0f0f0);background-size:12px 12px;background-position:0 0, 6px 6px;box-shadow:0 2px 8px rgba(0,0,0,0.039);overflow:hidden;user-select:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl) img:where(.svelte-quf4hl) {max-width:32px;max-height:32px;object-fit:contain;transition:transform 0.2s ease;user-select:none;pointer-events:none;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(2) b:where(.svelte-quf4hl):hover img:where(.svelte-quf4hl) {transform:scale(1.15);}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) {width:35%;}article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):nth-child(3) code:where(.svelte-quf4hl) {font-size:12px;color:#515154;padding:3px 8px;border-radius:6px;border:1px solid rgba(0,0,0,0.012);white-space:nowrap;}\n@media (max-width: 800px) {article.svelte-quf4hl {border-radius:16px;padding:var(--gap) 20px;overflow-x:auto;}article.svelte-quf4hl table:where(.svelte-quf4hl) {font-size:12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl),\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl) {padding:8px 12px;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):first-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):first-child {padding-left:0;}article.svelte-quf4hl table:where(.svelte-quf4hl) th:where(.svelte-quf4hl):last-child,\n  article.svelte-quf4hl table:where(.svelte-quf4hl) td:where(.svelte-quf4hl):last-child {padding-right:0;}\n}"
};
function rS(e, t) {
	ed(t, !0), no(e, rq);
	let n = nS(t, "svgs", 23, () => []);
	var r = t3(), l = tt(r), a = (e) => {
		var t = r$(), r = tn(te(t)), l = tn(te(r));
		nl(l, 21, n, nn, (e, t) => {
			var n = eH(() => D(tW(t), 3));
			let r = () => tW(n)[0];
			var l = r_(), a = te(l), s = te(a), i = te(s), o = te(i, !0);
			en(i), ry(tn(i), { get text() {
				return r();
			} }), en(s), en(a);
			var c = tn(a), d = te(c), u = te(d);
			en(d), en(c);
			var f = tn(c), h = te(f), p = te(h, !0);
			en(h), en(f), en(l), tg(() => {
				t8(o, r()), nm(u, "src", tW(n)[1]), nm(u, "alt", r()), t8(p, tW(n)[2]);
			}), t4(e, l);
		}), en(l), en(r), en(t), t4(e, t);
	};
	return nt(l, (e) => {
		n().length > 0 && e(a);
	}), t4(e, r), eu({
		get svgs() {
			return n();
		},
		set svgs($$value = []) {
			n($$value), eO();
		}
	});
}
nz(rS, { svgs: {} }, [], [], { mode: "open" });
var rE = t5("<b class=\"svelte-1cfqs8w\"> </b>"), rA = t5("<b class=\"svelte-1cfqs8w\"><h1 class=\"svelte-1cfqs8w\"> <!></h1><!></b>"), rz = {
	hash: "svelte-1cfqs8w",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}b.svelte-1cfqs8w {display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 var(--gap);}\n@media (max-width: 800px) {b.svelte-1cfqs8w {align-items:flex-start;}\n}\n@media (max-width: 800px) {b.svelte-1cfqs8w a {margin-right:44px;}\n}h1.svelte-1cfqs8w {display:flex;align-items:baseline;gap:12px;font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;margin:0;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:16px;font-weight:400;color:#86868b;margin-bottom:0;}\n@media (max-width: 800px) {h1.svelte-1cfqs8w {font-size:22px;}h1.svelte-1cfqs8w b:where(.svelte-1cfqs8w) {font-size:13px;}\n}"
};
function rj(e, t) {
	ed(t, !0), no(e, rz);
	let n = nS(t, "name", 7, ""), r = nS(t, "title", 7, ""), l = nS(t, "prefix", 7, "com/"), a = eH(() => "//github.com/webc-site/webc-zh/tree/main/" + (l() + n()));
	var s = t3(), i = tt(s), o = (e) => {
		var t = rA(), l = te(t), s = te(l, !0), i = tn(s), o = (e) => {
			var t = rE(), n = te(t, !0);
			en(t), tg(() => t8(n, r())), t4(e, t);
		};
		nt(i, (e) => {
			r() && e(o);
		}), en(l), rt(tn(l), { get url() {
			return tW(a);
		} }), en(t), tg(() => t8(s, n())), t4(e, t);
	};
	return nt(i, (e) => {
		n() && e(o);
	}), t4(e, s), eu({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eO();
		},
		get title() {
			return r();
		},
		set title($$value = "") {
			r($$value), eO();
		},
		get prefix() {
			return l();
		},
		set prefix($$value = "com/") {
			l($$value), eO();
		}
	});
}
nz(rj, {
	name: {},
	title: {},
	prefix: {}
}, [], [], { mode: "open" });
var rF = t5("<v-scroll><b class=\"svelte-1dvi356\"><article class=\"LG svelte-1dvi356\"><!><!></article><!></b></v-scroll>", 2), rC = {
	hash: "svelte-1dvi356",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-1dvi356 {flex:1;min-width:0;min-height:0;}v-scroll.svelte-1dvi356::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {display:flex;flex-direction:column;gap:var(--gap);line-height:1.7;color:#333336;padding:var(--gap) 0;box-sizing:border-box;}\n@media (max-width: 1100px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {padding:var(--gap) var(--gap) var(--gap) 0;}\n}\n@media (max-width: 800px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {padding:var(--gap) 0;}\n}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {border-radius:24px;padding:var(--gap);box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) {font-size:14px;}v-scroll.svelte-1dvi356 > b:where(.svelte-1dvi356) article:where(.svelte-1dvi356) {padding-top:0;border-radius:16px;}\n}"
};
function rP(e, t) {
	ed(t, !0), no(e, rC);
	let n = nS(t, "name", 7, ""), r = nS(t, "title", 7, ""), l = nS(t, "readme", 7), a = nS(t, "svgs", 23, () => []);
	var s = rF();
	nh(s, 1, "svelte-1dvi356");
	var i = te(s), o = te(i), c = te(o);
	return rj(c, {
		get name() {
			return n();
		},
		get title() {
			return r();
		}
	}), n7(tn(c), { get readme() {
		return l();
	} }), en(o), rS(tn(o), { get svgs() {
		return a();
	} }), en(i), en(s), t4(e, s), eu({
		get name() {
			return n();
		},
		set name($$value = "") {
			n($$value), eO();
		},
		get title() {
			return r();
		},
		set title($$value = "") {
			r($$value), eO();
		},
		get readme() {
			return l();
		},
		set readme($$value) {
			l($$value), eO();
		},
		get svgs() {
			return a();
		},
		set svgs($$value = []) {
			a($$value), eO();
		}
	});
}
nz(rP, {
	name: {},
	title: {},
	readme: {},
	svgs: {}
}, [], [], { mode: "open" });
var rL = {
	jsdelivr: (e, t) => "//cdn.jsdelivr.net/npm/" + e + "@" + t,
	npmmirror: (e, t) => "//registry.npmmirror.com/" + e + "/" + t + "/files"
}, rO = "webc.site", rT = t5("<b class=\"code svelte-cb5h7f\" role=\"button\" tabindex=\"0\"><b class=\"svelte-cb5h7f\"><!></b><pre class=\"svelte-cb5h7f\"> </pre></b>"), rM = {
	hash: "svelte-cb5h7f",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}.code.svelte-cb5h7f {position:relative;display:flex;align-items:center;width:100%;cursor:pointer;background:transparent;border:none;padding:0;text-align:left;}.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {flex:1;min-width:0;margin:0;overflow-x:auto;font-size:12px;color:#1d1d1f;white-space:pre-wrap;word-break:break-all;}.code.svelte-cb5h7f > b:where(.svelte-cb5h7f) {display:flex;align-items:center;max-width:0;opacity:0;pointer-events:none;overflow:hidden;white-space:nowrap;transform:scale(0.9) translateX(-12px);transition:max-width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, margin-right 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);}.code.svelte-cb5h7f:hover > b:where(.svelte-cb5h7f) {max-width:90px;margin-right:8px;opacity:1;pointer-events:auto;transform:scale(1) translateX(0);}\n@media (max-width: 800px) {.code.svelte-cb5h7f pre:where(.svelte-cb5h7f) {font-size:11px;}\n}"
};
function rD(e, t) {
	ed(t, !0), no(e, rM);
	let n = nS(t, "text", 7, ""), r = e0(void 0), l = (e) => {
		e.target.closest("button") || tW(r).querySelector("button").click();
	};
	var a = rT(), s = te(a);
	ry(te(s), { get text() {
		return n();
	} }), en(s), n$(s, (e) => e2(r, e), () => tW(r));
	var i = tn(s), o = te(i, !0);
	return en(i), en(a), tg(() => t8(o, n())), tZ("click", a, l), tZ("keydown", a, (e) => {
		[13, 32].includes(e.keyCode) && l(e);
	}), t4(e, a), eu({
		get text() {
			return n();
		},
		set text($$value = "") {
			n($$value), eO();
		}
	});
}
tQ(["click", "keydown"]), nz(rD, { text: {} }, [], [], { mode: "open" });
var rR = [["Scroll", [
	"<section class=\"demo-section\">\n  <h2>水平虚拟滚动条</h2>\n  <div class=\"scroll-wrap h-wrap\">\n    <h-scroll>\n      <b></b>\n    </h-scroll>\n  </div>\n\n  <h2>垂直虚拟滚动条</h2>\n  <div class=\"scroll-wrap v-wrap\">\n    <v-scroll>\n      <b></b>\n    </v-scroll>\n  </div>\n</section>\n",
	"const cards_count = 12,\n  h_scroll_container = document.querySelector(\"h-scroll > b\"),\n  v_scroll_container = document.querySelector(\"v-scroll > b\");\n\nif (h_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 45) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 45 + 25) % 360);\n    h_scroll_container.appendChild(card);\n  }\n}\n\nif (v_scroll_container) {\n  for (let i = 0; i < cards_count; ++i) {\n    const card = document.createElement(\"b\");\n    card.style.setProperty(\"--theme-hue\", (i * 35) % 360);\n    card.style.setProperty(\"--theme-hue-next\", (i * 35 + 15) % 360);\n    v_scroll_container.appendChild(card);\n  }\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  h2 {\n    font-size: 13px;\n    font-weight: 600;\n    color: #1d1d1f;\n    letter-spacing: -0.01em;\n    margin-top: 16px;\n    margin-bottom: 12px;\n    display: flex;\n    align-items: center;\n\n    &:first-of-type {\n      margin-top: 0;\n    }\n  }\n\n  .scroll-wrap {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n    background: #ffffff66;\n    border: 1px solid #0000000d;\n    border-radius: 16px;\n    box-shadow: inset 0 1px 0 #ffffff99;\n    overflow: hidden;\n  }\n\n  .v-wrap {\n    height: 300px;\n    max-height: 100%;\n    margin-bottom: 24px;\n  }\n\n  .h-wrap {\n    height: 160px;\n    max-height: 100%;\n  }\n\n  v-scroll,\n  h-scroll {\n    width: 100%;\n    height: 100%;\n  }\n\n  v-scroll {\n    & > b {\n      width: 100%;\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n\n      & > b {\n        height: 64px;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 98%) 0,\n          hsl(var(--theme-hue-next), 30%, 96%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 91%);\n        border-radius: 16px;\n        box-shadow: 0 2px 8px #00000003;\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-1px);\n          box-shadow: 0 4px 12px #00000008;\n        }\n      }\n    }\n  }\n\n  h-scroll {\n    & > b {\n      padding: 20px;\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 100%;\n      gap: 8px;\n\n      & > b {\n        width: 140px;\n        height: 100%;\n        border-radius: 16px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        box-shadow: 0 2px 8px #00000003;\n        background: linear-gradient(\n          135deg,\n          hsl(var(--theme-hue), 35%, 96%) 0,\n          hsl(var(--theme-hue-next), 30%, 93%) 100%\n        );\n        border: 1px solid hsl(var(--theme-hue), 25%, 88%);\n        transition: all 0.2s ease;\n\n        &:hover {\n          transform: translateY(-2px);\n          box-shadow: 0 4px 16px #0000000a;\n        }\n      }\n    }\n  }\n}\n"
]], ["Wait", [
	"<section class=\"demo-section\">\n  <header>独立加载 (.wait)</header>\n  <div class=\"card-container\">\n    <b class=\"wait\"></b>\n  </div>\n\n  <header>表单提交加载遮罩 (.ing)</header>\n  <div class=\"card-container\">\n    <form class=\"demo-form ing\">\n      <h3>账户登录</h3>\n      <div class=\"form-group\">\n        <label>\n          <span>用户名</span>\n          <input type=\"text\" placeholder=\"输入用户名\" required />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span>密码</span>\n          <input type=\"password\" placeholder=\"输入密码\" required />\n        </label>\n      </div>\n      <button type=\"submit\">登录</button>\n    </form>\n  </div>\n</section>\n",
	"const form = document.querySelector(\".demo-form\");\nif (form) {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    form.classList.add(\"ing\");\n    setTimeout(() => {\n      form.classList.remove(\"ing\");\n    }, 2000);\n  });\n}\n",
	".demo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n  box-sizing: border-box;\n\n  header {\n    font-size: 14px;\n    font-weight: 600;\n    color: #1d1d1f;\n    margin-top: 8px;\n  }\n\n  .card-container {\n    background: #ffffff;\n    border: 1px solid #0000000a;\n    border-radius: 16px;\n    padding: 24px;\n    box-shadow:\n      0 4px 20px #00000005,\n      inset 0 1px 0 #ffffff;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    box-sizing: border-box;\n\n    &:first-of-type {\n      justify-content: center;\n      align-items: center;\n    }\n  }\n\n  .demo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n\n    h3 {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 600;\n      color: #1d1d1f;\n    }\n\n    .form-group {\n      label {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        font-size: 12px;\n        font-weight: 500;\n        color: #86868b;\n\n        span {\n          font-weight: 500;\n        }\n      }\n    }\n\n    input {\n      padding: 10px 14px;\n      border-radius: 10px;\n      border: 1px solid #0000000f;\n      background: #f5f5f7;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.2s ease;\n\n      &:focus {\n        border-color: #0071e3;\n        background: #ffffff;\n        box-shadow: 0 0 0 4px #0071e31a;\n      }\n    }\n\n    button {\n      margin-top: 8px;\n      padding: 12px;\n      border-radius: 10px;\n      background: #0071e3;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 14px;\n      border: none;\n      transition: all 0.2s ease;\n      cursor: pointer;\n\n      &:hover:not(:disabled) {\n        background: #0077ed;\n      }\n\n      &:active:not(:disabled) {\n        transform: scale(0.98);\n      }\n\n      &:disabled {\n        background: #e5e5ea;\n        color: #aeaeae;\n        cursor: not-allowed;\n      }\n    }\n  }\n}\n"
]]], rN = t5("<button type=\"button\"> </button>"), rB = t5("<nav></nav>"), rI = {
	hash: "svelte-1vwq39h",
	code: "nav.svelte-1vwq39h {position:absolute;top:100%;margin-top:6px;width:var(--width);display:flex;flex-direction:column;gap:6px;z-index:999;\n  animation: svelte-1vwq39h-scale-in 0.15s cubic-bezier(0.16, 1, 0.3, 1);}nav.left.svelte-1vwq39h {left:0;}nav.right.svelte-1vwq39h {right:0;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h) {border:1px solid rgba(0,0,0,0.078);background:rgba(255,255,255,0.6);backdrop-filter:blur(20px) saturate(190%);width:100%;height:32px;padding:0 14px;border-radius:16px;display:inline-flex;align-items:center;justify-content:flex-start;font-size:12px;font-weight:500;color:#1d1d1f;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.051);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap;box-sizing:border-box;}nav.svelte-1vwq39h button:where(.svelte-1vwq39h):hover {background:rgba(255,255,255,0.949);border-color:rgba(0,0,0,0.149);box-shadow:0 6px 16px rgba(0,0,0,0.078);transform:translateY(-1px);color:#0071e3;}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h) {color:#0071e3;font-weight:600;background:rgba(255,255,255,0.949);border-color:rgba(0,113,227,0.4);box-shadow:0 6px 16px rgba(0,113,227,0.102);}nav.svelte-1vwq39h button.selected:where(.svelte-1vwq39h):hover {background:#fff;border-color:#0071e3;}\n@-moz-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-webkit-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@-o-keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}\n@keyframes svelte-1vwq39h-scale-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.96) translateY(-4px);\n    pointer-events: none;\n  }\n  99% {\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n    pointer-events: auto;\n  }\n}"
};
function rU(e, t) {
	ed(t, !0), no(e, rI);
	let n = nS(t, "options", 23, () => []), r = nS(t, "value", 7), l = nS(t, "align", 7, "left"), a = nS(t, "width", 7, "100%"), s = nS(t, "onSelect", 7), i = eH(() => n().map((e) => "string" == typeof e ? {
		label: e.split(" ")[0],
		value: e
	} : e));
	var o = rB();
	return nl(o, 21, () => tW(i), nn, (e, t) => {
		var n = rN(), l = te(n, !0);
		en(n), tg(() => {
			nh(n, 1, nc(r() == tW(t).value ? "selected" : ""), "svelte-1vwq39h"), t8(l, tW(t).label);
		}), tZ("click", n, (e) => s()?.(tW(t).value, e)), t4(e, n);
	}), en(o), tg(() => {
		nh(o, 1, nc(l()), "svelte-1vwq39h"), nv(o, `--width:${a() ?? ""}`);
	}), t4(e, o), eu({
		get options() {
			return n();
		},
		set options($$value = []) {
			n($$value), eO();
		},
		get value() {
			return r();
		},
		set value($$value) {
			r($$value), eO();
		},
		get align() {
			return l();
		},
		set align($$value = "left") {
			l($$value), eO();
		},
		get width() {
			return a();
		},
		set width($$value = "100%") {
			a($$value), eO();
		},
		get onSelect() {
			return s();
		},
		set onSelect($$value) {
			s($$value), eO();
		}
	});
}
tQ(["click"]), nz(rU, {
	options: {},
	value: {},
	align: {},
	width: {},
	onSelect: {}
}, [], [], { mode: "open" });
var rW = t5("<b class=\"svelte-10il9qy\"><button type=\"button\" aria-label=\"在线调试\" class=\"svelte-10il9qy\">在线调试</button><!></b>"), rH = {
	hash: "svelte-10il9qy",
	code: "b.svelte-10il9qy {position:relative;display:inline-block;}b.svelte-10il9qy > button:where(.svelte-10il9qy) {display:inline-flex;align-items:center;justify-content:center;background:transparent;color:#0071e3;font-size:12px;font-weight:500;border:none;border-bottom:1px solid currentColor;padding:2px 0;cursor:pointer;transition:all 0.2s ease;outline:none;user-select:none;}b.svelte-10il9qy > button:where(.svelte-10il9qy):hover {color:#ff4500;}b.svelte-10il9qy > button:where(.svelte-10il9qy):active {opacity:0.7;}"
};
function rG(e, t) {
	ed(t, !0), no(e, rH);
	let n = nS(t, "name", 7), r = nS(t, "urls_text", 7), l = e0(!1), a = e0(void 0), s = (e, t) => {
		let n = document.createElement("form");
		for (let [r, l] of (n.method = "POST", n.action = e, n.target = "_blank", Object.entries(t))) {
			let e = document.createElement("input");
			e.type = "hidden", e.name = r, e.value = l, n.appendChild(e);
		}
		document.body.appendChild(n), n.submit(), document.body.removeChild(n);
	}, i = (e) => {
		e2(l, !1);
		let t = (() => {
			let e = rR.find(([e]) => e == n());
			if (!e) return;
			let [t, [l, a, s]] = e, i = nP.find(([e]) => e == n()), o = i ? i[1] : "";
			return {
				html: r() + "\n" + l,
				js: a,
				css: s,
				title: n() + " - " + rO,
				description: o
			};
		})();
		t && {
			jsfiddle: () => s("https://jsfiddle.net/api/post/library/pure/", t),
			codepen: () => s("https://codepen.io/pen/define/", { data: JSON.stringify(t) })
		}[e]?.();
	};
	var o = rW();
	tK("click", d, (e) => {
		tW(l) && tW(a) && !tW(a).contains(e.target) && e2(l, !1);
	});
	var c = te(o), u = tn(c), f = (e) => {
		rU(e, {
			options: [{
				label: "JSFiddle",
				value: "jsfiddle"
			}, {
				label: "CodePen",
				value: "codepen"
			}],
			align: "right",
			width: "90px",
			onSelect: i
		});
	};
	return nt(u, (e) => {
		tW(l) && e(f);
	}), en(o), n$(o, (e) => e2(a, e), () => tW(a)), tZ("click", c, (e) => {
		e.stopPropagation(), e2(l, !tW(l));
	}), t4(e, o), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get urls_text() {
			return r();
		},
		set urls_text($$value) {
			r($$value), eO();
		}
	});
}
tQ(["click"]), nz(rG, {
	name: {},
	urls_text: {}
}, [], [], { mode: "open" });
var rY = t5("<i class=\"svelte-1wo880g\"> </i>"), rV = t5("<i></i>"), rX = t5("<b class=\"svelte-1wo880g\"><button type=\"button\"><b class=\"svelte-1wo880g\"> <!></b><!></button><!></b>"), rJ = {
	hash: "svelte-1wo880g",
	code: "b.svelte-1wo880g {position:relative;display:inline-block;}b.svelte-1wo880g button:where(.svelte-1wo880g) {border:1px solid rgba(0,0,0,0.078);background:transparent;padding:0 14px;height:30px;display:inline-flex;align-items:center;font-size:12px;font-weight:300;color:#86868b;border-radius:15px;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline:none;user-select:none;box-sizing:border-box;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) {display:inline-flex;align-items:center;white-space:nowrap;}b.svelte-1wo880g button:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {font-style:normal;font-weight:500;color:rgba(255,255,255,0.8);margin-left:4px;}b.svelte-1wo880g button:where(.svelte-1wo880g):hover {color:#1d1d1f;border-color:rgba(0,0,0,0.161);background:rgba(0,0,0,0.02);}b.svelte-1wo880g button.active:where(.svelte-1wo880g) {background:transparent;border-color:#86868b;color:#424245;box-shadow:none;padding-right:22px;}b.svelte-1wo880g button.active:where(.svelte-1wo880g):hover {background:transparent;border-color:#86868b;}b.svelte-1wo880g button.active:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#424245;}b.svelte-1wo880g button.active.open:where(.svelte-1wo880g) b:where(.svelte-1wo880g) i:where(.svelte-1wo880g) {color:#0071e3;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow:where(.svelte-1wo880g) {position:absolute;right:8px;top:50%;transform:translateY(-50%);width:12px;height:12px;background-color:currentColor;mask-image:var(--downSvg);mask-size:contain;mask-repeat:no-repeat;mask-position:center;color:#86868b;pointer-events:none;transition:transform 0.25s ease, color 0.2s ease;}b.svelte-1wo880g button:where(.svelte-1wo880g) .arrow.open:where(.svelte-1wo880g) {transform:translateY(-50%) rotate(180deg);}b.svelte-1wo880g button:where(.svelte-1wo880g):hover .arrow:where(.svelte-1wo880g) {color:#1d1d1f;}"
};
function rK(e, t) {
	ed(t, !0), no(e, rJ);
	let n = nS(t, "label", 7), r = nS(t, "mode", 7), l = nS(t, "active", 15), a = nS(t, "value", 15), s = nS(t, "options", 23, () => []), i = nS(t, "onChange", 7), o = e0(!1), c = e0(void 0), u = eH(() => tW(o) && l() == r()), f = (e, t) => {
		t.stopPropagation(), a(e), e2(o, !1), i()?.(e);
	};
	var h = rX();
	tK("click", d, (e) => {
		tW(o) && tW(c) && !tW(c).contains(e.target) && e2(o, !1);
	});
	var p = te(h), v = te(p), g = te(v, !0), b = tn(g), x = (e) => {
		var t = rY(), n = te(t, !0);
		en(t), tg((e) => t8(n, e), [() => a()?.split(" ")[0]]), t4(e, t);
	};
	nt(b, (e) => {
		l() == r() && e(x);
	}), en(v);
	var m = tn(v), w = (e) => {
		var t = rV();
		tg(() => nh(t, 1, `arrow ${tW(o) ? "open" : ""}`, "svelte-1wo880g")), t4(e, t);
	};
	nt(m, (e) => {
		l() == r() && e(w);
	}), en(p);
	var k = tn(p), y = (e) => {
		rU(e, {
			get options() {
				return s();
			},
			get value() {
				return a();
			},
			onSelect: f
		});
	};
	return nt(k, (e) => {
		tW(u) && e(y);
	}), en(h), n$(h, (e) => e2(c, e), () => tW(c)), tg(() => {
		nh(p, 1, (l() == r() ? "active " : "") + (tW(u) ? "open" : ""), "svelte-1wo880g"), t8(g, n());
	}), tZ("click", p, (e) => {
		e.stopPropagation(), l() != r() ? (l(r()), e2(o, !0), i()?.(a())) : e2(o, !tW(o));
	}), t4(e, h), eu({
		get label() {
			return n();
		},
		set label($$value) {
			n($$value), eO();
		},
		get mode() {
			return r();
		},
		set mode($$value) {
			r($$value), eO();
		},
		get active() {
			return l();
		},
		set active($$value) {
			l($$value), eO();
		},
		get value() {
			return a();
		},
		set value($$value) {
			a($$value), eO();
		},
		get options() {
			return s();
		},
		set options($$value = []) {
			s($$value), eO();
		},
		get onChange() {
			return i();
		},
		set onChange($$value) {
			i($$value), eO();
		}
	});
}
tQ(["click"]), nz(rK, {
	label: {},
	mode: {},
	active: {},
	value: {},
	options: {},
	onChange: {}
}, [], [], { mode: "open" });
var rZ = t5("<nav class=\"svelte-1hz2iwf\"><!><!></nav>"), rQ = {
	hash: "svelte-1hz2iwf",
	code: "nav.svelte-1hz2iwf {display:inline-flex;align-items:center;margin-left:-4px;gap:8px;}"
};
function r0(e, t) {
	ed(t, !0), no(e, rQ);
	let n = nS(t, "active", 15), r = nS(t, "cdn", 15), l = nS(t, "cdn_keys", 23, () => []), a = nS(t, "runner", 15), s = nS(t, "runner_keys", 23, () => []), i = nS(t, "onChange", 7);
	var o = rZ(), c = te(o);
	return rK(c, {
		label: "在线引用",
		mode: 0,
		get options() {
			return l();
		},
		onChange: (e) => i()?.(0, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return r();
		},
		set value($$value) {
			r($$value);
		}
	}), rK(tn(c), {
		label: "打包构建",
		mode: 1,
		get options() {
			return s();
		},
		onChange: (e) => i()?.(1, e),
		get active() {
			return n();
		},
		set active($$value) {
			n($$value);
		},
		get value() {
			return a();
		},
		set value($$value) {
			a($$value);
		}
	}), en(o), t4(e, o), eu({
		get active() {
			return n();
		},
		set active($$value) {
			n($$value), eO();
		},
		get cdn() {
			return r();
		},
		set cdn($$value) {
			r($$value), eO();
		},
		get cdn_keys() {
			return l();
		},
		set cdn_keys($$value = []) {
			l($$value), eO();
		},
		get runner() {
			return a();
		},
		set runner($$value) {
			a($$value), eO();
		},
		get runner_keys() {
			return s();
		},
		set runner_keys($$value = []) {
			s($$value), eO();
		},
		get onChange() {
			return i();
		},
		set onChange($$value) {
			i($$value), eO();
		}
	});
}
nz(r0, {
	active: {},
	cdn: {},
	cdn_keys: {},
	runner: {},
	runner_keys: {},
	onChange: {}
}, [], [], { mode: "open" });
var r1 = t5("<article class=\"LG svelte-gucowb\"><h2 class=\"svelte-gucowb\"><b class=\"svelte-gucowb\"><!></b><!></h2><!></article>"), r2 = {
	hash: "svelte-gucowb",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}article.svelte-gucowb {position:relative;z-index:2;border-radius:24px;padding:var(--gap);box-sizing:border-box;line-height:normal;width:100%;}article.svelte-gucowb h2:where(.svelte-gucowb) {font-size:15px;font-weight:600;color:#1d1d1f;margin:0 0 16px;display:flex;align-items:center;justify-content:space-between;}article.svelte-gucowb h2:where(.svelte-gucowb) > b:where(.svelte-gucowb) {display:flex;align-items:center;gap:12px;}\n@media (max-width: 800px) {article.svelte-gucowb {border-radius:16px;padding:0 var(--gap) var(--gap);}\n}"
};
function r5(e, t) {
	ed(t, !0), no(e, r2);
	let n = nS(t, "name", 7), r = nS(t, "files", 23, () => []), l = Object.keys(rL), a = [
		"bunx",
		"npx",
		"pnpm dlx",
		"yarn dlx"
	], s = "import_mode", i = "cli_runner", o = e0(e4(l[0])), c = e0(e4(a[0])), d = e0(0), u = (e, t) => {
		localStorage.setItem(s, e), 0 == e ? localStorage.setItem("cdn", t) : 1 == e && localStorage.setItem(i, t);
	};
	nj(() => {
		let e = localStorage.getItem(s);
		if (null != e) {
			let t = Number(e);
			[0, 1].includes(t) && e2(d, t, !0);
		}
		let t = localStorage.getItem("cdn");
		t && l.includes(t) && e2(o, t, !0);
		let n = localStorage.getItem(i);
		n && a.includes(n) && e2(c, n, !0);
	});
	let f = eH(() => r().map((e) => {
		let t = rL[tW(o)](rO, "0.1.25") + "/" + e;
		return e.endsWith(".css") ? "<link href=\"" + t + "\" rel=\"stylesheet\">" : e.endsWith(".js") ? "<script type=\"module\">import \"" + t + "\"<\/script>" : t;
	}).join("\n")), h = eH(() => tW(c) + " webc.add@latest " + n());
	var p = t3(), v = tt(p), g = (e) => {
		var t = r1(), r = te(t), s = te(r);
		r0(te(s), {
			get cdn_keys() {
				return l;
			},
			get runner_keys() {
				return a;
			},
			onChange: u,
			get active() {
				return tW(d);
			},
			set active($$value) {
				e2(d, $$value, !0);
			},
			get cdn() {
				return tW(o);
			},
			set cdn($$value) {
				e2(o, $$value, !0);
			},
			get runner() {
				return tW(c);
			},
			set runner($$value) {
				e2(c, $$value, !0);
			}
		}), en(s), rG(tn(s), {
			get name() {
				return n();
			},
			get urls_text() {
				return tW(f);
			}
		}), en(r);
		var i = tn(r);
		{
			let e = eH(() => 0 == tW(d) ? tW(f) : tW(h));
			rD(i, { get text() {
				return tW(e);
			} });
		}
		en(t), t4(e, t);
	};
	return nt(v, (e) => {
		r().length > 0 && e(g);
	}), t4(e, p), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get files() {
			return r();
		},
		set files($$value = []) {
			r($$value), eO();
		}
	});
}
nz(r5, {
	name: {},
	files: {}
}, [], [], { mode: "open" });
var r3 = t5("<!><article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"><!></b></article>", 1), r4 = t5("<article class=\"LG svelte-kymqdk\"><b class=\"svelte-kymqdk\"></b></article>"), r8 = t5("<v-scroll><b class=\"svelte-kymqdk\"><!></b></v-scroll>", 2), r6 = {
	hash: "svelte-kymqdk",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-kymqdk {flex:1;min-width:0;min-height:0;}v-scroll.svelte-kymqdk::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-kymqdk > b:where(.svelte-kymqdk) {display:flex;flex-direction:column;gap:var(--gap);padding:var(--gap) var(--gap) var(--gap) 0;box-sizing:border-box;flex:1;}\n@media (max-width: 800px) {v-scroll.svelte-kymqdk > b:where(.svelte-kymqdk) {padding:var(--gap) 0;}\n}article.svelte-kymqdk {display:flex;flex-direction:column;overflow:hidden;border-radius:24px;flex:1 0 auto;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {margin:auto;padding:32px;box-sizing:border-box;max-width:100%;}\n@media (max-width: 800px) {article.svelte-kymqdk {border-radius:16px;}article.svelte-kymqdk > b:where(.svelte-kymqdk) {padding:20px 16px;}\n}"
};
function r7(e, t) {
	ed(t, !0), no(e, r6);
	let n = nS(t, "name", 7), r = nS(t, "active_demo", 7), l = nS(t, "files", 23, () => []);
	var a = r8();
	nh(a, 1, "svelte-kymqdk");
	var s = te(a), i = te(s), o = (e) => {
		let t = eH(r);
		var a, s, i, o, d = r3(), u = tt(d);
		r5(u, {
			get name() {
				return n();
			},
			get files() {
				return l();
			}
		});
		var f = tn(u), h = te(f);
		a = te(h), s = (e, t) => {
			t(e, {});
		}, Q && (i = c, et()), o = new ne(a), tb(() => {
			var e = tW(t) ?? null;
			if (Q && "[" === ea(i) != (null !== e)) {
				var n = el();
				ee(n), o.anchor = n, Q = !1, o.ensure(e, e && ((t) => s(t, e))), Q = !0;
				return;
			}
			o.ensure(e, e && ((t) => s(t, e)));
		}, 65536), en(h), en(f), t4(e, d);
	}, d = (e) => {
		t4(e, r4());
	};
	return nt(i, (e) => {
		r() ? e(o) : e(d, -1);
	}), en(s), en(a), t4(e, a), eu({
		get name() {
			return n();
		},
		set name($$value) {
			n($$value), eO();
		},
		get active_demo() {
			return r();
		},
		set active_demo($$value) {
			r($$value), eO();
		},
		get files() {
			return l();
		},
		set files($$value = []) {
			l($$value), eO();
		}
	});
}
nz(r7, {
	name: {},
	active_demo: {},
	files: {}
}, [], [], { mode: "open" });
var r9 = t5("<b class=\"wait svelte-a714y6\"></b>"), le = t5("<!><b class=\"divider svelte-a714y6\"></b><b class=\"right svelte-a714y6\"><!></b>", 1), lt = {
	hash: "svelte-a714y6",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}.wait.svelte-a714y6 {margin:auto;}.divider.svelte-a714y6 {display:none;}\n@media (max-width: 1100px) {.divider.svelte-a714y6 {display:block;height:2px;width:100%;background:var(--dividerSvg) no-repeat center/100% 100%;margin:8px 0;}\n}.right.svelte-a714y6 {display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;gap:var(--gap);padding:0;box-sizing:border-box;}\n@media (max-width: 1100px) {v-scroll {flex:1;min-height:260px;mask-image:linear-gradient(to bottom, #000 calc(100% - var(--gap)), transparent 100%);}.right.svelte-a714y6 {flex:1;min-height:200px;gap:var(--gap);padding:0;}\n}"
};
function ln(e, t) {
	ed(t, !0), no(e, lt);
	let n = nS(t, "info", 7), r = e0(""), l = e0([]), a = e0([]), s = e0(null), i = e0(!0);
	th(() => {
		let e = n()?.[2];
		e && (e2(i, !0), e().then(async (e) => {
			let [t, n, o, c] = e.default;
			e2(r, t, !0), e2(l, o || []), e2(a, c || []), n ? e2(s, (await n()).default) : e2(s, null), e2(i, !1);
		}));
	});
	var o = t3(), c = tt(o), d = (e) => {
		t4(e, r9());
	}, u = (e) => {
		var t = le(), i = tt(t);
		rP(i, {
			get name() {
				return n()[0];
			},
			get title() {
				return n()[1];
			},
			get readme() {
				return tW(r);
			},
			get svgs() {
				return tW(l);
			}
		});
		var o = tn(i, 2);
		r7(te(o), {
			get name() {
				return n()[0];
			},
			get active_demo() {
				return tW(s);
			},
			get files() {
				return tW(a);
			}
		}), en(o), t4(e, t);
	};
	return nt(c, (e) => {
		tW(i) ? e(d) : e(u, -1);
	}), t4(e, o), eu({
		get info() {
			return n();
		},
		set info($$value) {
			n($$value), eO();
		}
	});
}
nz(ln, { info: {} }, [], [], { mode: "open" }), eo = !0;
var lr = [
	[
		"On",
		"绑定与解绑事件监听",
		"- `On(elem, dict)`\n  - `elem`: DOM 元素。\n  - `dict`: 事件与回调对象。键为事件名，值为回调函数。回调函数格式：\n    - 参数：`e`（事件对象）。\n    - 返回值：无。\n  - 返回值：解绑函数。格式为 `() => void`。",
		"export const On = (elem, dict) => {\n  let event, func;\n  for (event in dict) {\n    func = dict[event];\n    elem.addEventListener(event, func);\n  }\n  return () => {\n    for (event in dict) {\n      func = dict[event];\n      elem.removeEventListener(event, func);\n    }\n  };\n};\n"
	],
	[
		"route",
		"路由管理与跳转",
		"- `nowUrl()`\n  - 返回值：当前 URL 路径（不含首部斜杠）。\n\n- `route(hook)`\n  - `hook`: 路由变化时执行的回调函数。格式：\n    - 参数：\n      - `url`: 字符串，新 URL 路径。\n      - `preUrl`: 字符串（可选），旧 URL 路径。\n    - 返回值：无。\n  - 返回值：取消订阅的函数，格式为 `() => void`。\n\n- `setPre(url)`\n  - `url`: 字符串，新的前一次 URL 路径。\n\n- `preUrl()`\n  - 返回值：前一次的 URL 路径。\n\n- `refresh(url)`\n  - `url`: 字符串（可选），要触发回调的 URL 路径，默认是当前 URL。\n\n- `removeSlash(url)`\n  - `url`: 字符串。\n  - 返回值：移除首部斜杠后的字符串。\n\n- `split(str, s)`\n  - `str`: 待拆分字符串。\n  - `s`: 分隔符。\n  - 返回值：包含两个元素的数组 `[前部, 后部]`。\n\n- `setUrl(url)`\n  - `url`: 目标 URL 路径。\n  - 返回值：若路径改变返回 `1`，若仅 hash 改变不返回值。\n\n- `goto(url)`\n  - `url`: 目标 URL 路径。",
		"import { On } from \"x/On.js\";\n\nexport const nowUrl = () => location.pathname.slice(1),\n  [route, setPre, preUrl, refresh, removeSlash, split, setUrl, goto] = (() => {\n    let PRE = nowUrl(),\n      HOOK = [];\n    if (location.hash) PRE += location.hash;\n\n    const HASH = \"#\",\n      route = (hook) => {\n        HOOK.push(hook);\n        hook(nowUrl());\n        return () => {\n          HOOK = HOOK.filter((f) => f !== hook);\n        };\n      },\n      setPre = (url) => {\n        PRE = url;\n      },\n      preUrl = () => PRE,\n      refresh = (url) => {\n        url = url || nowUrl();\n        for (const f of HOOK) f(url, PRE);\n        setPre(url);\n      },\n      removeSlash = (url) => (url[0] === \"/\" ? url.slice(1) : url),\n      split = (str, s) => {\n        const p = str.indexOf(s);\n        return p >= 0 ? [str.slice(0, p), str.slice(p + 1)] : [str, \"\"];\n      },\n      setUrl = (url) => {\n        url = removeSlash(url);\n        if (url !== PRE) {\n          const [path, hash] = split(url, HASH),\n            [p] = split(PRE, HASH);\n          setPre(url);\n          if (path !== p) {\n            history.pushState(null, \"\", \"/\" + url);\n            return 1;\n          }\n          if (location.hash.slice(1) !== hash) {\n            location.hash = hash;\n            return;\n          }\n        }\n        window.dispatchEvent(new HashChangeEvent(\"hashchange\"));\n      },\n      goto = (url) => {\n        if (setUrl(url)) refresh(url);\n      };\n\n    On(window, {\n      popstate: () => {\n        const url = nowUrl();\n        if (url !== split(PRE, HASH)[0]) refresh(url);\n      },\n    });\n\n    return [route, setPre, preUrl, refresh, removeSlash, split, setUrl, goto];\n  })();\n"
	],
	[
		"selfA",
		"同站链接点击校验与处理",
		"- `selfA(p, e)`\n  - `p`: `<a>` 元素。\n  - `e`: 点击事件对象。\n  - 返回值：若是同站链接，阻止默认行为并返回包含 search/hash 的相对路径，否则返回 `undefined`。",
		"// 判断A标签的href是否为当前网站的, 如果是, 返回url, 以实现不刷新跳转\nexport const selfA = (p, e) => {\n  var hash, url;\n  if (p.host === location.host) {\n    ({ hash } = p);\n    url = p.pathname.slice(1) + p.search;\n    if (hash) {\n      url += hash;\n    }\n    e.preventDefault();\n    return url;\n  }\n};\n"
	],
	[
		"dom",
		"DOM 属性与方法简写",
		"- `D`: `document` 实例。\n- `B`: `document.body` 元素。\n- `newEl(tagName)`\n  - `tagName`: 字符串，HTML 标签名。\n  - 返回值：新创建的 DOM 元素。",
		"export const D = document,\n  B = D.body,\n  newEl = D.createElement.bind(D);\n"
	],
	[
		"a",
		"拦截链接点击实现无刷新跳转",
		"无导出函数。导入时自动在 `document.body` 监听点击事件。点击同站链接时阻止默认行为并调用 `goto` 跳转，点击外链且无 `target` 属性时将其设为 `_blank`。",
		"import { goto } from \"x/route.js\";\nimport { selfA } from \"x/selfA.js\";\nimport { B } from \"x/dom.js\";\n\nB.addEventListener(\"click\", (e) => {\n  var href, name, p;\n  p = e.target;\n  while (p) {\n    ({ nodeName: name } = p);\n    if (name === \"A\") {\n      ({ href } = p);\n      if (href) {\n        href = selfA(p, e);\n        if (href !== void 0) {\n          goto(href);\n        } else if (!p.target) {\n          p.target = \"_blank\";\n        }\n      }\n      break;\n    } else if (name === \"BODY\") {\n      break;\n    }\n    p = p.parentNode;\n  }\n});\n"
	],
	[
		"rmWait",
		"移除加载等待元素",
		"无导出函数。导入时自动从 DOM 中移除 ID 为 `W` 的元素。\n\n## 设计意图 & 为什么要放置等待动画于 `pug/_.pug`\n\n在 `pug/_.pug` 中，定义了具有 ID `W` 的 `<style>` 标签，该样式利用 CSS `body:before` 伪类实现了一个无需 JS 依赖的纯 CSS 加载等待动画（旋转的圆环）。\n\n这样做的目的是：\n\n- **首屏秒开体验**：在浏览器解析 HTML 时即刻呈现加载状态，无需等待体积较大的 JS 脚本（或 Svelte 组件框架）下载、解析与执行完毕。\n- **避免白屏**：防止网络较慢或 JS 文件加载时用户看到白屏，提供更好的用户视觉反馈。\n\n## 哪儿被调用 / 移除时机\n\n当主 JS 或组件脚本加载完毕并初始化好 DOM 后，会通过动态导入或模块导入执行 `x/rmWait.js`，瞬间移除 `<style id=\"W\">`，从而销毁加载等待动画。\n\n在 `page/entry/init.js` 结尾的地方导入，移除加载中的动画。",
		"import { D } from \"x/dom.js\";\nD.getElementById(\"W\").remove();\n"
	],
	[
		"routeDelay",
		"延迟路由触发避免重复加载数据",
		"用于 Svelte，避免组件被卸载前触发路由导致重复加载数据。\n\n- `routeDelay(loadUrl)`\n  - `loadUrl`: 路由变化时的回调函数。格式：\n    - 参数：\n      - `url`: 字符串，新 URL 路径。\n      - `preUrl`: 字符串（可选），旧 URL 路径。\n    - 返回值：无。\n  - 返回值：取消路由订阅并清除定时器的函数，格式为 `() => void`。",
		"import { route } from \"x/route.js\";\n\n// 避免 onMount 之前，route 被触发，导致重复加载数据\nexport const routeDelay = (loadUrl) => {\n  let t;\n  const unbind = route((url, preUrl) => {\n    t = setTimeout(() => {\n      loadUrl(url, preUrl);\n    });\n  });\n  return () => {\n    unbind();\n    clearTimeout(t);\n  };\n};\n\nexport default routeDelay;\n"
	]
], ll = t5("<details class=\"svelte-w0c70t\"><summary class=\"svelte-w0c70t\"><b class=\"svelte-w0c70t\"><h2 class=\"svelte-w0c70t\"> </h2><b class=\"svelte-w0c70t\"> </b></b><b class=\"svelte-w0c70t\"><i class=\"icon-arrow svelte-w0c70t\"></i></b></summary><b class=\"svelte-w0c70t\"><!><b class=\"code-header svelte-w0c70t\">源代码<!></b><b><!></b></b></details>"), la = t5("<v-scroll><b class=\"svelte-w0c70t\"><article class=\"svelte-w0c70t\"><!><b class=\"util-list svelte-w0c70t\"></b></article></b></v-scroll>", 2), ls = {
	hash: "svelte-w0c70t",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}v-scroll.svelte-w0c70t {flex:1;min-width:0;min-height:0;}v-scroll.svelte-w0c70t::part(scroll) {box-sizing:border-box;overflow-x:hidden;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {display:block;line-height:1.7;color:#333336;padding:var(--gap) var(--gap) var(--gap) 0;box-sizing:border-box;}\n@media (max-width: 800px) {v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {padding:var(--gap) 0;}\n}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 0 var(--gap);box-sizing:border-box;max-width:800px;margin:0 auto;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) {display:flex;flex-direction:column;gap:var(--gap);margin-top:var(--gap);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) {display:flex;flex-direction:column;border-radius:16px;border:1px solid rgba(0,0,0,0.039);background:rgba(255,255,255,0.333);backdrop-filter:blur(20px);box-shadow:0 4px 12px rgba(0,0,0,0.012), inset 0 1px 1px rgba(255,255,255,0.702);overflow:hidden;transition:all 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t):hover {background:rgba(255,255,255,0.502);border-color:rgba(0,0,0,0.063);box-shadow:0 8px 24px rgba(0,0,0,0.031);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details[open]:where(.svelte-w0c70t) .icon-arrow:where(.svelte-w0c70t) {transform:rotate(180deg);filter:opacity(80%);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) {display:flex;align-items:center;justify-content:space-between;padding:var(--gap);background:rgba(0,0,0,0.008);gap:var(--gap);cursor:pointer;user-select:none;outline:none;list-style:none;transition:background-color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t)::-webkit-details-marker {display:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t):hover {background:rgba(0,0,0,0.024);}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child {display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child h2:where(.svelte-w0c70t) {font-size:18px;font-weight:600;color:#1d1d1f;margin:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):first-child b:where(.svelte-w0c70t) {font-size:13px;color:#86868b;font-weight:400;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child {display:flex;align-items:center;gap:16px;flex-shrink:0;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) summary:where(.svelte-w0c70t) > b:where(.svelte-w0c70t):last-child .icon-arrow:where(.svelte-w0c70t) {width:16px;height:16px;background:var(--downSvg) no-repeat center/contain;filter:opacity(40%);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) {display:block;padding:var(--gap);border-top:1px solid rgba(0,0,0,0.02);background:rgba(255,255,255,0.133);\n  animation: svelte-w0c70t-fadeIn 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) {display:flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#1d1d1f;margin-top:var(--gap);margin-bottom:8px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a {width:14px;height:14px;border:none;background:none;backdrop-filter:none;box-shadow:none;color:#86868b;padding:0;transition:color 0.25s ease;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a::before {width:14px;height:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) .code-header:where(.svelte-w0c70t) a:hover {color:#0071e3;background:none;transform:none;box-shadow:none;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) .util-list:where(.svelte-w0c70t) details:where(.svelte-w0c70t) > b:where(.svelte-w0c70t) pre {margin-top:0;margin-bottom:0;}\n@media (max-width: 800px) {v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) {font-size:14px;}v-scroll.svelte-w0c70t > b:where(.svelte-w0c70t) article:where(.svelte-w0c70t) {padding:0 20px var(--gap);}\n}\n@-moz-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-o-keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes svelte-w0c70t-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"
};
function li(e, t) {
	ed(t, !1), no(e, ls);
	(function(e = !1) {
		let t = ec, n = t.l.u;
		if (!n) return;
		let r = () => (function(e) {
			if (!("object" != typeof e || !e || e instanceof EventTarget)) {
				if (R in e) tG(e);
				else if (!Array.isArray(e)) for (let t in e) {
					let n = e[t];
					"object" == typeof n && n && R in n && tG(n);
				}
			}
		})(t.s);
		if (e) {
			let e = 0, n = {}, l = eU(() => {
				let r = !1, l = t.s;
				for (let e in l) l[e] !== n[e] && (n[e] = l[e], r = !0);
				return r && e++, e;
			});
			r = () => tW(l);
		}
		n.b.length && (tc("$effect.pre"), td(1048584, () => {
			nq(t, r), T(n.b);
		})), th(() => {
			let e = tH(() => n.m.map(O));
			return () => {
				for (let t of e) "function" == typeof t && t();
			};
		}), n.a.length && th(() => {
			nq(t, r), T(n.a);
		});
	})();
	var n = la();
	nh(n, 1, "svelte-w0c70t");
	var r = te(n), l = te(r), a = te(l);
	rj(a, {
		get name() {
			return "x";
		},
		get title() {
			return "webc.site 的基础依赖库";
		},
		prefix: !0
	});
	var s = tn(a);
	nl(s, 5, () => lr, nn, (e, t) => {
		var n = eH(() => D(tW(t), 4));
		let r = () => tW(n)[0], l = () => tW(n)[2];
		var a = ll(), s = te(a), i = te(s), o = te(i), c = te(o, !0);
		en(o);
		var d = tn(o), u = te(d, !0);
		en(d), en(i), er(), en(s);
		var f = tn(s), h = te(f), p = (e) => {
			n7(e, { get readme() {
				return l();
			} });
		};
		nt(h, (e) => {
			l() && e(p);
		});
		var v = tn(h), g = tn(te(v));
		{
			let e = eG(() => "//github.com/webc-site/webc-zh/tree/main/x/" + r() + ".js");
			rt(g, { get url() {
				return tW(e);
			} });
		}
		en(v);
		var b = tn(v);
		n7(te(b), { get readme() {
			return `\`\`\`javascript
${tW(n)[3] ?? ""}
\`\`\``;
		} }), en(b), en(f), en(a), tg(() => {
			t8(c, r()), t8(u, tW(n)[1]);
		}), t4(e, a);
	}), en(s), en(l), en(r), en(n), t4(e, n), eu();
}
function lo(e) {
	li(e, {});
}
nz(li, {}, [], [], { mode: "open" }), nz(lo, {}, [], [], { mode: "open" });
var lc = t5("<button class=\"menu-toggle svelte-d2ss8n\" aria-label=\"菜单\"><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b><b class=\"svelte-d2ss8n\"></b></button>"), ld = t5("<button class=\"overlay svelte-d2ss8n\" aria-label=\"关闭\"></button>"), lu = t5("<main class=\"svelte-d2ss8n\"><!><!><!><section class=\"svelte-d2ss8n\"><b class=\"wrap svelte-d2ss8n\"><!></b></section></main>"), lf = {
	hash: "svelte-d2ss8n",
	code: ":root {--gap: 24px;}\n@media (max-width: 800px) {:root {--gap: 16px;}\n}main.svelte-d2ss8n {display:flex;height:100dvh;width:100vw;background:var(--bgSvg) no-repeat center/cover;color:#1d1d1f;overflow:hidden;gap:var(--gap);box-sizing:border-box;position:relative;}.menu-toggle.svelte-d2ss8n {display:none;}\n@media (max-width: 800px) {.menu-toggle.svelte-d2ss8n {display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;position:absolute;top:var(--gap);right:20px;z-index:102;width:32px;height:32px;border-radius:50%;border:1px solid rgba(0,0,0,0.078);color:#1d1d1f;background:linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.122));backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.039);transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;padding:0;}.menu-toggle.svelte-d2ss8n:hover {color:#0071e3;border-color:rgba(0,71,227,0.2);background:linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2));transform:scale(1.06) translateY(-1px);box-shadow:inset 0 1px 1px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.059), 0 1px 2px rgba(0,0,0,0.039);}.menu-toggle.svelte-d2ss8n:hover > b:where(.svelte-d2ss8n) {background:currentColor;}.menu-toggle.svelte-d2ss8n:active {transform:scale(0.96);background:linear-gradient(135deg, rgba(255,255,255,0.302), rgba(255,255,255,0.059));box-shadow:inset 0 1px 2px rgba(0,0,0,0.051);}.menu-toggle.svelte-d2ss8n > b:where(.svelte-d2ss8n) {width:14px;height:2px;background:currentColor;border-radius:1px;transition:all 0.3s ease;}\n}.overlay.svelte-d2ss8n {display:none;}\n@media (max-width: 800px) {.overlay.svelte-d2ss8n {display:block;position:fixed;inset:0;z-index:99;background:rgba(0,0,0,0.2);backdrop-filter:blur(4px);\n    animation: svelte-d2ss8n-fadeIn 0.25s ease;}\n}section.svelte-d2ss8n {flex:1;display:flex;flex-direction:column;overflow:hidden;}section.svelte-d2ss8n .wrap:where(.svelte-d2ss8n) {flex:1;display:flex;gap:var(--gap);overflow:hidden;}\n@media (max-width: 800px) {\n}\n@-moz-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes svelte-d2ss8n-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}"
};
function lh(e, t) {
	ed(t, !0), no(e, lf);
	let n = e0(-1), r = e0(!1), a = eH(() => nP[tW(n)]), s = () => {
		e2(r, !tW(r));
	};
	nj(() => {
		var e;
		let t, a;
		return e = (e) => {
			if (e2(r, !1), !e) return void e2(n, -2);
			let t = nP.findIndex(([t]) => t.toLowerCase() == e.toLowerCase());
			-1 == t ? "x" == e.toLowerCase() ? e2(n, -3) : e2(n, -2) : e2(n, t, !0);
		}, a = l((n, r) => {
			t = setTimeout(() => {
				e(n);
			});
		}), () => {
			a(), clearTimeout(t);
		};
	});
	var i = lu(), o = te(i), c = (e) => {
		var t = lc();
		tZ("click", t, s), t4(e, t);
	};
	nt(o, (e) => {
		tW(r) || e(c);
	});
	var d = tn(o), u = (e) => {
		var t = ld();
		tZ("click", t, s), t4(e, t);
	};
	nt(d, (e) => {
		tW(r) && e(u);
	});
	var f = tn(d);
	{
		let e = eH(() => tW(r) ? "show" : "");
		nU(f, {
			get class() {
				return tW(e);
			},
			get active_index() {
				return tW(n);
			},
			set active_index($$value) {
				e2(n, $$value, !0);
			},
			get aside_open() {
				return tW(r);
			},
			set aside_open($$value) {
				e2(r, $$value, !0);
			}
		});
	}
	var h = tn(f), p = te(h), v = te(p), g = (e) => {
		rm(e, {});
	}, b = (e) => {
		lo(e);
	}, x = (e) => {
		ln(e, { get info() {
			return tW(a);
		} });
	};
	nt(v, (e) => {
		-2 == tW(n) ? e(g) : -3 == tW(n) ? e(b, 1) : tW(a) && e(x, 2);
	}), en(p), en(h), en(i), t4(e, i), eu();
}
tQ(["click"]), nz(lh, {}, [], [], { mode: "open" }), t7(lh, { target: r });
export { no as a, t4 as c, tn as d, en as f, nh as i, t5 as l, nz as n, nl as o, nv as r, nn as s, nC as t, te as u };
