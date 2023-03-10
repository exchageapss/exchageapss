! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.amplitude = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function t(e, t, n) {
        return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }

    function n() {
        var e;
        try {
            e = document.cookie
        } catch (e) {
            return "undefined" != typeof console && "function" == typeof console.error && console.error(e.stack || e), {}
        }
        return function(e) {
            var t, n = {},
                r = e.split(/ *; */);
            if ("" == r[0]) return n;
            for (var i = 0; i < r.length; ++i) t = r[i].split("="), n[o(t[0])] = o(t[1]);
            return n
        }(e)
    }

    function r(e) {
        try {
            return encodeURIComponent(e)
        } catch (t) {
            E("error `encode(%o)` - %o", e, t)
        }
    }

    function o(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            E("error `decode(%o)` - %o", e, t)
        }
    }

    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function s(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    }

    function a(e, t, n, r) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? u(kt(e), function(r) {
            var o = encodeURIComponent(s(r)) + n;
            return jt(e[r]) ? u(e[r], function(e) {
                return o + encodeURIComponent(s(e))
            }).join(t) : o + encodeURIComponent(s(e[r]))
        }).join(t) : r ? encodeURIComponent(s(r)) + n + encodeURIComponent(s(e)) : ""
    }

    function u(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }

    function c(e, t, n, r) {
        t = t || "&", n = n || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length) return o;
        var s = /\+/g;
        e = e.split(t);
        var a = 1e3;
        r && "number" == typeof r.maxKeys && (a = r.maxKeys);
        var u = e.length;
        a > 0 && u > a && (u = a);
        for (var c = 0; u > c; ++c) {
            var p, l, f, d, h = e[c].replace(s, "%20"),
                g = h.indexOf(n);
            g >= 0 ? (p = h.substr(0, g), l = h.substr(g + 1)) : (p = h, l = ""), f = decodeURIComponent(p), d = decodeURIComponent(l), i(o, f) ? jt(o[f]) ? o[f].push(d) : o[f] = [o[f], d] : o[f] = d
        }
        return o
    }
    var p, l = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        f = (e(function(e, t) {
            (function() {
                function n(e, t) {
                    function o(e) {
                        if (o[e] !== v) return o[e];
                        var n;
                        if ("bug-string-char-index" == e) n = "a" != "a" [0];
                        else if ("json" == e) n = o("json-stringify") && o("json-parse");
                        else {
                            var r, i = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var u = t.stringify,
                                    p = "function" == typeof u && _;
                                if (p) {
                                    (r = function() {
                                        return 1
                                    }).toJSON = r;
                                    try {
                                        p = "0" === u(0) && "0" === u(new s) && '""' == u(new a) && u(m) === v && u(v) === v && u() === v && "1" === u(r) && "[1]" == u([r]) && "[null]" == u([v]) && "null" == u(null) && "[null,null,null]" == u([v, m, null]) && u({
                                            a: [r, !0, !1, null, "\x00\b\n\f\r	"]
                                        }) == i && "1" === u(null, r) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new c(-1))
                                    } catch (e) {
                                        p = !1
                                    }
                                }
                                n = p
                            }
                            if ("json-parse" == e) {
                                var l = t.parse;
                                if ("function" == typeof l) try {
                                    if (0 === l("0") && !l(!1)) {
                                        var f = 5 == (r = l(i)).a.length && 1 === r.a[0];
                                        if (f) {
                                            try {
                                                f = !l('"	"')
                                            } catch (e) {}
                                            if (f) try {
                                                f = 1 !== l("01")
                                            } catch (e) {}
                                            if (f) try {
                                                f = 1 !== l("1.")
                                            } catch (e) {}
                                        }
                                    }
                                } catch (e) {
                                    f = !1
                                }
                                n = f
                            }
                        }
                        return o[e] = !!n
                    }
                    e || (e = i.Object()), t || (t = i.Object());
                    var s = e.Number || i.Number,
                        a = e.String || i.String,
                        u = e.Object || i.Object,
                        c = e.Date || i.Date,
                        p = e.SyntaxError || i.SyntaxError,
                        l = e.TypeError || i.TypeError,
                        f = e.Math || i.Math,
                        d = e.JSON || i.JSON;
                    "object" == typeof d && d && (t.stringify = d.stringify, t.parse = d.parse);
                    var h, g, v, y = u.prototype,
                        m = y.toString,
                        _ = new c(-0xc782b5b800cec);
                    try {
                        _ = -109252 == _.getUTCFullYear() && 0 === _.getUTCMonth() && 1 === _.getUTCDate() && 10 == _.getUTCHours() && 37 == _.getUTCMinutes() && 6 == _.getUTCSeconds() && 708 == _.getUTCMilliseconds()
                    } catch (e) {}
                    if (!o("json")) {
                        var b = o("bug-string-char-index");
                        if (!_) var w = f.floor,
                            I = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            E = function(e, t) {
                                return I[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(t > 1))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400)
                            };
                        if ((h = y.hasOwnProperty) || (h = function(e) {
                                var t, n = {};
                                return (n.__proto__ = null, n.__proto__ = {
                                    toString: 1
                                }, n).toString != m ? h = function(e) {
                                    var t = this.__proto__,
                                        n = e in (this.__proto__ = null, this);
                                    return this.__proto__ = t, n
                                } : (t = n.constructor, h = function(e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }), n = null, h.call(this, e)
                            }), g = function(e, t) {
                                var n, o, i, s = 0;
                                (n = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, o = new n;
                                for (i in o) h.call(o, i) && s++;
                                return n = o = null, s ? g = 2 == s ? function(e, t) {
                                    var n, r = {},
                                        o = "[object Function]" == m.call(e);
                                    for (n in e) o && "prototype" == n || h.call(r, n) || !(r[n] = 1) || !h.call(e, n) || t(n)
                                } : function(e, t) {
                                    var n, r, o = "[object Function]" == m.call(e);
                                    for (n in e) o && "prototype" == n || !h.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || h.call(e, n = "constructor")) && t(n)
                                } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function(e, t) {
                                    var n, i, s = "[object Function]" == m.call(e),
                                        a = !s && "function" != typeof e.constructor && r[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                                    for (n in e) s && "prototype" == n || !a.call(e, n) || t(n);
                                    for (i = o.length; n = o[--i]; a.call(e, n) && t(n));
                                }), g(e, t)
                            }, !o("json-stringify")) {
                            var S = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                },
                                C = function(e, t) {
                                    return ("000000" + (t || 0)).slice(-e)
                                },
                                O = function(e) {
                                    for (var t = '"', n = 0, r = e.length, o = !b || r > 10, i = o && (b ? e.split("") : e); r > n; n++) {
                                        var s = e.charCodeAt(n);
                                        switch (s) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += S[s];
                                                break;
                                            default:
                                                if (32 > s) {
                                                    t += "\\u00" + C(2, s.toString(16));
                                                    break
                                                }
                                                t += o ? i[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                },
                                N = function(e, t, n, r, o, i, s) {
                                    var a, u, c, p, f, d, y, _, b, I, S, A, T, x, j, k;
                                    try {
                                        a = t[e]
                                    } catch (e) {}
                                    if ("object" == typeof a && a)
                                        if ("[object Date]" != (u = m.call(a)) || h.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != u && "[object String]" != u && "[object Array]" != u || h.call(a, "toJSON")) && (a = a.toJSON(e));
                                        else if (a > -1 / 0 && 1 / 0 > a) {
                                        if (E) {
                                            for (f = w(a / 864e5), c = w(f / 365.2425) + 1970 - 1; E(c + 1, 0) <= f; c++);
                                            for (p = w((f - E(c, 0)) / 30.42); E(c, p + 1) <= f; p++);
                                            f = 1 + f - E(c, p), y = w((d = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, _ = w(d / 6e4) % 60, b = w(d / 1e3) % 60, I = d % 1e3
                                        } else c = a.getUTCFullYear(), p = a.getUTCMonth(), f = a.getUTCDate(), y = a.getUTCHours(), _ = a.getUTCMinutes(), b = a.getUTCSeconds(), I = a.getUTCMilliseconds();
                                        a = (0 >= c || c >= 1e4 ? (0 > c ? "-" : "+") + C(6, 0 > c ? -c : c) : C(4, c)) + "-" + C(2, p + 1) + "-" + C(2, f) + "T" + C(2, y) + ":" + C(2, _) + ":" + C(2, b) + "." + C(3, I) + "Z"
                                    } else a = null;
                                    if (n && (a = n.call(t, e, a)), null === a) return "null";
                                    if ("[object Boolean]" == (u = m.call(a))) return "" + a;
                                    if ("[object Number]" == u) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
                                    if ("[object String]" == u) return O("" + a);
                                    if ("object" == typeof a) {
                                        for (x = s.length; x--;)
                                            if (s[x] === a) throw l();
                                        if (s.push(a), S = [], j = i, i += o, "[object Array]" == u) {
                                            for (T = 0, x = a.length; x > T; T++) A = N(T, a, n, r, o, i, s), S.push(A === v ? "null" : A);
                                            k = S.length ? o ? "[\n" + i + S.join(",\n" + i) + "\n" + j + "]" : "[" + S.join(",") + "]" : "[]"
                                        } else g(r || a, function(e) {
                                            var t = N(e, a, n, r, o, i, s);
                                            t !== v && S.push(O(e) + ":" + (o ? " " : "") + t)
                                        }), k = S.length ? o ? "{\n" + i + S.join(",\n" + i) + "\n" + j + "}" : "{" + S.join(",") + "}" : "{}";
                                        return s.pop(), k
                                    }
                                };
                            t.stringify = function(e, t, n) {
                                var o, i, s, a;
                                if (r[typeof t] && t)
                                    if ("[object Function]" == (a = m.call(t))) i = t;
                                    else if ("[object Array]" == a) {
                                    s = {};
                                    for (var u, c = 0, p = t.length; p > c; u = t[c++], ("[object String]" == (a = m.call(u)) || "[object Number]" == a) && (s[u] = 1));
                                }
                                if (n)
                                    if ("[object Number]" == (a = m.call(n))) {
                                        if ((n -= n % 1) > 0)
                                            for (o = "", n > 10 && (n = 10); o.length < n; o += " ");
                                    } else "[object String]" == a && (o = n.length <= 10 ? n : n.slice(0, 10));
                                return N("", (u = {}, u[""] = e, u), i, s, o, "", [])
                            }
                        }
                        if (!o("json-parse")) {
                            var A, T, x = a.fromCharCode,
                                j = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "	",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                },
                                k = function() {
                                    throw A = T = null, p()
                                },
                                R = function() {
                                    for (var e, t, n, r, o, i = T, s = i.length; s > A;) switch (o = i.charCodeAt(A)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            A++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = b ? i.charAt(A) : i[A], A++, e;
                                        case 34:
                                            for (e = "@", A++; s > A;)
                                                if ((o = i.charCodeAt(A)) < 32) k();
                                                else if (92 == o) switch (o = i.charCodeAt(++A)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += j[o], A++;
                                                    break;
                                                case 117:
                                                    for (t = ++A, n = A + 4; n > A; A++)(o = i.charCodeAt(A)) >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || k();
                                                    e += x("0x" + i.slice(t, A));
                                                    break;
                                                default:
                                                    k()
                                            } else {
                                                if (34 == o) break;
                                                for (o = i.charCodeAt(A), t = A; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++A);
                                                e += i.slice(t, A)
                                            }
                                            if (34 == i.charCodeAt(A)) return A++, e;
                                            k();
                                        default:
                                            if (t = A, 45 == o && (r = !0, o = i.charCodeAt(++A)), o >= 48 && 57 >= o) {
                                                for (48 == o && (o = i.charCodeAt(A + 1)) >= 48 && 57 >= o && k(), r = !1; s > A && (o = i.charCodeAt(A)) >= 48 && 57 >= o; A++);
                                                if (46 == i.charCodeAt(A)) {
                                                    for (n = ++A; s > n && (o = i.charCodeAt(n)) >= 48 && 57 >= o; n++);
                                                    n == A && k(), A = n
                                                }
                                                if (101 == (o = i.charCodeAt(A)) || 69 == o) {
                                                    for (43 != (o = i.charCodeAt(++A)) && 45 != o || A++, n = A; s > n && (o = i.charCodeAt(n)) >= 48 && 57 >= o; n++);
                                                    n == A && k(), A = n
                                                }
                                                return +i.slice(t, A)
                                            }
                                            if (r && k(), "true" == i.slice(A, A + 4)) return A += 4, !0;
                                            if ("false" == i.slice(A, A + 5)) return A += 5, !1;
                                            if ("null" == i.slice(A, A + 4)) return A += 4, null;
                                            k()
                                    }
                                    return "$"
                                },
                                P = function(e) {
                                    var t, n;
                                    if ("$" == e && k(), "string" == typeof e) {
                                        if ("@" == (b ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = [];
                                                "]" != (e = R()); n || (n = !0)) n && ("," == e ? "]" == (e = R()) && k() : k()), "," == e && k(), t.push(P(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {};
                                                "}" != (e = R()); n || (n = !0)) n && ("," == e ? "}" == (e = R()) && k() : k()), "," != e && "string" == typeof e && "@" == (b ? e.charAt(0) : e[0]) && ":" == R() || k(), t[e.slice(1)] = P(R());
                                            return t
                                        }
                                        k()
                                    }
                                    return e
                                },
                                F = function(e, t, n) {
                                    var r = U(e, t, n);
                                    r === v ? delete e[t] : e[t] = r
                                },
                                U = function(e, t, n) {
                                    var r, o = e[t];
                                    if ("object" == typeof o && o)
                                        if ("[object Array]" == m.call(o))
                                            for (r = o.length; r--;) F(o, r, n);
                                        else g(o, function(e) {
                                            F(o, e, n)
                                        });
                                    return n.call(e, t, o)
                                };
                            t.parse = function(e, t) {
                                var n, r;
                                return A = 0, T = "" + e, n = P(R()), "$" != R() && k(), A = T = null, t && "[object Function]" == m.call(t) ? U((r = {}, r[""] = n, r), "", t) : n
                            }
                        }
                    }
                    return t.runInContext = n, t
                }
                var r = {
                        "function": !0,
                        object: !0
                    },
                    o = r.object && t && !t.nodeType && t,
                    i = r[typeof window] && window || this,
                    s = o && r.object && e && !e.nodeType && "object" == typeof l && l;
                if (!s || s.global !== s && s.window !== s && s.self !== s || (i = s), o) n(i, o);
                else {
                    var a = i.JSON,
                        u = i.JSON3,
                        c = !1,
                        p = n(i, i.JSON3 = {
                            noConflict: function() {
                                return c || (c = !0, i.JSON = a, i.JSON3 = u, a = u = null), p
                            }
                        });
                    i.JSON = {
                        parse: p.parse,
                        stringify: p.stringify
                    }
                }
            }).call(l)
        }), {
            DEFAULT_INSTANCE: "$default_instance",
            API_VERSION: 2,
            MAX_STRING_LENGTH: 4096,
            MAX_PROPERTY_KEYS: 1e3,
            IDENTIFY_EVENT: "$identify",
            LAST_EVENT_ID: "amplitude_lastEventId",
            LAST_EVENT_TIME: "amplitude_lastEventTime",
            LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
            LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
            SESSION_ID: "amplitude_sessionId",
            DEVICE_ID: "amplitude_deviceId",
            OPT_OUT: "amplitude_optOut",
            USER_ID: "amplitude_userId",
            COOKIE_TEST: "amplitude_cookie_test",
            REVENUE_EVENT: "revenue_amount",
            REVENUE_PRODUCT_ID: "$productId",
            REVENUE_QUANTITY: "$quantity",
            REVENUE_PRICE: "$price",
            REVENUE_REVENUE_TYPE: "$revenueType",
            AMP_DEVICE_ID_PARAM: "amp_device_id"
        }),
        d = {
            encode: function(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                }
                return t
            },
            decode: function(e) {
                for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length;)(r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && 224 > r ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), i = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i), n += 3);
                return t
            }
        },
        h = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                try {
                    if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                } catch (e) {}
                return h._encode(e)
            },
            _encode: function(e) {
                var t, n, r, o, i, s, a, u = "",
                    c = 0;
                for (e = d.encode(e); c < e.length;) o = (t = e.charCodeAt(c++)) >> 2, i = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (r = e.charCodeAt(c++)) >> 6, a = 63 & r, isNaN(n) ? s = a = 64 : isNaN(r) && (a = 64), u = u + h._keyStr.charAt(o) + h._keyStr.charAt(i) + h._keyStr.charAt(s) + h._keyStr.charAt(a);
                return u
            },
            decode: function(e) {
                try {
                    if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                } catch (e) {}
                return h._decode(e)
            },
            _decode: function(e) {
                var t, n, r, o, i, s, a = "",
                    u = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) t = h._keyStr.indexOf(e.charAt(u++)) << 2 | (o = h._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & o) << 4 | (i = h._keyStr.indexOf(e.charAt(u++))) >> 2, r = (3 & i) << 6 | (s = h._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== i && (a += String.fromCharCode(n)), 64 !== s && (a += String.fromCharCode(r));
                return a = d.decode(a)
            }
        },
        g = e(function(e, t) {
            t.parse = function(e) {
                var t = document.createElement("a");
                return t.href = e, {
                    href: t.href,
                    host: t.host || location.host,
                    port: "0" === t.port || "" === t.port ? function(e) {
                        switch (e) {
                            case "http:":
                                return 80;
                            case "https:":
                                return 443;
                            default:
                                return location.port
                        }
                    }(t.protocol) : t.port,
                    hash: t.hash,
                    hostname: t.hostname || location.hostname,
                    pathname: "/" != t.pathname.charAt(0) ? "/" + t.pathname : t.pathname,
                    protocol: t.protocol && ":" != t.protocol ? t.protocol : location.protocol,
                    search: t.search,
                    query: t.search.slice(1)
                }
            }, t.isAbsolute = function(e) {
                return 0 == e.indexOf("//") || !!~e.indexOf("://")
            }, t.isRelative = function(e) {
                return !t.isAbsolute(e)
            }, t.isCrossDomain = function(e) {
                e = t.parse(e);
                var n = t.parse(window.location.href);
                return e.hostname !== n.hostname || e.port !== n.port || e.protocol !== n.protocol
            }
        }),
        v = 1e3,
        y = 60 * v,
        m = 60 * y,
        _ = 24 * m,
        b = 365.25 * _,
        w = function(e, n) {
            n = n || {};
            var r = typeof e;
            if ("string" === r && e.length > 0) return function(e) {
                if (!((e = String(e)).length > 100)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * b;
                            case "days":
                            case "day":
                            case "d":
                                return n * _;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * m;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * y;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * v;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }(e);
            if ("number" === r && !1 === isNaN(e)) return n["long"] ? function(e) {
                return t(e, _, "day") || t(e, m, "hour") || t(e, y, "minute") || t(e, v, "second") || e + " ms"
            }(e) : function(e) {
                return e >= _ ? Math.round(e / _) + "d" : e >= m ? Math.round(e / m) + "h" : e >= y ? Math.round(e / y) + "m" : e >= v ? Math.round(e / v) + "s" : e + "ms"
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        },
        I = e(function(e, t) {
            function n(e) {
                function n() {
                    if (n.enabled) {
                        var e = n,
                            r = +new Date,
                            i = r - (o || r);
                        e.diff = i, e.prev = o, e.curr = r, o = r;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var u = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                            if ("%%" === n) return n;
                            u++;
                            var o = t.formatters[r];
                            if ("function" == typeof o) {
                                var i = s[u];
                                n = o.call(e, i), s.splice(u, 1), u--
                            }
                            return n
                        }), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s)
                    }
                }
                var o;
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
                    var n, r = 0;
                    for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }(e), n.destroy = r, "function" == typeof t.init && t.init(n), t.instances.push(n), n
            }

            function r() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0)
            }(t = e.exports = n.debug = n["default"] = n).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                t.save(e), t.names = [], t.skips = [];
                var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    o = r.length;
                for (n = 0; o > n; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (n = 0; n < t.instances.length; n++) {
                    var i = t.instances[n];
                    i.enabled = t.enabled(i.namespace)
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var n, r;
                for (n = 0, r = t.skips.length; r > n; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, r = t.names.length; r > n; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }, t.humanize = w, t.instances = [], t.names = [], t.skips = [], t.formatters = {}
        }),
        E = e(function(e, t) {
            function n() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = I).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var o = 0,
                        i = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (o++, "%c" === e && (i = o))
                    }), e.splice(i, 0, r)
                }
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }, t.load = n, t.useColors = function() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(n())
        })("cookie"),
        S = function(e, t, o) {
            switch (arguments.length) {
                case 3:
                case 2:
                    return function(e, t, n) {
                        n = n || {};
                        var o = r(e) + "=" + r(t);
                        null == t && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date + n.maxage)), n.path && (o += "; path=" + n.path), n.domain && (o += "; domain=" + n.domain), n.expires && (o += "; expires=" + n.expires.toUTCString()), n.secure && (o += "; secure"), document.cookie = o
                    }(e, t, o);
                case 1:
                    return function(e) {
                        return n()[e]
                    }(e);
                default:
                    return n()
            }
        },
        C = e(function(e, t) {
            function n(e) {
                for (var n = t.cookie, r = t.levels(e), o = 0; o < r.length; ++o) {
                    var i = r[o],
                        s = {
                            domain: "." + i
                        };
                    if (n("__tld__", 1, s), n("__tld__")) return n("__tld__", null, s), i
                }
                return ""
            }
            var r = g.parse;
            n.levels = function(e) {
                var t = r(e).hostname.split("."),
                    n = t[t.length - 1],
                    o = [];
                if (4 === t.length && n === parseInt(n, 10)) return o;
                if (t.length <= 1) return o;
                for (var i = t.length - 2; i >= 0; --i) o.push(t.slice(i).join("."));
                return o
            }, n.cookie = S, t = e.exports = n
        }),
        O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        N = Object.prototype.toString,
        A = function(e) {
            switch (N.call(e)) {
                case "[object Date]":
                    return "date";
                case "[object RegExp]":
                    return "regexp";
                case "[object Arguments]":
                    return "arguments";
                case "[object Array]":
                    return "array";
                case "[object Error]":
                    return "error"
            }
            return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && Buffer.isBuffer(e) ? "buffer" : void 0 === (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)) ? "undefined" : O(e)
        },
        T = "WARN",
        x = {
            DISABLE: 0,
            ERROR: 1,
            WARN: 2,
            INFO: 3
        },
        j = {
            error: function(e) {
                T >= x.ERROR && k(e)
            },
            warn: function(e) {
                T >= x.WARN && k(e)
            },
            info: function(e) {
                T >= x.INFO && k(e)
            }
        },
        k = function(e) {
            try {
                console.log("[Amplitude] " + e)
            } catch (e) {}
        },
        R = function(e) {
            return "string" === A(e) && e.length > f.MAX_STRING_LENGTH ? e.substring(0, f.MAX_STRING_LENGTH) : e
        },
        P = function(e) {
            var t = A(e);
            if ("object" !== t) return j.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
            if (Object.keys(e).length > f.MAX_PROPERTY_KEYS) return j.error("Error: too many properties (more than 1000), ignoring"), {};
            var n = {};
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var o = r,
                        i = A(o);
                    "string" !== i && (o = String(o), j.warn("WARNING: Non-string property key, received type " + i + ', coercing to string "' + o + '"'));
                    var s = U(o, e[r]);
                    null !== s && (n[o] = s)
                }
            return n
        },
        F = ["null", "nan", "undefined", "function", "arguments", "regexp", "element"],
        U = function Zt(e, t) {
            var n = A(t);
            if (-1 !== F.indexOf(n)) j.warn('WARNING: Property key "' + e + '" with invalid value type ' + n + ", ignoring"), t = null;
            else if ("error" === n) t = String(t), j.warn('WARNING: Property key "' + e + '" with value type error, coercing to ' + t);
            else if ("array" === n) {
                for (var r = [], o = 0; o < t.length; o++) {
                    var i = t[o],
                        s = A(i);
                    "array" !== s && "object" !== s ? r.push(Zt(e, i)) : j.warn("WARNING: Cannot have " + s + " nested in an array property value, skipping")
                }
                t = r
            } else "object" === n && (t = P(t));
            return t
        },
        D = function(e, t) {
            var n = A(t);
            if ("string" === n) return t;
            if ("date" === n || "number" === n || "boolean" === n) return t = String(t), j.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
            if ("array" === n) {
                for (var r = [], o = 0; o < t.length; o++) {
                    var i = t[o],
                        s = A(i);
                    "array" !== s && "object" !== s ? "string" === s ? r.push(i) : "date" !== s && "number" !== s && "boolean" !== s || (i = String(i), j.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + i + '"'), r.push(i)) : j.warn("WARNING: Skipping nested " + s + " in array groupName")
                }
                return r
            }
            j.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
        },
        M = {
            setLogLevel: function(e) {
                T = x[e] || T
            },
            getLogLevel: function() {
                return T
            },
            log: j,
            isEmptyString: function(e) {
                return !e || 0 === e.length
            },
            getQueryParam: function(e, t) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            sessionStorageEnabled: function() {
                try {
                    if (window.sessionStorage) return !0
                } catch (e) {}
                return !1
            },
            truncate: function en(e) {
                if ("array" === A(e))
                    for (var t = 0; t < e.length; t++) e[t] = en(e[t]);
                else if ("object" === A(e))
                    for (var n in e) e.hasOwnProperty(n) && (e[n] = en(e[n]));
                else e = R(e);
                return e
            },
            validateGroups: function(e) {
                var t = A(e);
                if ("object" !== t) return j.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                var n = {};
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var o = r,
                            i = A(o);
                        "string" !== i && (o = String(o), j.warn("WARNING: Non-string groupType, received type " + i + ', coercing to string "' + o + '"'));
                        var s = D(o, e[r]);
                        null !== s && (n[o] = s)
                    }
                return n
            },
            validateInput: function(e, t, n) {
                return A(e) === n || (j.error("Invalid " + t + " input type. Expected " + n + " but received " + A(e)), !1)
            },
            validateProperties: P
        },
        q = {
            expirationDays: void 0,
            domain: void 0
        },
        L = function(e) {
            var t = "";
            return q.domain && (t = "." === q.domain.charAt(0) ? q.domain.substring(1) : q.domain), e + t
        },
        V = function(e) {
            try {
                for (var t = L(e) + "=", n = document.cookie.split(";"), r = null, o = 0; o < n.length; o++) {
                    for (var i = n[o];
                        " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(t)) {
                        r = i.substring(t.length, i.length);
                        break
                    }
                }
                return r ? JSON.parse(h.decode(r)) : null
            } catch (e) {
                return null
            }
        },
        G = function(e, t) {
            try {
                return B(L(e), h.encode(JSON.stringify(t)), q), !0
            } catch (e) {
                return !1
            }
        },
        B = function(e, t, n) {
            var r = null !== t ? n.expirationDays : -1;
            if (r) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), r = o
            }
            var i = e + "=" + t;
            r && (i += "; expires=" + r.toUTCString()), i += "; path=/", n.domain && (i += "; domain=" + n.domain), document.cookie = i
        },
        K = function(e) {
            try {
                return B(L(e), null, q), !0
            } catch (e) {
                return !1
            }
        },
        z = {
            reset: function() {
                q = {
                    expirationDays: void 0,
                    domain: void 0
                }
            },
            options: function(e) {
                if (0 === arguments.length) return q;
                e = e || {}, q.expirationDays = e.expirationDays;
                var t = M.isEmptyString(e.domain) ? "." + C(window.location.href) : e.domain,
                    n = Math.random();
                q.domain = t, G("amplitude_test", n);
                var r = V("amplitude_test");
                r && r === n || (t = null), K("amplitude_test"), q.domain = t
            },
            get: V,
            set: G,
            remove: K
        };
    if (function() {
            var e, t = new Date;
            try {
                return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
            } catch (e) {}
            return !1
        }()) p = window.localStorage;
    else if (window.globalStorage) try {
        p = window.globalStorage[window.location.hostname]
    } catch (e) {} else {
        var J = document.createElement("div"),
            $ = "localStorage";
        J.style.display = "none", document.getElementsByTagName("head")[0].appendChild(J), J.addBehavior && (J.addBehavior("#default#userdata"), p = {
            length: 0,
            setItem: function(e, t) {
                J.load($), J.getAttribute(e) || this.length++, J.setAttribute(e, t), J.save($)
            },
            getItem: function(e) {
                return J.load($), J.getAttribute(e)
            },
            removeItem: function(e) {
                J.load($), J.getAttribute(e) && this.length--, J.removeAttribute(e), J.save($)
            },
            clear: function() {
                J.load($);
                for (var e, t = 0; e = J.XMLDocument.documentElement.attributes[t++];) J.removeAttribute(e.name);
                J.save($), this.length = 0
            },
            key: function(e) {
                return J.load($), J.XMLDocument.documentElement.attributes[e]
            }
        }, J.load($), p.length = J.XMLDocument.documentElement.attributes.length)
    }
    p || (p = {
        length: 0,
        setItem: function(e, t) {},
        getItem: function(e) {},
        removeItem: function(e) {},
        clear: function() {},
        key: function(e) {}
    });
    var W = p,
        Y = function() {
            this.storage = null
        };
    Y.prototype._cookiesEnabled = function() {
        var e, t = String(new Date);
        try {
            return z.set(f.COOKIE_TEST, t), e = z.get(f.COOKIE_TEST) === t, z.remove(f.COOKIE_TEST), e
        } catch (e) {}
        return !1
    }, Y.prototype.getStorage = function() {
        return null !== this.storage ? this.storage : (this._cookiesEnabled() ? this.storage = z : this.storage = {
            _options: {
                expirationDays: void 0,
                domain: void 0
            },
            reset: function() {
                this._options = {
                    expirationDays: void 0,
                    domain: void 0
                }
            },
            options: function(e) {
                return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window.location.hostname, this._options)
            },
            get: function(e) {
                try {
                    return JSON.parse(W.getItem("amp_cookiestore_" + e))
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    return W.setItem("amp_cookiestore_" + e, JSON.stringify(t)), !0
                } catch (e) {}
                return !1
            },
            remove: function(e) {
                try {
                    W.removeItem("amp_cookiestore_" + e)
                } catch (e) {
                    return !1
                }
            }
        }, this.storage)
    };
    var Q = function() {
        this.userPropertiesOperations = {}, this.properties = []
    };
    Q.prototype.add = function(e, t) {
        return "number" === A(t) || "string" === A(t) ? this._addOperation("$add", e, t) : M.log.error("Unsupported type for value: " + A(t) + ", expecting number or string"), this
    }, Q.prototype.append = function(e, t) {
        return this._addOperation("$append", e, t), this
    }, Q.prototype.clearAll = function() {
        return Object.keys(this.userPropertiesOperations).length > 0 ? (this.userPropertiesOperations.hasOwnProperty("$clearAll") || M.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
    }, Q.prototype.prepend = function(e, t) {
        return this._addOperation("$prepend", e, t), this
    }, Q.prototype.set = function(e, t) {
        return this._addOperation("$set", e, t), this
    }, Q.prototype.setOnce = function(e, t) {
        return this._addOperation("$setOnce", e, t), this
    }, Q.prototype.unset = function(e) {
        return this._addOperation("$unset", e, "-"), this
    }, Q.prototype._addOperation = function(e, t, n) {
        this.userPropertiesOperations.hasOwnProperty("$clearAll") ? M.log.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (this.userPropertiesOperations.hasOwnProperty(e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : M.log.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
    };
    var X = e(function(e) {
            ! function(t) {
                function n(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function r(e, t, r, o, i, s) {
                    return n(function(e, t) {
                        return e << t | e >>> 32 - t
                    }(n(n(t, e), n(o, s)), i), r)
                }

                function o(e, t, n, o, i, s, a) {
                    return r(t & n | ~t & o, e, t, i, s, a)
                }

                function i(e, t, n, o, i, s, a) {
                    return r(t & o | n & ~o, e, t, i, s, a)
                }

                function s(e, t, n, o, i, s, a) {
                    return r(t ^ n ^ o, e, t, i, s, a)
                }

                function a(e, t, n, o, i, s, a) {
                    return r(n ^ (t | ~o), e, t, i, s, a)
                }

                function u(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var r, u, c, p, l, f = 1732584193,
                        d = -271733879,
                        h = -1732584194,
                        g = 271733878;
                    for (r = 0; r < e.length; r += 16) u = f, c = d, p = h, l = g, d = a(d = a(d = a(d = a(d = s(d = s(d = s(d = s(d = i(d = i(d = i(d = i(d = o(d = o(d = o(d = o(d, h = o(h, g = o(g, f = o(f, d, h, g, e[r], 7, -680876936), d, h, e[r + 1], 12, -389564586), f, d, e[r + 2], 17, 606105819), g, f, e[r + 3], 22, -1044525330), h = o(h, g = o(g, f = o(f, d, h, g, e[r + 4], 7, -176418897), d, h, e[r + 5], 12, 1200080426), f, d, e[r + 6], 17, -1473231341), g, f, e[r + 7], 22, -45705983), h = o(h, g = o(g, f = o(f, d, h, g, e[r + 8], 7, 1770035416), d, h, e[r + 9], 12, -1958414417), f, d, e[r + 10], 17, -42063), g, f, e[r + 11], 22, -1990404162), h = o(h, g = o(g, f = o(f, d, h, g, e[r + 12], 7, 1804603682), d, h, e[r + 13], 12, -40341101), f, d, e[r + 14], 17, -1502002290), g, f, e[r + 15], 22, 1236535329), h = i(h, g = i(g, f = i(f, d, h, g, e[r + 1], 5, -165796510), d, h, e[r + 6], 9, -1069501632), f, d, e[r + 11], 14, 643717713), g, f, e[r], 20, -373897302), h = i(h, g = i(g, f = i(f, d, h, g, e[r + 5], 5, -701558691), d, h, e[r + 10], 9, 38016083), f, d, e[r + 15], 14, -660478335), g, f, e[r + 4], 20, -405537848), h = i(h, g = i(g, f = i(f, d, h, g, e[r + 9], 5, 568446438), d, h, e[r + 14], 9, -1019803690), f, d, e[r + 3], 14, -187363961), g, f, e[r + 8], 20, 1163531501), h = i(h, g = i(g, f = i(f, d, h, g, e[r + 13], 5, -1444681467), d, h, e[r + 2], 9, -51403784), f, d, e[r + 7], 14, 1735328473), g, f, e[r + 12], 20, -1926607734), h = s(h, g = s(g, f = s(f, d, h, g, e[r + 5], 4, -378558), d, h, e[r + 8], 11, -2022574463), f, d, e[r + 11], 16, 1839030562), g, f, e[r + 14], 23, -35309556), h = s(h, g = s(g, f = s(f, d, h, g, e[r + 1], 4, -1530992060), d, h, e[r + 4], 11, 1272893353), f, d, e[r + 7], 16, -155497632), g, f, e[r + 10], 23, -1094730640), h = s(h, g = s(g, f = s(f, d, h, g, e[r + 13], 4, 681279174), d, h, e[r], 11, -358537222), f, d, e[r + 3], 16, -722521979), g, f, e[r + 6], 23, 76029189), h = s(h, g = s(g, f = s(f, d, h, g, e[r + 9], 4, -640364487), d, h, e[r + 12], 11, -421815835), f, d, e[r + 15], 16, 530742520), g, f, e[r + 2], 23, -995338651), h = a(h, g = a(g, f = a(f, d, h, g, e[r], 6, -198630844), d, h, e[r + 7], 10, 1126891415), f, d, e[r + 14], 15, -1416354905), g, f, e[r + 5], 21, -57434055), h = a(h, g = a(g, f = a(f, d, h, g, e[r + 12], 6, 1700485571), d, h, e[r + 3], 10, -1894986606), f, d, e[r + 10], 15, -1051523), g, f, e[r + 1], 21, -2054922799), h = a(h, g = a(g, f = a(f, d, h, g, e[r + 8], 6, 1873313359), d, h, e[r + 15], 10, -30611744), f, d, e[r + 6], 15, -1560198380), g, f, e[r + 13], 21, 1309151649), h = a(h, g = a(g, f = a(f, d, h, g, e[r + 4], 6, -145523070), d, h, e[r + 11], 10, -1120210379), f, d, e[r + 2], 15, 718787259), g, f, e[r + 9], 21, -343485551), f = n(f, u), d = n(d, c), h = n(h, p), g = n(g, l);
                    return [f, d, h, g]
                }

                function c(e) {
                    var t, n = "",
                        r = 32 * e.length;
                    for (t = 0; r > t; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }

                function p(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                    var r = 8 * e.length;
                    for (t = 0; r > t; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }

                function l(e) {
                    var t, n, r = "";
                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
                    return r
                }

                function f(e) {
                    return unescape(encodeURIComponent(e))
                }

                function d(e) {
                    return function(e) {
                        return c(u(p(e), 8 * e.length))
                    }(f(e))
                }

                function h(e, t) {
                    return function(e, t) {
                        var n, r, o = p(e),
                            i = [],
                            s = [];
                        for (i[15] = s[15] = void 0, o.length > 16 && (o = u(o, 8 * e.length)), n = 0; 16 > n; n += 1) i[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
                        return r = u(i.concat(p(t)), 512 + 8 * t.length), c(u(s.concat(r), 640))
                    }(f(e), f(t))
                }

                function g(e, t, n) {
                    return t ? n ? h(t, e) : function(e, t) {
                        return l(h(e, t))
                    }(t, e) : n ? d(e) : function(e) {
                        return l(d(e))
                    }(e)
                }
                e.exports ? e.exports = g : t.md5 = g
            }(l)
        }),
        H = "object" == typeof l && l && l.Object === Object && l,
        Z = "object" == typeof self && self && self.Object === Object && self,
        ee = H || Z || Function("return this")(),
        te = ee.Symbol,
        ne = Object.prototype,
        re = ne.hasOwnProperty,
        oe = ne.toString,
        ie = te ? te.toStringTag : void 0,
        se = function(e) {
            var t = re.call(e, ie),
                n = e[ie];
            try {
                e[ie] = void 0;
                var r = !0
            } catch (e) {}
            var o = oe.call(e);
            return r && (t ? e[ie] = n : delete e[ie]), o
        },
        ae = Object.prototype.toString,
        ue = function(e) {
            return ae.call(e)
        },
        ce = "[object Null]",
        pe = "[object Undefined]",
        le = te ? te.toStringTag : void 0,
        fe = function(e) {
            return null == e ? void 0 === e ? pe : ce : le && le in Object(e) ? se(e) : ue(e)
        },
        de = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        },
        he = "[object AsyncFunction]",
        ge = "[object Function]",
        ve = "[object GeneratorFunction]",
        ye = "[object Proxy]",
        me = function(e) {
            if (!de(e)) return !1;
            var t = fe(e);
            return t == ge || t == ve || t == he || t == ye
        },
        _e = ee["__core-js_shared__"],
        be = function() {
            var e = /[^.]+$/.exec(_e && _e.keys && _e.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(),
        we = function(e) {
            return !!be && be in e
        },
        Ie = Function.prototype.toString,
        Ee = function(e) {
            if (null != e) {
                try {
                    return Ie.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        Se = /^\[object .+?Constructor\]$/,
        Ce = Function.prototype,
        Oe = Object.prototype,
        Ne = Ce.toString,
        Ae = Oe.hasOwnProperty,
        Te = RegExp("^" + Ne.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        xe = function(e) {
            return !(!de(e) || we(e)) && (me(e) ? Te : Se).test(Ee(e))
        },
        je = function(e, t) {
            return null == e ? void 0 : e[t]
        },
        ke = function(e, t) {
            var n = je(e, t);
            return xe(n) ? n : void 0
        },
        Re = function() {
            try {
                var e = ke(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }(),
        Pe = function(e, t, n) {
            "__proto__" == t && Re ? Re(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        },
        Fe = function(e, t) {
            return e === t || e != e && t != t
        },
        Ue = Object.prototype.hasOwnProperty,
        De = function(e, t, n) {
            var r = e[t];
            Ue.call(e, t) && Fe(r, n) && (void 0 !== n || t in e) || Pe(e, t, n)
        },
        Me = function(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var i = -1, s = t.length; ++i < s;) {
                var a = t[i],
                    u = r ? r(n[a], e[a], a, n, e) : void 0;
                void 0 === u && (u = e[a]), o ? Pe(n, a, u) : De(n, a, u)
            }
            return n
        },
        qe = function(e) {
            return e
        },
        Le = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        },
        Ve = Math.max,
        Ge = function(e, t, n) {
            return t = Ve(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, o = -1, i = Ve(r.length - t, 0), s = Array(i); ++o < i;) s[o] = r[t + o];
                    o = -1;
                    for (var a = Array(t + 1); ++o < t;) a[o] = r[o];
                    return a[t] = n(s), Le(e, this, a)
                }
        },
        Be = function(e) {
            return function() {
                return e
            }
        },
        Ke = Re ? function(e, t) {
            return Re(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Be(t),
                writable: !0
            })
        } : qe,
        ze = 800,
        Je = 16,
        $e = Date.now,
        We = function(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = $e(),
                    o = Je - (r - n);
                if (n = r, o > 0) {
                    if (++t >= ze) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(Ke),
        Ye = function(e, t) {
            return We(Ge(e, t, qe), e + "")
        },
        Qe = 9007199254740991,
        Xe = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && Qe >= e
        },
        He = function(e) {
            return null != e && Xe(e.length) && !me(e)
        },
        Ze = 9007199254740991,
        et = /^(?:0|[1-9]\d*)$/,
        tt = function(e, t) {
            return !!(t = null == t ? Ze : t) && ("number" == typeof e || et.test(e)) && e > -1 && e % 1 == 0 && t > e
        },
        nt = function(e, t, n) {
            if (!de(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? He(n) && tt(t, n.length) : "string" == r && t in n) && Fe(n[t], e)
        },
        rt = function(e) {
            return Ye(function(t, n) {
                var r = -1,
                    o = n.length,
                    i = o > 1 ? n[o - 1] : void 0,
                    s = o > 2 ? n[2] : void 0;
                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && nt(n[0], n[1], s) && (i = 3 > o ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                    var a = n[r];
                    a && e(t, a, r, i)
                }
                return t
            })
        },
        ot = Object.prototype,
        it = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || ot)
        },
        st = function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        },
        at = function(e) {
            return null != e && "object" == typeof e
        },
        ut = "[object Arguments]",
        ct = function(e) {
            return at(e) && fe(e) == ut
        },
        pt = Object.prototype,
        lt = pt.hasOwnProperty,
        ft = pt.propertyIsEnumerable,
        dt = ct(function() {
            return arguments
        }()) ? ct : function(e) {
            return at(e) && lt.call(e, "callee") && !ft.call(e, "callee")
        },
        ht = Array.isArray,
        gt = function() {
            return !1
        },
        vt = e(function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && !0 && e && !e.nodeType && e,
                o = r && r.exports === n ? ee.Buffer : void 0,
                i = (o ? o.isBuffer : void 0) || gt;
            e.exports = i
        }),
        yt = {};
    yt["[object Float32Array]"] = yt["[object Float64Array]"] = yt["[object Int8Array]"] = yt["[object Int16Array]"] = yt["[object Int32Array]"] = yt["[object Uint8Array]"] = yt["[object Uint8ClampedArray]"] = yt["[object Uint16Array]"] = yt["[object Uint32Array]"] = !0, yt["[object Arguments]"] = yt["[object Array]"] = yt["[object ArrayBuffer]"] = yt["[object Boolean]"] = yt["[object DataView]"] = yt["[object Date]"] = yt["[object Error]"] = yt["[object Function]"] = yt["[object Map]"] = yt["[object Number]"] = yt["[object Object]"] = yt["[object RegExp]"] = yt["[object Set]"] = yt["[object String]"] = yt["[object WeakMap]"] = !1;
    var mt = function(e) {
            return at(e) && Xe(e.length) && !!yt[fe(e)]
        },
        _t = function(e) {
            return function(t) {
                return e(t)
            }
        },
        bt = e(function(e, t) {
            var n = t && !t.nodeType && t,
                r = n && !0 && e && !e.nodeType && e,
                o = r && r.exports === n && H.process,
                i = function() {
                    try {
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = i
        }),
        wt = bt && bt.isTypedArray,
        It = wt ? _t(wt) : mt,
        Et = Object.prototype.hasOwnProperty,
        St = function(e, t) {
            var n = ht(e),
                r = !n && dt(e),
                o = !n && !r && vt(e),
                i = !n && !r && !o && It(e),
                s = n || r || o || i,
                a = s ? st(e.length, String) : [],
                u = a.length;
            for (var c in e) !t && !Et.call(e, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || tt(c, u)) || a.push(c);
            return a
        },
        Ct = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.keys, Object),
        Ot = Object.prototype.hasOwnProperty,
        Nt = function(e) {
            if (!it(e)) return Ct(e);
            var t = [];
            for (var n in Object(e)) Ot.call(e, n) && "constructor" != n && t.push(n);
            return t
        },
        At = function(e) {
            return He(e) ? St(e) : Nt(e)
        },
        Tt = Object.prototype.hasOwnProperty,
        xt = rt(function(e, t) {
            if (it(t) || He(t)) Me(t, At(t), e);
            else
                for (var n in t) Tt.call(t, n) && De(e, n, t[n])
        }),
        jt = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        kt = Object.keys || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        },
        Rt = {
            encode: a,
            stringify: a,
            decode: c,
            parse: c
        },
        Pt = function(e, t) {
            this.url = e, this.data = t || {}
        };
    Pt.prototype.send = function(e) {
        if (window.XDomainRequest) {
            var t = new window.XDomainRequest;
            t.open("POST", this.url, !0), t.onload = function() {
                e(200, t.responseText)
            }, t.onerror = function() {
                "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
            }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(Rt.stringify(this.data))
        } else {
            var n = new XMLHttpRequest;
            n.open("POST", this.url, !0), n.onreadystatechange = function() {
                4 === n.readyState && e(n.status, n.responseText)
            }, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), n.send(Rt.stringify(this.data))
        }
    };
    var Ft = function() {
        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
    };
    Ft.prototype.setProductId = function(e) {
        return "string" !== A(e) ? M.log.error("Unsupported type for productId: " + A(e) + ", expecting string") : M.isEmptyString(e) ? M.log.error("Invalid empty productId") : this._productId = e, this
    }, Ft.prototype.setQuantity = function(e) {
        return "number" !== A(e) ? M.log.error("Unsupported type for quantity: " + A(e) + ", expecting number") : this._quantity = parseInt(e), this
    }, Ft.prototype.setPrice = function(e) {
        return "number" !== A(e) ? M.log.error("Unsupported type for price: " + A(e) + ", expecting number") : this._price = e, this
    }, Ft.prototype.setRevenueType = function(e) {
        return "string" !== A(e) ? M.log.error("Unsupported type for revenueType: " + A(e) + ", expecting string") : this._revenueType = e, this
    }, Ft.prototype.setEventProperties = function(e) {
        return "object" !== A(e) ? M.log.error("Unsupported type for eventProperties: " + A(e) + ", expecting object") : this._properties = M.validateProperties(e), this
    }, Ft.prototype._isValidRevenue = function() {
        return "number" === A(this._price) || (M.log.error("Invalid revenue, need to set price field"), !1)
    }, Ft.prototype._toJSONObject = function() {
        var e = "object" === A(this._properties) ? this._properties : {};
        return null !== this._productId && (e[f.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (e[f.REVENUE_QUANTITY] = this._quantity), null !== this._price && (e[f.REVENUE_PRICE] = this._price), null !== this._revenueType && (e[f.REVENUE_REVENUE_TYPE] = this._revenueType), e
    };
    var Ut = e(function(e, t) {
            ! function(n, r) {
                var o = "model",
                    i = "name",
                    s = "type",
                    a = "vendor",
                    u = "version",
                    c = "mobile",
                    p = "tablet",
                    l = {
                        extend: function(e, t) {
                            var n = {};
                            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                            return n
                        },
                        has: function(e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return "string" == typeof e ? e.split(".")[0] : void 0
                        }
                    },
                    f = {
                        rgx: function() {
                            for (var e, t, n, r, o, i, s, a = 0, u = arguments; a < u.length && !i;) {
                                var c = u[a],
                                    p = u[a + 1];
                                if (void 0 === e) {
                                    e = {};
                                    for (r in p) p.hasOwnProperty(r) && ("object" == typeof(o = p[r]) ? e[o[0]] = void 0 : e[o] = void 0)
                                }
                                for (t = n = 0; t < c.length && !i;)
                                    if (i = c[t++].exec(this.getUA()))
                                        for (r = 0; r < p.length; r++) s = i[++n], "object" == typeof(o = p[r]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? e[o[0]] = o[1].call(this, s) : e[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? e[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : e[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (e[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : e[o] = s || void 0;
                                a += 2
                            }
                            return e
                        },
                        str: function(e, t) {
                            for (var n in t)
                                if ("object" == typeof t[n] && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (l.has(t[n][r], e)) return "?" === n ? void 0 : n
                                } else if (l.has(t[n], e)) return "?" === n ? void 0 : n;
                            return e
                        }
                    },
                    d = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            },
                            name: {
                                "Opera Mobile": "Opera Mobi",
                                "IE Mobile": "IEMobile"
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                },
                                name: {
                                    "Windows Phone": "Windows Phone OS"
                                }
                            }
                        }
                    },
                    h = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [i, u],
                            [/(OPiOS)[\/\s]+([\w\.]+)/i],
                            [
                                [i, "Opera Mini"], u
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [i, "Opera"], u
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                            [i, u],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [i, "IE"], u
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [i, u],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [i, "Yandex"], u
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [i, /_/g, " "], u
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],
                            [
                                [i, "Chrome Mobile"], u
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [i, u],
                            [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [i, "UCBrowser"], u
                            ],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [i, "Dolphin"], u
                            ],
                            [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                            [u, [i, "MIUI Browser"]],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                            [u, [i, "Android Browser"]],
                            [/FBAV\/([\w\.]+);/i],
                            [u, [i, "Facebook"]],
                            [/fxios\/([\w\.-]+)/i],
                            [u, [i, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [u, [i, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [u, i],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [i, [u, f.str, d.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [i, u],
                            [/(blackberry)\\s?\/([\w\.]+)/i],
                            [
                                [i, "BlackBerry"], u
                            ],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [i, "Netscape"], u
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [i, u]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", l.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", l.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", l.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [o, a, [s, p]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [o, [a, "Apple"],
                                [s, p]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [o, "Apple TV"],
                                [a, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [a, o, [s, p]],
                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                            [o, [a, "Amazon"],
                                [s, p]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                            [
                                [o, f.str, d.device.amazon.model],
                                [a, "Amazon"],
                                [s, c]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [o, a, [s, c]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [o, [a, "Apple"],
                                [s, c]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [a, o, [s, c]],
                            [/\(bb10;\s(\w+)/i],
                            [o, [a, "BlackBerry"],
                                [s, c]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                            [o, [a, "Asus"],
                                [s, p]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [a, "Sony"],
                                [o, "Xperia Tablet"],
                                [s, p]
                            ],
                            [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                            [
                                [a, "Sony"],
                                [o, "Xperia Phone"],
                                [s, c]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [a, o, [s, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [o, [a, "Nvidia"],
                                [s, "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [o, [a, "Sony"],
                                [s, "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [a, f.str, d.device.sprint.vendor],
                                [o, f.str, d.device.sprint.model],
                                [s, c]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [a, o, [s, p]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                            [a, [o, /_/g, " "],
                                [s, c]
                            ],
                            [/(nexus\s9)/i],
                            [o, [a, "HTC"],
                                [s, p]
                            ],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [o, [a, "Microsoft"],
                                [s, "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [o, /\./g, " "],
                                [a, "Microsoft"],
                                [s, c]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                            [o, [a, "Motorola"],
                                [s, c]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [o, [a, "Motorola"],
                                [s, p]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [a, "Samsung"], o, [s, p]
                            ],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                            [
                                [a, "Samsung"], o, [s, c]
                            ],
                            [/(samsung);smarttv/i],
                            [a, o, [s, "smarttv"]],
                            [/\(dtv[\);].+(aquos)/i],
                            [o, [a, "Sharp"],
                                [s, "smarttv"]
                            ],
                            [/sie-(\w+)*/i],
                            [o, [a, "Siemens"],
                                [s, c]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                            [
                                [a, "Nokia"], o, [s, c]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [o, [a, "Acer"],
                                [s, p]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [a, "LG"], o, [s, p]
                            ],
                            [/(lg) netcast\.tv/i],
                            [a, o, [s, "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                            [o, [a, "LG"],
                                [s, c]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [o, [a, "Lenovo"],
                                [s, p]
                            ],
                            [/linux;.+((jolla));/i],
                            [a, o, [s, c]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [a, o, [s, "wearable"]],
                            [/android.+;\s(glass)\s\d/i],
                            [o, [a, "Google"],
                                [s, "wearable"]
                            ],
                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                            [
                                [o, /_/g, " "],
                                [a, "Xiaomi"],
                                [s, c]
                            ],
                            [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                            [
                                [s, l.lowerize], a, o
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [u, [i, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [i, u],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [u, i]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [i, u],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [
                                [i, f.str, d.os.windows.name],
                                [u, f.str, d.os.windows.version]
                            ],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [i, "Windows"],
                                [u, f.str, d.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [i, "BlackBerry"], u
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            [i, u],
                            [/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [i, "Symbian"], u
                            ],
                            [/\((series40);/i],
                            [i],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [i, "Firefox OS"], u
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            [
                                [i, "Linux"], u
                            ],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [i, "Chromium OS"], u
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [i, "Solaris"], u
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [
                                [i, "Linux"], u
                            ],
                            [/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [i, "iPhone"],
                                [u, /_/g, "."]
                            ],
                            [/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [i, "iPad"],
                                [u, /_/g, "."]
                            ],
                            [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [i, "iOS"],
                                [u, /_/g, "."]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [i, "Mac"],
                                [u, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            [i, u]
                        ]
                    },
                    g = function(e, t) {
                        if (!(this instanceof g)) return new g(e, t).getResult();
                        var r = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                            o = t ? l.extend(h, t) : h;
                        return this.getBrowser = function() {
                            var e = f.rgx.apply(this, o.browser);
                            return e.major = l.major(e.version), e
                        }, this.getCPU = function() {
                            return f.rgx.apply(this, o.cpu)
                        }, this.getDevice = function() {
                            return f.rgx.apply(this, o.device)
                        }, this.getEngine = function() {
                            return f.rgx.apply(this, o.engine)
                        }, this.getOS = function() {
                            return f.rgx.apply(this, o.os)
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = e, this
                        }, this
                    };
                g.VERSION = "0.7.10", g.BROWSER = {
                    NAME: i,
                    MAJOR: "major",
                    VERSION: u
                }, g.CPU = {
                    ARCHITECTURE: "architecture"
                }, g.DEVICE = {
                    MODEL: o,
                    VENDOR: a,
                    TYPE: s,
                    CONSOLE: "console",
                    MOBILE: c,
                    SMARTTV: "smarttv",
                    TABLET: p,
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, g.ENGINE = {
                    NAME: i,
                    VERSION: u
                }, g.OS = {
                    NAME: i,
                    VERSION: u
                }, e.exports && (t = e.exports = g), t.UAParser = g;
                var v = n.jQuery || n.Zepto;
                if (void 0 !== v) {
                    var y = new g;
                    v.ua = y.getResult(), v.ua.get = function() {
                        return y.getUA()
                    }, v.ua.set = function(e) {
                        y.setUA(e);
                        var t = y.getResult();
                        for (var n in t) v.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : l)
        }),
        Dt = function tn(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, tn)
        },
        Mt = {
            apiEndpoint: "api.amplitude.com",
            cookieExpiration: 3650,
            cookieName: "amplitude_id",
            domain: "",
            includeReferrer: !1,
            includeUtm: !1,
            language: {
                language: navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || void 0
            }.language,
            logLevel: "WARN",
            optOut: !1,
            platform: "Web",
            savedMaxCount: 1e3,
            saveEvents: !0,
            sessionTimeout: 18e5,
            unsentKey: "amplitude_unsent",
            unsentIdentifyKey: "amplitude_unsent_identify",
            uploadBatchSize: 100,
            batchEvents: !1,
            eventUploadThreshold: 30,
            eventUploadPeriodMillis: 3e4,
            forceHttps: !0,
            includeGclid: !1,
            saveParamsReferrerOncePerSession: !0,
            deviceIdFromUrlParam: !1
        },
        qt = function(e) {
            this._instanceName = M.isEmptyString(e) ? f.DEFAULT_INSTANCE : e.toLowerCase(), this._legacyStorageSuffix = this._instanceName === f.DEFAULT_INSTANCE ? "" : "_" + this._instanceName, this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new Ut(navigator.userAgent).getResult(), this.options = xt({}, Mt), this.cookieStorage = (new Y).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._userAgent = navigator && navigator.userAgent || null
        };
    qt.prototype.Identify = Q, qt.prototype.Revenue = Ft, qt.prototype.init = function(e, t, n, r) {
        if ("string" !== A(e) || M.isEmptyString(e)) M.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");
        else try {
            if (this.options.apiKey = e, this._storageSuffix = "_" + e + this._legacyStorageSuffix, Lt(this.options, n), this.cookieStorage.options({
                    expirationDays: this.options.cookieExpiration,
                    domain: this.options.domain
                }), this.options.domain = this.cookieStorage.options().domain, this._instanceName === f.DEFAULT_INSTANCE && Vt(this), Gt(this), this.options.deviceId = "object" === A(n) && "string" === A(n.deviceId) && !M.isEmptyString(n.deviceId) && n.deviceId || this.options.deviceIdFromUrlParam && this._getDeviceIdFromUrlParam(this._getUrlParams()) || this.options.deviceId || Dt() + "R", this.options.userId = "string" === A(t) && !M.isEmptyString(t) && t || "number" === A(t) && t.toString() || this.options.userId || null, this.options.saveEvents) {
                this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);
                for (var o = 0; o < this._unsentEvents.length; o++) {
                    var i = this._unsentEvents[o].event_properties,
                        s = this._unsentEvents[o].groups;
                    this._unsentEvents[o].event_properties = M.validateProperties(i), this._unsentEvents[o].groups = M.validateGroups(s)
                }
                for (var a = 0; a < this._unsentIdentifys.length; a++) {
                    var u = this._unsentIdentifys[a].user_properties,
                        c = this._unsentIdentifys[a].groups;
                    this._unsentIdentifys[a].user_properties = M.validateProperties(u), this._unsentIdentifys[a].groups = M.validateGroups(c)
                }
            }
            var p = (new Date).getTime();
            (!this._sessionId || !this._lastEventTime || p - this._lastEventTime > this.options.sessionTimeout) && (this._newSession = !0, this._sessionId = p, this.options.saveParamsReferrerOncePerSession && this._trackParamsAndReferrer()), this.options.saveParamsReferrerOncePerSession || this._trackParamsAndReferrer(), this._lastEventTime = p, Kt(this), this._sendEventsIfReady()
        } catch (e) {
            M.log.error(e)
        } finally {
            "function" === A(r) && r(this)
        }
    }, qt.prototype._trackParamsAndReferrer = function() {
        this.options.includeUtm && this._initUtmData(), this.options.includeReferrer && this._saveReferrer(this._getReferrer()), this.options.includeGclid && this._saveGclid(this._getUrlParams())
    };
    var Lt = function(e, t) {
        if ("object" === A(t)) {
            var n = function(n) {
                if (Mt.hasOwnProperty(n)) {
                    var r = t[n],
                        o = A(Mt[n]);
                    M.validateInput(r, n + " option", o) && ("boolean" === o ? e[n] = !!r : ("string" === o && !M.isEmptyString(r) || "number" === o && r > 0) && (e[n] = r))
                }
            };
            for (var r in t) t.hasOwnProperty(r) && n(r)
        }
    };
    qt.prototype.runQueuedFunctions = function() {
        for (var e = 0; e < this._q.length; e++) {
            var t = this[this._q[e][0]];
            "function" === A(t) && t.apply(this, this._q[e].slice(1))
        }
        this._q = []
    }, qt.prototype._apiKeySet = function(e) {
        return !M.isEmptyString(this.options.apiKey) || (M.log.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
    }, qt.prototype._loadSavedUnsentEvents = function(e) {
        var t = this._getFromStorage(W, e),
            n = this._parseSavedUnsentEventsString(t, e),
            r = this._getFromStorageLegacy(W, e),
            o = this._parseSavedUnsentEventsString(r, e).concat(n);
        return this._removeFromLegacyStorage(W, e), this._setInStorage(W, e, JSON.stringify(o)), o
    }, qt.prototype._removeFromLegacyStorage = function(e, t) {
        e.removeItem(t + this._legacyStorageSuffix)
    }, qt.prototype._parseSavedUnsentEventsString = function(e, t) {
        if (M.isEmptyString(e)) return [];
        if ("string" === A(e)) try {
            var n = JSON.parse(e);
            if ("array" === A(n)) return n
        } catch (e) {}
        return M.log.error("Unable to load " + t + " events. Restart with a new empty queue."), []
    }, qt.prototype.isNewSession = function() {
        return this._newSession
    }, qt.prototype.getSessionId = function() {
        return this._sessionId
    }, qt.prototype.nextEventId = function() {
        return this._eventId++, this._eventId
    }, qt.prototype.nextIdentifyId = function() {
        return this._identifyId++, this._identifyId
    }, qt.prototype.nextSequenceNumber = function() {
        return this._sequenceNumber++, this._sequenceNumber
    }, qt.prototype._unsentCount = function() {
        return this._unsentEvents.length + this._unsentIdentifys.length
    }, qt.prototype._sendEventsIfReady = function(e) {
        return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold ? (this.sendEvents(e), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
            this._updateScheduled = !1, this.sendEvents()
        }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(e), !0))
    }, qt.prototype._getFromStorage = function(e, t) {
        return e.getItem(t + this._storageSuffix)
    }, qt.prototype._getFromStorageLegacy = function(e, t) {
        return e.getItem(t + this._legacyStorageSuffix)
    }, qt.prototype._setInStorage = function(e, t, n) {
        e.setItem(t + this._storageSuffix, n)
    };
    var Vt = function(e) {
            var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
            if ("object" !== A(t) && (t = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix), !("object" === A(t) && t.deviceId && t.sessionId && t.lastEventTime))) {
                var n = function(e) {
                        var t = W.getItem(e);
                        return W.removeItem(e), t
                    },
                    r = "string" === A(e.options.apiKey) && "_" + e.options.apiKey.slice(0, 6) || "",
                    o = n(f.DEVICE_ID + r),
                    i = n(f.USER_ID + r),
                    s = n(f.OPT_OUT + r);
                null !== s && void 0 !== s && (s = "true" === String(s));
                var a = parseInt(n(f.SESSION_ID)),
                    u = parseInt(n(f.LAST_EVENT_TIME)),
                    c = parseInt(n(f.LAST_EVENT_ID)),
                    p = parseInt(n(f.LAST_IDENTIFY_ID)),
                    l = parseInt(n(f.LAST_SEQUENCE_NUMBER)),
                    d = function(e) {
                        return "object" === A(t) && t[e]
                    };
                e.options.deviceId = d("deviceId") || o, e.options.userId = d("userId") || i, e._sessionId = d("sessionId") || a || e._sessionId, e._lastEventTime = d("lastEventTime") || u || e._lastEventTime, e._eventId = d("eventId") || c || e._eventId, e._identifyId = d("identifyId") || p || e._identifyId, e._sequenceNumber = d("sequenceNumber") || l || e._sequenceNumber, e.options.optOut = s || !1, t && void 0 !== t.optOut && null !== t.optOut && (e.options.optOut = "true" === String(t.optOut)), Kt(e)
            }
        },
        Gt = function(e) {
            var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
            if ("object" === A(t)) Bt(e, t);
            else {
                var n = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix);
                "object" === A(n) && (e.cookieStorage.remove(e.options.cookieName + e._legacyStorageSuffix), Bt(e, n))
            }
        },
        Bt = function(e, t) {
            t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime)), t.eventId && (e._eventId = parseInt(t.eventId)), t.identifyId && (e._identifyId = parseInt(t.identifyId)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber))
        },
        Kt = function(e) {
            e.cookieStorage.set(e.options.cookieName + e._storageSuffix, {
                deviceId: e.options.deviceId,
                userId: e.options.userId,
                optOut: e.options.optOut,
                sessionId: e._sessionId,
                lastEventTime: e._lastEventTime,
                eventId: e._eventId,
                identifyId: e._identifyId,
                sequenceNumber: e._sequenceNumber
            })
        };
    qt.prototype._initUtmData = function(e, t) {
        e = e || this._getUrlParams();
        var n = function(e, t) {
            var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                r = function(e, t, n, r) {
                    return M.getQueryParam(e, t) || M.getQueryParam(n, r)
                },
                o = r("utm_source", t, "utmcsr", n),
                i = r("utm_medium", t, "utmcmd", n),
                s = r("utm_campaign", t, "utmccn", n),
                a = r("utm_term", t, "utmctr", n),
                u = r("utm_content", t, "utmcct", n),
                c = {},
                p = function(e, t) {
                    M.isEmptyString(t) || (c[e] = t)
                };
            return p("utm_source", o), p("utm_medium", i), p("utm_campaign", s), p("utm_term", a), p("utm_content", u), c
        }(t = t || this.cookieStorage.get("__utmz"), e);
        zt(this, n)
    };
    var zt = function(e, t) {
        if ("object" === A(t) && 0 !== Object.keys(t).length) {
            var n = new Q;
            for (var r in t) t.hasOwnProperty(r) && (n.setOnce("initial_" + r, t[r]), n.set(r, t[r]));
            e.identify(n)
        }
    };
    qt.prototype._getReferrer = function() {
        return document.referrer
    }, qt.prototype._getUrlParams = function() {
        return location.search
    }, qt.prototype._saveGclid = function(e) {
        var t = M.getQueryParam("gclid", e);
        M.isEmptyString(t) || zt(this, {
            gclid: t
        })
    }, qt.prototype._getDeviceIdFromUrlParam = function(e) {
        return M.getQueryParam(f.AMP_DEVICE_ID_PARAM, e)
    }, qt.prototype._getReferringDomain = function(e) {
        if (M.isEmptyString(e)) return null;
        var t = e.split("/");
        return t.length >= 3 ? t[2] : null
    }, qt.prototype._saveReferrer = function(e) {
        if (!M.isEmptyString(e)) {
            var t = {
                referrer: e,
                referring_domain: this._getReferringDomain(e)
            };
            zt(this, t)
        }
    }, qt.prototype.saveEvents = function() {
        try {
            this._setInStorage(W, this.options.unsentKey, JSON.stringify(this._unsentEvents))
        } catch (e) {}
        try {
            this._setInStorage(W, this.options.unsentIdentifyKey, JSON.stringify(this._unsentIdentifys))
        } catch (e) {}
    }, qt.prototype.setDomain = function(e) {
        if (M.validateInput(e, "domain", "string")) try {
            this.cookieStorage.options({
                domain: e
            }), this.options.domain = this.cookieStorage.options().domain, Gt(this), Kt(this)
        } catch (e) {
            M.log.error(e)
        }
    }, qt.prototype.setUserId = function(e) {
        try {
            this.options.userId = void 0 !== e && null !== e && "" + e || null, Kt(this)
        } catch (e) {
            M.log.error(e)
        }
    }, qt.prototype.setGroup = function(e, t) {
        if (this._apiKeySet("setGroup()") && M.validateInput(e, "groupType", "string") && !M.isEmptyString(e)) {
            var n = {};
            n[e] = t;
            var r = (new Q).set(e, t);
            this._logEvent(f.IDENTIFY_EVENT, null, null, r.userPropertiesOperations, n, null, null)
        }
    }, qt.prototype.setOptOut = function(e) {
        if (M.validateInput(e, "enable", "boolean")) try {
            this.options.optOut = e, Kt(this)
        } catch (e) {
            M.log.error(e)
        }
    }, qt.prototype.setSessionId = function(e) {
        if (M.validateInput(e, "sessionId", "number")) try {
            this._sessionId = e, Kt(this)
        } catch (e) {
            M.log.error(e)
        }
    }, qt.prototype.regenerateDeviceId = function() {
        this.setDeviceId(Dt() + "R")
    }, qt.prototype.setDeviceId = function(e) {
        if (M.validateInput(e, "deviceId", "string")) try {
            M.isEmptyString(e) || (this.options.deviceId = "" + e, Kt(this))
        } catch (e) {
            M.log.error(e)
        }
    }, qt.prototype.setUserProperties = function(e) {
        if (this._apiKeySet("setUserProperties()") && M.validateInput(e, "userProperties", "object")) {
            var t = M.truncate(M.validateProperties(e));
            if (0 !== Object.keys(t).length) {
                var n = new Q;
                for (var r in t) t.hasOwnProperty(r) && n.set(r, t[r]);
                this.identify(n)
            }
        }
    }, qt.prototype.clearUserProperties = function() {
        if (this._apiKeySet("clearUserProperties()")) {
            var e = new Q;
            e.clearAll(), this.identify(e)
        }
    };
    var Jt = function(e, t) {
        for (var n = 0; n < t._q.length; n++) {
            var r = e[t._q[n][0]];
            "function" === A(r) && r.apply(e, t._q[n].slice(1))
        }
        return e
    };
    qt.prototype.identify = function(e, t) {
        if (this._apiKeySet("identify()")) {
            if ("object" === A(e) && e.hasOwnProperty("_q") && (e = Jt(new Q, e)), e instanceof Q) {
                if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(f.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, t)
            } else M.log.error("Invalid identify input type. Expected Identify object but saw " + A(e));
            "function" === A(t) && t(0, "No request sent")
        } else "function" === A(t) && t(0, "No request sent")
    }, qt.prototype.setVersionName = function(e) {
        M.validateInput(e, "versionName", "string") && (this.options.versionName = e)
    }, qt.prototype._logEvent = function(e, t, n, r, o, i, s) {
        if (Gt(this), e && !this.options.optOut) try {
            var a;
            a = e === f.IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
            var u = this.nextSequenceNumber(),
                c = "number" === A(i) ? i : (new Date).getTime();
            (!this._sessionId || !this._lastEventTime || c - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = c), this._lastEventTime = c, Kt(this), r = r || {}, n = n || {}, t = t || {}, o = o || {};
            var p = {
                device_id: this.options.deviceId,
                user_id: this.options.userId,
                timestamp: c,
                event_id: a,
                session_id: this._sessionId || -1,
                event_type: e,
                version_name: this.options.versionName || null,
                platform: this.options.platform,
                os_name: this._ua.browser.name || null,
                os_version: this._ua.browser.major || null,
                device_model: this._ua.os.name || null,
                language: this.options.language,
                api_properties: n,
                event_properties: M.truncate(M.validateProperties(t)),
                user_properties: M.truncate(M.validateProperties(r)),
                uuid: Dt(),
                library: {
                    name: "amplitude-js",
                    version: "4.1.1"
                },
                sequence_number: u,
                groups: M.truncate(M.validateGroups(o)),
                user_agent: this._userAgent
            };
            return e === f.IDENTIFY_EVENT ? (this._unsentIdentifys.push(p), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push(p), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(s) || "function" !== A(s) || s(0, "No request sent"), a
        } catch (e) {
            M.log.error(e)
        } else "function" === A(s) && s(0, "No request sent")
    }, qt.prototype._limitEventsQueued = function(e) {
        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount)
    }, qt.prototype.logEvent = function(e, t, n) {
        return this.logEventWithTimestamp(e, t, null, n)
    }, qt.prototype.logEventWithTimestamp = function(e, t, n, r) {
        return this._apiKeySet("logEvent()") && M.validateInput(e, "eventType", "string") && !M.isEmptyString(e) ? this._logEvent(e, t, null, null, null, n, r) : ("function" === A(r) && r(0, "No request sent"), -1)
    }, qt.prototype.logEventWithGroups = function(e, t, n, r) {
        return this._apiKeySet("logEventWithGroup()") && M.validateInput(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, r) : ("function" === A(r) && r(0, "No request sent"), -1)
    };
    var $t = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    };
    qt.prototype.logRevenueV2 = function(e) {
        if (this._apiKeySet("logRevenueV2()"))
            if ("object" === A(e) && e.hasOwnProperty("_q") && (e = Jt(new Ft, e)), e instanceof Ft) {
                if (e && e._isValidRevenue()) return this.logEvent(f.REVENUE_EVENT, e._toJSONObject())
            } else M.log.error("Invalid revenue input type. Expected Revenue object but saw " + A(e))
    }, qt.prototype.logRevenue = function(e, t, n) {
        return this._apiKeySet("logRevenue()") && $t(e) && (void 0 === t || $t(t)) ? this._logEvent(f.REVENUE_EVENT, {}, {
            productId: n,
            special: "revenue_amount",
            quantity: t || 1,
            price: e
        }, null, null, null, null) : -1
    }, qt.prototype.removeEvents = function(e, t) {
        Wt(this, "_unsentEvents", e), Wt(this, "_unsentIdentifys", t)
    };
    var Wt = function(e, t, n) {
        if (!(0 > n)) {
            for (var r = [], o = 0; o < e[t].length; o++) e[t][o].event_id > n && r.push(e[t][o]);
            e[t] = r
        }
    };
    qt.prototype.sendEvents = function(e) {
        if (!this._apiKeySet("sendEvents()") || this._sending || this.options.optOut || 0 === this._unsentCount()) "function" === A(e) && e(0, "No request sent");
        else {
            this._sending = !0;
            var t = (this.options.forceHttps ? "https" : "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint + "/",
                n = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                r = this._mergeEventsAndIdentifys(n),
                o = r.maxEventId,
                i = r.maxIdentifyId,
                s = JSON.stringify(r.eventsToSend),
                a = (new Date).getTime(),
                u = {
                    client: this.options.apiKey,
                    e: s,
                    v: f.API_VERSION,
                    upload_time: a,
                    checksum: X(f.API_VERSION + this.options.apiKey + s + a)
                },
                c = this;
            new Pt(t, u).send(function(e, t) {
                c._sending = !1;
                try {
                    200 === e && "success" === t ? (c.removeEvents(o, i), c.options.saveEvents && c.saveEvents(), c._sendEventsIfReady(r) || "function" !== A(r) || r(e, t)) : 413 === e ? (1 === c.options.uploadBatchSize && c.removeEvents(o, i), c.options.uploadBatchSize = Math.ceil(n / 2), c.sendEvents(r)) : "function" === A(r) && r(e, t)
                } catch (r) {}
            })
        }
    }, qt.prototype._mergeEventsAndIdentifys = function(e) {
        for (var t = [], n = 0, r = -1, o = 0, i = -1; t.length < e;) {
            var s, a = o >= this._unsentIdentifys.length,
                u = n >= this._unsentEvents.length;
            if (u && a) {
                M.log.error("Merging Events and Identifys, less events and identifys than expected");
                break
            }
            a ? r = (s = this._unsentEvents[n++]).event_id : u ? i = (s = this._unsentIdentifys[o++]).event_id : !("sequence_number" in this._unsentEvents[n]) || this._unsentEvents[n].sequence_number < this._unsentIdentifys[o].sequence_number ? r = (s = this._unsentEvents[n++]).event_id : i = (s = this._unsentIdentifys[o++]).event_id, t.push(s)
        }
        return {
            eventsToSend: t,
            maxEventId: r,
            maxIdentifyId: i
        }
    }, qt.prototype.setGlobalUserProperties = function(e) {
        this.setUserProperties(e)
    }, qt.prototype.__VERSION__ = "4.1.1";
    var Yt = function() {
        this.options = xt({}, Mt), this._q = [], this._instances = {}
    };
    Yt.prototype.Identify = Q, Yt.prototype.Revenue = Ft, Yt.prototype.getInstance = function(e) {
        e = M.isEmptyString(e) ? f.DEFAULT_INSTANCE : e.toLowerCase();
        var t = this._instances[e];
        return void 0 === t && (t = new qt(e), this._instances[e] = t), t
    }, Yt.prototype.init = function(e, t, n, r) {
        this.getInstance().init(e, t, n, function(e) {
            this.options = e.options, "function" === A(r) && r(e)
        }.bind(this))
    }, Yt.prototype.runQueuedFunctions = function() {
        for (var e = 0; e < this._q.length; e++) {
            var t = this[this._q[e][0]];
            "function" === A(t) && t.apply(this, this._q[e].slice(1))
        }
        this._q = [];
        for (var n in this._instances) this._instances.hasOwnProperty(n) && this._instances[n].runQueuedFunctions()
    }, Yt.prototype.isNewSession = function() {
        return this.getInstance().isNewSession()
    }, Yt.prototype.getSessionId = function() {
        return this.getInstance().getSessionId()
    }, Yt.prototype.nextEventId = function() {
        return this.getInstance().nextEventId()
    }, Yt.prototype.nextIdentifyId = function() {
        return this.getInstance().nextIdentifyId()
    }, Yt.prototype.nextSequenceNumber = function() {
        return this.getInstance().nextSequenceNumber()
    }, Yt.prototype.saveEvents = function() {
        this.getInstance().saveEvents()
    }, Yt.prototype.setDomain = function(e) {
        this.getInstance().setDomain(e)
    }, Yt.prototype.setUserId = function(e) {
        this.getInstance().setUserId(e)
    }, Yt.prototype.setGroup = function(e, t) {
        this.getInstance().setGroup(e, t)
    }, Yt.prototype.setOptOut = function(e) {
        this.getInstance().setOptOut(e)
    }, Yt.prototype.regenerateDeviceId = function() {
        this.getInstance().regenerateDeviceId()
    }, Yt.prototype.setDeviceId = function(e) {
        this.getInstance().setDeviceId(e)
    }, Yt.prototype.setUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }, Yt.prototype.clearUserProperties = function() {
        this.getInstance().clearUserProperties()
    }, Yt.prototype.identify = function(e, t) {
        this.getInstance().identify(e, t)
    }, Yt.prototype.setVersionName = function(e) {
        this.getInstance().setVersionName(e)
    }, Yt.prototype.logEvent = function(e, t, n) {
        return this.getInstance().logEvent(e, t, n)
    }, Yt.prototype.logEventWithGroups = function(e, t, n, r) {
        return this.getInstance().logEventWithGroups(e, t, n, r)
    }, Yt.prototype.logRevenueV2 = function(e) {
        return this.getInstance().logRevenueV2(e)
    }, Yt.prototype.logRevenue = function(e, t, n) {
        return this.getInstance().logRevenue(e, t, n)
    }, Yt.prototype.removeEvents = function(e, t) {
        this.getInstance().removeEvents(e, t)
    }, Yt.prototype.sendEvents = function(e) {
        this.getInstance().sendEvents(e)
    }, Yt.prototype.setGlobalUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }, Yt.prototype.__VERSION__ = "4.1.1";
    var Qt = window.amplitude || {},
        Xt = new Yt;
    Xt._q = Qt._q || [];
    for (var Ht in Qt._iq) Qt._iq.hasOwnProperty(Ht) && (Xt.getInstance(Ht)._q = Qt._iq[Ht]._q || []);
    return Xt
});