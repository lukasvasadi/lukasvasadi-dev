export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","images/arduino-cartoon-detailed.png","images/arduino-cartoon.png","images/arduino-electronics.jpg","images/beagleboard-embedded-logo.png","images/beaglebone-black.jpg","images/electronics-breadboard.jpg","images/ethical-hacking.jpg","images/git-icon-white.png","images/git-icon.png","images/git.jpg","images/ic-pins.jpg","images/kali-logo.png","images/linux-cartoon.png","images/linux-debian.jpg","images/macbook-code.jpg","images/macbook-lifestyle.jpg","images/network-cables.jpg","images/node-logo.png","images/npm-keyboard.jpg","images/nvidia-gpu.jpg","images/pcb-traces.jpg","images/python-logo.png","images/raspi-cartoon.png","images/raspi.jpg","images/react-logo.png","images/react.jpg","images/rp2040.jpg","images/stm32.jpg","images/stm32cubemx_board_selector.png","images/stm32cubemx_pin_config.png","images/ubuntu-cli-sudo.jpg","images/ubuntu-cli.jpg","images/windows-surface-laptop.jpg","vasadi-icon-square.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.746e6989.js","app":"_app/immutable/entry/app.c14e7d32.js","imports":["_app/immutable/entry/start.746e6989.js","_app/immutable/chunks/scheduler.ae1baad1.js","_app/immutable/chunks/singletons.bb66a5da.js","_app/immutable/chunks/index.648b4cba.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.c14e7d32.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ae1baad1.js","_app/immutable/chunks/index.0e1198e2.js"],"stylesheets":[],"fonts":[]},
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
