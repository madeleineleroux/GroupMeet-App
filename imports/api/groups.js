import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Groups = new Mongo.Collection('groups');
export default Groups;

Meteor.methods({
    updateGroups(name) {
        Groups.insert({_id: name}, { upsert: true });
        return group;
    },

    fetchGroups() {
        return Groups.find({}).fetch();
    },
});