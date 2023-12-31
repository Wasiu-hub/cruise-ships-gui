function Controller() {
  this.initialiseSea();
}
Controller.prototype.initialiseSea = function initialiseSea() {
  const backgrounds = ["./images/water0.png", "./images/water1.png"];

  let backgroundIndex = 0;

  window.setInterval(() => {
    document.querySelector("#viewport").style.backgroundImage = `url('${
      backgrounds[backgroundIndex % backgrounds.length]
    }')`;

    backgroundIndex += 1;
  }, 1000);
};

Controller.prototype.renderPorts = function renderPorts(ports) {
  const portsElement = document.querySelector("#ports");
  portsElement.style.width = "0px";

  ports.forEach((port, index) => {
    const newPortElement = document.createElement("div");
    const portsElementWidth = parseInt(portsElement.style.width, 10);

    newPortElement.className = "port";
    newPortElement.dataset.portName = port.name;
    newPortElement.dataset.portIndex = index;

    portsElement.appendChild(newPortElement);
    portsElement.style.width = `${portsElementWidth + 256}px`;
  });
};
