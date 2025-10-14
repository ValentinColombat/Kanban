import { mount } from "svelte";
import App from "./App.svelte";

import "./assets/reset.css";
import "./assets/app.css";

const target = document.getElementById("app");
mount(App, { target });
