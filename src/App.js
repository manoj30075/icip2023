import React from "react";
import "./App.css";
import ICIPNavbar from "./navbar";
import LandingPage from "./landingPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ICIPNavbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
