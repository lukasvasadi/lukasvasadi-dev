export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/macbook-code.jpg","images/nvidia-gpu.jpg","vasadi-icon-square.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b0b5da68.js","app":"_app/immutable/entry/app.16d6759d.js","imports":["_app/immutable/entry/start.b0b5da68.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/singletons.dba18be0.js","_app/immutable/chunks/index.ef9c63d0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.16d6759d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.be0e0057.js","_app/immutable/chunks/index.c7c9b348.js"],"stylesheets":[],"fonts":[]},
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
