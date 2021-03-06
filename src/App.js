import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// This approach is used for defining stateless components
/* function App() {
    return (
        <React.Fragment>
            <NavBar />
            <main className="container">
                <Counters />
            </main>
        </React.Fragment>
    );
} */

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(props) {
        super(props);
        console.log("App - Constructor", this.props);
    }

    componentDidMount() {
        console.log("App - Mounted");
        // Ajax Call
        // this.setState({}) // set the state with new data from Ajax call
    }

    handleReset = () => {
        console.log("handleReset clicked");
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        console.log("handleDelete Called", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleIncrement = counter => {
        console.log("handleIncrement Called", counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    render() {
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
