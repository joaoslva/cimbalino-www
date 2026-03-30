import GUI from "lil-gui";

class Gui {
  constructor(app) {
    this.app = app;
    this.gui = new GUI();
  }

  init() {
    const state = { axis: true };

    this.gui.add(state, "axis").name("Show axis").onChange((value) => {
      this.app.axis.visible = value;
    });
  }
}

export { Gui };
