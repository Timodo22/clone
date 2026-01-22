window.$$weply = window.$$weply || {};
window.$$weply.wid = "73095cabef0745d58fc67c49e5968690";
window.$$weply.widget_domain = "https://cdn.weply.chat";
window.$$weply.api_base_url = "https://app.weply.chat";
!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var s = (t[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports);
  }
  ((i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          i.d(
            n,
            s,
            function (t) {
              return e[t];
            }.bind(null, s),
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (i.d(t, "a", t), t);
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 0)));
})([
  function (e, t, i) {
    e.exports = i(1);
  },
  function (e, t, i) {
    "use strict";
    var n = i(2);
    ((window.$$weply = window.$$weply || window.$$crowdio),
      (window.$$weply.api = new n(
        window,
        document,
        window.$$weply.wid,
        window.$$weply.api_base_url,
      )),
      window.$$weply.api.iframeManager.setVisibility(!1),
      window.$$weply.api.iframeManager.setBorder(!1),
      window.$$weply.wid &&
        ((window.$$weply.api.loading = !0),
        window.$$weply.api.iframeManager.setUrl(
          window.$$weply.widget_domain +
            "/?wid=" +
            window.$$weply.wid +
            "&minimized=" +
            window.$$weply.api.storageManager.get("minimized") +
            "&ts=" +
            Date.now(),
          function () {
            window.$$weply.api.loading = !1;
          },
        )),
      document.body
        ? (document.body.appendChild(window.$$weply.api.iframeManager.element),
          window.$$weply.api.cmd_getMinimized())
        : document.addEventListener("DOMContentLoaded", function () {
            (document.body.appendChild(
              window.$$weply.api.iframeManager.element,
            ),
              window.$$weply.api.cmd_getMinimized());
          }));
  },
  function (e, t, i) {
    "use strict";
    var n = (function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n));
        }
      }
      return function (t, i, n) {
        return (i && e(t.prototype, i), n && e(t, n), t);
      };
    })();
    var s = i(3),
      r = i(4),
      a = i(5),
      o = (function () {
        function e(t, i, n, s) {
          var o = this;
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.window = t),
            (this.document = i),
            (this.website_id = n),
            (this.apiBaseUrl = s),
            (this.loading = !1),
            (this.iframeManager = new r(t, i)),
            (this.storageManager = new a(t, i, this.website_id)),
            (this.publicApi = this.getPublicApi()),
            this.window.addEventListener("message", function (e) {
              return o.onMessage(e.data);
            }),
            this.window.addEventListener("resize", function () {
              return o.resize();
            }),
            this.window.addEventListener("touchstart", function () {}),
            (this.window.visualViewport.onresize = function () {
              return o.viewportOnResize();
            }),
            this.setupVisibilityChange(),
            this.setupCss());
        }
        return (
          n(e, [
            {
              key: "loadWidget",
              value: function (e) {
                var t = this,
                  i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (this.loading) return this;
                if (this.website_id === e) return this.maximizeWidget();
                ((this.loading = !0),
                  (this.website_id = e),
                  (this.publicApi.website_id = e),
                  (this.iframeManager.website_id = e),
                  this.storageManager.changeWebsiteId(e));
                var n =
                  this.window.$$weply.widget_domain +
                  "?wid=" +
                  e +
                  "&minimized=" +
                  i.toString();
                this.iframeManager.reCreate(n, function () {
                  return (t.loading = !1);
                });
              },
            },
            {
              key: "hasWidget",
              value: function () {
                return !(!this.website_id || this.loading);
              },
            },
            {
              key: "maximizeWidget",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveMaximizeCommand", data: {} },
                  "*",
                );
              },
            },
            {
              key: "setupCss",
              value: function () {
                var e = this.document.createElement("style");
                (e.setAttribute("text", "text/css"),
                  (e.innerHTML =
                    ".weply-mobile-body {position: fixed;overflow: hidden;width: 100% !important;height: 100% !important;top: 0;left: 0;right: 0;bottom: 0;}"),
                  this.document.head.appendChild(e));
              },
            },
            {
              key: "setupVisibilityChange",
              value: function () {
                var e = this,
                  t = void 0,
                  i = void 0;
                if (
                  (void 0 !== document.hidden
                    ? ((t = "hidden"), (i = "visibilitychange"))
                    : void 0 !== document.msHidden
                      ? ((t = "msHidden"), (i = "msvisibilitychange"))
                      : void 0 !== document.webkitHidden &&
                        ((t = "webkitHidden"), (i = "webkitvisibilitychange")),
                  !t)
                )
                  return console.error("visibilityApiNotSupported");
                this.document.addEventListener(i, function () {
                  e.iframeManager.element.contentWindow.postMessage(
                    {
                      cmd: "receivePageVisibility",
                      visibility: !e.document[t],
                    },
                    "*",
                  );
                });
              },
            },
            {
              key: "viewportOnResize",
              value: function () {
                this.isMobile() &&
                  this.iframeManager.element.contentWindow.postMessage(
                    {
                      cmd: "receiveDeviceViewportResize",
                      data: {
                        visualViewportHeight: this.getVisualViewportHeight(),
                      },
                    },
                    "*",
                  );
              },
            },
            {
              key: "getVisualViewportHeight",
              value: function () {
                return this.window.visualViewport.height;
              },
            },
            {
              key: "isMobile",
              value: function () {
                var e = this.window.navigator.userAgent;
                return (
                  "ontouchstart" in this.document.documentElement &&
                  /mobi/i.test(e) &&
                  !/iPad/i.test(e)
                );
              },
            },
            {
              key: "getOrientation",
              value: function () {
                return this.window.innerWidth > this.window.innerHeight
                  ? "landscape"
                  : "portrait";
              },
            },
            {
              key: "isMinimized",
              value: function () {
                return (
                  null === this.storageManager.get("minimized") ||
                  this.storageManager.get("minimized")
                );
              },
            },
            {
              key: "getSessionStatus",
              value: function () {
                return (
                  !!this.storageManager.get("data.status") &&
                  this.storageManager.get("data.status")
                );
              },
            },
            {
              key: "resize",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receiveDeviceResize",
                    data: { orientation: this.getOrientation() },
                  },
                  "*",
                );
              },
            },
            {
              key: "setLanguage",
              value: function (e) {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveSetLanguage", data: { languageKey: e } },
                  "*",
                );
              },
            },
            {
              key: "setProactiveMessage",
              value: function (e) {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveSetProactiveMessage", data: { message: e } },
                  "*",
                );
              },
            },
            {
              key: "setHeaderDesctiption",
              value: function (e) {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveSetHeaderDesctiption", data: { text: e } },
                  "*",
                );
              },
            },
            {
              key: "setOffset",
              value: function (e, t, i) {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receiveSetOffset",
                    data: { bottom: e, right: t, left: i },
                  },
                  "*",
                );
              },
            },
            {
              key: "getPublicApi",
              value: function () {
                if (this.publicApi) return this.publicApi;
                var e = { widget: new s() };
                return (
                  (e.widget.maximize = this.maximizeWidget.bind(this)),
                  (e.widget.isMinimized = this.isMinimized.bind(this)),
                  (e.widget.setLanguage = this.setLanguage.bind(this)),
                  (e.widget.setProactiveMessage =
                    this.setProactiveMessage.bind(this)),
                  (e.widget.setHeaderDesctiption =
                    this.setHeaderDesctiption.bind(this)),
                  (e.widget.setOffset = this.setOffset.bind(this)),
                  (e.widget.getSessionStatus =
                    this.getSessionStatus.bind(this)),
                  (e.widget.loadWidget = this.loadWidget.bind(this)),
                  (e.widget.setVisibility =
                    this.iframeManager.setVisibility.bind(this.iframeManager)),
                  (e.widget.hasOnlineAgents = this.hasOnlineAgents.bind(this)),
                  (e.dataLayers = new s()),
                  e
                );
              },
            },
            {
              key: "hasOnlineAgents",
              value: async function () {
                var e = await fetch(
                  this.apiBaseUrl +
                    "/visitor/onlineAgentsForWebsite?websitePublicId=" +
                    this.website_id,
                );
                return (await e.json()).data.onlineAgentsCount > 0;
              },
            },
            {
              key: "onMessage",
              value: function (e) {
                return (
                  !(!e || !e.cmd) &&
                  !!this["cmd_" + e.cmd] &&
                  void this["cmd_" + e.cmd](e)
                );
              },
            },
            {
              key: "cmd_widgetEvent",
              value: function (e) {
                this.publicApi.widget.emit(e.name, e.data);
              },
            },
            {
              key: "cmd_widgetDataLayerEvent",
              value: function (e) {
                this.publicApi.dataLayers.emit(e.data.event, e.data);
              },
            },
            {
              key: "cmd_widgetReady",
              value: function () {
                setTimeout(
                  function () {
                    "function" == typeof this.window.crowdioWidgetReady
                      ? this.window.crowdioWidgetReady(this.publicApi)
                      : "function" == typeof this.window.weplyWidgetReady &&
                        this.window.weplyWidgetReady(this.publicApi);
                  }.bind(this),
                  0,
                );
              },
            },
            {
              key: "cmd_getClientGA",
              value: function () {
                var e = this,
                  t = this.storageManager.get("data.gaMeasurementId");
                if (
                  (t &&
                    "undefined" != typeof gtag &&
                    gtag("get", t, "client_id", function (t) {
                      if (t) return e.receiveClientGaId(t);
                    }),
                  "undefined" == typeof GoogleAnalyticsObject)
                ) {
                  if ("undefined" == typeof gaGlobal)
                    return this.receiveClientGaId();
                  var i = this.window.gaGlobal.vid;
                  return i
                    ? this.receiveClientGaId(i)
                    : this.receiveClientGaId();
                }
                var n = this.window[GoogleAnalyticsObject];
                return n(function (t) {
                  return (
                    !t && n.getAll && (t = n.getAll()[0]),
                    t
                      ? e.receiveClientGaId(t.get("clientId"))
                      : e.receiveClientGaId()
                  );
                });
              },
            },
            {
              key: "cmd_getGaSessionId",
              value: function () {
                var e = this,
                  t = this.storageManager.get("data.gaMeasurementId");
                if (!t) return this.receiveGaSessionId();
                "undefined" != typeof gtag &&
                  gtag("get", t, "session_id", function (t) {
                    if (t) return e.receiveGaSessionId(t);
                  });
                var i = this.getSessionIdFromCookie(t);
                return i
                  ? this.receiveGaSessionId(i)
                  : this.receiveGaSessionId();
              },
            },
            {
              key: "getSessionIdFromCookie",
              value: function (e) {
                var t = e.split("-")[1],
                  i = document.cookie.match(
                    new RegExp("_ga_" + t + "=([^;]+)"),
                  );
                if (!i) return null;
                var n = i[1].split(".");
                if ("GS2" === n[0]) {
                  var s = n
                    .slice(2)
                    .join(".")
                    .match(/s(\d+)/);
                  return s ? s[1] : null;
                }
                return ("GS1" === n[0] && n[2]) || null;
              },
            },
            {
              key: "cmd_getPageTitle",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receivePageTitle", title: this.document.title },
                  "*",
                );
              },
            },
            {
              key: "cmd_getPageReferrer",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receivePageReferrer",
                    referrer: this.document.referrer,
                  },
                  "*",
                );
              },
            },
            {
              key: "receiveClientGaId",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveClientGA", data: { gaId: e } },
                  "*",
                );
              },
            },
            {
              key: "receiveGaSessionId",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveGaSessionId", sessionId: e },
                  "*",
                );
              },
            },
            {
              key: "cmd_setLocalStorageItem",
              value: function (e) {
                this.storageManager.set("data." + e.key, e.value, e.group);
              },
            },
            {
              key: "cmd_getLocalStorageItem",
              value: function (e) {
                e.requestId &&
                  this.iframeManager.element.contentWindow.postMessage(
                    {
                      cmd: "receiveLocalStorageItem",
                      data: {
                        value: JSON.stringify(
                          this.storageManager.get("data." + e.key, e.group),
                        ),
                        requestId: e.requestId,
                      },
                    },
                    "*",
                  );
              },
            },
            {
              key: "cmd_removeLocalStorageItem",
              value: function (e) {
                this.storageManager.remove("data." + e.key, e.group);
              },
            },
            {
              key: "cmd_getDeviceWindowSize",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receiveDeviceWindowSize",
                    data: {
                      width: this.window.innerWidth,
                      height: this.window.innerHeight,
                    },
                  },
                  "*",
                );
              },
            },
            {
              key: "cmd_setProactiveChatState",
              value: function (e) {
                this.storageManager.set("proactive", e.state);
              },
            },
            {
              key: "cmd_getProactiveChatState",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receiveProactiveChatState",
                    data: JSON.stringify(this.storageManager.get("proactive")),
                  },
                  "*",
                );
              },
            },
            {
              key: "cmd_getCurrentUrl",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "receiveCurrentUrl", url: this.window.location.href },
                  "*",
                );
              },
            },
            {
              key: "cmd_getToken",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  {
                    cmd: "receiveToken",
                    token: this.storageManager.get("token") || "",
                  },
                  "*",
                );
              },
            },
            {
              key: "cmd_setToken",
              value: function (e) {
                this.storageManager.set("token", e.token);
              },
            },
            {
              key: "cmd_setSize",
              value: function (e) {
                this.iframeManager.setSize(e.width, e.height);
              },
            },
            {
              key: "cmd_setStyleProperty",
              value: function (e) {
                this.iframeManager.setStyleProperty(e.property, e.value);
              },
            },
            {
              key: "cmd_removeToken",
              value: function () {
                this.storageManager.remove("token");
              },
            },
            {
              key: "cmd_setVisibility",
              value: function (e) {
                this.iframeManager.setVisibility(!!e.visibility);
              },
            },
            {
              key: "cmd_setPosition",
              value: function (e) {
                this.iframeManager.setPosition(e.directions);
              },
            },
            {
              key: "cmd_setMinimized",
              value: function (e) {
                (this.storageManager.set("minimized", e.state),
                  e.state
                    ? (this.removeMeta(),
                      this.publicApi.widget.emit("minimize"))
                    : (this.createMeta(),
                      this.publicApi.widget.emit("maximize")),
                  e && e.isMobile && !e.state
                    ? (this.document.body.classList.add("weply-mobile-body"),
                      this.iframeManager.element.classList.add(
                        "weply-mobile-body",
                      ))
                    : e &&
                      e.isMobile &&
                      e.state &&
                      (this.document.body.classList.remove("weply-mobile-body"),
                      this.iframeManager.element.classList.remove(
                        "weply-mobile-body",
                      )));
              },
            },
            {
              key: "createMeta",
              value: function () {
                var e = this.document.createElement("meta");
                (e.setAttribute("weply-meta", "meta"),
                  e.setAttribute("name", "viewport"),
                  e.setAttribute(
                    "content",
                    "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, shrink-to-fit=no",
                  ),
                  this.document.head.appendChild(e));
              },
            },
            {
              key: "removeMeta",
              value: function () {
                var e = this.document.querySelector('meta[weply-meta="meta"]');
                e && e.parentNode.removeChild(e);
              },
            },
            {
              key: "cmd_getMinimized",
              value: function () {
                this.iframeManager.element.contentWindow.postMessage(
                  { cmd: "getMinimized", state: this.isMinimized() },
                  "*",
                );
              },
            },
          ]),
          e
        );
      })();
    e.exports = o;
  },
  function (e, t, i) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      s = "~";
    function r() {}
    function a(e, t, i, n, r) {
      if ("function" != typeof i)
        throw new TypeError("The listener must be a function");
      var a = new (function (e, t, i) {
          ((this.fn = e), (this.context = t), (this.once = i || !1));
        })(i, n || e, r),
        o = s ? s + t : t;
      return (
        e._events[o]
          ? e._events[o].fn
            ? (e._events[o] = [e._events[o], a])
            : e._events[o].push(a)
          : ((e._events[o] = a), e._eventsCount++),
        e
      );
    }
    function o(e, t) {
      0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
    }
    function d() {
      ((this._events = new r()), (this._eventsCount = 0));
    }
    (Object.create &&
      ((r.prototype = Object.create(null)), new r().__proto__ || (s = !1)),
      (d.prototype.eventNames = function () {
        var e,
          t,
          i = [];
        if (0 === this._eventsCount) return i;
        for (t in (e = this._events))
          n.call(e, t) && i.push(s ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? i.concat(Object.getOwnPropertySymbols(e))
          : i;
      }),
      (d.prototype.listeners = function (e) {
        var t = s ? s + e : e,
          i = this._events[t];
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var n = 0, r = i.length, a = new Array(r); n < r; n++)
          a[n] = i[n].fn;
        return a;
      }),
      (d.prototype.listenerCount = function (e) {
        var t = s ? s + e : e,
          i = this._events[t];
        return i ? (i.fn ? 1 : i.length) : 0;
      }),
      (d.prototype.emit = function (e, t, i, n, r, a) {
        var o = s ? s + e : e;
        if (!this._events[o]) return !1;
        var d,
          c,
          u = this._events[o],
          l = arguments.length;
        if (u.fn) {
          switch ((u.once && this.removeListener(e, u.fn, void 0, !0), l)) {
            case 1:
              return (u.fn.call(u.context), !0);
            case 2:
              return (u.fn.call(u.context, t), !0);
            case 3:
              return (u.fn.call(u.context, t, i), !0);
            case 4:
              return (u.fn.call(u.context, t, i, n), !0);
            case 5:
              return (u.fn.call(u.context, t, i, n, r), !0);
            case 6:
              return (u.fn.call(u.context, t, i, n, r, a), !0);
          }
          for (c = 1, d = new Array(l - 1); c < l; c++) d[c - 1] = arguments[c];
          u.fn.apply(u.context, d);
        } else {
          var h,
            g = u.length;
          for (c = 0; c < g; c++)
            switch (
              (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), l)
            ) {
              case 1:
                u[c].fn.call(u[c].context);
                break;
              case 2:
                u[c].fn.call(u[c].context, t);
                break;
              case 3:
                u[c].fn.call(u[c].context, t, i);
                break;
              case 4:
                u[c].fn.call(u[c].context, t, i, n);
                break;
              default:
                if (!d)
                  for (h = 1, d = new Array(l - 1); h < l; h++)
                    d[h - 1] = arguments[h];
                u[c].fn.apply(u[c].context, d);
            }
        }
        return !0;
      }),
      (d.prototype.on = function (e, t, i) {
        return a(this, e, t, i, !1);
      }),
      (d.prototype.once = function (e, t, i) {
        return a(this, e, t, i, !0);
      }),
      (d.prototype.removeListener = function (e, t, i, n) {
        var r = s ? s + e : e;
        if (!this._events[r]) return this;
        if (!t) return (o(this, r), this);
        var a = this._events[r];
        if (a.fn)
          a.fn !== t || (n && !a.once) || (i && a.context !== i) || o(this, r);
        else {
          for (var d = 0, c = [], u = a.length; d < u; d++)
            (a[d].fn !== t || (n && !a[d].once) || (i && a[d].context !== i)) &&
              c.push(a[d]);
          c.length ? (this._events[r] = 1 === c.length ? c[0] : c) : o(this, r);
        }
        return this;
      }),
      (d.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = s ? s + e : e), this._events[t] && o(this, t))
            : ((this._events = new r()), (this._eventsCount = 0)),
          this
        );
      }),
      (d.prototype.off = d.prototype.removeListener),
      (d.prototype.addListener = d.prototype.on),
      (d.prefixed = s),
      (d.EventEmitter = d),
      (e.exports = d));
  },
  function (e, t, i) {
    "use strict";
    var n = (function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n));
        }
      }
      return function (t, i, n) {
        return (i && e(t.prototype, i), n && e(t, n), t);
      };
    })();
    var s = (function () {
      function e(t, i) {
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.window = t),
          (this.document = i),
          (this.element = this.create()),
          this.setPosition());
      }
      return (
        n(e, [
          {
            key: "create",
            value: function () {
              var e = this.document.createElement("iframe");
              return (
                e.setAttribute("scrolling", "no"),
                e.setAttribute("title", "Weply chat"),
                e.setAttribute("data-hj-allow-iframe", "true"),
                e.style.setProperty("pointer-events", "initial"),
                e.style.setProperty("z-index", "2147483647", "important"),
                e.style.setProperty("padding", "0", "important"),
                e.style.setProperty("margin", "0", "important"),
                e.style.setProperty("display", "unset", "important"),
                e.style.setProperty("border", "none", "important"),
                e.style.setProperty("min-width", "auto", "important"),
                e.style.setProperty("width", "initial", "important"),
                e
              );
            },
          },
          {
            key: "reCreate",
            value: function (e, t) {
              (this.element.remove(),
                (this.element = this.create()),
                this.setVisibility(!1),
                this.setUrl(e, t),
                this.document.body.appendChild(this.element),
                this.setVisibility(!0));
            },
          },
          {
            key: "setUrl",
            value: function (e, t) {
              return (
                this.element.setAttribute("src", e),
                (this.element.onload = t),
                this
              );
            },
          },
          {
            key: "setBorder",
            value: function (e) {
              return (
                (this.element.style.border = e ? "dashed" : "none"),
                this
              );
            },
          },
          {
            key: "setStyleProperty",
            value: function (e, t) {
              return (this.element.style.setProperty(e, t, "important"), this);
            },
          },
          {
            key: "setPosition",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                (this.element.style.position = "fixed"),
                (e.bottom || 0 === e.bottom) &&
                  (this.element.style.bottom = e.bottom),
                (e.left || 0 === e.left) && (this.element.style.left = e.left),
                (e.right || 0 === e.right) &&
                  (this.element.style.right = e.right),
                (e.top || 0 === e.top) && (this.element.style.top = e.top),
                this
              );
            },
          },
          {
            key: "setVisibility",
            value: function (e) {
              return (
                (this.element.style.visibility = e ? "visible" : "hidden"),
                this
              );
            },
          },
        ]),
        e
      );
    })();
    e.exports = s;
  },
  function (e, t, i) {
    "use strict";
    var n = (function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n));
        }
      }
      return function (t, i, n) {
        return (i && e(t.prototype, i), n && e(t, n), t);
      };
    })();
    var s = (function () {
      function e(t, i, n) {
        (!(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.window = t),
          (this.document = i),
          (this.storage = this.window.localStorage),
          this.changeWebsiteId(n));
      }
      return (
        n(e, [
          {
            key: "changeWebsiteId",
            value: function (e) {
              ((this.website_id = e),
                (this.storageKey = "weply." + this.website_id + "."));
            },
          },
          {
            key: "set",
            value: function (e, t) {
              var i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "service";
              if (!this.website_id) return this;
              var n =
                JSON.parse(this.storage.getItem("" + this.storageKey + i)) ||
                {};
              try {
                n[e] = JSON.parse(t);
              } catch (i) {
                n[e] = t;
              }
              return (
                this.storage.setItem(
                  "" + this.storageKey + i,
                  JSON.stringify(n),
                ),
                this.storage.removeItem("" + this.storageKey + e),
                this
              );
            },
          },
          {
            key: "get",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "service";
              if (!this.website_id) return null;
              var i = (JSON.parse(
                this.storage.getItem("" + this.storageKey + t),
              ) || {})[e];
              if (void 0 === i) {
                i = this.storage.getItem("" + this.storageKey + e);
                try {
                  i = JSON.parse(i);
                } catch (e) {}
              }
              return void 0 === i ? null : i;
            },
          },
          {
            key: "remove",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "service";
              if (!this.website_id) return this;
              this.storage.removeItem("" + this.storageKey + e);
              var i =
                JSON.parse(this.storage.getItem("" + this.storageKey + t)) ||
                {};
              return (
                delete i[e],
                this.storage.setItem(
                  "" + this.storageKey + t,
                  JSON.stringify(i),
                ),
                this
              );
            },
          },
        ]),
        e
      );
    })();
    e.exports = s;
  },
]); /*version=2025251216*/
