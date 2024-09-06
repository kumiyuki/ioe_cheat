window.__require = function t(e, r, n) {
  function i(s, a) {
    if (!r[s]) {
      if (!e[s]) {
        var u = s.split("/");
        if (u = u[u.length - 1], !e[u]) {
          var f = "function" == typeof __require && __require;
          if (!a && f) return f(u, !0);
          if (o) return o(u, !0);
          throw new Error("Cannot find module '" + s + "'")
        }
        s = u
      }
      var h = r[s] = {
        exports: {}
      };
      e[s][0].call(h.exports, function(t) {
        return i(e[s][1][t] || t)
      }, h, h.exports, t, e, r, n)
    }
    return r[s].exports
  }
  for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
  return i
}({
  Helloworld: [function(t, e, r) {
    "use strict";
    cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    var n, i = this && this.__extends || (n = function(t, e) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          })(t, e)
      }, function(t, e) {
        function r() {
          this.constructor = t
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
      }),
      o = this && this.__decorate || function(t, e, r, n) {
        var i, o = arguments.length,
          s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
        else
          for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
        return o > 3 && s && Object.defineProperty(e, r, s), s
      };
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      u = s.property,
      f = function(t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.label = null, e.text = "hello", e
        }
        return i(e, t), e.prototype.start = function() {
          this.label.string = this.text
        }, o([u(cc.Label)], e.prototype, "label", void 0), o([u], e.prototype, "text", void 0), o([a], e)
      }(cc.Component);
    r.default = f, cc._RF.pop()
  }, {}],
  XORCipher: [function(t, e) {
    "use strict";
    cc._RF.push(e, "3dda34d8e9EdZGWDoJNbT7z", "XORCipher"), cc._RF.pop()
  }, {}],
  "base64-js": [function(t, e, r) {
    "use strict";
    cc._RF.push(e, "97227q1qoJPFZ6Q11874Bf3", "base64-js"), r.byteLength = function(t) {
      var e = f(t),
        r = e[0],
        n = e[1];
      return 3 * (r + n) / 4 - n
    }, r.toByteArray = function(t) {
      var e, r, n = f(t),
        s = n[0],
        a = n[1],
        u = new o(h(0, s, a)),
        c = 0,
        l = a > 0 ? s - 4 : s;
      for (r = 0; r < l; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], u[c++] = e >> 16 & 255, u[c++] = e >> 8 & 255, u[c++] = 255 & e;
      return 2 === a && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, u[c++] = 255 & e), 1 === a && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, u[c++] = e >> 8 & 255, u[c++] = 255 & e), u
    }, r.fromByteArray = function(t) {
      for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(c(t, s, s + 16383 > a ? a : s + 16383));
      return 1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), o.join("")
    };
    for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

    function f(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
    }

    function h(t, e, r) {
      return 3 * (e + r) / 4 - r
    }

    function c(t, e, r) {
      for (var i, o, s = [], a = e; a < r; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
      return s.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63, cc._RF.pop()
  }, {}],
  biginteger: [function(t, e, r) {
    "use strict";

    function n(t, e) {
      if (!(this instanceof n)) return t instanceof n ? t : void 0 === t ? n.ZERO : n.parse(t);
      for (t = t || []; t.length && !t[t.length - 1];) --t.length;
      this._d = t, this._s = t.length ? e || 1 : 0
    }
    cc._RF.push(e, "18b1c3ILDtFypVh8jNd2+Vp", "biginteger"), Array.prototype.map || (Array.prototype.map = function(t) {
        var e = this.length >>> 0;
        if ("function" != typeof t) throw new TypeError;
        for (var r = new Array(e), n = arguments[1], i = 0; i < e; i++) i in this && (r[i] = t.call(n, this[i], i, this));
        return r
      }), n.base = 1e7, n.base_log10 = 7, n.init = function() {
        n.ZERO = new n([], 0), n.ONE = new n([1], 1), n.M_ONE = new n(n.ONE._d, -1), n._0 = n.ZERO, n._1 = n.ONE, n.small = [n.ZERO, n.ONE, new n([2], 1), new n([3], 1), new n([4], 1), new n([5], 1), new n([6], 1), new n([7], 1), new n([8], 1), new n([9], 1), new n([10], 1), new n([11], 1), new n([12], 1), new n([13], 1), new n([14], 1), new n([15], 1), new n([16], 1), new n([17], 1), new n([18], 1), new n([19], 1), new n([20], 1), new n([21], 1), new n([22], 1), new n([23], 1), new n([24], 1), new n([25], 1), new n([26], 1), new n([27], 1), new n([28], 1), new n([29], 1), new n([30], 1), new n([31], 1), new n([32], 1), new n([33], 1), new n([34], 1), new n([35], 1), new n([36], 1)]
      }, n.init(), n.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), n.prototype.toString = function(t) {
        if ((t = +t || 10) < 2 || t > 36) throw new Error("illegal radix " + t + ".");
        if (0 === this._s) return "0";
        if (10 === t) {
          var e = this._s < 0 ? "-" : "";
          e += this._d[this._d.length - 1].toString();
          for (var r = this._d.length - 2; r >= 0; r--) {
            for (var i = this._d[r].toString(); i.length < n.base_log10;) i = "0" + i;
            e += i
          }
          return e
        }
        var o = n.digits;
        t = n.small[t];
        for (var s, a = this._s, u = this.abs(), f = []; 0 !== u._s;) {
          var h = u.divRem(t);
          u = h[0], s = h[1], f.push(o[s.valueOf()])
        }
        return (a < 0 ? "-" : "") + f.reverse().join("")
      }, n.radixRegex = [/^$/, /^$/, /^[01]*$/, /^[012]*$/, /^[0-3]*$/, /^[0-4]*$/, /^[0-5]*$/, /^[0-6]*$/, /^[0-7]*$/, /^[0-8]*$/, /^[0-9]*$/, /^[0-9aA]*$/, /^[0-9abAB]*$/, /^[0-9abcABC]*$/, /^[0-9a-dA-D]*$/, /^[0-9a-eA-E]*$/, /^[0-9a-fA-F]*$/, /^[0-9a-gA-G]*$/, /^[0-9a-hA-H]*$/, /^[0-9a-iA-I]*$/, /^[0-9a-jA-J]*$/, /^[0-9a-kA-K]*$/, /^[0-9a-lA-L]*$/, /^[0-9a-mA-M]*$/, /^[0-9a-nA-N]*$/, /^[0-9a-oA-O]*$/, /^[0-9a-pA-P]*$/, /^[0-9a-qA-Q]*$/, /^[0-9a-rA-R]*$/, /^[0-9a-sA-S]*$/, /^[0-9a-tA-T]*$/, /^[0-9a-uA-U]*$/, /^[0-9a-vA-V]*$/, /^[0-9a-wA-W]*$/, /^[0-9a-xA-X]*$/, /^[0-9a-yA-Y]*$/, /^[0-9a-zA-Z]*$/], n.parse = function(t, e) {
        t = t.toString(), void 0 !== e && 10 != +e || (t = t.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e").replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function(t, e, r, n, i) {
          var o = (i = +i) < 0,
            s = r.length + i;
          t = (o ? r : n).length, i = (i = Math.abs(i)) >= t ? i - t + o : 0;
          var a = new Array(i + 1).join("0"),
            u = r + n;
          return (e || "") + (o ? u = a + u : u += a).substr(0, s += o ? a.length : 0) + (s < u.length ? "." + u.substr(s) : "")
        }));
        var r = /^([+\-]?)(0[xXcCbB])?([0-9A-Za-z]*)(?:\.\d*)?$/.exec(t);
        if (r) {
          var i = r[1] || "+",
            o = r[2] || "",
            s = r[3] || "";
          if (void 0 === e) e = "0x" === o || "0X" === o ? 16 : "0c" === o || "0C" === o ? 8 : "0b" === o || "0B" === o ? 2 : 10;
          else if (e < 2 || e > 36) throw new Error("Illegal radix " + e + ".");
          if (e = +e, !n.radixRegex[e].test(s)) throw new Error("Bad digit for radix " + e);
          if (0 === (s = s.replace(/^0+/, "").split("")).length) return n.ZERO;
          if (i = "-" === i ? -1 : 1, 10 == e) {
            for (var a = []; s.length >= n.base_log10;) a.push(parseInt(s.splice(-n.base_log10).join(""), 10));
            return a.push(parseInt(s.join(""), 10)), new n(a, i)
          }
          if (e === n.base) return new n(s.map(Number).reverse(), i);
          a = n.ZERO, e = n.small[e];
          for (var u = n.small, f = 0; f < s.length; f++) a = a.multiply(e).add(u[parseInt(s[f], 36)]);
          return new n(a._d, i)
        }
        throw new Error("Invalid BigInteger format: " + t)
      }, n.prototype.add = function(t) {
        if (0 === this._s) return n(t);
        if (0 === (t = n(t))._s) return this;
        if (this._s !== t._s) return t = t.negate(), this.subtract(t);
        for (var e, r = this._d, i = t._d, o = r.length, s = i.length, a = new Array(Math.max(o, s) + 1), u = Math.min(o, s), f = 0, h = 0; h < u; h++) e = r[h] + i[h] + f, a[h] = e % n.base, f = e / n.base | 0;
        for (s > o && (r = i, o = s), h = u; f && h < o; h++) e = r[h] + f, a[h] = e % n.base, f = e / n.base | 0;
        for (f && (a[h] = f); h < o; h++) a[h] = r[h];
        return new n(a, this._s)
      }, n.prototype.negate = function() {
        return new n(this._d, -this._s)
      }, n.prototype.abs = function() {
        return this._s < 0 ? this.negate() : this
      }, n.prototype.subtract = function(t) {
        if (0 === this._s) return n(t).negate();
        if (0 === (t = n(t))._s) return this;
        if (this._s !== t._s) return t = t.negate(), this.add(t);
        var e, r = this;
        this._s < 0 && (e = r, r = new n(t._d, 1), t = new n(e._d, 1));
        var i = r.compareAbs(t);
        if (0 === i) return n.ZERO;
        i < 0 && (e = t, t = r, r = e);
        var o, s, a = r._d,
          u = t._d,
          f = a.length,
          h = u.length,
          c = new Array(f),
          l = 0;
        for (o = 0; o < h; o++)(s = a[o] - l - u[o]) < 0 ? (s += n.base, l = 1) : l = 0, c[o] = s;
        for (o = h; o < f; o++) {
          if (!((s = a[o] - l) < 0)) {
            c[o++] = s;
            break
          }
          s += n.base, c[o] = s
        }
        for (; o < f; o++) c[o] = a[o];
        return new n(c, i)
      },
      function() {
        function t(t, e) {
          for (var r = t._d, i = r.slice(), o = 0;;) {
            var s = (r[o] || 0) + 1;
            if (i[o] = s % n.base, s <= n.base - 1) break;
            ++o
          }
          return new n(i, e)
        }

        function e(t, e) {
          for (var r = t._d, i = r.slice(), o = 0;;) {
            var s = (r[o] || 0) - 1;
            if (!(s < 0)) {
              i[o] = s;
              break
            }
            i[o] = s + n.base, ++o
          }
          return new n(i, e)
        }
        n.prototype.next = function() {
          switch (this._s) {
            case 0:
              return n.ONE;
            case -1:
              return e(this, -1);
            default:
              return t(this, 1)
          }
        }, n.prototype.prev = function() {
          switch (this._s) {
            case 0:
              return n.M_ONE;
            case -1:
              return t(this, -1);
            default:
              return e(this, 1)
          }
        }
      }(), n.prototype.compareAbs = function(t) {
        if (this === t) return 0;
        if (!(t instanceof n)) {
          if (!isFinite(t)) return isNaN(t) ? t : -1;
          t = n(t)
        }
        if (0 === this._s) return 0 !== t._s ? -1 : 0;
        if (0 === t._s) return 1;
        var e = this._d.length,
          r = t._d.length;
        if (e < r) return -1;
        if (e > r) return 1;
        for (var i = this._d, o = t._d, s = e - 1; s >= 0; s--)
          if (i[s] !== o[s]) return i[s] < o[s] ? -1 : 1;
        return 0
      }, n.prototype.compare = function(t) {
        return this === t ? 0 : (t = n(t), 0 === this._s ? -t._s : this._s === t._s ? this.compareAbs(t) * this._s : this._s)
      }, n.prototype.isUnit = function() {
        return this === n.ONE || this === n.M_ONE || 1 === this._d.length && 1 === this._d[0]
      }, n.prototype.multiply = function(t) {
        if (0 === this._s) return n.ZERO;
        if (0 === (t = n(t))._s) return n.ZERO;
        if (this.isUnit()) return this._s < 0 ? t.negate() : t;
        if (t.isUnit()) return t._s < 0 ? this.negate() : this;
        if (this === t) return this.square();
        var e, r = this._d.length >= t._d.length,
          i = (r ? this : t)._d,
          o = (r ? t : this)._d,
          s = i.length,
          a = o.length,
          u = s + a,
          f = new Array(u);
        for (e = 0; e < u; e++) f[e] = 0;
        for (e = 0; e < a; e++) {
          for (var h, c = 0, l = o[e], p = s + e, g = e; g < p; g++) c = (h = f[g] + l * i[g - e] + c) / n.base | 0, f[g] = h % n.base | 0;
          c && (c = (h = f[g] + c) / n.base | 0, f[g] = h % n.base)
        }
        return new n(f, this._s * t._s)
      }, n.prototype.multiplySingleDigit = function(t) {
        if (0 === t || 0 === this._s) return n.ZERO;
        if (1 === t) return this;
        var e;
        if (1 === this._d.length) return (e = this._d[0] * t) >= n.base ? new n([e % n.base | 0, e / n.base | 0], 1) : new n([e], 1);
        if (2 === t) return this.add(this);
        if (this.isUnit()) return new n([t], 1);
        for (var r = this._d, i = r.length, o = i + 1, s = new Array(o), a = 0; a < o; a++) s[a] = 0;
        for (var u = 0, f = 0; f < i; f++) u = (e = t * r[f] + u) / n.base | 0, s[f] = e % n.base | 0;
        return u && (u = (e = u) / n.base | 0, s[f] = e % n.base), new n(s, 1)
      }, n.prototype.square = function() {
        if (0 === this._s) return n.ZERO;
        if (this.isUnit()) return n.ONE;
        var t, e, r, i, o = this._d,
          s = o.length,
          a = new Array(s + s + 1);
        for (i = 0; i < s; i++) r = 2 * i, e = (t = o[i] * o[i]) / n.base | 0, a[r] = t % n.base, a[r + 1] = e;
        for (i = 0; i < s; i++) {
          e = 0, r = 2 * i + 1;
          for (var u = i + 1; u < s; u++, r++) e = (t = o[u] * o[i] * 2 + a[r] + e) / n.base | 0, a[r] = t % n.base;
          var f = e + a[r = s + i];
          e = f / n.base | 0, a[r] = f % n.base, a[r + 1] += e
        }
        return new n(a, 1)
      }, n.prototype.quotient = function(t) {
        return this.divRem(t)[0]
      }, n.prototype.divide = n.prototype.quotient, n.prototype.remainder = function(t) {
        return this.divRem(t)[1]
      }, n.prototype.divRem = function(t) {
        if (0 === (t = n(t))._s) throw new Error("Divide by zero");
        if (0 === this._s) return [n.ZERO, n.ZERO];
        if (1 === t._d.length) return this.divRemSmall(t._s * t._d[0]);
        switch (this.compareAbs(t)) {
          case 0:
            return [this._s === t._s ? n.ONE : n.M_ONE, n.ZERO];
          case -1:
            return [n.ZERO, this]
        }
        var e, r = this._s * t._s,
          i = t.abs(),
          o = this._d.slice(),
          s = (t._d.length, o.length, []),
          a = new n([], 1);
        for (a._s = 1; o.length;)
          if (a._d.unshift(o.pop()), (a = new n(a._d, 1)).compareAbs(t) < 0) s.push(0);
          else {
            if (0 === a._s) e = 0;
            else {
              var u = a._d.length,
                f = i._d.length,
                h = a._d[u - 1] * n.base + a._d[u - 2],
                c = i._d[f - 1] * n.base + i._d[f - 2];
              a._d.length > i._d.length && (h = (h + 1) * n.base), e = Math.ceil(h / c)
            }
            do {
              var l = i.multiplySingleDigit(e);
              if (l.compareAbs(a) <= 0) break;
              e--
            } while (e);
            if (s.push(e), e) {
              var p = a.subtract(l);
              a._d = p._d.slice()
            }
          } return [new n(s.reverse(), r), new n(a._d, this._s)]
      }, n.prototype.divRemSmall = function(t) {
        var e;
        if (0 == (t = +t)) throw new Error("Divide by zero");
        var r = t < 0 ? -1 : 1,
          i = this._s * r;
        if ((t = Math.abs(t)) < 1 || t >= n.base) throw new Error("Argument out of range");
        if (0 === this._s) return [n.ZERO, n.ZERO];
        if (1 === t || -1 === t) return [1 === i ? this.abs() : new n(this._d, i), n.ZERO];
        if (1 === this._d.length) {
          var o = new n([this._d[0] / t | 0], 1);
          return e = new n([this._d[0] % t | 0], 1), i < 0 && (o = o.negate()), this._s < 0 && (e = e.negate()), [o, e]
        }
        for (var s, a = this._d.slice(), u = new Array(a.length), f = 0, h = 0, c = 0; a.length;)(f = f * n.base + a[a.length - 1]) < t ? (u[c++] = 0, a.pop(), h = n.base * h + f) : (h = f - t * (s = 0 === f ? 0 : f / t | 0), u[c++] = s, s ? (a.pop(), f = h) : a.pop());
        return e = new n([h], 1), this._s < 0 && (e = e.negate()), [new n(u.reverse(), i), e]
      }, n.prototype.isEven = function() {
        var t = this._d;
        return 0 === this._s || 0 === t.length || t[0] % 2 == 0
      }, n.prototype.isOdd = function() {
        return !this.isEven()
      }, n.prototype.sign = function() {
        return this._s
      }, n.prototype.isPositive = function() {
        return this._s > 0
      }, n.prototype.isNegative = function() {
        return this._s < 0
      }, n.prototype.isZero = function() {
        return 0 === this._s
      }, n.prototype.exp10 = function(t) {
        if (0 == (t = +t)) return this;
        if (Math.abs(t) > Number(n.MAX_EXP)) throw new Error("exponent too large in BigInteger.exp10");
        if (t > 0) {
          for (var e = new n(this._d.slice(), this._s); t >= n.base_log10; t -= n.base_log10) e._d.unshift(0);
          return 0 == t ? e : (e._s = 1, e = e.multiplySingleDigit(Math.pow(10, t)), this._s < 0 ? e.negate() : e)
        }
        if (-t >= this._d.length * n.base_log10) return n.ZERO;
        for (e = new n(this._d.slice(), this._s), t = -t; t >= n.base_log10; t -= n.base_log10) e._d.shift();
        return 0 == t ? e : e.divRemSmall(Math.pow(10, t))[0]
      }, n.prototype.pow = function(t) {
        if (this.isUnit()) return this._s > 0 ? this : n(t).isOdd() ? this : this.negate();
        if (0 === (t = n(t))._s) return n.ONE;
        if (t._s < 0) {
          if (0 === this._s) throw new Error("Divide by zero");
          return n.ZERO
        }
        if (0 === this._s) return n.ZERO;
        if (t.isUnit()) return this;
        if (t.compareAbs(n.MAX_EXP) > 0) throw new Error("exponent too large in BigInteger.pow");
        for (var e = this, r = n.ONE, i = n.small[2]; t.isPositive();) {
          if (t.isOdd() && (r = r.multiply(e), t.isUnit())) return r;
          e = e.square(), t = t.quotient(i)
        }
        return r
      }, n.prototype.modPow = function(t, e) {
        for (var r = n.ONE, i = this; t.isPositive();) t.isOdd() && (r = r.multiply(i).remainder(e)), (t = t.quotient(n.small[2])).isPositive() && (i = i.square().remainder(e));
        return r
      }, n.prototype.log = function() {
        switch (this._s) {
          case 0:
            return -1 / 0;
          case -1:
            return NaN
        }
        var t = this._d.length;
        if (t * n.base_log10 < 30) return Math.log(this.valueOf());
        var e = Math.ceil(30 / n.base_log10),
          r = this._d.slice(t - e);
        return Math.log(new n(r, 1).valueOf()) + (t - e) * Math.log(n.base)
      }, n.prototype.valueOf = function() {
        return parseInt(this.toString(), 10)
      }, n.prototype.toJSValue = function() {
        return parseInt(this.toString(), 10)
      }, n.MAX_EXP = n(2147483647),
      function() {
        function t(t) {
          return function(e) {
            return t.call(n(e))
          }
        }

        function e(t) {
          return function(e, r) {
            return t.call(n(e), n(r))
          }
        }

        function r(t) {
          return function(e, r, i) {
            return t.call(n(e), n(r), n(i))
          }
        }(function() {
          var i, o, s = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(","),
            a = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(","),
            u = ["modPow"];
          for (i = 0; i < s.length; i++) n[o = s[i]] = t(n.prototype[o]);
          for (i = 0; i < a.length; i++) n[o = a[i]] = e(n.prototype[o]);
          for (i = 0; i < u.length; i++) n[o = u[i]] = r(n.prototype[o]);
          n.exp10 = function(t, e) {
            return n(t).exp10(e)
          }
        })()
      }(), void 0 !== r && (r.BigInteger = n), cc._RF.pop()
  }, {}],
  buffer: [function(t, e, r) {
    "use strict";
    cc._RF.push(e, "da891N0q0RBopWlql4BTu51", "buffer");
    var n = t("base64-js"),
      i = t("ieee754"),
      o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = u, r.SlowBuffer = function(t) {
      return +t != t && (t = 0), u.alloc(+t)
    }, r.INSPECT_MAX_BYTES = 50;
    var s = 2147483647;

    function a(t) {
      if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      var e = new Uint8Array(t);
      return Object.setPrototypeOf(e, u.prototype), e
    }

    function u(t, e, r) {
      if ("number" == typeof t) {
        if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
        return l(t)
      }
      return f(t, e, r)
    }

    function f(t, e, r) {
      if ("string" == typeof t) return p(t, e);
      if (ArrayBuffer.isView(t)) return d(t);
      if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      if (Y(t, ArrayBuffer) || t && Y(t.buffer, ArrayBuffer)) return y(t, e, r);
      if ("undefined" != typeof SharedArrayBuffer && (Y(t, SharedArrayBuffer) || t && Y(t.buffer, SharedArrayBuffer))) return y(t, e, r);
      if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
      var n = t.valueOf && t.valueOf();
      if (null != n && n !== t) return u.from(n, e, r);
      var i = v(t);
      if (i) return i;
      if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
    }

    function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
      if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
    }

    function c(t, e, r) {
      return h(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
    }

    function l(t) {
      return h(t), a(t < 0 ? 0 : 0 | w(t))
    }

    function p(t, e) {
      if ("string" == typeof e && "" !== e || (e = "utf8"), !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      var r = 0 | _(t, e),
        n = a(r),
        i = n.write(t, e);
      return i !== r && (n = n.slice(0, i)), n
    }

    function g(t) {
      for (var e = t.length < 0 ? 0 : 0 | w(t.length), r = a(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
      return r
    }

    function d(t) {
      if (Y(t, Uint8Array)) {
        var e = new Uint8Array(t);
        return y(e.buffer, e.byteOffset, e.byteLength)
      }
      return g(t)
    }

    function y(t, e, r) {
      if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
      if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var n;
      return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
    }

    function v(t) {
      if (u.isBuffer(t)) {
        var e = 0 | w(t.length),
          r = a(e);
        return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
      }
      return void 0 !== t.length ? "number" != typeof t.length || J(t.length) ? a(0) : g(t) : "Buffer" === t.type && Array.isArray(t.data) ? g(t.data) : void 0
    }

    function w(t) {
      if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return 0 | t
    }

    function _(t, e) {
      if (u.isBuffer(t)) return t.length;
      if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer)) return t.byteLength;
      if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
      var r = t.length,
        n = arguments.length > 2 && !0 === arguments[2];
      if (!n && 0 === r) return 0;
      for (var i = !1;;) switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Z(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r;
        case "hex":
          return r >>> 1;
        case "base64":
          return K(t).length;
        default:
          if (i) return n ? -1 : Z(t).length;
          e = ("" + e).toLowerCase(), i = !0
      }
    }

    function m(t, e, r) {
      var n = !1;
      if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
      if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
      if ((r >>>= 0) <= (e >>>= 0)) return "";
      for (t || (t = "utf8");;) switch (t) {
        case "hex":
          return T(this, e, r);
        case "utf8":
        case "utf-8":
          return k(this, e, r);
        case "ascii":
          return D(this, e, r);
        case "latin1":
        case "binary":
          return P(this, e, r);
        case "base64":
          return R(this, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return I(this, e, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + t);
          t = (t + "").toLowerCase(), n = !0
      }
    }

    function b(t, e, r) {
      var n = t[e];
      t[e] = t[r], t[r] = n
    }

    function E(t, e, r, n, i) {
      if (0 === t.length) return -1;
      if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), J(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (i) return -1;
        r = t.length - 1
      } else if (r < 0) {
        if (!i) return -1;
        r = 0
      }
      if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : B(t, e, r, n, i);
      if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : B(t, [e], r, n, i);
      throw new TypeError("val must be string, number or Buffer")
    }

    function B(t, e, r, n, i) {
      var o, s = 1,
        a = t.length,
        u = e.length;
      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || e.length < 2) return -1;
        s = 2, a /= 2, u /= 2, r /= 2
      }

      function f(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s)
      }
      if (i) {
        var h = -1;
        for (o = r; o < a; o++)
          if (f(t, o) === f(e, -1 === h ? 0 : o - h)) {
            if (-1 === h && (h = o), o - h + 1 === u) return h * s
          } else - 1 !== h && (o -= o - h), h = -1
      } else
        for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
          for (var c = !0, l = 0; l < u; l++)
            if (f(t, o + l) !== f(e, l)) {
              c = !1;
              break
            } if (c) return o
        }
      return -1
    }

    function A(t, e, r, n) {
      r = Number(r) || 0;
      var i = t.length - r;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = e.length;
      n > o / 2 && (n = o / 2);
      for (var s = 0; s < n; ++s) {
        var a = parseInt(e.substr(2 * s, 2), 16);
        if (J(a)) return s;
        t[r + s] = a
      }
      return s
    }

    function O(t, e, r, n) {
      return G(Z(e, t.length - r), t, r, n)
    }

    function C(t, e, r, n) {
      return G(X(e), t, r, n)
    }

    function L(t, e, r, n) {
      return G(K(e), t, r, n)
    }

    function M(t, e, r, n) {
      return G(q(e, t.length - r), t, r, n)
    }

    function R(t, e, r) {
      return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
    }

    function k(t, e, r) {
      r = Math.min(t.length, r);
      for (var n = [], i = e; i < r;) {
        var o, s, a, u, f = t[i],
          h = null,
          c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
        if (i + c <= r) switch (c) {
          case 1:
            f < 128 && (h = f);
            break;
          case 2:
            128 == (192 & (o = t[i + 1])) && (u = (31 & f) << 6 | 63 & o) > 127 && (h = u);
            break;
          case 3:
            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & f) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u);
            break;
          case 4:
            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & f) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u)
        }
        null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += c
      }
      return S(n)
    }
    r.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t = new Uint8Array(1),
          e = {
            foo: function() {
              return 42
            }
          };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
      } catch (r) {
        return !1
      }
    }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (u.isBuffer(this)) return this.buffer
      }
    }), Object.defineProperty(u.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (u.isBuffer(this)) return this.byteOffset
      }
    }), u.poolSize = 8192, u.from = function(t, e, r) {
      return f(t, e, r)
    }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
      return c(t, e, r)
    }, u.allocUnsafe = function(t) {
      return l(t)
    }, u.allocUnsafeSlow = function(t) {
      return l(t)
    }, u.isBuffer = function(t) {
      return null != t && !0 === t._isBuffer && t !== u.prototype
    }, u.compare = function(t, e) {
      if (Y(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), Y(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === e) return 0;
      for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
        if (t[i] !== e[i]) {
          r = t[i], n = e[i];
          break
        } return r < n ? -1 : n < r ? 1 : 0
    }, u.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, u.concat = function(t, e) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return u.alloc(0);
      var r;
      if (void 0 === e)
        for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
      var n = u.allocUnsafe(e),
        i = 0;
      for (r = 0; r < t.length; ++r) {
        var o = t[r];
        if (Y(o, Uint8Array)) i + o.length > n.length ? u.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i);
        else {
          if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
          o.copy(n, i)
        }
        i += o.length
      }
      return n
    }, u.byteLength = _, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var e = 0; e < t; e += 2) b(this, e, e + 1);
      return this
    }, u.prototype.swap32 = function() {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
      return this
    }, u.prototype.swap64 = function() {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
      return this
    }, u.prototype.toString = function() {
      var t = this.length;
      return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : m.apply(this, arguments)
    }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === u.compare(this, t)
    }, u.prototype.inspect = function() {
      var t = "",
        e = r.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, i) {
      if (Y(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
      if (n >= i && e >= r) return 0;
      if (n >= i) return -1;
      if (e >= r) return 1;
      if (this === t) return 0;
      for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), f = this.slice(n, i), h = t.slice(e, r), c = 0; c < a; ++c)
        if (f[c] !== h[c]) {
          o = f[c], s = h[c];
          break
        } return o < s ? -1 : s < o ? 1 : 0
    }, u.prototype.includes = function(t, e, r) {
      return -1 !== this.indexOf(t, e, r)
    }, u.prototype.indexOf = function(t, e, r) {
      return E(this, t, e, r, !0)
    }, u.prototype.lastIndexOf = function(t, e, r) {
      return E(this, t, e, r, !1)
    }, u.prototype.write = function(t, e, r, n) {
      if (void 0 === e) n = "utf8", r = this.length, e = 0;
      else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
      else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
      }
      var i = this.length - e;
      if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      for (var o = !1;;) switch (n) {
        case "hex":
          return A(this, t, e, r);
        case "utf8":
        case "utf-8":
          return O(this, t, e, r);
        case "ascii":
        case "latin1":
        case "binary":
          return C(this, t, e, r);
        case "base64":
          return L(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return M(this, t, e, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), o = !0
      }
    }, u.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var x = 4096;

    function S(t) {
      var e = t.length;
      if (e <= x) return String.fromCharCode.apply(String, t);
      for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += x));
      return r
    }

    function D(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
      return n
    }

    function P(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
      return n
    }

    function T(t, e, r) {
      var n = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
      for (var i = "", o = e; o < r; ++o) i += W[t[o]];
      return i
    }

    function I(t, e, r) {
      for (var n = t.slice(e, r), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      return i
    }

    function U(t, e, r) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
    }

    function N(t, e, r, n, i, o) {
      if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
      if (r + n > t.length) throw new RangeError("Index out of range")
    }

    function z(t, e, r, n) {
      if (r + n > t.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range")
    }

    function F(t, e, r, n, o) {
      return e = +e, r >>>= 0, o || z(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
    }

    function j(t, e, r, n, o) {
      return e = +e, r >>>= 0, o || z(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
    }
    u.prototype.slice = function(t, e) {
      var r = this.length;
      (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
      var n = this.subarray(t, e);
      return Object.setPrototypeOf(n, u.prototype), n
    }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || U(t, e, this.length);
      for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
      return n
    }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || U(t, e, this.length);
      for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
      return n
    }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
      return t >>>= 0, e || U(t, 1, this.length), this[t]
    }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
      return t >>>= 0, e || U(t, 2, this.length), this[t] | this[t + 1] << 8
    }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
      return t >>>= 0, e || U(t, 2, this.length), this[t] << 8 | this[t + 1]
    }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
    }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }, u.prototype.readIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || U(t, e, this.length);
      for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
      return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
    }, u.prototype.readIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || U(t, e, this.length);
      for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
      return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
    }, u.prototype.readInt8 = function(t, e) {
      return t >>>= 0, e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    }, u.prototype.readInt16LE = function(t, e) {
      t >>>= 0, e || U(t, 2, this.length);
      var r = this[t] | this[t + 1] << 8;
      return 32768 & r ? 4294901760 | r : r
    }, u.prototype.readInt16BE = function(t, e) {
      t >>>= 0, e || U(t, 2, this.length);
      var r = this[t + 1] | this[t] << 8;
      return 32768 & r ? 4294901760 | r : r
    }, u.prototype.readInt32LE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }, u.prototype.readInt32BE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }, u.prototype.readFloatLE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), i.read(this, t, !0, 23, 4)
    }, u.prototype.readFloatBE = function(t, e) {
      return t >>>= 0, e || U(t, 4, this.length), i.read(this, t, !1, 23, 4)
    }, u.prototype.readDoubleLE = function(t, e) {
      return t >>>= 0, e || U(t, 8, this.length), i.read(this, t, !0, 52, 8)
    }, u.prototype.readDoubleBE = function(t, e) {
      return t >>>= 0, e || U(t, 8, this.length), i.read(this, t, !1, 52, 8)
    }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
      t = +t, e >>>= 0, r >>>= 0, n || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = 1,
        o = 0;
      for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
      return e + r
    }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
      t = +t, e >>>= 0, r >>>= 0, n || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = r - 1,
        o = 1;
      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
      return e + r
    }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
    }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
    }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
    }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
    }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
    }, u.prototype.writeIntLE = function(t, e, r, n) {
      if (t = +t, e >>>= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        N(this, t, e, r, i - 1, -i)
      }
      var o = 0,
        s = 1,
        a = 0;
      for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      return e + r
    }, u.prototype.writeIntBE = function(t, e, r, n) {
      if (t = +t, e >>>= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        N(this, t, e, r, i - 1, -i)
      }
      var o = r - 1,
        s = 1,
        a = 0;
      for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      return e + r
    }, u.prototype.writeInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
    }, u.prototype.writeInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
    }, u.prototype.writeInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
    }, u.prototype.writeInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    }, u.prototype.writeInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
    }, u.prototype.writeFloatLE = function(t, e, r) {
      return F(this, t, e, !0, r)
    }, u.prototype.writeFloatBE = function(t, e, r) {
      return F(this, t, e, !1, r)
    }, u.prototype.writeDoubleLE = function(t, e, r) {
      return j(this, t, e, !0, r)
    }, u.prototype.writeDoubleBE = function(t, e, r) {
      return j(this, t, e, !1, r)
    }, u.prototype.copy = function(t, e, r, n) {
      if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
      var i = n - r;
      return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
    }, u.prototype.fill = function(t, e, r, n) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        if (1 === t.length) {
          var i = t.charCodeAt(0);
          ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
        }
      } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
      if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
      if (r <= e) return this;
      var o;
      if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
        for (o = e; o < r; ++o) this[o] = t;
      else {
        var s = u.isBuffer(t) ? t : u.from(t, n),
          a = s.length;
        if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
      }
      return this
    };
    var $ = /[^+/0-9A-Za-z-_]/g;

    function H(t) {
      if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
      for (; t.length % 4 != 0;) t += "=";
      return t
    }

    function Z(t, e) {
      var r;
      e = e || 1 / 0;
      for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            if (s + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            i = r;
            continue
          }
          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue
          }
          r = 65536 + (i - 55296 << 10 | r - 56320)
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((e -= 1) < 0) break;
          o.push(r)
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push(r >> 6 | 192, 63 & r | 128)
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
        } else {
          if (!(r < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
        }
      }
      return o
    }

    function X(t) {
      for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
      return e
    }

    function q(t, e) {
      for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (r = t.charCodeAt(s)) >> 8, i = r % 256, o.push(i), o.push(n);
      return o
    }

    function K(t) {
      return n.toByteArray(H(t))
    }

    function G(t, e, r, n) {
      for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
      return i
    }

    function Y(t, e) {
      return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
    }

    function J(t) {
      return t != t
    }
    var W = function() {
      for (var t = new Array(256), e = 0; e < 16; ++e)
        for (var r = 16 * e, n = 0; n < 16; ++n) t[r + n] = "0123456789abcdef" [e] + "0123456789abcdef" [n];
      return t
    }();
    cc._RF.pop()
  }, {
    "base64-js": "base64-js",
    ieee754: "ieee754"
  }],
  "crypto-js": [function(t, e) {
    "use strict";
    cc._RF.push(e, "f2cc9Y/ZptMDIqokwKEyz/j", "crypto-js");
    var r, n, i = i || function(t) {
      var e = {},
        r = e.lib = {},
        n = function() {},
        i = r.Base = {
          extend: function(t) {
            n.prototype = this;
            var e = new n;
            return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
              e.$super.init.apply(this, arguments)
            }), e.init.prototype = e, e.$super = this, e
          },
          create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments), t
          },
          init: function() {},
          mixIn: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
          },
          clone: function() {
            return this.init.prototype.extend(this)
          }
        },
        o = r.WordArray = i.extend({
          init: function(t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length
          },
          toString: function(t) {
            return (t || a).stringify(this)
          },
          concat: function(t) {
            var e = this.words,
              r = t.words,
              n = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), n % 4)
              for (var i = 0; i < t; i++) e[n + i >>> 2] |= (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (n + i) % 4 * 8;
            else if (65535 < r.length)
              for (i = 0; i < t; i += 4) e[n + i >>> 2] = r[i >>> 2];
            else e.push.apply(e, r);
            return this.sigBytes += t, this
          },
          clamp: function() {
            var e = this.words,
              r = this.sigBytes;
            e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
          },
          clone: function() {
            var t = i.clone.call(this);
            return t.words = this.words.slice(0), t
          },
          random: function(e) {
            for (var r = [], n = 0; n < e; n += 4) r.push(4294967296 * t.random() | 0);
            return new o.init(r, e)
          }
        }),
        s = e.enc = {},
        a = s.Hex = {
          stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], n = 0; n < t; n++) {
              var i = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
              r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
            }
            return r.join("")
          },
          parse: function(t) {
            for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new o.init(r, e / 2)
          }
        },
        u = s.Latin1 = {
          stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], n = 0; n < t; n++) r.push(String.fromCharCode(e[n >>> 2] >>> 24 - n % 4 * 8 & 255));
            return r.join("")
          },
          parse: function(t) {
            for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
            return new o.init(r, e)
          }
        },
        f = s.Utf8 = {
          stringify: function(t) {
            try {
              return decodeURIComponent(escape(u.stringify(t)))
            } catch (e) {
              throw Error("Malformed UTF-8 data")
            }
          },
          parse: function(t) {
            return u.parse(unescape(encodeURIComponent(t)))
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function() {
            this._data = new o.init, this._nDataBytes = 0
          },
          _append: function(t) {
            "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
          },
          _process: function(e) {
            var r = this._data,
              n = r.words,
              i = r.sigBytes,
              s = this.blockSize,
              a = i / (4 * s);
            if (e = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s, i = t.min(4 * e, i), e) {
              for (var u = 0; u < e; u += s) this._doProcessBlock(n, u);
              u = n.splice(0, e), r.sigBytes -= i
            }
            return new o.init(u, i)
          },
          clone: function() {
            var t = i.clone.call(this);
            return t._data = this._data.clone(), t
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function(t) {
          this.cfg = this.cfg.extend(t), this.reset()
        },
        reset: function() {
          h.reset.call(this), this._doReset()
        },
        update: function(t) {
          return this._append(t), this._process(), this
        },
        finalize: function(t) {
          return t && this._append(t), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(t) {
          return function(e, r) {
            return new t.init(r).finalize(e)
          }
        },
        _createHmacHelper: function(t) {
          return function(e, r) {
            return new c.HMAC.init(t, r).finalize(e)
          }
        }
      });
      var c = e.algo = {};
      return e
    }(Math);
    n = (r = i).lib.WordArray, r.enc.Base64 = {
        stringify: function(t) {
          var e = t.words,
            r = t.sigBytes,
            n = this._map;
          t.clamp(), t = [];
          for (var i = 0; i < r; i += 3)
            for (var o = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; 4 > s && i + .75 * s < r; s++) t.push(n.charAt(o >>> 6 * (3 - s) & 63));
          if (e = n.charAt(64))
            for (; t.length % 4;) t.push(e);
          return t.join("")
        },
        parse: function(t) {
          var e = t.length,
            r = this._map;
          (i = r.charAt(64)) && -1 != (i = t.indexOf(i)) && (e = i);
          for (var i = [], o = 0, s = 0; s < e; s++)
            if (s % 4) {
              var a = r.indexOf(t.charAt(s - 1)) << s % 4 * 2,
                u = r.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2;
              i[o >>> 2] |= (a | u) << 24 - o % 4 * 8, o++
            } return n.create(i, o)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      },
      function(t) {
        function e(t, e, r, n, i, o, s) {
          return ((t = t + (e & r | ~e & n) + i + s) << o | t >>> 32 - o) + e
        }

        function r(t, e, r, n, i, o, s) {
          return ((t = t + (e & n | r & ~n) + i + s) << o | t >>> 32 - o) + e
        }

        function n(t, e, r, n, i, o, s) {
          return ((t = t + (e ^ r ^ n) + i + s) << o | t >>> 32 - o) + e
        }

        function o(t, e, r, n, i, o, s) {
          return ((t = t + (r ^ (e | ~n)) + i + s) << o | t >>> 32 - o) + e
        }
        for (var s = i, a = (f = s.lib).WordArray, u = f.Hasher, f = s.algo, h = [], c = 0; 64 > c; c++) h[c] = 4294967296 * t.abs(t.sin(c + 1)) | 0;
        f = f.MD5 = u.extend({
          _doReset: function() {
            this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
          },
          _doProcessBlock: function(t, i) {
            for (var s = 0; 16 > s; s++) {
              var a = t[u = i + s];
              t[u] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
            }
            s = this._hash.words;
            var u = t[i + 0],
              f = (a = t[i + 1], t[i + 2]),
              c = t[i + 3],
              l = t[i + 4],
              p = t[i + 5],
              g = t[i + 6],
              d = t[i + 7],
              y = t[i + 8],
              v = t[i + 9],
              w = t[i + 10],
              _ = t[i + 11],
              m = t[i + 12],
              b = t[i + 13],
              E = t[i + 14],
              B = t[i + 15],
              A = e(A = s[0], L = s[1], C = s[2], O = s[3], u, 7, h[0]),
              O = e(O, A, L, C, a, 12, h[1]),
              C = e(C, O, A, L, f, 17, h[2]),
              L = e(L, C, O, A, c, 22, h[3]);
            A = e(A, L, C, O, l, 7, h[4]), O = e(O, A, L, C, p, 12, h[5]), C = e(C, O, A, L, g, 17, h[6]), L = e(L, C, O, A, d, 22, h[7]), A = e(A, L, C, O, y, 7, h[8]), O = e(O, A, L, C, v, 12, h[9]), C = e(C, O, A, L, w, 17, h[10]), L = e(L, C, O, A, _, 22, h[11]), A = e(A, L, C, O, m, 7, h[12]), O = e(O, A, L, C, b, 12, h[13]), C = e(C, O, A, L, E, 17, h[14]), A = r(A, L = e(L, C, O, A, B, 22, h[15]), C, O, a, 5, h[16]), O = r(O, A, L, C, g, 9, h[17]), C = r(C, O, A, L, _, 14, h[18]), L = r(L, C, O, A, u, 20, h[19]), A = r(A, L, C, O, p, 5, h[20]), O = r(O, A, L, C, w, 9, h[21]), C = r(C, O, A, L, B, 14, h[22]), L = r(L, C, O, A, l, 20, h[23]), A = r(A, L, C, O, v, 5, h[24]), O = r(O, A, L, C, E, 9, h[25]), C = r(C, O, A, L, c, 14, h[26]), L = r(L, C, O, A, y, 20, h[27]), A = r(A, L, C, O, b, 5, h[28]), O = r(O, A, L, C, f, 9, h[29]), C = r(C, O, A, L, d, 14, h[30]), A = n(A, L = r(L, C, O, A, m, 20, h[31]), C, O, p, 4, h[32]), O = n(O, A, L, C, y, 11, h[33]), C = n(C, O, A, L, _, 16, h[34]), L = n(L, C, O, A, E, 23, h[35]), A = n(A, L, C, O, a, 4, h[36]), O = n(O, A, L, C, l, 11, h[37]), C = n(C, O, A, L, d, 16, h[38]), L = n(L, C, O, A, w, 23, h[39]), A = n(A, L, C, O, b, 4, h[40]), O = n(O, A, L, C, u, 11, h[41]), C = n(C, O, A, L, c, 16, h[42]), L = n(L, C, O, A, g, 23, h[43]), A = n(A, L, C, O, v, 4, h[44]), O = n(O, A, L, C, m, 11, h[45]), C = n(C, O, A, L, B, 16, h[46]), A = o(A, L = n(L, C, O, A, f, 23, h[47]), C, O, u, 6, h[48]), O = o(O, A, L, C, d, 10, h[49]), C = o(C, O, A, L, E, 15, h[50]), L = o(L, C, O, A, p, 21, h[51]), A = o(A, L, C, O, m, 6, h[52]), O = o(O, A, L, C, c, 10, h[53]), C = o(C, O, A, L, w, 15, h[54]), L = o(L, C, O, A, a, 21, h[55]), A = o(A, L, C, O, y, 6, h[56]), O = o(O, A, L, C, B, 10, h[57]), C = o(C, O, A, L, g, 15, h[58]), L = o(L, C, O, A, b, 21, h[59]), A = o(A, L, C, O, l, 6, h[60]), O = o(O, A, L, C, _, 10, h[61]), C = o(C, O, A, L, f, 15, h[62]), L = o(L, C, O, A, v, 21, h[63]), s[0] = s[0] + A | 0, s[1] = s[1] + L | 0, s[2] = s[2] + C | 0, s[3] = s[3] + O | 0
          },
          _doFinalize: function() {
            var e = this._data,
              r = e.words,
              n = 8 * this._nDataBytes,
              i = 8 * e.sigBytes;
            r[i >>> 5] |= 128 << 24 - i % 32;
            var o = t.floor(n / 4294967296);
            for (r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (r.length + 1), this._process(), r = (e = this._hash).words, n = 0; 4 > n; n++) i = r[n], r[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
            return e
          },
          clone: function() {
            var t = u.clone.call(this);
            return t._hash = this._hash.clone(), t
          }
        }), s.MD5 = u._createHelper(f), s.HmacMD5 = u._createHmacHelper(f)
      }(Math),
      function() {
        var t, e = i,
          r = (t = e.lib).Base,
          n = t.WordArray,
          o = (t = e.algo).EvpKDF = r.extend({
            cfg: r.extend({
              keySize: 4,
              hasher: t.MD5,
              iterations: 1
            }),
            init: function(t) {
              this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
              for (var r = (a = this.cfg).hasher.create(), i = n.create(), o = i.words, s = a.keySize, a = a.iterations; o.length < s;) {
                u && r.update(u);
                var u = r.update(t).finalize(e);
                r.reset();
                for (var f = 1; f < a; f++) u = r.finalize(u), r.reset();
                i.concat(u)
              }
              return i.sigBytes = 4 * s, i
            }
          });
        e.EvpKDF = function(t, e, r) {
          return o.create(r).compute(t, e)
        }
      }(), i.lib.Cipher || function() {
        var t = (p = i).lib,
          e = t.Base,
          r = t.WordArray,
          n = t.BufferedBlockAlgorithm,
          o = p.enc.Base64,
          s = p.algo.EvpKDF,
          a = t.Cipher = n.extend({
            cfg: e.extend(),
            createEncryptor: function(t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e)
            },
            createDecryptor: function(t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e)
            },
            init: function(t, e, r) {
              this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset()
            },
            reset: function() {
              n.reset.call(this), this._doReset()
            },
            process: function(t) {
              return this._append(t), this._process()
            },
            finalize: function(t) {
              return t && this._append(t), this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(t) {
              return {
                encrypt: function(e, r, n) {
                  return ("string" == typeof r ? g : l).encrypt(t, e, r, n)
                },
                decrypt: function(e, r, n) {
                  return ("string" == typeof r ? g : l).decrypt(t, e, r, n)
                }
              }
            }
          });
        t.StreamCipher = a.extend({
          _doFinalize: function() {
            return this._process(!0)
          },
          blockSize: 1
        });
        var u = p.mode = {},
          f = function(t, e, r) {
            var n = this._iv;
            n ? this._iv = void 0 : n = this._prevBlock;
            for (var i = 0; i < r; i++) t[e + i] ^= n[i]
          },
          h = (t.BlockCipherMode = e.extend({
            createEncryptor: function(t, e) {
              return this.Encryptor.create(t, e)
            },
            createDecryptor: function(t, e) {
              return this.Decryptor.create(t, e)
            },
            init: function(t, e) {
              this._cipher = t, this._iv = e
            }
          })).extend();
        h.Encryptor = h.extend({
          processBlock: function(t, e) {
            var r = this._cipher,
              n = r.blockSize;
            f.call(this, t, e, n), r.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n)
          }
        }), h.Decryptor = h.extend({
          processBlock: function(t, e) {
            var r = this._cipher,
              n = r.blockSize,
              i = t.slice(e, e + n);
            r.decryptBlock(t, e), f.call(this, t, e, n), this._prevBlock = i
          }
        }), u = u.CBC = h, h = (p.pad = {}).Pkcs7 = {
          pad: function(t, e) {
            for (var n, i = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, o = [], s = 0; s < n; s += 4) o.push(i);
            n = r.create(o, n), t.concat(n)
          },
          unpad: function(t) {
            t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
          }
        }, t.BlockCipher = a.extend({
          cfg: a.cfg.extend({
            mode: u,
            padding: h
          }),
          reset: function() {
            a.reset.call(this);
            var t = (e = this.cfg).iv,
              e = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var r = e.createEncryptor;
            else r = e.createDecryptor, this._minBufferSize = 1;
            this._mode = r.call(e, this, t && t.words)
          },
          _doProcessBlock: function(t, e) {
            this._mode.processBlock(t, e)
          },
          _doFinalize: function() {
            var t = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              t.pad(this._data, this.blockSize);
              var e = this._process(!0)
            } else e = this._process(!0), t.unpad(e);
            return e
          },
          blockSize: 4
        });
        var c = t.CipherParams = e.extend({
            init: function(t) {
              this.mixIn(t)
            },
            toString: function(t) {
              return (t || this.formatter).stringify(this)
            }
          }),
          l = (u = (p.format = {}).OpenSSL = {
            stringify: function(t) {
              var e = t.ciphertext;
              return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
            },
            parse: function(t) {
              var e = (t = o.parse(t)).words;
              if (1398893684 == e[0] && 1701076831 == e[1]) {
                var n = r.create(e.slice(2, 4));
                e.splice(0, 4), t.sigBytes -= 16
              }
              return c.create({
                ciphertext: t,
                salt: n
              })
            }
          }, t.SerializableCipher = e.extend({
            cfg: e.extend({
              format: u
            }),
            encrypt: function(t, e, r, n) {
              n = this.cfg.extend(n);
              var i = t.createEncryptor(r, n);
              return e = i.finalize(e), i = i.cfg, c.create({
                ciphertext: e,
                key: r,
                iv: i.iv,
                algorithm: t,
                mode: i.mode,
                padding: i.padding,
                blockSize: t.blockSize,
                formatter: n.format
              })
            },
            decrypt: function(t, e, r, n) {
              return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(r, n).finalize(e.ciphertext)
            },
            _parse: function(t, e) {
              return "string" == typeof t ? e.parse(t, this) : t
            }
          })),
          p = (p.kdf = {}).OpenSSL = {
            execute: function(t, e, n, i) {
              return i || (i = r.random(8)), t = s.create({
                keySize: e + n
              }).compute(t, i), n = r.create(t.words.slice(e), 4 * n), t.sigBytes = 4 * e, c.create({
                key: t,
                iv: n,
                salt: i
              })
            }
          },
          g = t.PasswordBasedCipher = l.extend({
            cfg: l.cfg.extend({
              kdf: p
            }),
            encrypt: function(t, e, r, n) {
              return r = (n = this.cfg.extend(n)).kdf.execute(r, t.keySize, t.ivSize), n.iv = r.iv, (t = l.encrypt.call(this, t, e, r.key, n)).mixIn(r), t
            },
            decrypt: function(t, e, r, n) {
              return n = this.cfg.extend(n), e = this._parse(e, n.format), r = n.kdf.execute(r, t.keySize, t.ivSize, e.salt), n.iv = r.iv, l.decrypt.call(this, t, e, r.key, n)
            }
          })
      }(),
      function() {
        for (var t = i, e = t.lib.BlockCipher, r = t.algo, n = [], o = [], s = [], a = [], u = [], f = [], h = [], c = [], l = [], p = [], g = [], d = 0; 256 > d; d++) g[d] = 128 > d ? d << 1 : d << 1 ^ 283;
        var y = 0,
          v = 0;
        for (d = 0; 256 > d; d++) {
          var w = (w = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & w ^ 99;
          n[y] = w, o[w] = y;
          var _ = g[y],
            m = g[_],
            b = g[m],
            E = 257 * g[w] ^ 16843008 * w;
          s[y] = E << 24 | E >>> 8, a[y] = E << 16 | E >>> 16, u[y] = E << 8 | E >>> 24, f[y] = E, E = 16843009 * b ^ 65537 * m ^ 257 * _ ^ 16843008 * y, h[w] = E << 24 | E >>> 8, c[w] = E << 16 | E >>> 16, l[w] = E << 8 | E >>> 24, p[w] = E, y ? (y = _ ^ g[g[g[b ^ _]]], v ^= g[g[v]]) : y = v = 1
        }
        var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        r = r.AES = e.extend({
          _doReset: function() {
            for (var t = (r = this._key).words, e = r.sigBytes / 4, r = 4 * ((this._nRounds = e + 6) + 1), i = this._keySchedule = [], o = 0; o < r; o++)
              if (o < e) i[o] = t[o];
              else {
                var s = i[o - 1];
                o % e ? 6 < e && 4 == o % e && (s = n[s >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[255 & s]) : (s = n[(s = s << 8 | s >>> 24) >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[255 & s], s ^= B[o / e | 0] << 24), i[o] = i[o - e] ^ s
              } for (t = this._invKeySchedule = [], e = 0; e < r; e++) o = r - e, s = e % 4 ? i[o] : i[o - 4], t[e] = 4 > e || 4 >= o ? s : h[n[s >>> 24]] ^ c[n[s >>> 16 & 255]] ^ l[n[s >>> 8 & 255]] ^ p[n[255 & s]]
          },
          encryptBlock: function(t, e) {
            this._doCryptBlock(t, e, this._keySchedule, s, a, u, f, n)
          },
          decryptBlock: function(t, e) {
            var r = t[e + 1];
            t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, h, c, l, p, o), r = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = r
          },
          _doCryptBlock: function(t, e, r, n, i, o, s, a) {
            for (var u = this._nRounds, f = t[e] ^ r[0], h = t[e + 1] ^ r[1], c = t[e + 2] ^ r[2], l = t[e + 3] ^ r[3], p = 4, g = 1; g < u; g++) {
              var d = n[f >>> 24] ^ i[h >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & l] ^ r[p++],
                y = n[h >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ r[p++],
                v = n[c >>> 24] ^ i[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & h] ^ r[p++];
              l = n[l >>> 24] ^ i[f >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & c] ^ r[p++], f = d, h = y, c = v
            }
            d = (a[f >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ r[p++], y = (a[h >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[p++], v = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & h]) ^ r[p++], l = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & c]) ^ r[p++], t[e] = d, t[e + 1] = y, t[e + 2] = v, t[e + 3] = l
          },
          keySize: 8
        }), t.AES = e._createHelper(r)
      }(), cc._RF.pop()
  }, {}],
  ieee754: [function(t, e, r) {
    "use strict";
    cc._RF.push(e, "c5ef3tVsWFLAalZIKojutFG", "ieee754"), r.read = function(t, e, r, n, i) {
      var o, s, a = 8 * i - n - 1,
        u = (1 << a) - 1,
        f = u >> 1,
        h = -7,
        c = r ? i - 1 : 0,
        l = r ? -1 : 1,
        p = t[e + c];
      for (c += l, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = 256 * o + t[e + c], c += l, h -= 8);
      for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = 256 * s + t[e + c], c += l, h -= 8);
      if (0 === o) o = 1 - f;
      else {
        if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
        s += Math.pow(2, n), o -= f
      }
      return (p ? -1 : 1) * s * Math.pow(2, o - n)
    }, r.write = function(t, e, r, n, i, o) {
      var s, a, u, f = 8 * o - i - 1,
        h = (1 << f) - 1,
        c = h >> 1,
        l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = n ? 0 : o - 1,
        g = n ? 1 : -1,
        d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) * u >= 2 && (s++, u /= 2), s + c >= h ? (a = 0, s = h) : s + c >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += g, a /= 256, i -= 8);
      for (s = s << i | a, f += i; f > 0; t[r + p] = 255 & s, p += g, s /= 256, f -= 8);
      t[r + p - g] |= 128 * d
    }, cc._RF.pop()
  }, {}],
  qrcode: [function(t, e) {
    "use strict";

    function r(t) {
      this.mode = i.MODE_8BIT_BYTE, this.data = t
    }

    function n(t, e) {
      this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
    }
    cc._RF.push(e, "2a7cfs5zlNEUoJtqxYCrZbu", "qrcode"), r.prototype = {
      getLength: function() {
        return this.data.length
      },
      write: function(t) {
        for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
      }
    }, n.prototype = {
      addData: function(t) {
        var e = new r(t);
        this.dataList.push(e), this.dataCache = null
      },
      isDark: function(t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
        return this.modules[t][e]
      },
      getModuleCount: function() {
        return this.moduleCount
      },
      make: function() {
        if (this.typeNumber < 1) {
          var t = 1;
          for (t = 1; t < 40; t++) {
            for (var e = f.getRSBlocks(t, this.errorCorrectLevel), r = new h, n = 0, i = 0; i < e.length; i++) n += e[i].dataCount;
            for (i = 0; i < this.dataList.length; i++) {
              var s = this.dataList[i];
              r.put(s.mode, 4), r.put(s.getLength(), o.getLengthInBits(s.mode, t)), s.write(r)
            }
            if (r.getLengthInBits() <= 8 * n) break
          }
          this.typeNumber = t
        }
        this.makeImpl(!1, this.getBestMaskPattern())
      },
      makeImpl: function(t, e) {
        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
          this.modules[r] = new Array(this.moduleCount);
          for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
      },
      setupPositionProbePattern: function(t, e) {
        for (var r = -1; r <= 7; r++)
          if (!(t + r <= -1 || this.moduleCount <= t + r))
            for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4)
      },
      getBestMaskPattern: function() {
        for (var t = 0, e = 0, r = 0; r < 8; r++) {
          this.makeImpl(!0, r);
          var n = o.getLostPoint(this);
          (0 == r || t > n) && (t = n, e = r)
        }
        return e
      },
      createMovieClip: function(t, e, r) {
        var n = t.createEmptyMovieClip(e, r);
        this.make();
        for (var i = 0; i < this.modules.length; i++)
          for (var o = 1 * i, s = 0; s < this.modules[i].length; s++) {
            var a = 1 * s;
            this.modules[i][s] && (n.beginFill(0, 100), n.moveTo(a, o), n.lineTo(a + 1, o), n.lineTo(a + 1, o + 1), n.lineTo(a, o + 1), n.endFill())
          }
        return n
      },
      setupTimingPattern: function() {
        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
      },
      setupPositionAdjustPattern: function() {
        for (var t = o.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
          for (var r = 0; r < t.length; r++) {
            var n = t[e],
              i = t[r];
            if (null == this.modules[n][i])
              for (var s = -2; s <= 2; s++)
                for (var a = -2; a <= 2; a++) this.modules[n + s][i + a] = -2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a
          }
      },
      setupTypeNumber: function(t) {
        for (var e = o.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
          var n = !t && 1 == (e >> r & 1);
          this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (r = 0; r < 18; r++) n = !t && 1 == (e >> r & 1), this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
      },
      setupTypeInfo: function(t, e) {
        for (var r = this.errorCorrectLevel << 3 | e, n = o.getBCHTypeInfo(r), i = 0; i < 15; i++) {
          var s = !t && 1 == (n >> i & 1);
          i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
        }
        for (i = 0; i < 15; i++) s = !t && 1 == (n >> i & 1), i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s;
        this.modules[this.moduleCount - 8][8] = !t
      },
      mapData: function(t, e) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, a = this.moduleCount - 1; a > 0; a -= 2)
          for (6 == a && a--;;) {
            for (var u = 0; u < 2; u++)
              if (null == this.modules[n][a - u]) {
                var f = !1;
                s < t.length && (f = 1 == (t[s] >>> i & 1)), o.getMask(e, n, a - u) && (f = !f), this.modules[n][a - u] = f, -1 == --i && (s++, i = 7)
              } if ((n += r) < 0 || this.moduleCount <= n) {
              n -= r, r = -r;
              break
            }
          }
      }
    }, n.PAD0 = 236, n.PAD1 = 17, n.createData = function(t, e, r) {
      for (var i = f.getRSBlocks(t, e), s = new h, a = 0; a < r.length; a++) {
        var u = r[a];
        s.put(u.mode, 4), s.put(u.getLength(), o.getLengthInBits(u.mode, t)), u.write(s)
      }
      var c = 0;
      for (a = 0; a < i.length; a++) c += i[a].dataCount;
      if (s.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * c + ")");
      for (s.getLengthInBits() + 4 <= 8 * c && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
      for (; !(s.getLengthInBits() >= 8 * c || (s.put(n.PAD0, 8), s.getLengthInBits() >= 8 * c));) s.put(n.PAD1, 8);
      return n.createBytes(s, i)
    }, n.createBytes = function(t, e) {
      for (var r = 0, n = 0, i = 0, s = new Array(e.length), a = new Array(e.length), f = 0; f < e.length; f++) {
        var h = e[f].dataCount,
          c = e[f].totalCount - h;
        n = Math.max(n, h), i = Math.max(i, c), s[f] = new Array(h);
        for (var l = 0; l < s[f].length; l++) s[f][l] = 255 & t.buffer[l + r];
        r += h;
        var p = o.getErrorCorrectPolynomial(c),
          g = new u(s[f], p.getLength() - 1).mod(p);
        for (a[f] = new Array(p.getLength() - 1), l = 0; l < a[f].length; l++) {
          var d = l + g.getLength() - a[f].length;
          a[f][l] = d >= 0 ? g.get(d) : 0
        }
      }
      var y = 0;
      for (l = 0; l < e.length; l++) y += e[l].totalCount;
      var v = new Array(y),
        w = 0;
      for (l = 0; l < n; l++)
        for (f = 0; f < e.length; f++) l < s[f].length && (v[w++] = s[f][l]);
      for (l = 0; l < i; l++)
        for (f = 0; f < e.length; f++) l < a[f].length && (v[w++] = a[f][l]);
      return v
    };
    for (var i = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      }, o = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(t) {
          for (var e = t << 10; o.getBCHDigit(e) - o.getBCHDigit(o.G15) >= 0;) e ^= o.G15 << o.getBCHDigit(e) - o.getBCHDigit(o.G15);
          return (t << 10 | e) ^ o.G15_MASK
        },
        getBCHTypeNumber: function(t) {
          for (var e = t << 12; o.getBCHDigit(e) - o.getBCHDigit(o.G18) >= 0;) e ^= o.G18 << o.getBCHDigit(e) - o.getBCHDigit(o.G18);
          return t << 12 | e
        },
        getBCHDigit: function(t) {
          for (var e = 0; 0 != t;) e++, t >>>= 1;
          return e
        },
        getPatternPosition: function(t) {
          return o.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function(t, e, r) {
          switch (t) {
            case 0:
              return (e + r) % 2 == 0;
            case 1:
              return e % 2 == 0;
            case 2:
              return r % 3 == 0;
            case 3:
              return (e + r) % 3 == 0;
            case 4:
              return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
            case 5:
              return e * r % 2 + e * r % 3 == 0;
            case 6:
              return (e * r % 2 + e * r % 3) % 2 == 0;
            case 7:
              return (e * r % 3 + (e + r) % 2) % 2 == 0;
            default:
              throw new Error("bad maskPattern:" + t)
          }
        },
        getErrorCorrectPolynomial: function(t) {
          for (var e = new u([1], 0), r = 0; r < t; r++) e = e.multiply(new u([1, s.gexp(r)], 0));
          return e
        },
        getLengthInBits: function(t, e) {
          if (1 <= e && e < 10) switch (t) {
            case i.MODE_NUMBER:
              return 10;
            case i.MODE_ALPHA_NUM:
              return 9;
            case i.MODE_8BIT_BYTE:
            case i.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + t)
          } else if (e < 27) switch (t) {
            case i.MODE_NUMBER:
              return 12;
            case i.MODE_ALPHA_NUM:
              return 11;
            case i.MODE_8BIT_BYTE:
              return 16;
            case i.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + t)
          } else {
            if (!(e < 41)) throw new Error("type:" + e);
            switch (t) {
              case i.MODE_NUMBER:
                return 14;
              case i.MODE_ALPHA_NUM:
                return 13;
              case i.MODE_8BIT_BYTE:
                return 16;
              case i.MODE_KANJI:
                return 12;
              default:
                throw new Error("mode:" + t)
            }
          }
        },
        getLostPoint: function(t) {
          for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
            for (var i = 0; i < e; i++) {
              for (var o = 0, s = t.isDark(n, i), a = -1; a <= 1; a++)
                if (!(n + a < 0 || e <= n + a))
                  for (var u = -1; u <= 1; u++) i + u < 0 || e <= i + u || 0 == a && 0 == u || s == t.isDark(n + a, i + u) && o++;
              o > 5 && (r += 3 + o - 5)
            }
          for (n = 0; n < e - 1; n++)
            for (i = 0; i < e - 1; i++) {
              var f = 0;
              t.isDark(n, i) && f++, t.isDark(n + 1, i) && f++, t.isDark(n, i + 1) && f++, t.isDark(n + 1, i + 1) && f++, 0 != f && 4 != f || (r += 3)
            }
          for (n = 0; n < e; n++)
            for (i = 0; i < e - 6; i++) t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
          for (i = 0; i < e; i++)
            for (n = 0; n < e - 6; n++) t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
          var h = 0;
          for (i = 0; i < e; i++)
            for (n = 0; n < e; n++) t.isDark(n, i) && h++;
          return r + Math.abs(100 * h / e / e - 50) / 5 * 10
        }
      }, s = {
        glog: function(t) {
          if (t < 1) throw new Error("glog(" + t + ")");
          return s.LOG_TABLE[t]
        },
        gexp: function(t) {
          for (; t < 0;) t += 255;
          for (; t >= 256;) t -= 255;
          return s.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
      }, a = 0; a < 8; a++) s.EXP_TABLE[a] = 1 << a;
    for (a = 8; a < 256; a++) s.EXP_TABLE[a] = s.EXP_TABLE[a - 4] ^ s.EXP_TABLE[a - 5] ^ s.EXP_TABLE[a - 6] ^ s.EXP_TABLE[a - 8];
    for (a = 0; a < 255; a++) s.LOG_TABLE[s.EXP_TABLE[a]] = a;

    function u(t, e) {
      if (null == t.length) throw new Error(t.length + "/" + e);
      for (var r = 0; r < t.length && 0 == t[r];) r++;
      this.num = new Array(t.length - r + e);
      for (var n = 0; n < t.length - r; n++) this.num[n] = t[n + r]
    }

    function f(t, e) {
      this.totalCount = t, this.dataCount = e
    }

    function h() {
      this.buffer = new Array, this.length = 0
    }
    u.prototype = {
      get: function(t) {
        return this.num[t]
      },
      getLength: function() {
        return this.num.length
      },
      multiply: function(t) {
        for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
          for (var n = 0; n < t.getLength(); n++) e[r + n] ^= s.gexp(s.glog(this.get(r)) + s.glog(t.get(n)));
        return new u(e, 0)
      },
      mod: function(t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var e = s.glog(this.get(0)) - s.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
        for (n = 0; n < t.getLength(); n++) r[n] ^= s.gexp(s.glog(t.get(n)) + e);
        return new u(r, 0).mod(t)
      }
    }, f.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ], f.getRSBlocks = function(t, e) {
      var r = f.getRsBlockTable(t, e);
      if (null == r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
      for (var n = r.length / 3, i = new Array, o = 0; o < n; o++)
        for (var s = r[3 * o + 0], a = r[3 * o + 1], u = r[3 * o + 2], h = 0; h < s; h++) i.push(new f(a, u));
      return i
    }, f.getRsBlockTable = function(t, e) {
      switch (e) {
        case 1:
          return f.RS_BLOCK_TABLE[4 * (t - 1) + 0];
        case 0:
          return f.RS_BLOCK_TABLE[4 * (t - 1) + 1];
        case 3:
          return f.RS_BLOCK_TABLE[4 * (t - 1) + 2];
        case 2:
          return f.RS_BLOCK_TABLE[4 * (t - 1) + 3];
        default:
          return
      }
    }, h.prototype = {
      get: function(t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
      },
      put: function(t, e) {
        for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1))
      },
      getLengthInBits: function() {
        return this.length
      },
      putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
      }
    }, cc._RF.pop()
  }, {}]
}, {}, ["Helloworld", "XORCipher", "base64-js", "biginteger", "buffer", "crypto-js", "ieee754", "qrcode"]);