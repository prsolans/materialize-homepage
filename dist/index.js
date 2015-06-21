webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	jQuery(document).ready(function () {

	__webpack_require__(2);
	    // Initialize collapse button
	    jQuery('.button-collapse').sideNav();
	    jQuery('.slider').slider({height: 240});
	    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
	    //jQuery('.collapsible').collapsible();
	    //

	    jQuery('.parallax').parallax();
	    jQuery('.datepicker').pickadate({
	        selectMonths: true, // Creates a dropdown to control month
	        selectYears: 15 // Creates a dropdown of 15 years to control year
	    });

	    jQuery('#form-submit').on('click', function (e) {

	        var first_name = jQuery('#first_name').val();
	        var last_name = jQuery('#last_name').val();
	        var email = jQuery('#email').val();
	        var message = jQuery('#message').val();

	        var submission = [first_name, last_name, email, message];

	        jQuery.post('ajax/test.html', submission).done(function () {
	            alert('yo');
	        });

	        console.log(JSON.stringify(submission));

	        e.preventDefault();
	    });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!!./grunt-project.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!!./grunt-project.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "/*! normalize.css v2.1.2 | MIT License | git.io/normalize */\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000311}}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000330}}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000341}}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000350}}\n[hidden] {\n  display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000364}}\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000374}}\nbody {\n  margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000386}}\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\0000394}}\na:active,\na:hover {\n  outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003108}}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003117}}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003125}}\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003134}}\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003142}}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003152}}\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003161}}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003173}}\npre {\n  white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003181}}\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003189}}\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003197}}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003205}}\nsup {\n  top: -0.5em;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003209}}\nsub {\n  bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003221}}\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003229}}\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003241}}\nfigure {\n  margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n/**\n * Define consistent border, margin, and padding.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003253}}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003264}}\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003275}}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003289}}\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003301}}\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003314}}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003326}}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003336}}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003348}}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003360}}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003369}}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003380}}\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/modules\\/_normalize\\.scss}line{font-family:\\00003393}}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*--------------------------------------*\\\n\tMain\n\\*--------------------------------------*/\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\000037}}\nhtml {\n  overflow-y: scroll;\n  min-height: 100%;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000312}}\nbody {\n  background-color: #fcfcfc;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000316}}\nblockquote {\n  border-left: 5px solid #37474f !important;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000318}}\nnav {\n  height: 100px;\n}\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000319}}\nnav .button-collapse {\n  margin-top: 24px;\n  margin-left: 14px;\n}\n\n@media only screen and (max-width: 992px) {\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000323}}\n  .nav-wrapper {\n    float: right;\n  }\n}\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000328}}\n.nav-wrapper {\n  padding: 24px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000330}}\nli.logo {\n  height: 100px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000332}}\n.parallax-container.short {\n  height: 250px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000335}}\n.slider .slides {\n  background-color: #fcfcfc;\n}\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000336}}\n.slider .slides .outside-caption {\n  float: right;\n  width: 30%;\n}\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000337}}\n.slider .slides li img.caption-right {\n  float: left;\n  width: 65%;\n}\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_main\\.scss}line{font-family:\\0000340}}\n.slider .indicators .indicator-item.active {\n  background-color: #37474f;\n}\n\n/*--------------------------------------*\\\n  Type\n\\*--------------------------------------*/\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\000036}}\nh1, .alpha {\n  font-size: 36px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\0000310}}\nh2, .beta {\n  font-size: 30px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\0000314}}\nh3, .gamma {\n  font-size: 24px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\0000318}}\nh4, .delta {\n  font-size: 20px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\0000322}}\nh5, .epsilon {\n  font-size: 16px;\n}\n\n@media -sass-debug-info{filename{font-family:file\\:\\/\\/\\/Users\\/prsolans\\/Documents\\/Projects\\/grunt\\/css\\/sass\\/base\\/_type\\.scss}line{font-family:\\0000326}}\nh6, .zeta {\n  font-size: 14px;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	//var low = require('lowdb');
	//var db = low('db.json');
	//
	//db('posts').push({ title: 'lowdb is awesome'});

/***/ }
]);