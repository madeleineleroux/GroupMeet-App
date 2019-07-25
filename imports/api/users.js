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
        //console.log(text);
        Users.update({ _id: member, "tasks.taskId": id }, { $set: {"tasks.$.description" : text}});
        return;
    },
    addTask(memberId, task) {
        //console.log(task);
        Users.update({_id: memberId}, { $addToSet: { tasks: task }}, { upsert: false } );
        return;
    },

    updateTaskStatus(id) {
        Users.update({tasks: {$elemMatch: {taskId: id }}}, { $inc: { "tasks.$.status": 1 } });
        return;
    },

    deleteTask(member, id) {
        //console.log(member, id);
        Users.update({_id: member}, { $pull: { tasks: {taskId: id}}});
        return;
    },

    clearTasks(member) {
        //console.log(member);
        Users.update({_id: member}, {$set: {tasks: []}});
        return;
    },

    fetchAllTasks(){
        const allUsers = Users.find({});
        let userObj = {};

        allUsers.forEach((user => {
            userObj[user._id] = {
                name: user.name,
                avatar:user.avatar,
                tasks: user.tasks
            }
        }));

        return userObj;
    }
});

export default Users;