'use strict';

var React = require('react');
var axios = require('axios');

/******************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnamesExports;

var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len) {
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > SIZE*2)) {
		for (BUFFER='',IDX=0; i < SIZE; i++) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w !== 'undefined' && !!w && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = null;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            if (this._ws) {
                return this._ws.readyState;
            }
            return this._options.startClosed
                ? ReconnectingWebSocket.CLOSED
                : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    ReconnectingWebSocket.prototype.dispatchEvent = function (event) {
        var e_1, _a;
        var listeners = this._listeners[event.type];
        if (listeners) {
            try {
                for (var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()) {
                    var listener = listeners_1_1.value;
                    this._callEventListener(event, listener);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return true;
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, __spread(['RWS>'], args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (!!url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

var baseConfig = {
    // http请求接口地址
    httpAPI: "http://10.60.129.65:3080",
    // websocket请求接口地址
    wsAPI: "ws://10.60.129.65:3080",
    waitTimer: 5,
    answeringTimer: 3,
    questionFetchCountMax: 10,
    socketHeartbeat: 30,
    questionFetchTimer: 3,
    httpError: function () { }
};

var httpAPI = baseConfig.httpAPI, wsAPI = baseConfig.wsAPI;
var api = httpAPI;

function presistFactory(defaultValue, key) {
    var currentValue = localStorage.getItem(key) || defaultValue;
    var set = function (value) {
        currentValue = value;
        localStorage.setItem(key, value);
    };
    var get = function (force) {
        return force ? localStorage.getItem(key) : currentValue;
    };
    var remove = function () {
        currentValue = undefined;
        localStorage.removeItem(key);
    };
    var clear = function () {
        localStorage.clear();
    };
    return {
        set: set,
        get: get,
        remove: remove,
        clear: clear
    };
}
var Authkey = "__tk__";
var Infokey = "__info__";
var Firstkey = "__first__";
var testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiZW52IjoiZGV2IiwiaWF0IjoxNjc5NjI3OTUwLCJleHAiOjE3MTExNjM5NTB9.YSNUJXFRFrSGYQ-0sNPekEn6KhRB7cSc9XKEP4lHUEk';
var authToken = presistFactory(testToken, Authkey);
var authInfo = presistFactory("", Infokey);
presistFactory("", Firstkey);

var httpError = baseConfig.httpError;
var notToast = ['payment/status'];
var request = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var url, _a, data, _b, headers, _c, method, useURLParam, res, err, err_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                url = options.url, _a = options.data, data = _a === void 0 ? {} : _a, _b = options.headers, headers = _b === void 0 ? {} : _b, _c = options.method, method = _c === void 0 ? 'get' : _c;
                useURLParam = ['GET', 'DELETE'].indexOf(method.toUpperCase()) >= 0;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios({
                        url: "".concat(api).concat(url),
                        data: !useURLParam ? data : undefined,
                        params: useURLParam ? data : undefined,
                        method: method,
                        headers: __assign(__assign({}, headers), { Authorization: authToken.get() }),
                    })];
            case 2:
                res = _d.sent();
                if (notToast.some(function (el) { return url.startsWith(el); })) {
                    return [2 /*return*/, res.data];
                }
                // netWorkState.set(true);
                // failureTime = 0;
                if (res.status !== 200 || !res.data || res.data.code !== 200) {
                    err = new Error();
                    err.response = res;
                    throw err;
                }
                // eslint-disable-next-line no-console
                console.log('request success:', url, res);
                return [2 /*return*/, res.data];
            case 3:
                err_1 = _d.sent();
                // eslint-disable-next-line no-console
                console.log('request failed:', options, err_1);
                if (err_1.response && err_1.response.data && err_1.response.data.code === 401) {
                    authToken.remove();
                    // window.location.href = `/login`;
                }
                if (err_1.response && err_1.response.data && err_1.response.data.error) {
                    // // 连续断网 3 次
                    // failureTime += 1;
                    // if (failureTime >= MaxFailureTime) {
                    //   netWorkState.set(false);
                    // }
                    httpError && httpError(err_1.response.data.error);
                    return [2 /*return*/, { code: -1, msg: err_1.response.data.error }];
                }
                httpError && httpError(err_1.message);
                return [2 /*return*/, { code: -1, msg: err_1.message }];
            case 4: return [2 /*return*/];
        }
    });
}); };

var BASE_URL = '';
function indexQuestionDetail(_a) {
    var id = _a.id;
    return request({
        url: "".concat(BASE_URL, "/question/").concat(id),
        method: 'get',
    });
}
function chatWS(_a) {
    var successFn = _a.successFn, errorFn = _a.errorFn;
    var rws = new ReconnectingWebSocket("".concat(wsAPI, "?token=").concat(authToken.get()));
    rws.addEventListener("message", function (_a) {
        var data = _a.data;
        try {
            var packet = JSON.parse(data);
            successFn(packet);
        }
        catch (error) {
            errorFn("socket JSON.parse error ~");
        }
    });
    return rws;
}

var Component = {};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var deselectCurrent = toggleSelection;

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true";
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;

var _react = _interopRequireDefault(React);

var _copyToClipboard = _interopRequireDefault(copyToClipboard);

var _excluded = ["text", "onCopy", "options", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard$1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  var _super = _createSuper(CopyToClipboard);

  function CopyToClipboard() {
    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
          _this$props2.text;
          _this$props2.onCopy;
          _this$props2.options;
          var children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var elem = _react["default"].Children.only(children);

      return /*#__PURE__*/_react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

Component.CopyToClipboard = CopyToClipboard$1;

_defineProperty(CopyToClipboard$1, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

var _require = Component,
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;

var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAttJREFUeF7tW7GO1DAQHW+0/3FIUNFCzR71XYeooYECUWwz1lYcVeQpkSiggR66o4btOTo6kLiOr9gdFF0WLXdxxmtP9hLitGNPZt688TjO2MDIHzNy/yEDkBmggIBz7sQYcw8AZgrqklUw809jzGcAOEXET20KVVKAiL4DwO1kyztQwMwvrbUnPtVaAHzpS/SbHGXmu9basyaZCgB1CjzoKwsA4D0iPu4MgA6Ym6SyLMtZURQVKzfPOSLeGA0AlaNExNsOI2Ij21VSIClcHU3OAGgxgIiOAOCYme8bY252FLCd1IbUeRUG1Kv7i52s2/NgX51PBsA5d8cY83XP/kS9rqnOJwNARO8A4FGURfufdKXOawDwCwAONr6sVqvDxWKx3L9vV98YUuc1AAiqo9cFiOSgJN/Y7d0HhCrIAFwTAlKAJHlmQI1ATgEfg0MpVJblQVEUM2b+WzE0ssIYczadTr/N5/PfTfok+yS5WgoQ0RsAeKLhdIOOD4j4sO8A/FMutYHwfcZKEZbkmQFai+Do1wBtyofqkyguydVSINRg7XGSg5I8A6C1BmhHNlSfFGFJnhmgxYDRV4G8E7x0/Byaw6Hj8k6w798Co18DQqmsPU4qc5I8l0GtMqgd2VB9UoQleWZAZsAFAsmHorFVQDrzk1JBorgkV0uBxJ2g98xvSAAknQn6dnpDAuAVADyXDPbI3yLi05i5EsUluVoKVIqqv7WTyWSnLtH1er1M+dssOSjJVQGIiWDqHMlBItpu3lwi4mHTO5OrQKojsfMlALaaN4GZP/raZf9bAEKBzQD4kJIoFopwV+O07MsMyAzwIKBFscGmgHPux3ZrbJ/b5KrWWWvtrRiw29aALhsfYmxtmxO9pW4DoGqSPtW2tCN9x9LlKN97W+8LDLlZOhRo8cJE3TT9rL4UpdoIFWpkw7hzAFgy82vfZahQ3SIAoYqGOi4DMNTIadk9egb8AdQ6s18r5lTLAAAAAElFTkSuQmCC";

var img$2 = "data:image/png;base64,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";

var Question = function (_a) {
    var data = _a.data, className = _a.className, onCopy = _a.onCopy;
    var parseInfo = {};
    try {
        parseInfo = JSON.parse(authInfo.get() || '');
    }
    catch (error) {
        parseInfo = {
            userProfile: img$2,
            userName: '小蜜蜂'
        };
    }
    return (React.createElement("div", { className: classNames('question-wrap', className) },
        React.createElement("div", { className: 'question-box' },
            React.createElement("div", { className: 'question-avatar' },
                React.createElement("img", { src: parseInfo === null || parseInfo === void 0 ? void 0 : parseInfo.userProfile, className: 'question-avatar-img' })),
            React.createElement("div", { className: 'question-right' },
                React.createElement("div", { className: "question-content-box" },
                    React.createElement("div", { className: 'question-name' }, parseInfo === null || parseInfo === void 0 ? void 0 : parseInfo.userName),
                    React.createElement("div", { className: 'question-content' }, data)),
                React.createElement(lib.CopyToClipboard, { text: data, onCopy: function () { onCopy && onCopy('question'); } },
                    React.createElement("div", { className: "question-icon-box" },
                        React.createElement("img", { className: "question-icon", src: img$3 })))))));
};

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAABaFBMVEX///8AouwJZZRdxPTf9P0Fpe1QkrNXlrb8/v9QwPP+//9JvfIMZ5YKp+30/P/o8fYPaZf6/P0acJz3+vw3gqjs+f661OL4/f/s9Pjk7vQmeKESqu6o4PkWbZoTbJmNuM4vfaXj9v1lyPTn9/7w9vkYrO6tzNx5q8X0+PuEssra6PA/h6zJ7Py35voxtfAhr+/S7/yy4/qt4vkcre8PqO6+1+Noob5Mj7Iec5685/uC0vbW5u6R2PiM1vfI3eiRutCItcxfnLpHjLCj3/kmse9/r8hbmbjg7PI3t/Gxz95Ciq6H1PfT5O210eB0qMNwpsFknrzN7vx90PZyzPXe6vErsvAqeqOX2vjQ4uupydqlx9iawNTw+v7Y8f1ryvVBu/HL3+mhxdfb8/1Zw/Oc3PhUwfMidZ/A6ftGvPLD2eVso8CVvdLD6vt4z/Y7uPHO4eqg3fjF2+bV8fzF6/s+ufGew9ZUlLXB2OSAn6y9AAAcLklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm71574YrCKAC/76uYjtsM437J0HEpRYNBVBlq3EpF0VSJukVDRSPa/1+TflGdWVPZSe3drOcPnI/nrOy19iEiIiIiIvq/HH66tZvTk7Nyaz2nISedTi8JFHnirWdCxaUmDYr1CzSt3qrqFCqq17Begepb1V8lQsX0xwyaTAl0oD57IVREmWFHAr0sVZ9dCWHrhiWiAn1Wv7UJIfGkYTMCjajnRhuFgFnD5gRqHFbfTQkVVlNrUEezQFPqPUZBZNywjECdVeo/RsHCPlYa1FIn0ImGgFGwoFXDVgS60SAwChaya9i8QNFlDQOjYH51LQZVrgl0qoEYrRbKI2vYhkDV3RoKRsF8lmIG1TYJtKXBYBTMp9ywPYGO/T4EYBQs5tywRESgCg0Jo+B9kYRhaYEGNSiMgvftGVYuUGRHw8Io+LtUrUGxpWB7YIyCf2PDsKxA9WMaGkbBu15VGnTWJ1CXBodR8K4Jw3aD7oExChazYtiAhN0DYxTE4h8MOxSoTYO0LPRLxrDx4HtgjIJITbtB7TXB98AYBZE5w2ademBXJf76IiQyY1gy7tID694X8tuAYesCXSr0RshvR4aVCRQdUuQqKuS1vjO3MfipQptCfnMcg+93K3Ig5LdtxzH4liKt9UJ+KzPsh1MP7FTIbw2OY/AKRYb4Bei5SNKwa6ce2I2Q3xzH4JEFRbqE/NbkOAZ/rcgYL2Xz3YVhGace2LSQ31zH4F2K7ESE/LZqWI9AmwrxpM13jmNw+a7IiZDfXMfgbezchu254xh8VJG3Qn5r7nAbg79XZIG38flu0bCvTj2wQXQA3ZwSemznhiUjLj2wp5JXXTq7ehYzs47kROab0OOJOo7BLxUpPZY8DhdjdtfkRb/QA3kyBo8OPXh32TCfJ2jMrQk9guI/Bdl26YENV//5wEXLrzcu9O+9Myzr1AMbkfuuW6yQBN8DP9m7F3YooyAO4DOHt9js2uRW6xJCuSWXFYUKuedabq1IilRSyddvSc9TWnPOecfDmVO/L+D+euec+c/YcCMMPoeULTipkvp4FZPw3znrUrRlIKUCJAQpOKFSkeLF8J8RV8LgV5Dy0TZ4oCq24T8jboTB7yGlNgZ/Gs1TOuWXzsLlM/D0XzijqlS0aVYfWNnfXUeSPAPvccPgvXbz96aVKHH/i5JpRasEUk0HEoLWv46chbkEnltTtBdXgVRtFwUrVNL4XpMww+AzdlGwPSXOTb97GZcVrQton+yiYEklzw54TBcGz3sApDK7KNi1ciVPQSn4q55XBcXa7Qbv1SmJpsBb3DD4rGUUrF5JlPcAfPWdFwbPjiKhoyhD+FykLvBUJzMMvmkbBbuhZPL0glIbBt8G0jvbKNhtJdRNP9tUdhTtqX0fGB0FK1VS9YOHuGHwBV0UzJ8ngJ+l4HtFuwOklwnrKNhVJdZ78M4EMww+h5ReyESJledfv/ITXhj8SxAiCnZfifUEPFOnaGNA2woTBbus5BoFr2jD4IucPrDcU5uP5HrhVyl4h/fSUzKIhCD71En0glWCR7hh8F7DKJgPt4G/9cb5gxkGr4ki4W4JHPPkNuhYEryxxzz6zELKPeLJk6fkylsET0QKeX1wTUjZovcRCTYGnthXtO+cPrAgBYRFyY8AVQde4IbBBzRRMNKQMlFXWlqaf+R62vDw8Pz8fMOhB2kTExOLi4u7u2tpfWl7e9vb2wcHnWnFhybTRtPqjiylLaetH9rf3185tHOo/1DloUdpd9KG4trTUR884y0FibVromCknEaXX7eGtMNyPdAQ54XBZ3nbN+f1pWDhbbgQ+ibZCh9KwUuKtg6k7AAJ30BrMq5oN67DhVnWBiXFm2SGwTc1UTC9znL6598AF6hRG5UW7upNRevj9IHNgYm1Aur5nw8XqU/79yEcNwz+HAmJl2CkoVGdJnkbLtZj7bgU0bhh8IUz2gq2X5D58X/xUczrFV6XgknelVdRAgkjETBWOlWuTipcduHK9Y62VU6wXeal96pVFIx2bbkr7/dnz/dOcMK1G9pmWbkaFW2U0wdWDbbyi/uTjYWNY13TKxPu7BRc0rbLi8UNg2/9G3thG7WFklDcMPg9pCyAL9Z8LQWHeGHwkrtIaJEwSSPyurn53deZGHNu0jqINBxXpIJbQBpHygdwXElbVksUjwQtqwNF1LtJhfa6RKLLirbC6QPLArfNrJ6oYIPqVPjjsiEQSBsGz2H0gUXd3gtbtYkZXGkKWwrGh0GcnEJFO+D0gfWCw3J6o5hR0JMTMjdzGcThhsFHkDDo8htgEfGpj7wOuUZV3EDr0gLeQ20AKd3grqpBJHTMhGteLHTn4MrMFO+EO1aLhE1wV6odSYnWcOn5fRCFGwb/iIRoNjirphY1Eq2h7k3vy5ok/0TRljh9YD3grMgWag3GIJN+be+sINwweC4S7jq8F7YXDawSizTI7nkxuGHwbk0UzFkzAZroDtU9+R3EeKRoSU4f2BVw1xYaGYyE+r/pSAMDt8tJ3wf2ULMX1lmtaKgt1JtzocunHzZ9jv2cPrCP4K4sNPQpXO28AiL0McPgq0hoj4GzagI01RTq9KxARCnIDYO3BnQUzF0PkaZ/ju34sFRsnbkW6RUSXoHDNtDYSLgYTZ6ApWLaMLjma2jTRMEcdheNBTHIqFj+UrF6Ravn9IHNgcNqkGB6ndUlfalYA3MpyDgSal+Cw5rRwudTN6sLXyrGDINXRenvmsvakGDc0fJM9lKxYuZSkCwkjLh9J16GFmZPb6SQPEmeGwZvQsoMOO0zWliF06xIXirWr2iPOX1g1eC2N2ihh9isI3epWH55+JxjTtPDzXbRUbBuJFgk24vlLhVLhh56VdNTi4iyo2BVaKGZ2q4ndZL8Ytg+sKqsAHVa3H4DPNSB5lJkKS10kvxYuN/cyEIHHpEdBQP4hMbagVIvc5L8UrgtKFWv8JjkKNihHjRWrTlOlzhJ/tqNUHuQXt9FAx1uR8F+ykZj94C07+poU8pQqPr1Sy0ekxsFy3iRSWvS5erkTZIfjoc5wUol0MRz10/A6TiT/bX2gbylYqGWgpS04C9io2DEaiNCG9CeSpskf6APg9PdX1KjYMRZECfcMC+sFNSGwTs1Q4CkRsFCNwWN+zVJfiVMvj3yHNGXEvBYTQIJNiMubosqBW9pw+Cc+9OEw53AJ32NoqEsoK1LmiQ/pWhDpz4APCoCf2oO0FATs7t6F9zRqJtyxXtjGgRByszTIbQ9QUvF+sL0gc2hMaebgU/qrkUzA8yE1RK443GIzcCDNg1UkhTlIsE85TQsaKnYcIV1E0s2mtsCWRYSaGLWo0ny9OfaxeyhTIAwsfEE8g84br+VM0lecxc4Sibp9CRcBv6p5N5GB/uIc0nbY+mOOttE8Ee08AUEiqQGela/IeWdR5PkGy2bWLLQwleQKlZLN7r5s1RszfI2eBOPeHUdmMlnVqvrtKClYkm7UnDV+38BP0VaOHHH64ImyeeXW5WC42jB6VQogb/78pGgSfL9dCnISFJFQbINk6FXPkySv/rCphTsRvTzMsBy7ukVoNUJWio2aVMKvgwwzbuOAPsN+M3MuMUeuKOLLgWpqYpSh4NyS0F9x+uukjNJ/kGeRSm4gKaigjpCQpSCD4GWFLRU7JmiJEOGKXNBuEgLI/esnyTvUClYWmARDso1j9JK9wE5kw8qBU2SX7HIM6QCPy+DM9kwnH4nfpJ8zk2LPEM1/iJ5NAy7FNQHhUYFLRUrtsgz1ETRwAb4YJYVFHqi3cHnjssWpWAZ6g26PhrGuhSkg0LiJ8k3xC3yDLOo05ECPwywgkLvBU2Sr7coBSO5/lcARCloHhTKL5CzVOzWfYtSMJaLlGAAvPHB9LRb/FKxdZtoe4RqDattAo9sIKWJN4Mz7tAk+UihVbR9IMBTtFSBT7KjnKDQpKBJ8nt20fbsLMykdsGhV9szMWsWFHJ/knxsHGiPLRtEZ7bwpOis9BsgohSkg0LuT5KfDb7Yd7LR0fbU+Mjvtd9GmeQmsFMNsIJCU65Mks8OcIsVFEpCJjVlvXMbr65Uzy50+/bsPzkNmw4KOT9JPlffonHthrQpZ+fjKysotOPGJPluTBvMAVKdtCln5yTLYB6u45Pkc54bTe0YkzXl7LxURfVBIccnyR+HOjuKgLQrasrZ+elBygJzJdMknCV6s2810JKSppydn1g7JyjUEOet5QW+atM2lvxyOVPOzlMZKyhUz1vMzdcaGLexVMqZcnaeIiOcoNCt+xdcCv5g73y4YoqiKH7uSYwxMU1jNMmUKdWkQhqN/AlRUU0KUaHyv0IifH1rsVgLb8699x1d577e7xMo677uvufsvXfM11gaF2IpaC8FDzEjOTdgV2m1WWOZ8SblzC20FOxnJslPgyn8G8wU0AzHUjBYCnKMQuX/mSQ/b7fGcinlS8qZW0ZYRqEDTkvF6IF2HdBUYyloLwWPHxWbJP/SdmW/ORNLQXspWASQWSoWEHWxAzTLsRQMIQXPgshSsURQunerbnzhTeC1U/pYjUJr/6dU7GEYR0MuloKB1HGMQklGqRhrCBDECNAc8Cbw2iknGzhGoXWnSfJ0rFvDSd2dNZaC9lJwSl6p2Nn6kN7Nbm8Cr51CS8GGDnFJ8iuEo4FxZy3EUjCQOmmlYoOqJpNJIFmLpWCIsvE+fZK8y4N17AzlaGDdWVdhj0JJQf2xWnJbKjbCcTRsx1IwhBQcYybJrzoTLXpHw/VYCtr/Vs8fFpQkX+RVn+QLsRQMYoo+VoJKxVqZ1SelWApa36xUvfZYOXwQnuQ1ejS1+NJ95JbWXTxWhby7G6ve0dDlTfeRW2gp+JpzrK4BB+uGnxdAcyeWgkHMsY7Vov5m5UoHqFOHgWTLm+4jtxRZRqHTDhfDphTNO6C54E33kVM6GjhGoVWr1VD+jZVzZz1yIpaCQUyxjEJ3HfqEB5mZ7m2xFAwhBZ9ojlXBYVLAjqJ5rTMKxVIwiEGWUeiaQ4PYHFMKzsRSMMTB6tdJQYfBsUWlWHfWYW9qcJ0ypzhGoS6H0dEdQ0px7qyXUrEUtD9Yl+2T5Ndhl7iiFOvOWo2loK0U1EexPErpmwSdScFnHKPQq1gKBmAfxVKYgF3jnFI8c3ssBe0Plj6KxeGvcYVX855oj6WgtRTUR7FYvanxl8NZ5vZYCtpJQfsoli6g4dtDeOb2WAoGS0GOUei2wwzOo0NK8cztsRS0loL6KBaLhBh+TiTNU6DpjqVgsBTkGIWmU+7ighM3NVLwCcco9EpQDa5brrCMQrMOA8P7mVJwDSluwR5F88bSZ/bCsgkOeMMr+09mYykYxCDLKLTpsD/yo0YK3kxwjELjsFdZoY1CJqViZXDCPUVzBWiux1IwiLOKYxTKOeyQPnqcJwXzhT0pBXvLS23V7tHF9XwoKTivTZJPT4AjHiqaIsvRsAbRo7E824K/yJYe2Y/b6/fphu02F2h+XhhnfNHUsrekYE8pg3+wsJSkpaC9UaitCWgcSsE3QNO1l6RgYrmCAWRztlLwNcjhoKIZ5BiF0hMQIXrbsQZfOu3G7QNJEMMznRQ8BiRbqb0iBXMZouCl104KPgQ56KTgFMsotA1RYTSFBJmy1bj9uKA61ccaKTjUwTEKZQV97FiMIk1620oK3gM5vGBKwba9IAVzKdRQmbAZt9c/ATEkHyiaOd0aS/SlYG8GtWR7bKTgIZDDRUWzAzQzkZeCARuQ+iSXYzc1RiE5vFQ0rUAzHHUpuIwmpKZtpOBNQcXqtBTUb7JdirgU7HmFRuy3GrdfBjm8UzQjLKPQOnhOCQ35GiAFKaOQGA6fUoqzydacibIUTGTQkP1Wm9dFkMMHpVibbMtRloJf0ZR0j5UUPAtiSA4omj7ONbnitxSsojFdVlPBFZDDW0XzHjhGoW7wmRY05rrd5vUgyOG5ohnjGIXS98Ff7qM5lYCpIC2vxLCvQbE22Wij0AHwl69oQaPd5vUUyGFeKdYmW3dUpeAiWpAP2Lym5ZUY6O4jfalYTyWiUrANLbhqacKtAzmMKZrnLKPQZ/CVbrTgtu3mdR+IIclMkocsElQ6wVO60YIZWxPupKBPY5+imUxyqk/uVK8t9YKHlNCCVWsT7hjIoU7RfNAahXRkrs80gmdsMi6B3+nXySsxcJPk8wXUU7nm2btgmSUD9VJwHuQwwkySL6EJmWXwiWY0p50w4RJGITHopGD9PlOjEM2XZvCIBTSmGiaP6SXIgVsq1oVmvCqDP1TRmFytvVtvjELvFc1bY6MQTaoLvGEbTSk0hVq3GAA5cJPkH6XQjHQOfCHZjoZs1Fy48sYkAEVmqdgF49PiT37EZzQjNRE8Z6tXJMcF7YYBdFhJQdooRJM5Ap7QWEAj7tb033pjFDQoFbtnMzuJRp7sIhpRuB/KdjEgaD/cMkmeNgrp8UQKmIrbz7UyOPzRAP+kVGwGTWn341n4FhoxXjOQ1ZtXAPskeb1RyP882Yk0mtDeGSqHq0HQOyCRcmaVJL+FptwADzhg9v9/pKaq8mYS8K9KxWbQGA98g1/RhOyRmrUM3swCCT+DXb7FBhpzDaSTyBpZgppD/jltBZHwSsVa0Jg7IJ1N1HNiLeyF+j3I5BgnSb4XzcmAcJozqCM1nickNc0cCIVTKpZDC6S/Bm5oT391gtyv8MYeapkk309vB0flLWg6RZ79bPV2p2bDyheDuG2S/IOEcQ22z9viN8jDn9fb7byJiLAvFSP3JyLyFLSIFKN6w603ITH/Mkn+FlqwCIKhhwALjXrLvTcxUf+yVGzUzkkjmBJSzDDzFw+CbLRJ8h8hmCW0QPJeEL3lPgw0j09pp6rCCZskX46KDBwnFcAlZgbzOxDPoXClYj0pNKYF5LKuWQCneaKRUadEDgGIn8HiFnsao7AURA8BMs3M0/MBPEBbKsaWAYI9Qpusf/g5pbypjGAkyQdLwVU0JS33CtCZQYL2BK+WV30CLwhZKnYHDbkLYplFirJ+nOpNMMgulIrdRkOmQSq8+OOOIW3cjidcVDQrLCvNMIjlBiv1rqiUN+Fg3FIxxlNA+hFIhdeGN6eUN/GAu5QkP4sGjIJUmH2Y75XyJiBUy7tQX7OmBa//AJRYE8wxpbyJCNbzOFyS/KUKaqjIlYC6Tmx9yoYvIeEmvAinaKYzSNIiODFsnNWKP68do/pFciDcYuMW/ZKSB7Fsm75dRMAMbsLrkKvN908Tn1HBIUHJLBIU8vCTSJjBd7NULFFKYSAnRiUvQy0jRRvz5eSB5B895EftTM3J5tYXDGBc8OcfoLOCBC1NvLdTdRE8ZD58qVjvRhp/IzO7BaKZNVxhi4wZnF8qRj9tNy/OZlP4nUL27m3pkQD0EOCGwSqtL6GQLkvFeh5dXc/l7vswAx/WdIPSPPXRDG6YJO9L6v1uDgFmgeajl2ZwEz4p5U3qPYfGBbM9sGiZwQ1LxTxJvU+efVj3ZmdyYLJ4pb8DCOxtbZvwg6iZwc2S5P34uF08OPTb3GXssO0QQJ9pFT0zuAkjHlxvEh8G/lYoT4+CMdcNTCyRNIMbJcmLT7vqD/4nHn+RBDOuIsUX5kdySFBF3Df27oSpiSCIAnDvSjACgaAcHqCABwpECZ5RERXkEEu5QSWiHKJUMOFQ/r7ZrCkFoXc3E2V75n1/ASrQ6Xmv/0WT/Aodr9oO6yij6TIsAeJdiv8m9ZNwo55N8sep/Sa3getRXwJ0Em9HdBjcj54wZx3S/F+oWEptCeB99q5qVHYYvBxHxVbp2LTftniRpOJhkE+K72aqSb72WFjzjrWzlpc7y0pLgIYqtXVJJE0aGA9r4rnD8jYaVWk43iLetKSjIP+uSX5q6mHBuKPf8dg171h15HK5QUeLo8+RLEg4Uo71vEwms7Oz05M36ejN297eTqfTy3kVjva8y3mNecUBReXXc0wpxbzsFQZfJC30WZJNsksApXdg1eH996i8di3BVkpeAtwgXiLMA1JZTVqCRSqYS0dK78CGQv0VSVl1WIJNl7gEuEa8/pB/SRoYH3yW605zaYfvideoTRjcj35LsAyV0GpUk1X8VHxIOsmPgnL1l3IYcsOgMLgfSUuuUyUsAVrriLerUxjcjyVLrKslLAEGiNeiVRjcj96IJdZh83hXnH8HZlYY3F+TvFjN9LdKvhLasDC4H41yR8HaoEfu7hOvIqZbGNxfk7xUjfwSIHgl9JrkoyA8/qtPoWoDHjt/Tbx1DcPgfiQsmW4FXAKcvuLVnqJjGNyPakukajpoQqkSel74UZDSbcscBTeD9Vo3RL3KtKUfBTFtFGwJdtpgj3gfwvpErlz4JgR57tQGunE5TLxtDY6CmDUKdgRaAsRHiPdFTGKaodIkL06G9utUqoROGtKZcJSUJc0sswQIXgndfMuU1pSjGxGFWQ+0BHhLvHFNjoKUblnYKHgi0BKgm3iXYxYrJjwM7se0JcnBtUx9m835SLwTuofBfVhcO1UG1eUQs7xE+gItASYUo9JDmr0DC7t1z9+A1UBLgNY6xTB4kuC/SkQCfiJPKFVC5zzvKsN/loxxn//jwZYAc/UIg4uTPno1ezsT8L7xGPE2jQiDS9N81FSytkgHvbM5zxUH4AuahMHF6T2sqGspQX+5/lmpEvqUKWFwedId+7eUkbUeOkSnUiV0ypgwuERVPQ+XhmLOz/7qt81ULR1mJq5SCR2dNScMLtZiO7eLr1SqhH5sUBhcT002py2KMLjePJYATQiDa27A5pwkXq8lozcfSqsDis8Qb1ffoyCGuGdzOhXD4LsE4Za1OQ+uq4XBLQ3D4Jrp5iuhjT4KYgJ+CdCgehREyzC4TvglgP2EeCtGhsF18kKpEjpjaBhcHzNxvhIaYXDN/bA5TxEG11yTzVdCIwyut2ibUiX0tMFhcD0MKL0DSxsdBtfB2dM2o2ZBMQyeIwg3fgmwgTC45hZqVN6BNQ+ZHgb3ZaDb8dL1vOh+UaXrh+Oka7jomWui6J5rw/XG9fqXzj+8KLpR9NR1qWigoMHmDCAMrsy9vy9TWz3C4GXx1JapSTEMPk5QcOa8LVEl8XoMOwqi4JotULwLYfCyeWnL00m8QYTB/cva4jy4ohgG3yb4bcKW5jvC4Kzgz65laahCGJxMHgW/KobB5wkkj4LDCIM7jB0F4yOKYfB1Asmj4A3FMPgawWGLNyk+n1G7ixCrIDhs9S7FW8WjIFMEkkfBbs8zuQiDl+SSLUOWeEsIg5emfs6W4B7x+hAG13oUbK1TPAoySXCU53b4XUIYfB/TRsG5eoTB9zNsFBwj3gqOgmg9Ct5XDIMPIQwuehSseaQYBk8QSB4F3xBv1fMSOXgYs0PMKwq0eBVhcK1HwffEm8Y7MHWvWi9evBh31TjCMxo2RBEGP1bRaLTecabguuOK66yrruica6RgxtHleuR6VbDgyGazHwueuLa2tr4W7O3t3S1oKpohXkUqlXAkC/ocLY5BRy6XQxYUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+tgcHJAAAAACC/r/uR6gAAAAAAAAAAAAAAAAAAAAAAMBMZGyKNrBRBssAAAAASUVORK5CYII=";

var Answer = function (_a) {
    var _b = _a.data, data = _b === void 0 ? "" : _b, className = _a.className, _c = _a.isDone, isDone = _c === void 0 ? true : _c, status = _a.status, onCopy = _a.onCopy;
    // status: 1创建提问未开始回答 2回答中 3回答完成 4回答异常
    var statusMap = {
        1: "gray",
        2: "black",
        3: "green",
        4: "red",
        5: "undefi",
    };
    return (React.createElement("div", { className: classNames("answer-wrap", className) },
        React.createElement("div", { className: "answer-box" },
            React.createElement("div", { className: "answer-avatar" },
                React.createElement("img", { src: img$1, className: "answer-avatar-img" })),
            React.createElement("div", { className: "answer-content" },
                React.createElement("div", { className: "answer-text-box" },
                    React.createElement("div", { className: "answer-text" },
                        data ? data.trim() : "",
                        !isDone && (React.createElement("div", { className: classNames("answer-cursor", statusMap[status || 5]) })))),
                React.createElement(lib.CopyToClipboard, { text: data, onCopy: function () { onCopy && onCopy('answer'); } },
                    React.createElement("div", { className: "question-icon-box" },
                        React.createElement("img", { className: "question-icon", src: img$3 })))))));
};

var Chat = function (_a) {
    var data = _a.data, className = _a.className, onCopy = _a.onCopy, domScrollFn = _a.domScrollFn, onGetScrollSwicth = _a.onGetScrollSwicth, QuestionCom = _a.Question, AnswerCom = _a.Answer;
    var answer = data.answer, question = data.question, isDone = data.isDone, status = data.status;
    React.useEffect(function () {
        if (onGetScrollSwicth()) {
            domScrollFn();
        }
    }, [answer]);
    return (React.createElement("div", { id: data === null || data === void 0 ? void 0 : data.id, className: classNames('chat-wrap', className) },
        QuestionCom
            ? React.createElement(QuestionCom, { data: question })
            : React.createElement(Question, { data: question, onCopy: onCopy }),
        AnswerCom
            ? React.createElement(AnswerCom, { data: answer, isDone: isDone, status: status })
            : React.createElement(Answer, { data: answer, isDone: isDone, status: status, onCopy: onCopy })));
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABbFJREFUeF7tWmmoVlUUXatooiKaUYOsTCobySYzsslooCiheg00QyhEZGBFaaWRWjQPSGHRhGVEaJAQWVGiNBANRJNERRpFBFERRKxYr3Mf991373fP/b571e+978Dj/bj7nLP32mvvfc4+HzHCB0e4/egB0GPACEegFwIjnAC9JDgiQkDSLgAOBPAByT/SrB+2AEjaCsA0AOeG/7b7LZInDGsAJB2VMnyfbI4jOcjpw4IBgeL2tv9OaZHYfye5w7BhgCQbm1B814iKtoLkaV0NgKS9UxQ/OsLotMgcknd0JQCSEk+b5k5w7YypJF/vGgAkHZqi+AHtWJyZsx3JPzdpACRtHyhuT59Z0ehfABTlgk9IHjKkKlTcoDFxScelDN+jwkY2+kUAWwK4usW8RSSv2aQAkDQmRfHjKxidiD4K4EYAMwHMKZl/KcmnNwkAJJ2RyuSD6nIkCGtsOMm3JT0B4MqIeeNJfr3RAJC0X4rih0UonCfyF4BbSd7rj5JWADg1Yq2fSI7Kk2v0JCjJcZkuX53s93zw+g/B+M8ATIgw3iLLSJ69wQCQdGSK4uMilSwSs6H2+ivB8B0BfAugSujcRHJ+owBI2jlF8akdGt1vK4B5JGcna0naH8Dnbaw9xfmiEQAknZyi+W5tKJc3ZRmAW0h+mjJ+CoA321j/XwDbkPynNgAk7ZWi+DFtKFU0ZW3w+lNpAUnnA1jS5j5rSBbqWCkpSTonRfOt21SoaNr9weuDjqqSrgNwXwd7PUTy2qL5pQBI8vExyeSxWbeKvr6czCX5TnaSpHvCIafKelnZPpKF7MkFILSTLgiGn9XJ7i3mrgOwgOSDeTKSrLSp3+kYS/K7aAZIug1AH4Dxne7cYv6i4PUfc7zuMrccwLE17L+WZMsyPIQBklx+mhrvBq+/WuB1l7nXAOxZkwIvkDSTC0ceAE0w4Ldg+IIiTSS5zL0BYLOajPcyM5Njc3QIWDDkACc+1/gTAYztQCnfwBzrhQeYDstcK9UmkVxdiQE5Mbl5AMJg+M7utnPM+DAYvrSVsCSXqAdiFqwoM6QDnDe/tAzmAHJEYMUkAP7zq0t23A5gPsm/S4y/E8DNFQ2LFV9J8qQy4coApBeU5IcHsyIBo/+ckH18yFOiwj2+zIai7w47N0tajo4AyIDhA9NKADsBmExyVYHhLnPPAHBTpMkxjeTLZRvUBoA3kvRSOCovJDkrJ3xc5pwUJ5YpVsP30STXl61TNwDTATwC4EuS7gANGpLs+YvLlKrhe24HOG/dugGwh33YcRgcRNLNjP4hyeXUdX5DjMUkY/qE9f9AQtJzAC4EMIvkwhQAnVxpq4I2neRjMZNqZUDw9FUAHgewiuTkFAAzADwco1QNMhNJ+hxSOpoAwI+X74cwGEfSTQ6HgI/YZb37UoUjBNaTHB0h1y9SOwDB2GcBXARgBkk/XhgAe98saHosJxl9hW8KgEtCuRtoR9d4vy8DcDbJuWVCyfemAPDb3schDMaQXCfJFcCVIG/4vvBzTQw5naSv1FGjEQAyYXAFySclGZCDc7RaSvK8MMePl84Vu0dpP1TInd9RJH+Nnd8kAM4BzgVLSPZJcvcnm5wGjE8UluROkN8C2nlbWE3S95Lo0SQAfqf/ImhyOICvAGyR0myI8SkQ/OpjEK6PtuR/wZYd4Ly1GgMgEwbu818WY3xaSUmXA7irQkjkPoG3ArFpAJIwSOtQ6Pk8RSW5/zAvMiQmtOo8bQwGbAvA94GkpVbJ+FRI+BHGpe2GFt78huS+FUOmmYNQhsY23vT/nuTiqgpm1vL54u6CkOhPtlXXbzQEqioTIy/JpdQgZKvEwKkzZp1EpusACMnVrXO32JOQ+Mi/FCHpH0xVGl0JQCo3uO9gRrxH0j+fqTy6GoDK1uZM6AFQB4rdvEaPAd3svTp07zGgDhS7eY0Rz4D/AIYYvlDDuAC/AAAAAElFTkSuQmCC";

var INPUT_EMPTY = 'INPUT_EMPTY';
var NOT_LOGIN = 'NOT_LOGIN';
var NET_OFFLINE = 'NET_OFFLINE';
var SERVICE_NOT_RESPONDING = 'SERVICE_NOT_RESPONDING';
var QUESTION_FETCH_MAX = 'QUESTION_FETCH_MAX';
var INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE';
var WS_ERROR = 'WS_ERROR';

var Home = React.forwardRef(function (_a, ref) {
    var className = _a.className, userId = _a.userId, onError = _a.onError, onCopy = _a.onCopy, Question = _a.Question, Answer = _a.Answer;
    var _b = React.useState([]), chatData = _b[0], setChatData = _b[1];
    var _c = React.useState(""), question = _c[0], setQuestion = _c[1];
    var indexListDOM = React.useRef(null);
    // scrollRef是个开关，用于控制是否滚动到最底部，默认开启
    var scrollRef = React.useRef(true);
    // wsRef用于存websocket的send函数
    var wsRef = React.useRef(null);
    // answerRef用于存websocket返回的答案的数组，因为返回顺序可能乱，用index字段进行排序
    var answerRef = React.useRef([]);
    // 用于存questionId，在socket断了之后，用这个id去请求http接口，取问题的答案覆盖到数据队列里
    var questionIdRef = React.useRef("");
    // 用于存websocket的心跳定时器id
    var timerRef = React.useRef(null);
    // 用于存op为status时的返回值
    var statusRef = React.useRef({});
    // 用于存消息发送等待服务端返回的定时器id
    var waitTimerRef = React.useRef(null);
    // 用于存websocket回答过程中的定时器id
    var answeringTimerRef = React.useRef(null);
    // 是否触发了回答中的定时器
    var answeringTimerIsShow = React.useRef(false);
    // question详情接口轮询次数
    var questionFetchCount = React.useRef(0);
    // question详情接口轮询间隔定时器
    var questionFetchTimerRef = React.useRef(null);
    // 输入框输入的问题
    var questionInputRef = React.useRef('');
    var _d = baseConfig.waitTimer, waitTimer = _d, // 后端无响应等待时长 默认5s
    _e = baseConfig.answeringTimer, // 后端无响应等待时长 默认5s
    answeringTimer = _e, // websocket message 回复中断等待时长 默认3s
    _f = baseConfig.questionFetchCountMax, // websocket message 回复中断等待时长 默认3s
    questionFetchCountMax = _f, // websocket message 回复中断 用http轮询 最大轮询次数 默认10次
    _g = baseConfig.socketHeartbeat, // websocket message 回复中断 用http轮询 最大轮询次数 默认10次
    socketHeartbeat = _g, // websocket心跳时间间隔 默认30s
    _h = baseConfig.questionFetchTimer // question详情接口轮询间隔 默认3s
    , // websocket心跳时间间隔 默认30s
    questionFetchTimer = _h // question详情接口轮询间隔 默认3s
    ;
    // useImperativeHandle用于定义ref暴露给父组件的方法 获取全部数据
    React.useImperativeHandle(ref, function () { return ({
        getAllData: function () { return chatData; },
    }); });
    var domScrollFn = function () {
        // 滚动到最底部函数
        if (!scrollRef.current) {
            // 滚动开关
            return;
        }
        if (indexListDOM.current) {
            var dom = indexListDOM.current;
            dom.scrollTop = dom.scrollHeight;
        }
    };
    var handleSetData = function (data, op) {
        if (op === "question") {
            setChatData(function (cData) {
                return __spreadArray(__spreadArray([], cData, true), [data], false);
            });
            return;
        }
        if (op === "status") {
            var id_1 = data.id, isDone_1 = data.isDone, status_1 = data.status;
            setChatData(function (cData) {
                return cData.map(function (item) {
                    if ((item === null || item === void 0 ? void 0 : item.id) === id_1) {
                        item.isDone = isDone_1;
                        item.status = status_1;
                        return item;
                    }
                    return item;
                });
            });
            return;
        }
        var id = data.id, answer = data.answer, isDone = data.isDone, status = data.status;
        setChatData(function (cData) {
            return cData.map(function (item) {
                if ((item === null || item === void 0 ? void 0 : item.id) === id) {
                    item.answer = answer;
                    item.isDone = isDone;
                    item.status = status;
                    return item;
                }
                return item;
            });
        });
    };
    var onTextConfirm = function () {
        if (!(question ? question.trim() : "")) {
            onError(INPUT_EMPTY);
            return;
        }
        // 未登录
        if (!authToken.get()) {
            onError(NOT_LOGIN);
            return;
        }
        function onSubmit() {
            // 清空状态值
            statusRef.current = {};
            // 链接websocket
            WsHandshake();
        }
        if (navigator.onLine) {
            onSubmit();
        }
        else {
            onError(NET_OFFLINE);
        }
    };
    function handleWsSend(params) {
        var _a, _b, _c;
        if (wsRef.current) {
            var id = uid();
            var wsParamsObject = userId
                ? {
                    op: "question",
                    webId: id,
                    question: params,
                    userId: userId
                } : {
                op: "question",
                webId: id,
                question: params,
            };
            var data = JSON.stringify(wsParamsObject);
            (_a = wsRef.current) === null || _a === void 0 ? void 0 : _a.send(data);
            waitTimerRef.current = setTimeout(function () {
                onError(SERVICE_NOT_RESPONDING);
                clearTimeout(waitTimerRef.current);
            }, 1000 * waitTimer);
            answeringTimerIsShow.current = false;
            // 新建一个问题，此时创建答案为空的数据
            answerRef.current = [];
            questionIdRef.current = id;
            handleSetData({
                id: id,
                question: question,
                answer: "",
                timestamp: +new Date(),
                isDone: (_b = statusRef.current) === null || _b === void 0 ? void 0 : _b.isDone,
                status: (_c = statusRef.current) === null || _c === void 0 ? void 0 : _c.status,
            }, "question");
        }
    }
    var answeringTimerCallback = function () {
        answeringTimerIsShow.current = true;
        // 如果http返回的answer有值，就切断socket，把http的返回值直接覆盖到对应id的answer字段上
        // 用来处理socket有回复但是回复中断的情况
        var id = questionIdRef.current;
        if (!id) {
            return;
        }
        questionFetchCount.current = 0;
        var onQuestionFetch = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, answer;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        questionFetchCount.current = questionFetchCount.current + 1;
                        return [4 /*yield*/, indexQuestionDetail({ id: id })];
                    case 1:
                        res = _b.sent();
                        if (res.code === 200) {
                            answer = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.answer;
                            if (answer === null || answer === undefined) {
                                console.log('questionFetchCount.current', questionFetchCount.current);
                                if (questionFetchCount.current >= questionFetchCountMax) {
                                    onError(QUESTION_FETCH_MAX);
                                    return [2 /*return*/];
                                }
                                // 如何answer不存在，轮询indexQuestionDetail接口
                                clearTimeout(questionFetchTimerRef.current);
                                questionFetchTimerRef.current = setTimeout(function () {
                                    onQuestionFetch();
                                }, 1000 * questionFetchTimer);
                                return [2 /*return*/];
                            }
                            if (wsRef.current) {
                                // 关闭socket链接，用http请求回来的答案直接覆盖到对应id上
                                wsRef.current.close();
                                console.log("🚀 ~ file: index.tsx:184 ~ onQuestionFetch ~ close:");
                            }
                            handleSetData({
                                id: id,
                                question: "",
                                answer: answer,
                                timestamp: 0,
                            }, "answer");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        onQuestionFetch();
    };
    function WsHandshake() {
        // 连接socket，处理socket返回的message
        wsRef.current = chatWS({
            successFn: function (res) {
                var _a, _b;
                var op = res.op, webId = res.webId, question = res.question, timestamp = res.timestamp, answer = res.answer, index = res.index, resMessage = res.message, isDone = res.isDone, status = res.status;
                if (op === "error") {
                    answerRef.current = [];
                    if (+resMessage === 4201) {
                        onError(INSUFFICIENT_BALANCE);
                        return;
                    }
                    //   ws其他报错
                    onError(WS_ERROR, resMessage);
                    return;
                }
                if (op === "status") {
                    // status: 1创建提问未开始回答 2回答中 3回答完成 4回答异常
                    statusRef.current = {
                        isDone: isDone,
                        status: status,
                    };
                    if (status === 1) {
                        // 服务已响应，创建提问未开始回答
                        clearTimeout(waitTimerRef.current);
                        return;
                    }
                    if (status === 2) {
                        answeringTimerRef.current = setTimeout(answeringTimerCallback, 1000 * answeringTimer);
                        return;
                    }
                    if (status === 3 || status === 4) {
                        if (!answeringTimerIsShow.current) {
                            clearTimeout(answeringTimerRef.current);
                        }
                        wsRef.current && wsRef.current.close();
                        statusRef.current = {};
                        handleSetData({
                            id: webId,
                            isDone: isDone,
                            status: status,
                            question: "",
                            answer: "",
                            timestamp: 0,
                        }, "status");
                    }
                    return;
                }
                if (op === "answer") {
                    // ws返回是答案
                    answerRef.current[index] = answer;
                    handleSetData({
                        id: webId,
                        question: question,
                        answer: answerRef.current.filter(Boolean).join(""),
                        timestamp: timestamp,
                        isDone: (_a = statusRef.current) === null || _a === void 0 ? void 0 : _a.isDone,
                        status: (_b = statusRef.current) === null || _b === void 0 ? void 0 : _b.status,
                    }, "answer");
                    // 如果定时器被触发了，就不再执行清除或者重置操作，等待定时器内逻辑执行完
                    if (!answeringTimerIsShow.current) {
                        // 每次answer返回时，先清除上一次的answeringTimerRef，然后新建一个answeringTimerRef
                        clearTimeout(answeringTimerRef.current);
                        answeringTimerRef.current = setTimeout(answeringTimerCallback, 1000 * answeringTimer);
                    }
                    return;
                }
            },
            errorFn: function (err) {
            },
        });
        wsRef.current.addEventListener("open", function () {
            handleWsSend(question ? question.trim() : "");
            setQuestion("");
            // 开启心跳
            clearInterval(timerRef.current);
            timerRef.current = setInterval(function () {
                var _a;
                (_a = wsRef.current) === null || _a === void 0 ? void 0 : _a.send("ping");
            }, 1000 * socketHeartbeat);
        });
        wsRef.current.addEventListener("close", function (closeEvent) {
            return onWsCloseOrError();
        });
        wsRef.current.addEventListener("error", function (errorEvent) {
            return onWsCloseOrError();
        });
        return wsRef.current;
    }
    var onWsCloseOrError = function (t, e) {
        // 当websocket状态是 close 或 error 的时候，取消心跳
        clearInterval(timerRef.current);
    };
    function onOffline() {
        onError(NET_OFFLINE);
    }
    var componentDidMount = function () {
        setQuestion("");
        setChatData([
            {
                id: uid(),
                question: "Hello",
                answer: "你好，我是人工智能大师，什么问题都能回答，快来和我聊天吧！",
                timestamp: 1,
            },
        ]);
        window.addEventListener('offline', onOffline);
    };
    var componentWillUnmount = function () {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setChatData([]);
        setQuestion("");
        window.removeEventListener('offline', onOffline);
    };
    React.useEffect(function () {
        componentDidMount();
        return componentWillUnmount;
    }, []);
    return (React.createElement("div", { className: classNames(["index", className]) },
        React.createElement("div", { className: "index-list", ref: indexListDOM }, chatData.map(function (chat, index) {
            return (React.createElement(Chat, { key: chat.id + index, data: chat, onCopy: onCopy, domScrollFn: domScrollFn, onGetScrollSwicth: function () { return scrollRef.current; }, Question: Question, Answer: Answer }));
        })),
        React.createElement("div", { className: "input-bottom" },
            React.createElement("div", { className: "index-input-box" },
                React.createElement("input", { placeholder: "\u8BD5\u8BD5\u6253\u5B57\u548C\u6211\u804A\u5929\u5427", className: "index-input", value: question, onChange: function (e) {
                        setQuestion(e.target.value);
                    }, onKeyDown: function (e) {
                        if (e.key === "Enter") {
                            questionInputRef.current = question;
                            onTextConfirm();
                        }
                    } }),
                React.createElement("div", { className: classNames("index-input-right", {
                        active: !!question.length,
                    }) },
                    React.createElement("img", { src: img, className: "index-send", onClick: onTextConfirm }))))));
});

module.exports = Home;
