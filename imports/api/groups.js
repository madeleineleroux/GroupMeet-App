import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Groups = new Mongo.Collection('groups');
export default Groups;

Meteor.methods({
    updateGroups(name) {
        Groups.upsert({_id: name}, { upsert: true });
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.group": name}});
        return name;
    },
    fetchGroups() {
        return Groups.find({}).fetch();
    },
    getGroup(name) {
        return Groups.findOne({_id: name});
    }
});