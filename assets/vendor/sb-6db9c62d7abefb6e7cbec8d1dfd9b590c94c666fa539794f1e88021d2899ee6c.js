function __siftFlashCB(e) {
    _sift.push(["_setFlash", e])
}
var _sift = _sift || [];
window.__siftFlashCB = __siftFlashCB;
var Sift = Sift || function() {
    function e(e, i) {
        for (var t = x(e), n = e.length; 0 < t.length && t.length > i;) n = Math.floor(n / 2), t = x(e.substring(0, n));
        return t
    }

    function i(e) {
        var i, t = "",
            n = 0;
        for (i in e)
            if (e.hasOwnProperty(i)) {
                var s = e[i];
                void 0 === s || null === s || "undefined" === s || "null" === s || (n > 0 && (t += "&"), t += i + "=" + s, n++)
            }
        return t
    }

    function t() {
        var e = window.location.hostname,
            i = e.split(".");
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(e)) return e;
        if (1 == i.length) return null;
        for (var e = "", t = 0; 2 > t;) {
            t++;
            var n = i[i.length - t],
                e = n + (t > 1 ? "." : "") + e;
            if (-1 != ";ac;ad;ae;aero;af;ag;ai;al;am;an;ao;aq;ar;arpa;as;asia;at;au;aw;ax;az;ba;bb;bd;be;bf;bg;bh;bi;biz;bj;bm;bn;bo;br;bs;bt;bv;bw;by;bz;ca;cat;cc;cd;cf;cg;ch;ci;ck;cl;cm;cn;co;com;coop;cr;cu;cv;cx;cy;cz;de;dj;dk;dm;do;dz;ec;edu;ee;eg;er;es;et;eu;fi;fj;fk;fm;fo;fr;ga;gb;gd;ge;gf;gg;gh;gi;gl;gm;gn;gov;gp;gq;gr;gs;gt;gu;gw;gy;hk;hm;hn;hr;ht;hu;id;ie;il;im;in;info;int;io;iq;ir;is;it;je;jm;jo;jobs;jp;ke;kg;kh;ki;km;kn;kp;kr;kw;ky;kz;la;lb;lc;li;lk;lr;ls;lt;lu;lv;ly;ma;mc;md;me;mg;mh;mil;mk;ml;mm;mn;mo;mobi;mp;mq;mr;ms;mt;mu;museum;mv;mw;mx;my;mz;na;name;nc;ne;net;nf;ng;ni;nl;no;np;nr;nu;nz;om;org;pa;pe;pf;pg;ph;pk;pl;pm;pn;pr;pro;ps;pt;pw;py;qa;re;ro;rs;ru;rw;sa;sb;sc;sd;se;sg;sh;si;sj;sk;sl;sm;sn;so;sr;st;su;sv;sy;sz;tc;td;tel;tf;tg;th;tj;tk;tl;tm;tn;to;tp;tr;travel;tt;tv;tw;tz;ua;ug;uk;us;uy;uz;va;vc;ve;vg;vi;vn;vu;wf;ws;ye;yt;za;zm;zw;".indexOf(";" + n + ";")) {
                e = i[i.length - t - 1] + "." + e;
                break
            }
        }
        return e
    }

    function n(e) {
        var i = new Image(1, 1);
        i.onload = function() {
            i.onload = null, i.onerror = null
        }, i.onerror = function() {
            i.onload = null, i.onerror = null
        };
        var t = Math.ceil(1e6 * Math.random()).toString();
        i.src = "https://" + T + "/images/" + t + ".gif?" + e
    }

    function s(e, i, t) {
        var n = PluginDetect.getVersion(t);
        n ? e[i] = n : -.25 <= PluginDetect.isMinVersion(t, 0) && (e[i] = "unk")
    }

    function r(e, i) {
        function t() {
            var s = (new Date).getTime(),
                r = !1;
            do {
                if (!(n < e.length)) {
                    r = !0;
                    break
                }
                window.SIFT_DEBUG && window.performance && window.performance.mark(e[n].toString().substring(0, 50)), e[n](), n += 1, window.SIFT_DEBUG && window.performance && e[n] && (window.performance.mark(e[n].toString().substring(0, 50)), window.performance.measure(e[n - 1].toString().substring(0, 50), e[n - 1].toString().substring(0, 50), e[n].toString().substring(0, 50)))
            } while (100 > (new Date).getTime() - s);
            r || setTimeout(t, i)
        }
        var n = 0;
        setTimeout(t, i)
    }

    function a() {
        var a = {
                random_: Math.ceil(1e9 * Math.random()),
                version_: S,
                beaconKey_: g
            },
            o = {},
            T = !1;
        r([function() {
            var e;
            e: {
                e = document.cookie;
                var i = P + "=",
                    n = e.indexOf("; " + i);
                if (-1 == n) {
                    if (n = e.indexOf(i), 0 !== n) {
                        e = void 0;
                        break e
                    }
                } else n += 2;
                var s = e.indexOf(";", n); - 1 == s && (s = e.length),
                e = D(e.substring(n + i.length, s))
            }
            if (!e || 15 > e.length || "undefined" === e || "null" === e) {
                if (i = e = void 0, e = b && (b.crypto || b.msCrypto) || {}, "function" == typeof e.getRandomValues)
                    for (var i = "", n = ["8", "9", "a", "b"], s = new Uint8Array(1), r = 0; 36 > r; r += 1) {
                        var o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".charAt(r);
                        "x" === o ? (e.getRandomValues(s), i += (s[0] % 16).toString(16)) : "y" === o && (i += Math.floor(Math.random() * n.length))
                    } else
                        for (i = e = ""; 36 > e++; i += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
                e = i, n = e, s = new Date, s.setFullYear(s.getFullYear() + M), i = P, n = x(n), s = s.toGMTString(), r = void 0 === m ? t() : m, document.cookie = i + "=" + n + (s ? ";expires=" + s : "") + ";path=/" + (r ? ";domain=." + r : "")
            }
            a.userUuid_ = e
        }, function() {
            var i;
            i = "";
            try {
                i = b.top.document.referrer
            } catch (t) {
                if (b.parent) try {
                    i = b.parent.document.referrer
                } catch (n) {
                    i = ""
                }
            }
            "" === i && (i = p.referrer), "" !== i && (a.referrer_ = e(i, 200))
        }, function() {
            p && (a.title_ = e(p.title, O), a.characterSet_ = x(p.characterSet || p.charset))
        }, function() {
            if (b) {
                a.url_ = e(b.location.href, 200), a.hostName_ = e(b.location.hostname, 200);
                try {
                    a.sessionStorage_ = !!b.sessionStorage
                } catch (i) {
                    a.sessionStorage_ = !0
                }
                try {
                    a.localStorage_ = !!b.localStorage
                } catch (t) {
                    a.localStorage_ = !0
                }
                try {
                    a.indexedDB_ = !!b.indexedDB
                } catch (n) {
                    a.indexedDB_ = !0
                }
                a.openDB_ = 1 == b.openDatabase
            }
        }, function() {
            y && (a.screenHeight_ = y.height, a.screenWidth_ = y.width, a.colorDepth_ = y.colorDepth)
        }, function() {
            v && (a.platform_ = x(v.platform), a.language_ = x(v.language || v.browserLanguage), a.userAgent_ = e(v.userAgent, 200), a.cookieEnabled_ = v.cookieEnabled, a.doNotTrack_ = v.doNotTrack, a.maxTouchPoints_ = v.maxTouchPoints, a.online_ = v.onLine, a.product_ = x(v.product), a.productSub_ = x(v.productSub), a.vendor_ = x(v.vendor), a.vendorSub_ = x(v.vendorSub), a.hardwareConcurrency_ = v.hardwareConcurrency, a.javaEnabled_ = v.javaEnabled(), a.cpuClass_ = x(v.cpuClass))
        }, function() {
            var e = new Date;
            a.timezoneOffset_ = e.getTimezoneOffset(), e.setDate(1), e.setMonth(6);
            var i = e.getTimezoneOffset();
            e.setMonth(12), e = e.getTimezoneOffset(), a.dstOffset_ = Math.abs(Math.abs(e) - Math.abs(i))
        }, function() {
            h && (a.userId_ = x(h))
        }, function() {
            d ? a.sessionId_ = l.MD5(d.toString()) : a.userUuid_ && (a.sessionId_ = l.MD5(a.userUuid_))
        }, function() {
            c && (a.partnerUserId_ = x(c))
        }, function() {
            for (var e = v.mimeTypes, i = e ? e.length : 0, t = "", n = 0; i > n; n++) t += e[n].type;
            a.numMimeTypes_ = i, a.mimeTypesHash_ = l.MD5(t)
        }, function() {
            for (var e = v.plugins, i = e ? e.length : 0, t = "", n = 0; i > n; n++) var s = e[n],
                t = t + (s.name + s.description + s.filename + s.length);
            a.numPlugins_ = i, a.pluginsHash_ = l.MD5(t)
        }, function() {
            PluginDetect.getVersion(".")
        }, function() {
            s(o, "f", "flash")
        }, function() {
            s(o, "sv", "shockwave")
        }, function() {
            s(o, "q", "quicktime")
        }, function() {
            s(o, "w", "windowsmediaplayer")
        }, function() {
            s(o, "sl", "silverlight")
        }, function() {
            (void 0 === N || 8 > N) && s(o, "vl", "vlc")
        }, function() {
            s(o, "pd", "adobereader")
        }, function() {
            s(o, "rp", "realplayer")
        }, function() {
            if (v && v.languages) {
                try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return void(a.tamperedLanguage_ = !0)
                } catch (e) {
                    return void(a.tamperedLanguage_ = !0)
                }
                a.tamperedLanguage_ || (a.tamperedLanguage_ = !1)
            }
        }, function() {
            y && (a.tamperedResolution_ = y.width < y.availWidth || y.height < y.availHeight)
        }, function() {
            if (v) {
                var e = v.userAgent.toLowerCase(),
                    i = v.oscpu,
                    t = v.platform.toLowerCase(),
                    e = 0 <= e.indexOf("windows phone") ? "Windows Phone" : 0 <= e.indexOf("win") ? "Windows" : 0 <= e.indexOf("android") ? "Android" : 0 <= e.indexOf("linux") ? "Linux" : 0 <= e.indexOf("iphone") || 0 <= e.indexOf("ipad") ? "iOS" : 0 <= e.indexOf("mac") ? "Mac" : "Other";
                if (("ontouchstart" in window || 0 < v.maxTouchPoints || 0 < v.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) a.tamperedOS_ = !0;
                else {
                    if ("undefined" != typeof i) {
                        if (i = i.toLowerCase(), 0 <= i.indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return void(a.tamperedOS_ = !0);
                        if (0 <= i.indexOf("linux") && "Linux" !== e && "Android" !== e) return void(a.tamperedOS_ = !0);
                        if (0 <= i.indexOf("mac") && "Mac" !== e && "iOS" !== e) return void(a.tamperedOS_ = !0);
                        if ((-1 === i.indexOf("win") && -1 === i.indexOf("linux") && -1 === i.indexOf("mac")) != ("Other" === e)) return void(a.tamperedOS_ = !0)
                    }
                    a.tamperedOS_ = 0 <= t.indexOf("win") && "Windows" !== e && "Windows Phone" !== e ? !0 : (0 <= t.indexOf("linux") || 0 <= t.indexOf("android") || 0 <= t.indexOf("pike")) && "Linux" !== e && "Android" !== e ? !0 : (0 <= t.indexOf("mac") || 0 <= t.indexOf("ipad") || 0 <= t.indexOf("ipod") || 0 <= t.indexOf("iphone")) && "Mac" !== e && "iOS" !== e ? !0 : (-1 === t.indexOf("win") && -1 === t.indexOf("linux") && -1 === t.indexOf("mac")) != ("Other" === e) ? !0 : "undefined" == typeof v.plugins && "Windows" !== e && "Windows Phone" !== e ? !0 : !1
                }
            }
        }, function() {
            var e = navigator.userAgent.toLowerCase(),
                i = navigator.productSub,
                e = 0 <= e.indexOf("firefox") ? "Firefox" : 0 <= e.indexOf("opera") || 0 <= e.indexOf("opr") ? "Opera" : 0 <= e.indexOf("chrome") ? "Chrome" : 0 <= e.indexOf("safari") ? "Safari" : 0 <= e.indexOf("trident") ? "Internet Explorer" : "Other";
            if ("Chrome" !== e && "Safari" !== e && "Opera" !== e || "20030107" === i)
                if (i = eval.toString().length, 37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) a.tamperedBrowser_ = !0;
                else if (39 === i && "Internet Explorer" !== e && "Other" !== e) a.tamperedBrowser_ = !0;
            else if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) a.tamperedBrowser_ = !0;
            else {
                var t;
                try {
                    throw "a"
                } catch (n) {
                    try {
                        n.toSource(), t = !0
                    } catch (s) {
                        t = !1
                    }
                }
                a.tamperedBrowser_ = t && "Firefox" !== e && "Other" !== e ? !0 : !1
            } else a.tamperedBrowser_ = !0
        }, function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;", e.className = "adsbox";
            var i = !1;
            try {
                document.body.appendChild(e), i = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
            } catch (t) {
                i = !1
            }
            a.adBlock_ = i
        }, function() {
            var e = [],
                i = document.createElement("canvas");
            if (i.getContext && i.getContext("2d")) {
                i.width = 2e3, i.height = 200, i.style.display = "inline";
                var t = i.getContext("2d");
                t.rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === t.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.font = "11pt Arial", t.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), t.globalCompositeOperation = "multiply", t.fillStyle = "rgb(255,0,255)", t.beginPath(), t.arc(50, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(0,255,255)", t.beginPath(), t.arc(100, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(255,255,0)", t.beginPath(), t.arc(75, 100, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = "rgb(255,0,255)", t.arc(75, 75, 75, 0, 2 * Math.PI, !0), t.arc(75, 75, 25, 0, 2 * Math.PI, !0), t.fill("evenodd"), i.toDataURL && e.push("canvas fp:" + i.toDataURL()), a.canvasFingerprint_ = l.MD5(e.join("~"))
            }
        }, function() {
            if (!T) {
                if (T = !0, null != u && "object" == typeof u) {
                    for (var e in u) a[e] = u[e];
                    if (u.flash_fontsArray_) {
                        var t = (e = u.flash_fontsArray_) ? e.length : 0;
                        a.numFonts_ = t;
                        for (var s = "", r = 0; t > r; r++) s += e[r];
                        a.fontsHash_ = l.MD5(s)
                    }
                }
                a.time_ = (new Date).getTime() - f, a = {
                    bk: a.beaconKey_,
                    tm: a.time_,
                    r: a.random_,
                    v: a.version_,
                    cs: a.characterSet_,
                    h: "",
                    l: a.language_,
                    P: a.partnerUserId_,
                    S: a.sessionId_,
                    ui: a.userId_,
                    uu: a.userUuid_,
                    t: "",
                    u: "",
                    rf: "",
                    ua: a.userAgent_,
                    nm: a.numMimeTypes_,
                    mh: a.mimeTypesHash_,
                    nf: a.numFonts_,
                    fh: a.fontsHash_,
                    np: a.numPlugins_,
                    ph: a.pluginsHash_,
                    sh: a.screenHeight_,
                    sw: a.screenWidth_,
                    cd: a.colorDepth_,
                    p: a.platform_,
                    to: a.timezoneOffset_,
                    d: a.dstOffset_,
                    ce: a.cookieEnabled_,
                    dt: a.doNotTrack_,
                    tp: a.maxTouchPoints_,
                    ol: a.online_,
                    pr: a.product_,
                    ps: a.productSub_,
                    vd: a.vendor_,
                    vs: a.vendorSub_,
                    hc: a.hardwareConcurrency_,
                    je: a.javaEnabled_,
                    ss: a.sessionStorage_,
                    ls: a.localStorage_,
                    "in": a.indexedDB_,
                    db: a.openDB_,
                    cp: a.cpuClass_,
                    tl: a.tamperedLanguage_,
                    tr: a.tamperedResolution_,
                    ts: a.tamperedOS_,
                    tb: a.tamperedBrowser_,
                    ab: a.adBlock_,
                    cf: a.canvasFingerprint_,
                    si: a.flash_SocketIP_,
                    fu: a.flash_uuid_
                }, e = i(a), (t = i(o)) && (e += "&" + t), e += "&z=z", (t = p.getElementById("plugindetect")) && t.parentNode.removeChild(t), n(e)
            }
        }], w)
    }

    function o() {
        var e, i, t;
        for (e = 0; e < arguments.length; e += 1) t = arguments[e], i = t.shift(), "string" == typeof i || i instanceof String ? _[i] && _[i].apply(_, t) : i.apply(_, t)
    }
    var l = {};
    ! function() {
        var e = l = {},
            i = e.util = {
                rotl: function(e, i) {
                    return e << i | e >>> 32 - i
                },
                rotr: function(e, i) {
                    return e << 32 - i | e >>> i
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & i.rotl(e, 8) | 4278255360 & i.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = i.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var i = []; e > 0; e--) i.push(Math.floor(256 * Math.random()));
                    return i
                },
                bytesToWords: function(e) {
                    for (var i = [], t = 0, n = 0; t < e.length; t++, n += 8) i[n >>> 5] |= (255 & e[t]) << 24 - n % 32;
                    return i
                },
                wordsToBytes: function(e) {
                    for (var i = [], t = 0; t < 32 * e.length; t += 8) i.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                    return i
                },
                bytesToHex: function(e) {
                    for (var i = [], t = 0; t < e.length; t++) i.push((e[t] >>> 4).toString(16)), i.push((15 & e[t]).toString(16));
                    return i.join("")
                },
                hexToBytes: function(e) {
                    for (var i = [], t = 0; t < e.length; t += 2) i.push(parseInt(e.substr(t, 2), 16));
                    return i
                },
                bytesToBase64: function(e) {
                    if ("function" == typeof btoa) return btoa(t.bytesToString(e));
                    for (var i = [], n = 0; n < e.length; n += 3)
                        for (var s = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; 4 > r; r++) 8 * n + 6 * r <= 8 * e.length ? i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s >>> 6 * (3 - r) & 63)) : i.push("=");
                    return i.join("")
                },
                base64ToBytes: function(e) {
                    if ("function" == typeof atob) return t.stringToBytes(atob(e));
                    for (var e = e.replace(/[^A-Z0-9+\/]/gi, ""), i = [], n = 0, s = 0; n < e.length; s = ++n % 4) 0 != s && i.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * s + 8) - 1) << 2 * s | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n)) >>> 6 - 2 * s);
                    return i
                }
            },
            e = e.charenc = {};
        e.UTF8 = {
            stringToBytes: function(e) {
                return t.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(t.bytesToString(e)))
            }
        };
        var t = e.Binary = {
            stringToBytes: function(e) {
                for (var i = [], t = 0; t < e.length; t++) i.push(255 & e.charCodeAt(t));
                return i
            },
            bytesToString: function(e) {
                for (var i = [], t = 0; t < e.length; t++) i.push(String.fromCharCode(e[t]));
                return i.join("")
            }
        }
    }(),
    function() {
        var e = l,
            i = e.util,
            t = e.charenc,
            n = t.UTF8,
            s = t.Binary,
            r = e.MD5 = function(e, t) {
                var n = i.wordsToBytes(r._md5(e));
                return t && t.asBytes ? n : t && t.asString ? s.bytesToString(n) : i.bytesToHex(n)
            };
        r._md5 = function(e) {
            e.constructor == String && (e = n.stringToBytes(e));
            for (var t = i.bytesToWords(e), s = 8 * e.length, e = 1732584193, a = -271733879, o = -1732584194, l = 271733878, u = 0; u < t.length; u++) t[u] = 16711935 & (t[u] << 8 | t[u] >>> 24) | 4278255360 & (t[u] << 24 | t[u] >>> 8);
            t[s >>> 5] |= 128 << s % 32, t[(s + 64 >>> 9 << 4) + 14] = s;
            for (var s = r._ff, d = r._gg, c = r._hh, h = r._ii, u = 0; u < t.length; u += 16) var g = e,
                m = a,
                f = o,
                p = l,
                e = s(e, a, o, l, t[u + 0], 7, -680876936),
                l = s(l, e, a, o, t[u + 1], 12, -389564586),
                o = s(o, l, e, a, t[u + 2], 17, 606105819),
                a = s(a, o, l, e, t[u + 3], 22, -1044525330),
                e = s(e, a, o, l, t[u + 4], 7, -176418897),
                l = s(l, e, a, o, t[u + 5], 12, 1200080426),
                o = s(o, l, e, a, t[u + 6], 17, -1473231341),
                a = s(a, o, l, e, t[u + 7], 22, -45705983),
                e = s(e, a, o, l, t[u + 8], 7, 1770035416),
                l = s(l, e, a, o, t[u + 9], 12, -1958414417),
                o = s(o, l, e, a, t[u + 10], 17, -42063),
                a = s(a, o, l, e, t[u + 11], 22, -1990404162),
                e = s(e, a, o, l, t[u + 12], 7, 1804603682),
                l = s(l, e, a, o, t[u + 13], 12, -40341101),
                o = s(o, l, e, a, t[u + 14], 17, -1502002290),
                a = s(a, o, l, e, t[u + 15], 22, 1236535329),
                e = d(e, a, o, l, t[u + 1], 5, -165796510),
                l = d(l, e, a, o, t[u + 6], 9, -1069501632),
                o = d(o, l, e, a, t[u + 11], 14, 643717713),
                a = d(a, o, l, e, t[u + 0], 20, -373897302),
                e = d(e, a, o, l, t[u + 5], 5, -701558691),
                l = d(l, e, a, o, t[u + 10], 9, 38016083),
                o = d(o, l, e, a, t[u + 15], 14, -660478335),
                a = d(a, o, l, e, t[u + 4], 20, -405537848),
                e = d(e, a, o, l, t[u + 9], 5, 568446438),
                l = d(l, e, a, o, t[u + 14], 9, -1019803690),
                o = d(o, l, e, a, t[u + 3], 14, -187363961),
                a = d(a, o, l, e, t[u + 8], 20, 1163531501),
                e = d(e, a, o, l, t[u + 13], 5, -1444681467),
                l = d(l, e, a, o, t[u + 2], 9, -51403784),
                o = d(o, l, e, a, t[u + 7], 14, 1735328473),
                a = d(a, o, l, e, t[u + 12], 20, -1926607734),
                e = c(e, a, o, l, t[u + 5], 4, -378558),
                l = c(l, e, a, o, t[u + 8], 11, -2022574463),
                o = c(o, l, e, a, t[u + 11], 16, 1839030562),
                a = c(a, o, l, e, t[u + 14], 23, -35309556),
                e = c(e, a, o, l, t[u + 1], 4, -1530992060),
                l = c(l, e, a, o, t[u + 4], 11, 1272893353),
                o = c(o, l, e, a, t[u + 7], 16, -155497632),
                a = c(a, o, l, e, t[u + 10], 23, -1094730640),
                e = c(e, a, o, l, t[u + 13], 4, 681279174),
                l = c(l, e, a, o, t[u + 0], 11, -358537222),
                o = c(o, l, e, a, t[u + 3], 16, -722521979),
                a = c(a, o, l, e, t[u + 6], 23, 76029189),
                e = c(e, a, o, l, t[u + 9], 4, -640364487),
                l = c(l, e, a, o, t[u + 12], 11, -421815835),
                o = c(o, l, e, a, t[u + 15], 16, 530742520),
                a = c(a, o, l, e, t[u + 2], 23, -995338651),
                e = h(e, a, o, l, t[u + 0], 6, -198630844),
                l = h(l, e, a, o, t[u + 7], 10, 1126891415),
                o = h(o, l, e, a, t[u + 14], 15, -1416354905),
                a = h(a, o, l, e, t[u + 5], 21, -57434055),
                e = h(e, a, o, l, t[u + 12], 6, 1700485571),
                l = h(l, e, a, o, t[u + 3], 10, -1894986606),
                o = h(o, l, e, a, t[u + 10], 15, -1051523),
                a = h(a, o, l, e, t[u + 1], 21, -2054922799),
                e = h(e, a, o, l, t[u + 8], 6, 1873313359),
                l = h(l, e, a, o, t[u + 15], 10, -30611744),
                o = h(o, l, e, a, t[u + 6], 15, -1560198380),
                a = h(a, o, l, e, t[u + 13], 21, 1309151649),
                e = h(e, a, o, l, t[u + 4], 6, -145523070),
                l = h(l, e, a, o, t[u + 11], 10, -1120210379),
                o = h(o, l, e, a, t[u + 2], 15, 718787259),
                a = h(a, o, l, e, t[u + 9], 21, -343485551),
                e = e + g >>> 0,
                a = a + m >>> 0,
                o = o + f >>> 0,
                l = l + p >>> 0;
            return i.endian([e, a, o, l])
        }, r._ff = function(e, i, t, n, s, r, a) {
            return e = e + (i & t | ~i & n) + (s >>> 0) + a, (e << r | e >>> 32 - r) + i
        }, r._gg = function(e, i, t, n, s, r, a) {
            return e = e + (i & n | t & ~n) + (s >>> 0) + a, (e << r | e >>> 32 - r) + i
        }, r._hh = function(e, i, t, n, s, r, a) {
            return e = e + (i ^ t ^ n) + (s >>> 0) + a, (e << r | e >>> 32 - r) + i
        }, r._ii = function(e, i, t, n, s, r, a) {
            return e = e + (t ^ (i | ~n)) + (s >>> 0) + a, (e << r | e >>> 32 - r) + i
        }, r._blocksize = 16, r._digestsize = 16
    }(),
    function() {
        var e = {
            version: "0.9.1",
            name: "PluginDetect",
            addPlugin: function(i, t) {
                i && e.isString(i) && t && e.isFunc(t.getVersion) && (i = i.replace(/\s/g, "").toLowerCase(), e.Plugins[i] = t, e.isDefined(t.getVersionDone) || (t.installed = null, t.version = null, t.version0 = null, t.getVersionDone = null, t.pluginName = i))
            },
            uniqueName: function() {
                return e.name + "998"
            },
            openTag: "<",
            hasOwnPROP: {}.constructor.prototype.hasOwnProperty,
            hasOwn: function(i, t) {
                var n;
                try {
                    n = e.hasOwnPROP.call(i, t)
                } catch (s) {}
                return !!n
            },
            rgx: {
                str: /string/i,
                num: /number/i,
                fun: /function/i,
                arr: /array/i
            },
            toString: {}.constructor.prototype.toString,
            isDefined: function(e) {
                return "undefined" != typeof e
            },
            isArray: function(i) {
                return e.rgx.arr.test(e.toString.call(i))
            },
            isString: function(i) {
                return e.rgx.str.test(e.toString.call(i))
            },
            isNum: function(i) {
                return e.rgx.num.test(e.toString.call(i))
            },
            isStrNum: function(i) {
                return e.isString(i) && /\d/.test(i)
            },
            isFunc: function(i) {
                return e.rgx.fun.test(e.toString.call(i))
            },
            getNumRegx: /[\d][\d\.\_,\-]*/,
            splitNumRegx: /[\.\_,\-]/g,
            getNum: function(i, t) {
                var n = e.isStrNum(i) ? (t && e.isString(t) ? RegExp(t) : e.getNumRegx).exec(i) : null;
                return n ? n[0] : null
            },
            compareNums: function(i, t, n) {
                var s = parseInt;
                if (e.isStrNum(i) && e.isStrNum(t)) {
                    if (e.isDefined(n) && n.compareNums) return n.compareNums(i, t);
                    for (i = i.split(e.splitNumRegx), t = t.split(e.splitNumRegx), n = 0; n < Math.min(i.length, t.length); n++) {
                        if (s(i[n], 10) > s(t[n], 10)) return 1;
                        if (s(i[n], 10) < s(t[n], 10)) return -1
                    }
                }
                return 0
            },
            formatNum: function(i, t) {
                var n, s;
                if (!e.isStrNum(i)) return null;
                for (e.isNum(t) || (t = 4), t--, s = i.replace(/\s/g, "").split(e.splitNumRegx).concat(["0", "0", "0", "0"]), n = 0; 4 > n; n++) /^(0+)(.+)$/.test(s[n]) && (s[n] = RegExp.$2), (n > t || !/\d/.test(s[n])) && (s[n] = "0");
                return s.slice(0, 4).join(",")
            },
            pd: {
                getPROP: function(e, i, t) {
                    try {
                        e && (t = e[i])
                    } catch (n) {
                        this.errObj = n
                    }
                    return t
                },
                findNavPlugin: function(i) {
                    if (i.dbug) return i.dbug;
                    var t = null;
                    if (window.navigator) {
                        var n, s, r, a = {
                                Find: e.isString(i.find) ? RegExp(i.find, "i") : i.find,
                                Find2: e.isString(i.find2) ? RegExp(i.find2, "i") : i.find2,
                                Avoid: i.avoid ? e.isString(i.avoid) ? RegExp(i.avoid, "i") : i.avoid : 0,
                                Num: i.num ? /\d/ : 0
                            },
                            o = navigator.mimeTypes,
                            l = navigator.plugins;
                        if (i.mimes && o)
                            for (r = e.isArray(i.mimes) ? [].concat(i.mimes) : e.isString(i.mimes) ? [i.mimes] : [], n = 0; n < r.length; n++) {
                                s = 0;
                                try {
                                    e.isString(r[n]) && /[^\s]/.test(r[n]) && (s = o[r[n]].enabledPlugin)
                                } catch (u) {}
                                if (s && (s = this.findNavPlugin_(s, a), s.obj && (t = s.obj), t && !e.dbug)) return t
                            }
                        if (i.plugins && l) {
                            for (i = e.isArray(i.plugins) ? [].concat(i.plugins) : e.isString(i.plugins) ? [i.plugins] : [], n = 0; n < i.length; n++) {
                                s = 0;
                                try {
                                    i[n] && e.isString(i[n]) && (s = l[i[n]])
                                } catch (d) {}
                                if (s && (s = this.findNavPlugin_(s, a), s.obj && (t = s.obj), t && !e.dbug)) return t
                            }
                            if (i = l.length, e.isNum(i))
                                for (n = 0; i > n; n++) {
                                    s = 0;
                                    try {
                                        s = l[n]
                                    } catch (c) {}
                                    if (s && (s = this.findNavPlugin_(s, a), s.obj && (t = s.obj), t && !e.dbug)) break
                                }
                        }
                    }
                    return t
                },
                findNavPlugin_: function(e, i) {
                    var t = e.description || "",
                        n = e.name || "",
                        s = {};
                    return (!i.Find.test(t) || i.Find2 && !i.Find2.test(n) || i.Num && !i.Num.test(RegExp.leftContext + RegExp.rightContext)) && (!i.Find.test(n) || i.Find2 && !i.Find2.test(t) || i.Num && !i.Num.test(RegExp.leftContext + RegExp.rightContext)) || i.Avoid && (i.Avoid.test(t) || i.Avoid.test(n)) || (s.obj = e), s
                },
                getVersionDelimiter: ",",
                findPlugin: function(i) {
                    var t = {
                        status: -3,
                        plugin: 0
                    };
                    return e.isString(i) ? 1 == i.length ? (this.getVersionDelimiter = i, t) : (i = i.toLowerCase().replace(/\s/g, ""), i = e.Plugins[i], i && i.getVersion ? (t.plugin = i, t.status = 1, t) : t) : t
                }
            },
            getPluginFileVersion: function(i, t, n, s) {
                var r, a = -1;
                if (!i) return t;
                if (s = s || "version", i[s] && (r = e.getNum(i[s] + "", n)), !r || !t) return t || r || null;
                for (i = e.formatNum(t).split(e.splitNumRegx), n = e.formatNum(r).split(e.splitNumRegx), s = 0; s < i.length; s++)
                    if (a > -1 && s > a && "0" != i[s] || n[s] != i[s] && (-1 == a && (a = s), "0" != i[s])) return t;
                return r
            },
            AXO: function() {
                var e;
                try {
                    e = new window.ActiveXObject
                } catch (i) {}
                return e ? null : window.ActiveXObject
            }(),
            getAXO: function(i) {
                var t = null;
                try {
                    t = new e.AXO(i)
                } catch (n) {
                    e.errObj = n
                }
                return t && (e.browser.ActiveXEnabled = !0), t
            },
            browser: {
                detectPlatform: function() {
                    var i, t = window.navigator ? navigator.platform || "" : "";
                    if (e.OS = 100, t) {
                        var n = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                        for (i = n.length - 2; i >= 0; i -= 2)
                            if (n[i] && RegExp(n[i], "i").test(t)) {
                                e.OS = n[i + 1];
                                break
                            }
                    }
                },
                detectIE: function() {
                    var i, t, n, s = document,
                        r = window.navigator ? navigator.userAgent || "" : "";
                    this.ActiveXEnabled = this.ActiveXFilteringEnabled = !1;
                    try {
                        this.ActiveXFilteringEnabled = !!window.external.msActiveXFilteringEnabled()
                    } catch (a) {}
                    for (n = ["WMPlayer.OCX", "ShockwaveFlash.ShockwaveFlash", "AgControl.AgControl"], t = "Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM TDCCtl.TDCCtl Shell.UIHelper HtmlDlgSafeHelper.HtmlDlgSafeHelper Scripting.Dictionary".split(" ").concat(n), i = 0; i < t.length && (!e.getAXO(t[i]) || e.dbug); i++);
                    if (this.ActiveXEnabled && this.ActiveXFilteringEnabled)
                        for (i = 0; i < n.length; i++)
                            if (e.getAXO(n[i])) {
                                this.ActiveXFilteringEnabled = !1;
                                break
                            }
                    i = s.documentMode;
                    try {
                        s.documentMode = ""
                    } catch (o) {}
                    this.isIE = (this.isIE = this.ActiveXEnabled) || e.isNum(s.documentMode) || !1;
                    try {
                        s.documentMode = i, s.documentMode || delete s.documentMode
                    } catch (l) {}
                    this.verIE = null, this.isIE && (this.verIE = (e.isNum(s.documentMode) && 7 <= s.documentMode ? s.documentMode : 0) || (/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i.test(r) ? parseFloat(RegExp.$1, 10) : 7))
                },
                detectNonIE: function() {
                    var i = 0,
                        t = window.navigator ? navigator : {},
                        n = this.isIE ? "" : t.userAgent || "",
                        s = t.vendor || "",
                        t = t.product || "";
                    this.isGecko = !i && /Gecko/i.test(t) && /Gecko\s*\/\s*\d/i.test(n), i = i || this.isGecko, this.verGecko = this.isGecko ? e.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(n) ? RegExp.$1 : "0.9") : null, this.isOpera = !i && /(OPR\s*\/|Opera\s*\/\s*\d.*\s*Version\s*\/|Opera\s*[\/]?)\s*(\d+[\.,\d]*)/i.test(n), i = i || this.isOpera, this.verOpera = this.isOpera ? e.formatNum(RegExp.$2) : null, this.isEdge = !i && /(Edge)\s*\/\s*(\d[\d\.]*)/i.test(n), i = i || this.isEdge, this.verEdgeHTML = this.isEdge ? e.formatNum(RegExp.$2) : null, this.isChrome = !i && /(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i.test(n), i = i || this.isChrome, this.verChrome = this.isChrome ? e.formatNum(RegExp.$2) : null, this.verSafari = (this.isSafari = !i && (/Apple/i.test(s) || !s) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(n)) && /Version\s*\/\s*(\d[\d\.]*)/i.test(n) ? e.formatNum(RegExp.$1) : null
                },
                init: function() {
                    this.detectPlatform(), this.detectIE(), this.detectNonIE()
                }
            },
            init: {
                hasRun: 0,
                library: function() {
                    window[e.name] = e;
                    var i = document;
                    e.win.init(), e.head = i.getElementsByTagName("head")[0] || i.getElementsByTagName("body")[0] || i.body || null, e.browser.init(), this.hasRun = 1
                }
            },
            ev: {
                addEvent: function(e, i, t) {
                    e && i && t && (e.addEventListener ? e.addEventListener(i, t, !1) : e.attachEvent ? e.attachEvent("on" + i, t) : e["on" + i] = this.concatFn(t, e["on" + i]))
                },
                removeEvent: function(e, i, t) {
                    e && i && t && (e.removeEventListener ? e.removeEventListener(i, t, !1) : e.detachEvent && e.detachEvent("on" + i, t))
                },
                concatFn: function(e, i) {
                    return function() {
                        e(), "function" == typeof i && i()
                    }
                },
                handler: function(e, i, t, n, s) {
                    return function() {
                        e(i, t, n, s)
                    }
                },
                handlerOnce: function(i, t, n, s) {
                    return function() {
                        var r = e.uniqueName();
                        i[r] || (i[r] = 1, i(t, n, s))
                    }
                },
                handlerWait: function(e, i, t, n, s) {
                    var r = this;
                    return function() {
                        r.setTimeout(r.handler(i, t, n, s), e)
                    }
                },
                setTimeout: function(i, t) {
                    (!e.win || !e.win.unload) && setTimeout(i, t)
                },
                fPush: function(i, t) {
                    e.isArray(t) && (e.isFunc(i) || e.isArray(i) && 0 < i.length && e.isFunc(i[0])) && t.push(i)
                },
                call0: function(i) {
                    var t = e.isArray(i) ? i.length : -1;
                    t > 0 && e.isFunc(i[0]) ? i[0](e, t > 1 ? i[1] : 0, t > 2 ? i[2] : 0, t > 3 ? i[3] : 0) : e.isFunc(i) && i(e)
                },
                callArray0: function(i) {
                    var t;
                    if (e.isArray(i))
                        for (; i.length;) t = i[0], i.splice(0, 1), (!e.win || !(e.win.unload && i !== e.win.unloadHndlrs)) && this.call0(t)
                },
                call: function(e) {
                    this.call0(e), this.ifDetectDoneCallHndlrs()
                },
                callArray: function(e) {
                    this.callArray0(e), this.ifDetectDoneCallHndlrs()
                },
                allDoneHndlrs: [],
                ifDetectDoneCallHndlrs: function() {
                    var i, t;
                    if (this.allDoneHndlrs.length && (!e.win || e.win.loaded && !e.win.loadPrvtHndlrs.length && !e.win.loadPblcHndlrs.length)) {
                        if (e.Plugins)
                            for (i in e.Plugins)
                                if (e.hasOwn(e.Plugins, i) && (t = e.Plugins[i]) && e.isFunc(t.getVersion) && (3 == t.OTF || t.DoneHndlrs && t.DoneHndlrs.length || t.BIHndlrs && t.BIHndlrs.length)) return;
                        this.callArray0(this.allDoneHndlrs)
                    }
                }
            },
            isMinVersion: function(i, t, n, s) {
                var r = e.pd.findPlugin(i),
                    i = -1;
                return 0 > r.status ? r.status : (r = r.plugin, t = e.formatNum(e.isNum(t) ? t.toString() : e.isStrNum(t) ? e.getNum(t) : "0"), 1 != r.getVersionDone && (r.getVersion(t, n, s), null === r.getVersionDone && (r.getVersionDone = 1)), null !== r.installed && (i = .5 >= r.installed ? r.installed : .7 == r.installed ? 1 : null === r.version ? 0 : 0 <= e.compareNums(r.version, t, r) ? 1 : -.1), i)
            },
            getVersion: function(i, t, n) {
                return i = e.pd.findPlugin(i), 0 > i.status ? null : (i = i.plugin, 1 != i.getVersionDone && (i.getVersion(null, t, n), null === i.getVersionDone && (i.getVersionDone = 1)), t = (t = i.version || i.version0) ? t.replace(e.splitNumRegx, e.pd.getVersionDelimiter) : t)
            },
            hasMimeType: function(i) {
                if (i && window.navigator && navigator.mimeTypes) {
                    var t, n, s, r = navigator.mimeTypes,
                        a = e.isArray(i) ? [].concat(i) : e.isString(i) ? [i] : [];
                    for (s = a.length, n = 0; s > n; n++) {
                        i = 0;
                        try {
                            e.isString(a[n]) && /[^\s]/.test(a[n]) && (i = r[a[n]])
                        } catch (o) {}
                        if ((t = i ? i.enabledPlugin : 0) && (t.name || t.description)) return i
                    }
                }
                return null
            },
            onDetectionDone: function(i, t, n, s) {
                var r = e.pd.findPlugin(i);
                return -3 == r.status ? -1 : (r = r.plugin, e.isArray(r.DoneHndlrs) || (r.DoneHndlrs = []), 1 != r.getVersionDone && (e.getVersion ? e.getVersion(i, n, s) : e.isMinVersion(i, "0", n, s)), -.5 != r.installed && .5 != r.installed ? (e.ev.call(t), 1) : (e.ev.fPush(t, r.DoneHndlrs), 0))
            },
            onWindowLoaded: function(i) {
                e.win.loaded ? e.ev.call(i) : e.ev.fPush(i, e.win.loadPblcHndlrs)
            },
            codebase: {
                isDisabled: function() {
                    return e.browser.ActiveXEnabled && e.isDefined(e.pd.getPROP(document.createElement("object"), "object")) ? 0 : 1
                },
                isMin: function(i, t, n) {
                    var s = 0;
                    if (!e.isStrNum(t) || this.isDisabled()) return s;
                    if (this.init(i), !n || this.isActiveXObject(i, e.formatNum(i.DIGITMIN.join(",")))) {
                        if (!i.L)
                            for (i.L = {}, n = 0; n < i.Lower.length; n++)
                                if (this.isActiveXObject(i, i.Lower[n])) {
                                    i.L = this.convert(i, i.Lower[n]);
                                    break
                                }
                        i.L.v && (n = this.convert(i, t, 1), 0 <= n.x && (s = (i.L.x == n.x ? this.isActiveXObject(i, n.v) : 0 >= e.compareNums(t, i.L.v)) ? 1 : -1))
                    }
                    return s
                },
                search: function(i, t) {
                    var n, s = this,
                        r = 0;
                    if (n = i.searchHasRun || s.isDisabled() ? 1 : 0, i.searchHasRun = 1, n) return i.version || null;
                    if (s.init(i), !t || s.isActiveXObject(i, e.formatNum(i.DIGITMIN.join(",")))) {
                        var a, o, l, u = i.DIGITMAX,
                            d = [0, 0, 0, 0],
                            c = [0, 0, 0, 0],
                            h = function(e, t) {
                                var n = [].concat(d);
                                return n[e] = t, (n = s.isActiveXObject(i, n.join(","))) ? (r = 1, d[e] = t) : c[e] = t, n
                            };
                        for (n = 0; n < c.length; n++) {
                            for (d[n] = Math.floor(i.DIGITMIN[n]) || 0, o = d.join(","), l = d.slice(0, n).concat([99999999, 99999999, 99999999, 99999999]).slice(0, d.length).join(","), a = 0; a < u.length; a++) e.isArray(u[a]) && (u[a].push(0), u[a][n] > c[n] && 0 <= e.compareNums(l, i.Lower[a]) && 0 > e.compareNums(o, i.Upper[a]) && (c[n] = Math.floor(u[a][n])));
                            for (a = 0; 30 > a; a++) {
                                if (16 >= c[n] - d[n]) {
                                    for (a = c[n]; a >= d[n] + (n ? 1 : 0) && !h(n, a); a--);
                                    break
                                }
                                h(n, Math.round((c[n] + d[n]) / 2))
                            }
                            if (!r) break;
                            c[n] = d[n]
                        }
                        r && (i.version = s.convert(i, d.join(",")).v)
                    }
                    return i.version || null
                },
                emptyNode: function(e) {
                    try {
                        e.innerHTML = ""
                    } catch (i) {}
                },
                HTML: [],
                len: 0,
                onUnload: function(e, i) {
                    var t, n, s = i.HTML;
                    for (t = 0; t < s.length; t++)(n = s[t]) && (s[t] = 0, i.emptyNode(n.span()), n.span = 0, n.spanObj = 0);
                    i.iframe = 0
                },
                init: function(i) {
                    if (!this.iframe) {
                        var t, n = e.DOM;
                        this.iframe = t = n.iframe.insert(0, "$.codebase{ }"), n.iframe.write(t, " "), n.iframe.close(t)
                    }
                    if (!i.init)
                        for (i.init = 1, e.ev.fPush([this.onUnload, this], e.win.unloadHndlrs), i.tagA = '<object width="1" height="1" style="display:none;" codebase="#version=', n = i.classID || i.$$.classID || "", i.tagB = '" ' + (/clsid\s*:/i.test(n) ? 'classid="' : 'type="') + n + '">' + (i.ParamTags ? i.ParamTags : "") + e.openTag + "/object>", n = 0; n < i.Lower.length; n++) i.Lower[n] = e.formatNum(i.Lower[n]), i.Upper[n] = e.formatNum(i.Upper[n])
                },
                isActiveXObject: function(i, t) {
                    var n = 0,
                        s = (e.DOM.iframe.doc(this.iframe) || document).createElement("span");
                    return i.min && 0 >= e.compareNums(t, i.min) ? 1 : i.max && 0 <= e.compareNums(t, i.max) ? 0 : (s.innerHTML = i.tagA + t + i.tagB, e.pd.getPROP(s.firstChild, "object") && (n = 1), n ? (i.min = t, this.HTML.push({
                        spanObj: s,
                        span: this.span
                    })) : (i.max = t, s.innerHTML = ""), n)
                },
                span: function() {
                    return this.spanObj
                },
                convert_: function(i, t, n, s) {
                    return (i = i.convert[t]) ? e.isFunc(i) ? e.formatNum(i(n.split(e.splitNumRegx), s).join(",")) : n : i
                },
                convert: function(i, t, n) {
                    var s, r, a, t = e.formatNum(t);
                    if (r = {
                            v: t,
                            x: -1
                        }, t)
                        for (s = 0; s < i.Lower.length; s++)
                            if ((a = this.convert_(i, s, i.Lower[s])) && 0 <= e.compareNums(t, n ? a : i.Lower[s]) && (!s || 0 > e.compareNums(t, n ? this.convert_(i, s, i.Upper[s]) : i.Upper[s]))) {
                                r.v = this.convert_(i, s, t, n), r.x = s;
                                break
                            }
                    return r
                },
                z: 0
            },
            win: {
                disable: function() {
                    this.cancel = !0
                },
                cancel: !1,
                loaded: !1,
                unload: !1,
                hasRun: 0,
                init: function() {
                    this.hasRun || (this.hasRun = 1, /complete/i.test(document.readyState || "") ? this.loaded = !0 : e.ev.addEvent(window, "load", this.onLoad), e.ev.addEvent(window, "unload", this.onUnload))
                },
                loadPrvtHndlrs: [],
                loadPblcHndlrs: [],
                unloadHndlrs: [],
                onUnload: function() {
                    var i = e.win;
                    i.unload || (i.unload = !0, e.ev.removeEvent(window, "load", i.onLoad), e.ev.removeEvent(window, "unload", i.onUnload), e.ev.callArray(i.unloadHndlrs))
                },
                onLoad: function() {
                    var i = e.win;
                    !i.loaded && !i.unload && !i.cancel && (i.loaded = !0, e.ev.callArray(i.loadPrvtHndlrs), e.ev.callArray(i.loadPblcHndlrs))
                }
            },
            DOM: {
                isEnabled: {
                    objectTag: function() {
                        var i = e.browser,
                            t = i.isIE ? 0 : 1;
                        return i.ActiveXEnabled && (t = 1), !!t
                    },
                    objectTagUsingActiveX: function() {
                        var i = 0;
                        return e.browser.ActiveXEnabled && (i = 1), !!i
                    },
                    objectProperty: function(i) {
                        return i && i.tagName && e.browser.isIE ? /applet/i.test(i.tagName) ? !this.objectTag() || e.isDefined(e.pd.getPROP(document.createElement("object"), "object")) ? 1 : 0 : e.isDefined(e.pd.getPROP(document.createElement(i.tagName), "object")) ? 1 : 0 : 0
                    }
                },
                HTML: [],
                div: null,
                divID: "plugindetect",
                divWidth: 500,
                getDiv: function() {
                    return this.div || document.getElementById(this.divID) || null
                },
                initDiv: function() {
                    var i;
                    this.div || ((i = this.getDiv()) ? this.div = i : (this.div = document.createElement("div"), this.div.id = this.divID, this.setStyle(this.div, this.getStyle.div()), this.insertDivInBody(this.div)), e.ev.fPush([this.onUnload, this], e.win.unloadHndlrs))
                },
                pluginSize: 1,
                iframeWidth: 40,
                iframeHeight: 10,
                altHTML: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                emptyNode: function(i) {
                    if (i && /div|span/i.test(i.tagName || "")) {
                        e.browser.isIE && this.setStyle(i, ["display", "none"]);
                        try {
                            i.innerHTML = ""
                        } catch (t) {}
                    }
                },
                removeNode: function(e) {
                    try {
                        e && e.parentNode && e.parentNode.removeChild(e)
                    } catch (i) {}
                },
                onUnload: function(e, i) {
                    var t, n, s;
                    if (t = i.HTML, n = t.length)
                        for (n -= 1; n >= 0; n--)(s = t[n]) && (t[n] = 0, i.emptyNode(s.span()), i.removeNode(s.span()), s.span = 0, s.spanObj = 0, s.doc = 0, s.objectProperty = 0);
                    t = i.getDiv(), i.emptyNode(t), i.removeNode(t), i.div = 0
                },
                span: function() {
                    return this.spanObj || (this.spanObj = this.doc.getElementById(this.spanId)), this.spanObj || null
                },
                width: function() {
                    var i, t = this.span();
                    return i = t && e.isNum(t.scrollWidth) ? t.scrollWidth : -1, t = t && e.isNum(t.offsetWidth) ? t.offsetWidth : -1, t > 0 ? t : i > 0 ? i : Math.max(t, i)
                },
                obj: function() {
                    var e = this.span();
                    return e ? e.firstChild || null : null
                },
                readyState: function() {
                    return e.browser.isIE && e.isDefined(e.pd.getPROP(this.span(), "readyState")) ? e.pd.getPROP(this.obj(), "readyState") : e.UNDEFINED
                },
                objectProperty: function() {
                    var i;
                    return this.DOM.isEnabled.objectProperty(this) && (i = e.pd.getPROP(this.obj(), "object")), i
                },
                onLoadHdlr: function(e, i) {
                    i.loaded = 1
                },
                getTagStatus: function(i, t, n, s, r, a, o) {
                    if (!i || !i.span()) return -2;
                    var r = i.width(),
                        a = i.obj() ? 1 : 0,
                        l = i.readyState(),
                        u = i.objectProperty();
                    if (u) return 1.5;
                    var d = /clsid\s*\:/i,
                        c = n && d.test(n.outerHTML || "") ? n : s && d.test(s.outerHTML || "") ? s : 0,
                        n = n && !d.test(n.outerHTML || "") ? n : s && !d.test(s.outerHTML || "") ? s : 0,
                        n = i && d.test(i.outerHTML || "") ? c : n;
                    return t && t.span() && n && n.span() ? (s = n.width(), d = t.width(), c = n.readyState(), 0 > r || 0 > s || d <= this.pluginSize ? 0 : (o && !i.pi && e.isDefined(u) && e.browser.isIE && i.tagName == n.tagName && i.time <= n.time && r === s && 0 === l && 0 !== c && (i.pi = 1), d > s || !i.loaded || !t.loaded || !n.loaded ? i.pi ? -.1 : 0 : r == d || !a || r != this.pluginSize || !a || e.isNum(l) && 4 !== l ? i.pi ? -.5 : -1 : 1)) : -2
                },
                setStyle: function(e, i) {
                    var t, n = e.style;
                    if (n && i)
                        for (t = 0; t < i.length; t += 2) try {
                            n[i[t]] = i[t + 1]
                        } catch (s) {}
                },
                getStyle: {
                    iframe: function() {
                        return this.span()
                    },
                    span: function(i) {
                        var t = e.DOM;
                        return i ? this.plugin() : [].concat(this.Default).concat(["display", "inline", "fontSize", t.pluginSize + 3 + "px", "lineHeight", t.pluginSize + 3 + "px"])
                    },
                    div: function() {
                        var i = e.DOM;
                        return [].concat(this.Default).concat(["display", "block", "width", i.divWidth + "px", "height", i.pluginSize + 3 + "px", "fontSize", i.pluginSize + 3 + "px", "lineHeight", i.pluginSize + 3 + "px", "position", "absolute", "right", "9999px", "top", "-9999px"])
                    },
                    plugin: function(i) {
                        var t = e.DOM;
                        return "background-color:transparent;background-image:none;vertical-align:baseline;outline-style:none;border-style:none;padding:0px;margin:0px;visibility:" + (i ? "hidden;" : "visible;") + "display:inline;font-size:" + (t.pluginSize + 3) + "px;line-height:" + (t.pluginSize + 3) + "px;"
                    },
                    Default: "backgroundColor transparent backgroundImage none verticalAlign baseline outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ")
                },
                insertDivInBody: function(e, i) {
                    var t = null,
                        n = i ? window.top.document : window.document,
                        s = n.getElementsByTagName("body")[0] || n.body;
                    (s = n.getElementsByTagName("body")[0] || n.body) && (s.insertBefore(e, s.firstChild), t && s.removeChild(t))
                },
                iframe: {
                    onLoad: function(i) {
                        e.ev.callArray(i)
                    },
                    insert: function(i, t) {
                        var n, s = e.DOM,
                            r = document.createElement("iframe");
                        s.setStyle(r, s.getStyle.iframe()), r.width = s.iframeWidth, r.height = s.iframeHeight, s.initDiv(), s.getDiv().appendChild(r);
                        try {
                            this.doc(r).open()
                        } catch (a) {}
                        return r[e.uniqueName()] = [],
                            s = e.ev.handlerOnce(e.isNum(i) && i > 0 ? e.ev.handlerWait(i, this.onLoad, r[e.uniqueName()], t) : e.ev.handler(this.onLoad, r[e.uniqueName()], t)), e.ev.addEvent(r, "load", s), r.onload || (r.onload = s), n = this.win(r), e.ev.addEvent(n, "load", s), n && !n.onload && (n.onload = s), r
                    },
                    addHandler: function(i, t) {
                        i && e.ev.fPush(t, i[e.uniqueName()])
                    },
                    close: function(e) {
                        try {
                            this.doc(e).close()
                        } catch (i) {}
                    },
                    write: function(e, i) {
                        var t, n = this.doc(e),
                            s = -1;
                        try {
                            t = (new Date).getTime(), n.write(i), s = (new Date).getTime() - t
                        } catch (r) {}
                        return s
                    },
                    win: function(e) {
                        try {
                            return e.contentWindow
                        } catch (i) {}
                        return null
                    },
                    doc: function(e) {
                        var i;
                        try {
                            i = e.contentWindow.document
                        } catch (t) {}
                        try {
                            i || (i = e.contentDocument)
                        } catch (n) {}
                        return i || null
                    }
                },
                insert: function(i, t, n, s, r, a, o) {
                    var l;
                    if (o || (this.initDiv(), o = this.getDiv()), o && (/div/i.test(o.tagName) && (l = o.ownerDocument), /iframe/i.test(o.tagName) && (l = this.iframe.doc(o))), l && l.createElement || (l = document), e.isDefined(s) || (s = ""), e.isString(i) && /[^\s]/.test(i)) {
                        for (var i = i.toLowerCase().replace(/\s/g, ""), r = e.openTag + i + " ", r = r + ('style="' + this.getStyle.plugin(a) + '" '), u = 1, d = 1, a = 0; a < t.length; a += 2) /[^\s]/.test(t[a + 1]) && (r += t[a] + '="' + t[a + 1] + '" '), /width/i.test(t[a]) && (u = 0), /height/i.test(t[a]) && (d = 0);
                        if (r += (u ? 'width="' + this.pluginSize + '" ' : "") + (d ? 'height="' + this.pluginSize + '" ' : ""), "embed" == i || "img" == i) r += " />";
                        else {
                            for (r += ">", a = 0; a < n.length; a += 2) /[^\s]/.test(n[a + 1]) && (r += e.openTag + 'param name="' + n[a] + '" value="' + n[a + 1] + '" />');
                            r += s + e.openTag + "/" + i + ">"
                        }
                    } else i = "", r = s;
                    if (i = {
                            spanId: "",
                            spanObj: null,
                            span: this.span,
                            loaded: null,
                            tagName: i,
                            outerHTML: r,
                            DOM: this,
                            time: (new Date).getTime(),
                            insertDomDelay: -1,
                            width: this.width,
                            obj: this.obj,
                            readyState: this.readyState,
                            objectProperty: this.objectProperty,
                            doc: l
                        }, o && o.parentNode)
                        if (/iframe/i.test(o.tagName)) this.iframe.addHandler(o, [this.onLoadHdlr, i]), i.loaded = 0, i.spanId = e.name + "Span" + this.HTML.length, l = '<span id="' + i.spanId + '" style="' + this.getStyle.span(1) + '">' + r + "</span>", i.time = (new Date).getTime(), o = this.iframe.write(o, l), o >= 0 && (i.insertDomDelay = o);
                        else if (/div/i.test(o.tagName)) {
                        l = l.createElement("span"), this.setStyle(l, this.getStyle.span()), o.appendChild(l);
                        try {
                            i.time = (new Date).getTime(), l.innerHTML = r, i.insertDomDelay = (new Date).getTime() - i.time
                        } catch (c) {}
                        i.spanObj = l
                    }
                    return this.HTML.push(i), i
                }
            },
            file: {
                any: "fileStorageAny999",
                valid: "fileStorageValid999",
                save: function(i, t, n) {
                    i && e.isDefined(n) && (i[this.any] || (i[this.any] = []), i[this.valid] || (i[this.valid] = []), i[this.any].push(n), (t = this.split(t, n)) && i[this.valid].push(t))
                },
                getValidLength: function(e) {
                    return e && e[this.valid] ? e[this.valid].length : 0
                },
                getAnyLength: function(e) {
                    return e && e[this.any] ? e[this.any].length : 0
                },
                getValid: function(e, i) {
                    return e && e[this.valid] ? this.get(e[this.valid], i) : null
                },
                getAny: function(e, i) {
                    return e && e[this.any] ? this.get(e[this.any], i) : null
                },
                get: function(i, t) {
                    var n = i.length - 1,
                        s = e.isNum(t) ? t : n;
                    return 0 > s || s > n ? null : i[s]
                },
                split: function(i, t) {
                    var n, s = null,
                        i = i ? i.replace(".", "\\.") : "";
                    return n = RegExp("^(.*[^\\/])(" + i + "\\s*)$"), e.isString(t) && n.test(t) && (n = RegExp.$1.split("/"), s = {
                        name: n[n.length - 1],
                        ext: RegExp.$2,
                        full: t
                    }, n[n.length - 1] = "", s.path = n.join("/")), s
                }
            },
            Plugins: {}
        };
        e.init.library();
        var i = {
            setPluginStatus: function(i, t, n) {
                this.installed = (this.version = t ? e.formatNum(t, 3) : null) ? 1 : n ? n > 0 ? .7 : -.1 : i ? 0 : -1, this.getVersionDone = .7 == this.installed || -.1 == this.installed || 0 === this.nav.done ? 0 : 1
            },
            getVersion: function(i, t) {
                var n, s = null,
                    r = 0,
                    t = e.browser.isIE ? 0 : t;
                r && !e.dbug || !this.nav.query(t).installed || (r = 1), s && !e.dbug || !this.nav.query(t).version || (s = this.nav.version), (n = s ? 0 : this.codebase.isMin(i)) ? this.setPluginStatus(0, 0, n) : ((!s || e.dbug) && (n = this.codebase.search()) && (r = 1, s = n), r && !e.dbug || !this.axo.query().installed || (r = 1), s && !e.dbug || !this.axo.query().version || (s = this.axo.version), this.setPluginStatus(r, s))
            },
            nav: {
                done: null,
                installed: 0,
                version: null,
                result: [0, 0],
                mimeType: "video/quicktime application/x-quicktimeplayer image/x-macpaint image/x-quicktime application/x-rtsp application/x-sdp application/sdp audio/vnd.qcelp video/sd-video audio/mpeg video/mp4 video/3gpp2 application/x-mpeg audio/x-m4b audio/x-aac video/flc".split(" "),
                find: "QuickTime.*Plug-?in",
                find2: "QuickTime.*Plug-?in",
                find3filename: "QuickTime|QT",
                avoid: "Totem|VLC|RealPlayer|Helix|MPlayer|Windows\\s*Media\\s*Player",
                plugins: "QuickTime Plug-in",
                detect: function(i) {
                    var t, n = {
                        installed: 0,
                        version: null,
                        plugin: null
                    };
                    return (i = e.pd.findNavPlugin({
                        find: this.find,
                        find2: i ? 0 : this.find2,
                        avoid: i ? 0 : this.avoid,
                        mimes: this.mimeType,
                        plugins: this.plugins
                    })) && (n.plugin = i, n.installed = 1, t = RegExp(this.find, "i"), i.name && t.test(i.name + "") && (n.version = e.getNum(i.name + ""))), n
                },
                query: function(i) {
                    var t, n, i = i ? 1 : 0;
                    if (null === this.done) {
                        if (e.hasMimeType(this.mimeType)) {
                            n = this.detect(1), n.installed && (t = this.detect(0), this.result = [t, t.installed ? t : n]);
                            var s = this.result[0],
                                r = this.result[1];
                            t = RegExp(this.avoid, "i"), n = RegExp(this.find3filename, "i"), s = s ? s.plugin : 0, r = r ? r.plugin : 0, s || !r || !r.name || r.description && !/^[\s]*$/.test(r.description + "") || t.test(r.name + "") || (s = (r.filename || "") + "", /^.*[\\\/]([^\\\/]*)$/.test(s) && (s = RegExp.$1), s && n.test(s) && !t.test(s) && (this.result[0] = this.result[1]))
                        }
                        this.done = this.result[0] === this.result[1] ? 1 : 0
                    }
                    return this.result[i] && (this.installed = this.result[i].installed, this.version = this.result[i].version), this
                }
            },
            codebase: {
                classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                isMin: function(t) {
                    var n = 0;
                    return this.$$ = i, e.isStrNum(t) && (t = t.split(e.splitNumRegx), 3 < t.length && 0 < parseInt(t[3], 10) && (t[3] = "9999"), t = t.join(","), n = e.codebase.isMin(this, t)), n
                },
                search: function() {
                    return this.$$ = i, e.codebase.search(this)
                },
                DIGITMAX: [
                    [12, 11, 11],
                    [7, 60],
                    [7, 11, 11], 0, [7, 11, 11]
                ],
                DIGITMIN: [5, 0, 0, 0],
                Upper: ["999", "7,60", "7,50", "7,6", "7,5"],
                Lower: ["7,60", "7,50", "7,6", "7,5", "0"],
                convert: [1, function(e, i) {
                    return i ? [e[0], e[1] + e[2], e[3], "0"] : [e[0], e[1].charAt(0), e[1].charAt(1), e[2]]
                }, 1, 0, 1]
            },
            axo: {
                hasRun: 0,
                installed: 0,
                version: null,
                progID: ["QuickTimeCheckObject.QuickTimeCheck", "QuickTimeCheckObject.QuickTimeCheck.1"],
                progID0: "QuickTime.QuickTime",
                query: function() {
                    var i, t;
                    if (t = this.hasRun || !e.browser.ActiveXEnabled, this.hasRun = 1, t) return this;
                    for (t = 0; t < this.progID.length && (!(i = e.getAXO(this.progID[t])) || (this.installed = 1, !(i = e.pd.getPROP(i, "QuickTimeVersion")) || !i.toString || (i = i.toString(16), this.version = parseInt(i.charAt(0) || "0", 16) + "." + parseInt(i.charAt(1) || "0", 16) + "." + parseInt(i.charAt(2) || "0", 16), e.dbug))); t++);
                    return this
                }
            }
        };
        e.addPlugin("quicktime", i);
        var t = {
            mimeType: "application/x-shockwave-flash",
            setPluginStatus: function(i, t, n) {
                this.installed = t ? 1 : i ? 0 : -1, this.precision = n, this.version = e.formatNum(t), this.getVersionDone = (i = (i = -1 == this.installed || this.instance.version) || this.axo.version) ? 1 : 0
            },
            getPrecision: function(i) {
                if (e.isString(i)) {
                    var t, n = ["\\d+", "\\d+", "\\d+", "\\d+"];
                    for (t = 4; t > 0; t--)
                        if (RegExp(n.slice(0, t).join("[\\._,]")).test(i)) return t
                }
                return 0
            },
            getVersion: function(i, t) {
                var n = null,
                    s = 0,
                    r = 0;
                s && !e.dbug || !this.navPlugin.query().installed || (s = 1), n && !e.dbug || !this.navPlugin.query().version || (n = this.navPlugin.version, r = this.navPlugin.precision), s && !e.dbug || !this.axo.query().installed || (s = 1), n && !e.dbug || !this.axo.query().version || (n = this.axo.version, r = this.axo.precision), (!s && !n || t || e.dbug) && this.instance.query().version && (s = 1, n = this.instance.version, r = this.instance.precision), this.setPluginStatus(s, n, r)
            },
            navPlugin: {
                hasRun: 0,
                installed: 0,
                precision: 0,
                version: null,
                getNum: function(e) {
                    return e && (e = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(e)) ? e[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null
                },
                query: function() {
                    var i, n, s = t;
                    return n = this.hasRun || !e.hasMimeType(s.mimeType), this.hasRun = 1, n ? this : ((n = e.pd.findNavPlugin({
                        find: "Shockwave.*Flash",
                        mimes: s.mimeType,
                        plugins: ["Shockwave Flash"]
                    })) && (this.installed = 1, n.description && (i = this.getNum(n.description))), i && (i = e.getPluginFileVersion(n, i)), i && /(\d+[_,]\d+[_,]\d+[_,]\d+)[^\d]+$/.test(n.filename) && (i = e.getPluginFileVersion({
                        filename: RegExp.$1,
                        name: n.name,
                        description: n.description
                    }, i, 0, "filename")), i && (this.version = i, this.precision = s.getPrecision(i)), this)
                }
            },
            axo: {
                hasRun: 0,
                installed: 0,
                precision: 0,
                version: null,
                progID: "ShockwaveFlash.ShockwaveFlash",
                classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                query: function() {
                    var i, n, s;
                    if (i = this.hasRun, this.hasRun = 1, i) return this;
                    for (n = 0; 10 > n; n++)
                        if (s = e.getAXO(this.progID + (n ? "." + n : ""))) {
                            this.installed = 1, i = 0;
                            try {
                                i = e.getNum(s.GetVariable("$version") + "")
                            } catch (r) {}
                            if (i && (this.version = i, this.precision = t.getPrecision(i), !e.dbug)) break
                        }
                    return this
                }
            },
            instance: {
                hasRun: 0,
                precision: 0,
                version: null,
                HTML: null,
                HTML2: null,
                isEnabled: function() {
                    var i = t,
                        n = 1;
                    return (this.hasRun || e.DOM.isEnabled.objectTagUsingActiveX() || !e.DOM.isEnabled.objectTag() || !e.hasMimeType(i.mimeType)) && (n = 0), n
                },
                query: function() {
                    var i, n = t,
                        s = this.isEnabled();
                    if (this.hasRun = 1, s) {
                        this.HTML = e.DOM.insert("object", ["type", n.mimeType], ["play", "false", "menu", "false"], "", n);
                        try {
                            i = this.HTML.obj().GetVariable("$version") + "", this.version = e.getNum(i)
                        } catch (r) {}
                        if (!this.version || e.dbug) {
                            this.HTML2 = e.DOM.insert("embed", ["type", n.mimeType, "play", "false", "menu", "false"], [], "", n);
                            try {
                                i = this.HTML2.obj().GetVariable("$version") + "", this.version = e.getNum(i)
                            } catch (a) {}
                        }
                        this.precision = n.getPrecision(this.version)
                    }
                    return this
                }
            }
        };
        e.addPlugin("flash", t), e.addPlugin("shockwave", {
            getVersion: function() {
                var i, t = null;
                i && !e.dbug || !this.nav.query().installed || (i = 1), t && !e.dbug || !this.nav.query().version || (t = this.nav.version), i && !e.dbug || !this.axo.query().installed || (i = 1), t && !e.dbug || !this.axo.query().version || (t = this.axo.version), this.installed = t ? 1 : i ? 0 : -1, this.version = e.formatNum(t)
            },
            nav: {
                hasRun: 0,
                installed: 0,
                version: null,
                mimeType: "application/x-director",
                query: function() {
                    var i, t;
                    return t = this.hasRun || !e.hasMimeType(this.mimeType), this.hasRun = 1, t ? this : ((t = e.pd.findNavPlugin({
                        find: "Shockwave\\s*for\\s*Director",
                        mimes: this.mimeType,
                        plugins: "Shockwave for Director"
                    })) && t.description && (i = e.getNum(t.description + "")), i && (i = e.getPluginFileVersion(t, i)), t && (this.installed = 1), i && (this.version = i), this)
                }
            },
            axo: {
                hasRun: 0,
                installed: null,
                version: null,
                progID: "SWCtl.SWCtl SWCtl.SWCtl.1 SWCtl.SWCtl.7 SWCtl.SWCtl.8 SWCtl.SWCtl.11 SWCtl.SWCtl.12".split(" "),
                classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                query: function() {
                    var i, t, n, s;
                    if (t = !this.hasRun, this.hasRun = 1, t)
                        for (t = 0; t < this.progID.length; t++)
                            if (i = e.getAXO(this.progID[t])) {
                                this.installed = 1, s = "";
                                try {
                                    s = i.ShockwaveVersion("") + ""
                                } catch (r) {}
                                if (/(\d[\d\.\,]*)(?:\s*r\s*(\d+))?/i.test(s) && (i = RegExp.$2, n = e.formatNum(RegExp.$1), i && (n = n.split(e.splitNumRegx), n[3] = i, n = n.join(","))), n && (this.version = n, !e.dbug)) break
                            }
                    return this
                }
            }
        });
        var n = {
            setPluginStatus: function(i, t) {
                i && (this.version = e.formatNum(i)), this.installed = this.version ? 1 : t ? 0 : -1, this.getVersionDone = 0 === this.installed ? 0 : 1
            },
            getVersion: function(i, t) {
                var n, s = null;
                n && !e.dbug || !this.nav.query().installed || (n = 1), n && !e.dbug || !this.axo.query().installed || (n = 1), s && !e.dbug || !this.axo.query().version || (s = this.axo.version), (!n && !s || t || e.dbug) && this.FirefoxPlugin.query().version && (n = 1, s = this.FirefoxPlugin.version), this.setPluginStatus(s, n)
            },
            mimeType: "application/x-ms-wmp application/asx application/x-mplayer2 video/x-ms-asf video/x-ms-wm video/x-ms-asf-plugin".split(" "),
            find: ["Microsoft.*Windows\\s*Media\\s*Player.*Firefox.*Plug-?in", "Windows\\s*Media\\s*Player\\s*Plug-?in\\s*Dynamic\\s*Link\\s*Library", "Flip4Mac.*Windows\\s*Media.*Plug-?in|Flip4Mac.*WMV.*Plug-?in"],
            avoid: "Totem|VLC|RealPlayer|Helix",
            plugins: ["Microsoft" + String.fromCharCode(174) + " Windows Media Player Firefox Plugin", "Windows Media Player Plug-in Dynamic Link Library"],
            nav: {
                hasRun: 0,
                installed: 0,
                query: function() {
                    var i = n,
                        t = this.hasRun || !e.hasMimeType(i.mimeType);
                    return this.hasRun = 1, t ? this : (e.pd.findNavPlugin({
                        find: i.find.join("|"),
                        avoid: i.avoid,
                        mimes: i.mimeType,
                        plugins: i.plugins
                    }) && (this.installed = 1), this)
                }
            },
            FirefoxPlugin: {
                hasRun: 0,
                version: null,
                isDisabled: function() {
                    var i = n,
                        t = e.browser;
                    return this.hasRun || t.isGecko && 0 > e.compareNums(t.verGecko, e.formatNum("1.8")) || t.isOpera && 0 > e.compareNums(t.verOpera, e.formatNum("10")) || e.DOM.isEnabled.objectTagUsingActiveX() || !e.hasMimeType(i.mimeType) || !e.pd.findNavPlugin({
                        find: i.find[0],
                        avoid: i.avoid,
                        mimes: i.mimeType,
                        plugins: i.plugins[0]
                    }) ? 1 : 0
                },
                query: function() {
                    var i = n,
                        t = this.isDisabled();
                    return this.hasRun = 1, t ? this : ((i = e.pd.getPROP(e.DOM.insert("object", ["type", e.hasMimeType(i.mimeType).type, "data", ""], ["src", ""], "", i).obj(), "versionInfo")) && (this.version = e.getNum(i)), this)
                }
            },
            axo: {
                hasRun: 0,
                installed: null,
                version: null,
                progID: ["WMPlayer.OCX", "WMPlayer.OCX.7"],
                classID: "clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
                query: function() {
                    var i, t;
                    if (t = !this.hasRun, this.hasRun = 1, t)
                        for (t = 0; t < this.progID.length && (!(i = e.getAXO(this.progID[t])) || (this.installed = 1, (i = e.pd.getPROP(i, "versionInfo", 0)) && (i = e.getNum(i)), !i || (this.version = i, e.dbug))); t++);
                    return this
                }
            }
        };
        e.addPlugin("windowsmediaplayer", n), e.addPlugin("silverlight", {
            getVersion: function() {
                var i = null,
                    t = 0;
                t && !e.dbug || !this.nav.query().installed || (t = 1), i && !e.dbug || !this.nav.query().version || (i = this.nav.version), t && !e.dbug || !this.axo.query().installed || (t = 1), i && !e.dbug || !this.axo.query().version || (i = this.axo.version), this.version = e.formatNum(i), this.installed = i ? 1 : t ? 0 : -1
            },
            nav: {
                hasRun: 0,
                installed: 0,
                version: null,
                mimeType: ["application/x-silverlight", "application/x-silverlight-2"],
                query: function() {
                    var i, t;
                    return t = this.hasRun || !e.hasMimeType(this.mimeType), this.hasRun = 1, t ? this : ((t = e.pd.findNavPlugin({
                        find: "Silverlight.*Plug-?in",
                        mimes: this.mimeType,
                        plugins: "Silverlight Plug-In"
                    })) && (this.installed = 1), t && t.description && (i = e.formatNum(e.getNum(t.description + ""))), i && (i = i.split(e.splitNumRegx), 2 > parseInt(i[0], 10) && 30226 <= parseInt(i[2], 10) && (i[0] = "2"), i = i.join(",")), i && (this.version = i), this)
                }
            },
            axo: {
                hasRun: 0,
                installed: 0,
                version: null,
                progID: "AgControl.AgControl",
                maxdigit: [20, 10, 10, 100, 100, 10],
                mindigit: [0, 0, 0, 0, 0, 0],
                IsVersionSupported: function(i, t) {
                    try {
                        return this.testVersion ? 0 <= e.compareNums(e.formatNum(this.testVersion.join(",")), e.formatNum(t.join(","))) : i.IsVersionSupported(this.format(t))
                    } catch (n) {}
                    return 0
                },
                format: function(e) {
                    return e[0] + "." + e[1] + "." + e[2] + this.make2digits(e[3]) + this.make2digits(e[4]) + "." + e[5]
                },
                make2digits: function(e) {
                    return (10 > e ? "0" : "") + e
                },
                query: function() {
                    var i, t;
                    if (i = this.hasRun, this.hasRun = 1, i) return this;
                    if ((t = e.getAXO(this.progID)) && (this.installed = 1), t && this.IsVersionSupported(t, this.mindigit)) {
                        var n, s = [].concat(this.mindigit),
                            r = 0;
                        for (i = 0; i < this.maxdigit.length; i++) {
                            for (n = 0; 1 < this.maxdigit[i] - this.mindigit[i] && 20 > n;) n++, r++, s[i] = Math.round((this.maxdigit[i] + this.mindigit[i]) / 2), this.IsVersionSupported(t, s) ? this.mindigit[i] = s[i] : this.maxdigit[i] = s[i];
                            s[i] = this.mindigit[i]
                        }
                        this.version = this.format(s)
                    }
                    return this
                }
            }
        });
        var s = {
            compareNums: function(i, t) {
                var n, s, r, a, o, l = i.split(e.splitNumRegx),
                    u = t.split(e.splitNumRegx);
                for (n = 0; n < Math.min(l.length, u.length); n++) {
                    if (/([\d]+)([a-z]?)/.test(l[n]), s = parseInt(RegExp.$1, 10), a = 2 == n && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : -1, /([\d]+)([a-z]?)/.test(u[n]), r = parseInt(RegExp.$1, 10), o = 2 == n && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : -1, s != r) return s > r ? 1 : -1;
                    if (2 == n && a != o) return a > o ? 1 : -1
                }
                return 0
            },
            setPluginStatus: function(i, t, n) {
                this.installed = t ? 1 : n ? n > 0 ? .7 : -.1 : i ? 0 : -1, t && (this.version = e.formatNum(t)), this.getVersionDone = 1 == this.installed || -1 == this.installed || this.instance.hasRun ? 1 : 0
            },
            getVersion: function(i, t) {
                var n, s, r = null;
                return n && !e.dbug || !this.nav.query().installed || (n = 1), r && !e.dbug || !this.nav.query().version || (r = this.nav.version), n && !e.dbug || !this.axo.query().installed || (n = 1), r && !e.dbug || !this.axo.query().version || (r = this.axo.version), r && !e.dbug || !(s = this.codebase.isMin(i)) ? ((!r || e.dbug) && (s = this.codebase.search()) && (n = 1, r = s), (!r && t || e.dbug) && (s = this.instance.query().version) && (n = 1, r = s), void this.setPluginStatus(n, r, 0)) : void this.setPluginStatus(0, 0, s)
            },
            nav: {
                hasRun: 0,
                installed: 0,
                version: null,
                mimeType: "application/x-vlc-plugin application/x-google-vlc-plugin application/mpeg4-muxcodetable application/x-matroska application/xspf+xml video/divx video/webm video/x-mpeg video/x-msvideo video/ogg audio/x-flac audio/amr audio/amr".split(" "),
                find: "VLC.*Plug-?in",
                find2: "VLC|VideoLAN",
                avoid: "Totem|Helix",
                plugins: ["VLC Web Plugin", "VLC Multimedia Plug-in", "VLC Multimedia Plugin", "VLC multimedia plugin"],
                query: function() {
                    var i, t;
                    return t = this.hasRun || !e.hasMimeType(this.mimeType), this.hasRun = 1, t ? this : ((t = e.pd.findNavPlugin({
                        find: this.find,
                        avoid: this.avoid,
                        mimes: this.mimeType,
                        plugins: this.plugins
                    })) && (this.installed = 1, t.description && (i = e.getNum(t.description + "", "[\\d][\\d\\.]*[a-z]*")), (i = e.getPluginFileVersion(t, i)) && (this.version = i)), this)
                }
            },
            instance: {
                hasRun: 0,
                installed: 0,
                version: null,
                mimeType: "application/x-vlc-plugin",
                HTML: 0,
                isDisabled: function() {
                    var i = 1;
                    return this.hasRun || (e.dbug ? i = 0 : s.nav.installed && e.hasMimeType(this.mimeType) && (i = 0)), i
                },
                query: function() {
                    var i = e.DOM.altHTML,
                        t = null,
                        n = 0,
                        n = this.isDisabled();
                    if (this.hasRun = 1, n) return this;
                    if (this.HTML = e.DOM.insert("object", ["type", this.mimeType], "autoplay no loop no volume 0".split(" "), i, s), n = this.HTML.obj()) {
                        try {
                            t || (t = e.getNum(n.VersionInfo))
                        } catch (r) {}
                        try {
                            t || (t = e.getNum(n.versionInfo()))
                        } catch (a) {}
                    }
                    return t && (this.version = t, this.installed = 1), this
                }
            },
            axo: {
                hasRun: 0,
                installed: 0,
                version: null,
                progID: "VideoLAN.VLCPlugin",
                query: function() {
                    var i;
                    return i = this.hasRun, this.hasRun = 1, i ? this : ((i = e.getAXO(this.progID)) && (this.installed = 1, (i = e.getNum(e.pd.getPROP(i, "VersionInfo"), "[\\d][\\d\\.]*[a-z]*")) && (this.version = i)), this)
                }
            },
            codebase: {
                classID: "clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",
                isMin: function(i) {
                    return this.$$ = s, e.codebase.isMin(this, i)
                },
                search: function() {
                    return this.$$ = s, e.codebase.search(this)
                },
                DIGITMAX: [
                    [11, 11, 16]
                ],
                DIGITMIN: [0, 0, 0, 0],
                Upper: ["999"],
                Lower: ["0"],
                convert: [1]
            }
        };
        e.addPlugin("vlc", s);
        var r = {
            OTF: null,
            setPluginStatus: function() {
                var i = this.OTF,
                    t = this.nav.precision,
                    n = this.nav.version,
                    s = 0 < this.nav.detected,
                    r = this.axo.detected,
                    a = this.axo.version,
                    o = this.axo.precision,
                    l = this.doc.detected,
                    u = this.doc.version,
                    d = this.doc.precision,
                    c = this.doc2.detected,
                    h = this.doc2.precision,
                    n = this.doc2.version || n || a || u,
                    t = h || t || o || d,
                    s = c > 0 || s || r > 0 || l > 0,
                    n = n || null;
                this.version = e.formatNum(n), this.precision = t, t = -1, 3 == i ? t = this.version ? .5 : -.5 : n ? t = 1 : s ? t = 0 : -.5 == r || -.5 == l ? t = -.15 : !e.browser.isIE || e.browser.ActiveXEnabled && !e.browser.ActiveXFilteringEnabled || (t = -1.5), this.installed = t, 1 != this.getVersionDone && (i = 1, this.verify && this.verify.isEnabled() || .5 == this.installed || -.5 == this.installed ? i = 0 : 1 == this.doc2.isDisabled() && (i = 0), this.getVersionDone = i)
            },
            getVersion: function(i, t) {
                var n = 0,
                    s = this.verify;
                null === this.getVersionDone && (this.OTF = 0, s && s.init()), e.file.save(this, ".pdf", t), 0 !== this.getVersionDone && (n && !e.dbug || !this.nav.query().version || (n = 1), n && !e.dbug || !this.axo.query().version || (n = 1), (!n || e.dbug) && this.doc.query()), this.doc2.insertHTMLQuery(), this.setPluginStatus()
            },
            getPrecision: function(i, t, n) {
                if (e.isString(i)) {
                    var s, t = t || "",
                        n = n || "",
                        r = ["\\d+", "\\d+", "\\d+", "\\d+"];
                    for (s = 4; s > 0; s--)
                        if (RegExp(t + r.slice(0, s).join("[\\.]") + n).test(i)) return s
                }
                return 0
            },
            nav: {
                detected: 0,
                version: null,
                precision: 0,
                mimeType: ["application/pdf", "application/vnd.adobe.pdfxml"],
                find: "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in",
                plugins: ["Adobe Acrobat", "Adobe Acrobat and Reader Plug-in", "Adobe Reader Plugin"],
                query: function() {
                    var i, t = null;
                    return this.detected || !e.hasMimeType(this.mimeType) ? this : (this.detected = (i = e.pd.findNavPlugin({
                        find: this.find,
                        mimes: this.mimeType,
                        plugins: this.plugins
                    })) ? 1 : -1, i && (t = e.getNum(i.description) || e.getNum(i.name), (t = e.getPluginFileVersion(i, t)) || (t = this.attempt3()), t && (this.version = t, this.precision = r.getPrecision(t))), this)
                },
                attempt3: function() {
                    var i = null;
                    return 1 == e.OS && (e.hasMimeType("application/vnd.adobe.pdfxml") ? i = "9" : e.hasMimeType("application/vnd.adobe.x-mars") ? i = "8" : e.hasMimeType("application/vnd.adobe.xfdf") && (i = "6")), i
                }
            },
            activexQuery: function(i) {
                var t, n, s = "",
                    a = {
                        precision: 0,
                        version: null
                    };
                try {
                    i && (s = i.GetVersions() + "")
                } catch (o) {}
                if (s && e.isString(s) && (i = /\=\s*[\d\.]+/g, n = s.match(i))) {
                    for (i = 0; i < n.length; i++)(t = e.formatNum(e.getNum(n[i]))) && (!a.version || 0 < e.compareNums(t, a.version)) && (a.version = t);
                    a.precision = r.getPrecision(s, "\\=\\s*")
                }
                return a
            },
            axo: {
                detected: 0,
                version: null,
                precision: 0,
                progID: ["AcroPDF.PDF", "AcroPDF.PDF.1", "PDF.PdfCtrl", "PDF.PdfCtrl.5", "PDF.PdfCtrl.1"],
                progID_dummy: "AcroDUMMY.DUMMY",
                query: function() {
                    var i, t, n, s, a, o = r;
                    if (this.detected) return this;
                    for (this.detected = -1, i = e.getAXO(this.progID_dummy), i || (a = e.errObj), s = 0; s < this.progID.length; s++)
                        if (i = e.getAXO(this.progID[s])) {
                            if (this.detected = 1, i = o.activexQuery(i), t = i.version, n = i.precision, !e.dbug && t) break
                        } else a && e.errObj && a !== e.errObj && a.message !== e.errObj.message && (this.detected = -.5);
                    return t && (this.version = t), n && (this.precision = n), this
                }
            },
            doc: {
                detected: 0,
                version: null,
                precision: 0,
                classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
                classID_dummy: "clsid:CA8A9780-280D-11CF-A24D-BA9876543210",
                DummySpanTagHTML: 0,
                HTML: 0,
                DummyObjTagHTML1: 0,
                DummyObjTagHTML2: 0,
                isDisabled: function() {
                    var i = 0;
                    return this.HTML ? i = 1 : e.dbug || e.DOM.isEnabled.objectTagUsingActiveX() || (i = 1), i
                },
                query: function() {
                    var i, t = r,
                        n = e.DOM.altHTML;
                    return this.isDisabled() ? this : (i = e.DOM.iframe.insert(99, "Adobe Reader"), this.DummySpanTagHTML = e.DOM.insert("", [], [], n, t, 1, i), this.HTML = e.DOM.insert("object", ["classid", this.classID], [], n, t, 1, i), this.DummyObjTagHTML2 = e.DOM.insert("object", ["classid", this.classID_dummy], [], n, t, 1, i), e.DOM.iframe.close(i), n = e.DOM.getTagStatus(this.HTML, this.DummySpanTagHTML, this.DummyObjTagHTML1, this.DummyObjTagHTML2, 0, 0, 1), i = t.activexQuery(this.HTML.obj()), t = i.version, i = i.precision, this.detected = n > 0 || t ? 1 : -.1 == n || -.5 == n ? -.5 : -1, t && (this.version = t), i && (this.precision = i), this)
                }
            },
            doc2: {
                detected: 0,
                version: null,
                precision: 0,
                classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
                mimeType: "application/pdf",
                HTML: 0,
                count: 0,
                count2: 0,
                time2: 0,
                intervalLength: 25,
                maxCount: 350,
                isDisabled: function() {
                    var i, t = r,
                        n = t.axo,
                        s = t.nav,
                        a = t.doc,
                        o = 0;
                    return this.HTML ? o = 2 : e.dbug || (e.DOM.isEnabled.objectTagUsingActiveX() ? (i = (s ? s.version : 0) || (n ? n.version : 0) || (a ? a.version : 0) || 0, n = (s ? s.precision : 0) || (n ? n.precision : 0) || (a ? a.precision : 0) || 0, (!i || !n || n > 2 || 0 > e.compareNums(e.formatNum(i), e.formatNum("11"))) && (o = 2)) : o = 2), 2 > o && (t = e.file.getValid(t), !t || !t.full) && (o = 1), o
                },
                handlerSet: 0,
                onMessage: function() {
                    var i = this;
                    return function(t) {
                        !i.version && (i.detected = 1, e.isArray(t) && (t = t[0]), t = e.getNum(t + "")) && (/^(\d+)[.,_]?$/.test(t) ? (t = RegExp.$1 + ",0,0,0", i.precision = 3) : /^(\d+)[.,_](\d)(\d\d)$/.test(t) || /^(\d+)[.,_](\d\d\d)(\d\d\d\d\d)$/.test(t) ? (t = RegExp.$1 + "," + RegExp.$2 + "," + RegExp.$3 + ",0", i.precision = 3) : /^(\d+)[.,_](\d\d\d)(\d\d\d\d\d)(\d+)$/.test(t) ? (t = RegExp.$1 + "," + RegExp.$2 + "," + RegExp.$3 + "," + RegExp.$4, i.precision = 4) : /^(\d+)[.,_](\d)(\d)$/.test(t) ? (t = RegExp.$1 + "," + RegExp.$2 + "," + RegExp.$3 + ",0", i.precision = 3) : /^(\d+)[.,_](\d)$/.test(t) && (t = RegExp.$1 + "," + RegExp.$2 + ",0,0", i.precision = 3), i.version = e.formatNum(t), r.setPluginStatus())
                    }
                },
                isDefinedMsgHandler: function(e, i) {
                    try {
                        return e ? e.messageHandler !== i : 0
                    } catch (t) {}
                    return 1
                },
                queryObject: function() {
                    var e = this.HTML;
                    if (e = e ? e.obj() : 0) {
                        if (!this.handlerSet && this.isDefinedMsgHandler(e)) {
                            try {
                                e.messageHandler = {
                                    onMessage: this.onMessage()
                                }
                            } catch (i) {}
                            this.handlerSet = 1, this.count2 = this.count, this.time2 = (new Date).getTime()
                        }
                        this.detected || (3 < this.count && !this.handlerSet ? this.detected = -1 : this.time2 && this.count - this.count2 >= this.maxCount && (new Date).getTime() - this.time2 >= this.intervalLength * this.maxCount && (this.detected = -.5))
                    }
                },
                insertHTMLQuery: function() {
                    var i, t, n = r,
                        s = e.DOM.altHTML;
                    return this.isDisabled() ? this : (2 > n.OTF && (n.OTF = 2), i = e.file.getValid(n).full, t = e.DOM.iframe.insert(0, "Adobe Reader"), e.DOM.iframe.write(t, '<script type="text/javascript"></script>'), this.HTML = e.DOM.insert("object", ["data", i].concat(e.browser.isIE ? ["classid", this.classID] : ["type", this.mimeType]), ["src", i], s, n, 0, t), e.DOM.iframe.addHandler(t, this.onIntervalQuery), 3 > n.OTF && this.HTML && (n.OTF = 3), e.DOM.iframe.close(t), this)
                },
                onIntervalQuery: function() {
                    var i = r,
                        t = i.doc2;
                    t.count++, 3 == i.OTF && (t.queryObject(), t.detected && t.queryCompleted()), 3 == i.OTF && e.ev.setTimeout(t.onIntervalQuery, t.intervalLength)
                },
                queryCompleted: function() {
                    var i = r;
                    4 != i.OTF && (i.OTF = 4, i.setPluginStatus(), e.ev.callArray(i.DoneHndlrs))
                },
                z: 0
            }
        };
        e.addPlugin("adobereader", r);
        var a = {
            mimeType: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"],
            classID: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",
            setPluginStatus: function(i, t) {
                var n;
                t && (this.version = e.formatNum(e.getNum(t))), this.installed = this.version ? 1 : i ? 0 : -1, this.getVersionDone = (n = (n = -1 == this.installed || this.instance.version) || this.axo.version) ? 1 : 0
            },
            navObj: {
                hasRun: 0,
                installed: null,
                version: null,
                find: "RealPlayer.*Plug-?in",
                avoid: "Totem|QuickTime|Helix|VLC|Download",
                plugins: ["RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit) ", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (64-bit) ", "RealPlayer Plugin"],
                query: function() {
                    var i = a,
                        t = !this.hasRun && e.hasMimeType(i.mimeType);
                    return this.hasRun = 1, t && (this.installed = (i = e.pd.findNavPlugin({
                        find: this.find,
                        avoid: this.avoid,
                        mimes: i.mimeType,
                        plugins: this.plugins
                    })) ? 1 : 0, (i = e.getPluginFileVersion(i)) && 0 <= e.compareNums(e.formatNum(i), e.formatNum("15"))) && (this.version = i), this
                }
            },
            JS: {
                hasRun: 0,
                version: null,
                regStr: "RealPlayer.*Version.*Plug-?in",
                mimetype: "application/vnd.rn-realplayer-javascript",
                q1: [
                    [11, 0, 0],
                    [999],
                    [663],
                    [663],
                    [663],
                    [660],
                    [468],
                    [468],
                    [468],
                    [468],
                    [468],
                    [468],
                    [431],
                    [431],
                    [431],
                    [372],
                    [180],
                    [180],
                    [172],
                    [172],
                    [167],
                    [114],
                    [0]
                ],
                q3: [
                    [6, 0],
                    [12, 99],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 46],
                    [12, 46],
                    [12, 46],
                    [11, 3006],
                    [11, 2806],
                    [11, 2806],
                    [11, 2804],
                    [11, 2804],
                    [11, 2799],
                    [11, 2749],
                    [11, 2700]
                ],
                compare: function(e, i) {
                    var t, n, s, r = e.length,
                        a = i.length;
                    for (t = 0; t < Math.max(r, a); t++) {
                        if (n = r > t ? e[t] : 0, s = a > t ? i[t] : 0, n > s) return 1;
                        if (s > n) return -1
                    }
                    return 0
                },
                convertNum: function(i, t, n) {
                    var s;
                    if (!i || !(s = e.formatNum(i))) return null;
                    for (s = s.split(e.splitNumRegx), i = 0; i < s.length; i++) s[i] = parseInt(s[i], 10);
                    if (0 !== this.compare(s.slice(0, Math.min(t[0].length, s.length)), t[0])) return null;
                    if (s = s.length > t[0].length ? s.slice(t[0].length) : [], 0 < this.compare(s, t[1]) || 0 > this.compare(s, t[t.length - 1])) return null;
                    for (i = t.length - 1; i >= 1 && 1 != i && (0 !== this.compare(t[i], s) || 0 !== this.compare(t[i], t[i - 1])) && !(0 <= this.compare(s, t[i]) && 0 > this.compare(s, t[i - 1])); i--);
                    return n[0].join(".") + "." + n[i].join(".")
                },
                isEnabled: function() {
                    return !this.hasRun && 1 == e.OS && e.hasMimeType(this.mimetype) ? 1 : 0
                },
                query: function() {
                    var i, t;
                    if (t = this.isEnabled(), this.hasRun = 1, t && ((t = e.pd.findNavPlugin({
                            find: this.regStr,
                            mimes: this.mimetype
                        })) && (i = e.formatNum(e.getNum(t.description))), i)) {
                        var n = i.split(e.splitNumRegx);
                        t = 1, 0 > this.compare(n, [6, 0, 12, 200]) ? t = -1 : 0 >= this.compare(n, [6, 0, 12, 1739]) && 0 <= this.compare(n, [6, 0, 12, 857]) && (t = -1), 0 > t && (this.version = (t = this.convertNum(i, this.q3, this.q1)) ? t : i)
                    }
                    return this
                }
            },
            instance: {
                hasRun: 0,
                version: null,
                HTML: null,
                isEnabled: function() {
                    var i = a,
                        t = 1;
                    return e.DOM.isEnabled.objectTag() ? !e.dbug && (this.hasRun || e.DOM.isEnabled.objectTagUsingActiveX() || !e.hasMimeType(i.mimeType) || e.browser.isGecko && 0 > e.compareNums(e.browser.verGecko, e.formatNum("1,8")) || e.browser.isOpera && 0 > e.compareNums(e.browser.verOpera, e.formatNum("10"))) && (t = 0) : t = 0, t
                },
                query: function() {
                    var i = a,
                        t = this.isEnabled();
                    if (this.hasRun = 1, t) {
                        this.HTML = e.DOM.insert("object", ["type", i.mimeType[0]], "src  autostart false imagestatus false controls stopbutton".split(" "), "", i), i = this.HTML.obj();
                        try {
                            this.version = e.getNum(i.GetVersionInfo())
                        } catch (n) {}
                        e.DOM.setStyle(i, ["display", "none"])
                    }
                    return this
                }
            },
            axo: {
                hasRun: 0,
                installed: null,
                version: null,
                progID: ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
                query: function() {
                    var i, t, n;
                    if (!this.hasRun)
                        for (this.hasRun = 1, t = 0; t < this.progID.length; t++)
                            if (i = e.getAXO(this.progID[t])) {
                                this.installed = 1, n = 0;
                                try {
                                    n = i.GetVersionInfo() + ""
                                } catch (s) {}
                                if (n && (this.version = n, !e.dbug)) break
                            }
                    return this
                }
            },
            getVersion: function(i, t) {
                var n = null,
                    s = 0;
                s && !e.dbug || !this.axo.query().installed || (s = 1), n && !e.dbug || !this.axo.query().version || (n = this.axo.version), s && !e.dbug || !this.navObj.query().installed || (s = 1), n && !e.dbug || !this.navObj.query().version || (n = this.navObj.version), n && !e.dbug || !this.JS.query().version || (s = 1, n = this.JS.version), (!s && !n || t || e.dbug) && this.instance.query().version && (s = 1, n = this.instance.version), this.setPluginStatus(s, n)
            }
        };
        e.addPlugin("realplayer", a)
    }();
    for (var u, d, c, h, g, m, f = (new Date).getTime(), p = document, v = navigator, y = screen, b = window, x = b.encodeURIComponent, D = b.decodeURIComponent, T = "hexagon-analytics.com", w = 0, P = "__ssid", M = 4, S = 105, O = 100, N = function() {
            for (var e = 3, i = document.createElement("b"), t = i.all || []; i.innerHTML = "<!--[if gt IE " + ++e + "]><i><![endif]-->", t[0];);
            return e > 4 ? e : document.documentMode
        }(), _ = {
            _trackPageview: function() {
                a()
            },
            _setAccount: function(e) {
                g = e
            },
            _setUserId: function(e) {
                h = e
            },
            _setPartnerUserId: function(e) {
                c = e
            },
            _setSessionId: function(e) {
                d = e
            },
            _setTrackerUrl: function(e) {
                T = e
            },
            _setCookieDomain: function(e) {
                m = e
            },
            _setFlash: function(e) {
                u = e
            }
        }, R = 0; R < _sift.length; R++) o(_sift[R]);
    _sift = {
        push: o
    }
}();