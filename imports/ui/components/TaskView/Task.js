import React from 'react';
import { connect } from 'react-redux';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {toggleStatus} from "../../actions/TaskAction";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleStatus(this.props.id);
    };

    render() {
        return (
            <ListGroupItem onClick={this.handleClick}
                           style={{
                               textDecoration: this.props.status ? 'line-through' : 'none'}}>
                {this.props.text}
            </ListGroupItem>
        )
    }
}

export default connect(null,{toggleStatus})(Task)