import component from './my-vue-github-repocard.vue';

// Déclaration de la méthode d'installation utilisée via Vue.use(...)
export function install(Vue) {
	if (install.installed) return;

	install.installed = true;

	Vue.component('MyGithubRepocard', component);
}

// Création du module à destionation Vue.use(...)
const plugin = {
	install,
};

// Installation automatique si Vue est détecté (par exemple dans un navigation via la balise <script>)
let GlobalVue = null;

if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}

// Exporter en tant que module (pour npm/webpack/etc.)
export default component;
