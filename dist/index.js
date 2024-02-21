/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 105:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 330:
/***/ ((module) => {

module.exports = eval("require")("execa");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(105);
const execa = __nccwpck_require__(330);

const execCommand = async (file, args) => {
  await execa(file, args).stdout.pipe(process.stdout);
};

const setTimezone = async () => {
  try {
    const platform = process.platform;
    let timezone;

    switch (platform) {
      case "linux":
        timezone = core.getInput("timezoneLinux");
        await execCommand("sudo", ["timedatectl", "set-timezone", timezone]);
        break;
      case "darwin":
        timezone = core.getInput("timezoneMacos");
        await execCommand("sudo", ["systemsetup", "-settimezone", timezone]);
        break;
      case "win32":
        timezone = core.getInput("timezoneWindows");
        await execCommand("tzutil", ["/s", timezone]);
        break;
      default:
        core.setFailed(
          `Platform ${platform} not supported; Only linux, darwin or win32 are supported now`
        );
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

setTimezone();

})();

module.exports = __webpack_exports__;
/******/ })()
;