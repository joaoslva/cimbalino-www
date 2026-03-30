import { App } from "./App.js";
import { Scene } from "./Scene.js";

const app = new App();
app.init();

const scene = new Scene(app);
scene.build();

app.setScene(scene);
app.render();
