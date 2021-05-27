import app2 from "app2/app";

const myComponent = app2();

const root = document.getElementById("root");
root.appendChild(myComponent);


myComponent.addEventListener("change-hello-name", (event) => {
  console.log("alterou app1", event.detail);
});