import Users from '../api/users';

Meteor.publish('tasks', function() {
    console.log('pub');
    let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];
    group = group.profile.group;

    const allTasks = Users.find({group: group}).fetch();
    return allTasks;


});