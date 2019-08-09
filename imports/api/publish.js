import Users from './users';
import {Meteor} from "meteor/meteor";
import GroupSchedule from "./group";

Meteor.publish('tasks', function() {
    let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
    group = group.profile.group;
    const allUsers = Meteor.users.find({"profile.group" : group});
    return allUsers;
});

Meteor.publish('group', function() {
    let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
    if (typeof group !== undefined) {
        group = group.profile.group;
        const allGroup = GroupSchedule.find({group: group});
        return allGroup;
    } else {
        return {};
    }
 });

Meteor.publish('group-indi', function(date) {
    let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
    group = group.profile.group;
    const allGroup = GroupSchedule.find({group: group, date:date});
    return allGroup;
});