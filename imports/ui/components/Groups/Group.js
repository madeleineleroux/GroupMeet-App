import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {fetchGroup, getGroup, updateGroup} from '../../actions/GroupsAction'
import {connect} from "react-redux";
import { Meteor } from 'meteor/meteor';
import Popup from 'react-popup';

class Group extends Component {

    onSubmitCreate(e) {
        e.preventDefault();
        if (Meteor.users.findOne({ _id: Meteor.userId()}).profile.group.length > 0){
            const ele = $(e.target);
            const name = ele.find("#createGroup").val();
            updateGroup(name);
            Meteor.users.update({_id: Meteor.userId()}, 
            {$set: {"profile.group": name}});
            Popup.alert(`You've just created the group ${name}!`)
        }
        else {
            Popup.alert("Sorry, we couldn't create that group.")
        }
    }

    onSubmitJoin(e) {
        e.preventDefault();
        const ele = $(e.target);
        const name = ele.find("#joinGroup").val();
        //Check if the group exists
        return new Promise((resolve, reject) => {
            Meteor.call('fetchGroups', (error, result) => {
              if (error) reject(error);
              console.log(result)
              var reformattedArray = result.map(obj =>{ 
                var rObj = {};
                rObj = obj._id;
                return rObj;
             });
             if (reformattedArray.includes(name)) {
                Meteor.users.update({_id: Meteor.userId()}, 
                {$set: {"profile.group": name}});
                alert(`You've just joined ${name}!`)
             }
             else {
                 alert(`Sorry, the group ${name} doesn't exist. You can create it above!`)
             }

            });
        });
    }

    render() {
        return (
            <div>
                <h2 className = 'loginRedirect'>Create or Join a Group</h2>

                <Form onSubmit={this.onSubmitCreate} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleCreate">Create a group</Label>
                        <Input type="text" name="text" id="createGroup" placeholder="Create a group name" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

                <Form onSubmit={this.onSubmitJoin} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleJoin">Join a group</Label>
                        <Input type="text" name="text" id="joinGroup" placeholder="Enter the group to join" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getGroup: (name) => dispatch(getGroup(name)),
    updateGroup: (name) => dispatch(updateGroup(name)),
    fetchGroup: () => dispatch(fetchGroup())
})

export default connect(null, mapDispatchToProps)(Group)