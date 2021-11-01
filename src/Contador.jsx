import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: this.props.numeroInicial}
    }

    add = () => {
        this.setState({
          number: this.state.number + 1
        })
      }

    render () {
        return (
            <div className="App">
                <p>{this.state.number}</p>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Contador;