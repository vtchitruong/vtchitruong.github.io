"use strict";
(() => {
    var An = Object.create;
    var Ir = Object.defineProperty;
    var Mn = Object.getOwnPropertyDescriptor;
    var Cn = Object.getOwnPropertyNames,
        Zr = Object.getOwnPropertySymbols,
        In = Object.getPrototypeOf,
        rt = Object.prototype.hasOwnProperty,
        Ln = Object.prototype.propertyIsEnumerable;
    var et = (e, r, t) => r in e ? Ir(e, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[r] = t,
        Ke = (e, r) => {
            for (var t in r || (r = {})) rt.call(r, t) && et(e, t, r[t]);
            if (Zr)
                for (var t of Zr(r)) Ln.call(r, t) && et(e, t, r[t]);
            return e
        };
    var Oe = (e, r) => () => (r || e((r = {
        exports: {}
    }).exports, r), r.exports);
    var Rn = (e, r, t, n) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let o of Cn(r)) !rt.call(e, o) && o !== t && Ir(e, o, {
                get: () => r[o],
                enumerable: !(n = Mn(r, o)) || n.enumerable
            });
        return e
    };
    var tt = (e, r, t) => (t = e != null ? An(In(e)) : {}, Rn(r || !e || !e.__esModule ? Ir(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var Ne = Oe(J => {
        (function () {
            var e, r, t, n, o, i, a, c, u, s, f, p, l, v, h, m, b, w, S, R;
            R = 150, s = 20, S = 150, u = .75, J.score = function (d, x, E) {
                var O, y, g, T;
                return y = E.preparedQuery, O = E.allowErrors, O || o(d, y.core_lw, y.core_up) ? (T = d.toLowerCase(), g = r(d, T, y), Math.ceil(g)) : 0
            }, J.isMatch = o = function (d, x, E) {
                var O, y, g, T, F, z, I;
                if (g = d.length, T = x.length, !g || T > g) return !1;
                for (O = -1, y = -1; ++y < T;) {
                    for (F = x.charCodeAt(y), z = E.charCodeAt(y); ++O < g && (I = d.charCodeAt(O), !(I === F || I === z)););
                    if (O === g) return !1
                }
                return !0
            }, J.computeScore = r = function (d, x, E) {
                var O, y, g, T, F, z, I, H, C, $, V, ne, q, se, me, oe, de, ue, Tr, _e, Qe, Ar, Mr, Cr;
                if (me = E.query, oe = E.query_lw, $ = d.length, q = me.length, O = f(d, x, me, oe), y = O.score, O.count === q) return v(q, $, y, O.pos);
                if (se = x.indexOf(oe), se > -1) return h(d, x, me, oe, se, q, $);
                for (_e = new Array(q), F = new Array(q), Cr = w(q, $), V = Math.ceil(u * q) + 5, ne = V, I = !0, C = -1; ++C < q;) _e[C] = 0, F[C] = 0;
                for (H = -1; ++H < $;) {
                    if (Ar = x[H], !Ar.charCodeAt(0) in E.charCodes) {
                        if (I) {
                            for (C = -1; ++C < q;) F[C] = 0;
                            I = !1
                        }
                        continue
                    }
                    for (ue = 0, Tr = 0, T = 0, de = !0, I = !0, C = -1; ++C < q;) {
                        if (Qe = _e[C], Qe > ue && (ue = Qe), z = 0, oe[C] === Ar)
                            if (Mr = c(H, d, x), z = T > 0 ? T : l(d, x, me, oe, H, C, Mr), g = Tr + p(H, C, Mr, y, z), g > ue) ue = g, ne = V;
                            else {
                                if (de && --ne <= 0) return Math.max(ue, _e[q - 1]) * Cr;
                                de = !1
                            } Tr = Qe, T = F[C], F[C] = z, _e[C] = ue
                    }
                }
                return ue = _e[q - 1], ue * Cr
            }, J.isWordStart = c = function (d, x, E) {
                var O, y;
                return d === 0 ? !0 : (O = x[d], y = x[d - 1], i(y) || O !== E[d] && y === E[d - 1])
            }, J.isWordEnd = a = function (d, x, E, O) {
                var y, g;
                return d === O - 1 ? !0 : (y = x[d], g = x[d + 1], i(g) || y === E[d] && g !== E[d + 1])
            }, i = function (d) {
                return d === " " || d === "." || d === "-" || d === "_" || d === "/" || d === "\\"
            }, b = function (d) {
                var x;
                return d < s ? (x = s - d, 100 + x * x) : Math.max(100 + s - d, 0)
            }, J.scoreSize = w = function (d, x) {
                return S / (S + Math.abs(x - d))
            }, v = function (d, x, E, O) {
                return 2 * d * (R * E + b(O)) * w(d, x)
            }, J.scorePattern = m = function (d, x, E, O, y) {
                var g, T;
                return T = d, g = 6, E === d && (g += 2), O && (g += 3), y && (g += 1), d === x && (O && (E === x ? T += 2 : T += 1), y && (g += 1)), E + T * (T + g)
            }, J.scoreCharacter = p = function (d, x, E, O, y) {
                var g;
                return g = b(d), E ? g + R * ((O > y ? O : y) + 10) : g + R * y
            }, J.scoreConsecutives = l = function (d, x, E, O, y, g, T) {
                var F, z, I, H, C, $, V;
                for (z = d.length, H = E.length, I = z - y, C = H - g, F = I < C ? I : C, $ = 0, V = 0, E[g] === d[y] && $++; ++V < F && O[++g] === x[++y];) E[g] === d[y] && $++;
                return V < F && y--, V === 1 ? 1 + 2 * $ : m(V, H, $, T, a(y, d, x, z))
            }, J.scoreExactMatch = h = function (d, x, E, O, y, g, T) {
                var F, z, I, H, C;
                for (C = c(y, d, x), C || (I = x.indexOf(O, y + 1), I > -1 && (C = c(I, d, x), C && (y = I))), z = -1, H = 0; ++z < g;) E[y + z] === d[z] && H++;
                return F = a(y + g - 1, d, x, T), v(g, T, m(g, g, H, C, F), y)
            }, e = function () {
                function d(x, E, O) {
                    this.score = x, this.pos = E, this.count = O
                }
                return d
            }(), t = new e(0, .1, 0), J.scoreAcronyms = f = function (d, x, E, O) {
                var y, g, T, F, z, I, H, C, $, V, ne;
                if (z = d.length, I = E.length, !(z > 1 && I > 1)) return t;
                for (y = 0, V = 0, ne = 0, C = 0, T = -1, F = -1; ++F < I;) {
                    if (H = O[F], i(H))
                        if (T = x.indexOf(H, T + 1), T > -1) {
                            V++;
                            continue
                        } else break;
                    for (; ++T < z;)
                        if (H === x[T] && c(T, d, x)) {
                            E[F] === d[T] && C++, ne += T, y++;
                            break
                        } if (T === z) break
                }
                return y < 2 ? t : (g = y === I ? n(d, x, E, y) : !1, $ = m(y, I, C, !0, g), new e($, ne / y, y + V))
            }, n = function (d, x, E, O) {
                var y, g, T, F;
                if (T = d.length, F = E.length, y = 0, T > 12 * F) return !1;
                for (g = -1; ++g < T;)
                    if (c(g, d, x) && ++y > O) return !1;
                return !0
            }
        }).call(J)
    });
    var _r = Oe(De => {
        (function () {
            var e, r, t, n, o, i, a, c, u, s;
            s = Ne(), i = s.isMatch, e = s.computeScore, c = s.scoreSize, u = 20, t = 2.5, De.score = function (f, p, l) {
                var v, h, m, b;
                return h = l.preparedQuery, v = l.allowErrors, v || i(f, h.core_lw, h.core_up) ? (b = f.toLowerCase(), m = e(f, b, h), m = a(f, b, m, l), Math.ceil(m)) : 0
            }, a = function (f, p, l, v) {
                var h, m, b, w, S, R, d, x, E, O;
                if (l === 0) return 0;
                for (E = v.preparedQuery, O = v.useExtensionBonus, x = v.pathSeparator, S = f.length - 1; f[S] === x;) S--;
                if (b = f.lastIndexOf(x, S), d = S - b, R = 1, O && (R += o(p, E.ext, b, S, 2), l *= R), b === -1) return l;
                for (w = E.depth; b > -1 && w-- > 0;) b = f.lastIndexOf(x, b - 1);
                return m = b === -1 ? l : R * e(f.slice(b + 1, S + 1), p.slice(b + 1, S + 1), E), h = .5 * u / (u + r(f, S + 1, x)), h * m + (1 - h) * l * c(0, t * d)
            }, De.countDir = r = function (f, p, l) {
                var v, h;
                if (p < 1) return 0;
                for (v = 0, h = -1; ++h < p && f[h] === l;);
                for (; ++h < p;)
                    if (f[h] === l)
                        for (v++; ++h < p && f[h] === l;);
                return v
            }, De.getExtension = n = function (f) {
                var p;
                return p = f.lastIndexOf("."), p < 0 ? "" : f.substr(p + 1)
            }, o = function (f, p, l, v, h) {
                var m, b, w, S;
                if (!p.length || (S = f.lastIndexOf(".", v), !(S > l))) return 0;
                for (w = p.length, m = v - S, m < w && (w = m, m = p.length), S++, b = -1; ++b < w && f[S + b] === p[b];);
                return b === 0 && h > 0 ? .9 * o(f, p, l, S - 2, h - 1) : b / m
            }
        }).call(De)
    });
    var Jr = Oe((cn, pn) => {
        (function () {
            var e, r, t, n, o, i, a, c;
            c = _r(), t = c.countDir, o = c.getExtension, pn.exports = e = function () {
                function u(s, f) {
                    var p, l, v;
                    if (v = f != null ? f : {}, p = v.optCharRegEx, l = v.pathSeparator, !(s && s.length)) return null;
                    this.query = s, this.query_lw = s.toLowerCase(), this.core = r(s, p), this.core_lw = this.core.toLowerCase(), this.core_up = a(this.core), this.depth = t(s, s.length, l), this.ext = o(this.query_lw), this.charCodes = n(this.query_lw)
                }
                return u
            }(), i = /[ _\-:\/\\]/g, r = function (u, s) {
                return s == null && (s = i), u.replace(s, "")
            }, a = function (u) {
                var s, f, p, l;
                for (f = "", p = 0, l = u.length; p < l; p++) s = u[p], f += s.toUpperCase()[0];
                return f
            }, n = function (u) {
                var s, f, p;
                for (p = u.length, f = -1, s = []; ++f < p;) s[u.charCodeAt(f)] = !0;
                return s
            }
        }).call(cn)
    });
    var hn = Oe((ln, mn) => {
        (function () {
            var e, r, t, n, o;
            n = Ne(), r = _r(), e = Jr(), t = function (i) {
                return i.candidate
            }, o = function (i, a) {
                return a.score - i.score
            }, mn.exports = function (i, a, c) {
                var u, s, f, p, l, v, h, m, b, w, S, R, d;
                for (m = [], f = c.key, l = c.maxResults, p = c.maxInners, S = c.usePathScoring, b = p != null && p > 0 ? p : i.length + 1, u = f != null, h = S ? r : n, R = 0, d = i.length; R < d && (s = i[R], w = u ? s[f] : s, !(!!w && (v = h.score(w, a, c), v > 0 && (m.push({
                        candidate: s,
                        score: v
                    }), !--b)))); R++);
                return m.sort(o), i = m.map(t), l != null && (i = i.slice(0, l)), i
            }
        }).call(ln)
    });
    var dn = Oe(Or => {
        (function () {
            var e, r, t, n, o, i, a, c, u, s;
            s = Ne(), t = s.isMatch, n = s.isWordStart, u = s.scoreConsecutives, c = s.scoreCharacter, a = s.scoreAcronyms, Or.match = o = function (f, p, l) {
                var v, h, m, b, w, S;
                return v = l.allowErrors, w = l.preparedQuery, b = l.pathSeparator, v || t(f, w.core_lw, w.core_up) ? (S = f.toLowerCase(), m = r(f, S, w), m.length === 0 || f.indexOf(b) > -1 && (h = e(f, S, w, b), m = i(m, h)), m) : []
            }, Or.wrap = function (f, p, l) {
                var v, h, m, b, w, S, R, d, x;
                if (l.wrap != null && (x = l.wrap, S = x.tagClass, d = x.tagOpen, R = x.tagClose), S == null && (S = "highlight"), d == null && (d = '<strong class="' + S + '">'), R == null && (R = "</strong>"), f === p) return d + f + R;
                if (m = o(f, p, l), m.length === 0) return f;
                for (b = "", v = -1, w = 0; ++v < m.length;) {
                    for (h = m[v], h > w && (b += f.substring(w, h), w = h); ++v < m.length;)
                        if (m[v] === h + 1) h++;
                        else {
                            v--;
                            break
                        } h++, h > w && (b += d, b += f.substring(w, h), b += R, w = h)
                }
                return w <= f.length - 1 && (b += f.substring(w)), b
            }, e = function (f, p, l, v) {
                var h, m, b;
                for (b = f.length - 1; f[b] === v;) b--;
                if (h = f.lastIndexOf(v, b), h === -1) return [];
                for (m = l.depth; m-- > 0;)
                    if (h = f.lastIndexOf(v, h - 1), h === -1) return [];
                return h++, b++, r(f.slice(h, b), p.slice(h, b), l, h)
            }, i = function (f, p) {
                var l, v, h, m, b, w, S;
                if (b = f.length, w = p.length, w === 0) return f.slice();
                if (b === 0) return p.slice();
                for (h = -1, m = 0, v = p[m], S = []; ++h < b;) {
                    for (l = f[h]; v <= l && ++m < w;) v < l && S.push(v), v = p[m];
                    S.push(l)
                }
                for (; m < w;) S.push(p[m++]);
                return S
            }, r = function (f, p, l, v) {
                var h, m, b, w, S, R, d, x, E, O, y, g, T, F, z, I, H, C, $, V, ne, q, se, me, oe, de;
                for (v == null && (v = 0), C = l.query, $ = l.query_lw, T = f.length, I = C.length, S = a(f, p, C, $).score, q = new Array(I), E = new Array(I), b = 0, w = 1, m = 2, h = 3, de = new Array(T * I), H = -1, g = -1; ++g < I;) q[g] = 0, E[g] = 0;
                for (y = -1; ++y < T;)
                    for (V = 0, se = 0, x = 0, me = p[y], g = -1; ++g < I;) O = 0, R = 0, ne = se, $[g] === me && (oe = n(y, f, p), O = x > 0 ? x : u(f, p, C, $, y, g, oe), R = ne + c(y, g, oe, S, O)), se = q[g], x = E[g], V > se ? z = m : (V = se, z = w), R > V ? (V = R, z = h) : O = 0, q[g] = V, E[g] = O, de[++H] = V > 0 ? z : b;
                for (y = T - 1, g = I - 1, H = y * I + g, d = !0, F = []; d && y >= 0 && g >= 0;) switch (de[H]) {
                    case w:
                        y--, H -= I;
                        break;
                    case m:
                        g--, H--;
                        break;
                    case h:
                        F.push(y + v), g--, y--, H -= I + 1;
                        break;
                    default:
                        d = !1
                }
                return F.reverse(), F
            }
        }).call(Or)
    });
    var Br = Oe((vn, bn) => {
        (function () {
            var e, r, t, n, o, i, a, c;
            t = hn(), n = dn(), c = Ne(), i = _r(), e = Jr(), a = null, r = (typeof process != "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/", bn.exports = {
                filter: function (u, s, f) {
                    return f == null && (f = {}), s != null && s.length && (u != null && u.length) ? (f = o(f, s), t(u, s, f)) : []
                },
                score: function (u, s, f) {
                    return f == null && (f = {}), u != null && u.length && (s != null && s.length) ? (f = o(f, s), f.usePathScoring ? i.score(u, s, f) : c.score(u, s, f)) : 0
                },
                match: function (u, s, f) {
                    var p, l, v;
                    return f == null && (f = {}), u ? s ? u === s ? function () {
                        v = [];
                        for (var h = 0, m = u.length; 0 <= m ? h < m : h > m; 0 <= m ? h++ : h--) v.push(h);
                        return v
                    }.apply(this) : (f = o(f, s), n.match(u, s, f)) : [] : []
                },
                wrap: function (u, s, f) {
                    return f == null && (f = {}), u ? s ? (f = o(f, s), n.wrap(u, s, f)) : [] : []
                },
                prepareQuery: function (u, s) {
                    return s == null && (s = {}), s = o(s, u), s.preparedQuery
                }
            }, o = function (u, s) {
                return u.allowErrors == null && (u.allowErrors = !1), u.usePathScoring == null && (u.usePathScoring = !0), u.useExtensionBonus == null && (u.useExtensionBonus = !1), u.pathSeparator == null && (u.pathSeparator = r), u.optCharRegEx == null && (u.optCharRegEx = null), u.wrap == null && (u.wrap = null), u.preparedQuery == null && (u.preparedQuery = a && a.query === s ? a : a = new e(s, u)), u
            }
        }).call(vn)
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var Lr = function (e, r) {
        return Lr = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, n) {
            t.__proto__ = n
        } || function (t, n) {
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }, Lr(e, r)
    };

    function j(e, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        Lr(e, r);

        function t() {
            this.constructor = e
        }
        e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t)
    }

    function nt(e, r, t, n) {
        function o(i) {
            return i instanceof t ? i : new t(function (a) {
                a(i)
            })
        }
        return new(t || (t = Promise))(function (i, a) {
            function c(f) {
                try {
                    s(n.next(f))
                } catch (p) {
                    a(p)
                }
            }

            function u(f) {
                try {
                    s(n.throw(f))
                } catch (p) {
                    a(p)
                }
            }

            function s(f) {
                f.done ? i(f.value) : o(f.value).then(c, u)
            }
            s((n = n.apply(e, r || [])).next())
        })
    }

    function Ge(e, r) {
        var t = {
                label: 0,
                sent: function () {
                    if (i[0] & 1) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            n, o, i, a;
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, typeof Symbol == "function" && (a[Symbol.iterator] = function () {
            return this
        }), a;

        function c(s) {
            return function (f) {
                return u([s, f])
            }
        }

        function u(s) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; t;) try {
                if (n = 1, o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done) return i;
                switch (o = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
                    case 0:
                    case 1:
                        i = s;
                        break;
                    case 4:
                        return t.label++, {
                            value: s[1],
                            done: !1
                        };
                    case 5:
                        t.label++, o = s[1], s = [0];
                        continue;
                    case 7:
                        s = t.ops.pop(), t.trys.pop();
                        continue;
                    default:
                        if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                            t = 0;
                            continue
                        }
                        if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                            t.label = s[1];
                            break
                        }
                        if (s[0] === 6 && t.label < i[1]) {
                            t.label = i[1], i = s;
                            break
                        }
                        if (i && t.label < i[2]) {
                            t.label = i[2], t.ops.push(s);
                            break
                        }
                        i[2] && t.ops.pop(), t.trys.pop();
                        continue
                }
                s = r.call(e, t)
            } catch (f) {
                s = [6, f], o = 0
            } finally {
                n = i = 0
            }
            if (s[0] & 5) throw s[1];
            return {
                value: s[0] ? s[1] : void 0,
                done: !0
            }
        }
    }

    function G(e) {
        var r = typeof Symbol == "function" && Symbol.iterator,
            t = r && e[r],
            n = 0;
        if (t) return t.call(e);
        if (e && typeof e.length == "number") return {
            next: function () {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function W(e, r) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t) return e;
        var n = t.call(e),
            o, i = [],
            a;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(o = n.next()).done;) i.push(o.value)
        } catch (c) {
            a = {
                error: c
            }
        } finally {
            try {
                o && !o.done && (t = n.return) && t.call(n)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    }

    function U(e, r, t) {
        if (t || arguments.length === 2)
            for (var n = 0, o = r.length, i; n < o; n++)(i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
        return e.concat(i || Array.prototype.slice.call(r))
    }

    function ve(e) {
        return this instanceof ve ? (this.v = e, this) : new ve(e)
    }

    function ot(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = t.apply(e, r || []),
            o, i = [];
        return o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function () {
            return this
        }, o;

        function a(l) {
            n[l] && (o[l] = function (v) {
                return new Promise(function (h, m) {
                    i.push([l, v, h, m]) > 1 || c(l, v)
                })
            })
        }

        function c(l, v) {
            try {
                u(n[l](v))
            } catch (h) {
                p(i[0][3], h)
            }
        }

        function u(l) {
            l.value instanceof ve ? Promise.resolve(l.value.v).then(s, f) : p(i[0][2], l)
        }

        function s(l) {
            c("next", l)
        }

        function f(l) {
            c("throw", l)
        }

        function p(l, v) {
            l(v), i.shift(), i.length && c(i[0][0], i[0][1])
        }
    }

    function it(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = e[Symbol.asyncIterator],
            t;
        return r ? r.call(e) : (e = typeof G == "function" ? G(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
            return this
        }, t);

        function n(i) {
            t[i] = e[i] && function (a) {
                return new Promise(function (c, u) {
                    a = e[i](a), o(c, u, a.done, a.value)
                })
            }
        }

        function o(i, a, c, u) {
            Promise.resolve(u).then(function (s) {
                i({
                    value: s,
                    done: c
                })
            }, a)
        }
    }

    function _(e) {
        return typeof e == "function"
    }

    function Ye(e) {
        var r = function (n) {
                Error.call(n), n.stack = new Error().stack
            },
            t = e(r);
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }
    var Je = Ye(function (e) {
        return function (t) {
            e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function (n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
        }
    });

    function fe(e, r) {
        if (e) {
            var t = e.indexOf(r);
            0 <= t && e.splice(t, 1)
        }
    }
    var ie = function () {
        function e(r) {
            this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        return e.prototype.unsubscribe = function () {
            var r, t, n, o, i;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a)
                    if (this._parentage = null, Array.isArray(a)) try {
                        for (var c = G(a), u = c.next(); !u.done; u = c.next()) {
                            var s = u.value;
                            s.remove(this)
                        }
                    } catch (m) {
                        r = {
                            error: m
                        }
                    } finally {
                        try {
                            u && !u.done && (t = c.return) && t.call(c)
                        } finally {
                            if (r) throw r.error
                        }
                    } else a.remove(this);
                var f = this.initialTeardown;
                if (_(f)) try {
                    f()
                } catch (m) {
                    i = m instanceof Je ? m.errors : [m]
                }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var l = G(p), v = l.next(); !v.done; v = l.next()) {
                            var h = v.value;
                            try {
                                at(h)
                            } catch (m) {
                                i = i != null ? i : [], m instanceof Je ? i = U(U([], W(i)), W(m.errors)) : i.push(m)
                            }
                        }
                    } catch (m) {
                        n = {
                            error: m
                        }
                    } finally {
                        try {
                            v && !v.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                if (i) throw new Je(i)
            }
        }, e.prototype.add = function (r) {
            var t;
            if (r && r !== this)
                if (this.closed) at(r);
                else {
                    if (r instanceof e) {
                        if (r.closed || r._hasParent(this)) return;
                        r._addParent(this)
                    }(this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r)
                }
        }, e.prototype._hasParent = function (r) {
            var t = this._parentage;
            return t === r || Array.isArray(t) && t.includes(r)
        }, e.prototype._addParent = function (r) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r
        }, e.prototype._removeParent = function (r) {
            var t = this._parentage;
            t === r ? this._parentage = null : Array.isArray(t) && fe(t, r)
        }, e.prototype.remove = function (r) {
            var t = this._finalizers;
            t && fe(t, r), r instanceof e && r._removeParent(this)
        }, e.EMPTY = function () {
            var r = new e;
            return r.closed = !0, r
        }(), e
    }();
    var Rr = ie.EMPTY;

    function Be(e) {
        return e instanceof ie || e && "closed" in e && _(e.remove) && _(e.add) && _(e.unsubscribe)
    }

    function at(e) {
        _(e) ? e() : e.unsubscribe()
    }
    var te = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var Te = {
        setTimeout: function (e, r) {
            for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
            var o = Te.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, U([e, r], W(t))) : setTimeout.apply(void 0, U([e, r], W(t)))
        },
        clearTimeout: function (e) {
            var r = Te.delegate;
            return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };

    function Xe(e) {
        Te.setTimeout(function () {
            var r = te.onUnhandledError;
            if (r) r(e);
            else throw e
        })
    }

    function ce() {}
    var st = function () {
        return Pr("C", void 0, void 0)
    }();

    function ut(e) {
        return Pr("E", void 0, e)
    }

    function ft(e) {
        return Pr("N", e, void 0)
    }

    function Pr(e, r, t) {
        return {
            kind: e,
            value: r,
            error: t
        }
    }
    var be = null;

    function Ae(e) {
        if (te.useDeprecatedSynchronousErrorHandling) {
            var r = !be;
            if (r && (be = {
                    errorThrown: !1,
                    error: null
                }), e(), r) {
                var t = be,
                    n = t.errorThrown,
                    o = t.error;
                if (be = null, n) throw o
            }
        } else e()
    }

    function ct(e) {
        te.useDeprecatedSynchronousErrorHandling && be && (be.errorThrown = !0, be.error = e)
    }
    var We = function (e) {
        j(r, e);

        function r(t) {
            var n = e.call(this) || this;
            return n.isStopped = !1, t ? (n.destination = t, Be(t) && t.add(n)) : n.destination = Hn, n
        }
        return r.create = function (t, n, o) {
            return new xe(t, n, o)
        }, r.prototype.next = function (t) {
            this.isStopped ? kr(ft(t), this) : this._next(t)
        }, r.prototype.error = function (t) {
            this.isStopped ? kr(ut(t), this) : (this.isStopped = !0, this._error(t))
        }, r.prototype.complete = function () {
            this.isStopped ? kr(st, this) : (this.isStopped = !0, this._complete())
        }, r.prototype.unsubscribe = function () {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, r.prototype._next = function (t) {
            this.destination.next(t)
        }, r.prototype._error = function (t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, r.prototype._complete = function () {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, r
    }(ie);
    var Pn = Function.prototype.bind;

    function Fr(e, r) {
        return Pn.call(e, r)
    }
    var Fn = function () {
            function e(r) {
                this.partialObserver = r
            }
            return e.prototype.next = function (r) {
                var t = this.partialObserver;
                if (t.next) try {
                    t.next(r)
                } catch (n) {
                    Ze(n)
                }
            }, e.prototype.error = function (r) {
                var t = this.partialObserver;
                if (t.error) try {
                    t.error(r)
                } catch (n) {
                    Ze(n)
                } else Ze(r)
            }, e.prototype.complete = function () {
                var r = this.partialObserver;
                if (r.complete) try {
                    r.complete()
                } catch (t) {
                    Ze(t)
                }
            }, e
        }(),
        xe = function (e) {
            j(r, e);

            function r(t, n, o) {
                var i = e.call(this) || this,
                    a;
                if (_(t) || !t) a = {
                    next: t != null ? t : void 0,
                    error: n != null ? n : void 0,
                    complete: o != null ? o : void 0
                };
                else {
                    var c;
                    i && te.useDeprecatedNextContext ? (c = Object.create(t), c.unsubscribe = function () {
                        return i.unsubscribe()
                    }, a = {
                        next: t.next && Fr(t.next, c),
                        error: t.error && Fr(t.error, c),
                        complete: t.complete && Fr(t.complete, c)
                    }) : a = t
                }
                return i.destination = new Fn(a), i
            }
            return r
        }(We);

    function Ze(e) {
        te.useDeprecatedSynchronousErrorHandling ? ct(e) : Xe(e)
    }

    function kn(e) {
        throw e
    }

    function kr(e, r) {
        var t = te.onStoppedNotification;
        t && Te.setTimeout(function () {
            return t(e, r)
        })
    }
    var Hn = {
        closed: !0,
        next: ce,
        error: kn,
        complete: ce
    };
    var Me = function () {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();

    function Y(e) {
        return e
    }

    function pt(e) {
        return e.length === 0 ? Y : e.length === 1 ? e[0] : function (t) {
            return e.reduce(function (n, o) {
                return o(n)
            }, t)
        }
    }
    var L = function () {
        function e(r) {
            r && (this._subscribe = r)
        }
        return e.prototype.lift = function (r) {
            var t = new e;
            return t.source = this, t.operator = r, t
        }, e.prototype.subscribe = function (r, t, n) {
            var o = this,
                i = zn(r) ? r : new xe(r, t, n);
            return Ae(function () {
                var a = o,
                    c = a.operator,
                    u = a.source;
                i.add(c ? c.call(i, u) : u ? o._subscribe(i) : o._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function (r) {
            try {
                return this._subscribe(r)
            } catch (t) {
                r.error(t)
            }
        }, e.prototype.forEach = function (r, t) {
            var n = this;
            return t = lt(t), new t(function (o, i) {
                var a = new xe({
                    next: function (c) {
                        try {
                            r(c)
                        } catch (u) {
                            i(u), a.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(a)
            })
        }, e.prototype._subscribe = function (r) {
            var t;
            return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r)
        }, e.prototype[Me] = function () {
            return this
        }, e.prototype.pipe = function () {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return pt(r)(this)
        }, e.prototype.toPromise = function (r) {
            var t = this;
            return r = lt(r), new r(function (n, o) {
                var i;
                t.subscribe(function (a) {
                    return i = a
                }, function (a) {
                    return o(a)
                }, function () {
                    return n(i)
                })
            })
        }, e.create = function (r) {
            return new e(r)
        }, e
    }();

    function lt(e) {
        var r;
        return (r = e != null ? e : te.Promise) !== null && r !== void 0 ? r : Promise
    }

    function Wn(e) {
        return e && _(e.next) && _(e.error) && _(e.complete)
    }

    function zn(e) {
        return e && e instanceof We || Wn(e) && Be(e)
    }

    function Un(e) {
        return _(e == null ? void 0 : e.lift)
    }

    function A(e) {
        return function (r) {
            if (Un(r)) return r.lift(function (t) {
                try {
                    return e(t, this)
                } catch (n) {
                    this.error(n)
                }
            });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }

    function M(e, r, t, n, o) {
        return new Vn(e, r, t, n, o)
    }
    var Vn = function (e) {
        j(r, e);

        function r(t, n, o, i, a, c) {
            var u = e.call(this, t) || this;
            return u.onFinalize = a, u.shouldUnsubscribe = c, u._next = n ? function (s) {
                try {
                    n(s)
                } catch (f) {
                    t.error(f)
                }
            } : e.prototype._next, u._error = i ? function (s) {
                try {
                    i(s)
                } catch (f) {
                    t.error(f)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, u._complete = o ? function () {
                try {
                    o()
                } catch (s) {
                    t.error(s)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, u
        }
        return r.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
            }
        }, r
    }(We);
    var Ce = {
        schedule: function (e) {
            var r = requestAnimationFrame,
                t = cancelAnimationFrame,
                n = Ce.delegate;
            n && (r = n.requestAnimationFrame, t = n.cancelAnimationFrame);
            var o = r(function (i) {
                t = void 0, e(i)
            });
            return new ie(function () {
                return t == null ? void 0 : t(o)
            })
        },
        requestAnimationFrame: function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = Ce.delegate;
            return ((t == null ? void 0 : t.requestAnimationFrame) || requestAnimationFrame).apply(void 0, U([], W(e)))
        },
        cancelAnimationFrame: function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = Ce.delegate;
            return ((t == null ? void 0 : t.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, U([], W(e)))
        },
        delegate: void 0
    };
    var mt = Ye(function (e) {
        return function () {
            e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    });
    var B = function (e) {
        j(r, e);

        function r() {
            var t = e.call(this) || this;
            return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
        }
        return r.prototype.lift = function (t) {
            var n = new ht(this, this);
            return n.operator = t, n
        }, r.prototype._throwIfClosed = function () {
            if (this.closed) throw new mt
        }, r.prototype.next = function (t) {
            var n = this;
            Ae(function () {
                var o, i;
                if (n._throwIfClosed(), !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var a = G(n.currentObservers), c = a.next(); !c.done; c = a.next()) {
                            var u = c.value;
                            u.next(t)
                        }
                    } catch (s) {
                        o = {
                            error: s
                        }
                    } finally {
                        try {
                            c && !c.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
            })
        }, r.prototype.error = function (t) {
            var n = this;
            Ae(function () {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.hasError = n.isStopped = !0, n.thrownError = t;
                    for (var o = n.observers; o.length;) o.shift().error(t)
                }
            })
        }, r.prototype.complete = function () {
            var t = this;
            Ae(function () {
                if (t._throwIfClosed(), !t.isStopped) {
                    t.isStopped = !0;
                    for (var n = t.observers; n.length;) n.shift().complete()
                }
            })
        }, r.prototype.unsubscribe = function () {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(r.prototype, "observed", {
            get: function () {
                var t;
                return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype._trySubscribe = function (t) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
        }, r.prototype._subscribe = function (t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t)
        }, r.prototype._innerSubscribe = function (t) {
            var n = this,
                o = this,
                i = o.hasError,
                a = o.isStopped,
                c = o.observers;
            return i || a ? Rr : (this.currentObservers = null, c.push(t), new ie(function () {
                n.currentObservers = null, fe(c, t)
            }))
        }, r.prototype._checkFinalizedStatuses = function (t) {
            var n = this,
                o = n.hasError,
                i = n.thrownError,
                a = n.isStopped;
            o ? t.error(i) : a && t.complete()
        }, r.prototype.asObservable = function () {
            var t = new L;
            return t.source = this, t
        }, r.create = function (t, n) {
            return new ht(t, n)
        }, r
    }(L);
    var ht = function (e) {
        j(r, e);

        function r(t, n) {
            var o = e.call(this) || this;
            return o.destination = t, o.source = n, o
        }
        return r.prototype.next = function (t) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t)
        }, r.prototype.error = function (t) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t)
        }, r.prototype.complete = function () {
            var t, n;
            (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
        }, r.prototype._subscribe = function (t) {
            var n, o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : Rr
        }, r
    }(B);
    var ze = {
        now: function () {
            return (ze.delegate || Date).now()
        },
        delegate: void 0
    };
    var dt = function (e) {
        j(r, e);

        function r(t, n, o) {
            t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), o === void 0 && (o = ze);
            var i = e.call(this) || this;
            return i._bufferSize = t, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, n), i
        }
        return r.prototype.next = function (t) {
            var n = this,
                o = n.isStopped,
                i = n._buffer,
                a = n._infiniteTimeWindow,
                c = n._timestampProvider,
                u = n._windowTime;
            o || (i.push(t), !a && i.push(c.now() + u)), this._trimBuffer(), e.prototype.next.call(this, t)
        }, r.prototype._subscribe = function (t) {
            this._throwIfClosed(), this._trimBuffer();
            for (var n = this._innerSubscribe(t), o = this, i = o._infiniteTimeWindow, a = o._buffer, c = a.slice(), u = 0; u < c.length && !t.closed; u += i ? 1 : 2) t.next(c[u]);
            return this._checkFinalizedStatuses(t), n
        }, r.prototype._trimBuffer = function () {
            var t = this,
                n = t._bufferSize,
                o = t._timestampProvider,
                i = t._buffer,
                a = t._infiniteTimeWindow,
                c = (a ? 1 : 2) * n;
            if (n < 1 / 0 && c < i.length && i.splice(0, i.length - c), !a) {
                for (var u = o.now(), s = 0, f = 1; f < i.length && i[f] <= u; f += 2) s = f;
                s && i.splice(0, s + 1)
            }
        }, r
    }(B);
    var vt = function (e) {
        j(r, e);

        function r(t, n) {
            return e.call(this) || this
        }
        return r.prototype.schedule = function (t, n) {
            return n === void 0 && (n = 0), this
        }, r
    }(ie);
    var Ue = {
        setInterval: function (e, r) {
            for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
            var o = Ue.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, U([e, r], W(t))) : setInterval.apply(void 0, U([e, r], W(t)))
        },
        clearInterval: function (e) {
            var r = Ue.delegate;
            return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var er = function (e) {
        j(r, e);

        function r(t, n) {
            var o = e.call(this, t, n) || this;
            return o.scheduler = t, o.work = n, o.pending = !1, o
        }
        return r.prototype.schedule = function (t, n) {
            var o;
            if (n === void 0 && (n = 0), this.closed) return this;
            this.state = t;
            var i = this.id,
                a = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(a, i, n)), this.pending = !0, this.delay = n, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, n), this
        }, r.prototype.requestAsyncId = function (t, n, o) {
            return o === void 0 && (o = 0), Ue.setInterval(t.flush.bind(t, this), o)
        }, r.prototype.recycleAsyncId = function (t, n, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1) return n;
            n != null && Ue.clearInterval(n)
        }, r.prototype.execute = function (t, n) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(t, n);
            if (o) return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, r.prototype._execute = function (t, n) {
            var o = !1,
                i;
            try {
                this.work(t)
            } catch (a) {
                o = !0, i = a || new Error("Scheduled action threw falsy error")
            }
            if (o) return this.unsubscribe(), i
        }, r.prototype.unsubscribe = function () {
            if (!this.closed) {
                var t = this,
                    n = t.id,
                    o = t.scheduler,
                    i = o.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, fe(i, this), n != null && (this.id = this.recycleAsyncId(o, n, null)), this.delay = null, e.prototype.unsubscribe.call(this)
            }
        }, r
    }(vt);
    var Hr = function () {
        function e(r, t) {
            t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t
        }
        return e.prototype.schedule = function (r, t, n) {
            return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t)
        }, e.now = ze.now, e
    }();
    var rr = function (e) {
        j(r, e);

        function r(t, n) {
            n === void 0 && (n = Hr.now);
            var o = e.call(this, t, n) || this;
            return o.actions = [], o._active = !1, o
        }
        return r.prototype.flush = function (t) {
            var n = this.actions;
            if (this._active) {
                n.push(t);
                return
            }
            var o;
            this._active = !0;
            do
                if (o = t.execute(t.state, t.delay)) break; while (t = n.shift());
            if (this._active = !1, o) {
                for (; t = n.shift();) t.unsubscribe();
                throw o
            }
        }, r
    }(Hr);
    var ye = new rr(er),
        bt = ye;
    var xt = function (e) {
        j(r, e);

        function r(t, n) {
            var o = e.call(this, t, n) || this;
            return o.scheduler = t, o.work = n, o
        }
        return r.prototype.requestAsyncId = function (t, n, o) {
            return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, t, n, o) : (t.actions.push(this), t._scheduled || (t._scheduled = Ce.requestAnimationFrame(function () {
                return t.flush(void 0)
            })))
        }, r.prototype.recycleAsyncId = function (t, n, o) {
            var i;
            if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, n, o);
            var a = t.actions;
            n != null && ((i = a[a.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (Ce.cancelAnimationFrame(n), t._scheduled = void 0)
        }, r
    }(er);
    var yt = function (e) {
        j(r, e);

        function r() {
            return e !== null && e.apply(this, arguments) || this
        }
        return r.prototype.flush = function (t) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions,
                i;
            t = t || o.shift();
            do
                if (i = t.execute(t.state, t.delay)) break; while ((t = o[0]) && t.id === n && o.shift());
            if (this._active = !1, i) {
                for (;
                    (t = o[0]) && t.id === n && o.shift();) t.unsubscribe();
                throw i
            }
        }, r
    }(rr);
    var Wr = new yt(xt);
    var pe = new L(function (e) {
        return e.complete()
    });

    function tr(e) {
        return e && _(e.schedule)
    }

    function zr(e) {
        return e[e.length - 1]
    }

    function Ie(e) {
        return _(zr(e)) ? e.pop() : void 0
    }

    function ae(e) {
        return tr(zr(e)) ? e.pop() : void 0
    }

    function gt(e, r) {
        return typeof zr(e) == "number" ? e.pop() : r
    }
    var Le = function (e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };

    function nr(e) {
        return _(e == null ? void 0 : e.then)
    }

    function or(e) {
        return _(e[Me])
    }

    function ir(e) {
        return Symbol.asyncIterator && _(e == null ? void 0 : e[Symbol.asyncIterator])
    }

    function ar(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }

    function jn() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var sr = jn();

    function ur(e) {
        return _(e == null ? void 0 : e[sr])
    }

    function fr(e) {
        return ot(this, arguments, function () {
            var t, n, o, i;
            return Ge(this, function (a) {
                switch (a.label) {
                    case 0:
                        t = e.getReader(), a.label = 1;
                    case 1:
                        a.trys.push([1, , 9, 10]), a.label = 2;
                    case 2:
                        return [4, ve(t.read())];
                    case 3:
                        return n = a.sent(), o = n.value, i = n.done, i ? [4, ve(void 0)] : [3, 5];
                    case 4:
                        return [2, a.sent()];
                    case 5:
                        return [4, ve(o)];
                    case 6:
                        return [4, a.sent()];
                    case 7:
                        return a.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return t.releaseLock(), [7];
                    case 10:
                        return [2]
                }
            })
        })
    }

    function cr(e) {
        return _(e == null ? void 0 : e.getReader)
    }

    function P(e) {
        if (e instanceof L) return e;
        if (e != null) {
            if (or(e)) return $n(e);
            if (Le(e)) return qn(e);
            if (nr(e)) return Nn(e);
            if (ir(e)) return wt(e);
            if (ur(e)) return Dn(e);
            if (cr(e)) return Qn(e)
        }
        throw ar(e)
    }

    function $n(e) {
        return new L(function (r) {
            var t = e[Me]();
            if (_(t.subscribe)) return t.subscribe(r);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }

    function qn(e) {
        return new L(function (r) {
            for (var t = 0; t < e.length && !r.closed; t++) r.next(e[t]);
            r.complete()
        })
    }

    function Nn(e) {
        return new L(function (r) {
            e.then(function (t) {
                r.closed || (r.next(t), r.complete())
            }, function (t) {
                return r.error(t)
            }).then(null, Xe)
        })
    }

    function Dn(e) {
        return new L(function (r) {
            var t, n;
            try {
                for (var o = G(e), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (r.next(a), r.closed) return
                }
            } catch (c) {
                t = {
                    error: c
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            r.complete()
        })
    }

    function wt(e) {
        return new L(function (r) {
            Kn(e, r).catch(function (t) {
                return r.error(t)
            })
        })
    }

    function Qn(e) {
        return wt(fr(e))
    }

    function Kn(e, r) {
        var t, n, o, i;
        return nt(this, void 0, void 0, function () {
            var a, c;
            return Ge(this, function (u) {
                switch (u.label) {
                    case 0:
                        u.trys.push([0, 5, 6, 11]), t = it(e), u.label = 1;
                    case 1:
                        return [4, t.next()];
                    case 2:
                        if (n = u.sent(), !!n.done) return [3, 4];
                        if (a = n.value, r.next(a), r.closed) return [2];
                        u.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        return c = u.sent(), o = {
                            error: c
                        }, [3, 11];
                    case 6:
                        return u.trys.push([6, , 9, 10]), n && !n.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
                    case 7:
                        u.sent(), u.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        if (o) throw o.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        return r.complete(), [2]
                }
            })
        })
    }

    function Q(e, r, t, n, o) {
        n === void 0 && (n = 0), o === void 0 && (o = !1);
        var i = r.schedule(function () {
            t(), o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i), !o) return i
    }

    function pr(e, r) {
        return r === void 0 && (r = 0), A(function (t, n) {
            t.subscribe(M(n, function (o) {
                return Q(n, e, function () {
                    return n.next(o)
                }, r)
            }, function () {
                return Q(n, e, function () {
                    return n.complete()
                }, r)
            }, function (o) {
                return Q(n, e, function () {
                    return n.error(o)
                }, r)
            }))
        })
    }

    function lr(e, r) {
        return r === void 0 && (r = 0), A(function (t, n) {
            n.add(e.schedule(function () {
                return t.subscribe(n)
            }, r))
        })
    }

    function Et(e, r) {
        return P(e).pipe(lr(r), pr(r))
    }

    function St(e, r) {
        return P(e).pipe(lr(r), pr(r))
    }

    function _t(e, r) {
        return new L(function (t) {
            var n = 0;
            return r.schedule(function () {
                n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule())
            })
        })
    }

    function Ot(e, r) {
        return new L(function (t) {
            var n;
            return Q(t, r, function () {
                    n = e[sr](), Q(t, r, function () {
                        var o, i, a;
                        try {
                            o = n.next(), i = o.value, a = o.done
                        } catch (c) {
                            t.error(c);
                            return
                        }
                        a ? t.complete() : t.next(i)
                    }, 0, !0)
                }),
                function () {
                    return _(n == null ? void 0 : n.return) && n.return()
                }
        })
    }

    function mr(e, r) {
        if (!e) throw new Error("Iterable cannot be null");
        return new L(function (t) {
            Q(t, r, function () {
                var n = e[Symbol.asyncIterator]();
                Q(t, r, function () {
                    n.next().then(function (o) {
                        o.done ? t.complete() : t.next(o.value)
                    })
                }, 0, !0)
            })
        })
    }

    function Tt(e, r) {
        return mr(fr(e), r)
    }

    function At(e, r) {
        if (e != null) {
            if (or(e)) return Et(e, r);
            if (Le(e)) return _t(e, r);
            if (nr(e)) return St(e, r);
            if (ir(e)) return mr(e, r);
            if (ur(e)) return Ot(e, r);
            if (cr(e)) return Tt(e, r)
        }
        throw ar(e)
    }

    function X(e, r) {
        return r ? At(e, r) : P(e)
    }

    function Z() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ae(e);
        return X(e, t)
    }

    function Ur(e, r) {
        var t = _(e) ? e : function () {
                return e
            },
            n = function (o) {
                return o.error(t())
            };
        return new L(r ? function (o) {
            return r.schedule(n, 0, o)
        } : n)
    }

    function Mt(e) {
        return e instanceof Date && !isNaN(e)
    }

    function k(e, r) {
        return A(function (t, n) {
            var o = 0;
            t.subscribe(M(n, function (i) {
                n.next(e.call(r, i, o++))
            }))
        })
    }
    var Gn = Array.isArray;

    function Yn(e, r) {
        return Gn(r) ? e.apply(void 0, U([], W(r))) : e(r)
    }

    function hr(e) {
        return k(function (r) {
            return Yn(e, r)
        })
    }
    var Jn = Array.isArray,
        Bn = Object.getPrototypeOf,
        Xn = Object.prototype,
        Zn = Object.keys;

    function Ct(e) {
        if (e.length === 1) {
            var r = e[0];
            if (Jn(r)) return {
                args: r,
                keys: null
            };
            if (eo(r)) {
                var t = Zn(r);
                return {
                    args: t.map(function (n) {
                        return r[n]
                    }),
                    keys: t
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }

    function eo(e) {
        return e && typeof e == "object" && Bn(e) === Xn
    }

    function It(e, r) {
        return e.reduce(function (t, n, o) {
            return t[n] = r[o], t
        }, {})
    }

    function Re() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ae(e),
            n = Ie(e),
            o = Ct(e),
            i = o.args,
            a = o.keys;
        if (i.length === 0) return X([], t);
        var c = new L(ro(i, t, a ? function (u) {
            return It(a, u)
        } : Y));
        return n ? c.pipe(hr(n)) : c
    }

    function ro(e, r, t) {
        return t === void 0 && (t = Y),
            function (n) {
                Lt(r, function () {
                    for (var o = e.length, i = new Array(o), a = o, c = o, u = function (f) {
                            Lt(r, function () {
                                var p = X(e[f], r),
                                    l = !1;
                                p.subscribe(M(n, function (v) {
                                    i[f] = v, l || (l = !0, c--), c || n.next(t(i.slice()))
                                }, function () {
                                    --a || n.complete()
                                }))
                            }, n)
                        }, s = 0; s < o; s++) u(s)
                }, n)
            }
    }

    function Lt(e, r, t) {
        e ? Q(t, e, r) : r()
    }

    function Rt(e, r, t, n, o, i, a, c) {
        var u = [],
            s = 0,
            f = 0,
            p = !1,
            l = function () {
                p && !u.length && !s && r.complete()
            },
            v = function (m) {
                return s < n ? h(m) : u.push(m)
            },
            h = function (m) {
                i && r.next(m), s++;
                var b = !1;
                P(t(m, f++)).subscribe(M(r, function (w) {
                    o == null || o(w), i ? v(w) : r.next(w)
                }, function () {
                    b = !0
                }, void 0, function () {
                    if (b) try {
                        s--;
                        for (var w = function () {
                                var S = u.shift();
                                a ? Q(r, a, function () {
                                    return h(S)
                                }) : h(S)
                            }; u.length && s < n;) w();
                        l()
                    } catch (S) {
                        r.error(S)
                    }
                }))
            };
        return e.subscribe(M(r, v, function () {
                p = !0, l()
            })),
            function () {
                c == null || c()
            }
    }

    function ge(e, r, t) {
        return t === void 0 && (t = 1 / 0), _(r) ? ge(function (n, o) {
            return k(function (i, a) {
                return r(n, i, o, a)
            })(P(e(n, o)))
        }, t) : (typeof r == "number" && (t = r), A(function (n, o) {
            return Rt(n, o, e, t)
        }))
    }

    function dr(e) {
        return e === void 0 && (e = 1 / 0), ge(Y, e)
    }

    function Pt() {
        return dr(1)
    }

    function Ve() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return Pt()(X(e, ae(e)))
    }

    function je(e) {
        return new L(function (r) {
            P(e()).subscribe(r)
        })
    }
    var to = ["addListener", "removeListener"],
        no = ["addEventListener", "removeEventListener"],
        oo = ["on", "off"];

    function K(e, r, t, n) {
        if (_(t) && (n = t, t = void 0), n) return K(e, r, t).pipe(hr(n));
        var o = W(so(e) ? no.map(function (c) {
                return function (u) {
                    return e[c](r, u, t)
                }
            }) : io(e) ? to.map(Ft(e, r)) : ao(e) ? oo.map(Ft(e, r)) : [], 2),
            i = o[0],
            a = o[1];
        if (!i && Le(e)) return ge(function (c) {
            return K(c, r, t)
        })(P(e));
        if (!i) throw new TypeError("Invalid event target");
        return new L(function (c) {
            var u = function () {
                for (var s = [], f = 0; f < arguments.length; f++) s[f] = arguments[f];
                return c.next(1 < s.length ? s : s[0])
            };
            return i(u),
                function () {
                    return a(u)
                }
        })
    }

    function Ft(e, r) {
        return function (t) {
            return function (n) {
                return e[t](r, n)
            }
        }
    }

    function io(e) {
        return _(e.addListener) && _(e.removeListener)
    }

    function ao(e) {
        return _(e.on) && _(e.off)
    }

    function so(e) {
        return _(e.addEventListener) && _(e.removeEventListener)
    }

    function vr(e, r, t) {
        e === void 0 && (e = 0), t === void 0 && (t = bt);
        var n = -1;
        return r != null && (tr(r) ? t = r : n = r), new L(function (o) {
            var i = Mt(e) ? +e - t.now() : e;
            i < 0 && (i = 0);
            var a = 0;
            return t.schedule(function () {
                o.closed || (o.next(a++), 0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        })
    }

    function N() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ae(e),
            n = gt(e, 1 / 0),
            o = e;
        return o.length ? o.length === 1 ? P(o[0]) : dr(n)(X(o, t)) : pe
    }
    var $e = new L(ce);
    var uo = Array.isArray;

    function kt(e) {
        return e.length === 1 && uo(e[0]) ? e[0] : e
    }

    function we(e, r) {
        return A(function (t, n) {
            var o = 0;
            t.subscribe(M(n, function (i) {
                return e.call(r, i, o++) && n.next(i)
            }))
        })
    }

    function Ht() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = Ie(e),
            n = kt(e);
        return n.length ? new L(function (o) {
            var i = n.map(function () {
                    return []
                }),
                a = n.map(function () {
                    return !1
                });
            o.add(function () {
                i = a = null
            });
            for (var c = function (s) {
                    P(n[s]).subscribe(M(o, function (f) {
                        if (i[s].push(f), i.every(function (l) {
                                return l.length
                            })) {
                            var p = i.map(function (l) {
                                return l.shift()
                            });
                            o.next(t ? t.apply(void 0, U([], W(p))) : p), i.some(function (l, v) {
                                return !l.length && a[v]
                            }) && o.complete()
                        }
                    }, function () {
                        a[s] = !0, !i[s].length && o.complete()
                    }))
                }, u = 0; !o.closed && u < n.length; u++) c(u);
            return function () {
                i = a = null
            }
        }) : pe
    }

    function Wt(e) {
        return A(function (r, t) {
            var n = !1,
                o = null,
                i = null,
                a = !1,
                c = function () {
                    if (i == null || i.unsubscribe(), i = null, n) {
                        n = !1;
                        var s = o;
                        o = null, t.next(s)
                    }
                    a && t.complete()
                },
                u = function () {
                    i = null, a && t.complete()
                };
            r.subscribe(M(t, function (s) {
                n = !0, o = s, i || P(e(s)).subscribe(i = M(t, c, u))
            }, function () {
                a = !0, (!n || !i || i.closed) && t.complete()
            }))
        })
    }

    function Vr(e, r) {
        return r === void 0 && (r = ye), Wt(function () {
            return vr(e, r)
        })
    }

    function jr(e, r) {
        return r === void 0 && (r = null), r = r != null ? r : e, A(function (t, n) {
            var o = [],
                i = 0;
            t.subscribe(M(n, function (a) {
                var c, u, s, f, p = null;
                i++ % r === 0 && o.push([]);
                try {
                    for (var l = G(o), v = l.next(); !v.done; v = l.next()) {
                        var h = v.value;
                        h.push(a), e <= h.length && (p = p != null ? p : [], p.push(h))
                    }
                } catch (w) {
                    c = {
                        error: w
                    }
                } finally {
                    try {
                        v && !v.done && (u = l.return) && u.call(l)
                    } finally {
                        if (c) throw c.error
                    }
                }
                if (p) try {
                    for (var m = G(p), b = m.next(); !b.done; b = m.next()) {
                        var h = b.value;
                        fe(o, h), n.next(h)
                    }
                } catch (w) {
                    s = {
                        error: w
                    }
                } finally {
                    try {
                        b && !b.done && (f = m.return) && f.call(m)
                    } finally {
                        if (s) throw s.error
                    }
                }
            }, function () {
                var a, c;
                try {
                    for (var u = G(o), s = u.next(); !s.done; s = u.next()) {
                        var f = s.value;
                        n.next(f)
                    }
                } catch (p) {
                    a = {
                        error: p
                    }
                } finally {
                    try {
                        s && !s.done && (c = u.return) && c.call(u)
                    } finally {
                        if (a) throw a.error
                    }
                }
                n.complete()
            }, void 0, function () {
                o = null
            }))
        })
    }

    function br(e) {
        return A(function (r, t) {
            var n = null,
                o = !1,
                i;
            n = r.subscribe(M(t, void 0, void 0, function (a) {
                i = P(e(a, br(e)(r))), n ? (n.unsubscribe(), n = null, i.subscribe(t)) : o = !0
            })), o && (n.unsubscribe(), n = null, i.subscribe(t))
        })
    }

    function $r(e, r) {
        return r === void 0 && (r = ye), A(function (t, n) {
            var o = null,
                i = null,
                a = null,
                c = function () {
                    if (o) {
                        o.unsubscribe(), o = null;
                        var s = i;
                        i = null, n.next(s)
                    }
                };

            function u() {
                var s = a + e,
                    f = r.now();
                if (f < s) {
                    o = this.schedule(void 0, s - f), n.add(o);
                    return
                }
                c()
            }
            t.subscribe(M(n, function (s) {
                i = s, a = r.now(), o || (o = r.schedule(u, e), n.add(o))
            }, function () {
                c(), n.complete()
            }, void 0, function () {
                i = o = null
            }))
        })
    }

    function qr(e) {
        return e <= 0 ? function () {
            return pe
        } : A(function (r, t) {
            var n = 0;
            r.subscribe(M(t, function (o) {
                ++n <= e && (t.next(o), e <= n && t.complete())
            }))
        })
    }

    function zt() {
        return A(function (e, r) {
            e.subscribe(M(r, ce))
        })
    }

    function Ut(e) {
        return k(function () {
            return e
        })
    }

    function Nr(e, r) {
        return r ? function (t) {
            return Ve(r.pipe(qr(1), zt()), t.pipe(Nr(e)))
        } : ge(function (t, n) {
            return P(e(t, n)).pipe(qr(1), Ut(t))
        })
    }

    function Dr(e, r) {
        r === void 0 && (r = ye);
        var t = vr(e, r);
        return Nr(function () {
            return t
        })
    }

    function le(e, r) {
        return r === void 0 && (r = Y), e = e != null ? e : fo, A(function (t, n) {
            var o, i = !0;
            t.subscribe(M(n, function (a) {
                var c = r(a);
                (i || !e(o, c)) && (i = !1, o = c, n.next(a))
            }))
        })
    }

    function fo(e, r) {
        return e === r
    }

    function xr(e, r) {
        return le(function (t, n) {
            return r ? r(t[e], n[e]) : t[e] === n[e]
        })
    }

    function Ee(e) {
        return A(function (r, t) {
            try {
                r.subscribe(t)
            } finally {
                t.add(e)
            }
        })
    }

    function Vt(e) {
        e === void 0 && (e = {});
        var r = e.connector,
            t = r === void 0 ? function () {
                return new B
            } : r,
            n = e.resetOnError,
            o = n === void 0 ? !0 : n,
            i = e.resetOnComplete,
            a = i === void 0 ? !0 : i,
            c = e.resetOnRefCountZero,
            u = c === void 0 ? !0 : c;
        return function (s) {
            var f, p, l, v = 0,
                h = !1,
                m = !1,
                b = function () {
                    p == null || p.unsubscribe(), p = void 0
                },
                w = function () {
                    b(), f = l = void 0, h = m = !1
                },
                S = function () {
                    var R = f;
                    w(), R == null || R.unsubscribe()
                };
            return A(function (R, d) {
                v++, !m && !h && b();
                var x = l = l != null ? l : t();
                d.add(function () {
                    v--, v === 0 && !m && !h && (p = Qr(S, u))
                }), x.subscribe(d), !f && v > 0 && (f = new xe({
                    next: function (E) {
                        return x.next(E)
                    },
                    error: function (E) {
                        m = !0, b(), p = Qr(w, o, E), x.error(E)
                    },
                    complete: function () {
                        h = !0, b(), p = Qr(w, a), x.complete()
                    }
                }), P(R).subscribe(f))
            })(s)
        }
    }

    function Qr(e, r) {
        for (var t = [], n = 2; n < arguments.length; n++) t[n - 2] = arguments[n];
        if (r === !0) {
            e();
            return
        }
        if (r !== !1) {
            var o = new xe({
                next: function () {
                    o.unsubscribe(), e()
                }
            });
            return P(r.apply(void 0, U([], W(t)))).subscribe(o)
        }
    }

    function Se(e, r, t) {
        var n, o, i, a, c = !1;
        return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, o = e.windowTime, r = o === void 0 ? 1 / 0 : o, i = e.refCount, c = i === void 0 ? !1 : i, t = e.scheduler) : a = e != null ? e : 1 / 0, Vt({
            connector: function () {
                return new dt(a, r, t)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: c
        })
    }

    function he() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ae(e);
        return A(function (n, o) {
            (t ? Ve(e, n, t) : Ve(e, n)).subscribe(o)
        })
    }

    function D(e, r) {
        return A(function (t, n) {
            var o = null,
                i = 0,
                a = !1,
                c = function () {
                    return a && !o && n.complete()
                };
            t.subscribe(M(n, function (u) {
                o == null || o.unsubscribe();
                var s = 0,
                    f = i++;
                P(e(u, f)).subscribe(o = M(n, function (p) {
                    return n.next(r ? r(u, p, f, s++) : p)
                }, function () {
                    o = null, c()
                }))
            }, function () {
                a = !0, c()
            }))
        })
    }

    function Pe(e, r, t) {
        var n = _(e) || r || t ? {
            next: e,
            error: r,
            complete: t
        } : e;
        return n ? A(function (o, i) {
            var a;
            (a = n.subscribe) === null || a === void 0 || a.call(n);
            var c = !0;
            o.subscribe(M(i, function (u) {
                var s;
                (s = n.next) === null || s === void 0 || s.call(n, u), i.next(u)
            }, function () {
                var u;
                c = !1, (u = n.complete) === null || u === void 0 || u.call(n), i.complete()
            }, function (u) {
                var s;
                c = !1, (s = n.error) === null || s === void 0 || s.call(n, u), i.error(u)
            }, function () {
                var u, s;
                c && ((u = n.unsubscribe) === null || u === void 0 || u.call(n)), (s = n.finalize) === null || s === void 0 || s.call(n)
            }))
        }) : Y
    }

    function Fe() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = Ie(e);
        return A(function (n, o) {
            for (var i = e.length, a = new Array(i), c = e.map(function () {
                    return !1
                }), u = !1, s = function (p) {
                    P(e[p]).subscribe(M(o, function (l) {
                        a[p] = l, !u && !c[p] && (c[p] = !0, (u = c.every(Y)) && (c = null))
                    }, ce))
                }, f = 0; f < i; f++) s(f);
            n.subscribe(M(o, function (p) {
                if (u) {
                    var l = U([p], W(a));
                    o.next(t ? t.apply(void 0, U([], W(l))) : l)
                }
            }))
        })
    }

    function jt() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return A(function (t, n) {
            Ht.apply(void 0, U([t], W(e))).subscribe(n)
        })
    }

    function Kr() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return jt.apply(void 0, U([], W(e)))
    }

    function $t(e, r = document) {
        return Array.from(r.querySelectorAll(e))
    }

    function ee(e, r = document) {
        let t = qt(e, r);
        if (typeof t == "undefined") throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return t
    }

    function qt(e, r = document) {
        return r.querySelector(e) || void 0
    }

    function yr() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }

    function Nt(e) {
        return N(K(document.body, "focusin"), K(document.body, "focusout")).pipe($r(1), k(() => {
            let r = yr();
            return typeof r != "undefined" ? e.contains(r) : !1
        }), he(e === yr()), le())
    }

    function Dt(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }

    function Qt(e) {
        return N(K(e, "scroll"), K(window, "resize")).pipe(Vr(0, Wr), k(() => Dt(e)), he(Dt(e)))
    }
    var Gt = function () {
            if (typeof Map != "undefined") return Map;

            function e(r, t) {
                var n = -1;
                return r.some(function (o, i) {
                    return o[0] === t ? (n = i, !0) : !1
                }), n
            }
            return function () {
                function r() {
                    this.__entries__ = []
                }
                return Object.defineProperty(r.prototype, "size", {
                    get: function () {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), r.prototype.get = function (t) {
                    var n = e(this.__entries__, t),
                        o = this.__entries__[n];
                    return o && o[1]
                }, r.prototype.set = function (t, n) {
                    var o = e(this.__entries__, t);
                    ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n])
                }, r.prototype.delete = function (t) {
                    var n = this.__entries__,
                        o = e(n, t);
                    ~o && n.splice(o, 1)
                }, r.prototype.has = function (t) {
                    return !!~e(this.__entries__, t)
                }, r.prototype.clear = function () {
                    this.__entries__.splice(0)
                }, r.prototype.forEach = function (t, n) {
                    n === void 0 && (n = null);
                    for (var o = 0, i = this.__entries__; o < i.length; o++) {
                        var a = i[o];
                        t.call(n, a[1], a[0])
                    }
                }, r
            }()
        }(),
        Gr = typeof window != "undefined" && typeof document != "undefined" && window.document === document,
        gr = function () {
            return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")()
        }(),
        co = function () {
            return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(gr) : function (e) {
                return setTimeout(function () {
                    return e(Date.now())
                }, 1e3 / 60)
            }
        }(),
        po = 2;

    function lo(e, r) {
        var t = !1,
            n = !1,
            o = 0;

        function i() {
            t && (t = !1, e()), n && c()
        }

        function a() {
            co(i)
        }

        function c() {
            var u = Date.now();
            if (t) {
                if (u - o < po) return;
                n = !0
            } else t = !0, n = !1, setTimeout(a, r);
            o = u
        }
        return c
    }
    var mo = 20,
        ho = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        vo = typeof MutationObserver != "undefined",
        bo = function () {
            function e() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = lo(this.refresh.bind(this), mo)
            }
            return e.prototype.addObserver = function (r) {
                ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_()
            }, e.prototype.removeObserver = function (r) {
                var t = this.observers_,
                    n = t.indexOf(r);
                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
            }, e.prototype.refresh = function () {
                var r = this.updateObservers_();
                r && this.refresh()
            }, e.prototype.updateObservers_ = function () {
                var r = this.observers_.filter(function (t) {
                    return t.gatherActive(), t.hasActive()
                });
                return r.forEach(function (t) {
                    return t.broadcastActive()
                }), r.length > 0
            }, e.prototype.connect_ = function () {
                !Gr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function () {
                !Gr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function (r) {
                var t = r.propertyName,
                    n = t === void 0 ? "" : t,
                    o = ho.some(function (i) {
                        return !!~n.indexOf(i)
                    });
                o && this.refresh()
            }, e.getInstance = function () {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        Yt = function (e, r) {
            for (var t = 0, n = Object.keys(r); t < n.length; t++) {
                var o = n[t];
                Object.defineProperty(e, o, {
                    value: r[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        ke = function (e) {
            var r = e && e.ownerDocument && e.ownerDocument.defaultView;
            return r || gr
        },
        Jt = Er(0, 0, 0, 0);

    function wr(e) {
        return parseFloat(e) || 0
    }

    function Kt(e) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        return r.reduce(function (n, o) {
            var i = e["border-" + o + "-width"];
            return n + wr(i)
        }, 0)
    }

    function xo(e) {
        for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, o = r; n < o.length; n++) {
            var i = o[n],
                a = e["padding-" + i];
            t[i] = wr(a)
        }
        return t
    }

    function yo(e) {
        var r = e.getBBox();
        return Er(0, 0, r.width, r.height)
    }

    function go(e) {
        var r = e.clientWidth,
            t = e.clientHeight;
        if (!r && !t) return Jt;
        var n = ke(e).getComputedStyle(e),
            o = xo(n),
            i = o.left + o.right,
            a = o.top + o.bottom,
            c = wr(n.width),
            u = wr(n.height);
        if (n.boxSizing === "border-box" && (Math.round(c + i) !== r && (c -= Kt(n, "left", "right") + i), Math.round(u + a) !== t && (u -= Kt(n, "top", "bottom") + a)), !Eo(e)) {
            var s = Math.round(c + i) - r,
                f = Math.round(u + a) - t;
            Math.abs(s) !== 1 && (c -= s), Math.abs(f) !== 1 && (u -= f)
        }
        return Er(o.left, o.top, c, u)
    }
    var wo = function () {
        return typeof SVGGraphicsElement != "undefined" ? function (e) {
            return e instanceof ke(e).SVGGraphicsElement
        } : function (e) {
            return e instanceof ke(e).SVGElement && typeof e.getBBox == "function"
        }
    }();

    function Eo(e) {
        return e === ke(e).document.documentElement
    }

    function So(e) {
        return Gr ? wo(e) ? yo(e) : go(e) : Jt
    }

    function _o(e) {
        var r = e.x,
            t = e.y,
            n = e.width,
            o = e.height,
            i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
            a = Object.create(i.prototype);
        return Yt(a, {
            x: r,
            y: t,
            width: n,
            height: o,
            top: t,
            right: r + n,
            bottom: o + t,
            left: r
        }), a
    }

    function Er(e, r, t, n) {
        return {
            x: e,
            y: r,
            width: t,
            height: n
        }
    }
    var Oo = function () {
            function e(r) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Er(0, 0, 0, 0), this.target = r
            }
            return e.prototype.isActive = function () {
                var r = So(this.target);
                return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function () {
                var r = this.contentRect_;
                return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r
            }, e
        }(),
        To = function () {
            function e(r, t) {
                var n = _o(t);
                Yt(this, {
                    target: r,
                    contentRect: n
                })
            }
            return e
        }(),
        Ao = function () {
            function e(r, t, n) {
                if (this.activeObservations_ = [], this.observations_ = new Gt, typeof r != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n
            }
            return e.prototype.observe = function (r) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(r instanceof ke(r).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(r) || (t.set(r, new Oo(r)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function (r) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(r instanceof ke(r).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(r) && (t.delete(r), t.size || this.controller_.removeObserver(this))
                }
            }, e.prototype.disconnect = function () {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, e.prototype.gatherActive = function () {
                var r = this;
                this.clearActive(), this.observations_.forEach(function (t) {
                    t.isActive() && r.activeObservations_.push(t)
                })
            }, e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                    var r = this.callbackCtx_,
                        t = this.activeObservations_.map(function (n) {
                            return new To(n.target, n.broadcastRect())
                        });
                    this.callback_.call(r, t, r), this.clearActive()
                }
            }, e.prototype.clearActive = function () {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0
            }, e
        }(),
        Bt = typeof WeakMap != "undefined" ? new WeakMap : new Gt,
        Xt = function () {
            function e(r) {
                if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var t = bo.getInstance(),
                    n = new Ao(r, t, this);
                Bt.set(this, n)
            }
            return e
        }();
    ["observe", "unobserve", "disconnect"].forEach(function (e) {
        Xt.prototype[e] = function () {
            var r;
            return (r = Bt.get(this))[e].apply(r, arguments)
        }
    });
    var Mo = function () {
            return typeof gr.ResizeObserver != "undefined" ? gr.ResizeObserver : Xt
        }(),
        Zt = Mo;
    var Co = new B,
        Yp = je(() => Z(new Zt(e => {
            for (let r of e) Co.next(r)
        }))).pipe(D(e => N($e, Z(e)).pipe(Ee(() => e.disconnect()))), Se(1));

    function en(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }

    function rn(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    var Io = new B,
        ol = je(() => Z(new IntersectionObserver(e => {
            for (let r of e) Io.next(r)
        }, {
            threshold: 0
        }))).pipe(D(e => N($e, Z(e)).pipe(Ee(() => e.disconnect()))), Se(1));

    function tn(e, r = 16) {
        return Qt(e).pipe(k(({
            y: t
        }) => {
            let n = en(e),
                o = rn(e);
            return t >= o.height - n.height - r
        }), le())
    }
    var ml = {
        drawer: ee("[data-md-toggle=drawer]"),
        search: ee("[data-md-toggle=search]")
    };

    function nn() {
        return new URL(location.href)
    }

    function on(e, r) {
        if (typeof r == "string" || typeof r == "number") e.innerHTML += r.toString();
        else if (r instanceof Node) e.appendChild(r);
        else if (Array.isArray(r))
            for (let t of r) on(e, t)
    }

    function re(e, r, ...t) {
        let n = document.createElement(e);
        if (r)
            for (let o of Object.keys(r)) typeof r[o] != "undefined" && (typeof r[o] != "boolean" ? n.setAttribute(o, r[o]) : n.setAttribute(o, ""));
        for (let o of t) on(n, o);
        return n
    }

    function an(e) {
        if (e > 999) {
            let r = +((e - 950) % 1e3 > 99);
            return `${((e+1e-6)/1e3).toFixed(r)}k`
        } else return e.toString()
    }

    function Lo(e, r = {
        credentials: "same-origin"
    }) {
        return X(fetch(`${e}`, r)).pipe(br(() => pe), D(t => t.status !== 200 ? Ur(() => new Error(t.statusText)) : Z(t)))
    }

    function Sr(e, r) {
        return Lo(e, r).pipe(D(t => t.json()), Se(1))
    }(() => {
        function e(n, o) {
            parent.postMessage(n, o || "*")
        }

        function r(...n) {
            return n.reduce((o, i) => o.then(() => new Promise(a => {
                let c = document.createElement("script");
                c.src = i, c.onload = a, document.body.appendChild(c)
            })), Promise.resolve())
        }
        var t = class extends EventTarget {
            constructor(n) {
                super(), this.url = n, this.m = i => {
                    i.source === this.w && (this.dispatchEvent(new MessageEvent("message", {
                        data: i.data
                    })), this.onmessage && this.onmessage(i))
                }, this.e = (i, a, c, u, s) => {
                    if (a === `${this.url}`) {
                        let f = new ErrorEvent("error", {
                            message: i,
                            filename: a,
                            lineno: c,
                            colno: u,
                            error: s
                        });
                        this.dispatchEvent(f), this.onerror && this.onerror(f)
                    }
                };
                let o = document.createElement("iframe");
                o.hidden = !0, document.body.appendChild(this.iframe = o), this.w.document.open(), this.w.document.write(`<html><body><script>postMessage=${e};importScripts=${r};addEventListener("error",ev=>{parent.dispatchEvent(new ErrorEvent("error",{filename:"${n}",error:ev.error}))})<\/script><script src=${n}?${+Date.now()}><\/script></body></html>`), this.w.document.close(), onmessage = this.m, onerror = this.e, this.r = new Promise((i, a) => {
                    this.w.onload = i, this.w.onerror = a
                })
            }
            terminate() {
                document.body.removeChild(this.iframe), onmessage = onerror = null
            }
            postMessage(n) {
                this.r.catch().then(() => {
                    this.w.dispatchEvent(new MessageEvent("message", {
                        data: n
                    }))
                })
            }
            get w() {
                return this.iframe.contentWindow
            }
        };
        window.IFrameWorker = t, location.protocol === "file:" && (window.Worker = t)
    })();

    function He(e, r = document) {
        return ee(`[data-mdx-component=${e}]`, r)
    }

    function Yr(e, r = document) {
        return $t(`[data-mdx-component=${e}]`, r)
    }
    var Ro = ee("#__config"),
        qe = JSON.parse(Ro.textContent);
    qe.base = `${new URL(qe.base,nn())}`;

    function sn() {
        return qe
    }

    function un(e, r) {
        return typeof r != "undefined" ? qe.translations[e].replace("#", r.toString()) : qe.translations[e]
    }

    function fn(e) {
        let r = Nt(e),
            t = N(K(e, "keyup"), K(e, "focus").pipe(Dr(1))).pipe(k(() => e.value), he(e.value), le());
        return r.pipe(we(n => !n), Fe(t)).subscribe(([, n]) => {
            let o = document.location.pathname;
            typeof ga == "function" && n.length && ga("send", "pageview", `${o}?q=[icon]+${n}`)
        }), Re([t, r]).pipe(k(([n, o]) => ({
            ref: e,
            value: n,
            focus: o
        })))
    }
    var Xr = tt(Br());
    var yn = tt(Br());

    function xn(e, r) {
        return (0, yn.wrap)(e.shortcode, r, {
            wrap: {
                tagOpen: "<b>",
                tagClose: "</b>"
            }
        })
    }

    function gn(e, r, t) {
        return re("li", {
            class: "mdx-iconsearch-result__item"
        }, re("span", {
            class: "twemoji"
        }, re("img", {
            src: e.url
        })), re("button", {
            class: "md-clipboard--inline",
            title: un("clipboard.copy"),
            "data-clipboard-text": t ? e.shortcode : `:${e.shortcode}:`
        }, re("code", null, t ? xn(e, r) : `:${xn(e,r)}:`)))
    }

    function wn(e) {
        let r = `@${e.name}`;
        return re("a", {
            href: e.url,
            title: r,
            class: "mdx-sponsorship__item"
        }, re("img", {
            src: e.image
        }))
    }

    function En(e) {
        return re("a", {
            href: "https://github.com/sponsors/squidfunk?metadata_origin=docs",
            class: "mdx-sponsorship__item mdx-sponsorship__item--private"
        }, "+", e)
    }

    function Po(e, {
        index$: r,
        query$: t
    }) {
        switch (e.getAttribute("data-mdx-mode")) {
            case "file":
                return Re([t.pipe(xr("value")), r.pipe(k(({
                    icons: n
                }) => Object.values(n.data).map(o => o.replace(/\.svg$/, ""))))]).pipe(k(([{
                    value: n
                }, o]) => (0, Xr.filter)(o, n)), D(n => r.pipe(k(({
                    icons: o
                }) => ({
                    data: n.map(i => ({
                        shortcode: i,
                        url: [o.base, i, ".svg"].join("")
                    }))
                })))));
            default:
                return Re([t.pipe(xr("value")), r.pipe(k(({
                    icons: n,
                    emojis: o
                }) => [...Object.keys(n.data), ...Object.keys(o.data)]))]).pipe(k(([{
                    value: n
                }, o]) => (0, Xr.filter)(o, n)), D(n => r.pipe(k(({
                    icons: o,
                    emojis: i
                }) => ({
                    data: n.map(a => {
                        let c = a in o.data ? o : i;
                        return {
                            shortcode: a,
                            url: [c.base, c.data[a]].join("")
                        }
                    })
                })))))
        }
    }

    function Sn(e, {
        index$: r,
        query$: t
    }) {
        let n = new B,
            o = tn(e).pipe(we(Boolean)),
            i = ee(":scope > :first-child", e);
        n.pipe(Fe(t)).subscribe(([{
            data: u
        }, {
            value: s
        }]) => {
            if (s) switch (u.length) {
                case 0:
                    i.textContent = "No matches";
                    break;
                case 1:
                    i.textContent = "1 match";
                    break;
                default:
                    i.textContent = `${an(u.length)} matches`
            } else i.textContent = "Type to start searching"
        });
        let a = e.getAttribute("data-mdx-mode") === "file",
            c = ee(":scope > :last-child", e);
        return n.pipe(Pe(() => c.innerHTML = ""), D(({
            data: u
        }) => N(Z(...u.slice(0, 10)), Z(...u.slice(10)).pipe(jr(10), Kr(o), D(([s]) => s)))), Fe(t)).subscribe(([u, {
            value: s
        }]) => c.appendChild(gn(u, s, a))), Po(e, {
            query$: t,
            index$: r
        }).pipe(Pe(u => n.next(u)), Ee(() => n.complete()), k(u => Ke({
            ref: e
        }, u)))
    }

    function _n(e) {
        let r = sn(),
            t = Sr(new URL("assets/javascripts/iconsearch_index.json", r.base)),
            n = He("iconsearch-query", e),
            o = He("iconsearch-result", e),
            i = fn(n),
            a = Sn(o, {
                index$: t,
                query$: i
            });
        return N(i, a)
    }

    function On(e) {
        let r = Sr("https://3if8u9o552.execute-api.us-east-1.amazonaws.com/_/"),
            t = He("sponsorship-count"),
            n = He("sponsorship-total");
        return r.subscribe(o => {
            e.removeAttribute("hidden");
            let i = ee(":scope > :first-child", e);
            for (let a of o.sponsors) a.type === "public" && i.appendChild(wn(a.user));
            i.appendChild(En(o.sponsors.filter(({
                type: a
            }) => a === "private").length)), t.innerText = `${o.sponsors.length}`, n.innerText = `$ ${o.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} a month`
        }), r.pipe(k(o => Ke({
            ref: e
        }, o)))
    }

    function Tn() {
        let {
            origin: e
        } = new URL(location.href);
        K(document.body, "click").subscribe(r => {
            if (r.target instanceof HTMLElement) {
                let t = r.target.closest("a");
                t && t.origin !== e && ga("send", "event", "outbound", "click", t.href)
            }
        })
    }
    Tn();
    var Fo = document$.pipe(D(() => N(...Yr("iconsearch").map(e => _n(e)), ...Yr("sponsorship").map(e => On(e)))));
    Fo.subscribe();
})();
//# sourceMappingURL=custom.a678ee80.min.js.map
