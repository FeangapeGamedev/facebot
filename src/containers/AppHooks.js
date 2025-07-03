import React, { useState, useEffect } from "react";
import Cardlist from "../components/CarList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

// App component using React Hooks for state and side effects
function AppHooks() {
    // State for the list of robots and the search input
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");

    // Fetch robot data from API on component mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []); // Empty dependency array ensures this runs once

    // Update searchfield state when user types in the search box
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    // Filter robots based on the search input (case-insensitive)
    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    // Show loading message while robots are being fetched
    if (!robots.length) {
        return <h1>Loading</h1>;
    }

    // Main UI rendering
    return (
        <div className="tc">
            <h1 className="f-headline yellow mt4 mb3">FaceBots</h1>
            {/* SearchBox receives the handler as a prop */}
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                {/* Cardlist receives the filtered robots as a prop */}
                <Cardlist robots={filteredRobots} />
            </Scroll>
        </div>
    );
}

export default AppHooks;