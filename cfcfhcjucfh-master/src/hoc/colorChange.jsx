import React, {Component} from 'react';
import './../app.css';

const ColorChange = (WrappedComponent) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                color: "dark",
                color2:'light',
            }
        }

        handleChangeColor (color){
            this.setState({color});
        }

        render() {
            return (
                <WrappedComponent {...this.props} color={this.state} onClick = {() => this.setState(this.state.color2)} changeColor={() => this.handleChangeColor(this.state.color !== this.setState)}/>
            );
        }

    }
};

export default ColorChange;