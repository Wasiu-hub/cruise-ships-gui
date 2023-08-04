function Controller() {
  this.initaliseSea();
}

Controller.prototype.initaliseSea = function initaliseSea() {
  const backgrounds = ["./images/water0.png", "./images/water1.png"];

  let backgroundIndex = 0;

  window.setInterval(() => {
    document.querySelector("#viewport").style.backgroundImage = `url('${
      backgrounds[backgroundIndex % backgrounds.length]
    }')`;

    backgroundIndex += 1;
  }, 1000);
};
