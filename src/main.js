import App from "./App/index.svelte";
import "./global.css";

const app = new App({
	target: document.body,
});

window.app = app;

export default app;
