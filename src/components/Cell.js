import React from 'react'
import { toggleAvail } from "../actions/DayAction";
import { connect } from 'react-redux';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {avail: this.props.time};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.time);
        toggleAvail(this.props.name, this.props.time);
        console.log(this.props.time);
    }

    render() {
        console.log(this.props.time);
        return (
            <div>
                <button id='cell' onClick={this.handleClick}>
                    {this.props.name}
                </button>
            </div>
        )
    }

}

export default connect(null,{ toggleAvail })(Cell)