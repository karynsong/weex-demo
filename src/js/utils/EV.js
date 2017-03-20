function Event() {
    this._listener = {};
    //it makes the this variable point to the newly created object
}

Event.prototype = {
    // constructor: this,
    subscribe: function(type, fn) {
        if (typeof type === "string" && typeof fn === "function") {
            if (typeof this._listener[type] === "undefined") {
                this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);
            }
        }
        return this;
    },
    subscribes: function(obj) {
        obj = typeof obj === "object" ? obj : {};
        for (var type in obj) {
            if (type && typeof obj[type] === "function") {
                this.addEvent(type, obj[type]);
            }
        }
        return this;
    },
    publish: function(type ,obj) {
        if (type && this._listener[type]) {
            var events = {
                type: type,
                target: this
            };

            for (var length = this._listener[type].length, start = 0; start < length; start += 1) {
                this._listener[type][start].call(this, obj);
            }
        }
        return this;
    },
    publishs: function(array) {
        if (array instanceof Array) {
            for (var i = 0, length = array.length; i < length; i += 1) {
                this.triggerEvent(array[i]);
            }
        }
        return this;
    },
    removeSub: function(type, key) {
        var listeners = this._listener[type];
        if (listeners instanceof Array) {
            if (typeof key === "function") {
                for (var i = 0, length = listeners.length; i < length; i += 1) {
                    if (listeners[i] === key) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            } else if (key instanceof Array) {
                for (var lis = 0, lenkey = key.length; lis < lenkey; lis += 1) {
                    this.removeEvent(type, key[lenkey]);
                }
            } else {
                delete this._listener[type];
            }
        }
        return this;
    },
    removeSubs: function(params) {
        if (params instanceof Array) {
            for (var i = 0, length = params.length; i < length; i += 1) {
                this.removeEvent(params[i]);
            }
        } else if (typeof params === "object") {
            for (var type in params) {
                this.removeEvent(type, params[type]);
            }
        }
        return this;
    }
};

module.exports = Event;
