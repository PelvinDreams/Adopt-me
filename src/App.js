const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, "Adopt Me!"), // corrected null for attributes
    React.createElement(pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(pet, {
      animal: "Bird",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Corrected ReactDom to ReactDOM
root.render(React.createElement(App));
