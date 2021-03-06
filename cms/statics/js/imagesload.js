/*!
* imagesLoaded PACKAGED v3.0.3
* JavaScript is all like "You images are done yet or what?"
*/ (function() {
    "use strict";

    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return -1
    }
    var n = e.prototype;
    n.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, n.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, n.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, n.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, n.on = n.addListener, n.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, n.once = n.addOnceListener, n.defineEvent = function(e) {
        return this.getListeners(e), this
    }, n.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, n.removeListener = function(e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), - 1 !== i && s[r].splice(i, 1));
        return this
    }, n.off = n.removeListener, n.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, n.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, n.manipulateListeners = function(e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) s.call(this, t, n[i]);
        else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, n.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, n.emitEvent = function(e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o) if (o.hasOwnProperty(r)) for (i = o[r].length; i--;) n = o[r][i], s = n.listener.apply(this, t || []), (s === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, o[r][i].listener);
        return this
    }, n.trigger = n.emitEvent, n.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, n.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
})
    .call(this),
function(e) {
    "use strict";
    var t = document.documentElement,
        n = function() {};
    t.addEventListener ? n = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : t.attachEvent && (n = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var t = e.event;
            t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
        } : function() {
            var n = e.event;
            n.target = n.target || n.srcElement, i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var i = function() {};
    t.removeEventListener ? i = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : t.detachEvent && (i = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var r = {
        bind: n,
        unbind: i
    };
    "function" == typeof define && define.amd ? define(r) : e.eventie = r
}(this),
function(e) {
    "use strict";

    function t(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    function n(e) {
        return "[object Array]" === h.call(e)
    }
    function i(e) {
        var t = [];
        if (n(e)) t = e;
        else if ("number" == typeof e.length) for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
        else t.push(e);
        return t
    }
    function r(e, n) {
        function r(e, n, o) {
            if (!(this instanceof r)) return new r(e, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? o = n : t(this.options, n), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred);
            var a = this;
            setTimeout(function() {
                a.check()
            })
        }
        function h(e) {
            this.img = e
        }
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var i = n.querySelectorAll("img"), r = 0, s = i.length; s > r; r++) {
                    var o = i[r];
                    this.addImage(o)
                }
            }
        }, r.prototype.addImage = function(e) {
            var t = new h(e);
            this.images.push(t)
        }, r.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && a && o.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var s = this.images[r];
                s.on("confirm", e), s.check()
            }
        }, r.prototype.progress = function(e) {
            var t = this;
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
            })
        }, r.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, s && (s.fn.imagesLoaded = function(e, t) {
            var n = new r(this, e, t);
            return n.jqDeferred.promise(s(this))
        });
        var c = {};
        return h.prototype = new e, h.prototype.check = function() {
            var e = c[this.img.src];
            if (e) return this.useCached(e), void 0;
            if (c[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this.proxyImage = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
        }, h.prototype.useCached = function(e) {
            if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
            else {
                var t = this;
                e.on("confirm", function(e) {
                    return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                })
            }
        }, h.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, h.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindProxyEvents()
        }, h.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindProxyEvents()
        }, h.prototype.unbindProxyEvents = function() {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
        }, r
    }
    var s = e.jQuery,
        o = e.console,
        a = o !== void 0,
        h = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
}(window);