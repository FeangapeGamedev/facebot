import React, { Component } from "react";
import Cardlist from "../components/CarList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

// Main App component that manages state and renders the UI
class App extends Component {
  constructor() {
    super();
    // Initialize state with robots data and an empty search field
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  // Fetch user data from API when the component mounts
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // Parse the JSON from the response
      .then(users => {
        this.setState({ robots: users });  // Update the state with the fetched users
      });
  }

  // Handler for updating the search field state when user types
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    // Filter robots based on the search field input (case-insensitive)
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f-headline yellow mt4 mb3">FaceBots</h1>
        {/* SearchBox receives the handler as a prop */}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/* Cardlist receives the filtered robots as a prop */}
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;