import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Users = new Mongo.Collection('users');
// https://stackoverflow.com/questions/10506878/how-to-toggle-a-boolean-field-in-an-array-element-in-mongodb

//update the return values
Meteor.methods({
    addTask(memberId, task) {
        console.log(task);
        Users.update({_id: memberId}, { $addToSet: { tasks: task }}, { upsert: false } );
        return;
    },

    updateTaskStatus(id) {
        Users.update({tasks: {$elemMatch: {taskId: id }}}, { $inc: { "tasks.$.status": 1 } });
        return;
    },
    fetchAllTasks(){
        const allUsers = Users.find({});
        let userObj = {};

        allUsers.forEach((user => {
            userObj[user._id] = {
                name: user.name,
                tasks: user.tasks
            }
        }));

        return userObj;
    }
});

export default Users;