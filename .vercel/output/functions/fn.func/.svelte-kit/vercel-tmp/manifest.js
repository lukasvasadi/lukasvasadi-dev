export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/macbook-code.jpg","images/nvidia-gpu.jpg","images/stm32.jpg","vasadi-icon-square.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f664d4c6.js","app":"_app/immutable/entry/app.c875f294.js","imports":["_app/immutable/entry/start.f664d4c6.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/singletons.3270e733.js","_app/immutable/chunks/index.ef9c63d0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.c875f294.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/index.c7c9b348.js"],"stylesheets":[],"fonts":[]},
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
