import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {fetchGroup, getGroup, updateGroup} from '../../actions/GroupsAction'
import {connect} from "react-redux";
import { Meteor } from 'meteor/meteor';
import Popup from 'react-popup';
import Helmet from "react-helmet";

class Group extends Component {

    onSubmitCreate(e) {
        e.preventDefault();
        let group = Meteor.users.find({ _id: Meteor.userId()}).fetch()[0];
        group = group.profile.group;
        if (group === null){
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
                <h2 id="groupHeader" className = 'loginRedirect'>Create or Join a Group</h2>
                <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
                <div id="allGroup">
                <div className="createGroup" id="firstGroup">
                <Form onSubmit={this.onSubmitCreate} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleCreate">Create a group</Label>
                        <Input type="text" name="text" id="createGroup" placeholder="Create a group name" />
                    </FormGroup>
                    <Button id="regButton">Submit</Button>
                </Form>
                </div>

                <div className="createGroup">
                <Form onSubmit={this.onSubmitJoin} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleJoin">Join a group</Label>
                        <Input type="text" name="text" id="joinGroup" placeholder="Enter the group to join" />
                    </FormGroup>
                    <Button id="regButton">Submit</Button>
                </Form>
                </div>
                </div>

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