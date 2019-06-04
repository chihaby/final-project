import React, { Component, createContext } from 'react';
// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
    state = {
        library: {
            drivers: [],
            incrementLikes: (id) => {
                const driver = (this.state.library.drivers.find(search => search.id === id)) ? this.state.library.drivers.findIndex(search => search.id === id) : null;
                if (driver === null) {
                    const { drivers } = this.state.library;
                    drivers.push({
                        id,
                        likes: 1
                    });
                    this.setState({
                        drivers
                    });
                } else {
                    const newState = [
                        ...this.state.library.drivers.slice(0, driver),
                        {
                            id,
                            likes: this.state.library.drivers[driver].likes + 1
                        },
                        ...this.state.library.drivers.slice(driver + 1)
                    ];
                    this.setState({
                        library: {
                            ...this.state.library,
                            drivers: newState
                        }
                    });
                }
            }
        },

        ridersLibrary: {
            riders: [],
            incrementLikes: (id) => {
                const rider = (this.state.ridersLibrary.riders.find(search => search.id === id)) ? this.state.ridersLibrary.riders.findIndex(search => search.id === id) : null;
                if (rider === null) {
                    const { riders } = this.state.ridersLibrary;
                    riders.push({
                        id,
                        likes: 1
                    });
                    this.setState({
                        riders
                    });
                } else {
                    const newState = [
                        ...this.state.ridersLibrary.riders.slice(0, rider),
                        {
                            id,
                            likes: this.state.ridersLibrary.riders[rider].likes + 1
                        },
                        ...this.state.ridersLibrary.riders.slice(rider + 1)
                    ];
                    this.setState({
                        ridersLibrary: {
                            ...this.state.ridersLibrary,
                            riders: newState
                        }
                    });
                }
            }
        }
    };

    render() {
        return (
            <Provider
                value={{
                    library: this.state.library,
                    ridersLibrary: this.state.ridersLibrary
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ConfigProvider };
export default Consumer;

