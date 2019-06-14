import React from 'react'
import { toggleAvail } from "../actions/DayAction";
import { connect } from 'react-redux';



class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleAvail(this.props.id);
        console.log(this.props.id);
        console.log(this.props.availability);
    };

    render() {
        return (
            <div>
            <button className = 'cell' onClick={this.handleClick}
        style={{background: this.props.availability ? '#1CCAD8' : '#E2E2E2'}}>
        {/*{this.props.availability ? 'Available' : 'Unavailable'}*/}
        {this.props.id}:00
        </button>
        </div>
    )
    }
}



const mapStateToProps = state => {
    return {
        WeekReducer: state.WeekReducer
    }
};

export default connect(mapStateToProps, { toggleAvail })(Cell)