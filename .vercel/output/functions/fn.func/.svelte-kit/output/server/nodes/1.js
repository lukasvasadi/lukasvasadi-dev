

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a055fefc.js","_app/immutable/chunks/scheduler.ae1baad1.js","_app/immutable/chunks/index.0e1198e2.js","_app/immutable/chunks/singletons.94147adc.js","_app/immutable/chunks/index.648b4cba.js"];
export const stylesheets = ["_app/immutable/assets/1.f870a4f1.css"];
export const fonts = [];
