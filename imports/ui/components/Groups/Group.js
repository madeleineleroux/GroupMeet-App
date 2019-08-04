import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {fetchGroup, updateGroup} from '../../actions/GroupsAction'
import {connect} from "react-redux";

class Group extends Component {

    onSubmitCreate(e) {
        e.preventDefault();
        const ele = $(e.target);
        const name = ele.find("#createGroup").val();
        updateGroup(name);
    }

    render() {
        return (
            <div>
                <h2 className = 'loginRedirect'>Join or Create a Group</h2>

                <Form onSubmit={this.onSubmitCreate} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleCreate">Create a group</Label>
                        <Input type="text" name="text" id="createGroup" placeholder="Enter a group name" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

                <Form onSubmit={this.onSubmitJoin} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleJoin">Join a group</Label>
                        <Input type="text" name="text" id="joinGroup" placeholder="Enter a group name" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: () => {
            dispatch(fetchGroup())
        },
        updateGroup: name => {
            dispatch(updateGroup(name))
        }

    };
};

export default connect(null, mapDispatchToProps)(Group)