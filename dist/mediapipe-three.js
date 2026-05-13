var u2 = Object.defineProperty;
var l2 = (e, t, i) => t in e ? u2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var W = (e, t, i) => l2(e, typeof t != "symbol" ? t + "" : t, i);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ea = "184";
const ia = "", Vt = "srgb", To = "srgb-linear", zo = "linear", Bn = "srgb";
function d2(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t] >= 65535) return !0;
  return !1;
}
function Co(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
const Bo = {};
function sa(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const i = e[1];
    i && i.isStackTrace ? e[0] += " " + i.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function dt(...e) {
  e = sa(e);
  const t = "THREE." + e.shift();
  {
    const i = e[0];
    i && i.isStackTrace ? console.warn(i.getError(t)) : console.warn(t, ...e);
  }
}
function qe(...e) {
  e = sa(e);
  const t = "THREE." + e.shift();
  {
    const i = e[0];
    i && i.isStackTrace ? console.error(i.getError(t)) : console.error(t, ...e);
  }
}
function Lo(...e) {
  const t = e.join(" ");
  t in Bo || (Bo[t] = !0, dt(...e));
}
class ls {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(t, i) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[t] === void 0 && (s[t] = []), s[t].indexOf(i) === -1 && s[t].push(i);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(t, i) {
    const s = this._listeners;
    return s === void 0 ? !1 : s[t] !== void 0 && s[t].indexOf(i) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(t, i) {
    const s = this._listeners;
    if (s === void 0) return;
    const n = s[t];
    if (n !== void 0) {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(t) {
    const i = this._listeners;
    if (i === void 0) return;
    const s = i[t.type];
    if (s !== void 0) {
      t.target = this;
      const n = s.slice(0);
      for (let r = 0, o = n.length; r < o; r++)
        n[r].call(this, t);
      t.target = null;
    }
  }
}
const pt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Io = 1234567;
const na = Math.PI / 180, ra = 180 / Math.PI;
function Ii() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (pt[e & 255] + pt[e >> 8 & 255] + pt[e >> 16 & 255] + pt[e >> 24 & 255] + "-" + pt[t & 255] + pt[t >> 8 & 255] + "-" + pt[t >> 16 & 15 | 64] + pt[t >> 24 & 255] + "-" + pt[i & 63 | 128] + pt[i >> 8 & 255] + "-" + pt[i >> 16 & 255] + pt[i >> 24 & 255] + pt[s & 255] + pt[s >> 8 & 255] + pt[s >> 16 & 255] + pt[s >> 24 & 255]).toLowerCase();
}
function T(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function Er(e, t) {
  return (e % t + t) % t;
}
function f2(e, t, i, s, n) {
  return s + (e - t) * (n - s) / (i - t);
}
function p2(e, t, i) {
  return e !== t ? (i - e) / (t - e) : 0;
}
function es(e, t, i) {
  return (1 - i) * e + i * t;
}
function m2(e, t, i, s) {
  return es(e, t, 1 - Math.exp(-i * s));
}
function g2(e, t = 1) {
  return t - Math.abs(Er(e, t * 2) - t);
}
function y2(e, t, i) {
  return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * (3 - 2 * e));
}
function x2(e, t, i) {
  return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function b2(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function _2(e, t) {
  return e + Math.random() * (t - e);
}
function w2(e) {
  return e * (0.5 - Math.random());
}
function M2(e) {
  e !== void 0 && (Io = e);
  let t = Io += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function A2(e) {
  return e * na;
}
function S2(e) {
  return e * ra;
}
function v2(e) {
  return (e & e - 1) === 0 && e !== 0;
}
function k2(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function E2(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function F2(e, t, i, s, n) {
  const r = Math.cos, o = Math.sin, a = r(i / 2), h = o(i / 2), c = r((t + s) / 2), u = o((t + s) / 2), l = r((t - s) / 2), d = o((t - s) / 2), f = r((s - t) / 2), p = o((s - t) / 2);
  switch (n) {
    case "XYX":
      e.set(a * u, h * l, h * d, a * c);
      break;
    case "YZY":
      e.set(h * d, a * u, h * l, a * c);
      break;
    case "ZXZ":
      e.set(h * l, h * d, a * u, a * c);
      break;
    case "XZX":
      e.set(a * u, h * p, h * f, a * c);
      break;
    case "YXY":
      e.set(h * f, a * u, h * p, a * c);
      break;
    case "ZYZ":
      e.set(h * p, h * f, a * u, a * c);
      break;
    default:
      dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + n);
  }
}
function yi(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function _t(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const T2 = {
  DEG2RAD: na,
  RAD2DEG: ra,
  /**
   * Generate a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: Ii,
  /**
   * Clamps the given value between min and max.
   *
   * @static
   * @method
   * @param {number} value - The value to clamp.
   * @param {number} min - The min value.
   * @param {number} max - The max value.
   * @return {number} The clamped value.
   */
  clamp: T,
  /**
   * Computes the Euclidean modulo of the given parameters that
   * is `( ( n % m ) + m ) % m`.
   *
   * @static
   * @method
   * @param {number} n - The first parameter.
   * @param {number} m - The second parameter.
   * @return {number} The Euclidean modulo.
   */
  euclideanModulo: Er,
  /**
   * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
   * for the given value.
   *
   * @static
   * @method
   * @param {number} x - The value to be mapped.
   * @param {number} a1 - Minimum value for range A.
   * @param {number} a2 - Maximum value for range A.
   * @param {number} b1 - Minimum value for range B.
   * @param {number} b2 - Maximum value for range B.
   * @return {number} The mapped value.
   */
  mapLinear: f2,
  /**
   * Returns the percentage in the closed interval `[0, 1]` of the given value
   * between the start and end point.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} value - A value between start and end.
   * @return {number} The interpolation factor.
   */
  inverseLerp: p2,
  /**
   * Returns a value linearly interpolated from two known points based on the given interval -
   * `t = 0` will return `x` and `t = 1` will return `y`.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {number} The interpolated value.
   */
  lerp: es,
  /**
   * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
   * time to maintain frame rate independent movement. For details, see
   * [Frame rate independent damping using lerp](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/).
   *
   * @static
   * @method
   * @param {number} x - The current point.
   * @param {number} y - The target point.
   * @param {number} lambda - A higher lambda value will make the movement more sudden,
   * and a lower value will make the movement more gradual.
   * @param {number} dt - Delta time in seconds.
   * @return {number} The interpolated value.
   */
  damp: m2,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: g2,
  /**
   * Returns a value in the range `[0,1]` that represents the percentage that `x` has
   * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
   * the `min` and `max`.
   *
   * See [Smoothstep](http://en.wikipedia.org/wiki/Smoothstep) for more details.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smoothstep: y2,
  /**
   * A [variation on smoothstep](https://en.wikipedia.org/wiki/Smoothstep#Variations)
   * that has zero 1st and 2nd order derivatives at x=0 and x=1.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smootherstep: x2,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: b2,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: _2,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: w2,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: M2,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: A2,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: S2,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: v2,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: k2,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: E2,
  /**
   * Sets the given quaternion from the [Intrinsic Proper Euler Angles](https://en.wikipedia.org/wiki/Euler_angles)
   * defined by the given angles and order.
   *
   * Rotations are applied to the axes in the order specified by order:
   * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
   *
   * @static
   * @method
   * @param {Quaternion} q - The quaternion to set.
   * @param {number} a - The rotation applied to the first axis, in radians.
   * @param {number} b - The rotation applied to the second axis, in radians.
   * @param {number} c - The rotation applied to the third axis, in radians.
   * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
   */
  setQuaternionFromProperEuler: F2,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: _t,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: yi
}, So = class So {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, i = 0) {
    this.x = t, this.y = i;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(t, i) {
    return this.x = t, this.y = i, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(t) {
    const i = this.x, s = this.y, n = t.elements;
    return this.x = n[0] * i + n[3] * s + n[6], this.y = n[1] * i + n[4] * s + n[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(t, i) {
    return this.x = T(this.x, t.x, i.x), this.y = T(this.y, t.y, i.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(t, i) {
    return this.x = T(this.x, t, i), this.y = T(this.y, t, i), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(t, i) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(T(s, t, i));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    const s = this.dot(t) / i;
    return Math.acos(T(s, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const i = this.x - t.x, s = this.y - t.y;
    return i * i + s * s;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(t, i, s) {
    return this.x = t.x + (i.x - t.x) * s, this.y = t.y + (i.y - t.y) * s, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(t, i) {
    const s = Math.cos(i), n = Math.sin(i), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * s - o * n + t.x, this.y = r * n + o * s + t.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
So.prototype.isVector2 = !0;
let Wt = So;
class ds {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(t = 0, i = 0, s = 0, n = 1) {
    this.isQuaternion = !0, this._x = t, this._y = i, this._z = s, this._w = n;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(t, i, s, n, r, o, a) {
    let h = s[n + 0], c = s[n + 1], u = s[n + 2], l = s[n + 3], d = r[o + 0], f = r[o + 1], p = r[o + 2], m = r[o + 3];
    if (l !== m || h !== d || c !== f || u !== p) {
      let y = h * d + c * f + u * p + l * m;
      y < 0 && (d = -d, f = -f, p = -p, m = -m, y = -y);
      let x = 1 - a;
      if (y < 0.9995) {
        const S = Math.acos(y), E = Math.sin(S);
        x = Math.sin(x * S) / E, a = Math.sin(a * S) / E, h = h * x + d * a, c = c * x + f * a, u = u * x + p * a, l = l * x + m * a;
      } else {
        h = h * x + d * a, c = c * x + f * a, u = u * x + p * a, l = l * x + m * a;
        const S = 1 / Math.sqrt(h * h + c * c + u * u + l * l);
        h *= S, c *= S, u *= S, l *= S;
      }
    }
    t[i] = h, t[i + 1] = c, t[i + 2] = u, t[i + 3] = l;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(t, i, s, n, r, o) {
    const a = s[n], h = s[n + 1], c = s[n + 2], u = s[n + 3], l = r[o], d = r[o + 1], f = r[o + 2], p = r[o + 3];
    return t[i] = a * p + u * l + h * f - c * d, t[i + 1] = h * p + u * d + c * l - a * f, t[i + 2] = c * p + u * f + a * d - h * l, t[i + 3] = u * p - a * l - h * d - c * f, t;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(t, i, s, n) {
    return this._x = t, this._y = i, this._z = s, this._w = n, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(t, i = !0) {
    const s = t._x, n = t._y, r = t._z, o = t._order, a = Math.cos, h = Math.sin, c = a(s / 2), u = a(n / 2), l = a(r / 2), d = h(s / 2), f = h(n / 2), p = h(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * l + c * f * p, this._y = c * f * l - d * u * p, this._z = c * u * p + d * f * l, this._w = c * u * l - d * f * p;
        break;
      case "YXZ":
        this._x = d * u * l + c * f * p, this._y = c * f * l - d * u * p, this._z = c * u * p - d * f * l, this._w = c * u * l + d * f * p;
        break;
      case "ZXY":
        this._x = d * u * l - c * f * p, this._y = c * f * l + d * u * p, this._z = c * u * p + d * f * l, this._w = c * u * l - d * f * p;
        break;
      case "ZYX":
        this._x = d * u * l - c * f * p, this._y = c * f * l + d * u * p, this._z = c * u * p - d * f * l, this._w = c * u * l + d * f * p;
        break;
      case "YZX":
        this._x = d * u * l + c * f * p, this._y = c * f * l + d * u * p, this._z = c * u * p - d * f * l, this._w = c * u * l - d * f * p;
        break;
      case "XZY":
        this._x = d * u * l - c * f * p, this._y = c * f * l - d * u * p, this._z = c * u * p + d * f * l, this._w = c * u * l + d * f * p;
        break;
      default:
        dt("Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return i === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(t, i) {
    const s = i / 2, n = Math.sin(s);
    return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(s), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(t) {
    const i = t.elements, s = i[0], n = i[4], r = i[8], o = i[1], a = i[5], h = i[9], c = i[2], u = i[6], l = i[10], d = s + a + l;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (u - h) * f, this._y = (r - c) * f, this._z = (o - n) * f;
    } else if (s > a && s > l) {
      const f = 2 * Math.sqrt(1 + s - a - l);
      this._w = (u - h) / f, this._x = 0.25 * f, this._y = (n + o) / f, this._z = (r + c) / f;
    } else if (a > l) {
      const f = 2 * Math.sqrt(1 + a - s - l);
      this._w = (r - c) / f, this._x = (n + o) / f, this._y = 0.25 * f, this._z = (h + u) / f;
    } else {
      const f = 2 * Math.sqrt(1 + l - s - a);
      this._w = (o - n) / f, this._x = (r + c) / f, this._y = (h + u) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(t, i) {
    let s = t.dot(i) + 1;
    return s < 1e-8 ? (s = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = s)) : (this._x = t.y * i.z - t.z * i.y, this._y = t.z * i.x - t.x * i.z, this._z = t.x * i.y - t.y * i.x, this._w = s), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    return 2 * Math.acos(Math.abs(T(this.dot(t), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(t, i) {
    const s = this.angleTo(t);
    if (s === 0) return this;
    const n = Math.min(1, i / s);
    return this.slerp(t, n), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(t, i) {
    const s = t._x, n = t._y, r = t._z, o = t._w, a = i._x, h = i._y, c = i._z, u = i._w;
    return this._x = s * u + o * a + n * c - r * h, this._y = n * u + o * h + r * a - s * c, this._z = r * u + o * c + s * h - n * a, this._w = o * u - s * a - n * h - r * c, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(t, i) {
    let s = t._x, n = t._y, r = t._z, o = t._w, a = this.dot(t);
    a < 0 && (s = -s, n = -n, r = -r, o = -o, a = -a);
    let h = 1 - i;
    if (a < 0.9995) {
      const c = Math.acos(a), u = Math.sin(c);
      h = Math.sin(h * c) / u, i = Math.sin(i * c) / u, this._x = this._x * h + s * i, this._y = this._y * h + n * i, this._z = this._z * h + r * i, this._w = this._w * h + o * i, this._onChangeCallback();
    } else
      this._x = this._x * h + s * i, this._y = this._y * h + n * i, this._z = this._z * h + r * i, this._w = this._w * h + o * i, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(t, i, s) {
    return this.copy(t).slerp(i, s);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const t = 2 * Math.PI * Math.random(), i = 2 * Math.PI * Math.random(), s = Math.random(), n = Math.sqrt(1 - s), r = Math.sqrt(s);
    return this.set(
      n * Math.sin(t),
      n * Math.cos(t),
      r * Math.sin(i),
      r * Math.cos(i)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(t, i = 0) {
    return this._x = t[i], this._y = t[i + 1], this._z = t[i + 2], this._w = t[i + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._w, t;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(t, i) {
    return this._x = t.getX(i), this._y = t.getY(i), this._z = t.getZ(i), this._w = t.getW(i), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const vo = class vo {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(t = 0, i = 0, s = 0) {
    this.x = t, this.y = i, this.z = s;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(t, i, s) {
    return s === void 0 && (s = this.z), this.x = t, this.y = i, this.z = s, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(t, i) {
    return this.x = t.x * i.x, this.y = t.y * i.y, this.z = t.z * i.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(t) {
    return this.applyQuaternion(Oo.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, i) {
    return this.applyQuaternion(Oo.setFromAxisAngle(t, i));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(t) {
    const i = this.x, s = this.y, n = this.z, r = t.elements;
    return this.x = r[0] * i + r[3] * s + r[6] * n, this.y = r[1] * i + r[4] * s + r[7] * n, this.z = r[2] * i + r[5] * s + r[8] * n, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(t) {
    const i = this.x, s = this.y, n = this.z, r = t.elements, o = 1 / (r[3] * i + r[7] * s + r[11] * n + r[15]);
    return this.x = (r[0] * i + r[4] * s + r[8] * n + r[12]) * o, this.y = (r[1] * i + r[5] * s + r[9] * n + r[13]) * o, this.z = (r[2] * i + r[6] * s + r[10] * n + r[14]) * o, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(t) {
    const i = this.x, s = this.y, n = this.z, r = t.x, o = t.y, a = t.z, h = t.w, c = 2 * (o * n - a * s), u = 2 * (a * i - r * n), l = 2 * (r * s - o * i);
    return this.x = i + h * c + o * l - a * u, this.y = s + h * u + a * c - r * l, this.z = n + h * l + r * u - o * c, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(t) {
    const i = this.x, s = this.y, n = this.z, r = t.elements;
    return this.x = r[0] * i + r[4] * s + r[8] * n, this.y = r[1] * i + r[5] * s + r[9] * n, this.z = r[2] * i + r[6] * s + r[10] * n, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(t, i) {
    return this.x = T(this.x, t.x, i.x), this.y = T(this.y, t.y, i.y), this.z = T(this.z, t.z, i.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(t, i) {
    return this.x = T(this.x, t, i), this.y = T(this.y, t, i), this.z = T(this.z, t, i), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(t, i) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(T(s, t, i));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(t, i, s) {
    return this.x = t.x + (i.x - t.x) * s, this.y = t.y + (i.y - t.y) * s, this.z = t.z + (i.z - t.z) * s, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(t) {
    return this.crossVectors(this, t);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(t, i) {
    const s = t.x, n = t.y, r = t.z, o = i.x, a = i.y, h = i.z;
    return this.x = n * h - r * a, this.y = r * o - s * h, this.z = s * a - n * o, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(t) {
    const i = t.lengthSq();
    if (i === 0) return this.set(0, 0, 0);
    const s = t.dot(this) / i;
    return this.copy(t).multiplyScalar(s);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(t) {
    return Ln.copy(this).projectOnVector(t), this.sub(Ln);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(Ln.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    const s = this.dot(t) / i;
    return Math.acos(T(s, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const i = this.x - t.x, s = this.y - t.y, n = this.z - t.z;
    return i * i + s * s + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(t, i, s) {
    const n = Math.sin(i) * t;
    return this.x = n * Math.sin(s), this.y = Math.cos(i) * t, this.z = n * Math.cos(s), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(t, i, s) {
    return this.x = t * Math.sin(i), this.y = s, this.z = t * Math.cos(i), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(t) {
    const i = this.setFromMatrixColumn(t, 0).length(), s = this.setFromMatrixColumn(t, 1).length(), n = this.setFromMatrixColumn(t, 2).length();
    return this.x = i, this.y = s, this.z = n, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(t, i) {
    return this.fromArray(t.elements, i * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(t, i) {
    return this.fromArray(t.elements, i * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const t = Math.random() * Math.PI * 2, i = Math.random() * 2 - 1, s = Math.sqrt(1 - i * i);
    return this.x = s * Math.cos(t), this.y = i, this.z = s * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
vo.prototype.isVector3 = !0;
let g = vo;
const Ln = /* @__PURE__ */ new g(), Oo = /* @__PURE__ */ new ds(), ko = class ko {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(t, i, s, n, r, o, a, h, c) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, i, s, n, r, o, a, h, c);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(t, i, s, n, r, o, a, h, c) {
    const u = this.elements;
    return u[0] = t, u[1] = n, u[2] = a, u[3] = i, u[4] = r, u[5] = h, u[6] = s, u[7] = o, u[8] = c, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(t) {
    const i = this.elements, s = t.elements;
    return i[0] = s[0], i[1] = s[1], i[2] = s[2], i[3] = s[3], i[4] = s[4], i[5] = s[5], i[6] = s[6], i[7] = s[7], i[8] = s[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(t, i, s) {
    return t.setFromMatrix3Column(this, 0), i.setFromMatrix3Column(this, 1), s.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(t) {
    const i = t.elements;
    return this.set(
      i[0],
      i[4],
      i[8],
      i[1],
      i[5],
      i[9],
      i[2],
      i[6],
      i[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(t, i) {
    const s = t.elements, n = i.elements, r = this.elements, o = s[0], a = s[3], h = s[6], c = s[1], u = s[4], l = s[7], d = s[2], f = s[5], p = s[8], m = n[0], y = n[3], x = n[6], S = n[1], E = n[4], k = n[7], z = n[2], O = n[5], L = n[8];
    return r[0] = o * m + a * S + h * z, r[3] = o * y + a * E + h * O, r[6] = o * x + a * k + h * L, r[1] = c * m + u * S + l * z, r[4] = c * y + u * E + l * O, r[7] = c * x + u * k + l * L, r[2] = d * m + f * S + p * z, r[5] = d * y + f * E + p * O, r[8] = d * x + f * k + p * L, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, i = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], h = t[6], c = t[7], u = t[8];
    return i * o * u - i * a * c - s * r * u + s * a * h + n * r * c - n * o * h;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, i = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], h = t[6], c = t[7], u = t[8], l = u * o - a * c, d = a * h - u * r, f = c * r - o * h, p = i * l + s * d + n * f;
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / p;
    return t[0] = l * m, t[1] = (n * c - u * s) * m, t[2] = (a * s - n * o) * m, t[3] = d * m, t[4] = (u * i - n * h) * m, t[5] = (n * r - a * i) * m, t[6] = f * m, t[7] = (s * h - c * i) * m, t[8] = (o * i - s * r) * m, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let t;
    const i = this.elements;
    return t = i[1], i[1] = i[3], i[3] = t, t = i[2], i[2] = i[6], i[6] = t, t = i[5], i[5] = i[7], i[7] = t, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(t) {
    const i = this.elements;
    return t[0] = i[0], t[1] = i[3], t[2] = i[6], t[3] = i[1], t[4] = i[4], t[5] = i[7], t[6] = i[2], t[7] = i[5], t[8] = i[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(t, i, s, n, r, o, a) {
    const h = Math.cos(r), c = Math.sin(r);
    return this.set(
      s * h,
      s * c,
      -s * (h * o + c * a) + o + t,
      -n * c,
      n * h,
      -n * (-c * o + h * a) + a + i,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(t, i) {
    return this.premultiply(In.makeScale(t, i)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(In.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, i) {
    return this.premultiply(In.makeTranslation(t, i)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(t, i) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      i,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(t) {
    const i = Math.cos(t), s = Math.sin(t);
    return this.set(
      i,
      -s,
      0,
      s,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(t, i) {
    return this.set(
      t,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const i = this.elements, s = t.elements;
    for (let n = 0; n < 9; n++)
      if (i[n] !== s[n]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(t, i = 0) {
    for (let s = 0; s < 9; s++)
      this.elements[s] = t[s + i];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], i = 0) {
    const s = this.elements;
    return t[i] = s[0], t[i + 1] = s[1], t[i + 2] = s[2], t[i + 3] = s[3], t[i + 4] = s[4], t[i + 5] = s[5], t[i + 6] = s[6], t[i + 7] = s[7], t[i + 8] = s[8], t;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
ko.prototype.isMatrix3 = !0;
let ce = ko;
const In = /* @__PURE__ */ new ce(), Ro = /* @__PURE__ */ new ce().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Po = /* @__PURE__ */ new ce().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function z2() {
  const e = {
    enabled: !0,
    workingColorSpace: To,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(n, r, o) {
      return this.enabled === !1 || r === o || !r || !o || (this.spaces[r].transfer === Bn && (n.r = Me(n.r), n.g = Me(n.g), n.b = Me(n.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (n.applyMatrix3(this.spaces[r].toXYZ), n.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === Bn && (n.r = _i(n.r), n.g = _i(n.g), n.b = _i(n.b))), n;
    },
    workingToColorSpace: function(n, r) {
      return this.convert(n, this.workingColorSpace, r);
    },
    colorSpaceToWorking: function(n, r) {
      return this.convert(n, r, this.workingColorSpace);
    },
    getPrimaries: function(n) {
      return this.spaces[n].primaries;
    },
    getTransfer: function(n) {
      return n === ia ? zo : this.spaces[n].transfer;
    },
    getToneMappingMode: function(n) {
      return this.spaces[n].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(n, r = this.workingColorSpace) {
      return n.fromArray(this.spaces[r].luminanceCoefficients);
    },
    define: function(n) {
      Object.assign(this.spaces, n);
    },
    // Internal APIs
    _getMatrix: function(n, r, o) {
      return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(n) {
      return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(n = this.workingColorSpace) {
      return this.spaces[n].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(n, r) {
      return Lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(n, r);
    },
    toWorkingColorSpace: function(n, r) {
      return Lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(n, r);
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], i = [0.2126, 0.7152, 0.0722], s = [0.3127, 0.329];
  return e.define({
    [To]: {
      primaries: t,
      whitePoint: s,
      transfer: zo,
      toXYZ: Ro,
      fromXYZ: Po,
      luminanceCoefficients: i,
      workingColorSpaceConfig: { unpackColorSpace: Vt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Vt }
    },
    [Vt]: {
      primaries: t,
      whitePoint: s,
      transfer: Bn,
      toXYZ: Ro,
      fromXYZ: Po,
      luminanceCoefficients: i,
      outputColorSpaceConfig: { drawingBufferColorSpace: Vt }
    }
  }), e;
}
const Xt = /* @__PURE__ */ z2();
function Me(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function _i(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
let ri;
class C2 {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(t, i = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let s;
    if (t instanceof HTMLCanvasElement)
      s = t;
    else {
      ri === void 0 && (ri = Co("canvas")), ri.width = t.width, ri.height = t.height;
      const n = ri.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), s = ri;
    }
    return s.toDataURL(i);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const i = Co("canvas");
      i.width = t.width, i.height = t.height;
      const s = i.getContext("2d");
      s.drawImage(t, 0, 0, t.width, t.height);
      const n = s.getImageData(0, 0, t.width, t.height), r = n.data;
      for (let o = 0; o < r.length; o++)
        r[o] = Me(r[o] / 255) * 255;
      return s.putImageData(n, 0, 0), i;
    } else if (t.data) {
      const i = t.data.slice(0);
      for (let s = 0; s < i.length; s++)
        i instanceof Uint8Array || i instanceof Uint8ClampedArray ? i[s] = Math.floor(Me(i[s] / 255) * 255) : i[s] = Me(i[s]);
      return {
        data: i,
        width: t.width,
        height: t.height
      };
    } else
      return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let B2 = 0;
class L2 {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: B2++ }), this.uuid = Ii(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(t) {
    const i = this.data;
    return typeof HTMLVideoElement < "u" && i instanceof HTMLVideoElement ? t.set(i.videoWidth, i.videoHeight, 0) : typeof VideoFrame < "u" && i instanceof VideoFrame ? t.set(i.displayWidth, i.displayHeight, 0) : i !== null ? t.set(i.width, i.height, i.depth || 0) : t.set(0, 0, 0), t;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    if (!i && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const s = {
      uuid: this.uuid,
      url: ""
    }, n = this.data;
    if (n !== null) {
      let r;
      if (Array.isArray(n)) {
        r = [];
        for (let o = 0, a = n.length; o < a; o++)
          n[o].isDataTexture ? r.push(On(n[o].image)) : r.push(On(n[o]));
      } else
        r = On(n);
      s.url = r;
    }
    return i || (t.images[this.uuid] = s), s;
  }
}
function On(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? C2.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (dt("Texture: Unable to serialize Texture."), {});
}
let I2 = 0;
const Rn = /* @__PURE__ */ new g();
class Re extends ls {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(t = Re.DEFAULT_IMAGE, i = Re.DEFAULT_MAPPING, s = 1001, n = 1001, r = 1006, o = 1008, a = 1023, h = 1009, c = Re.DEFAULT_ANISOTROPY, u = ia) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: I2++ }), this.uuid = Ii(), this.name = "", this.source = new L2(t), this.mipmaps = [], this.mapping = i, this.channel = 0, this.wrapS = s, this.wrapT = n, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = h, this.offset = new Wt(0, 0), this.repeat = new Wt(1, 1), this.center = new Wt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ce(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Rn).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Rn).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Rn).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, i) {
    this.updateRanges.push({ start: t, count: i });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(t) {
    for (const i in t) {
      const s = t[i];
      if (s === void 0) {
        dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);
        continue;
      }
      const n = this[i];
      if (n === void 0) {
        dt(`Texture.setValues(): property '${i}' does not exist.`);
        continue;
      }
      n && s && n.isVector2 && s.isVector2 || n && s && n.isVector3 && s.isVector3 || n && s && n.isMatrix3 && s.isMatrix3 ? n.copy(s) : this[i] = s;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    if (!i && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const s = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (s.userData = this.userData), i || (t.textures[this.uuid] = s), s;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
Re.DEFAULT_IMAGE = null;
Re.DEFAULT_MAPPING = 300;
Re.DEFAULT_ANISOTROPY = 1;
const Eo = class Eo {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, i = 0, s = 0, n = 1) {
    this.x = t, this.y = i, this.z = s, this.w = n;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(t, i, s, n) {
    return this.x = t, this.y = i, this.z = s, this.w = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(t) {
    return this.w = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      case 3:
        this.w = i;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this.w = t.w + i.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this.w += t.w * i, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this.w = t.w - i.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(t) {
    const i = this.x, s = this.y, n = this.z, r = this.w, o = t.elements;
    return this.x = o[0] * i + o[4] * s + o[8] * n + o[12] * r, this.y = o[1] * i + o[5] * s + o[9] * n + o[13] * r, this.z = o[2] * i + o[6] * s + o[10] * n + o[14] * r, this.w = o[3] * i + o[7] * s + o[11] * n + o[15] * r, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const i = Math.sqrt(1 - t.w * t.w);
    return i < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / i, this.y = t.y / i, this.z = t.z / i), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(t) {
    let i, s, n, r;
    const h = t.elements, c = h[0], u = h[4], l = h[8], d = h[1], f = h[5], p = h[9], m = h[2], y = h[6], x = h[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(l - m) < 0.01 && Math.abs(p - y) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(l + m) < 0.1 && Math.abs(p + y) < 0.1 && Math.abs(c + f + x - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      i = Math.PI;
      const E = (c + 1) / 2, k = (f + 1) / 2, z = (x + 1) / 2, O = (u + d) / 4, L = (l + m) / 4, F = (p + y) / 4;
      return E > k && E > z ? E < 0.01 ? (s = 0, n = 0.707106781, r = 0.707106781) : (s = Math.sqrt(E), n = O / s, r = L / s) : k > z ? k < 0.01 ? (s = 0.707106781, n = 0, r = 0.707106781) : (n = Math.sqrt(k), s = O / n, r = F / n) : z < 0.01 ? (s = 0.707106781, n = 0.707106781, r = 0) : (r = Math.sqrt(z), s = L / r, n = F / r), this.set(s, n, r, i), this;
    }
    let S = Math.sqrt((y - p) * (y - p) + (l - m) * (l - m) + (d - u) * (d - u));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (y - p) / S, this.y = (l - m) / S, this.z = (d - u) / S, this.w = Math.acos((c + f + x - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this.w = i[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(t, i) {
    return this.x = T(this.x, t.x, i.x), this.y = T(this.y, t.y, i.y), this.z = T(this.z, t.z, i.z), this.w = T(this.w, t.w, i.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(t, i) {
    return this.x = T(this.x, t, i), this.y = T(this.y, t, i), this.z = T(this.z, t, i), this.w = T(this.w, t, i), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(t, i) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(T(s, t, i));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this.w += (t.w - this.w) * i, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(t, i, s) {
    return this.x = t.x + (i.x - t.x) * s, this.y = t.y + (i.y - t.y) * s, this.z = t.z + (i.z - t.z) * s, this.w = t.w + (i.w - t.w) * s, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this.w = t[i + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this.w = t.getW(i), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
Eo.prototype.isVector4 = !0;
let rs = Eo;
const an = class an {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(t, i, s, n, r, o, a, h, c, u, l, d, f, p, m, y) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, i, s, n, r, o, a, h, c, u, l, d, f, p, m, y);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(t, i, s, n, r, o, a, h, c, u, l, d, f, p, m, y) {
    const x = this.elements;
    return x[0] = t, x[4] = i, x[8] = s, x[12] = n, x[1] = r, x[5] = o, x[9] = a, x[13] = h, x[2] = c, x[6] = u, x[10] = l, x[14] = d, x[3] = f, x[7] = p, x[11] = m, x[15] = y, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new an().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(t) {
    const i = this.elements, s = t.elements;
    return i[0] = s[0], i[1] = s[1], i[2] = s[2], i[3] = s[3], i[4] = s[4], i[5] = s[5], i[6] = s[6], i[7] = s[7], i[8] = s[8], i[9] = s[9], i[10] = s[10], i[11] = s[11], i[12] = s[12], i[13] = s[13], i[14] = s[14], i[15] = s[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(t) {
    const i = this.elements, s = t.elements;
    return i[12] = s[12], i[13] = s[13], i[14] = s[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(t) {
    const i = t.elements;
    return this.set(
      i[0],
      i[3],
      i[6],
      0,
      i[1],
      i[4],
      i[7],
      0,
      i[2],
      i[5],
      i[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(t, i, s) {
    return this.determinant() === 0 ? (t.set(1, 0, 0), i.set(0, 1, 0), s.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), i.setFromMatrixColumn(this, 1), s.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(t, i, s) {
    return this.set(
      t.x,
      i.x,
      s.x,
      0,
      t.y,
      i.y,
      s.y,
      0,
      t.z,
      i.z,
      s.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(t) {
    if (t.determinant() === 0)
      return this.identity();
    const i = this.elements, s = t.elements, n = 1 / oi.setFromMatrixColumn(t, 0).length(), r = 1 / oi.setFromMatrixColumn(t, 1).length(), o = 1 / oi.setFromMatrixColumn(t, 2).length();
    return i[0] = s[0] * n, i[1] = s[1] * n, i[2] = s[2] * n, i[3] = 0, i[4] = s[4] * r, i[5] = s[5] * r, i[6] = s[6] * r, i[7] = 0, i[8] = s[8] * o, i[9] = s[9] * o, i[10] = s[10] * o, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(t) {
    const i = this.elements, s = t.x, n = t.y, r = t.z, o = Math.cos(s), a = Math.sin(s), h = Math.cos(n), c = Math.sin(n), u = Math.cos(r), l = Math.sin(r);
    if (t.order === "XYZ") {
      const d = o * u, f = o * l, p = a * u, m = a * l;
      i[0] = h * u, i[4] = -h * l, i[8] = c, i[1] = f + p * c, i[5] = d - m * c, i[9] = -a * h, i[2] = m - d * c, i[6] = p + f * c, i[10] = o * h;
    } else if (t.order === "YXZ") {
      const d = h * u, f = h * l, p = c * u, m = c * l;
      i[0] = d + m * a, i[4] = p * a - f, i[8] = o * c, i[1] = o * l, i[5] = o * u, i[9] = -a, i[2] = f * a - p, i[6] = m + d * a, i[10] = o * h;
    } else if (t.order === "ZXY") {
      const d = h * u, f = h * l, p = c * u, m = c * l;
      i[0] = d - m * a, i[4] = -o * l, i[8] = p + f * a, i[1] = f + p * a, i[5] = o * u, i[9] = m - d * a, i[2] = -o * c, i[6] = a, i[10] = o * h;
    } else if (t.order === "ZYX") {
      const d = o * u, f = o * l, p = a * u, m = a * l;
      i[0] = h * u, i[4] = p * c - f, i[8] = d * c + m, i[1] = h * l, i[5] = m * c + d, i[9] = f * c - p, i[2] = -c, i[6] = a * h, i[10] = o * h;
    } else if (t.order === "YZX") {
      const d = o * h, f = o * c, p = a * h, m = a * c;
      i[0] = h * u, i[4] = m - d * l, i[8] = p * l + f, i[1] = l, i[5] = o * u, i[9] = -a * u, i[2] = -c * u, i[6] = f * l + p, i[10] = d - m * l;
    } else if (t.order === "XZY") {
      const d = o * h, f = o * c, p = a * h, m = a * c;
      i[0] = h * u, i[4] = -l, i[8] = c * u, i[1] = d * l + m, i[5] = o * u, i[9] = f * l - p, i[2] = p * l - f, i[6] = a * u, i[10] = m * l + d;
    }
    return i[3] = 0, i[7] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(t) {
    return this.compose(O2, t, R2);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(t, i, s) {
    const n = this.elements;
    return St.subVectors(t, i), St.lengthSq() === 0 && (St.z = 1), St.normalize(), Ee.crossVectors(s, St), Ee.lengthSq() === 0 && (Math.abs(s.z) === 1 ? St.x += 1e-4 : St.z += 1e-4, St.normalize(), Ee.crossVectors(s, St)), Ee.normalize(), Ts.crossVectors(St, Ee), n[0] = Ee.x, n[4] = Ts.x, n[8] = St.x, n[1] = Ee.y, n[5] = Ts.y, n[9] = St.y, n[2] = Ee.z, n[6] = Ts.z, n[10] = St.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(t, i) {
    const s = t.elements, n = i.elements, r = this.elements, o = s[0], a = s[4], h = s[8], c = s[12], u = s[1], l = s[5], d = s[9], f = s[13], p = s[2], m = s[6], y = s[10], x = s[14], S = s[3], E = s[7], k = s[11], z = s[15], O = n[0], L = n[4], F = n[8], G = n[12], Z = n[1], J = n[5], wt = n[9], $ = n[13], Ht = n[2], Q = n[6], As = n[10], Ss = n[14], vs = n[3], ks = n[7], Es = n[11], Fs = n[15];
    return r[0] = o * O + a * Z + h * Ht + c * vs, r[4] = o * L + a * J + h * Q + c * ks, r[8] = o * F + a * wt + h * As + c * Es, r[12] = o * G + a * $ + h * Ss + c * Fs, r[1] = u * O + l * Z + d * Ht + f * vs, r[5] = u * L + l * J + d * Q + f * ks, r[9] = u * F + l * wt + d * As + f * Es, r[13] = u * G + l * $ + d * Ss + f * Fs, r[2] = p * O + m * Z + y * Ht + x * vs, r[6] = p * L + m * J + y * Q + x * ks, r[10] = p * F + m * wt + y * As + x * Es, r[14] = p * G + m * $ + y * Ss + x * Fs, r[3] = S * O + E * Z + k * Ht + z * vs, r[7] = S * L + E * J + k * Q + z * ks, r[11] = S * F + E * wt + k * As + z * Es, r[15] = S * G + E * $ + k * Ss + z * Fs, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[4] *= t, i[8] *= t, i[12] *= t, i[1] *= t, i[5] *= t, i[9] *= t, i[13] *= t, i[2] *= t, i[6] *= t, i[10] *= t, i[14] *= t, i[3] *= t, i[7] *= t, i[11] *= t, i[15] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, i = t[0], s = t[4], n = t[8], r = t[12], o = t[1], a = t[5], h = t[9], c = t[13], u = t[2], l = t[6], d = t[10], f = t[14], p = t[3], m = t[7], y = t[11], x = t[15], S = h * f - c * d, E = a * f - c * l, k = a * d - h * l, z = o * f - c * u, O = o * d - h * u, L = o * l - a * u;
    return i * (m * S - y * E + x * k) - s * (p * S - y * z + x * O) + n * (p * E - m * z + x * L) - r * (p * k - m * O + y * L);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const t = this.elements;
    let i;
    return i = t[1], t[1] = t[4], t[4] = i, i = t[2], t[2] = t[8], t[8] = i, i = t[6], t[6] = t[9], t[9] = i, i = t[3], t[3] = t[12], t[12] = i, i = t[7], t[7] = t[13], t[13] = i, i = t[11], t[11] = t[14], t[14] = i, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(t, i, s) {
    const n = this.elements;
    return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = i, n[14] = s), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const t = this.elements, i = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], h = t[6], c = t[7], u = t[8], l = t[9], d = t[10], f = t[11], p = t[12], m = t[13], y = t[14], x = t[15], S = i * a - s * o, E = i * h - n * o, k = i * c - r * o, z = s * h - n * a, O = s * c - r * a, L = n * c - r * h, F = u * m - l * p, G = u * y - d * p, Z = u * x - f * p, J = l * y - d * m, wt = l * x - f * m, $ = d * x - f * y, Ht = S * $ - E * wt + k * J + z * Z - O * G + L * F;
    if (Ht === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const Q = 1 / Ht;
    return t[0] = (a * $ - h * wt + c * J) * Q, t[1] = (n * wt - s * $ - r * J) * Q, t[2] = (m * L - y * O + x * z) * Q, t[3] = (d * O - l * L - f * z) * Q, t[4] = (h * Z - o * $ - c * G) * Q, t[5] = (i * $ - n * Z + r * G) * Q, t[6] = (y * k - p * L - x * E) * Q, t[7] = (u * L - d * k + f * E) * Q, t[8] = (o * wt - a * Z + c * F) * Q, t[9] = (s * Z - i * wt - r * F) * Q, t[10] = (p * O - m * k + x * S) * Q, t[11] = (l * k - u * O - f * S) * Q, t[12] = (a * G - o * J - h * F) * Q, t[13] = (i * J - s * G + n * F) * Q, t[14] = (m * E - p * z - y * S) * Q, t[15] = (u * z - l * E + d * S) * Q, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(t) {
    const i = this.elements, s = t.x, n = t.y, r = t.z;
    return i[0] *= s, i[4] *= n, i[8] *= r, i[1] *= s, i[5] *= n, i[9] *= r, i[2] *= s, i[6] *= n, i[10] *= r, i[3] *= s, i[7] *= n, i[11] *= r, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const t = this.elements, i = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], s = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(i, s, n));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(t, i, s) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      i,
      0,
      0,
      1,
      s,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(t) {
    const i = Math.cos(t), s = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      i,
      -s,
      0,
      0,
      s,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(t) {
    const i = Math.cos(t), s = Math.sin(t);
    return this.set(
      i,
      0,
      s,
      0,
      0,
      1,
      0,
      0,
      -s,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(t) {
    const i = Math.cos(t), s = Math.sin(t);
    return this.set(
      i,
      -s,
      0,
      0,
      s,
      i,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(t, i) {
    const s = Math.cos(i), n = Math.sin(i), r = 1 - s, o = t.x, a = t.y, h = t.z, c = r * o, u = r * a;
    return this.set(
      c * o + s,
      c * a - n * h,
      c * h + n * a,
      0,
      c * a + n * h,
      u * a + s,
      u * h - n * o,
      0,
      c * h - n * a,
      u * h + n * o,
      r * h * h + s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(t, i, s) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(t, i, s, n, r, o) {
    return this.set(
      1,
      s,
      r,
      0,
      t,
      1,
      o,
      0,
      i,
      n,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(t, i, s) {
    const n = this.elements, r = i._x, o = i._y, a = i._z, h = i._w, c = r + r, u = o + o, l = a + a, d = r * c, f = r * u, p = r * l, m = o * u, y = o * l, x = a * l, S = h * c, E = h * u, k = h * l, z = s.x, O = s.y, L = s.z;
    return n[0] = (1 - (m + x)) * z, n[1] = (f + k) * z, n[2] = (p - E) * z, n[3] = 0, n[4] = (f - k) * O, n[5] = (1 - (d + x)) * O, n[6] = (y + S) * O, n[7] = 0, n[8] = (p + E) * L, n[9] = (y - S) * L, n[10] = (1 - (d + m)) * L, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(t, i, s) {
    const n = this.elements;
    t.x = n[12], t.y = n[13], t.z = n[14];
    const r = this.determinant();
    if (r === 0)
      return s.set(1, 1, 1), i.identity(), this;
    let o = oi.set(n[0], n[1], n[2]).length();
    const a = oi.set(n[4], n[5], n[6]).length(), h = oi.set(n[8], n[9], n[10]).length();
    r < 0 && (o = -o), Yt.copy(this);
    const c = 1 / o, u = 1 / a, l = 1 / h;
    return Yt.elements[0] *= c, Yt.elements[1] *= c, Yt.elements[2] *= c, Yt.elements[4] *= u, Yt.elements[5] *= u, Yt.elements[6] *= u, Yt.elements[8] *= l, Yt.elements[9] *= l, Yt.elements[10] *= l, i.setFromRotationMatrix(Yt), s.x = o, s.y = a, s.z = h, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(t, i, s, n, r, o, a = 2e3, h = !1) {
    const c = this.elements, u = 2 * r / (i - t), l = 2 * r / (s - n), d = (i + t) / (i - t), f = (s + n) / (s - n);
    let p, m;
    if (h)
      p = r / (o - r), m = o * r / (o - r);
    else if (a === 2e3)
      p = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    else if (a === 2001)
      p = -o / (o - r), m = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = u, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = l, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(t, i, s, n, r, o, a = 2e3, h = !1) {
    const c = this.elements, u = 2 / (i - t), l = 2 / (s - n), d = -(i + t) / (i - t), f = -(s + n) / (s - n);
    let p, m;
    if (h)
      p = 1 / (o - r), m = o / (o - r);
    else if (a === 2e3)
      p = -2 / (o - r), m = -(o + r) / (o - r);
    else if (a === 2001)
      p = -1 / (o - r), m = -r / (o - r);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = u, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = l, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const i = this.elements, s = t.elements;
    for (let n = 0; n < 16; n++)
      if (i[n] !== s[n]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(t, i = 0) {
    for (let s = 0; s < 16; s++)
      this.elements[s] = t[s + i];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], i = 0) {
    const s = this.elements;
    return t[i] = s[0], t[i + 1] = s[1], t[i + 2] = s[2], t[i + 3] = s[3], t[i + 4] = s[4], t[i + 5] = s[5], t[i + 6] = s[6], t[i + 7] = s[7], t[i + 8] = s[8], t[i + 9] = s[9], t[i + 10] = s[10], t[i + 11] = s[11], t[i + 12] = s[12], t[i + 13] = s[13], t[i + 14] = s[14], t[i + 15] = s[15], t;
  }
};
an.prototype.isMatrix4 = !0;
let Qt = an;
const oi = /* @__PURE__ */ new g(), Yt = /* @__PURE__ */ new Qt(), O2 = /* @__PURE__ */ new g(0, 0, 0), R2 = /* @__PURE__ */ new g(1, 1, 1), Ee = /* @__PURE__ */ new g(), Ts = /* @__PURE__ */ new g(), St = /* @__PURE__ */ new g(), Do = /* @__PURE__ */ new Qt(), No = /* @__PURE__ */ new ds();
class fs {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, i = 0, s = 0, n = fs.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = i, this._z = s, this._order = n;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(t, i, s, n = this._order) {
    return this._x = t, this._y = i, this._z = s, this._order = n, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(t, i = this._order, s = !0) {
    const n = t.elements, r = n[0], o = n[4], a = n[8], h = n[1], c = n[5], u = n[9], l = n[2], d = n[6], f = n[10];
    switch (i) {
      case "XYZ":
        this._y = Math.asin(T(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-T(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-l, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(T(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-l, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(h, r));
        break;
      case "ZYX":
        this._y = Math.asin(-T(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(h, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(T(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-l, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-T(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
        break;
      default:
        dt("Euler: .setFromRotationMatrix() encountered an unknown order: " + i);
    }
    return this._order = i, s === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(t, i, s) {
    return Do.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Do, i, s);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(t, i = this._order) {
    return this.set(t.x, t.y, t.z, i);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(t) {
    return No.setFromEuler(this), this.setFromQuaternion(No, t);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
fs.DEFAULT_ORDER = "XYZ";
class P2 {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let D2 = 0;
const Uo = /* @__PURE__ */ new g(), ai = /* @__PURE__ */ new ds(), ge = /* @__PURE__ */ new Qt(), zs = /* @__PURE__ */ new g(), Xi = /* @__PURE__ */ new g(), N2 = /* @__PURE__ */ new g(), U2 = /* @__PURE__ */ new ds(), Vo = /* @__PURE__ */ new g(1, 0, 0), Go = /* @__PURE__ */ new g(0, 1, 0), Wo = /* @__PURE__ */ new g(0, 0, 1), jo = { type: "added" }, V2 = { type: "removed" }, hi = { type: "childadded", child: null }, Pn = { type: "childremoved", child: null };
class ae extends ls {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: D2++ }), this.uuid = Ii(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ae.DEFAULT_UP.clone();
    const t = new g(), i = new fs(), s = new ds(), n = new g(1, 1, 1);
    function r() {
      s.setFromEuler(i, !1);
    }
    function o() {
      i.setFromQuaternion(s, void 0, !1);
    }
    i._onChange(r), s._onChange(o), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new Qt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new ce()
      }
    }), this.matrix = new Qt(), this.matrixWorld = new Qt(), this.matrixAutoUpdate = ae.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new P2(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(t, i) {
    this.quaternion.setFromAxisAngle(t, i);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(t, i) {
    return ai.setFromAxisAngle(t, i), this.quaternion.multiply(ai), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, i) {
    return ai.setFromAxisAngle(t, i), this.quaternion.premultiply(ai), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(Vo, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(Go, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(Wo, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, i) {
    return Uo.copy(t).applyQuaternion(this.quaternion), this.position.add(Uo.multiplyScalar(i)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(Vo, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(Go, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(Wo, t);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ge.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(t, i, s) {
    t.isVector3 ? zs.copy(t) : zs.set(t, i, s);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1), Xi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ge.lookAt(Xi, zs, this.up) : ge.lookAt(zs, Xi, this.up), this.quaternion.setFromRotationMatrix(ge), n && (ge.extractRotation(n.matrixWorld), ai.setFromRotationMatrix(ge), this.quaternion.premultiply(ai.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.add(arguments[i]);
      return this;
    }
    return t === this ? (qe("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(jo), hi.child = t, this.dispatchEvent(hi), hi.child = null) : qe("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(t) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++)
        this.remove(arguments[s]);
      return this;
    }
    const i = this.children.indexOf(t);
    return i !== -1 && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(V2), Pn.child = t, this.dispatchEvent(Pn), Pn.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(t) {
    return this.updateWorldMatrix(!0, !1), ge.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ge.multiply(t.parent.matrixWorld)), t.applyMatrix4(ge), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(jo), hi.child = t, this.dispatchEvent(hi), hi.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(t, i) {
    if (this[t] === i) return this;
    for (let s = 0, n = this.children.length; s < n; s++) {
      const o = this.children[s].getObjectByProperty(t, i);
      if (o !== void 0)
        return o;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(t, i, s = []) {
    this[t] === i && s.push(this);
    const n = this.children;
    for (let r = 0, o = n.length; r < o; r++)
      n[r].getObjectsByProperty(t, i, s);
    return s;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xi, t, N2), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xi, U2, t), t;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const i = this.matrixWorld.elements;
    return t.set(i[8], i[9], i[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(t) {
    t(this);
    const i = this.children;
    for (let s = 0, n = i.length; s < n; s++)
      i[s].traverse(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const i = this.children;
    for (let s = 0, n = i.length; s < n; s++)
      i[s].traverseVisible(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(t) {
    const i = this.parent;
    i !== null && (t(i), i.traverseAncestors(t));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const i = t.x, s = t.y, n = t.z, r = this.matrix.elements;
      r[12] += i - r[0] * i - r[4] * s - r[8] * n, r[13] += s - r[1] * i - r[5] * s - r[9] * n, r[14] += n - r[2] * i - r[6] * s - r[10] * n;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const i = this.children;
    for (let s = 0, n = i.length; s < n; s++)
      i[s].updateMatrixWorld(t);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(t, i) {
    const s = this.parent;
    if (t === !0 && s !== null && s.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), i === !0) {
      const n = this.children;
      for (let r = 0, o = n.length; r < o; r++)
        n[r].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const i = t === void 0 || typeof t == "string", s = {};
    i && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, s.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const n = {};
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), this.static !== !1 && (n.static = this.static), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.pivot !== null && (n.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (n.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (n.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (n.type = "BatchedMesh", n.perObjectFrustumCulled = this.perObjectFrustumCulled, n.sortObjects = this.sortObjects, n.drawRanges = this._drawRanges, n.reservedRanges = this._reservedRanges, n.geometryInfo = this._geometryInfo.map((a) => ({
      ...a,
      boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0,
      boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0
    })), n.instanceInfo = this._instanceInfo.map((a) => ({ ...a })), n.availableInstanceIds = this._availableInstanceIds.slice(), n.availableGeometryIds = this._availableGeometryIds.slice(), n.nextIndexStart = this._nextIndexStart, n.nextVertexStart = this._nextVertexStart, n.geometryCount = this._geometryCount, n.maxInstanceCount = this._maxInstanceCount, n.maxVertexCount = this._maxVertexCount, n.maxIndexCount = this._maxIndexCount, n.geometryInitialized = this._geometryInitialized, n.matricesTexture = this._matricesTexture.toJSON(t), n.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (n.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (n.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (n.boundingBox = this.boundingBox.toJSON()));
    function r(a, h) {
      return a[h.uuid] === void 0 && (a[h.uuid] = h.toJSON(t)), h.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const h = a.shapes;
        if (Array.isArray(h))
          for (let c = 0, u = h.length; c < u; c++) {
            const l = h[c];
            r(t.shapes, l);
          }
        else
          r(t.shapes, h);
      }
    }
    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let h = 0, c = this.material.length; h < c; h++)
          a.push(r(t.materials, this.material[h]));
        n.material = a;
      } else
        n.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let a = 0; a < this.children.length; a++)
        n.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const h = this.animations[a];
        n.animations.push(r(t.animations, h));
      }
    }
    if (i) {
      const a = o(t.geometries), h = o(t.materials), c = o(t.textures), u = o(t.images), l = o(t.shapes), d = o(t.skeletons), f = o(t.animations), p = o(t.nodes);
      a.length > 0 && (s.geometries = a), h.length > 0 && (s.materials = h), c.length > 0 && (s.textures = c), u.length > 0 && (s.images = u), l.length > 0 && (s.shapes = l), d.length > 0 && (s.skeletons = d), f.length > 0 && (s.animations = f), p.length > 0 && (s.nodes = p);
    }
    return s.object = n, s;
    function o(a) {
      const h = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, h.push(u);
      }
      return h;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(t, i = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), i === !0)
      for (let s = 0; s < t.children.length; s++) {
        const n = t.children[s];
        this.add(n.clone());
      }
    return this;
  }
}
ae.DEFAULT_UP = /* @__PURE__ */ new g(0, 1, 0);
ae.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Yi extends ae {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const oa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Fe = { h: 0, s: 0, l: 0 }, Cs = { h: 0, s: 0, l: 0 };
function Dn(e, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - i) : e;
}
class hn {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(t, i, s) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, i, s);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(t, i, s) {
    if (i === void 0 && s === void 0) {
      const n = t;
      n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
    } else
      this.setRGB(t, i, s);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(t, i = Vt) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Xt.colorSpaceToWorking(this, i), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(t, i, s, n = Xt.workingColorSpace) {
    return this.r = t, this.g = i, this.b = s, Xt.colorSpaceToWorking(this, n), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(t, i, s, n = Xt.workingColorSpace) {
    if (t = Er(t, 1), i = T(i, 0, 1), s = T(s, 0, 1), i === 0)
      this.r = this.g = this.b = s;
    else {
      const r = s <= 0.5 ? s * (1 + i) : s + i - s * i, o = 2 * s - r;
      this.r = Dn(o, r, t + 1 / 3), this.g = Dn(o, r, t), this.b = Dn(o, r, t - 1 / 3);
    }
    return Xt.colorSpaceToWorking(this, n), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(t, i = Vt) {
    function s(r) {
      r !== void 0 && parseFloat(r) < 1 && dt("Color: Alpha component of " + t + " will be ignored.");
    }
    let n;
    if (n = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const o = n[1], a = n[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return s(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              i
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return s(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              i
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return s(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              i
            );
          break;
        default:
          dt("Color: Unknown color model " + t);
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = n[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          i
        );
      if (o === 6)
        return this.setHex(parseInt(r, 16), i);
      dt("Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, i);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(t, i = Vt) {
    const s = oa[t.toLowerCase()];
    return s !== void 0 ? this.setHex(s, i) : dt("Color: Unknown color " + t), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(t) {
    return this.r = Me(t.r), this.g = Me(t.g), this.b = Me(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = _i(t.r), this.g = _i(t.g), this.b = _i(t.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(t = Vt) {
    return Xt.workingToColorSpace(mt.copy(this), t), Math.round(T(mt.r * 255, 0, 255)) * 65536 + Math.round(T(mt.g * 255, 0, 255)) * 256 + Math.round(T(mt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(t = Vt) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(t, i = Xt.workingColorSpace) {
    Xt.workingToColorSpace(mt.copy(this), i);
    const s = mt.r, n = mt.g, r = mt.b, o = Math.max(s, n, r), a = Math.min(s, n, r);
    let h, c;
    const u = (a + o) / 2;
    if (a === o)
      h = 0, c = 0;
    else {
      const l = o - a;
      switch (c = u <= 0.5 ? l / (o + a) : l / (2 - o - a), o) {
        case s:
          h = (n - r) / l + (n < r ? 6 : 0);
          break;
        case n:
          h = (r - s) / l + 2;
          break;
        case r:
          h = (s - n) / l + 4;
          break;
      }
      h /= 6;
    }
    return t.h = h, t.s = c, t.l = u, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, i = Xt.workingColorSpace) {
    return Xt.workingToColorSpace(mt.copy(this), i), t.r = mt.r, t.g = mt.g, t.b = mt.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = Vt) {
    Xt.workingToColorSpace(mt.copy(this), t);
    const i = mt.r, s = mt.g, n = mt.b;
    return t !== Vt ? `color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(i * 255)},${Math.round(s * 255)},${Math.round(n * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(t, i, s) {
    return this.getHSL(Fe), this.setHSL(Fe.h + t, Fe.s + i, Fe.l + s);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(t, i) {
    return this.r = t.r + i.r, this.g = t.g + i.g, this.b = t.b + i.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(t, i) {
    return this.r += (t.r - this.r) * i, this.g += (t.g - this.g) * i, this.b += (t.b - this.b) * i, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(t, i, s) {
    return this.r = t.r + (i.r - t.r) * s, this.g = t.g + (i.g - t.g) * s, this.b = t.b + (i.b - t.b) * s, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(t, i) {
    this.getHSL(Fe), t.getHSL(Cs);
    const s = es(Fe.h, Cs.h, i), n = es(Fe.s, Cs.s, i), r = es(Fe.l, Cs.l, i);
    return this.setHSL(s, n, r), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(t) {
    const i = this.r, s = this.g, n = this.b, r = t.elements;
    return this.r = r[0] * i + r[3] * s + r[6] * n, this.g = r[1] * i + r[4] * s + r[7] * n, this.b = r[2] * i + r[5] * s + r[8] * n, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(t, i = 0) {
    return this.r = t[i], this.g = t[i + 1], this.b = t[i + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(t = [], i = 0) {
    return t[i] = this.r, t[i + 1] = this.g, t[i + 2] = this.b, t;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(t, i) {
    return this.r = t.getX(i), this.g = t.getY(i), this.b = t.getZ(i), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const mt = /* @__PURE__ */ new hn();
hn.NAMES = oa;
const Zt = /* @__PURE__ */ new g(), ye = /* @__PURE__ */ new g(), Nn = /* @__PURE__ */ new g(), xe = /* @__PURE__ */ new g(), ci = /* @__PURE__ */ new g(), ui = /* @__PURE__ */ new g(), qo = /* @__PURE__ */ new g(), Un = /* @__PURE__ */ new g(), Vn = /* @__PURE__ */ new g(), Gn = /* @__PURE__ */ new g(), Wn = /* @__PURE__ */ new rs(), jn = /* @__PURE__ */ new rs(), qn = /* @__PURE__ */ new rs();
class $t {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(t = new g(), i = new g(), s = new g()) {
    this.a = t, this.b = i, this.c = s;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(t, i, s, n) {
    n.subVectors(s, i), Zt.subVectors(t, i), n.cross(Zt);
    const r = n.lengthSq();
    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(t, i, s, n, r) {
    Zt.subVectors(n, i), ye.subVectors(s, i), Nn.subVectors(t, i);
    const o = Zt.dot(Zt), a = Zt.dot(ye), h = Zt.dot(Nn), c = ye.dot(ye), u = ye.dot(Nn), l = o * c - a * a;
    if (l === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / l, f = (c * h - a * u) * d, p = (o * u - a * h) * d;
    return r.set(1 - f - p, p, f);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(t, i, s, n) {
    return this.getBarycoord(t, i, s, n, xe) === null ? !1 : xe.x >= 0 && xe.y >= 0 && xe.x + xe.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(t, i, s, n, r, o, a, h) {
    return this.getBarycoord(t, i, s, n, xe) === null ? (h.x = 0, h.y = 0, "z" in h && (h.z = 0), "w" in h && (h.w = 0), null) : (h.setScalar(0), h.addScaledVector(r, xe.x), h.addScaledVector(o, xe.y), h.addScaledVector(a, xe.z), h);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(t, i, s, n, r, o) {
    return Wn.setScalar(0), jn.setScalar(0), qn.setScalar(0), Wn.fromBufferAttribute(t, i), jn.fromBufferAttribute(t, s), qn.fromBufferAttribute(t, n), o.setScalar(0), o.addScaledVector(Wn, r.x), o.addScaledVector(jn, r.y), o.addScaledVector(qn, r.z), o;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(t, i, s, n) {
    return Zt.subVectors(s, i), ye.subVectors(t, i), Zt.cross(ye).dot(n) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(t, i, s) {
    return this.a.copy(t), this.b.copy(i), this.c.copy(s), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(t, i, s, n) {
    return this.a.copy(t[i]), this.b.copy(t[s]), this.c.copy(t[n]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(t, i, s, n) {
    return this.a.fromBufferAttribute(t, i), this.b.fromBufferAttribute(t, s), this.c.fromBufferAttribute(t, n), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Zt.subVectors(this.c, this.b), ye.subVectors(this.a, this.b), Zt.cross(ye).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(t) {
    return $t.getNormal(this.a, this.b, this.c, t);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(t, i) {
    return $t.getBarycoord(t, this.a, this.b, this.c, i);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(t, i, s, n, r) {
    return $t.getInterpolation(t, this.a, this.b, this.c, i, s, n, r);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(t) {
    return $t.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return $t.isFrontFacing(this.a, this.b, this.c, t);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(t, i) {
    const s = this.a, n = this.b, r = this.c;
    let o, a;
    ci.subVectors(n, s), ui.subVectors(r, s), Un.subVectors(t, s);
    const h = ci.dot(Un), c = ui.dot(Un);
    if (h <= 0 && c <= 0)
      return i.copy(s);
    Vn.subVectors(t, n);
    const u = ci.dot(Vn), l = ui.dot(Vn);
    if (u >= 0 && l <= u)
      return i.copy(n);
    const d = h * l - u * c;
    if (d <= 0 && h >= 0 && u <= 0)
      return o = h / (h - u), i.copy(s).addScaledVector(ci, o);
    Gn.subVectors(t, r);
    const f = ci.dot(Gn), p = ui.dot(Gn);
    if (p >= 0 && f <= p)
      return i.copy(r);
    const m = f * c - h * p;
    if (m <= 0 && c >= 0 && p <= 0)
      return a = c / (c - p), i.copy(s).addScaledVector(ui, a);
    const y = u * p - f * l;
    if (y <= 0 && l - u >= 0 && f - p >= 0)
      return qo.subVectors(r, n), a = (l - u) / (l - u + (f - p)), i.copy(n).addScaledVector(qo, a);
    const x = 1 / (y + m + d);
    return o = m * x, a = d * x, i.copy(s).addScaledVector(ci, o).addScaledVector(ui, a);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
class ps {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(t = new g(1 / 0, 1 / 0, 1 / 0), i = new g(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = i;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(t, i) {
    return this.min.copy(t), this.max.copy(i), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(t) {
    this.makeEmpty();
    for (let i = 0, s = t.length; i < s; i += 3)
      this.expandByPoint(Jt.fromArray(t, i));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let i = 0, s = t.count; i < s; i++)
      this.expandByPoint(Jt.fromBufferAttribute(t, i));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(t) {
    this.makeEmpty();
    for (let i = 0, s = t.length; i < s; i++)
      this.expandByPoint(t[i]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(t, i) {
    const s = Jt.copy(i).multiplyScalar(0.5);
    return this.min.copy(t).sub(s), this.max.copy(t).add(s), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(t, i = !1) {
    return this.makeEmpty(), this.expandByObject(t, i);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(t, i = !1) {
    t.updateWorldMatrix(!1, !1);
    const s = t.geometry;
    if (s !== void 0) {
      const r = s.getAttribute("position");
      if (i === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let o = 0, a = r.count; o < a; o++)
          t.isMesh === !0 ? t.getVertexPosition(o, Jt) : Jt.fromBufferAttribute(r, o), Jt.applyMatrix4(t.matrixWorld), this.expandByPoint(Jt);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Bs.copy(t.boundingBox)) : (s.boundingBox === null && s.computeBoundingBox(), Bs.copy(s.boundingBox)), Bs.applyMatrix4(t.matrixWorld), this.union(Bs);
    }
    const n = t.children;
    for (let r = 0, o = n.length; r < o; r++)
      this.expandByObject(n[r], i);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(t, i) {
    return i.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(t) {
    return this.clampPoint(t.center, Jt), Jt.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(t) {
    let i, s;
    return t.normal.x > 0 ? (i = t.normal.x * this.min.x, s = t.normal.x * this.max.x) : (i = t.normal.x * this.max.x, s = t.normal.x * this.min.x), t.normal.y > 0 ? (i += t.normal.y * this.min.y, s += t.normal.y * this.max.y) : (i += t.normal.y * this.max.y, s += t.normal.y * this.min.y), t.normal.z > 0 ? (i += t.normal.z * this.min.z, s += t.normal.z * this.max.z) : (i += t.normal.z * this.max.z, s += t.normal.z * this.min.z), i <= -t.constant && s >= -t.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Zi), Ls.subVectors(this.max, Zi), li.subVectors(t.a, Zi), di.subVectors(t.b, Zi), fi.subVectors(t.c, Zi), Te.subVectors(di, li), ze.subVectors(fi, di), Ve.subVectors(li, fi);
    let i = [
      0,
      -Te.z,
      Te.y,
      0,
      -ze.z,
      ze.y,
      0,
      -Ve.z,
      Ve.y,
      Te.z,
      0,
      -Te.x,
      ze.z,
      0,
      -ze.x,
      Ve.z,
      0,
      -Ve.x,
      -Te.y,
      Te.x,
      0,
      -ze.y,
      ze.x,
      0,
      -Ve.y,
      Ve.x,
      0
    ];
    return !Hn(i, li, di, fi, Ls) || (i = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Hn(i, li, di, fi, Ls)) ? !1 : (Is.crossVectors(Te, ze), i = [Is.x, Is.y, Is.z], Hn(i, li, di, fi, Ls));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, i) {
    return i.copy(t).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(t) {
    return this.clampPoint(t, Jt).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Jt).length() * 0.5), t;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(t) {
    return this.isEmpty() ? this : (be[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), be[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), be[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), be[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), be[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), be[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), be[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), be[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(be), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const be = [
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g(),
  /* @__PURE__ */ new g()
], Jt = /* @__PURE__ */ new g(), Bs = /* @__PURE__ */ new ps(), li = /* @__PURE__ */ new g(), di = /* @__PURE__ */ new g(), fi = /* @__PURE__ */ new g(), Te = /* @__PURE__ */ new g(), ze = /* @__PURE__ */ new g(), Ve = /* @__PURE__ */ new g(), Zi = /* @__PURE__ */ new g(), Ls = /* @__PURE__ */ new g(), Is = /* @__PURE__ */ new g(), Ge = /* @__PURE__ */ new g();
function Hn(e, t, i, s, n) {
  for (let r = 0, o = e.length - 3; r <= o; r += 3) {
    Ge.fromArray(e, r);
    const a = n.x * Math.abs(Ge.x) + n.y * Math.abs(Ge.y) + n.z * Math.abs(Ge.z), h = t.dot(Ge), c = i.dot(Ge), u = s.dot(Ge);
    if (Math.max(-Math.max(h, c, u), Math.min(h, c, u)) > a)
      return !1;
  }
  return !0;
}
const et = /* @__PURE__ */ new g(), Os = /* @__PURE__ */ new Wt();
let G2 = 0;
class Kt extends ls {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, i, s = !1) {
    if (super(), Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: G2++ }), this.name = "", this.array = t, this.itemSize = i, this.count = t !== void 0 ? t.length / i : 0, this.normalized = s, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(t) {
    return this.usage = t, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, i) {
    this.updateRanges.push({ start: t, count: i });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(t, i, s) {
    t *= this.itemSize, s *= i.itemSize;
    for (let n = 0, r = this.itemSize; n < r; n++)
      this.array[t + n] = i.array[s + n];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(t) {
    return this.array.set(t), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let i = 0, s = this.count; i < s; i++)
        Os.fromBufferAttribute(this, i), Os.applyMatrix3(t), this.setXY(i, Os.x, Os.y);
    else if (this.itemSize === 3)
      for (let i = 0, s = this.count; i < s; i++)
        et.fromBufferAttribute(this, i), et.applyMatrix3(t), this.setXYZ(i, et.x, et.y, et.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(t) {
    for (let i = 0, s = this.count; i < s; i++)
      et.fromBufferAttribute(this, i), et.applyMatrix4(t), this.setXYZ(i, et.x, et.y, et.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(t) {
    for (let i = 0, s = this.count; i < s; i++)
      et.fromBufferAttribute(this, i), et.applyNormalMatrix(t), this.setXYZ(i, et.x, et.y, et.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(t) {
    for (let i = 0, s = this.count; i < s; i++)
      et.fromBufferAttribute(this, i), et.transformDirection(t), this.setXYZ(i, et.x, et.y, et.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(t, i = 0) {
    return this.array.set(t, i), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(t, i) {
    let s = this.array[t * this.itemSize + i];
    return this.normalized && (s = yi(s, this.array)), s;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(t, i, s) {
    return this.normalized && (s = _t(s, this.array)), this.array[t * this.itemSize + i] = s, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let i = this.array[t * this.itemSize];
    return this.normalized && (i = yi(i, this.array)), i;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, i) {
    return this.normalized && (i = _t(i, this.array)), this.array[t * this.itemSize] = i, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let i = this.array[t * this.itemSize + 1];
    return this.normalized && (i = yi(i, this.array)), i;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, i) {
    return this.normalized && (i = _t(i, this.array)), this.array[t * this.itemSize + 1] = i, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let i = this.array[t * this.itemSize + 2];
    return this.normalized && (i = yi(i, this.array)), i;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, i) {
    return this.normalized && (i = _t(i, this.array)), this.array[t * this.itemSize + 2] = i, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let i = this.array[t * this.itemSize + 3];
    return this.normalized && (i = yi(i, this.array)), i;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, i) {
    return this.normalized && (i = _t(i, this.array)), this.array[t * this.itemSize + 3] = i, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(t, i, s) {
    return t *= this.itemSize, this.normalized && (i = _t(i, this.array), s = _t(s, this.array)), this.array[t + 0] = i, this.array[t + 1] = s, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(t, i, s, n) {
    return t *= this.itemSize, this.normalized && (i = _t(i, this.array), s = _t(s, this.array), n = _t(n, this.array)), this.array[t + 0] = i, this.array[t + 1] = s, this.array[t + 2] = n, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(t, i, s, n, r) {
    return t *= this.itemSize, this.normalized && (i = _t(i, this.array), s = _t(s, this.array), n = _t(n, this.array), r = _t(r, this.array)), this.array[t + 0] = i, this.array[t + 1] = s, this.array[t + 2] = n, this.array[t + 3] = r, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), t;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class W2 extends Kt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, i, s) {
    super(new Uint16Array(t), i, s);
  }
}
class j2 extends Kt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, i, s) {
    super(new Uint32Array(t), i, s);
  }
}
class q2 extends Kt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, i, s) {
    super(new Float32Array(t), i, s);
  }
}
const H2 = /* @__PURE__ */ new ps(), Ji = /* @__PURE__ */ new g(), Xn = /* @__PURE__ */ new g();
class aa {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(t = new g(), i = -1) {
    this.isSphere = !0, this.center = t, this.radius = i;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(t, i) {
    return this.center.copy(t), this.radius = i, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(t, i) {
    const s = this.center;
    i !== void 0 ? s.copy(i) : H2.setFromPoints(t).getCenter(s);
    let n = 0;
    for (let r = 0, o = t.length; r < o; r++)
      n = Math.max(n, s.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(n), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(t) {
    const i = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= i * i;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, i) {
    const s = this.center.distanceToSquared(t);
    return i.copy(t), s > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(t) {
    return this.center.add(t), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Ji.subVectors(t, this.center);
    const i = Ji.lengthSq();
    if (i > this.radius * this.radius) {
      const s = Math.sqrt(i), n = (s - this.radius) * 0.5;
      this.center.addScaledVector(Ji, n / s), this.radius += n;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Xn.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ji.copy(t.center).add(Xn)), this.expandByPoint(Ji.copy(t.center).sub(Xn))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(t) {
    return this.radius = t.radius, this.center.fromArray(t.center), this;
  }
}
let X2 = 0;
const Pt = /* @__PURE__ */ new Qt(), Yn = /* @__PURE__ */ new ae(), pi = /* @__PURE__ */ new g(), vt = /* @__PURE__ */ new ps(), $i = /* @__PURE__ */ new ps(), ct = /* @__PURE__ */ new g();
class os extends ls {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: X2++ }), this.uuid = Ii(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (d2(t) ? j2 : W2)(t, 1) : this.index = t, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(t, i = 0) {
    return this.indirect = t, this.indirectOffset = i, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(t, i) {
    return this.attributes[t] = i, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(t, i, s = 0) {
    this.groups.push({
      start: t,
      count: i,
      materialIndex: s
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(t) {
    const i = this.attributes.position;
    i !== void 0 && (i.applyMatrix4(t), i.needsUpdate = !0);
    const s = this.attributes.normal;
    if (s !== void 0) {
      const r = new ce().getNormalMatrix(t);
      s.applyNormalMatrix(r), s.needsUpdate = !0;
    }
    const n = this.attributes.tangent;
    return n !== void 0 && (n.transformDirection(t), n.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(t) {
    return Pt.makeRotationFromQuaternion(t), this.applyMatrix4(Pt), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(t) {
    return Pt.makeRotationX(t), this.applyMatrix4(Pt), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(t) {
    return Pt.makeRotationY(t), this.applyMatrix4(Pt), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(t) {
    return Pt.makeRotationZ(t), this.applyMatrix4(Pt), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(t, i, s) {
    return Pt.makeTranslation(t, i, s), this.applyMatrix4(Pt), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(t, i, s) {
    return Pt.makeScale(t, i, s), this.applyMatrix4(Pt), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(t) {
    return Yn.lookAt(t), Yn.updateMatrix(), this.applyMatrix4(Yn.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(pi).negate(), this.translate(pi.x, pi.y, pi.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(t) {
    const i = this.getAttribute("position");
    if (i === void 0) {
      const s = [];
      for (let n = 0, r = t.length; n < r; n++) {
        const o = t[n];
        s.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new q2(s, 3));
    } else {
      const s = Math.min(t.length, i.count);
      for (let n = 0; n < s; n++) {
        const r = t[n];
        i.setXYZ(n, r.x, r.y, r.z || 0);
      }
      t.length > i.count && dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), i.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ps());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new g(-1 / 0, -1 / 0, -1 / 0),
        new g(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), i)
        for (let s = 0, n = i.length; s < n; s++) {
          const r = i[s];
          vt.setFromBufferAttribute(r), this.morphTargetsRelative ? (ct.addVectors(this.boundingBox.min, vt.min), this.boundingBox.expandByPoint(ct), ct.addVectors(this.boundingBox.max, vt.max), this.boundingBox.expandByPoint(ct)) : (this.boundingBox.expandByPoint(vt.min), this.boundingBox.expandByPoint(vt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new aa());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new g(), 1 / 0);
      return;
    }
    if (t) {
      const s = this.boundingSphere.center;
      if (vt.setFromBufferAttribute(t), i)
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r];
          $i.setFromBufferAttribute(a), this.morphTargetsRelative ? (ct.addVectors(vt.min, $i.min), vt.expandByPoint(ct), ct.addVectors(vt.max, $i.max), vt.expandByPoint(ct)) : (vt.expandByPoint($i.min), vt.expandByPoint($i.max));
        }
      vt.getCenter(s);
      let n = 0;
      for (let r = 0, o = t.count; r < o; r++)
        ct.fromBufferAttribute(t, r), n = Math.max(n, s.distanceToSquared(ct));
      if (i)
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r], h = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            ct.fromBufferAttribute(a, c), h && (pi.fromBufferAttribute(t, c), ct.add(pi)), n = Math.max(n, s.distanceToSquared(ct));
        }
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const t = this.index, i = this.attributes;
    if (t === null || i.position === void 0 || i.normal === void 0 || i.uv === void 0) {
      qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const s = i.position, n = i.normal, r = i.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Kt(new Float32Array(4 * s.count), 4));
    const o = this.getAttribute("tangent"), a = [], h = [];
    for (let F = 0; F < s.count; F++)
      a[F] = new g(), h[F] = new g();
    const c = new g(), u = new g(), l = new g(), d = new Wt(), f = new Wt(), p = new Wt(), m = new g(), y = new g();
    function x(F, G, Z) {
      c.fromBufferAttribute(s, F), u.fromBufferAttribute(s, G), l.fromBufferAttribute(s, Z), d.fromBufferAttribute(r, F), f.fromBufferAttribute(r, G), p.fromBufferAttribute(r, Z), u.sub(c), l.sub(c), f.sub(d), p.sub(d);
      const J = 1 / (f.x * p.y - p.x * f.y);
      isFinite(J) && (m.copy(u).multiplyScalar(p.y).addScaledVector(l, -f.y).multiplyScalar(J), y.copy(l).multiplyScalar(f.x).addScaledVector(u, -p.x).multiplyScalar(J), a[F].add(m), a[G].add(m), a[Z].add(m), h[F].add(y), h[G].add(y), h[Z].add(y));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: t.count
    }]);
    for (let F = 0, G = S.length; F < G; ++F) {
      const Z = S[F], J = Z.start, wt = Z.count;
      for (let $ = J, Ht = J + wt; $ < Ht; $ += 3)
        x(
          t.getX($ + 0),
          t.getX($ + 1),
          t.getX($ + 2)
        );
    }
    const E = new g(), k = new g(), z = new g(), O = new g();
    function L(F) {
      z.fromBufferAttribute(n, F), O.copy(z);
      const G = a[F];
      E.copy(G), E.sub(z.multiplyScalar(z.dot(G))).normalize(), k.crossVectors(O, G);
      const J = k.dot(h[F]) < 0 ? -1 : 1;
      o.setXYZW(F, E.x, E.y, E.z, J);
    }
    for (let F = 0, G = S.length; F < G; ++F) {
      const Z = S[F], J = Z.start, wt = Z.count;
      for (let $ = J, Ht = J + wt; $ < Ht; $ += 3)
        L(t.getX($ + 0)), L(t.getX($ + 1)), L(t.getX($ + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const t = this.index, i = this.getAttribute("position");
    if (i !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0)
        s = new Kt(new Float32Array(i.count * 3), 3), this.setAttribute("normal", s);
      else
        for (let d = 0, f = s.count; d < f; d++)
          s.setXYZ(d, 0, 0, 0);
      const n = new g(), r = new g(), o = new g(), a = new g(), h = new g(), c = new g(), u = new g(), l = new g();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          const p = t.getX(d + 0), m = t.getX(d + 1), y = t.getX(d + 2);
          n.fromBufferAttribute(i, p), r.fromBufferAttribute(i, m), o.fromBufferAttribute(i, y), u.subVectors(o, r), l.subVectors(n, r), u.cross(l), a.fromBufferAttribute(s, p), h.fromBufferAttribute(s, m), c.fromBufferAttribute(s, y), a.add(u), h.add(u), c.add(u), s.setXYZ(p, a.x, a.y, a.z), s.setXYZ(m, h.x, h.y, h.z), s.setXYZ(y, c.x, c.y, c.z);
        }
      else
        for (let d = 0, f = i.count; d < f; d += 3)
          n.fromBufferAttribute(i, d + 0), r.fromBufferAttribute(i, d + 1), o.fromBufferAttribute(i, d + 2), u.subVectors(o, r), l.subVectors(n, r), u.cross(l), s.setXYZ(d + 0, u.x, u.y, u.z), s.setXYZ(d + 1, u.x, u.y, u.z), s.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), s.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let i = 0, s = t.count; i < s; i++)
      ct.fromBufferAttribute(t, i), ct.normalize(), t.setXYZ(i, ct.x, ct.y, ct.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function t(a, h) {
      const c = a.array, u = a.itemSize, l = a.normalized, d = new c.constructor(h.length * u);
      let f = 0, p = 0;
      for (let m = 0, y = h.length; m < y; m++) {
        a.isInterleavedBufferAttribute ? f = h[m] * a.data.stride + a.offset : f = h[m] * u;
        for (let x = 0; x < u; x++)
          d[p++] = c[f++];
      }
      return new Kt(d, u, l);
    }
    if (this.index === null)
      return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const i = new os(), s = this.index.array, n = this.attributes;
    for (const a in n) {
      const h = n[a], c = t(h, s);
      i.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const h = [], c = r[a];
      for (let u = 0, l = c.length; u < l; u++) {
        const d = c[u], f = t(d, s);
        h.push(f);
      }
      i.morphAttributes[a] = h;
    }
    i.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, h = o.length; a < h; a++) {
      const c = o[a];
      i.addGroup(c.start, c.count, c.materialIndex);
    }
    return i;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const t = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const h = this.parameters;
      for (const c in h)
        h[c] !== void 0 && (t[c] = h[c]);
      return t;
    }
    t.data = { attributes: {} };
    const i = this.index;
    i !== null && (t.data.index = {
      type: i.array.constructor.name,
      array: Array.prototype.slice.call(i.array)
    });
    const s = this.attributes;
    for (const h in s) {
      const c = s[h];
      t.data.attributes[h] = c.toJSON(t.data);
    }
    const n = {};
    let r = !1;
    for (const h in this.morphAttributes) {
      const c = this.morphAttributes[h], u = [];
      for (let l = 0, d = c.length; l < d; l++) {
        const f = c[l];
        u.push(f.toJSON(t.data));
      }
      u.length > 0 && (n[h] = u, r = !0);
    }
    r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = a.toJSON()), t;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const i = {};
    this.name = t.name;
    const s = t.index;
    s !== null && this.setIndex(s.clone());
    const n = t.attributes;
    for (const c in n) {
      const u = n[c];
      this.setAttribute(c, u.clone(i));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const u = [], l = r[c];
      for (let d = 0, f = l.length; d < f; d++)
        u.push(l[d].clone(i));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const l = o[c];
      this.addGroup(l.start, l.count, l.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const h = t.boundingSphere;
    return h !== null && (this.boundingSphere = h.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
let Y2 = 0;
class Z2 extends ls {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Y2++ }), this.uuid = Ii(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new hn(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(t) {
    if (t !== void 0)
      for (const i in t) {
        const s = t[i];
        if (s === void 0) {
          dt(`Material: parameter '${i}' has value of undefined.`);
          continue;
        }
        const n = this[i];
        if (n === void 0) {
          dt(`Material: '${i}' is not a property of THREE.${this.type}.`);
          continue;
        }
        n && n.isColor ? n.set(s) : n && n.isVector3 && s && s.isVector3 ? n.copy(s) : this[i] = s;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    i && (t = {
      textures: {},
      images: {}
    });
    const s = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.color && this.color.isColor && (s.color = this.color.getHex()), this.roughness !== void 0 && (s.roughness = this.roughness), this.metalness !== void 0 && (s.metalness = this.metalness), this.sheen !== void 0 && (s.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (s.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (s.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (s.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (s.shininess = this.shininess), this.clearcoat !== void 0 && (s.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (s.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, s.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (s.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (s.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (s.dispersion = this.dispersion), this.iridescence !== void 0 && (s.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (s.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (s.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (s.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (s.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (s.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (s.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (s.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (s.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (s.lightMap = this.lightMap.toJSON(t).uuid, s.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s.aoMap = this.aoMap.toJSON(t).uuid, s.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s.bumpMap = this.bumpMap.toJSON(t).uuid, s.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s.normalMap = this.normalMap.toJSON(t).uuid, s.normalMapType = this.normalMapType, s.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s.displacementMap = this.displacementMap.toJSON(t).uuid, s.displacementScale = this.displacementScale, s.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (s.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (s.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (s.combine = this.combine)), this.envMapRotation !== void 0 && (s.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (s.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (s.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (s.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (s.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (s.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (s.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (s.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (s.size = this.size), this.shadowSide !== null && (s.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (s.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (s.blending = this.blending), this.side !== 0 && (s.side = this.side), this.vertexColors === !0 && (s.vertexColors = !0), this.opacity < 1 && (s.opacity = this.opacity), this.transparent === !0 && (s.transparent = !0), this.blendSrc !== 204 && (s.blendSrc = this.blendSrc), this.blendDst !== 205 && (s.blendDst = this.blendDst), this.blendEquation !== 100 && (s.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (s.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (s.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (s.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (s.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (s.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (s.depthFunc = this.depthFunc), this.depthTest === !1 && (s.depthTest = this.depthTest), this.depthWrite === !1 && (s.depthWrite = this.depthWrite), this.colorWrite === !1 && (s.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (s.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (s.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (s.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (s.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (s.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (s.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (s.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (s.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (s.rotation = this.rotation), this.polygonOffset === !0 && (s.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (s.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (s.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (s.linewidth = this.linewidth), this.dashSize !== void 0 && (s.dashSize = this.dashSize), this.gapSize !== void 0 && (s.gapSize = this.gapSize), this.scale !== void 0 && (s.scale = this.scale), this.dithering === !0 && (s.dithering = !0), this.alphaTest > 0 && (s.alphaTest = this.alphaTest), this.alphaHash === !0 && (s.alphaHash = !0), this.alphaToCoverage === !0 && (s.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (s.premultipliedAlpha = !0), this.forceSinglePass === !0 && (s.forceSinglePass = !0), this.allowOverride === !1 && (s.allowOverride = !1), this.wireframe === !0 && (s.wireframe = !0), this.wireframeLinewidth > 1 && (s.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (s.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (s.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (s.flatShading = !0), this.visible === !1 && (s.visible = !1), this.toneMapped === !1 && (s.toneMapped = !1), this.fog === !1 && (s.fog = !1), Object.keys(this.userData).length > 0 && (s.userData = this.userData);
    function n(r) {
      const o = [];
      for (const a in r) {
        const h = r[a];
        delete h.metadata, o.push(h);
      }
      return o;
    }
    if (i) {
      const r = n(t.textures), o = n(t.images);
      r.length > 0 && (s.textures = r), o.length > 0 && (s.images = o);
    }
    return s;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const i = t.clippingPlanes;
    let s = null;
    if (i !== null) {
      const n = i.length;
      s = new Array(n);
      for (let r = 0; r !== n; ++r)
        s[r] = i[r].clone();
    }
    return this.clippingPlanes = s, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.allowOverride = t.allowOverride, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
const _e = /* @__PURE__ */ new g(), Zn = /* @__PURE__ */ new g(), Rs = /* @__PURE__ */ new g(), Ce = /* @__PURE__ */ new g(), Jn = /* @__PURE__ */ new g(), Ps = /* @__PURE__ */ new g(), $n = /* @__PURE__ */ new g();
class J2 {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(t = new g(), i = new g(0, 0, -1)) {
    this.origin = t, this.direction = i;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(t, i) {
    return this.origin.copy(t), this.direction.copy(i), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(t, i) {
    return i.copy(this.origin).addScaledVector(this.direction, t);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(t) {
    return this.origin.copy(this.at(t, _e)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(t, i) {
    i.subVectors(t, this.origin);
    const s = i.dot(this.direction);
    return s < 0 ? i.copy(this.origin) : i.copy(this.origin).addScaledVector(this.direction, s);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(t) {
    const i = _e.subVectors(t, this.origin).dot(this.direction);
    return i < 0 ? this.origin.distanceToSquared(t) : (_e.copy(this.origin).addScaledVector(this.direction, i), _e.distanceToSquared(t));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(t, i, s, n) {
    Zn.copy(t).add(i).multiplyScalar(0.5), Rs.copy(i).sub(t).normalize(), Ce.copy(this.origin).sub(Zn);
    const r = t.distanceTo(i) * 0.5, o = -this.direction.dot(Rs), a = Ce.dot(this.direction), h = -Ce.dot(Rs), c = Ce.lengthSq(), u = Math.abs(1 - o * o);
    let l, d, f, p;
    if (u > 0)
      if (l = o * h - a, d = o * a - h, p = r * u, l >= 0)
        if (d >= -p)
          if (d <= p) {
            const m = 1 / u;
            l *= m, d *= m, f = l * (l + o * d + 2 * a) + d * (o * l + d + 2 * h) + c;
          } else
            d = r, l = Math.max(0, -(o * d + a)), f = -l * l + d * (d + 2 * h) + c;
        else
          d = -r, l = Math.max(0, -(o * d + a)), f = -l * l + d * (d + 2 * h) + c;
      else
        d <= -p ? (l = Math.max(0, -(-o * r + a)), d = l > 0 ? -r : Math.min(Math.max(-r, -h), r), f = -l * l + d * (d + 2 * h) + c) : d <= p ? (l = 0, d = Math.min(Math.max(-r, -h), r), f = d * (d + 2 * h) + c) : (l = Math.max(0, -(o * r + a)), d = l > 0 ? r : Math.min(Math.max(-r, -h), r), f = -l * l + d * (d + 2 * h) + c);
    else
      d = o > 0 ? -r : r, l = Math.max(0, -(o * d + a)), f = -l * l + d * (d + 2 * h) + c;
    return s && s.copy(this.origin).addScaledVector(this.direction, l), n && n.copy(Zn).addScaledVector(Rs, d), f;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(t, i) {
    _e.subVectors(t.center, this.origin);
    const s = _e.dot(this.direction), n = _e.dot(_e) - s * s, r = t.radius * t.radius;
    if (n > r) return null;
    const o = Math.sqrt(r - n), a = s - o, h = s + o;
    return h < 0 ? null : a < 0 ? this.at(h, i) : this.at(a, i);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(t) {
    return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(t) {
    const i = t.normal.dot(this.direction);
    if (i === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const s = -(this.origin.dot(t.normal) + t.constant) / i;
    return s >= 0 ? s : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(t, i) {
    const s = this.distanceToPlane(t);
    return s === null ? null : this.at(s, i);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(t) {
    const i = t.distanceToPoint(this.origin);
    return i === 0 || t.normal.dot(this.direction) * i < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(t, i) {
    let s, n, r, o, a, h;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, l = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (s = (t.min.x - d.x) * c, n = (t.max.x - d.x) * c) : (s = (t.max.x - d.x) * c, n = (t.min.x - d.x) * c), u >= 0 ? (r = (t.min.y - d.y) * u, o = (t.max.y - d.y) * u) : (r = (t.max.y - d.y) * u, o = (t.min.y - d.y) * u), s > o || r > n || ((r > s || isNaN(s)) && (s = r), (o < n || isNaN(n)) && (n = o), l >= 0 ? (a = (t.min.z - d.z) * l, h = (t.max.z - d.z) * l) : (a = (t.max.z - d.z) * l, h = (t.min.z - d.z) * l), s > h || a > n) || ((a > s || s !== s) && (s = a), (h < n || n !== n) && (n = h), n < 0) ? null : this.at(s >= 0 ? s : n, i);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, _e) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(t, i, s, n, r) {
    Jn.subVectors(i, t), Ps.subVectors(s, t), $n.crossVectors(Jn, Ps);
    let o = this.direction.dot($n), a;
    if (o > 0) {
      if (n) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Ce.subVectors(this.origin, t);
    const h = a * this.direction.dot(Ps.crossVectors(Ce, Ps));
    if (h < 0)
      return null;
    const c = a * this.direction.dot(Jn.cross(Ce));
    if (c < 0 || h + c > o)
      return null;
    const u = -a * Ce.dot($n);
    return u < 0 ? null : this.at(u / o, r);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class hr extends Z2 {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new hn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fs(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const Ho = /* @__PURE__ */ new Qt(), We = /* @__PURE__ */ new J2(), Ds = /* @__PURE__ */ new aa(), Xo = /* @__PURE__ */ new g(), Ns = /* @__PURE__ */ new g(), Us = /* @__PURE__ */ new g(), Vs = /* @__PURE__ */ new g(), Kn = /* @__PURE__ */ new g(), Gs = /* @__PURE__ */ new g(), Yo = /* @__PURE__ */ new g(), Ws = /* @__PURE__ */ new g();
class Zo extends ae {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new os(), i = new hr()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = i, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t, i) {
    return super.copy(t, i), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const i = this.geometry.morphAttributes, s = Object.keys(i);
    if (s.length > 0) {
      const n = i[s[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = n.length; r < o; r++) {
          const a = n[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(t, i) {
    const s = this.geometry, n = s.attributes.position, r = s.morphAttributes.position, o = s.morphTargetsRelative;
    i.fromBufferAttribute(n, t);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Gs.set(0, 0, 0);
      for (let h = 0, c = r.length; h < c; h++) {
        const u = a[h], l = r[h];
        u !== 0 && (Kn.fromBufferAttribute(l, t), o ? Gs.addScaledVector(Kn, u) : Gs.addScaledVector(Kn.sub(i), u));
      }
      i.add(Gs);
    }
    return i;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, i) {
    const s = this.geometry, n = this.material, r = this.matrixWorld;
    n !== void 0 && (s.boundingSphere === null && s.computeBoundingSphere(), Ds.copy(s.boundingSphere), Ds.applyMatrix4(r), We.copy(t.ray).recast(t.near), !(Ds.containsPoint(We.origin) === !1 && (We.intersectSphere(Ds, Xo) === null || We.origin.distanceToSquared(Xo) > (t.far - t.near) ** 2)) && (Ho.copy(r).invert(), We.copy(t.ray).applyMatrix4(Ho), !(s.boundingBox !== null && We.intersectsBox(s.boundingBox) === !1) && this._computeIntersections(t, i, We)));
  }
  _computeIntersections(t, i, s) {
    let n;
    const r = this.geometry, o = this.material, a = r.index, h = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, l = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let p = 0, m = d.length; p < m; p++) {
          const y = d[p], x = o[y.materialIndex], S = Math.max(y.start, f.start), E = Math.min(a.count, Math.min(y.start + y.count, f.start + f.count));
          for (let k = S, z = E; k < z; k += 3) {
            const O = a.getX(k), L = a.getX(k + 1), F = a.getX(k + 2);
            n = js(this, x, t, s, c, u, l, O, L, F), n && (n.faceIndex = Math.floor(k / 3), n.face.materialIndex = y.materialIndex, i.push(n));
          }
        }
      else {
        const p = Math.max(0, f.start), m = Math.min(a.count, f.start + f.count);
        for (let y = p, x = m; y < x; y += 3) {
          const S = a.getX(y), E = a.getX(y + 1), k = a.getX(y + 2);
          n = js(this, o, t, s, c, u, l, S, E, k), n && (n.faceIndex = Math.floor(y / 3), i.push(n));
        }
      }
    else if (h !== void 0)
      if (Array.isArray(o))
        for (let p = 0, m = d.length; p < m; p++) {
          const y = d[p], x = o[y.materialIndex], S = Math.max(y.start, f.start), E = Math.min(h.count, Math.min(y.start + y.count, f.start + f.count));
          for (let k = S, z = E; k < z; k += 3) {
            const O = k, L = k + 1, F = k + 2;
            n = js(this, x, t, s, c, u, l, O, L, F), n && (n.faceIndex = Math.floor(k / 3), n.face.materialIndex = y.materialIndex, i.push(n));
          }
        }
      else {
        const p = Math.max(0, f.start), m = Math.min(h.count, f.start + f.count);
        for (let y = p, x = m; y < x; y += 3) {
          const S = y, E = y + 1, k = y + 2;
          n = js(this, o, t, s, c, u, l, S, E, k), n && (n.faceIndex = Math.floor(y / 3), i.push(n));
        }
      }
  }
}
function $2(e, t, i, s, n, r, o, a) {
  let h;
  if (t.side === 1 ? h = s.intersectTriangle(o, r, n, !0, a) : h = s.intersectTriangle(n, r, o, t.side === 0, a), h === null) return null;
  Ws.copy(a), Ws.applyMatrix4(e.matrixWorld);
  const c = i.ray.origin.distanceTo(Ws);
  return c < i.near || c > i.far ? null : {
    distance: c,
    point: Ws.clone(),
    object: e
  };
}
function js(e, t, i, s, n, r, o, a, h, c) {
  e.getVertexPosition(a, Ns), e.getVertexPosition(h, Us), e.getVertexPosition(c, Vs);
  const u = $2(e, t, i, s, Ns, Us, Vs, Yo);
  if (u) {
    const l = new g();
    $t.getBarycoord(Yo, Ns, Us, Vs, l), n && (u.uv = $t.getInterpolatedAttribute(n, a, h, c, l, new Wt())), r && (u.uv1 = $t.getInterpolatedAttribute(r, a, h, c, l, new Wt())), o && (u.normal = $t.getInterpolatedAttribute(o, a, h, c, l, new g()), u.normal.dot(s.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a,
      b: h,
      c,
      normal: new g(),
      materialIndex: 0
    };
    $t.getNormal(Ns, Us, Vs, d.normal), u.face = d, u.barycoord = l;
  }
  return u;
}
class K2 extends Re {
  /**
   * Constructs a new texture.
   *
   * @param {HTMLCanvasElement} [canvas] - The HTML canvas element.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   */
  constructor(t, i, s, n, r, o, a, h, c) {
    super(t, i, s, n, r, o, a, h, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
const Fo = class Fo {
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(t, i, s, n) {
    this.elements = [
      1,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, i, s, n);
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(t, i = 0) {
    for (let s = 0; s < 4; s++)
      this.elements[s] = t[s + i];
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(t, i, s, n) {
    const r = this.elements;
    return r[0] = t, r[2] = i, r[1] = s, r[3] = n, this;
  }
};
Fo.prototype.isMatrix2 = !0;
let Jo = Fo;
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ea
} }));
typeof window < "u" && (window.__THREE__ ? dt("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ea);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Q2 = /* @__PURE__ */ new ce();
Q2.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
const th = /* @__PURE__ */ new ce();
th.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
var Ai = typeof self < "u" ? self : {};
function ha(e, t) {
  t: {
    for (var i = ["CLOSURE_FLAGS"], s = Ai, n = 0; n < i.length; n++) if ((s = s[i[n]]) == null) {
      i = null;
      break t;
    }
    i = s;
  }
  return (e = i && i[e]) != null ? e : t;
}
function je() {
  throw Error("Invalid UTF8");
}
function $o(e, t) {
  return t = String.fromCharCode.apply(null, t), e == null ? t : e + t;
}
let qs, Qn;
const eh = typeof TextDecoder < "u";
let ih;
const sh = typeof TextEncoder < "u";
function ca(e) {
  if (sh) e = (ih || (ih = new TextEncoder())).encode(e);
  else {
    let i = 0;
    const s = new Uint8Array(3 * e.length);
    for (let n = 0; n < e.length; n++) {
      var t = e.charCodeAt(n);
      if (t < 128) s[i++] = t;
      else {
        if (t < 2048) s[i++] = t >> 6 | 192;
        else {
          if (t >= 55296 && t <= 57343) {
            if (t <= 56319 && n < e.length) {
              const r = e.charCodeAt(++n);
              if (r >= 56320 && r <= 57343) {
                t = 1024 * (t - 55296) + r - 56320 + 65536, s[i++] = t >> 18 | 240, s[i++] = t >> 12 & 63 | 128, s[i++] = t >> 6 & 63 | 128, s[i++] = 63 & t | 128;
                continue;
              }
              n--;
            }
            t = 65533;
          }
          s[i++] = t >> 12 | 224, s[i++] = t >> 6 & 63 | 128;
        }
        s[i++] = 63 & t | 128;
      }
    }
    e = i === s.length ? s : s.subarray(0, i);
  }
  return e;
}
function ua(e) {
  Ai.setTimeout(() => {
    throw e;
  }, 0);
}
var cr, nh = ha(610401301, !1), Ko = ha(748402147, !0);
function Qo() {
  var e = Ai.navigator;
  return e && (e = e.userAgent) ? e : "";
}
const t0 = Ai.navigator;
function cn(e) {
  return cn[" "](e), e;
}
cr = t0 && t0.userAgentData || null, cn[" "] = function() {
};
const la = {};
let Qi = null;
function rh(e) {
  const t = e.length;
  let i = 3 * t / 4;
  i % 3 ? i = Math.floor(i) : "=.".indexOf(e[t - 1]) != -1 && (i = "=.".indexOf(e[t - 2]) != -1 ? i - 2 : i - 1);
  const s = new Uint8Array(i);
  let n = 0;
  return function(r, o) {
    function a(c) {
      for (; h < r.length; ) {
        const u = r.charAt(h++), l = Qi[u];
        if (l != null) return l;
        if (!/^[\s\xa0]*$/.test(u)) throw Error("Unknown base64 encoding at char: " + u);
      }
      return c;
    }
    da();
    let h = 0;
    for (; ; ) {
      const c = a(-1), u = a(0), l = a(64), d = a(64);
      if (d === 64 && c === -1) break;
      o(c << 2 | u >> 4), l != 64 && (o(u << 4 & 240 | l >> 2), d != 64 && o(l << 6 & 192 | d));
    }
  }(e, function(r) {
    s[n++] = r;
  }), n !== i ? s.subarray(0, n) : s;
}
function da() {
  if (!Qi) {
    Qi = {};
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let i = 0; i < 5; i++) {
      const s = e.concat(t[i].split(""));
      la[i] = s;
      for (let n = 0; n < s.length; n++) {
        const r = s[n];
        Qi[r] === void 0 && (Qi[r] = n);
      }
    }
  }
}
var oh = typeof Uint8Array < "u", fa = !(!(nh && cr && cr.brands.length > 0) && (Qo().indexOf("Trident") != -1 || Qo().indexOf("MSIE") != -1)) && typeof btoa == "function";
const e0 = /[-_.]/g, ah = { "-": "+", _: "/", ".": "=" };
function hh(e) {
  return ah[e] || "";
}
function pa(e) {
  if (!fa) return rh(e);
  e = e0.test(e) ? e.replace(e0, hh) : e, e = atob(e);
  const t = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
  return t;
}
function Fr(e) {
  return oh && e != null && e instanceof Uint8Array;
}
var Si = {};
function Qe() {
  return ch || (ch = new he(null, Si));
}
function Tr(e) {
  ma(Si);
  var t = e.g;
  return (t = t == null || Fr(t) ? t : typeof t == "string" ? pa(t) : null) == null ? t : e.g = t;
}
var he = class {
  h() {
    return new Uint8Array(Tr(this) || 0);
  }
  constructor(e, t) {
    if (ma(t), this.g = e, e != null && e.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
};
let ch, uh;
function ma(e) {
  if (e !== Si) throw Error("illegal external caller");
}
function ga(e, t) {
  e.__closure__error__context__984382 || (e.__closure__error__context__984382 = {}), e.__closure__error__context__984382.severity = t;
}
function ur(e) {
  return ga(e = Error(e), "warning"), e;
}
function vi(e, t) {
  if (e != null) {
    var i = uh ?? (uh = {}), s = i[e] || 0;
    s >= t || (i[e] = s + 1, ga(e = Error(), "incident"), ua(e));
  }
}
function Oi() {
  return typeof BigInt == "function";
}
var Ri = typeof Symbol == "function" && typeof Symbol() == "symbol";
function le(e, t, i = !1) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? i && Symbol.for && e ? Symbol.for(e) : e != null ? Symbol(e) : Symbol() : t;
}
var lh = le("jas", void 0, !0), i0 = le(void 0, "0di"), Ki = le(void 0, "1oa"), zt = le(void 0, Symbol()), dh = le(void 0, "0ub"), fh = le(void 0, "0ubs"), lr = le(void 0, "0ubsb"), ph = le(void 0, "0actk"), ki = le("m_m", "Pa", !0), s0 = le();
const ya = { Ga: { value: 0, configurable: !0, writable: !0, enumerable: !1 } }, xa = Object.defineProperties, _ = Ri ? lh : "Ga";
var ii;
const n0 = [];
function ms(e, t) {
  Ri || _ in e || xa(e, ya), e[_] |= t;
}
function ht(e, t) {
  Ri || _ in e || xa(e, ya), e[_] = t;
}
function gs(e) {
  return ms(e, 34), e;
}
function as(e) {
  return ms(e, 8192), e;
}
ht(n0, 7), ii = Object.freeze(n0);
var Ei = {};
function Bt(e, t) {
  return t === void 0 ? e.h !== ti && !!(2 & (0 | e.v[_])) : !!(2 & t) && e.h !== ti;
}
const ti = {};
function zr(e, t) {
  if (e != null) {
    if (typeof e == "string") e = e ? new he(e, Si) : Qe();
    else if (e.constructor !== he) if (Fr(e)) e = e.length ? new he(new Uint8Array(e), Si) : Qe();
    else {
      if (!t) throw Error();
      e = void 0;
    }
  }
  return e;
}
class r0 {
  constructor(t, i, s) {
    this.g = t, this.h = i, this.l = s;
  }
  next() {
    const t = this.g.next();
    return t.done || (t.value = this.h.call(this.l, t.value)), t;
  }
  [Symbol.iterator]() {
    return this;
  }
}
var mh = Object.freeze({});
function ba(e, t, i) {
  const s = 128 & t ? 0 : -1, n = e.length;
  var r;
  (r = !!n) && (r = (r = e[n - 1]) != null && typeof r == "object" && r.constructor === Object);
  const o = n + (r ? -1 : 0);
  for (t = 128 & t ? 1 : 0; t < o; t++) i(t - s, e[t]);
  if (r) {
    e = e[n - 1];
    for (const a in e) !isNaN(a) && i(+a, e[a]);
  }
}
var _a = {};
function Pi(e) {
  return 128 & e ? _a : void 0;
}
function un(e) {
  return e.Na = !0, e;
}
var gh = un((e) => typeof e == "number"), o0 = un((e) => typeof e == "string"), yh = un((e) => typeof e == "boolean"), ln = typeof Ai.BigInt == "function" && typeof Ai.BigInt(0) == "bigint";
function Ct(e) {
  var t = e;
  if (o0(t)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t)) throw Error(String(t));
  } else if (gh(t) && !Number.isSafeInteger(t)) throw Error(String(t));
  return ln ? BigInt(e) : e = yh(e) ? e ? "1" : "0" : o0(e) ? e.trim() || "0" : String(e);
}
var dr = un((e) => ln ? e >= bh && e <= wh : e[0] === "-" ? a0(e, xh) : a0(e, _h));
const xh = Number.MIN_SAFE_INTEGER.toString(), bh = ln ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, _h = Number.MAX_SAFE_INTEGER.toString(), wh = ln ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function a0(e, t) {
  if (e.length > t.length) return !1;
  if (e.length < t.length || e === t) return !0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i], n = t[i];
    if (s > n) return !1;
    if (s < n) return !0;
  }
}
const Mh = typeof Uint8Array.prototype.slice == "function";
let Ah, q = 0, it = 0;
function h0(e) {
  const t = e >>> 0;
  q = t, it = (e - t) / 4294967296 >>> 0;
}
function Fi(e) {
  if (e < 0) {
    h0(-e);
    const [t, i] = Lr(q, it);
    q = t >>> 0, it = i >>> 0;
  } else h0(e);
}
function Cr(e) {
  const t = Ah || (Ah = new DataView(new ArrayBuffer(8)));
  t.setFloat32(0, +e, !0), it = 0, q = t.getUint32(0, !0);
}
function wa(e, t) {
  const i = 4294967296 * t + (e >>> 0);
  return Number.isSafeInteger(i) ? i : hs(e, t);
}
function Sh(e, t) {
  return Ct(Oi() ? BigInt.asUintN(64, (BigInt(t >>> 0) << BigInt(32)) + BigInt(e >>> 0)) : hs(e, t));
}
function Ma(e, t) {
  return Oi() ? Ct(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(t)) << BigInt(32)) + BigInt.asUintN(32, BigInt(e)))) : Ct(Br(e, t));
}
function hs(e, t) {
  if (e >>>= 0, (t >>>= 0) <= 2097151) var i = "" + (4294967296 * t + e);
  else Oi() ? i = "" + (BigInt(t) << BigInt(32) | BigInt(e)) : (e = (16777215 & e) + 6777216 * (i = 16777215 & (e >>> 24 | t << 8)) + 6710656 * (t = t >> 16 & 65535), i += 8147497 * t, t *= 2, e >= 1e7 && (i += e / 1e7 >>> 0, e %= 1e7), i >= 1e7 && (t += i / 1e7 >>> 0, i %= 1e7), i = t + c0(i) + c0(e));
  return i;
}
function c0(e) {
  return e = String(e), "0000000".slice(e.length) + e;
}
function Br(e, t) {
  if (2147483648 & t) if (Oi()) e = "" + (BigInt(0 | t) << BigInt(32) | BigInt(e >>> 0));
  else {
    const [i, s] = Lr(e, t);
    e = "-" + hs(i, s);
  }
  else e = hs(e, t);
  return e;
}
function dn(e) {
  if (e.length < 16) Fi(Number(e));
  else if (Oi()) e = BigInt(e), q = Number(e & BigInt(4294967295)) >>> 0, it = Number(e >> BigInt(32) & BigInt(4294967295));
  else {
    const t = +(e[0] === "-");
    it = q = 0;
    const i = e.length;
    for (let s = t, n = (i - t) % 6 + t; n <= i; s = n, n += 6) {
      const r = Number(e.slice(s, n));
      it *= 1e6, q = 1e6 * q + r, q >= 4294967296 && (it += Math.trunc(q / 4294967296), it >>>= 0, q >>>= 0);
    }
    if (t) {
      const [s, n] = Lr(q, it);
      q = s, it = n;
    }
  }
}
function Lr(e, t) {
  return t = ~t, e ? e = 1 + ~e : t += 1, [e, t];
}
function te(e) {
  return Array.prototype.slice.call(e);
}
const ys = typeof BigInt == "function" ? BigInt.asIntN : void 0, vh = typeof BigInt == "function" ? BigInt.asUintN : void 0, ei = Number.isSafeInteger, fn = Number.isFinite, Ti = Math.trunc, kh = Ct(0);
function ts(e) {
  if (e != null && typeof e != "number") throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);
  return e;
}
function oe(e) {
  return e == null || typeof e == "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
}
function cs(e) {
  if (e != null && typeof e != "boolean") {
    var t = typeof e;
    throw Error(`Expected boolean but got ${t != "object" ? t : e ? Array.isArray(e) ? "array" : t : "null"}: ${e}`);
  }
  return e;
}
function Aa(e) {
  return e == null || typeof e == "boolean" ? e : typeof e == "number" ? !!e : void 0;
}
const Eh = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function xs(e) {
  switch (typeof e) {
    case "bigint":
      return !0;
    case "number":
      return fn(e);
    case "string":
      return Eh.test(e);
    default:
      return !1;
  }
}
function Di(e) {
  if (e == null) return e;
  if (typeof e == "string" && e) e = +e;
  else if (typeof e != "number") return;
  return fn(e) ? 0 | e : void 0;
}
function Sa(e) {
  if (e == null) return e;
  if (typeof e == "string" && e) e = +e;
  else if (typeof e != "number") return;
  return fn(e) ? e >>> 0 : void 0;
}
function va(e) {
  const t = e.length;
  return (e[0] === "-" ? t < 20 || t === 20 && e <= "-9223372036854775808" : t < 19 || t === 19 && e <= "9223372036854775807") ? e : (dn(e), Br(q, it));
}
function Ir(e) {
  if (e = Ti(e), !ei(e)) {
    Fi(e);
    var t = q, i = it;
    (e = 2147483648 & i) && (i = ~i >>> 0, (t = 1 + ~t >>> 0) == 0 && (i = i + 1 >>> 0)), e = typeof (t = wa(t, i)) == "number" ? e ? -t : t : e ? "-" + t : t;
  }
  return e;
}
function ka(e) {
  var t = Ti(Number(e));
  return ei(t) ? String(t) : ((t = e.indexOf(".")) !== -1 && (e = e.substring(0, t)), va(e));
}
function Ea(e) {
  var t = Ti(Number(e));
  return ei(t) ? Ct(t) : ((t = e.indexOf(".")) !== -1 && (e = e.substring(0, t)), Oi() ? Ct(ys(64, BigInt(e))) : Ct(va(e)));
}
function Fa(e) {
  return ei(e) ? e = Ct(Ir(e)) : (e = Ti(e), ei(e) ? e = String(e) : (Fi(e), e = Br(q, it)), e = Ct(e)), e;
}
function Qs(e) {
  const t = typeof e;
  return e == null ? e : t === "bigint" ? Ct(ys(64, e)) : xs(e) ? t === "string" ? Ea(e) : Fa(e) : void 0;
}
function Ta(e) {
  if (typeof e != "string") throw Error();
  return e;
}
function bs(e) {
  if (e != null && typeof e != "string") throw Error();
  return e;
}
function ft(e) {
  return e == null || typeof e == "string" ? e : void 0;
}
function Or(e, t, i, s) {
  return e != null && e[ki] === Ei ? e : Array.isArray(e) ? ((s = (i = 0 | e[_]) | 32 & s | 2 & s) !== i && ht(e, s), new t(e)) : (i ? 2 & s ? ((e = t[i0]) || (gs((e = new t()).v), e = t[i0] = e), t = e) : t = new t() : t = void 0, t);
}
function Fh(e, t, i) {
  if (t) t: {
    if (!xs(t = e)) throw ur("int64");
    switch (typeof t) {
      case "string":
        t = Ea(t);
        break t;
      case "bigint":
        t = Ct(ys(64, t));
        break t;
      default:
        t = Fa(t);
    }
  }
  else t = Qs(e);
  return (e = t) == null ? i ? kh : void 0 : e;
}
const Th = {};
let zh = function() {
  try {
    return cn(new class extends Map {
      constructor() {
        super();
      }
    }()), !1;
  } catch {
    return !0;
  }
}();
class tr {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.g.get(t);
  }
  set(t, i) {
    return this.g.set(t, i), this.size = this.g.size, this;
  }
  delete(t) {
    return t = this.g.delete(t), this.size = this.g.size, t;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t) {
    return this.g.has(t);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t, i) {
    return this.g.forEach(t, i);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const Ch = zh ? (Object.setPrototypeOf(tr.prototype, Map.prototype), Object.defineProperties(tr.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), tr) : class extends Map {
  constructor() {
    super();
  }
};
function u0(e) {
  return e;
}
function er(e) {
  if (2 & e.J) throw Error("Cannot mutate an immutable Map");
}
var Ae = class extends Ch {
  constructor(e, t, i = u0, s = u0) {
    super(), this.J = 0 | e[_], this.K = t, this.S = i, this.fa = this.K ? Bh : s;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = i(r[0], !1, !0);
      let a = r[1];
      t ? a === void 0 && (a = null) : a = s(r[1], !1, !0, void 0, void 0, this.J), super.set(o, a);
    }
  }
  V(e) {
    return as(Array.from(super.entries(), e));
  }
  clear() {
    er(this), super.clear();
  }
  delete(e) {
    return er(this), super.delete(this.S(e, !0, !1));
  }
  entries() {
    if (this.K) {
      var e = super.keys();
      e = new r0(e, Lh, this);
    } else e = super.entries();
    return e;
  }
  values() {
    if (this.K) {
      var e = super.keys();
      e = new r0(e, Ae.prototype.get, this);
    } else e = super.values();
    return e;
  }
  forEach(e, t) {
    this.K ? super.forEach((i, s, n) => {
      e.call(t, n.get(s), s, n);
    }) : super.forEach(e, t);
  }
  set(e, t) {
    return er(this), (e = this.S(e, !0, !1)) == null ? this : t == null ? (super.delete(e), this) : super.set(e, this.fa(t, !0, !0, this.K, !1, this.J));
  }
  Ma(e) {
    const t = this.S(e[0], !1, !0);
    e = e[1], e = this.K ? e === void 0 ? null : e : this.fa(e, !1, !0, void 0, !1, this.J), super.set(t, e);
  }
  has(e) {
    return super.has(this.S(e, !1, !1));
  }
  get(e) {
    e = this.S(e, !1, !1);
    const t = super.get(e);
    if (t !== void 0) {
      var i = this.K;
      return i ? ((i = this.fa(t, !1, !0, i, this.ra, this.J)) !== t && super.set(e, i), i) : t;
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Bh(e, t, i, s, n, r) {
  return e = Or(e, s, i, r), n && (e = Pr(e)), e;
}
function Lh(e) {
  return [e, this.get(e)];
}
let Ih;
function l0() {
  return Ih || (Ih = new Ae(gs([]), void 0, void 0, void 0, Th));
}
function pn(e) {
  return zt ? e[zt] : void 0;
}
function tn(e, t) {
  for (const i in e) !isNaN(i) && t(e, +i, e[i]);
}
Ae.prototype.toJSON = void 0;
var fr = class {
};
const Oh = { Ka: !0 };
function Rh(e, t) {
  t < 100 || vi(fh, 1);
}
function mn(e, t, i, s) {
  const n = s !== void 0;
  s = !!s;
  var r, o = zt;
  !n && Ri && o && (r = e[o]) && tn(r, Rh), o = [];
  var a = e.length;
  let h;
  r = 4294967295;
  let c = !1;
  const u = !!(64 & t), l = u ? 128 & t ? 0 : -1 : void 0;
  1 & t || (h = a && e[a - 1], h != null && typeof h == "object" && h.constructor === Object ? r = --a : h = void 0, !u || 128 & t || n || (c = !0, r = r - l + l)), t = void 0;
  for (var d = 0; d < a; d++) {
    let f = e[d];
    if (f != null && (f = i(f, s)) != null) if (u && d >= r) {
      const p = d - l;
      (t ?? (t = {}))[p] = f;
    } else o[d] = f;
  }
  if (h) for (let f in h) {
    if ((a = h[f]) == null || (a = i(a, s)) == null) continue;
    let p;
    d = +f, u && !Number.isNaN(d) && (p = d + l) < r ? o[p] = a : (t ?? (t = {}))[f] = a;
  }
  return t && (c ? o.push(t) : o[r] = t), n && zt && (e = pn(e)) && e instanceof fr && (o[zt] = function(f) {
    const p = new fr();
    return tn(f, (m, y, x) => {
      p[y] = te(x);
    }), p.da = f.da, p;
  }(e)), o;
}
function Ph(e) {
  return e[0] = us(e[0]), e[1] = us(e[1]), e;
}
function us(e) {
  switch (typeof e) {
    case "number":
      return Number.isFinite(e) ? e : "" + e;
    case "bigint":
      return dr(e) ? Number(e) : "" + e;
    case "boolean":
      return e ? 1 : 0;
    case "object":
      if (Array.isArray(e)) {
        var t = 0 | e[_];
        return e.length === 0 && 1 & t ? void 0 : mn(e, t, us);
      }
      if (e != null && e[ki] === Ei) return za(e);
      if (e instanceof he) {
        if ((t = e.g) == null) e = "";
        else if (typeof t == "string") e = t;
        else {
          if (fa) {
            for (var i = "", s = 0, n = t.length - 10240; s < n; ) i += String.fromCharCode.apply(null, t.subarray(s, s += 10240));
            i += String.fromCharCode.apply(null, s ? t.subarray(s) : t), t = btoa(i);
          } else {
            i === void 0 && (i = 0), da(), i = la[i], s = Array(Math.floor(t.length / 3)), n = i[64] || "";
            let c = 0, u = 0;
            for (; c < t.length - 2; c += 3) {
              var r = t[c], o = t[c + 1], a = t[c + 2], h = i[r >> 2];
              r = i[(3 & r) << 4 | o >> 4], o = i[(15 & o) << 2 | a >> 6], a = i[63 & a], s[u++] = h + r + o + a;
            }
            switch (h = 0, a = n, t.length - c) {
              case 2:
                a = i[(15 & (h = t[c + 1])) << 2] || n;
              case 1:
                t = t[c], s[u] = i[t >> 2] + i[(3 & t) << 4 | h >> 4] + a + n;
            }
            t = s.join("");
          }
          e = e.g = t;
        }
        return e;
      }
      return e instanceof Ae ? e = e.size !== 0 ? e.V(Ph) : void 0 : void 0;
  }
  return e;
}
let Dh, Nh;
function za(e) {
  return mn(e = e.v, 0 | e[_], us);
}
function Ye(e, t) {
  return Ca(e, t[0], t[1]);
}
function Ca(e, t, i, s = 0) {
  if (e == null) {
    var n = 32;
    i ? (e = [i], n |= 128) : e = [], t && (n = -16760833 & n | (1023 & t) << 14);
  } else {
    if (!Array.isArray(e)) throw Error("narr");
    if (n = 0 | e[_], Ko && 1 & n) throw Error("rfarr");
    if (2048 & n && !(2 & n) && function() {
      if (Ko) throw Error("carr");
      vi(ph, 5);
    }(), 256 & n) throw Error("farr");
    if (64 & n) return (n | s) !== n && ht(e, n | s), e;
    if (i && (n |= 128, i !== e[0])) throw Error("mid");
    t: {
      n |= 64;
      var r = (i = e).length;
      if (r) {
        var o = r - 1;
        const h = i[o];
        if (h != null && typeof h == "object" && h.constructor === Object) {
          if ((o -= t = 128 & n ? 0 : -1) >= 1024) throw Error("pvtlmt");
          for (var a in h) (r = +a) < o && (i[r + t] = h[a], delete h[a]);
          n = -16760833 & n | (1023 & o) << 14;
          break t;
        }
      }
      if (t) {
        if ((a = Math.max(t, r - (128 & n ? 0 : -1))) > 1024) throw Error("spvt");
        n = -16760833 & n | (1023 & a) << 14;
      }
    }
  }
  return ht(e, 64 | n | s), e;
}
function Uh(e, t) {
  if (typeof e != "object") return e;
  if (Array.isArray(e)) {
    var i = 0 | e[_];
    return e.length === 0 && 1 & i ? void 0 : d0(e, i, t);
  }
  if (e != null && e[ki] === Ei) return f0(e);
  if (e instanceof Ae) {
    if (2 & (t = e.J)) return e;
    if (!e.size) return;
    if (i = gs(e.V()), e.K) for (e = 0; e < i.length; e++) {
      const s = i[e];
      let n = s[1];
      n = n == null || typeof n != "object" ? void 0 : n != null && n[ki] === Ei ? f0(n) : Array.isArray(n) ? d0(n, 0 | n[_], !!(32 & t)) : void 0, s[1] = n;
    }
    return i;
  }
  return e instanceof he ? e : void 0;
}
function d0(e, t, i) {
  return 2 & t || (!i || 4096 & t || 16 & t ? e = Ni(e, t, !1, i && !(16 & t)) : (ms(e, 34), 4 & t && Object.freeze(e))), e;
}
function Rr(e, t, i) {
  return e = new e.constructor(t), i && (e.h = ti), e.m = ti, e;
}
function f0(e) {
  const t = e.v, i = 0 | t[_];
  return Bt(e, i) ? e : Dr(e, t, i) ? Rr(e, t) : Ni(t, i);
}
function Ni(e, t, i, s) {
  return s ?? (s = !!(34 & t)), e = mn(e, t, Uh, s), s = 32, i && (s |= 2), ht(e, t = 16769217 & t | s), e;
}
function Pr(e) {
  const t = e.v, i = 0 | t[_];
  return Bt(e, i) ? Dr(e, t, i) ? Rr(e, t, !0) : new e.constructor(Ni(t, i, !1)) : e;
}
function Ui(e) {
  if (e.h !== ti) return !1;
  var t = e.v;
  return ms(t = Ni(t, 0 | t[_]), 2048), e.v = t, e.h = void 0, e.m = void 0, !0;
}
function Vi(e) {
  if (!Ui(e) && Bt(e, 0 | e.v[_])) throw Error();
}
function si(e, t) {
  t === void 0 && (t = 0 | e[_]), 32 & t && !(4096 & t) && ht(e, 4096 | t);
}
function Dr(e, t, i) {
  return !!(2 & i) || !(!(32 & i) || 4096 & i) && (ht(t, 2 | i), e.h = ti, !0);
}
const Ba = Ct(0), Be = {};
function H(e, t, i, s, n) {
  if ((t = Se(e.v, t, i, n)) !== null || s && e.m !== ti) return t;
}
function Se(e, t, i, s) {
  if (t === -1) return null;
  const n = t + (i ? 0 : -1), r = e.length - 1;
  let o, a;
  if (!(r < 1 + (i ? 0 : -1))) {
    if (n >= r) if (o = e[r], o != null && typeof o == "object" && o.constructor === Object) i = o[t], a = !0;
    else {
      if (n !== r) return;
      i = o;
    }
    else i = e[n];
    if (s && i != null) {
      if ((s = s(i)) == null) return s;
      if (!Object.is(s, i)) return a ? o[t] = s : e[n] = s, s;
    }
    return i;
  }
}
function P(e, t, i, s) {
  Vi(e), ot(e = e.v, 0 | e[_], t, i, s);
}
function ot(e, t, i, s, n) {
  const r = i + (n ? 0 : -1);
  var o = e.length - 1;
  if (o >= 1 + (n ? 0 : -1) && r >= o) {
    const a = e[o];
    if (a != null && typeof a == "object" && a.constructor === Object) return a[i] = s, t;
  }
  return r <= o ? (e[r] = s, t) : (s !== void 0 && (i >= (o = (t ?? (t = 0 | e[_])) >> 14 & 1023 || 536870912) ? s != null && (e[o + (n ? 0 : -1)] = { [i]: s }) : e[r] = s), t);
}
function He() {
  return mh === void 0 ? 2 : 4;
}
function Xe(e, t, i, s, n) {
  let r = e.v, o = 0 | r[_];
  s = Bt(e, o) ? 1 : s, n = !!n || s === 3, s === 2 && Ui(e) && (r = e.v, o = 0 | r[_]);
  let a = (e = Nr(r, t)) === ii ? 7 : 0 | e[_], h = Ur(a, o);
  var c = !(4 & h);
  if (c) {
    4 & h && (e = te(e), a = 0, h = Je(h, o), o = ot(r, o, t, e));
    let u = 0, l = 0;
    for (; u < e.length; u++) {
      const d = i(e[u]);
      d != null && (e[l++] = d);
    }
    l < u && (e.length = l), i = -513 & (4 | h), h = i &= -1025, h &= -4097;
  }
  return h !== a && (ht(e, h), 2 & h && Object.freeze(e)), La(e, h, r, o, t, s, c, n);
}
function La(e, t, i, s, n, r, o, a) {
  let h = t;
  return r === 1 || r === 4 && (2 & t || !(16 & t) && 32 & s) ? Ze(t) || ((t |= !e.length || o && !(4096 & t) || 32 & s && !(4096 & t || 16 & t) ? 2 : 256) !== h && ht(e, t), Object.freeze(e)) : (r === 2 && Ze(t) && (e = te(e), h = 0, t = Je(t, s), s = ot(i, s, n, e)), Ze(t) || (a || (t |= 16), t !== h && ht(e, t))), 2 & t || !(4096 & t || 16 & t) || si(i, s), e;
}
function Nr(e, t, i) {
  return e = Se(e, t, i), Array.isArray(e) ? e : ii;
}
function Ur(e, t) {
  return 2 & t && (e |= 2), 1 | e;
}
function Ze(e) {
  return !!(2 & e) && !!(4 & e) || !!(256 & e);
}
function Ia(e) {
  return zr(e, !0);
}
function Oa(e) {
  e = te(e);
  for (let t = 0; t < e.length; t++) {
    const i = e[t] = te(e[t]);
    Array.isArray(i[1]) && (i[1] = gs(i[1]));
  }
  return as(e);
}
function Ie(e, t, i, s) {
  Vi(e), ot(e = e.v, 0 | e[_], t, (s === "0" ? Number(i) === 0 : i === s) ? void 0 : i);
}
function Gi(e, t, i) {
  if (2 & t) throw Error();
  const s = Pi(t);
  let n = Nr(e, i, s), r = n === ii ? 7 : 0 | n[_], o = Ur(r, t);
  return (2 & o || Ze(o) || 16 & o) && (o === r || Ze(o) || ht(n, o), n = te(n), r = 0, o = Je(o, t), ot(e, t, i, n, s)), o &= -13, o !== r && ht(n, o), n;
}
function ir(e, t) {
  var i = k1;
  return Gr(Vr(e = e.v), e, void 0, i) === t ? t : -1;
}
function Vr(e) {
  if (Ri) return e[Ki] ?? (e[Ki] = /* @__PURE__ */ new Map());
  if (Ki in e) return e[Ki];
  const t = /* @__PURE__ */ new Map();
  return Object.defineProperty(e, Ki, { value: t }), t;
}
function Ra(e, t, i, s, n) {
  const r = Vr(e), o = Gr(r, e, t, i, n);
  return o !== s && (o && (t = ot(e, t, o, void 0, n)), r.set(i, s)), t;
}
function Gr(e, t, i, s, n) {
  let r = e.get(s);
  if (r != null) return r;
  r = 0;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    Se(t, a, n) != null && (r !== 0 && (i = ot(t, i, r, void 0, n)), r = a);
  }
  return e.set(s, r), r;
}
function Wr(e, t, i) {
  let s = 0 | e[_];
  const n = Pi(s), r = Se(e, i, n);
  let o;
  if (r != null && r[ki] === Ei) {
    if (!Bt(r)) return Ui(r), r.v;
    o = r.v;
  } else Array.isArray(r) && (o = r);
  if (o) {
    const a = 0 | o[_];
    2 & a && (o = Ni(o, a));
  }
  return o = Ye(o, t), o !== r && ot(e, s, i, o, n), o;
}
function Pa(e, t, i, s, n) {
  let r = !1;
  if ((s = Se(e, s, n, (o) => {
    const a = Or(o, i, !1, t);
    return r = a !== o && a != null, a;
  })) != null) return r && !Bt(s) && si(e, t), s;
}
function I(e, t, i, s) {
  let n = e.v, r = 0 | n[_];
  if ((t = Pa(n, r, t, i, s)) == null) return t;
  if (r = 0 | n[_], !Bt(e, r)) {
    const o = Pr(t);
    o !== t && (Ui(e) && (n = e.v, r = 0 | n[_]), r = ot(n, r, i, t = o, s), si(n, r));
  }
  return t;
}
function Da(e, t, i, s, n, r, o, a) {
  var h = Bt(e, i);
  r = h ? 1 : r, o = !!o || r === 3, h = a && !h, (r === 2 || h) && Ui(e) && (i = 0 | (t = e.v)[_]);
  var c = (e = Nr(t, n)) === ii ? 7 : 0 | e[_], u = Ur(c, i);
  if (a = !(4 & u)) {
    var l = e, d = i;
    const f = !!(2 & u);
    f && (d |= 2);
    let p = !f, m = !0, y = 0, x = 0;
    for (; y < l.length; y++) {
      const S = Or(l[y], s, !1, d);
      if (S instanceof s) {
        if (!f) {
          const E = Bt(S);
          p && (p = !E), m && (m = E);
        }
        l[x++] = S;
      }
    }
    x < y && (l.length = x), u |= 4, u = m ? -4097 & u : 4096 | u, u = p ? 8 | u : -9 & u;
  }
  if (u !== c && (ht(e, u), 2 & u && Object.freeze(e)), h && !(8 & u || !e.length && (r === 1 || r === 4 && (2 & u || !(16 & u) && 32 & i)))) {
    for (Ze(u) && (e = te(e), u = Je(u, i), i = ot(t, i, n, e)), s = e, h = u, c = 0; c < s.length; c++) (l = s[c]) !== (u = Pr(l)) && (s[c] = u);
    h |= 8, ht(e, u = h = s.length ? 4096 | h : -4097 & h);
  }
  return La(e, u, t, i, n, r, a, o);
}
function ve(e, t, i) {
  const s = e.v;
  return Da(e, s, 0 | s[_], t, i, He(), !1, !0);
}
function Na(e) {
  return e == null && (e = void 0), e;
}
function v(e, t, i, s, n) {
  return P(e, i, s = Na(s), n), s && !Bt(s) && si(e.v), e;
}
function is(e, t, i, s) {
  t: {
    var n = s = Na(s);
    Vi(e);
    const r = e.v;
    let o = 0 | r[_];
    if (n == null) {
      const a = Vr(r);
      if (Gr(a, r, o, i) !== t) break t;
      a.set(i, 0);
    } else o = Ra(r, o, i, t);
    ot(r, o, t, n);
  }
  s && !Bt(s) && si(e.v);
}
function Je(e, t) {
  return -273 & (2 & t ? 2 | e : -3 & e);
}
function jr(e, t, i, s) {
  var n = s;
  Vi(e), e = Da(e, s = e.v, 0 | s[_], i, t, 2, !0), n = n ?? new i(), e.push(n), t = i = e === ii ? 7 : 0 | e[_], (n = Bt(n)) ? (i &= -9, e.length === 1 && (i &= -4097)) : i |= 4096, i !== t && ht(e, i), n || si(s);
}
function Gt(e, t, i) {
  return Di(H(e, t, void 0, i));
}
function tt(e, t) {
  return H(e, t, void 0, void 0, oe) ?? 0;
}
function ke(e, t, i) {
  if (i != null) {
    if (typeof i != "number" || !fn(i)) throw ur("int32");
    i |= 0;
  }
  P(e, t, i);
}
function A(e, t, i) {
  P(e, t, ts(i));
}
function Lt(e, t, i) {
  Ie(e, t, bs(i), "");
}
function en(e, t, i) {
  {
    Vi(e);
    const o = e.v;
    let a = 0 | o[_];
    if (i == null) ot(o, a, t);
    else {
      var s = e = i === ii ? 7 : 0 | i[_], n = Ze(e), r = n || Object.isFrozen(i);
      for (n || (e = 0), r || (i = te(i), s = 0, e = Je(e, a), r = !1), e |= 5, e |= (4 & e ? 512 & e ? 512 : 1024 & e ? 1024 : 0 : void 0) ?? 1024, n = 0; n < i.length; n++) {
        const h = i[n], c = Ta(h);
        Object.is(h, c) || (r && (i = te(i), s = 0, e = Je(e, a), r = !1), i[n] = c);
      }
      e !== s && (r && (i = te(i), e = Je(e, a)), ht(i, e)), ot(o, a, t, i);
    }
  }
}
function gn(e, t, i) {
  Vi(e), Xe(e, t, ft, 2, !0).push(Ta(i));
}
var mi = class {
  constructor(e, t, i) {
    if (this.buffer = e, i && !t) throw Error();
    this.g = t;
  }
};
function qr(e, t) {
  if (typeof e == "string") return new mi(pa(e), t);
  if (Array.isArray(e)) return new mi(new Uint8Array(e), t);
  if (e.constructor === Uint8Array) return new mi(e, !1);
  if (e.constructor === ArrayBuffer) return e = new Uint8Array(e), new mi(e, !1);
  if (e.constructor === he) return t = Tr(e) || new Uint8Array(0), new mi(t, !0, e);
  if (e instanceof Uint8Array) return e = e.constructor === Uint8Array ? e : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new mi(e, !1);
  throw Error();
}
function Hr(e, t) {
  let i, s = 0, n = 0, r = 0;
  const o = e.h;
  let a = e.g;
  do
    i = o[a++], s |= (127 & i) << r, r += 7;
  while (r < 32 && 128 & i);
  if (r > 32) for (n |= (127 & i) >> 4, r = 3; r < 32 && 128 & i; r += 7) i = o[a++], n |= (127 & i) << r;
  if ($e(e, a), !(128 & i)) return t(s >>> 0, n >>> 0);
  throw Error();
}
function Xr(e) {
  let t = 0, i = e.g;
  const s = i + 10, n = e.h;
  for (; i < s; ) {
    const r = n[i++];
    if (t |= r, (128 & r) == 0) return $e(e, i), !!(127 & t);
  }
  throw Error();
}
function De(e) {
  const t = e.h;
  let i = e.g, s = t[i++], n = 127 & s;
  if (128 & s && (s = t[i++], n |= (127 & s) << 7, 128 & s && (s = t[i++], n |= (127 & s) << 14, 128 & s && (s = t[i++], n |= (127 & s) << 21, 128 & s && (s = t[i++], n |= s << 28, 128 & s && 128 & t[i++] && 128 & t[i++] && 128 & t[i++] && 128 & t[i++] && 128 & t[i++]))))) throw Error();
  return $e(e, i), n;
}
function ue(e) {
  return De(e) >>> 0;
}
function sn(e) {
  var t = e.h;
  const i = e.g;
  var s = t[i], n = t[i + 1];
  const r = t[i + 2];
  return t = t[i + 3], $e(e, e.g + 4), e = 2 * ((n = (s << 0 | n << 8 | r << 16 | t << 24) >>> 0) >> 31) + 1, s = n >>> 23 & 255, n &= 8388607, s == 255 ? n ? NaN : e * (1 / 0) : s == 0 ? 1401298464324817e-60 * e * n : e * Math.pow(2, s - 150) * (n + 8388608);
}
function Vh(e) {
  return De(e);
}
function $e(e, t) {
  if (e.g = t, t > e.l) throw Error();
}
function Ua(e, t) {
  if (t < 0) throw Error();
  const i = e.g;
  if ((t = i + t) > e.l) throw Error();
  return e.g = t, i;
}
function Va(e, t) {
  if (t == 0) return Qe();
  var i = Ua(e, t);
  return e.Y && e.j ? i = e.h.subarray(i, i + t) : (e = e.h, i = i === (t = i + t) ? new Uint8Array(0) : Mh ? e.slice(i, t) : new Uint8Array(e.subarray(i, t))), i.length == 0 ? Qe() : new he(i, Si);
}
var p0 = [];
function Ga(e, t, i, s) {
  if (nn.length) {
    const n = nn.pop();
    return n.o(s), n.g.init(e, t, i, s), n;
  }
  return new Gh(e, t, i, s);
}
function Wa(e) {
  e.g.clear(), e.l = -1, e.h = -1, nn.length < 100 && nn.push(e);
}
function ja(e) {
  var t = e.g;
  if (t.g == t.l) return !1;
  e.m = e.g.g;
  var i = ue(e.g);
  if (t = i >>> 3, !((i &= 7) >= 0 && i <= 5) || t < 1) throw Error();
  return e.l = t, e.h = i, !0;
}
function $s(e) {
  switch (e.h) {
    case 0:
      e.h != 0 ? $s(e) : Xr(e.g);
      break;
    case 1:
      $e(e = e.g, e.g + 8);
      break;
    case 2:
      if (e.h != 2) $s(e);
      else {
        var t = ue(e.g);
        $e(e = e.g, e.g + t);
      }
      break;
    case 5:
      $e(e = e.g, e.g + 4);
      break;
    case 3:
      for (t = e.l; ; ) {
        if (!ja(e)) throw Error();
        if (e.h == 4) {
          if (e.l != t) throw Error();
          break;
        }
        $s(e);
      }
      break;
    default:
      throw Error();
  }
}
function _s(e, t, i) {
  const s = e.g.l;
  var n = ue(e.g);
  let r = (n = e.g.g + n) - s;
  if (r <= 0 && (e.g.l = n, i(t, e, void 0, void 0, void 0), r = n - e.g.g), r) throw Error();
  return e.g.g = n, e.g.l = s, t;
}
function Yr(e) {
  var t = ue(e.g), i = Ua(e = e.g, t);
  if (e = e.h, eh) {
    var s, n = e;
    (s = Qn) || (s = Qn = new TextDecoder("utf-8", { fatal: !0 })), t = i + t, n = i === 0 && t === n.length ? n : n.subarray(i, t);
    try {
      var r = s.decode(n);
    } catch (a) {
      if (qs === void 0) {
        try {
          s.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          s.decode(new Uint8Array([97])), qs = !0;
        } catch {
          qs = !1;
        }
      }
      throw !qs && (Qn = void 0), a;
    }
  } else {
    t = (r = i) + t, i = [];
    let a, h = null;
    for (; r < t; ) {
      var o = e[r++];
      o < 128 ? i.push(o) : o < 224 ? r >= t ? je() : (a = e[r++], o < 194 || (192 & a) != 128 ? (r--, je()) : i.push((31 & o) << 6 | 63 & a)) : o < 240 ? r >= t - 1 ? je() : (a = e[r++], (192 & a) != 128 || o === 224 && a < 160 || o === 237 && a >= 160 || (192 & (s = e[r++])) != 128 ? (r--, je()) : i.push((15 & o) << 12 | (63 & a) << 6 | 63 & s)) : o <= 244 ? r >= t - 2 ? je() : (a = e[r++], (192 & a) != 128 || a - 144 + (o << 28) >> 30 || (192 & (s = e[r++])) != 128 || (192 & (n = e[r++])) != 128 ? (r--, je()) : (o = (7 & o) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & n, o -= 65536, i.push(55296 + (o >> 10 & 1023), 56320 + (1023 & o)))) : je(), i.length >= 8192 && (h = $o(h, i), i.length = 0);
    }
    r = $o(h, i);
  }
  return r;
}
function qa(e) {
  const t = ue(e.g);
  return Va(e.g, t);
}
function yn(e, t, i) {
  var s = ue(e.g);
  for (s = e.g.g + s; e.g.g < s; ) i.push(t(e.g));
}
var Gh = class {
  constructor(e, t, i, s) {
    if (p0.length) {
      const n = p0.pop();
      n.init(e, t, i, s), e = n;
    } else e = new class {
      constructor(n, r, o, a) {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.init(n, r, o, a);
      }
      init(n, r, o, { Y: a = !1, ea: h = !1 } = {}) {
        this.Y = a, this.ea = h, n && (n = qr(n, this.ea), this.h = n.buffer, this.j = n.g, this.m = r || 0, this.l = o !== void 0 ? this.m + o : this.h.length, this.g = this.m);
      }
      clear() {
        this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.Y = !1;
      }
    }(e, t, i, s);
    this.g = e, this.m = this.g.g, this.h = this.l = -1, this.o(s);
  }
  o({ ha: e = !1 } = {}) {
    this.ha = e;
  }
}, nn = [];
function m0(e) {
  return e ? /^\d+$/.test(e) ? (dn(e), new pr(q, it)) : null : Wh || (Wh = new pr(0, 0));
}
var pr = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let Wh;
function g0(e) {
  return e ? /^-?\d+$/.test(e) ? (dn(e), new mr(q, it)) : null : jh || (jh = new mr(0, 0));
}
var mr = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let jh;
function wi(e, t, i) {
  for (; i > 0 || t > 127; ) e.g.push(127 & t | 128), t = (t >>> 7 | i << 25) >>> 0, i >>>= 7;
  e.g.push(t);
}
function Wi(e, t) {
  for (; t > 127; ) e.g.push(127 & t | 128), t >>>= 7;
  e.g.push(t);
}
function xn(e, t) {
  if (t >= 0) Wi(e, t);
  else {
    for (let i = 0; i < 9; i++) e.g.push(127 & t | 128), t >>= 7;
    e.g.push(1);
  }
}
function Zr(e) {
  var t = q;
  e.g.push(t >>> 0 & 255), e.g.push(t >>> 8 & 255), e.g.push(t >>> 16 & 255), e.g.push(t >>> 24 & 255);
}
function zi(e, t) {
  t.length !== 0 && (e.l.push(t), e.h += t.length);
}
function jt(e, t, i) {
  Wi(e.g, 8 * t + i);
}
function Jr(e, t) {
  return jt(e, t, 2), t = e.g.end(), zi(e, t), t.push(e.h), t;
}
function $r(e, t) {
  var i = t.pop();
  for (i = e.h + e.g.length() - i; i > 127; ) t.push(127 & i | 128), i >>>= 7, e.h++;
  t.push(i), e.h++;
}
function bn(e, t, i) {
  jt(e, t, 2), Wi(e.g, i.length), zi(e, e.g.end()), zi(e, i);
}
function rn(e, t, i, s) {
  i != null && (t = Jr(e, t), s(i, e), $r(e, t));
}
function de() {
  const e = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(e, e.prototype), e;
}
var Kr = de(), Ha = de(), Qr = de(), to = de(), eo = de(), Xa = de(), qh = de(), _n = de(), Ya = de(), Za = de();
function fe(e, t, i) {
  var s = e.v;
  zt && zt in s && (s = s[zt]) && delete s[t.g], t.h ? t.j(e, t.h, t.g, i, t.l) : t.j(e, t.g, i, t.l);
}
var w = class {
  constructor(e, t) {
    this.v = Ca(e, t, void 0, 2048);
  }
  toJSON() {
    return za(this);
  }
  j() {
    var n;
    var e = k3, t = this.v, i = e.g, s = zt;
    if (Ri && s && ((n = t[s]) == null ? void 0 : n[i]) != null && vi(dh, 3), t = e.g, s0 && zt && s0 === void 0 && (s = (i = this.v)[zt]) && (s = s.da)) try {
      s(i, t, Oh);
    } catch (r) {
      ua(r);
    }
    return e.h ? e.m(this, e.h, e.g, e.l) : e.m(this, e.g, e.defaultValue, e.l);
  }
  clone() {
    const e = this.v, t = 0 | e[_];
    return Dr(this, e, t) ? Rr(this, e, !0) : new this.constructor(Ni(e, t, !1));
  }
};
w.prototype[ki] = Ei, w.prototype.toString = function() {
  return this.v.toString();
};
var ji = class {
  constructor(e, t, i) {
    this.g = e, this.h = t, e = Kr, this.l = !!e && i === e || !1;
  }
};
function wn(e, t) {
  return new ji(e, t, Kr);
}
function Ja(e, t, i, s, n) {
  rn(e, i, t1(t, s), n);
}
const Hh = wn(function(e, t, i, s, n) {
  return e.h === 2 && (_s(e, Wr(t, s, i), n), !0);
}, Ja), Xh = wn(function(e, t, i, s, n) {
  return e.h === 2 && (_s(e, Wr(t, s, i), n), !0);
}, Ja);
var Mn = Symbol(), An = Symbol(), gr = Symbol(), y0 = Symbol(), x0 = Symbol();
let $a, Ka;
function ni(e, t, i, s) {
  var n = s[e];
  if (n) return n;
  (n = {}).qa = s, n.T = function(l) {
    switch (typeof l) {
      case "boolean":
        return Dh || (Dh = [0, void 0, !0]);
      case "number":
        return l > 0 ? void 0 : l === 0 ? Nh || (Nh = [0, void 0]) : [-l, void 0];
      case "string":
        return [0, l];
      case "object":
        return l;
    }
  }(s[0]);
  var r = s[1];
  let o = 1;
  r && r.constructor === Object && (n.ba = r, typeof (r = s[++o]) == "function" && (n.ma = !0, $a ?? ($a = r), Ka ?? (Ka = s[o + 1]), r = s[o += 2]));
  const a = {};
  for (; r && Array.isArray(r) && r.length && typeof r[0] == "number" && r[0] > 0; ) {
    for (var h = 0; h < r.length; h++) a[r[h]] = r;
    r = s[++o];
  }
  for (h = 1; r !== void 0; ) {
    let l;
    typeof r == "number" && (h += r, r = s[++o]);
    var c = void 0;
    if (r instanceof ji ? l = r : (l = Hh, o--), l == null ? void 0 : l.l) {
      r = s[++o], c = s;
      var u = o;
      typeof r == "function" && (r = r(), c[u] = r), c = r;
    }
    for (u = h + 1, typeof (r = s[++o]) == "number" && r < 0 && (u -= r, r = s[++o]); h < u; h++) {
      const d = a[h];
      c ? i(n, h, l, c, d) : t(n, h, l, d);
    }
  }
  return s[e] = n;
}
function Qa(e) {
  return Array.isArray(e) ? e[0] instanceof ji ? e : [Xh, e] : [e, void 0];
}
function t1(e, t) {
  return e instanceof w ? e.v : Array.isArray(e) ? Ye(e, t) : void 0;
}
function io(e, t, i, s) {
  const n = i.g;
  e[t] = s ? (r, o, a) => n(r, o, a, s) : n;
}
function so(e, t, i, s, n) {
  const r = i.g;
  let o, a;
  e[t] = (h, c, u) => r(h, c, u, a || (a = ni(An, io, so, s).T), o || (o = no(s)), n);
}
function no(e) {
  let t = e[gr];
  if (t != null) return t;
  const i = ni(An, io, so, e);
  return t = i.ma ? (s, n) => $a(s, n, i) : (s, n) => {
    for (; ja(n) && n.h != 4; ) {
      var r = n.l, o = i[r];
      if (o == null) {
        var a = i.ba;
        a && (a = a[r]) && (a = Zh(a)) != null && (o = i[r] = a);
      }
      if (o == null || !o(n, s, r)) {
        if (o = (a = n).m, $s(a), a.ha) var h = void 0;
        else h = a.g.g - o, a.g.g = o, h = Va(a.g, h);
        o = void 0, a = s, h && ((o = a[zt] ?? (a[zt] = new fr()))[r] ?? (o[r] = [])).push(h);
      }
    }
    return (s = pn(s)) && (s.da = i.qa[x0]), !0;
  }, e[gr] = t, e[x0] = Yh.bind(e), t;
}
function Yh(e, t, i, s) {
  var n = this[An];
  const r = this[gr], o = Ye(void 0, n.T), a = pn(e);
  if (a) {
    var h = !1, c = n.ba;
    if (c) {
      if (n = (u, l, d) => {
        if (d.length !== 0) if (c[l]) for (const f of d) {
          u = Ga(f);
          try {
            h = !0, r(o, u);
          } finally {
            Wa(u);
          }
        }
        else s == null || s(e, l, d);
      }, t == null) tn(a, n);
      else if (a != null) {
        const u = a[t];
        u && n(a, t, u);
      }
      if (h) {
        let u = 0 | e[_];
        if (2 & u && 2048 & u && !(i != null && i.Ka)) throw Error();
        const l = Pi(u), d = (f, p) => {
          if (Se(e, f, l) != null) {
            if ((i == null ? void 0 : i.Qa) === 1) return;
            throw Error();
          }
          p != null && (u = ot(e, u, f, p, l)), delete a[f];
        };
        t == null ? ba(o, 0 | o[_], (f, p) => {
          d(f, p);
        }) : d(t, Se(o, t, l));
      }
    }
  }
}
function Zh(e) {
  const t = (e = Qa(e))[0].g;
  if (e = e[1]) {
    const i = no(e), s = ni(An, io, so, e).T;
    return (n, r, o) => t(n, r, o, s, i);
  }
  return t;
}
function Sn(e, t, i) {
  e[t] = i.h;
}
function vn(e, t, i, s) {
  let n, r;
  const o = i.h;
  e[t] = (a, h, c) => o(a, h, c, r || (r = ni(Mn, Sn, vn, s).T), n || (n = e1(s)));
}
function e1(e) {
  let t = e[y0];
  if (!t) {
    const i = ni(Mn, Sn, vn, e);
    t = (s, n) => i1(s, n, i), e[y0] = t;
  }
  return t;
}
function i1(e, t, i) {
  ba(e, 0 | e[_], (s, n) => {
    if (n != null) {
      var r = function(o, a) {
        var h = o[a];
        if (h) return h;
        if ((h = o.ba) && (h = h[a])) {
          var c = (h = Qa(h))[0].h;
          if (h = h[1]) {
            const u = e1(h), l = ni(Mn, Sn, vn, h).T;
            h = o.ma ? Ka(l, u) : (d, f, p) => c(d, f, p, l, u);
          } else h = c;
          return o[a] = h;
        }
      }(i, s);
      r ? r(t, n, s) : s < 500 || vi(lr, 3);
    }
  }), (e = pn(e)) && tn(e, (s, n, r) => {
    for (zi(t, t.g.end()), s = 0; s < r.length; s++) zi(t, Tr(r[s]) || new Uint8Array(0));
  });
}
const Jh = Ct(0);
function qi(e, t) {
  if (Array.isArray(t)) {
    var i = 0 | t[_];
    if (4 & i) return t;
    for (var s = 0, n = 0; s < t.length; s++) {
      const r = e(t[s]);
      r != null && (t[n++] = r);
    }
    return n < s && (t.length = n), (e = -1537 & (5 | i)) !== i && ht(t, e), 2 & e && Object.freeze(t), t;
  }
}
function xt(e, t, i) {
  return new ji(e, t, i);
}
function Hi(e, t, i) {
  return new ji(e, t, i);
}
function bt(e, t, i) {
  ot(e, 0 | e[_], t, i, Pi(0 | e[_]));
}
var $h = wn(function(e, t, i, s, n) {
  if (e.h !== 2) return !1;
  if (e = te(e = _s(e, Ye([void 0, void 0], s), n)), n = Pi(s = 0 | t[_]), 2 & s) throw Error();
  let r = Se(t, i, n);
  if (r instanceof Ae) 2 & r.J ? (r = r.V(), r.push(e), ot(t, s, i, r, n)) : r.Ma(e);
  else if (Array.isArray(r)) {
    var o = 0 | r[_];
    8192 & o || ht(r, o |= 8192), 2 & o && (r = Oa(r), ot(t, s, i, r, n)), r.push(e);
  } else ot(t, s, i, as([e]), n);
  return !0;
}, function(e, t, i, s, n) {
  if (t instanceof Ae) t.forEach((r, o) => {
    rn(e, i, Ye([o, r], s), n);
  });
  else if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Array.isArray(o) && rn(e, i, Ye(o, s), n);
    }
    as(t);
  }
});
function s1(e, t, i) {
  (t = oe(t)) != null && (jt(e, i, 5), e = e.g, Cr(t), Zr(e));
}
function n1(e, t, i) {
  if (t = function(s) {
    if (s == null) return s;
    const n = typeof s;
    if (n === "bigint") return String(ys(64, s));
    if (xs(s)) {
      if (n === "string") return ka(s);
      if (n === "number") return Ir(s);
    }
  }(t), t != null && (typeof t == "string" && g0(t), t != null))
    switch (jt(e, i, 0), typeof t) {
      case "number":
        e = e.g, Fi(t), wi(e, q, it);
        break;
      case "bigint":
        i = BigInt.asUintN(64, t), i = new mr(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), wi(e.g, i.h, i.g);
        break;
      default:
        i = g0(t), wi(e.g, i.h, i.g);
    }
}
function r1(e, t, i) {
  (t = Di(t)) != null && t != null && (jt(e, i, 0), xn(e.g, t));
}
function o1(e, t, i) {
  (t = Aa(t)) != null && (jt(e, i, 0), e.g.g.push(t ? 1 : 0));
}
function a1(e, t, i) {
  (t = ft(t)) != null && bn(e, i, ca(t));
}
function h1(e, t, i, s, n) {
  rn(e, i, t1(t, s), n);
}
function c1(e, t, i) {
  (t = t == null || typeof t == "string" || t instanceof he ? t : void 0) != null && bn(e, i, qr(t, !0).buffer);
}
function u1(e, t, i) {
  (t = Sa(t)) != null && t != null && (jt(e, i, 0), Wi(e.g, t));
}
function l1(e, t, i) {
  return (e.h === 5 || e.h === 2) && (t = Gi(t, 0 | t[_], i), e.h == 2 ? yn(e, sn, t) : t.push(sn(e.g)), !0);
}
var st = xt(function(e, t, i) {
  return e.h === 5 && (bt(t, i, sn(e.g)), !0);
}, s1, _n), Kh = Hi(l1, function(e, t, i) {
  if ((t = qi(oe, t)) != null) for (let o = 0; o < t.length; o++) {
    var s = e, n = i, r = t[o];
    r != null && (jt(s, n, 5), s = s.g, Cr(r), Zr(s));
  }
}, _n), ro = Hi(l1, function(e, t, i) {
  if ((t = qi(oe, t)) != null && t.length) {
    jt(e, i, 2), Wi(e.g, 4 * t.length);
    for (let s = 0; s < t.length; s++) i = e.g, Cr(t[s]), Zr(i);
  }
}, _n), Qh = xt(function(e, t, i) {
  return e.h === 5 && (bt(t, i, (e = sn(e.g)) === 0 ? void 0 : e), !0);
}, s1, _n), Ne = xt(function(e, t, i) {
  return e.h !== 0 ? e = !1 : (bt(t, i, Hr(e.g, Ma)), e = !0), e;
}, n1, Xa), sr = xt(function(e, t, i) {
  return e.h !== 0 ? t = !1 : (bt(t, i, (e = Hr(e.g, Ma)) === Jh ? void 0 : e), t = !0), t;
}, n1, Xa), t3 = xt(function(e, t, i) {
  return e.h !== 0 ? e = !1 : (bt(t, i, Hr(e.g, Sh)), e = !0), e;
}, function(e, t, i) {
  if (t = function(s) {
    if (s == null) return s;
    var n = typeof s;
    if (n === "bigint") return String(vh(64, s));
    if (xs(s)) {
      if (n === "string") return n = Ti(Number(s)), ei(n) && n >= 0 ? s = String(n) : ((n = s.indexOf(".")) !== -1 && (s = s.substring(0, n)), (n = s[0] !== "-" && ((n = s.length) < 20 || n === 20 && s <= "18446744073709551615")) || (dn(s), s = hs(q, it))), s;
      if (n === "number") return (s = Ti(s)) >= 0 && ei(s) || (Fi(s), s = wa(q, it)), s;
    }
  }(t), t != null && (typeof t == "string" && m0(t), t != null))
    switch (jt(e, i, 0), typeof t) {
      case "number":
        e = e.g, Fi(t), wi(e, q, it);
        break;
      case "bigint":
        i = BigInt.asUintN(64, t), i = new pr(Number(i & BigInt(4294967295)), Number(i >> BigInt(32))), wi(e.g, i.h, i.g);
        break;
      default:
        i = m0(t), wi(e.g, i.h, i.g);
    }
}, qh), rt = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, De(e.g)), !0);
}, r1, to), ws = Hi(function(e, t, i) {
  return (e.h === 0 || e.h === 2) && (t = Gi(t, 0 | t[_], i), e.h == 2 ? yn(e, De, t) : t.push(De(e.g)), !0);
}, function(e, t, i) {
  if ((t = qi(Di, t)) != null && t.length) {
    i = Jr(e, i);
    for (let s = 0; s < t.length; s++) xn(e.g, t[s]);
    $r(e, i);
  }
}, to), bi = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, (e = De(e.g)) === 0 ? void 0 : e), !0);
}, r1, to), X = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, Xr(e.g)), !0);
}, o1, Ha), Ke = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, (e = Xr(e.g)) === !1 ? void 0 : e), !0);
}, o1, Ha), gt = Hi(function(e, t, i) {
  return e.h === 2 && (e = Yr(e), Gi(t, 0 | t[_], i).push(e), !0);
}, function(e, t, i) {
  if ((t = qi(ft, t)) != null) for (let o = 0; o < t.length; o++) {
    var s = e, n = i, r = t[o];
    r != null && bn(s, n, ca(r));
  }
}, Qr), Oe = xt(function(e, t, i) {
  return e.h === 2 && (bt(t, i, (e = Yr(e)) === "" ? void 0 : e), !0);
}, a1, Qr), D = xt(function(e, t, i) {
  return e.h === 2 && (bt(t, i, Yr(e)), !0);
}, a1, Qr), lt = function(e, t, i = Kr) {
  return new ji(e, t, i);
}(function(e, t, i, s, n) {
  return e.h === 2 && (s = Ye(void 0, s), Gi(t, 0 | t[_], i).push(s), _s(e, s, n), !0);
}, function(e, t, i, s, n) {
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) h1(e, t[r], i, s, n);
    1 & (e = 0 | t[_]) || ht(t, 1 | e);
  }
}), U = wn(function(e, t, i, s, n, r) {
  if (e.h !== 2) return !1;
  let o = 0 | t[_];
  return Ra(t, o, r, i, Pi(o)), _s(e, t = Wr(t, s, i), n), !0;
}, h1), d1 = xt(function(e, t, i) {
  return e.h === 2 && (bt(t, i, qa(e)), !0);
}, c1, Ya), e3 = Hi(function(e, t, i) {
  return (e.h === 0 || e.h === 2) && (t = Gi(t, 0 | t[_], i), e.h == 2 ? yn(e, ue, t) : t.push(ue(e.g)), !0);
}, function(e, t, i) {
  if ((t = qi(Sa, t)) != null) for (let o = 0; o < t.length; o++) {
    var s = e, n = i, r = t[o];
    r != null && (jt(s, n, 0), Wi(s.g, r));
  }
}, eo), i3 = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, (e = ue(e.g)) === 0 ? void 0 : e), !0);
}, u1, eo), yt = xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, De(e.g)), !0);
}, function(e, t, i) {
  (t = Di(t)) != null && (t = parseInt(t, 10), jt(e, i, 0), xn(e.g, t));
}, Za);
class s3 {
  constructor(t, i) {
    var s = Ot;
    this.g = t, this.h = i, this.m = I, this.j = v, this.defaultValue = void 0, this.l = s.Oa != null ? _a : void 0;
  }
  register() {
    cn(this);
  }
}
function pe(e, t) {
  return new s3(e, t);
}
function Ue(e, t) {
  return (i, s) => {
    {
      const r = { ea: !0 };
      s && Object.assign(r, s), i = Ga(i, void 0, void 0, r);
      try {
        const o = new e(), a = o.v;
        no(t)(a, i);
        var n = o;
      } finally {
        Wa(i);
      }
    }
    return n;
  };
}
function kn(e) {
  return function() {
    const t = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const o = this.g;
            return this.g = [], o;
          }
        }();
      }
    }();
    i1(this.v, t, ni(Mn, Sn, vn, e)), zi(t, t.g.end());
    const i = new Uint8Array(t.h), s = t.l, n = s.length;
    let r = 0;
    for (let o = 0; o < n; o++) {
      const a = s[o];
      i.set(a, r), r += a.length;
    }
    return t.l = [i], i;
  };
}
var b0 = class extends w {
  constructor(e) {
    super(e);
  }
}, _0 = [0, Oe, xt(function(e, t, i) {
  return e.h === 2 && (bt(t, i, (e = qa(e)) === Qe() ? void 0 : e), !0);
}, function(e, t, i) {
  if (t != null) {
    if (t instanceof w) {
      const s = t.Ra;
      return void (s ? (t = s(t), t != null && bn(e, i, qr(t, !0).buffer)) : vi(lr, 3));
    }
    if (Array.isArray(t)) return void vi(lr, 3);
  }
  c1(e, t, i);
}, Ya)];
let nr, w0 = globalThis.trustedTypes;
function M0(e) {
  var t;
  return nr === void 0 && (nr = function() {
    let i = null;
    if (!w0) return i;
    try {
      const s = (n) => n;
      i = w0.createPolicy("goog#html", { createHTML: s, createScript: s, createScriptURL: s });
    } catch {
    }
    return i;
  }()), e = (t = nr) ? t.createScriptURL(e) : e, new class {
    constructor(i) {
      this.g = i;
    }
    toString() {
      return this.g + "";
    }
  }(e);
}
function Hs(e, ...t) {
  if (t.length === 0) return M0(e[0]);
  let i = e[0];
  for (let s = 0; s < t.length; s++) i += encodeURIComponent(t[s]) + e[s + 1];
  return M0(i);
}
var f1 = [0, rt, yt, X, -1, ws, yt, -1, X], n3 = class extends w {
  constructor(e) {
    super(e);
  }
}, p1 = [0, X, D, X, yt, -1, Hi(function(e, t, i) {
  return (e.h === 0 || e.h === 2) && (t = Gi(t, 0 | t[_], i), e.h == 2 ? yn(e, Vh, t) : t.push(De(e.g)), !0);
}, function(e, t, i) {
  if ((t = qi(Di, t)) != null && t.length) {
    i = Jr(e, i);
    for (let s = 0; s < t.length; s++) xn(e.g, t[s]);
    $r(e, i);
  }
}, Za), D, -1, [0, X, -1], yt, X, -1], m1 = [0, 3, X, -1, 2, [0, [2], rt, U, [0, xt(function(e, t, i) {
  return e.h === 0 && (bt(t, i, ue(e.g)), !0);
}, u1, eo)]], [0, yt, X, yt, X, yt, X, D, -1], [0, [3, 4], D, -1, U, [0, rt], U, [0, yt]], [0]], g1 = [0, D, -2], A0 = class extends w {
  constructor(e) {
    super(e);
  }
}, y1 = [0], x1 = [0, rt, X, 1, X, -4], Ot = class extends w {
  constructor(e) {
    super(e, 2);
  }
}, at = {};
at[336783863] = [0, D, X, -1, rt, [0, [1, 2, 3, 4, 5, 6, 7, 8, 9], U, y1, U, p1, U, g1, U, x1, U, f1, U, [0, D, -2], U, [0, D, yt], U, m1, U, [0, yt, -1, X]], [0, D], X, [0, [1, 3], [2, 4], U, [0, ws], -1, U, [0, gt], -1, lt, [0, D, -1]], D];
var S0 = [0, sr, -1, Ke, -3, sr, ws, Oe, bi, sr, -1, Ke, bi, Ke, -2, Oe];
function V(e, t) {
  gn(e, 3, t);
}
function C(e, t) {
  gn(e, 4, t);
}
var At = class extends w {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return v(this, 0, 7, e);
  }
}, ss = [-1, {}], v0 = [0, D, 1, ss], k0 = [0, D, gt, ss];
function qt(e, t) {
  jr(e, 1, At, t);
}
function Y(e, t) {
  gn(e, 10, t);
}
function R(e, t) {
  gn(e, 15, t);
}
var Rt = class extends w {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return v(this, 0, 1001, e);
  }
}, b1 = [-500, lt, [-500, Oe, -1, gt, -3, [-2, at, X], lt, _0, bi, -1, v0, k0, lt, [0, Oe, Ke], Oe, S0, bi, gt, 987, gt], 4, lt, [-500, D, -1, [-1, {}], 998, D], lt, [-500, D, gt, -1, [-2, {}, X], 997, gt, -1], bi, lt, [-500, D, gt, ss, 998, gt], gt, bi, v0, k0, lt, [0, Oe, -1, ss], gt, -2, S0, Oe, -1, Ke, [0, Ke, i3], 978, ss, lt, _0];
Rt.prototype.g = kn(b1);
var r3 = Ue(Rt, b1), o3 = class extends w {
  constructor(e) {
    super(e);
  }
}, _1 = class extends w {
  constructor(e) {
    super(e);
  }
  g() {
    return ve(this, o3, 1);
  }
}, w1 = [0, lt, [0, rt, st, D, -1]], En = Ue(_1, w1), a3 = class extends w {
  constructor(e) {
    super(e);
  }
}, h3 = class extends w {
  constructor(e) {
    super(e);
  }
}, rr = class extends w {
  constructor(e) {
    super(e);
  }
  l() {
    return I(this, a3, 2);
  }
  g() {
    return ve(this, h3, 5);
  }
}, M1 = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, gt, ws, ro, [0, yt, [0, rt, -3], [0, st, -3], [0, rt, -1, [0, lt, [0, rt, -2]]], lt, [0, st, -1, D, st]], D, -1, Ne, lt, [0, rt, st], gt, Ne]), A1 = class extends w {
  constructor(e) {
    super(e);
  }
}, Mi = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, lt, [0, st, -4]]), S1 = class extends w {
  constructor(e) {
    super(e);
  }
}, Ms = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, lt, [0, st, -4]]), c3 = class extends w {
  constructor(e) {
    super(e);
  }
}, u3 = [0, rt, -1, ro, yt], v1 = class extends w {
  constructor(e) {
    super(e);
  }
};
v1.prototype.g = kn([0, st, -4, Ne]);
var l3 = class extends w {
  constructor(e) {
    super(e);
  }
}, d3 = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, lt, [0, 1, rt, D, w1], Ne]), E0 = class extends w {
  constructor(e) {
    super(e);
  }
}, f3 = class extends w {
  constructor(e) {
    super(e);
  }
  na() {
    const e = H(this, 1, void 0, void 0, Ia);
    return e ?? Qe();
  }
}, p3 = class extends w {
  constructor(e) {
    super(e);
  }
}, k1 = [1, 2], m3 = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, lt, [0, k1, U, [0, ro], U, [0, d1], rt, D], Ne]), oo = class extends w {
  constructor(e) {
    super(e);
  }
}, E1 = [0, D, rt, st, gt, -1], F0 = class extends w {
  constructor(e) {
    super(e);
  }
}, g3 = [0, X, -1], T0 = class extends w {
  constructor(e) {
    super(e);
  }
}, Ks = [1, 2, 3, 4, 5, 6], on = class extends w {
  constructor(e) {
    super(e);
  }
  g() {
    return H(this, 1, void 0, void 0, Ia) != null;
  }
  l() {
    return ft(H(this, 2)) != null;
  }
}, K = class extends w {
  constructor(e) {
    super(e);
  }
  g() {
    return Aa(H(this, 2)) ?? !1;
  }
}, F1 = [0, d1, D, [0, rt, Ne, -1], [0, t3, Ne]], nt = [0, F1, X, [0, Ks, U, x1, U, p1, U, f1, U, y1, U, g1, U, m1], yt], Fn = class extends w {
  constructor(e) {
    super(e);
  }
}, ao = [0, nt, st, -1, rt], y3 = pe(502141897, Fn);
at[502141897] = ao;
var x3 = Ue(class extends w {
  constructor(e) {
    super(e);
  }
}, [0, [0, yt, -1, Kh, e3], u3]), T1 = class extends w {
  constructor(e) {
    super(e);
  }
}, z1 = class extends w {
  constructor(e) {
    super(e);
  }
}, yr = [0, nt, st, [0, nt], X], b3 = pe(508968150, z1);
at[508968150] = [0, nt, ao, yr, st, [0, [0, F1]]], at[508968149] = yr;
var gi = class extends w {
  constructor(e) {
    super(e);
  }
  l() {
    return I(this, oo, 2);
  }
  g() {
    P(this, 2);
  }
}, C1 = [0, nt, E1];
at[478825465] = C1;
var _3 = class extends w {
  constructor(e) {
    super(e);
  }
}, B1 = class extends w {
  constructor(e) {
    super(e);
  }
}, ho = class extends w {
  constructor(e) {
    super(e);
  }
}, co = class extends w {
  constructor(e) {
    super(e);
  }
}, L1 = class extends w {
  constructor(e) {
    super(e);
  }
}, z0 = [0, nt, [0, nt], C1, -1], I1 = [0, nt, st, rt], uo = [0, nt, st], O1 = [0, nt, I1, uo, st], w3 = pe(479097054, L1);
at[479097054] = [0, nt, O1, z0], at[463370452] = z0, at[464864288] = I1;
var M3 = pe(462713202, co);
at[462713202] = O1, at[474472470] = uo;
var A3 = class extends w {
  constructor(e) {
    super(e);
  }
}, R1 = class extends w {
  constructor(e) {
    super(e);
  }
}, P1 = class extends w {
  constructor(e) {
    super(e);
  }
}, D1 = class extends w {
  constructor(e) {
    super(e);
  }
}, lo = [0, nt, st, -1, rt], xr = [0, nt, st, X];
D1.prototype.g = kn([0, nt, uo, [0, nt], ao, yr, lo, xr]);
var N1 = class extends w {
  constructor(e) {
    super(e);
  }
}, S3 = pe(456383383, N1);
at[456383383] = [0, nt, E1];
var U1 = class extends w {
  constructor(e) {
    super(e);
  }
}, v3 = pe(476348187, U1);
at[476348187] = [0, nt, g3];
var V1 = class extends w {
  constructor(e) {
    super(e);
  }
}, C0 = class extends w {
  constructor(e) {
    super(e);
  }
}, G1 = [0, yt, -1], k3 = pe(458105876, class extends w {
  constructor(e) {
    super(e);
  }
  g() {
    let e;
    var t = this.v;
    const i = 0 | t[_];
    return e = Bt(this, i), t = function(s, n, r, o) {
      var a = C0;
      !o && Ui(s) && (r = 0 | (n = s.v)[_]);
      var h = Se(n, 2);
      if (s = !1, h == null) {
        if (o) return l0();
        h = [];
      } else if (h.constructor === Ae) {
        if (!(2 & h.J) || o) return h;
        h = h.V();
      } else Array.isArray(h) ? s = !!(2 & (0 | h[_])) : h = [];
      if (o) {
        if (!h.length) return l0();
        s || (s = !0, gs(h));
      } else s && (s = !1, as(h), h = Oa(h));
      return !s && 32 & r && ms(h, 32), r = ot(n, r, 2, o = new Ae(h, a, Fh, void 0)), s || si(n, r), o;
    }(this, t, i, e), !e && C0 && (t.ra = !0), t;
  }
});
at[458105876] = [0, G1, $h, [!0, Ne, [0, D, -1, gt]], [0, ws, X, yt]];
var fo = class extends w {
  constructor(e) {
    super(e);
  }
}, W1 = pe(458105758, fo);
at[458105758] = [0, nt, D, G1];
var or = class extends w {
  constructor(e) {
    super(e);
  }
}, B0 = [0, Qh, -1, Ke], E3 = class extends w {
  constructor(e) {
    super(e);
  }
}, j1 = class extends w {
  constructor(e) {
    super(e);
  }
}, br = [1, 2];
j1.prototype.g = kn([0, br, U, B0, U, [0, lt, B0]]);
var q1 = class extends w {
  constructor(e) {
    super(e);
  }
}, F3 = pe(443442058, q1);
at[443442058] = [0, nt, D, rt, st, gt, -1, X, st], at[514774813] = lo;
var H1 = class extends w {
  constructor(e) {
    super(e);
  }
}, T3 = pe(516587230, H1);
function _r(e, t) {
  return t = t ? t.clone() : new oo(), e.displayNamesLocale !== void 0 ? P(t, 1, bs(e.displayNamesLocale)) : e.displayNamesLocale === void 0 && P(t, 1), e.maxResults !== void 0 ? ke(t, 2, e.maxResults) : "maxResults" in e && P(t, 2), e.scoreThreshold !== void 0 ? A(t, 3, e.scoreThreshold) : "scoreThreshold" in e && P(t, 3), e.categoryAllowlist !== void 0 ? en(t, 4, e.categoryAllowlist) : "categoryAllowlist" in e && P(t, 4), e.categoryDenylist !== void 0 ? en(t, 5, e.categoryDenylist) : "categoryDenylist" in e && P(t, 5), t;
}
function X1(e) {
  const t = Number(e);
  return Number.isSafeInteger(t) ? t : String(e);
}
function po(e, t = -1, i = "") {
  return { categories: e.map((s) => ({ index: Gt(s, 1) ?? 0 ?? -1, score: tt(s, 2) ?? 0, categoryName: ft(H(s, 3)) ?? "" ?? "", displayName: ft(H(s, 4)) ?? "" ?? "" })), headIndex: t, headName: i };
}
function z3(e) {
  const t = { classifications: ve(e, l3, 1).map((i) => {
    var s;
    return po(((s = I(i, _1, 4)) == null ? void 0 : s.g()) ?? [], Gt(i, 2) ?? 0, ft(H(i, 3)) ?? "");
  }) };
  return function(i) {
    return i == null ? i : typeof i == "bigint" ? (dr(i) ? i = Number(i) : (i = ys(64, i), i = dr(i) ? Number(i) : String(i)), i) : xs(i) ? typeof i == "number" ? Ir(i) : ka(i) : void 0;
  }(H(e, 2, void 0, void 0, Qs)) != null && (t.timestampMs = X1(H(e, 2, void 0, void 0, Qs) ?? Ba)), t;
}
function Y1(e) {
  var o, a;
  var t = Xe(e, 3, oe, He()), i = Xe(e, 2, Di, He()), s = Xe(e, 1, ft, He()), n = Xe(e, 9, ft, He());
  const r = { categories: [], keypoints: [] };
  for (let h = 0; h < t.length; h++) r.categories.push({ score: t[h], index: i[h] ?? -1, categoryName: s[h] ?? "", displayName: n[h] ?? "" });
  if ((t = (o = I(e, rr, 4)) == null ? void 0 : o.l()) && (r.boundingBox = { originX: Gt(t, 1, Be) ?? 0, originY: Gt(t, 2, Be) ?? 0, width: Gt(t, 3, Be) ?? 0, height: Gt(t, 4, Be) ?? 0, angle: 0 }), (a = I(e, rr, 4)) == null ? void 0 : a.g().length) for (const h of I(e, rr, 4).g()) r.keypoints.push({ x: H(h, 1, void 0, Be, oe) ?? 0, y: H(h, 2, void 0, Be, oe) ?? 0, score: H(h, 4, void 0, Be, oe) ?? 0, label: ft(H(h, 3, void 0, Be)) ?? "" });
  return r;
}
function Tn(e) {
  const t = [];
  for (const i of ve(e, S1, 1)) t.push({ x: tt(i, 1) ?? 0, y: tt(i, 2) ?? 0, z: tt(i, 3) ?? 0, visibility: tt(i, 4) ?? 0 });
  return t;
}
function ns(e) {
  const t = [];
  for (const i of ve(e, A1, 1)) t.push({ x: tt(i, 1) ?? 0, y: tt(i, 2) ?? 0, z: tt(i, 3) ?? 0, visibility: tt(i, 4) ?? 0 });
  return t;
}
function L0(e) {
  return Array.from(e, (t) => t > 127 ? t - 256 : t);
}
function I0(e, t) {
  if (e.length !== t.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);
  let i = 0, s = 0, n = 0;
  for (let r = 0; r < e.length; r++) i += e[r] * t[r], s += e[r] * e[r], n += t[r] * t[r];
  if (s <= 0 || n <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return i / Math.sqrt(s * n);
}
let Xs;
at[516587230] = [0, nt, lo, xr, st], at[518928384] = xr;
const C3 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function Z1(e) {
  if (e) return !0;
  if (Xs === void 0) try {
    await WebAssembly.instantiate(C3), Xs = !0;
  } catch {
    Xs = !1;
  }
  return Xs;
}
async function Ys(e, t, i) {
  return { wasmLoaderPath: `${t}/${e}_${i = `wasm${i ? "_module" : ""}${await Z1(i) ? "" : "_nosimd"}_internal`}.js`, wasmBinaryPath: `${t}/${e}_${i}.wasm` };
}
var xi = class {
};
function J1() {
  var e = navigator;
  return typeof OffscreenCanvas < "u" && (!function(t = navigator) {
    return (t = t.userAgent).includes("Safari") && !t.includes("Chrome");
  }(e) || !!((e = e.userAgent.match(/Version\/([\d]+).*Safari/)) && e.length >= 1 && Number(e[1]) >= 17));
}
async function O0(e) {
  if (typeof importScripts != "function") {
    const t = document.createElement("script");
    return t.src = e.toString(), t.crossOrigin = "anonymous", new Promise((i, s) => {
      t.addEventListener("load", () => {
        i();
      }, !1), t.addEventListener("error", (n) => {
        s(n);
      }, !1), document.body.appendChild(t);
    });
  }
  try {
    importScripts(e.toString());
  } catch (t) {
    if (!(t instanceof TypeError)) throw t;
    {
      const i = self.import;
      i ? await i(e.toString()) : await import(e.toString());
    }
  }
}
function $1(e) {
  return e.videoWidth !== void 0 ? [e.videoWidth, e.videoHeight] : e.naturalWidth !== void 0 ? [e.naturalWidth, e.naturalHeight] : e.displayWidth !== void 0 ? [e.displayWidth, e.displayHeight] : [e.width, e.height];
}
function M(e, t, i) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), i(t = e.i.stringToNewUTF8(t)), e.i._free(t);
}
function R0(e, t, i) {
  if (!e.i.canvas) throw Error("No OpenGL canvas configured.");
  if (i ? e.i._bindTextureToStream(i) : e.i._bindTextureToCanvas(), !(i = e.i.canvas.getContext("webgl2") || e.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  e.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t), e.i.gpuOriginForWebTexturesIsBottomLeft && i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1);
  const [s, n] = $1(t);
  return !e.l || s === e.i.canvas.width && n === e.i.canvas.height || (e.i.canvas.width = s, e.i.canvas.height = n), [s, n];
}
function P0(e, t, i) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const s = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) s[n] = e.i.stringToNewUTF8(t[n]);
  t = e.i._malloc(4 * s.length), e.i.HEAPU32.set(s, t >> 2), i(t);
  for (const n of s) e.i._free(n);
  e.i._free(t);
}
function ne(e, t, i) {
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = i;
}
function Le(e, t, i) {
  let s = [];
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = (n, r, o) => {
    r ? (i(s, o), s = []) : s.push(n);
  };
}
xi.forVisionTasks = function(e, t = !1) {
  return Ys("vision", e ?? Hs``, t);
}, xi.forTextTasks = function(e, t = !1) {
  return Ys("text", e ?? Hs``, t);
}, xi.forGenAiTasks = function(e, t = !1) {
  return Ys("genai", e ?? Hs``, t);
}, xi.forAudioTasks = function(e, t = !1) {
  return Ys("audio", e ?? Hs``, t);
}, xi.isSimdSupported = function(e = !1) {
  return Z1(e);
};
async function B3(e, t, i, s) {
  return e = await (async (n, r, o, a, h) => {
    if (r && await O0(r), !self.ModuleFactory || o && (await O0(o), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && h && ((r = self.Module).locateFile = h.locateFile, h.mainScriptUrlOrBlob && (r.mainScriptUrlOrBlob = h.mainScriptUrlOrBlob)), h = await self.ModuleFactory(self.Module || h), self.ModuleFactory = self.Module = void 0, new n(h, a);
  })(e, i.wasmLoaderPath, i.assetLoaderPath, t, { locateFile: (n) => n.endsWith(".wasm") ? i.wasmBinaryPath.toString() : i.assetBinaryPath && n.endsWith(".data") ? i.assetBinaryPath.toString() : n }), await e.o(s), e;
}
function ar(e, t) {
  const i = I(e.baseOptions, on, 1) || new on();
  typeof t == "string" ? (P(i, 2, bs(t)), P(i, 1)) : t instanceof Uint8Array && (P(i, 1, zr(t, !1)), P(i, 2)), v(e.baseOptions, 0, 1, i);
}
function D0(e) {
  try {
    const t = e.H.length;
    if (t === 1) throw Error(e.H[0].message);
    if (t > 1) throw Error("Encountered multiple errors: " + e.H.map((i) => i.message).join(", "));
  } finally {
    e.H = [];
  }
}
function b(e, t) {
  e.C = Math.max(e.C, t);
}
function zn(e, t) {
  e.B = new At(), Lt(e.B, 2, "PassThroughCalculator"), V(e.B, "free_memory"), C(e.B, "free_memory_unused_out"), Y(t, "free_memory"), qt(t, e.B);
}
function Ci(e, t) {
  V(e.B, t), C(e.B, t + "_unused_out");
}
function Cn(e) {
  e.g.addBoolToStream(!0, "free_memory", e.C);
}
var wr = class {
  constructor(e) {
    this.g = e, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(e, t = !0) {
    var i, s, n, r, o, a;
    if (t) {
      const h = e.baseOptions || {};
      if ((i = e.baseOptions) != null && i.modelAssetBuffer && ((s = e.baseOptions) != null && s.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!((n = I(this.baseOptions, on, 1)) != null && n.g() || (r = I(this.baseOptions, on, 1)) != null && r.l() || (o = e.baseOptions) != null && o.modelAssetBuffer || (a = e.baseOptions) != null && a.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(c, u) {
        let l = I(c.baseOptions, T0, 3);
        if (!l) {
          var d = l = new T0(), f = new A0();
          is(d, 4, Ks, f);
        }
        "delegate" in u && (u.delegate === "GPU" ? (u = l, d = new n3(), is(u, 2, Ks, d)) : (u = l, d = new A0(), is(u, 4, Ks, d))), v(c.baseOptions, 0, 3, l);
      }(this, h), h.modelAssetPath) return fetch(h.modelAssetPath.toString()).then((c) => {
        if (c.ok) return c.arrayBuffer();
        throw Error(`Failed to fetch model: ${h.modelAssetPath} (${c.status})`);
      }).then((c) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(c), !0, !1, !1), ar(this, "/model.dat"), this.m(), this.L();
      });
      if (h.modelAssetBuffer instanceof Uint8Array) ar(this, h.modelAssetBuffer);
      else if (h.modelAssetBuffer) return async function(c) {
        const u = [];
        for (var l = 0; ; ) {
          const { done: d, value: f } = await c.read();
          if (d) break;
          u.push(f), l += f.length;
        }
        if (u.length === 0) return new Uint8Array(0);
        if (u.length === 1) return u[0];
        c = new Uint8Array(l), l = 0;
        for (const d of u) c.set(d, l), l += d.length;
        return c;
      }(h.modelAssetBuffer).then((c) => {
        ar(this, c), this.m(), this.L();
      });
    }
    return this.m(), this.L(), Promise.resolve();
  }
  L() {
  }
  ca() {
    let e;
    if (this.g.ca((t) => {
      e = r3(t);
    }), !e) throw Error("Failed to retrieve CalculatorGraphConfig");
    return e;
  }
  setGraph(e, t) {
    this.g.attachErrorListener((i, s) => {
      this.H.push(Error(s));
    }), this.g.Ja(), this.g.setGraph(e, t), this.B = void 0, D0(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), D0(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function Pe(e, t) {
  if (!e) throw Error(`Unable to obtain required WebGL resource: ${t}`);
  return e;
}
wr.prototype.close = wr.prototype.close;
class L3 {
  constructor(t, i, s, n) {
    this.g = t, this.h = i, this.m = s, this.l = n;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function N0(e, t, i) {
  const s = e.g;
  if (i = Pe(s.createShader(i), "Failed to create WebGL shader"), s.shaderSource(i, t), s.compileShader(i), !s.getShaderParameter(i, s.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${s.getShaderInfoLog(i)}`);
  return s.attachShader(e.h, i), i;
}
function U0(e, t) {
  const i = e.g, s = Pe(i.createVertexArray(), "Failed to create vertex array");
  i.bindVertexArray(s);
  const n = Pe(i.createBuffer(), "Failed to create buffer");
  i.bindBuffer(i.ARRAY_BUFFER, n), i.enableVertexAttribArray(e.O), i.vertexAttribPointer(e.O, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), i.STATIC_DRAW);
  const r = Pe(i.createBuffer(), "Failed to create buffer");
  return i.bindBuffer(i.ARRAY_BUFFER, r), i.enableVertexAttribArray(e.L), i.vertexAttribPointer(e.L, 2, i.FLOAT, !1, 0, 0), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), i.STATIC_DRAW), i.bindBuffer(i.ARRAY_BUFFER, null), i.bindVertexArray(null), new L3(i, s, n, r);
}
function mo(e, t) {
  if (e.g) {
    if (t !== e.g) throw Error("Cannot change GL context once initialized");
  } else e.g = t;
}
function I3(e, t, i, s) {
  return mo(e, t), e.h || (e.m(), e.D()), i ? (e.u || (e.u = U0(e, !0)), i = e.u) : (e.A || (e.A = U0(e, !1)), i = e.A), t.useProgram(e.h), i.bind(), e.l(), e = s(), i.g.bindVertexArray(null), e;
}
function K1(e, t, i) {
  return mo(e, t), e = Pe(t.createTexture(), "Failed to create texture"), t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i ?? t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, i ?? t.LINEAR), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Q1(e, t, i) {
  mo(e, t), e.B || (e.B = Pe(t.createFramebuffer(), "Failed to create framebuffe.")), t.bindFramebuffer(t.FRAMEBUFFER, e.B), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0);
}
function O3(e) {
  var t;
  (t = e.g) == null || t.bindFramebuffer(e.g.FRAMEBUFFER, null);
}
var t2 = class {
  H() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const e = this.g;
    if (this.h = Pe(e.createProgram(), "Failed to create WebGL program"), this.X = N0(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, e.VERTEX_SHADER), this.W = N0(this, this.H(), e.FRAGMENT_SHADER), e.linkProgram(this.h), !e.getProgramParameter(this.h, e.LINK_STATUS)) throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);
    this.O = e.getAttribLocation(this.h, "aVertex"), this.L = e.getAttribLocation(this.h, "aTex");
  }
  D() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const e = this.g;
      e.deleteProgram(this.h), e.deleteShader(this.X), e.deleteShader(this.W);
    }
    this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
  }
};
function we(e, t) {
  switch (t) {
    case 0:
      return e.g.find((i) => i instanceof Uint8Array);
    case 1:
      return e.g.find((i) => i instanceof Float32Array);
    case 2:
      return e.g.find((i) => typeof WebGLTexture < "u" && i instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function Mr(e) {
  var t = we(e, 1);
  if (!t) {
    if (t = we(e, 0)) t = new Float32Array(t).map((s) => s / 255);
    else {
      t = new Float32Array(e.width * e.height);
      const s = Bi(e);
      var i = go(e);
      if (Q1(i, s, e2(e)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
        i = new Float32Array(e.width * e.height * 4), s.readPixels(0, 0, e.width, e.height, s.RGBA, s.FLOAT, i);
        for (let n = 0, r = 0; n < t.length; ++n, r += 4) t[n] = i[r];
      } else s.readPixels(0, 0, e.width, e.height, s.RED, s.FLOAT, t);
    }
    e.g.push(t);
  }
  return t;
}
function e2(e) {
  let t = we(e, 2);
  if (!t) {
    const i = Bi(e);
    t = s2(e);
    const s = Mr(e), n = i2(e);
    i.texImage2D(i.TEXTURE_2D, 0, n, e.width, e.height, 0, i.RED, i.FLOAT, s), Ar(e);
  }
  return t;
}
function Bi(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return e.h || (e.h = Pe(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function i2(e) {
  if (e = Bi(e), !Zs) if (e.getExtension("EXT_color_buffer_float") && e.getExtension("OES_texture_float_linear") && e.getExtension("EXT_float_blend")) Zs = e.R32F;
  else {
    if (!e.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Zs = e.R16F;
  }
  return Zs;
}
function go(e) {
  return e.l || (e.l = new t2()), e.l;
}
function s2(e) {
  const t = Bi(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let i = we(e, 2);
  return i || (i = K1(go(e), t, e.m ? t.LINEAR : t.NEAREST), e.g.push(i), e.j = !0), t.bindTexture(t.TEXTURE_2D, i), i;
}
function Ar(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var Zs, ut = class {
  constructor(e, t, i, s, n, r, o) {
    this.g = e, this.m = t, this.j = i, this.canvas = s, this.l = n, this.width = r, this.height = o, this.j && --V0 === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  Fa() {
    return !!we(this, 0);
  }
  ka() {
    return !!we(this, 1);
  }
  R() {
    return !!we(this, 2);
  }
  ja() {
    return (t = we(e = this, 0)) || (t = Mr(e), t = new Uint8Array(t.map((i) => Math.round(255 * i))), e.g.push(t)), t;
    var e, t;
  }
  ia() {
    return Mr(this);
  }
  N() {
    return e2(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let i;
      if (t instanceof Uint8Array) i = new Uint8Array(t);
      else if (t instanceof Float32Array) i = new Float32Array(t);
      else {
        if (!(t instanceof WebGLTexture)) throw Error(`Type is not supported: ${t}`);
        {
          const s = Bi(this), n = go(this);
          s.activeTexture(s.TEXTURE1), i = K1(n, s, this.m ? s.LINEAR : s.NEAREST), s.bindTexture(s.TEXTURE_2D, i);
          const r = i2(this);
          s.texImage2D(s.TEXTURE_2D, 0, r, this.width, this.height, 0, s.RED, s.FLOAT, null), s.bindTexture(s.TEXTURE_2D, null), Q1(n, s, i), I3(n, s, !1, () => {
            s2(this), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4), Ar(this);
          }), O3(n), Ar(this);
        }
      }
      e.push(i);
    }
    return new ut(e, this.m, this.R(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Bi(this).deleteTexture(we(this, 2)), V0 = -1;
  }
};
ut.prototype.close = ut.prototype.close, ut.prototype.clone = ut.prototype.clone, ut.prototype.getAsWebGLTexture = ut.prototype.N, ut.prototype.getAsFloat32Array = ut.prototype.ia, ut.prototype.getAsUint8Array = ut.prototype.ja, ut.prototype.hasWebGLTexture = ut.prototype.R, ut.prototype.hasFloat32Array = ut.prototype.ka, ut.prototype.hasUint8Array = ut.prototype.Fa;
var V0 = 250;
function ee(...e) {
  return e.map(([t, i]) => ({ start: t, end: i }));
}
const R3 = /* @__PURE__ */ function(e) {
  return class extends e {
    Ja() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((G0 = class {
  constructor(e, t) {
    this.l = !0, this.i = e, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", t !== void 0 ? this.i.canvas = t : J1() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
  }
  async initializeGraph(e) {
    const t = await (await fetch(e)).arrayBuffer();
    e = !(e.endsWith(".pbtxt") || e.endsWith(".textproto")), this.setGraph(new Uint8Array(t), e);
  }
  setGraphFromString(e) {
    this.setGraph(new TextEncoder().encode(e), !1);
  }
  setGraph(e, t) {
    const i = e.length, s = this.i._malloc(i);
    this.i.HEAPU8.set(e, s), t ? this.i._changeBinaryGraph(i, s) : this.i._changeTextGraph(i, s), this.i._free(s);
  }
  configureAudio(e, t, i, s, n) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), M(this, s || "input_audio", (r) => {
      M(this, n = n || "audio_header", (o) => {
        this.i._configureAudio(r, o, e, t ?? 0, i);
      });
    });
  }
  setAutoResizeCanvas(e) {
    this.l = e;
  }
  setAutoRenderToScreen(e) {
    this.i._setAutoRenderToScreen(e);
  }
  setGpuBufferVerticalFlip(e) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = e;
  }
  ca(e) {
    ne(this, "__graph_config__", (t) => {
      e(t);
    }), M(this, "__graph_config__", (t) => {
      this.i._getGraphConfig(t, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(e) {
    this.i.errorListener = e;
  }
  attachEmptyPacketListener(e, t) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[e] = t;
  }
  addAudioToStream(e, t, i) {
    this.addAudioToStreamWithShape(e, 0, 0, t, i);
  }
  addAudioToStreamWithShape(e, t, i, s, n) {
    const r = 4 * e.length;
    this.h !== r && (this.g && this.i._free(this.g), this.g = this.i._malloc(r), this.h = r), this.i.HEAPF32.set(e, this.g / 4), M(this, s, (o) => {
      this.i._addAudioToInputStream(this.g, t, i, o, n);
    });
  }
  addGpuBufferToStream(e, t, i) {
    M(this, t, (s) => {
      const [n, r] = R0(this, e, s);
      this.i._addBoundTextureToStream(s, n, r, i);
    });
  }
  addBoolToStream(e, t, i) {
    M(this, t, (s) => {
      this.i._addBoolToInputStream(e, s, i);
    });
  }
  addDoubleToStream(e, t, i) {
    M(this, t, (s) => {
      this.i._addDoubleToInputStream(e, s, i);
    });
  }
  addFloatToStream(e, t, i) {
    M(this, t, (s) => {
      this.i._addFloatToInputStream(e, s, i);
    });
  }
  addIntToStream(e, t, i) {
    M(this, t, (s) => {
      this.i._addIntToInputStream(e, s, i);
    });
  }
  addUintToStream(e, t, i) {
    M(this, t, (s) => {
      this.i._addUintToInputStream(e, s, i);
    });
  }
  addStringToStream(e, t, i) {
    M(this, t, (s) => {
      M(this, e, (n) => {
        this.i._addStringToInputStream(n, s, i);
      });
    });
  }
  addStringRecordToStream(e, t, i) {
    M(this, t, (s) => {
      P0(this, Object.keys(e), (n) => {
        P0(this, Object.values(e), (r) => {
          this.i._addFlatHashMapToInputStream(n, r, Object.keys(e).length, s, i);
        });
      });
    });
  }
  addProtoToStream(e, t, i, s) {
    M(this, i, (n) => {
      M(this, t, (r) => {
        const o = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, o), this.i._addProtoToInputStream(o, e.length, r, n, s), this.i._free(o);
      });
    });
  }
  addEmptyPacketToStream(e, t) {
    M(this, e, (i) => {
      this.i._addEmptyPacketToInputStream(i, t);
    });
  }
  addBoolVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateBoolVector(e.length);
      if (!n) throw Error("Unable to allocate new bool vector on heap.");
      for (const r of e) this.i._addBoolVectorEntry(n, r);
      this.i._addBoolVectorToInputStream(n, s, i);
    });
  }
  addDoubleVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateDoubleVector(e.length);
      if (!n) throw Error("Unable to allocate new double vector on heap.");
      for (const r of e) this.i._addDoubleVectorEntry(n, r);
      this.i._addDoubleVectorToInputStream(n, s, i);
    });
  }
  addFloatVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateFloatVector(e.length);
      if (!n) throw Error("Unable to allocate new float vector on heap.");
      for (const r of e) this.i._addFloatVectorEntry(n, r);
      this.i._addFloatVectorToInputStream(n, s, i);
    });
  }
  addIntVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateIntVector(e.length);
      if (!n) throw Error("Unable to allocate new int vector on heap.");
      for (const r of e) this.i._addIntVectorEntry(n, r);
      this.i._addIntVectorToInputStream(n, s, i);
    });
  }
  addUintVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateUintVector(e.length);
      if (!n) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const r of e) this.i._addUintVectorEntry(n, r);
      this.i._addUintVectorToInputStream(n, s, i);
    });
  }
  addStringVectorToStream(e, t, i) {
    M(this, t, (s) => {
      const n = this.i._allocateStringVector(e.length);
      if (!n) throw Error("Unable to allocate new string vector on heap.");
      for (const r of e) M(this, r, (o) => {
        this.i._addStringVectorEntry(n, o);
      });
      this.i._addStringVectorToInputStream(n, s, i);
    });
  }
  addBoolToInputSidePacket(e, t) {
    M(this, t, (i) => {
      this.i._addBoolToInputSidePacket(e, i);
    });
  }
  addDoubleToInputSidePacket(e, t) {
    M(this, t, (i) => {
      this.i._addDoubleToInputSidePacket(e, i);
    });
  }
  addFloatToInputSidePacket(e, t) {
    M(this, t, (i) => {
      this.i._addFloatToInputSidePacket(e, i);
    });
  }
  addIntToInputSidePacket(e, t) {
    M(this, t, (i) => {
      this.i._addIntToInputSidePacket(e, i);
    });
  }
  addUintToInputSidePacket(e, t) {
    M(this, t, (i) => {
      this.i._addUintToInputSidePacket(e, i);
    });
  }
  addStringToInputSidePacket(e, t) {
    M(this, t, (i) => {
      M(this, e, (s) => {
        this.i._addStringToInputSidePacket(s, i);
      });
    });
  }
  addProtoToInputSidePacket(e, t, i) {
    M(this, i, (s) => {
      M(this, t, (n) => {
        const r = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, r), this.i._addProtoToInputSidePacket(r, e.length, n, s), this.i._free(r);
      });
    });
  }
  addBoolVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateBoolVector(e.length);
      if (!s) throw Error("Unable to allocate new bool vector on heap.");
      for (const n of e) this.i._addBoolVectorEntry(s, n);
      this.i._addBoolVectorToInputSidePacket(s, i);
    });
  }
  addDoubleVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateDoubleVector(e.length);
      if (!s) throw Error("Unable to allocate new double vector on heap.");
      for (const n of e) this.i._addDoubleVectorEntry(s, n);
      this.i._addDoubleVectorToInputSidePacket(s, i);
    });
  }
  addFloatVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateFloatVector(e.length);
      if (!s) throw Error("Unable to allocate new float vector on heap.");
      for (const n of e) this.i._addFloatVectorEntry(s, n);
      this.i._addFloatVectorToInputSidePacket(s, i);
    });
  }
  addIntVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateIntVector(e.length);
      if (!s) throw Error("Unable to allocate new int vector on heap.");
      for (const n of e) this.i._addIntVectorEntry(s, n);
      this.i._addIntVectorToInputSidePacket(s, i);
    });
  }
  addUintVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateUintVector(e.length);
      if (!s) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const n of e) this.i._addUintVectorEntry(s, n);
      this.i._addUintVectorToInputSidePacket(s, i);
    });
  }
  addStringVectorToInputSidePacket(e, t) {
    M(this, t, (i) => {
      const s = this.i._allocateStringVector(e.length);
      if (!s) throw Error("Unable to allocate new string vector on heap.");
      for (const n of e) M(this, n, (r) => {
        this.i._addStringVectorEntry(s, r);
      });
      this.i._addStringVectorToInputSidePacket(s, i);
    });
  }
  attachBoolListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachBoolListener(i);
    });
  }
  attachBoolVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachBoolVectorListener(i);
    });
  }
  attachIntListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachIntListener(i);
    });
  }
  attachIntVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachIntVectorListener(i);
    });
  }
  attachUintListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachUintListener(i);
    });
  }
  attachUintVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachUintVectorListener(i);
    });
  }
  attachDoubleListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachDoubleListener(i);
    });
  }
  attachDoubleVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachDoubleVectorListener(i);
    });
  }
  attachFloatListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachFloatListener(i);
    });
  }
  attachFloatVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachFloatVectorListener(i);
    });
  }
  attachStringListener(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.i._attachStringListener(i);
    });
  }
  attachStringVectorListener(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.i._attachStringVectorListener(i);
    });
  }
  attachProtoListener(e, t, i) {
    ne(this, e, t), M(this, e, (s) => {
      this.i._attachProtoListener(s, i || !1);
    });
  }
  attachProtoVectorListener(e, t, i) {
    Le(this, e, t), M(this, e, (s) => {
      this.i._attachProtoVectorListener(s, i || !1);
    });
  }
  attachAudioListener(e, t, i) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), ne(this, e, (s, n) => {
      s = new Float32Array(s.buffer, s.byteOffset, s.length / 4), t(s, n);
    }), M(this, e, (s) => {
      this.i._attachAudioListener(s, i || !1);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends G0 {
  get ga() {
    return this.i;
  }
  pa(e, t, i) {
    M(this, t, (s) => {
      const [n, r] = R0(this, e, s);
      this.ga._addBoundTextureAsImageToStream(s, n, r, i);
    });
  }
  Z(e, t) {
    ne(this, e, t), M(this, e, (i) => {
      this.ga._attachImageListener(i);
    });
  }
  aa(e, t) {
    Le(this, e, t), M(this, e, (i) => {
      this.ga._attachImageVectorListener(i);
    });
  }
}));
var G0, ie = class extends R3 {
};
async function B(e, t, i) {
  return async function(s, n, r, o) {
    return B3(s, n, r, o);
  }(e, i.canvas ?? (J1() ? void 0 : document.createElement("canvas")), t, i);
}
function n2(e, t, i, s) {
  if (e.U) {
    const r = new v1();
    if (i != null && i.regionOfInterest) {
      if (!e.oa) throw Error("This task doesn't support region-of-interest.");
      var n = i.regionOfInterest;
      if (n.left >= n.right || n.top >= n.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (n.left < 0 || n.top < 0 || n.right > 1 || n.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      A(r, 1, (n.left + n.right) / 2), A(r, 2, (n.top + n.bottom) / 2), A(r, 4, n.right - n.left), A(r, 3, n.bottom - n.top);
    } else A(r, 1, 0.5), A(r, 2, 0.5), A(r, 4, 1), A(r, 3, 1);
    if (i != null && i.rotationDegrees) {
      if ((i == null ? void 0 : i.rotationDegrees) % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (A(r, 5, -Math.PI * i.rotationDegrees / 180), (i == null ? void 0 : i.rotationDegrees) % 180 != 0) {
        const [o, a] = $1(t);
        i = tt(r, 3) * a / o, n = tt(r, 4) * o / a, A(r, 4, i), A(r, 3, n);
      }
    }
    e.g.addProtoToStream(r.g(), "mediapipe.NormalizedRect", e.U, s);
  }
  e.g.pa(t, e.X, s ?? performance.now()), e.finishProcessing();
}
function se(e, t, i) {
  var s;
  if ((s = e.baseOptions) != null && s.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  n2(e, t, i, e.C + 1);
}
function me(e, t, i, s) {
  var n;
  if (!((n = e.baseOptions) != null && n.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  n2(e, t, i, s);
}
function Li(e, t, i, s) {
  var n = t.data;
  const r = t.width, o = r * (t = t.height);
  if ((n instanceof Uint8Array || n instanceof Float32Array) && n.length !== o) throw Error("Unsupported channel count: " + n.length / o);
  return e = new ut([n], i, !1, e.g.i.canvas, e.P, r, t), s ? e.clone() : e;
}
var It = class extends wr {
  constructor(e, t, i, s) {
    super(e), this.g = e, this.X = t, this.U = i, this.oa = s, this.P = new t2();
  }
  l(e, t = !0) {
    if ("runningMode" in e && P(this.baseOptions, 2, cs(!!e.runningMode && e.runningMode !== "IMAGE")), e.canvas !== void 0 && this.g.i.canvas !== e.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(e, t);
  }
  close() {
    this.P.close(), super.close();
  }
};
It.prototype.close = It.prototype.close;
var Dt = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, v(e = this.h = new Fn(), 0, 1, t = new K()), A(this.h, 2, 0.5), A(this.h, 3, 0.3);
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return "minDetectionConfidence" in e && A(this.h, 2, e.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in e && A(this.h, 3, e.minSuppressionThreshold ?? 0.3), this.l(e);
  }
  F(e, t) {
    return this.j = { detections: [] }, se(this, e, t), this.j;
  }
  G(e, t, i) {
    return this.j = { detections: [] }, me(this, e, i, t), this.j;
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect_in"), R(e, "detections");
    const t = new Ot();
    fe(t, y3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect_in"), C(i, "DETECTIONS:detections"), i.o(t), qt(e, i), this.g.attachProtoVectorListener("detections", (s, n) => {
      for (const r of s) s = M1(r), this.j.detections.push(Y1(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("detections", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Dt.prototype.detectForVideo = Dt.prototype.G, Dt.prototype.detect = Dt.prototype.F, Dt.prototype.setOptions = Dt.prototype.o, Dt.createFromModelPath = async function(e, t) {
  return B(Dt, e, { baseOptions: { modelAssetPath: t } });
}, Dt.createFromModelBuffer = function(e, t) {
  return B(Dt, e, { baseOptions: { modelAssetBuffer: t } });
}, Dt.createFromOptions = function(e, t) {
  return B(Dt, e, t);
};
var yo = ee([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), xo = ee([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), bo = ee([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), r2 = ee([474, 475], [475, 476], [476, 477], [477, 474]), _o = ee([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), wo = ee([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), o2 = ee([469, 470], [470, 471], [471, 472], [472, 469]), Mo = ee([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), a2 = [...yo, ...xo, ...bo, ..._o, ...wo, ...Mo], h2 = ee([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function W0(e) {
  e.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var j = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, v(e = this.h = new z1(), 0, 1, t = new K()), this.A = new T1(), v(this.h, 0, 3, this.A), this.u = new Fn(), v(this.h, 0, 2, this.u), ke(this.u, 4, 1), A(this.u, 2, 0.5), A(this.A, 2, 0.5), A(this.h, 4, 0.5);
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return "numFaces" in e && ke(this.u, 4, e.numFaces ?? 1), "minFaceDetectionConfidence" in e && A(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && A(this.h, 4, e.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in e && A(this.A, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in e && (this.outputFacialTransformationMatrixes = !!e.outputFacialTransformationMatrixes), this.l(e);
  }
  F(e, t) {
    return W0(this), se(this, e, t), this.j;
  }
  G(e, t, i) {
    return W0(this), me(this, e, i, t), this.j;
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect"), R(e, "face_landmarks");
    const t = new Ot();
    fe(t, b3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), C(i, "NORM_LANDMARKS:face_landmarks"), i.o(t), qt(e, i), this.g.attachProtoVectorListener("face_landmarks", (s, n) => {
      for (const r of s) s = Ms(r), this.j.faceLandmarks.push(Tn(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("face_landmarks", (s) => {
      b(this, s);
    }), this.outputFaceBlendshapes && (R(e, "blendshapes"), C(i, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (s, n) => {
      if (this.outputFaceBlendshapes) for (const r of s) s = En(r), this.j.faceBlendshapes.push(po(s.g() ?? []));
      b(this, n);
    }), this.g.attachEmptyPacketListener("blendshapes", (s) => {
      b(this, s);
    })), this.outputFacialTransformationMatrixes && (R(e, "face_geometry"), C(i, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (s, n) => {
      if (this.outputFacialTransformationMatrixes) for (const r of s) (s = I(s = x3(r), c3, 2)) && this.j.facialTransformationMatrixes.push({ rows: Gt(s, 1) ?? 0 ?? 0, columns: Gt(s, 2) ?? 0 ?? 0, data: Xe(s, 3, oe, He()).slice() ?? [] });
      b(this, n);
    }), this.g.attachEmptyPacketListener("face_geometry", (s) => {
      b(this, s);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
j.prototype.detectForVideo = j.prototype.G, j.prototype.detect = j.prototype.F, j.prototype.setOptions = j.prototype.o, j.createFromModelPath = function(e, t) {
  return B(j, e, { baseOptions: { modelAssetPath: t } });
}, j.createFromModelBuffer = function(e, t) {
  return B(j, e, { baseOptions: { modelAssetBuffer: t } });
}, j.createFromOptions = function(e, t) {
  return B(j, e, t);
}, j.FACE_LANDMARKS_LIPS = yo, j.FACE_LANDMARKS_LEFT_EYE = xo, j.FACE_LANDMARKS_LEFT_EYEBROW = bo, j.FACE_LANDMARKS_LEFT_IRIS = r2, j.FACE_LANDMARKS_RIGHT_EYE = _o, j.FACE_LANDMARKS_RIGHT_EYEBROW = wo, j.FACE_LANDMARKS_RIGHT_IRIS = o2, j.FACE_LANDMARKS_FACE_OVAL = Mo, j.FACE_LANDMARKS_CONTOURS = a2, j.FACE_LANDMARKS_TESSELATION = h2;
var Ao = ee([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function j0(e) {
  e.gestures = [], e.landmarks = [], e.worldLandmarks = [], e.handedness = [];
}
function q0(e) {
  return e.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: e.gestures, landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handedness: e.handedness, handednesses: e.handedness };
}
function H0(e, t = !0) {
  const i = [];
  for (const n of e) {
    var s = En(n);
    e = [];
    for (const r of s.g()) s = t && Gt(r, 1) != null ? Gt(r, 1) ?? 0 : -1, e.push({ score: tt(r, 2) ?? 0, index: s, categoryName: ft(H(r, 3)) ?? "" ?? "", displayName: ft(H(r, 4)) ?? "" ?? "" });
    i.push(e);
  }
  return i;
}
var kt = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], v(e = this.j = new L1(), 0, 1, t = new K()), this.u = new co(), v(this.j, 0, 2, this.u), this.D = new ho(), v(this.u, 0, 3, this.D), this.A = new B1(), v(this.u, 0, 2, this.A), this.h = new _3(), v(this.j, 0, 3, this.h), A(this.A, 2, 0.5), A(this.u, 4, 0.5), A(this.D, 2, 0.5);
  }
  get baseOptions() {
    return I(this.j, K, 1);
  }
  set baseOptions(e) {
    v(this.j, 0, 1, e);
  }
  o(e) {
    var n, r, o, a;
    if (ke(this.A, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && A(this.A, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && A(this.u, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && A(this.D, 2, e.minHandPresenceConfidence ?? 0.5), e.cannedGesturesClassifierOptions) {
      var t = new gi(), i = t, s = _r(e.cannedGesturesClassifierOptions, (n = I(this.h, gi, 3)) == null ? void 0 : n.l());
      v(i, 0, 2, s), v(this.h, 0, 3, t);
    } else e.cannedGesturesClassifierOptions === void 0 && ((r = I(this.h, gi, 3)) == null || r.g());
    return e.customGesturesClassifierOptions ? (v(i = t = new gi(), 0, 2, s = _r(e.customGesturesClassifierOptions, (o = I(this.h, gi, 4)) == null ? void 0 : o.l())), v(this.h, 0, 4, t)) : e.customGesturesClassifierOptions === void 0 && ((a = I(this.h, gi, 4)) == null || a.g()), this.l(e);
  }
  Ha(e, t) {
    return j0(this), se(this, e, t), q0(this);
  }
  Ia(e, t, i) {
    return j0(this), me(this, e, i, t), q0(this);
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect"), R(e, "hand_gestures"), R(e, "hand_landmarks"), R(e, "world_hand_landmarks"), R(e, "handedness");
    const t = new Ot();
    fe(t, w3, this.j);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), C(i, "HAND_GESTURES:hand_gestures"), C(i, "LANDMARKS:hand_landmarks"), C(i, "WORLD_LANDMARKS:world_hand_landmarks"), C(i, "HANDEDNESS:handedness"), i.o(t), qt(e, i), this.g.attachProtoVectorListener("hand_landmarks", (s, n) => {
      for (const r of s) {
        s = Ms(r);
        const o = [];
        for (const a of ve(s, S1, 1)) o.push({ x: tt(a, 1) ?? 0, y: tt(a, 2) ?? 0, z: tt(a, 3) ?? 0, visibility: tt(a, 4) ?? 0 });
        this.landmarks.push(o);
      }
      b(this, n);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (s) => {
      b(this, s);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (s, n) => {
      for (const r of s) {
        s = Mi(r);
        const o = [];
        for (const a of ve(s, A1, 1)) o.push({ x: tt(a, 1) ?? 0, y: tt(a, 2) ?? 0, z: tt(a, 3) ?? 0, visibility: tt(a, 4) ?? 0 });
        this.worldLandmarks.push(o);
      }
      b(this, n);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (s) => {
      b(this, s);
    }), this.g.attachProtoVectorListener("hand_gestures", (s, n) => {
      this.gestures.push(...H0(s, !1)), b(this, n);
    }), this.g.attachEmptyPacketListener("hand_gestures", (s) => {
      b(this, s);
    }), this.g.attachProtoVectorListener("handedness", (s, n) => {
      this.handedness.push(...H0(s)), b(this, n);
    }), this.g.attachEmptyPacketListener("handedness", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
function X0(e) {
  return { landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handednesses: e.handedness, handedness: e.handedness };
}
kt.prototype.recognizeForVideo = kt.prototype.Ia, kt.prototype.recognize = kt.prototype.Ha, kt.prototype.setOptions = kt.prototype.o, kt.createFromModelPath = function(e, t) {
  return B(kt, e, { baseOptions: { modelAssetPath: t } });
}, kt.createFromModelBuffer = function(e, t) {
  return B(kt, e, { baseOptions: { modelAssetBuffer: t } });
}, kt.createFromOptions = function(e, t) {
  return B(kt, e, t);
}, kt.HAND_CONNECTIONS = Ao;
var Et = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], v(e = this.h = new co(), 0, 1, t = new K()), this.u = new ho(), v(this.h, 0, 3, this.u), this.j = new B1(), v(this.h, 0, 2, this.j), ke(this.j, 3, 1), A(this.j, 2, 0.5), A(this.u, 2, 0.5), A(this.h, 4, 0.5);
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return "numHands" in e && ke(this.j, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && A(this.j, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && A(this.h, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && A(this.u, 2, e.minHandPresenceConfidence ?? 0.5), this.l(e);
  }
  F(e, t) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], se(this, e, t), X0(this);
  }
  G(e, t, i) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], me(this, e, i, t), X0(this);
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect"), R(e, "hand_landmarks"), R(e, "world_hand_landmarks"), R(e, "handedness");
    const t = new Ot();
    fe(t, M3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), C(i, "LANDMARKS:hand_landmarks"), C(i, "WORLD_LANDMARKS:world_hand_landmarks"), C(i, "HANDEDNESS:handedness"), i.o(t), qt(e, i), this.g.attachProtoVectorListener("hand_landmarks", (s, n) => {
      for (const r of s) s = Ms(r), this.landmarks.push(Tn(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (s) => {
      b(this, s);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (s, n) => {
      for (const r of s) s = Mi(r), this.worldLandmarks.push(ns(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (s) => {
      b(this, s);
    }), this.g.attachProtoVectorListener("handedness", (s, n) => {
      var r = this.handedness, o = r.push;
      const a = [];
      for (const h of s) {
        s = En(h);
        const c = [];
        for (const u of s.g()) c.push({ score: tt(u, 2) ?? 0, index: Gt(u, 1) ?? 0 ?? -1, categoryName: ft(H(u, 3)) ?? "" ?? "", displayName: ft(H(u, 4)) ?? "" ?? "" });
        a.push(c);
      }
      o.call(r, ...a), b(this, n);
    }), this.g.attachEmptyPacketListener("handedness", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Et.prototype.detectForVideo = Et.prototype.G, Et.prototype.detect = Et.prototype.F, Et.prototype.setOptions = Et.prototype.o, Et.createFromModelPath = function(e, t) {
  return B(Et, e, { baseOptions: { modelAssetPath: t } });
}, Et.createFromModelBuffer = function(e, t) {
  return B(Et, e, { baseOptions: { modelAssetBuffer: t } });
}, Et.createFromOptions = function(e, t) {
  return B(Et, e, t);
}, Et.HAND_CONNECTIONS = Ao;
var c2 = ee([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
function Y0(e) {
  e.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function Z0(e) {
  try {
    if (!e.D) return e.h;
    e.D(e.h);
  } finally {
    Cn(e);
  }
}
function Js(e, t) {
  e = Ms(e), t.push(Tn(e));
}
var N = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "input_frames_image", null, !1), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1, v(e = this.j = new D1(), 0, 1, t = new K()), this.I = new ho(), v(this.j, 0, 2, this.I), this.W = new A3(), v(this.j, 0, 3, this.W), this.u = new Fn(), v(this.j, 0, 4, this.u), this.O = new T1(), v(this.j, 0, 5, this.O), this.A = new R1(), v(this.j, 0, 6, this.A), this.M = new P1(), v(this.j, 0, 7, this.M), A(this.u, 2, 0.5), A(this.u, 3, 0.3), A(this.O, 2, 0.5), A(this.A, 2, 0.5), A(this.A, 3, 0.3), A(this.M, 2, 0.5), A(this.I, 2, 0.5);
  }
  get baseOptions() {
    return I(this.j, K, 1);
  }
  set baseOptions(e) {
    v(this.j, 0, 1, e);
  }
  o(e) {
    return "minFaceDetectionConfidence" in e && A(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minFaceSuppressionThreshold" in e && A(this.u, 3, e.minFaceSuppressionThreshold ?? 0.3), "minFacePresenceConfidence" in e && A(this.O, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "minPoseDetectionConfidence" in e && A(this.A, 2, e.minPoseDetectionConfidence ?? 0.5), "minPoseSuppressionThreshold" in e && A(this.A, 3, e.minPoseSuppressionThreshold ?? 0.3), "minPosePresenceConfidence" in e && A(this.M, 2, e.minPosePresenceConfidence ?? 0.5), "outputPoseSegmentationMasks" in e && (this.outputPoseSegmentationMasks = !!e.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in e && A(this.I, 2, e.minHandLandmarksConfidence ?? 0.5), this.l(e);
  }
  F(e, t, i) {
    const s = typeof t != "function" ? t : {};
    return this.D = typeof t == "function" ? t : i, Y0(this), se(this, e, s), Z0(this);
  }
  G(e, t, i, s) {
    const n = typeof i != "function" ? i : {};
    return this.D = typeof i == "function" ? i : s, Y0(this), me(this, e, n, t), Z0(this);
  }
  m() {
    var e = new Rt();
    Y(e, "input_frames_image"), R(e, "pose_landmarks"), R(e, "pose_world_landmarks"), R(e, "face_landmarks"), R(e, "left_hand_landmarks"), R(e, "left_hand_world_landmarks"), R(e, "right_hand_landmarks"), R(e, "right_hand_world_landmarks");
    const t = new Ot(), i = new b0();
    Lt(i, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), function(n, r) {
      if (r != null) if (Array.isArray(r)) P(n, 2, mn(r, 0, us));
      else {
        if (!(typeof r == "string" || r instanceof he || Fr(r))) throw Error("invalid value in Any.value field: " + r + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        Ie(n, 2, zr(r, !1), Qe());
      }
    }(i, this.j.g());
    const s = new At();
    Lt(s, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), jr(s, 8, b0, i), V(s, "IMAGE:input_frames_image"), C(s, "POSE_LANDMARKS:pose_landmarks"), C(s, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), C(s, "FACE_LANDMARKS:face_landmarks"), C(s, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), C(s, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), C(s, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), C(s, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), s.o(t), qt(e, s), zn(this, e), this.g.attachProtoListener("pose_landmarks", (n, r) => {
      Js(n, this.h.poseLandmarks), b(this, r);
    }), this.g.attachEmptyPacketListener("pose_landmarks", (n) => {
      b(this, n);
    }), this.g.attachProtoListener("pose_world_landmarks", (n, r) => {
      var o = this.h.poseWorldLandmarks;
      n = Mi(n), o.push(ns(n)), b(this, r);
    }), this.g.attachEmptyPacketListener("pose_world_landmarks", (n) => {
      b(this, n);
    }), this.outputPoseSegmentationMasks && (C(s, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), Ci(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", (n, r) => {
      this.h.poseSegmentationMasks = [Li(this, n, !0, !this.D)], b(this, r);
    }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (n) => {
      this.h.poseSegmentationMasks = [], b(this, n);
    })), this.g.attachProtoListener("face_landmarks", (n, r) => {
      Js(n, this.h.faceLandmarks), b(this, r);
    }), this.g.attachEmptyPacketListener("face_landmarks", (n) => {
      b(this, n);
    }), this.outputFaceBlendshapes && (R(e, "extra_blendshapes"), C(s, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (n, r) => {
      var o = this.h.faceBlendshapes;
      this.outputFaceBlendshapes && (n = En(n), o.push(po(n.g() ?? []))), b(this, r);
    }), this.g.attachEmptyPacketListener("extra_blendshapes", (n) => {
      b(this, n);
    })), this.g.attachProtoListener("left_hand_landmarks", (n, r) => {
      Js(n, this.h.leftHandLandmarks), b(this, r);
    }), this.g.attachEmptyPacketListener("left_hand_landmarks", (n) => {
      b(this, n);
    }), this.g.attachProtoListener("left_hand_world_landmarks", (n, r) => {
      var o = this.h.leftHandWorldLandmarks;
      n = Mi(n), o.push(ns(n)), b(this, r);
    }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (n) => {
      b(this, n);
    }), this.g.attachProtoListener("right_hand_landmarks", (n, r) => {
      Js(n, this.h.rightHandLandmarks), b(this, r);
    }), this.g.attachEmptyPacketListener("right_hand_landmarks", (n) => {
      b(this, n);
    }), this.g.attachProtoListener("right_hand_world_landmarks", (n, r) => {
      var o = this.h.rightHandWorldLandmarks;
      n = Mi(n), o.push(ns(n)), b(this, r);
    }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (n) => {
      b(this, n);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
N.prototype.detectForVideo = N.prototype.G, N.prototype.detect = N.prototype.F, N.prototype.setOptions = N.prototype.o, N.createFromModelPath = function(e, t) {
  return B(N, e, { baseOptions: { modelAssetPath: t } });
}, N.createFromModelBuffer = function(e, t) {
  return B(N, e, { baseOptions: { modelAssetBuffer: t } });
}, N.createFromOptions = function(e, t) {
  return B(N, e, t);
}, N.HAND_CONNECTIONS = Ao, N.POSE_CONNECTIONS = c2, N.FACE_LANDMARKS_LIPS = yo, N.FACE_LANDMARKS_LEFT_EYE = xo, N.FACE_LANDMARKS_LEFT_EYEBROW = bo, N.FACE_LANDMARKS_LEFT_IRIS = r2, N.FACE_LANDMARKS_RIGHT_EYE = _o, N.FACE_LANDMARKS_RIGHT_EYEBROW = wo, N.FACE_LANDMARKS_RIGHT_IRIS = o2, N.FACE_LANDMARKS_FACE_OVAL = Mo, N.FACE_LANDMARKS_CONTOURS = a2, N.FACE_LANDMARKS_TESSELATION = h2;
var Nt = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "input_image", "norm_rect", !0), this.j = { classifications: [] }, v(e = this.h = new N1(), 0, 1, t = new K());
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return v(this.h, 0, 2, _r(e, I(this.h, oo, 2))), this.l(e);
  }
  sa(e, t) {
    return this.j = { classifications: [] }, se(this, e, t), this.j;
  }
  ta(e, t, i) {
    return this.j = { classifications: [] }, me(this, e, i, t), this.j;
  }
  m() {
    var e = new Rt();
    Y(e, "input_image"), Y(e, "norm_rect"), R(e, "classifications");
    const t = new Ot();
    fe(t, S3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), V(i, "IMAGE:input_image"), V(i, "NORM_RECT:norm_rect"), C(i, "CLASSIFICATIONS:classifications"), i.o(t), qt(e, i), this.g.attachProtoListener("classifications", (s, n) => {
      this.j = z3(d3(s)), b(this, n);
    }), this.g.attachEmptyPacketListener("classifications", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Nt.prototype.classifyForVideo = Nt.prototype.ta, Nt.prototype.classify = Nt.prototype.sa, Nt.prototype.setOptions = Nt.prototype.o, Nt.createFromModelPath = function(e, t) {
  return B(Nt, e, { baseOptions: { modelAssetPath: t } });
}, Nt.createFromModelBuffer = function(e, t) {
  return B(Nt, e, { baseOptions: { modelAssetBuffer: t } });
}, Nt.createFromOptions = function(e, t) {
  return B(Nt, e, t);
};
var Ft = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !0), this.h = new U1(), this.embeddings = { embeddings: [] }, v(e = this.h, 0, 1, t = new K());
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    var t = this.h, i = I(this.h, F0, 2);
    return i = i ? i.clone() : new F0(), e.l2Normalize !== void 0 ? P(i, 1, cs(e.l2Normalize)) : "l2Normalize" in e && P(i, 1), e.quantize !== void 0 ? P(i, 2, cs(e.quantize)) : "quantize" in e && P(i, 2), v(t, 0, 2, i), this.l(e);
  }
  za(e, t) {
    return se(this, e, t), this.embeddings;
  }
  Aa(e, t, i) {
    return me(this, e, i, t), this.embeddings;
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect"), R(e, "embeddings_out");
    const t = new Ot();
    fe(t, v3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), C(i, "EMBEDDINGS:embeddings_out"), i.o(t), qt(e, i), this.g.attachProtoListener("embeddings_out", (s, n) => {
      s = m3(s), this.embeddings = function(r) {
        return { embeddings: ve(r, p3, 1).map((o) => {
          var c, u;
          const a = { headIndex: Gt(o, 3) ?? 0 ?? -1, headName: ft(H(o, 4)) ?? "" ?? "" };
          var h = o.v;
          return Pa(h, 0 | h[_], E0, ir(o, 1)) !== void 0 ? (o = Xe(o = I(o, E0, ir(o, 1), void 0), 1, oe, He()), a.floatEmbedding = o.slice()) : (h = new Uint8Array(0), a.quantizedEmbedding = ((u = (c = I(o, f3, ir(o, 2), void 0)) == null ? void 0 : c.na()) == null ? void 0 : u.h()) ?? h), a;
        }), timestampMs: X1(H(r, 2, void 0, void 0, Qs) ?? Ba) };
      }(s), b(this, n);
    }), this.g.attachEmptyPacketListener("embeddings_out", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Ft.cosineSimilarity = function(e, t) {
  if (e.floatEmbedding && t.floatEmbedding) e = I0(e.floatEmbedding, t.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !t.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    e = I0(L0(e.quantizedEmbedding), L0(t.quantizedEmbedding));
  }
  return e;
}, Ft.prototype.embedForVideo = Ft.prototype.Aa, Ft.prototype.embed = Ft.prototype.za, Ft.prototype.setOptions = Ft.prototype.o, Ft.createFromModelPath = function(e, t) {
  return B(Ft, e, { baseOptions: { modelAssetPath: t } });
}, Ft.createFromModelBuffer = function(e, t) {
  return B(Ft, e, { baseOptions: { modelAssetBuffer: t } });
}, Ft.createFromOptions = function(e, t) {
  return B(Ft, e, t);
};
var Sr = class {
  constructor(e, t, i) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = i;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach((i) => {
      i.close();
    }), (t = this.categoryMask) == null || t.close();
  }
};
function P3(e) {
  var i, s;
  const t = function(n) {
    return ve(n, At, 1);
  }(e.ca()).filter((n) => (ft(H(n, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
  if (e.u = [], t.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
  t.length === 1 && (((s = (i = I(t[0], Ot, 7)) == null ? void 0 : i.j()) == null ? void 0 : s.g()) ?? /* @__PURE__ */ new Map()).forEach((n, r) => {
    e.u[Number(r)] = ft(H(n, 1)) ?? "";
  });
}
function J0(e) {
  e.categoryMask = void 0, e.confidenceMasks = void 0, e.qualityScores = void 0;
}
function $0(e) {
  try {
    const t = new Sr(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.j) return t;
    e.j(t);
  } finally {
    Cn(e);
  }
}
Sr.prototype.close = Sr.prototype.close;
var Mt = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new fo(), this.A = new V1(), v(this.h, 0, 3, this.A), v(e = this.h, 0, 1, t = new K());
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? P(this.h, 2, bs(e.displayNamesLocale)) : "displayNamesLocale" in e && P(this.h, 2), "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  L() {
    P3(this);
  }
  segment(e, t, i) {
    const s = typeof t != "function" ? t : {};
    return this.j = typeof t == "function" ? t : i, J0(this), se(this, e, s), $0(this);
  }
  La(e, t, i, s) {
    const n = typeof i != "function" ? i : {};
    return this.j = typeof i == "function" ? i : s, J0(this), me(this, e, n, t), $0(this);
  }
  Da() {
    return this.u;
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect");
    const t = new Ot();
    fe(t, W1, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), i.o(t), qt(e, i), zn(this, e), this.outputConfidenceMasks && (R(e, "confidence_masks"), C(i, "CONFIDENCE_MASKS:confidence_masks"), Ci(this, "confidence_masks"), this.g.aa("confidence_masks", (s, n) => {
      this.confidenceMasks = s.map((r) => Li(this, r, !0, !this.j)), b(this, n);
    }), this.g.attachEmptyPacketListener("confidence_masks", (s) => {
      this.confidenceMasks = [], b(this, s);
    })), this.outputCategoryMask && (R(e, "category_mask"), C(i, "CATEGORY_MASK:category_mask"), Ci(this, "category_mask"), this.g.Z("category_mask", (s, n) => {
      this.categoryMask = Li(this, s, !1, !this.j), b(this, n);
    }), this.g.attachEmptyPacketListener("category_mask", (s) => {
      this.categoryMask = void 0, b(this, s);
    })), R(e, "quality_scores"), C(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (s, n) => {
      this.qualityScores = s, b(this, n);
    }), this.g.attachEmptyPacketListener("quality_scores", (s) => {
      this.categoryMask = void 0, b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Mt.prototype.getLabels = Mt.prototype.Da, Mt.prototype.segmentForVideo = Mt.prototype.La, Mt.prototype.segment = Mt.prototype.segment, Mt.prototype.setOptions = Mt.prototype.o, Mt.createFromModelPath = function(e, t) {
  return B(Mt, e, { baseOptions: { modelAssetPath: t } });
}, Mt.createFromModelBuffer = function(e, t) {
  return B(Mt, e, { baseOptions: { modelAssetBuffer: t } });
}, Mt.createFromOptions = function(e, t) {
  return B(Mt, e, t);
};
var vr = class {
  constructor(e, t, i) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = i;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach((i) => {
      i.close();
    }), (t = this.categoryMask) == null || t.close();
  }
};
vr.prototype.close = vr.prototype.close;
var re = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new fo(), this.u = new V1(), v(this.h, 0, 3, this.u), v(e = this.h, 0, 1, t = new K());
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  segment(e, t, i, s) {
    const n = typeof i != "function" ? i : {};
    if (this.j = typeof i == "function" ? i : s, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, i = this.C + 1, s = new j1(), t.keypoint && t.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (t.keypoint) {
      var r = new or();
      Ie(r, 3, cs(!0), !1), Ie(r, 1, ts(t.keypoint.x), 0), Ie(r, 2, ts(t.keypoint.y), 0), is(s, 1, br, r);
    } else {
      if (!t.scribble) throw Error("Must provide either a keypoint or a scribble.");
      {
        const a = new E3();
        for (r of t.scribble) Ie(t = new or(), 3, cs(!0), !1), Ie(t, 1, ts(r.x), 0), Ie(t, 2, ts(r.y), 0), jr(a, 1, or, t);
        is(s, 2, br, a);
      }
    }
    this.g.addProtoToStream(s.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", i), se(this, e, n);
    t: {
      try {
        const a = new vr(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var o = a;
          break t;
        }
        this.j(a);
      } finally {
        Cn(this);
      }
      o = void 0;
    }
    return o;
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "roi_in"), Y(e, "norm_rect_in");
    const t = new Ot();
    fe(t, W1, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), V(i, "IMAGE:image_in"), V(i, "ROI:roi_in"), V(i, "NORM_RECT:norm_rect_in"), i.o(t), qt(e, i), zn(this, e), this.outputConfidenceMasks && (R(e, "confidence_masks"), C(i, "CONFIDENCE_MASKS:confidence_masks"), Ci(this, "confidence_masks"), this.g.aa("confidence_masks", (s, n) => {
      this.confidenceMasks = s.map((r) => Li(this, r, !0, !this.j)), b(this, n);
    }), this.g.attachEmptyPacketListener("confidence_masks", (s) => {
      this.confidenceMasks = [], b(this, s);
    })), this.outputCategoryMask && (R(e, "category_mask"), C(i, "CATEGORY_MASK:category_mask"), Ci(this, "category_mask"), this.g.Z("category_mask", (s, n) => {
      this.categoryMask = Li(this, s, !1, !this.j), b(this, n);
    }), this.g.attachEmptyPacketListener("category_mask", (s) => {
      this.categoryMask = void 0, b(this, s);
    })), R(e, "quality_scores"), C(i, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (s, n) => {
      this.qualityScores = s, b(this, n);
    }), this.g.attachEmptyPacketListener("quality_scores", (s) => {
      this.categoryMask = void 0, b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
re.prototype.segment = re.prototype.segment, re.prototype.setOptions = re.prototype.o, re.createFromModelPath = function(e, t) {
  return B(re, e, { baseOptions: { modelAssetPath: t } });
}, re.createFromModelBuffer = function(e, t) {
  return B(re, e, { baseOptions: { modelAssetBuffer: t } });
}, re.createFromOptions = function(e, t) {
  return B(re, e, t);
};
var Ut = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, v(e = this.h = new q1(), 0, 1, t = new K());
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? P(this.h, 2, bs(e.displayNamesLocale)) : "displayNamesLocale" in e && P(this.h, 2), e.maxResults !== void 0 ? ke(this.h, 3, e.maxResults) : "maxResults" in e && P(this.h, 3), e.scoreThreshold !== void 0 ? A(this.h, 4, e.scoreThreshold) : "scoreThreshold" in e && P(this.h, 4), e.categoryAllowlist !== void 0 ? en(this.h, 5, e.categoryAllowlist) : "categoryAllowlist" in e && P(this.h, 5), e.categoryDenylist !== void 0 ? en(this.h, 6, e.categoryDenylist) : "categoryDenylist" in e && P(this.h, 6), this.l(e);
  }
  F(e, t) {
    return this.j = { detections: [] }, se(this, e, t), this.j;
  }
  G(e, t, i) {
    return this.j = { detections: [] }, me(this, e, i, t), this.j;
  }
  m() {
    var e = new Rt();
    Y(e, "input_frame_gpu"), Y(e, "norm_rect"), R(e, "detections");
    const t = new Ot();
    fe(t, F3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), V(i, "IMAGE:input_frame_gpu"), V(i, "NORM_RECT:norm_rect"), C(i, "DETECTIONS:detections"), i.o(t), qt(e, i), this.g.attachProtoVectorListener("detections", (s, n) => {
      for (const r of s) s = M1(r), this.j.detections.push(Y1(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("detections", (s) => {
      b(this, s);
    }), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Ut.prototype.detectForVideo = Ut.prototype.G, Ut.prototype.detect = Ut.prototype.F, Ut.prototype.setOptions = Ut.prototype.o, Ut.createFromModelPath = async function(e, t) {
  return B(Ut, e, { baseOptions: { modelAssetPath: t } });
}, Ut.createFromModelBuffer = function(e, t) {
  return B(Ut, e, { baseOptions: { modelAssetBuffer: t } });
}, Ut.createFromOptions = function(e, t) {
  return B(Ut, e, t);
};
var kr = class {
  constructor(e, t, i) {
    this.landmarks = e, this.worldLandmarks = t, this.segmentationMasks = i;
  }
  close() {
    var e;
    (e = this.segmentationMasks) == null || e.forEach((t) => {
      t.close();
    });
  }
};
function K0(e) {
  e.landmarks = [], e.worldLandmarks = [], e.segmentationMasks = void 0;
}
function Q0(e) {
  try {
    const t = new kr(e.landmarks, e.worldLandmarks, e.segmentationMasks);
    if (!e.u) return t;
    e.u(t);
  } finally {
    Cn(e);
  }
}
kr.prototype.close = kr.prototype.close;
var Tt = class extends It {
  constructor(e, t) {
    super(new ie(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, v(e = this.h = new H1(), 0, 1, t = new K()), this.A = new P1(), v(this.h, 0, 3, this.A), this.j = new R1(), v(this.h, 0, 2, this.j), ke(this.j, 4, 1), A(this.j, 2, 0.5), A(this.A, 2, 0.5), A(this.h, 4, 0.5);
  }
  get baseOptions() {
    return I(this.h, K, 1);
  }
  set baseOptions(e) {
    v(this.h, 0, 1, e);
  }
  o(e) {
    return "numPoses" in e && ke(this.j, 4, e.numPoses ?? 1), "minPoseDetectionConfidence" in e && A(this.j, 2, e.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && A(this.h, 4, e.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in e && A(this.A, 2, e.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in e && (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1), this.l(e);
  }
  F(e, t, i) {
    const s = typeof t != "function" ? t : {};
    return this.u = typeof t == "function" ? t : i, K0(this), se(this, e, s), Q0(this);
  }
  G(e, t, i, s) {
    const n = typeof i != "function" ? i : {};
    return this.u = typeof i == "function" ? i : s, K0(this), me(this, e, n, t), Q0(this);
  }
  m() {
    var e = new Rt();
    Y(e, "image_in"), Y(e, "norm_rect"), R(e, "normalized_landmarks"), R(e, "world_landmarks"), R(e, "segmentation_masks");
    const t = new Ot();
    fe(t, T3, this.h);
    const i = new At();
    Lt(i, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), V(i, "IMAGE:image_in"), V(i, "NORM_RECT:norm_rect"), C(i, "NORM_LANDMARKS:normalized_landmarks"), C(i, "WORLD_LANDMARKS:world_landmarks"), i.o(t), qt(e, i), zn(this, e), this.g.attachProtoVectorListener("normalized_landmarks", (s, n) => {
      this.landmarks = [];
      for (const r of s) s = Ms(r), this.landmarks.push(Tn(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (s) => {
      this.landmarks = [], b(this, s);
    }), this.g.attachProtoVectorListener("world_landmarks", (s, n) => {
      this.worldLandmarks = [];
      for (const r of s) s = Mi(r), this.worldLandmarks.push(ns(s));
      b(this, n);
    }), this.g.attachEmptyPacketListener("world_landmarks", (s) => {
      this.worldLandmarks = [], b(this, s);
    }), this.outputSegmentationMasks && (C(i, "SEGMENTATION_MASK:segmentation_masks"), Ci(this, "segmentation_masks"), this.g.aa("segmentation_masks", (s, n) => {
      this.segmentationMasks = s.map((r) => Li(this, r, !0, !this.u)), b(this, n);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (s) => {
      this.segmentationMasks = [], b(this, s);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Tt.prototype.detectForVideo = Tt.prototype.G, Tt.prototype.detect = Tt.prototype.F, Tt.prototype.setOptions = Tt.prototype.o, Tt.createFromModelPath = function(e, t) {
  return B(Tt, e, { baseOptions: { modelAssetPath: t } });
}, Tt.createFromModelBuffer = function(e, t) {
  return B(Tt, e, { baseOptions: { modelAssetBuffer: t } });
}, Tt.createFromOptions = function(e, t) {
  return B(Tt, e, t);
}, Tt.POSE_CONNECTIONS = c2;
const D3 = [
  127,
  34,
  139,
  11,
  0,
  37,
  232,
  231,
  120,
  72,
  37,
  39,
  128,
  121,
  47,
  232,
  121,
  128,
  104,
  69,
  67,
  175,
  171,
  148,
  118,
  50,
  101,
  73,
  39,
  40,
  9,
  151,
  108,
  48,
  115,
  131,
  194,
  204,
  211,
  74,
  40,
  185,
  80,
  42,
  183,
  40,
  92,
  186,
  230,
  229,
  118,
  202,
  212,
  214,
  83,
  18,
  17,
  76,
  61,
  146,
  160,
  29,
  30,
  56,
  157,
  173,
  106,
  204,
  194,
  135,
  214,
  192,
  203,
  165,
  98,
  21,
  71,
  68,
  51,
  45,
  4,
  144,
  24,
  23,
  77,
  146,
  91,
  205,
  50,
  187,
  201,
  200,
  18,
  91,
  106,
  182,
  90,
  91,
  181,
  85,
  84,
  17,
  206,
  203,
  36,
  148,
  171,
  140,
  92,
  40,
  39,
  193,
  189,
  244,
  159,
  158,
  28,
  247,
  246,
  161,
  236,
  3,
  196,
  54,
  68,
  104,
  193,
  168,
  8,
  117,
  228,
  31,
  189,
  193,
  55,
  98,
  97,
  99,
  126,
  47,
  100,
  166,
  79,
  218,
  155,
  154,
  26,
  209,
  49,
  131,
  135,
  136,
  150,
  47,
  126,
  217,
  223,
  52,
  53,
  45,
  51,
  134,
  211,
  170,
  140,
  67,
  69,
  108,
  43,
  106,
  91,
  230,
  119,
  120,
  226,
  130,
  247,
  63,
  53,
  52,
  238,
  20,
  242,
  46,
  70,
  156,
  78,
  62,
  96,
  46,
  53,
  63,
  143,
  34,
  227,
  123,
  117,
  111,
  44,
  125,
  19,
  236,
  134,
  51,
  216,
  206,
  205,
  154,
  153,
  22,
  39,
  37,
  167,
  200,
  201,
  208,
  36,
  142,
  100,
  57,
  212,
  202,
  20,
  60,
  99,
  28,
  158,
  157,
  35,
  226,
  113,
  160,
  159,
  27,
  204,
  202,
  210,
  113,
  225,
  46,
  43,
  202,
  204,
  62,
  76,
  77,
  137,
  123,
  116,
  41,
  38,
  72,
  203,
  129,
  142,
  64,
  98,
  240,
  49,
  102,
  64,
  41,
  73,
  74,
  212,
  216,
  207,
  42,
  74,
  184,
  169,
  170,
  211,
  170,
  149,
  176,
  105,
  66,
  69,
  122,
  6,
  168,
  123,
  147,
  187,
  96,
  77,
  90,
  65,
  55,
  107,
  89,
  90,
  180,
  101,
  100,
  120,
  63,
  105,
  104,
  93,
  137,
  227,
  15,
  86,
  85,
  129,
  102,
  49,
  14,
  87,
  86,
  55,
  8,
  9,
  100,
  47,
  121,
  145,
  23,
  22,
  88,
  89,
  179,
  6,
  122,
  196,
  88,
  95,
  96,
  138,
  172,
  136,
  215,
  58,
  172,
  115,
  48,
  219,
  42,
  80,
  81,
  195,
  3,
  51,
  43,
  146,
  61,
  171,
  175,
  199,
  81,
  82,
  38,
  53,
  46,
  225,
  144,
  163,
  110,
  52,
  65,
  66,
  229,
  228,
  117,
  34,
  127,
  234,
  107,
  108,
  69,
  109,
  108,
  151,
  48,
  64,
  235,
  62,
  78,
  191,
  129,
  209,
  126,
  111,
  35,
  143,
  117,
  123,
  50,
  222,
  65,
  52,
  19,
  125,
  141,
  221,
  55,
  65,
  3,
  195,
  197,
  25,
  7,
  33,
  220,
  237,
  44,
  70,
  71,
  139,
  122,
  193,
  245,
  247,
  130,
  33,
  71,
  21,
  162,
  170,
  169,
  150,
  188,
  174,
  196,
  216,
  186,
  92,
  2,
  97,
  167,
  141,
  125,
  241,
  164,
  167,
  37,
  72,
  38,
  12,
  38,
  82,
  13,
  63,
  68,
  71,
  226,
  35,
  111,
  101,
  50,
  205,
  206,
  92,
  165,
  209,
  198,
  217,
  165,
  167,
  97,
  220,
  115,
  218,
  133,
  112,
  243,
  239,
  238,
  241,
  214,
  135,
  169,
  190,
  173,
  133,
  171,
  208,
  32,
  125,
  44,
  237,
  86,
  87,
  178,
  85,
  86,
  179,
  84,
  85,
  180,
  83,
  84,
  181,
  201,
  83,
  182,
  137,
  93,
  132,
  76,
  62,
  183,
  61,
  76,
  184,
  57,
  61,
  185,
  212,
  57,
  186,
  214,
  207,
  187,
  34,
  143,
  156,
  79,
  239,
  237,
  123,
  137,
  177,
  44,
  1,
  4,
  201,
  194,
  32,
  64,
  102,
  129,
  213,
  215,
  138,
  59,
  166,
  219,
  242,
  99,
  97,
  2,
  94,
  141,
  75,
  59,
  235,
  24,
  110,
  228,
  25,
  130,
  226,
  23,
  24,
  229,
  22,
  23,
  230,
  26,
  22,
  231,
  112,
  26,
  232,
  189,
  190,
  243,
  221,
  56,
  190,
  28,
  56,
  221,
  27,
  28,
  222,
  29,
  27,
  223,
  30,
  29,
  224,
  247,
  30,
  225,
  238,
  79,
  20,
  166,
  59,
  75,
  60,
  75,
  240,
  147,
  177,
  215,
  20,
  79,
  166,
  187,
  147,
  213,
  112,
  233,
  244,
  233,
  128,
  245,
  128,
  114,
  188,
  114,
  217,
  174,
  131,
  115,
  220,
  217,
  198,
  236,
  198,
  131,
  134,
  177,
  132,
  58,
  143,
  35,
  124,
  110,
  163,
  7,
  228,
  110,
  25,
  356,
  389,
  368,
  11,
  302,
  267,
  452,
  350,
  349,
  302,
  303,
  269,
  357,
  343,
  277,
  452,
  453,
  357,
  333,
  332,
  297,
  175,
  152,
  377,
  347,
  348,
  330,
  303,
  304,
  270,
  9,
  336,
  337,
  278,
  279,
  360,
  418,
  262,
  431,
  304,
  408,
  409,
  310,
  415,
  407,
  270,
  409,
  410,
  450,
  348,
  347,
  422,
  430,
  434,
  313,
  314,
  17,
  306,
  307,
  375,
  387,
  388,
  260,
  286,
  414,
  398,
  335,
  406,
  418,
  364,
  367,
  416,
  423,
  358,
  327,
  251,
  284,
  298,
  281,
  5,
  4,
  373,
  374,
  253,
  307,
  320,
  321,
  425,
  427,
  411,
  421,
  313,
  18,
  321,
  405,
  406,
  320,
  404,
  405,
  315,
  16,
  17,
  426,
  425,
  266,
  377,
  400,
  369,
  322,
  391,
  269,
  417,
  465,
  464,
  386,
  257,
  258,
  466,
  260,
  388,
  456,
  399,
  419,
  284,
  332,
  333,
  417,
  285,
  8,
  346,
  340,
  261,
  413,
  441,
  285,
  327,
  460,
  328,
  355,
  371,
  329,
  392,
  439,
  438,
  382,
  341,
  256,
  429,
  420,
  360,
  364,
  394,
  379,
  277,
  343,
  437,
  443,
  444,
  283,
  275,
  440,
  363,
  431,
  262,
  369,
  297,
  338,
  337,
  273,
  375,
  321,
  450,
  451,
  349,
  446,
  342,
  467,
  293,
  334,
  282,
  458,
  461,
  462,
  276,
  353,
  383,
  308,
  324,
  325,
  276,
  300,
  293,
  372,
  345,
  447,
  352,
  345,
  340,
  274,
  1,
  19,
  456,
  248,
  281,
  436,
  427,
  425,
  381,
  256,
  252,
  269,
  391,
  393,
  200,
  199,
  428,
  266,
  330,
  329,
  287,
  273,
  422,
  250,
  462,
  328,
  258,
  286,
  384,
  265,
  353,
  342,
  387,
  259,
  257,
  424,
  431,
  430,
  342,
  353,
  276,
  273,
  335,
  424,
  292,
  325,
  307,
  366,
  447,
  345,
  271,
  303,
  302,
  423,
  266,
  371,
  294,
  455,
  460,
  279,
  278,
  294,
  271,
  272,
  304,
  432,
  434,
  427,
  272,
  407,
  408,
  394,
  430,
  431,
  395,
  369,
  400,
  334,
  333,
  299,
  351,
  417,
  168,
  352,
  280,
  411,
  325,
  319,
  320,
  295,
  296,
  336,
  319,
  403,
  404,
  330,
  348,
  349,
  293,
  298,
  333,
  323,
  454,
  447,
  15,
  16,
  315,
  358,
  429,
  279,
  14,
  15,
  316,
  285,
  336,
  9,
  329,
  349,
  350,
  374,
  380,
  252,
  318,
  402,
  403,
  6,
  197,
  419,
  318,
  319,
  325,
  367,
  364,
  365,
  435,
  367,
  397,
  344,
  438,
  439,
  272,
  271,
  311,
  195,
  5,
  281,
  273,
  287,
  291,
  396,
  428,
  199,
  311,
  271,
  268,
  283,
  444,
  445,
  373,
  254,
  339,
  282,
  334,
  296,
  449,
  347,
  346,
  264,
  447,
  454,
  336,
  296,
  299,
  338,
  10,
  151,
  278,
  439,
  455,
  292,
  407,
  415,
  358,
  371,
  355,
  340,
  345,
  372,
  346,
  347,
  280,
  442,
  443,
  282,
  19,
  94,
  370,
  441,
  442,
  295,
  248,
  419,
  197,
  263,
  255,
  359,
  440,
  275,
  274,
  300,
  383,
  368,
  351,
  412,
  465,
  263,
  467,
  466,
  301,
  368,
  389,
  395,
  378,
  379,
  412,
  351,
  419,
  436,
  426,
  322,
  2,
  164,
  393,
  370,
  462,
  461,
  164,
  0,
  267,
  302,
  11,
  12,
  268,
  12,
  13,
  293,
  300,
  301,
  446,
  261,
  340,
  330,
  266,
  425,
  426,
  423,
  391,
  429,
  355,
  437,
  391,
  327,
  326,
  440,
  457,
  438,
  341,
  382,
  362,
  459,
  457,
  461,
  434,
  430,
  394,
  414,
  463,
  362,
  396,
  369,
  262,
  354,
  461,
  457,
  316,
  403,
  402,
  315,
  404,
  403,
  314,
  405,
  404,
  313,
  406,
  405,
  421,
  418,
  406,
  366,
  401,
  361,
  306,
  408,
  407,
  291,
  409,
  408,
  287,
  410,
  409,
  432,
  436,
  410,
  434,
  416,
  411,
  264,
  368,
  383,
  309,
  438,
  457,
  352,
  376,
  401,
  274,
  275,
  4,
  421,
  428,
  262,
  294,
  327,
  358,
  433,
  416,
  367,
  289,
  455,
  439,
  462,
  370,
  326,
  2,
  326,
  370,
  305,
  460,
  455,
  254,
  449,
  448,
  255,
  261,
  446,
  253,
  450,
  449,
  252,
  451,
  450,
  256,
  452,
  451,
  341,
  453,
  452,
  413,
  464,
  463,
  441,
  413,
  414,
  258,
  442,
  441,
  257,
  443,
  442,
  259,
  444,
  443,
  260,
  445,
  444,
  467,
  342,
  445,
  459,
  458,
  250,
  289,
  392,
  290,
  290,
  328,
  460,
  376,
  433,
  435,
  250,
  290,
  392,
  411,
  416,
  433,
  341,
  463,
  464,
  453,
  464,
  465,
  357,
  465,
  412,
  343,
  412,
  399,
  360,
  363,
  440,
  437,
  399,
  456,
  420,
  456,
  363,
  401,
  435,
  288,
  372,
  383,
  353,
  339,
  255,
  249,
  448,
  261,
  255,
  133,
  243,
  190,
  133,
  155,
  112,
  33,
  246,
  247,
  33,
  130,
  25,
  398,
  384,
  286,
  362,
  398,
  414,
  362,
  463,
  341,
  263,
  359,
  467,
  263,
  249,
  255,
  466,
  467,
  260,
  75,
  60,
  166,
  238,
  239,
  79,
  162,
  127,
  139,
  72,
  11,
  37,
  121,
  232,
  120,
  73,
  72,
  39,
  114,
  128,
  47,
  233,
  232,
  128,
  103,
  104,
  67,
  152,
  175,
  148,
  119,
  118,
  101,
  74,
  73,
  40,
  107,
  9,
  108,
  49,
  48,
  131,
  32,
  194,
  211,
  184,
  74,
  185,
  191,
  80,
  183,
  185,
  40,
  186,
  119,
  230,
  118,
  210,
  202,
  214,
  84,
  83,
  17,
  77,
  76,
  146,
  161,
  160,
  30,
  190,
  56,
  173,
  182,
  106,
  194,
  138,
  135,
  192,
  129,
  203,
  98,
  54,
  21,
  68,
  5,
  51,
  4,
  145,
  144,
  23,
  90,
  77,
  91,
  207,
  205,
  187,
  83,
  201,
  18,
  181,
  91,
  182,
  180,
  90,
  181,
  16,
  85,
  17,
  205,
  206,
  36,
  176,
  148,
  140,
  165,
  92,
  39,
  245,
  193,
  244,
  27,
  159,
  28,
  30,
  247,
  161,
  174,
  236,
  196,
  103,
  54,
  104,
  55,
  193,
  8,
  111,
  117,
  31,
  221,
  189,
  55,
  240,
  98,
  99,
  142,
  126,
  100,
  219,
  166,
  218,
  112,
  155,
  26,
  198,
  209,
  131,
  169,
  135,
  150,
  114,
  47,
  217,
  224,
  223,
  53,
  220,
  45,
  134,
  32,
  211,
  140,
  109,
  67,
  108,
  146,
  43,
  91,
  231,
  230,
  120,
  113,
  226,
  247,
  105,
  63,
  52,
  241,
  238,
  242,
  124,
  46,
  156,
  95,
  78,
  96,
  70,
  46,
  63,
  116,
  143,
  227,
  116,
  123,
  111,
  1,
  44,
  19,
  3,
  236,
  51,
  207,
  216,
  205,
  26,
  154,
  22,
  165,
  39,
  167,
  199,
  200,
  208,
  101,
  36,
  100,
  43,
  57,
  202,
  242,
  20,
  99,
  56,
  28,
  157,
  124,
  35,
  113,
  29,
  160,
  27,
  211,
  204,
  210,
  124,
  113,
  46,
  106,
  43,
  204,
  96,
  62,
  77,
  227,
  137,
  116,
  73,
  41,
  72,
  36,
  203,
  142,
  235,
  64,
  240,
  48,
  49,
  64,
  42,
  41,
  74,
  214,
  212,
  207,
  183,
  42,
  184,
  210,
  169,
  211,
  140,
  170,
  176,
  104,
  105,
  69,
  193,
  122,
  168,
  50,
  123,
  187,
  89,
  96,
  90,
  66,
  65,
  107,
  179,
  89,
  180,
  119,
  101,
  120,
  68,
  63,
  104,
  234,
  93,
  227,
  16,
  15,
  85,
  209,
  129,
  49,
  15,
  14,
  86,
  107,
  55,
  9,
  120,
  100,
  121,
  153,
  145,
  22,
  178,
  88,
  179,
  197,
  6,
  196,
  89,
  88,
  96,
  135,
  138,
  136,
  138,
  215,
  172,
  218,
  115,
  219,
  41,
  42,
  81,
  5,
  195,
  51,
  57,
  43,
  61,
  208,
  171,
  199,
  41,
  81,
  38,
  224,
  53,
  225,
  24,
  144,
  110,
  105,
  52,
  66,
  118,
  229,
  117,
  227,
  34,
  234,
  66,
  107,
  69,
  10,
  109,
  151,
  219,
  48,
  235,
  183,
  62,
  191,
  142,
  129,
  126,
  116,
  111,
  143,
  118,
  117,
  50,
  223,
  222,
  52,
  94,
  19,
  141,
  222,
  221,
  65,
  196,
  3,
  197,
  45,
  220,
  44,
  156,
  70,
  139,
  188,
  122,
  245,
  139,
  71,
  162,
  149,
  170,
  150,
  122,
  188,
  196,
  206,
  216,
  92,
  164,
  2,
  167,
  242,
  141,
  241,
  0,
  164,
  37,
  11,
  72,
  12,
  12,
  38,
  13,
  70,
  63,
  71,
  31,
  226,
  111,
  36,
  101,
  205,
  203,
  206,
  165,
  126,
  209,
  217,
  98,
  165,
  97,
  237,
  220,
  218,
  237,
  239,
  241,
  210,
  214,
  169,
  140,
  171,
  32,
  241,
  125,
  237,
  179,
  86,
  178,
  180,
  85,
  179,
  181,
  84,
  180,
  182,
  83,
  181,
  194,
  201,
  182,
  177,
  137,
  132,
  184,
  76,
  183,
  185,
  61,
  184,
  186,
  57,
  185,
  216,
  212,
  186,
  192,
  214,
  187,
  139,
  34,
  156,
  218,
  79,
  237,
  147,
  123,
  177,
  45,
  44,
  4,
  208,
  201,
  32,
  98,
  64,
  129,
  192,
  213,
  138,
  235,
  59,
  219,
  141,
  242,
  97,
  97,
  2,
  141,
  240,
  75,
  235,
  229,
  24,
  228,
  31,
  25,
  226,
  230,
  23,
  229,
  231,
  22,
  230,
  232,
  26,
  231,
  233,
  112,
  232,
  244,
  189,
  243,
  189,
  221,
  190,
  222,
  28,
  221,
  223,
  27,
  222,
  224,
  29,
  223,
  225,
  30,
  224,
  113,
  247,
  225,
  99,
  60,
  240,
  213,
  147,
  215,
  60,
  20,
  166,
  192,
  187,
  213,
  243,
  112,
  244,
  244,
  233,
  245,
  245,
  128,
  188,
  188,
  114,
  174,
  134,
  131,
  220,
  174,
  217,
  236,
  236,
  198,
  134,
  215,
  177,
  58,
  156,
  143,
  124,
  25,
  110,
  7,
  31,
  228,
  25,
  264,
  356,
  368,
  0,
  11,
  267,
  451,
  452,
  349,
  267,
  302,
  269,
  350,
  357,
  277,
  350,
  452,
  357,
  299,
  333,
  297,
  396,
  175,
  377,
  280,
  347,
  330,
  269,
  303,
  270,
  151,
  9,
  337,
  344,
  278,
  360,
  424,
  418,
  431,
  270,
  304,
  409,
  272,
  310,
  407,
  322,
  270,
  410,
  449,
  450,
  347,
  432,
  422,
  434,
  18,
  313,
  17,
  291,
  306,
  375,
  259,
  387,
  260,
  424,
  335,
  418,
  434,
  364,
  416,
  391,
  423,
  327,
  301,
  251,
  298,
  275,
  281,
  4,
  254,
  373,
  253,
  375,
  307,
  321,
  280,
  425,
  411,
  200,
  421,
  18,
  335,
  321,
  406,
  321,
  320,
  405,
  314,
  315,
  17,
  423,
  426,
  266,
  396,
  377,
  369,
  270,
  322,
  269,
  413,
  417,
  464,
  385,
  386,
  258,
  248,
  456,
  419,
  298,
  284,
  333,
  168,
  417,
  8,
  448,
  346,
  261,
  417,
  413,
  285,
  326,
  327,
  328,
  277,
  355,
  329,
  309,
  392,
  438,
  381,
  382,
  256,
  279,
  429,
  360,
  365,
  364,
  379,
  355,
  277,
  437,
  282,
  443,
  283,
  281,
  275,
  363,
  395,
  431,
  369,
  299,
  297,
  337,
  335,
  273,
  321,
  348,
  450,
  349,
  359,
  446,
  467,
  283,
  293,
  282,
  250,
  458,
  462,
  300,
  276,
  383,
  292,
  308,
  325,
  283,
  276,
  293,
  264,
  372,
  447,
  346,
  352,
  340,
  354,
  274,
  19,
  363,
  456,
  281,
  426,
  436,
  425,
  380,
  381,
  252,
  267,
  269,
  393,
  421,
  200,
  428,
  371,
  266,
  329,
  432,
  287,
  422,
  290,
  250,
  328,
  385,
  258,
  384,
  446,
  265,
  342,
  386,
  387,
  257,
  422,
  424,
  430,
  445,
  342,
  276,
  422,
  273,
  424,
  306,
  292,
  307,
  352,
  366,
  345,
  268,
  271,
  302,
  358,
  423,
  371,
  327,
  294,
  460,
  331,
  279,
  294,
  303,
  271,
  304,
  436,
  432,
  427,
  304,
  272,
  408,
  395,
  394,
  431,
  378,
  395,
  400,
  296,
  334,
  299,
  6,
  351,
  168,
  376,
  352,
  411,
  307,
  325,
  320,
  285,
  295,
  336,
  320,
  319,
  404,
  329,
  330,
  349,
  334,
  293,
  333,
  366,
  323,
  447,
  316,
  15,
  315,
  331,
  358,
  279,
  317,
  14,
  316,
  8,
  285,
  9,
  277,
  329,
  350,
  253,
  374,
  252,
  319,
  318,
  403,
  351,
  6,
  419,
  324,
  318,
  325,
  397,
  367,
  365,
  288,
  435,
  397,
  278,
  344,
  439,
  310,
  272,
  311,
  248,
  195,
  281,
  375,
  273,
  291,
  175,
  396,
  199,
  312,
  311,
  268,
  276,
  283,
  445,
  390,
  373,
  339,
  295,
  282,
  296,
  448,
  449,
  346,
  356,
  264,
  454,
  337,
  336,
  299,
  337,
  338,
  151,
  294,
  278,
  455,
  308,
  292,
  415,
  429,
  358,
  355,
  265,
  340,
  372,
  352,
  346,
  280,
  295,
  442,
  282,
  354,
  19,
  370,
  285,
  441,
  295,
  195,
  248,
  197,
  457,
  440,
  274,
  301,
  300,
  368,
  417,
  351,
  465,
  251,
  301,
  389,
  394,
  395,
  379,
  399,
  412,
  419,
  410,
  436,
  322,
  326,
  2,
  393,
  354,
  370,
  461,
  393,
  164,
  267,
  268,
  302,
  12,
  312,
  268,
  13,
  298,
  293,
  301,
  265,
  446,
  340,
  280,
  330,
  425,
  322,
  426,
  391,
  420,
  429,
  437,
  393,
  391,
  326,
  344,
  440,
  438,
  458,
  459,
  461,
  364,
  434,
  394,
  428,
  396,
  262,
  274,
  354,
  457,
  317,
  316,
  402,
  316,
  315,
  403,
  315,
  314,
  404,
  314,
  313,
  405,
  313,
  421,
  406,
  323,
  366,
  361,
  292,
  306,
  407,
  306,
  291,
  408,
  291,
  287,
  409,
  287,
  432,
  410,
  427,
  434,
  411,
  372,
  264,
  383,
  459,
  309,
  457,
  366,
  352,
  401,
  1,
  274,
  4,
  418,
  421,
  262,
  331,
  294,
  358,
  435,
  433,
  367,
  392,
  289,
  439,
  328,
  462,
  326,
  94,
  2,
  370,
  289,
  305,
  455,
  339,
  254,
  448,
  359,
  255,
  446,
  254,
  253,
  449,
  253,
  252,
  450,
  252,
  256,
  451,
  256,
  341,
  452,
  414,
  413,
  463,
  286,
  441,
  414,
  286,
  258,
  441,
  258,
  257,
  442,
  257,
  259,
  443,
  259,
  260,
  444,
  260,
  467,
  445,
  309,
  459,
  250,
  305,
  289,
  290,
  305,
  290,
  460,
  401,
  376,
  435,
  309,
  250,
  392,
  376,
  411,
  433,
  453,
  341,
  464,
  357,
  453,
  465,
  343,
  357,
  412,
  437,
  343,
  399,
  344,
  360,
  440,
  420,
  437,
  456,
  360,
  420,
  363,
  361,
  401,
  288,
  265,
  372,
  353,
  390,
  339,
  249,
  339,
  448,
  255,
  255,
  339,
  448
], N3 = [
  0.499976992607117,
  0.652534008026123,
  0.500025987625122,
  0.547487020492554,
  0.499974012374878,
  0.602371990680695,
  0.482113003730774,
  0.471979022026062,
  0.500150978565216,
  0.527155995368958,
  0.499909996986389,
  0.498252987861633,
  0.499523013830185,
  0.40106201171875,
  0.289712011814117,
  0.380764007568359,
  0.499954998493195,
  0.312398016452789,
  0.499987006187439,
  0.269918978214264,
  0.500023007392883,
  0.107050001621246,
  0.500023007392883,
  0.666234016418457,
  0.5000159740448,
  0.679224014282227,
  0.500023007392883,
  0.692348003387451,
  0.499976992607117,
  0.695277988910675,
  0.499976992607117,
  0.70593398809433,
  0.499976992607117,
  0.719385027885437,
  0.499976992607117,
  0.737019002437592,
  0.499967992305756,
  0.781370997428894,
  0.499816000461578,
  0.562981009483337,
  0.473773002624512,
  0.573909997940063,
  0.104906998574734,
  0.254140973091125,
  0.365929991006851,
  0.409575998783112,
  0.338757991790771,
  0.41302502155304,
  0.311120003461838,
  0.409460008144379,
  0.274657994508743,
  0.389131009578705,
  0.393361985683441,
  0.403706014156342,
  0.345234006643295,
  0.344011008739471,
  0.370094001293182,
  0.346076011657715,
  0.319321990013123,
  0.347265005111694,
  0.297903001308441,
  0.353591024875641,
  0.24779200553894,
  0.410809993743896,
  0.396889001131058,
  0.842755019664764,
  0.280097991228104,
  0.375599980354309,
  0.106310002505779,
  0.399955987930298,
  0.2099249958992,
  0.391353011131287,
  0.355807989835739,
  0.534406006336212,
  0.471751004457474,
  0.65040397644043,
  0.474155008792877,
  0.680191993713379,
  0.439785003662109,
  0.657229006290436,
  0.414617002010345,
  0.66654098033905,
  0.450374007225037,
  0.680860996246338,
  0.428770989179611,
  0.682690978050232,
  0.374971002340317,
  0.727805018424988,
  0.486716985702515,
  0.547628998756409,
  0.485300987958908,
  0.527395009994507,
  0.257764995098114,
  0.314490020275116,
  0.401223003864288,
  0.455172002315521,
  0.429818987846375,
  0.548614978790283,
  0.421351999044418,
  0.533740997314453,
  0.276895999908447,
  0.532056987285614,
  0.483370006084442,
  0.499586999416351,
  0.33721199631691,
  0.282882988452911,
  0.296391993761063,
  0.293242990970612,
  0.169294998049736,
  0.193813979625702,
  0.447580009698868,
  0.302609980106354,
  0.392390012741089,
  0.353887975215912,
  0.354490011930466,
  0.696784019470215,
  0.067304998636246,
  0.730105042457581,
  0.442739009857178,
  0.572826027870178,
  0.457098007202148,
  0.584792017936707,
  0.381974011659622,
  0.694710969924927,
  0.392388999462128,
  0.694203019142151,
  0.277076005935669,
  0.271932005882263,
  0.422551989555359,
  0.563233017921448,
  0.385919004678726,
  0.281364023685455,
  0.383103013038635,
  0.255840003490448,
  0.331431001424789,
  0.119714021682739,
  0.229923993349075,
  0.232002973556519,
  0.364500999450684,
  0.189113974571228,
  0.229622006416321,
  0.299540996551514,
  0.173287004232407,
  0.278747975826263,
  0.472878992557526,
  0.666198015213013,
  0.446828007698059,
  0.668527007102966,
  0.422762006521225,
  0.673889994621277,
  0.445307999849319,
  0.580065965652466,
  0.388103008270264,
  0.693961024284363,
  0.403039008378983,
  0.706539988517761,
  0.403629004955292,
  0.693953037261963,
  0.460041999816895,
  0.557139039039612,
  0.431158006191254,
  0.692366003990173,
  0.452181994915009,
  0.692366003990173,
  0.475387006998062,
  0.692366003990173,
  0.465828001499176,
  0.779190003871918,
  0.472328990697861,
  0.736225962638855,
  0.473087012767792,
  0.717857003211975,
  0.473122000694275,
  0.704625964164734,
  0.473033010959625,
  0.695277988910675,
  0.427942007780075,
  0.695277988910675,
  0.426479011774063,
  0.703539967536926,
  0.423162013292313,
  0.711845993995667,
  0.4183090031147,
  0.720062971115112,
  0.390094995498657,
  0.639572978019714,
  0.013953999616206,
  0.560034036636353,
  0.499913990497589,
  0.58014702796936,
  0.413199990987778,
  0.69539999961853,
  0.409626007080078,
  0.701822996139526,
  0.468080013990402,
  0.601534962654114,
  0.422728985548019,
  0.585985004901886,
  0.463079988956451,
  0.593783974647522,
  0.37211999297142,
  0.47341400384903,
  0.334562003612518,
  0.496073007583618,
  0.411671012639999,
  0.546965003013611,
  0.242175996303558,
  0.14767599105835,
  0.290776997804642,
  0.201445996761322,
  0.327338010072708,
  0.256527006626129,
  0.399509996175766,
  0.748921036720276,
  0.441727995872498,
  0.261676013469696,
  0.429764986038208,
  0.187834024429321,
  0.412198007106781,
  0.108901023864746,
  0.288955003023148,
  0.398952007293701,
  0.218936994671822,
  0.435410976409912,
  0.41278201341629,
  0.398970007896423,
  0.257135003805161,
  0.355440020561218,
  0.427684992551804,
  0.437960982322693,
  0.448339998722076,
  0.536936044692993,
  0.178560003638268,
  0.45755398273468,
  0.247308000922203,
  0.457193970680237,
  0.286267012357712,
  0.467674970626831,
  0.332827985286713,
  0.460712015628815,
  0.368755996227264,
  0.447206974029541,
  0.398963987827301,
  0.432654976844788,
  0.476410001516342,
  0.405806005001068,
  0.189241006970406,
  0.523923993110657,
  0.228962004184723,
  0.348950982093811,
  0.490725994110107,
  0.562400996685028,
  0.404670000076294,
  0.485132992267609,
  0.019469000399113,
  0.401564002037048,
  0.426243007183075,
  0.420431017875671,
  0.396993011236191,
  0.548797011375427,
  0.266469985246658,
  0.376977026462555,
  0.439121007919312,
  0.51895797252655,
  0.032313998788595,
  0.644356966018677,
  0.419054001569748,
  0.387154996395111,
  0.462783008813858,
  0.505746960639954,
  0.238978996872902,
  0.779744982719421,
  0.198220998048782,
  0.831938028335571,
  0.107550002634525,
  0.540755033493042,
  0.183610007166862,
  0.740257024765015,
  0.134409993886948,
  0.333683013916016,
  0.385764002799988,
  0.883153975009918,
  0.490967005491257,
  0.579378008842468,
  0.382384985685349,
  0.508572995662689,
  0.174399003386497,
  0.397670984268188,
  0.318785011768341,
  0.39623498916626,
  0.343364000320435,
  0.400596976280212,
  0.396100014448166,
  0.710216999053955,
  0.187885001301765,
  0.588537991046906,
  0.430987000465393,
  0.944064974784851,
  0.318993002176285,
  0.898285031318665,
  0.266247987747192,
  0.869701027870178,
  0.500023007392883,
  0.190576016902924,
  0.499976992607117,
  0.954452991485596,
  0.366169989109039,
  0.398822009563446,
  0.393207013607025,
  0.39553701877594,
  0.410373002290726,
  0.391080021858215,
  0.194993004202843,
  0.342101991176605,
  0.388664990663528,
  0.362284004688263,
  0.365961998701096,
  0.355970978736877,
  0.343364000320435,
  0.355356991291046,
  0.318785011768341,
  0.35834002494812,
  0.301414996385574,
  0.363156020641327,
  0.058132998645306,
  0.319076001644135,
  0.301414996385574,
  0.387449026107788,
  0.499987989664078,
  0.618434011936188,
  0.415838003158569,
  0.624195992946625,
  0.445681989192963,
  0.566076993942261,
  0.465844005346298,
  0.620640993118286,
  0.49992299079895,
  0.351523995399475,
  0.288718998432159,
  0.819945991039276,
  0.335278987884521,
  0.852819979190826,
  0.440512001514435,
  0.902418971061707,
  0.128294005990028,
  0.791940987110138,
  0.408771991729736,
  0.373893976211548,
  0.455606997013092,
  0.451801002025604,
  0.499877005815506,
  0.908990025520325,
  0.375436991453171,
  0.924192011356354,
  0.11421000212431,
  0.615022003650665,
  0.448662012815475,
  0.695277988910675,
  0.4480200111866,
  0.704632043838501,
  0.447111994028091,
  0.715808033943176,
  0.444831997156143,
  0.730794012546539,
  0.430011987686157,
  0.766808986663818,
  0.406787008047104,
  0.685672998428345,
  0.400738000869751,
  0.681069016456604,
  0.392399996519089,
  0.677703022956848,
  0.367855995893478,
  0.663918972015381,
  0.247923001646996,
  0.601333022117615,
  0.452769994735718,
  0.420849978923798,
  0.43639200925827,
  0.359887003898621,
  0.416164010763168,
  0.368713974952698,
  0.413385987281799,
  0.692366003990173,
  0.228018000721931,
  0.683571994304657,
  0.468268007040024,
  0.352671027183533,
  0.411361992359161,
  0.804327011108398,
  0.499989002943039,
  0.469825029373169,
  0.479153990745544,
  0.442654013633728,
  0.499974012374878,
  0.439637005329132,
  0.432112008333206,
  0.493588984012604,
  0.499886006116867,
  0.866917014122009,
  0.49991300702095,
  0.821729004383087,
  0.456548988819122,
  0.819200992584229,
  0.344549000263214,
  0.745438992977142,
  0.37890899181366,
  0.574010014533997,
  0.374292999505997,
  0.780184984207153,
  0.319687992334366,
  0.570737957954407,
  0.357154995203018,
  0.604269981384277,
  0.295284003019333,
  0.621580958366394,
  0.447750002145767,
  0.862477004528046,
  0.410986006259918,
  0.508723020553589,
  0.31395098567009,
  0.775308012962341,
  0.354128003120422,
  0.812552988529205,
  0.324548006057739,
  0.703992962837219,
  0.189096003770828,
  0.646299958229065,
  0.279776990413666,
  0.71465802192688,
  0.1338230073452,
  0.682700991630554,
  0.336768001317978,
  0.644733011722565,
  0.429883986711502,
  0.466521978378296,
  0.455527991056442,
  0.548622965812683,
  0.437114000320435,
  0.558896005153656,
  0.467287987470627,
  0.529924988746643,
  0.414712011814117,
  0.335219979286194,
  0.37704598903656,
  0.322777986526489,
  0.344107985496521,
  0.320150971412659,
  0.312875986099243,
  0.32233202457428,
  0.283526003360748,
  0.333190023899078,
  0.241245999932289,
  0.382785975933075,
  0.102986000478268,
  0.468762993812561,
  0.267612010240555,
  0.424560010433197,
  0.297879010438919,
  0.433175981044769,
  0.333433985710144,
  0.433878004550934,
  0.366427004337311,
  0.426115989685059,
  0.396012008190155,
  0.416696012020111,
  0.420121014118195,
  0.41022801399231,
  0.007561000064015,
  0.480777025222778,
  0.432949006557465,
  0.569517970085144,
  0.458638995885849,
  0.479089021682739,
  0.473466008901596,
  0.545744001865387,
  0.476087987422943,
  0.563830018043518,
  0.468472003936768,
  0.555056989192963,
  0.433990985155106,
  0.582361996173859,
  0.483518004417419,
  0.562983989715576,
  0.482482999563217,
  0.57784903049469,
  0.42645001411438,
  0.389798998832703,
  0.438998997211456,
  0.39649498462677,
  0.450067013502121,
  0.400434017181396,
  0.289712011814117,
  0.368252992630005,
  0.276670008897781,
  0.363372981548309,
  0.517862021923065,
  0.471948027610779,
  0.710287988185883,
  0.380764007568359,
  0.526226997375488,
  0.573909997940063,
  0.895093023777008,
  0.254140973091125,
  0.634069979190826,
  0.409575998783112,
  0.661242008209229,
  0.41302502155304,
  0.688880026340485,
  0.409460008144379,
  0.725341975688934,
  0.389131009578705,
  0.606630027294159,
  0.40370500087738,
  0.654766023159027,
  0.344011008739471,
  0.629905998706818,
  0.346076011657715,
  0.680678009986877,
  0.347265005111694,
  0.702096998691559,
  0.353591024875641,
  0.75221198797226,
  0.410804986953735,
  0.602918028831482,
  0.842862963676453,
  0.719901978969574,
  0.375599980354309,
  0.893692970275879,
  0.399959981441498,
  0.790081977844238,
  0.391354024410248,
  0.643998026847839,
  0.534487962722778,
  0.528249025344849,
  0.65040397644043,
  0.525849997997284,
  0.680191040039062,
  0.560214996337891,
  0.657229006290436,
  0.585384011268616,
  0.66654098033905,
  0.549625992774963,
  0.680860996246338,
  0.57122802734375,
  0.682691991329193,
  0.624852001667023,
  0.72809898853302,
  0.513050019741058,
  0.547281980514526,
  0.51509702205658,
  0.527251958847046,
  0.742246985435486,
  0.314507007598877,
  0.598631024360657,
  0.454979002475739,
  0.570338010787964,
  0.548575043678284,
  0.578631997108459,
  0.533622980117798,
  0.723087012767792,
  0.532054007053375,
  0.516445994377136,
  0.499638974666595,
  0.662801027297974,
  0.282917976379395,
  0.70362401008606,
  0.293271005153656,
  0.830704987049103,
  0.193813979625702,
  0.552385985851288,
  0.302568018436432,
  0.607609987258911,
  0.353887975215912,
  0.645429015159607,
  0.696707010269165,
  0.932694971561432,
  0.730105042457581,
  0.557260990142822,
  0.572826027870178,
  0.542901992797852,
  0.584792017936707,
  0.6180260181427,
  0.694710969924927,
  0.607590973377228,
  0.694203019142151,
  0.722943007946014,
  0.271963000297546,
  0.577413976192474,
  0.563166975975037,
  0.614082992076874,
  0.281386971473694,
  0.616907000541687,
  0.255886018276215,
  0.668509006500244,
  0.119913995265961,
  0.770092010498047,
  0.232020974159241,
  0.635536015033722,
  0.189248979091644,
  0.77039098739624,
  0.299556016921997,
  0.826722025871277,
  0.278755009174347,
  0.527121007442474,
  0.666198015213013,
  0.553171992301941,
  0.668527007102966,
  0.577238023281097,
  0.673889994621277,
  0.554691970348358,
  0.580065965652466,
  0.611896991729736,
  0.693961024284363,
  0.59696102142334,
  0.706539988517761,
  0.596370995044708,
  0.693953037261963,
  0.539958000183105,
  0.557139039039612,
  0.568841993808746,
  0.692366003990173,
  0.547818005084991,
  0.692366003990173,
  0.52461302280426,
  0.692366003990173,
  0.534089982509613,
  0.779141008853912,
  0.527670979499817,
  0.736225962638855,
  0.526912987232208,
  0.717857003211975,
  0.526877999305725,
  0.704625964164734,
  0.526966989040375,
  0.695277988910675,
  0.572058022022247,
  0.695277988910675,
  0.573521018028259,
  0.703539967536926,
  0.57683801651001,
  0.711845993995667,
  0.581691026687622,
  0.720062971115112,
  0.609944999217987,
  0.639909982681274,
  0.986046016216278,
  0.560034036636353,
  0.5867999792099,
  0.69539999961853,
  0.590372025966644,
  0.701822996139526,
  0.531915009021759,
  0.601536989212036,
  0.577268004417419,
  0.585934996604919,
  0.536915004253387,
  0.593786001205444,
  0.627542972564697,
  0.473352015018463,
  0.665585994720459,
  0.495950996875763,
  0.588353991508484,
  0.546862006187439,
  0.757824003696442,
  0.14767599105835,
  0.709249973297119,
  0.201507985591888,
  0.672684013843536,
  0.256581008434296,
  0.600408971309662,
  0.74900496006012,
  0.55826598405838,
  0.261672019958496,
  0.570303976535797,
  0.187870979309082,
  0.588165998458862,
  0.109044015407562,
  0.711045026779175,
  0.398952007293701,
  0.781069993972778,
  0.435405015945435,
  0.587247014045715,
  0.398931980133057,
  0.742869973182678,
  0.355445981025696,
  0.572156012058258,
  0.437651991844177,
  0.55186802148819,
  0.536570012569427,
  0.821442008018494,
  0.457556009292603,
  0.752701997756958,
  0.457181990146637,
  0.71375697851181,
  0.467626988887787,
  0.66711300611496,
  0.460672974586487,
  0.631101012229919,
  0.447153985500336,
  0.6008620262146,
  0.432473003864288,
  0.523481011390686,
  0.405627012252808,
  0.810747981071472,
  0.523926019668579,
  0.771045982837677,
  0.348959028720856,
  0.509127020835876,
  0.562718033790588,
  0.595292985439301,
  0.485023975372314,
  0.980530977249146,
  0.401564002037048,
  0.573499977588654,
  0.420000016689301,
  0.602994978427887,
  0.548687994480133,
  0.733529984951019,
  0.376977026462555,
  0.560611009597778,
  0.519016981124878,
  0.967685997486115,
  0.644356966018677,
  0.580985009670258,
  0.387160003185272,
  0.537728011608124,
  0.505385041236877,
  0.760966002941132,
  0.779752969741821,
  0.801778972148895,
  0.831938028335571,
  0.892440974712372,
  0.54076099395752,
  0.816350996494293,
  0.740260004997253,
  0.865594983100891,
  0.333687007427216,
  0.614073991775513,
  0.883246004581451,
  0.508952975273132,
  0.579437971115112,
  0.617941975593567,
  0.508316040039062,
  0.825608015060425,
  0.397674977779388,
  0.681214988231659,
  0.39623498916626,
  0.656635999679565,
  0.400596976280212,
  0.603900015354156,
  0.710216999053955,
  0.81208598613739,
  0.588539004325867,
  0.56801301240921,
  0.944564998149872,
  0.681007981300354,
  0.898285031318665,
  0.733752012252808,
  0.869701027870178,
  0.633830010890961,
  0.398822009563446,
  0.606792986392975,
  0.39553701877594,
  0.589659988880157,
  0.391062021255493,
  0.805015981197357,
  0.342108011245728,
  0.611334979534149,
  0.362284004688263,
  0.634037971496582,
  0.355970978736877,
  0.656635999679565,
  0.355356991291046,
  0.681214988231659,
  0.35834002494812,
  0.698584973812103,
  0.363156020641327,
  0.941866993904114,
  0.319076001644135,
  0.698584973812103,
  0.387449026107788,
  0.584177017211914,
  0.624107003211975,
  0.554318010807037,
  0.566076993942261,
  0.534153997898102,
  0.62064003944397,
  0.711217999458313,
  0.819975018501282,
  0.664629995822906,
  0.852871000766754,
  0.559099972248077,
  0.902631998062134,
  0.871706008911133,
  0.791940987110138,
  0.591234028339386,
  0.373893976211548,
  0.544341027736664,
  0.451583981513977,
  0.624562978744507,
  0.924192011356354,
  0.88577002286911,
  0.615028977394104,
  0.551338016986847,
  0.695277988910675,
  0.551980018615723,
  0.704632043838501,
  0.552887976169586,
  0.715808033943176,
  0.555167973041534,
  0.730794012546539,
  0.569944024085999,
  0.767035007476807,
  0.593203008174896,
  0.685675978660583,
  0.599261999130249,
  0.681069016456604,
  0.607599973678589,
  0.677703022956848,
  0.631937980651855,
  0.663500010967255,
  0.752032995223999,
  0.601315021514893,
  0.547226011753082,
  0.420395016670227,
  0.563543975353241,
  0.359827995300293,
  0.583841025829315,
  0.368713974952698,
  0.586614012718201,
  0.692366003990173,
  0.771915018558502,
  0.683578014373779,
  0.531597018241882,
  0.352482974529266,
  0.588370978832245,
  0.804440975189209,
  0.52079701423645,
  0.442565023899078,
  0.567984998226166,
  0.493479013442993,
  0.543282985687256,
  0.819254994392395,
  0.655317008495331,
  0.745514988899231,
  0.621008992195129,
  0.574018001556396,
  0.625559985637665,
  0.78031200170517,
  0.680198013782501,
  0.570719003677368,
  0.64276397228241,
  0.604337990283966,
  0.704662978649139,
  0.621529996395111,
  0.552012026309967,
  0.862591981887817,
  0.589071989059448,
  0.508637011051178,
  0.685944974422455,
  0.775357007980347,
  0.645735025405884,
  0.812640011310577,
  0.675342977046967,
  0.703978002071381,
  0.810858011245728,
  0.646304965019226,
  0.72012197971344,
  0.714666962623596,
  0.866151988506317,
  0.682704985141754,
  0.663187026977539,
  0.644596993923187,
  0.570082008838654,
  0.466325998306274,
  0.544561982154846,
  0.548375964164734,
  0.562758982181549,
  0.558784961700439,
  0.531987011432648,
  0.530140042304993,
  0.585271000862122,
  0.335177004337311,
  0.622952997684479,
  0.32277899980545,
  0.655896008014679,
  0.320163011550903,
  0.687132000923157,
  0.322345972061157,
  0.716481983661652,
  0.333200991153717,
  0.758756995201111,
  0.382786989212036,
  0.897013008594513,
  0.468769013881683,
  0.732392013072968,
  0.424547016620636,
  0.70211398601532,
  0.433162987232208,
  0.66652500629425,
  0.433866024017334,
  0.633504986763,
  0.426087975502014,
  0.603875994682312,
  0.416586995124817,
  0.579657971858978,
  0.409945011138916,
  0.992439985275269,
  0.480777025222778,
  0.567192018032074,
  0.569419980049133,
  0.54136598110199,
  0.478899002075195,
  0.526564002037048,
  0.546118021011353,
  0.523913025856018,
  0.563830018043518,
  0.531529009342194,
  0.555056989192963,
  0.566035985946655,
  0.582329034805298,
  0.51631098985672,
  0.563053965568542,
  0.5174720287323,
  0.577877044677734,
  0.573594987392426,
  0.389806985855103,
  0.560697972774506,
  0.395331978797913,
  0.549755990505219,
  0.399751007556915,
  0.710287988185883,
  0.368252992630005,
  0.723330020904541,
  0.363372981548309
], U3 = [
  -0.427241,
  -0.979854,
  0.583812,
  -0.578104,
  0.68588,
  0.591905,
  -0.293784,
  -0.568865,
  -0.408116,
  -0.474257,
  0.563291,
  -0.714371,
  0,
  -0.622772,
  -0.447873,
  0,
  -0.622772,
  -0.447873,
  0,
  0.711514,
  -0.880018,
  0,
  0.711514,
  -0.880018,
  0,
  -1.12454,
  0.718256,
  0,
  0.802081,
  0.768803,
  -0.413871,
  -0.856266,
  0.052824,
  -0.653233,
  0.777415,
  -9809e-6,
  0,
  1.12454,
  -7806e-6,
  0,
  1.12454,
  -7806e-6,
  0,
  -1.037446,
  0.174611,
  -0.41472,
  -0.128419,
  -0.697069,
  -0.631531,
  -0.1233,
  0.689078,
  0,
  -0.142447,
  0.99008,
  0,
  -0.14831,
  -0.900258,
  0,
  -0.14831,
  -0.900258,
  -0.745177,
  -0.070166,
  0.016616,
  0,
  1.051779,
  0.439108,
  0,
  -1.11891,
  0.448666,
  0,
  -0.737137,
  0.907762,
  0,
  -0.447793,
  -0.738626,
  0,
  -0.447793,
  -0.738626,
  0,
  1.007599,
  -0.504488,
  0,
  1.007599,
  -0.504488,
  0,
  0.395452,
  0.949682,
  0,
  0.278202,
  -0.99008,
  0,
  0.278202,
  -0.99008,
  -0.290548,
  0.66462,
  -0.828386,
  -0.346292,
  -0.393721,
  -0.529052,
  -0.350125,
  -0.66805,
  -0.214146,
  -0.645328,
  0.772188,
  0.35693,
  -0.541859,
  -0.670888,
  0.651402,
  -0.25634,
  -1.099364,
  0.670496,
  -0.169052,
  -0.609169,
  -0.438696,
  -0.35288,
  0.773118,
  0.703958,
  -0.43083,
  -0.938225,
  0.381487,
  -0.582996,
  0.691884,
  -0.427415,
  -0.371396,
  1.035449,
  -932e-5,
  -0.213777,
  -1.017567,
  0.156613,
  -0.598275,
  -0.483192,
  0.047629,
  -0.471177,
  0.254469,
  -0.761982,
  -0.638399,
  0.384395,
  0.65683,
  -0.775352,
  0.379282,
  -3192e-6,
  -0.609764,
  -0.098093,
  -0.387557,
  -0.356529,
  -0.140053,
  0.905778,
  -0.760271,
  -0.087939,
  0.3869,
  -0.208754,
  -0.150994,
  -0.87062,
  -0.247957,
  0.261982,
  -0.941755,
  -0.774461,
  0.396684,
  0.365276,
  -0.221809,
  -1.095245,
  0.422726,
  -0.367675,
  0.986257,
  0.404412,
  -0.362072,
  0.391409,
  0.865452,
  -0.341302,
  0.927689,
  -0.474775,
  -0.660345,
  0.314928,
  -0.419052,
  -0.479236,
  -0.415881,
  -0.276939,
  -0.313437,
  -0.727051,
  0.836046,
  -0.626449,
  -0.578855,
  0.383432,
  -0.185599,
  -0.429154,
  -0.689212,
  0,
  -0.806285,
  -0.153598,
  0,
  -0.806285,
  -0.153598,
  -0.18587,
  -0.780427,
  -0.168086,
  0.427241,
  -0.979854,
  0.583812,
  0.578104,
  0.68588,
  0.591905,
  0.293784,
  -0.568865,
  -0.408116,
  0.474257,
  0.563291,
  -0.714371,
  0.413871,
  -0.856266,
  0.052824,
  0.653233,
  0.777415,
  -9809e-6,
  0.41472,
  -0.128419,
  -0.697069,
  0.631531,
  -0.1233,
  0.689078,
  0.745177,
  -0.070166,
  0.016616,
  0.290548,
  0.66462,
  -0.828386,
  0.346292,
  -0.393721,
  -0.529052,
  0.350125,
  -0.66805,
  -0.214146,
  0.645328,
  0.772188,
  0.35693,
  0.541859,
  -0.670888,
  0.651402,
  0.25634,
  -1.099364,
  0.670496,
  0.169052,
  -0.609169,
  -0.438696,
  0.35288,
  0.773118,
  0.703958,
  0.43083,
  -0.938225,
  0.381487,
  0.582996,
  0.691884,
  -0.427415,
  0.371396,
  1.035449,
  -932e-5,
  0.213777,
  -1.017567,
  0.156613,
  0.598275,
  -0.483192,
  0.047629,
  0.471177,
  0.254469,
  -0.761982,
  0.638399,
  0.384395,
  0.65683,
  0.775352,
  0.379282,
  -3192e-6,
  0.609764,
  -0.098093,
  -0.387557,
  0.356529,
  -0.140053,
  0.905778,
  0.760271,
  -0.087939,
  0.3869,
  0.208754,
  -0.150994,
  -0.87062,
  0.247957,
  0.261982,
  -0.941755,
  0.774461,
  0.396684,
  0.365276,
  0.221809,
  -1.095245,
  0.422726,
  0.367675,
  0.986257,
  0.404412,
  0.362072,
  0.391409,
  0.865452,
  0.341302,
  0.927689,
  -0.474775,
  0.660345,
  0.314928,
  -0.419052,
  0.479236,
  -0.415881,
  -0.276939,
  0.313437,
  -0.727051,
  0.836046,
  0.626449,
  -0.578855,
  0.383432,
  0.185599,
  -0.429154,
  -0.689212,
  0.18587,
  -0.780427,
  -0.168086
], V3 = [
  18,
  50,
  51,
  18,
  51,
  29,
  50,
  15,
  44,
  50,
  44,
  51,
  51,
  44,
  3,
  51,
  3,
  31,
  29,
  51,
  31,
  29,
  31,
  6,
  20,
  49,
  52,
  20,
  52,
  46,
  49,
  16,
  45,
  49,
  45,
  52,
  52,
  45,
  1,
  52,
  1,
  34,
  46,
  52,
  34,
  46,
  34,
  11,
  14,
  22,
  53,
  14,
  53,
  42,
  22,
  8,
  36,
  22,
  36,
  53,
  53,
  36,
  0,
  53,
  0,
  39,
  42,
  53,
  39,
  42,
  39,
  10,
  11,
  34,
  54,
  11,
  54,
  41,
  34,
  1,
  38,
  34,
  38,
  54,
  54,
  38,
  9,
  54,
  9,
  21,
  41,
  54,
  21,
  41,
  21,
  12,
  16,
  48,
  55,
  16,
  55,
  45,
  48,
  17,
  28,
  48,
  28,
  55,
  55,
  28,
  9,
  55,
  9,
  38,
  45,
  55,
  38,
  45,
  38,
  1,
  3,
  40,
  56,
  3,
  56,
  31,
  40,
  11,
  41,
  40,
  41,
  56,
  56,
  41,
  12,
  56,
  12,
  26,
  31,
  56,
  26,
  31,
  26,
  6,
  15,
  47,
  57,
  15,
  57,
  44,
  47,
  20,
  46,
  47,
  46,
  57,
  57,
  46,
  11,
  57,
  11,
  40,
  44,
  57,
  40,
  44,
  40,
  3,
  2,
  33,
  58,
  2,
  58,
  32,
  33,
  10,
  43,
  33,
  43,
  58,
  58,
  43,
  20,
  58,
  20,
  47,
  32,
  58,
  47,
  32,
  47,
  15,
  0,
  36,
  59,
  0,
  59,
  35,
  36,
  8,
  23,
  36,
  23,
  59,
  59,
  23,
  17,
  59,
  17,
  48,
  35,
  59,
  48,
  35,
  48,
  16,
  10,
  39,
  60,
  10,
  60,
  43,
  39,
  0,
  35,
  39,
  35,
  60,
  60,
  35,
  16,
  60,
  16,
  49,
  43,
  60,
  49,
  43,
  49,
  20,
  4,
  37,
  61,
  4,
  61,
  24,
  37,
  2,
  32,
  37,
  32,
  61,
  61,
  32,
  15,
  61,
  15,
  50,
  24,
  61,
  50,
  24,
  50,
  18,
  14,
  42,
  64,
  14,
  64,
  62,
  42,
  10,
  33,
  42,
  33,
  64,
  62,
  64,
  37,
  62,
  37,
  4,
  64,
  33,
  2,
  64,
  2,
  37,
  19,
  30,
  94,
  19,
  94,
  93,
  93,
  94,
  87,
  93,
  87,
  71,
  94,
  74,
  68,
  94,
  68,
  87,
  30,
  7,
  74,
  30,
  74,
  94,
  73,
  89,
  95,
  73,
  95,
  92,
  92,
  95,
  88,
  92,
  88,
  72,
  95,
  77,
  66,
  95,
  66,
  88,
  89,
  70,
  77,
  89,
  77,
  95,
  14,
  85,
  96,
  14,
  96,
  22,
  22,
  96,
  79,
  22,
  79,
  8,
  96,
  82,
  65,
  96,
  65,
  79,
  85,
  69,
  82,
  85,
  82,
  96,
  70,
  84,
  97,
  70,
  97,
  77,
  77,
  97,
  81,
  77,
  81,
  66,
  97,
  21,
  9,
  97,
  9,
  81,
  84,
  13,
  21,
  84,
  21,
  97,
  72,
  88,
  98,
  72,
  98,
  91,
  91,
  98,
  28,
  91,
  28,
  17,
  98,
  81,
  9,
  98,
  9,
  28,
  88,
  66,
  81,
  88,
  81,
  98,
  68,
  74,
  99,
  68,
  99,
  83,
  83,
  99,
  84,
  83,
  84,
  70,
  99,
  27,
  13,
  99,
  13,
  84,
  74,
  7,
  27,
  74,
  27,
  99,
  71,
  87,
  100,
  71,
  100,
  90,
  90,
  100,
  89,
  90,
  89,
  73,
  100,
  83,
  70,
  100,
  70,
  89,
  87,
  68,
  83,
  87,
  83,
  100,
  67,
  75,
  101,
  67,
  101,
  76,
  76,
  101,
  86,
  76,
  86,
  69,
  101,
  90,
  73,
  101,
  73,
  86,
  75,
  71,
  90,
  75,
  90,
  101,
  65,
  78,
  102,
  65,
  102,
  79,
  79,
  102,
  23,
  79,
  23,
  8,
  102,
  91,
  17,
  102,
  17,
  23,
  78,
  72,
  91,
  78,
  91,
  102,
  69,
  86,
  103,
  69,
  103,
  82,
  82,
  103,
  78,
  82,
  78,
  65,
  103,
  92,
  72,
  103,
  72,
  78,
  86,
  73,
  92,
  86,
  92,
  103,
  5,
  25,
  104,
  5,
  104,
  80,
  80,
  104,
  75,
  80,
  75,
  67,
  104,
  93,
  71,
  104,
  71,
  75,
  25,
  19,
  93,
  25,
  93,
  104,
  14,
  63,
  105,
  14,
  105,
  85,
  85,
  105,
  76,
  85,
  76,
  69,
  63,
  5,
  80,
  63,
  80,
  105,
  105,
  80,
  67,
  105,
  67,
  76
], ta = {
  position: U3,
  index: V3
};
class W3 {
  constructor({ camera: t, renderer: i, scene: s }) {
    W(this, "faceLandmarker", null);
    W(this, "ready", !1);
    W(this, "faceGroup");
    W(this, "onLoad");
    W(this, "faceGeometry");
    W(this, "positionArray");
    W(this, "faceMesh");
    W(this, "anchors");
    W(this, "ratio");
    W(this, "halfH");
    W(this, "halfW");
    W(this, "facingMode", "user");
    W(this, "video");
    W(this, "canvas");
    W(this, "bgTexture");
    W(this, "width");
    W(this, "height");
    W(this, "videoRatio", 0);
    W(this, "upperLid", [247, 30, 29, 27, 28, 56, 414, 286, 258, 257, 259, 260, 467]);
    W(this, "learpLid", [246, 161, 160, 159, 158, 157, 398, 384, 385, 386, 387, 388, 466]);
    W(this, "tempTransform");
    W(this, "occlusion");
    const n = i.getSize(new Wt());
    this.width = n.x, this.height = n.y, this.ratio = this.width / this.height, this.halfH = Math.tan(T2.degToRad(t.fov + 3) / 2), this.halfW = this.halfH * this.ratio, console.log("FaceTracker constructor", t.fov), this.tempTransform = new Yi(), this.faceGroup = new Yi(), this.faceLandmarker = null, this.anchors = {
      head: new Yi(),
      leftEye: new Yi(),
      rightEye: new Yi()
    }, this.faceGroup.add(this.anchors.head), this.faceGroup.add(this.anchors.leftEye), this.faceGroup.add(this.anchors.rightEye), this.positionArray = new Float32Array(468 * 3);
    const r = new Kt(this.positionArray, 3);
    this.faceGeometry = new os(), this.faceGeometry.setAttribute("position", r), this.faceGeometry.setIndex(new Kt(new Uint16Array(D3), 1)), this.faceGeometry.setAttribute("uv", new Kt(new Float32Array(N3), 2));
    const o = new hr({ color: 16777215, wireframe: !0 });
    this.faceMesh = new Zo(this.faceGeometry, o), this.faceGroup.add(this.faceMesh);
    const a = new os(), h = new Float32Array(ta.position), c = new Uint16Array(ta.index);
    a.setAttribute("position", new Kt(h, 3)), a.setIndex(new Kt(c, 1));
    const u = new hr({ color: 16711680, colorWrite: !0 });
    this.occlusion = new Zo(a, u), this.occlusion.scale.setScalar(0.55), this.occlusion.position.set(0, 0.2, -0.35), this.anchors.head.add(this.occlusion), this.video = document.createElement("video"), this.video.style.position = "absolute", this.video.style.top = "0", this.video.style.left = "0", this.video.autoplay = !0, this.video.playsInline = !0, this.video.muted = !0, this.video.style.zIndex = "-100", document.body.appendChild(this.video), this.canvas = new OffscreenCanvas(this.width, this.height), this.bgTexture = new K2(this.canvas), this.bgTexture.colorSpace = Vt, s.background = this.bgTexture, this.onLoad = () => {
    }, this.init();
  }
  resize() {
  }
  async startCamera(t) {
    try {
      this.video.onloadedmetadata = () => {
        this.videoRatio = this.video.videoWidth / this.video.videoHeight;
      }, this.facingMode = t ? "user" : "environment";
      const i = await navigator.mediaDevices.getUserMedia({
        audio: !1,
        video: { facingMode: this.facingMode }
      });
      this.video && (this.video.srcObject = i);
    } catch (i) {
      console.error("Camera start error", i);
    }
  }
  async init() {
    try {
      const t = await xi.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      this.faceLandmarker = await j.createFromOptions(t, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
          delegate: "GPU"
        },
        outputFaceBlendshapes: !1,
        outputFacialTransformationMatrixes: !0,
        runningMode: "VIDEO",
        numFaces: 1
      }), console.log("VisionTask init done"), this.ready = !0, this.onLoad();
    } catch (t) {
      console.error("VisionTask init error", t);
    }
  }
  handleResults(t) {
    var a, h;
    if (!((a = t == null ? void 0 : t.faceLandmarks) != null && a.length)) return;
    const i = t.faceLandmarks[0], s = (h = t.facialTransformationMatrixes) == null ? void 0 : h[0], n = s.data, r = new Qt().set(
      n[0],
      n[4],
      n[8],
      0,
      n[1],
      n[5],
      n[9],
      0,
      n[2],
      n[6],
      n[10],
      0,
      0,
      0,
      0,
      1
    );
    this.tempTransform.matrix.copy(r), this.tempTransform.matrix.decompose(this.tempTransform.position, this.tempTransform.quaternion, this.tempTransform.scale);
    const o = (c) => new g(
      (c.x - 0.5) * 2 * this.halfW,
      -(c.y - 0.5) * 2 * this.halfH,
      -c.z * 0.5
    );
    if (s && i) {
      const c = o(i[93]).add(o(i[323])).multiplyScalar(0.5);
      this.anchors.head.position.copy(c), this.anchors.head.quaternion.setFromRotationMatrix(r), this.anchors.head.scale.copy(this.tempTransform.scale.multiplyScalar(0.5));
    }
    this.anchors.leftEye.position.copy(o(i[468])), this.anchors.leftEye.quaternion.setFromRotationMatrix(r), this.anchors.rightEye.position.copy(o(i[473])), this.anchors.rightEye.quaternion.setFromRotationMatrix(r);
    for (let c = 0; c < 468; c++) {
      const u = i[c];
      if (this.upperLid.includes(c)) {
        const l = this.learpLid[this.upperLid.indexOf(c)], d = new g(u.x, u.y, u.z);
        d.lerp(new g(i[l].x, i[l].y, i[l].z), 0.6), this.positionArray[c * 3] = (d.x - 0.5) * 2 * this.halfW, this.positionArray[c * 3 + 1] = -(d.y - 0.5) * 2 * this.halfH, this.positionArray[c * 3 + 2] = -d.z;
      } else
        this.positionArray[c * 3] = (u.x - 0.5) * 2 * this.halfW, this.positionArray[c * 3 + 1] = -(u.y - 0.5) * 2 * this.halfH, this.positionArray[c * 3 + 2] = -u.z;
    }
    this.faceGeometry.attributes.position.needsUpdate = !0;
  }
  renderBg() {
    const t = this.width / this.height;
    let i, s;
    t > this.videoRatio ? (i = this.width, s = this.width / this.videoRatio) : (s = this.height, i = this.height * this.videoRatio);
    const n = this.canvas.getContext("2d");
    n && (n.save(), this.facingMode === "user" && (n.scale(-1, 1), n.translate(-this.width, 0)), n.clearRect(0, 0, this.width, this.height), n.drawImage(this.video, (this.width - i) / 2, (this.height - s) / 2, i, s), n.restore(), this.bgTexture.needsUpdate = !0);
  }
  update() {
    if (this.videoRatio && this.renderBg(), !this.ready || !this.faceLandmarker) return;
    const t = performance.now(), i = this.faceLandmarker.detectForVideo(this.canvas, t);
    this.handleResults(i);
  }
  detect(t) {
    if (this.videoRatio && this.renderBg(), this.faceGroup.rotateY(0.01), !this.ready || !this.faceLandmarker || !t) return;
    const i = performance.now(), s = this.faceLandmarker.detectForVideo(t, i);
    this.handleResults(s);
  }
}
export {
  W3 as FaceTracker
};
