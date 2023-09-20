

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.41c43485.js","_app/immutable/chunks/scheduler.ae1baad1.js","_app/immutable/chunks/index.171b1fb8.js","_app/immutable/chunks/singletons.fe06c765.js","_app/immutable/chunks/index.648b4cba.js"];
export const stylesheets = ["_app/immutable/assets/1.f870a4f1.css"];
export const fonts = [];
