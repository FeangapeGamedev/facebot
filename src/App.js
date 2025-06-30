import React, { Component } from "react";
import Cardlist from "./CarList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

// Main App component that manages state and renders the UI
class App extends Component {
  constructor() {
    super();
    // Initialize state with robots data and an empty search field
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  // Handler for updating the search field state when user types
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    // Filter robots based on the search field input (case-insensitive)
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>FaceBots</h1>
        {/* SearchBox receives the handler as a prop */}
        <SearchBox searchChange={this.onSearchChange} />
        {/* Cardlist receives the filtered robots as a prop */}
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}

export default App;