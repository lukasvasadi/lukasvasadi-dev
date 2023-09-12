export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","images/macbook-code.jpg","images/nvidia-gpu.jpg","images/stm32.jpg","images/stm32cubemx_board_selector.png","images/stm32cubemx_pin_config.png","vasadi-icon-square.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b2a3a5ee.js","app":"_app/immutable/entry/app.0363aa76.js","imports":["_app/immutable/entry/start.b2a3a5ee.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/singletons.f3b1b65c.js","_app/immutable/chunks/index.ef9c63d0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.0363aa76.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/index.c7c9b348.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
