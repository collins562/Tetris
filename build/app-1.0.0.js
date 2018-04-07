!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"e",function(){return i}),n.d(t,"o",function(){return o}),n.d(t,"g",function(){return a}),n.d(t,"k",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"h",function(){return c}),n.d(t,"l",function(){return l}),n.d(t,"j",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return v}),n.d(t,"n",function(){return p}),n.d(t,"r",function(){return y}),n.d(t,"p",function(){return d}),n.d(t,"q",function(){return b}),n.d(t,"f",function(){return m}),n.d(t,"m",function(){return g}),n.d(t,"i",function(){return k});var r=[[[0,0],[1,0],[2,0],[3,0]],[[0,0],[0,1],[1,0],[1,1]],[[0,1],[1,0],[1,1],[2,1]],[[0,0],[0,1],[1,1],[2,1]],[[0,1],[1,1],[2,0],[2,1]],[[0,0],[1,0],[1,1],[2,1]],[[0,1],[1,0],[1,1],[2,0]]],i=[100,300,500,800],o=[800,650,500,400,300,200],a=[50,60,70,80,90,100],s=20,u=2,c=.6,l=10,f={rotate:{keyCode:38,sel:"#rotate_btn"},speedUp:{keyCode:40,sel:"#down_btn"},left:{keyCode:37,sel:"#left_btn"},right:{keyCode:39,sel:"#right_btn"},drop:{keyCode:32,sel:"#drop_btn"},pause:{keyCode:80,sel:"#pause_btn"},reset:{keyCode:82,sel:"#reset_btn"}},h="pressed",v="",p="paused",y="unpaused",d="tik",b="tok",m="rgb(135, 147, 100)",g="rgb(0, 0, 0)",k="rgb(180, 0, 0)"},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a});var i=function(e,t,n,r){return e+n[0][0]<0||e+n[3][0]>=r.column||n.map(function(n){var i=t+n[1];return!(i<0||!r.board[i][e+n[0]].occupied)}).reduce(function(e,t){return e||t})},o=function(e,t){var n=e.map(function(e){return e[t]});return Math.max.apply(Math,r(n))-Math.min.apply(Math,r(n))},a=function(){var e=navigator.userAgent,t=/Android (\d+\.\d+)/.test(e),n=e.indexOf("iPhone")>-1,r=e.indexOf("iPod")>-1,i=e.indexOf("iPad")>-1,o=e.indexOf("NokiaN")>-1;return t||n||r||i||o}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.elements=[],this.setup()}return r(e,[{key:"setup",value:function(){}},{key:"init",value:function(){}},{key:"draw",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=this.elements[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.draw()}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}}},{key:"update",value:function(){}},{key:"pushElement",value:function(e){this.elements.push(e)}}],[{key:"instance",value:function(e){return this.i=this.i||new this(e),this.i.init(),this.i}}]),e}();t.a=i},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.querySelector(t),this.ctx=this.canvas.getContext("2d")}return r(e,[{key:"drawBlock",value:function(e,t,n,r){var i=n/15,o=n/10,a=this.ctx;a.fillStyle=r;var s=n*e+i,u=n*t+i,c=n-2*i;a.fillRect(s,u,c,c),s+=i,u+=i,c-=2*i,a.clearRect(s,u,c,c),c-=2*o,a.fillRect(s+o,u+o,c,c)}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),e}();t.a=i},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.component=document.querySelector(t)}return r(e,[{key:"setState",value:function(e){this.component.className=e}}],[{key:"new",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(this,[null].concat(t)))}}]),e}();t.a=i},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.numElts=document.querySelectorAll(t),n&&(this.titleCpn=document.querySelector(n))}return r(e,[{key:"setTitle",value:function(e){this.titleCpn.innerText=e}},{key:"getNumber",value:function(){for(var e=void 0,t=void 0,n=void 0,r=0,i=this.numElts.length-1;i>=0;i--)e=""==(t=this.numElts[i].className)?0:t[t.length-1],n=parseInt(e),isNaN(n)||(r=10*r+n);return r}},{key:"setNumber",value:function(e){for(var t=void 0,n=this.numElts.length,r=0;r<n&&e>0;r++)t=e%10,this.setDigit(t,this.numElts[r]),e=(e-t)/10;for(0==r&&(this.setDigit(0,this.numElts[0]),r++);r<n;r++)this.setDigit(null,this.numElts[r])}},{key:"setDigit",value:function(e,t){t.className=null==e?"":"n"+e}}],[{key:"new",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(this,[null].concat(t)))}}]),e}();t.a=i},function(e,t,n){"use strict";var r=n(2),i=n(16),o=n(0),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),a(t,[{key:"setup",value:function(){this.pushElement(this.game.area)}},{key:"init",value:function(){this.index=19,this.update=this.fillArea}},{key:"fillArea",value:function(){this.game.area.setLine(this.index,o.m,!1),--this.index<0&&(this.index=0,this.update=this.clearArea)}},{key:"clearArea",value:function(){this.game.area.setLine(this.index,o.f,!1),20==++this.index&&this.restartGame()}},{key:"restartGame",value:function(){this.game.replaceScene(i.a,"title")}}]),t}();t.a=s},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i={},o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t.key,this.callback=t.callback||function(){},this.begin=t.begin||100,this.interval=t.interval||50,this.once=t.once}return r(e,[{key:"down",value:function(){var e=this;this.clearAll(),this.callback(function(){e.up()}),!0!==this.once&&(this.start=this.begin,this.loop())}},{key:"up",value:function(){clearTimeout(i[this.key]),i[this.key]=null}},{key:"loop",value:function(){var e=this;i[this.key]=setTimeout(function(){e.start=null,e.loop(),e.callback(function(){return e.up()})},this.start||this.interval)}},{key:"clearAll",value:function(){for(var e in i){i[e]&&(clearTimeout(i[e]),i[e]=null)}}}],[{key:"new",value:function(e){return new this(e)}}]),e}();t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=n(20),o=n(1),a=n(21);n.n(a);window.onload=function(){if(Object(o.c)()){var e={passive:!1};document.body.style.fontSize="12px",document.documentElement.addEventListener("touchstart",function(e){e.preventDefault()},e);var t=0;document.documentElement.addEventListener("touchend",function(e){var n=Date.now();n-t<=300&&e.preventDefault(),t=n},e),document.documentElement.addEventListener("touchmove",function(e){e.preventDefault()},e)}var n=i.a.instance();n.resize(),window.onresize=function(){n.resize()};r.a.instance(function(e){e.run()})}},function(e,t,n){"use strict";var r=n(3),i=n(10),o=n(12),a=n(13),s=n(14),u=n(5),c=n(15),l=n(6),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"#area"));return n.blockSize=n.canvas.width/10,n.process=null,n.callbackRun=e,n.default(),n.getComponents(),n.setupEventController(),n.__start(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),f(t,[{key:"default",value:function(){this.fps=45}},{key:"getComponents",value:function(){this.clock=o.a.instance(),this.storage=s.a.instance(),this.scoreBoard=u.a.new("#point span","#point p"),this.lineCountBoard=u.a.new("#lines span","#lines p"),this.levelBoard=u.a.new("#level span"),this.pauseSign=a.a.instance(),this.area=c.a.instance(this),this.area.init()}},{key:"setupEventController",value:function(){this.eventCtrler=i.a.instance(this)}},{key:"setPauseKeyCode",value:function(e){this.eventCtrler.setPauseKeyCode(e)}},{key:"isPaused",value:function(){return this.pauseSign.paused}},{key:"pause",value:function(){this.pauseSign.pause()}},{key:"unpause",value:function(){this.pauseSign.unpause()}},{key:"registerAction",value:function(e,t){this.eventCtrler.registerController(e,t)}},{key:"removeAllActions",value:function(){this.eventCtrler.removeAllCallbacks()}},{key:"setLineBoardTitle",value:function(e){this.lineCountBoard.setTitle(e)}},{key:"setScoreBoardTitle",value:function(e){this.scoreBoard.setTitle(e)}},{key:"getLines",value:function(){return this.lineCountBoard.getNumber()}},{key:"setLines",value:function(e){this.lineCountBoard.setNumber(e)}},{key:"getLevel",value:function(){return this.levelBoard.getNumber()}},{key:"setLevel",value:function(e){this.levelBoard.setNumber(e)}},{key:"getScore",value:function(){return this.scoreBoard.getNumber()}},{key:"setScore",value:function(e){this.scoreBoard.setNumber(e)}},{key:"replaceScene",value:function(e,t){this.sceneName=t,this.scene=e.instance(this),this.eventCtrler.init()}},{key:"drawBlock",value:function(e,n,r){(function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"drawBlock",this).call(this,e,n,this.blockSize,r)}},{key:"draw",value:function(){this.scene.draw()}},{key:"update",value:function(){this.scene.update()}},{key:"runloop",value:function(){var e=this;this.draw(),this.update(),this.process=setTimeout(function(){e.runloop()},1e3/this.fps)}},{key:"run",value:function(){var e=this;this.process=setTimeout(function(){e.runloop()},1e3/this.fps)}},{key:"__start",value:function(){this.replaceScene(l.a),this.callbackRun(this)}}]),t}();t.a=h},function(e,t,n){"use strict";var r=n(11),i=n(0),o=n(1),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.game=e,n.pauseKeyCode=null,n.keyBinds={},n.processSettings(),n.setup(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),a(t,[{key:"setup",value:function(){var e=this,t=function(t,n){e.keyBinds[t].actived||(n.down(),e.keyBinds[t].actived=!0)},n=function(t,n){e.keyBinds[t].actived=!1,n.up()},r=document.querySelector("#button");this.addKBHandler(window,"keydown",i.c,t),this.addKBHandler(window,"keyup",i.d,n);var a=Object(o.c)(),s=a?"touchstart":"mousedown",u=a?"touchend":"mouseup";this.addMouseHandler(r,s,i.c,t),this.addMouseHandler(r,u,i.d,n),this.addMouseHandler(r,"mouseout",i.d,n)}},{key:"init",value:function(){for(var e in this.keyBinds)this.keyBinds[e]&&(this.keyBinds[e].actived=!1)}},{key:"setPauseKeyCode",value:function(e){this.pauseKeyCode=e.toString()}},{key:"processSettings",value:function(){var e=i.j,t={};for(var n in e){var r=e[n],o=r.keyCode,a=r.sel;t[o]={component:document.querySelector(a),sceneControllers:{},actived:!1}}this.keyBinds=t}},{key:"registerController",value:function(e,t){var n=this.keyBinds[e],r=this.game.sceneName;n||(n=this.keyBinds[e]={sceneControllers:{},actived:!1}),n.sceneControllers[r]=t}},{key:"addKBHandler",value:function(e,t,n,r){var i=this;this.game;this.addHandler(e,t,function(e){i.keyboardHandler(e,n,r)})}},{key:"keyboardHandler",value:function(e,t,n){var r=e.keyCode,i=this.game;if(r in this.keyBinds){var o=this.keyBinds[r],a=i.isPaused(),s=o.component,u=o.sceneControllers[i.sceneName];s&&(s.className=t),a&&r!=this.pauseKeyCode||!u||n(r,u)}}},{key:"addMouseHandler",value:function(e,t,n,r){var i=this;this.addHandler(window,t,function(e){i.mouseHandler(e,n,r)})}},{key:"mouseHandler",value:function(e,t,n){var r=this.getTarget(e),i=this.game.isPaused();for(var o in this.keyBinds){var a=this.keyBinds[o],s=a.component,u=a.sceneControllers[this.game.sceneName];if(s===r&&(s.className=t,(!i||o===this.pauseKeyCode)&&u))return n(o,u)}}}]),t}();t.a=s},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"getEvent",value:function(){return event||window.event}},{key:"getTarget",value:function(e){return e.target||e.srcElement}},{key:"preventDefault",value:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},{key:"stopPropagation",value:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},{key:"addHandler",value:function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}},{key:"removeHandler",value:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=n}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),e}();t.a=i},function(e,t,n){"use strict";var r=n(4),i=n(5),o=n(0),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.setup()}return a(e,[{key:"setup",value:function(){var e=this;this.hourBoard=i.a.new("#s_hour span"),this.minuteBoard=i.a.new("#s_minute span"),this.indicator=r.a.new("#s_clock_indi");var t=new Date;this.hours=t.getHours(),this.minutes=t.getMinutes(),this.seconds=t.getSeconds(),this.hourBoard.setNumber(this.hours),this.minuteBoard.setNumber(this.minutes),setInterval(function(){e.update()},1e3)}},{key:"update",value:function(){60==++this.seconds&&(this.seconds=0,60==++this.minutes&&(this.minutes=0,24==++this.hours&&(this.hours=0),this.hourBoard.setNumber(this.hours)),this.minuteBoard.setNumber(this.minutes));var e=this.seconds%2==0?o.p:o.q;this.indicator.setState(e)}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),e}();t.a=s},function(e,t,n){"use strict";var r=n(4),i=n(0),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"#s_psign"));return e.process=null,e.paused=!1,e.count=0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),o(t,[{key:"pause",value:function(){var e=this;this.paused=!0,this.process=setInterval(function(){e.count++%2==0?e.setState(i.n):e.setState(i.r)},250)}},{key:"unpause",value:function(){this.paused=!1,this.count=0,this.setState(i.r),clearInterval(this.process)}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),t}();t.a=a},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o="tetris-last-record",a="tetris-max-record",s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=this.getLocalStorage()}return i(e,[{key:"getLocalStorage",value:function(){return"object"==("undefined"==typeof localStorage?"undefined":r(localStorage))?localStorage:"object"==("undefined"==typeof globalStorage?"undefined":r(globalStorage))?globalStorage[location.host]:(console.warn("Local storage not available. Your record will be forgot after leave"),{})}},{key:"getRecord",value:function(e){var t=parseInt(this.storage[e]);return isNaN(t)?0:t}},{key:"setRecord",value:function(e,t){this.storage[e]=t}},{key:"getLastRecord",value:function(){return this.getRecord(o)}},{key:"setLastRecord",value:function(e){this.setRecord(o,e)}},{key:"getMaxRecord",value:function(){return this.getRecord(a)}},{key:"setMaxRecord",value:function(e){this.setRecord(a,e)}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),e}();t.a=s},function(e,t,n){"use strict";var r=n(0),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.board=[],this.scoring=!1,this.process=null,this.count=0,this.default()}return i(e,[{key:"default",value:function(){this.row=20,this.column=10,this.defaultColor=r.f,this.indicateColor=r.i,this.fullLinesEchoSpeed=15,this.fullLinesEchoTimes=3}},{key:"init",value:function(){for(var e=this.row,t=0;t<e;t++){this.board[t]=[];for(var n=this.board[t],r=0;r<this.column;r++)n[r]={color:this.defaultColor,occupied:!1}}}},{key:"setPresetLines",value:function(e){this.generateRandomRows(e)}},{key:"setLine",value:function(e,t,n){for(var r=this.board[e],i=0;i<this.column;i++){var o=r[i];o.color=t,o.occupied=n}}},{key:"generateRandomRows",value:function(e){for(var t=this.row-e,n=this.row-1;n>=t;n--){for(var i=this.board[n],o=this.column-1;o>=0;o--){var a=i[o],s=Math.random()<=r.h;a.color=s?r.m:r.f,a.occupied=s}if(this.lineIsFull(i)){var u=i[Math.floor(10*Math.random())];u.color=r.f,u.occupied=!1}}}},{key:"lineIsFull",value:function(e){return e.map(function(e){return e.occupied}).reduce(function(e,t){return e&&t})}},{key:"setUpScoreRule",value:function(e){this.scoreFunc=function(t){e&&e(t)}}},{key:"draw",value:function(){for(var e=this.game,t=0;t<this.row;t++)for(var n=0;n<this.column;n++)e.drawBlock(n,t,this.board[t][n].color)}},{key:"update",value:function(){for(var e=[],t=0;t<this.row;t++)this.lineIsFull(this.board[t])&&e.push(t);e.length>0&&(this.scoring=!0,this.lines=e,this.score())}},{key:"score",value:function(){var e=this;this.scoring=!0,this.process=setInterval(function(){e.echoFullLines()},1e3/this.fullLinesEchoSpeed)}},{key:"echoFullLines",value:function(){var e=this;if(!this.game.isPaused()){if(this.count++>2*this.fullLinesEchoTimes-1)return this.count=0,this.scoring=!1,clearInterval(this.process),void this.clearFullLines();var t=this.count%2==0?this.defaultColor:this.indicateColor;this.lines.map(function(n){e.setLine(n,t,!1)})}}},{key:"clearFullLines",value:function(){var e=this,t=this.lines;t.forEach(function(t){var n=e.board.splice(t,1)[0];e.board.unshift(n)}),this.scoreFunc(t.length),this.lines=null}}],[{key:"instance",value:function(e){return this.i=this.i||new this(e),this.i}}]),e}();t.a=o},function(e,t,n){"use strict";var r=n(2),i=n(17),o=n(7),a=n(0),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.title=document.querySelector("#title"),n.showGap=Math.floor(.75*e.fps),n.scoreShowGap=2*e.fps,n.count=0,n.titleType=1,n.startLevel=1,n.maxLevel=a.o.length,n.startLines=0,n.maxStartLines=a.l,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),s(t,[{key:"setup",value:function(){var e=this.game,t=this,n=([1,2].concat([]),a.j.drop.keyCode);e.registerAction(n,o.a.new({key:"drop",begin:250,interval:150,callback:function(){t.startGame()}}));var r=a.j.left.keyCode;e.registerAction(r,o.a.new({key:"left",begin:250,interval:150,callback:function(){t.updateLevel(-1)}}));var i=a.j.right.keyCode;e.registerAction(i,o.a.new({key:"right",begin:250,interval:150,callback:function(){t.updateLevel(1)}}));var s=a.j.rotate.keyCode;e.registerAction(s,o.a.new({key:"up",begin:250,interval:150,callback:function(){t.updateLines(1)}}));var u=a.j.speedUp.keyCode;e.registerAction(u,o.a.new({key:"down",begin:250,interval:150,callback:function(){t.updateLines(-1)}}))}},{key:"init",value:function(){var e=this.game;e.setLevel(this.startLevel),e.setLineBoardTitle("Start lines"),e.setLines(this.startLines),e.area.draw()}},{key:"startGame",value:function(){this.game.replaceScene(i.a,"main"),this.title.style.visibility="hidden"}},{key:"update",value:function(){var e=this.title,t=this.game;if(this.count%this.showGap==0){var n="visible"==e.style.visibility;e.style.visibility=n?"hidden":"visible"}if(this.count%this.scoreShowGap==0){var r=t.scoreBoard,i=t.storage;this.titleType?(r.setTitle("Max"),r.setNumber(i.getMaxRecord())):(r.setTitle("Last Round"),r.setNumber(i.getLastRecord())),this.titleType=!this.titleType}this.count++}},{key:"updateLevel",value:function(e){var t=this.startLevel+e;t<1?t+=this.maxLevel:t>this.maxLevel&&(t-=this.maxLevel),this.game.setLevel(t),this.startLevel=t}},{key:"updateLines",value:function(e){var t=this.startLines+e;t<0?t+=this.maxStartLines+1:t>this.maxStartLines&&(t-=this.maxStartLines+1),this.game.setLines(t),this.startLines=t}}]),t}();t.a=u},function(e,t,n){"use strict";var r=n(2),i=n(18),o=n(6),a=n(7),s=n(0),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.eachBlockScore=10,n.clearLines=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),u(t,[{key:"setup",value:function(){var e=this,t=this,n=this.game,r=n.area;this.bc=i.a.instance(n),this.pushElement(r),this.pushElement(this.bc),r.setUpScoreRule(function(t){e.countScore(t)});var o=s.j.left.keyCode;n.registerAction(o,a.a.new({key:"left",begin:200,interval:100,callback:function(){t.bc.moveLeft()}}));var u=s.j.right.keyCode;n.registerAction(u,a.a.new({key:"right",begin:200,interval:100,callback:function(){t.bc.moveRight()}}));var c=s.j.speedUp.keyCode;n.registerAction(c,a.a.new({key:"speedUp",callback:function(e){t.bc.retired?e():t.bc.updateCD=-10}}));var l=s.j.rotate.keyCode;n.registerAction(l,a.a.new({key:"rotate",once:!0,callback:function(){t.bc.rotate()}}));var f=s.j.drop.keyCode;n.registerAction(f,a.a.new({key:"drop",once:!0,callback:function(){t.bc.drop()}}));var h=s.j.reset.keyCode;n.registerAction(h,a.a.new({key:"reset",once:!0,callback:function(){t.resetGame()}}));var v=s.j.pause.keyCode;n.registerAction(v,a.a.new({key:"pause",once:!0,callback:function(){n.isPaused()?n.unpause():n.pause()}})),n.setPauseKeyCode(v)}},{key:"init",value:function(){var e=this.game,t=this.game.getLevel();this.bc.setLevel(t),this.bc.init();var n=e.getLines();e.area.setPresetLines(n),e.setLineBoardTitle("Cleans"),e.setLines(0),e.setScoreBoardTitle("Points"),e.setScore(0),this.eachBlockScore=10,this.clearLines=0}},{key:"addScore",value:function(e){var t=this.game,n=t.getScore();t.setScore(e+n)}},{key:"countScore",value:function(e){if(e>0){var t=this.game,n=e+t.getLines();t.setLines(n),this.addScore(s.e[e-1]),this.clearLines+=e,this.clearLines>=s.k&&(this.clearLines-=s.k,this.bc.updateLevel(),this.eachBlockScore+=s.a)}}},{key:"resetGame",value:function(){var e=this.game;e.replaceScene(o.a,"Reset");var t=e.storage,n=t.getMaxRecord(),r=e.scoreBoard.getNumber();r>n&&t.setMaxRecord(r),t.setLastRecord(r)}},{key:"update",value:function(){var e=this.bc,t=this.game,n=t.area;t.isPaused()||n.scoring||(e.retired?e.y<0?this.resetGame():(e.occupy(),this.addScore(this.eachBlockScore),n.update(),e.init()):e.update())}}]),t}();t.a=c},function(e,t,n){"use strict";var r=n(19),i=n(1),o=n(0),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=t,this.maxLevel=o.o.length,this.default(),this.setup()}return a(e,[{key:"default",value:function(){this.x=0,this.y=0,this.defaultColor=o.m,this.indicateColor=o.i}},{key:"setup",value:function(){this.preview=r.a.instance(this.game),this.preview.next()}},{key:"init",value:function(){var e=this.preview;this.coors=e.coors,e.next(),e.clear(),e.draw(),this.x=3,this.y=-Object(i.b)(this.coors,1)-1,this.color=this.defaultColor,this.updateCD=this.maxUpdateCD,this.retired=!1}},{key:"setLevel",value:function(e){this.level=e;var t=this.game.fps,n=o.o[this.level-1];this.maxUpdateCD=Math.floor(t*n/1e3),this.updateCD=this.maxUpdateCD;var r=o.g[this.level-1];this.delay=Math.floor(t*r/1e3)}},{key:"updateLevel",value:function(){if(this.level<this.maxLevel){var e=this.level+1;this.setLevel(e),this.game.setLevel(e)}}},{key:"move",value:function(e){if(!this.retired){var t=this.game.area;Object(i.a)(this.x+e,this.y,this.coors,t)?this.updateCD+=Math.round(this.delay/2):(this.x+=e,this.updateCD+=this.delay),this.updateCD>this.maxUpdateCD&&(this.updateCD=this.maxUpdateCD)}}},{key:"moveLeft",value:function(){this.move(-1)}},{key:"moveRight",value:function(){this.move(1)}},{key:"rotate",value:function(){if(!this.retired){var e=this.rotateCoors(this.coors),t=this.game.area,n=Object(i.b)(e,0),r=this.getOptionalOffsets(n),o=!0,a=!1,s=void 0;try{for(var u,c=r[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;if(!Object(i.a)(this.x+l,this.y,e,t))return this.coors=e,void(this.x+=l)}}catch(e){a=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw s}}}}},{key:"rotateCoors",value:function(e){var t=e.map(function(e){return[-e[1],e[0]]}),n=t.sort(function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]})[0],r=n[0],o=n[1];return 3===Object(i.b)(e,0)&&(r-=1,o+=1),t.map(function(e){return[e[0]-r,e[1]-o]})}},{key:"getOptionalOffsets",value:function(e){for(var t=[0],n=1;n<=e;n++)t.push(n,-n);return t}},{key:"drop",value:function(){if(!this.game.area.scoring)for(;!this.retired;)this.updateY()}},{key:"occupy",value:function(){var e=this.game.area.board,t=!0,n=!1,r=void 0;try{for(var i,o=this.coors[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;try{var s=e[this.y+a[1]][this.x+a[0]];s.occupied=!0,s.color=this.defaultColor}catch(e){}}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}},{key:"retire",value:function(){this.retired=!0,this.color=this.indicateColor}},{key:"isBlocked",value:function(){var e=this.game.area,t=!0,n=!1,r=void 0;try{for(var i,o=this.coors[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;try{if(this.y+a[1]+1===e.row||e.board[this.y+a[1]+1][this.x+a[0]].occupied)return!0}catch(e){}}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}return!1}},{key:"draw",value:function(){var e=this.game,t=!0,n=!1,r=void 0;try{for(var i,o=this.coors[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;e.drawBlock(this.x+a[0],this.y+a[1],this.color)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}},{key:"updateY",value:function(){this.isBlocked()?this.retire():this.y++}},{key:"update",value:function(){this.updateCD<=0?(this.updateCD=this.maxUpdateCD,this.updateY()):this.updateCD--}}],[{key:"instance",value:function(e){return this.i=this.i||new this(e),this.i}}]),e}();t.a=s},function(e,t,n){"use strict";var r=n(3),i=n(0),o=n(1),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"#next canvas"));return n.game=e,n.default(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["a"]),a(t,[{key:"next",value:function(){this.coors=this.randBlockType();var e=Object(o.b)(this.coors,0);this.offsetX=1==e?1:2==e?.5:0,this.offsetY=0==Object(o.b)(this.coors,1)?.5:0}},{key:"default",value:function(){this.color=i.m}},{key:"drawBlock",value:function(e,n){(function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"drawBlock",this).call(this,e,n,this.game.blockSize,this.color)}},{key:"randBlockType",value:function(){var e=i.b;return e[Math.floor(Math.random()*e.length)]}},{key:"draw",value:function(){var e=this.coors,t=this.offsetX,n=this.offsetY,r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;this.drawBlock(u[0]+t,u[1]+n)}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}},{key:"clear",value:function(){var e=this.canvas;this.ctx.clearRect(0,0,e.width,e.height)}}]),t}();t.a=s},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=document.querySelector("#root"),this.game=document.querySelector("#game"),this.button=document.querySelector("#button"),this.curW=440,this.curH=677,this.aspectRatio=this.curW/this.curH,this.process=null}return r(e,[{key:"getBrowserInterfaceSize",value:function(){var e=window.innerWidth,t=window.innerHeight;return"number"!=typeof e&&("CSS1Compat"==document.compatMode?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):(e=document.body.clientWidth,t=window.body.clientHeight)),{pageWidth:e,pageHeight:t}}},{key:"resize",value:function(){var e=this.root,t=this.game,n=this.button,r=this.getBrowserInterfaceSize(),i=r.pageWidth,o=r.pageHeight;if(o!=this.curH){var a=o/677,s=a-1,u=440*a;if(o<this.curH&&u<this.curW||o>this.curH||u>this.curW){e.style.width=u+"px",this.curW=u;var c=220*s;t.style.transform="scale("+a+")",n.style.transform="scale("+a+")",t.style.marginLeft=c+50+"px",n.style.marginLeft=c+"px"}t.style.marginTop=200*s+30*a+"px",n.style.marginTop=225*s+"px",this.process=null,this.curH=o}if(i<this.curH*this.aspectRatio){if(e.style.width="100%",i==this.curW)return;var l=i/440,f=l-1,h="scale("+l+")";t.style.transform=n.style.transform=h,t.style.marginLeft=220*f+50+"px",n.style.marginLeft=220*f+"px",this.curW=i}else e.style.width=o*this.aspectRatio+"px"}}],[{key:"instance",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.i=this.i||new(Function.prototype.bind.apply(this,[null].concat(t))),this.i}}]),e}();t.a=i},function(e,t){}]);
//# sourceMappingURL=app-1.0.0.js.map