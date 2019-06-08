import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Day from './Day';

class Calendar extends Component {

    render() {
        return (
            <div>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
            </div>
        );
    }
}

Calendar.propTypes = {};

export default Calendar;