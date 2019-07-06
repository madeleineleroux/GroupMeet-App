import React from 'react';
import { connect } from 'react-redux';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {toggleStatus} from "../../actions/TaskAction";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //status, text, prints correctly, nothing else
    handleClick() {
        console.log(this.props.member);
        this.props.toggleStatus(this.props.id, this.props.member);
    };

    render() {
        return (
            <ListGroupItem onClick={this.handleClick}
                           style={{
                               textDecoration: this.props.status % 2 === 1 ? 'line-through' : 'none'}}>
                {this.props.text}
            </ListGroupItem>
        )
    }
}

export default connect(null,{toggleStatus})(Task)