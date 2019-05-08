import React, {Component, createContext} from 'react';
// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
    state = {
        library: {
            drivers: [],
            incrementLikes: (id) => {
                const book = (this.state.library.drivers.find(search => search.id === id)) ? this.state.library.drivers.findIndex(search => search.id === id) : null;
                if (driver === null) {
                    const {drivers} = this.state.library;
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
            //add incremetRiderLikes function
        }
    };

    render() {
        return (
            <Provider
                value={{
                    library: this.state.library
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ConfigProvider };

export default Consumer;