import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {fetchGroup, getGroup, updateGroup} from '../../actions/GroupsAction'
import {connect} from "react-redux";
import { Meteor } from 'meteor/meteor';
import Popup from 'react-popup';
import Helmet from "react-helmet";
import {Redirect} from 'react-router-dom'
import Groups from '../../../api/groups';

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect : false
        };
        this.onSubmitCreate = this.onSubmitCreate.bind(this);
        this.onSubmitJoin = this.onSubmitJoin.bind(this);
    }

    componentWillMount(){
        this.forceUpdate();
    }

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
            this.setState({redirect: true});
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
              var reformattedArray = result.map(obj =>{ 
                var rObj = {};
                rObj = obj._id;
                return rObj;
             });
             if (reformattedArray.includes(name)) {
                Meteor.users.update({_id: Meteor.userId()}, 
                {$set: {"profile.group": name}});
                alert(`You've just joined ${name}!`)
                this.setState({redirect: true});
             }
             else {
                 alert(`Sorry, the group ${name} doesn't exist. You can create it above!`)
             }

            });
        });
    }

    render() {
        var screenHeight = screen.height;
        if (screenHeight < 800) {
            $('body').css('zoom', 0.8);
        } else {
            $('body').css('zoom', 1);
        }

        if (this.state.redirect) {
            return <Redirect to='/welcome' />
        }

        else {
            return (
                <div>
                    <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
                    <div id="allGroup">
                        <h2 id="groupHeader" className = 'loginRedirect'>Create or Join a Group</h2>
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
}

const mapDispatchToProps = dispatch => ({
    getGroup: (name) => dispatch(getGroup(name)),
    updateGroup: (name) => dispatch(updateGroup(name)),
    fetchGroup: () => dispatch(fetchGroup())
})

export default connect(null, mapDispatchToProps)(Group)