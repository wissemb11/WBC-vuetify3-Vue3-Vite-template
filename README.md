# WBC-Vuetify3-Vue3-Vite-template

Tutorial: www.wi-bg.com/wb/tutoriels/vue3/vite/wbc-vuetify3-vue3-vite-template

This tutorial shows how to integrate and use vuetify3 components with WBC-ui3 and Vue 3 in Vite context.

## 1- Create the ecosystem of WBC (vue3 in vite)

```sh
npm create vite@latest
```

follow suggession and choose settings according of your needs (vue3 is required). For example:

✔ Project name: `<project-name>`  
✔ Select a framework: › Vue  
✔ Select a variant: › Customize with create-vue

Need to install the following packages:  
create-vue@latest  
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? Yes  
✔ Add JSX Support? Yes  
✔ Add Vue Router for Single Page Application development? Yes  
✔ Add Pinia for state management? Yes  
✔ Add Vitest for Unit Testing? Yes  
✔ Add Cypress for both Unit and End-to-End testing? Yes  
✔ Add ESLint for code quality? Yes  
✔ Add Prettier for code formatting? Yes

Scaffolding project in /home/.../`<project-name>`

## 2- WBC Installaton

```sh
npm i wbc-ui3
```

## 3- Adding Vuetify (Installing vue-cli-plugin-vuetify)

```sh
cd my-vuetify-app
vue add vuetify
```

- Once prompted, choose Vuetify 3 Preview:  
  ? Choose a preset:  
  Vuetify 2 - Configure Vue CLI (advanced)  
  Vuetify 2 - Vue CLI (recommended)  
  Vuetify 2 - Prototype (rapid development)  
  ❯ Vuetify 3 - Vite (preview)  
  Vuetify 3 - Vue CLI (preview)

- then, choose Vuetify 3 - Vite (preview):  
  ? Choose a preset: Vuetify 3 - Vite (preview)  
  ? Would you like to install Vuetify 3 nightly build? (WARNING: Nightly builds are intended for development testing and may include bugs or other issues.) No

## 4- WBC and Vuetify3 configuration

To bind WBC and vuetify components and install their plugins to the vue app (here is WBCApp), ensure that your main.js respect the folowing 6 steps.

Then, your main.js have this structure

```sh
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

#1 -creation of Vue APP named WBCApp
const WBCApp = createApp(App);

#2 -install plugin to WBCApp before mounted i
import WBC_plugin from "wbc-ui3";

#3 -import all vuetify components and directives
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

#4 - pass vuetify object to the vue app
WBCApp.use(vuetify);

#5 -register Vuetify components into WBC
WBCApp.use(WBC_plugin, { ...components });
alert(JSON.stringify(components));

#6 -Mount Vue application to the element id
WBCApp.mount("#app");
```

## The contribution

1- vuetify is supported pa ra WBC. that s mean that components and the style of vuetify can be used for WBC:
For example we can mix html content with vuetify style.
a

2- All global registered components are automatically injected to WBC.

## Run project

Done. Now run:

```sh
  cd <project-name>
  npm install
  npm run lint
  npm run dev
```

## How to use WBC?

For further details guide, visit www.wi-bg.com/WBC

## WBC and Vuetify Examples

After runing project Some examples illustrate the use of vuetify with WBC

For further details guide, visit www.wi-bg.com/WBC
