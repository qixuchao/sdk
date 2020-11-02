!(function () {
  'use strict';
  function a(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  function n(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function c(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = n),
      t
    );
  }
  function i(e, t) {
    var n,
      o = Object.keys(e);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        o.push.apply(o, n)),
      o
    );
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? i(Object(n), !0).forEach(function (t) {
            c(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : i(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function l(t) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function s(t, e) {
    return (s =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function d(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function t(r) {
    var s = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var t,
        e,
        n,
        o,
        i = l(r);
      return (
        (e = s
          ? ((t = l(this).constructor), Reflect.construct(i, arguments, t))
          : i.apply(this, arguments)),
        (n = this),
        !(o = e) || ('object' != typeof o && 'function' != typeof o) ? d(n) : o
      );
    };
  }
  function f(t) {
    return void 0 === t;
  }
  function h(t) {
    return 'function' == typeof t;
  }
  var r = 'M$P_M_C',
    p = 'M$P_UID',
    m = Object.prototype.toString;
  function g(t) {
    if (
      '[object Object]' ===
      (null == (e = t)
        ? void 0 === e
          ? '[object Undefined]'
          : '[object Null]'
        : m.call(e))
    ) {
      var e;
      if (null === Object.getPrototypeOf(t)) return 1;
      for (var n = t; null !== Object.getPrototypeOf(n); )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(t) === n;
    }
  }
  function v(t, e, n) {
    var o = document.getElementsByTagName('script')[0],
      i = document.createElement('script');
    (i.onload = function () {
      (i = i.onload = null), e && e();
    }),
      (i.onerror = function () {
        (i = i.onerror = null), n && n();
      }),
      (i.src = t),
      o.parentNode.insertBefore(i, o);
  }
  function e(t, e, n) {
    var o = 0 < arguments.length && void 0 !== t ? t : document.body,
      i = 1 < arguments.length && void 0 !== e ? e : 'div',
      r = 2 < arguments.length ? n : void 0,
      s = document.createElement(i);
    return (
      (s.id = r),
      (s.style.display = 'none'),
      (s.className = r),
      o.appendChild(s),
      s
    );
  }
  function y(t, e) {
    if (t)
      if (Array.isArray(t) || ((i = t) && void 0 !== i.length))
        for (var n = 0; n < t.length && (!e || !1 !== e(t[n], n)); n++);
      else if (g(t)) for (var o in t) if (e && !1 === e(t[o], o)) break;
    var i;
  }
  function w(t, e) {
    return Math.floor(t + Math.random() * e);
  }
  function b() {
    return Math.random().toString(36).toUpperCase();
  }
  function I(t, e, n) {
    var o = 0 < arguments.length && void 0 !== t ? t : '',
      i = 1 < arguments.length && void 0 !== e ? e : { REQUESTID: '' },
      r = !(2 < arguments.length && void 0 !== n) || n,
      s = {
        OS: O ? 1 : S ? 2 : '0',
        APP: window.location.hostname,
        CLIENTTYPE: 3,
        IP: '',
        TS: +new Date(),
        IMEI: (function () {
          var t = '';
          try {
            t = window.localStorage.getItem(p);
          } catch (t) {}
          return (
            t ||
              ((t = 'H'
                .concat(Math.floor(new Date() / 1e4), '-')
                .concat(b().slice(-6), '-')
                .concat(b().slice(-6), '-')
                .concat(b().slice(-4))),
              window.localStorage.setItem(p, t)),
            t
          );
        })()
      };
    return o.replace(/__(.*?)__/g, function (t) {
      var e,
        n = t.match(/__(.*)__/),
        o = s[n[1]] || i[n[1]];
      return void 0 === o
        ? ''
        : ((g((e = o)) || Array.isArray(e)) && (e = JSON.stringify(e)),
          r ? encodeURIComponent(e) : e);
    });
  }
  function T(t) {
    var e,
      n,
      o = [];
    for (var i in t)
      !f(t[i]) &&
        ((e = t), (n = i), Object.prototype.hasOwnProperty.call(e, n)) &&
        o.push(i + '=' + encodeURIComponent(t[i]));
    return o.join('&');
  }
  function k(t, e) {
    h(e) && (e = { callback: e });
    var n,
      o,
      i =
        e.callbackFnName ||
        ((n = ''),
        (o = (o = 'jsonp') || ''),
        (n = n || '') + '_' + Math.random().toString(36).slice(-6) + '_' + o);
    (e = e || {}),
      (window[i] = function (t) {
        e.callback && e.callback(t || {});
        try {
          delete window[i];
        } catch (t) {}
        window[i] = void 0;
      });
    var r = e.data || {};
    (r.v = Math.random().toString(36).slice(-6)), (r.jsonp = i), v(_(t, r));
  }
  var C = window.navigator.userAgent,
    O = (/(iPhone|iPod|Android|ios|mobile)/i.test(C), /Android|Linux/.test(C)),
    S = /\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(C),
    D =
      /(localhost|127\.0\.0\.1|([192,10]\.168\.\d{1,3}\.\d{1,3}))/.test(
        window.location.hostname
      ) || /_mp_debug_/.test(window.location.search),
    _ = function (t, e) {
      var n,
        o = /\?([^#]*)/,
        i = /#(.*)/,
        r = {},
        s = (t = t || '').match(o);
      return (
        s &&
          (r = (function (t, e) {
            var n,
              o,
              i = {};
            if (!(t || '').replace(/^\s+|\s+$/, '')) return {};
            if ((t = t.replace(/\S*\?/, '')))
              for (var r in (e && (t = t.toLocaleLowerCase()),
              (n = t.split('&'))))
                i[(o = n[r].split('='))[0]] = decodeURIComponent(o[1]);
            return i;
          })(s[0])),
        (r = function () {
          var t,
            e,
            n = arguments,
            o = 1,
            i = n.length,
            r = n[0];
          for (1 === i && ((o = 0), (r = this)); o < i; o++)
            if ((t = n[o])) for (e in t) r[e] = t[e];
          return r;
        }.call(r, r, e)),
        (n = '?' + T(r)),
        o.test(t)
          ? (t = t.replace(o, n))
          : i.test(t)
          ? (t = t.replace(i, n + '#' + t.match(i)[1]))
          : (t += n),
        t
      );
    },
    E = (function () {
      function t() {
        a(this, t), (this._events = {});
      }
      return (
        n(t, [
          {
            key: 'on',
            value: function (t, e) {
              return (this._events[t] = this._events[t] || []).push(e), this;
            }
          },
          { key: 'off', value: function () {} },
          {
            key: 'once',
            value: function (t) {
              this.on(t, function () {});
            }
          },
          {
            key: 'trigger',
            value: function (t, e) {
              var n = this;
              y(this._events[t], function (t) {
                h(t) && t.call(n, e);
              });
            }
          }
        ]),
        t
      );
    })();
  var M,
    A,
    P,
    j = function (t, i) {
      'string' == typeof t && (t = [t]),
        y(t, function (t) {
          return (
            (n = i),
            void (
              '' !== (e = t) &&
              (((o = new Image()).onload = function () {
                o = o.onload = null;
              }),
              (o.src = I(e, n)))
            )
          );
          var e, n, o;
        });
    },
    x = function () {
      if (D)
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
    },
    N = (function () {
      function l() {
        var o = this;
        a(this, l),
          c(this, 'proxyComplete', function (n) {
            var c = [],
              u = !1;
            return function (t) {
              var r,
                e,
                s = o.slotMap[n],
                a = [];
              try {
                a = window.GDT.getPosData(n).data;
              } catch (t) {}
              s &&
                1 === s.status &&
                s.fns &&
                (Array.isArray(t)
                  ? (t.forEach(function (t, e) {
                      var n = t.advertisement_id + t.placement_id;
                      if (-1 === c.indexOf(n)) {
                        var o = s.fns.shift(),
                          i = a[e] && a[e];
                        if (!o) return !1;
                        c.push(n),
                          setTimeout(function () {
                            new Image().src = _(i.apurl, {
                              callback: '_cb_gdtjson' + l.exposeCount++,
                              datatype: 'jsonp'
                            });
                          }, 1e3),
                          window.TencentGDT.NATIVE.renderAd(t, o.container),
                          o.complete(!0, i),
                          (r = s.next.shift());
                      } else u = !0;
                    }),
                    (e = s.fns.shift()),
                    u && e.complete(!1, null, '10006'))
                  : s.fns.shift().complete(!1)),
                (r = r || s.next.shift()) && r();
            };
          }),
          c(this, 'initSlot', function (t) {
            window.TencentGDT.push({
              placement_id: t.consumerSlotId,
              app_id: t.appid,
              type: 'native',
              count: 3,
              onComplete: o.proxyComplete(t.consumerSlotId)
            });
          }),
          (window.TencentGDT = window.TencentGDT || []),
          (this.slotMap = {}),
          this.init();
      }
      return (
        n(l, [
          {
            key: 'init',
            value: function () {
              var e = this;
              window.M$P_M_C &&
                window.M$P_M_C.slotBiddings &&
                (y(window.M$P_M_C.slotBiddings, function (t) {
                  y(t.slotBidding, function (t) {
                    'gdt' === t.consumer.consumerType &&
                      (e.slotMap[t.consumer.consumerSlotId] = {
                        consumerSlotId: t.consumer.consumerSlotId,
                        appid: t.consumer.appId || 1110655203,
                        status: 0,
                        fns: [],
                        next: []
                      });
                  });
                }),
                y(this.slotMap, this.initSlot));
            }
          },
          {
            key: 'bindSlot',
            value: function (t, e, n) {
              var o = this;
              this.unionInstance = e;
              var i = this.slotMap[t];
              i &&
                ((i.status = 1),
                i.fns.push({ container: this.unionInstance.id, complete: n }),
                window.jsInited && window.GDT && window.GDT.load
                  ? this.loadAd(t)
                  : i.next.push(function () {
                      o.loadAd(t);
                    }));
            }
          },
          {
            key: 'bindEvent',
            value: function (n) {
              var o;
              M ||
                ((M = TencentGDT.TN.doClick),
                (A = TencentGDT.TN.adClose),
                (TencentGDT.TN.doExpose = function () {}),
                (o = function (t) {
                  var e = document.querySelector('div[id*="' + t + '"]');
                  return n.unionInstances[e.parentNode.id];
                }),
                (TencentGDT.TN.doClick = function (t, e) {
                  var n = o(e);
                  n && (n.onClick(), M.apply(this, arguments));
                }),
                (TencentGDT.TN.adClose = function (t, e) {
                  var n = o(t.traceid);
                  n && (n.onClose(), A.apply(this, arguments));
                }));
            }
          },
          {
            key: 'loadAd',
            value: function (t) {
              window.TencentGDT.NATIVE && window.TencentGDT.NATIVE.loadAd(t);
            }
          }
        ]),
        l
      );
    })();
  c(N, 'exposeCount', 0);
  function L() {
    return (P = P || new N());
  }
  var q,
    G = 5e3,
    R = {
      1e4: '广告数组为空',
      10001: 'js加载失败',
      10002: '获取广告超时',
      10003: '广告异常',
      10006: '相同消耗方相同素材重复渲染',
      2e4: '广点通重复加载广告失败'
    },
    $ = {
      bid: 'bidTracking',
      error: 'errorTracking',
      imp: 'impTracking',
      bidSuc: 'bidSucTracking',
      click: 'clickTracking',
      winner: 'bidSelectedTracking'
    },
    V = 0,
    B = (function () {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && s(t, e);
      })(r, E);
      var o = t(r);
      function r(t, e) {
        var n;
        return (
          a(this, r),
          c(d((n = o.call(this))), 'onLoaded', function (t) {
            n.log('bidSuc', t),
              (n.adInfo = t),
              n.trigger('loaded'),
              n.trigger('complete');
          }),
          c(d(n), 'onTimeOut', function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : '10002';
            '1' === n.status &&
              ((n.status = '10'),
              n.logError(t),
              n.trigger('complete'),
              n.destroy());
          }),
          c(d(n), 'destroy', function () {
            (n.status = '10'),
              n.$container.parentNode &&
                n.$container.parentNode.removeChild(n.$container);
          }),
          (n.name = t),
          (n.options = e),
          (n.sandbox = !1 !== n.options.sandbox),
          n
        );
      }
      return (
        n(r, null, [
          {
            key: 'use',
            value: function (t) {
              if (!f(r.VENDORS[t]) && r.VENDORS[t] instanceof r) {
                var e = r.VENDORS[t].fork();
                return (r.unionInstances[e.id] = e);
              }
            }
          }
        ]),
        n(r, [
          {
            key: 'getContainer',
            value: function (t) {
              !1 === this.sandbox
                ? (this.$container = e(t, 'div', this.id))
                : (this.$container = e(t, 'iframe', this.id));
            }
          },
          {
            key: 'fork',
            value: function () {
              var t = new r(this.name, this.options);
              return (
                (t.index = V++),
                (t.id = 'mp_wrapper_'.concat(this.name, '_').concat(t.index)),
                t
              );
            }
          },
          {
            key: 'run',
            value: function (t, e) {
              var n = this,
                o = 0 < arguments.length && void 0 !== t ? t : {},
                i = 1 < arguments.length ? e : void 0;
              this.getContainer(i), (this.data = o);
              if (
                (this.trigger('init'),
                n.log('bid'),
                n.callHook('onInit', o.consumer || {}, {
                  onTimeOut: n.onTimeOut,
                  onLoaded: n.onLoaded
                }),
                'init' === r.vendorLoaded[this.name])
              ) {
                if (!this.options.src)
                  return (
                    (this.status = '1'),
                    (r.vendorLoaded[this.name] = 'loaded'),
                    this
                  );
                (r.vendorLoaded[this.name] = 'loading'),
                  v(
                    this.options.src,
                    function () {
                      (n.status = '1'), (r.vendorLoaded[n.name] = 'loaded');
                    },
                    function () {
                      (r.vendorLoaded[n.name] = 'init'),
                        n.logError(10001),
                        n.trigger('loadError'),
                        n.trigger('complete');
                    }
                  );
              } else this.status = '1';
              return this;
            }
          },
          {
            key: 'logError',
            value: function (t) {
              var e = { DATA: { err: t, errorMessage: R[t] } };
              this.log('error', e);
            }
          },
          {
            key: 'log',
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e ? e : {},
                o = {
                  REQUESTID: this.requestId,
                  DATA: u(
                    u(u({}, this.requestData), n.DATA),
                    {},
                    { referer: window.location.href }
                  ),
                  EXT: n.EXT
                },
                i = (this.data.trackingV2Data || this.data.trackingData)[$[t]];
              j(i, o);
            }
          },
          {
            key: 'render',
            value: function (t) {
              this.log('winner'),
                document.querySelector(t) &&
                  (this.callHook('onBeforeMount'),
                  (this.$container.style.display = 'block'),
                  this.callHook('onMounted'),
                  this.callHook('onShow'));
            }
          },
          {
            key: 'callHook',
            value: function (t) {
              for (
                var e = this.options[t],
                  n = arguments.length,
                  o = new Array(1 < n ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                o[i - 1] = arguments[i];
              return h(e) && e.apply(this, o);
            }
          },
          {
            key: 'onClick',
            value: function () {
              this.log('click');
            }
          },
          {
            key: 'onClose',
            value: function () {
              this.trigger('close');
            }
          }
        ]),
        r
      );
    })();
  c(B, 'VENDORS', {}),
    c(B, 'unionInstances', {}),
    c(B, 'vendorLoaded', {}),
    c(B, 'register', function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
      (f(B.VENDORS[t]) || n) &&
        ((B.VENDORS[t] = new B(t, e)), (B.vendorLoaded[t] = 'init'));
    }),
    (q = B).register('gdt', {
      src: '//qzs.qq.com/qzone/biz/res/i.js',
      sandbox: !1,
      onInit: function (t, e) {
        var o = e.onLoaded,
          i = e.onTimeOut,
          r = setTimeout(function () {
            i('10002'), clearInterval(r), (r = null);
          }, G);
        L().bindSlot(t.consumerSlotId, this, function (t, e) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : '10000';
          clearInterval(r), t ? o(e) : (x('无广告'), i(n));
        });
      },
      onBeforeMount: function () {},
      onMounted: function () {
        L().bindEvent(q);
      },
      onShow: function () {
        var t, e;
        this.adInfo &&
          ((t = this.adInfo.img_list
            ? this.adInfo.img_list
            : [this.adInfo.img, this.adInfo.img2]),
          (e = {
            title: this.adInfo.txt,
            desc: this.adInfo.desc,
            imgList: t,
            slotId: this.requestData.slotId,
            consumerSlotId: this.requestData.consumerSlotId,
            consumerType: this.requestData.consumerType,
            mediaId: this.requestData.mediaId
          }),
          this.log('imp', { EXT: e }));
      },
      getWeight: function () {},
      reload: function (t) {
        L().loadAd(t.consumerSlotId);
      }
    }),
    B.register('bd', {
      src: '//cpro.baidustatic.com/cpro/ui/cm.js',
      sandbox: !1,
      onInit: function (t, e) {
        var n,
          o = this,
          i = e.onLoaded,
          r = e.onTimeOut;
        (window.slotbydup = window.slotbydup || []).push({
          id: t.consumerSlotId,
          container: this.id,
          async: !0
        }),
          (n = setTimeout(function () {
            r('10002'), clearInterval(s), (s = null);
          }, G));
        var s = setInterval(function () {
          o.$container &&
            o.$container.querySelector('iframe') &&
            (i(), clearTimeout(n), (n = null), clearInterval(s), (s = null));
        }, 350);
      },
      onMounted: function () {},
      onShow: function () {
        this.log('imp');
      }
    }),
    B.register('ptgapi', {
      src: '',
      sandbox: !1,
      onInit: function (t, e) {
        var n = this,
          o = e.onLoaded,
          i = e.onTimeOut,
          r = setTimeout(function () {
            i('10002'), clearTimeout(r), (r = null);
          }, G),
          s = {
            ip: 'client',
            mid: t.appId || 209,
            si: t.consumerSlotId,
            rr: window.location.href,
            secure: 1,
            reqid: this.requestId,
            device_type: 1,
            mimes: 'img,c',
            rsize: ''
              .concat(this.slotSize.width, '*')
              .concat(this.slotSize.height || 54),
            device: JSON.stringify({
              height: screen.height,
              width: screen.width,
              density: 2
            }),
            v: '1.8.3'
          },
          a = [
            I(this.data.trackingV2Data.clickTracking[0], {
              DATA: this.requestData,
              REQUESTID: this.requestId
            })
          ];
        k('https://g.fancyapi.com/s2s', {
          data: s,
          callback: function (t) {
            var e;
            clearTimeout(r),
              Array.isArray(t.ad) && t.ad.length && t.ad[0].src
                ? ((e = I(t.ad[0].src, { M_PRECLICK: a })),
                  (n.$container.innerHTML = e),
                  o())
                : i('10000');
          }
        });
      },
      onMounted: function () {},
      onShow: function () {
        this.log('imp');
      }
    });
  function U(t) {
    return t && t.apply(this, Array.prototype.slice.call(arguments, 1));
  }
  var z = function (t) {
      var o = 10;
      return (
        y(t, function (t) {
          var e = t.weight,
            n = void 0 === e ? 10 : e;
          n && n < o && (o = n);
        }),
        o
      );
    },
    H = function (t) {
      var o = [],
        i = 0,
        e = null;
      y(t, function (t, e) {
        (t.data.weight = t.data.weight && Math.max(t.data.weight, 1)),
          (i += t.data.weight);
        var n = (o[e - 1] && o[e - 1].rang[1]) || 0;
        o.push({
          name: t.name,
          weight: t.data.weight,
          union: t,
          rang: [n, n + t.data.weight]
        });
      });
      var n = w(0, i);
      return (
        y(o, function (t) {
          if (n >= t.rang[0] && n < t.rang[1]) return (e = t.union), !1;
        }),
        e
      );
    },
    F = (function () {
      function s(t) {
        var n = this,
          e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          o = 2 < arguments.length ? arguments[2] : void 0,
          i =
            3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        a(this, s),
          c(this, 'pickConsumer', function (t) {
            var e = n.slotConfig.priorityPolicy;
            0 === e || (3 === e && t.data.weight === n.consumerMaxWeight)
              ? n.race(t)
              : 1 === e &&
                n.loadedConsumers.length === n.consumerLength &&
                n.race(H(n.loadedConsumers));
          }),
          (this.container = t),
          (this.isConcurrent = e.isConcurrent),
          (this.priorityPolicy = e.priorityPolicy),
          (this.slotConfig = e),
          (this.config = o),
          (this.slotOptions = i),
          (this.slotId = e.slotId),
          (this.status = '0');
        var r = document.querySelector(t);
        (this.slotContainerSize = {
          width: r.clientWidth || r.scrollWidth || r.offsetWidth,
          height: r.clientHeight || r.scrollHeight || r.offsetHeight
        }),
          (this.templateConfig = e.templateConfig || {}),
          (this.consumers = e.slotBidding),
          (this.consumerMaxWeight = z(this.consumers)),
          (this.loadedConsumers = []),
          (this.consumerLength = this.consumers && this.consumers.length),
          (this.completeNumber = 0),
          (this.loadedConsumerNumber = 0),
          this.distribute();
      }
      return (
        n(s, [
          {
            key: 'distribute',
            value: function () {
              var n,
                i = this;
              0 < this.consumerLength
                ? ((n = document.querySelector(this.container)),
                  (this.loadedConsumers = []),
                  y(this.consumers, function (t) {
                    var e = B.use(t.consumer.consumerType);
                    e &&
                      ((e.slotSize = i.slotContainerSize),
                      (e.requestId = ''
                        .concat(i.slotId, '-')
                        .concat(t.consumer.consumerSlotId, '-')
                        .concat(new Date().getTime(), '-')
                        .concat(w(0, 100))),
                      (e.requestData = {
                        category: i.isConcurrent,
                        sdkVersion: '1.8.3',
                        policyVersion: i.config.policyVersion,
                        slotId: i.slotId,
                        err: 0,
                        mediaId: i.config.mediaId,
                        consumerType: t.consumer.consumerType,
                        consumerSlotId: t.consumer.consumerSlotId
                      }),
                      e
                        .on('init', function () {})
                        .on('loaded', function () {
                          i.loadedConsumers.push(e),
                            '5' !== i.status &&
                              ((i.status = '4'), i.pickConsumer(e));
                        })
                        .on('complete', i.handleComplete.bind(i))
                        .on('close', function () {
                          U(i.slotConfig.onClose);
                        }),
                      e.run(t, n));
                  }),
                  (this.timeouter = setTimeout(function () {
                    var t, n, o;
                    1 === i.slotConfig.priorityPolicy
                      ? i.race(H(i.loadedConsumers))
                      : 3 === i.slotConfig.priorityPolicy &&
                        i.race(
                          ((t = i.loadedConsumers),
                          (n = null),
                          (o = 10),
                          y(t, function (t, e) {
                            t.data.weight &&
                              t.data.weight < o &&
                              (o = (n = t).data.weight);
                          }),
                          n)
                        );
                  }, 3e3)))
                : U(this.slotOptions.complete, !1);
            }
          },
          {
            key: 'handleComplete',
            value: function () {
              ++this.completeNumber === this.consumerLength &&
                '5' !== this.status &&
                '4' !== this.status &&
                U(this.slotOptions.complete, !1);
            }
          },
          {
            key: 'race',
            value: function (t) {
              clearTimeout(this.timeouter),
                t instanceof B &&
                  ('5' !== this.status
                    ? (U(this.slotOptions.complete, !0),
                      (this.status = '5'),
                      (this.winner = t).render(this.container))
                    : t.destroy());
            }
          }
        ]),
        s
      );
    })(),
    W = (function () {
      function e(t) {
        a(this, e), c(this, 'Ver', '1.8.3'), (this.slots = {}), this.init(t);
      }
      return (
        n(e, [
          {
            key: 'init',
            value: function (t) {
              (this._originalList = t),
                ((window.M$P = this).MEDIA_CONFIG = {}),
                (this.config = window[r].config || {}),
                (this.config.mediaId = window[r].mediaId),
                this.parseMediaConfig(window[r]),
                this.handler(this._originalList);
            }
          },
          {
            key: 'parseMediaConfig',
            value: function (t) {
              var e = this,
                n = 0 < arguments.length && void 0 !== t ? t : {};
              (this.MEDIA_CONFIG = {}),
                n.slotBiddings &&
                  y(n.slotBiddings, function (t) {
                    e.MEDIA_CONFIG[t.slotId] = e.uniqueConsumer(t);
                  });
            }
          },
          {
            key: 'uniqueConsumer',
            value: function (t) {
              var n = {};
              return (
                y(t.slotBidding, function (t) {
                  var e = t.consumer.consumerType;
                  n[e] || (n[e] = t);
                }),
                (t.slotBidding = Object.values(n)),
                t
              );
            }
          },
          {
            key: 'push',
            value: function (t) {
              this.handler([t]);
            }
          },
          {
            key: 'handler',
            value: function (t) {
              var e = this;
              y(t, function (s) {
                h(s)
                  ? s.call(e, {
                      union: { register: B.register, use: B.use },
                      utils: {}
                    })
                  : g(s) &&
                    (f(s.id)
                      ? f(s.mediaid) ||
                        f(s.secret) ||
                        (f(e.mediaid) &&
                          ((e.mediaid = s.mediaid), (e.secret = s.secret)))
                      : (f(e.slots[s.id]) || s.force) &&
                        e.MEDIA_CONFIG[s.id] &&
                        e.fillAd(
                          s.container,
                          u(u({}, e.MEDIA_CONFIG[s.id]), {}, { id: s.id }),
                          s.force,
                          {
                            complete: function () {
                              for (
                                var t,
                                  e,
                                  n,
                                  o = arguments.length,
                                  i = new Array(o),
                                  r = 0;
                                r < o;
                                r++
                              )
                                i[r] = arguments[r];
                              s.complete && s.complete.apply(this, i),
                                !1 === i[0] &&
                                  ('160003' === s.id
                                    ? (((t = document.createElement(
                                        'iframe'
                                      )).style.cssText =
                                        'width: 100%;border: none; height: 240px; padding: 0px 15px;'),
                                      document
                                        .querySelector(s.container)
                                        .appendChild(t),
                                      ((e =
                                        t.contentDocument).body.style.cssText =
                                        'margin: 0; box-sizing: border-box; border-bottom: 1px solid #f5f5f5;'),
                                      ((n = e.createElement('script')).src =
                                        '//sfk.t58b.com/fanwei1.js'),
                                      e.body.appendChild(n))
                                    : s.fallback && s.fallback());
                            }
                          }
                        ));
              });
            }
          },
          {
            key: 'fillAd',
            value: function (t, e, n, o) {
              this.slots[e.id] = new F(t, e, this.config, o);
            }
          }
        ]),
        e
      );
    })(),
    X = window.M$P;
  (Array.isArray(X) || f(X)) && new W(X);
})();
