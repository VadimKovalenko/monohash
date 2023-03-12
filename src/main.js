import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css"; // core
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import "./assets/main.css"; // custom

import Fieldset from "primevue/fieldset/sfc";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Card from "primevue/card";

const app = createApp(App);
app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Fieldset", Fieldset);
app.component("Textarea", Textarea);
app.component("Button", Button);
app.component("Card", Card);

app.mount("#app");
