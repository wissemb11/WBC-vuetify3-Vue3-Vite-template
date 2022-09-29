import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

//////////////////////////The Vue APP named WBCApp/////////////////////////////

//creation of Vue APP named WBCApp
const WBCApp = createApp(App);

// install plugin to WBCApp before mounted i
import WBC_plugin from "wbc-ui3";

//import all vuetify components
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

WBCApp.use(vuetify);

WBCApp.use(WBC_plugin, { ...components });
alert(JSON.stringify(components));

// Mount Vue application to the element id
WBCApp.mount("#app");
