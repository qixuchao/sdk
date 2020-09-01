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
  function i(t, e, n) {
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
  function r(e, t) {
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
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? r(Object(n), !0).forEach(function (t) {
            i(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function s(t) {
    return (s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function l(t, e) {
    return (l =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function u(t, e) {
    if (null == t) return {};
    var n,
      o = (function (t, e) {
        if (null == t) return {};
        for (var n, o = {}, i = Object.keys(t), r = 0; r < i.length; r++)
          (n = i[r]), 0 <= e.indexOf(n) || (o[n] = t[n]);
        return o;
      })(t, e);
    if (Object.getOwnPropertySymbols)
      for (var i = Object.getOwnPropertySymbols(t), r = 0; r < i.length; r++)
        (n = i[r]),
          0 <= e.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
    return o;
  }
  function d(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function t(r) {
    var c = (function () {
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
        i = s(r);
      return (
        (e = c
          ? ((t = s(this).constructor), Reflect.construct(i, arguments, t))
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
  var p = 'M$P_M_C',
    g = Object.prototype.toString;
  function v(t) {
    if (
      '[object Object]' ===
      (null == (e = t)
        ? void 0 === e
          ? '[object Undefined]'
          : '[object Null]'
        : g.call(e))
    ) {
      var e;
      if (null === Object.getPrototypeOf(t)) return 1;
      for (var n = t; null !== Object.getPrototypeOf(n); )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(t) === n;
    }
  }
  function y(t, e, n) {
    var o = 0 < arguments.length && void 0 !== t ? t : '',
      i = 1 < arguments.length && void 0 !== e ? e : { REQUESTID: '' },
      r = !(2 < arguments.length && void 0 !== n) || n,
      c = {
        OS: 3,
        APP: window.location.hostname,
        IP: '127.0.0.1',
        TS: +new Date()
      };
    return o.replace(/__(.*?)__/g, function (t) {
      var e,
        n = t.match(/__(.*)__/),
        o = c[n[1]] || i[n[1]];
      return void 0 === o ? t : ((e = o), r ? encodeURIComponent(e) : e);
    });
  }
  var m =
      /(localhost|127\.0\.0\.1|([192,10]\.168\.\d{1,3}\.\d{1,3}))/.test(
        window.location.hostname
      ) || /_mp_debug_/.test(window.location.search),
    b = function (t, e) {
      if (t)
        if (Array.isArray(t) || ((i = t) && void 0 !== i.length))
          for (var n = 0; n < t.length && (!e || !1 !== e(t[n], n)); n++);
        else if (v(t)) for (var o in t) if (e && !1 === e(t[o], o)) break;
      var i;
    },
    e = (function () {
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
              b(this._events[t], function (t) {
                h(t) && t.call(n, e);
              });
            }
          }
        ]),
        t
      );
    })();
  function O(t) {
    var e;
    '' !== t &&
      (((e = document.createElement('img')).onload = function () {
        e = e.onload = null;
      }),
      (e.src = t));
  }
  function w(t, e) {
    var n = 0 < arguments.length && void 0 !== t ? t : 'div',
      o = 1 < arguments.length ? e : void 0,
      i = document.createElement(n);
    return (
      (i.id = o),
      (i.style.display = 'none'),
      (i.className = o),
      document.body.appendChild(i),
      i
    );
  }
  var k,
    T,
    I,
    S = function (t) {
      'string' == typeof t && (t = [t]), b(t, O);
    },
    j = function () {
      if (m)
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
    },
    _ = {
      1: 'js加载失败',
      2: '获取广告超时',
      3: '广告异常',
      1e4: '广告数组为空'
    },
    D = {
      bid: 'bidTracking',
      error: 'errorTracking',
      imp: 'impTracking',
      bidSuc: 'bidSucTracking',
      click: 'clickTracking',
      winner: 'bidSelectedTracking'
    },
    C = 0,
    A = (function () {
      !(function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && l(t, e);
      })(u, e);
      var o = t(u);
      function u(t, e) {
        var n;
        return (
          a(this, u),
          i(d((n = o.call(this))), 'onLoaded', function (t) {
            n.log('bidSuc', t),
              (n.adInfo = t),
              n.trigger('loaded'),
              n.trigger('complete');
          }),
          i(d(n), 'onTimeOut', function () {
            n.log('error', { DATA: { err: 2, errorMessage: _[2] } }),
              n.trigger('complete'),
              n.destroy();
          }),
          i(d(n), 'destroy', function () {
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
        n(u, null, [
          {
            key: 'use',
            value: function (t) {
              if (!f(u.VENDORS[t]) && u.VENDORS[t] instanceof u) {
                var e = u.VENDORS[t].fork();
                return (u.unionInstances[e.id] = e);
              }
            }
          }
        ]),
        n(u, [
          {
            key: 'getContainer',
            value: function () {
              !1 === this.sandbox
                ? (this.$container = w('div', this.id))
                : (this.$container = w('iframe', this.id));
            }
          },
          {
            key: 'fork',
            value: function () {
              var t = new u(this.name, this.options);
              return (
                (t.index = C++),
                (t.id = 'mp_wrapper_'.concat(this.name, '_').concat(t.index)),
                t.getContainer(),
                t
              );
            }
          },
          {
            key: 'run',
            value: function (t) {
              var e = this,
                n = 0 < arguments.length && void 0 !== t ? t : {};
              this.data = n;
              var o, i, r, c, s;
              return (
                this.trigger('init'),
                e.log('bid'),
                e.callHook('onInit', n.consumer || {}, {
                  onTimeOut: e.onTimeOut,
                  onLoaded: e.onLoaded
                }),
                'init' === u.vendorLoaded[this.name] &&
                  ((u.vendorLoaded[this.name] = 'loading'),
                  (o = this.options.src),
                  (i = function () {
                    u.vendorLoaded[e.name] = 'loaded';
                  }),
                  (r = function () {
                    (u.vendorLoaded[e.name] = 'init'),
                      e.log('error', { DATA: { err: 1, errorMessage: _[1] } }),
                      e.trigger('loadError');
                  }),
                  (c = document.getElementsByTagName('script')[0]),
                  ((s = document.createElement('script')).onload = function () {
                    (s = s.onload = null), i && i();
                  }),
                  (s.onerror = function () {
                    (s = s.onerror = null), r && r();
                  }),
                  (s.src = o),
                  c.parentNode.insertBefore(s, c)),
                this
              );
            }
          },
          {
            key: 'log',
            value: function (t, e) {
              var n,
                o,
                i,
                r = 1 < arguments.length && void 0 !== e ? e : {},
                c =
                  ((n = { REQUESTID: this.requestId, DATA: this.requestData }),
                  (o = r),
                  (i = Object.assign({}, n)),
                  b(o, function (t, e) {
                    v(t) ? (i[e] = Object.assign(i[e], t)) : (i[e] = t);
                  }),
                  b(i, function (t, e) {
                    v(t) && (i[e] = JSON.stringify(t));
                  }),
                  i),
                s = y(this.data.trackingData[D[t]], c);
              S(s);
            }
          },
          {
            key: 'render',
            value: function (t) {
              this.log('winner');
              var e = document.querySelector(t);
              e &&
                (this.callHook('onBeforeMount'),
                e.appendChild(this.$container),
                (this.$container.style.display = 'block'),
                this.callHook('onMounted'));
            }
          },
          {
            key: 'hasReload',
            value: function () {
              return !!this.reload && (this.reload(this.data.consumer), !0);
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
          },
          {
            key: 'onShow',
            value: function () {
              this.callHook('onShow');
            }
          }
        ]),
        u
      );
    })();
  i(A, 'VENDORS', {}),
    i(A, 'unionInstances', {}),
    i(A, 'vendorLoaded', {}),
    i(A, 'register', function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
      (f(A.VENDORS[t]) || n) &&
        ((A.VENDORS[t] = new A(t, e)), (A.vendorLoaded[t] = 'init'));
    }),
    (k = A).register('gdt', {
      src: '//qzs.qq.com/qzone/biz/res/i.js',
      sandbox: !1,
      onInit: function (t, e) {
        var n = this,
          o = e.onLoaded,
          i = e.onTimeOut;
        window.TencentGDT = window.TencentGDT || [];
        var r = setTimeout(function () {
          i(), clearInterval(r), (r = null);
        }, 1e4);
        window.TencentGDT.push({
          placement_id: t.consumerSlotId,
          app_id: t.appid,
          type: 'native',
          count: 1,
          onComplete: function (t) {
            clearInterval(r),
              Array.isArray(t)
                ? (o(),
                  window.TencentGDT.NATIVE.renderAd(t[0], n.id),
                  n.onShow())
                : (j('无广告'),
                  n.log('error', { DATA: { err: 1e4, errorMessage: _[1e4] } }),
                  i());
          }
        });
      },
      onBeforeMount: function () {},
      onMounted: function () {
        var o;
        T ||
          ((T = TencentGDT.TN.doClick),
          (I = TencentGDT.TN.adClose),
          (o = function (t) {
            var e = document.querySelector('div[id*="' + t + '"]');
            return k.unionInstances[e.parentNode.id];
          }),
          (TencentGDT.TN.doClick = function (t, e) {
            var n = o(e);
            n && (n.onClick(), T.apply(this, arguments));
          }),
          (TencentGDT.TN.adClose = function (t, e) {
            var n = o(e);
            n && (n.onClose(), I.apply(this, arguments));
          }));
      },
      onShow: function () {
        var i = this,
          r = document.querySelector('#'.concat(this.id)),
          c = setInterval(function () {
            var t,
              e,
              n,
              o = r.querySelector('iframe');
            o &&
              (clearInterval(c),
              (t = o.contentWindow.document.querySelectorAll('img')),
              (e = []),
              b(t, function (t) {
                t && t.getAttribute && e.push(t.getAttribute('src'));
              }),
              (n = { title: '', desc: '', imgList: e }),
              i.log('imp', { EXT: JSON.stringify(n) }));
          }, 500);
      },
      getWeight: function () {},
      reload: function (t) {
        window.TencentGDT.NATIVE.loadAd(t.consumerSlotId);
      }
    }),
    A.register('bd', {
      src: '//cpro.baidustatic.com/cpro/ui/cm.js',
      sandbox: !1,
      onInit: function (t, e) {
        var n = this,
          o = e.onLoaded,
          i = e.onTimeOut;
        (window.slotbydup = window.slotbydup || []).push({
          id: t.consumerSlotId,
          container: this.id,
          async: !0
        });
        var r = setInterval(function () {
            n.$container &&
              n.$container.querySelector('iframe') &&
              (o(), clearTimeout(c), (c = null), clearInterval(r), (r = null));
          }, 350),
          c = setTimeout(function () {
            i(), clearInterval(r), (r = null);
          }, 1e4);
      },
      onMounted: function () {
        this.onShow();
      },
      onShow: function () {
        this.log('imp');
      }
    });
  function E(t) {
    return t && t.apply(this, aArray.prototype.slice.call(arguments, 1));
  }
  var N = (function () {
      function s(t) {
        var e,
          r,
          c,
          n =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          o = 2 < arguments.length ? arguments[2] : void 0,
          i =
            3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        a(this, s),
          (this.container = t),
          (this.$container = document.querySelector(t)),
          (this.isConcurrent = n.isConcurrent),
          (this.priorityPolicy = n.priorityPolicy),
          (this.slotConfig = n),
          (this.config = o),
          (this.slotOptions = i),
          (this.slotId = n.slotId),
          (this.status = '0'),
          n.isConcurrent
            ? (this.consumers = n.slotBidding)
            : (this.consumers =
                ((e = n.slotBidding),
                (r = []),
                (c = 0),
                b(e, function (t, e) {
                  var n = t.weight,
                    o = void 0 === n ? 0 : n,
                    i = u(t, ['weight']);
                  c < o ? ((c = o), (r = [i])) : o === c && r.push(i);
                }),
                r)),
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
              var n = this;
              0 < this.consumerLength
                ? b(this.consumers, function (t) {
                    var e = A.use(t.consumer.consumerType);
                    e &&
                      ((e.requestId = ''
                        .concat(n.slotId, '-')
                        .concat(t.consumer.consumerSlotId)),
                      (e.requestData = {
                        category: n.isConcurrent,
                        sdkVersion: '1.3.1',
                        policyVersion: n.config.policyVersion,
                        slotId: n.slotId,
                        err: 0,
                        consumerType: t.consumer.consumerType,
                        consumerSlotId: t.consumer.consumerSlotId
                      }),
                      e
                        .on('init', function () {})
                        .on('loaded', function () {
                          n.race(e);
                        })
                        .on('complete', n.handleComplete)
                        .on('close', function () {
                          E(n.slotConfig.onClose);
                        }),
                      e.run(t));
                  })
                : E(this.slotOptions.fallback);
            }
          },
          {
            key: 'handleComplete',
            value: function () {
              this.completeNumber++ === this.consumerLength &&
                '5' !== this.status &&
                E(this.slotOptions.fallback);
            }
          },
          {
            key: 'race',
            value: function (t) {
              '5' !== this.status &&
                ((this.status = '5'), (this.winner = t).render(this.container));
            }
          },
          {
            key: 'reload',
            value: function () {
              return (
                (this.winner && this.winner.hasReload()) ||
                  ((this.status = '4'), this.distribute()),
                this
              );
            }
          }
        ]),
        s
      );
    })(),
    P = (function () {
      function e(t) {
        a(this, e), i(this, 'Ver', '1.3.1'), (this.slots = {}), this.init(t);
      }
      return (
        n(e, [
          {
            key: 'init',
            value: function (t) {
              (this._originalList = t),
                ((window.M$P = this).MEDIA_CONFIG = {}),
                (this.config = window[p].config || {}),
                this.parseMediaConfig(window[p]),
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
                  b(n.slotBiddings, function (t) {
                    e.MEDIA_CONFIG[t.slotId] = t;
                  });
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
              b(t, function (t) {
                h(t)
                  ? t.call(e, {
                      union: { register: A.register, use: A.use },
                      utils: {}
                    })
                  : v(t) &&
                    (f(t.id)
                      ? f(t.mediaid) ||
                        f(t.secret) ||
                        (f(e.mediaid) &&
                          ((e.mediaid = t.mediaid), (e.secret = t.secret)))
                      : (f(e.slots[t.id]) || t.force) &&
                        e.MEDIA_CONFIG[t.id] &&
                        e.fillAd(
                          t.container,
                          c(c({}, e.MEDIA_CONFIG[t.id]), {}, { id: t.id }),
                          t.force,
                          t.fallback
                        ));
              });
            }
          },
          {
            key: 'fillAd',
            value: function (t, e, n, o) {
              this.slots[e.id] && n
                ? (this.slots[e.id] = this.slots[e.id].reload())
                : (this.slots[e.id] = new N(t, e, this.config, o));
            }
          }
        ]),
        e
      );
    })(),
    M = window.M$P;
  (Array.isArray(M) || f(M)) && new P(M);
})();
