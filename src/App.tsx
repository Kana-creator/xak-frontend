import React from "react";
import "./style.css";
import HomePage from "./components/pages/home-page";
class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
