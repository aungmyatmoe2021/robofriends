import React, { Component } from "react";
import CardList from '../components/CardList';
import Header from "../components/Header";
// import { robots } from './robots';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users, isLoaded: true }))
    }

    handleChanged = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !this.state.isLoaded ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <Header />
                    <SearchBox searchChanged={this.handleChanged} />
                    <Scroll>
                        {/* <ErrorBoundry> */}
                        <CardList robots={filteredRobots} />
                        {/* </ErrorBoundry> */}
                    </Scroll>
                </div>
            );
    }
}

export default App;