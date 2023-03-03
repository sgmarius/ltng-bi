// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

interface Platform {
	env: {
	    COUNTER: DurableObjectNamespace;
	};
	    context: {
		waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache }
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
