import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Users = new Mongo.Collection('users_tasks');
// https://stackoverflow.com/questions/10506878/how-to-toggle-a-boolean-field-in-an-array-element-in-mongodb

//only runs on the server
if (Meteor.isServer) {
    Meteor.publish('users_tasks', function userPublication() {
        return Users.find();
    })
}
Meteor.methods({
    editTaskText(id, member, text) {
        Meteor.users.update({ _id: member, "profile.tasks.taskId": id }, { $set: {"profile.tasks.$.description" : text}});
        return;
    },
    addTask(memberId, task) {
        let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
        group = group.profile.group;
        Meteor.users.update({_id: memberId}, { $addToSet: { "profile.tasks": task }}, { upsert: false } );
        let newTask = Object.assign({}, task, {user: memberId, group: group});
        Users.insert(newTask);
        return;
    },

    updateTaskStatus(id) {
        Meteor.users.update({"profile.tasks": {$elemMatch: {taskId: id }}}, { $inc: { "profile.tasks.$.status": 1 } });
        return;
    },

    deleteTask(member, id) {
        Meteor.users.update({_id: member}, { $pull: { "profile.tasks": {taskId: id}}});
        return;
    },

    // fix this
    clearTasks(member) {
        Meteor.users.update({_id: member}, {$set: {"profile.tasks": []}});
        return;
    },

    fetchAllTasks(){
        let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
        let userObj = {};

        if (typeof group != "undefined") {
            //get all the members in the group
            group = group.profile.group;
            const allUsers = Meteor.users.find({"profile.group" : group});

            // get just the member ids
            let listOfUsers = [];

            allUsers.forEach(user => {
                listOfUsers.push(user._id)
            });

            //get all the tasks
            listOfUsers.map( user => {
                let info =  Meteor.users.find({_id: user}).fetch()[0];
                userObj[user] = {
                    tasks: info.profile.tasks,
                    group: group,
                    name: info.profile.name,
                    avatar: info.profile.avatar
                };
            });
        }

        return userObj;
    }
});

export default Users;